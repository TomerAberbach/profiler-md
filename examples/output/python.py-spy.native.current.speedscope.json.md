# Sampling profile

Took 34s over 340 samples (100.0ms per sample).

| Category         |     % |   Time | Samples |
| ---------------- | ----: | -----: | ------: |
| Third-party      | 85.0% | 28.90s |     289 |
| Standard library |  6.8% |  2.30s |      23 |
| Native           |  5.3% |  1.80s |      18 |
| Ours             |  2.9% |     1s |      10 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                                                                        | Location                                                                                         |
| ---: | ------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 7.1% |   2.40s |      24 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 5.3% |   1.80s |      18 | `CPyDef_parse___Parser____addtoken`                                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 5.0% |   1.70s |      17 | `CPyDef_parse___Parser___push`                                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 4.7% |   1.60s |      16 | `CPyDef_driver___Driver___parse_tokens`                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 4.4% |   1.50s |      15 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 3.5% |   1.20s |      12 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__`              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 3.2% |   1.10s |      11 | `parse`                                                                         | `/usr/lib/python3.11/ast.py`                                                                     |
| 2.9% |      1s |      10 | `__init__`                                                                      | `<string>`                                                                                       |
| 2.4% | 800.0ms |       8 | `CPyDef_parse___Parser___pop`                                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.4% | 800.0ms |       8 | `CPyDef_black___get_features_used`                                              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.1% | 700.0ms |       7 | `CPyDef_lines___Line_____str__`                                                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.1% | 700.0ms |       7 | `CPyDef_pytree___Node___update_sibling_maps`                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.8% | 600.0ms |       6 | `pytree___Leaf_traverse`                                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.5% | 500.0ms |       5 | `CPyDef_lines___Line___contains_implicit_multiline_string_with_comments`        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.5% | 500.0ms |       5 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% | 400.0ms |       4 | `_compile_bytecode`                                                             | `<frozen importlib._bootstrap_external>`                                                         |
| 1.2% | 400.0ms |       4 | `CPyDef_comments___convert_one_fmt_off_pair`                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% | 400.0ms |       4 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__`              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% | 400.0ms |       4 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__`          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% | 400.0ms |       4 | `CPyDef_strings___sub_twice`                                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

#### Categories

##### Third-party

|    % |    Time | Samples | Function                                                                        | Location                                                                                         |
| ---: | ------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 7.1% |   2.40s |      24 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 5.3% |   1.80s |      18 | `CPyDef_parse___Parser____addtoken`                                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 5.0% |   1.70s |      17 | `CPyDef_parse___Parser___push`                                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 4.7% |   1.60s |      16 | `CPyDef_driver___Driver___parse_tokens`                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 4.4% |   1.50s |      15 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 3.5% |   1.20s |      12 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__`              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.4% | 800.0ms |       8 | `CPyDef_parse___Parser___pop`                                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.4% | 800.0ms |       8 | `CPyDef_black___get_features_used`                                              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.1% | 700.0ms |       7 | `CPyDef_lines___Line_____str__`                                                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.1% | 700.0ms |       7 | `CPyDef_pytree___Node___update_sibling_maps`                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.8% | 600.0ms |       6 | `pytree___Leaf_traverse`                                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.5% | 500.0ms |       5 | `CPyDef_lines___Line___contains_implicit_multiline_string_with_comments`        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.5% | 500.0ms |       5 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% | 400.0ms |       4 | `CPyDef_comments___convert_one_fmt_off_pair`                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% | 400.0ms |       4 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__`              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% | 400.0ms |       4 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__`          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% | 400.0ms |       4 | `CPyDef_strings___sub_twice`                                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 0.9% | 300.0ms |       3 | `CPyDef_pytree___Leaf_____init__`                                               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 0.9% | 300.0ms |       3 | `CPyDef_pytree___convert`                                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 0.9% | 300.0ms |       3 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__`         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Standard library

|    % |    Time | Samples | Function                    | Location                                  |
| ---: | ------: | ------: | --------------------------- | ----------------------------------------- |
| 3.2% |   1.10s |      11 | `parse`                     | `/usr/lib/python3.11/ast.py`              |
| 1.2% | 400.0ms |       4 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>`  |
| 0.6% | 200.0ms |       2 | `_create_fn`                | `/usr/lib/python3.11/dataclasses.py`      |
| 0.3% | 100.0ms |       1 | `<genexpr>`                 | `<frozen importlib._bootstrap_external>`  |
| 0.3% | 100.0ms |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`           |
| 0.3% | 100.0ms |       1 | `spec_from_file_location`   | `<frozen importlib._bootstrap_external>`  |
| 0.3% | 100.0ms |       1 | `__hash__`                  | `/usr/lib/python3.11/enum.py`             |
| 0.3% | 100.0ms |       1 | `isEnabledFor`              | `/usr/lib/python3.11/logging/__init__.py` |
| 0.3% | 100.0ms |       1 | `__exit__`                  | `/usr/lib/python3.11/contextlib.py`       |

##### Native

|    % |    Time | Samples | Function         | Location                                         |
| ---: | ------: | ------: | ---------------- | ------------------------------------------------ |
| 0.9% | 300.0ms |       3 | `0x7fb1e8d49480` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| 0.6% | 200.0ms |       2 | `0x7fb1e8c8e109` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| 0.3% | 100.0ms |       1 | `read`           | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| 0.3% | 100.0ms |       1 | `malloc`         | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| 0.3% | 100.0ms |       1 | `0x7fb1e8d4954a` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| 0.3% | 100.0ms |       1 | `0x7fb1e8f27b1d` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
| 0.3% | 100.0ms |       1 | `0x7fb1e8f27b74` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
| 0.3% | 100.0ms |       1 | `0x7fb1e8f289b0` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
| 0.3% | 100.0ms |       1 | `0x7fb1e8f27d07` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
| 0.3% | 100.0ms |       1 | `0x7fb1e8d48d8c` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| 0.3% | 100.0ms |       1 | `realloc`        | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| 0.3% | 100.0ms |       1 | `free`           | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| 0.3% | 100.0ms |       1 | `0x7fb1e8d48ac8` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| 0.3% | 100.0ms |       1 | `0x7fb1e8d48d24` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| 0.3% | 100.0ms |       1 | `0x7fb1e8d48d26` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |

##### Ours

|    % | Time | Samples | Function   | Location   |
| ---: | ---: | ------: | ---------- | ---------- |
| 2.9% |   1s |      10 | `__init__` | `<string>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |  Time | Samples | Location                        |
| -----: | ----: | ------: | ------------------------------- |
| 100.0% | 1.10s |      11 | `/usr/lib/python3.11/ast.py:50` |

##### `__init__` (`<string>`)

|     % |    Time | Samples | Location     |
| ----: | ------: | ------: | ------------ |
| 30.0% | 300.0ms |       3 | `<string>:4` |
| 20.0% | 200.0ms |       2 | `<string>:5` |
| 10.0% | 100.0ms |       1 | `<string>:8` |
| 10.0% | 100.0ms |       1 | `<string>:7` |
| 10.0% | 100.0ms |       1 | `<string>:9` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % |    Time | Samples | Location                                     |
| -----: | ------: | ------: | -------------------------------------------- |
| 100.0% | 400.0ms |       4 | `<frozen importlib._bootstrap_external>:729` |

##### `_create_fn` (`/usr/lib/python3.11/dataclasses.py`)

|      % |    Time | Samples | Location                                 |
| -----: | ------: | ------: | ---------------------------------------- |
| 100.0% | 200.0ms |       2 | `/usr/lib/python3.11/dataclasses.py:433` |

##### `<genexpr>` (`<frozen importlib._bootstrap_external>`)

|      % |    Time | Samples | Location                                     |
| -----: | ------: | ------: | -------------------------------------------- |
| 100.0% | 100.0ms |       1 | `<frozen importlib._bootstrap_external>:134` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Location                            |
| -----: | ------: | ------: | ----------------------------------- |
| 100.0% | 100.0ms |       1 | `<frozen importlib._bootstrap>:241` |

##### `spec_from_file_location` (`<frozen importlib._bootstrap_external>`)

|      % |    Time | Samples | Location                                     |
| -----: | ------: | ------: | -------------------------------------------- |
| 100.0% | 100.0ms |       1 | `<frozen importlib._bootstrap_external>:803` |

##### `__hash__` (`/usr/lib/python3.11/enum.py`)

|      % |    Time | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 100.0ms |       1 | `/usr/lib/python3.11/enum.py:1230` |

##### `isEnabledFor` (`/usr/lib/python3.11/logging/__init__.py`)

|      % |    Time | Samples | Location                                       |
| -----: | ------: | ------: | ---------------------------------------------- |
| 100.0% | 100.0ms |       1 | `/usr/lib/python3.11/logging/__init__.py:1742` |

##### `__exit__` (`/usr/lib/python3.11/contextlib.py`)

|      % |    Time | Samples | Location                                |
| -----: | ------: | ------: | --------------------------------------- |
| 100.0% | 100.0ms |       1 | `/usr/lib/python3.11/contextlib.py:551` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |  Time | Samples | Caller                                  | Location                                                                                         |
| -----: | ----: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2.40s |      24 | `CPyDef_driver___TokenProxy_____next__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser____addtoken` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |  Time | Samples | Caller                             | Location                                                                                         |
| -----: | ----: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.80s |      18 | `CPyDef_parse___Parser___addtoken` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser___push` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |  Time | Samples | Caller                              | Location                                                                                         |
| -----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.70s |      17 | `CPyDef_parse___Parser____addtoken` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_driver___Driver___parse_tokens` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |  Time | Samples | Caller                                  | Location                                                                                         |
| -----: | ----: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.60s |      16 | `CPyDef_driver___Driver___parse_string` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                                                                       | Location                                                                                         |
| ----: | ------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 80.0% |   1.20s |      12 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__`      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 20.0% | 300.0ms |       3 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |  Time | Samples | Caller                                                                             | Location                                                                                         |
| -----: | ----: | ------: | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.20s |      12 | `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |  Time | Samples | Caller                                   | Location                                                                                         |
| -----: | ----: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.10s |      11 | `CPyDef_parsing____parse_single_version` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `__init__` (`<string>`)

|     % |    Time | Samples | Caller                                                                 | Location                                                                                         |
| ----: | ------: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 40.0% | 400.0ms |       4 | `__init__`                                                             | `<string>`                                                                                       |
| 30.0% | 300.0ms |       3 | `CPyDef_lines___LinesBlock___all_lines`                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 20.0% | 200.0ms |       2 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 10.0% | 100.0ms |       1 | `CPyDef_lines___EmptyLineTracker___maybe_empty_lines`                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser___pop` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                              | Location                                                                                         |
| -----: | ------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 800.0ms |       8 | `CPyDef_parse___Parser____addtoken` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___get_features_used` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                                  | Location                                                                                         |
| -----: | ------: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 800.0ms |       8 | `CPyDef_black___detect_target_versions` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_lines___Line_____str__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                             | Location                                                                                         |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| 42.9% | 300.0ms |       3 | `CPyDef_lines___line_to_string`    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 42.9% | 300.0ms |       3 | `CPyDef_black____format_str_once`  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 14.3% | 100.0ms |       1 | `CPyDef_linegen___run_transformer` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___Node___update_sibling_maps` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                                | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 700.0ms |       7 | `CPyDef_pytree___Base___prev_sibling` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `pytree___Leaf_traverse` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                           | Location                                                                                         |
| ----: | ------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------------ |
| 50.0% | 300.0ms |       3 | `CPyDef_nodes___Visitor___visit` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 33.3% | 200.0ms |       2 | `CPy_AddTraceback`               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 16.7% | 100.0ms |       1 | `CPyDef_lines___Line_____str__`  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_lines___Line___contains_implicit_multiline_string_with_comments` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                                                             | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 100.0% | 500.0ms |       5 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                                                          | Location                                                                                         |
| -----: | ------: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 500.0ms |       5 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % |    Time | Samples | Caller     | Location                                 |
| -----: | ------: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 400.0ms |       4 | `get_code` | `<frozen importlib._bootstrap_external>` |

##### `CPyDef_comments___convert_one_fmt_off_pair` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                            | Location                                                                                         |
| -----: | ------: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 400.0ms |       4 | `CPyDef_black____format_str_once` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                            | Location                                                                                         |
| -----: | ------: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 400.0ms |       4 | `CPyDef_black____format_str_once` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                                                                          | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 400.0ms |       4 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_strings___sub_twice` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                                     | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 100.0% | 400.0ms |       4 | `CPyDef_strings___normalize_string_quotes` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___Leaf_____init__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                         | Location                                                                                         |
| ----: | ------: | ------: | ------------------------------ | ------------------------------------------------------------------------------------------------ |
| 66.7% | 200.0ms |       2 | `CPyDef_pytree___convert`      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 33.3% | 100.0ms |       1 | `CPyDef_pytree___Leaf___clone` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___convert` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                          | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 300.0ms |       3 | `CPyDef_parse___Parser___shift` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                                                                          | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 300.0ms |       3 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7fb1e8d49480` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|     % |    Time | Samples | Caller                                   | Location                                                                                         |
| ----: | ------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 33.3% | 100.0ms |       1 | `CPyDef_parse___Parser____addtoken`      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 33.3% | 100.0ms |       1 | `CPyDef_nodes___Visitor___visit_default` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 33.3% | 100.0ms |       1 | `CPyDef_linegen___LineGenerator___line`  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_create_fn` (`/usr/lib/python3.11/dataclasses.py`)

|     % |    Time | Samples | Caller                 | Location                             |
| ----: | ------: | ------: | ---------------------- | ------------------------------------ |
| 50.0% | 100.0ms |       1 | `_frozen_get_del_attr` | `/usr/lib/python3.11/dataclasses.py` |
| 50.0% | 100.0ms |       1 | `_init_fn`             | `/usr/lib/python3.11/dataclasses.py` |

##### `0x7fb1e8c8e109` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller   | Location                              |
| -----: | ------: | ------: | -------- | ------------------------------------- |
| 100.0% | 200.0ms |       2 | `malloc` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `<genexpr>` (`<frozen importlib._bootstrap_external>`)

|      % |    Time | Samples | Caller        | Location                                 |
| -----: | ------: | ------: | ------------- | ---------------------------------------- |
| 100.0% | 100.0ms |       1 | `_path_split` | `<frozen importlib._bootstrap_external>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Caller          | Location                        |
| -----: | ------: | ------: | --------------- | ------------------------------- |
| 100.0% | 100.0ms |       1 | `create_module` | `<frozen importlib._bootstrap>` |

##### `spec_from_file_location` (`<frozen importlib._bootstrap_external>`)

|      % |    Time | Samples | Caller      | Location                                 |
| -----: | ------: | ------: | ----------- | ---------------------------------------- |
| 100.0% | 100.0ms |       1 | `_get_spec` | `<frozen importlib._bootstrap_external>` |

##### `__hash__` (`/usr/lib/python3.11/enum.py`)

|      % |    Time | Samples | Caller                              | Location                                                                                         |
| -----: | ------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `CPyDef_mode___Mode_____contains__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `isEnabledFor` (`/usr/lib/python3.11/logging/__init__.py`)

|      % |    Time | Samples | Caller  | Location                                  |
| -----: | ------: | ------: | ------- | ----------------------------------------- |
| 100.0% | 100.0ms |       1 | `debug` | `/usr/lib/python3.11/logging/__init__.py` |

##### `__exit__` (`/usr/lib/python3.11/contextlib.py`)

|      % |    Time | Samples | Caller                       | Location                                           |
| -----: | ------: | ------: | ---------------------------- | -------------------------------------------------- |
| 100.0% | 100.0ms |       1 | `_close_with_exception_info` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `read` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller     | Location                                 |
| -----: | ------: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 100.0ms |       1 | `get_data` | `<frozen importlib._bootstrap_external>` |

##### `malloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller                       | Location                                                                                         |
| -----: | ------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `CPyDef_strings___sub_twice` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7fb1e8d4954a` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller              | Location                                 |
| -----: | ------: | ------: | ------------------- | ---------------------------------------- |
| 100.0% | 100.0ms |       1 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>` |

##### `0x7fb1e8f27b1d` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

|      % |    Time | Samples | Caller           | Location                                         |
| -----: | ------: | ------: | ---------------- | ------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `0x7fb1e8f0be4c` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `0x7fb1e8f27b74` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

|      % |    Time | Samples | Caller           | Location                                         |
| -----: | ------: | ------: | ---------------- | ------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `0x7fb1e8f0be88` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `0x7fb1e8f289b0` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

|      % |    Time | Samples | Caller           | Location                                         |
| -----: | ------: | ------: | ---------------- | ------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `0x7fb1e8f0da01` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `0x7fb1e8f27d07` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

|      % |    Time | Samples | Caller           | Location                                         |
| -----: | ------: | ------: | ---------------- | ------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `0x7fb1e8f0d955` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `0x7fb1e8d48d8c` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller           | Location                              |
| -----: | ------: | ------: | ---------------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `0x7fb1e8c8e462` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `realloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller                                                               | Location                                                                                         |
| -----: | ------: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `free` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller                                                               | Location                                                                                         |
| -----: | ------: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7fb1e8d48ac8` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller                       | Location                                                                                         |
| -----: | ------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `CPyDef_strings___sub_twice` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7fb1e8d48d24` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller           | Location                              |
| -----: | ------: | ------: | ---------------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `0x7fb1e8c8e462` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7fb1e8d48d26` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller           | Location                              |
| -----: | ------: | ------: | ---------------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `0x7fb1e8c8e462` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |   Time | Samples | Function                                | Location                                                                                         |
| -----: | -----: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |    34s |     340 | `0x7fb1e8c1d24a`                        | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
|  99.1% | 33.70s |     337 | `_run_module_as_main`                   | `<frozen runpy>`                                                                                 |
|  94.1% |    32s |     320 | `CPyDef_black___main`                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  94.1% |    32s |     320 | `CPyPy_black___main`                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  94.1% |    32s |     320 | `new_func`                              | `/venv/lib/python3.11/site-packages/click/decorators.py`                                         |
|  94.1% |    32s |     320 | `invoke`                                | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
|  94.1% |    32s |     320 | `main`                                  | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
|  94.1% |    32s |     320 | `__call__`                              | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
|  94.1% |    32s |     320 | `CPyDef_black___patched_main`           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  94.1% |    32s |     320 | `CPyPy_black___patched_main`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  94.1% |    32s |     320 | `<module>`                              | `/venv/lib/python3.11/site-packages/black/__main__.py`                                           |
|  94.1% |    32s |     320 | `_run_code`                             | `<frozen runpy>`                                                                                 |
|  93.8% | 31.90s |     319 | `CPyDef_black___format_file_contents`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  93.8% | 31.90s |     319 | `CPyDef_black___format_file_in_place`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  93.8% | 31.90s |     319 | `CPyDef_black___reformat_one`           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  93.8% | 31.90s |     319 | `CPyPy_black___reformat_one`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  84.7% | 28.80s |     288 | `CPyDef_black____format_str_once`       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  65.6% | 22.30s |     223 | `CPyDef_black___format_str`             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  33.8% | 11.50s |     115 | `CPyDef_driver___Driver___parse_tokens` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  33.8% | 11.50s |     115 | `CPyDef_driver___Driver___parse_string` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

#### Categories

##### Third-party

|     % |   Time | Samples | Function                                                                        | Location                                                                                         |
| ----: | -----: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 94.1% |    32s |     320 | `CPyDef_black___main`                                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 94.1% |    32s |     320 | `CPyPy_black___main`                                                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 94.1% |    32s |     320 | `new_func`                                                                      | `/venv/lib/python3.11/site-packages/click/decorators.py`                                         |
| 94.1% |    32s |     320 | `invoke`                                                                        | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| 94.1% |    32s |     320 | `main`                                                                          | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| 94.1% |    32s |     320 | `__call__`                                                                      | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| 94.1% |    32s |     320 | `CPyDef_black___patched_main`                                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 94.1% |    32s |     320 | `CPyPy_black___patched_main`                                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 94.1% |    32s |     320 | `<module>`                                                                      | `/venv/lib/python3.11/site-packages/black/__main__.py`                                           |
| 93.8% | 31.90s |     319 | `CPyDef_black___format_file_contents`                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 93.8% | 31.90s |     319 | `CPyDef_black___format_file_in_place`                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 93.8% | 31.90s |     319 | `CPyDef_black___reformat_one`                                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 93.8% | 31.90s |     319 | `CPyPy_black___reformat_one`                                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 84.7% | 28.80s |     288 | `CPyDef_black____format_str_once`                                               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 65.6% | 22.30s |     223 | `CPyDef_black___format_str`                                                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 33.8% | 11.50s |     115 | `CPyDef_driver___Driver___parse_tokens`                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 33.8% | 11.50s |     115 | `CPyDef_driver___Driver___parse_string`                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 33.8% | 11.50s |     115 | `CPyDef_parsing___lib2to3_parse`                                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 29.4% |    10s |     100 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 29.4% |    10s |     100 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Standard library

|     % |    Time | Samples | Function                    | Location                                 |
| ----: | ------: | ------: | --------------------------- | ---------------------------------------- |
| 99.1% |  33.70s |     337 | `_run_module_as_main`       | `<frozen runpy>`                         |
| 94.1% |     32s |     320 | `_run_code`                 | `<frozen runpy>`                         |
|  5.9% |      2s |      20 | `_load_unlocked`            | `<frozen importlib._bootstrap>`          |
|  5.9% |      2s |      20 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
|  5.9% |      2s |      20 | `_find_and_load`            | `<frozen importlib._bootstrap>`          |
|  5.9% |      2s |      20 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  5.3% |   1.80s |      18 | `module_from_spec`          | `<frozen importlib._bootstrap>`          |
|  5.0% |   1.70s |      17 | `create_module`             | `<frozen importlib._bootstrap_external>` |
|  5.0% |   1.70s |      17 | `_get_module_details`       | `<frozen runpy>`                         |
|  3.5% |   1.20s |      12 | `parse`                     | `/usr/lib/python3.11/ast.py`             |
|  3.2% |   1.10s |      11 | `exec_module`               | `<frozen importlib._bootstrap_external>` |
|  2.1% | 700.0ms |       7 | `get_code`                  | `<frozen importlib._bootstrap_external>` |
|  1.8% | 600.0ms |       6 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
|  1.5% | 500.0ms |       5 | `<module>`                  | `/usr/lib/python3.11/json/decoder.py`    |
|  1.5% | 500.0ms |       5 | `<module>`                  | `/usr/lib/python3.11/json/__init__.py`   |
|  1.2% | 400.0ms |       4 | `<module>`                  | `/usr/lib/python3.11/re/__init__.py`     |
|  0.9% | 300.0ms |       3 | `<module>`                  | `/usr/lib/python3.11/contextlib.py`      |
|  0.9% | 300.0ms |       3 | `<module>`                  | `<frozen importlib.util>`                |
|  0.9% | 300.0ms |       3 | `exec_module`               | `<frozen importlib._bootstrap>`          |
|  0.9% | 300.0ms |       3 | `<module>`                  | `<frozen runpy>`                         |

##### Native

|      % |    Time | Samples | Function              | Location                                         |
| -----: | ------: | ------: | --------------------- | ------------------------------------------------ |
| 100.0% |     34s |     340 | `0x7fb1e8c1d24a`      | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|   1.2% | 400.0ms |       4 | `0x7fb1e8f12a55`      | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
|   1.2% | 400.0ms |       4 | `_dl_catch_exception` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|   1.2% | 400.0ms |       4 | `0x7fb1e8f12216`      | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
|   1.2% | 400.0ms |       4 | `0x7fb1e8f12608`      | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
|   1.2% | 400.0ms |       4 | `0x7fb1e8c7b4b8`      | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|   1.2% | 400.0ms |       4 | `_dl_catch_error`     | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|   1.2% | 400.0ms |       4 | `0x7fb1e8c7afa7`      | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|   1.2% | 400.0ms |       4 | `dlopen`              | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|   1.2% | 400.0ms |       4 | `realloc`             | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|   0.9% | 300.0ms |       3 | `malloc`              | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|   0.9% | 300.0ms |       3 | `0x7fb1e8d49480`      | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|   0.9% | 300.0ms |       3 | `0x7fb1e8c8e462`      | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|   0.6% | 200.0ms |       2 | `0x7fb1e8c8e109`      | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|   0.6% | 200.0ms |       2 | `0x7fb1e8f0f074`      | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
|   0.6% | 200.0ms |       2 | `0x7fb1e8f0f0c5`      | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
|   0.3% | 100.0ms |       1 | `read`                | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|   0.3% | 100.0ms |       1 | `0x7fb1e809ad79`      | `<unknown>`                                      |
|   0.3% | 100.0ms |       1 | `0x7fb1e809c0b4`      | `<unknown>`                                      |
|   0.3% | 100.0ms |       1 | `0x7fb1e809b9d2`      | `<unknown>`                                      |

##### Ours

|    % | Time | Samples | Function   | Location   |
| ---: | ---: | ------: | ---------- | ---------- |
| 2.9% |   1s |      10 | `__init__` | `<string>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x7fb1e8c1d24a` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|     % |    Time | Samples | Callee                | Location                        |
| ----: | ------: | ------: | --------------------- | ------------------------------- |
| 99.1% |  33.70s |     337 | `_run_module_as_main` | `<frozen runpy>`                |
|  0.9% | 300.0ms |       3 | `_find_and_load`      | `<frozen importlib._bootstrap>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|     % |  Time | Samples | Callee                | Location         |
| ----: | ----: | ------: | --------------------- | ---------------- |
| 95.0% |   32s |     320 | `_run_code`           | `<frozen runpy>` |
|  5.0% | 1.70s |      17 | `_get_module_details` | `<frozen runpy>` |

##### `CPyDef_black___main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Callee                       | Location                                                                                         |
| ----: | ------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| 99.7% |  31.90s |     319 | `CPyPy_black___reformat_one` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  0.3% | 100.0ms |       1 | `exit`                       | `/venv/lib/python3.11/site-packages/click/core.py`                                               |

##### `CPyPy_black___main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Time | Samples | Callee                | Location                                                                                         |
| -----: | ---: | ------: | --------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |  32s |     320 | `CPyDef_black___main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`)

|     % |   Time | Samples | Callee               | Location                                                                                         |
| ----: | -----: | ------: | -------------------- | ------------------------------------------------------------------------------------------------ |
| 99.7% | 31.90s |     319 | `CPyPy_black___main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |    Time | Samples | Callee               | Location                                                                                         |
| -----: | ------: | ------: | -------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |     32s |     320 | `invoke`             | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
|  99.7% |  31.90s |     319 | `new_func`           | `/venv/lib/python3.11/site-packages/click/decorators.py`                                         |
|   0.3% | 100.0ms |       1 | `CPyPy_black___main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % | Time | Samples | Callee   | Location                                           |
| -----: | ---: | ------: | -------- | -------------------------------------------------- |
| 100.0% |  32s |     320 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % | Time | Samples | Callee | Location                                           |
| -----: | ---: | ------: | ------ | -------------------------------------------------- |
| 100.0% |  32s |     320 | `main` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Callee     | Location                                               |
| ----: | ------: | ------: | ---------- | ------------------------------------------------------ |
| 99.7% |  31.90s |     319 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py`     |
|  0.3% | 100.0ms |       1 | `<module>` | `/venv/lib/python3.11/site-packages/black/__main__.py` |

##### `CPyPy_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Time | Samples | Callee                        | Location                                                                                         |
| -----: | ---: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |  32s |     320 | `CPyDef_black___patched_main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`)

|     % |    Time | Samples | Callee                       | Location                                                                                         |
| ----: | ------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| 99.7% |  31.90s |     319 | `CPyPy_black___patched_main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  0.3% | 100.0ms |       1 | `__call__`                   | `/venv/lib/python3.11/site-packages/click/core.py`                                               |

##### `_run_code` (`<frozen runpy>`)

|     % |    Time | Samples | Callee                       | Location                                                                                         |
| ----: | ------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| 99.7% |  31.90s |     319 | `<module>`                   | `/venv/lib/python3.11/site-packages/black/__main__.py`                                           |
|  0.3% | 100.0ms |       1 | `CPyPy_black___patched_main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_file_contents` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |   Time | Samples | Callee                                           | Location                                                                                         |
| ----: | -----: | ------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 69.9% | 22.30s |     223 | `CPyDef_black___format_str`                      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 30.1% |  9.60s |      96 | `CPyDef_black___check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_file_in_place` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |   Time | Samples | Callee                                | Location                                                                                         |
| -----: | -----: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 31.90s |     319 | `CPyDef_black___format_file_contents` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___reformat_one` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |   Time | Samples | Callee                                | Location                                                                                         |
| -----: | -----: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 31.90s |     319 | `CPyDef_black___format_file_in_place` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyPy_black___reformat_one` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |   Time | Samples | Callee                        | Location                                                                                         |
| -----: | -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 31.90s |     319 | `CPyDef_black___reformat_one` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black____format_str_once` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Callee                                                             | Location                                                                                         |
| ----: | ------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 39.9% |  11.50s |     115 | `CPyDef_parsing___lib2to3_parse`                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 34.7% |     10s |     100 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 12.8% |   3.70s |      37 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  3.8% |   1.10s |      11 | `CPyDef_black___detect_target_versions`                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  2.4% | 700.0ms |       7 | `CPyDef_lines___LinesBlock___all_lines`                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_str` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |   Time | Samples | Callee                            | Location                                                                                         |
| -----: | -----: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 22.30s |     223 | `CPyDef_black____format_str_once` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_driver___Driver___parse_tokens` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Callee                                               | Location                                                                                         |
| ----: | ------: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 53.0% |   6.10s |      61 | `CPyDef_parse___Parser___addtoken`                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 27.8% |   3.20s |      32 | `CPyDef_driver___TokenProxy_____next__`              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  1.7% | 200.0ms |       2 | `CPyDef_driver___Driver____partially_consume_prefix` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  0.9% | 100.0ms |       1 | `pytree___Node_clear`                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  0.9% | 100.0ms |       1 | `new_func`                                           | `/venv/lib/python3.11/site-packages/click/decorators.py`                                         |

##### `CPyDef_driver___Driver___parse_string` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |   Time | Samples | Callee                                  | Location                                                                                         |
| -----: | -----: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 11.50s |     115 | `CPyDef_driver___Driver___parse_tokens` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parsing___lib2to3_parse` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |   Time | Samples | Callee                                  | Location                                                                                         |
| -----: | -----: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 11.50s |     115 | `CPyDef_driver___Driver___parse_string` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Callee                                                                  | Location                                                                                         |
| ----: | ------: | ------: | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 99.0% |   9.90s |      99 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 18.0% |   1.80s |      18 | `CPyDef_lines___Line___append`                                          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  9.0% | 900.0ms |       9 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__`  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  4.0% | 400.0ms |       4 | `CPyDef_nodes___Visitor___visit_default`                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  3.0% | 300.0ms |       3 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__`  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |  Time | Samples | Callee                                                                              | Location                                                                                         |
| -----: | ----: | ------: | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |   10s |     100 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  97.0% | 9.70s |      97 | `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__`       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  96.0% | 9.60s |      96 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__`        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  95.0% | 9.50s |      95 | `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  73.0% | 7.30s |      73 | `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|     % |    Time | Samples | Callee             | Location                                 |
| ----: | ------: | ------: | ------------------ | ---------------------------------------- |
| 90.0% |   1.80s |      18 | `module_from_spec` | `<frozen importlib._bootstrap>`          |
| 55.0% |   1.10s |      11 | `exec_module`      | `<frozen importlib._bootstrap_external>` |
| 15.0% | 300.0ms |       3 | `exec_module`      | `<frozen importlib._bootstrap>`          |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Callee           | Location                        |
| -----: | ------: | ------: | ---------------- | ------------------------------- |
| 100.0% |      2s |      20 | `_load_unlocked` | `<frozen importlib._bootstrap>` |
|   5.0% | 100.0ms |       1 | `_find_spec`     | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % | Time | Samples | Callee                    | Location                        |
| -----: | ---: | ------: | ------------------------- | ------------------------------- |
| 100.0% |   2s |      20 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|     % |    Time | Samples | Callee                     | Location                                                                                         |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------ |
| 80.0% |   1.60s |      16 | `CPyInit_black`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 30.0% | 600.0ms |       6 | `CPyInit_black___nodes`    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 30.0% | 600.0ms |       6 | `CPyInit_black___comments` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 25.0% | 500.0ms |       5 | `<module>`                 | `/usr/lib/python3.11/json/decoder.py`                                                            |
| 25.0% | 500.0ms |       5 | `<module>`                 | `/usr/lib/python3.11/json/__init__.py`                                                           |

##### `module_from_spec` (`<frozen importlib._bootstrap>`)

|     % |    Time | Samples | Callee               | Location                                 |
| ----: | ------: | ------: | -------------------- | ---------------------------------------- |
| 94.4% |   1.70s |      17 | `create_module`      | `<frozen importlib._bootstrap_external>` |
|  5.6% | 100.0ms |       1 | `_init_module_attrs` | `<frozen importlib._bootstrap>`          |
|  5.6% | 100.0ms |       1 | `create_module`      | `<frozen importlib._bootstrap>`          |

##### `create_module` (`<frozen importlib._bootstrap_external>`)

|      % |  Time | Samples | Callee                      | Location                        |
| -----: | ----: | ------: | --------------------------- | ------------------------------- |
| 100.0% | 1.70s |      17 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_get_module_details` (`<frozen runpy>`)

|      % |  Time | Samples | Callee                | Location                        |
| -----: | ----: | ------: | --------------------- | ------------------------------- |
| 100.0% | 1.70s |      17 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% | 1.70s |      17 | `_get_module_details` | `<frozen runpy>`                |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|    % |    Time | Samples | Callee   | Location                              |
| ---: | ------: | ------: | -------- | ------------------------------------- |
| 8.3% | 100.0ms |       1 | `malloc` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `exec_module` (`<frozen importlib._bootstrap_external>`)

|      % |    Time | Samples | Callee                      | Location                                 |
| -----: | ------: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |   1.10s |      11 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  63.6% | 700.0ms |       7 | `get_code`                  | `<frozen importlib._bootstrap_external>` |

##### `__init__` (`<string>`)

|     % |    Time | Samples | Callee     | Location   |
| ----: | ------: | ------: | ---------- | ---------- |
| 40.0% | 400.0ms |       4 | `__init__` | `<string>` |

##### `get_code` (`<frozen importlib._bootstrap_external>`)

|     % |    Time | Samples | Callee              | Location                                 |
| ----: | ------: | ------: | ------------------- | ---------------------------------------- |
| 85.7% | 600.0ms |       6 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>` |
| 14.3% | 100.0ms |       1 | `get_data`          | `<frozen importlib._bootstrap_external>` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|     % |    Time | Samples | Callee           | Location                              |
| ----: | ------: | ------: | ---------------- | ------------------------------------- |
| 16.7% | 100.0ms |       1 | `malloc`         | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 16.7% | 100.0ms |       1 | `0x7fb1e8d4954a` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `<module>` (`/usr/lib/python3.11/json/decoder.py`)

|      % |    Time | Samples | Callee           | Location                        |
| -----: | ------: | ------: | ---------------- | ------------------------------- |
| 100.0% | 500.0ms |       5 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/usr/lib/python3.11/json/__init__.py`)

|      % |    Time | Samples | Callee           | Location                        |
| -----: | ------: | ------: | ---------------- | ------------------------------- |
| 100.0% | 500.0ms |       5 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/usr/lib/python3.11/re/__init__.py`)

|      % |    Time | Samples | Callee           | Location                        |
| -----: | ------: | ------: | ---------------- | ------------------------------- |
| 100.0% | 400.0ms |       4 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `0x7fb1e8f12a55` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

|     % |    Time | Samples | Callee           | Location                                         |
| ----: | ------: | ------: | ---------------- | ------------------------------------------------ |
| 50.0% | 200.0ms |       2 | `0x7fb1e8f0f074` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
| 50.0% | 200.0ms |       2 | `0x7fb1e8f0f0c5` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `_dl_catch_exception` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Callee           | Location                                         |
| -----: | ------: | ------: | ---------------- | ------------------------------------------------ |
| 100.0% | 400.0ms |       4 | `0x7fb1e8f12a55` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
| 100.0% | 400.0ms |       4 | `0x7fb1e8f12216` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
| 100.0% | 400.0ms |       4 | `0x7fb1e8c7b4b8` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |

##### `0x7fb1e8f12216` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

|      % |    Time | Samples | Callee                | Location                              |
| -----: | ------: | ------: | --------------------- | ------------------------------------- |
| 100.0% | 400.0ms |       4 | `_dl_catch_exception` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7fb1e8f12608` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

|      % |    Time | Samples | Callee                | Location                              |
| -----: | ------: | ------: | --------------------- | ------------------------------------- |
| 100.0% | 400.0ms |       4 | `_dl_catch_exception` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7fb1e8c7b4b8` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Callee           | Location                                         |
| -----: | ------: | ------: | ---------------- | ------------------------------------------------ |
| 100.0% | 400.0ms |       4 | `0x7fb1e8f12608` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `_dl_catch_error` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Callee                | Location                              |
| -----: | ------: | ------: | --------------------- | ------------------------------------- |
| 100.0% | 400.0ms |       4 | `_dl_catch_exception` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7fb1e8c7afa7` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Callee            | Location                              |
| -----: | ------: | ------: | ----------------- | ------------------------------------- |
| 100.0% | 400.0ms |       4 | `_dl_catch_error` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `dlopen` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Callee           | Location                              |
| -----: | ------: | ------: | ---------------- | ------------------------------------- |
| 100.0% | 400.0ms |       4 | `0x7fb1e8c7afa7` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `realloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|     % |    Time | Samples | Callee           | Location                              |
| ----: | ------: | ------: | ---------------- | ------------------------------------- |
| 75.0% | 300.0ms |       3 | `0x7fb1e8c8e462` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `<module>` (`/usr/lib/python3.11/contextlib.py`)

|      % |    Time | Samples | Callee           | Location                        |
| -----: | ------: | ------: | ---------------- | ------------------------------- |
| 100.0% | 300.0ms |       3 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`<frozen importlib.util>`)

|      % |    Time | Samples | Callee           | Location                        |
| -----: | ------: | ------: | ---------------- | ------------------------------- |
| 100.0% | 300.0ms |       3 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `exec_module` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Callee     | Location                  |
| -----: | ------: | ------: | ---------- | ------------------------- |
| 100.0% | 300.0ms |       3 | `<module>` | `<frozen importlib.util>` |
| 100.0% | 300.0ms |       3 | `<module>` | `<frozen runpy>`          |

##### `<module>` (`<frozen runpy>`)

|      % |    Time | Samples | Callee           | Location                        |
| -----: | ------: | ------: | ---------------- | ------------------------------- |
| 100.0% | 300.0ms |       3 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `malloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|     % |    Time | Samples | Callee           | Location                              |
| ----: | ------: | ------: | ---------------- | ------------------------------------- |
| 66.7% | 200.0ms |       2 | `0x7fb1e8c8e109` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7fb1e8c8e462` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|     % |    Time | Samples | Callee           | Location                              |
| ----: | ------: | ------: | ---------------- | ------------------------------------- |
| 33.3% | 100.0ms |       1 | `0x7fb1e8d48d8c` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 33.3% | 100.0ms |       1 | `0x7fb1e8d48d24` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 33.3% | 100.0ms |       1 | `0x7fb1e8d48d26` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7fb1e8f0f074` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

|     % |    Time | Samples | Callee           | Location                                         |
| ----: | ------: | ------: | ---------------- | ------------------------------------------------ |
| 50.0% | 100.0ms |       1 | `0x7fb1e8f0be4c` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
| 50.0% | 100.0ms |       1 | `0x7fb1e8f0be88` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `0x7fb1e8f0f0c5` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

|     % |    Time | Samples | Callee           | Location                                         |
| ----: | ------: | ------: | ---------------- | ------------------------------------------------ |
| 50.0% | 100.0ms |       1 | `0x7fb1e8f0da01` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
| 50.0% | 100.0ms |       1 | `0x7fb1e8f0d955` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `0x7fb1e809ad79` (`<unknown>`)

|      % |    Time | Samples | Callee           | Location                        |
| -----: | ------: | ------: | ---------------- | ------------------------------- |
| 100.0% | 100.0ms |       1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `0x7fb1e809c0b4` (`<unknown>`)

|      % |    Time | Samples | Callee           | Location    |
| -----: | ------: | ------: | ---------------- | ----------- |
| 100.0% | 100.0ms |       1 | `0x7fb1e809ad79` | `<unknown>` |

##### `0x7fb1e809b9d2` (`<unknown>`)

|      % |    Time | Samples | Callee           | Location    |
| -----: | ------: | ------: | ---------------- | ----------- |
| 100.0% | 100.0ms |       1 | `0x7fb1e809c0b4` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `_run_module_as_main` (`<frozen runpy>`) ← `0x7fb1e8c1d24a` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.5% |   2.20s |      22 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 4.7% |   1.60s |      16 | `CPyDef_parse___Parser___push` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 4.1% |   1.40s |      14 | `CPyDef_parse___Parser____addtoken` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 3.2% |   1.10s |      11 | `CPyDef_driver___Driver___parse_tokens` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 3.2% |   1.10s |      11 | `parse` (`/usr/lib/python3.11/ast.py`) ← `CPyDef_parsing____parse_single_version` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing___parse_ast` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.8% | 600.0ms |       6 | `CPyDef_parse___Parser___pop` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.8% | 600.0ms |       6 | `CPyDef_black___get_features_used` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black___detect_target_versions` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.5% | 500.0ms |       5 | `CPyDef_driver___Driver___parse_tokens` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.2% | 400.0ms |       4 | `CPyDef_comments___convert_one_fmt_off_pair` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.2% | 400.0ms |       4 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                     |
| 1.2% | 400.0ms |       4 | `CPyDef_parse___Parser____addtoken` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.9% | 300.0ms |       3 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>`) ← `get_code` ← `exec_module` ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/usr/lib/python3.11/re/__init__.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/usr/lib/python3.11/json/decoder.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/usr/lib/python3.11/json/__init__.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `CPyImport_ImportMany` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black_____top_level__` ← `CPyInit_black` ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `create_module` (`<frozen importlib._bootstrap_external>`) ← `module_from_spec` (`<frozen importlib._bootstrap>`) ← `_load_unlocked` ← `_find_and_load_unlocked` ← `_find_and_load` ← `_get_module_details` (`<frozen runpy>`) ← `_get_module_details`                                                                                                                                                                                                                                                                                                       |
| 0.9% | 300.0ms |       3 | `CPyDef_lines___Line_____str__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_lines___line_to_string` ← `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.9% | 300.0ms |       3 | `CPyDef_lines___Line___contains_implicit_multiline_string_with_comments` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.9% | 300.0ms |       3 | `CPyDef_lines___Line_____str__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.9% | 300.0ms |       3 | `__init__` (`<string>`) ← `CPyDef_lines___LinesBlock___all_lines` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.9% | 300.0ms |       3 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`) |
| 0.9% | 300.0ms |       3 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.6% | 200.0ms |       2 | `CPyDef_pytree___Leaf_____init__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_pytree___convert` ← `CPyDef_parse___Parser___shift` ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.6% | 200.0ms |       2 | `CPyDef_pytree___convert` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___shift` ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

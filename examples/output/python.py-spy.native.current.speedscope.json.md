# Sampling profile

Took 42.30s over 423 samples (100.0ms per sample).

| Category         |     % |    Time | Samples |
| ---------------- | ----: | ------: | ------: |
| Third-party      | 90.1% |  38.10s |     381 |
| Standard library |  5.7% |   2.40s |      24 |
| Native           |  3.1% |   1.30s |      13 |
| Ours             |  1.2% | 500.0ms |       5 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |     Time | Samples | Function                                                               | Location                                                                                         |
| ---: | -------: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 7.3% |    3.10s |      31 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 6.4% |    2.70s |      27 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 6.1% |    2.60s |      26 | `CPyDef_parse___Parser____addtoken`                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 4.7% |       2s |      20 | `CPyDef_driver___Driver___parse_tokens`                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 3.3% |    1.40s |      14 | `CPyDef_parse___Parser___push`                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 3.1% |    1.30s |      13 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 3.1% |    1.30s |      13 | `CPyDef_lines___Line_____str__`                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.6% |    1.10s |      11 | `CPyDef_parse___Parser___pop`                                          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.4% | 1000.0ms |      10 | `CPyDef_brackets___is_split_before_delimiter`                          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.1% |  900.0ms |       9 | `CPy_AddTraceback`                                                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.9% |  800.0ms |       8 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.9% |  800.0ms |       8 | `parse`                                                                | `/usr/lib/python3.11/ast.py`                                                                     |
| 1.7% |  700.0ms |       7 | `CPyDef_black___get_features_used`                                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.4% |  600.0ms |       6 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.4% |  600.0ms |       6 | `CPyDef_pytree___Node___update_sibling_maps`                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.4% |  600.0ms |       6 | `0x7fa1bf08e6b0`                                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% |  500.0ms |       5 | `CPyDef_pytree___convert`                                              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% |  500.0ms |       5 | `__init__`                                                             | `<string>`                                                                                       |
| 1.2% |  500.0ms |       5 | `CPyDef_linegen___LineGenerator___visit_default`                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 0.9% |  400.0ms |       4 | `pytree___Leaf_traverse`                                               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

#### Categories

##### Third-party

|    % |     Time | Samples | Function                                                                        | Location                                                                                         |
| ---: | -------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 7.3% |    3.10s |      31 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 6.4% |    2.70s |      27 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 6.1% |    2.60s |      26 | `CPyDef_parse___Parser____addtoken`                                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 4.7% |       2s |      20 | `CPyDef_driver___Driver___parse_tokens`                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 3.3% |    1.40s |      14 | `CPyDef_parse___Parser___push`                                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 3.1% |    1.30s |      13 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__`              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 3.1% |    1.30s |      13 | `CPyDef_lines___Line_____str__`                                                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.6% |    1.10s |      11 | `CPyDef_parse___Parser___pop`                                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.4% | 1000.0ms |      10 | `CPyDef_brackets___is_split_before_delimiter`                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.1% |  900.0ms |       9 | `CPy_AddTraceback`                                                              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.9% |  800.0ms |       8 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__`          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.7% |  700.0ms |       7 | `CPyDef_black___get_features_used`                                              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.4% |  600.0ms |       6 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__`              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.4% |  600.0ms |       6 | `CPyDef_pytree___Node___update_sibling_maps`                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.4% |  600.0ms |       6 | `0x7fa1bf08e6b0`                                                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% |  500.0ms |       5 | `CPyDef_pytree___convert`                                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% |  500.0ms |       5 | `CPyDef_linegen___LineGenerator___visit_default`                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 0.9% |  400.0ms |       4 | `pytree___Leaf_traverse`                                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 0.9% |  400.0ms |       4 | `CPyDef_comments___convert_one_fmt_off_pair`                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 0.9% |  400.0ms |       4 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Standard library

|    % |    Time | Samples | Function                    | Location                                  |
| ---: | ------: | ------: | --------------------------- | ----------------------------------------- |
| 1.9% | 800.0ms |       8 | `parse`                     | `/usr/lib/python3.11/ast.py`              |
| 0.5% | 200.0ms |       2 | `_create_fn`                | `/usr/lib/python3.11/dataclasses.py`      |
| 0.5% | 200.0ms |       2 | `isEnabledFor`              | `/usr/lib/python3.11/logging/__init__.py` |
| 0.5% | 200.0ms |       2 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py`      |
| 0.5% | 200.0ms |       2 | `__hash__`                  | `/usr/lib/python3.11/enum.py`             |
| 0.2% | 100.0ms |       1 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>`  |
| 0.2% | 100.0ms |       1 | `_find_and_load`            | `<frozen importlib._bootstrap>`           |
| 0.2% | 100.0ms |       1 | `_init_module_attrs`        | `<frozen importlib._bootstrap>`           |
| 0.2% | 100.0ms |       1 | `_init_fn`                  | `/usr/lib/python3.11/dataclasses.py`      |
| 0.2% | 100.0ms |       1 | `__get_builtin_constructor` | `/usr/lib/python3.11/hashlib.py`          |
| 0.2% | 100.0ms |       1 | `__enter__`                 | `<frozen importlib._bootstrap>`           |
| 0.2% | 100.0ms |       1 | `_subx`                     | `/usr/lib/python3.11/re/__init__.py`      |
| 0.2% | 100.0ms |       1 | `search`                    | `/usr/lib/python3.11/re/__init__.py`      |

##### Native

|    % |    Time | Samples | Function          | Location                              |
| ---: | ------: | ------: | ----------------- | ------------------------------------- |
| 0.5% | 200.0ms |       2 | `0x7fa1bfce724a`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.2% | 100.0ms |       1 | `__vsnprintf_chk` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.2% | 100.0ms |       1 | `mmap64`          | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.2% | 100.0ms |       1 | `0x7fa1bfe13480`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.2% | 100.0ms |       1 | `0x7fa1bfe134de`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.2% | 100.0ms |       1 | `0x7fa1bfe12aba`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.2% | 100.0ms |       1 | `0x7fa1bfd55093`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.2% | 100.0ms |       1 | `0x7fa1bfe12d8a`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.2% | 100.0ms |       1 | `0x7fa1bfe12a9d`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.2% | 100.0ms |       1 | `0x7fa1bfe134aa`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.2% | 100.0ms |       1 | `0x7fa1bfd55165`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.2% | 100.0ms |       1 | `0x7fa1bfd561cf`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### Ours

|    % |    Time | Samples | Function   | Location   |
| ---: | ------: | ------: | ---------- | ---------- |
| 1.2% | 500.0ms |       5 | `__init__` | `<string>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |    Time | Samples | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 800.0ms |       8 | `/usr/lib/python3.11/ast.py:50` |

##### `__init__` (`<string>`)

|     % |    Time | Samples | Location     |
| ----: | ------: | ------: | ------------ |
| 20.0% | 100.0ms |       1 | `<string>:7` |
| 20.0% | 100.0ms |       1 | `<string>:2` |
| 20.0% | 100.0ms |       1 | `<string>:8` |
| 20.0% | 100.0ms |       1 | `<string>:6` |
| 20.0% | 100.0ms |       1 | `<string>:4` |

##### `_create_fn` (`/usr/lib/python3.11/dataclasses.py`)

|      % |    Time | Samples | Location                                 |
| -----: | ------: | ------: | ---------------------------------------- |
| 100.0% | 200.0ms |       2 | `/usr/lib/python3.11/dataclasses.py:433` |

##### `isEnabledFor` (`/usr/lib/python3.11/logging/__init__.py`)

|      % |    Time | Samples | Location                                       |
| -----: | ------: | ------: | ---------------------------------------------- |
| 100.0% | 200.0ms |       2 | `/usr/lib/python3.11/logging/__init__.py:1738` |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py`)

|      % |    Time | Samples | Location                                 |
| -----: | ------: | ------: | ---------------------------------------- |
| 100.0% | 200.0ms |       2 | `/usr/lib/python3.11/re/__init__.py:277` |

##### `__hash__` (`/usr/lib/python3.11/enum.py`)

|      % |    Time | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 200.0ms |       2 | `/usr/lib/python3.11/enum.py:1230` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % |    Time | Samples | Location                                     |
| -----: | ------: | ------: | -------------------------------------------- |
| 100.0% | 100.0ms |       1 | `<frozen importlib._bootstrap_external>:729` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Location                             |
| -----: | ------: | ------: | ------------------------------------ |
| 100.0% | 100.0ms |       1 | `<frozen importlib._bootstrap>:1176` |

##### `_init_module_attrs` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Location                            |
| -----: | ------: | ------: | ----------------------------------- |
| 100.0% | 100.0ms |       1 | `<frozen importlib._bootstrap>:557` |

##### `_init_fn` (`/usr/lib/python3.11/dataclasses.py`)

|      % |    Time | Samples | Location                                 |
| -----: | ------: | ------: | ---------------------------------------- |
| 100.0% | 100.0ms |       1 | `/usr/lib/python3.11/dataclasses.py:580` |

##### `__get_builtin_constructor` (`/usr/lib/python3.11/hashlib.py`)

|      % |    Time | Samples | Location                             |
| -----: | ------: | ------: | ------------------------------------ |
| 100.0% | 100.0ms |       1 | `/usr/lib/python3.11/hashlib.py:103` |

##### `__enter__` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Location                            |
| -----: | ------: | ------: | ----------------------------------- |
| 100.0% | 100.0ms |       1 | `<frozen importlib._bootstrap>:170` |

##### `_subx` (`/usr/lib/python3.11/re/__init__.py`)

|      % |    Time | Samples | Location                                 |
| -----: | ------: | ------: | ---------------------------------------- |
| 100.0% | 100.0ms |       1 | `/usr/lib/python3.11/re/__init__.py:317` |

##### `search` (`/usr/lib/python3.11/re/__init__.py`)

|      % |    Time | Samples | Location                                 |
| -----: | ------: | ------: | ---------------------------------------- |
| 100.0% | 100.0ms |       1 | `/usr/lib/python3.11/re/__init__.py:176` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                                     | Location                                                                                         |
| ----: | ------: | ------: | ------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 96.8% |      3s |      30 | `CPyDef_driver___TokenProxy_____next__`    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  3.2% | 100.0ms |       1 | `CPyDef_pgen___ParserGenerator___gettoken` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                                                                          | Location                                                                                         |
| ----: | ------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 70.4% |   1.90s |      19 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__`         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 22.2% | 600.0ms |       6 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__`    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  7.4% | 200.0ms |       2 | `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser____addtoken` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |  Time | Samples | Caller                             | Location                                                                                         |
| -----: | ----: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2.60s |      26 | `CPyDef_parse___Parser___addtoken` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_driver___Driver___parse_tokens` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Time | Samples | Caller                                  | Location                                                                                         |
| -----: | ---: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |   2s |      20 | `CPyDef_driver___Driver___parse_string` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser___push` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |  Time | Samples | Caller                              | Location                                                                                         |
| -----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.40s |      14 | `CPyDef_parse___Parser____addtoken` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |  Time | Samples | Caller                                                                             | Location                                                                                         |
| -----: | ----: | ------: | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.30s |      13 | `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_lines___Line_____str__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                                              | Location                                                                                         |
| ----: | ------: | ------: | --------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 53.8% | 700.0ms |       7 | `CPyDef_lines___line_to_string`                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 23.1% | 300.0ms |       3 | `CPyDef_linegen___bracket_split_succeeded_or_raise` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 23.1% | 300.0ms |       3 | `CPyDef_black____format_str_once`                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser___pop` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |  Time | Samples | Caller                              | Location                                                                                         |
| -----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.10s |      11 | `CPyDef_parse___Parser____addtoken` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_brackets___is_split_before_delimiter` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |     Time | Samples | Caller                                    | Location                                                                                         |
| -----: | -------: | ------: | ----------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1000.0ms |      10 | `CPyDef_brackets___BracketTracker___mark` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPy_AddTraceback` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                                                         | Location                                                                                         |
| ----: | ------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 44.4% | 400.0ms |       4 | `CPyDef_linegen____hugging_power_ops_line_to_string`           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 33.3% | 300.0ms |       3 | `CPyDef_trans___hug_power_op_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 22.2% | 200.0ms |       2 | `CPyDef_lines___Line___is_def`                                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                                                                          | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 800.0ms |       8 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |    Time | Samples | Caller                                   | Location                                                                                         |
| -----: | ------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 800.0ms |       8 | `CPyDef_parsing____parse_single_version` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___get_features_used` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                                  | Location                                                                                         |
| -----: | ------: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 700.0ms |       7 | `CPyDef_black___detect_target_versions` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                             | Location                                                                                         |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| 83.3% | 500.0ms |       5 | `CPyDef_black____format_str_once`  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 16.7% | 100.0ms |       1 | `CPyDef_linegen___run_transformer` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___Node___update_sibling_maps` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                                | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 600.0ms |       6 | `CPyDef_pytree___Base___prev_sibling` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7fa1bf08e6b0` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                                                               | Location                                                                                         |
| ----: | ------: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 33.3% | 200.0ms |       2 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 16.7% | 100.0ms |       1 | `nodes___visit_Visitor_gen_dealloc`                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 16.7% | 100.0ms |       1 | `pytree___Leaf_clear`                                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 16.7% | 100.0ms |       1 | `pytree___leaves_Base_env_clear`                                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 16.7% | 100.0ms |       1 | `trans___StringParenWrapper_clear`                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___convert` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                          | Location                                                                                         |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------------ |
| 60.0% | 300.0ms |       3 | `CPyDef_parse___Parser___pop`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 40.0% | 200.0ms |       2 | `CPyDef_parse___Parser___shift` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `__init__` (`<string>`)

|     % |    Time | Samples | Caller                                                                 | Location                                                                                         |
| ----: | ------: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 60.0% | 300.0ms |       3 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 20.0% | 100.0ms |       1 | `__init__`                                                             | `<string>`                                                                                       |
| 20.0% | 100.0ms |       1 | `CPyDef_linegen___bracket_split_build_line`                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___LineGenerator___visit_default` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                                                          | Location                                                                                         |
| -----: | ------: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 500.0ms |       5 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `pytree___Leaf_traverse` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                                  | Location                                                                                         |
| ----: | ------: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 50.0% | 200.0ms |       2 | `CPyDef_parse___Parser___push`          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 25.0% | 100.0ms |       1 | `CPyDef_parse___Parser____addtoken`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 25.0% | 100.0ms |       1 | `CPyDef_driver___Driver___parse_tokens` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_comments___convert_one_fmt_off_pair` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                            | Location                                                                                         |
| -----: | ------: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 400.0ms |       4 | `CPyDef_black____format_str_once` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                                                          | Location                                                                                         |
| -----: | ------: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 400.0ms |       4 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_create_fn` (`/usr/lib/python3.11/dataclasses.py`)

|     % |    Time | Samples | Caller                 | Location                             |
| ----: | ------: | ------: | ---------------------- | ------------------------------------ |
| 50.0% | 100.0ms |       1 | `_frozen_get_del_attr` | `/usr/lib/python3.11/dataclasses.py` |
| 50.0% | 100.0ms |       1 | `_cmp_fn`              | `/usr/lib/python3.11/dataclasses.py` |

##### `isEnabledFor` (`/usr/lib/python3.11/logging/__init__.py`)

|      % |    Time | Samples | Caller  | Location                                  |
| -----: | ------: | ------: | ------- | ----------------------------------------- |
| 100.0% | 200.0ms |       2 | `debug` | `/usr/lib/python3.11/logging/__init__.py` |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py`)

|     % |    Time | Samples | Caller   | Location                             |
| ----: | ------: | ------: | -------- | ------------------------------------ |
| 50.0% | 100.0ms |       1 | `match`  | `/usr/lib/python3.11/re/__init__.py` |
| 50.0% | 100.0ms |       1 | `search` | `/usr/lib/python3.11/re/__init__.py` |

##### `__hash__` (`/usr/lib/python3.11/enum.py`)

|      % |    Time | Samples | Caller                              | Location                                                                                         |
| -----: | ------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 200.0ms |       2 | `CPyDef_mode___Mode_____contains__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % |    Time | Samples | Caller     | Location                                 |
| -----: | ------: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 100.0ms |       1 | `get_code` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Caller     | Location                              |
| -----: | ------: | ------: | ---------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `<module>` | `/usr/lib/python3.11/re/_compiler.py` |

##### `_init_module_attrs` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Caller             | Location                        |
| -----: | ------: | ------: | ------------------ | ------------------------------- |
| 100.0% | 100.0ms |       1 | `module_from_spec` | `<frozen importlib._bootstrap>` |

##### `_init_fn` (`/usr/lib/python3.11/dataclasses.py`)

|      % |    Time | Samples | Caller           | Location                             |
| -----: | ------: | ------: | ---------------- | ------------------------------------ |
| 100.0% | 100.0ms |       1 | `_process_class` | `/usr/lib/python3.11/dataclasses.py` |

##### `__get_builtin_constructor` (`/usr/lib/python3.11/hashlib.py`)

|      % |    Time | Samples | Caller                      | Location                         |
| -----: | ------: | ------: | --------------------------- | -------------------------------- |
| 100.0% | 100.0ms |       1 | `__get_openssl_constructor` | `/usr/lib/python3.11/hashlib.py` |

##### `__enter__` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Caller           | Location                        |
| -----: | ------: | ------: | ---------------- | ------------------------------- |
| 100.0% | 100.0ms |       1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `_subx` (`/usr/lib/python3.11/re/__init__.py`)

|      % |    Time | Samples | Caller                       | Location                                                                                         |
| -----: | ------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `CPyDef_strings___sub_twice` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `search` (`/usr/lib/python3.11/re/__init__.py`)

|      % |    Time | Samples | Caller                                                                         | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `CPyDef_linegen___visit_STRING_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `__vsnprintf_chk` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller                      | Location                        |
| -----: | ------: | ------: | --------------------------- | ------------------------------- |
| 100.0% | 100.0ms |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `mmap64` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller                            | Location                                                                                         |
| -----: | ------: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `CPyDef_pytree___Leaf_____init__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7fa1bfe13480` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller                                   | Location                                                                                         |
| -----: | ------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `CPyDef_nodes___Visitor___visit_default` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7fa1bfe134de` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller                                   | Location                                                                                         |
| -----: | ------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `CPyDef_nodes___Visitor___visit_default` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7fa1bfe12aba` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller                       | Location                                                                                         |
| -----: | ------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `CPyDef_strings___sub_twice` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7fa1bfd55093` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller           | Location                              |
| -----: | ------: | ------: | ---------------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `0x7fa1bfd584c9` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7fa1bfe12d8a` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller           | Location                              |
| -----: | ------: | ------: | ---------------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `0x7fa1bfd58462` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7fa1bfe12a9d` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller                             | Location                                                                                         |
| -----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `CPyDef_black___assert_equivalent` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7fa1bfe134aa` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller                    | Location                                                                                         |
| -----: | ------: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `CPyDef_pytree___convert` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7fa1bfd55165` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller           | Location                              |
| -----: | ------: | ------: | ---------------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `0x7fa1bfd578d8` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7fa1bfd561cf` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller | Location                              |
| -----: | ------: | ------: | ------ | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `free` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |   Time | Samples | Function                                                                        | Location                                                                                         |
| -----: | -----: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 42.30s |     423 | `0x7fa1bfce724a`                                                                | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
|  99.3% |    42s |     420 | `_run_module_as_main`                                                           | `<frozen runpy>`                                                                                 |
|  95.7% | 40.50s |     405 | `CPyDef_black___format_file_contents`                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  95.7% | 40.50s |     405 | `CPyDef_black___format_file_in_place`                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  95.7% | 40.50s |     405 | `CPyDef_black___reformat_one`                                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  95.7% | 40.50s |     405 | `CPyPy_black___reformat_one`                                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  95.7% | 40.50s |     405 | `CPyDef_black___main`                                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  95.7% | 40.50s |     405 | `CPyPy_black___main`                                                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  95.7% | 40.50s |     405 | `new_func`                                                                      | `/venv/lib/python3.11/site-packages/click/decorators.py`                                         |
|  95.7% | 40.50s |     405 | `invoke`                                                                        | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
|  95.7% | 40.50s |     405 | `main`                                                                          | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
|  95.7% | 40.50s |     405 | `__call__`                                                                      | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
|  95.7% | 40.50s |     405 | `CPyDef_black___patched_main`                                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  95.7% | 40.50s |     405 | `CPyPy_black___patched_main`                                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  95.7% | 40.50s |     405 | `<module>`                                                                      | `/venv/lib/python3.11/site-packages/black/__main__.py`                                           |
|  95.7% | 40.50s |     405 | `_run_code`                                                                     | `<frozen runpy>`                                                                                 |
|  88.9% | 37.60s |     376 | `CPyDef_black____format_str_once`                                               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  66.2% |    28s |     280 | `CPyDef_black___format_str`                                                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  35.5% |    15s |     150 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  35.5% |    15s |     150 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

#### Categories

##### Third-party

|     % |   Time | Samples | Function                                                                        | Location                                                                                         |
| ----: | -----: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 95.7% | 40.50s |     405 | `CPyDef_black___format_file_contents`                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 95.7% | 40.50s |     405 | `CPyDef_black___format_file_in_place`                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 95.7% | 40.50s |     405 | `CPyDef_black___reformat_one`                                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 95.7% | 40.50s |     405 | `CPyPy_black___reformat_one`                                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 95.7% | 40.50s |     405 | `CPyDef_black___main`                                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 95.7% | 40.50s |     405 | `CPyPy_black___main`                                                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 95.7% | 40.50s |     405 | `new_func`                                                                      | `/venv/lib/python3.11/site-packages/click/decorators.py`                                         |
| 95.7% | 40.50s |     405 | `invoke`                                                                        | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| 95.7% | 40.50s |     405 | `main`                                                                          | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| 95.7% | 40.50s |     405 | `__call__`                                                                      | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| 95.7% | 40.50s |     405 | `CPyDef_black___patched_main`                                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 95.7% | 40.50s |     405 | `CPyPy_black___patched_main`                                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 95.7% | 40.50s |     405 | `<module>`                                                                      | `/venv/lib/python3.11/site-packages/black/__main__.py`                                           |
| 88.9% | 37.60s |     376 | `CPyDef_black____format_str_once`                                               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 66.2% |    28s |     280 | `CPyDef_black___format_str`                                                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 35.5% |    15s |     150 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 35.5% |    15s |     150 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 35.5% |    15s |     150 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__`         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 34.8% | 14.70s |     147 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__`    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 34.8% | 14.70s |     147 | `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Standard library

|     % |     Time | Samples | Function                    | Location                                  |
| ----: | -------: | ------: | --------------------------- | ----------------------------------------- |
| 99.3% |      42s |     420 | `_run_module_as_main`       | `<frozen runpy>`                          |
| 95.7% |   40.50s |     405 | `_run_code`                 | `<frozen runpy>`                          |
|  3.5% |    1.50s |      15 | `_load_unlocked`            | `<frozen importlib._bootstrap>`           |
|  3.5% |    1.50s |      15 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`           |
|  3.5% |    1.50s |      15 | `_find_and_load`            | `<frozen importlib._bootstrap>`           |
|  3.5% |    1.50s |      15 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`           |
|  3.5% |    1.50s |      15 | `create_module`             | `<frozen importlib._bootstrap_external>`  |
|  3.5% |    1.50s |      15 | `module_from_spec`          | `<frozen importlib._bootstrap>`           |
|  3.5% |    1.50s |      15 | `_get_module_details`       | `<frozen runpy>`                          |
|  2.4% | 1000.0ms |      10 | `parse`                     | `/usr/lib/python3.11/ast.py`              |
|  1.7% |  700.0ms |       7 | `exec_module`               | `<frozen importlib._bootstrap_external>`  |
|  0.7% |  300.0ms |       3 | `_handle_fromlist`          | `<frozen importlib._bootstrap>`           |
|  0.7% |  300.0ms |       3 | `_process_class`            | `/usr/lib/python3.11/dataclasses.py`      |
|  0.7% |  300.0ms |       3 | `wrap`                      | `/usr/lib/python3.11/dataclasses.py`      |
|  0.5% |  200.0ms |       2 | `<module>`                  | `/usr/lib/python3.11/re/__init__.py`      |
|  0.5% |  200.0ms |       2 | `<module>`                  | `/usr/lib/python3.11/json/decoder.py`     |
|  0.5% |  200.0ms |       2 | `<module>`                  | `/usr/lib/python3.11/json/__init__.py`    |
|  0.5% |  200.0ms |       2 | `_create_fn`                | `/usr/lib/python3.11/dataclasses.py`      |
|  0.5% |  200.0ms |       2 | `isEnabledFor`              | `/usr/lib/python3.11/logging/__init__.py` |
|  0.5% |  200.0ms |       2 | `debug`                     | `/usr/lib/python3.11/logging/__init__.py` |

##### Native

|      % |    Time | Samples | Function          | Location                              |
| -----: | ------: | ------: | ----------------- | ------------------------------------- |
| 100.0% |  42.30s |     423 | `0x7fa1bfce724a`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.5% | 200.0ms |       2 | `realloc`         | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.2% | 100.0ms |       1 | `__vsnprintf_chk` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.2% | 100.0ms |       1 | `mmap64`          | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.2% | 100.0ms |       1 | `0x7fa1bfe13480`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.2% | 100.0ms |       1 | `0x7fa1bfe134de`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.2% | 100.0ms |       1 | `0x7fa1bfe12aba`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.2% | 100.0ms |       1 | `0x7fa1bfd55093`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.2% | 100.0ms |       1 | `0x7fa1bfd584c9`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.2% | 100.0ms |       1 | `0x7fa1bfe12d8a`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.2% | 100.0ms |       1 | `0x7fa1bfd58462`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.2% | 100.0ms |       1 | `0x7fa1bfe12a9d`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.2% | 100.0ms |       1 | `0x7fa1bfe134aa`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.2% | 100.0ms |       1 | `0x7fa1bfd55165`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.2% | 100.0ms |       1 | `0x7fa1bfd578d8`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.2% | 100.0ms |       1 | `malloc`          | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.2% | 100.0ms |       1 | `0x7fa1bfd561cf`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.2% | 100.0ms |       1 | `free`            | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### Ours

|    % |    Time | Samples | Function   | Location   |
| ---: | ------: | ------: | ---------- | ---------- |
| 1.2% | 500.0ms |       5 | `__init__` | `<string>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x7fa1bfce724a` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|     % |    Time | Samples | Callee                   | Location                                                                                         |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------------------------------------------------ |
| 99.3% |     42s |     420 | `_run_module_as_main`    | `<frozen runpy>`                                                                                 |
|  0.2% | 100.0ms |       1 | `pytree___Node_traverse` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_run_module_as_main` (`<frozen runpy>`)

|     % |   Time | Samples | Callee                | Location         |
| ----: | -----: | ------: | --------------------- | ---------------- |
| 96.4% | 40.50s |     405 | `_run_code`           | `<frozen runpy>` |
|  3.6% |  1.50s |      15 | `_get_module_details` | `<frozen runpy>` |

##### `CPyDef_black___format_file_contents` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |   Time | Samples | Callee                                           | Location                                                                                         |
| ----: | -----: | ------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 69.1% |    28s |     280 | `CPyDef_black___format_str`                      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 30.9% | 12.50s |     125 | `CPyDef_black___check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_file_in_place` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |   Time | Samples | Callee                                | Location                                                                                         |
| -----: | -----: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 40.50s |     405 | `CPyDef_black___format_file_contents` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___reformat_one` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |   Time | Samples | Callee                                | Location                                                                                         |
| -----: | -----: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 40.50s |     405 | `CPyDef_black___format_file_in_place` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyPy_black___reformat_one` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |   Time | Samples | Callee                        | Location                                                                                         |
| -----: | -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 40.50s |     405 | `CPyDef_black___reformat_one` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |   Time | Samples | Callee                       | Location                                                                                         |
| -----: | -----: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 40.50s |     405 | `CPyPy_black___reformat_one` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyPy_black___main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |   Time | Samples | Callee                | Location                                                                                         |
| -----: | -----: | ------: | --------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 40.50s |     405 | `CPyDef_black___main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`)

|     % |   Time | Samples | Callee               | Location                                                                                         |
| ----: | -----: | ------: | -------------------- | ------------------------------------------------------------------------------------------------ |
| 99.8% | 40.40s |     404 | `CPyPy_black___main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |    Time | Samples | Callee               | Location                                                                                         |
| -----: | ------: | ------: | -------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |  40.50s |     405 | `invoke`             | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
|  99.8% |  40.40s |     404 | `new_func`           | `/venv/lib/python3.11/site-packages/click/decorators.py`                                         |
|   0.2% | 100.0ms |       1 | `CPyPy_black___main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |   Time | Samples | Callee   | Location                                           |
| -----: | -----: | ------: | -------- | -------------------------------------------------- |
| 100.0% | 40.50s |     405 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |   Time | Samples | Callee | Location                                           |
| -----: | -----: | ------: | ------ | -------------------------------------------------- |
| 100.0% | 40.50s |     405 | `main` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Callee     | Location                                               |
| ----: | ------: | ------: | ---------- | ------------------------------------------------------ |
| 99.8% |  40.40s |     404 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py`     |
|  0.2% | 100.0ms |       1 | `<module>` | `/venv/lib/python3.11/site-packages/black/__main__.py` |

##### `CPyPy_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |   Time | Samples | Callee                        | Location                                                                                         |
| -----: | -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 40.50s |     405 | `CPyDef_black___patched_main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`)

|     % |    Time | Samples | Callee                       | Location                                                                                         |
| ----: | ------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| 99.8% |  40.40s |     404 | `CPyPy_black___patched_main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  0.2% | 100.0ms |       1 | `__call__`                   | `/venv/lib/python3.11/site-packages/click/core.py`                                               |

##### `_run_code` (`<frozen runpy>`)

|     % |    Time | Samples | Callee                       | Location                                                                                         |
| ----: | ------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| 99.8% |  40.40s |     404 | `<module>`                   | `/venv/lib/python3.11/site-packages/black/__main__.py`                                           |
|  0.2% | 100.0ms |       1 | `CPyPy_black___patched_main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black____format_str_once` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Callee                                                             | Location                                                                                         |
| ----: | ------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 39.9% |     15s |     150 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 37.0% |  13.90s |     139 | `CPyDef_parsing___lib2to3_parse`                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 12.8% |   4.80s |      48 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  2.4% | 900.0ms |       9 | `CPyDef_black___detect_target_versions`                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  2.1% | 800.0ms |       8 | `CPyDef_comments___convert_one_fmt_off_pair`                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_str` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Time | Samples | Callee                            | Location                                                                                         |
| -----: | ---: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |  28s |     280 | `CPyDef_black____format_str_once` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Callee                                                                  | Location                                                                                         |
| -----: | ------: | ------: | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |     15s |     150 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  26.0% |   3.90s |      39 | `CPyDef_lines___Line___append`                                          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  11.3% |   1.70s |      17 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__`  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|   4.0% | 600.0ms |       6 | `CPyDef_comments___generate_comments`                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|   2.7% | 400.0ms |       4 | `CPyDef_nodes___Visitor___visit_default`                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |   Time | Samples | Callee                                                                              | Location                                                                                         |
| -----: | -----: | ------: | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |    15s |     150 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  98.0% | 14.70s |     147 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__`        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  98.0% | 14.70s |     147 | `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__`       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  96.7% | 14.50s |     145 | `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  66.0% |  9.90s |      99 | `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Callee                                                          | Location                                                                                         |
| -----: | ------: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |     15s |     150 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|   7.3% |   1.10s |      11 | `nodes___visit_Visitor_gen_dealloc`                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|   0.7% | 100.0ms |       1 | `CPyDef_nodes___Visitor___visit`                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Callee                                                          | Location                                                                                         |
| ----: | ------: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 99.3% |  14.60s |     146 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  4.8% | 700.0ms |       7 | `CPyDef_linegen___normalize_invisible_parens`                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  2.7% | 400.0ms |       4 | `nodes___visit_Visitor_gen_dealloc`                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  0.7% | 100.0ms |       1 | `0x7fa1bf091330`                                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  0.7% | 100.0ms |       1 | `CPyDef_nodes___Visitor___visit`                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |   Time | Samples | Callee                                                                          | Location                                                                                         |
| -----: | -----: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 14.70s |     147 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Callee             | Location                                 |
| -----: | ------: | ------: | ------------------ | ---------------------------------------- |
| 100.0% |   1.50s |      15 | `module_from_spec` | `<frozen importlib._bootstrap>`          |
|  46.7% | 700.0ms |       7 | `exec_module`      | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Callee                      | Location                        |
| -----: | ------: | ------: | --------------------------- | ------------------------------- |
| 100.0% |   1.50s |      15 | `_load_unlocked`            | `<frozen importlib._bootstrap>` |
|   6.7% | 100.0ms |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |
|   6.7% | 100.0ms |       1 | `_find_spec`                | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Callee                    | Location                        |
| -----: | ------: | ------: | ------------------------- | ------------------------------- |
| 100.0% |   1.50s |      15 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |
|   6.7% | 100.0ms |       1 | `__enter__`               | `<frozen importlib._bootstrap>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Callee                     | Location                                                                                         |
| -----: | ------: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |   1.50s |      15 | `CPyInit_black`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  40.0% | 600.0ms |       6 | `CPyInit_black___nodes`    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  40.0% | 600.0ms |       6 | `CPyInit_black___comments` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  26.7% | 400.0ms |       4 | `_find_and_load`           | `<frozen importlib._bootstrap>`                                                                  |
|  20.0% | 300.0ms |       3 | `<module>`                 | `/venv/lib/python3.11/site-packages/pathspec/gitignore.py`                                       |

##### `create_module` (`<frozen importlib._bootstrap_external>`)

|      % |  Time | Samples | Callee                      | Location                        |
| -----: | ----: | ------: | --------------------------- | ------------------------------- |
| 100.0% | 1.50s |      15 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `module_from_spec` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Callee               | Location                                 |
| -----: | ------: | ------: | -------------------- | ---------------------------------------- |
| 100.0% |   1.50s |      15 | `create_module`      | `<frozen importlib._bootstrap_external>` |
|   6.7% | 100.0ms |       1 | `_init_module_attrs` | `<frozen importlib._bootstrap>`          |

##### `_get_module_details` (`<frozen runpy>`)

|      % |  Time | Samples | Callee                | Location                        |
| -----: | ----: | ------: | --------------------- | ------------------------------- |
| 100.0% | 1.50s |      15 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% | 1.50s |      15 | `_get_module_details` | `<frozen runpy>`                |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|     % |    Time | Samples | Callee                | Location                                                                                         |
| ----: | ------: | ------: | --------------------- | ------------------------------------------------------------------------------------------------ |
| 10.0% | 100.0ms |       1 | `realloc`             | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
| 10.0% | 100.0ms |       1 | `pytree___Node_clear` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `exec_module` (`<frozen importlib._bootstrap_external>`)

|      % |    Time | Samples | Callee                      | Location                                 |
| -----: | ------: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% | 700.0ms |       7 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  14.3% | 100.0ms |       1 | `get_code`                  | `<frozen importlib._bootstrap_external>` |

##### `__init__` (`<string>`)

|     % |    Time | Samples | Callee     | Location   |
| ----: | ------: | ------: | ---------- | ---------- |
| 20.0% | 100.0ms |       1 | `__init__` | `<string>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Callee                      | Location                        |
| -----: | ------: | ------: | --------------------------- | ------------------------------- |
| 100.0% | 300.0ms |       3 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_process_class` (`/usr/lib/python3.11/dataclasses.py`)

|     % |    Time | Samples | Callee                 | Location                             |
| ----: | ------: | ------: | ---------------------- | ------------------------------------ |
| 33.3% | 100.0ms |       1 | `_frozen_get_del_attr` | `/usr/lib/python3.11/dataclasses.py` |
| 33.3% | 100.0ms |       1 | `_init_fn`             | `/usr/lib/python3.11/dataclasses.py` |
| 33.3% | 100.0ms |       1 | `_cmp_fn`              | `/usr/lib/python3.11/dataclasses.py` |

##### `wrap` (`/usr/lib/python3.11/dataclasses.py`)

|      % |    Time | Samples | Callee           | Location                             |
| -----: | ------: | ------: | ---------------- | ------------------------------------ |
| 100.0% | 300.0ms |       3 | `_process_class` | `/usr/lib/python3.11/dataclasses.py` |

##### `<module>` (`/usr/lib/python3.11/re/__init__.py`)

|      % |    Time | Samples | Callee             | Location                        |
| -----: | ------: | ------: | ------------------ | ------------------------------- |
| 100.0% | 200.0ms |       2 | `_handle_fromlist` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/usr/lib/python3.11/json/decoder.py`)

|      % |    Time | Samples | Callee           | Location                        |
| -----: | ------: | ------: | ---------------- | ------------------------------- |
| 100.0% | 200.0ms |       2 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/usr/lib/python3.11/json/__init__.py`)

|      % |    Time | Samples | Callee           | Location                        |
| -----: | ------: | ------: | ---------------- | ------------------------------- |
| 100.0% | 200.0ms |       2 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `debug` (`/usr/lib/python3.11/logging/__init__.py`)

|      % |    Time | Samples | Callee         | Location                                  |
| -----: | ------: | ------: | -------------- | ----------------------------------------- |
| 100.0% | 200.0ms |       2 | `isEnabledFor` | `/usr/lib/python3.11/logging/__init__.py` |

##### `realloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|     % |    Time | Samples | Callee           | Location                              |
| ----: | ------: | ------: | ---------------- | ------------------------------------- |
| 50.0% | 100.0ms |       1 | `0x7fa1bfd584c9` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 50.0% | 100.0ms |       1 | `0x7fa1bfd58462` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7fa1bfd584c9` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Callee           | Location                              |
| -----: | ------: | ------: | ---------------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `0x7fa1bfd55093` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7fa1bfd58462` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Callee           | Location                              |
| -----: | ------: | ------: | ---------------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `0x7fa1bfe12d8a` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7fa1bfd578d8` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Callee           | Location                              |
| -----: | ------: | ------: | ---------------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `0x7fa1bfd55165` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `malloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Callee           | Location                              |
| -----: | ------: | ------: | ---------------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `0x7fa1bfd578d8` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `free` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Callee           | Location                              |
| -----: | ------: | ------: | ---------------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `0x7fa1bfd561cf` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `CPyDef_black___format_file_contents` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main` ← `0x7fa1bfce724a` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.9% |   2.50s |      25 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 4.3% |   1.80s |      18 | `CPyDef_parse___Parser____addtoken` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 4.0% |   1.70s |      17 | `CPyDef_driver___Driver___parse_tokens` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3.1% |   1.30s |      13 | `CPyDef_parse___Parser___push` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.9% | 800.0ms |       8 | `parse` (`/usr/lib/python3.11/ast.py`) ← `CPyDef_parsing____parse_single_version` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing___parse_ast` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.9% | 800.0ms |       8 | `CPyDef_parse___Parser____addtoken` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.4% | 600.0ms |       6 | `CPyDef_parse___Parser___pop` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.2% | 500.0ms |       5 | `CPyDef_black___get_features_used` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black___detect_target_versions` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.2% | 500.0ms |       5 | `CPyDef_lines___Line_____str__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_lines___line_to_string` ← `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.2% | 500.0ms |       5 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.2% | 500.0ms |       5 | `CPyDef_parse___Parser___pop` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.9% | 400.0ms |       4 | `CPyDef_comments___convert_one_fmt_off_pair` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.9% | 400.0ms |       4 | `CPy_AddTraceback` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_linegen____hugging_power_ops_line_to_string` ← `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.9% | 400.0ms |       4 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.9% | 400.0ms |       4 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.7% | 300.0ms |       3 | `CPyDef_pytree___convert` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___pop` ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.7% | 300.0ms |       3 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.7% | 300.0ms |       3 | `CPyDef_lines___Line_____str__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_linegen___bracket_split_succeeded_or_raise` ← `CPyDef_linegen____first_right_hand_split` ← `CPyDef_linegen____maybe_split_omitting_optional_parens_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___right_hand_split_gen_____mypyc_generator_helper__` ← `CPyDef_linegen____rhs_transform_line_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___run_transformer` ← `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.7% | 300.0ms |       3 | `CPyDef_driver___Driver___parse_tokens` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.7% | 300.0ms |       3 | `CPyDef_comments___generate_comments` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_power_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence` |

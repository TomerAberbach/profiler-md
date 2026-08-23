# Sampling profile

Took 42.90s over 429 samples (100.0ms per sample).

| Category         |     % |    Time | Samples |
| ---------------- | ----: | ------: | ------: |
| Third-party      | 85.5% |  36.70s |     367 |
| Native           |  7.9% |   3.40s |      34 |
| Standard library |  5.6% |   2.40s |      24 |
| Ours             |  0.9% | 400.0ms |       4 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |     Time | Samples | Function                                                                        | Location                                                                                         |
| ---: | -------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 8.4% |    3.60s |      36 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 5.8% |    2.50s |      25 | `CPyDef_parse___Parser____addtoken`                                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 5.1% |    2.20s |      22 | `CPyDef_driver___Driver___parse_tokens`                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 4.2% |    1.80s |      18 | `CPyDef_parse___Parser___pop`                                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 4.0% |    1.70s |      17 | `CPyDef_parse___Parser___push`                                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 3.5% |    1.50s |      15 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.3% |       1s |      10 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__`              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.3% | 1000.0ms |      10 | `CPyDef_parse___Parser___shift`                                                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.9% |  800.0ms |       8 | `0x7f093388f4a0`                                                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.6% |  700.0ms |       7 | `CPy_AddTraceback`                                                              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.6% |  700.0ms |       7 | `0x7f093388e6b0`                                                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.6% |  700.0ms |       7 | `parse`                                                                         | `/usr/lib/python3.11/ast.py`                                                                     |
| 1.2% |  500.0ms |       5 | `0x7f09344ec24a`                                                                | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
| 1.2% |  500.0ms |       5 | `CPyDef_black___get_features_used`                                              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% |  500.0ms |       5 | `0x7f0933891690`                                                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% |  500.0ms |       5 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__`          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% |  500.0ms |       5 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% |  500.0ms |       5 | `CPyDef_strings___sub_twice`                                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 0.9% |  400.0ms |       4 | `free`                                                                          | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
| 0.9% |  400.0ms |       4 | `CPyDef_pytree___convert`                                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

#### Categories

##### Third-party

|    % |     Time | Samples | Function                                                                        | Location                                                                                         |
| ---: | -------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 8.4% |    3.60s |      36 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 5.8% |    2.50s |      25 | `CPyDef_parse___Parser____addtoken`                                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 5.1% |    2.20s |      22 | `CPyDef_driver___Driver___parse_tokens`                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 4.2% |    1.80s |      18 | `CPyDef_parse___Parser___pop`                                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 4.0% |    1.70s |      17 | `CPyDef_parse___Parser___push`                                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 3.5% |    1.50s |      15 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.3% |       1s |      10 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__`              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.3% | 1000.0ms |      10 | `CPyDef_parse___Parser___shift`                                                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.9% |  800.0ms |       8 | `0x7f093388f4a0`                                                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.6% |  700.0ms |       7 | `CPy_AddTraceback`                                                              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.6% |  700.0ms |       7 | `0x7f093388e6b0`                                                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% |  500.0ms |       5 | `CPyDef_black___get_features_used`                                              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% |  500.0ms |       5 | `0x7f0933891690`                                                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% |  500.0ms |       5 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__`          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% |  500.0ms |       5 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% |  500.0ms |       5 | `CPyDef_strings___sub_twice`                                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 0.9% |  400.0ms |       4 | `CPyDef_pytree___convert`                                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 0.9% |  400.0ms |       4 | `CPyDef_pytree___Leaf_____init__`                                               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 0.9% |  400.0ms |       4 | `pytree___Leaf_traverse`                                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 0.9% |  400.0ms |       4 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__`               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Native

|    % |    Time | Samples | Function         | Location                              |
| ---: | ------: | ------: | ---------------- | ------------------------------------- |
| 1.2% | 500.0ms |       5 | `0x7f09344ec24a` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.9% | 400.0ms |       4 | `free`           | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.7% | 300.0ms |       3 | `0x7f093455a165` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.5% | 200.0ms |       2 | `0x7f0934618480` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.5% | 200.0ms |       2 | `0x7f093455b2f9` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.5% | 200.0ms |       2 | `0x7f0934617d26` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.5% | 200.0ms |       2 | `0x7f0934617cd3` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.5% | 200.0ms |       2 | `0x7f0934617d8c` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.2% | 100.0ms |       1 | `fstatat64`      | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.2% | 100.0ms |       1 | `0x7f093455d09d` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.2% | 100.0ms |       1 | `0x7f093455ca7a` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.2% | 100.0ms |       1 | `realloc`        | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.2% | 100.0ms |       1 | `0x7f093455d340` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.2% | 100.0ms |       1 | `0x7f0934617ac4` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.2% | 100.0ms |       1 | `brk`            | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.2% | 100.0ms |       1 | `0x7f0934617d8a` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.2% | 100.0ms |       1 | `0x7f093461db81` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.2% | 100.0ms |       1 | `0x7f0934617a80` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.2% | 100.0ms |       1 | `0x7f0934617c53` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.2% | 100.0ms |       1 | `munmap`         | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### Standard library

|    % |    Time | Samples | Function                    | Location                                  |
| ---: | ------: | ------: | --------------------------- | ----------------------------------------- |
| 1.6% | 700.0ms |       7 | `parse`                     | `/usr/lib/python3.11/ast.py`              |
| 0.7% | 300.0ms |       3 | `<module>`                  | `/usr/lib/python3.11/dis.py`              |
| 0.5% | 200.0ms |       2 | `debug`                     | `/usr/lib/python3.11/logging/__init__.py` |
| 0.2% | 100.0ms |       1 | `<module>`                  | `/usr/lib/python3.11/traceback.py`        |
| 0.2% | 100.0ms |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`           |
| 0.2% | 100.0ms |       1 | `_load_unlocked`            | `<frozen importlib._bootstrap>`           |
| 0.2% | 100.0ms |       1 | `__set_name__`              | `/usr/lib/python3.11/enum.py`             |
| 0.2% | 100.0ms |       1 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>`  |
| 0.2% | 100.0ms |       1 | `_ip_int_from_string`       | `/usr/lib/python3.11/ipaddress.py`        |
| 0.2% | 100.0ms |       1 | `_get_spec`                 | `<frozen importlib._bootstrap_external>`  |
| 0.2% | 100.0ms |       1 | `find_spec`                 | `<frozen importlib._bootstrap_external>`  |
| 0.2% | 100.0ms |       1 | `_init_module_attrs`        | `<frozen importlib._bootstrap>`           |
| 0.2% | 100.0ms |       1 | `getwidth`                  | `/usr/lib/python3.11/re/_parser.py`       |
| 0.2% | 100.0ms |       1 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py`      |
| 0.2% | 100.0ms |       1 | `_subx`                     | `/usr/lib/python3.11/re/__init__.py`      |

#### Lines

Lines ranked by contribution to each function's self time.

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |    Time | Samples | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 700.0ms |       7 | `/usr/lib/python3.11/ast.py:50` |

##### `<module>` (`/usr/lib/python3.11/dis.py`)

|     % |    Time | Samples | Location                         |
| ----: | ------: | ------: | -------------------------------- |
| 33.3% | 100.0ms |       1 | `/usr/lib/python3.11/dis.py:270` |
| 33.3% | 100.0ms |       1 | `/usr/lib/python3.11/dis.py:674` |
| 33.3% | 100.0ms |       1 | `/usr/lib/python3.11/dis.py:690` |

##### `debug` (`/usr/lib/python3.11/logging/__init__.py`)

|      % |    Time | Samples | Location                                       |
| -----: | ------: | ------: | ---------------------------------------------- |
| 100.0% | 200.0ms |       2 | `/usr/lib/python3.11/logging/__init__.py:1467` |

##### `<module>` (`/usr/lib/python3.11/traceback.py`)

|      % |    Time | Samples | Location                               |
| -----: | ------: | ------: | -------------------------------------- |
| 100.0% | 100.0ms |       1 | `/usr/lib/python3.11/traceback.py:372` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Location                            |
| -----: | ------: | ------: | ----------------------------------- |
| 100.0% | 100.0ms |       1 | `<frozen importlib._bootstrap>:241` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Location                            |
| -----: | ------: | ------: | ----------------------------------- |
| 100.0% | 100.0ms |       1 | `<frozen importlib._bootstrap>:690` |

##### `__set_name__` (`/usr/lib/python3.11/enum.py`)

|      % |    Time | Samples | Location                          |
| -----: | ------: | ------: | --------------------------------- |
| 100.0% | 100.0ms |       1 | `/usr/lib/python3.11/enum.py:308` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % |    Time | Samples | Location                                     |
| -----: | ------: | ------: | -------------------------------------------- |
| 100.0% | 100.0ms |       1 | `<frozen importlib._bootstrap_external>:729` |

##### `_ip_int_from_string` (`/usr/lib/python3.11/ipaddress.py`)

|      % |    Time | Samples | Location                                |
| -----: | ------: | ------: | --------------------------------------- |
| 100.0% | 100.0ms |       1 | `/usr/lib/python3.11/ipaddress.py:1696` |

##### `_get_spec` (`<frozen importlib._bootstrap_external>`)

|      % |    Time | Samples | Location                                      |
| -----: | ------: | ------: | --------------------------------------------- |
| 100.0% | 100.0ms |       1 | `<frozen importlib._bootstrap_external>:1473` |

##### `find_spec` (`<frozen importlib._bootstrap_external>`)

|      % |    Time | Samples | Location                                      |
| -----: | ------: | ------: | --------------------------------------------- |
| 100.0% | 100.0ms |       1 | `<frozen importlib._bootstrap_external>:1612` |

##### `_init_module_attrs` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Location                            |
| -----: | ------: | ------: | ----------------------------------- |
| 100.0% | 100.0ms |       1 | `<frozen importlib._bootstrap>:527` |

##### `getwidth` (`/usr/lib/python3.11/re/_parser.py`)

|      % |    Time | Samples | Location                                |
| -----: | ------: | ------: | --------------------------------------- |
| 100.0% | 100.0ms |       1 | `/usr/lib/python3.11/re/_parser.py:198` |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py`)

|      % |    Time | Samples | Location                                 |
| -----: | ------: | ------: | ---------------------------------------- |
| 100.0% | 100.0ms |       1 | `/usr/lib/python3.11/re/__init__.py:274` |

##### `_subx` (`/usr/lib/python3.11/re/__init__.py`)

|      % |    Time | Samples | Location                                 |
| -----: | ------: | ------: | ---------------------------------------- |
| 100.0% | 100.0ms |       1 | `/usr/lib/python3.11/re/__init__.py:315` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |  Time | Samples | Caller                                  | Location                                                                                         |
| -----: | ----: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 3.60s |      36 | `CPyDef_driver___TokenProxy_____next__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser____addtoken` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |  Time | Samples | Caller                             | Location                                                                                         |
| -----: | ----: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2.50s |      25 | `CPyDef_parse___Parser___addtoken` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_driver___Driver___parse_tokens` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |  Time | Samples | Caller                                  | Location                                                                                         |
| -----: | ----: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2.20s |      22 | `CPyDef_driver___Driver___parse_string` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser___pop` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |  Time | Samples | Caller                              | Location                                                                                         |
| -----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.80s |      18 | `CPyDef_parse___Parser____addtoken` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser___push` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |  Time | Samples | Caller                              | Location                                                                                         |
| -----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.70s |      17 | `CPyDef_parse___Parser____addtoken` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                                                                       | Location                                                                                         |
| ----: | ------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 53.3% | 800.0ms |       8 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__`      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 26.7% | 400.0ms |       4 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 20.0% | 300.0ms |       3 | `CPyDef_black____format_str_once`                                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Time | Samples | Caller                                                                             | Location                                                                                         |
| -----: | ---: | ------: | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |   1s |      10 | `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser___shift` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |     Time | Samples | Caller                              | Location                                                                                         |
| -----: | -------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1000.0ms |      10 | `CPyDef_parse___Parser____addtoken` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7f093388f4a0` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                                  | Location                                                                                         |
| ----: | ------: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 50.0% | 400.0ms |       4 | `CPyDef_parse___Parser____addtoken`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 25.0% | 200.0ms |       2 | `CPyDef_parse___Parser___shift`         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 12.5% | 100.0ms |       1 | `CPyDef_driver___Driver___parse_tokens` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 12.5% | 100.0ms |       1 | `CPyDef_black___get_features_used`      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPy_AddTraceback` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                                                         | Location                                                                                         |
| ----: | ------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 57.1% | 400.0ms |       4 | `CPyDef_trans___hug_power_op_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 28.6% | 200.0ms |       2 | `CPyDef_linegen___run_transformer`                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 14.3% | 100.0ms |       1 | `CPyDef_lines___Line___is_def`                                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7f093388e6b0` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                                                               | Location                                                                                         |
| ----: | ------: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 14.3% | 100.0ms |       1 | `linegen___visit_stmt_LineGenerator_env_clear`                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 14.3% | 100.0ms |       1 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 14.3% | 100.0ms |       1 | `CPyDef_parse___Parser___push`                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 14.3% | 100.0ms |       1 | `trans___StringParenWrapper_clear`                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 14.3% | 100.0ms |       1 | `CPyDef_parse___Parser___pop`                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |    Time | Samples | Caller                                   | Location                                                                                         |
| -----: | ------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 700.0ms |       7 | `CPyDef_parsing____parse_single_version` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___get_features_used` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                                  | Location                                                                                         |
| -----: | ------: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 500.0ms |       5 | `CPyDef_black___detect_target_versions` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7f0933891690` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                                                  | Location                                                                                         |
| ----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 20.0% | 100.0ms |       1 | `pytree___leaves_Leaf_gen_dealloc`                      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 20.0% | 100.0ms |       1 | `linegen___visit_simple_stmt_LineGenerator_env_dealloc` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 20.0% | 100.0ms |       1 | `nodes___visit_default_Visitor_env_dealloc`             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 20.0% | 100.0ms |       1 | `comments___generate_comments_env_dealloc`              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 20.0% | 100.0ms |       1 | `linegen___visit_power_LineGenerator_gen_dealloc`       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                                                                          | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 500.0ms |       5 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                                                                         | Location                                                                                         |
| ----: | ------: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 80.0% | 400.0ms |       4 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 20.0% | 100.0ms |       1 | `CPyDef_linegen___visit_STRING_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_strings___sub_twice` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                                     | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 100.0% | 500.0ms |       5 | `CPyDef_strings___normalize_string_quotes` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `free` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|     % |    Time | Samples | Caller                                                               | Location                                                                                         |
| ----: | ------: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 25.0% | 100.0ms |       1 | `CPyDef_pgen___ParserGenerator___make_label`                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 25.0% | 100.0ms |       1 | `split`                                                              | `/usr/lib/python3.11/re/__init__.py`                                                             |
| 25.0% | 100.0ms |       1 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 25.0% | 100.0ms |       1 | `pytree___Node_clear`                                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___convert` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                          | Location                                                                                         |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------------ |
| 75.0% | 300.0ms |       3 | `CPyDef_parse___Parser___pop`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 25.0% | 100.0ms |       1 | `CPyDef_parse___Parser___shift` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___Leaf_____init__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                    | Location                                                                                         |
| -----: | ------: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 400.0ms |       4 | `CPyDef_pytree___convert` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `pytree___Leaf_traverse` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                              | Location                                                                                         |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 50.0% | 200.0ms |       2 | `parse`                             | `/usr/lib/python3.11/ast.py`                                                                     |
| 25.0% | 100.0ms |       1 | `CPyDef_parse___Parser___push`      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 25.0% | 100.0ms |       1 | `CPyDef_parse___Parser____addtoken` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                                                            | Location                                                                                         |
| ----: | ------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 75.0% | 300.0ms |       3 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 25.0% | 100.0ms |       1 | `CPyDef_black___get_features_used`                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7f093455a165` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller           | Location                              |
| -----: | ------: | ------: | ---------------- | ------------------------------------- |
| 100.0% | 300.0ms |       3 | `0x7f093455c8d8` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `<module>` (`/usr/lib/python3.11/dis.py`)

|      % |    Time | Samples | Caller                      | Location                        |
| -----: | ------: | ------: | --------------------------- | ------------------------------- |
| 100.0% | 300.0ms |       3 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `0x7f0934618480` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|     % |    Time | Samples | Caller                         | Location                                                                                         |
| ----: | ------: | ------: | ------------------------------ | ------------------------------------------------------------------------------------------------ |
| 50.0% | 100.0ms |       1 | `CPyDef_parse___Parser___push` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 50.0% | 100.0ms |       1 | `debug`                        | `/usr/lib/python3.11/logging/__init__.py`                                                        |

##### `0x7f093455b2f9` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller | Location                              |
| -----: | ------: | ------: | ------ | ------------------------------------- |
| 100.0% | 200.0ms |       2 | `free` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7f0934617d26` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller           | Location                              |
| -----: | ------: | ------: | ---------------- | ------------------------------------- |
| 100.0% | 200.0ms |       2 | `0x7f093455d462` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7f0934617cd3` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller                                                               | Location                                                                                         |
| -----: | ------: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 200.0ms |       2 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7f0934617d8c` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller           | Location                              |
| -----: | ------: | ------: | ---------------- | ------------------------------------- |
| 100.0% | 200.0ms |       2 | `0x7f093455d462` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `debug` (`/usr/lib/python3.11/logging/__init__.py`)

|      % |    Time | Samples | Caller                                  | Location                                                                                         |
| -----: | ------: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 200.0ms |       2 | `CPyDef_driver___Driver___parse_tokens` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `fstatat64` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller       | Location                                 |
| -----: | ------: | ------: | ------------ | ---------------------------------------- |
| 100.0% | 100.0ms |       1 | `_path_stat` | `<frozen importlib._bootstrap_external>` |

##### `0x7f093455d09d` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller   | Location                              |
| -----: | ------: | ------: | -------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `malloc` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7f093455ca7a` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller   | Location                              |
| -----: | ------: | ------: | -------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `malloc` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `realloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller                                                               | Location                                                                                         |
| -----: | ------: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7f093455d340` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller    | Location                              |
| -----: | ------: | ------: | --------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `realloc` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7f0934617ac4` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller             | Location                                                                                         |
| -----: | ------: | ------: | ------------------ | ------------------------------------------------------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `CPy_AddTraceback` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `brk` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller | Location                              |
| -----: | ------: | ------: | ------ | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `sbrk` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7f0934617d8a` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller           | Location                              |
| -----: | ------: | ------: | ---------------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `0x7f093455d462` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7f093461db81` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller                                                             | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7f0934617a80` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller                             | Location                                                                                         |
| -----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `CPyDef_black___assert_equivalent` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7f0934617c53` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller           | Location                              |
| -----: | ------: | ------: | ---------------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `0x7f093455d462` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `munmap` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller | Location                              |
| -----: | ------: | ------: | ------ | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `free` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `<module>` (`/usr/lib/python3.11/traceback.py`)

|      % |    Time | Samples | Caller                      | Location                        |
| -----: | ------: | ------: | --------------------------- | ------------------------------- |
| 100.0% | 100.0ms |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Caller        | Location                        |
| -----: | ------: | ------: | ------------- | ------------------------------- |
| 100.0% | 100.0ms |       1 | `exec_module` | `<frozen importlib._bootstrap>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Caller                    | Location                        |
| -----: | ------: | ------: | ------------------------- | ------------------------------- |
| 100.0% | 100.0ms |       1 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `__set_name__` (`/usr/lib/python3.11/enum.py`)

|      % |    Time | Samples | Caller    | Location                      |
| -----: | ------: | ------: | --------- | ----------------------------- |
| 100.0% | 100.0ms |       1 | `__new__` | `/usr/lib/python3.11/enum.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % |    Time | Samples | Caller     | Location                                 |
| -----: | ------: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 100.0ms |       1 | `get_code` | `<frozen importlib._bootstrap_external>` |

##### `_ip_int_from_string` (`/usr/lib/python3.11/ipaddress.py`)

|      % |    Time | Samples | Caller     | Location                           |
| -----: | ------: | ------: | ---------- | ---------------------------------- |
| 100.0% | 100.0ms |       1 | `__init__` | `/usr/lib/python3.11/ipaddress.py` |

##### `_get_spec` (`<frozen importlib._bootstrap_external>`)

|      % |    Time | Samples | Caller      | Location                                 |
| -----: | ------: | ------: | ----------- | ---------------------------------------- |
| 100.0% | 100.0ms |       1 | `find_spec` | `<frozen importlib._bootstrap_external>` |

##### `find_spec` (`<frozen importlib._bootstrap_external>`)

|      % |    Time | Samples | Caller      | Location                                 |
| -----: | ------: | ------: | ----------- | ---------------------------------------- |
| 100.0% | 100.0ms |       1 | `_get_spec` | `<frozen importlib._bootstrap_external>` |

##### `_init_module_attrs` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Caller             | Location                        |
| -----: | ------: | ------: | ------------------ | ------------------------------- |
| 100.0% | 100.0ms |       1 | `module_from_spec` | `<frozen importlib._bootstrap>` |

##### `getwidth` (`/usr/lib/python3.11/re/_parser.py`)

|      % |    Time | Samples | Caller          | Location                              |
| -----: | ------: | ------: | --------------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `_compile_info` | `/usr/lib/python3.11/re/_compiler.py` |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py`)

|      % |    Time | Samples | Caller  | Location                             |
| -----: | ------: | ------: | ------- | ------------------------------------ |
| 100.0% | 100.0ms |       1 | `split` | `/usr/lib/python3.11/re/__init__.py` |

##### `_subx` (`/usr/lib/python3.11/re/__init__.py`)

|      % |    Time | Samples | Caller                       | Location                                                                                         |
| -----: | ------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `CPyDef_strings___sub_twice` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |   Time | Samples | Function                                | Location                                                                                         |
| -----: | -----: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 42.90s |     429 | `0x7f09344ec24a`                        | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
|  98.6% | 42.30s |     423 | `_run_module_as_main`                   | `<frozen runpy>`                                                                                 |
|  93.2% |    40s |     400 | `CPyDef_black___format_file_in_place`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  93.2% |    40s |     400 | `CPyDef_black___reformat_one`           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  93.2% |    40s |     400 | `CPyPy_black___reformat_one`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  93.2% |    40s |     400 | `CPyDef_black___main`                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  93.2% |    40s |     400 | `CPyPy_black___main`                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  93.2% |    40s |     400 | `new_func`                              | `/venv/lib/python3.11/site-packages/click/decorators.py`                                         |
|  93.2% |    40s |     400 | `invoke`                                | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
|  93.2% |    40s |     400 | `main`                                  | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
|  93.2% |    40s |     400 | `__call__`                              | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
|  93.2% |    40s |     400 | `CPyDef_black___patched_main`           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  93.2% |    40s |     400 | `CPyPy_black___patched_main`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  93.2% |    40s |     400 | `<module>`                              | `/venv/lib/python3.11/site-packages/black/__main__.py`                                           |
|  93.2% |    40s |     400 | `_run_code`                             | `<frozen runpy>`                                                                                 |
|  93.0% | 39.90s |     399 | `CPyDef_black___format_file_contents`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  85.8% | 36.80s |     368 | `CPyDef_black____format_str_once`       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  64.6% | 27.70s |     277 | `CPyDef_black___format_str`             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  45.9% | 19.70s |     197 | `CPyDef_driver___Driver___parse_tokens` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  45.9% | 19.70s |     197 | `CPyDef_driver___Driver___parse_string` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

#### Categories

##### Third-party

|     % |   Time | Samples | Function                                         | Location                                                                                         |
| ----: | -----: | ------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 93.2% |    40s |     400 | `CPyDef_black___format_file_in_place`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 93.2% |    40s |     400 | `CPyDef_black___reformat_one`                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 93.2% |    40s |     400 | `CPyPy_black___reformat_one`                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 93.2% |    40s |     400 | `CPyDef_black___main`                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 93.2% |    40s |     400 | `CPyPy_black___main`                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 93.2% |    40s |     400 | `new_func`                                       | `/venv/lib/python3.11/site-packages/click/decorators.py`                                         |
| 93.2% |    40s |     400 | `invoke`                                         | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| 93.2% |    40s |     400 | `main`                                           | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| 93.2% |    40s |     400 | `__call__`                                       | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| 93.2% |    40s |     400 | `CPyDef_black___patched_main`                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 93.2% |    40s |     400 | `CPyPy_black___patched_main`                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 93.2% |    40s |     400 | `<module>`                                       | `/venv/lib/python3.11/site-packages/black/__main__.py`                                           |
| 93.0% | 39.90s |     399 | `CPyDef_black___format_file_contents`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 85.8% | 36.80s |     368 | `CPyDef_black____format_str_once`                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 64.6% | 27.70s |     277 | `CPyDef_black___format_str`                      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 45.9% | 19.70s |     197 | `CPyDef_driver___Driver___parse_tokens`          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 45.9% | 19.70s |     197 | `CPyDef_driver___Driver___parse_string`          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 45.9% | 19.70s |     197 | `CPyDef_parsing___lib2to3_parse`                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 28.4% | 12.20s |     122 | `CPyDef_black___check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 23.5% | 10.10s |     101 | `CPyDef_parse___Parser___addtoken`               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Native

|      % |    Time | Samples | Function         | Location                              |
| -----: | ------: | ------: | ---------------- | ------------------------------------- |
| 100.0% |  42.90s |     429 | `0x7f09344ec24a` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   1.9% | 800.0ms |       8 | `free`           | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   1.9% | 800.0ms |       8 | `realloc`        | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   1.4% | 600.0ms |       6 | `0x7f093455d462` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   1.2% | 500.0ms |       5 | `malloc`         | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.7% | 300.0ms |       3 | `0x7f093455a165` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.7% | 300.0ms |       3 | `0x7f093455c8d8` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.5% | 200.0ms |       2 | `0x7f0934618480` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.5% | 200.0ms |       2 | `0x7f093455b2f9` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.5% | 200.0ms |       2 | `0x7f0934617d26` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.5% | 200.0ms |       2 | `0x7f0934617cd3` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.5% | 200.0ms |       2 | `0x7f0934617d8c` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.2% | 100.0ms |       1 | `0x7f0933899cc9` | `<unknown>`                           |
|   0.2% | 100.0ms |       1 | `0x7f093389af25` | `<unknown>`                           |
|   0.2% | 100.0ms |       1 | `0x7f093389a842` | `<unknown>`                           |
|   0.2% | 100.0ms |       1 | `fstatat64`      | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.2% | 100.0ms |       1 | `0x7f093455d09d` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.2% | 100.0ms |       1 | `0x7f093455ca7a` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.2% | 100.0ms |       1 | `0x7f093455d340` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|   0.2% | 100.0ms |       1 | `0x7f0934617ac4` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### Standard library

|     % |    Time | Samples | Function                    | Location                                  |
| ----: | ------: | ------: | --------------------------- | ----------------------------------------- |
| 98.6% |  42.30s |     423 | `_run_module_as_main`       | `<frozen runpy>`                          |
| 93.2% |     40s |     400 | `_run_code`                 | `<frozen runpy>`                          |
|  5.4% |   2.30s |      23 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`           |
|  5.4% |   2.30s |      23 | `_load_unlocked`            | `<frozen importlib._bootstrap>`           |
|  5.4% |   2.30s |      23 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`           |
|  5.4% |   2.30s |      23 | `_find_and_load`            | `<frozen importlib._bootstrap>`           |
|  5.4% |   2.30s |      23 | `create_module`             | `<frozen importlib._bootstrap_external>`  |
|  5.4% |   2.30s |      23 | `module_from_spec`          | `<frozen importlib._bootstrap>`           |
|  5.4% |   2.30s |      23 | `_get_module_details`       | `<frozen runpy>`                          |
|  3.3% |   1.40s |      14 | `parse`                     | `/usr/lib/python3.11/ast.py`              |
|  2.8% |   1.20s |      12 | `exec_module`               | `<frozen importlib._bootstrap_external>`  |
|  1.4% | 600.0ms |       6 | `<module>`                  | `/usr/lib/python3.11/inspect.py`          |
|  1.4% | 600.0ms |       6 | `<module>`                  | `/usr/lib/python3.11/dataclasses.py`      |
|  0.7% | 300.0ms |       3 | `<module>`                  | `/usr/lib/python3.11/dis.py`              |
|  0.7% | 300.0ms |       3 | `_get_spec`                 | `<frozen importlib._bootstrap_external>`  |
|  0.7% | 300.0ms |       3 | `find_spec`                 | `<frozen importlib._bootstrap_external>`  |
|  0.7% | 300.0ms |       3 | `_find_spec`                | `<frozen importlib._bootstrap>`           |
|  0.7% | 300.0ms |       3 | `debug`                     | `/usr/lib/python3.11/logging/__init__.py` |
|  0.5% | 200.0ms |       2 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py`      |
|  0.5% | 200.0ms |       2 | `split`                     | `/usr/lib/python3.11/re/__init__.py`      |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x7f09344ec24a` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|     % |    Time | Samples | Callee                | Location                                                                                         |
| ----: | ------: | ------: | --------------------- | ------------------------------------------------------------------------------------------------ |
| 98.6% |  42.30s |     423 | `_run_module_as_main` | `<frozen runpy>`                                                                                 |
|  0.2% | 100.0ms |       1 | `pytree___Node_clear` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_run_module_as_main` (`<frozen runpy>`)

|     % |  Time | Samples | Callee                | Location         |
| ----: | ----: | ------: | --------------------- | ---------------- |
| 94.6% |   40s |     400 | `_run_code`           | `<frozen runpy>` |
|  5.4% | 2.30s |      23 | `_get_module_details` | `<frozen runpy>` |

##### `CPyDef_black___format_file_in_place` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Callee                                | Location                                                                                         |
| ----: | ------: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 99.8% |  39.90s |     399 | `CPyDef_black___format_file_contents` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  0.2% | 100.0ms |       1 | `free`                                | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |

##### `CPyDef_black___reformat_one` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Time | Samples | Callee                                | Location                                                                                         |
| -----: | ---: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |  40s |     400 | `CPyDef_black___format_file_in_place` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyPy_black___reformat_one` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Time | Samples | Callee                        | Location                                                                                         |
| -----: | ---: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |  40s |     400 | `CPyDef_black___reformat_one` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Time | Samples | Callee                       | Location                                                                                         |
| -----: | ---: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |  40s |     400 | `CPyPy_black___reformat_one` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyPy_black___main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Time | Samples | Callee                | Location                                                                                         |
| -----: | ---: | ------: | --------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |  40s |     400 | `CPyDef_black___main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`)

|     % |   Time | Samples | Callee               | Location                                                                                         |
| ----: | -----: | ------: | -------------------- | ------------------------------------------------------------------------------------------------ |
| 99.8% | 39.90s |     399 | `CPyPy_black___main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |    Time | Samples | Callee               | Location                                                                                         |
| -----: | ------: | ------: | -------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |     40s |     400 | `invoke`             | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
|  99.8% |  39.90s |     399 | `new_func`           | `/venv/lib/python3.11/site-packages/click/decorators.py`                                         |
|   0.2% | 100.0ms |       1 | `CPyPy_black___main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % | Time | Samples | Callee   | Location                                           |
| -----: | ---: | ------: | -------- | -------------------------------------------------- |
| 100.0% |  40s |     400 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % | Time | Samples | Callee | Location                                           |
| -----: | ---: | ------: | ------ | -------------------------------------------------- |
| 100.0% |  40s |     400 | `main` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Callee     | Location                                               |
| ----: | ------: | ------: | ---------- | ------------------------------------------------------ |
| 99.8% |  39.90s |     399 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py`     |
|  0.2% | 100.0ms |       1 | `<module>` | `/venv/lib/python3.11/site-packages/black/__main__.py` |

##### `CPyPy_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Time | Samples | Callee                        | Location                                                                                         |
| -----: | ---: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |  40s |     400 | `CPyDef_black___patched_main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`)

|     % |    Time | Samples | Callee                       | Location                                                                                         |
| ----: | ------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| 99.8% |  39.90s |     399 | `CPyPy_black___patched_main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  0.2% | 100.0ms |       1 | `__call__`                   | `/venv/lib/python3.11/site-packages/click/core.py`                                               |

##### `_run_code` (`<frozen runpy>`)

|     % |    Time | Samples | Callee                       | Location                                                                                         |
| ----: | ------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| 99.8% |  39.90s |     399 | `<module>`                   | `/venv/lib/python3.11/site-packages/black/__main__.py`                                           |
|  0.2% | 100.0ms |       1 | `CPyPy_black___patched_main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_file_contents` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |   Time | Samples | Callee                                           | Location                                                                                         |
| ----: | -----: | ------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 69.4% | 27.70s |     277 | `CPyDef_black___format_str`                      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 30.6% | 12.20s |     122 | `CPyDef_black___check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black____format_str_once` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |   Time | Samples | Callee                                                             | Location                                                                                         |
| ----: | -----: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 53.5% | 19.70s |     197 | `CPyDef_parsing___lib2to3_parse`                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 25.8% |  9.50s |      95 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  8.4% |  3.10s |      31 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  4.1% |  1.50s |      15 | `CPyDef_black___detect_target_versions`                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  3.8% |  1.40s |      14 | `CPyDef_comments___convert_one_fmt_off_pair`                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_str` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |   Time | Samples | Callee                            | Location                                                                                         |
| -----: | -----: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 27.70s |     277 | `CPyDef_black____format_str_once` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_driver___Driver___parse_tokens` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Callee                                               | Location                                                                                         |
| ----: | ------: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 51.3% |  10.10s |     101 | `CPyDef_parse___Parser___addtoken`                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 31.5% |   6.20s |      62 | `CPyDef_driver___TokenProxy_____next__`              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  1.5% | 300.0ms |       3 | `0x7f09338901b0`                                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  1.5% | 300.0ms |       3 | `debug`                                              | `/usr/lib/python3.11/logging/__init__.py`                                                        |
|  1.0% | 200.0ms |       2 | `CPyDef_driver___Driver____partially_consume_prefix` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_driver___Driver___parse_string` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |   Time | Samples | Callee                                  | Location                                                                                         |
| -----: | -----: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 19.70s |     197 | `CPyDef_driver___Driver___parse_tokens` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parsing___lib2to3_parse` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |   Time | Samples | Callee                                  | Location                                                                                         |
| -----: | -----: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 19.70s |     197 | `CPyDef_driver___Driver___parse_string` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___check_stability_and_equivalence` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |  Time | Samples | Callee                             | Location                                                                                         |
| ----: | ----: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| 74.6% | 9.10s |      91 | `CPyDef_black___assert_stable`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 25.4% | 3.10s |      31 | `CPyDef_black___assert_equivalent` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser___addtoken` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Callee                              | Location                                                                                         |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 98.0% |   9.90s |      99 | `CPyDef_parse___Parser____addtoken` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  2.0% | 200.0ms |       2 | `CPyDef_parse___Parser___classify`  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|     % |    Time | Samples | Callee                     | Location                                                                                         |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------ |
| 95.7% |   2.20s |      22 | `CPyInit_black`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 30.4% | 700.0ms |       7 | `CPyInit_black___nodes`    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 30.4% | 700.0ms |       7 | `CPyInit_black___comments` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 26.1% | 600.0ms |       6 | `<module>`                 | `/usr/lib/python3.11/inspect.py`                                                                 |
| 26.1% | 600.0ms |       6 | `<module>`                 | `/usr/lib/python3.11/dataclasses.py`                                                             |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Callee             | Location                                 |
| -----: | ------: | ------: | ------------------ | ---------------------------------------- |
| 100.0% |   2.30s |      23 | `module_from_spec` | `<frozen importlib._bootstrap>`          |
|  52.2% |   1.20s |      12 | `exec_module`      | `<frozen importlib._bootstrap_external>` |
|   4.3% | 100.0ms |       1 | `exec_module`      | `<frozen importlib._bootstrap>`          |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Callee           | Location                        |
| -----: | ------: | ------: | ---------------- | ------------------------------- |
| 100.0% |   2.30s |      23 | `_load_unlocked` | `<frozen importlib._bootstrap>` |
|  13.0% | 300.0ms |       3 | `_find_spec`     | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % |  Time | Samples | Callee                    | Location                        |
| -----: | ----: | ------: | ------------------------- | ------------------------------- |
| 100.0% | 2.30s |      23 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `create_module` (`<frozen importlib._bootstrap_external>`)

|      % |  Time | Samples | Callee                      | Location                        |
| -----: | ----: | ------: | --------------------------- | ------------------------------- |
| 100.0% | 2.30s |      23 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `module_from_spec` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Callee               | Location                                 |
| -----: | ------: | ------: | -------------------- | ---------------------------------------- |
| 100.0% |   2.30s |      23 | `create_module`      | `<frozen importlib._bootstrap_external>` |
|   4.3% | 100.0ms |       1 | `_init_module_attrs` | `<frozen importlib._bootstrap>`          |

##### `_get_module_details` (`<frozen runpy>`)

|      % |  Time | Samples | Callee                | Location                        |
| -----: | ----: | ------: | --------------------- | ------------------------------- |
| 100.0% | 2.30s |      23 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% | 2.30s |      23 | `_get_module_details` | `<frozen runpy>`                |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|     % |    Time | Samples | Callee                   | Location                                                                                         |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------------------------------------------------ |
| 21.4% | 300.0ms |       3 | `pytree___Node_clear`    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 14.3% | 200.0ms |       2 | `pytree___Leaf_traverse` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  7.1% | 100.0ms |       1 | `free`                   | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
|  7.1% | 100.0ms |       1 | `realloc`                | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |

##### `exec_module` (`<frozen importlib._bootstrap_external>`)

|     % |    Time | Samples | Callee                      | Location                                 |
| ----: | ------: | ------: | --------------------------- | ---------------------------------------- |
| 91.7% |   1.10s |      11 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  8.3% | 100.0ms |       1 | `get_code`                  | `<frozen importlib._bootstrap_external>` |

##### `free` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|     % |    Time | Samples | Callee           | Location                              |
| ----: | ------: | ------: | ---------------- | ------------------------------------- |
| 25.0% | 200.0ms |       2 | `0x7f093455b2f9` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 12.5% | 100.0ms |       1 | `0x7f093455b92d` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 12.5% | 100.0ms |       1 | `munmap`         | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `realloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|     % |    Time | Samples | Callee           | Location                              |
| ----: | ------: | ------: | ---------------- | ------------------------------------- |
| 75.0% | 600.0ms |       6 | `0x7f093455d462` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 12.5% | 100.0ms |       1 | `0x7f093455d340` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7f093455d462` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|     % |    Time | Samples | Callee           | Location                              |
| ----: | ------: | ------: | ---------------- | ------------------------------------- |
| 33.3% | 200.0ms |       2 | `0x7f0934617d26` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 33.3% | 200.0ms |       2 | `0x7f0934617d8c` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 16.7% | 100.0ms |       1 | `0x7f0934617d8a` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 16.7% | 100.0ms |       1 | `0x7f0934617c53` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `<module>` (`/usr/lib/python3.11/inspect.py`)

|     % |    Time | Samples | Callee           | Location                        |
| ----: | ------: | ------: | ---------------- | ------------------------------- |
| 83.3% | 500.0ms |       5 | `_find_and_load` | `<frozen importlib._bootstrap>` |
| 16.7% | 100.0ms |       1 | `__new__`        | `/usr/lib/python3.11/enum.py`   |

##### `<module>` (`/usr/lib/python3.11/dataclasses.py`)

|      % |    Time | Samples | Callee           | Location                        |
| -----: | ------: | ------: | ---------------- | ------------------------------- |
| 100.0% | 600.0ms |       6 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `malloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|     % |    Time | Samples | Callee           | Location                              |
| ----: | ------: | ------: | ---------------- | ------------------------------------- |
| 60.0% | 300.0ms |       3 | `0x7f093455c8d8` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 20.0% | 100.0ms |       1 | `0x7f093455d09d` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 20.0% | 100.0ms |       1 | `0x7f093455ca7a` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7f093455c8d8` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Callee           | Location                              |
| -----: | ------: | ------: | ---------------- | ------------------------------------- |
| 100.0% | 300.0ms |       3 | `0x7f093455a165` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `_get_spec` (`<frozen importlib._bootstrap_external>`)

|     % |    Time | Samples | Callee      | Location                                 |
| ----: | ------: | ------: | ----------- | ---------------------------------------- |
| 66.7% | 200.0ms |       2 | `find_spec` | `<frozen importlib._bootstrap_external>` |

##### `find_spec` (`<frozen importlib._bootstrap_external>`)

|      % |    Time | Samples | Callee       | Location                                 |
| -----: | ------: | ------: | ------------ | ---------------------------------------- |
| 100.0% | 300.0ms |       3 | `_get_spec`  | `<frozen importlib._bootstrap_external>` |
|  33.3% | 100.0ms |       1 | `_path_stat` | `<frozen importlib._bootstrap_external>` |

##### `_find_spec` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Callee      | Location                                 |
| -----: | ------: | ------: | ----------- | ---------------------------------------- |
| 100.0% | 300.0ms |       3 | `find_spec` | `<frozen importlib._bootstrap_external>` |

##### `debug` (`/usr/lib/python3.11/logging/__init__.py`)

|     % |    Time | Samples | Callee           | Location                              |
| ----: | ------: | ------: | ---------------- | ------------------------------------- |
| 33.3% | 100.0ms |       1 | `0x7f0934618480` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py`)

|     % |    Time | Samples | Callee    | Location                              |
| ----: | ------: | ------: | --------- | ------------------------------------- |
| 50.0% | 100.0ms |       1 | `compile` | `/usr/lib/python3.11/re/_compiler.py` |

##### `split` (`/usr/lib/python3.11/re/__init__.py`)

|     % |    Time | Samples | Callee     | Location                              |
| ----: | ------: | ------: | ---------- | ------------------------------------- |
| 50.0% | 100.0ms |       1 | `free`     | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 50.0% | 100.0ms |       1 | `_compile` | `/usr/lib/python3.11/re/__init__.py`  |

##### `0x7f0933899cc9` (`<unknown>`)

|      % |    Time | Samples | Callee           | Location                        |
| -----: | ------: | ------: | ---------------- | ------------------------------- |
| 100.0% | 100.0ms |       1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `0x7f093389af25` (`<unknown>`)

|      % |    Time | Samples | Callee           | Location    |
| -----: | ------: | ------: | ---------------- | ----------- |
| 100.0% | 100.0ms |       1 | `0x7f0933899cc9` | `<unknown>` |

##### `0x7f093389a842` (`<unknown>`)

|      % |    Time | Samples | Callee           | Location    |
| -----: | ------: | ------: | ---------------- | ----------- |
| 100.0% | 100.0ms |       1 | `0x7f093389af25` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `_run_module_as_main` (`<frozen runpy>`) ← `0x7f09344ec24a` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|    % |     Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---: | -------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.1% |    2.60s |      26 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 5.4% |    2.30s |      23 | `CPyDef_parse___Parser____addtoken` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 4.4% |    1.90s |      19 | `CPyDef_driver___Driver___parse_tokens` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 3.5% |    1.50s |      15 | `CPyDef_parse___Parser___pop` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.8% |    1.20s |      12 | `CPyDef_parse___Parser___push` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.3% | 1000.0ms |      10 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.1% |  900.0ms |       9 | `CPyDef_parse___Parser___shift` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.6% |  700.0ms |       7 | `parse` (`/usr/lib/python3.11/ast.py`) ← `CPyDef_parsing____parse_single_version` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing___parse_ast` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.2% |  500.0ms |       5 | `CPyDef_parse___Parser___push` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.9% |  400.0ms |       4 | `0x7f093388f4a0` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.7% |  300.0ms |       3 | `<module>` (`/usr/lib/python3.11/dis.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/usr/lib/python3.11/inspect.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/usr/lib/python3.11/dataclasses.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `CPyImport_ImportFromMany` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black_____top_level__` ← `CPyInit_black` ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `create_module` (`<frozen importlib._bootstrap_external>`) ← `module_from_spec` (`<frozen importlib._bootstrap>`) ← `_load_unlocked` ← `_find_and_load_unlocked` ← `_find_and_load` ← `_get_module_details` (`<frozen runpy>`) ← `_get_module_details`                                                                                                                                                                                                |
| 0.7% |  300.0ms |       3 | `CPyDef_pytree___convert` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___pop` ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.7% |  300.0ms |       3 | `CPyDef_black___get_features_used` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black___detect_target_versions` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.7% |  300.0ms |       3 | `0x7f09338901b0` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.7% |  300.0ms |       3 | `0x7f093455a165` (`/usr/lib/x86_64-linux-gnu/libc.so.6`) ← `0x7f093455c8d8` ← `malloc` ← `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.7% |  300.0ms |       3 | `CPyDef_lines___Line___contains_implicit_multiline_string_with_comments` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.7% |  300.0ms |       3 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.7% |  300.0ms |       3 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`) |
| 0.7% |  300.0ms |       3 | `CPyDef_driver___Driver___parse_tokens` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.7% |  300.0ms |       3 | `CPyDef_pytree___Leaf_____init__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_pytree___convert` ← `CPyDef_parse___Parser___shift` ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                          |

# Sampling profile diff

Took 42.90s → 42.30s (-600.00ms, -1.4%) over 429 samples → 423 samples (100.0ms per sample).

| Category         | Change |     Delta |             % |              Time |   Samples |
| ---------------- | -----: | --------: | ------------: | ----------------: | --------: |
| Third-party      |  +3.8% |   +1.400s | 85.5% → 90.1% |   36.70s → 38.10s | 367 → 381 |
| Standard library |    ~0% |  -<0.01µs |   5.6% → 5.7% |             2.40s |        24 |
| Native           | -61.8% |   -2.100s |   7.9% → 3.1% |     3.40s → 1.30s |   34 → 13 |
| Ours             | +25.0% | +100.00ms |   0.9% → 1.2% | 400.0ms → 500.0ms |     4 → 5 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

##### Third-party

|  Change |     Delta |           % |               Time | Samples | Function                                                               | Location                                                                                         |
| ------: | --------: | ----------: | -----------------: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +80.0% |   +1.200s | 3.5% → 6.4% |      1.50s → 2.70s | 15 → 27 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +225.0% | +900.00ms | 0.9% → 3.1% |    400.0ms → 1.30s |  4 → 13 | `CPyDef_lines___Line_____str__`                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +900.0% | +900.00ms | 0.2% → 2.4% | 100.0ms → 1000.0ms |  1 → 10 | `CPyDef_brackets___is_split_before_delimiter`                          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +600.00ms | 0.0% → 1.4% |      0ms → 600.0ms |   0 → 6 | `0x7fa1bf08e6b0`                                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +500.00ms | 0.0% → 1.2% |      0ms → 500.0ms |   0 → 5 | `CPyDef_linegen___LineGenerator___visit_default`                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +400.00ms | 0.0% → 0.9% |      0ms → 400.0ms |   0 → 4 | `pytree___Node_traverse`                                               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +30.0% | +300.00ms | 2.3% → 3.1% |         1s → 1.30s | 10 → 13 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +300.00ms | 0.0% → 0.7% |      0ms → 300.0ms |   0 → 3 | `CPyDef_linegen___run_transformer`                                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +100.0% | +300.00ms | 0.7% → 1.4% |  300.0ms → 600.0ms |   3 → 6 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +300.0% | +300.00ms | 0.2% → 0.9% |  100.0ms → 400.0ms |   1 → 4 | `CPyDef_pytree___Base___prev_sibling`                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +300.00ms | 0.0% → 0.7% |      0ms → 300.0ms |   0 → 3 | `nodes___visit_Visitor_gen_dealloc`                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +300.00ms | 0.0% → 0.7% |      0ms → 300.0ms |   0 → 3 | `linegen___visit_default_LineGenerator_env_clear`                      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +300.0% | +300.00ms | 0.2% → 0.9% |  100.0ms → 400.0ms |   1 → 4 | `CPyDef_comments___generate_comments`                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +300.00ms | 0.0% → 0.7% |      0ms → 300.0ms |   0 → 3 | `0x7fa1bf08e420`                                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +300.00ms | 0.0% → 0.7% |      0ms → 300.0ms |   0 → 3 | `0x7fa1bf090560`                                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +300.00ms | 0.0% → 0.7% |      0ms → 300.0ms |   0 → 3 | `0x7fa1bf091280`                                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +300.00ms | 0.0% → 0.7% |      0ms → 300.0ms |   0 → 3 | `CPyDef_linegen___transform_line`                                      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +60.0% | +300.00ms | 1.2% → 1.9% |  500.0ms → 800.0ms |   5 → 8 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +100.0% | +300.00ms | 0.7% → 1.4% |  300.0ms → 600.0ms |   3 → 6 | `CPyDef_pytree___Node___update_sibling_maps`                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +28.6% | +200.00ms | 1.6% → 2.1% |  700.0ms → 900.0ms |   7 → 9 | `CPy_AddTraceback`                                                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Native

| Change |     Delta |           % |          Time | Samples | Function          | Location                              |
| -----: | --------: | ----------: | ------------: | ------: | ----------------- | ------------------------------------- |
|    new | +200.00ms | 0.0% → 0.5% | 0ms → 200.0ms |   0 → 2 | `0x7fa1bfce724a`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms | 0.0% → 0.2% | 0ms → 100.0ms |   0 → 1 | `__vsnprintf_chk` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms | 0.0% → 0.2% | 0ms → 100.0ms |   0 → 1 | `mmap64`          | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms | 0.0% → 0.2% | 0ms → 100.0ms |   0 → 1 | `0x7fa1bfe13480`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms | 0.0% → 0.2% | 0ms → 100.0ms |   0 → 1 | `0x7fa1bfe134de`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms | 0.0% → 0.2% | 0ms → 100.0ms |   0 → 1 | `0x7fa1bfe12aba`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms | 0.0% → 0.2% | 0ms → 100.0ms |   0 → 1 | `0x7fa1bfd55093`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms | 0.0% → 0.2% | 0ms → 100.0ms |   0 → 1 | `0x7fa1bfe12d8a`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms | 0.0% → 0.2% | 0ms → 100.0ms |   0 → 1 | `0x7fa1bfe12a9d`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms | 0.0% → 0.2% | 0ms → 100.0ms |   0 → 1 | `0x7fa1bfe134aa`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms | 0.0% → 0.2% | 0ms → 100.0ms |   0 → 1 | `0x7fa1bfd55165`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms | 0.0% → 0.2% | 0ms → 100.0ms |   0 → 1 | `0x7fa1bfd561cf`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### Standard library

|  Change |     Delta |           % |              Time | Samples | Function                    | Location                                  |
| ------: | --------: | ----------: | ----------------: | ------: | --------------------------- | ----------------------------------------- |
|     new | +200.00ms | 0.0% → 0.5% |     0ms → 200.0ms |   0 → 2 | `_create_fn`                | `/usr/lib/python3.11/dataclasses.py`      |
|     new | +200.00ms | 0.0% → 0.5% |     0ms → 200.0ms |   0 → 2 | `isEnabledFor`              | `/usr/lib/python3.11/logging/__init__.py` |
|     new | +200.00ms | 0.0% → 0.5% |     0ms → 200.0ms |   0 → 2 | `__hash__`                  | `/usr/lib/python3.11/enum.py`             |
|     new | +100.00ms | 0.0% → 0.2% |     0ms → 100.0ms |   0 → 1 | `_find_and_load`            | `<frozen importlib._bootstrap>`           |
| +100.0% | +100.00ms | 0.2% → 0.5% | 100.0ms → 200.0ms |   1 → 2 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py`      |
|     new | +100.00ms | 0.0% → 0.2% |     0ms → 100.0ms |   0 → 1 | `_init_fn`                  | `/usr/lib/python3.11/dataclasses.py`      |
|     new | +100.00ms | 0.0% → 0.2% |     0ms → 100.0ms |   0 → 1 | `__get_builtin_constructor` | `/usr/lib/python3.11/hashlib.py`          |
|     new | +100.00ms | 0.0% → 0.2% |     0ms → 100.0ms |   0 → 1 | `__enter__`                 | `<frozen importlib._bootstrap>`           |
|     new | +100.00ms | 0.0% → 0.2% |     0ms → 100.0ms |   0 → 1 | `search`                    | `/usr/lib/python3.11/re/__init__.py`      |
|  +14.3% | +100.00ms | 1.6% → 1.9% | 700.0ms → 800.0ms |   7 → 8 | `parse`                     | `/usr/lib/python3.11/ast.py`              |

##### Ours

| Change |     Delta |           % |              Time | Samples | Function   | Location   |
| -----: | --------: | ----------: | ----------------: | ------: | ---------- | ---------- |
| +25.0% | +100.00ms | 0.9% → 1.2% | 400.0ms → 500.0ms |   4 → 5 | `__init__` | `<string>` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |     Delta |           % |               Time | Samples | Function                                                                | Location                                                                                         |
| ------: | --------: | ----------: | -----------------: | ------: | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -90.0% | -900.00ms | 2.3% → 0.2% | 1000.0ms → 100.0ms |  10 → 1 | `CPyDef_parse___Parser___shift`                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -800.00ms | 1.9% → 0.0% |      800.0ms → 0ms |   8 → 0 | `0x7f093388f4a0`                                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -38.9% | -700.00ms | 4.2% → 2.6% |      1.80s → 1.10s | 18 → 11 | `CPyDef_parse___Parser___pop`                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -700.00ms | 1.6% → 0.0% |      700.0ms → 0ms |   7 → 0 | `0x7f093388e6b0`                                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -500.00ms | 1.2% → 0.0% |      500.0ms → 0ms |   5 → 0 | `0x7f09344ec24a`                                                        | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
|  -13.9% | -500.00ms | 8.4% → 7.3% |      3.60s → 3.10s | 36 → 31 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -500.00ms | 1.2% → 0.0% |      500.0ms → 0ms |   5 → 0 | `0x7f0933891690`                                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -400.00ms | 0.9% → 0.0% |      400.0ms → 0ms |   4 → 0 | `free`                                                                  | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
| removed | -400.00ms | 0.9% → 0.0% |      400.0ms → 0ms |   4 → 0 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__`       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -400.00ms | 0.9% → 0.0% |      400.0ms → 0ms |   4 → 0 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -80.0% | -400.00ms | 1.2% → 0.2% |  500.0ms → 100.0ms |   5 → 1 | `CPyDef_strings___sub_twice`                                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -300.00ms | 0.7% → 0.0% |      300.0ms → 0ms |   3 → 0 | `<module>`                                                              | `/usr/lib/python3.11/dis.py`                                                                     |
| removed | -300.00ms | 0.7% → 0.0% |      300.0ms → 0ms |   3 → 0 | `CPyDef_pgen___ParserGenerator___make_label`                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -300.00ms | 0.7% → 0.0% |      300.0ms → 0ms |   3 → 0 | `CPyDef_strings___assert_is_leaf_string`                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -300.00ms | 0.7% → 0.0% |      300.0ms → 0ms |   3 → 0 | `CPyDef_pytree___Leaf_____str__`                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -75.0% | -300.00ms | 0.9% → 0.2% |  400.0ms → 100.0ms |   4 → 1 | `CPyDef_pytree___Node_____init__`                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -300.00ms | 0.7% → 0.0% |      300.0ms → 0ms |   3 → 0 | `0x7f09338901b0`                                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -300.00ms | 0.7% → 0.0% |      300.0ms → 0ms |   3 → 0 | `0x7f093455a165`                                                        | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
| removed | -300.00ms | 0.7% → 0.0% |      300.0ms → 0ms |   3 → 0 | `CPyStr_Build`                                                          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -17.6% | -300.00ms | 4.0% → 3.3% |      1.70s → 1.40s | 17 → 14 | `CPyDef_parse___Parser___push`                                          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Third-party

|  Change |     Delta |           % |               Time | Samples | Function                                                                 | Location                                                                                         |
| ------: | --------: | ----------: | -----------------: | ------: | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
|  -90.0% | -900.00ms | 2.3% → 0.2% | 1000.0ms → 100.0ms |  10 → 1 | `CPyDef_parse___Parser___shift`                                          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -800.00ms | 1.9% → 0.0% |      800.0ms → 0ms |   8 → 0 | `0x7f093388f4a0`                                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -38.9% | -700.00ms | 4.2% → 2.6% |      1.80s → 1.10s | 18 → 11 | `CPyDef_parse___Parser___pop`                                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -700.00ms | 1.6% → 0.0% |      700.0ms → 0ms |   7 → 0 | `0x7f093388e6b0`                                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -13.9% | -500.00ms | 8.4% → 7.3% |      3.60s → 3.10s | 36 → 31 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -500.00ms | 1.2% → 0.0% |      500.0ms → 0ms |   5 → 0 | `0x7f0933891690`                                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -400.00ms | 0.9% → 0.0% |      400.0ms → 0ms |   4 → 0 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__`        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -400.00ms | 0.9% → 0.0% |      400.0ms → 0ms |   4 → 0 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__`  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -80.0% | -400.00ms | 1.2% → 0.2% |  500.0ms → 100.0ms |   5 → 1 | `CPyDef_strings___sub_twice`                                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -300.00ms | 0.7% → 0.0% |      300.0ms → 0ms |   3 → 0 | `CPyDef_pgen___ParserGenerator___make_label`                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -300.00ms | 0.7% → 0.0% |      300.0ms → 0ms |   3 → 0 | `CPyDef_strings___assert_is_leaf_string`                                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -300.00ms | 0.7% → 0.0% |      300.0ms → 0ms |   3 → 0 | `CPyDef_pytree___Leaf_____str__`                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -75.0% | -300.00ms | 0.9% → 0.2% |  400.0ms → 100.0ms |   4 → 1 | `CPyDef_pytree___Node_____init__`                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -300.00ms | 0.7% → 0.0% |      300.0ms → 0ms |   3 → 0 | `0x7f09338901b0`                                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -300.00ms | 0.7% → 0.0% |      300.0ms → 0ms |   3 → 0 | `CPyStr_Build`                                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -17.6% | -300.00ms | 4.0% → 3.3% |      1.70s → 1.40s | 17 → 14 | `CPyDef_parse___Parser___push`                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|   -9.1% | -200.00ms | 5.1% → 4.7% |         2.20s → 2s | 22 → 20 | `CPyDef_driver___Driver___parse_tokens`                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms | 0.7% → 0.2% |  300.0ms → 100.0ms |   3 → 1 | `CPyDef_lines___Line___contains_implicit_multiline_string_with_comments` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms | 0.5% → 0.0% |      200.0ms → 0ms |   2 → 0 | `0x7f093388e7d0`                                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -50.0% | -200.00ms | 0.9% → 0.5% |  400.0ms → 200.0ms |   4 → 2 | `CPyDef_pytree___Leaf_____init__`                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Native

|  Change |     Delta |           % |          Time | Samples | Function         | Location                              |
| ------: | --------: | ----------: | ------------: | ------: | ---------------- | ------------------------------------- |
| removed | -500.00ms | 1.2% → 0.0% | 500.0ms → 0ms |   5 → 0 | `0x7f09344ec24a` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -400.00ms | 0.9% → 0.0% | 400.0ms → 0ms |   4 → 0 | `free`           | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -300.00ms | 0.7% → 0.0% | 300.0ms → 0ms |   3 → 0 | `0x7f093455a165` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -200.00ms | 0.5% → 0.0% | 200.0ms → 0ms |   2 → 0 | `0x7f0934618480` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -200.00ms | 0.5% → 0.0% | 200.0ms → 0ms |   2 → 0 | `0x7f093455b2f9` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -200.00ms | 0.5% → 0.0% | 200.0ms → 0ms |   2 → 0 | `0x7f0934617d26` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -200.00ms | 0.5% → 0.0% | 200.0ms → 0ms |   2 → 0 | `0x7f0934617cd3` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -200.00ms | 0.5% → 0.0% | 200.0ms → 0ms |   2 → 0 | `0x7f0934617d8c` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms | 0.2% → 0.0% | 100.0ms → 0ms |   1 → 0 | `fstatat64`      | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms | 0.2% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7f093455d09d` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms | 0.2% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7f093455ca7a` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms | 0.2% → 0.0% | 100.0ms → 0ms |   1 → 0 | `realloc`        | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms | 0.2% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7f093455d340` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms | 0.2% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7f0934617ac4` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms | 0.2% → 0.0% | 100.0ms → 0ms |   1 → 0 | `brk`            | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms | 0.2% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7f0934617d8a` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms | 0.2% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7f093461db81` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms | 0.2% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7f0934617a80` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms | 0.2% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7f0934617c53` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms | 0.2% → 0.0% | 100.0ms → 0ms |   1 → 0 | `munmap`         | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### Standard library

|  Change |     Delta |           % |          Time | Samples | Function                    | Location                                  |
| ------: | --------: | ----------: | ------------: | ------: | --------------------------- | ----------------------------------------- |
| removed | -300.00ms | 0.7% → 0.0% | 300.0ms → 0ms |   3 → 0 | `<module>`                  | `/usr/lib/python3.11/dis.py`              |
| removed | -200.00ms | 0.5% → 0.0% | 200.0ms → 0ms |   2 → 0 | `debug`                     | `/usr/lib/python3.11/logging/__init__.py` |
| removed | -100.00ms | 0.2% → 0.0% | 100.0ms → 0ms |   1 → 0 | `<module>`                  | `/usr/lib/python3.11/traceback.py`        |
| removed | -100.00ms | 0.2% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`           |
| removed | -100.00ms | 0.2% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_load_unlocked`            | `<frozen importlib._bootstrap>`           |
| removed | -100.00ms | 0.2% → 0.0% | 100.0ms → 0ms |   1 → 0 | `__set_name__`              | `/usr/lib/python3.11/enum.py`             |
| removed | -100.00ms | 0.2% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_ip_int_from_string`       | `/usr/lib/python3.11/ipaddress.py`        |
| removed | -100.00ms | 0.2% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_get_spec`                 | `<frozen importlib._bootstrap_external>`  |
| removed | -100.00ms | 0.2% → 0.0% | 100.0ms → 0ms |   1 → 0 | `find_spec`                 | `<frozen importlib._bootstrap_external>`  |
| removed | -100.00ms | 0.2% → 0.0% | 100.0ms → 0ms |   1 → 0 | `getwidth`                  | `/usr/lib/python3.11/re/_parser.py`       |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |     Delta |             % |              Time |   Samples | Function                                                                            | Location                                                                                         |
| ------: | --------: | ------------: | ----------------: | --------: | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|     new |  +42.300s | 0.0% → 100.0% |      0ms → 42.30s |   0 → 423 | `0x7fa1bfce724a`                                                                    | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
|  +81.5% |   +6.600s | 18.9% → 34.8% |    8.10s → 14.70s |  81 → 147 | `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__`       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +81.2% |   +6.500s | 18.6% → 34.3% |       8s → 14.50s |  80 → 145 | `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +66.7% |       +6s | 21.0% → 35.5% |          9s → 15s |  90 → 150 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__`             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +69.0% |       +6s | 20.3% → 34.8% |    8.70s → 14.70s |  87 → 147 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__`        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +63.0% |   +5.800s | 21.4% → 35.5% |       9.20s → 15s |  92 → 150 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +57.9% |   +5.500s | 22.1% → 35.5% |       9.50s → 15s |  95 → 150 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +47.8% |   +3.200s | 15.6% → 23.4% |     6.70s → 9.90s |   67 → 99 | `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +150.0% |   +2.400s |   3.7% → 9.5% |        1.60s → 4s |   16 → 40 | `CPyDef_lines___Line___append`                                                      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +96.0% |   +2.400s |  5.8% → 11.6% |     2.50s → 4.90s |   25 → 49 | `CPyDef_linegen___visit_power_LineGenerator_gen_____mypyc_generator_helper__`       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +54.8% |   +1.700s |  7.2% → 11.3% |     3.10s → 4.80s |   31 → 48 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__`                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +144.4% |   +1.300s |   2.1% → 5.2% |   900.0ms → 2.20s |    9 → 22 | `CPyDef_linegen___run_transformer`                                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +157.1% |   +1.100s |   1.6% → 4.3% |   700.0ms → 1.80s |    7 → 18 | `CPyDef_brackets___BracketTracker___mark`                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +142.9% |       +1s |   1.6% → 4.0% |   700.0ms → 1.70s |    7 → 17 | `CPyDef_nodes___whitespace`                                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +250.0% |       +1s |   0.9% → 3.3% |   400.0ms → 1.40s |    4 → 14 | `CPyDef_linegen____hugging_power_ops_line_to_string`                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +112.5% | +900.00ms |   1.9% → 4.0% |   800.0ms → 1.70s |    8 → 17 | `CPyDef_lines___Line_____str__`                                                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +450.0% | +900.00ms |   0.5% → 2.6% |   200.0ms → 1.10s |    2 → 11 | `CPyDef_linegen____rhs_transform_line_gen_____mypyc_generator_helper__`             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|   +2.2% | +800.00ms | 85.8% → 88.9% |   36.80s → 37.60s | 368 → 376 | `CPyDef_black____format_str_once`                                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +70.0% | +700.00ms |   2.3% → 4.0% |  1000.0ms → 1.70s |   10 → 17 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__`              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +350.0% | +700.00ms |   0.5% → 2.1% | 200.0ms → 900.0ms |     2 → 9 | `CPyDef_linegen___right_hand_split_gen_____mypyc_generator_helper__`                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Third-party

|  Change |     Delta |             % |               Time |   Samples | Function                                                                            | Location                                                                                         |
| ------: | --------: | ------------: | -----------------: | --------: | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +81.5% |   +6.600s | 18.9% → 34.8% |     8.10s → 14.70s |  81 → 147 | `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__`       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +81.2% |   +6.500s | 18.6% → 34.3% |        8s → 14.50s |  80 → 145 | `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +66.7% |       +6s | 21.0% → 35.5% |           9s → 15s |  90 → 150 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__`             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +69.0% |       +6s | 20.3% → 34.8% |     8.70s → 14.70s |  87 → 147 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__`        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +63.0% |   +5.800s | 21.4% → 35.5% |        9.20s → 15s |  92 → 150 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +57.9% |   +5.500s | 22.1% → 35.5% |        9.50s → 15s |  95 → 150 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +47.8% |   +3.200s | 15.6% → 23.4% |      6.70s → 9.90s |   67 → 99 | `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +150.0% |   +2.400s |   3.7% → 9.5% |         1.60s → 4s |   16 → 40 | `CPyDef_lines___Line___append`                                                      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +96.0% |   +2.400s |  5.8% → 11.6% |      2.50s → 4.90s |   25 → 49 | `CPyDef_linegen___visit_power_LineGenerator_gen_____mypyc_generator_helper__`       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +54.8% |   +1.700s |  7.2% → 11.3% |      3.10s → 4.80s |   31 → 48 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__`                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +144.4% |   +1.300s |   2.1% → 5.2% |    900.0ms → 2.20s |    9 → 22 | `CPyDef_linegen___run_transformer`                                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +157.1% |   +1.100s |   1.6% → 4.3% |    700.0ms → 1.80s |    7 → 18 | `CPyDef_brackets___BracketTracker___mark`                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +142.9% |       +1s |   1.6% → 4.0% |    700.0ms → 1.70s |    7 → 17 | `CPyDef_nodes___whitespace`                                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +250.0% |       +1s |   0.9% → 3.3% |    400.0ms → 1.40s |    4 → 14 | `CPyDef_linegen____hugging_power_ops_line_to_string`                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +112.5% | +900.00ms |   1.9% → 4.0% |    800.0ms → 1.70s |    8 → 17 | `CPyDef_lines___Line_____str__`                                                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +450.0% | +900.00ms |   0.5% → 2.6% |    200.0ms → 1.10s |    2 → 11 | `CPyDef_linegen____rhs_transform_line_gen_____mypyc_generator_helper__`             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|   +2.2% | +800.00ms | 85.8% → 88.9% |    36.80s → 37.60s | 368 → 376 | `CPyDef_black____format_str_once`                                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +70.0% | +700.00ms |   2.3% → 4.0% |   1000.0ms → 1.70s |   10 → 17 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__`              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +350.0% | +700.00ms |   0.5% → 2.1% |  200.0ms → 900.0ms |     2 → 9 | `CPyDef_linegen___right_hand_split_gen_____mypyc_generator_helper__`                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +233.3% | +700.00ms |   0.7% → 2.4% | 300.0ms → 1000.0ms |    3 → 10 | `CPyDef_brackets___is_split_before_delimiter`                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Native

| Change |     Delta |             % |          Time | Samples | Function          | Location                              |
| -----: | --------: | ------------: | ------------: | ------: | ----------------- | ------------------------------------- |
|    new |  +42.300s | 0.0% → 100.0% |  0ms → 42.30s | 0 → 423 | `0x7fa1bfce724a`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms |   0.0% → 0.2% | 0ms → 100.0ms |   0 → 1 | `__vsnprintf_chk` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms |   0.0% → 0.2% | 0ms → 100.0ms |   0 → 1 | `mmap64`          | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms |   0.0% → 0.2% | 0ms → 100.0ms |   0 → 1 | `0x7fa1bfe13480`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms |   0.0% → 0.2% | 0ms → 100.0ms |   0 → 1 | `0x7fa1bfe134de`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms |   0.0% → 0.2% | 0ms → 100.0ms |   0 → 1 | `0x7fa1bfe12aba`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms |   0.0% → 0.2% | 0ms → 100.0ms |   0 → 1 | `0x7fa1bfd55093`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms |   0.0% → 0.2% | 0ms → 100.0ms |   0 → 1 | `0x7fa1bfd584c9`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms |   0.0% → 0.2% | 0ms → 100.0ms |   0 → 1 | `0x7fa1bfe12d8a`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms |   0.0% → 0.2% | 0ms → 100.0ms |   0 → 1 | `0x7fa1bfd58462`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms |   0.0% → 0.2% | 0ms → 100.0ms |   0 → 1 | `0x7fa1bfe12a9d`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms |   0.0% → 0.2% | 0ms → 100.0ms |   0 → 1 | `0x7fa1bfe134aa`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms |   0.0% → 0.2% | 0ms → 100.0ms |   0 → 1 | `0x7fa1bfd55165`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms |   0.0% → 0.2% | 0ms → 100.0ms |   0 → 1 | `0x7fa1bfd578d8`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms |   0.0% → 0.2% | 0ms → 100.0ms |   0 → 1 | `0x7fa1bfd561cf`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### Standard library

|  Change |     Delta |             % |              Time |   Samples | Function                    | Location                                  |
| ------: | --------: | ------------: | ----------------: | --------: | --------------------------- | ----------------------------------------- |
|   +1.3% | +500.00ms | 93.2% → 95.7% |      40s → 40.50s | 400 → 405 | `_run_code`                 | `<frozen runpy>`                          |
|     new | +300.00ms |   0.0% → 0.7% |     0ms → 300.0ms |     0 → 3 | `_process_class`            | `/usr/lib/python3.11/dataclasses.py`      |
|     new | +300.00ms |   0.0% → 0.7% |     0ms → 300.0ms |     0 → 3 | `wrap`                      | `/usr/lib/python3.11/dataclasses.py`      |
| +200.0% | +200.00ms |   0.2% → 0.7% | 100.0ms → 300.0ms |     1 → 3 | `_handle_fromlist`          | `<frozen importlib._bootstrap>`           |
|     new | +200.00ms |   0.0% → 0.5% |     0ms → 200.0ms |     0 → 2 | `<module>`                  | `/usr/lib/python3.11/re/__init__.py`      |
|     new | +200.00ms |   0.0% → 0.5% |     0ms → 200.0ms |     0 → 2 | `<module>`                  | `/usr/lib/python3.11/json/decoder.py`     |
|     new | +200.00ms |   0.0% → 0.5% |     0ms → 200.0ms |     0 → 2 | `<module>`                  | `/usr/lib/python3.11/json/__init__.py`    |
|     new | +200.00ms |   0.0% → 0.5% |     0ms → 200.0ms |     0 → 2 | `_create_fn`                | `/usr/lib/python3.11/dataclasses.py`      |
|     new | +200.00ms |   0.0% → 0.5% |     0ms → 200.0ms |     0 → 2 | `isEnabledFor`              | `/usr/lib/python3.11/logging/__init__.py` |
|     new | +200.00ms |   0.0% → 0.5% |     0ms → 200.0ms |     0 → 2 | `search`                    | `/usr/lib/python3.11/re/__init__.py`      |
|     new | +200.00ms |   0.0% → 0.5% |     0ms → 200.0ms |     0 → 2 | `__hash__`                  | `/usr/lib/python3.11/enum.py`             |
|     new | +100.00ms |   0.0% → 0.2% |     0ms → 100.0ms |     0 → 1 | `<module>`                  | `/usr/lib/python3.11/re/_compiler.py`     |
|     new | +100.00ms |   0.0% → 0.2% |     0ms → 100.0ms |     0 → 1 | `_frozen_get_del_attr`      | `/usr/lib/python3.11/dataclasses.py`      |
|     new | +100.00ms |   0.0% → 0.2% |     0ms → 100.0ms |     0 → 1 | `_init_fn`                  | `/usr/lib/python3.11/dataclasses.py`      |
|     new | +100.00ms |   0.0% → 0.2% |     0ms → 100.0ms |     0 → 1 | `__get_builtin_constructor` | `/usr/lib/python3.11/hashlib.py`          |
|     new | +100.00ms |   0.0% → 0.2% |     0ms → 100.0ms |     0 → 1 | `__get_openssl_constructor` | `/usr/lib/python3.11/hashlib.py`          |
|     new | +100.00ms |   0.0% → 0.2% |     0ms → 100.0ms |     0 → 1 | `<module>`                  | `/usr/lib/python3.11/hashlib.py`          |
|     new | +100.00ms |   0.0% → 0.2% |     0ms → 100.0ms |     0 → 1 | `_cmp_fn`                   | `/usr/lib/python3.11/dataclasses.py`      |
|     new | +100.00ms |   0.0% → 0.2% |     0ms → 100.0ms |     0 → 1 | `dataclass`                 | `/usr/lib/python3.11/dataclasses.py`      |
|     new | +100.00ms |   0.0% → 0.2% |     0ms → 100.0ms |     0 → 1 | `__enter__`                 | `<frozen importlib._bootstrap>`           |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |     Delta |             % |            Time |   Samples | Function                                                             | Location                                                                                         |
| ------: | --------: | ------------: | --------------: | --------: | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed |  -42.900s | 100.0% → 0.0% |    42.90s → 0ms |   429 → 0 | `0x7f09344ec24a`                                                     | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
|  -29.4% |   -5.800s | 45.9% → 32.9% | 19.70s → 13.90s | 197 → 139 | `CPyDef_driver___Driver___parse_tokens`                              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -29.4% |   -5.800s | 45.9% → 32.9% | 19.70s → 13.90s | 197 → 139 | `CPyDef_driver___Driver___parse_string`                              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -29.4% |   -5.800s | 45.9% → 32.9% | 19.70s → 13.90s | 197 → 139 | `CPyDef_parsing___lib2to3_parse`                                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -24.8% |   -2.500s | 23.5% → 18.0% |  10.10s → 7.60s |  101 → 76 | `CPyDef_parse___Parser___addtoken`                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -24.2% |   -2.400s | 23.1% → 17.7% |   9.90s → 7.50s |   99 → 75 | `CPyDef_parse___Parser____addtoken`                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -37.1% |   -2.300s |  14.5% → 9.2% |   6.20s → 3.90s |   62 → 39 | `CPyDef_driver___TokenProxy_____next__`                              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -35.5% |   -2.200s |  14.5% → 9.5% |      6.20s → 4s |   62 → 40 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -39.3% |   -1.100s |   6.5% → 4.0% |   2.80s → 1.70s |   28 → 17 | `CPyDef_parse___Parser___pop`                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -58.8% |       -1s |   4.0% → 1.7% | 1.70s → 700.0ms |    17 → 7 | `CPyDef_parse___Parser___shift`                                      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -34.8% | -800.00ms |   5.4% → 3.5% |   2.30s → 1.50s |   23 → 15 | `_call_with_frames_removed`                                          | `<frozen importlib._bootstrap>`                                                                  |
|  -34.8% | -800.00ms |   5.4% → 3.5% |   2.30s → 1.50s |   23 → 15 | `_load_unlocked`                                                     | `<frozen importlib._bootstrap>`                                                                  |
|  -34.8% | -800.00ms |   5.4% → 3.5% |   2.30s → 1.50s |   23 → 15 | `_find_and_load_unlocked`                                            | `<frozen importlib._bootstrap>`                                                                  |
|  -34.8% | -800.00ms |   5.4% → 3.5% |   2.30s → 1.50s |   23 → 15 | `_find_and_load`                                                     | `<frozen importlib._bootstrap>`                                                                  |
|  -34.8% | -800.00ms |   5.4% → 3.5% |   2.30s → 1.50s |   23 → 15 | `create_module`                                                      | `<frozen importlib._bootstrap_external>`                                                         |
|  -34.8% | -800.00ms |   5.4% → 3.5% |   2.30s → 1.50s |   23 → 15 | `module_from_spec`                                                   | `<frozen importlib._bootstrap>`                                                                  |
|  -34.8% | -800.00ms |   5.4% → 3.5% |   2.30s → 1.50s |   23 → 15 | `_get_module_details`                                                | `<frozen runpy>`                                                                                 |
| removed | -800.00ms |   1.9% → 0.0% |   800.0ms → 0ms |     8 → 0 | `0x7f093388f4a0`                                                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -31.8% | -700.00ms |   5.1% → 3.5% |   2.20s → 1.50s |   22 → 15 | `CPyDef_black_____top_level__`                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -31.8% | -700.00ms |   5.1% → 3.5% |   2.20s → 1.50s |   22 → 15 | `CPyInit_black`                                                      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Third-party

|  Change |     Delta |             % |              Time |   Samples | Function                                                                       | Location                                                                                         |
| ------: | --------: | ------------: | ----------------: | --------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
|  -29.4% |   -5.800s | 45.9% → 32.9% |   19.70s → 13.90s | 197 → 139 | `CPyDef_driver___Driver___parse_tokens`                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -29.4% |   -5.800s | 45.9% → 32.9% |   19.70s → 13.90s | 197 → 139 | `CPyDef_driver___Driver___parse_string`                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -29.4% |   -5.800s | 45.9% → 32.9% |   19.70s → 13.90s | 197 → 139 | `CPyDef_parsing___lib2to3_parse`                                               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -24.8% |   -2.500s | 23.5% → 18.0% |    10.10s → 7.60s |  101 → 76 | `CPyDef_parse___Parser___addtoken`                                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -24.2% |   -2.400s | 23.1% → 17.7% |     9.90s → 7.50s |   99 → 75 | `CPyDef_parse___Parser____addtoken`                                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -37.1% |   -2.300s |  14.5% → 9.2% |     6.20s → 3.90s |   62 → 39 | `CPyDef_driver___TokenProxy_____next__`                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -35.5% |   -2.200s |  14.5% → 9.5% |        6.20s → 4s |   62 → 40 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -39.3% |   -1.100s |   6.5% → 4.0% |     2.80s → 1.70s |   28 → 17 | `CPyDef_parse___Parser___pop`                                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -58.8% |       -1s |   4.0% → 1.7% |   1.70s → 700.0ms |    17 → 7 | `CPyDef_parse___Parser___shift`                                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -800.00ms |   1.9% → 0.0% |     800.0ms → 0ms |     8 → 0 | `0x7f093388f4a0`                                                               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -31.8% | -700.00ms |   5.1% → 3.5% |     2.20s → 1.50s |   22 → 15 | `CPyDef_black_____top_level__`                                                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -31.8% | -700.00ms |   5.1% → 3.5% |     2.20s → 1.50s |   22 → 15 | `CPyInit_black`                                                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -35.0% | -700.00ms |   4.7% → 3.1% |        2s → 1.30s |   20 → 13 | `CPyImport_ImportFromMany`                                                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -700.00ms |   1.6% → 0.0% |     700.0ms → 0ms |     7 → 0 | `0x7f093388e6b0`                                                               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -40.0% | -600.00ms |   3.5% → 2.1% |   1.50s → 900.0ms |    15 → 9 | `CPyDef_linegen___visit_STRING_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -40.0% | -600.00ms |   3.5% → 2.1% |   1.50s → 900.0ms |    15 → 9 | `CPyDef_black___get_features_used`                                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -40.0% | -600.00ms |   3.5% → 2.1% |   1.50s → 900.0ms |    15 → 9 | `CPyDef_black___detect_target_versions`                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -42.9% | -600.00ms |   3.3% → 1.9% |   1.40s → 800.0ms |    14 → 8 | `CPyDef_comments___convert_one_fmt_off_pair`                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -85.7% | -600.00ms |   1.6% → 0.2% | 700.0ms → 100.0ms |     7 → 1 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__`              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -75.0% | -600.00ms |   1.9% → 0.5% | 800.0ms → 200.0ms |     8 → 2 | `CPyDef_pytree___leaves_Base_gen_____mypyc_generator_helper__`                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Native

|  Change |     Delta |             % |              Time | Samples | Function         | Location                              |
| ------: | --------: | ------------: | ----------------: | ------: | ---------------- | ------------------------------------- |
| removed |  -42.900s | 100.0% → 0.0% |      42.90s → 0ms | 429 → 0 | `0x7f09344ec24a` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|  -87.5% | -700.00ms |   1.9% → 0.2% | 800.0ms → 100.0ms |   8 → 1 | `free`           | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -600.00ms |   1.4% → 0.0% |     600.0ms → 0ms |   6 → 0 | `0x7f093455d462` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|  -75.0% | -600.00ms |   1.9% → 0.5% | 800.0ms → 200.0ms |   8 → 2 | `realloc`        | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|  -80.0% | -400.00ms |   1.2% → 0.2% | 500.0ms → 100.0ms |   5 → 1 | `malloc`         | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -300.00ms |   0.7% → 0.0% |     300.0ms → 0ms |   3 → 0 | `0x7f093455a165` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -300.00ms |   0.7% → 0.0% |     300.0ms → 0ms |   3 → 0 | `0x7f093455c8d8` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -200.00ms |   0.5% → 0.0% |     200.0ms → 0ms |   2 → 0 | `0x7f0934618480` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -200.00ms |   0.5% → 0.0% |     200.0ms → 0ms |   2 → 0 | `0x7f093455b2f9` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -200.00ms |   0.5% → 0.0% |     200.0ms → 0ms |   2 → 0 | `0x7f0934617d26` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -200.00ms |   0.5% → 0.0% |     200.0ms → 0ms |   2 → 0 | `0x7f0934617cd3` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -200.00ms |   0.5% → 0.0% |     200.0ms → 0ms |   2 → 0 | `0x7f0934617d8c` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms |   0.2% → 0.0% |     100.0ms → 0ms |   1 → 0 | `0x7f0933899cc9` | `<unknown>`                           |
| removed | -100.00ms |   0.2% → 0.0% |     100.0ms → 0ms |   1 → 0 | `0x7f093389af25` | `<unknown>`                           |
| removed | -100.00ms |   0.2% → 0.0% |     100.0ms → 0ms |   1 → 0 | `0x7f093389a842` | `<unknown>`                           |
| removed | -100.00ms |   0.2% → 0.0% |     100.0ms → 0ms |   1 → 0 | `fstatat64`      | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms |   0.2% → 0.0% |     100.0ms → 0ms |   1 → 0 | `0x7f093455d09d` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms |   0.2% → 0.0% |     100.0ms → 0ms |   1 → 0 | `0x7f093455ca7a` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms |   0.2% → 0.0% |     100.0ms → 0ms |   1 → 0 | `0x7f093455d340` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms |   0.2% → 0.0% |     100.0ms → 0ms |   1 → 0 | `0x7f0934617ac4` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### Standard library

|  Change |     Delta |             % |              Time |   Samples | Function                    | Location                                  |
| ------: | --------: | ------------: | ----------------: | --------: | --------------------------- | ----------------------------------------- |
|  -34.8% | -800.00ms |   5.4% → 3.5% |     2.30s → 1.50s |   23 → 15 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`           |
|  -34.8% | -800.00ms |   5.4% → 3.5% |     2.30s → 1.50s |   23 → 15 | `_load_unlocked`            | `<frozen importlib._bootstrap>`           |
|  -34.8% | -800.00ms |   5.4% → 3.5% |     2.30s → 1.50s |   23 → 15 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`           |
|  -34.8% | -800.00ms |   5.4% → 3.5% |     2.30s → 1.50s |   23 → 15 | `_find_and_load`            | `<frozen importlib._bootstrap>`           |
|  -34.8% | -800.00ms |   5.4% → 3.5% |     2.30s → 1.50s |   23 → 15 | `create_module`             | `<frozen importlib._bootstrap_external>`  |
|  -34.8% | -800.00ms |   5.4% → 3.5% |     2.30s → 1.50s |   23 → 15 | `module_from_spec`          | `<frozen importlib._bootstrap>`           |
|  -34.8% | -800.00ms |   5.4% → 3.5% |     2.30s → 1.50s |   23 → 15 | `_get_module_details`       | `<frozen runpy>`                          |
| removed | -600.00ms |   1.4% → 0.0% |     600.0ms → 0ms |     6 → 0 | `<module>`                  | `/usr/lib/python3.11/inspect.py`          |
| removed | -600.00ms |   1.4% → 0.0% |     600.0ms → 0ms |     6 → 0 | `<module>`                  | `/usr/lib/python3.11/dataclasses.py`      |
|  -41.7% | -500.00ms |   2.8% → 1.7% |   1.20s → 700.0ms |    12 → 7 | `exec_module`               | `<frozen importlib._bootstrap_external>`  |
|  -28.6% | -400.00ms |   3.3% → 2.4% |  1.40s → 1000.0ms |   14 → 10 | `parse`                     | `/usr/lib/python3.11/ast.py`              |
| removed | -300.00ms |   0.7% → 0.0% |     300.0ms → 0ms |     3 → 0 | `<module>`                  | `/usr/lib/python3.11/dis.py`              |
| removed | -300.00ms |   0.7% → 0.0% |     300.0ms → 0ms |     3 → 0 | `_get_spec`                 | `<frozen importlib._bootstrap_external>`  |
| removed | -300.00ms |   0.7% → 0.0% |     300.0ms → 0ms |     3 → 0 | `find_spec`                 | `<frozen importlib._bootstrap_external>`  |
|   -0.7% | -300.00ms | 98.6% → 99.3% |      42.30s → 42s | 423 → 420 | `_run_module_as_main`       | `<frozen runpy>`                          |
|  -66.7% | -200.00ms |   0.7% → 0.2% | 300.0ms → 100.0ms |     3 → 1 | `_find_spec`                | `<frozen importlib._bootstrap>`           |
| removed | -200.00ms |   0.5% → 0.0% |     200.0ms → 0ms |     2 → 0 | `split`                     | `/usr/lib/python3.11/re/__init__.py`      |
|  -33.3% | -100.00ms |   0.7% → 0.5% | 300.0ms → 200.0ms |     3 → 2 | `debug`                     | `/usr/lib/python3.11/logging/__init__.py` |
| removed | -100.00ms |   0.2% → 0.0% |     100.0ms → 0ms |     1 → 0 | `<module>`                  | `/usr/lib/python3.11/traceback.py`        |
| removed | -100.00ms |   0.2% → 0.0% |     100.0ms → 0ms |     1 → 0 | `exec_module`               | `<frozen importlib._bootstrap>`           |

##### Ours

| Change |     Delta |           % |              Time | Samples | Function   | Location   |
| -----: | --------: | ----------: | ----------------: | ------: | ---------- | ---------- |
| -16.7% | -100.00ms | 1.4% → 1.2% | 600.0ms → 500.0ms |   6 → 5 | `__init__` | `<string>` |

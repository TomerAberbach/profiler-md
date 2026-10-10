# Sampling profile diff

Took 24.50s → 34s (+9.500s, +38.8%) over 245 samples → 340 samples (100.0ms per sample).

| Category         |  Change |     Delta |             % |            Time |   Samples |
| ---------------- | ------: | --------: | ------------: | --------------: | --------: |
| Third-party      |  +26.8% |   +6.100s | 93.1% → 85.0% | 22.80s → 28.90s | 228 → 289 |
| Standard library | +228.6% |   +1.600s |   2.9% → 6.8% | 700.0ms → 2.30s |    7 → 23 |
| Native           | +157.1% |   +1.100s |   2.9% → 5.3% | 700.0ms → 1.80s |    7 → 18 |
| Ours             | +233.3% | +700.00ms |   1.2% → 2.9% |    300.0ms → 1s |    3 → 10 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |     Delta |           % |              Time | Samples | Function                                                                 | Location                                                                                         |
| ------: | --------: | ----------: | ----------------: | ------: | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| +142.9% |       +1s | 2.9% → 5.0% |   700.0ms → 1.70s |  7 → 17 | `CPyDef_parse___Parser___push`                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +266.7% | +800.00ms | 1.2% → 3.2% |   300.0ms → 1.10s |  3 → 11 | `parse`                                                                  | `/usr/lib/python3.11/ast.py`                                                                     |
|  +41.2% | +700.00ms | 6.9% → 7.1% |     1.70s → 2.40s | 17 → 24 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +233.3% | +700.00ms | 1.2% → 2.9% |      300.0ms → 1s |  3 → 10 | `__init__`                                                               | `<string>`                                                                                       |
| +600.0% | +600.00ms | 0.4% → 2.1% | 100.0ms → 700.0ms |   1 → 7 | `CPyDef_pytree___Node___update_sibling_maps`                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +250.0% | +500.00ms | 0.8% → 2.1% | 200.0ms → 700.0ms |   2 → 7 | `CPyDef_lines___Line_____str__`                                          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +400.0% | +400.00ms | 0.4% → 1.5% | 100.0ms → 500.0ms |   1 → 5 | `CPyDef_lines___Line___contains_implicit_multiline_string_with_comments` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +400.00ms | 0.0% → 1.2% |     0ms → 400.0ms |   0 → 4 | `_compile_bytecode`                                                      | `<frozen importlib._bootstrap_external>`                                                         |
|  +23.1% | +300.00ms | 5.3% → 4.7% |     1.30s → 1.60s | 13 → 16 | `CPyDef_driver___Driver___parse_tokens`                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +60.0% | +300.00ms | 2.0% → 2.4% | 500.0ms → 800.0ms |   5 → 8 | `CPyDef_black___get_features_used`                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +300.0% | +300.00ms | 0.4% → 1.2% | 100.0ms → 400.0ms |   1 → 4 | `CPyDef_comments___convert_one_fmt_off_pair`                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +300.00ms | 0.0% → 0.9% |     0ms → 300.0ms |   0 → 3 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__`  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +300.00ms | 0.0% → 0.9% |     0ms → 300.0ms |   0 → 3 | `CPyStr_Build`                                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +300.00ms | 0.0% → 0.9% |     0ms → 300.0ms |   0 → 3 | `CPyDef_pytree___convert`                                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +300.00ms | 0.0% → 0.9% |     0ms → 300.0ms |   0 → 3 | `0x7fb1e8d49480`                                                         | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
| +200.0% | +200.00ms | 0.4% → 0.9% | 100.0ms → 300.0ms |   1 → 3 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +200.0% | +200.00ms | 0.4% → 0.9% | 100.0ms → 300.0ms |   1 → 3 | `CPyDef_comments___normalize_trailing_prefix`                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +200.0% | +200.00ms | 0.4% → 0.9% | 100.0ms → 300.0ms |   1 → 3 | `CPyDef_nodes___Visitor___visit`                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +100.0% | +200.00ms | 0.8% → 1.2% | 200.0ms → 400.0ms |   2 → 4 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +200.00ms | 0.0% → 0.6% |     0ms → 200.0ms |   0 → 2 | `CPyDef_trans___hug_power_op_gen_____mypyc_generator_helper__`           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Third-party

|  Change |     Delta |           % |              Time | Samples | Function                                                                 | Location                                                                                         |
| ------: | --------: | ----------: | ----------------: | ------: | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| +142.9% |       +1s | 2.9% → 5.0% |   700.0ms → 1.70s |  7 → 17 | `CPyDef_parse___Parser___push`                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +41.2% | +700.00ms | 6.9% → 7.1% |     1.70s → 2.40s | 17 → 24 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +600.0% | +600.00ms | 0.4% → 2.1% | 100.0ms → 700.0ms |   1 → 7 | `CPyDef_pytree___Node___update_sibling_maps`                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +250.0% | +500.00ms | 0.8% → 2.1% | 200.0ms → 700.0ms |   2 → 7 | `CPyDef_lines___Line_____str__`                                          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +400.0% | +400.00ms | 0.4% → 1.5% | 100.0ms → 500.0ms |   1 → 5 | `CPyDef_lines___Line___contains_implicit_multiline_string_with_comments` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +23.1% | +300.00ms | 5.3% → 4.7% |     1.30s → 1.60s | 13 → 16 | `CPyDef_driver___Driver___parse_tokens`                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +60.0% | +300.00ms | 2.0% → 2.4% | 500.0ms → 800.0ms |   5 → 8 | `CPyDef_black___get_features_used`                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +300.0% | +300.00ms | 0.4% → 1.2% | 100.0ms → 400.0ms |   1 → 4 | `CPyDef_comments___convert_one_fmt_off_pair`                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +300.00ms | 0.0% → 0.9% |     0ms → 300.0ms |   0 → 3 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__`  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +300.00ms | 0.0% → 0.9% |     0ms → 300.0ms |   0 → 3 | `CPyStr_Build`                                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +300.00ms | 0.0% → 0.9% |     0ms → 300.0ms |   0 → 3 | `CPyDef_pytree___convert`                                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +200.0% | +200.00ms | 0.4% → 0.9% | 100.0ms → 300.0ms |   1 → 3 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +200.0% | +200.00ms | 0.4% → 0.9% | 100.0ms → 300.0ms |   1 → 3 | `CPyDef_comments___normalize_trailing_prefix`                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +200.0% | +200.00ms | 0.4% → 0.9% | 100.0ms → 300.0ms |   1 → 3 | `CPyDef_nodes___Visitor___visit`                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +100.0% | +200.00ms | 0.8% → 1.2% | 200.0ms → 400.0ms |   2 → 4 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +200.00ms | 0.0% → 0.6% |     0ms → 200.0ms |   0 → 2 | `CPyDef_trans___hug_power_op_gen_____mypyc_generator_helper__`           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +100.0% | +200.00ms | 0.8% → 1.2% | 200.0ms → 400.0ms |   2 → 4 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__`       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +100.0% | +200.00ms | 0.8% → 1.2% | 200.0ms → 400.0ms |   2 → 4 | `CPyDef_strings___sub_twice`                                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +200.00ms | 0.0% → 0.6% |     0ms → 200.0ms |   0 → 2 | `CPyDef_trans___StringSplitter_____mypyc_defaults_setup`                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +200.00ms | 0.0% → 0.6% |     0ms → 200.0ms |   0 → 2 | `CPyDef_pytree___Leaf_____str__`                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Standard library

|  Change |     Delta |           % |            Time | Samples | Function                    | Location                                 |
| ------: | --------: | ----------: | --------------: | ------: | --------------------------- | ---------------------------------------- |
| +266.7% | +800.00ms | 1.2% → 3.2% | 300.0ms → 1.10s |  3 → 11 | `parse`                     | `/usr/lib/python3.11/ast.py`             |
|     new | +400.00ms | 0.0% → 1.2% |   0ms → 400.0ms |   0 → 4 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
|     new | +200.00ms | 0.0% → 0.6% |   0ms → 200.0ms |   0 → 2 | `_create_fn`                | `/usr/lib/python3.11/dataclasses.py`     |
|     new | +100.00ms | 0.0% → 0.3% |   0ms → 100.0ms |   0 → 1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|     new | +100.00ms | 0.0% → 0.3% |   0ms → 100.0ms |   0 → 1 | `<genexpr>`                 | `<frozen importlib._bootstrap_external>` |
|     new | +100.00ms | 0.0% → 0.3% |   0ms → 100.0ms |   0 → 1 | `spec_from_file_location`   | `<frozen importlib._bootstrap_external>` |
|     new | +100.00ms | 0.0% → 0.3% |   0ms → 100.0ms |   0 → 1 | `__hash__`                  | `/usr/lib/python3.11/enum.py`            |
|     new | +100.00ms | 0.0% → 0.3% |   0ms → 100.0ms |   0 → 1 | `__exit__`                  | `/usr/lib/python3.11/contextlib.py`      |

##### Native

| Change |     Delta |           % |          Time | Samples | Function         | Location                                         |
| -----: | --------: | ----------: | ------------: | ------: | ---------------- | ------------------------------------------------ |
|    new | +300.00ms | 0.0% → 0.9% | 0ms → 300.0ms |   0 → 3 | `0x7fb1e8d49480` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|    new | +200.00ms | 0.0% → 0.6% | 0ms → 200.0ms |   0 → 2 | `0x7fb1e8c8e109` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|    new | +100.00ms | 0.0% → 0.3% | 0ms → 100.0ms |   0 → 1 | `realloc`        | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|    new | +100.00ms | 0.0% → 0.3% | 0ms → 100.0ms |   0 → 1 | `read`           | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|    new | +100.00ms | 0.0% → 0.3% | 0ms → 100.0ms |   0 → 1 | `malloc`         | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|    new | +100.00ms | 0.0% → 0.3% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e8d4954a` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|    new | +100.00ms | 0.0% → 0.3% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e8f27b1d` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
|    new | +100.00ms | 0.0% → 0.3% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e8f27b74` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
|    new | +100.00ms | 0.0% → 0.3% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e8f289b0` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
|    new | +100.00ms | 0.0% → 0.3% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e8f27d07` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
|    new | +100.00ms | 0.0% → 0.3% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e8d48d8c` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|    new | +100.00ms | 0.0% → 0.3% | 0ms → 100.0ms |   0 → 1 | `free`           | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|    new | +100.00ms | 0.0% → 0.3% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e8d48ac8` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|    new | +100.00ms | 0.0% → 0.3% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e8d48d24` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|    new | +100.00ms | 0.0% → 0.3% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e8d48d26` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |

##### Ours

|  Change |     Delta |           % |         Time | Samples | Function   | Location   |
| ------: | --------: | ----------: | -----------: | ------: | ---------- | ---------- |
| +233.3% | +700.00ms | 1.2% → 2.9% | 300.0ms → 1s |  3 → 10 | `__init__` | `<string>` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |     Delta |           % |              Time | Samples | Function                                                          | Location                                                                                         |
| ------: | --------: | ----------: | ----------------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -400.00ms | 1.6% → 0.0% |     400.0ms → 0ms |   4 → 0 | `CPyDef_nodes___whitespace`                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -16.7% | -300.00ms | 7.3% → 4.4% |     1.80s → 1.50s | 18 → 15 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -300.00ms | 1.2% → 0.0% |     300.0ms → 0ms |   3 → 0 | `0x7ff2a708f4a0`                                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -300.00ms | 1.2% → 0.0% |     300.0ms → 0ms |   3 → 0 | `CPyDef_lines___Line___is_def`                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms | 1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms | 1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `CPyDict_Build`                                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms | 1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `CPy_AddTraceback`                                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms | 1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `pytree___Node_clear`                                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms | 0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `CPyDef_mode___Mode_____contains__`                               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms | 0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `CPyDef_linegen___LineGenerator___line`                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms | 0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `0x7ff2a708e6b0`                                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms | 0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `CPyIter_Send`                                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms | 0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `0x7ff2a708f9c0`                                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -20.0% | -200.00ms | 4.1% → 2.4% |      1s → 800.0ms |  10 → 8 | `CPyDef_parse___Parser___pop`                                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -33.3% | -100.00ms | 1.2% → 0.6% | 300.0ms → 200.0ms |   3 → 2 | `CPyDef_nodes___Visitor___visit_default`                          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `<module>`                                                        | `/venv/lib/python3.11/site-packages/pathspec/_backends/re2/pathspec.py`                          |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `0x7ff2a7b2e24a`                                                  | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `<module>`                                                        | `/venv/lib/python3.11/site-packages/platformdirs/__init__.py`                                    |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `CPyDef_pgen___ParserGenerator___make_grammar`                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `getwidth`                                                        | `/usr/lib/python3.11/re/_parser.py`                                                              |

##### Third-party

|  Change |     Delta |           % |              Time | Samples | Function                                                          | Location                                                                                         |
| ------: | --------: | ----------: | ----------------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -400.00ms | 1.6% → 0.0% |     400.0ms → 0ms |   4 → 0 | `CPyDef_nodes___whitespace`                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -16.7% | -300.00ms | 7.3% → 4.4% |     1.80s → 1.50s | 18 → 15 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -300.00ms | 1.2% → 0.0% |     300.0ms → 0ms |   3 → 0 | `0x7ff2a708f4a0`                                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -300.00ms | 1.2% → 0.0% |     300.0ms → 0ms |   3 → 0 | `CPyDef_lines___Line___is_def`                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms | 1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms | 1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `CPyDict_Build`                                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms | 1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `CPy_AddTraceback`                                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms | 1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `pytree___Node_clear`                                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms | 0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `CPyDef_mode___Mode_____contains__`                               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms | 0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `CPyDef_linegen___LineGenerator___line`                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms | 0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `0x7ff2a708e6b0`                                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms | 0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `CPyIter_Send`                                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms | 0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `0x7ff2a708f9c0`                                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -20.0% | -200.00ms | 4.1% → 2.4% |      1s → 800.0ms |  10 → 8 | `CPyDef_parse___Parser___pop`                                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -33.3% | -100.00ms | 1.2% → 0.6% | 300.0ms → 200.0ms |   3 → 2 | `CPyDef_nodes___Visitor___visit_default`                          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `<module>`                                                        | `/venv/lib/python3.11/site-packages/pathspec/_backends/re2/pathspec.py`                          |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `<module>`                                                        | `/venv/lib/python3.11/site-packages/platformdirs/__init__.py`                                    |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `CPyDef_pgen___ParserGenerator___make_grammar`                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `CPyInit_black___ranges`                                          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `CPyDef_black____format_str_once`                                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Standard library

|  Change |     Delta |           % |          Time | Samples | Function            | Location                              |
| ------: | --------: | ----------: | ------------: | ------: | ------------------- | ------------------------------------- |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `getwidth`          | `/usr/lib/python3.11/re/_parser.py`   |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_optimize_charset` | `/usr/lib/python3.11/re/_compiler.py` |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `__init__`          | `/usr/lib/python3.11/re/_parser.py`   |

##### Native

|  Change |     Delta |           % |          Time | Samples | Function         | Location                              |
| ------: | --------: | ----------: | ------------: | ------: | ---------------- | ------------------------------------- |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7b2e24a` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7b9f109` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7c59aba` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7c59d8c` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7c5962e` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `__libc_malloc`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7c5a480` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `parse` (`/usr/lib/python3.11/ast.py`)

|  Change |     Delta |      % |            Time | Samples | Location                        |
| ------: | --------: | -----: | --------------: | ------: | ------------------------------- |
| +266.7% | +800.00ms | 100.0% | 300.0ms → 1.10s |  3 → 11 | `/usr/lib/python3.11/ast.py:50` |

##### `__init__` (`<string>`)

|  Change |     Delta |             % |              Time | Samples | Location     |
| ------: | --------: | ------------: | ----------------: | ------: | ------------ |
|     new | +300.00ms |  0.0% → 30.0% |     0ms → 300.0ms |   0 → 3 | `<string>:4` |
| +100.0% | +100.00ms | 33.3% → 20.0% | 100.0ms → 200.0ms |   1 → 2 | `<string>:5` |
| removed | -100.00ms |  33.3% → 0.0% |     100.0ms → 0ms |   1 → 0 | `<string>:6` |
|     new | +100.00ms |  0.0% → 10.0% |     0ms → 100.0ms |   0 → 1 | `<string>:3` |
|     new | +100.00ms |  0.0% → 10.0% |     0ms → 100.0ms |   0 → 1 | `<string>:8` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

| Change |     Delta |             % |          Time | Samples | Location                                     |
| -----: | --------: | ------------: | ------------: | ------: | -------------------------------------------- |
|    new | +400.00ms | 0.0% → 100.0% | 0ms → 400.0ms |   0 → 4 | `<frozen importlib._bootstrap_external>:729` |

##### `_create_fn` (`/usr/lib/python3.11/dataclasses.py`)

| Change |     Delta |             % |          Time | Samples | Location                                 |
| -----: | --------: | ------------: | ------------: | ------: | ---------------------------------------- |
|    new | +200.00ms | 0.0% → 100.0% | 0ms → 200.0ms |   0 → 2 | `/usr/lib/python3.11/dataclasses.py:433` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

| Change |     Delta |             % |          Time | Samples | Location                            |
| -----: | --------: | ------------: | ------------: | ------: | ----------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `<frozen importlib._bootstrap>:241` |

##### `<genexpr>` (`<frozen importlib._bootstrap_external>`)

| Change |     Delta |             % |          Time | Samples | Location                                     |
| -----: | --------: | ------------: | ------------: | ------: | -------------------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `<frozen importlib._bootstrap_external>:134` |

##### `spec_from_file_location` (`<frozen importlib._bootstrap_external>`)

| Change |     Delta |             % |          Time | Samples | Location                                     |
| -----: | --------: | ------------: | ------------: | ------: | -------------------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `<frozen importlib._bootstrap_external>:803` |

##### `__hash__` (`/usr/lib/python3.11/enum.py`)

| Change |     Delta |             % |          Time | Samples | Location                           |
| -----: | --------: | ------------: | ------------: | ------: | ---------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `/usr/lib/python3.11/enum.py:1230` |

##### `__exit__` (`/usr/lib/python3.11/contextlib.py`)

| Change |     Delta |             % |          Time | Samples | Location                                |
| -----: | --------: | ------------: | ------------: | ------: | --------------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `/usr/lib/python3.11/contextlib.py:551` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/_backends/re2/pathspec.py`)

|  Change |     Delta |             % |          Time | Samples | Location                                                                   |
| ------: | --------: | ------------: | ------------: | ------: | -------------------------------------------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/pathspec/_backends/re2/pathspec.py:20` |

##### `<module>` (`/venv/lib/python3.11/site-packages/platformdirs/__init__.py`)

|  Change |     Delta |             % |          Time | Samples | Location                                                          |
| ------: | --------: | ------------: | ------------: | ------: | ----------------------------------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/platformdirs/__init__.py:383` |

##### `getwidth` (`/usr/lib/python3.11/re/_parser.py`)

|  Change |     Delta |             % |          Time | Samples | Location                                |
| ------: | --------: | ------------: | ------------: | ------: | --------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `/usr/lib/python3.11/re/_parser.py:192` |

##### `_optimize_charset` (`/usr/lib/python3.11/re/_compiler.py`)

|  Change |     Delta |             % |          Time | Samples | Location                                  |
| ------: | --------: | ------------: | ------------: | ------: | ----------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `/usr/lib/python3.11/re/_compiler.py:310` |

##### `__init__` (`/usr/lib/python3.11/re/_parser.py`)

|  Change |     Delta |             % |          Time | Samples | Location                                |
| ------: | --------: | ------------: | ------------: | ------: | --------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `/usr/lib/python3.11/re/_parser.py:111` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `CPyDef_parse___Parser___push` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |      % |            Time | Samples | Caller                              | Location                                                                                         |
| ------: | ----: | -----: | --------------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| +142.9% |   +1s | 100.0% | 700.0ms → 1.70s |  7 → 17 | `CPyDef_parse___Parser____addtoken` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|  Change |     Delta |      % |            Time | Samples | Caller                                   | Location                                                                                         |
| ------: | --------: | -----: | --------------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +266.7% | +800.00ms | 100.0% | 300.0ms → 1.10s |  3 → 11 | `CPyDef_parsing____parse_single_version` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |      % |          Time | Samples | Caller                                  | Location                                                                                         |
| -----: | --------: | -----: | ------------: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +41.2% | +700.00ms | 100.0% | 1.70s → 2.40s | 17 → 24 | `CPyDef_driver___TokenProxy_____next__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `__init__` (`<string>`)

|  Change |     Delta |             % |              Time | Samples | Caller                                                                 | Location                                                                                         |
| ------: | --------: | ------------: | ----------------: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +300.0% | +300.00ms | 33.3% → 40.0% | 100.0ms → 400.0ms |   1 → 4 | `__init__`                                                             | `<string>`                                                                                       |
| +200.0% | +200.00ms | 33.3% → 30.0% | 100.0ms → 300.0ms |   1 → 3 | `CPyDef_lines___LinesBlock___all_lines`                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +100.0% | +100.00ms | 33.3% → 20.0% | 100.0ms → 200.0ms |   1 → 2 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +100.00ms |  0.0% → 10.0% |     0ms → 100.0ms |   0 → 1 | `CPyDef_lines___EmptyLineTracker___maybe_empty_lines`                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___Node___update_sibling_maps` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                                | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
|     new | +700.00ms | 0.0% → 100.0% | 0ms → 700.0ms |   0 → 7 | `CPyDef_pytree___Base___prev_sibling` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_pytree___Base___next_sibling` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_lines___Line_____str__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |              Time | Samples | Caller                            | Location                                                                                         |
| ------: | --------: | ------------: | ----------------: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
|     new | +300.00ms |  0.0% → 42.9% |     0ms → 300.0ms |   0 → 3 | `CPyDef_black____format_str_once` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +200.0% | +200.00ms | 50.0% → 42.9% | 100.0ms → 300.0ms |   1 → 3 | `CPyDef_lines___line_to_string`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_lines___Line___contains_implicit_multiline_string_with_comments` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |      % |              Time | Samples | Caller                                                             | Location                                                                                         |
| ------: | --------: | -----: | ----------------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| +400.0% | +400.00ms | 100.0% | 100.0ms → 500.0ms |   1 → 5 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

| Change |     Delta |             % |          Time | Samples | Caller     | Location                                 |
| -----: | --------: | ------------: | ------------: | ------: | ---------- | ---------------------------------------- |
|    new | +400.00ms | 0.0% → 100.0% | 0ms → 400.0ms |   0 → 4 | `get_code` | `<frozen importlib._bootstrap_external>` |

##### `CPyDef_driver___Driver___parse_tokens` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |      % |          Time | Samples | Caller                                  | Location                                                                                         |
| -----: | --------: | -----: | ------------: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +23.1% | +300.00ms | 100.0% | 1.30s → 1.60s | 13 → 16 | `CPyDef_driver___Driver___parse_string` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___get_features_used` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |      % |              Time | Samples | Caller                                  | Location                                                                                         |
| -----: | --------: | -----: | ----------------: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +60.0% | +300.00ms | 100.0% | 500.0ms → 800.0ms |   5 → 8 | `CPyDef_black___detect_target_versions` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_comments___convert_one_fmt_off_pair` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |      % |              Time | Samples | Caller                            | Location                                                                                         |
| ------: | --------: | -----: | ----------------: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| +300.0% | +300.00ms | 100.0% | 100.0ms → 400.0ms |   1 → 4 | `CPyDef_black____format_str_once` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |             % |          Time | Samples | Caller                                                                          | Location                                                                                         |
| -----: | --------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +300.00ms | 0.0% → 100.0% | 0ms → 300.0ms |   0 → 3 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyStr_Build` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |            % |          Time | Samples | Caller                                                             | Location                                                                                         |
| -----: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
|    new | +200.00ms | 0.0% → 66.7% | 0ms → 200.0ms |   0 → 2 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new | +100.00ms | 0.0% → 33.3% | 0ms → 100.0ms |   0 → 1 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___convert` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |             % |          Time | Samples | Caller                          | Location                                                                                         |
| -----: | --------: | ------------: | ------------: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +300.00ms | 0.0% → 100.0% | 0ms → 300.0ms |   0 → 3 | `CPyDef_parse___Parser___shift` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7fb1e8d49480` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

| Change |     Delta |            % |          Time | Samples | Caller                                   | Location                                                                                         |
| -----: | --------: | -----------: | ------------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +100.00ms | 0.0% → 33.3% | 0ms → 100.0ms |   0 → 1 | `CPyDef_parse___Parser____addtoken`      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new | +100.00ms | 0.0% → 33.3% | 0ms → 100.0ms |   0 → 1 | `CPyDef_nodes___Visitor___visit_default` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new | +100.00ms | 0.0% → 33.3% | 0ms → 100.0ms |   0 → 1 | `CPyDef_linegen___LineGenerator___line`  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                                                                              | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__`        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +100.00ms |  0.0% → 33.3% | 0ms → 100.0ms |   0 → 1 | `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +100.00ms |  0.0% → 33.3% | 0ms → 100.0ms |   0 → 1 | `CPyDef_linegen___visit_INDENT_LineGenerator_gen_____mypyc_generator_helper__`      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +100.00ms |  0.0% → 33.3% | 0ms → 100.0ms |   0 → 1 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_comments___normalize_trailing_prefix` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |      % |              Time | Samples | Caller                                                                 | Location                                                                                         |
| ------: | --------: | -----: | ----------------: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +200.0% | +200.00ms | 100.0% | 100.0ms → 300.0ms |   1 → 3 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___Visitor___visit` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |            % |          Time | Samples | Caller                                                                       | Location                                                                                         |
| -----: | --------: | -----------: | ------------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +200.00ms | 0.0% → 66.7% | 0ms → 200.0ms |   0 → 2 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |      % |              Time | Samples | Caller                                                                          | Location                                                                                         |
| ------: | --------: | -----: | ----------------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +100.0% | +200.00ms | 100.0% | 200.0ms → 400.0ms |   2 → 4 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_trans___hug_power_op_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |            % |          Time | Samples | Caller                                               | Location                                                                                         |
| -----: | --------: | -----------: | ------------: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +100.00ms | 0.0% → 50.0% | 0ms → 100.0ms |   0 → 1 | `CPyDef_linegen____hugging_power_ops_line_to_string` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new | +100.00ms | 0.0% → 50.0% | 0ms → 100.0ms |   0 → 1 | `CPyDef_linegen___run_transformer`                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |      % |              Time | Samples | Caller                            | Location                                                                                         |
| ------: | --------: | -----: | ----------------: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| +100.0% | +200.00ms | 100.0% | 200.0ms → 400.0ms |   2 → 4 | `CPyDef_black____format_str_once` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_strings___sub_twice` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |      % |              Time | Samples | Caller                                     | Location                                                                                         |
| ------: | --------: | -----: | ----------------: | ------: | ------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| +100.0% | +200.00ms | 100.0% | 200.0ms → 400.0ms |   2 → 4 | `CPyDef_strings___normalize_string_quotes` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_trans___StringSplitter_____mypyc_defaults_setup` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |             % |          Time | Samples | Caller                                                             | Location                                                                                         |
| -----: | --------: | ------------: | ------------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
|    new | +200.00ms | 0.0% → 100.0% | 0ms → 200.0ms |   0 → 2 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___Leaf_____str__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |             % |          Time | Samples | Caller                          | Location                                                                                         |
| -----: | --------: | ------------: | ------------: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +200.00ms | 0.0% → 100.0% | 0ms → 200.0ms |   0 → 2 | `CPyDef_lines___Line_____str__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_create_fn` (`/usr/lib/python3.11/dataclasses.py`)

| Change |     Delta |            % |          Time | Samples | Caller                 | Location                             |
| -----: | --------: | -----------: | ------------: | ------: | ---------------------- | ------------------------------------ |
|    new | +100.00ms | 0.0% → 50.0% | 0ms → 100.0ms |   0 → 1 | `_frozen_get_del_attr` | `/usr/lib/python3.11/dataclasses.py` |
|    new | +100.00ms | 0.0% → 50.0% | 0ms → 100.0ms |   0 → 1 | `_init_fn`             | `/usr/lib/python3.11/dataclasses.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

| Change |     Delta |             % |          Time | Samples | Caller          | Location                        |
| -----: | --------: | ------------: | ------------: | ------: | --------------- | ------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `create_module` | `<frozen importlib._bootstrap>` |

##### `<genexpr>` (`<frozen importlib._bootstrap_external>`)

| Change |     Delta |             % |          Time | Samples | Caller        | Location                                 |
| -----: | --------: | ------------: | ------------: | ------: | ------------- | ---------------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `_path_split` | `<frozen importlib._bootstrap_external>` |

##### `spec_from_file_location` (`<frozen importlib._bootstrap_external>`)

| Change |     Delta |             % |          Time | Samples | Caller      | Location                                 |
| -----: | --------: | ------------: | ------------: | ------: | ----------- | ---------------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `_get_spec` | `<frozen importlib._bootstrap_external>` |

##### `__hash__` (`/usr/lib/python3.11/enum.py`)

| Change |     Delta |             % |          Time | Samples | Caller                              | Location                                                                                         |
| -----: | --------: | ------------: | ------------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `CPyDef_mode___Mode_____contains__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `__exit__` (`/usr/lib/python3.11/contextlib.py`)

| Change |     Delta |             % |          Time | Samples | Caller                       | Location                                           |
| -----: | --------: | ------------: | ------------: | ------: | ---------------------------- | -------------------------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `_close_with_exception_info` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `0x7fb1e8c8e109` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

| Change |     Delta |             % |          Time | Samples | Caller   | Location                              |
| -----: | --------: | ------------: | ------------: | ------: | -------- | ------------------------------------- |
|    new | +200.00ms | 0.0% → 100.0% | 0ms → 200.0ms |   0 → 2 | `malloc` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `realloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

| Change |     Delta |             % |          Time | Samples | Caller                                                               | Location                                                                                         |
| -----: | --------: | ------------: | ------------: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `read` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

| Change |     Delta |             % |          Time | Samples | Caller     | Location                                 |
| -----: | --------: | ------------: | ------------: | ------: | ---------- | ---------------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `get_data` | `<frozen importlib._bootstrap_external>` |

##### `malloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

| Change |     Delta |             % |          Time | Samples | Caller                       | Location                                                                                         |
| -----: | --------: | ------------: | ------------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `CPyDef_strings___sub_twice` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7fb1e8d4954a` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

| Change |     Delta |             % |          Time | Samples | Caller              | Location                                 |
| -----: | --------: | ------------: | ------------: | ------: | ------------------- | ---------------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>` |

##### `0x7fb1e8f27b1d` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

| Change |     Delta |             % |          Time | Samples | Caller           | Location                                         |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------------------ |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e8f0be4c` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `0x7fb1e8f27b74` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

| Change |     Delta |             % |          Time | Samples | Caller           | Location                                         |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------------------ |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e8f0be88` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `0x7fb1e8f289b0` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

| Change |     Delta |             % |          Time | Samples | Caller           | Location                                         |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------------------ |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e8f0da01` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `0x7fb1e8f27d07` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

| Change |     Delta |             % |          Time | Samples | Caller           | Location                                         |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------------------ |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e8f0d955` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `0x7fb1e8d48d8c` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

| Change |     Delta |             % |          Time | Samples | Caller           | Location                              |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e8c8e462` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `free` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

| Change |     Delta |             % |          Time | Samples | Caller                                                               | Location                                                                                         |
| -----: | --------: | ------------: | ------------: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7fb1e8d48ac8` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

| Change |     Delta |             % |          Time | Samples | Caller                       | Location                                                                                         |
| -----: | --------: | ------------: | ------------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `CPyDef_strings___sub_twice` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7fb1e8d48d24` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

| Change |     Delta |             % |          Time | Samples | Caller           | Location                              |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e8c8e462` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7fb1e8d48d26` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

| Change |     Delta |             % |          Time | Samples | Caller           | Location                              |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e8c8e462` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `CPyDef_nodes___whitespace` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                         | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -400.00ms | 100.0% → 0.0% | 400.0ms → 0ms |   4 → 0 | `CPyDef_lines___Line___append` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |              Time | Samples | Caller                                                                       | Location                                                                                         |
| ------: | --------: | ------------: | ----------------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -20.0% | -300.00ms | 83.3% → 80.0% |     1.50s → 1.20s | 15 → 12 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__`      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +50.0% | +100.00ms | 11.1% → 20.0% | 200.0ms → 300.0ms |   2 → 3 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms |   5.6% → 0.0% |     100.0ms → 0ms |   1 → 0 | `CPyDef_black____format_str_once`                                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7ff2a708f4a0` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |            % |          Time | Samples | Caller                                | Location                                                                                         |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms | 66.7% → 0.0% | 200.0ms → 0ms |   2 → 0 | `CPyDef_parse___Parser___push`        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 33.3% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_pytree___Base___prev_sibling` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_lines___Line___is_def` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |            % |          Time | Samples | Caller                                                             | Location                                                                                         |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms | 66.7% → 0.0% | 200.0ms → 0ms |   2 → 0 | `CPyDef_lines___EmptyLineTracker____maybe_empty_lines`             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 33.3% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |      % |              Time | Samples | Caller                                                            | Location                                                                                         |
| -----: | --------: | -----: | ----------------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| -66.7% | -200.00ms | 100.0% | 300.0ms → 100.0ms |   3 → 1 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDict_Build` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                                                                             | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms |  66.7% → 0.0% | 200.0ms → 0ms |   2 → 0 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__`             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms |  33.3% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_lines___EmptyLineTracker___maybe_empty_lines`                              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `CPyDef_linegen___append_to_line_delimiter_split_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPy_AddTraceback` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |            % |          Time | Samples | Caller                                                             | Location                                                                                         |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 33.3% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_trans___hug_power_op_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 33.3% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `pytree___Node_clear` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |            % |          Time | Samples | Caller                  | Location                                                                                         |
| ------: | --------: | -----------: | ------------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 33.3% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7b2e24a`        | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
| removed | -100.00ms | 33.3% → 0.0% | 100.0ms → 0ms |   1 → 0 | `pytree___Node_dealloc` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_mode___Mode_____contains__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                               | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `CPyDef_lines___Line___is_docstring` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___LineGenerator___line` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                                                                              | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7ff2a708e6b0` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |            % |          Time | Samples | Caller                                                                                        | Location                                                                                         |
| ------: | --------: | -----------: | ------------: | ------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 50.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_driver___Driver___parse_tokens`                                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 50.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `lines_____mypyc_lambda__0_contains_implicit_multiline_string_with_comments_Line_obj_dealloc` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyIter_Send` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                                                             | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7ff2a708f9c0` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |            % |          Time | Samples | Caller                              | Location                                                                                         |
| ------: | --------: | -----------: | ------------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 50.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_parse___Parser___shift`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 50.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_parse___Parser____addtoken` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser___pop` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |      % |         Time | Samples | Caller                              | Location                                                                                         |
| -----: | --------: | -----: | -----------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| -20.0% | -200.00ms | 100.0% | 1s → 800.0ms |  10 → 8 | `CPyDef_parse___Parser____addtoken` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___Visitor___visit_default` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |      % |              Time | Samples | Caller                                                                          | Location                                                                                         |
| -----: | --------: | -----: | ----------------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| -33.3% | -100.00ms | 100.0% | 300.0ms → 200.0ms |   3 → 2 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/_backends/re2/pathspec.py`)

|  Change |     Delta |             % |          Time | Samples | Caller                      | Location                        |
| ------: | --------: | ------------: | ------------: | ------: | --------------------------- | ------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/venv/lib/python3.11/site-packages/platformdirs/__init__.py`)

|  Change |     Delta |             % |          Time | Samples | Caller                      | Location                        |
| ------: | --------: | ------------: | ------------: | ------: | --------------------------- | ------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `CPyDef_pgen___ParserGenerator___make_grammar` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                           | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_pgen___generate_grammar` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `getwidth` (`/usr/lib/python3.11/re/_parser.py`)

|  Change |     Delta |             % |          Time | Samples | Caller     | Location                            |
| ------: | --------: | ------------: | ------------: | ------: | ---------- | ----------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `getwidth` | `/usr/lib/python3.11/re/_parser.py` |

##### `CPyInit_black___ranges` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                      | Location                        |
| ------: | --------: | ------------: | ------------: | ------: | --------------------------- | ------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `CPyDef_black____format_str_once` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                      | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | --------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_black___format_str` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_optimize_charset` (`/usr/lib/python3.11/re/_compiler.py`)

|  Change |     Delta |             % |          Time | Samples | Caller     | Location                              |
| ------: | --------: | ------------: | ------------: | ------: | ---------- | ------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_compile` | `/usr/lib/python3.11/re/_compiler.py` |

##### `__init__` (`/usr/lib/python3.11/re/_parser.py`)

|  Change |     Delta |             % |          Time | Samples | Caller   | Location                            |
| ------: | --------: | ------------: | ------------: | ------: | -------- | ----------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_parse` | `/usr/lib/python3.11/re/_parser.py` |

##### `0x7ff2a7b9f109` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |             % |          Time | Samples | Caller   | Location                              |
| ------: | --------: | ------------: | ------------: | ------: | -------- | ------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `calloc` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7ff2a7c59aba` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |             % |          Time | Samples | Caller         | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | -------------- | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyStr_Build` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7ff2a7c59d8c` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |             % |          Time | Samples | Caller           | Location                              |
| ------: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7b9f462` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7ff2a7c5962e` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |             % |          Time | Samples | Caller                                                          | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `__libc_malloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |             % |          Time | Samples | Caller                                                             | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7ff2a7c5a480` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |             % |          Time | Samples | Caller                                                         | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_trans___hug_power_op_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

| Change |   Delta |             % |            Time |   Samples | Function                                | Location                                                                                         |
| -----: | ------: | ------------: | --------------: | --------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
|    new |    +34s | 0.0% → 100.0% |       0ms → 34s |   0 → 340 | `0x7fb1e8c1d24a`                        | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
| +39.8% | +9.600s | 98.4% → 99.1% | 24.10s → 33.70s | 241 → 337 | `_run_module_as_main`                   | `<frozen runpy>`                                                                                 |
| +37.3% | +8.700s | 95.1% → 94.1% |    23.30s → 32s | 233 → 320 | `CPyDef_black___main`                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +37.3% | +8.700s | 95.1% → 94.1% |    23.30s → 32s | 233 → 320 | `CPyPy_black___main`                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +37.3% | +8.700s | 95.1% → 94.1% |    23.30s → 32s | 233 → 320 | `new_func`                              | `/venv/lib/python3.11/site-packages/click/decorators.py`                                         |
| +37.3% | +8.700s | 95.1% → 94.1% |    23.30s → 32s | 233 → 320 | `invoke`                                | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| +37.3% | +8.700s | 95.1% → 94.1% |    23.30s → 32s | 233 → 320 | `main`                                  | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| +37.3% | +8.700s | 95.1% → 94.1% |    23.30s → 32s | 233 → 320 | `__call__`                              | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| +37.3% | +8.700s | 95.1% → 94.1% |    23.30s → 32s | 233 → 320 | `CPyDef_black___patched_main`           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +37.3% | +8.700s | 95.1% → 94.1% |    23.30s → 32s | 233 → 320 | `CPyPy_black___patched_main`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +37.3% | +8.700s | 95.1% → 94.1% |    23.30s → 32s | 233 → 320 | `<module>`                              | `/venv/lib/python3.11/site-packages/black/__main__.py`                                           |
| +37.3% | +8.700s | 95.1% → 94.1% |    23.30s → 32s | 233 → 320 | `_run_code`                             | `<frozen runpy>`                                                                                 |
| +36.9% | +8.600s | 95.1% → 93.8% | 23.30s → 31.90s | 233 → 319 | `CPyDef_black___format_file_contents`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +36.9% | +8.600s | 95.1% → 93.8% | 23.30s → 31.90s | 233 → 319 | `CPyDef_black___format_file_in_place`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +36.9% | +8.600s | 95.1% → 93.8% | 23.30s → 31.90s | 233 → 319 | `CPyDef_black___reformat_one`           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +36.9% | +8.600s | 95.1% → 93.8% | 23.30s → 31.90s | 233 → 319 | `CPyPy_black___reformat_one`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +62.8% | +8.600s | 55.9% → 65.6% | 13.70s → 22.30s | 137 → 223 | `CPyDef_black___format_str`             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +35.2% | +7.500s | 86.9% → 84.7% | 21.30s → 28.80s | 213 → 288 | `CPyDef_black____format_str_once`       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +35.3% |     +3s | 34.7% → 33.8% |  8.50s → 11.50s |  85 → 115 | `CPyDef_driver___Driver___parse_tokens` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +35.3% |     +3s | 34.7% → 33.8% |  8.50s → 11.50s |  85 → 115 | `CPyDef_driver___Driver___parse_string` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Third-party

| Change |   Delta |             % |            Time |   Samples | Function                                                                            | Location                                                                                         |
| -----: | ------: | ------------: | --------------: | --------: | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +37.3% | +8.700s | 95.1% → 94.1% |    23.30s → 32s | 233 → 320 | `CPyDef_black___main`                                                               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +37.3% | +8.700s | 95.1% → 94.1% |    23.30s → 32s | 233 → 320 | `CPyPy_black___main`                                                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +37.3% | +8.700s | 95.1% → 94.1% |    23.30s → 32s | 233 → 320 | `new_func`                                                                          | `/venv/lib/python3.11/site-packages/click/decorators.py`                                         |
| +37.3% | +8.700s | 95.1% → 94.1% |    23.30s → 32s | 233 → 320 | `invoke`                                                                            | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| +37.3% | +8.700s | 95.1% → 94.1% |    23.30s → 32s | 233 → 320 | `main`                                                                              | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| +37.3% | +8.700s | 95.1% → 94.1% |    23.30s → 32s | 233 → 320 | `__call__`                                                                          | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| +37.3% | +8.700s | 95.1% → 94.1% |    23.30s → 32s | 233 → 320 | `CPyDef_black___patched_main`                                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +37.3% | +8.700s | 95.1% → 94.1% |    23.30s → 32s | 233 → 320 | `CPyPy_black___patched_main`                                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +37.3% | +8.700s | 95.1% → 94.1% |    23.30s → 32s | 233 → 320 | `<module>`                                                                          | `/venv/lib/python3.11/site-packages/black/__main__.py`                                           |
| +36.9% | +8.600s | 95.1% → 93.8% | 23.30s → 31.90s | 233 → 319 | `CPyDef_black___format_file_contents`                                               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +36.9% | +8.600s | 95.1% → 93.8% | 23.30s → 31.90s | 233 → 319 | `CPyDef_black___format_file_in_place`                                               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +36.9% | +8.600s | 95.1% → 93.8% | 23.30s → 31.90s | 233 → 319 | `CPyDef_black___reformat_one`                                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +36.9% | +8.600s | 95.1% → 93.8% | 23.30s → 31.90s | 233 → 319 | `CPyPy_black___reformat_one`                                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +62.8% | +8.600s | 55.9% → 65.6% | 13.70s → 22.30s | 137 → 223 | `CPyDef_black___format_str`                                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +35.2% | +7.500s | 86.9% → 84.7% | 21.30s → 28.80s | 213 → 288 | `CPyDef_black____format_str_once`                                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +35.3% |     +3s | 34.7% → 33.8% |  8.50s → 11.50s |  85 → 115 | `CPyDef_driver___Driver___parse_tokens`                                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +35.3% |     +3s | 34.7% → 33.8% |  8.50s → 11.50s |  85 → 115 | `CPyDef_driver___Driver___parse_string`                                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +35.3% |     +3s | 34.7% → 33.8% |  8.50s → 11.50s |  85 → 115 | `CPyDef_parsing___lib2to3_parse`                                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +46.0% | +2.300s | 20.4% → 21.5% |      5s → 7.30s |   50 → 73 | `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +25.0% |     +2s | 32.7% → 29.4% |        8s → 10s |  80 → 100 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Standard library

|  Change |     Delta |             % |            Time |   Samples | Function                    | Location                                 |
| ------: | --------: | ------------: | --------------: | --------: | --------------------------- | ---------------------------------------- |
|  +39.8% |   +9.600s | 98.4% → 99.1% | 24.10s → 33.70s | 241 → 337 | `_run_module_as_main`       | `<frozen runpy>`                         |
|  +37.3% |   +8.700s | 95.1% → 94.1% |    23.30s → 32s | 233 → 320 | `_run_code`                 | `<frozen runpy>`                         |
| +150.0% |   +1.200s |   3.3% → 5.9% |    800.0ms → 2s |    8 → 20 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
| +150.0% |   +1.200s |   3.3% → 5.9% |    800.0ms → 2s |    8 → 20 | `_load_unlocked`            | `<frozen importlib._bootstrap>`          |
| +150.0% |   +1.200s |   3.3% → 5.9% |    800.0ms → 2s |    8 → 20 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
| +150.0% |   +1.200s |   3.3% → 5.9% |    800.0ms → 2s |    8 → 20 | `_find_and_load`            | `<frozen importlib._bootstrap>`          |
| +125.0% |       +1s |   3.3% → 5.3% | 800.0ms → 1.80s |    8 → 18 | `module_from_spec`          | `<frozen importlib._bootstrap>`          |
| +112.5% | +900.00ms |   3.3% → 5.0% | 800.0ms → 1.70s |    8 → 17 | `create_module`             | `<frozen importlib._bootstrap_external>` |
| +112.5% | +900.00ms |   3.3% → 5.0% | 800.0ms → 1.70s |    8 → 17 | `_get_module_details`       | `<frozen runpy>`                         |
| +175.0% | +700.00ms |   1.6% → 3.2% | 400.0ms → 1.10s |    4 → 11 | `exec_module`               | `<frozen importlib._bootstrap_external>` |
|     new | +700.00ms |   0.0% → 2.1% |   0ms → 700.0ms |     0 → 7 | `get_code`                  | `<frozen importlib._bootstrap_external>` |
| +140.0% | +700.00ms |   2.0% → 3.5% | 500.0ms → 1.20s |    5 → 12 | `parse`                     | `/usr/lib/python3.11/ast.py`             |
|     new | +600.00ms |   0.0% → 1.8% |   0ms → 600.0ms |     0 → 6 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
|     new | +500.00ms |   0.0% → 1.5% |   0ms → 500.0ms |     0 → 5 | `<module>`                  | `/usr/lib/python3.11/json/decoder.py`    |
|     new | +500.00ms |   0.0% → 1.5% |   0ms → 500.0ms |     0 → 5 | `<module>`                  | `/usr/lib/python3.11/json/__init__.py`   |
|     new | +400.00ms |   0.0% → 1.2% |   0ms → 400.0ms |     0 → 4 | `<module>`                  | `/usr/lib/python3.11/re/__init__.py`     |
|     new | +300.00ms |   0.0% → 0.9% |   0ms → 300.0ms |     0 → 3 | `<module>`                  | `/usr/lib/python3.11/contextlib.py`      |
|     new | +300.00ms |   0.0% → 0.9% |   0ms → 300.0ms |     0 → 3 | `<module>`                  | `<frozen importlib.util>`                |
|     new | +300.00ms |   0.0% → 0.9% |   0ms → 300.0ms |     0 → 3 | `exec_module`               | `<frozen importlib._bootstrap>`          |
|     new | +300.00ms |   0.0% → 0.9% |   0ms → 300.0ms |     0 → 3 | `<module>`                  | `<frozen runpy>`                         |

##### Native

|  Change |     Delta |             % |              Time | Samples | Function              | Location                                         |
| ------: | --------: | ------------: | ----------------: | ------: | --------------------- | ------------------------------------------------ |
|     new |      +34s | 0.0% → 100.0% |         0ms → 34s | 0 → 340 | `0x7fb1e8c1d24a`      | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|     new | +400.00ms |   0.0% → 1.2% |     0ms → 400.0ms |   0 → 4 | `0x7fb1e8f12a55`      | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
|     new | +400.00ms |   0.0% → 1.2% |     0ms → 400.0ms |   0 → 4 | `0x7fb1e8f12216`      | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
|     new | +400.00ms |   0.0% → 1.2% |     0ms → 400.0ms |   0 → 4 | `0x7fb1e8f12608`      | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
|     new | +400.00ms |   0.0% → 1.2% |     0ms → 400.0ms |   0 → 4 | `0x7fb1e8c7b4b8`      | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|     new | +400.00ms |   0.0% → 1.2% |     0ms → 400.0ms |   0 → 4 | `0x7fb1e8c7afa7`      | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| +300.0% | +300.00ms |   0.4% → 1.2% | 100.0ms → 400.0ms |   1 → 4 | `_dl_catch_exception` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| +300.0% | +300.00ms |   0.4% → 1.2% | 100.0ms → 400.0ms |   1 → 4 | `_dl_catch_error`     | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| +300.0% | +300.00ms |   0.4% → 1.2% | 100.0ms → 400.0ms |   1 → 4 | `dlopen`              | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| +300.0% | +300.00ms |   0.4% → 1.2% | 100.0ms → 400.0ms |   1 → 4 | `realloc`             | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|     new | +300.00ms |   0.0% → 0.9% |     0ms → 300.0ms |   0 → 3 | `malloc`              | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|     new | +300.00ms |   0.0% → 0.9% |     0ms → 300.0ms |   0 → 3 | `0x7fb1e8d49480`      | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|     new | +300.00ms |   0.0% → 0.9% |     0ms → 300.0ms |   0 → 3 | `0x7fb1e8c8e462`      | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|     new | +200.00ms |   0.0% → 0.6% |     0ms → 200.0ms |   0 → 2 | `0x7fb1e8c8e109`      | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|     new | +200.00ms |   0.0% → 0.6% |     0ms → 200.0ms |   0 → 2 | `0x7fb1e8f0f074`      | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
|     new | +200.00ms |   0.0% → 0.6% |     0ms → 200.0ms |   0 → 2 | `0x7fb1e8f0f0c5`      | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
|     new | +100.00ms |   0.0% → 0.3% |     0ms → 100.0ms |   0 → 1 | `read`                | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|     new | +100.00ms |   0.0% → 0.3% |     0ms → 100.0ms |   0 → 1 | `0x7fb1e809ad79`      | `<unknown>`                                      |
|     new | +100.00ms |   0.0% → 0.3% |     0ms → 100.0ms |   0 → 1 | `0x7fb1e809c0b4`      | `<unknown>`                                      |
|     new | +100.00ms |   0.0% → 0.3% |     0ms → 100.0ms |   0 → 1 | `0x7fb1e809b9d2`      | `<unknown>`                                      |

##### Ours

|  Change |     Delta |           % |         Time | Samples | Function   | Location   |
| ------: | --------: | ----------: | -----------: | ------: | ---------- | ---------- |
| +233.3% | +700.00ms | 1.2% → 2.9% | 300.0ms → 1s |  3 → 10 | `__init__` | `<string>` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |     Delta |             % |              Time | Samples | Function                                                          | Location                                                                                         |
| ------: | --------: | ------------: | ----------------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed |  -24.500s | 100.0% → 0.0% |      24.50s → 0ms | 245 → 0 | `0x7ff2a7b2e24a`                                                  | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
|  -14.5% |   -1.100s | 31.0% → 19.1% |     7.60s → 6.50s | 76 → 65 | `CPyDef_black___assert_stable`                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -83.3% | -500.00ms |   2.4% → 0.3% | 600.0ms → 100.0ms |   6 → 1 | `pytree___Node_clear`                                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -400.00ms |   2.4% → 0.6% | 600.0ms → 200.0ms |   6 → 2 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -300.00ms |   1.2% → 0.0% |     300.0ms → 0ms |   3 → 0 | `compile`                                                         | `/usr/lib/python3.11/re/_compiler.py`                                                            |
| removed | -300.00ms |   1.2% → 0.0% |     300.0ms → 0ms |   3 → 0 | `_compile`                                                        | `/usr/lib/python3.11/re/__init__.py`                                                             |
| removed | -300.00ms |   1.2% → 0.0% |     300.0ms → 0ms |   3 → 0 | `0x7ff2a708f4a0`                                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -300.00ms |   1.2% → 0.0% |     300.0ms → 0ms |   3 → 0 | `CPyDef_lines___Line___is_def`                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -50.0% | -300.00ms |   2.4% → 0.9% | 600.0ms → 300.0ms |   6 → 3 | `CPyDef_lines___EmptyLineTracker___maybe_empty_lines`             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms |   1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `CPyDict_Build`                                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms |   1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `nodes___visit_default_Visitor_env_dealloc`                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms |   1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `nodes___visit_default_Visitor_gen_dealloc`                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `_code`                                                           | `/usr/lib/python3.11/re/_compiler.py`                                                            |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `compile`                                                         | `/usr/lib/python3.11/re/__init__.py`                                                             |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `Version`                                                         | `/venv/lib/python3.11/site-packages/packaging/version.py`                                        |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `<module>`                                                        | `/venv/lib/python3.11/site-packages/packaging/version.py`                                        |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `<module>`                                                        | `/venv/lib/python3.11/site-packages/packaging/_ranges.py`                                        |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `<module>`                                                        | `/venv/lib/python3.11/site-packages/packaging/specifiers.py`                                     |
|  -50.0% | -200.00ms |   1.6% → 0.6% | 400.0ms → 200.0ms |   4 → 2 | `CPyDef_lines___EmptyLineTracker____maybe_empty_lines`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `pytree___Leaf_dealloc`                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Third-party

|  Change |     Delta |             % |              Time | Samples | Function                                                          | Location                                                                                         |
| ------: | --------: | ------------: | ----------------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -14.5% |   -1.100s | 31.0% → 19.1% |     7.60s → 6.50s | 76 → 65 | `CPyDef_black___assert_stable`                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -83.3% | -500.00ms |   2.4% → 0.3% | 600.0ms → 100.0ms |   6 → 1 | `pytree___Node_clear`                                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -400.00ms |   2.4% → 0.6% | 600.0ms → 200.0ms |   6 → 2 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -300.00ms |   1.2% → 0.0% |     300.0ms → 0ms |   3 → 0 | `0x7ff2a708f4a0`                                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -300.00ms |   1.2% → 0.0% |     300.0ms → 0ms |   3 → 0 | `CPyDef_lines___Line___is_def`                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -50.0% | -300.00ms |   2.4% → 0.9% | 600.0ms → 300.0ms |   6 → 3 | `CPyDef_lines___EmptyLineTracker___maybe_empty_lines`             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms |   1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `CPyDict_Build`                                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms |   1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `nodes___visit_default_Visitor_env_dealloc`                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms |   1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `nodes___visit_default_Visitor_gen_dealloc`                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `Version`                                                         | `/venv/lib/python3.11/site-packages/packaging/version.py`                                        |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `<module>`                                                        | `/venv/lib/python3.11/site-packages/packaging/version.py`                                        |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `<module>`                                                        | `/venv/lib/python3.11/site-packages/packaging/_ranges.py`                                        |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `<module>`                                                        | `/venv/lib/python3.11/site-packages/packaging/specifiers.py`                                     |
|  -50.0% | -200.00ms |   1.6% → 0.6% | 400.0ms → 200.0ms |   4 → 2 | `CPyDef_lines___EmptyLineTracker____maybe_empty_lines`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `pytree___Leaf_dealloc`                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `0x7ff2a708e6b0`                                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `CPyIter_Send`                                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `0x7ff2a708f9c0`                                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `pytree___pre_order_Node_env_clear`                               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `pytree___pre_order_Node_env_dealloc`                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Standard library

|  Change |     Delta |           % |          Time | Samples | Function            | Location                              |
| ------: | --------: | ----------: | ------------: | ------: | ------------------- | ------------------------------------- |
| removed | -300.00ms | 1.2% → 0.0% | 300.0ms → 0ms |   3 → 0 | `compile`           | `/usr/lib/python3.11/re/_compiler.py` |
| removed | -300.00ms | 1.2% → 0.0% | 300.0ms → 0ms |   3 → 0 | `_compile`          | `/usr/lib/python3.11/re/__init__.py`  |
| removed | -200.00ms | 0.8% → 0.0% | 200.0ms → 0ms |   2 → 0 | `_code`             | `/usr/lib/python3.11/re/_compiler.py` |
| removed | -200.00ms | 0.8% → 0.0% | 200.0ms → 0ms |   2 → 0 | `compile`           | `/usr/lib/python3.11/re/__init__.py`  |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `getwidth`          | `/usr/lib/python3.11/re/_parser.py`   |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_compile_info`     | `/usr/lib/python3.11/re/_compiler.py` |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_optimize_charset` | `/usr/lib/python3.11/re/_compiler.py` |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_compile`          | `/usr/lib/python3.11/re/_compiler.py` |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `__init__`          | `/usr/lib/python3.11/re/_parser.py`   |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_parse`            | `/usr/lib/python3.11/re/_parser.py`   |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_parse_sub`        | `/usr/lib/python3.11/re/_parser.py`   |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `parse`             | `/usr/lib/python3.11/re/_parser.py`   |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `findall`           | `/usr/lib/python3.11/re/__init__.py`  |

##### Native

|  Change |     Delta |             % |          Time | Samples | Function         | Location                                         |
| ------: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------------------ |
| removed |  -24.500s | 100.0% → 0.0% |  24.50s → 0ms | 245 → 0 | `0x7ff2a7b2e24a` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| removed | -100.00ms |   0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7b9f109` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| removed | -100.00ms |   0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `calloc`         | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| removed | -100.00ms |   0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7e22cba` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
| removed | -100.00ms |   0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7e1e67f` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
| removed | -100.00ms |   0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7e200c5` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
| removed | -100.00ms |   0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7e23a55` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
| removed | -100.00ms |   0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7e23216` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
| removed | -100.00ms |   0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7e23608` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
| removed | -100.00ms |   0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7b8c4b8` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| removed | -100.00ms |   0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7b8bfa7` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| removed | -100.00ms |   0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7c59aba` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| removed | -100.00ms |   0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7c59d8c` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| removed | -100.00ms |   0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7b9f462` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| removed | -100.00ms |   0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7c5962e` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| removed | -100.00ms |   0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `__libc_malloc`  | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| removed | -100.00ms |   0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7c5a480` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x7fb1e8c1d24a` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

| Change |     Delta |            % |          Time | Samples | Callee                | Location                        |
| -----: | --------: | -----------: | ------------: | ------: | --------------------- | ------------------------------- |
|    new |  +33.700s | 0.0% → 99.1% |  0ms → 33.70s | 0 → 337 | `_run_module_as_main` | `<frozen runpy>`                |
|    new | +300.00ms |  0.0% → 0.9% | 0ms → 300.0ms |   0 → 3 | `_find_and_load`      | `<frozen importlib._bootstrap>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|  Change |     Delta |             % |            Time |   Samples | Callee                | Location         |
| ------: | --------: | ------------: | --------------: | --------: | --------------------- | ---------------- |
|  +37.3% |   +8.700s | 96.7% → 95.0% |    23.30s → 32s | 233 → 320 | `_run_code`           | `<frozen runpy>` |
| +112.5% | +900.00ms |   3.3% → 5.0% | 800.0ms → 1.70s |    8 → 17 | `_get_module_details` | `<frozen runpy>` |

##### `CPyDef_black___main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |              % |            Time |   Samples | Callee                       | Location                                                                                         |
| -----: | --------: | -------------: | --------------: | --------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| +36.9% |   +8.600s | 100.0% → 99.7% | 23.30s → 31.90s | 233 → 319 | `CPyPy_black___reformat_one` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new | +100.00ms |    0.0% → 0.3% |   0ms → 100.0ms |     0 → 1 | `exit`                       | `/venv/lib/python3.11/site-packages/click/core.py`                                               |

##### `CPyPy_black___main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |         Time |   Samples | Callee                | Location                                                                                         |
| -----: | ------: | -----: | -----------: | --------: | --------------------- | ------------------------------------------------------------------------------------------------ |
| +37.3% | +8.700s | 100.0% | 23.30s → 32s | 233 → 320 | `CPyDef_black___main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`)

| Change |   Delta |              % |            Time |   Samples | Callee               | Location                                                                                         |
| -----: | ------: | -------------: | --------------: | --------: | -------------------- | ------------------------------------------------------------------------------------------------ |
| +36.9% | +8.600s | 100.0% → 99.7% | 23.30s → 31.90s | 233 → 319 | `CPyPy_black___main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`)

| Change |     Delta |              % |            Time |   Samples | Callee               | Location                                                                                         |
| -----: | --------: | -------------: | --------------: | --------: | -------------------- | ------------------------------------------------------------------------------------------------ |
| +37.3% |   +8.700s |         100.0% |    23.30s → 32s | 233 → 320 | `invoke`             | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| +36.9% |   +8.600s | 100.0% → 99.7% | 23.30s → 31.90s | 233 → 319 | `new_func`           | `/venv/lib/python3.11/site-packages/click/decorators.py`                                         |
|    new | +100.00ms |    0.0% → 0.3% |   0ms → 100.0ms |     0 → 1 | `CPyPy_black___main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py`)

| Change |   Delta |      % |         Time |   Samples | Callee   | Location                                           |
| -----: | ------: | -----: | -----------: | --------: | -------- | -------------------------------------------------- |
| +37.3% | +8.700s | 100.0% | 23.30s → 32s | 233 → 320 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py`)

| Change |   Delta |      % |         Time |   Samples | Callee | Location                                           |
| -----: | ------: | -----: | -----------: | --------: | ------ | -------------------------------------------------- |
| +37.3% | +8.700s | 100.0% | 23.30s → 32s | 233 → 320 | `main` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |              % |            Time |   Samples | Callee     | Location                                               |
| -----: | --------: | -------------: | --------------: | --------: | ---------- | ------------------------------------------------------ |
| +36.9% |   +8.600s | 100.0% → 99.7% | 23.30s → 31.90s | 233 → 319 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py`     |
|    new | +100.00ms |    0.0% → 0.3% |   0ms → 100.0ms |     0 → 1 | `<module>` | `/venv/lib/python3.11/site-packages/black/__main__.py` |

##### `CPyPy_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |         Time |   Samples | Callee                        | Location                                                                                         |
| -----: | ------: | -----: | -----------: | --------: | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| +37.3% | +8.700s | 100.0% | 23.30s → 32s | 233 → 320 | `CPyDef_black___patched_main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`)

| Change |     Delta |              % |            Time |   Samples | Callee                       | Location                                                                                         |
| -----: | --------: | -------------: | --------------: | --------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| +36.9% |   +8.600s | 100.0% → 99.7% | 23.30s → 31.90s | 233 → 319 | `CPyPy_black___patched_main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new | +100.00ms |    0.0% → 0.3% |   0ms → 100.0ms |     0 → 1 | `__call__`                   | `/venv/lib/python3.11/site-packages/click/core.py`                                               |

##### `_run_code` (`<frozen runpy>`)

| Change |     Delta |              % |            Time |   Samples | Callee                       | Location                                                                                         |
| -----: | --------: | -------------: | --------------: | --------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| +36.9% |   +8.600s | 100.0% → 99.7% | 23.30s → 31.90s | 233 → 319 | `<module>`                   | `/venv/lib/python3.11/site-packages/black/__main__.py`                                           |
|    new | +100.00ms |    0.0% → 0.3% |   0ms → 100.0ms |     0 → 1 | `CPyPy_black___patched_main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_file_contents` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |    Delta |             % |            Time |   Samples | Callee                                           | Location                                                                                         |
| -----: | -------: | ------------: | --------------: | --------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| +62.8% |  +8.600s | 58.8% → 69.9% | 13.70s → 22.30s | 137 → 223 | `CPyDef_black___format_str`                      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    ~0% | +<0.01µs | 41.2% → 30.1% |           9.60s |        96 | `CPyDef_black___check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_file_in_place` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |            Time |   Samples | Callee                                | Location                                                                                         |
| -----: | ------: | -----: | --------------: | --------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +36.9% | +8.600s | 100.0% | 23.30s → 31.90s | 233 → 319 | `CPyDef_black___format_file_contents` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___reformat_one` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |            Time |   Samples | Callee                                | Location                                                                                         |
| -----: | ------: | -----: | --------------: | --------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +36.9% | +8.600s | 100.0% | 23.30s → 31.90s | 233 → 319 | `CPyDef_black___format_file_in_place` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyPy_black___reformat_one` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |            Time |   Samples | Callee                        | Location                                                                                         |
| -----: | ------: | -----: | --------------: | --------: | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| +36.9% | +8.600s | 100.0% | 23.30s → 31.90s | 233 → 319 | `CPyDef_black___reformat_one` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_str` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |            Time |   Samples | Callee                            | Location                                                                                         |
| -----: | ------: | -----: | --------------: | --------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| +62.8% | +8.600s | 100.0% | 13.70s → 22.30s | 137 → 223 | `CPyDef_black____format_str_once` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black____format_str_once` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |              Time |  Samples | Callee                                                             | Location                                                                                         |
| ------: | --------: | ------------: | ----------------: | -------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
|  +35.3% |       +3s |         39.9% |    8.50s → 11.50s | 85 → 115 | `CPyDef_parsing___lib2to3_parse`                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +23.5% |   +1.900s | 38.0% → 34.7% |       8.10s → 10s | 81 → 100 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +94.7% |   +1.800s |  8.9% → 12.8% |     1.90s → 3.70s |  19 → 37 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +250.0% | +500.00ms |   0.9% → 2.4% | 200.0ms → 700.0ms |    2 → 7 | `CPyDef_lines___LinesBlock___all_lines`                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +400.00ms |   0.0% → 1.4% |     0ms → 400.0ms |    0 → 4 | `CPyDef_lines___Line_____str__`                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_driver___Driver___parse_tokens` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |              Time | Samples | Callee                                               | Location                                                                                         |
| ------: | --------: | ------------: | ----------------: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +41.9% |   +1.800s | 50.6% → 53.0% |     4.30s → 6.10s | 43 → 61 | `CPyDef_parse___Parser___addtoken`                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +33.3% | +800.00ms | 28.2% → 27.8% |     2.40s → 3.20s | 24 → 32 | `CPyDef_driver___TokenProxy_____next__`              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -50.0% | -100.00ms |   2.4% → 0.9% | 200.0ms → 100.0ms |   2 → 1 | `pytree___Node_clear`                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms |   1.2% → 0.0% |     100.0ms → 0ms |   1 → 0 | `0x7ff2a708e6b0`                                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +100.0% | +100.00ms |   1.2% → 1.7% | 100.0ms → 200.0ms |   1 → 2 | `CPyDef_driver___Driver____partially_consume_prefix` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_driver___Driver___parse_string` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |      % |           Time |  Samples | Callee                                  | Location                                                                                         |
| -----: | ----: | -----: | -------------: | -------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +35.3% |   +3s | 100.0% | 8.50s → 11.50s | 85 → 115 | `CPyDef_driver___Driver___parse_tokens` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parsing___lib2to3_parse` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |      % |           Time |  Samples | Callee                                  | Location                                                                                         |
| -----: | ----: | -----: | -------------: | -------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +35.3% |   +3s | 100.0% | 8.50s → 11.50s | 85 → 115 | `CPyDef_driver___Driver___parse_string` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |              Time | Samples | Callee                                                                          | Location                                                                                         |
| ------: | --------: | ------------: | ----------------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +57.8% |   +2.600s | 90.0% → 97.3% |     4.50s → 7.10s | 45 → 71 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -50.0% | -100.00ms |   4.0% → 1.4% | 200.0ms → 100.0ms |   2 → 1 | `CPyDef_linegen___LineGenerator___line`                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms |   2.0% → 0.0% |     100.0ms → 0ms |   1 → 0 | `CPyDef_nodes___is_stub_suite`                                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |              % |              Time | Samples | Callee                                                                  | Location                                                                                         |
| -----: | --------: | -------------: | ----------------: | ------: | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +23.7% |   +1.900s | 100.0% → 99.0% |        8s → 9.90s | 80 → 99 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +80.0% | +400.00ms |    6.3% → 9.0% | 500.0ms → 900.0ms |   5 → 9 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__`  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +20.0% | +300.00ms |  18.8% → 18.0% |     1.50s → 1.80s | 15 → 18 | `CPyDef_lines___Line___append`                                          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new | +300.00ms |    0.0% → 3.0% |     0ms → 300.0ms |   0 → 3 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__`  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +33.3% | +100.00ms |    3.8% → 4.0% | 300.0ms → 400.0ms |   3 → 4 | `CPyDef_nodes___Visitor___visit_default`                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|  Change |     Delta |              % |              Time | Samples | Callee                  | Location                                                                                         |
| ------: | --------: | -------------: | ----------------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| +100.0% | +800.00ms | 100.0% → 80.0% |   800.0ms → 1.60s |  8 → 16 | `CPyInit_black`         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +500.00ms |   0.0% → 25.0% |     0ms → 500.0ms |   0 → 5 | `<module>`              | `/usr/lib/python3.11/json/decoder.py`                                                            |
|     new | +500.00ms |   0.0% → 25.0% |     0ms → 500.0ms |   0 → 5 | `<module>`              | `/usr/lib/python3.11/json/__init__.py`                                                           |
|     new | +400.00ms |   0.0% → 20.0% |     0ms → 400.0ms |   0 → 4 | `<module>`              | `/usr/lib/python3.11/re/__init__.py`                                                             |
| +200.0% | +400.00ms |  25.0% → 30.0% | 200.0ms → 600.0ms |   2 → 6 | `CPyInit_black___nodes` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|  Change |     Delta |              % |            Time | Samples | Callee             | Location                                 |
| ------: | --------: | -------------: | --------------: | ------: | ------------------ | ---------------------------------------- |
| +125.0% |       +1s | 100.0% → 90.0% | 800.0ms → 1.80s |  8 → 18 | `module_from_spec` | `<frozen importlib._bootstrap>`          |
| +175.0% | +700.00ms |  50.0% → 55.0% | 400.0ms → 1.10s |  4 → 11 | `exec_module`      | `<frozen importlib._bootstrap_external>` |
|     new | +300.00ms |   0.0% → 15.0% |   0ms → 300.0ms |   0 → 3 | `exec_module`      | `<frozen importlib._bootstrap>`          |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|  Change |     Delta |           % |          Time | Samples | Callee           | Location                        |
| ------: | --------: | ----------: | ------------: | ------: | ---------------- | ------------------------------- |
| +150.0% |   +1.200s |      100.0% |  800.0ms → 2s |  8 → 20 | `_load_unlocked` | `<frozen importlib._bootstrap>` |
|     new | +100.00ms | 0.0% → 5.0% | 0ms → 100.0ms |   0 → 1 | `_find_spec`     | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|  Change |   Delta |      % |         Time | Samples | Callee                    | Location                        |
| ------: | ------: | -----: | -----------: | ------: | ------------------------- | ------------------------------- |
| +150.0% | +1.200s | 100.0% | 800.0ms → 2s |  8 → 20 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `module_from_spec` (`<frozen importlib._bootstrap>`)

|  Change |     Delta |              % |            Time | Samples | Callee               | Location                                 |
| ------: | --------: | -------------: | --------------: | ------: | -------------------- | ---------------------------------------- |
| +112.5% | +900.00ms | 100.0% → 94.4% | 800.0ms → 1.70s |  8 → 17 | `create_module`      | `<frozen importlib._bootstrap_external>` |
|     new | +100.00ms |    0.0% → 5.6% |   0ms → 100.0ms |   0 → 1 | `_init_module_attrs` | `<frozen importlib._bootstrap>`          |
|     new | +100.00ms |    0.0% → 5.6% |   0ms → 100.0ms |   0 → 1 | `create_module`      | `<frozen importlib._bootstrap>`          |

##### `create_module` (`<frozen importlib._bootstrap_external>`)

|  Change |     Delta |      % |            Time | Samples | Callee                      | Location                        |
| ------: | --------: | -----: | --------------: | ------: | --------------------------- | ------------------------------- |
| +112.5% | +900.00ms | 100.0% | 800.0ms → 1.70s |  8 → 17 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_get_module_details` (`<frozen runpy>`)

|  Change |     Delta |      % |            Time | Samples | Callee                | Location                        |
| ------: | --------: | -----: | --------------: | ------: | --------------------- | ------------------------------- |
| +112.5% | +900.00ms | 100.0% | 800.0ms → 1.70s |  8 → 17 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| +112.5% | +900.00ms | 100.0% | 800.0ms → 1.70s |  8 → 17 | `_get_module_details` | `<frozen runpy>`                |

##### `exec_module` (`<frozen importlib._bootstrap_external>`)

|  Change |     Delta |            % |            Time | Samples | Callee                      | Location                                 |
| ------: | --------: | -----------: | --------------: | ------: | --------------------------- | ---------------------------------------- |
| +175.0% | +700.00ms |       100.0% | 400.0ms → 1.10s |  4 → 11 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|     new | +700.00ms | 0.0% → 63.6% |   0ms → 700.0ms |   0 → 7 | `get_code`                  | `<frozen importlib._bootstrap_external>` |

##### `get_code` (`<frozen importlib._bootstrap_external>`)

| Change |     Delta |            % |          Time | Samples | Callee              | Location                                 |
| -----: | --------: | -----------: | ------------: | ------: | ------------------- | ---------------------------------------- |
|    new | +600.00ms | 0.0% → 85.7% | 0ms → 600.0ms |   0 → 6 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>` |
|    new | +100.00ms | 0.0% → 14.3% | 0ms → 100.0ms |   0 → 1 | `get_data`          | `<frozen importlib._bootstrap_external>` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|  Change |     Delta |            % |          Time | Samples | Callee                   | Location                                                                                         |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 20.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `pytree___Node_traverse` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 20.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `pytree___Node_clear`    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +100.00ms |  0.0% → 8.3% | 0ms → 100.0ms |   0 → 1 | `malloc`                 | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

| Change |     Delta |            % |          Time | Samples | Callee           | Location                              |
| -----: | --------: | -----------: | ------------: | ------: | ---------------- | ------------------------------------- |
|    new | +100.00ms | 0.0% → 16.7% | 0ms → 100.0ms |   0 → 1 | `malloc`         | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms | 0.0% → 16.7% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e8d4954a` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `<module>` (`/usr/lib/python3.11/json/decoder.py`)

| Change |     Delta |             % |          Time | Samples | Callee           | Location                        |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------- |
|    new | +500.00ms | 0.0% → 100.0% | 0ms → 500.0ms |   0 → 5 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/usr/lib/python3.11/json/__init__.py`)

| Change |     Delta |             % |          Time | Samples | Callee           | Location                        |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------- |
|    new | +500.00ms | 0.0% → 100.0% | 0ms → 500.0ms |   0 → 5 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/usr/lib/python3.11/re/__init__.py`)

| Change |     Delta |             % |          Time | Samples | Callee           | Location                        |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------- |
|    new | +400.00ms | 0.0% → 100.0% | 0ms → 400.0ms |   0 → 4 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/usr/lib/python3.11/contextlib.py`)

| Change |     Delta |             % |          Time | Samples | Callee           | Location                        |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------- |
|    new | +300.00ms | 0.0% → 100.0% | 0ms → 300.0ms |   0 → 3 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`<frozen importlib.util>`)

| Change |     Delta |             % |          Time | Samples | Callee           | Location                        |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------- |
|    new | +300.00ms | 0.0% → 100.0% | 0ms → 300.0ms |   0 → 3 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `exec_module` (`<frozen importlib._bootstrap>`)

| Change |     Delta |             % |          Time | Samples | Callee     | Location                  |
| -----: | --------: | ------------: | ------------: | ------: | ---------- | ------------------------- |
|    new | +300.00ms | 0.0% → 100.0% | 0ms → 300.0ms |   0 → 3 | `<module>` | `<frozen importlib.util>` |
|    new | +300.00ms | 0.0% → 100.0% | 0ms → 300.0ms |   0 → 3 | `<module>` | `<frozen runpy>`          |

##### `<module>` (`<frozen runpy>`)

| Change |     Delta |             % |          Time | Samples | Callee           | Location                        |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------- |
|    new | +300.00ms | 0.0% → 100.0% | 0ms → 300.0ms |   0 → 3 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `0x7fb1e8f12a55` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

| Change |     Delta |            % |          Time | Samples | Callee           | Location                                         |
| -----: | --------: | -----------: | ------------: | ------: | ---------------- | ------------------------------------------------ |
|    new | +200.00ms | 0.0% → 50.0% | 0ms → 200.0ms |   0 → 2 | `0x7fb1e8f0f074` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
|    new | +200.00ms | 0.0% → 50.0% | 0ms → 200.0ms |   0 → 2 | `0x7fb1e8f0f0c5` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `0x7fb1e8f12216` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

| Change |     Delta |             % |          Time | Samples | Callee                | Location                              |
| -----: | --------: | ------------: | ------------: | ------: | --------------------- | ------------------------------------- |
|    new | +400.00ms | 0.0% → 100.0% | 0ms → 400.0ms |   0 → 4 | `_dl_catch_exception` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7fb1e8f12608` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

| Change |     Delta |             % |          Time | Samples | Callee                | Location                              |
| -----: | --------: | ------------: | ------------: | ------: | --------------------- | ------------------------------------- |
|    new | +400.00ms | 0.0% → 100.0% | 0ms → 400.0ms |   0 → 4 | `_dl_catch_exception` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7fb1e8c7b4b8` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

| Change |     Delta |             % |          Time | Samples | Callee           | Location                                         |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------------------ |
|    new | +400.00ms | 0.0% → 100.0% | 0ms → 400.0ms |   0 → 4 | `0x7fb1e8f12608` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `0x7fb1e8c7afa7` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

| Change |     Delta |             % |          Time | Samples | Callee            | Location                              |
| -----: | --------: | ------------: | ------------: | ------: | ----------------- | ------------------------------------- |
|    new | +400.00ms | 0.0% → 100.0% | 0ms → 400.0ms |   0 → 4 | `_dl_catch_error` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `_dl_catch_exception` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |             % |          Time | Samples | Callee           | Location                                         |
| ------: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------------------ |
|     new | +400.00ms | 0.0% → 100.0% | 0ms → 400.0ms |   0 → 4 | `0x7fb1e8f12a55` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
|     new | +400.00ms | 0.0% → 100.0% | 0ms → 400.0ms |   0 → 4 | `0x7fb1e8f12216` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
|     new | +400.00ms | 0.0% → 100.0% | 0ms → 400.0ms |   0 → 4 | `0x7fb1e8c7b4b8` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7e23a55` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7e23216` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `_dl_catch_error` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |      % |              Time | Samples | Callee                | Location                              |
| ------: | --------: | -----: | ----------------: | ------: | --------------------- | ------------------------------------- |
| +300.0% | +300.00ms | 100.0% | 100.0ms → 400.0ms |   1 → 4 | `_dl_catch_exception` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `dlopen` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |             % |          Time | Samples | Callee           | Location                              |
| ------: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------- |
|     new | +400.00ms | 0.0% → 100.0% | 0ms → 400.0ms |   0 → 4 | `0x7fb1e8c7afa7` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7b8bfa7` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `realloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |             % |          Time | Samples | Callee           | Location                              |
| ------: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------- |
|     new | +300.00ms |  0.0% → 75.0% | 0ms → 300.0ms |   0 → 3 | `0x7fb1e8c8e462` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7b9f462` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `malloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

| Change |     Delta |            % |          Time | Samples | Callee           | Location                              |
| -----: | --------: | -----------: | ------------: | ------: | ---------------- | ------------------------------------- |
|    new | +200.00ms | 0.0% → 66.7% | 0ms → 200.0ms |   0 → 2 | `0x7fb1e8c8e109` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7fb1e8c8e462` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

| Change |     Delta |            % |          Time | Samples | Callee           | Location                              |
| -----: | --------: | -----------: | ------------: | ------: | ---------------- | ------------------------------------- |
|    new | +100.00ms | 0.0% → 33.3% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e8d48d8c` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms | 0.0% → 33.3% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e8d48d24` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms | 0.0% → 33.3% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e8d48d26` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7fb1e8f0f074` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

| Change |     Delta |            % |          Time | Samples | Callee           | Location                                         |
| -----: | --------: | -----------: | ------------: | ------: | ---------------- | ------------------------------------------------ |
|    new | +100.00ms | 0.0% → 50.0% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e8f0be4c` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
|    new | +100.00ms | 0.0% → 50.0% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e8f0be88` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `0x7fb1e8f0f0c5` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

| Change |     Delta |            % |          Time | Samples | Callee           | Location                                         |
| -----: | --------: | -----------: | ------------: | ------: | ---------------- | ------------------------------------------------ |
|    new | +100.00ms | 0.0% → 50.0% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e8f0da01` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
|    new | +100.00ms | 0.0% → 50.0% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e8f0d955` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `0x7fb1e809ad79` (`<unknown>`)

| Change |     Delta |             % |          Time | Samples | Callee           | Location                        |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `0x7fb1e809c0b4` (`<unknown>`)

| Change |     Delta |             % |          Time | Samples | Callee           | Location    |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ----------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e809ad79` | `<unknown>` |

##### `0x7fb1e809b9d2` (`<unknown>`)

| Change |     Delta |             % |          Time | Samples | Callee           | Location    |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ----------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `0x7fb1e809c0b4` | `<unknown>` |

##### `__init__` (`<string>`)

|  Change |     Delta |             % |              Time | Samples | Callee     | Location   |
| ------: | --------: | ------------: | ----------------: | ------: | ---------- | ---------- |
| +300.0% | +300.00ms | 33.3% → 40.0% | 100.0ms → 400.0ms |   1 → 4 | `__init__` | `<string>` |

##### `0x7ff2a7b2e24a` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |            % |          Time | Samples | Callee                | Location                                                                                         |
| ------: | --------: | -----------: | ------------: | ------: | --------------------- | ------------------------------------------------------------------------------------------------ |
| removed |  -24.100s | 98.4% → 0.0% |  24.10s → 0ms | 241 → 0 | `_run_module_as_main` | `<frozen runpy>`                                                                                 |
| removed | -300.00ms |  1.2% → 0.0% | 300.0ms → 0ms |   3 → 0 | `pytree___Node_clear` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___assert_stable` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |          Time | Samples | Callee                            | Location                                                                                         |
| -----: | ------: | -----: | ------------: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| -14.5% | -1.100s | 100.0% | 7.60s → 6.50s | 76 → 65 | `CPyDef_black____format_str_once` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `pytree___Node_clear` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |            % |          Time | Samples | Callee                  | Location                                                                                         |
| ------: | --------: | -----------: | ------------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms | 33.3% → 0.0% | 200.0ms → 0ms |   2 → 0 | `pytree___Leaf_dealloc` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms | 33.3% → 0.0% | 200.0ms → 0ms |   2 → 0 | `pytree___Node_dealloc` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |              Time | Samples | Callee                                                            | Location                                                                                         |
| ------: | --------: | ------------: | ----------------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -66.7% | -400.00ms |        100.0% | 600.0ms → 200.0ms |   6 → 2 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms |  16.7% → 0.0% |     100.0ms → 0ms |   1 → 0 | `CPyDef_pytree___pre_order_Leaf_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -50.0% | -100.00ms | 33.3% → 50.0% | 200.0ms → 100.0ms |   2 → 1 | `pytree___pre_order_Node_gen_dealloc`                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py`)

|  Change |     Delta |            % |          Time | Samples | Callee  | Location                              |
| ------: | --------: | -----------: | ------------: | ------: | ------- | ------------------------------------- |
| removed | -200.00ms | 66.7% → 0.0% | 200.0ms → 0ms |   2 → 0 | `_code` | `/usr/lib/python3.11/re/_compiler.py` |
| removed | -100.00ms | 33.3% → 0.0% | 100.0ms → 0ms |   1 → 0 | `parse` | `/usr/lib/python3.11/re/_parser.py`   |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py`)

|  Change |     Delta |             % |          Time | Samples | Callee    | Location                              |
| ------: | --------: | ------------: | ------------: | ------: | --------- | ------------------------------------- |
| removed | -300.00ms | 100.0% → 0.0% | 300.0ms → 0ms |   3 → 0 | `compile` | `/usr/lib/python3.11/re/_compiler.py` |

##### `CPyDef_lines___EmptyLineTracker___maybe_empty_lines` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |            % |              Time | Samples | Callee                                                 | Location                                                                                         |
| ------: | --------: | -----------: | ----------------: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
|  -50.0% | -200.00ms |        66.7% | 400.0ms → 200.0ms |   4 → 2 | `CPyDef_lines___EmptyLineTracker____maybe_empty_lines` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 16.7% → 0.0% |     100.0ms → 0ms |   1 → 0 | `CPyDict_Build`                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +100.00ms | 0.0% → 33.3% |     0ms → 100.0ms |   0 → 1 | `__init__`                                             | `<string>`                                                                                       |

##### `nodes___visit_default_Visitor_env_dealloc` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |              % |              Time | Samples | Callee                                    | Location                                                                                         |
| -----: | --------: | -------------: | ----------------: | ------: | ----------------------------------------- | ------------------------------------------------------------------------------------------------ |
| -50.0% | -100.00ms | 66.7% → 100.0% | 200.0ms → 100.0ms |   2 → 1 | `nodes___visit_default_Visitor_env_clear` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `nodes___visit_default_Visitor_gen_dealloc` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |      % |              Time | Samples | Callee                                      | Location                                                                                         |
| -----: | --------: | -----: | ----------------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| -66.7% | -200.00ms | 100.0% | 300.0ms → 100.0ms |   3 → 1 | `nodes___visit_default_Visitor_env_dealloc` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_code` (`/usr/lib/python3.11/re/_compiler.py`)

|  Change |     Delta |            % |          Time | Samples | Callee          | Location                              |
| ------: | --------: | -----------: | ------------: | ------: | --------------- | ------------------------------------- |
| removed | -100.00ms | 50.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_compile_info` | `/usr/lib/python3.11/re/_compiler.py` |
| removed | -100.00ms | 50.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_compile`      | `/usr/lib/python3.11/re/_compiler.py` |

##### `compile` (`/usr/lib/python3.11/re/__init__.py`)

|  Change |     Delta |             % |          Time | Samples | Callee     | Location                             |
| ------: | --------: | ------------: | ------------: | ------: | ---------- | ------------------------------------ |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `_compile` | `/usr/lib/python3.11/re/__init__.py` |

##### `Version` (`/venv/lib/python3.11/site-packages/packaging/version.py`)

|  Change |     Delta |             % |          Time | Samples | Callee    | Location                             |
| ------: | --------: | ------------: | ------------: | ------: | --------- | ------------------------------------ |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `compile` | `/usr/lib/python3.11/re/__init__.py` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/version.py`)

|  Change |     Delta |             % |          Time | Samples | Callee    | Location                                                  |
| ------: | --------: | ------------: | ------------: | ------: | --------- | --------------------------------------------------------- |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `Version` | `/venv/lib/python3.11/site-packages/packaging/version.py` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/_ranges.py`)

|  Change |     Delta |             % |          Time | Samples | Callee           | Location                        |
| ------: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------- |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/specifiers.py`)

|  Change |     Delta |             % |          Time | Samples | Callee           | Location                        |
| ------: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------- |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `CPyDef_lines___EmptyLineTracker____maybe_empty_lines` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |            % |              Time | Samples | Callee                               | Location                                                                                         |
| ------: | --------: | -----------: | ----------------: | ------: | ------------------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms | 50.0% → 0.0% |     200.0ms → 0ms |   2 → 0 | `CPyDef_lines___Line___is_def`       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -50.0% | -100.00ms |        50.0% | 200.0ms → 100.0ms |   2 → 1 | `CPyDef_lines___Line___is_docstring` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `pytree___Leaf_dealloc` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |            % |          Time | Samples | Callee                | Location                                                                                         |
| ------: | --------: | -----------: | ------------: | ------: | --------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 50.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `pytree___Leaf_clear` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `pytree___pre_order_Node_env_clear` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Callee                                | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `pytree___pre_order_Node_gen_dealloc` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms |  50.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `pytree___pre_order_Leaf_gen_dealloc` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `pytree___pre_order_Node_env_dealloc` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Callee                              | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `pytree___pre_order_Node_env_clear` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `getwidth` (`/usr/lib/python3.11/re/_parser.py`)

|  Change |     Delta |             % |          Time | Samples | Callee     | Location                            |
| ------: | --------: | ------------: | ------------: | ------: | ---------- | ----------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `getwidth` | `/usr/lib/python3.11/re/_parser.py` |

##### `_compile_info` (`/usr/lib/python3.11/re/_compiler.py`)

|  Change |     Delta |             % |          Time | Samples | Callee     | Location                            |
| ------: | --------: | ------------: | ------------: | ------: | ---------- | ----------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `getwidth` | `/usr/lib/python3.11/re/_parser.py` |

##### `_compile` (`/usr/lib/python3.11/re/_compiler.py`)

|  Change |     Delta |             % |          Time | Samples | Callee              | Location                              |
| ------: | --------: | ------------: | ------------: | ------: | ------------------- | ------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_optimize_charset` | `/usr/lib/python3.11/re/_compiler.py` |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_compile`          | `/usr/lib/python3.11/re/_compiler.py` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py`)

|  Change |     Delta |             % |          Time | Samples | Callee       | Location                            |
| ------: | --------: | ------------: | ------------: | ------: | ------------ | ----------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `__init__`   | `/usr/lib/python3.11/re/_parser.py` |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py`)

|  Change |     Delta |             % |          Time | Samples | Callee   | Location                            |
| ------: | --------: | ------------: | ------------: | ------: | -------- | ----------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_parse` | `/usr/lib/python3.11/re/_parser.py` |

##### `parse` (`/usr/lib/python3.11/re/_parser.py`)

|  Change |     Delta |             % |          Time | Samples | Callee       | Location                            |
| ------: | --------: | ------------: | ------------: | ------: | ------------ | ----------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py` |

##### `findall` (`/usr/lib/python3.11/re/__init__.py`)

|  Change |     Delta |             % |          Time | Samples | Callee     | Location                             |
| ------: | --------: | ------------: | ------------: | ------: | ---------- | ------------------------------------ |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_compile` | `/usr/lib/python3.11/re/__init__.py` |

##### `calloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |             % |          Time | Samples | Callee           | Location                              |
| ------: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7b9f109` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7ff2a7e22cba` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

|  Change |     Delta |             % |          Time | Samples | Callee   | Location                              |
| ------: | --------: | ------------: | ------------: | ------: | -------- | ------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `calloc` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7ff2a7e1e67f` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

|  Change |     Delta |             % |          Time | Samples | Callee           | Location                                         |
| ------: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------------------ |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7e22cba` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `0x7ff2a7e200c5` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

|  Change |     Delta |             % |          Time | Samples | Callee           | Location                                         |
| ------: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------------------ |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7e1e67f` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `0x7ff2a7e23a55` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

|  Change |     Delta |             % |          Time | Samples | Callee           | Location                                         |
| ------: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------------------ |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7e200c5` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `0x7ff2a7e23216` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

|  Change |     Delta |             % |          Time | Samples | Callee                | Location                              |
| ------: | --------: | ------------: | ------------: | ------: | --------------------- | ------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_dl_catch_exception` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7ff2a7e23608` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

|  Change |     Delta |             % |          Time | Samples | Callee                | Location                              |
| ------: | --------: | ------------: | ------------: | ------: | --------------------- | ------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_dl_catch_exception` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7ff2a7b8c4b8` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |             % |          Time | Samples | Callee           | Location                                         |
| ------: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------------------ |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7e23608` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `0x7ff2a7b8bfa7` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |             % |          Time | Samples | Callee            | Location                              |
| ------: | --------: | ------------: | ------------: | ------: | ----------------- | ------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_dl_catch_error` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7ff2a7b9f462` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |             % |          Time | Samples | Callee           | Location                              |
| ------: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `0x7ff2a7c59d8c` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

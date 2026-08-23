# Sampling profile diff

Collected 307 samples → 376 samples (+69 samples, +22.5%).

| Category         |  Change | Delta |             % |   Samples |
| ---------------- | ------: | ----: | ------------: | --------: |
| Native           |  +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 |
| Ours             |  +27.8% |    +5 |   5.9% → 6.1% |   18 → 23 |
| Standard library | +133.3% |    +4 |   1.0% → 1.9% |     3 → 7 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                            | Location                                                      |
| ------: | ----: | ----------: | ------: | ----------------------------------------------------------------------------------- | ------------------------------------------------------------- |
|  +55.6% |   +10 | 5.9% → 7.4% | 18 → 28 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +142.9% |   +10 | 2.3% → 4.5% |  7 → 17 | `CPyDef_driver___Driver___parse_tokens`                                             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +43.8% |    +7 | 5.2% → 6.1% | 16 → 23 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +600.0% |    +6 | 0.3% → 1.9% |   1 → 7 | `CPyDef_black___get_features_used`                                                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +38.5% |    +5 | 4.2% → 4.8% | 13 → 18 | `CPyDef_parse___Parser____addtoken`                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +57.1% |    +4 | 2.3% → 2.9% |  7 → 11 | `CPyDef_parse___Parser___pop`                                                       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +200.0% |    +4 | 0.7% → 1.6% |   2 → 6 | `CPyDef_brackets___is_split_before_delimiter`                                       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +400.0% |    +4 | 0.3% → 1.3% |   1 → 5 | `CPyDef_pytree___Leaf_____init__`                                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +400.0% |    +4 | 0.3% → 1.3% |   1 → 5 | `CPyDef_nodes___is_parent_function_or_class`                                        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +4 | 0.0% → 1.1% |   0 → 4 | `0x7f2824c8f4a0`                                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +3 | 0.0% → 0.8% |   0 → 3 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__`              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +150.0% |    +3 | 0.7% → 1.3% |   2 → 5 | `CPyDef_strings___sub_twice`                                                        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +3 | 0.0% → 0.8% |   0 → 3 | `linegen___visit_default_LineGenerator_gen_dealloc`                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +300.0% |    +3 | 0.3% → 1.1% |   1 → 4 | `CPyDef_pytree___type_repr`                                                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +3 | 0.0% → 0.8% |   0 → 3 | `CPyDef_comments___generate_comments`                                               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +3 | 0.0% → 0.8% |   0 → 3 | `0x7f28258d0d8c`                                                                    | `libc.so.6`                                                   |
|     new |    +3 | 0.0% → 0.8% |   0 → 3 | `0x7f2824c8e6b0`                                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +3 | 0.0% → 0.8% |   0 → 3 | `_create_fn`                                                                        | `dataclasses.py`                                              |
| +200.0% |    +2 | 0.3% → 0.8% |   1 → 3 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +2 | 0.0% → 0.5% |   0 → 2 | `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                            | Location                                                      |
| ------: | ----: | ----------: | ------: | ----------------------------------------------------------------------------------- | ------------------------------------------------------------- |
|  +55.6% |   +10 | 5.9% → 7.4% | 18 → 28 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +142.9% |   +10 | 2.3% → 4.5% |  7 → 17 | `CPyDef_driver___Driver___parse_tokens`                                             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +43.8% |    +7 | 5.2% → 6.1% | 16 → 23 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +600.0% |    +6 | 0.3% → 1.9% |   1 → 7 | `CPyDef_black___get_features_used`                                                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +38.5% |    +5 | 4.2% → 4.8% | 13 → 18 | `CPyDef_parse___Parser____addtoken`                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +57.1% |    +4 | 2.3% → 2.9% |  7 → 11 | `CPyDef_parse___Parser___pop`                                                       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +200.0% |    +4 | 0.7% → 1.6% |   2 → 6 | `CPyDef_brackets___is_split_before_delimiter`                                       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +400.0% |    +4 | 0.3% → 1.3% |   1 → 5 | `CPyDef_pytree___Leaf_____init__`                                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +400.0% |    +4 | 0.3% → 1.3% |   1 → 5 | `CPyDef_nodes___is_parent_function_or_class`                                        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +4 | 0.0% → 1.1% |   0 → 4 | `0x7f2824c8f4a0`                                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +3 | 0.0% → 0.8% |   0 → 3 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__`              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +150.0% |    +3 | 0.7% → 1.3% |   2 → 5 | `CPyDef_strings___sub_twice`                                                        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +3 | 0.0% → 0.8% |   0 → 3 | `linegen___visit_default_LineGenerator_gen_dealloc`                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +300.0% |    +3 | 0.3% → 1.1% |   1 → 4 | `CPyDef_pytree___type_repr`                                                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +3 | 0.0% → 0.8% |   0 → 3 | `CPyDef_comments___generate_comments`                                               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +3 | 0.0% → 0.8% |   0 → 3 | `0x7f28258d0d8c`                                                                    | `libc.so.6`                                                   |
|     new |    +3 | 0.0% → 0.8% |   0 → 3 | `0x7f2824c8e6b0`                                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +200.0% |    +2 | 0.3% → 0.8% |   1 → 3 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +2 | 0.0% → 0.5% |   0 → 2 | `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +66.7% |    +2 | 1.0% → 1.3% |   3 → 5 | `CPyDef_nodes___whitespace`                                                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Ours

| Change | Delta |           % | Samples | Function       | Location                      |
| -----: | ----: | ----------: | ------: | -------------- | ----------------------------- |
|    new |    +3 | 0.0% → 0.8% |   0 → 3 | `_create_fn`   | `dataclasses.py`              |
|    new |    +2 | 0.0% → 0.5% |   0 → 2 | `<module>`     | `ipaddress.py`                |
|    new |    +2 | 0.0% → 0.5% |   0 → 2 | `split`        | `re/__init__.py`              |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `debug`        | `logging/__init__.py`         |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `_compile`     | `re/__init__.py`              |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `<module>`     | `collections/__init__.py`     |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `match`        | `re/__init__.py`              |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `__set_name__` | `enum.py`                     |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `find_spec`    | `_distutils_hack/__init__.py` |

##### Standard library

| Change | Delta |           % | Samples | Function                    | Location                                 |
| -----: | ----: | ----------: | ------: | --------------------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `find_spec`                 | `<frozen importlib._bootstrap_external>` |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `__init__`                  | `<frozen importlib._bootstrap_external>` |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `getstate`                  | `<frozen codecs>`                        |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `_fill_cache`               | `<frozen importlib._bootstrap_external>` |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `_validate_timestamp_pyc`   | `<frozen importlib._bootstrap_external>` |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `_requires_builtin_wrapper` | `<frozen importlib._bootstrap>`          |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                     | Location                                                      |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------- |
|  -41.2% |    -7 | 5.5% → 2.7% | 17 → 10 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__`           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -57.1% |    -4 | 2.3% → 0.8% |   7 → 3 | `CPy_AddTraceback`                                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `0x7f943b4ef24a`                                                             | `libc.so.6`                                                   |
|  -37.5% |    -3 | 2.6% → 1.3% |   8 → 5 | `parse`                                                                      | `ast.py`                                                      |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `0x7f943b61ad8c`                                                             | `libc.so.6`                                                   |
|  -75.0% |    -3 | 1.3% → 0.3% |   4 → 1 | `CPyDef_parse___Parser___shift`                                              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `0x7f943a890ea0`                                                             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `CPyDef_linegen___LineGenerator___line`                                      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -50.0% |    -2 | 1.3% → 0.5% |   4 → 2 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `CPy_CatchError`                                                             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `0x7f943a88eff0`                                                             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `pytree___pre_order_Node_gen_dealloc`                                        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -50.0% |    -2 | 1.3% → 0.5% |   4 → 2 | `CPyDef_pytree___Node___update_sibling_maps`                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `nodes___visit_Visitor_gen_dealloc`                                          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `CPyDef_pytree___pre_order_Leaf_gen_____mypyc_generator_helper__`            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `0x7f943a890ab0`                                                             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% |    -2 | 1.0% → 0.3% |   3 → 1 | `nodes___visit_default_Visitor_env_dealloc`                                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `nodes___visit_Visitor_env_dealloc`                                          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -40.0% |    -2 | 1.6% → 0.8% |   5 → 3 | `CPyDef_lines___Line_____str__`                                              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -50.0% |    -2 | 1.3% → 0.5% |   4 → 2 | `CPyTagged_StealAsObject`                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                     | Location                                                      |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------- |
|  -41.2% |    -7 | 5.5% → 2.7% | 17 → 10 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__`           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -57.1% |    -4 | 2.3% → 0.8% |   7 → 3 | `CPy_AddTraceback`                                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `0x7f943b4ef24a`                                                             | `libc.so.6`                                                   |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `0x7f943b61ad8c`                                                             | `libc.so.6`                                                   |
|  -75.0% |    -3 | 1.3% → 0.3% |   4 → 1 | `CPyDef_parse___Parser___shift`                                              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `0x7f943a890ea0`                                                             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `CPyDef_linegen___LineGenerator___line`                                      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -50.0% |    -2 | 1.3% → 0.5% |   4 → 2 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `CPy_CatchError`                                                             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `0x7f943a88eff0`                                                             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `pytree___pre_order_Node_gen_dealloc`                                        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -50.0% |    -2 | 1.3% → 0.5% |   4 → 2 | `CPyDef_pytree___Node___update_sibling_maps`                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `nodes___visit_Visitor_gen_dealloc`                                          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `CPyDef_pytree___pre_order_Leaf_gen_____mypyc_generator_helper__`            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `0x7f943a890ab0`                                                             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% |    -2 | 1.0% → 0.3% |   3 → 1 | `nodes___visit_default_Visitor_env_dealloc`                                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `nodes___visit_Visitor_env_dealloc`                                          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -40.0% |    -2 | 1.6% → 0.8% |   5 → 3 | `CPyDef_lines___Line_____str__`                                              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -50.0% |    -2 | 1.3% → 0.5% |   4 → 2 | `CPyTagged_StealAsObject`                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `CPyDef_lines___EmptyLineTracker____maybe_empty_lines`                       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Ours

|  Change | Delta |           % | Samples | Function     | Location                  |
| ------: | ----: | ----------: | ------: | ------------ | ------------------------- |
|  -37.5% |    -3 | 2.6% → 1.3% |   8 → 5 | `parse`      | `ast.py`                  |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `__hash__`   | `enum.py`                 |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `<module>`   | `logging/__init__.py`     |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `namedtuple` | `collections/__init__.py` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `_compile`   | `re/_compiler.py`         |

##### Standard library

|  Change | Delta |           % | Samples | Function           | Location                                 |
| ------: | ----: | ----------: | ------: | ------------------ | ---------------------------------------- |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `_path_split`      | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `get_code`         | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `_get_module_lock` | `<frozen importlib._bootstrap>`          |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |   Samples | Function                                                                        | Location                                                      |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
|    new |  +376 | 0.0% → 100.0% |   0 → 376 | `0x7f28257a524a`                                                                | `libc.so.6`                                                   |
| +23.3% |   +70 | 98.0% → 98.7% | 301 → 371 | `_run_module_as_main`                                                           | `<frozen runpy>`                                              |
| +26.9% |   +66 | 79.8% → 82.7% | 245 → 311 | `CPyDef_black____format_str_once`                                               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `CPyDef_black___format_file_contents`                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `CPyDef_black___format_file_in_place`                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `CPyDef_black___reformat_one`                                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `CPyPy_black___reformat_one`                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `CPyDef_black___main`                                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `CPyPy_black___main`                                                            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `new_func`                                                                      | `click/decorators.py`                                         |
| +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `invoke`                                                                        | `click/core.py`                                               |
| +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `main`                                                                          | `click/core.py`                                               |
| +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `__call__`                                                                      | `click/core.py`                                               |
| +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `CPyDef_black___patched_main`                                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `CPyPy_black___patched_main`                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `<module>`                                                                      | `black/__main__.py`                                           |
| +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `_run_code`                                                                     | `<frozen runpy>`                                              |
| +29.8% |   +48 | 52.4% → 55.6% | 161 → 209 | `CPyDef_black___format_str`                                                     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +42.5% |   +37 | 28.3% → 33.0% |  87 → 124 | `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +38.7% |   +36 | 30.3% → 34.3% |  93 → 129 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__`         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Native

| Change | Delta |             % |   Samples | Function                                                                        | Location                                                      |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
|    new |  +376 | 0.0% → 100.0% |   0 → 376 | `0x7f28257a524a`                                                                | `libc.so.6`                                                   |
| +26.9% |   +66 | 79.8% → 82.7% | 245 → 311 | `CPyDef_black____format_str_once`                                               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `CPyDef_black___format_file_contents`                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `CPyDef_black___format_file_in_place`                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `CPyDef_black___reformat_one`                                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `CPyPy_black___reformat_one`                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `CPyDef_black___main`                                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `CPyPy_black___main`                                                            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `CPyDef_black___patched_main`                                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `CPyPy_black___patched_main`                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +29.8% |   +48 | 52.4% → 55.6% | 161 → 209 | `CPyDef_black___format_str`                                                     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +42.5% |   +37 | 28.3% → 33.0% |  87 → 124 | `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +38.7% |   +36 | 30.3% → 34.3% |  93 → 129 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__`         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +38.7% |   +36 | 30.3% → 34.3% |  93 → 129 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +37.6% |   +35 | 30.3% → 34.0% |  93 → 128 | `CPyDef_driver___Driver___parse_tokens`                                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +37.6% |   +35 | 30.3% → 34.0% |  93 → 128 | `CPyDef_driver___Driver___parse_string`                                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +37.6% |   +35 | 30.3% → 34.0% |  93 → 128 | `CPyDef_parsing___lib2to3_parse`                                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +37.2% |   +35 | 30.6% → 34.3% |  94 → 129 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +38.2% |   +34 | 29.0% → 32.7% |  89 → 123 | `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__`   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +34.4% |   +32 | 30.3% → 33.2% |  93 → 125 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__`    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Ours

|  Change | Delta |             % |   Samples | Function         | Location                                    |
| ------: | ----: | ------------: | --------: | ---------------- | ------------------------------------------- |
|  +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `new_func`       | `click/decorators.py`                       |
|  +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `invoke`         | `click/core.py`                             |
|  +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `main`           | `click/core.py`                             |
|  +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `__call__`       | `click/core.py`                             |
|  +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `<module>`       | `black/__main__.py`                         |
|     new |    +4 |   0.0% → 1.1% |     0 → 4 | `<module>`       | `pathspec/_backends/agg.py`                 |
| +300.0% |    +3 |   0.3% → 1.1% |     1 → 4 | `<module>`       | `black/files.py`                            |
|     new |    +3 |   0.0% → 0.8% |     0 → 3 | `_create_fn`     | `dataclasses.py`                            |
|     new |    +3 |   0.0% → 0.8% |     0 → 3 | `_process_class` | `dataclasses.py`                            |
|     new |    +3 |   0.0% → 0.8% |     0 → 3 | `wrap`           | `dataclasses.py`                            |
| +100.0% |    +2 |   0.7% → 1.1% |     2 → 4 | `<module>`       | `pathspec/gitignore.py`                     |
| +100.0% |    +2 |   0.7% → 1.1% |     2 → 4 | `<module>`       | `pathspec/__init__.py`                      |
|     new |    +2 |   0.0% → 0.5% |     0 → 2 | `<module>`       | `pathspec/_backends/hyperscan/gitignore.py` |
|     new |    +2 |   0.0% → 0.5% |     0 → 2 | `<module>`       | `contextlib.py`                             |
|     new |    +2 |   0.0% → 0.5% |     0 → 2 | `<module>`       | `ipaddress.py`                              |
|     new |    +2 |   0.0% → 0.5% |     0 → 2 | `<module>`       | `urllib/parse.py`                           |
|     new |    +2 |   0.0% → 0.5% |     0 → 2 | `<module>`       | `pathlib.py`                                |
|     new |    +2 |   0.0% → 0.5% |     0 → 2 | `_init_fn`       | `dataclasses.py`                            |
|     new |    +2 |   0.0% → 0.5% |     0 → 2 | `split`          | `re/__init__.py`                            |
| +100.0% |    +1 |   0.3% → 0.5% |     1 → 2 | `debug`          | `logging/__init__.py`                       |

##### Standard library

|  Change | Delta |             % |   Samples | Function                    | Location                                 |
| ------: | ----: | ------------: | --------: | --------------------------- | ---------------------------------------- |
|  +23.3% |   +70 | 98.0% → 98.7% | 301 → 371 | `_run_module_as_main`       | `<frozen runpy>`                         |
|  +21.0% |   +60 | 93.2% → 92.0% | 286 → 346 | `_run_code`                 | `<frozen runpy>`                         |
|  +80.0% |   +12 |   4.9% → 7.2% |   15 → 27 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  +80.0% |   +12 |   4.9% → 7.2% |   15 → 27 | `_load_unlocked`            | `<frozen importlib._bootstrap>`          |
|  +80.0% |   +12 |   4.9% → 7.2% |   15 → 27 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
|  +80.0% |   +12 |   4.9% → 7.2% |   15 → 27 | `_find_and_load`            | `<frozen importlib._bootstrap>`          |
|  +66.7% |   +10 |   4.9% → 6.6% |   15 → 25 | `create_module`             | `<frozen importlib._bootstrap_external>` |
|  +66.7% |   +10 |   4.9% → 6.6% |   15 → 25 | `module_from_spec`          | `<frozen importlib._bootstrap>`          |
|  +66.7% |   +10 |   4.9% → 6.6% |   15 → 25 | `_get_module_details`       | `<frozen runpy>`                         |
|  +77.8% |    +7 |   2.9% → 4.3% |    9 → 16 | `exec_module`               | `<frozen importlib._bootstrap_external>` |
| +200.0% |    +4 |   0.7% → 1.6% |     2 → 6 | `_find_spec`                | `<frozen importlib._bootstrap>`          |
|     new |    +3 |   0.0% → 0.8% |     0 → 3 | `exec_module`               | `<frozen importlib._bootstrap>`          |
| +100.0% |    +2 |   0.7% → 1.1% |     2 → 4 | `find_spec`                 | `<frozen importlib._bootstrap_external>` |
| +100.0% |    +2 |   0.7% → 1.1% |     2 → 4 | `_get_spec`                 | `<frozen importlib._bootstrap_external>` |
|     new |    +2 |   0.0% → 0.5% |     0 → 2 | `<module>`                  | `<frozen importlib.util>`                |
|     new |    +2 |   0.0% → 0.5% |     0 → 2 | `<module>`                  | `<frozen runpy>`                         |
|     new |    +2 |   0.0% → 0.5% |     0 → 2 | `_fill_cache`               | `<frozen importlib._bootstrap_external>` |
|     new |    +1 |   0.0% → 0.3% |     0 → 1 | `__init__`                  | `<frozen importlib._bootstrap_external>` |
|     new |    +1 |   0.0% → 0.3% |     0 → 1 | `path_hook_for_FileFinder`  | `<frozen importlib._bootstrap_external>` |
|     new |    +1 |   0.0% → 0.3% |     0 → 1 | `_path_hooks`               | `<frozen importlib._bootstrap_external>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % | Samples | Function                                                                           | Location                                                      |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| removed |  -307 | 100.0% → 0.0% | 307 → 0 | `0x7f943b4ef24a`                                                                   | `libc.so.6`                                                   |
|  -23.5% |    -8 |  11.1% → 6.9% | 34 → 26 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__`                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -38.9% |    -7 |   5.9% → 2.9% | 18 → 11 | `CPyDef_linegen___run_transformer`                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -14.6% |    -6 |  13.4% → 9.3% | 41 → 35 | `CPyDef_black___assert_equivalent`                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -5 |   1.6% → 0.0% |   5 → 0 | `0x7f943b560462`                                                                   | `libc.so.6`                                                   |
|  -14.8% |    -4 |   8.8% → 6.1% | 27 → 23 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__`                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -44.4% |    -4 |   2.9% → 1.3% |   9 → 5 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__`                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% |    -4 |   2.0% → 0.5% |   6 → 2 | `nodes___visit_default_Visitor_gen_dealloc`                                        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% |    -4 |   2.0% → 0.5% |   6 → 2 | `CPyDef_lines___EmptyLineTracker____maybe_empty_lines`                             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -37.5% |    -3 |   2.6% → 1.3% |   8 → 5 | `CPyDef_linegen____hugging_power_ops_line_to_string`                               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -25.0% |    -3 |   3.9% → 2.4% |  12 → 9 | `parse`                                                                            | `ast.py`                                                      |
|  -25.0% |    -3 |   3.9% → 2.4% |  12 → 9 | `CPyDef_parsing____parse_single_version`                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -25.0% |    -3 |   3.9% → 2.4% |  12 → 9 | `CPyDef_parsing___parse_ast`                                                       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -3 |   1.0% → 0.0% |   3 → 0 | `0x7f943b61ad8c`                                                                   | `libc.so.6`                                                   |
|  -11.5% |    -3 |   8.5% → 6.1% | 26 → 23 | `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -3 |   1.0% → 0.0% |   3 → 0 | `pytree___pre_order_Leaf_env_dealloc`                                              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -42.9% |    -3 |   2.3% → 1.1% |   7 → 4 | `CPy_AddTraceback`                                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -60.0% |    -3 |   1.6% → 0.5% |   5 → 2 | `nodes___visit_default_Visitor_env_dealloc`                                        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -42.9% |    -3 |   2.3% → 1.1% |   7 → 4 | `linegen___visit_default_LineGenerator_env_clear`                                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -37.5% |    -3 |   2.6% → 1.3% |   8 → 5 | `CPyDef_lines___Line_____str__`                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Native

|  Change | Delta |             % | Samples | Function                                                                           | Location                                                      |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| removed |  -307 | 100.0% → 0.0% | 307 → 0 | `0x7f943b4ef24a`                                                                   | `libc.so.6`                                                   |
|  -23.5% |    -8 |  11.1% → 6.9% | 34 → 26 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__`                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -38.9% |    -7 |   5.9% → 2.9% | 18 → 11 | `CPyDef_linegen___run_transformer`                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -14.6% |    -6 |  13.4% → 9.3% | 41 → 35 | `CPyDef_black___assert_equivalent`                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -5 |   1.6% → 0.0% |   5 → 0 | `0x7f943b560462`                                                                   | `libc.so.6`                                                   |
|  -14.8% |    -4 |   8.8% → 6.1% | 27 → 23 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__`                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -44.4% |    -4 |   2.9% → 1.3% |   9 → 5 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__`                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% |    -4 |   2.0% → 0.5% |   6 → 2 | `nodes___visit_default_Visitor_gen_dealloc`                                        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% |    -4 |   2.0% → 0.5% |   6 → 2 | `CPyDef_lines___EmptyLineTracker____maybe_empty_lines`                             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -37.5% |    -3 |   2.6% → 1.3% |   8 → 5 | `CPyDef_linegen____hugging_power_ops_line_to_string`                               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -25.0% |    -3 |   3.9% → 2.4% |  12 → 9 | `CPyDef_parsing____parse_single_version`                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -25.0% |    -3 |   3.9% → 2.4% |  12 → 9 | `CPyDef_parsing___parse_ast`                                                       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -3 |   1.0% → 0.0% |   3 → 0 | `0x7f943b61ad8c`                                                                   | `libc.so.6`                                                   |
|  -11.5% |    -3 |   8.5% → 6.1% | 26 → 23 | `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -3 |   1.0% → 0.0% |   3 → 0 | `pytree___pre_order_Leaf_env_dealloc`                                              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -42.9% |    -3 |   2.3% → 1.1% |   7 → 4 | `CPy_AddTraceback`                                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -60.0% |    -3 |   1.6% → 0.5% |   5 → 2 | `nodes___visit_default_Visitor_env_dealloc`                                        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -42.9% |    -3 |   2.3% → 1.1% |   7 → 4 | `linegen___visit_default_LineGenerator_env_clear`                                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -37.5% |    -3 |   2.6% → 1.3% |   8 → 5 | `CPyDef_lines___Line_____str__`                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -50.0% |    -3 |   2.0% → 0.8% |   6 → 3 | `CPyDef_lines___EmptyLineTracker___maybe_empty_lines`                              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Ours

|  Change | Delta |           % | Samples | Function     | Location                  |
| ------: | ----: | ----------: | ------: | ------------ | ------------------------- |
|  -25.0% |    -3 | 3.9% → 2.4% |  12 → 9 | `parse`      | `ast.py`                  |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `<module>`   | `logging/__init__.py`     |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `<module>`   | `dataclasses.py`          |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `__hash__`   | `enum.py`                 |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `decorator`  | `click/decorators.py`     |
|  -25.0% |    -1 | 1.3% → 0.8% |   4 → 3 | `__init__`   | `<string>`                |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `<module>`   | `click/globals.py`        |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `<module>`   | `click/exceptions.py`     |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `<module>`   | `click/types.py`          |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `<module>`   | `click/core.py`           |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `<module>`   | `click/__init__.py`       |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `namedtuple` | `collections/__init__.py` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `<module>`   | `inspect.py`              |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `_compile`   | `re/_compiler.py`         |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `_code`      | `re/_compiler.py`         |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `compile`    | `re/_compiler.py`         |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `Specifier`  | `packaging/specifiers.py` |

##### Standard library

|  Change | Delta |           % | Samples | Function             | Location                                 |
| ------: | ----: | ----------: | ------: | -------------------- | ---------------------------------------- |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `_path_stat`         | `<frozen importlib._bootstrap_external>` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `_path_is_mode_type` | `<frozen importlib._bootstrap_external>` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `_path_isfile`       | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `_path_split`        | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `cache_from_source`  | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `_get_cached`        | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `cached`             | `<frozen importlib._bootstrap>`          |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `_init_module_attrs` | `<frozen importlib._bootstrap>`          |
|  -50.0% |    -1 | 0.7% → 0.3% |   2 → 1 | `get_code`           | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `get_data`           | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `_get_module_lock`   | `<frozen importlib._bootstrap>`          |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `__enter__`          | `<frozen importlib._bootstrap>`          |

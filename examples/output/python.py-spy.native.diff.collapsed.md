# Sampling profile diff

Collected 301 samples → 269 samples (-32 samples, -10.6%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Native           |  -7.0% |   -19 | 90.7% → 94.4% | 273 → 254 |
| Ours             | -36.4% |    -8 |   7.3% → 5.2% |   22 → 14 |
| Standard library | -83.3% |    -5 |   2.0% → 0.4% |     6 → 1 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % | Samples | Function                                                                            | Location                                                      |
| ------: | ----: | ----------: | ------: | ----------------------------------------------------------------------------------- | ------------------------------------------------------------- |
|  +66.7% |    +4 | 2.0% → 3.7% |  6 → 10 | `CPyDef_parse___Parser___pop`                                                       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +4 | 0.0% → 1.5% |   0 → 4 | `0x7faf68690a10`                                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +4 | 0.0% → 1.5% |   0 → 4 | `0x7faf692fc480`                                                                    | `libc.so.6`                                                   |
|     new |    +4 | 0.0% → 1.5% |   0 → 4 | `0x7faf68690510`                                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +3 | 0.0% → 1.1% |   0 → 3 | `pytree___pre_order_Leaf_gen_dealloc`                                               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +15.4% |    +2 | 4.3% → 5.6% | 13 → 15 | `CPyDef_parse___Parser____addtoken`                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +200.0% |    +2 | 0.3% → 1.1% |   1 → 3 | `CPyDef_linegen____hugging_power_ops_line_to_string`                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +20.0% |    +2 | 3.3% → 4.5% | 10 → 12 | `CPyDef_black___get_features_used`                                                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `nodes___visit_Visitor_gen_dealloc`                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `CPyDef_nodes___make_simple_prefix`                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +200.0% |    +2 | 0.3% → 1.1% |   1 → 3 | `CPyDef_brackets___BracketTracker___mark`                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `nodes___visit_default_Visitor_gen_dealloc`                                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `CPyDef_pytree___Node_____init__`                                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `0x7faf691d024a`                                                                    | `libc.so.6`                                                   |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `0x7faf686926f0`                                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `0x7faf692fba80`                                                                    | `libc.so.6`                                                   |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `0x7faf68691210`                                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `0x7faf686915d0`                                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `_create_fn`                                                                        | `dataclasses.py`                                              |

##### Native

|  Change | Delta |           % | Samples | Function                                                                            | Location                                                      |
| ------: | ----: | ----------: | ------: | ----------------------------------------------------------------------------------- | ------------------------------------------------------------- |
|  +66.7% |    +4 | 2.0% → 3.7% |  6 → 10 | `CPyDef_parse___Parser___pop`                                                       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +4 | 0.0% → 1.5% |   0 → 4 | `0x7faf68690a10`                                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +4 | 0.0% → 1.5% |   0 → 4 | `0x7faf692fc480`                                                                    | `libc.so.6`                                                   |
|     new |    +4 | 0.0% → 1.5% |   0 → 4 | `0x7faf68690510`                                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +3 | 0.0% → 1.1% |   0 → 3 | `pytree___pre_order_Leaf_gen_dealloc`                                               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +15.4% |    +2 | 4.3% → 5.6% | 13 → 15 | `CPyDef_parse___Parser____addtoken`                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +200.0% |    +2 | 0.3% → 1.1% |   1 → 3 | `CPyDef_linegen____hugging_power_ops_line_to_string`                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +20.0% |    +2 | 3.3% → 4.5% | 10 → 12 | `CPyDef_black___get_features_used`                                                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `nodes___visit_Visitor_gen_dealloc`                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `CPyDef_nodes___make_simple_prefix`                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +200.0% |    +2 | 0.3% → 1.1% |   1 → 3 | `CPyDef_brackets___BracketTracker___mark`                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `nodes___visit_default_Visitor_gen_dealloc`                                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `CPyDef_pytree___Node_____init__`                                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `0x7faf691d024a`                                                                    | `libc.so.6`                                                   |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `0x7faf686926f0`                                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `0x7faf692fba80`                                                                    | `libc.so.6`                                                   |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `0x7faf68691210`                                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `0x7faf686915d0`                                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `linegen___visit_DEDENT_LineGenerator_env_clear`                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Ours

| Change | Delta |           % | Samples | Function      | Location          |
| -----: | ----: | ----------: | ------: | ------------- | ----------------- |
|    new |    +2 | 0.0% → 0.7% |   0 → 2 | `_create_fn`  | `dataclasses.py`  |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `_type_check` | `typing.py`       |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `<module>`    | `urllib/parse.py` |

##### Standard library

| Change | Delta |           % | Samples | Function  | Location                        |
| -----: | ----: | ----------: | ------: | --------- | ------------------------------- |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `acquire` | `<frozen importlib._bootstrap>` |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % | Samples | Function                                                                        | Location                                                      |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
|  -40.0% |    -8 | 6.6% → 4.5% | 20 → 12 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -80.0% |    -8 | 3.3% → 0.7% |  10 → 2 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__`          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -55.6% |    -5 | 3.0% → 1.5% |   9 → 4 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__`              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -71.4% |    -5 | 2.3% → 0.7% |   7 → 2 | `CPy_AddTraceback`                                                              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% |    -4 | 2.0% → 0.7% |   6 → 2 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -80.0% |    -4 | 1.7% → 0.4% |   5 → 1 | `CPyDef_nodes___whitespace`                                                     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -4 | 1.3% → 0.0% |   4 → 0 | `0x7f3b2fa8f4a0`                                                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -16.7% |    -3 | 6.0% → 5.6% | 18 → 15 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -60.0% |    -3 | 1.7% → 0.7% |   5 → 2 | `__init__`                                                                      | `<string>`                                                    |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `0x7f3b2fa8f9c0`                                                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `0x7f3b307e3480`                                                                | `libc.so.6`                                                   |
|  -33.3% |    -3 | 3.0% → 2.2% |   9 → 6 | `parse`                                                                         | `ast.py`                                                      |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `CPyTagged_Add`                                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -14.3% |    -2 | 4.7% → 4.5% | 14 → 12 | `CPyDef_driver___Driver___parse_tokens`                                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `CPyDef_linegen___run_transformer`                                              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% |    -2 | 1.0% → 0.4% |   3 → 1 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__`              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `__new__`                                                                       | `<frozen abc>`                                                |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `CPyDef_linegen___visit_power_LineGenerator_gen_____mypyc_generator_helper__`   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -50.0% |    -2 | 1.3% → 0.7% |   4 → 2 | `CPyDef_parse___Parser___shift`                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `CPyDict_Build`                                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                        | Location                                                      |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
|  -40.0% |    -8 | 6.6% → 4.5% | 20 → 12 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -80.0% |    -8 | 3.3% → 0.7% |  10 → 2 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__`          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -55.6% |    -5 | 3.0% → 1.5% |   9 → 4 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__`              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -71.4% |    -5 | 2.3% → 0.7% |   7 → 2 | `CPy_AddTraceback`                                                              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% |    -4 | 2.0% → 0.7% |   6 → 2 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -80.0% |    -4 | 1.7% → 0.4% |   5 → 1 | `CPyDef_nodes___whitespace`                                                     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -4 | 1.3% → 0.0% |   4 → 0 | `0x7f3b2fa8f4a0`                                                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -16.7% |    -3 | 6.0% → 5.6% | 18 → 15 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `0x7f3b2fa8f9c0`                                                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `0x7f3b307e3480`                                                                | `libc.so.6`                                                   |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `CPyTagged_Add`                                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -14.3% |    -2 | 4.7% → 4.5% | 14 → 12 | `CPyDef_driver___Driver___parse_tokens`                                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `CPyDef_linegen___run_transformer`                                              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% |    -2 | 1.0% → 0.4% |   3 → 1 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__`              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `CPyDef_linegen___visit_power_LineGenerator_gen_____mypyc_generator_helper__`   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -50.0% |    -2 | 1.3% → 0.7% |   4 → 2 | `CPyDef_parse___Parser___shift`                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `CPyDict_Build`                                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__`          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `0x7f3b2fa8e6b0`                                                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `list_pop_impl`                                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Ours

|  Change | Delta |           % | Samples | Function       | Location              |
| ------: | ----: | ----------: | ------: | -------------- | --------------------- |
|  -60.0% |    -3 | 1.7% → 0.7% |   5 → 2 | `__init__`     | `<string>`            |
|  -33.3% |    -3 | 3.0% → 2.2% |   9 → 6 | `parse`        | `ast.py`              |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `new_func`     | `click/decorators.py` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `replace`      | `dataclasses.py`      |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `<module>`     | `tokenize.py`         |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `isEnabledFor` | `logging/__init__.py` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `__getitem__`  | `typing.py`           |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `__init__`     | `re/_parser.py`       |

##### Standard library

|  Change | Delta |           % | Samples | Function             | Location                                 |
| ------: | ----: | ----------: | ------: | -------------------- | ---------------------------------------- |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `__new__`            | `<frozen abc>`                           |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `_init_module_attrs` | `<frozen importlib._bootstrap>`          |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `find_spec`          | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `<listcomp>`         | `<frozen importlib._bootstrap_external>` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `_create_fn` (`dataclasses.py`)

| Change | Delta |             % | Samples | Location             |
| -----: | ----: | ------------: | ------: | -------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `dataclasses.py:433` |

##### `_type_check` (`typing.py`)

| Change | Delta |             % | Samples | Location        |
| -----: | ----: | ------------: | ------: | --------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `typing.py:187` |

##### `<module>` (`urllib/parse.py`)

| Change | Delta |             % | Samples | Location              |
| -----: | ----: | ------------: | ------: | --------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `urllib/parse.py:336` |

##### `acquire` (`<frozen importlib._bootstrap>`)

| Change | Delta |             % | Samples | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<frozen importlib._bootstrap>:110` |

##### `__init__` (`<string>`)

|  Change | Delta |            % | Samples | Location     |
| ------: | ----: | -----------: | ------: | ------------ |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `<string>:2` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `<string>:6` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `<string>:7` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `<string>:9` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `<string>:5` |

##### `parse` (`ast.py`)

| Change | Delta |      % | Samples | Location    |
| -----: | ----: | -----: | ------: | ----------- |
| -33.3% |    -3 | 100.0% |   9 → 6 | `ast.py:50` |

##### `__new__` (`<frozen abc>`)

|  Change | Delta |             % | Samples | Location           |
| ------: | ----: | ------------: | ------: | ------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `<frozen abc>:106` |

##### `new_func` (`click/decorators.py`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `click/decorators.py:34` |

##### `replace` (`dataclasses.py`)

|  Change | Delta |             % | Samples | Location              |
| ------: | ----: | ------------: | ------: | --------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `dataclasses.py:1480` |

##### `<module>` (`tokenize.py`)

|  Change | Delta |             % | Samples | Location         |
| ------: | ----: | ------------: | ------: | ---------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `tokenize.py:35` |

##### `isEnabledFor` (`logging/__init__.py`)

|  Change | Delta |             % | Samples | Location                   |
| ------: | ----: | ------------: | ------: | -------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `logging/__init__.py:1734` |

##### `__getitem__` (`typing.py`)

|  Change | Delta |             % | Samples | Location        |
| ------: | ----: | ------------: | ------: | --------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `typing.py:463` |

##### `__init__` (`re/_parser.py`)

|  Change | Delta |             % | Samples | Location            |
| ------: | ----: | ------------: | ------: | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `re/_parser.py:111` |

##### `_init_module_attrs` (`<frozen importlib._bootstrap>`)

|  Change | Delta |            % | Samples | Location                            |
| ------: | ----: | -----------: | ------: | ----------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `<frozen importlib._bootstrap>:542` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `<frozen importlib._bootstrap>:551` |

##### `find_spec` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Location                                      |
| ------: | ----: | ------------: | ------: | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<frozen importlib._bootstrap_external>:1612` |

##### `<listcomp>` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<frozen importlib._bootstrap_external>:129` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `CPyDef_parse___Parser___pop` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |      % | Samples | Caller                              | Location                                                      |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------------------------------------------- |
| +66.7% |    +4 | 100.0% |  6 → 10 | `CPyDef_parse___Parser____addtoken` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7faf68690a10` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |            % | Samples | Caller                              | Location                                                      |
| -----: | ----: | -----------: | ------: | ----------------------------------- | ------------------------------------------------------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `CPyDef_parse___Parser___pop`       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `CPyDef_parse___Parser___push`      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `CPyDef_parse___Parser____addtoken` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7faf692fc480` (`libc.so.6`)

| Change | Delta |            % | Samples | Caller                             | Location                                                      |
| -----: | ----: | -----------: | ------: | ---------------------------------- | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `__init__`                         | `<string>`                                                    |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `CPyDef_parse___Parser___pop`      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `CPyDef_black___get_features_used` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `CPyDef_parse___Parser___shift`    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7faf68690510` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |            % | Samples | Caller                              | Location                                                      |
| -----: | ----: | -----------: | ------: | ----------------------------------- | ------------------------------------------------------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `CPyDef_parse___Parser____addtoken` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `CPyDef_parse___Parser___push`      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `pytree___pre_order_Leaf_gen_dealloc` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |             % | Samples | Caller                                                            | Location                                                      |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |             % | Samples | Caller                                                          | Location                                                      |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser____addtoken` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |      % | Samples | Caller                             | Location                                                      |
| -----: | ----: | -----: | ------: | ---------------------------------- | ------------------------------------------------------------- |
| +15.4% |    +2 | 100.0% | 13 → 15 | `CPyDef_parse___Parser___addtoken` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen____hugging_power_ops_line_to_string` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |      % | Samples | Caller                                                             | Location                                                      |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___get_features_used` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |      % | Samples | Caller                                  | Location                                                      |
| -----: | ----: | -----: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| +20.0% |    +2 | 100.0% | 10 → 12 | `CPyDef_black___detect_target_versions` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `nodes___visit_Visitor_gen_dealloc` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |             % | Samples | Caller                                                                  | Location                                                      |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------- | ------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___make_simple_prefix` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |             % | Samples | Caller                                        | Location                                                      |
| -----: | ----: | ------------: | ------: | --------------------------------------------- | ------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `CPyDef_comments___normalize_trailing_prefix` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_brackets___BracketTracker___mark` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |      % | Samples | Caller                         | Location                                                      |
| ------: | ----: | -----: | ------: | ------------------------------ | ------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `CPyDef_lines___Line___append` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `nodes___visit_default_Visitor_gen_dealloc` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |             % | Samples | Caller                                            | Location                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- | ------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `linegen___visit_default_LineGenerator_env_clear` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___Node_____init__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |            % | Samples | Caller                               | Location                                                      |
| -----: | ----: | -----------: | ------: | ------------------------------------ | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `CPyDef_pytree___convert`            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `CPyDef_nodes___wrap_in_parentheses` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7faf686926f0` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |            % | Samples | Caller                                                  | Location                                                      |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `linegen___append_comments_delimiter_split_gen_dealloc` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `nodes___visit_Visitor_gen_dealloc`                     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7faf692fba80` (`libc.so.6`)

| Change | Delta |            % | Samples | Caller                                                               | Location                                                      |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `CPyStr_Build`                                                       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7faf68691210` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |            % | Samples | Caller                                  | Location                                                      |
| -----: | ----: | -----------: | ------: | --------------------------------------- | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `CPyDef_lines___Line_____bool__`        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `CPyDef_driver___Driver___parse_tokens` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7faf686915d0` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |            % | Samples | Caller                                             | Location                                                      |
| -----: | ----: | -----------: | ------: | -------------------------------------------------- | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `linegen___visit_DEDENT_LineGenerator_gen_dealloc` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `parsing____stringify_ast_env_clear`               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_create_fn` (`dataclasses.py`)

| Change | Delta |             % | Samples | Caller     | Location         |
| -----: | ----: | ------------: | ------: | ---------- | ---------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `_repr_fn` | `dataclasses.py` |

##### `linegen___visit_DEDENT_LineGenerator_env_clear` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |             % | Samples | Caller                                             | Location                                                      |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- | ------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `linegen___visit_DEDENT_LineGenerator_env_dealloc` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_type_check` (`typing.py`)

| Change | Delta |             % | Samples | Caller     | Location    |
| -----: | ----: | ------------: | ------: | ---------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `__init__` | `typing.py` |

##### `<module>` (`urllib/parse.py`)

| Change | Delta |             % | Samples | Caller                      | Location                        |
| -----: | ----: | ------------: | ------: | --------------------------- | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `acquire` (`<frozen importlib._bootstrap>`)

| Change | Delta |             % | Samples | Caller      | Location                        |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `__enter__` | `<frozen importlib._bootstrap>` |

##### `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |             % | Samples | Caller                                                                       | Location                                                      |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------- |
| -42.9% |    -6 | 70.0% → 66.7% |  14 → 8 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__`      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| -50.0% |    -3 | 30.0% → 25.0% |   6 → 3 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new |    +1 |   0.0% → 8.3% |   0 → 1 | `CPyDef_black____format_str_once`                                            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |      % | Samples | Caller                                                                          | Location                                                      |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| -80.0% |    -8 | 100.0% |  10 → 2 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |             % | Samples | Caller                                                                             | Location                                                      |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| -62.5% |    -5 | 88.9% → 75.0% |   8 → 3 | `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPy_AddTraceback` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |             % | Samples | Caller                                                             | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------- |
| removed |    -2 |  28.6% → 0.0% |   2 → 0 | `CPyDef_linegen___run_transformer`                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% |    -2 | 42.9% → 50.0% |   3 → 1 | `CPyDef_trans___hug_power_op_gen_____mypyc_generator_helper__`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `CPyDef_linegen____hugging_power_ops_line_to_string`               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `CPyDef_lines___Line___is_def`                                     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |             % | Samples | Caller                                                                              | Location                                                      |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------- | ------------------------------------------------------------- |
|  -80.0% |    -4 | 83.3% → 50.0% |   5 → 1 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `CPyDef_linegen___visit_DEDENT_LineGenerator_gen_____mypyc_generator_helper__`      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___whitespace` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |      % | Samples | Caller                         | Location                                                      |
| -----: | ----: | -----: | ------: | ------------------------------ | ------------------------------------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `CPyDef_lines___Line___append` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7f3b2fa8f4a0` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |            % | Samples | Caller                                  | Location                                                      |
| ------: | ----: | -----------: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `CPyDef_parse___Parser___push`          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `CPyDef_driver___Driver___parse_tokens` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `CPyDef_lines___Line___append`          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `CPyDef_parse___Parser____addtoken`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |      % | Samples | Caller                                  | Location                                                      |
| -----: | ----: | -----: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| -16.7% |    -3 | 100.0% | 18 → 15 | `CPyDef_driver___TokenProxy_____next__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `__init__` (`<string>`)

|  Change | Delta |            % | Samples | Caller                                                                 | Location                                                      |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------- |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `CPyDef_lines___EmptyLineTracker___maybe_empty_lines`                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `__init__`                                                             | `<string>`                                                    |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `CPyDef_lines___LinesBlock___all_lines`                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `CPyDef_linegen___bracket_split_build_line`                            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7f3b2fa8f9c0` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |            % | Samples | Caller                              | Location                                                      |
| ------: | ----: | -----------: | ------: | ----------------------------------- | ------------------------------------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `CPyDef_parse___Parser___push`      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `CPyDef_parse___Parser____addtoken` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7f3b307e3480` (`libc.so.6`)

|  Change | Delta |            % | Samples | Caller                          | Location                                                      |
| ------: | ----: | -----------: | ------: | ------------------------------- | ------------------------------------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `CPyDef_parse___Parser___pop`   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `CPyDef_parse___Parser___shift` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `CPyDef_pytree___convert`       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `parse` (`ast.py`)

| Change | Delta |      % | Samples | Caller                                   | Location                                                      |
| -----: | ----: | -----: | ------: | ---------------------------------------- | ------------------------------------------------------------- |
| -33.3% |    -3 | 100.0% |   9 → 6 | `CPyDef_parsing____parse_single_version` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyTagged_Add` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |            % | Samples | Caller                                                               | Location                                                      |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__`   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_driver___Driver___parse_tokens` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |      % | Samples | Caller                                  | Location                                                      |
| -----: | ----: | -----: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| -14.3% |    -2 | 100.0% | 14 → 12 | `CPyDef_driver___Driver___parse_string` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___run_transformer` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |             % | Samples | Caller                                                             | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |      % | Samples | Caller                            | Location                                                      |
| -----: | ----: | -----: | ------: | --------------------------------- | ------------------------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `CPyDef_black____format_str_once` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `__new__` (`<frozen abc>`)

|  Change | Delta |             % | Samples | Caller     | Location         |
| ------: | ----: | ------------: | ------: | ---------- | ---------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `<module>` | `click/types.py` |

##### `CPyDef_linegen___visit_power_LineGenerator_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |             % | Samples | Caller                                                          | Location                                                      |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser___shift` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |      % | Samples | Caller                              | Location                                                      |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------------------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `CPyDef_parse___Parser____addtoken` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDict_Build` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |            % | Samples | Caller                                                                 | Location                                                      |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `CPyDef_lines___EmptyLineTracker___maybe_empty_lines`                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |            % | Samples | Caller                                                                         | Location                                                      |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `CPyDef_linegen___visit_DEDENT_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `CPyDef_linegen___visit_INDENT_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7f3b2fa8e6b0` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |            % | Samples | Caller                                                             | Location                                                      |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `CPyDef_parse___Parser___pop`                                      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `list_pop_impl` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |             % | Samples | Caller                        | Location                                                      |
| ------: | ----: | ------------: | ------: | ----------------------------- | ------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `CPyDef_parse___Parser___pop` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `new_func` (`click/decorators.py`)

|  Change | Delta |             % | Samples | Caller                              | Location                                                      |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `CPyDef_mode___Mode_____contains__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `replace` (`dataclasses.py`)

|  Change | Delta |             % | Samples | Caller                                                                                    | Location                                                      |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `CPyDef_linegen____maybe_split_omitting_optional_parens_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `<module>` (`tokenize.py`)

|  Change | Delta |             % | Samples | Caller                      | Location                        |
| ------: | ----: | ------------: | ------: | --------------------------- | ------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `isEnabledFor` (`logging/__init__.py`)

|  Change | Delta |             % | Samples | Caller  | Location              |
| ------: | ----: | ------------: | ------: | ------- | --------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `debug` | `logging/__init__.py` |

##### `__getitem__` (`typing.py`)

|  Change | Delta |             % | Samples | Caller  | Location    |
| ------: | ----: | ------------: | ------: | ------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `inner` | `typing.py` |

##### `__init__` (`re/_parser.py`)

|  Change | Delta |             % | Samples | Caller   | Location        |
| ------: | ----: | ------------: | ------: | -------- | --------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `_parse` | `re/_parser.py` |

##### `_init_module_attrs` (`<frozen importlib._bootstrap>`)

|  Change | Delta |             % | Samples | Caller             | Location                        |
| ------: | ----: | ------------: | ------: | ------------------ | ------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `module_from_spec` | `<frozen importlib._bootstrap>` |

##### `find_spec` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Caller      | Location                                 |
| ------: | ----: | ------------: | ------: | ----------- | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `_get_spec` | `<frozen importlib._bootstrap_external>` |

##### `<listcomp>` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Caller       | Location                                 |
| ------: | ----: | ------------: | ------: | ------------ | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `_path_join` | `<frozen importlib._bootstrap_external>` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % | Samples | Function                                                                       | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------- |
|     new |  +269 | 0.0% → 100.0% | 0 → 269 | `0x7faf691d024a`                                                               | `libc.so.6`                                                   |
|  +10.0% |    +5 | 16.6% → 20.4% | 50 → 55 | `CPyDef_parse___Parser___addtoken`                                             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +33.3% |    +5 |   5.0% → 7.4% | 15 → 20 | `CPyDef_black___get_features_used`                                             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +33.3% |    +5 |   5.0% → 7.4% | 15 → 20 | `CPyDef_black___detect_target_versions`                                        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|   +8.3% |    +4 | 15.9% → 19.3% | 48 → 52 | `CPyDef_parse___Parser____addtoken`                                            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +133.3% |    +4 |   1.0% → 2.6% |   3 → 7 | `CPyDef_comments___normalize_trailing_prefix`                                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +100.0% |    +4 |   1.3% → 3.0% |   4 → 8 | `CPyImport_ImportFromMany`                                                     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +100.0% |    +4 |   1.3% → 3.0% |   4 → 8 | `linegen___visit_default_LineGenerator_env_clear`                              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +100.0% |    +4 |   1.3% → 3.0% |   4 → 8 | `nodes___visit_default_Visitor_gen_dealloc`                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +4 |   0.0% → 1.5% |   0 → 4 | `0x7faf68690a10`                                                               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +4 |   0.0% → 1.5% |   0 → 4 | `0x7faf692fc480`                                                               | `libc.so.6`                                                   |
|     new |    +4 |   0.0% → 1.5% |   0 → 4 | `0x7faf68690510`                                                               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +150.0% |    +3 |   0.7% → 1.9% |   2 → 5 | `CPyDef_pytree___leaves_Base_gen_____mypyc_generator_helper__`                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +33.3% |    +3 |   3.0% → 4.5% |  9 → 12 | `_call_with_frames_removed`                                                    | `<frozen importlib._bootstrap>`                               |
|  +33.3% |    +3 |   3.0% → 4.5% |  9 → 12 | `_load_unlocked`                                                               | `<frozen importlib._bootstrap>`                               |
|  +33.3% |    +3 |   3.0% → 4.5% |  9 → 12 | `_find_and_load_unlocked`                                                      | `<frozen importlib._bootstrap>`                               |
|  +33.3% |    +3 |   3.0% → 4.5% |  9 → 12 | `_find_and_load`                                                               | `<frozen importlib._bootstrap>`                               |
|  +50.0% |    +3 |   2.0% → 3.3% |   6 → 9 | `CPyDef_linegen___visit_STRING_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +75.0% |    +3 |   1.3% → 2.6% |   4 → 7 | `CPyDef_brackets___BracketTracker___mark`                                      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +3 |   0.0% → 1.1% |   0 → 3 | `CPyDef_linegen___delimiter_split_gen_____mypyc_generator_helper__`            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Native

|  Change | Delta |             % | Samples | Function                                                                                    | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
|     new |  +269 | 0.0% → 100.0% | 0 → 269 | `0x7faf691d024a`                                                                            | `libc.so.6`                                                   |
|  +10.0% |    +5 | 16.6% → 20.4% | 50 → 55 | `CPyDef_parse___Parser___addtoken`                                                          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +33.3% |    +5 |   5.0% → 7.4% | 15 → 20 | `CPyDef_black___get_features_used`                                                          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +33.3% |    +5 |   5.0% → 7.4% | 15 → 20 | `CPyDef_black___detect_target_versions`                                                     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|   +8.3% |    +4 | 15.9% → 19.3% | 48 → 52 | `CPyDef_parse___Parser____addtoken`                                                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +133.3% |    +4 |   1.0% → 2.6% |   3 → 7 | `CPyDef_comments___normalize_trailing_prefix`                                               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +100.0% |    +4 |   1.3% → 3.0% |   4 → 8 | `CPyImport_ImportFromMany`                                                                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +100.0% |    +4 |   1.3% → 3.0% |   4 → 8 | `linegen___visit_default_LineGenerator_env_clear`                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +100.0% |    +4 |   1.3% → 3.0% |   4 → 8 | `nodes___visit_default_Visitor_gen_dealloc`                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +4 |   0.0% → 1.5% |   0 → 4 | `0x7faf68690a10`                                                                            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +4 |   0.0% → 1.5% |   0 → 4 | `0x7faf692fc480`                                                                            | `libc.so.6`                                                   |
|     new |    +4 |   0.0% → 1.5% |   0 → 4 | `0x7faf68690510`                                                                            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +150.0% |    +3 |   0.7% → 1.9% |   2 → 5 | `CPyDef_pytree___leaves_Base_gen_____mypyc_generator_helper__`                              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +50.0% |    +3 |   2.0% → 3.3% |   6 → 9 | `CPyDef_linegen___visit_STRING_LineGenerator_gen_____mypyc_generator_helper__`              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +75.0% |    +3 |   1.3% → 2.6% |   4 → 7 | `CPyDef_brackets___BracketTracker___mark`                                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +3 |   0.0% → 1.1% |   0 → 3 | `CPyDef_linegen___delimiter_split_gen_____mypyc_generator_helper__`                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +3 |   0.0% → 1.1% |   0 → 3 | `CPyDef_linegen___split_wrapper_dont_increase_indentation_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +3 |   0.0% → 1.1% |   0 → 3 | `CPyDef_pytree___Leaf_____init__`                                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +3 |   0.0% → 1.1% |   0 → 3 | `CPyDef_pgen___ParserGenerator___parse`                                                     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +3 |   0.0% → 1.1% |   0 → 3 | `CPyDef_pgen___ParserGenerator_____init__`                                                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Ours

| Change | Delta |           % | Samples | Function         | Location                  |
| -----: | ----: | ----------: | ------: | ---------------- | ------------------------- |
|    new |    +2 | 0.0% → 0.7% |   0 → 2 | `_create_fn`     | `dataclasses.py`          |
|    new |    +2 | 0.0% → 0.7% |   0 → 2 | `_repr_fn`       | `dataclasses.py`          |
|    new |    +2 | 0.0% → 0.7% |   0 → 2 | `_process_class` | `dataclasses.py`          |
|    new |    +2 | 0.0% → 0.7% |   0 → 2 | `wrap`           | `dataclasses.py`          |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `<module>`       | `json/scanner.py`         |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `<module>`       | `json/decoder.py`         |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `<module>`       | `json/__init__.py`        |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `<module>`       | `collections/__init__.py` |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `<module>`       | `contextlib.py`           |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `_type_check`    | `typing.py`               |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `__init__`       | `typing.py`               |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `<module>`       | `click/decorators.py`     |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `<module>`       | `urllib/parse.py`         |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `<module>`       | `pathlib.py`              |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `dataclass`      | `dataclasses.py`          |

##### Standard library

| Change | Delta |           % | Samples | Function                    | Location                                 |
| -----: | ----: | ----------: | ------: | --------------------------- | ---------------------------------------- |
| +33.3% |    +3 | 3.0% → 4.5% |  9 → 12 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
| +33.3% |    +3 | 3.0% → 4.5% |  9 → 12 | `_load_unlocked`            | `<frozen importlib._bootstrap>`          |
| +33.3% |    +3 | 3.0% → 4.5% |  9 → 12 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
| +33.3% |    +3 | 3.0% → 4.5% |  9 → 12 | `_find_and_load`            | `<frozen importlib._bootstrap>`          |
| +22.2% |    +2 | 3.0% → 4.1% |  9 → 11 | `create_module`             | `<frozen importlib._bootstrap_external>` |
| +22.2% |    +2 | 3.0% → 4.1% |  9 → 11 | `module_from_spec`          | `<frozen importlib._bootstrap>`          |
| +22.2% |    +2 | 3.0% → 4.1% |  9 → 11 | `_get_module_details`       | `<frozen runpy>`                         |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `acquire`                   | `<frozen importlib._bootstrap>`          |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `__enter__`                 | `<frozen importlib._bootstrap>`          |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `<module>`                  | `<frozen importlib.util>`                |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `exec_module`               | `<frozen importlib._bootstrap>`          |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `<module>`                  | `<frozen runpy>`                         |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `get_code`                  | `<frozen importlib._bootstrap_external>` |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                                                     | Location                                                      |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------- |
| removed |  -301 | 100.0% → 0.0% |   301 → 0 | `0x7f3b306b724a`                                                             | `libc.so.6`                                                   |
|  -12.7% |   -37 | 96.7% → 94.4% | 291 → 254 | `CPyDef_black___reformat_one`                                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -12.7% |   -37 | 96.7% → 94.4% | 291 → 254 | `CPyPy_black___reformat_one`                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -12.7% |   -37 | 96.7% → 94.4% | 291 → 254 | `CPyDef_black___main`                                                        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -12.7% |   -37 | 96.7% → 94.4% | 291 → 254 | `CPyPy_black___main`                                                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -12.7% |   -37 | 96.7% → 94.4% | 291 → 254 | `new_func`                                                                   | `click/decorators.py`                                         |
|  -12.7% |   -37 | 96.7% → 94.4% | 291 → 254 | `invoke`                                                                     | `click/core.py`                                               |
|  -12.7% |   -37 | 96.7% → 94.4% | 291 → 254 | `main`                                                                       | `click/core.py`                                               |
|  -12.7% |   -37 | 96.7% → 94.4% | 291 → 254 | `__call__`                                                                   | `click/core.py`                                               |
|  -12.7% |   -37 | 96.7% → 94.4% | 291 → 254 | `CPyDef_black___patched_main`                                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -12.7% |   -37 | 96.7% → 94.4% | 291 → 254 | `CPyPy_black___patched_main`                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -12.7% |   -37 | 96.7% → 94.4% | 291 → 254 | `<module>`                                                                   | `black/__main__.py`                                           |
|  -12.7% |   -37 | 96.7% → 94.4% | 291 → 254 | `_run_code`                                                                  | `<frozen runpy>`                                              |
|  -12.4% |   -36 | 96.3% → 94.4% | 290 → 254 | `CPyDef_black___format_file_contents`                                        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -12.4% |   -36 | 96.3% → 94.4% | 290 → 254 | `CPyDef_black___format_file_in_place`                                        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -11.7% |   -35 | 99.7% → 98.5% | 300 → 265 | `_run_module_as_main`                                                        | `<frozen runpy>`                                              |
|  -10.0% |   -26 | 86.4% → 87.0% | 260 → 234 | `CPyDef_black____format_str_once`                                            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -25.0% |   -23 | 30.6% → 25.7% |   92 → 69 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -10.1% |   -19 | 62.8% → 63.2% | 189 → 170 | `CPyDef_black___format_str`                                                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -20.0% |   -19 | 31.6% → 28.3% |   95 → 76 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Native

|  Change | Delta |             % |   Samples | Function                                                                            | Location                                                      |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| removed |  -301 | 100.0% → 0.0% |   301 → 0 | `0x7f3b306b724a`                                                                    | `libc.so.6`                                                   |
|  -12.7% |   -37 | 96.7% → 94.4% | 291 → 254 | `CPyDef_black___reformat_one`                                                       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -12.7% |   -37 | 96.7% → 94.4% | 291 → 254 | `CPyPy_black___reformat_one`                                                        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -12.7% |   -37 | 96.7% → 94.4% | 291 → 254 | `CPyDef_black___main`                                                               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -12.7% |   -37 | 96.7% → 94.4% | 291 → 254 | `CPyPy_black___main`                                                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -12.7% |   -37 | 96.7% → 94.4% | 291 → 254 | `CPyDef_black___patched_main`                                                       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -12.7% |   -37 | 96.7% → 94.4% | 291 → 254 | `CPyPy_black___patched_main`                                                        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -12.4% |   -36 | 96.3% → 94.4% | 290 → 254 | `CPyDef_black___format_file_contents`                                               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -12.4% |   -36 | 96.3% → 94.4% | 290 → 254 | `CPyDef_black___format_file_in_place`                                               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -10.0% |   -26 | 86.4% → 87.0% | 260 → 234 | `CPyDef_black____format_str_once`                                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -25.0% |   -23 | 30.6% → 25.7% |   92 → 69 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__`        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -10.1% |   -19 | 62.8% → 63.2% | 189 → 170 | `CPyDef_black___format_str`                                                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -20.0% |   -19 | 31.6% → 28.3% |   95 → 76 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -20.2% |   -19 | 31.2% → 27.9% |   94 → 75 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__`             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -20.2% |   -19 | 31.2% → 27.9% |   94 → 75 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -21.8% |   -19 | 28.9% → 25.3% |   87 → 68 | `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__`       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -20.9% |   -18 | 28.6% → 25.3% |   86 → 68 | `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -16.8% |   -17 | 33.6% → 31.2% |  101 → 84 | `CPyDef_black___check_stability_and_equivalence`                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -21.1% |   -12 | 18.9% → 16.7% |   57 → 45 | `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -33.3% |   -10 |  10.0% → 7.4% |   30 → 20 | `CPyDef_black___assert_equivalent`                                                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Ours

|  Change | Delta |             % |   Samples | Function       | Location              |
| ------: | ----: | ------------: | --------: | -------------- | --------------------- |
|  -12.7% |   -37 | 96.7% → 94.4% | 291 → 254 | `new_func`     | `click/decorators.py` |
|  -12.7% |   -37 | 96.7% → 94.4% | 291 → 254 | `invoke`       | `click/core.py`       |
|  -12.7% |   -37 | 96.7% → 94.4% | 291 → 254 | `main`         | `click/core.py`       |
|  -12.7% |   -37 | 96.7% → 94.4% | 291 → 254 | `__call__`     | `click/core.py`       |
|  -12.7% |   -37 | 96.7% → 94.4% | 291 → 254 | `<module>`     | `black/__main__.py`   |
|  -30.0% |    -3 |   3.3% → 2.6% |    10 → 7 | `parse`        | `ast.py`              |
| removed |    -3 |   1.0% → 0.0% |     3 → 0 | `<module>`     | `tokenize.py`         |
| removed |    -2 |   0.7% → 0.0% |     2 → 0 | `<module>`     | `click/types.py`      |
| removed |    -2 |   0.7% → 0.0% |     2 → 0 | `<module>`     | `click/core.py`       |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `replace`      | `dataclasses.py`      |
|  -50.0% |    -1 |   0.7% → 0.4% |     2 → 1 | `debug`        | `logging/__init__.py` |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `isEnabledFor` | `logging/__init__.py` |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `__getitem__`  | `typing.py`           |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `inner`        | `typing.py`           |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `__init__`     | `re/_parser.py`       |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `_parse`       | `re/_parser.py`       |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `_parse_sub`   | `re/_parser.py`       |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `parse`        | `re/_parser.py`       |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `compile`      | `re/_compiler.py`     |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `_compile`     | `re/__init__.py`      |

##### Standard library

|  Change | Delta |             % |   Samples | Function              | Location                                 |
| ------: | ----: | ------------: | --------: | --------------------- | ---------------------------------------- |
|  -12.7% |   -37 | 96.7% → 94.4% | 291 → 254 | `_run_code`           | `<frozen runpy>`                         |
|  -11.7% |   -35 | 99.7% → 98.5% | 300 → 265 | `_run_module_as_main` | `<frozen runpy>`                         |
| removed |    -2 |   0.7% → 0.0% |     2 → 0 | `__new__`             | `<frozen abc>`                           |
| removed |    -2 |   0.7% → 0.0% |     2 → 0 | `_init_module_attrs`  | `<frozen importlib._bootstrap>`          |
| removed |    -2 |   0.7% → 0.0% |     2 → 0 | `find_spec`           | `<frozen importlib._bootstrap_external>` |
| removed |    -2 |   0.7% → 0.0% |     2 → 0 | `_get_spec`           | `<frozen importlib._bootstrap_external>` |
| removed |    -2 |   0.7% → 0.0% |     2 → 0 | `_find_spec`          | `<frozen importlib._bootstrap>`          |
|  -14.3% |    -1 |   2.3% → 2.2% |     7 → 6 | `exec_module`         | `<frozen importlib._bootstrap_external>` |
|  -33.3% |    -1 |   1.0% → 0.7% |     3 → 2 | `_handle_fromlist`    | `<frozen importlib._bootstrap>`          |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `<listcomp>`          | `<frozen importlib._bootstrap_external>` |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `_path_join`          | `<frozen importlib._bootstrap_external>` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `0x7faf691d024a` (`libc.so.6`)

| Change | Delta |            % | Samples | Callee                | Location                                                      |
| -----: | ----: | -----------: | ------: | --------------------- | ------------------------------------------------------------- |
|    new |  +265 | 0.0% → 98.5% | 0 → 265 | `_run_module_as_main` | `<frozen runpy>`                                              |
|    new |    +1 |  0.0% → 0.4% |   0 → 1 | `_find_and_load`      | `<frozen importlib._bootstrap>`                               |
|    new |    +1 |  0.0% → 0.4% |   0 → 1 | `pytree___Node_clear` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser___addtoken` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |             % | Samples | Callee                              | Location                                                      |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ------------------------------------------------------------- |
|  +8.3% |    +4 | 96.0% → 94.5% | 48 → 52 | `CPyDef_parse___Parser____addtoken` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___get_features_used` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |             % | Samples | Callee                                                            | Location                                                      |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------- |
|  +50.0% |    +2 | 26.7% → 30.0% |   4 → 6 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `CPyDef_nodes___is_number_token`                                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +1 |   0.0% → 5.0% |   0 → 1 | `0x7faf68691cf0`                                                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +1 |   0.0% → 5.0% |   0 → 1 | `0x7faf692fc480`                                                  | `libc.so.6`                                                   |

##### `CPyDef_black___detect_target_versions` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |      % | Samples | Callee                             | Location                                                      |
| -----: | ----: | -----: | ------: | ---------------------------------- | ------------------------------------------------------------- |
| +33.3% |    +5 | 100.0% | 15 → 20 | `CPyDef_black___get_features_used` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser____addtoken` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |             % | Samples | Callee                        | Location                                                      |
| ------: | ----: | ------------: | ------: | ----------------------------- | ------------------------------------------------------------- |
|  +16.7% |    +2 | 25.0% → 26.9% | 12 → 14 | `CPyDef_parse___Parser___pop` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +2 |   0.0% → 3.8% |   0 → 2 | `0x7faf68690510`              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 |   2.1% → 0.0% |   1 → 0 | `0x7f3b2fa8dc40`              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 |   2.1% → 0.0% |   1 → 0 | `0x7f3b2fa8f4a0`              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 |   2.1% → 0.0% |   1 → 0 | `0x7f3b2fa8f9c0`              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_comments___normalize_trailing_prefix` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |            % | Samples | Callee                              | Location                                                      |
| ------: | ----: | -----------: | ------: | ----------------------------------- | ------------------------------------------------------------- |
|     new |    +2 | 0.0% → 28.6% |   0 → 2 | `pytree___Leaf_set_prefix`          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +2 | 0.0% → 28.6% |   0 → 2 | `CPyDef_nodes___make_simple_prefix` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `0x7f3b2fa8ed80`                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `0x7f3b2fa8eff0`                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `0x7faf68690bd0`                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyImport_ImportFromMany` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |      % | Samples | Callee           | Location                        |
| ------: | ----: | -----: | ------: | ---------------- | ------------------------------- |
| +100.0% |    +4 | 100.0% |   4 → 8 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `linegen___visit_default_LineGenerator_env_clear` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |            % | Samples | Callee                                      | Location                                                      |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | ------------------------------------------------------------- |
| +100.0% |    +4 |       100.0% |   4 → 8 | `nodes___visit_default_Visitor_gen_dealloc` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `comments___generate_comments_gen_dealloc`  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `nodes___visit_default_Visitor_gen_dealloc` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |              % | Samples | Callee                                      | Location                                                      |
| -----: | ----: | -------------: | ------: | ------------------------------------------- | ------------------------------------------------------------- |
| +50.0% |    +2 | 100.0% → 75.0% |   4 → 6 | `nodes___visit_default_Visitor_env_dealloc` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___leaves_Base_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |            % | Samples | Callee                                                         | Location                                                      |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------------- |
| +150.0% |    +3 |       100.0% |   2 → 5 | `CPyDef_pytree___leaves_Base_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +2 | 0.0% → 40.0% |   0 → 2 | `CPyDef_pytree___Leaf___leaves`                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +2 | 0.0% → 40.0% |   0 → 2 | `pytree___leaves_Base_gen_dealloc`                             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `CPyDef_pytree___leaves_Base_gen_____next__`                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `pytree___leaves_Leaf_gen_dealloc`                             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|  Change | Delta |             % | Samples | Callee                  | Location                                                      |
| ------: | ----: | ------------: | ------: | ----------------------- | ------------------------------------------------------------- |
| removed |    -3 |  33.3% → 0.0% |   3 → 0 | `<module>`              | `tokenize.py`                                                 |
| removed |    -2 |  22.2% → 0.0% |   2 → 0 | `<module>`              | `click/types.py`                                              |
| removed |    -2 |  22.2% → 0.0% |   2 → 0 | `<module>`              | `click/core.py`                                               |
|  +25.0% |    +2 | 88.9% → 83.3% |  8 → 10 | `CPyInit_black`         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +100.0% |    +2 | 22.2% → 33.3% |   2 → 4 | `CPyInit_black___nodes` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

| Change | Delta |              % | Samples | Callee             | Location                                 |
| -----: | ----: | -------------: | ------: | ------------------ | ---------------------------------------- |
| +22.2% |    +2 | 100.0% → 91.7% |  9 → 11 | `module_from_spec` | `<frozen importlib._bootstrap>`          |
| -14.3% |    -1 |  77.8% → 50.0% |   7 → 6 | `exec_module`      | `<frozen importlib._bootstrap_external>` |
|    new |    +1 |    0.0% → 8.3% |   0 → 1 | `exec_module`      | `<frozen importlib._bootstrap>`          |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|  Change | Delta |            % | Samples | Callee           | Location                        |
| ------: | ----: | -----------: | ------: | ---------------- | ------------------------------- |
|  +33.3% |    +3 |       100.0% |  9 → 12 | `_load_unlocked` | `<frozen importlib._bootstrap>` |
| removed |    -2 | 22.2% → 0.0% |   2 → 0 | `_find_spec`     | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

| Change | Delta |           % | Samples | Callee                    | Location                        |
| -----: | ----: | ----------: | ------: | ------------------------- | ------------------------------- |
| +33.3% |    +3 |      100.0% |  9 → 12 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |
|    new |    +1 | 0.0% → 8.3% |   0 → 1 | `__enter__`               | `<frozen importlib._bootstrap>` |

##### `CPyDef_linegen___visit_STRING_LineGenerator_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ------------------------------------------------------------- |
|  +66.7% |    +2 | 50.0% → 55.6% |   3 → 5 | `CPyDef_strings___normalize_string_quotes` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +200.0% |    +2 | 16.7% → 33.3% |   1 → 3 | `CPyDef_nodes___is_docstring`              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `CPyDef_strings___normalize_string_prefix` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_brackets___BracketTracker___mark` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |             % | Samples | Callee                                                                | Location                                                      |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------- | ------------------------------------------------------------- |
| -33.3% |    -1 | 75.0% → 28.6% |   3 → 2 | `CPyDef_brackets___is_split_before_delimiter`                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new |    +1 |  0.0% → 14.3% |   0 → 1 | `CPyDef_brackets___BracketTracker___maybe_increment_lambda_arguments` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new |    +1 |  0.0% → 14.3% |   0 → 1 | `0x7faf686905a0`                                                      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___delimiter_split_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |            % | Samples | Callee                                                                             | Location                                                      |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------- | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `linegen___append_comments_delimiter_split_gen_dealloc`                            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `CPyDef_linegen___append_to_line_delimiter_split_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `__init__`                                                                         | `<string>`                                                    |

##### `CPyDef_linegen___split_wrapper_dont_increase_indentation_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |             % | Samples | Callee                                                              | Location                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `CPyDef_linegen___delimiter_split_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___Leaf_____init__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |            % | Samples | Callee                   | Location                                                      |
| -----: | ----: | -----------: | ------: | ------------------------ | ------------------------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `pytree___Leaf_traverse` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pgen___ParserGenerator___parse` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |            % | Samples | Callee                                      | Location                                                      |
| -----: | ----: | -----------: | ------: | ------------------------------------------- | ------------------------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `CPyDef_pgen___ParserGenerator___make_dfa`  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `CPyDef_pgen___ParserGenerator___parse_rhs` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pgen___ParserGenerator_____init__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |             % | Samples | Callee                                  | Location                                                      |
| -----: | ----: | ------------: | ------: | --------------------------------------- | ------------------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `CPyDef_pgen___ParserGenerator___parse` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_repr_fn` (`dataclasses.py`)

| Change | Delta |             % | Samples | Callee       | Location         |
| -----: | ----: | ------------: | ------: | ------------ | ---------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `_create_fn` | `dataclasses.py` |

##### `_process_class` (`dataclasses.py`)

| Change | Delta |             % | Samples | Callee     | Location         |
| -----: | ----: | ------------: | ------: | ---------- | ---------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `_repr_fn` | `dataclasses.py` |

##### `wrap` (`dataclasses.py`)

| Change | Delta |             % | Samples | Callee           | Location         |
| -----: | ----: | ------------: | ------: | ---------------- | ---------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `_process_class` | `dataclasses.py` |

##### `<module>` (`json/scanner.py`)

| Change | Delta |             % | Samples | Callee           | Location                        |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`json/decoder.py`)

| Change | Delta |             % | Samples | Callee             | Location                        |
| -----: | ----: | ------------: | ------: | ------------------ | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `_handle_fromlist` | `<frozen importlib._bootstrap>` |

##### `<module>` (`json/__init__.py`)

| Change | Delta |             % | Samples | Callee           | Location                        |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`collections/__init__.py`)

| Change | Delta |             % | Samples | Callee           | Location                        |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`contextlib.py`)

| Change | Delta |             % | Samples | Callee           | Location                        |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `__init__` (`typing.py`)

| Change | Delta |             % | Samples | Callee        | Location    |
| -----: | ----: | ------------: | ------: | ------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `_type_check` | `typing.py` |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `__init__`    | `typing.py` |

##### `<module>` (`click/decorators.py`)

| Change | Delta |             % | Samples | Callee     | Location    |
| -----: | ----: | ------------: | ------: | ---------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `__init__` | `typing.py` |

##### `<module>` (`pathlib.py`)

| Change | Delta |             % | Samples | Callee           | Location                        |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `dataclass` (`dataclasses.py`)

| Change | Delta |             % | Samples | Callee | Location         |
| -----: | ----: | ------------: | ------: | ------ | ---------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `wrap` | `dataclasses.py` |

##### `create_module` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |      % | Samples | Callee                      | Location                        |
| -----: | ----: | -----: | ------: | --------------------------- | ------------------------------- |
| +22.2% |    +2 | 100.0% |  9 → 11 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `module_from_spec` (`<frozen importlib._bootstrap>`)

|  Change | Delta |            % | Samples | Callee               | Location                                 |
| ------: | ----: | -----------: | ------: | -------------------- | ---------------------------------------- |
|  +22.2% |    +2 |       100.0% |  9 → 11 | `create_module`      | `<frozen importlib._bootstrap_external>` |
| removed |    -2 | 22.2% → 0.0% |   2 → 0 | `_init_module_attrs` | `<frozen importlib._bootstrap>`          |

##### `_get_module_details` (`<frozen runpy>`)

| Change | Delta |      % | Samples | Callee                | Location                        |
| -----: | ----: | -----: | ------: | --------------------- | ------------------------------- |
| +22.2% |    +2 | 100.0% |  9 → 11 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| +22.2% |    +2 | 100.0% |  9 → 11 | `_get_module_details` | `<frozen runpy>`                |

##### `__enter__` (`<frozen importlib._bootstrap>`)

| Change | Delta |             % | Samples | Callee    | Location                        |
| -----: | ----: | ------------: | ------: | --------- | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `acquire` | `<frozen importlib._bootstrap>` |

##### `<module>` (`<frozen importlib.util>`)

| Change | Delta |             % | Samples | Callee           | Location                        |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `exec_module` (`<frozen importlib._bootstrap>`)

| Change | Delta |             % | Samples | Callee     | Location                  |
| -----: | ----: | ------------: | ------: | ---------- | ------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<module>` | `<frozen importlib.util>` |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<module>` | `<frozen runpy>`          |

##### `<module>` (`<frozen runpy>`)

| Change | Delta |             % | Samples | Callee           | Location                        |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |             % | Samples | Callee           | Location    |
| -----: | ----: | ------------: | ------: | ---------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `0x7faf692fb62e` | `libc.so.6` |

##### `get_code` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |             % | Samples | Callee              | Location                                 |
| -----: | ----: | ------------: | ------: | ------------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>` |

##### `0x7f3b306b724a` (`libc.so.6`)

|  Change | Delta |            % | Samples | Callee                | Location                                                      |
| ------: | ----: | -----------: | ------: | --------------------- | ------------------------------------------------------------- |
| removed |  -300 | 99.7% → 0.0% | 300 → 0 | `_run_module_as_main` | `<frozen runpy>`                                              |
| removed |    -1 |  0.3% → 0.0% |   1 → 0 | `pytree___Node_clear` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___reformat_one` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |              % |   Samples | Callee                                | Location                                                      |
| ------: | ----: | -------------: | --------: | ------------------------------------- | ------------------------------------------------------------- |
|  -12.4% |   -36 | 99.7% → 100.0% | 290 → 254 | `CPyDef_black___format_file_in_place` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 |    0.3% → 0.0% |     1 → 0 | `CPyDef_cache___Cache___read`         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyPy_black___reformat_one` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |      % |   Samples | Callee                        | Location                                                      |
| -----: | ----: | -----: | --------: | ----------------------------- | ------------------------------------------------------------- |
| -12.7% |   -37 | 100.0% | 291 → 254 | `CPyDef_black___reformat_one` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |      % |   Samples | Callee                       | Location                                                      |
| -----: | ----: | -----: | --------: | ---------------------------- | ------------------------------------------------------------- |
| -12.7% |   -37 | 100.0% | 291 → 254 | `CPyPy_black___reformat_one` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyPy_black___main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |      % |   Samples | Callee                | Location                                                      |
| -----: | ----: | -----: | --------: | --------------------- | ------------------------------------------------------------- |
| -12.7% |   -37 | 100.0% | 291 → 254 | `CPyDef_black___main` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `new_func` (`click/decorators.py`)

| Change | Delta |              % |   Samples | Callee               | Location                                                      |
| -----: | ----: | -------------: | --------: | -------------------- | ------------------------------------------------------------- |
| -12.4% |   -36 | 99.7% → 100.0% | 290 → 254 | `CPyPy_black___main` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `invoke` (`click/core.py`)

|  Change | Delta |              % |   Samples | Callee               | Location                                                      |
| ------: | ----: | -------------: | --------: | -------------------- | ------------------------------------------------------------- |
|  -12.7% |   -37 |         100.0% | 291 → 254 | `invoke`             | `click/core.py`                                               |
|  -12.4% |   -36 | 99.7% → 100.0% | 290 → 254 | `new_func`           | `click/decorators.py`                                         |
| removed |    -1 |    0.3% → 0.0% |     1 → 0 | `CPyPy_black___main` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `main` (`click/core.py`)

| Change | Delta |      % |   Samples | Callee   | Location        |
| -----: | ----: | -----: | --------: | -------- | --------------- |
| -12.7% |   -37 | 100.0% | 291 → 254 | `invoke` | `click/core.py` |

##### `__call__` (`click/core.py`)

| Change | Delta |      % |   Samples | Callee | Location        |
| -----: | ----: | -----: | --------: | ------ | --------------- |
| -12.7% |   -37 | 100.0% | 291 → 254 | `main` | `click/core.py` |

##### `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |              % |   Samples | Callee     | Location            |
| ------: | ----: | -------------: | --------: | ---------- | ------------------- |
|  -12.4% |   -36 | 99.7% → 100.0% | 290 → 254 | `__call__` | `click/core.py`     |
| removed |    -1 |    0.3% → 0.0% |     1 → 0 | `<module>` | `black/__main__.py` |

##### `CPyPy_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |      % |   Samples | Callee                        | Location                                                      |
| -----: | ----: | -----: | --------: | ----------------------------- | ------------------------------------------------------------- |
| -12.7% |   -37 | 100.0% | 291 → 254 | `CPyDef_black___patched_main` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `<module>` (`black/__main__.py`)

|  Change | Delta |              % |   Samples | Callee                       | Location                                                      |
| ------: | ----: | -------------: | --------: | ---------------------------- | ------------------------------------------------------------- |
|  -12.4% |   -36 | 99.7% → 100.0% | 290 → 254 | `CPyPy_black___patched_main` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 |    0.3% → 0.0% |     1 → 0 | `__call__`                   | `click/core.py`                                               |

##### `_run_code` (`<frozen runpy>`)

|  Change | Delta |              % |   Samples | Callee                       | Location                                                      |
| ------: | ----: | -------------: | --------: | ---------------------------- | ------------------------------------------------------------- |
|  -12.4% |   -36 | 99.7% → 100.0% | 290 → 254 | `<module>`                   | `black/__main__.py`                                           |
| removed |    -1 |    0.3% → 0.0% |     1 → 0 | `CPyPy_black___patched_main` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_file_contents` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |             % |   Samples | Callee                                           | Location                                                      |
| -----: | ----: | ------------: | --------: | ------------------------------------------------ | ------------------------------------------------------------- |
| -10.1% |   -19 | 65.2% → 66.9% | 189 → 170 | `CPyDef_black___format_str`                      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| -16.8% |   -17 | 34.8% → 33.1% |  101 → 84 | `CPyDef_black___check_stability_and_equivalence` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_file_in_place` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |      % |   Samples | Callee                                | Location                                                      |
| -----: | ----: | -----: | --------: | ------------------------------------- | ------------------------------------------------------------- |
| -12.4% |   -36 | 100.0% | 290 → 254 | `CPyDef_black___format_file_contents` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_run_module_as_main` (`<frozen runpy>`)

| Change | Delta |             % |   Samples | Callee                | Location         |
| -----: | ----: | ------------: | --------: | --------------------- | ---------------- |
| -12.7% |   -37 | 97.0% → 95.8% | 291 → 254 | `_run_code`           | `<frozen runpy>` |
| +22.2% |    +2 |   3.0% → 4.2% |    9 → 11 | `_get_module_details` | `<frozen runpy>` |

##### `CPyDef_black____format_str_once` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |             % |  Samples | Callee                                                             | Location                                                      |
| ------: | ----: | ------------: | -------: | ------------------------------------------------------------------ | ------------------------------------------------------------- |
|  -20.0% |   -19 | 36.5% → 32.5% |  95 → 76 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -25.8% |    -8 |  11.9% → 9.8% |  31 → 23 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|   -5.9% |    -6 | 38.8% → 40.6% | 101 → 95 | `CPyDef_parsing___lib2to3_parse`                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +33.3% |    +5 |   5.8% → 8.5% |  15 → 20 | `CPyDef_black___detect_target_versions`                            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -2 |   0.8% → 0.0% |    2 → 0 | `lines___LinesBlock_dealloc`                                       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |             % | Samples | Callee                                                          | Location                                                      |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------- |
| -25.3% |   -23 | 98.9% → 98.6% | 91 → 68 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +50.0% |    +1 |   2.2% → 4.3% |   2 → 3 | `CPyDef_linegen___normalize_invisible_parens`                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new |    +1 |   0.0% → 1.4% |   0 → 1 | `nodes___visit_Visitor_gen_dealloc`                             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new |    +1 |   0.0% → 1.4% |   0 → 1 | `CPyDef_nodes___Visitor___visit`                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_str` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |      % |   Samples | Callee                            | Location                                                      |
| -----: | ----: | -----: | --------: | --------------------------------- | ------------------------------------------------------------- |
| -10.1% |   -19 | 100.0% | 189 → 170 | `CPyDef_black____format_str_once` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |             % | Samples | Callee                                                                              | Location                                                      |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| -25.0% |   -23 | 96.8% → 90.8% | 92 → 69 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__`        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| -21.8% |   -19 | 91.6% → 89.5% | 87 → 68 | `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__`       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| -20.2% |   -19 | 98.9% → 98.7% | 94 → 75 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| -20.9% |   -18 | 90.5% → 89.5% | 86 → 68 | `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| -21.1% |   -12 | 60.0% → 59.2% | 57 → 45 | `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |             % | Samples | Callee                                                          | Location                                                      |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------- |
|  -20.2% |   -19 |        100.0% | 94 → 75 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|   -9.1% |    -1 | 11.7% → 13.3% | 11 → 10 | `nodes___visit_Visitor_gen_dealloc`                             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 |   1.1% → 0.0% |   1 → 0 | `0x7f3b2fa90b10`                                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +1 |   0.0% → 1.3% |   0 → 1 | `CPyDef_nodes___Visitor___visit`                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |             % | Samples | Callee                                                                  | Location                                                      |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------- | ------------------------------------------------------------- |
|  -20.2% |   -19 |        100.0% | 94 → 75 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -25.0% |    -5 | 21.3% → 20.0% | 20 → 15 | `CPyDef_lines___Line___append`                                          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -23.1% |    -3 | 13.8% → 13.3% | 13 → 10 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__`  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +100.0% |    +2 |   2.1% → 5.3% |   2 → 4 | `CPyDef_nodes___Visitor___visit_default`                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 |   1.1% → 0.0% |   1 → 0 | `CPyDef_comments___generate_comments`                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |      % | Samples | Callee                                                                          | Location                                                      |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| -21.8% |   -19 | 100.0% | 87 → 68 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |              % | Samples | Callee                                                          | Location                                                      |
| -----: | ----: | -------------: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------- |
| -22.1% |   -19 | 100.0% → 98.5% | 86 → 67 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new |    +1 |    0.0% → 1.5% |   0 → 1 | `nodes___visit_Visitor_gen_dealloc`                             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___check_stability_and_equivalence` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |             % | Samples | Callee                             | Location                                                      |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ------------------------------------------------------------- |
| -33.3% |   -10 | 29.7% → 23.8% | 30 → 20 | `CPyDef_black___assert_equivalent` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -9.9% |    -7 | 70.3% → 76.2% | 71 → 64 | `CPyDef_black___assert_stable`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change | Delta |              % | Samples | Callee                                                                          | Location                                                      |
| -----: | ----: | -------------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| -24.6% |   -14 | 100.0% → 95.6% | 57 → 43 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___assert_equivalent` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change | Delta |             % | Samples | Callee                                                             | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------- |
|  -36.8% |    -7 | 63.3% → 60.0% | 19 → 12 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -30.0% |    -3 | 33.3% → 35.0% |  10 → 7 | `CPyDef_parsing___parse_ast`                                       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed |    -1 |   3.3% → 0.0% |   1 → 0 | `realloc`                                                          | `libc.so.6`                                                   |
|     new |    +1 |   0.0% → 5.0% |   0 → 1 | `CPyDef_parsing____stringify_ast_gen_____next__`                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `parse` (`ast.py`)

|  Change | Delta |            % | Samples | Callee                | Location                                                      |
| ------: | ----: | -----------: | ------: | --------------------- | ------------------------------------------------------------- |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `pytree___Node_clear` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `malloc`              | `libc.so.6`                                                   |

##### `<module>` (`tokenize.py`)

|  Change | Delta |            % | Samples | Callee           | Location                        |
| ------: | ----: | -----------: | ------: | ---------------- | ------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`click/types.py`)

|  Change | Delta |             % | Samples | Callee    | Location       |
| ------: | ----: | ------------: | ------: | --------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `__new__` | `<frozen abc>` |

##### `<module>` (`click/core.py`)

|  Change | Delta |             % | Samples | Callee             | Location                        |
| ------: | ----: | ------------: | ------: | ------------------ | ------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `_handle_fromlist` | `<frozen importlib._bootstrap>` |

##### `debug` (`logging/__init__.py`)

|  Change | Delta |            % | Samples | Callee         | Location              |
| ------: | ----: | -----------: | ------: | -------------- | --------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `isEnabledFor` | `logging/__init__.py` |

##### `inner` (`typing.py`)

|  Change | Delta |             % | Samples | Callee        | Location    |
| ------: | ----: | ------------: | ------: | ------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `__getitem__` | `typing.py` |

##### `_parse` (`re/_parser.py`)

|  Change | Delta |             % | Samples | Callee       | Location        |
| ------: | ----: | ------------: | ------: | ------------ | --------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `__init__`   | `re/_parser.py` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `_parse_sub` | `re/_parser.py` |

##### `_parse_sub` (`re/_parser.py`)

|  Change | Delta |             % | Samples | Callee   | Location        |
| ------: | ----: | ------------: | ------: | -------- | --------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `_parse` | `re/_parser.py` |

##### `parse` (`re/_parser.py`)

|  Change | Delta |             % | Samples | Callee       | Location        |
| ------: | ----: | ------------: | ------: | ------------ | --------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `_parse_sub` | `re/_parser.py` |

##### `compile` (`re/_compiler.py`)

|  Change | Delta |             % | Samples | Callee  | Location        |
| ------: | ----: | ------------: | ------: | ------- | --------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `parse` | `re/_parser.py` |

##### `_compile` (`re/__init__.py`)

|  Change | Delta |             % | Samples | Callee    | Location          |
| ------: | ----: | ------------: | ------: | --------- | ----------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compile` | `re/_compiler.py` |

##### `find_spec` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Callee       | Location                                 |
| ------: | ----: | ------------: | ------: | ------------ | ---------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `_get_spec`  | `<frozen importlib._bootstrap_external>` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `_path_join` | `<frozen importlib._bootstrap_external>` |

##### `_get_spec` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Callee      | Location                                 |
| ------: | ----: | ------------: | ------: | ----------- | ---------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `find_spec` | `<frozen importlib._bootstrap_external>` |

##### `_find_spec` (`<frozen importlib._bootstrap>`)

|  Change | Delta |             % | Samples | Callee      | Location                                 |
| ------: | ----: | ------------: | ------: | ----------- | ---------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `find_spec` | `<frozen importlib._bootstrap_external>` |

##### `exec_module` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |            % | Samples | Callee                      | Location                                 |
| -----: | ----: | -----------: | ------: | --------------------------- | ---------------------------------------- |
| -14.3% |    -1 |       100.0% |   7 → 6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `get_code`                  | `<frozen importlib._bootstrap_external>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

| Change | Delta |      % | Samples | Callee                      | Location                        |
| -----: | ----: | -----: | ------: | --------------------------- | ------------------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_path_join` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Callee       | Location                                 |
| ------: | ----: | ------------: | ------: | ------------ | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<listcomp>` | `<frozen importlib._bootstrap_external>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

Common call stack: `CPyDef_black___format_file_contents` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main` ← `0x7faf691d024a` (`libc.so.6`)

| Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -----: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|    new |   +11 | 0.0% → 4.1% |  0 → 11 | `CPyDef_black___get_features_used` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black___detect_target_versions` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|    new |   +11 | 0.0% → 4.1% |  0 → 11 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|    new |   +10 | 0.0% → 3.7% |  0 → 10 | `CPyDef_parse___Parser____addtoken` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|    new |    +9 | 0.0% → 3.3% |   0 → 9 | `CPyDef_driver___Driver___parse_tokens` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|    new |    +8 | 0.0% → 3.0% |   0 → 8 | `CPyDef_parse___Parser___pop` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|    new |    +6 | 0.0% → 2.2% |   0 → 6 | `parse` (`ast.py`) ← `CPyDef_parsing____parse_single_version` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing___parse_ast` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|    new |    +5 | 0.0% → 1.9% |   0 → 5 | `CPyDef_parse___Parser____addtoken` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|    new |    +5 | 0.0% → 1.9% |   0 → 5 | `CPyDef_parse___Parser___push` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|    new |    +4 | 0.0% → 1.5% |   0 → 4 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|    new |    +3 | 0.0% → 1.1% |   0 → 3 | `CPyDef_linegen____hugging_power_ops_line_to_string` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|    new |    +3 | 0.0% → 1.1% |   0 → 3 | `CPyDef_driver___Driver___parse_tokens` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|    new |    +3 | 0.0% → 1.1% |   0 → 3 | `CPyDef_parse___Parser___push` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|    new |    +2 | 0.0% → 0.7% |   0 → 2 | `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|    new |    +2 | 0.0% → 0.7% |   0 → 2 | `CPyDef_pytree___convert` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___shift` ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|    new |    +2 | 0.0% → 0.7% |   0 → 2 | `CPyDef_parse___Parser___classify` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|    new |    +2 | 0.0% → 0.7% |   0 → 2 | `CPyDef_parse___Parser___pop` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|    new |    +2 | 0.0% → 0.7% |   0 → 2 | `linegen___visit_DEDENT_LineGenerator_env_clear` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `linegen___visit_DEDENT_LineGenerator_env_dealloc` ← `linegen___visit_DEDENT_LineGenerator_gen_dealloc` ← `nodes___visit_Visitor_env_clear` ← `nodes___visit_Visitor_env_dealloc` ← `nodes___visit_Visitor_gen_dealloc` ← `nodes___visit_default_Visitor_env_clear` ← `nodes___visit_default_Visitor_env_dealloc` ← `nodes___visit_default_Visitor_gen_dealloc` ← `linegen___visit_default_LineGenerator_env_clear` ← `linegen___visit_default_LineGenerator_env_dealloc` ← `linegen___visit_default_LineGenerator_gen_dealloc` ← `linegen___visit_suite_LineGenerator_env_clear` ← `linegen___visit_suite_LineGenerator_env_dealloc` ← `linegen___visit_suite_LineGenerator_gen_dealloc` ← `nodes___visit_Visitor_env_clear` ← `nodes___visit_Visitor_env_dealloc` ← `nodes___visit_Visitor_gen_dealloc` ← `linegen___visit_stmt_LineGenerator_env_clear` ← `linegen___visit_stmt_LineGenerator_env_dealloc` ← `linegen___visit_stmt_LineGenerator_gen_dealloc` ← `nodes___visit_Visitor_env_clear` ← `nodes___visit_Visitor_env_dealloc` ← `nodes___visit_Visitor_gen_dealloc` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` |
|    new |    +2 | 0.0% → 0.7% |   0 → 2 | `0x7faf68690a10` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___pop` ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|    new |    +2 | 0.0% → 0.7% |   0 → 2 | `CPyDef_lines___Line_____str__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_lines___line_to_string` ← `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|    new |    +2 | 0.0% → 0.7% |   0 → 2 | `CPyStr_GetItem` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

Common call stack: `_run_module_as_main` (`<frozen runpy>`) ← `0x7f3b306b724a` (`libc.so.6`)

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------: | ----: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |   -15 | 5.0% → 0.0% |  15 → 0 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed |   -12 | 4.0% → 0.0% |  12 → 0 | `CPyDef_driver___Driver___parse_tokens` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed |    -9 | 3.0% → 0.0% |   9 → 0 | `parse` (`ast.py`) ← `CPyDef_parsing____parse_single_version` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing___parse_ast` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |    -8 | 2.7% → 0.0% |   8 → 0 | `CPyDef_black___get_features_used` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black___detect_target_versions` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| removed |    -7 | 2.3% → 0.0% |   7 → 0 | `CPyDef_parse___Parser____addtoken` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed |    -6 | 2.0% → 0.0% |   6 → 0 | `CPyDef_parse___Parser____addtoken` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |    -5 | 1.7% → 0.0% |   5 → 0 | `CPyDef_parse___Parser___push` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed |    -4 | 1.3% → 0.0% |   4 → 0 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `CPyDef_parse___Parser___pop` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `CPy_AddTraceback` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_trans___hug_power_op_gen_____mypyc_generator_helper__` ← `CPyDef_linegen____hugging_power_ops_line_to_string` ← `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`) |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `CPyDef_parse___Parser___pop` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `CPyDef_parse___Parser___shift` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `CPyDef_parse___Parser___push` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `__new__` (`<frozen abc>`) ← `<module>` (`click/types.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `_call_with_frames_removed` ← `_handle_fromlist` ← `<module>` (`click/core.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`click/__init__.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `CPyImport_ImportMany` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black_____top_level__` ← `CPyInit_black` ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `create_module` (`<frozen importlib._bootstrap_external>`) ← `module_from_spec` (`<frozen importlib._bootstrap>`) ← `_load_unlocked` ← `_find_and_load_unlocked` ← `_find_and_load` ← `_get_module_details` (`<frozen runpy>`) ← `_get_module_details`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `CPyDef_pytree___convert` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___shift` ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `CPyDef_pytree___convert` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___shift` ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `CPyDef_tokenize___generate_tokens_gen_____next__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

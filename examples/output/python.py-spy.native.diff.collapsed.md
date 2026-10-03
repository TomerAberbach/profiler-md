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

Functions with the largest increase in samples taken directly in the function body, excluding callees.

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

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

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

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

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

Functions with the largest decrease in total samples taken in the function and all its callees.

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

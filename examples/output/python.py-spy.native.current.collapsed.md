# Sampling profile

Collected 376 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 92.0% |     346 |
| Ours             |  6.1% |      23 |
| Standard library |  1.9% |       7 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                               | Location                                                      |
| ---: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------- |
| 7.4% |      28 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 6.1% |      23 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 4.8% |      18 | `CPyDef_parse___Parser____addtoken`                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 4.5% |      17 | `CPyDef_driver___Driver___parse_tokens`                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 3.5% |      13 | `CPyDef_parse___Parser___push`                                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.9% |      11 | `CPyDef_parse___Parser___pop`                                          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.7% |      10 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.9% |       7 | `CPyDef_black___get_features_used`                                     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.6% |       6 | `CPyDef_brackets___is_split_before_delimiter`                          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       5 | `CPyDef_pytree___Leaf_____init__`                                      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       5 | `CPyDef_nodes___is_parent_function_or_class`                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       5 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       5 | `CPyDef_nodes___whitespace`                                            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       5 | `parse`                                                                | `ast.py`                                                      |
| 1.3% |       5 | `CPyDef_strings___sub_twice`                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       5 | `pytree___Leaf_traverse`                                               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.1% |       4 | `CPyDef_comments___normalize_trailing_prefix`                          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.1% |       4 | `CPyStr_Build`                                                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.1% |       4 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.1% |       4 | `0x7f2824c8f4a0`                                                       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

#### Categories

##### Native

|    % | Samples | Function                                                               | Location                                                      |
| ---: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------- |
| 7.4% |      28 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 6.1% |      23 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 4.8% |      18 | `CPyDef_parse___Parser____addtoken`                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 4.5% |      17 | `CPyDef_driver___Driver___parse_tokens`                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 3.5% |      13 | `CPyDef_parse___Parser___push`                                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.9% |      11 | `CPyDef_parse___Parser___pop`                                          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.7% |      10 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.9% |       7 | `CPyDef_black___get_features_used`                                     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.6% |       6 | `CPyDef_brackets___is_split_before_delimiter`                          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       5 | `CPyDef_pytree___Leaf_____init__`                                      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       5 | `CPyDef_nodes___is_parent_function_or_class`                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       5 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       5 | `CPyDef_nodes___whitespace`                                            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       5 | `CPyDef_strings___sub_twice`                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       5 | `pytree___Leaf_traverse`                                               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.1% |       4 | `CPyDef_comments___normalize_trailing_prefix`                          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.1% |       4 | `CPyStr_Build`                                                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.1% |       4 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.1% |       4 | `0x7f2824c8f4a0`                                                       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.1% |       4 | `CPyDef_pytree___type_repr`                                            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Ours

|    % | Samples | Function       | Location                      |
| ---: | ------: | -------------- | ----------------------------- |
| 1.3% |       5 | `parse`        | `ast.py`                      |
| 0.8% |       3 | `_create_fn`   | `dataclasses.py`              |
| 0.8% |       3 | `__init__`     | `<string>`                    |
| 0.5% |       2 | `<module>`     | `ipaddress.py`                |
| 0.5% |       2 | `split`        | `re/__init__.py`              |
| 0.3% |       1 | `replace`      | `dataclasses.py`              |
| 0.3% |       1 | `debug`        | `logging/__init__.py`         |
| 0.3% |       1 | `<module>`     | `collections/__init__.py`     |
| 0.3% |       1 | `match`        | `re/__init__.py`              |
| 0.3% |       1 | `_compile`     | `re/__init__.py`              |
| 0.3% |       1 | `__set_name__` | `enum.py`                     |
| 0.3% |       1 | `find_spec`    | `_distutils_hack/__init__.py` |
| 0.3% |       1 | `isEnabledFor` | `logging/__init__.py`         |

##### Standard library

|    % | Samples | Function                    | Location                                 |
| ---: | ------: | --------------------------- | ---------------------------------------- |
| 0.3% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
| 0.3% |       1 | `__init__`                  | `<frozen importlib._bootstrap_external>` |
| 0.3% |       1 | `find_spec`                 | `<frozen importlib._bootstrap_external>` |
| 0.3% |       1 | `getstate`                  | `<frozen codecs>`                        |
| 0.3% |       1 | `_fill_cache`               | `<frozen importlib._bootstrap_external>` |
| 0.3% |       1 | `_validate_timestamp_pyc`   | `<frozen importlib._bootstrap_external>` |
| 0.3% |       1 | `_requires_builtin_wrapper` | `<frozen importlib._bootstrap>`          |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |       5 | `ast.py:50` |

##### `_create_fn` (`dataclasses.py`)

|      % | Samples | Location             |
| -----: | ------: | -------------------- |
| 100.0% |       3 | `dataclasses.py:433` |

##### `__init__` (`<string>`)

|     % | Samples | Location     |
| ----: | ------: | ------------ |
| 33.3% |       1 | `<string>:9` |
| 33.3% |       1 | `<string>:5` |
| 33.3% |       1 | `<string>:2` |

##### `<module>` (`ipaddress.py`)

|      % | Samples | Location            |
| -----: | ------: | ------------------- |
| 100.0% |       2 | `ipaddress.py:2222` |

##### `split` (`re/__init__.py`)

|      % | Samples | Location             |
| -----: | ------: | -------------------- |
| 100.0% |       2 | `re/__init__.py:206` |

##### `replace` (`dataclasses.py`)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |       1 | `dataclasses.py:1491` |

##### `debug` (`logging/__init__.py`)

|      % | Samples | Location                   |
| -----: | ------: | -------------------------- |
| 100.0% |       1 | `logging/__init__.py:1467` |

##### `<module>` (`collections/__init__.py`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       1 | `collections/__init__.py:35` |

##### `match` (`re/__init__.py`)

|      % | Samples | Location             |
| -----: | ------: | -------------------- |
| 100.0% |       1 | `re/__init__.py:166` |

##### `_compile` (`re/__init__.py`)

|      % | Samples | Location             |
| -----: | ------: | -------------------- |
| 100.0% |       1 | `re/__init__.py:275` |

##### `__set_name__` (`enum.py`)

|      % | Samples | Location      |
| -----: | ------: | ------------- |
| 100.0% |       1 | `enum.py:281` |

##### `find_spec` (`_distutils_hack/__init__.py`)

|      % | Samples | Location                         |
| -----: | ------: | -------------------------------- |
| 100.0% |       1 | `_distutils_hack/__init__.py:95` |

##### `isEnabledFor` (`logging/__init__.py`)

|      % | Samples | Location                   |
| -----: | ------: | -------------------------- |
| 100.0% |       1 | `logging/__init__.py:1742` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap>:241` |

##### `__init__` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:1565` |

##### `find_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:1638` |

##### `getstate` (`<frozen codecs>`)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |       1 | `<frozen codecs>:333` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:1666` |

##### `_validate_timestamp_pyc` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:694` |

##### `_requires_builtin_wrapper` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap>:255` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                                  | Location                                                      |
| -----: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| 100.0% |      28 | `CPyDef_driver___TokenProxy_____next__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Caller                                                                       | Location                                                      |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 69.6% |      16 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__`      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 30.4% |       7 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser____addtoken` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                             | Location                                                      |
| -----: | ------: | ---------------------------------- | ------------------------------------------------------------- |
| 100.0% |      18 | `CPyDef_parse___Parser___addtoken` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_driver___Driver___parse_tokens` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                                  | Location                                                      |
| -----: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| 100.0% |      17 | `CPyDef_driver___Driver___parse_string` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser___push` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                              | Location                                                      |
| -----: | ------: | ----------------------------------- | ------------------------------------------------------------- |
| 100.0% |      13 | `CPyDef_parse___Parser____addtoken` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser___pop` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                              | Location                                                      |
| -----: | ------: | ----------------------------------- | ------------------------------------------------------------- |
| 100.0% |      11 | `CPyDef_parse___Parser____addtoken` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                                                                             | Location                                                      |
| -----: | ------: | ---------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |      10 | `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___get_features_used` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                                  | Location                                                      |
| -----: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       7 | `CPyDef_black___detect_target_versions` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_brackets___is_split_before_delimiter` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                                    | Location                                                      |
| -----: | ------: | ----------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       6 | `CPyDef_brackets___BracketTracker___mark` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___Leaf_____init__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Caller                         | Location                                                      |
| ----: | ------: | ------------------------------ | ------------------------------------------------------------- |
| 80.0% |       4 | `CPyDef_pytree___convert`      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 20.0% |       1 | `CPyDef_pytree___Leaf___clone` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___is_parent_function_or_class` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                         | Location                                                      |
| -----: | ------: | ------------------------------ | ------------------------------------------------------------- |
| 100.0% |       5 | `CPyDef_nodes___is_stub_suite` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                                                                          | Location                                                      |
| -----: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       5 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___whitespace` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                         | Location                                                      |
| -----: | ------: | ------------------------------ | ------------------------------------------------------------- |
| 100.0% |       5 | `CPyDef_lines___Line___append` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                                   | Location                                                      |
| -----: | ------: | ---------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       5 | `CPyDef_parsing____parse_single_version` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_strings___sub_twice` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                                     | Location                                                      |
| -----: | ------: | ------------------------------------------ | ------------------------------------------------------------- |
| 100.0% |       5 | `CPyDef_strings___normalize_string_quotes` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `pytree___Leaf_traverse` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Caller                                  | Location                                                      |
| ----: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| 40.0% |       2 | `CPyDef_parse___Parser___push`          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 20.0% |       1 | `CPyDef_driver___Driver___parse_tokens` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 20.0% |       1 | `CPyDef_pytree___Leaf_____init__`       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 20.0% |       1 | `CPyDef_lines___Line_____str__`         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_comments___normalize_trailing_prefix` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                                                                 | Location                                                      |
| -----: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       4 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyStr_Build` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Caller                                                             | Location                                                      |
| ----: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------- |
| 75.0% |       3 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 25.0% |       1 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                            | Location                                                      |
| -----: | ------: | --------------------------------- | ------------------------------------------------------------- |
| 100.0% |       4 | `CPyDef_black____format_str_once` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7f2824c8f4a0` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Caller                                           | Location                                                      |
| ----: | ------: | ------------------------------------------------ | ------------------------------------------------------------- |
| 25.0% |       1 | `CPyDef_pytree___Node___update_sibling_maps`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 25.0% |       1 | `CPyDef_lines___Line___has_magic_trailing_comma` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 25.0% |       1 | `CPyDef_black___get_features_used`               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 25.0% |       1 | `CPyDef_driver___Driver___parse_tokens`          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___type_repr` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                                                          | Location                                                      |
| -----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       4 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_create_fn` (`dataclasses.py`)

|     % | Samples | Caller                 | Location         |
| ----: | ------: | ---------------------- | ---------------- |
| 66.7% |       2 | `_init_fn`             | `dataclasses.py` |
| 33.3% |       1 | `_frozen_get_del_attr` | `dataclasses.py` |

##### `__init__` (`<string>`)

|     % | Samples | Caller                                                                 | Location                                                      |
| ----: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------- |
| 66.7% |       2 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 33.3% |       1 | `__init__`                                                             | `<string>`                                                    |

##### `<module>` (`ipaddress.py`)

|      % | Samples | Caller                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `split` (`re/__init__.py`)

|      % | Samples | Caller                            | Location                                                      |
| -----: | ------: | --------------------------------- | ------------------------------------------------------------- |
| 100.0% |       2 | `CPyDef_comments___list_comments` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `replace` (`dataclasses.py`)

|      % | Samples | Caller                                                                                    | Location                                                      |
| -----: | ------: | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `CPyDef_linegen____maybe_split_omitting_optional_parens_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `debug` (`logging/__init__.py`)

|      % | Samples | Caller                                  | Location                                                      |
| -----: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `CPyDef_driver___Driver___parse_tokens` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `<module>` (`collections/__init__.py`)

|      % | Samples | Caller                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `match` (`re/__init__.py`)

|      % | Samples | Caller                            | Location                                                      |
| -----: | ------: | --------------------------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `CPyDef_comments___list_comments` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_compile` (`re/__init__.py`)

|      % | Samples | Caller    | Location         |
| -----: | ------: | --------- | ---------------- |
| 100.0% |       1 | `compile` | `re/__init__.py` |

##### `__set_name__` (`enum.py`)

|      % | Samples | Caller    | Location  |
| -----: | ------: | --------- | --------- |
| 100.0% |       1 | `__new__` | `enum.py` |

##### `find_spec` (`_distutils_hack/__init__.py`)

|      % | Samples | Caller       | Location                        |
| -----: | ------: | ------------ | ------------------------------- |
| 100.0% |       1 | `_find_spec` | `<frozen importlib._bootstrap>` |

##### `isEnabledFor` (`logging/__init__.py`)

|      % | Samples | Caller  | Location              |
| -----: | ------: | ------- | --------------------- |
| 100.0% |       1 | `debug` | `logging/__init__.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Caller        | Location                        |
| -----: | ------: | ------------- | ------------------------------- |
| 100.0% |       1 | `exec_module` | `<frozen importlib._bootstrap>` |

##### `__init__` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                     | Location                                 |
| -----: | ------: | -------------------------- | ---------------------------------------- |
| 100.0% |       1 | `path_hook_for_FileFinder` | `<frozen importlib._bootstrap_external>` |

##### `find_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller      | Location                                 |
| -----: | ------: | ----------- | ---------------------------------------- |
| 100.0% |       1 | `_get_spec` | `<frozen importlib._bootstrap_external>` |

##### `getstate` (`<frozen codecs>`)

|      % | Samples | Caller                                                               | Location                                                      |
| -----: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller      | Location                                 |
| -----: | ------: | ----------- | ---------------------------------------- |
| 100.0% |       1 | `find_spec` | `<frozen importlib._bootstrap_external>` |

##### `_validate_timestamp_pyc` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller     | Location                                 |
| -----: | ------: | ---------- | ---------------------------------------- |
| 100.0% |       1 | `get_code` | `<frozen importlib._bootstrap_external>` |

##### `_requires_builtin_wrapper` (`<frozen importlib._bootstrap>`)

|      % | Samples | Caller             | Location                        |
| -----: | ------: | ------------------ | ------------------------------- |
| 100.0% |       1 | `spec_from_loader` | `<frozen importlib._bootstrap>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                                                        | Location                                                      |
| -----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |     376 | `0x7f28257a524a`                                                | `libc.so.6`                                                   |
|  98.7% |     371 | `_run_module_as_main`                                           | `<frozen runpy>`                                              |
|  92.0% |     346 | `CPyDef_black___format_file_contents`                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  92.0% |     346 | `CPyDef_black___format_file_in_place`                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  92.0% |     346 | `CPyDef_black___reformat_one`                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  92.0% |     346 | `CPyPy_black___reformat_one`                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  92.0% |     346 | `CPyDef_black___main`                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  92.0% |     346 | `CPyPy_black___main`                                            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  92.0% |     346 | `new_func`                                                      | `click/decorators.py`                                         |
|  92.0% |     346 | `invoke`                                                        | `click/core.py`                                               |
|  92.0% |     346 | `main`                                                          | `click/core.py`                                               |
|  92.0% |     346 | `__call__`                                                      | `click/core.py`                                               |
|  92.0% |     346 | `CPyDef_black___patched_main`                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  92.0% |     346 | `CPyPy_black___patched_main`                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  92.0% |     346 | `<module>`                                                      | `black/__main__.py`                                           |
|  92.0% |     346 | `_run_code`                                                     | `<frozen runpy>`                                              |
|  82.7% |     311 | `CPyDef_black____format_str_once`                               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  55.6% |     209 | `CPyDef_black___format_str`                                     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  36.4% |     137 | `CPyDef_black___check_stability_and_equivalence`                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  34.3% |     129 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

#### Categories

##### Native

|      % | Samples | Function                                                                        | Location                                                      |
| -----: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |     376 | `0x7f28257a524a`                                                                | `libc.so.6`                                                   |
|  92.0% |     346 | `CPyDef_black___format_file_contents`                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  92.0% |     346 | `CPyDef_black___format_file_in_place`                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  92.0% |     346 | `CPyDef_black___reformat_one`                                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  92.0% |     346 | `CPyPy_black___reformat_one`                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  92.0% |     346 | `CPyDef_black___main`                                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  92.0% |     346 | `CPyPy_black___main`                                                            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  92.0% |     346 | `CPyDef_black___patched_main`                                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  92.0% |     346 | `CPyPy_black___patched_main`                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  82.7% |     311 | `CPyDef_black____format_str_once`                                               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  55.6% |     209 | `CPyDef_black___format_str`                                                     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  36.4% |     137 | `CPyDef_black___check_stability_and_equivalence`                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  34.3% |     129 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  34.3% |     129 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__`         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  34.3% |     129 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  34.0% |     128 | `CPyDef_driver___Driver___parse_tokens`                                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  34.0% |     128 | `CPyDef_driver___Driver___parse_string`                                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  34.0% |     128 | `CPyDef_parsing___lib2to3_parse`                                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  33.2% |     125 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__`    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  33.0% |     124 | `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Ours

|     % | Samples | Function         | Location                                    |
| ----: | ------: | ---------------- | ------------------------------------------- |
| 92.0% |     346 | `new_func`       | `click/decorators.py`                       |
| 92.0% |     346 | `invoke`         | `click/core.py`                             |
| 92.0% |     346 | `main`           | `click/core.py`                             |
| 92.0% |     346 | `__call__`       | `click/core.py`                             |
| 92.0% |     346 | `<module>`       | `black/__main__.py`                         |
|  2.4% |       9 | `parse`          | `ast.py`                                    |
|  1.1% |       4 | `<module>`       | `black/files.py`                            |
|  1.1% |       4 | `<module>`       | `pathspec/_backends/agg.py`                 |
|  1.1% |       4 | `<module>`       | `pathspec/gitignore.py`                     |
|  1.1% |       4 | `<module>`       | `pathspec/__init__.py`                      |
|  0.8% |       3 | `_create_fn`     | `dataclasses.py`                            |
|  0.8% |       3 | `_process_class` | `dataclasses.py`                            |
|  0.8% |       3 | `wrap`           | `dataclasses.py`                            |
|  0.8% |       3 | `__init__`       | `<string>`                                  |
|  0.5% |       2 | `<module>`       | `hashlib.py`                                |
|  0.5% |       2 | `<module>`       | `pathspec/_backends/hyperscan/gitignore.py` |
|  0.5% |       2 | `<module>`       | `contextlib.py`                             |
|  0.5% |       2 | `debug`          | `logging/__init__.py`                       |
|  0.5% |       2 | `<module>`       | `ipaddress.py`                              |
|  0.5% |       2 | `<module>`       | `urllib/parse.py`                           |

##### Standard library

|     % | Samples | Function                    | Location                                 |
| ----: | ------: | --------------------------- | ---------------------------------------- |
| 98.7% |     371 | `_run_module_as_main`       | `<frozen runpy>`                         |
| 92.0% |     346 | `_run_code`                 | `<frozen runpy>`                         |
|  7.2% |      27 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  7.2% |      27 | `_load_unlocked`            | `<frozen importlib._bootstrap>`          |
|  7.2% |      27 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
|  7.2% |      27 | `_find_and_load`            | `<frozen importlib._bootstrap>`          |
|  6.6% |      25 | `create_module`             | `<frozen importlib._bootstrap_external>` |
|  6.6% |      25 | `module_from_spec`          | `<frozen importlib._bootstrap>`          |
|  6.6% |      25 | `_get_module_details`       | `<frozen runpy>`                         |
|  4.3% |      16 | `exec_module`               | `<frozen importlib._bootstrap_external>` |
|  1.6% |       6 | `_find_spec`                | `<frozen importlib._bootstrap>`          |
|  1.1% |       4 | `_get_spec`                 | `<frozen importlib._bootstrap_external>` |
|  1.1% |       4 | `find_spec`                 | `<frozen importlib._bootstrap_external>` |
|  0.8% |       3 | `_handle_fromlist`          | `<frozen importlib._bootstrap>`          |
|  0.8% |       3 | `exec_module`               | `<frozen importlib._bootstrap>`          |
|  0.5% |       2 | `<module>`                  | `<frozen importlib.util>`                |
|  0.5% |       2 | `<module>`                  | `<frozen runpy>`                         |
|  0.5% |       2 | `_fill_cache`               | `<frozen importlib._bootstrap_external>` |
|  0.3% |       1 | `__init__`                  | `<frozen importlib._bootstrap_external>` |
|  0.3% |       1 | `path_hook_for_FileFinder`  | `<frozen importlib._bootstrap_external>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x7f28257a524a` (`libc.so.6`)

|     % | Samples | Callee                | Location                                                      |
| ----: | ------: | --------------------- | ------------------------------------------------------------- |
| 98.7% |     371 | `_run_module_as_main` | `<frozen runpy>`                                              |
|  0.5% |       2 | `_find_and_load`      | `<frozen importlib._bootstrap>`                               |
|  0.3% |       1 | `pytree___Node_clear` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_run_module_as_main` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 93.3% |     346 | `_run_code`           | `<frozen runpy>` |
|  6.7% |      25 | `_get_module_details` | `<frozen runpy>` |

##### `CPyDef_black___format_file_contents` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Callee                                           | Location                                                      |
| ----: | ------: | ------------------------------------------------ | ------------------------------------------------------------- |
| 60.4% |     209 | `CPyDef_black___format_str`                      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 39.6% |     137 | `CPyDef_black___check_stability_and_equivalence` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_file_in_place` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                                | Location                                                      |
| -----: | ------: | ------------------------------------- | ------------------------------------------------------------- |
| 100.0% |     346 | `CPyDef_black___format_file_contents` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___reformat_one` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                                | Location                                                      |
| -----: | ------: | ------------------------------------- | ------------------------------------------------------------- |
| 100.0% |     346 | `CPyDef_black___format_file_in_place` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyPy_black___reformat_one` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                        | Location                                                      |
| -----: | ------: | ----------------------------- | ------------------------------------------------------------- |
| 100.0% |     346 | `CPyDef_black___reformat_one` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                       | Location                                                      |
| -----: | ------: | ---------------------------- | ------------------------------------------------------------- |
| 100.0% |     346 | `CPyPy_black___reformat_one` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyPy_black___main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                | Location                                                      |
| -----: | ------: | --------------------- | ------------------------------------------------------------- |
| 100.0% |     346 | `CPyDef_black___main` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `new_func` (`click/decorators.py`)

|      % | Samples | Callee               | Location                                                      |
| -----: | ------: | -------------------- | ------------------------------------------------------------- |
| 100.0% |     346 | `CPyPy_black___main` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `invoke` (`click/core.py`)

|      % | Samples | Callee     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |     346 | `new_func` | `click/decorators.py` |
| 100.0% |     346 | `invoke`   | `click/core.py`       |

##### `main` (`click/core.py`)

|      % | Samples | Callee   | Location        |
| -----: | ------: | -------- | --------------- |
| 100.0% |     346 | `invoke` | `click/core.py` |

##### `__call__` (`click/core.py`)

|      % | Samples | Callee | Location        |
| -----: | ------: | ------ | --------------- |
| 100.0% |     346 | `main` | `click/core.py` |

##### `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee     | Location        |
| -----: | ------: | ---------- | --------------- |
| 100.0% |     346 | `__call__` | `click/core.py` |

##### `CPyPy_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                        | Location                                                      |
| -----: | ------: | ----------------------------- | ------------------------------------------------------------- |
| 100.0% |     346 | `CPyDef_black___patched_main` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `<module>` (`black/__main__.py`)

|      % | Samples | Callee                       | Location                                                      |
| -----: | ------: | ---------------------------- | ------------------------------------------------------------- |
| 100.0% |     346 | `CPyPy_black___patched_main` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee     | Location            |
| -----: | ------: | ---------- | ------------------- |
| 100.0% |     346 | `<module>` | `black/__main__.py` |

##### `CPyDef_black____format_str_once` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Callee                                                             | Location                                                      |
| ----: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------- |
| 41.5% |     129 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 41.2% |     128 | `CPyDef_parsing___lib2to3_parse`                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  8.4% |      26 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  4.2% |      13 | `CPyDef_black___detect_target_versions`                            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  2.6% |       8 | `CPyDef_comments___convert_one_fmt_off_pair`                       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_str` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                            | Location                                                      |
| -----: | ------: | --------------------------------- | ------------------------------------------------------------- |
| 100.0% |     209 | `CPyDef_black____format_str_once` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___check_stability_and_equivalence` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Callee                             | Location                                                      |
| ----: | ------: | ---------------------------------- | ------------------------------------------------------------- |
| 74.5% |     102 | `CPyDef_black___assert_stable`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 25.5% |      35 | `CPyDef_black___assert_equivalent` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                                                                              | Location                                                      |
| -----: | ------: | ----------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |     129 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  96.9% |     125 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__`        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  96.1% |     124 | `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  95.3% |     123 | `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__`       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  57.4% |      74 | `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                                                          | Location                                                      |
| -----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |     129 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|   7.0% |       9 | `nodes___visit_Visitor_gen_dealloc`                             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|   1.6% |       2 | `CPyDef_nodes___Visitor___visit`                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                                                                  | Location                                                      |
| -----: | ------: | ----------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |     129 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  18.6% |      24 | `CPyDef_lines___Line___append`                                          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|   9.3% |      12 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__`  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|   2.3% |       3 | `CPyDef_comments___generate_comments`                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|   1.6% |       2 | `CPyDef_nodes___Visitor___visit_default`                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_driver___Driver___parse_tokens` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Callee                                  | Location                                                      |
| ----: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| 49.2% |      63 | `CPyDef_parse___Parser___addtoken`      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 32.8% |      42 | `CPyDef_driver___TokenProxy_____next__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  1.6% |       2 | `debug`                                 | `logging/__init__.py`                                         |
|  0.8% |       1 | `0x7f2824c90b10`                        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  0.8% |       1 | `0x7f28258d1480`                        | `libc.so.6`                                                   |

##### `CPyDef_driver___Driver___parse_string` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                                  | Location                                                      |
| -----: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| 100.0% |     128 | `CPyDef_driver___Driver___parse_tokens` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parsing___lib2to3_parse` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                                  | Location                                                      |
| -----: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| 100.0% |     128 | `CPyDef_driver___Driver___parse_string` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Callee                                                                 | Location                                                      |
| ----: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------- |
| 96.8% |     121 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  6.4% |       8 | `CPyDef_linegen___normalize_invisible_parens`                          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  1.6% |       2 | `nodes___visit_Visitor_gen_dealloc`                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  1.6% |       2 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Callee                                                          | Location                                                      |
| ----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------- |
| 99.2% |     123 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|     % | Samples | Callee                     | Location                                                      |
| ----: | ------: | -------------------------- | ------------------------------------------------------------- |
| 88.9% |      24 | `CPyInit_black`            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 29.6% |       8 | `CPyInit_black___nodes`    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 29.6% |       8 | `CPyInit_black___comments` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 18.5% |       5 | `_find_and_load`           | `<frozen importlib._bootstrap>`                               |
| 18.5% |       5 | `CPyInit_black___strings`  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|     % | Samples | Callee             | Location                                 |
| ----: | ------: | ------------------ | ---------------------------------------- |
| 92.6% |      25 | `module_from_spec` | `<frozen importlib._bootstrap>`          |
| 59.3% |      16 | `exec_module`      | `<frozen importlib._bootstrap_external>` |
| 11.1% |       3 | `exec_module`      | `<frozen importlib._bootstrap>`          |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |      27 | `_load_unlocked`            | `<frozen importlib._bootstrap>` |
|  22.2% |       6 | `_find_spec`                | `<frozen importlib._bootstrap>` |
|  11.1% |       3 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                    | Location                        |
| -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% |      27 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `create_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |      25 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `module_from_spec` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee          | Location                                 |
| -----: | ------: | --------------- | ---------------------------------------- |
| 100.0% |      25 | `create_module` | `<frozen importlib._bootstrap_external>` |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location                        |
| -----: | ------: | --------------------- | ------------------------------- |
| 100.0% |      25 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% |      25 | `_get_module_details` | `<frozen runpy>`                |

##### `exec_module` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                      | Location                                 |
| ----: | ------: | --------------------------- | ---------------------------------------- |
| 93.8% |      15 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  6.3% |       1 | `get_code`                  | `<frozen importlib._bootstrap_external>` |

##### `parse` (`ast.py`)

|     % | Samples | Callee                | Location                                                      |
| ----: | ------: | --------------------- | ------------------------------------------------------------- |
| 22.2% |       2 | `pytree___Node_clear` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 11.1% |       1 | `realloc`             | `libc.so.6`                                                   |
| 11.1% |       1 | `malloc`              | `libc.so.6`                                                   |

##### `_find_spec` (`<frozen importlib._bootstrap>`)

|     % | Samples | Callee      | Location                                 |
| ----: | ------: | ----------- | ---------------------------------------- |
| 66.7% |       4 | `find_spec` | `<frozen importlib._bootstrap_external>` |
| 16.7% |       1 | `find_spec` | `_distutils_hack/__init__.py`            |
| 16.7% |       1 | `find_spec` | `<frozen importlib._bootstrap>`          |

##### `<module>` (`black/files.py`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       4 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`pathspec/_backends/agg.py`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       4 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`pathspec/gitignore.py`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       4 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`pathspec/__init__.py`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       4 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `_get_spec` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                 | Location                                 |
| ----: | ------: | ---------------------- | ---------------------------------------- |
| 75.0% |       3 | `find_spec`            | `<frozen importlib._bootstrap_external>` |
| 25.0% |       1 | `_path_importer_cache` | `<frozen importlib._bootstrap_external>` |

##### `find_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee        | Location                                 |
| -----: | ------: | ------------- | ---------------------------------------- |
| 100.0% |       4 | `_get_spec`   | `<frozen importlib._bootstrap_external>` |
|  50.0% |       2 | `_fill_cache` | `<frozen importlib._bootstrap_external>` |

##### `_process_class` (`dataclasses.py`)

|     % | Samples | Callee                 | Location         |
| ----: | ------: | ---------------------- | ---------------- |
| 66.7% |       2 | `_init_fn`             | `dataclasses.py` |
| 33.3% |       1 | `_frozen_get_del_attr` | `dataclasses.py` |

##### `wrap` (`dataclasses.py`)

|      % | Samples | Callee           | Location         |
| -----: | ------: | ---------------- | ---------------- |
| 100.0% |       3 | `_process_class` | `dataclasses.py` |

##### `__init__` (`<string>`)

|     % | Samples | Callee     | Location   |
| ----: | ------: | ---------- | ---------- |
| 33.3% |       1 | `__init__` | `<string>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       3 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `exec_module` (`<frozen importlib._bootstrap>`)

|     % | Samples | Callee                      | Location                        |
| ----: | ------: | --------------------------- | ------------------------------- |
| 66.7% |       2 | `<module>`                  | `<frozen importlib.util>`       |
| 66.7% |       2 | `<module>`                  | `<frozen runpy>`                |
| 33.3% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `<module>` (`hashlib.py`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       2 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`pathspec/_backends/hyperscan/gitignore.py`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       2 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`contextlib.py`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       2 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `debug` (`logging/__init__.py`)

|     % | Samples | Callee         | Location              |
| ----: | ------: | -------------- | --------------------- |
| 50.0% |       1 | `isEnabledFor` | `logging/__init__.py` |

##### `<module>` (`urllib/parse.py`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       2 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`<frozen importlib.util>`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       2 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`<frozen runpy>`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       2 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee      | Location    |
| ----: | ------: | ----------- | ----------- |
| 50.0% |       1 | `readdir64` | `libc.so.6` |

##### `path_hook_for_FileFinder` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee     | Location                                 |
| -----: | ------: | ---------- | ---------------------------------------- |
| 100.0% |       1 | `__init__` | `<frozen importlib._bootstrap_external>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `CPyDef_black___format_file_contents` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main` ← `0x7f28257a524a` (`libc.so.6`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.6% |      21 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 3.7% |      14 | `CPyDef_parse___Parser____addtoken` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2.9% |      11 | `CPyDef_driver___Driver___parse_tokens` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.9% |      11 | `CPyDef_parse___Parser___push` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.9% |       7 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.9% |       7 | `CPyDef_parse___Parser___pop` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.6% |       6 | `CPyDef_driver___Driver___parse_tokens` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.3% |       5 | `parse` (`ast.py`) ← `CPyDef_parsing____parse_single_version` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing___parse_ast` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.3% |       5 | `CPyDef_black___get_features_used` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black___detect_target_versions` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.1% |       4 | `CPyDef_parse___Parser____addtoken` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.1% |       4 | `CPyDef_parse___Parser___pop` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.8% |       3 | `CPyDef_pytree___Leaf_____init__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_pytree___convert` ← `CPyDef_parse___Parser___shift` ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.8% |       3 | `CPyDef_comments___generate_comments` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_power_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence` |
| 0.8% |       3 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.8% |       3 | `CPyDef_pytree___Node_____init__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_pytree___convert` ← `CPyDef_parse___Parser___pop` ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.5% |       2 | `CPyDef_parse___Parser___push` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.5% |       2 | `0x7f28258d0d8c` (`libc.so.6`) ← `0x7f2825816462` ← `realloc` ← `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.5% |       2 | `CPyDef_lines___Line_____str__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_lines___line_to_string` ← `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.5% |       2 | `CPyDef_pytree___type_repr` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.5% |       2 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

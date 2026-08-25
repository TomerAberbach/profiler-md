# Sampling profile diff

Collected 1,119 samples → 962 samples (-157 samples, -14.0%).

| Category          | Change | Delta |             % |   Samples |
| ----------------- | -----: | ----: | ------------: | --------: |
| Ours              | -11.1% |   -80 | 64.4% → 66.6% | 721 → 641 |
| Garbage collector | -21.6% |   -82 | 33.9% → 30.9% | 379 → 297 |
| Standard library  | +26.3% |    +5 |   1.7% → 2.5% |   19 → 24 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                            | Location                                 |
| ------: | ----: | ----------: | ------: | ----------------------------------- | ---------------------------------------- |
| +120.0% |    +6 | 0.4% → 1.1% |  5 → 11 | `_compile_bytecode`                 | `<frozen importlib._bootstrap_external>` |
|  +41.7% |    +5 | 1.1% → 1.8% | 12 → 17 | `_stringify_ast`                    | `parsing.py`                             |
| +125.0% |    +5 | 0.4% → 0.9% |   4 → 9 | `line_to_string`                    | `lines.py`                               |
|  +83.3% |    +5 | 0.5% → 1.1% |  6 → 11 | `BracketTracker.mark`               | `brackets.py`                            |
|     new |    +4 | 0.0% → 0.4% |   0 → 4 | `generate_comments`                 | `comments.py`                            |
|     new |    +3 | 0.0% → 0.3% |   0 → 3 | `DFAState.unifystate`               | `pgen.py`                                |
|  +66.7% |    +2 | 0.3% → 0.5% |   3 → 5 | `format_str`                        | `__init__.py`                            |
|  +66.7% |    +2 | 0.3% → 0.5% |   3 → 5 | `LinesBlock.all_lines`              | `lines.py`                               |
|  +50.0% |    +2 | 0.4% → 0.6% |   4 → 6 | `_stringify_ast_with_new_parent`    | `parsing.py`                             |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `Base.prev_sibling`                 | `pytree.py`                              |
| +200.0% |    +2 | 0.1% → 0.3% |   1 → 3 | `whitespace`                        | `nodes.py`                               |
| +200.0% |    +2 | 0.1% → 0.3% |   1 → 3 | `_hugging_power_ops_line_to_string` | `linegen.py`                             |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `_parse_sub`                        | `_parser.py`                             |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `_first_right_hand_split`           | `linegen.py`                             |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `LineGenerator.visit_STRING`        | `linegen.py`                             |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `delimiter_split`                   | `linegen.py`                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `lib2to3_parse`                     | `parsing.py`                             |
|  +50.0% |    +1 | 0.2% → 0.3% |   2 → 3 | `assert_stable`                     | `__init__.py`                            |
|  +11.1% |    +1 | 0.8% → 1.0% |  9 → 10 | `_call_with_frames_removed`         | `<frozen importlib._bootstrap>`          |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `SourceLoader.get_code`             | `<frozen importlib._bootstrap_external>` |

##### Ours

|  Change | Delta |           % | Samples | Function                            | Location         |
| ------: | ----: | ----------: | ------: | ----------------------------------- | ---------------- |
|  +41.7% |    +5 | 1.1% → 1.8% | 12 → 17 | `_stringify_ast`                    | `parsing.py`     |
| +125.0% |    +5 | 0.4% → 0.9% |   4 → 9 | `line_to_string`                    | `lines.py`       |
|  +83.3% |    +5 | 0.5% → 1.1% |  6 → 11 | `BracketTracker.mark`               | `brackets.py`    |
|     new |    +4 | 0.0% → 0.4% |   0 → 4 | `generate_comments`                 | `comments.py`    |
|     new |    +3 | 0.0% → 0.3% |   0 → 3 | `DFAState.unifystate`               | `pgen.py`        |
|  +66.7% |    +2 | 0.3% → 0.5% |   3 → 5 | `format_str`                        | `__init__.py`    |
|  +66.7% |    +2 | 0.3% → 0.5% |   3 → 5 | `LinesBlock.all_lines`              | `lines.py`       |
|  +50.0% |    +2 | 0.4% → 0.6% |   4 → 6 | `_stringify_ast_with_new_parent`    | `parsing.py`     |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `Base.prev_sibling`                 | `pytree.py`      |
| +200.0% |    +2 | 0.1% → 0.3% |   1 → 3 | `whitespace`                        | `nodes.py`       |
| +200.0% |    +2 | 0.1% → 0.3% |   1 → 3 | `_hugging_power_ops_line_to_string` | `linegen.py`     |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `_parse_sub`                        | `_parser.py`     |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `_first_right_hand_split`           | `linegen.py`     |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `LineGenerator.visit_STRING`        | `linegen.py`     |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `delimiter_split`                   | `linegen.py`     |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `lib2to3_parse`                     | `parsing.py`     |
|  +50.0% |    +1 | 0.2% → 0.3% |   2 → 3 | `assert_stable`                     | `__init__.py`    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `LineGenerator.visit_funcdef`       | `linegen.py`     |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `Leaf.prefix`                       | `pytree.py`      |
|  +25.0% |    +1 | 0.4% → 0.5% |   4 → 5 | `_FuncBuilder.add_fns_to_class`     | `dataclasses.py` |

##### Standard library

|  Change | Delta |           % | Samples | Function                    | Location                                 |
| ------: | ----: | ----------: | ------: | --------------------------- | ---------------------------------------- |
| +120.0% |    +6 | 0.4% → 1.1% |  5 → 11 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
|  +11.1% |    +1 | 0.8% → 1.0% |  9 → 10 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                          | Location      |
| ------: | ----: | ------------: | --------: | --------------------------------- | ------------- |
|  -21.6% |   -82 | 33.9% → 30.9% | 379 → 297 | `(garbage collector)`             | `<unknown>`   |
|  -27.4% |   -17 |   5.5% → 4.7% |   62 → 45 | `Driver.parse_tokens`             | `driver.py`   |
|  -52.2% |   -12 |   2.1% → 1.1% |   23 → 11 | `Parser.shift`                    | `parse.py`    |
|  -44.4% |   -12 |   2.4% → 1.6% |   27 → 15 | `Visitor.visit`                   | `nodes.py`    |
|  -26.3% |   -10 |   3.4% → 2.9% |   38 → 28 | `generate_tokens`                 | `tokenize.py` |
|   -5.0% |    -8 | 14.3% → 15.8% | 160 → 152 | `Parser._addtoken`                | `parse.py`    |
|  -87.5% |    -7 |   0.7% → 0.1% |     8 → 1 | `Parser.classify`                 | `parse.py`    |
|  -11.6% |    -5 |   3.8% → 4.0% |   43 → 38 | `parse`                           | `ast.py`      |
|  -21.1% |    -4 |   1.7% → 1.6% |   19 → 15 | `Parser.addtoken`                 | `parse.py`    |
|  -44.4% |    -4 |   0.8% → 0.5% |     9 → 5 | `Visitor.visit_default`           | `nodes.py`    |
|  -23.5% |    -4 |   1.5% → 1.4% |   17 → 13 | `Line.append`                     | `lines.py`    |
|  -44.4% |    -4 |   0.8% → 0.5% |     9 → 5 | `normalize_invisible_parens`      | `linegen.py`  |
|   -3.0% |    -3 |  8.8% → 10.0% |   99 → 96 | `get_features_used`               | `__init__.py` |
| removed |    -3 |   0.3% → 0.0% |     3 → 0 | `TokenProxy.__next__`             | `driver.py`   |
|  -15.0% |    -3 |          1.8% |   20 → 17 | `Parser.pop`                      | `parse.py`    |
| removed |    -3 |   0.3% → 0.0% |     3 → 0 | `__create_fn__.<locals>.__init__` | `<string>`    |
| removed |    -3 |   0.3% → 0.0% |     3 → 0 | `hug_power_op`                    | `trans.py`    |
| removed |    -3 |   0.3% → 0.0% |     3 → 0 | `is_line_short_enough`            | `lines.py`    |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `Driver.parse_string`             | `driver.py`   |
|  -33.3% |    -2 |   0.5% → 0.4% |     6 → 4 | `transform_line`                  | `linegen.py`  |

##### Ours

|  Change | Delta |             % |   Samples | Function                          | Location      |
| ------: | ----: | ------------: | --------: | --------------------------------- | ------------- |
|  -27.4% |   -17 |   5.5% → 4.7% |   62 → 45 | `Driver.parse_tokens`             | `driver.py`   |
|  -52.2% |   -12 |   2.1% → 1.1% |   23 → 11 | `Parser.shift`                    | `parse.py`    |
|  -44.4% |   -12 |   2.4% → 1.6% |   27 → 15 | `Visitor.visit`                   | `nodes.py`    |
|  -26.3% |   -10 |   3.4% → 2.9% |   38 → 28 | `generate_tokens`                 | `tokenize.py` |
|   -5.0% |    -8 | 14.3% → 15.8% | 160 → 152 | `Parser._addtoken`                | `parse.py`    |
|  -87.5% |    -7 |   0.7% → 0.1% |     8 → 1 | `Parser.classify`                 | `parse.py`    |
|  -11.6% |    -5 |   3.8% → 4.0% |   43 → 38 | `parse`                           | `ast.py`      |
|  -21.1% |    -4 |   1.7% → 1.6% |   19 → 15 | `Parser.addtoken`                 | `parse.py`    |
|  -44.4% |    -4 |   0.8% → 0.5% |     9 → 5 | `Visitor.visit_default`           | `nodes.py`    |
|  -23.5% |    -4 |   1.5% → 1.4% |   17 → 13 | `Line.append`                     | `lines.py`    |
|  -44.4% |    -4 |   0.8% → 0.5% |     9 → 5 | `normalize_invisible_parens`      | `linegen.py`  |
|   -3.0% |    -3 |  8.8% → 10.0% |   99 → 96 | `get_features_used`               | `__init__.py` |
| removed |    -3 |   0.3% → 0.0% |     3 → 0 | `TokenProxy.__next__`             | `driver.py`   |
|  -15.0% |    -3 |          1.8% |   20 → 17 | `Parser.pop`                      | `parse.py`    |
| removed |    -3 |   0.3% → 0.0% |     3 → 0 | `__create_fn__.<locals>.__init__` | `<string>`    |
| removed |    -3 |   0.3% → 0.0% |     3 → 0 | `hug_power_op`                    | `trans.py`    |
| removed |    -3 |   0.3% → 0.0% |     3 → 0 | `is_line_short_enough`            | `lines.py`    |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `Driver.parse_string`             | `driver.py`   |
|  -33.3% |    -2 |   0.5% → 0.4% |     6 → 4 | `transform_line`                  | `linegen.py`  |
|  -25.0% |    -2 |   0.7% → 0.6% |     8 → 6 | `Parser.push`                     | `parse.py`    |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| -21.6% |   -82 | 33.9% → 30.9% | 379 → 297 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function                 | Location                                 |
| ------: | ----: | ----------: | ------: | ------------------------ | ---------------------------------------- |
|  -33.3% |    -1 | 0.3% → 0.2% |   3 → 2 | `FileLoader.get_data`    | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_classify_pyc`          | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_code_to_timestamp_pyc` | `<frozen importlib._bootstrap_external>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |            % |   Samples | Function                         | Location                                 |
| ------: | ----: | -----------: | --------: | -------------------------------- | ---------------------------------------- |
| +180.0% |    +9 |  0.4% → 1.5% |    5 → 14 | `generate_comments`              | `comments.py`                            |
|  +17.5% |    +7 |  3.6% → 4.9% |   40 → 47 | `_call_with_frames_removed`      | `<frozen importlib._bootstrap>`          |
|  +17.5% |    +7 |  3.6% → 4.9% |   40 → 47 | `_LoaderBasics.exec_module`      | `<frozen importlib._bootstrap_external>` |
|  +17.5% |    +7 |  3.6% → 4.9% |   40 → 47 | `_load_unlocked`                 | `<frozen importlib._bootstrap>`          |
|  +17.5% |    +7 |  3.6% → 4.9% |   40 → 47 | `_find_and_load_unlocked`        | `<frozen importlib._bootstrap>`          |
|  +17.5% |    +7 |  3.6% → 4.9% |   40 → 47 | `_find_and_load`                 | `<frozen importlib._bootstrap>`          |
|  +17.5% |    +7 |  3.6% → 4.9% |   40 → 47 | `<module>`                       | `__init__.py`                            |
|  +17.5% |    +7 |  3.6% → 4.9% |   40 → 47 | `_get_module_details`            | `<frozen runpy>`                         |
|  +43.8% |    +7 |  1.4% → 2.4% |   16 → 23 | `_stringify_ast`                 | `parsing.py`                             |
|  +50.0% |    +7 |  1.3% → 2.2% |   14 → 21 | `_stringify_ast_with_new_parent` | `parsing.py`                             |
|  +35.3% |    +6 |  1.5% → 2.4% |   17 → 23 | `SourceLoader.get_code`          | `<frozen importlib._bootstrap_external>` |
| +120.0% |    +6 |  0.4% → 1.1% |    5 → 11 | `_compile_bytecode`              | `<frozen importlib._bootstrap_external>` |
|  +85.7% |    +6 |  0.6% → 1.4% |    7 → 13 | `BracketTracker.mark`            | `brackets.py`                            |
|  +50.0% |    +5 |  0.9% → 1.6% |   10 → 15 | `<module>`                       | `comments.py`                            |
|   +4.7% |    +5 | 9.5% → 11.5% | 106 → 111 | `LineGenerator.visit_funcdef`    | `linegen.py`                             |
|  +11.1% |    +4 |  3.2% → 4.2% |   36 → 40 | `StringTransformer.__init__`     | `trans.py`                               |
|  +66.7% |    +4 |  0.5% → 1.0% |    6 → 10 | `initialize`                     | `pygram.py`                              |
|  +40.0% |    +4 |  0.9% → 1.5% |   10 → 14 | `<module>`                       | `nodes.py`                               |
|  +11.4% |    +4 |  3.1% → 4.1% |   35 → 39 | `Line.append`                    | `lines.py`                               |
|  +50.0% |    +3 |  0.5% → 0.9% |     6 → 9 | `generate_grammar`               | `pgen.py`                                |

##### Ours

|  Change | Delta |            % |   Samples | Function                            | Location      |
| ------: | ----: | -----------: | --------: | ----------------------------------- | ------------- |
| +180.0% |    +9 |  0.4% → 1.5% |    5 → 14 | `generate_comments`                 | `comments.py` |
|  +17.5% |    +7 |  3.6% → 4.9% |   40 → 47 | `<module>`                          | `__init__.py` |
|  +43.8% |    +7 |  1.4% → 2.4% |   16 → 23 | `_stringify_ast`                    | `parsing.py`  |
|  +50.0% |    +7 |  1.3% → 2.2% |   14 → 21 | `_stringify_ast_with_new_parent`    | `parsing.py`  |
|  +85.7% |    +6 |  0.6% → 1.4% |    7 → 13 | `BracketTracker.mark`               | `brackets.py` |
|  +50.0% |    +5 |  0.9% → 1.6% |   10 → 15 | `<module>`                          | `comments.py` |
|   +4.7% |    +5 | 9.5% → 11.5% | 106 → 111 | `LineGenerator.visit_funcdef`       | `linegen.py`  |
|  +11.1% |    +4 |  3.2% → 4.2% |   36 → 40 | `StringTransformer.__init__`        | `trans.py`    |
|  +66.7% |    +4 |  0.5% → 1.0% |    6 → 10 | `initialize`                        | `pygram.py`   |
|  +40.0% |    +4 |  0.9% → 1.5% |   10 → 14 | `<module>`                          | `nodes.py`    |
|  +11.4% |    +4 |  3.1% → 4.1% |   35 → 39 | `Line.append`                       | `lines.py`    |
|  +50.0% |    +3 |  0.5% → 0.9% |     6 → 9 | `generate_grammar`                  | `pgen.py`     |
|  +50.0% |    +3 |  0.5% → 0.9% |     6 → 9 | `load_grammar`                      | `driver.py`   |
|  +50.0% |    +3 |  0.5% → 0.9% |     6 → 9 | `load_packaged_grammar`             | `driver.py`   |
|  +37.5% |    +3 |  0.7% → 1.1% |    8 → 11 | `line_to_string`                    | `lines.py`    |
| +150.0% |    +3 |  0.2% → 0.5% |     2 → 5 | `ParserGenerator.parse`             | `pgen.py`     |
| +150.0% |    +3 |  0.2% → 0.5% |     2 → 5 | `ParserGenerator.__init__`          | `pgen.py`     |
|     new |    +3 |  0.0% → 0.3% |     0 → 3 | `DFAState.unifystate`               | `pgen.py`     |
|     new |    +3 |  0.0% → 0.3% |     0 → 3 | `ParserGenerator.simplify_dfa`      | `pgen.py`     |
|  +28.6% |    +2 |  0.6% → 0.9% |     7 → 9 | `_hugging_power_ops_line_to_string` | `linegen.py`  |

##### Standard library

|  Change | Delta |           % | Samples | Function                      | Location                                 |
| ------: | ----: | ----------: | ------: | ----------------------------- | ---------------------------------------- |
|  +17.5% |    +7 | 3.6% → 4.9% | 40 → 47 | `_call_with_frames_removed`   | `<frozen importlib._bootstrap>`          |
|  +17.5% |    +7 | 3.6% → 4.9% | 40 → 47 | `_LoaderBasics.exec_module`   | `<frozen importlib._bootstrap_external>` |
|  +17.5% |    +7 | 3.6% → 4.9% | 40 → 47 | `_load_unlocked`              | `<frozen importlib._bootstrap>`          |
|  +17.5% |    +7 | 3.6% → 4.9% | 40 → 47 | `_find_and_load_unlocked`     | `<frozen importlib._bootstrap>`          |
|  +17.5% |    +7 | 3.6% → 4.9% | 40 → 47 | `_find_and_load`              | `<frozen importlib._bootstrap>`          |
|  +17.5% |    +7 | 3.6% → 4.9% | 40 → 47 | `_get_module_details`         | `<frozen runpy>`                         |
|  +35.3% |    +6 | 1.5% → 2.4% | 17 → 23 | `SourceLoader.get_code`       | `<frozen importlib._bootstrap_external>` |
| +120.0% |    +6 | 0.4% → 1.1% |  5 → 11 | `_compile_bytecode`           | `<frozen importlib._bootstrap_external>` |
|  +28.6% |    +2 | 0.6% → 0.9% |   7 → 9 | `SourceLoader.source_to_code` | `<frozen importlib._bootstrap_external>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |     Samples | Function                         | Location         |
| -----: | ----: | ------------: | ----------: | -------------------------------- | ---------------- |
| -16.8% |  -167 | 88.7% → 85.9% |   993 → 826 | `_format_str_once`               | `__init__.py`    |
| -15.2% |  -164 | 96.3% → 95.0% | 1,078 → 914 | `reformat_one`                   | `__init__.py`    |
| -15.2% |  -164 | 96.3% → 95.0% | 1,078 → 914 | `main`                           | `__init__.py`    |
| -15.2% |  -164 | 96.3% → 95.0% | 1,078 → 914 | `pass_context.<locals>.new_func` | `decorators.py`  |
| -15.2% |  -164 | 96.3% → 95.0% | 1,078 → 914 | `Context.invoke`                 | `core.py`        |
| -15.2% |  -164 | 96.3% → 95.0% | 1,078 → 914 | `Command.invoke`                 | `core.py`        |
| -15.2% |  -164 | 96.4% → 95.1% | 1,079 → 915 | `Command.main`                   | `core.py`        |
| -15.2% |  -164 | 96.4% → 95.1% | 1,079 → 915 | `Command.__call__`               | `core.py`        |
| -15.2% |  -164 | 96.4% → 95.1% | 1,079 → 915 | `patched_main`                   | `__init__.py`    |
| -15.2% |  -164 | 96.4% → 95.1% | 1,079 → 915 | `<module>`                       | `__main__.py`    |
| -15.2% |  -164 | 96.4% → 95.1% | 1,079 → 915 | `_run_module_code`               | `<frozen runpy>` |
| -15.1% |  -163 | 96.2% → 95.0% | 1,077 → 914 | `format_file_contents`           | `__init__.py`    |
| -15.1% |  -163 | 96.2% → 95.0% | 1,077 → 914 | `format_file_in_place`           | `__init__.py`    |
| -24.6% |  -159 | 57.8% → 50.7% |   647 → 488 | `Driver.parse_string`            | `driver.py`      |
| -24.4% |  -158 | 57.8% → 50.8% |   647 → 489 | `lib2to3_parse`                  | `parsing.py`     |
| -24.3% |  -157 | 57.6% → 50.7% |   645 → 488 | `Driver.parse_tokens`            | `driver.py`      |
| -14.0% |  -157 |        100.0% | 1,119 → 962 | `_run_code`                      | `<frozen runpy>` |
| -14.0% |  -157 |        100.0% | 1,119 → 962 | `run_module`                     | `<frozen runpy>` |
| -14.0% |  -157 |        100.0% | 1,119 → 962 | `_run_module_as_main`            | `<frozen runpy>` |
| -21.3% |  -103 | 43.2% → 39.5% |   483 → 380 | `assert_stable`                  | `__init__.py`    |

##### Ours

| Change | Delta |             % |     Samples | Function                          | Location        |
| -----: | ----: | ------------: | ----------: | --------------------------------- | --------------- |
| -16.8% |  -167 | 88.7% → 85.9% |   993 → 826 | `_format_str_once`                | `__init__.py`   |
| -15.2% |  -164 | 96.3% → 95.0% | 1,078 → 914 | `reformat_one`                    | `__init__.py`   |
| -15.2% |  -164 | 96.3% → 95.0% | 1,078 → 914 | `main`                            | `__init__.py`   |
| -15.2% |  -164 | 96.3% → 95.0% | 1,078 → 914 | `pass_context.<locals>.new_func`  | `decorators.py` |
| -15.2% |  -164 | 96.3% → 95.0% | 1,078 → 914 | `Context.invoke`                  | `core.py`       |
| -15.2% |  -164 | 96.3% → 95.0% | 1,078 → 914 | `Command.invoke`                  | `core.py`       |
| -15.2% |  -164 | 96.4% → 95.1% | 1,079 → 915 | `Command.main`                    | `core.py`       |
| -15.2% |  -164 | 96.4% → 95.1% | 1,079 → 915 | `Command.__call__`                | `core.py`       |
| -15.2% |  -164 | 96.4% → 95.1% | 1,079 → 915 | `patched_main`                    | `__init__.py`   |
| -15.2% |  -164 | 96.4% → 95.1% | 1,079 → 915 | `<module>`                        | `__main__.py`   |
| -15.1% |  -163 | 96.2% → 95.0% | 1,077 → 914 | `format_file_contents`            | `__init__.py`   |
| -15.1% |  -163 | 96.2% → 95.0% | 1,077 → 914 | `format_file_in_place`            | `__init__.py`   |
| -24.6% |  -159 | 57.8% → 50.7% |   647 → 488 | `Driver.parse_string`             | `driver.py`     |
| -24.4% |  -158 | 57.8% → 50.8% |   647 → 489 | `lib2to3_parse`                   | `parsing.py`    |
| -24.3% |  -157 | 57.6% → 50.7% |   645 → 488 | `Driver.parse_tokens`             | `driver.py`     |
| -21.3% |  -103 | 43.2% → 39.5% |   483 → 380 | `assert_stable`                   | `__init__.py`   |
| -18.1% |  -102 | 50.2% → 47.8% |   562 → 460 | `check_stability_and_equivalence` | `__init__.py`   |
| -11.8% |   -61 | 46.0% → 47.2% |   515 → 454 | `format_str`                      | `__init__.py`   |
| -14.0% |   -40 |         25.6% |   286 → 246 | `Parser.addtoken`                 | `parse.py`      |
| -14.0% |   -36 |         23.1% |   258 → 222 | `Parser._addtoken`                | `parse.py`      |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| -21.6% |   -82 | 33.9% → 30.9% | 379 → 297 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change | Delta |             % |     Samples | Function                            | Location                                 |
| ------: | ----: | ------------: | ----------: | ----------------------------------- | ---------------------------------------- |
|  -15.2% |  -164 | 96.4% → 95.1% | 1,079 → 915 | `_run_module_code`                  | `<frozen runpy>`                         |
|  -14.0% |  -157 |        100.0% | 1,119 → 962 | `_run_code`                         | `<frozen runpy>`                         |
|  -14.0% |  -157 |        100.0% | 1,119 → 962 | `run_module`                        | `<frozen runpy>`                         |
|  -14.0% |  -157 |        100.0% | 1,119 → 962 | `_run_module_as_main`               | `<frozen runpy>`                         |
|  -40.0% |    -2 |   0.4% → 0.3% |       5 → 3 | `_handle_fromlist`                  | `<frozen importlib._bootstrap>`          |
|  -50.0% |    -1 |   0.2% → 0.1% |       2 → 1 | `_get_module_lock`                  | `<frozen importlib._bootstrap>`          |
|  -50.0% |    -1 |   0.2% → 0.1% |       2 → 1 | `_ModuleLockManager.__enter__`      | `<frozen importlib._bootstrap>`          |
|  -33.3% |    -1 |   0.3% → 0.2% |       3 → 2 | `FileLoader.get_data`               | `<frozen importlib._bootstrap_external>` |
| removed |    -1 |   0.1% → 0.0% |       1 → 0 | `_classify_pyc`                     | `<frozen importlib._bootstrap_external>` |
| removed |    -1 |   0.1% → 0.0% |       1 → 0 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
| removed |    -1 |   0.1% → 0.0% |       1 → 0 | `module_from_spec`                  | `<frozen importlib._bootstrap>`          |
| removed |    -1 |   0.1% → 0.0% |       1 → 0 | `_code_to_timestamp_pyc`            | `<frozen importlib._bootstrap_external>` |

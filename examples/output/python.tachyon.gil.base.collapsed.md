# Sampling profile

Collected 1,005 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 67.9% |     682 |
| Garbage collector | 31.3% |     315 |
| Standard library  |  0.8% |       8 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                             | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 31.3% |     315 | `(garbage collector)`                | `<unknown>`   |
| 15.0% |     151 | `Parser._addtoken`                   | `parse.py`    |
|  9.6% |      96 | `get_features_used`                  | `__init__.py` |
|  5.3% |      53 | `Driver.parse_tokens`                | `driver.py`   |
|  4.5% |      45 | `generate_tokens`                    | `tokenize.py` |
|  3.9% |      39 | `parse`                              | `ast.py`      |
|  3.1% |      31 | `Visitor.visit`                      | `nodes.py`    |
|  2.6% |      26 | `Parser.pop`                         | `parse.py`    |
|  1.9% |      19 | `Line.append`                        | `lines.py`    |
|  1.4% |      14 | `Parser.addtoken`                    | `parse.py`    |
|  1.2% |      12 | `Parser.shift`                       | `parse.py`    |
|  1.1% |      11 | `LineGenerator.visit_default`        | `linegen.py`  |
|  1.1% |      11 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |
|  1.0% |      10 | `normalize_invisible_parens`         | `linegen.py`  |
|  1.0% |      10 | `line_to_string`                     | `lines.py`    |
|  0.9% |       9 | `_stringify_ast`                     | `parsing.py`  |
|  0.9% |       9 | `convert_one_fmt_off_pair`           | `comments.py` |
|  0.8% |       8 | `assert_equivalent`                  | `__init__.py` |
|  0.7% |       7 | `Visitor.visit_default`              | `nodes.py`    |
|  0.6% |       6 | `BracketTracker.mark`                | `brackets.py` |

#### Categories

##### Ours

|     % | Samples | Function                             | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 15.0% |     151 | `Parser._addtoken`                   | `parse.py`    |
|  9.6% |      96 | `get_features_used`                  | `__init__.py` |
|  5.3% |      53 | `Driver.parse_tokens`                | `driver.py`   |
|  4.5% |      45 | `generate_tokens`                    | `tokenize.py` |
|  3.9% |      39 | `parse`                              | `ast.py`      |
|  3.1% |      31 | `Visitor.visit`                      | `nodes.py`    |
|  2.6% |      26 | `Parser.pop`                         | `parse.py`    |
|  1.9% |      19 | `Line.append`                        | `lines.py`    |
|  1.4% |      14 | `Parser.addtoken`                    | `parse.py`    |
|  1.2% |      12 | `Parser.shift`                       | `parse.py`    |
|  1.1% |      11 | `LineGenerator.visit_default`        | `linegen.py`  |
|  1.1% |      11 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |
|  1.0% |      10 | `normalize_invisible_parens`         | `linegen.py`  |
|  1.0% |      10 | `line_to_string`                     | `lines.py`    |
|  0.9% |       9 | `_stringify_ast`                     | `parsing.py`  |
|  0.9% |       9 | `convert_one_fmt_off_pair`           | `comments.py` |
|  0.8% |       8 | `assert_equivalent`                  | `__init__.py` |
|  0.7% |       7 | `Visitor.visit_default`              | `nodes.py`    |
|  0.6% |       6 | `BracketTracker.mark`                | `brackets.py` |
|  0.6% |       6 | `LineGenerator.visit_power`          | `linegen.py`  |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 31.3% |     315 | `(garbage collector)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 17.9% |      27 | `parse.py:311` |
| 15.9% |      24 | `parse.py:328` |
| 15.2% |      23 | `parse.py:305` |
|  7.9% |      12 | `parse.py:298` |
|  6.6% |      10 | `parse.py:315` |

##### `get_features_used` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 35.4% |      34 | `__init__.py:1335` |
| 16.7% |      16 | `__init__.py:1440` |
|  8.3% |       8 | `__init__.py:1424` |
|  8.3% |       8 | `__init__.py:1436` |
|  6.3% |       6 | `__init__.py:1430` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 71.7% |      38 | `driver.py:162` |
| 20.8% |      11 | `driver.py:128` |
|  5.7% |       3 | `driver.py:151` |
|  1.9% |       1 | `driver.py:152` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 35.6% |      16 | `tokenize.py:624` |
| 24.4% |      11 | `tokenize.py:875` |
|  8.9% |       4 | `tokenize.py:634` |
|  4.4% |       2 | `tokenize.py:879` |
|  2.2% |       1 | `tokenize.py:627` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      39 | `ast.py:46` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 51.6% |      16 | `nodes.py:185` |
| 35.5% |      11 | `nodes.py:183` |
|  6.5% |       2 | `nodes.py:163` |
|  6.5% |       2 | `nodes.py:181` |

##### `Parser.pop` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 65.4% |      17 | `parse.py:404` |
| 11.5% |       3 | `parse.py:403` |
| 11.5% |       3 | `parse.py:408` |
|  3.8% |       1 | `parse.py:398` |
|  3.8% |       1 | `parse.py:406` |

##### `Line.append` (`lines.py`)

|     % | Samples | Location      |
| ----: | ------: | ------------- |
| 52.6% |      10 | `lines.py:95` |
| 42.1% |       8 | `lines.py:89` |
|  5.3% |       1 | `lines.py:91` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 92.9% |      13 | `parse.py:252` |
|  7.1% |       1 | `parse.py:246` |

##### `Parser.shift` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 66.7% |       8 | `parse.py:381` |
| 16.7% |       2 | `parse.py:380` |
|  8.3% |       1 | `parse.py:384` |
|  8.3% |       1 | `parse.py:383` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 54.5% |       6 | `linegen.py:158` |
| 18.2% |       2 | `linegen.py:157` |
| 18.2% |       2 | `linegen.py:134` |
|  9.1% |       1 | `linegen.py:136` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 63.6% |       7 | `lines.py:571` |
|  9.1% |       1 | `lines.py:576` |
|  9.1% |       1 | `lines.py:560` |
|  9.1% |       1 | `lines.py:588` |
|  9.1% |       1 | `lines.py:603` |

##### `normalize_invisible_parens` (`linegen.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 50.0% |       5 | `linegen.py:1432` |
| 20.0% |       2 | `linegen.py:1423` |
| 10.0% |       1 | `linegen.py:1328` |
| 10.0% |       1 | `linegen.py:1431` |
| 10.0% |       1 | `linegen.py:1437` |

##### `line_to_string` (`lines.py`)

|      % | Samples | Location        |
| -----: | ------: | --------------- |
| 100.0% |      10 | `lines.py:1078` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 44.4% |       4 | `parsing.py:217` |
| 33.3% |       3 | `parsing.py:214` |
| 11.1% |       1 | `parsing.py:174` |
| 11.1% |       1 | `parsing.py:185` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 55.6% |       5 | `comments.py:184` |
| 33.3% |       3 | `comments.py:186` |
| 11.1% |       1 | `comments.py:188` |

##### `assert_equivalent` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 62.5% |       5 | `__init__.py:1547` |
| 37.5% |       3 | `__init__.py:1546` |

##### `Visitor.visit_default` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 57.1% |       4 | `nodes.py:191` |
| 42.9% |       3 | `nodes.py:187` |

##### `BracketTracker.mark` (`brackets.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 33.3% |       2 | `brackets.py:112` |
| 16.7% |       1 | `brackets.py:101` |
| 16.7% |       1 | `brackets.py:114` |
| 16.7% |       1 | `brackets.py:121` |
| 16.7% |       1 | `brackets.py:127` |

##### `LineGenerator.visit_power` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 83.3% |       5 | `linegen.py:363` |
| 16.7% |       1 | `linegen.py:341` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(garbage collector)` (`<unknown>`)

|     % | Samples | Caller                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 60.0% |     189 | `Driver.parse_tokens`        | `driver.py` |
| 12.7% |      40 | `is_vararg`                  | `nodes.py`  |
|  4.8% |      15 | `Parser._addtoken`           | `parse.py`  |
|  3.2% |      10 | `convert`                    | `pytree.py` |
|  2.5% |       8 | `StringTransformer.__init__` | `trans.py`  |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Caller                | Location      |
| ----: | ------: | --------------------- | ------------- |
| 96.7% |     146 | `Parser.addtoken`     | `parse.py`    |
|  2.0% |       3 | `Logger.debug`        | `__init__.py` |
|  1.3% |       2 | `TokenProxy.__next__` | `driver.py`   |

##### `get_features_used` (`__init__.py`)

|      % | Samples | Caller                   | Location      |
| -----: | ------: | ------------------------ | ------------- |
| 100.0% |      96 | `detect_target_versions` | `__init__.py` |

##### `Driver.parse_tokens` (`driver.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      53 | `Driver.parse_string` | `driver.py` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Caller                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 68.9% |      31 | `TokenProxy.__next__` | `driver.py` |
| 28.9% |      13 | `Parser.addtoken`     | `parse.py`  |
|  2.2% |       1 | `Driver.parse_tokens` | `driver.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location     |
| -----: | ------: | ----------------------- | ------------ |
| 100.0% |      39 | `_parse_single_version` | `parsing.py` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Caller                     | Location     |
| ----: | ------: | -------------------------- | ------------ |
| 80.6% |      25 | `Visitor.visit_default`    | `nodes.py`   |
| 19.4% |       6 | `LineGenerator.visit_stmt` | `linegen.py` |

##### `Parser.pop` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      26 | `Parser._addtoken` | `parse.py` |

##### `Line.append` (`lines.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 89.5% |      17 | `LineGenerator.visit_default` | `linegen.py` |
| 10.5% |       2 | `bracket_split_build_line`    | `linegen.py` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      14 | `Driver.parse_tokens` | `driver.py` |

##### `Parser.shift` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      12 | `Parser._addtoken` | `parse.py` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Caller                            | Location     |
| ----: | ------: | --------------------------------- | ------------ |
| 63.6% |       7 | `Visitor.visit`                   | `nodes.py`   |
| 27.3% |       3 | `LineGenerator.visit_simple_stmt` | `linegen.py` |
|  9.1% |       1 | `LineGenerator.visit_power`       | `linegen.py` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|      % | Samples | Caller             | Location      |
| -----: | ------: | ------------------ | ------------- |
| 100.0% |      11 | `_format_str_once` | `__init__.py` |

##### `normalize_invisible_parens` (`linegen.py`)

|      % | Samples | Caller                     | Location     |
| -----: | ------: | -------------------------- | ------------ |
| 100.0% |      10 | `LineGenerator.visit_stmt` | `linegen.py` |

##### `line_to_string` (`lines.py`)

|     % | Samples | Caller                              | Location     |
| ----: | ------: | ----------------------------------- | ------------ |
| 90.0% |       9 | `transform_line`                    | `linegen.py` |
| 10.0% |       1 | `_hugging_power_ops_line_to_string` | `linegen.py` |

##### `_stringify_ast` (`parsing.py`)

|      % | Samples | Caller                           | Location     |
| -----: | ------: | -------------------------------- | ------------ |
| 100.0% |       9 | `_stringify_ast_with_new_parent` | `parsing.py` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|      % | Samples | Caller              | Location      |
| -----: | ------: | ------------------- | ------------- |
| 100.0% |       9 | `normalize_fmt_off` | `comments.py` |

##### `assert_equivalent` (`__init__.py`)

|      % | Samples | Caller                            | Location      |
| -----: | ------: | --------------------------------- | ------------- |
| 100.0% |       8 | `check_stability_and_equivalence` | `__init__.py` |

##### `Visitor.visit_default` (`nodes.py`)

|      % | Samples | Caller                        | Location     |
| -----: | ------: | ----------------------------- | ------------ |
| 100.0% |       7 | `LineGenerator.visit_default` | `linegen.py` |

##### `BracketTracker.mark` (`brackets.py`)

|      % | Samples | Caller        | Location   |
| -----: | ------: | ------------- | ---------- |
| 100.0% |       6 | `Line.append` | `lines.py` |

##### `LineGenerator.visit_power` (`linegen.py`)

|      % | Samples | Caller          | Location   |
| -----: | ------: | --------------- | ---------- |
| 100.0% |       6 | `Visitor.visit` | `nodes.py` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                         | Location         |
| -----: | ------: | -------------------------------- | ---------------- |
| 100.0% |   1,005 | `_run_code`                      | `<frozen runpy>` |
| 100.0% |   1,005 | `run_module`                     | `<frozen runpy>` |
| 100.0% |   1,005 | `_run_module_as_main`            | `<frozen runpy>` |
|  97.8% |     983 | `format_file_in_place`           | `__init__.py`    |
|  97.8% |     983 | `reformat_one`                   | `__init__.py`    |
|  97.8% |     983 | `main`                           | `__init__.py`    |
|  97.8% |     983 | `pass_context.<locals>.new_func` | `decorators.py`  |
|  97.8% |     983 | `Context.invoke`                 | `core.py`        |
|  97.8% |     983 | `Command.invoke`                 | `core.py`        |
|  97.8% |     983 | `Command.main`                   | `core.py`        |
|  97.8% |     983 | `Command.__call__`               | `core.py`        |
|  97.8% |     983 | `patched_main`                   | `__init__.py`    |
|  97.8% |     983 | `<module>`                       | `__main__.py`    |
|  97.8% |     983 | `_run_module_code`               | `<frozen runpy>` |
|  97.7% |     982 | `format_file_contents`           | `__init__.py`    |
|  90.2% |     907 | `_format_str_once`               | `__init__.py`    |
|  53.1% |     534 | `Driver.parse_tokens`            | `driver.py`      |
|  53.1% |     534 | `Driver.parse_string`            | `driver.py`      |
|  53.1% |     534 | `lib2to3_parse`                  | `parsing.py`     |
|  50.2% |     505 | `format_str`                     | `__init__.py`    |

#### Categories

##### Ours

|     % | Samples | Function                          | Location        |
| ----: | ------: | --------------------------------- | --------------- |
| 97.8% |     983 | `format_file_in_place`            | `__init__.py`   |
| 97.8% |     983 | `reformat_one`                    | `__init__.py`   |
| 97.8% |     983 | `main`                            | `__init__.py`   |
| 97.8% |     983 | `pass_context.<locals>.new_func`  | `decorators.py` |
| 97.8% |     983 | `Context.invoke`                  | `core.py`       |
| 97.8% |     983 | `Command.invoke`                  | `core.py`       |
| 97.8% |     983 | `Command.main`                    | `core.py`       |
| 97.8% |     983 | `Command.__call__`                | `core.py`       |
| 97.8% |     983 | `patched_main`                    | `__init__.py`   |
| 97.8% |     983 | `<module>`                        | `__main__.py`   |
| 97.7% |     982 | `format_file_contents`            | `__init__.py`   |
| 90.2% |     907 | `_format_str_once`                | `__init__.py`   |
| 53.1% |     534 | `Driver.parse_tokens`             | `driver.py`     |
| 53.1% |     534 | `Driver.parse_string`             | `driver.py`     |
| 53.1% |     534 | `lib2to3_parse`                   | `parsing.py`    |
| 50.2% |     505 | `format_str`                      | `__init__.py`   |
| 47.5% |     477 | `check_stability_and_equivalence` | `__init__.py`   |
| 40.6% |     408 | `assert_stable`                   | `__init__.py`   |
| 24.8% |     249 | `Parser.addtoken`                 | `parse.py`      |
| 22.4% |     225 | `Parser._addtoken`                | `parse.py`      |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 31.3% |     315 | `(garbage collector)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee       | Location         |
| -----: | ------: | ------------ | ---------------- |
| 100.0% |   1,005 | `run_module` | `<frozen runpy>` |
|  97.8% |     983 | `<module>`   | `__main__.py`    |

##### `run_module` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 97.8% |     983 | `_run_module_code`    | `<frozen runpy>` |
|  2.2% |      22 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |   1,005 | `_run_code` | `<frozen runpy>` |

##### `format_file_in_place` (`__init__.py`)

|     % | Samples | Callee                 | Location      |
| ----: | ------: | ---------------------- | ------------- |
| 99.9% |     982 | `format_file_contents` | `__init__.py` |

##### `reformat_one` (`__init__.py`)

|      % | Samples | Callee                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |     983 | `format_file_in_place` | `__init__.py` |

##### `main` (`__init__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     983 | `reformat_one` | `__init__.py` |

##### `pass_context.<locals>.new_func` (`decorators.py`)

|      % | Samples | Callee | Location      |
| -----: | ------: | ------ | ------------- |
| 100.0% |     983 | `main` | `__init__.py` |

##### `Context.invoke` (`core.py`)

|      % | Samples | Callee                           | Location        |
| -----: | ------: | -------------------------------- | --------------- |
| 100.0% |     983 | `pass_context.<locals>.new_func` | `decorators.py` |

##### `Command.invoke` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |     983 | `Context.invoke` | `core.py` |

##### `Command.main` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |     983 | `Command.invoke` | `core.py` |

##### `Command.__call__` (`core.py`)

|      % | Samples | Callee         | Location  |
| -----: | ------: | -------------- | --------- |
| 100.0% |     983 | `Command.main` | `core.py` |

##### `patched_main` (`__init__.py`)

|      % | Samples | Callee             | Location  |
| -----: | ------: | ------------------ | --------- |
| 100.0% |     983 | `Command.__call__` | `core.py` |

##### `<module>` (`__main__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     983 | `patched_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     983 | `_run_code` | `<frozen runpy>` |

##### `format_file_contents` (`__init__.py`)

|     % | Samples | Callee                            | Location      |
| ----: | ------: | --------------------------------- | ------------- |
| 51.4% |     505 | `format_str`                      | `__init__.py` |
| 48.6% |     477 | `check_stability_and_equivalence` | `__init__.py` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Callee                               | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 58.9% |     534 | `lib2to3_parse`                      | `parsing.py`  |
| 20.2% |     183 | `Visitor.visit`                      | `nodes.py`    |
| 10.7% |      97 | `detect_target_versions`             | `__init__.py` |
|  6.0% |      54 | `transform_line`                     | `linegen.py`  |
|  1.7% |      15 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Callee                | Location      |
| ----: | ------: | --------------------- | ------------- |
| 46.6% |     249 | `Parser.addtoken`     | `parse.py`    |
| 35.4% |     189 | `(garbage collector)` | `<unknown>`   |
|  7.3% |      39 | `TokenProxy.__next__` | `driver.py`   |
|  0.6% |       3 | `Logger.debug`        | `__init__.py` |
|  0.2% |       1 | `generate_tokens`     | `tokenize.py` |

##### `Driver.parse_string` (`driver.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     534 | `Driver.parse_tokens` | `driver.py` |

##### `lib2to3_parse` (`parsing.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     534 | `Driver.parse_string` | `driver.py` |

##### `format_str` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.2% |     501 | `_format_str_once` | `__init__.py` |

##### `check_stability_and_equivalence` (`__init__.py`)

|     % | Samples | Callee              | Location      |
| ----: | ------: | ------------------- | ------------- |
| 85.5% |     408 | `assert_stable`     | `__init__.py` |
| 13.4% |      64 | `assert_equivalent` | `__init__.py` |

##### `assert_stable` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.5% |     406 | `_format_str_once` | `__init__.py` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 88.4% |     220 | `Parser._addtoken` | `parse.py`    |
|  5.2% |      13 | `generate_tokens`  | `tokenize.py` |
|  0.8% |       2 | `Parser.classify`  | `parse.py`    |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 12.9% |      29 | `Parser.pop`          | `parse.py`  |
| 12.0% |      27 | `Parser.shift`        | `parse.py`  |
|  6.7% |      15 | `(garbage collector)` | `<unknown>` |
|  1.3% |       3 | `Parser.push`         | `parse.py`  |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `format_file_contents` (`__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code` ← `run_module` ← `_run_code` ← `_run_module_as_main`

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18.7% |     188 | `(garbage collector)` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 10.3% |     104 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  6.5% |      65 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  4.2% |      42 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  4.0% |      40 | `(garbage collector)` ← `is_vararg` (`nodes.py`) ← `is_split_before_delimiter` (`brackets.py`) ← `BracketTracker.mark` ← `max_delimiter_priority_in_atom` ← `maybe_make_parens_invisible_in_atom` (`linegen.py`) ← `normalize_invisible_parens` ← `LineGenerator.visit_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` |
|  4.0% |      40 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  3.9% |      39 | `parse` (`ast.py`) ← `_parse_single_version` (`parsing.py`) ← `parse_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  3.1% |      31 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.7% |      17 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.6% |      16 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.4% |      14 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.3% |      13 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.3% |      13 | `(garbage collector)` ← `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.1% |      11 | `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.0% |      10 | `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.0% |      10 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.9% |       9 | `(garbage collector)` ← `convert` (`pytree.py`) ← `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.8% |       8 | `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.8% |       8 | `generate_tokens` (`tokenize.py`) ← `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.7% |       7 | `line_to_string` (`lines.py`) ← `transform_line` (`linegen.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

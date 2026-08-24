# Sampling profile

Collected 163 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 94.5% |     154 |
| Unknown          |  4.3% |       7 |
| Standard library |  1.2% |       2 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                         | Location                               |
| ---: | ------: | -------------------------------- | -------------------------------------- |
| 9.2% |      15 | `_addtoken`                      | `blib2to3/pgen2/parse.py`              |
| 7.4% |      12 | `generate_tokens`                | `blib2to3/pgen2/tokenize.py`           |
| 6.1% |      10 | `generate_comments`              | `black/comments.py`                    |
| 5.5% |       9 | `__new__`                        | `blib2to3/pytree.py`                   |
| 4.9% |       8 | `push`                           | `blib2to3/pgen2/parse.py`              |
| 4.3% |       7 | `(anonymous)`                    | `<unknown>`                            |
| 4.3% |       7 | `__init__`                       | `<string>`                             |
| 4.3% |       7 | `parse`                          | `ast.py`                               |
| 3.7% |       6 | `get_features_used`              | `black/__init__.py`                    |
| 3.1% |       5 | `transform_line`                 | `black/linegen.py`                     |
| 3.1% |       5 | `_stringify_ast`                 | `black/parsing.py`                     |
| 3.1% |       5 | `pop`                            | `blib2to3/pgen2/parse.py`              |
| 2.5% |       4 | `_stringify_ast_with_new_parent` | `black/parsing.py`                     |
| 1.8% |       3 | `_format_str_once`               | `black/__init__.py`                    |
| 1.8% |       3 | `parse_tokens`                   | `blib2to3/pgen2/driver.py`             |
| 1.8% |       3 | `all_lines`                      | `black/lines.py`                       |
| 1.8% |       3 | `mark`                           | `black/brackets.py`                    |
| 1.8% |       3 | `__init__`                       | `blib2to3/pytree.py`                   |
| 1.8% |       3 | `<module>`                       | `pathspec/patterns/gitignore/basic.py` |
| 1.2% |       2 | `prefix`                         | `blib2to3/pytree.py`                   |

#### Categories

##### Ours

|    % | Samples | Function                         | Location                               |
| ---: | ------: | -------------------------------- | -------------------------------------- |
| 9.2% |      15 | `_addtoken`                      | `blib2to3/pgen2/parse.py`              |
| 7.4% |      12 | `generate_tokens`                | `blib2to3/pgen2/tokenize.py`           |
| 6.1% |      10 | `generate_comments`              | `black/comments.py`                    |
| 5.5% |       9 | `__new__`                        | `blib2to3/pytree.py`                   |
| 4.9% |       8 | `push`                           | `blib2to3/pgen2/parse.py`              |
| 4.3% |       7 | `__init__`                       | `<string>`                             |
| 4.3% |       7 | `parse`                          | `ast.py`                               |
| 3.7% |       6 | `get_features_used`              | `black/__init__.py`                    |
| 3.1% |       5 | `transform_line`                 | `black/linegen.py`                     |
| 3.1% |       5 | `_stringify_ast`                 | `black/parsing.py`                     |
| 3.1% |       5 | `pop`                            | `blib2to3/pgen2/parse.py`              |
| 2.5% |       4 | `_stringify_ast_with_new_parent` | `black/parsing.py`                     |
| 1.8% |       3 | `_format_str_once`               | `black/__init__.py`                    |
| 1.8% |       3 | `parse_tokens`                   | `blib2to3/pgen2/driver.py`             |
| 1.8% |       3 | `all_lines`                      | `black/lines.py`                       |
| 1.8% |       3 | `mark`                           | `black/brackets.py`                    |
| 1.8% |       3 | `__init__`                       | `blib2to3/pytree.py`                   |
| 1.8% |       3 | `<module>`                       | `pathspec/patterns/gitignore/basic.py` |
| 1.2% |       2 | `prefix`                         | `blib2to3/pytree.py`                   |
| 1.2% |       2 | `visit_default`                  | `black/linegen.py`                     |

##### Unknown

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 4.3% |       7 | `(anonymous)` | `<unknown>` |

##### Standard library

|    % | Samples | Function                    | Location                                 |
| ---: | ------: | --------------------------- | ---------------------------------------- |
| 0.6% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
| 0.6% |       1 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Location                      |
| -----: | ------: | ----------------------------- |
| 100.0% |      15 | `blib2to3/pgen2/parse.py:290` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|      % | Samples | Location                         |
| -----: | ------: | -------------------------------- |
| 100.0% |      12 | `blib2to3/pgen2/tokenize.py:565` |

##### `generate_comments` (`black/comments.py`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |      10 | `black/comments.py:52` |

##### `__new__` (`blib2to3/pytree.py`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       9 | `blib2to3/pytree.py:81` |

##### `push` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Location                      |
| -----: | ------: | ----------------------------- |
| 100.0% |       8 | `blib2to3/pgen2/parse.py:386` |

##### `__init__` (`<string>`)

|      % | Samples | Location     |
| -----: | ------: | ------------ |
| 100.0% |       7 | `<string>:2` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |       7 | `ast.py:33` |

##### `get_features_used` (`black/__init__.py`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       6 | `black/__init__.py:1307` |

##### `transform_line` (`black/linegen.py`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       5 | `black/linegen.py:601` |

##### `_stringify_ast` (`black/parsing.py`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       5 | `black/parsing.py:174` |

##### `pop` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Location                      |
| -----: | ------: | ----------------------------- |
| 100.0% |       5 | `blib2to3/pgen2/parse.py:398` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       4 | `black/parsing.py:166` |

##### `_format_str_once` (`black/__init__.py`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       3 | `black/__init__.py:1236` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|      % | Samples | Location                       |
| -----: | ------: | ------------------------------ |
| 100.0% |       3 | `blib2to3/pgen2/driver.py:114` |

##### `all_lines` (`black/lines.py`)

|      % | Samples | Location             |
| -----: | ------: | -------------------- |
| 100.0% |       3 | `black/lines.py:538` |

##### `mark` (`black/brackets.py`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       3 | `black/brackets.py:70` |

##### `__init__` (`blib2to3/pytree.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 66.7% |       2 | `blib2to3/pytree.py:400` |
| 33.3% |       1 | `blib2to3/pytree.py:248` |

##### `<module>` (`pathspec/patterns/gitignore/basic.py`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       3 | `pathspec/patterns/gitignore/basic.py:1` |

##### `prefix` (`blib2to3/pytree.py`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       2 | `blib2to3/pytree.py:480` |

##### `visit_default` (`black/linegen.py`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       2 | `black/linegen.py:134` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap>:233` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:727` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller     | Location                  |
| -----: | ------: | ---------- | ------------------------- |
| 100.0% |      15 | `addtoken` | `blib2to3/pgen2/parse.py` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|      % | Samples | Caller     | Location                   |
| -----: | ------: | ---------- | -------------------------- |
| 100.0% |      12 | `__next__` | `blib2to3/pgen2/driver.py` |

##### `generate_comments` (`black/comments.py`)

|      % | Samples | Caller          | Location           |
| -----: | ------: | --------------- | ------------------ |
| 100.0% |      10 | `visit_default` | `black/linegen.py` |

##### `__new__` (`blib2to3/pytree.py`)

|      % | Samples | Caller    | Location             |
| -----: | ------: | --------- | -------------------- |
| 100.0% |       9 | `convert` | `blib2to3/pytree.py` |

##### `push` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller      | Location                  |
| -----: | ------: | ----------- | ------------------------- |
| 100.0% |       8 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `__init__` (`<string>`)

|     % | Samples | Caller              | Location         |
| ----: | ------: | ------------------- | ---------------- |
| 71.4% |       5 | `__init__`          | `<string>`       |
| 14.3% |       1 | `all_lines`         | `black/lines.py` |
| 14.3% |       1 | `maybe_empty_lines` | `black/lines.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location           |
| -----: | ------: | ----------------------- | ------------------ |
| 100.0% |       7 | `_parse_single_version` | `black/parsing.py` |

##### `get_features_used` (`black/__init__.py`)

|      % | Samples | Caller                   | Location            |
| -----: | ------: | ------------------------ | ------------------- |
| 100.0% |       6 | `detect_target_versions` | `black/__init__.py` |

##### `transform_line` (`black/linegen.py`)

|      % | Samples | Caller             | Location            |
| -----: | ------: | ------------------ | ------------------- |
| 100.0% |       5 | `_format_str_once` | `black/__init__.py` |

##### `_stringify_ast` (`black/parsing.py`)

|      % | Samples | Caller                           | Location           |
| -----: | ------: | -------------------------------- | ------------------ |
| 100.0% |       5 | `_stringify_ast_with_new_parent` | `black/parsing.py` |

##### `pop` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller      | Location                  |
| -----: | ------: | ----------- | ------------------------- |
| 100.0% |       5 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py`)

|      % | Samples | Caller           | Location           |
| -----: | ------: | ---------------- | ------------------ |
| 100.0% |       4 | `_stringify_ast` | `black/parsing.py` |

##### `_format_str_once` (`black/__init__.py`)

|      % | Samples | Caller       | Location            |
| -----: | ------: | ------------ | ------------------- |
| 100.0% |       3 | `format_str` | `black/__init__.py` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|      % | Samples | Caller         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |       3 | `parse_string` | `blib2to3/pgen2/driver.py` |

##### `all_lines` (`black/lines.py`)

|      % | Samples | Caller             | Location            |
| -----: | ------: | ------------------ | ------------------- |
| 100.0% |       3 | `_format_str_once` | `black/__init__.py` |

##### `mark` (`black/brackets.py`)

|      % | Samples | Caller   | Location         |
| -----: | ------: | -------- | ---------------- |
| 100.0% |       3 | `append` | `black/lines.py` |

##### `__init__` (`blib2to3/pytree.py`)

|      % | Samples | Caller    | Location             |
| -----: | ------: | --------- | -------------------- |
| 100.0% |       3 | `convert` | `blib2to3/pytree.py` |

##### `<module>` (`pathspec/patterns/gitignore/basic.py`)

|      % | Samples | Caller                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       3 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `prefix` (`blib2to3/pytree.py`)

|     % | Samples | Caller                      | Location            |
| ----: | ------: | --------------------------- | ------------------- |
| 50.0% |       1 | `append`                    | `black/lines.py`    |
| 50.0% |       1 | `normalize_trailing_prefix` | `black/comments.py` |

##### `visit_default` (`black/linegen.py`)

|      % | Samples | Caller  | Location         |
| -----: | ------: | ------- | ---------------- |
| 100.0% |       2 | `visit` | `black/nodes.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Caller          | Location                                 |
| -----: | ------: | --------------- | ---------------------------------------- |
| 100.0% |       1 | `create_module` | `<frozen importlib._bootstrap_external>` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller     | Location                                 |
| -----: | ------: | ---------- | ---------------------------------------- |
| 100.0% |       1 | `get_code` | `<frozen importlib._bootstrap_external>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                          | Location                   |
| ----: | ------: | --------------------------------- | -------------------------- |
| 95.7% |     156 | `_run_module_as_main`             | `<frozen runpy>`           |
| 92.0% |     150 | `format_file_contents`            | `black/__init__.py`        |
| 92.0% |     150 | `format_file_in_place`            | `black/__init__.py`        |
| 92.0% |     150 | `reformat_one`                    | `black/__init__.py`        |
| 92.0% |     150 | `main`                            | `black/__init__.py`        |
| 92.0% |     150 | `new_func`                        | `click/decorators.py`      |
| 92.0% |     150 | `invoke`                          | `click/core.py`            |
| 92.0% |     150 | `main`                            | `click/core.py`            |
| 92.0% |     150 | `__call__`                        | `click/core.py`            |
| 92.0% |     150 | `patched_main`                    | `black/__init__.py`        |
| 92.0% |     150 | `<module>`                        | `black/__main__.py`        |
| 92.0% |     150 | `_run_code`                       | `<frozen runpy>`           |
| 81.0% |     132 | `_format_str_once`                | `black/__init__.py`        |
| 58.9% |      96 | `format_str`                      | `black/__init__.py`        |
| 36.8% |      60 | `parse_tokens`                    | `blib2to3/pgen2/driver.py` |
| 36.8% |      60 | `parse_string`                    | `blib2to3/pgen2/driver.py` |
| 36.8% |      60 | `lib2to3_parse`                   | `black/parsing.py`         |
| 33.1% |      54 | `check_stability_and_equivalence` | `black/__init__.py`        |
| 25.8% |      42 | `_addtoken`                       | `blib2to3/pgen2/parse.py`  |
| 25.8% |      42 | `addtoken`                        | `blib2to3/pgen2/parse.py`  |

#### Categories

##### Ours

|     % | Samples | Function                          | Location                   |
| ----: | ------: | --------------------------------- | -------------------------- |
| 92.0% |     150 | `format_file_contents`            | `black/__init__.py`        |
| 92.0% |     150 | `format_file_in_place`            | `black/__init__.py`        |
| 92.0% |     150 | `reformat_one`                    | `black/__init__.py`        |
| 92.0% |     150 | `main`                            | `black/__init__.py`        |
| 92.0% |     150 | `new_func`                        | `click/decorators.py`      |
| 92.0% |     150 | `invoke`                          | `click/core.py`            |
| 92.0% |     150 | `main`                            | `click/core.py`            |
| 92.0% |     150 | `__call__`                        | `click/core.py`            |
| 92.0% |     150 | `patched_main`                    | `black/__init__.py`        |
| 92.0% |     150 | `<module>`                        | `black/__main__.py`        |
| 81.0% |     132 | `_format_str_once`                | `black/__init__.py`        |
| 58.9% |      96 | `format_str`                      | `black/__init__.py`        |
| 36.8% |      60 | `parse_tokens`                    | `blib2to3/pgen2/driver.py` |
| 36.8% |      60 | `parse_string`                    | `blib2to3/pgen2/driver.py` |
| 36.8% |      60 | `lib2to3_parse`                   | `black/parsing.py`         |
| 33.1% |      54 | `check_stability_and_equivalence` | `black/__init__.py`        |
| 25.8% |      42 | `_addtoken`                       | `blib2to3/pgen2/parse.py`  |
| 25.8% |      42 | `addtoken`                        | `blib2to3/pgen2/parse.py`  |
| 22.7% |      37 | `visit_default`                   | `black/linegen.py`         |
| 22.7% |      37 | `visit`                           | `black/nodes.py`           |

##### Unknown

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 4.3% |       7 | `(anonymous)` | `<unknown>` |

##### Standard library

|     % | Samples | Function                    | Location                                 |
| ----: | ------: | --------------------------- | ---------------------------------------- |
| 95.7% |     156 | `_run_module_as_main`       | `<frozen runpy>`                         |
| 92.0% |     150 | `_run_code`                 | `<frozen runpy>`                         |
|  3.7% |       6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  3.7% |       6 | `exec_module`               | `<frozen importlib._bootstrap_external>` |
|  3.7% |       6 | `_load_unlocked`            | `<frozen importlib._bootstrap>`          |
|  3.7% |       6 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
|  3.7% |       6 | `_find_and_load`            | `<frozen importlib._bootstrap>`          |
|  3.7% |       6 | `_get_module_details`       | `<frozen runpy>`                         |
|  2.5% |       4 | `_handle_fromlist`          | `<frozen importlib._bootstrap>`          |
|  0.6% |       1 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
|  0.6% |       1 | `get_code`                  | `<frozen importlib._bootstrap_external>` |
|  0.6% |       1 | `create_module`             | `<frozen importlib._bootstrap_external>` |
|  0.6% |       1 | `module_from_spec`          | `<frozen importlib._bootstrap>`          |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_module_as_main` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 96.2% |     150 | `_run_code`           | `<frozen runpy>` |
|  3.8% |       6 | `_get_module_details` | `<frozen runpy>` |

##### `format_file_contents` (`black/__init__.py`)

|     % | Samples | Callee                            | Location            |
| ----: | ------: | --------------------------------- | ------------------- |
| 64.0% |      96 | `format_str`                      | `black/__init__.py` |
| 36.0% |      54 | `check_stability_and_equivalence` | `black/__init__.py` |

##### `format_file_in_place` (`black/__init__.py`)

|      % | Samples | Callee                 | Location            |
| -----: | ------: | ---------------------- | ------------------- |
| 100.0% |     150 | `format_file_contents` | `black/__init__.py` |

##### `reformat_one` (`black/__init__.py`)

|      % | Samples | Callee                 | Location            |
| -----: | ------: | ---------------------- | ------------------- |
| 100.0% |     150 | `format_file_in_place` | `black/__init__.py` |

##### `main` (`black/__init__.py`)

|      % | Samples | Callee         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     150 | `reformat_one` | `black/__init__.py` |

##### `new_func` (`click/decorators.py`)

|      % | Samples | Callee | Location            |
| -----: | ------: | ------ | ------------------- |
| 100.0% |     150 | `main` | `black/__init__.py` |

##### `invoke` (`click/core.py`)

|      % | Samples | Callee     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |     150 | `new_func` | `click/decorators.py` |
| 100.0% |     150 | `invoke`   | `click/core.py`       |

##### `main` (`click/core.py`)

|      % | Samples | Callee   | Location        |
| -----: | ------: | -------- | --------------- |
| 100.0% |     150 | `invoke` | `click/core.py` |

##### `__call__` (`click/core.py`)

|      % | Samples | Callee | Location        |
| -----: | ------: | ------ | --------------- |
| 100.0% |     150 | `main` | `click/core.py` |

##### `patched_main` (`black/__init__.py`)

|      % | Samples | Callee     | Location        |
| -----: | ------: | ---------- | --------------- |
| 100.0% |     150 | `__call__` | `click/core.py` |

##### `<module>` (`black/__main__.py`)

|      % | Samples | Callee         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     150 | `patched_main` | `black/__init__.py` |

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee     | Location            |
| -----: | ------: | ---------- | ------------------- |
| 100.0% |     150 | `<module>` | `black/__main__.py` |

##### `_format_str_once` (`black/__init__.py`)

|     % | Samples | Callee                   | Location            |
| ----: | ------: | ------------------------ | ------------------- |
| 45.5% |      60 | `lib2to3_parse`          | `black/parsing.py`  |
| 28.0% |      37 | `visit`                  | `black/nodes.py`    |
|  6.8% |       9 | `detect_target_versions` | `black/__init__.py` |
|  6.1% |       8 | `transform_line`         | `black/linegen.py`  |
|  3.0% |       4 | `maybe_empty_lines`      | `black/lines.py`    |

##### `format_str` (`black/__init__.py`)

|      % | Samples | Callee             | Location            |
| -----: | ------: | ------------------ | ------------------- |
| 100.0% |      96 | `_format_str_once` | `black/__init__.py` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|     % | Samples | Callee     | Location                   |
| ----: | ------: | ---------- | -------------------------- |
| 70.0% |      42 | `addtoken` | `blib2to3/pgen2/parse.py`  |
| 25.0% |      15 | `__next__` | `blib2to3/pgen2/driver.py` |

##### `parse_string` (`blib2to3/pgen2/driver.py`)

|      % | Samples | Callee         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |      60 | `parse_tokens` | `blib2to3/pgen2/driver.py` |

##### `lib2to3_parse` (`black/parsing.py`)

|      % | Samples | Callee         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |      60 | `parse_string` | `blib2to3/pgen2/driver.py` |

##### `check_stability_and_equivalence` (`black/__init__.py`)

|     % | Samples | Callee              | Location            |
| ----: | ------: | ------------------- | ------------------- |
| 66.7% |      36 | `assert_stable`     | `black/__init__.py` |
| 33.3% |      18 | `assert_equivalent` | `black/__init__.py` |

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|     % | Samples | Callee  | Location                  |
| ----: | ------: | ------- | ------------------------- |
| 40.5% |      17 | `pop`   | `blib2to3/pgen2/parse.py` |
| 19.0% |       8 | `push`  | `blib2to3/pgen2/parse.py` |
|  4.8% |       2 | `shift` | `blib2to3/pgen2/parse.py` |

##### `addtoken` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Callee      | Location                  |
| -----: | ------: | ----------- | ------------------------- |
| 100.0% |      42 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `visit_default` (`black/linegen.py`)

|      % | Samples | Callee              | Location            |
| -----: | ------: | ------------------- | ------------------- |
| 100.0% |      37 | `visit_default`     | `black/nodes.py`    |
|  35.1% |      13 | `generate_comments` | `black/comments.py` |
|  24.3% |       9 | `append`            | `black/lines.py`    |

##### `visit` (`black/nodes.py`)

|      % | Samples | Callee              | Location           |
| -----: | ------: | ------------------- | ------------------ |
| 100.0% |      37 | `visit_default`     | `black/linegen.py` |
| 100.0% |      37 | `visit_stmt`        | `black/linegen.py` |
| 100.0% |      37 | `visit_suite`       | `black/linegen.py` |
|  97.3% |      36 | `visit_funcdef`     | `black/linegen.py` |
|  73.0% |      27 | `visit_simple_stmt` | `black/linegen.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |       6 | `<module>`       | `black/__init__.py`                         |
|  66.7% |       4 | `_find_and_load` | `<frozen importlib._bootstrap>`             |
|  50.0% |       3 | `<module>`       | `pathspec/patterns/gitignore/basic.py`      |
|  50.0% |       3 | `<module>`       | `pathspec/patterns/__init__.py`             |
|  50.0% |       3 | `<module>`       | `pathspec/_backends/hyperscan/gitignore.py` |

##### `exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |       6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  16.7% |       1 | `get_code`                  | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee             | Location                                 |
| -----: | ------: | ------------------ | ---------------------------------------- |
| 100.0% |       6 | `exec_module`      | `<frozen importlib._bootstrap_external>` |
|  16.7% |       1 | `module_from_spec` | `<frozen importlib._bootstrap>`          |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       6 | `_load_unlocked`            | `<frozen importlib._bootstrap>` |
|  50.0% |       3 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                    | Location                        |
| -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% |       6 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location                        |
| -----: | ------: | --------------------- | ------------------------------- |
| 100.0% |       6 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% |       6 | `_get_module_details` | `<frozen runpy>`                |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `get_code` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee              | Location                                 |
| -----: | ------: | ------------------- | ---------------------------------------- |
| 100.0% |       1 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>` |

##### `create_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `module_from_spec` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee          | Location                                 |
| -----: | ------: | --------------- | ---------------------------------------- |
| 100.0% |       1 | `create_module` | `<frozen importlib._bootstrap_external>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `_run_module_as_main` (`<frozen runpy>`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.4% |      12 | `_addtoken` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 5.5% |       9 | `__new__` (`blib2to3/pytree.py`) ← `convert` ← `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 4.3% |       7 | `generate_tokens` (`blib2to3/pgen2/tokenize.py`) ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 4.3% |       7 | `parse` (`ast.py`) ← `_parse_single_version` (`black/parsing.py`) ← `parse_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 4.3% |       7 | `generate_comments` (`black/comments.py`) ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3.1% |       5 | `push` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 3.1% |       5 | `__init__` (`<string>`) ← `__init__` ← `line` (`black/linegen.py`) ← `visit_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 3.1% |       5 | `generate_tokens` (`blib2to3/pgen2/tokenize.py`) ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 3.1% |       5 | `get_features_used` (`black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 2.5% |       4 | `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.8% |       3 | `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.8% |       3 | `_addtoken` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.8% |       3 | `all_lines` (`black/lines.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.8% |       3 | `_stringify_ast_with_new_parent` (`black/parsing.py`) ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.8% |       3 | `generate_comments` (`black/comments.py`) ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.8% |       3 | `push` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.8% |       3 | `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.8% |       3 | `<module>` (`pathspec/patterns/gitignore/basic.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `_call_with_frames_removed` ← `_handle_fromlist` ← `<module>` (`pathspec/patterns/__init__.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `_call_with_frames_removed` ← `_find_and_load_unlocked` ← `_find_and_load` ← `_call_with_frames_removed` ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`pathspec/_backends/hyperscan/gitignore.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`pathspec/_backends/agg.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`pathspec/gitignore.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`pathspec/__init__.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`black/__init__.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `_get_module_details` (`<frozen runpy>`) ← `_get_module_details` |
| 1.8% |       3 | `transform_line` (`black/linegen.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.2% |       2 | `<genexpr>` (`black/__init__.py`) ← `get_features_used` ← `detect_target_versions` ← `_format_str_once` ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

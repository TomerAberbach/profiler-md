# Sampling profile

Took 1.98s over 198 samples (10.0ms per sample).

| Category         |     % |    Time | Samples |
| ---------------- | ----: | ------: | ------: |
| Third-party      | 88.4% |   1.75s |     175 |
| Standard library |  8.1% | 160.0ms |      16 |
| Ours             |  2.5% |  50.0ms |       5 |
| Unknown          |  1.0% |  20.0ms |       2 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                    | Location                                                        |
| ---: | ------: | ------: | --------------------------- | --------------------------------------------------------------- |
| 8.1% | 160.0ms |      16 | `_addtoken`                 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 8.1% | 160.0ms |      16 | `generate_comments`         | `/venv/lib/python3.11/site-packages/black/comments.py`          |
| 6.6% | 130.0ms |      13 | `generate_tokens`           | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| 5.6% | 110.0ms |      11 | `parse`                     | `/usr/lib/python3.11/ast.py`                                    |
| 5.1% | 100.0ms |      10 | `__new__`                   | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 4.5% |  90.0ms |       9 | `__init__`                  | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 4.5% |  90.0ms |       9 | `visit_default`             | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| 4.0% |  80.0ms |       8 | `append`                    | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| 2.5% |  50.0ms |       5 | `pop`                       | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 2.5% |  50.0ms |       5 | `__init__`                  | `<string>`                                                      |
| 2.5% |  50.0ms |       5 | `is_split_before_delimiter` | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
| 2.0% |  40.0ms |       4 | `get_features_used`         | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
| 2.0% |  40.0ms |       4 | `pre_order`                 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 2.0% |  40.0ms |       4 | `prefix`                    | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 2.0% |  40.0ms |       4 | `assert_equivalent`         | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
| 2.0% |  40.0ms |       4 | `_stringify_ast`            | `/venv/lib/python3.11/site-packages/black/parsing.py`           |
| 2.0% |  40.0ms |       4 | `preceding_leaf`            | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
| 1.5% |  30.0ms |       3 | `leaves`                    | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 1.5% |  30.0ms |       3 | `visit`                     | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
| 1.5% |  30.0ms |       3 | `changed`                   | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |

#### Categories

##### Third-party

|    % |    Time | Samples | Function                    | Location                                                        |
| ---: | ------: | ------: | --------------------------- | --------------------------------------------------------------- |
| 8.1% | 160.0ms |      16 | `_addtoken`                 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 8.1% | 160.0ms |      16 | `generate_comments`         | `/venv/lib/python3.11/site-packages/black/comments.py`          |
| 6.6% | 130.0ms |      13 | `generate_tokens`           | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| 5.1% | 100.0ms |      10 | `__new__`                   | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 4.5% |  90.0ms |       9 | `__init__`                  | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 4.5% |  90.0ms |       9 | `visit_default`             | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| 4.0% |  80.0ms |       8 | `append`                    | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| 2.5% |  50.0ms |       5 | `pop`                       | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 2.5% |  50.0ms |       5 | `is_split_before_delimiter` | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
| 2.0% |  40.0ms |       4 | `get_features_used`         | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
| 2.0% |  40.0ms |       4 | `pre_order`                 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 2.0% |  40.0ms |       4 | `prefix`                    | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 2.0% |  40.0ms |       4 | `assert_equivalent`         | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
| 2.0% |  40.0ms |       4 | `_stringify_ast`            | `/venv/lib/python3.11/site-packages/black/parsing.py`           |
| 2.0% |  40.0ms |       4 | `preceding_leaf`            | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
| 1.5% |  30.0ms |       3 | `leaves`                    | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 1.5% |  30.0ms |       3 | `visit`                     | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
| 1.5% |  30.0ms |       3 | `changed`                   | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 1.5% |  30.0ms |       3 | `update_sibling_maps`       | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 1.5% |  30.0ms |       3 | `type_repr`                 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |

##### Standard library

|    % |    Time | Samples | Function                  | Location                                 |
| ---: | ------: | ------: | ------------------------- | ---------------------------------------- |
| 5.6% | 110.0ms |      11 | `parse`                   | `/usr/lib/python3.11/ast.py`             |
| 0.5% |  10.0ms |       1 | `_RandomNameSequence`     | `/usr/lib/python3.11/tempfile.py`        |
| 0.5% |  10.0ms |       1 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>`          |
| 0.5% |  10.0ms |       1 | `__getitem__`             | `/usr/lib/python3.11/re/_parser.py`      |
| 0.5% |  10.0ms |       1 | `_parse`                  | `/usr/lib/python3.11/re/_parser.py`      |
| 0.5% |  10.0ms |       1 | `_compile_bytecode`       | `<frozen importlib._bootstrap_external>` |

##### Ours

|    % |   Time | Samples | Function   | Location   |
| ---: | -----: | ------: | ---------- | ---------- |
| 2.5% | 50.0ms |       5 | `__init__` | `<string>` |

##### Unknown

|    % |   Time | Samples | Function      | Location    |
| ---: | -----: | ------: | ------------- | ----------- |
| 1.0% | 20.0ms |       2 | `(anonymous)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |    Time | Samples | Location                                                         |
| -----: | ------: | ------: | ---------------------------------------------------------------- |
| 100.0% | 160.0ms |      16 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:290` |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|      % |    Time | Samples | Location                                                  |
| -----: | ------: | ------: | --------------------------------------------------------- |
| 100.0% | 160.0ms |      16 | `/venv/lib/python3.11/site-packages/black/comments.py:52` |

##### `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|      % |    Time | Samples | Location                                                            |
| -----: | ------: | ------: | ------------------------------------------------------------------- |
| 100.0% | 130.0ms |      13 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:565` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |    Time | Samples | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 110.0ms |      11 | `/usr/lib/python3.11/ast.py:33` |

##### `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |    Time | Samples | Location                                                   |
| -----: | ------: | ------: | ---------------------------------------------------------- |
| 100.0% | 100.0ms |      10 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:81` |

##### `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Location                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------- |
| 66.7% | 60.0ms |       6 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:400` |
| 33.3% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:248` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |   Time | Samples | Location                                                  |
| -----: | -----: | ------: | --------------------------------------------------------- |
| 100.0% | 90.0ms |       9 | `/venv/lib/python3.11/site-packages/black/linegen.py:134` |

##### `append` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|      % |   Time | Samples | Location                                               |
| -----: | -----: | ------: | ------------------------------------------------------ |
| 100.0% | 80.0ms |       8 | `/venv/lib/python3.11/site-packages/black/lines.py:63` |

##### `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |   Time | Samples | Location                                                         |
| -----: | -----: | ------: | ---------------------------------------------------------------- |
| 100.0% | 50.0ms |       5 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:398` |

##### `__init__` (`<string>`)

|      % |   Time | Samples | Location     |
| -----: | -----: | ------: | ------------ |
| 100.0% | 50.0ms |       5 | `<string>:2` |

##### `is_split_before_delimiter` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

|      % |   Time | Samples | Location                                                   |
| -----: | -----: | ------: | ---------------------------------------------------------- |
| 100.0% | 50.0ms |       5 | `/venv/lib/python3.11/site-packages/black/brackets.py:232` |

##### `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |   Time | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `/venv/lib/python3.11/site-packages/black/__init__.py:1307` |

##### `pre_order` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Location                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------- |
| 75.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:314` |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:469` |

##### `prefix` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Location                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------- |
| 75.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:480` |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:473` |

##### `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |   Time | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `/venv/lib/python3.11/site-packages/black/__init__.py:1524` |

##### `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|      % |   Time | Samples | Location                                                  |
| -----: | -----: | ------: | --------------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `/venv/lib/python3.11/site-packages/black/parsing.py:174` |

##### `preceding_leaf` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |   Time | Samples | Location                                                |
| -----: | -----: | ------: | ------------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `/venv/lib/python3.11/site-packages/black/nodes.py:441` |

##### `leaves` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:221` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |   Time | Samples | Location                                                |
| -----: | -----: | ------: | ------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/nodes.py:163` |

##### `changed` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:171` |

##### `update_sibling_maps` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:369` |

##### `type_repr` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Location                                                   |
| -----: | -----: | ------: | ---------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:40` |

##### `_RandomNameSequence` (`/usr/lib/python3.11/tempfile.py`)

|      % |   Time | Samples | Location                              |
| -----: | -----: | ------: | ------------------------------------- |
| 100.0% | 10.0ms |       1 | `/usr/lib/python3.11/tempfile.py:271` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 10.0ms |       1 | `<frozen importlib._bootstrap>:1122` |

##### `__getitem__` (`/usr/lib/python3.11/re/_parser.py`)

|      % |   Time | Samples | Location                                |
| -----: | -----: | ------: | --------------------------------------- |
| 100.0% | 10.0ms |       1 | `/usr/lib/python3.11/re/_parser.py:162` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py`)

|      % |   Time | Samples | Location                                |
| -----: | -----: | ------: | --------------------------------------- |
| 100.0% | 10.0ms |       1 | `/usr/lib/python3.11/re/_parser.py:507` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % |   Time | Samples | Location                                     |
| -----: | -----: | ------: | -------------------------------------------- |
| 100.0% | 10.0ms |       1 | `<frozen importlib._bootstrap_external>:727` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |    Time | Samples | Caller     | Location                                                     |
| -----: | ------: | ------: | ---------- | ------------------------------------------------------------ |
| 100.0% | 160.0ms |      16 | `addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|      % |    Time | Samples | Caller          | Location                                              |
| -----: | ------: | ------: | --------------- | ----------------------------------------------------- |
| 100.0% | 160.0ms |      16 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|      % |    Time | Samples | Caller     | Location                                                      |
| -----: | ------: | ------: | ---------- | ------------------------------------------------------------- |
| 100.0% | 130.0ms |      13 | `__next__` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |    Time | Samples | Caller                  | Location                                              |
| -----: | ------: | ------: | ----------------------- | ----------------------------------------------------- |
| 100.0% | 110.0ms |      11 | `_parse_single_version` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |    Time | Samples | Caller    | Location                                                |
| -----: | ------: | ------: | --------- | ------------------------------------------------------- |
| 100.0% | 100.0ms |      10 | `convert` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Caller    | Location                                                |
| ----: | -----: | ------: | --------- | ------------------------------------------------------- |
| 88.9% | 80.0ms |       8 | `convert` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |
| 11.1% | 10.0ms |       1 | `clone`   | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|     % |   Time | Samples | Caller         | Location                                              |
| ----: | -----: | ------: | -------------- | ----------------------------------------------------- |
| 77.8% | 70.0ms |       7 | `visit`        | `/venv/lib/python3.11/site-packages/black/nodes.py`   |
| 22.2% | 20.0ms |       2 | `visit_STRING` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `append` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|      % |   Time | Samples | Caller          | Location                                              |
| -----: | -----: | ------: | --------------- | ----------------------------------------------------- |
| 100.0% | 80.0ms |       8 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |   Time | Samples | Caller      | Location                                                     |
| -----: | -----: | ------: | ----------- | ------------------------------------------------------------ |
| 100.0% | 50.0ms |       5 | `_addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `__init__` (`<string>`)

|     % |   Time | Samples | Caller              | Location                                            |
| ----: | -----: | ------: | ------------------- | --------------------------------------------------- |
| 60.0% | 30.0ms |       3 | `__init__`          | `<string>`                                          |
| 40.0% | 20.0ms |       2 | `maybe_empty_lines` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `is_split_before_delimiter` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

|      % |   Time | Samples | Caller | Location                                               |
| -----: | -----: | ------: | ------ | ------------------------------------------------------ |
| 100.0% | 50.0ms |       5 | `mark` | `/venv/lib/python3.11/site-packages/black/brackets.py` |

##### `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |   Time | Samples | Caller                   | Location                                               |
| -----: | -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% | 40.0ms |       4 | `detect_target_versions` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `pre_order` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Caller      | Location                                                |
| -----: | -----: | ------: | ----------- | ------------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `pre_order` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `prefix` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Caller                      | Location                                               |
| ----: | -----: | ------: | --------------------------- | ------------------------------------------------------ |
| 50.0% | 20.0ms |       2 | `normalize_trailing_prefix` | `/venv/lib/python3.11/site-packages/black/comments.py` |
| 25.0% | 10.0ms |       1 | `convert_one_fmt_off_pair`  | `/venv/lib/python3.11/site-packages/black/comments.py` |
| 25.0% | 10.0ms |       1 | `visit_default`             | `/venv/lib/python3.11/site-packages/black/linegen.py`  |

##### `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |   Time | Samples | Caller                            | Location                                               |
| -----: | -----: | ------: | --------------------------------- | ------------------------------------------------------ |
| 100.0% | 40.0ms |       4 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|      % |   Time | Samples | Caller                           | Location                                              |
| -----: | -----: | ------: | -------------------------------- | ----------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `_stringify_ast_with_new_parent` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `preceding_leaf` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |   Time | Samples | Caller       | Location                                            |
| -----: | -----: | ------: | ------------ | --------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `whitespace` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `leaves` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Caller   | Location                                                |
| -----: | -----: | ------: | -------- | ------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `leaves` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |   Time | Samples | Caller          | Location                                            |
| -----: | -----: | ------: | --------------- | --------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `visit_default` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `changed` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Caller    | Location                                                |
| ----: | -----: | ------: | --------- | ------------------------------------------------------- |
| 66.7% | 20.0ms |       2 | `changed` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |
| 33.3% | 10.0ms |       1 | `prefix`  | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `update_sibling_maps` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Caller         | Location                                                |
| -----: | -----: | ------: | -------------- | ------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `prev_sibling` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `type_repr` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Caller  | Location                                            |
| -----: | -----: | ------: | ------- | --------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `_RandomNameSequence` (`/usr/lib/python3.11/tempfile.py`)

|      % |   Time | Samples | Caller     | Location                          |
| -----: | -----: | ------: | ---------- | --------------------------------- |
| 100.0% | 10.0ms |       1 | `<module>` | `/usr/lib/python3.11/tempfile.py` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Caller           | Location                        |
| -----: | -----: | ------: | ---------------- | ------------------------------- |
| 100.0% | 10.0ms |       1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `__getitem__` (`/usr/lib/python3.11/re/_parser.py`)

|      % |   Time | Samples | Caller    | Location                              |
| -----: | -----: | ------: | --------- | ------------------------------------- |
| 100.0% | 10.0ms |       1 | `_simple` | `/usr/lib/python3.11/re/_compiler.py` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py`)

|      % |   Time | Samples | Caller       | Location                            |
| -----: | -----: | ------: | ------------ | ----------------------------------- |
| 100.0% | 10.0ms |       1 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % |   Time | Samples | Caller     | Location                                 |
| -----: | -----: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 10.0ms |       1 | `get_code` | `<frozen importlib._bootstrap_external>` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                          | Location                                                 |
| ----: | ------: | ------: | --------------------------------- | -------------------------------------------------------- |
| 99.0% |   1.96s |     196 | `_run_module_as_main`             | `<frozen runpy>`                                         |
| 96.5% |   1.91s |     191 | `format_file_in_place`            | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 96.5% |   1.91s |     191 | `reformat_one`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 96.5% |   1.91s |     191 | `main`                            | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 96.5% |   1.91s |     191 | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py` |
| 96.5% |   1.91s |     191 | `invoke`                          | `/venv/lib/python3.11/site-packages/click/core.py`       |
| 96.5% |   1.91s |     191 | `main`                            | `/venv/lib/python3.11/site-packages/click/core.py`       |
| 96.5% |   1.91s |     191 | `__call__`                        | `/venv/lib/python3.11/site-packages/click/core.py`       |
| 96.5% |   1.91s |     191 | `patched_main`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 96.5% |   1.91s |     191 | `<module>`                        | `/venv/lib/python3.11/site-packages/black/__main__.py`   |
| 96.5% |   1.91s |     191 | `_run_code`                       | `<frozen runpy>`                                         |
| 96.0% |   1.90s |     190 | `format_file_contents`            | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 84.8% |   1.68s |     168 | `_format_str_once`                | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 56.1% |   1.11s |     111 | `format_str`                      | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 39.9% | 790.0ms |      79 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 38.4% | 760.0ms |      76 | `visit`                           | `/venv/lib/python3.11/site-packages/black/nodes.py`      |
| 38.4% | 760.0ms |      76 | `visit_default`                   | `/venv/lib/python3.11/site-packages/black/nodes.py`      |
| 38.4% | 760.0ms |      76 | `visit_default`                   | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
| 37.9% | 750.0ms |      75 | `visit_suite`                     | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
| 37.4% | 740.0ms |      74 | `visit_stmt`                      | `/venv/lib/python3.11/site-packages/black/linegen.py`    |

#### Categories

##### Third-party

|     % |    Time | Samples | Function                          | Location                                                      |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------------------------------- |
| 96.5% |   1.91s |     191 | `format_file_in_place`            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 96.5% |   1.91s |     191 | `reformat_one`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 96.5% |   1.91s |     191 | `main`                            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 96.5% |   1.91s |     191 | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py`      |
| 96.5% |   1.91s |     191 | `invoke`                          | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 96.5% |   1.91s |     191 | `main`                            | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 96.5% |   1.91s |     191 | `__call__`                        | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 96.5% |   1.91s |     191 | `patched_main`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 96.5% |   1.91s |     191 | `<module>`                        | `/venv/lib/python3.11/site-packages/black/__main__.py`        |
| 96.0% |   1.90s |     190 | `format_file_contents`            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 84.8% |   1.68s |     168 | `_format_str_once`                | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 56.1% |   1.11s |     111 | `format_str`                      | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 39.9% | 790.0ms |      79 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 38.4% | 760.0ms |      76 | `visit`                           | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
| 38.4% | 760.0ms |      76 | `visit_default`                   | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
| 38.4% | 760.0ms |      76 | `visit_default`                   | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| 37.9% | 750.0ms |      75 | `visit_suite`                     | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| 37.4% | 740.0ms |      74 | `visit_stmt`                      | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| 36.9% | 730.0ms |      73 | `visit_funcdef`                   | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| 31.3% | 620.0ms |      62 | `parse_tokens`                    | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### Standard library

|     % |    Time | Samples | Function                    | Location                                  |
| ----: | ------: | ------: | --------------------------- | ----------------------------------------- |
| 99.0% |   1.96s |     196 | `_run_module_as_main`       | `<frozen runpy>`                          |
| 96.5% |   1.91s |     191 | `_run_code`                 | `<frozen runpy>`                          |
|  5.6% | 110.0ms |      11 | `parse`                     | `/usr/lib/python3.11/ast.py`              |
|  2.5% |  50.0ms |       5 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`           |
|  2.5% |  50.0ms |       5 | `exec_module`               | `<frozen importlib._bootstrap_external>`  |
|  2.5% |  50.0ms |       5 | `_load_unlocked`            | `<frozen importlib._bootstrap>`           |
|  2.5% |  50.0ms |       5 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`           |
|  2.5% |  50.0ms |       5 | `_find_and_load`            | `<frozen importlib._bootstrap>`           |
|  2.5% |  50.0ms |       5 | `_get_module_details`       | `<frozen runpy>`                          |
|  1.0% |  20.0ms |       2 | `compile`                   | `/usr/lib/python3.11/re/_compiler.py`     |
|  1.0% |  20.0ms |       2 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py`      |
|  1.0% |  20.0ms |       2 | `compile`                   | `/usr/lib/python3.11/re/__init__.py`      |
|  1.0% |  20.0ms |       2 | `_handle_fromlist`          | `<frozen importlib._bootstrap>`           |
|  0.5% |  10.0ms |       1 | `_RandomNameSequence`       | `/usr/lib/python3.11/tempfile.py`         |
|  0.5% |  10.0ms |       1 | `<module>`                  | `/usr/lib/python3.11/tempfile.py`         |
|  0.5% |  10.0ms |       1 | `__getitem__`               | `/usr/lib/python3.11/re/_parser.py`       |
|  0.5% |  10.0ms |       1 | `_simple`                   | `/usr/lib/python3.11/re/_compiler.py`     |
|  0.5% |  10.0ms |       1 | `_compile`                  | `/usr/lib/python3.11/re/_compiler.py`     |
|  0.5% |  10.0ms |       1 | `_code`                     | `/usr/lib/python3.11/re/_compiler.py`     |
|  0.5% |  10.0ms |       1 | `StrFormatStyle`            | `/usr/lib/python3.11/logging/__init__.py` |

##### Ours

|    % |   Time | Samples | Function   | Location   |
| ---: | -----: | ------: | ---------- | ---------- |
| 2.5% | 50.0ms |       5 | `__init__` | `<string>` |

##### Unknown

|    % |   Time | Samples | Function      | Location    |
| ---: | -----: | ------: | ------------- | ----------- |
| 1.0% | 20.0ms |       2 | `(anonymous)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_module_as_main` (`<frozen runpy>`)

|     % |   Time | Samples | Callee                | Location         |
| ----: | -----: | ------: | --------------------- | ---------------- |
| 97.4% |  1.91s |     191 | `_run_code`           | `<frozen runpy>` |
|  2.6% | 50.0ms |       5 | `_get_module_details` | `<frozen runpy>` |

##### `format_file_in_place` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |  Time | Samples | Callee                 | Location                                               |
| ----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 99.5% | 1.90s |     190 | `format_file_contents` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `reformat_one` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 1.91s |     191 | `format_file_in_place` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `main` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee         | Location                                               |
| -----: | ----: | ------: | -------------- | ------------------------------------------------------ |
| 100.0% | 1.91s |     191 | `reformat_one` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`)

|      % |  Time | Samples | Callee | Location                                               |
| -----: | ----: | ------: | ------ | ------------------------------------------------------ |
| 100.0% | 1.91s |     191 | `main` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |  Time | Samples | Callee     | Location                                                 |
| -----: | ----: | ------: | ---------- | -------------------------------------------------------- |
| 100.0% | 1.91s |     191 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py` |
| 100.0% | 1.91s |     191 | `invoke`   | `/venv/lib/python3.11/site-packages/click/core.py`       |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |  Time | Samples | Callee   | Location                                           |
| -----: | ----: | ------: | -------- | -------------------------------------------------- |
| 100.0% | 1.91s |     191 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |  Time | Samples | Callee | Location                                           |
| -----: | ----: | ------: | ------ | -------------------------------------------------- |
| 100.0% | 1.91s |     191 | `main` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee     | Location                                           |
| -----: | ----: | ------: | ---------- | -------------------------------------------------- |
| 100.0% | 1.91s |     191 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`)

|      % |  Time | Samples | Callee         | Location                                               |
| -----: | ----: | ------: | -------------- | ------------------------------------------------------ |
| 100.0% | 1.91s |     191 | `patched_main` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `_run_code` (`<frozen runpy>`)

|      % |  Time | Samples | Callee     | Location                                               |
| -----: | ----: | ------: | ---------- | ------------------------------------------------------ |
| 100.0% | 1.91s |     191 | `<module>` | `/venv/lib/python3.11/site-packages/black/__main__.py` |

##### `format_file_contents` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |    Time | Samples | Callee                            | Location                                               |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------------------------ |
| 58.4% |   1.11s |     111 | `format_str`                      | `/venv/lib/python3.11/site-packages/black/__init__.py` |
| 41.6% | 790.0ms |      79 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |    Time | Samples | Callee                   | Location                                               |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------ |
| 45.2% | 760.0ms |      76 | `visit`                  | `/venv/lib/python3.11/site-packages/black/nodes.py`    |
| 36.9% | 620.0ms |      62 | `lib2to3_parse`          | `/venv/lib/python3.11/site-packages/black/parsing.py`  |
|  6.5% | 110.0ms |      11 | `detect_target_versions` | `/venv/lib/python3.11/site-packages/black/__init__.py` |
|  6.0% | 100.0ms |      10 | `transform_line`         | `/venv/lib/python3.11/site-packages/black/linegen.py`  |
|  2.4% |  40.0ms |       4 | `normalize_fmt_off`      | `/venv/lib/python3.11/site-packages/black/comments.py` |

##### `format_str` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee             | Location                                               |
| -----: | ----: | ------: | ------------------ | ------------------------------------------------------ |
| 100.0% | 1.11s |     111 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `check_stability_and_equivalence` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |    Time | Samples | Callee              | Location                                               |
| ----: | ------: | ------: | ------------------- | ------------------------------------------------------ |
| 72.2% | 570.0ms |      57 | `assert_stable`     | `/venv/lib/python3.11/site-packages/black/__init__.py` |
| 27.8% | 220.0ms |      22 | `assert_equivalent` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |    Time | Samples | Callee              | Location                                              |
| -----: | ------: | ------: | ------------------- | ----------------------------------------------------- |
| 100.0% | 760.0ms |      76 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  98.7% | 750.0ms |      75 | `visit_suite`       | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  97.4% | 740.0ms |      74 | `visit_stmt`        | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  96.1% | 730.0ms |      73 | `visit_funcdef`     | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  78.9% | 600.0ms |      60 | `visit_simple_stmt` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |    Time | Samples | Callee  | Location                                            |
| -----: | ------: | ------: | ------- | --------------------------------------------------- |
| 100.0% | 760.0ms |      76 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Callee              | Location                                                |
| -----: | ------: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% | 760.0ms |      76 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/nodes.py`     |
|  34.2% | 260.0ms |      26 | `append`            | `/venv/lib/python3.11/site-packages/black/lines.py`     |
|  30.3% | 230.0ms |      23 | `generate_comments` | `/venv/lib/python3.11/site-packages/black/comments.py`  |
|   1.3% |  10.0ms |       1 | `prefix`            | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `visit_suite` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Callee          | Location                                              |
| -----: | ------: | ------: | --------------- | ----------------------------------------------------- |
| 100.0% | 750.0ms |      75 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Callee                       | Location                                              |
| -----: | ------: | ------: | ---------------------------- | ----------------------------------------------------- |
| 100.0% | 740.0ms |      74 | `visit`                      | `/venv/lib/python3.11/site-packages/black/nodes.py`   |
|   2.7% |  20.0ms |       2 | `normalize_invisible_parens` | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|   1.4% |  10.0ms |       1 | `line`                       | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Callee  | Location                                            |
| -----: | ------: | ------: | ------- | --------------------------------------------------- |
| 100.0% | 730.0ms |      73 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|     % |    Time | Samples | Callee     | Location                                                      |
| ----: | ------: | ------: | ---------- | ------------------------------------------------------------- |
| 71.0% | 440.0ms |      44 | `addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`  |
| 25.8% | 160.0ms |      16 | `__next__` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Callee           | Location                                                      |
| -----: | -----: | ------: | ---------------- | ------------------------------------------------------------- |
| 100.0% | 50.0ms |       5 | `<module>`       | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
|  40.0% | 20.0ms |       2 | `<module>`       | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
|  40.0% | 20.0ms |       2 | `_find_and_load` | `<frozen importlib._bootstrap>`                               |
|  40.0% | 20.0ms |       2 | `<module>`       | `/venv/lib/python3.11/site-packages/blib2to3/pygram.py`       |
|  40.0% | 20.0ms |       2 | `<module>`       | `/venv/lib/python3.11/site-packages/black/nodes.py`           |

##### `exec_module` (`<frozen importlib._bootstrap_external>`)

|      % |   Time | Samples | Callee                      | Location                                 |
| -----: | -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% | 50.0ms |       5 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  20.0% | 10.0ms |       1 | `get_code`                  | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Callee        | Location                                 |
| -----: | -----: | ------: | ------------- | ---------------------------------------- |
| 100.0% | 50.0ms |       5 | `exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Callee           | Location                        |
| -----: | -----: | ------: | ---------------- | ------------------------------- |
| 100.0% | 50.0ms |       5 | `_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Callee                    | Location                        |
| -----: | -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% | 50.0ms |       5 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_get_module_details` (`<frozen runpy>`)

|      % |   Time | Samples | Callee                | Location                        |
| -----: | -----: | ------: | --------------------- | ------------------------------- |
| 100.0% | 50.0ms |       5 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% | 50.0ms |       5 | `_get_module_details` | `<frozen runpy>`                |

##### `__init__` (`<string>`)

|     % |   Time | Samples | Callee     | Location   |
| ----: | -----: | ------: | ---------- | ---------- |
| 60.0% | 30.0ms |       3 | `__init__` | `<string>` |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py`)

|     % |   Time | Samples | Callee  | Location                              |
| ----: | -----: | ------: | ------- | ------------------------------------- |
| 50.0% | 10.0ms |       1 | `_code` | `/usr/lib/python3.11/re/_compiler.py` |
| 50.0% | 10.0ms |       1 | `parse` | `/usr/lib/python3.11/re/_parser.py`   |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py`)

|      % |   Time | Samples | Callee    | Location                              |
| -----: | -----: | ------: | --------- | ------------------------------------- |
| 100.0% | 20.0ms |       2 | `compile` | `/usr/lib/python3.11/re/_compiler.py` |

##### `compile` (`/usr/lib/python3.11/re/__init__.py`)

|      % |   Time | Samples | Callee     | Location                             |
| -----: | -----: | ------: | ---------- | ------------------------------------ |
| 100.0% | 20.0ms |       2 | `_compile` | `/usr/lib/python3.11/re/__init__.py` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Callee                      | Location                        |
| -----: | -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% | 20.0ms |       2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/usr/lib/python3.11/tempfile.py`)

|      % |   Time | Samples | Callee                | Location                          |
| -----: | -----: | ------: | --------------------- | --------------------------------- |
| 100.0% | 10.0ms |       1 | `_RandomNameSequence` | `/usr/lib/python3.11/tempfile.py` |

##### `_simple` (`/usr/lib/python3.11/re/_compiler.py`)

|      % |   Time | Samples | Callee        | Location                            |
| -----: | -----: | ------: | ------------- | ----------------------------------- |
| 100.0% | 10.0ms |       1 | `__getitem__` | `/usr/lib/python3.11/re/_parser.py` |

##### `_compile` (`/usr/lib/python3.11/re/_compiler.py`)

|      % |   Time | Samples | Callee     | Location                              |
| -----: | -----: | ------: | ---------- | ------------------------------------- |
| 100.0% | 10.0ms |       1 | `_simple`  | `/usr/lib/python3.11/re/_compiler.py` |
| 100.0% | 10.0ms |       1 | `_compile` | `/usr/lib/python3.11/re/_compiler.py` |

##### `_code` (`/usr/lib/python3.11/re/_compiler.py`)

|      % |   Time | Samples | Callee     | Location                              |
| -----: | -----: | ------: | ---------- | ------------------------------------- |
| 100.0% | 10.0ms |       1 | `_compile` | `/usr/lib/python3.11/re/_compiler.py` |

##### `StrFormatStyle` (`/usr/lib/python3.11/logging/__init__.py`)

|      % |   Time | Samples | Callee    | Location                             |
| -----: | -----: | ------: | --------- | ------------------------------------ |
| 100.0% | 10.0ms |       1 | `compile` | `/usr/lib/python3.11/re/__init__.py` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `format_file_contents` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main`

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.6% | 110.0ms |      11 | `parse` (`/usr/lib/python3.11/ast.py`) ← `_parse_single_version` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `parse_ast` ← `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 4.5% |  90.0ms |       9 | `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`) ← `__next__` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 4.0% |  80.0ms |       8 | `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 4.0% |  80.0ms |       8 | `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 4.0% |  80.0ms |       8 | `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                            |
| 3.5% |  70.0ms |       7 | `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `convert` ← `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 3.0% |  60.0ms |       6 | `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.0% |  40.0ms |       4 | `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `convert` ← `shift` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.0% |  40.0ms |       4 | `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2.0% |  40.0ms |       4 | `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2.0% |  40.0ms |       4 | `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`) ← `__next__` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2.0% |  40.0ms |       4 | `preceding_leaf` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `whitespace` ← `append` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.5% |  30.0ms |       3 | `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.5% |  30.0ms |       3 | `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `convert` ← `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.5% |  30.0ms |       3 | `append` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.5% |  30.0ms |       3 | `type_repr` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str` |
| 1.5% |  30.0ms |       3 | `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.5% |  30.0ms |       3 | `is_split_before_delimiter` (`/venv/lib/python3.11/site-packages/black/brackets.py`) ← `mark` ← `append` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_STRING` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.0% |  20.0ms |       2 | `pre_order` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `pre_order` ← `pre_order` ← `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.0% |  20.0ms |       2 | `leaves` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `leaves` ← `leaves` ← `leaves` ← `leaves` ← `leaves` ← `leaves` ← `leaves` ← `leaves` ← `leaves` ← `convert_one_fmt_off_pair` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `normalize_fmt_off` ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

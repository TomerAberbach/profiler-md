# Sampling profile

Took 1.90s over 190 samples (10.0ms per sample).

| Category         |     % |   Time | Samples |
| ---------------- | ----: | -----: | ------: |
| Third-party      | 89.5% |  1.70s |     170 |
| Standard library |  4.2% | 80.0ms |       8 |
| Unknown          |  3.7% | 70.0ms |       7 |
| Ours             |  2.6% | 50.0ms |       5 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                     | Location                                                        |
| ---: | ------: | ------: | ---------------------------- | --------------------------------------------------------------- |
| 7.9% | 150.0ms |      15 | `generate_tokens`            | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| 6.8% | 130.0ms |      13 | `generate_comments`          | `/venv/lib/python3.11/site-packages/black/comments.py`          |
| 6.3% | 120.0ms |      12 | `_addtoken`                  | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 4.7% |  90.0ms |       9 | `visit_default`              | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| 4.2% |  80.0ms |       8 | `visit`                      | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
| 3.7% |  70.0ms |       7 | `__init__`                   | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 3.7% |  70.0ms |       7 | `mark`                       | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
| 3.7% |  70.0ms |       7 | `parse`                      | `/usr/lib/python3.11/ast.py`                                    |
| 3.7% |  70.0ms |       7 | `(anonymous)`                | `<unknown>`                                                     |
| 3.2% |  60.0ms |       6 | `push`                       | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 3.2% |  60.0ms |       6 | `__next__`                   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`   |
| 3.2% |  60.0ms |       6 | `convert`                    | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 2.6% |  50.0ms |       5 | `pop`                        | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 2.6% |  50.0ms |       5 | `normalize_trailing_prefix`  | `/venv/lib/python3.11/site-packages/black/comments.py`          |
| 2.6% |  50.0ms |       5 | `normalize_invisible_parens` | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| 2.6% |  50.0ms |       5 | `__init__`                   | `<string>`                                                      |
| 2.1% |  40.0ms |       4 | `__new__`                    | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 2.1% |  40.0ms |       4 | `changed`                    | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 2.1% |  40.0ms |       4 | `prefix`                     | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 2.1% |  40.0ms |       4 | `<genexpr>`                  | `/venv/lib/python3.11/site-packages/black/lines.py`             |

#### Categories

##### Third-party

|    % |    Time | Samples | Function                         | Location                                                        |
| ---: | ------: | ------: | -------------------------------- | --------------------------------------------------------------- |
| 7.9% | 150.0ms |      15 | `generate_tokens`                | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| 6.8% | 130.0ms |      13 | `generate_comments`              | `/venv/lib/python3.11/site-packages/black/comments.py`          |
| 6.3% | 120.0ms |      12 | `_addtoken`                      | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 4.7% |  90.0ms |       9 | `visit_default`                  | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| 4.2% |  80.0ms |       8 | `visit`                          | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
| 3.7% |  70.0ms |       7 | `__init__`                       | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 3.7% |  70.0ms |       7 | `mark`                           | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
| 3.2% |  60.0ms |       6 | `push`                           | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 3.2% |  60.0ms |       6 | `__next__`                       | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`   |
| 3.2% |  60.0ms |       6 | `convert`                        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 2.6% |  50.0ms |       5 | `pop`                            | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 2.6% |  50.0ms |       5 | `normalize_trailing_prefix`      | `/venv/lib/python3.11/site-packages/black/comments.py`          |
| 2.6% |  50.0ms |       5 | `normalize_invisible_parens`     | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| 2.1% |  40.0ms |       4 | `__new__`                        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 2.1% |  40.0ms |       4 | `changed`                        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 2.1% |  40.0ms |       4 | `prefix`                         | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 2.1% |  40.0ms |       4 | `<genexpr>`                      | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| 2.1% |  40.0ms |       4 | `_stringify_ast`                 | `/venv/lib/python3.11/site-packages/black/parsing.py`           |
| 2.1% |  40.0ms |       4 | `_stringify_ast_with_new_parent` | `/venv/lib/python3.11/site-packages/black/parsing.py`           |
| 1.6% |  30.0ms |       3 | `parse_tokens`                   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`   |

##### Standard library

|    % |   Time | Samples | Function            | Location                                 |
| ---: | -----: | ------: | ------------------- | ---------------------------------------- |
| 3.7% | 70.0ms |       7 | `parse`             | `/usr/lib/python3.11/ast.py`             |
| 0.5% | 10.0ms |       1 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>` |

##### Unknown

|    % |   Time | Samples | Function      | Location    |
| ---: | -----: | ------: | ------------- | ----------- |
| 3.7% | 70.0ms |       7 | `(anonymous)` | `<unknown>` |

##### Ours

|    % |   Time | Samples | Function   | Location   |
| ---: | -----: | ------: | ---------- | ---------- |
| 2.6% | 50.0ms |       5 | `__init__` | `<string>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|     % |   Time | Samples | Location                                                            |
| ----: | -----: | ------: | ------------------------------------------------------------------- |
| 60.0% | 90.0ms |       9 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:875` |
| 20.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:624` |
|  6.7% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:748` |
|  6.7% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:749` |
|  6.7% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:719` |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|     % |   Time | Samples | Location                                                  |
| ----: | -----: | ------: | --------------------------------------------------------- |
| 61.5% | 80.0ms |       8 | `/venv/lib/python3.11/site-packages/black/comments.py:72` |
| 23.1% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/comments.py:76` |
| 15.4% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/comments.py:52` |

##### `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|     % |   Time | Samples | Location                                                         |
| ----: | -----: | ------: | ---------------------------------------------------------------- |
| 16.7% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:328` |
| 16.7% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:303` |
| 16.7% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:297` |
| 16.7% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:301` |
| 16.7% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:298` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|     % |   Time | Samples | Location                                                  |
| ----: | -----: | ------: | --------------------------------------------------------- |
| 66.7% | 60.0ms |       6 | `/venv/lib/python3.11/site-packages/black/linegen.py:158` |
| 22.2% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/linegen.py:157` |
| 11.1% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/linegen.py:134` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|     % |   Time | Samples | Location                                                |
| ----: | -----: | ------: | ------------------------------------------------------- |
| 50.0% | 40.0ms |       4 | `/venv/lib/python3.11/site-packages/black/nodes.py:181` |
| 25.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/nodes.py:185` |
| 25.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/nodes.py:163` |

##### `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Location                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------- |
| 71.4% | 50.0ms |       5 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:266` |
| 14.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:424` |
| 14.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:417` |

##### `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

|     % |   Time | Samples | Location                                                   |
| ----: | -----: | ------: | ---------------------------------------------------------- |
| 42.9% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/brackets.py:112` |
| 28.6% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/brackets.py:128` |
| 14.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/brackets.py:122` |
| 14.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/brackets.py:92`  |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |   Time | Samples | Location                        |
| -----: | -----: | ------: | ------------------------------- |
| 100.0% | 70.0ms |       7 | `/usr/lib/python3.11/ast.py:50` |

##### `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|     % |   Time | Samples | Location                                                         |
| ----: | -----: | ------: | ---------------------------------------------------------------- |
| 33.3% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:395` |
| 33.3% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:393` |
| 16.7% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:388` |
| 16.7% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:394` |

##### `__next__` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|     % |   Time | Samples | Location                                                         |
| ----: | -----: | ------: | ---------------------------------------------------------------- |
| 83.3% | 50.0ms |       5 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py:93` |
| 16.7% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py:84` |

##### `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Location                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------- |
| 33.3% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:503` |
| 33.3% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:495` |
| 33.3% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:499` |

##### `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|     % |   Time | Samples | Location                                                         |
| ----: | -----: | ------: | ---------------------------------------------------------------- |
| 40.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:403` |
| 20.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:407` |
| 20.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:404` |
| 20.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:408` |

##### `normalize_trailing_prefix` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|     % |   Time | Samples | Location                                                   |
| ----: | -----: | ------: | ---------------------------------------------------------- |
| 60.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/comments.py:134` |
| 20.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/comments.py:136` |
| 20.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/comments.py:135` |

##### `normalize_invisible_parens` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|     % |   Time | Samples | Location                                                   |
| ----: | -----: | ------: | ---------------------------------------------------------- |
| 20.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/linegen.py:1432` |
| 20.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/linegen.py:1436` |
| 20.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/linegen.py:1351` |
| 20.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/linegen.py:1354` |
| 20.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/linegen.py:1339` |

##### `__init__` (`<string>`)

|      % |   Time | Samples | Location     |
| -----: | -----: | ------: | ------------ |
| 100.0% | 50.0ms |       5 | `<string>:7` |

##### `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Location                                                   |
| ----: | -----: | ------: | ---------------------------------------------------------- |
| 50.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:83` |
| 50.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:81` |

##### `changed` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Location                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------- |
| 50.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:175` |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:176` |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:174` |

##### `prefix` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Location                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------- |
| 75.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:473` |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:332` |

##### `<genexpr>` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|      % |   Time | Samples | Location                                                |
| -----: | -----: | ------: | ------------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `/venv/lib/python3.11/site-packages/black/lines.py:456` |

##### `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|     % |   Time | Samples | Location                                                  |
| ----: | -----: | ------: | --------------------------------------------------------- |
| 50.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/parsing.py:185` |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/parsing.py:244` |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/parsing.py:187` |

##### `_stringify_ast_with_new_parent` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|     % |   Time | Samples | Location                                                  |
| ----: | -----: | ------: | --------------------------------------------------------- |
| 75.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/parsing.py:169` |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/parsing.py:170` |

##### `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|     % |   Time | Samples | Location                                                          |
| ----: | -----: | ------: | ----------------------------------------------------------------- |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py:167` |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py:149` |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py:162` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % |   Time | Samples | Location                                     |
| -----: | -----: | ------: | -------------------------------------------- |
| 100.0% | 10.0ms |       1 | `<frozen importlib._bootstrap_external>:729` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|     % |    Time | Samples | Caller     | Location                                                      |
| ----: | ------: | ------: | ---------- | ------------------------------------------------------------- |
| 93.3% | 140.0ms |      14 | `__next__` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
|  6.7% |  10.0ms |       1 | `gettoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/pgen.py`   |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|      % |    Time | Samples | Caller          | Location                                              |
| -----: | ------: | ------: | --------------- | ----------------------------------------------------- |
| 100.0% | 130.0ms |      13 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |    Time | Samples | Caller     | Location                                                     |
| -----: | ------: | ------: | ---------- | ------------------------------------------------------------ |
| 100.0% | 120.0ms |      12 | `addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|     % |   Time | Samples | Caller         | Location                                              |
| ----: | -----: | ------: | -------------- | ----------------------------------------------------- |
| 77.8% | 70.0ms |       7 | `visit`        | `/venv/lib/python3.11/site-packages/black/nodes.py`   |
| 22.2% | 20.0ms |       2 | `visit_NUMBER` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |   Time | Samples | Caller          | Location                                            |
| -----: | -----: | ------: | --------------- | --------------------------------------------------- |
| 100.0% | 80.0ms |       8 | `visit_default` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Caller    | Location                                                |
| -----: | -----: | ------: | --------- | ------------------------------------------------------- |
| 100.0% | 70.0ms |       7 | `convert` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

|      % |   Time | Samples | Caller   | Location                                            |
| -----: | -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% | 70.0ms |       7 | `append` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |   Time | Samples | Caller                  | Location                                              |
| -----: | -----: | ------: | ----------------------- | ----------------------------------------------------- |
| 100.0% | 70.0ms |       7 | `_parse_single_version` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |   Time | Samples | Caller      | Location                                                     |
| -----: | -----: | ------: | ----------- | ------------------------------------------------------------ |
| 100.0% | 60.0ms |       6 | `_addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `__next__` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|      % |   Time | Samples | Caller         | Location                                                      |
| -----: | -----: | ------: | -------------- | ------------------------------------------------------------- |
| 100.0% | 60.0ms |       6 | `parse_tokens` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Caller  | Location                                                     |
| ----: | -----: | ------: | ------- | ------------------------------------------------------------ |
| 66.7% | 40.0ms |       4 | `pop`   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |
| 33.3% | 20.0ms |       2 | `shift` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |   Time | Samples | Caller      | Location                                                     |
| -----: | -----: | ------: | ----------- | ------------------------------------------------------------ |
| 100.0% | 50.0ms |       5 | `_addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `normalize_trailing_prefix` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|      % |   Time | Samples | Caller              | Location                                               |
| -----: | -----: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 50.0ms |       5 | `generate_comments` | `/venv/lib/python3.11/site-packages/black/comments.py` |

##### `normalize_invisible_parens` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |   Time | Samples | Caller       | Location                                              |
| -----: | -----: | ------: | ------------ | ----------------------------------------------------- |
| 100.0% | 50.0ms |       5 | `visit_stmt` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `__init__` (`<string>`)

|     % |   Time | Samples | Caller                     | Location                                              |
| ----: | -----: | ------: | -------------------------- | ----------------------------------------------------- |
| 60.0% | 30.0ms |       3 | `maybe_empty_lines`        | `/venv/lib/python3.11/site-packages/black/lines.py`   |
| 40.0% | 20.0ms |       2 | `bracket_split_build_line` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Caller                | Location                                                |
| ----: | -----: | ------: | --------------------- | ------------------------------------------------------- |
| 50.0% | 20.0ms |       2 | `convert`             | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |
| 50.0% | 20.0ms |       2 | `wrap_in_parentheses` | `/venv/lib/python3.11/site-packages/black/nodes.py`     |

##### `changed` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Caller    | Location                                                |
| ----: | -----: | ------: | --------- | ------------------------------------------------------- |
| 50.0% | 20.0ms |       2 | `changed` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |
| 50.0% | 20.0ms |       2 | `prefix`  | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `prefix` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Caller                | Location                                               |
| ----: | -----: | ------: | --------------------- | ------------------------------------------------------ |
| 50.0% | 20.0ms |       2 | `_maybe_empty_lines`  | `/venv/lib/python3.11/site-packages/black/lines.py`    |
| 25.0% | 10.0ms |       1 | `wrap_in_parentheses` | `/venv/lib/python3.11/site-packages/black/nodes.py`    |
| 25.0% | 10.0ms |       1 | `generate_comments`   | `/venv/lib/python3.11/site-packages/black/comments.py` |

##### `<genexpr>` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|      % |   Time | Samples | Caller                 | Location                                            |
| -----: | -----: | ------: | ---------------------- | --------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `is_complex_subscript` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|      % |   Time | Samples | Caller                           | Location                                              |
| -----: | -----: | ------: | -------------------------------- | ----------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `_stringify_ast_with_new_parent` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `_stringify_ast_with_new_parent` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|      % |   Time | Samples | Caller           | Location                                              |
| -----: | -----: | ------: | ---------------- | ----------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `_stringify_ast` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|      % |   Time | Samples | Caller         | Location                                                      |
| -----: | -----: | ------: | -------------- | ------------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `parse_string` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % |   Time | Samples | Caller     | Location                                 |
| -----: | -----: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 10.0ms |       1 | `get_code` | `<frozen importlib._bootstrap_external>` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function               | Location                                                 |
| ----: | ------: | ------: | ---------------------- | -------------------------------------------------------- |
| 96.3% |   1.83s |     183 | `_run_module_as_main`  | `<frozen runpy>`                                         |
| 94.2% |   1.79s |     179 | `format_file_contents` | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 94.2% |   1.79s |     179 | `format_file_in_place` | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 94.2% |   1.79s |     179 | `reformat_one`         | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 94.2% |   1.79s |     179 | `main`                 | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 94.2% |   1.79s |     179 | `new_func`             | `/venv/lib/python3.11/site-packages/click/decorators.py` |
| 94.2% |   1.79s |     179 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py`       |
| 94.2% |   1.79s |     179 | `main`                 | `/venv/lib/python3.11/site-packages/click/core.py`       |
| 94.2% |   1.79s |     179 | `__call__`             | `/venv/lib/python3.11/site-packages/click/core.py`       |
| 94.2% |   1.79s |     179 | `patched_main`         | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 94.2% |   1.79s |     179 | `<module>`             | `/venv/lib/python3.11/site-packages/black/__main__.py`   |
| 94.2% |   1.79s |     179 | `_run_code`            | `<frozen runpy>`                                         |
| 85.8% |   1.63s |     163 | `_format_str_once`     | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 63.2% |   1.20s |     120 | `format_str`           | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 40.5% | 770.0ms |      77 | `visit_default`        | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
| 40.5% | 770.0ms |      77 | `visit`                | `/venv/lib/python3.11/site-packages/black/nodes.py`      |
| 40.5% | 770.0ms |      77 | `visit_default`        | `/venv/lib/python3.11/site-packages/black/nodes.py`      |
| 38.9% | 740.0ms |      74 | `visit_stmt`           | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
| 37.9% | 720.0ms |      72 | `visit_funcdef`        | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
| 36.8% | 700.0ms |      70 | `visit_suite`          | `/venv/lib/python3.11/site-packages/black/linegen.py`    |

#### Categories

##### Third-party

|     % |    Time | Samples | Function               | Location                                                      |
| ----: | ------: | ------: | ---------------------- | ------------------------------------------------------------- |
| 94.2% |   1.79s |     179 | `format_file_contents` | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 94.2% |   1.79s |     179 | `format_file_in_place` | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 94.2% |   1.79s |     179 | `reformat_one`         | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 94.2% |   1.79s |     179 | `main`                 | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 94.2% |   1.79s |     179 | `new_func`             | `/venv/lib/python3.11/site-packages/click/decorators.py`      |
| 94.2% |   1.79s |     179 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 94.2% |   1.79s |     179 | `main`                 | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 94.2% |   1.79s |     179 | `__call__`             | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 94.2% |   1.79s |     179 | `patched_main`         | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 94.2% |   1.79s |     179 | `<module>`             | `/venv/lib/python3.11/site-packages/black/__main__.py`        |
| 85.8% |   1.63s |     163 | `_format_str_once`     | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 63.2% |   1.20s |     120 | `format_str`           | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 40.5% | 770.0ms |      77 | `visit_default`        | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| 40.5% | 770.0ms |      77 | `visit`                | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
| 40.5% | 770.0ms |      77 | `visit_default`        | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
| 38.9% | 740.0ms |      74 | `visit_stmt`           | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| 37.9% | 720.0ms |      72 | `visit_funcdef`        | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| 36.8% | 700.0ms |      70 | `visit_suite`          | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| 33.7% | 640.0ms |      64 | `parse_tokens`         | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
| 33.7% | 640.0ms |      64 | `parse_string`         | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### Standard library

|     % |   Time | Samples | Function                    | Location                                 |
| ----: | -----: | ------: | --------------------------- | ---------------------------------------- |
| 96.3% |  1.83s |     183 | `_run_module_as_main`       | `<frozen runpy>`                         |
| 94.2% |  1.79s |     179 | `_run_code`                 | `<frozen runpy>`                         |
|  3.7% | 70.0ms |       7 | `parse`                     | `/usr/lib/python3.11/ast.py`             |
|  2.1% | 40.0ms |       4 | `exec_module`               | `<frozen importlib._bootstrap_external>` |
|  2.1% | 40.0ms |       4 | `_load_unlocked`            | `<frozen importlib._bootstrap>`          |
|  2.1% | 40.0ms |       4 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
|  2.1% | 40.0ms |       4 | `_find_and_load`            | `<frozen importlib._bootstrap>`          |
|  2.1% | 40.0ms |       4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  2.1% | 40.0ms |       4 | `_get_module_details`       | `<frozen runpy>`                         |
|  0.5% | 10.0ms |       1 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
|  0.5% | 10.0ms |       1 | `get_code`                  | `<frozen importlib._bootstrap_external>` |
|  0.5% | 10.0ms |       1 | `_handle_fromlist`          | `<frozen importlib._bootstrap>`          |

##### Unknown

|    % |   Time | Samples | Function      | Location    |
| ---: | -----: | ------: | ------------- | ----------- |
| 3.7% | 70.0ms |       7 | `(anonymous)` | `<unknown>` |

##### Ours

|    % |   Time | Samples | Function   | Location   |
| ---: | -----: | ------: | ---------- | ---------- |
| 2.6% | 50.0ms |       5 | `__init__` | `<string>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_module_as_main` (`<frozen runpy>`)

|     % |   Time | Samples | Callee                | Location         |
| ----: | -----: | ------: | --------------------- | ---------------- |
| 97.8% |  1.79s |     179 | `_run_code`           | `<frozen runpy>` |
|  2.2% | 40.0ms |       4 | `_get_module_details` | `<frozen runpy>` |

##### `format_file_contents` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |    Time | Samples | Callee                            | Location                                               |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------------------------ |
| 67.0% |   1.20s |     120 | `format_str`                      | `/venv/lib/python3.11/site-packages/black/__init__.py` |
| 33.0% | 590.0ms |      59 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `format_file_in_place` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 1.79s |     179 | `format_file_contents` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `reformat_one` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 1.79s |     179 | `format_file_in_place` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `main` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee         | Location                                               |
| -----: | ----: | ------: | -------------- | ------------------------------------------------------ |
| 100.0% | 1.79s |     179 | `reformat_one` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`)

|      % |  Time | Samples | Callee | Location                                               |
| -----: | ----: | ------: | ------ | ------------------------------------------------------ |
| 100.0% | 1.79s |     179 | `main` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |  Time | Samples | Callee     | Location                                                 |
| -----: | ----: | ------: | ---------- | -------------------------------------------------------- |
| 100.0% | 1.79s |     179 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py` |
| 100.0% | 1.79s |     179 | `invoke`   | `/venv/lib/python3.11/site-packages/click/core.py`       |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |  Time | Samples | Callee   | Location                                           |
| -----: | ----: | ------: | -------- | -------------------------------------------------- |
| 100.0% | 1.79s |     179 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |  Time | Samples | Callee | Location                                           |
| -----: | ----: | ------: | ------ | -------------------------------------------------- |
| 100.0% | 1.79s |     179 | `main` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee     | Location                                           |
| -----: | ----: | ------: | ---------- | -------------------------------------------------- |
| 100.0% | 1.79s |     179 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`)

|      % |  Time | Samples | Callee         | Location                                               |
| -----: | ----: | ------: | -------------- | ------------------------------------------------------ |
| 100.0% | 1.79s |     179 | `patched_main` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `_run_code` (`<frozen runpy>`)

|      % |  Time | Samples | Callee     | Location                                               |
| -----: | ----: | ------: | ---------- | ------------------------------------------------------ |
| 100.0% | 1.79s |     179 | `<module>` | `/venv/lib/python3.11/site-packages/black/__main__.py` |

##### `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |    Time | Samples | Callee                   | Location                                               |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------ |
| 47.2% | 770.0ms |      77 | `visit`                  | `/venv/lib/python3.11/site-packages/black/nodes.py`    |
| 39.3% | 640.0ms |      64 | `lib2to3_parse`          | `/venv/lib/python3.11/site-packages/black/parsing.py`  |
|  6.1% | 100.0ms |      10 | `transform_line`         | `/venv/lib/python3.11/site-packages/black/linegen.py`  |
|  3.7% |  60.0ms |       6 | `maybe_empty_lines`      | `/venv/lib/python3.11/site-packages/black/lines.py`    |
|  3.1% |  50.0ms |       5 | `detect_target_versions` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `format_str` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee             | Location                                               |
| -----: | ----: | ------: | ------------------ | ------------------------------------------------------ |
| 100.0% | 1.20s |     120 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Callee              | Location                                               |
| -----: | ------: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 770.0ms |      77 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/nodes.py`    |
|  27.3% | 210.0ms |      21 | `generate_comments` | `/venv/lib/python3.11/site-packages/black/comments.py` |
|  27.3% | 210.0ms |      21 | `append`            | `/venv/lib/python3.11/site-packages/black/lines.py`    |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |    Time | Samples | Callee              | Location                                              |
| -----: | ------: | ------: | ------------------- | ----------------------------------------------------- |
| 100.0% | 770.0ms |      77 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  96.1% | 740.0ms |      74 | `visit_stmt`        | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  93.5% | 720.0ms |      72 | `visit_funcdef`     | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  90.9% | 700.0ms |      70 | `visit_suite`       | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  61.0% | 470.0ms |      47 | `visit_simple_stmt` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |    Time | Samples | Callee  | Location                                            |
| -----: | ------: | ------: | ------- | --------------------------------------------------- |
| 100.0% | 770.0ms |      77 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Callee                       | Location                                              |
| -----: | ------: | ------: | ---------------------------- | ----------------------------------------------------- |
| 100.0% | 740.0ms |      74 | `visit`                      | `/venv/lib/python3.11/site-packages/black/nodes.py`   |
|  14.9% | 110.0ms |      11 | `normalize_invisible_parens` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Callee  | Location                                            |
| -----: | ------: | ------: | ------- | --------------------------------------------------- |
| 100.0% | 720.0ms |      72 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `visit_suite` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Callee          | Location                                              |
| -----: | ------: | ------: | --------------- | ----------------------------------------------------- |
| 100.0% | 700.0ms |      70 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|     % |    Time | Samples | Callee     | Location                                                      |
| ----: | ------: | ------: | ---------- | ------------------------------------------------------------- |
| 60.9% | 390.0ms |      39 | `addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`  |
| 34.4% | 220.0ms |      22 | `__next__` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `parse_string` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|      % |    Time | Samples | Callee         | Location                                                      |
| -----: | ------: | ------: | -------------- | ------------------------------------------------------------- |
| 100.0% | 640.0ms |      64 | `parse_tokens` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `exec_module` (`<frozen importlib._bootstrap_external>`)

|      % |   Time | Samples | Callee                      | Location                                 |
| -----: | -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% | 40.0ms |       4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  25.0% | 10.0ms |       1 | `get_code`                  | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Callee        | Location                                 |
| -----: | -----: | ------: | ------------- | ---------------------------------------- |
| 100.0% | 40.0ms |       4 | `exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Callee           | Location                        |
| -----: | -----: | ------: | ---------------- | ------------------------------- |
| 100.0% | 40.0ms |       4 | `_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Callee                    | Location                        |
| -----: | -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% | 40.0ms |       4 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Callee           | Location                                                      |
| -----: | -----: | ------: | ---------------- | ------------------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `<module>`       | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
| 100.0% | 40.0ms |       4 | `<module>`       | `/venv/lib/python3.11/site-packages/black/comments.py`        |
| 100.0% | 40.0ms |       4 | `<module>`       | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
|  25.0% | 10.0ms |       1 | `<module>`       | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
|  25.0% | 10.0ms |       1 | `_find_and_load` | `<frozen importlib._bootstrap>`                               |

##### `_get_module_details` (`<frozen runpy>`)

|      % |   Time | Samples | Callee                | Location                        |
| -----: | -----: | ------: | --------------------- | ------------------------------- |
| 100.0% | 40.0ms |       4 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% | 40.0ms |       4 | `_get_module_details` | `<frozen runpy>`                |

##### `get_code` (`<frozen importlib._bootstrap_external>`)

|      % |   Time | Samples | Callee              | Location                                 |
| -----: | -----: | ------: | ------------------- | ---------------------------------------- |
| 100.0% | 10.0ms |       1 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Callee                      | Location                        |
| -----: | -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% | 10.0ms |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `format_file_contents` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main`

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.7% | 90.0ms |       9 | `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 4.2% | 80.0ms |       8 | `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`) ← `__next__` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3.7% | 70.0ms |       7 | `parse` (`/usr/lib/python3.11/ast.py`) ← `_parse_single_version` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `parse_ast` ← `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 3.2% | 60.0ms |       6 | `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 3.2% | 60.0ms |       6 | `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`) ← `__next__` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 2.6% | 50.0ms |       5 | `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2.6% | 50.0ms |       5 | `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `convert` ← `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2.6% | 50.0ms |       5 | `__next__` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 2.1% | 40.0ms |       4 | `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.1% | 40.0ms |       4 | `normalize_invisible_parens` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2.1% | 40.0ms |       4 | `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2.1% | 40.0ms |       4 | `<genexpr>` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `is_complex_subscript` ← `append` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_NUMBER` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str` |
| 1.6% | 30.0ms |       3 | `__init__` (`<string>`) ← `maybe_empty_lines` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.6% | 30.0ms |       3 | `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.6% | 30.0ms |       3 | `_stringify_ast_with_new_parent` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.6% | 30.0ms |       3 | `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.6% | 30.0ms |       3 | `normalize_trailing_prefix` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `generate_comments` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.1% | 20.0ms |       2 | `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `shift` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.1% | 20.0ms |       2 | `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.1% | 20.0ms |       2 | `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `convert` ← `shift` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

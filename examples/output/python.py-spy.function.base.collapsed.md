# Sampling profile

Collected 219 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 95.9% |     210 |
| Unknown          |  3.7% |       8 |
| Standard library |  0.5% |       1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 211 samples (96.3%) _run_module_as_main at <frozen runpy>
│   ├── … 209 samples (95.4%) format_file_contents at black/__init__.py
│   │   ├── 125 samples (57.1%) format_str
│   │   │   └── 125 samples (57.1%) _format_str_once
│   │   │       ├── … 51 samples (23.3%, self 0.9%) parse_tokens at blib2to3/pgen2/driver.py
│   │   │       │   ├── 40 samples (18.3%) addtoken at blib2to3/pgen2/parse.py
│   │   │       │   │   └── 40 samples (18.3%, self 6.8%, self 12.8% globally) _addtoken
│   │   │       │   │       ├── 16 samples (7.3%, self 1.8%, self 2.7% globally) pop
│   │   │       │   │       │   └── 12 samples (5.5%, self 3.2% globally) convert at blib2to3/pytree.py
│   │   │       │   │       │       ├── 10 samples (4.6%, self 6.8% globally) __new__
│   │   │       │   │       │       └── 2 samples (0.9%) __init__
│   │   │       │   │       └── 8 samples (3.7%, self 1.4%) shift
│   │   │       │   │           └── 5 samples (2.3%) convert at blib2to3/pytree.py …
│   │   │       │   └── 9 samples (4.1%) __next__
│   │   │       │       └── 8 samples (3.7%, self 5.5% globally) generate_tokens at blib2to3/pgen2/tokenize.py
│   │   │       ├── 46 samples (21.0%, self 0.9%, self 1.8% globally) visit at black/nodes.py
│   │   │       │   ├── … 27 samples (12.3%) visit_default at black/linegen.py
│   │   │       │   │   ├── 16 samples (7.3%, self 3.7%, self 4.6% globally) generate_comments at black/comments.py
│   │   │       │   │   │   └── 8 samples (3.7%, self 2.3%, self 4.1% globally) normalize_trailing_prefix
│   │   │       │   │   │       └── 3 samples (1.4%) 2 more callees, led by (0.9%) prefix at blib2to3/pytree.py
│   │   │       │   │   └── 10 samples (4.6%) append at black/lines.py …
│   │   │       │   ├── … 9 samples (4.1%) visit_stmt at black/linegen.py
│   │   │       │   │   ├── 4 samples (1.8%) line
│   │   │       │   │   │   └── 4 samples (1.8%, self 2.7% globally) __init__ at <string>
│   │   │       │   │   └── 4 samples (1.8%) normalize_invisible_parens …
│   │   │       │   └── 8 samples (3.7%) 5 more callees, led by (1.8%) visit_STRING at black/linegen.py
│   │   │       ├── 9 samples (4.1%) detect_target_versions
│   │   │       │   └── 9 samples (4.1%, self 2.3%, self 5.0% globally) get_features_used
│   │   │       │       └── 3 samples (1.4%) pre_order at blib2to3/pytree.py
│   │   │       └── 19 samples (8.7%) 4 more callees, led by (3.2%) transform_line at black/linegen.py
│   │   └── 84 samples (38.4%) check_stability_and_equivalence
│   │       ├── 55 samples (25.1%) assert_stable
│   │       │   └── 55 samples (25.1%) _format_str_once
│   │       │       └── 55 samples (25.1%) 6 more callees, led by (13.7%) lib2to3_parse at black/parsing.py
│   │       └── 29 samples (13.2%) assert_equivalent
│   │           ├── … 15 samples (6.8%) parse at ast.py
│   │           └── 13 samples (5.9%, self 3.7%) _stringify_ast at black/parsing.py
│   │               └── … 5 samples (2.3%) _stringify_ast_with_new_parent at black/parsing.py
│   └── 2 samples (0.9%) _get_module_details …
└── 8 samples (3.7%) (anonymous)
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                         | Location                     |
| ----: | ------: | -------------------------------- | ---------------------------- |
| 12.8% |      28 | `_addtoken`                      | `blib2to3/pgen2/parse.py`    |
|  6.8% |      15 | `parse`                          | `ast.py`                     |
|  6.8% |      15 | `__new__`                        | `blib2to3/pytree.py`         |
|  5.5% |      12 | `generate_tokens`                | `blib2to3/pgen2/tokenize.py` |
|  5.0% |      11 | `get_features_used`              | `black/__init__.py`          |
|  4.6% |      10 | `generate_comments`              | `black/comments.py`          |
|  4.1% |       9 | `normalize_trailing_prefix`      | `black/comments.py`          |
|  3.7% |       8 | `_stringify_ast`                 | `black/parsing.py`           |
|  3.7% |       8 | `(anonymous)`                    | `<unknown>`                  |
|  3.2% |       7 | `convert`                        | `blib2to3/pytree.py`         |
|  2.7% |       6 | `pop`                            | `blib2to3/pgen2/parse.py`    |
|  2.7% |       6 | `__init__`                       | `<string>`                   |
|  2.3% |       5 | `_stringify_ast_with_new_parent` | `black/parsing.py`           |
|  1.8% |       4 | `visit`                          | `black/nodes.py`             |
|  1.8% |       4 | `leaves`                         | `blib2to3/pytree.py`         |
|  1.8% |       4 | `__str__`                        | `blib2to3/pytree.py`         |
|  1.4% |       3 | `shift`                          | `blib2to3/pgen2/parse.py`    |
|  1.4% |       3 | `__init__`                       | `blib2to3/pytree.py`         |
|  1.4% |       3 | `pre_order`                      | `blib2to3/pytree.py`         |
|  1.4% |       3 | `push`                           | `blib2to3/pgen2/parse.py`    |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Ours

|     % | Samples | Function                         | Location                     |
| ----: | ------: | -------------------------------- | ---------------------------- |
| 12.8% |      28 | `_addtoken`                      | `blib2to3/pgen2/parse.py`    |
|  6.8% |      15 | `parse`                          | `ast.py`                     |
|  6.8% |      15 | `__new__`                        | `blib2to3/pytree.py`         |
|  5.5% |      12 | `generate_tokens`                | `blib2to3/pgen2/tokenize.py` |
|  5.0% |      11 | `get_features_used`              | `black/__init__.py`          |
|  4.6% |      10 | `generate_comments`              | `black/comments.py`          |
|  4.1% |       9 | `normalize_trailing_prefix`      | `black/comments.py`          |
|  3.7% |       8 | `_stringify_ast`                 | `black/parsing.py`           |
|  3.2% |       7 | `convert`                        | `blib2to3/pytree.py`         |
|  2.7% |       6 | `pop`                            | `blib2to3/pgen2/parse.py`    |
|  2.7% |       6 | `__init__`                       | `<string>`                   |
|  2.3% |       5 | `_stringify_ast_with_new_parent` | `black/parsing.py`           |
|  1.8% |       4 | `visit`                          | `black/nodes.py`             |
|  1.8% |       4 | `leaves`                         | `blib2to3/pytree.py`         |
|  1.8% |       4 | `__str__`                        | `blib2to3/pytree.py`         |
|  1.4% |       3 | `shift`                          | `blib2to3/pgen2/parse.py`    |
|  1.4% |       3 | `__init__`                       | `blib2to3/pytree.py`         |
|  1.4% |       3 | `pre_order`                      | `blib2to3/pytree.py`         |
|  1.4% |       3 | `push`                           | `blib2to3/pgen2/parse.py`    |
|  0.9% |       2 | `parse_tokens`                   | `blib2to3/pgen2/driver.py`   |

##### Unknown

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 3.7% |       8 | `(anonymous)` | `<unknown>` |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Location                      |
| -----: | ------: | ----------------------------- |
| 100.0% |      28 | `blib2to3/pgen2/parse.py:290` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      15 | `ast.py:33` |

##### `__new__` (`blib2to3/pytree.py`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      15 | `blib2to3/pytree.py:81` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|      % | Samples | Location                         |
| -----: | ------: | -------------------------------- |
| 100.0% |      12 | `blib2to3/pgen2/tokenize.py:565` |

##### `get_features_used` (`black/__init__.py`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |      11 | `black/__init__.py:1307` |

##### `generate_comments` (`black/comments.py`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |      10 | `black/comments.py:52` |

##### `normalize_trailing_prefix` (`black/comments.py`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       9 | `black/comments.py:127` |

##### `_stringify_ast` (`black/parsing.py`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       8 | `black/parsing.py:174` |

##### `convert` (`blib2to3/pytree.py`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       7 | `blib2to3/pytree.py:486` |

##### `pop` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Location                      |
| -----: | ------: | ----------------------------- |
| 100.0% |       6 | `blib2to3/pgen2/parse.py:398` |

##### `__init__` (`<string>`)

|      % | Samples | Location     |
| -----: | ------: | ------------ |
| 100.0% |       6 | `<string>:2` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       5 | `black/parsing.py:166` |

##### `visit` (`black/nodes.py`)

|      % | Samples | Location             |
| -----: | ------: | -------------------- |
| 100.0% |       4 | `black/nodes.py:163` |

##### `leaves` (`blib2to3/pytree.py`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       4 | `blib2to3/pytree.py:221` |

##### `__str__` (`blib2to3/pytree.py`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       4 | `blib2to3/pytree.py:440` |

##### `shift` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Location                      |
| -----: | ------: | ----------------------------- |
| 100.0% |       3 | `blib2to3/pgen2/parse.py:373` |

##### `__init__` (`blib2to3/pytree.py`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       3 | `blib2to3/pytree.py:248` |

##### `pre_order` (`blib2to3/pytree.py`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       3 | `blib2to3/pytree.py:314` |

##### `push` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Location                      |
| -----: | ------: | ----------------------------- |
| 100.0% |       3 | `blib2to3/pgen2/parse.py:386` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|      % | Samples | Location                       |
| -----: | ------: | ------------------------------ |
| 100.0% |       2 | `blib2to3/pgen2/driver.py:114` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller     | Location                  |
| -----: | ------: | ---------- | ------------------------- |
| 100.0% |      28 | `addtoken` | `blib2to3/pgen2/parse.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location           |
| -----: | ------: | ----------------------- | ------------------ |
| 100.0% |      15 | `_parse_single_version` | `black/parsing.py` |

##### `__new__` (`blib2to3/pytree.py`)

|      % | Samples | Caller    | Location             |
| -----: | ------: | --------- | -------------------- |
| 100.0% |      15 | `convert` | `blib2to3/pytree.py` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|      % | Samples | Caller     | Location                   |
| -----: | ------: | ---------- | -------------------------- |
| 100.0% |      12 | `__next__` | `blib2to3/pgen2/driver.py` |

##### `get_features_used` (`black/__init__.py`)

|      % | Samples | Caller                   | Location            |
| -----: | ------: | ------------------------ | ------------------- |
| 100.0% |      11 | `detect_target_versions` | `black/__init__.py` |

##### `generate_comments` (`black/comments.py`)

|      % | Samples | Caller          | Location           |
| -----: | ------: | --------------- | ------------------ |
| 100.0% |      10 | `visit_default` | `black/linegen.py` |

##### `normalize_trailing_prefix` (`black/comments.py`)

|      % | Samples | Caller              | Location            |
| -----: | ------: | ------------------- | ------------------- |
| 100.0% |       9 | `generate_comments` | `black/comments.py` |

##### `_stringify_ast` (`black/parsing.py`)

|      % | Samples | Caller                           | Location           |
| -----: | ------: | -------------------------------- | ------------------ |
| 100.0% |       8 | `_stringify_ast_with_new_parent` | `black/parsing.py` |

##### `convert` (`blib2to3/pytree.py`)

|     % | Samples | Caller  | Location                  |
| ----: | ------: | ------- | ------------------------- |
| 85.7% |       6 | `shift` | `blib2to3/pgen2/parse.py` |
| 14.3% |       1 | `pop`   | `blib2to3/pgen2/parse.py` |

##### `pop` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller      | Location                  |
| -----: | ------: | ----------- | ------------------------- |
| 100.0% |       6 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `__init__` (`<string>`)

|     % | Samples | Caller     | Location           |
| ----: | ------: | ---------- | ------------------ |
| 83.3% |       5 | `__init__` | `<string>`         |
| 16.7% |       1 | `line`     | `black/linegen.py` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py`)

|      % | Samples | Caller           | Location           |
| -----: | ------: | ---------------- | ------------------ |
| 100.0% |       5 | `_stringify_ast` | `black/parsing.py` |

##### `visit` (`black/nodes.py`)

|      % | Samples | Caller          | Location         |
| -----: | ------: | --------------- | ---------------- |
| 100.0% |       4 | `visit_default` | `black/nodes.py` |

##### `leaves` (`blib2to3/pytree.py`)

|      % | Samples | Caller   | Location             |
| -----: | ------: | -------- | -------------------- |
| 100.0% |       4 | `leaves` | `blib2to3/pytree.py` |

##### `__str__` (`blib2to3/pytree.py`)

|      % | Samples | Caller    | Location         |
| -----: | ------: | --------- | ---------------- |
| 100.0% |       4 | `__str__` | `black/lines.py` |

##### `shift` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller      | Location                  |
| -----: | ------: | ----------- | ------------------------- |
| 100.0% |       3 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `__init__` (`blib2to3/pytree.py`)

|     % | Samples | Caller                | Location             |
| ----: | ------: | --------------------- | -------------------- |
| 66.7% |       2 | `convert`             | `blib2to3/pytree.py` |
| 33.3% |       1 | `wrap_in_parentheses` | `black/nodes.py`     |

##### `pre_order` (`blib2to3/pytree.py`)

|      % | Samples | Caller      | Location             |
| -----: | ------: | ----------- | -------------------- |
| 100.0% |       3 | `pre_order` | `blib2to3/pytree.py` |

##### `push` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller      | Location                  |
| -----: | ------: | ----------- | ------------------------- |
| 100.0% |       3 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|      % | Samples | Caller         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |       2 | `parse_string` | `blib2to3/pgen2/driver.py` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                          | Location                   |
| ----: | ------: | --------------------------------- | -------------------------- |
| 96.3% |     211 | `_run_module_as_main`             | `<frozen runpy>`           |
| 95.4% |     209 | `format_file_contents`            | `black/__init__.py`        |
| 95.4% |     209 | `format_file_in_place`            | `black/__init__.py`        |
| 95.4% |     209 | `reformat_one`                    | `black/__init__.py`        |
| 95.4% |     209 | `main`                            | `black/__init__.py`        |
| 95.4% |     209 | `new_func`                        | `click/decorators.py`      |
| 95.4% |     209 | `invoke`                          | `click/core.py`            |
| 95.4% |     209 | `main`                            | `click/core.py`            |
| 95.4% |     209 | `__call__`                        | `click/core.py`            |
| 95.4% |     209 | `patched_main`                    | `black/__init__.py`        |
| 95.4% |     209 | `<module>`                        | `black/__main__.py`        |
| 95.4% |     209 | `_run_code`                       | `<frozen runpy>`           |
| 82.2% |     180 | `_format_str_once`                | `black/__init__.py`        |
| 57.1% |     125 | `format_str`                      | `black/__init__.py`        |
| 38.4% |      84 | `check_stability_and_equivalence` | `black/__init__.py`        |
| 37.0% |      81 | `parse_tokens`                    | `blib2to3/pgen2/driver.py` |
| 37.0% |      81 | `parse_string`                    | `blib2to3/pgen2/driver.py` |
| 37.0% |      81 | `lib2to3_parse`                   | `black/parsing.py`         |
| 29.2% |      64 | `_addtoken`                       | `blib2to3/pgen2/parse.py`  |
| 29.2% |      64 | `addtoken`                        | `blib2to3/pgen2/parse.py`  |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Ours

|     % | Samples | Function                          | Location                   |
| ----: | ------: | --------------------------------- | -------------------------- |
| 95.4% |     209 | `format_file_contents`            | `black/__init__.py`        |
| 95.4% |     209 | `format_file_in_place`            | `black/__init__.py`        |
| 95.4% |     209 | `reformat_one`                    | `black/__init__.py`        |
| 95.4% |     209 | `main`                            | `black/__init__.py`        |
| 95.4% |     209 | `new_func`                        | `click/decorators.py`      |
| 95.4% |     209 | `invoke`                          | `click/core.py`            |
| 95.4% |     209 | `main`                            | `click/core.py`            |
| 95.4% |     209 | `__call__`                        | `click/core.py`            |
| 95.4% |     209 | `patched_main`                    | `black/__init__.py`        |
| 95.4% |     209 | `<module>`                        | `black/__main__.py`        |
| 82.2% |     180 | `_format_str_once`                | `black/__init__.py`        |
| 57.1% |     125 | `format_str`                      | `black/__init__.py`        |
| 38.4% |      84 | `check_stability_and_equivalence` | `black/__init__.py`        |
| 37.0% |      81 | `parse_tokens`                    | `blib2to3/pgen2/driver.py` |
| 37.0% |      81 | `parse_string`                    | `blib2to3/pgen2/driver.py` |
| 37.0% |      81 | `lib2to3_parse`                   | `black/parsing.py`         |
| 29.2% |      64 | `_addtoken`                       | `blib2to3/pgen2/parse.py`  |
| 29.2% |      64 | `addtoken`                        | `blib2to3/pgen2/parse.py`  |
| 27.4% |      60 | `visit`                           | `black/nodes.py`           |
| 27.4% |      60 | `visit_default`                   | `black/nodes.py`           |

##### Unknown

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 3.7% |       8 | `(anonymous)` | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `format_file_contents` (`black/__init__.py`)

|      % | Samples | Caller                 | Location            |
| -----: | ------: | ---------------------- | ------------------- |
| 100.0% |     209 | `format_file_in_place` | `black/__init__.py` |

##### `format_file_in_place` (`black/__init__.py`)

|      % | Samples | Caller         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     209 | `reformat_one` | `black/__init__.py` |

##### `reformat_one` (`black/__init__.py`)

|      % | Samples | Caller | Location            |
| -----: | ------: | ------ | ------------------- |
| 100.0% |     209 | `main` | `black/__init__.py` |

##### `main` (`black/__init__.py`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |     209 | `new_func` | `click/decorators.py` |

##### `new_func` (`click/decorators.py`)

|      % | Samples | Caller   | Location        |
| -----: | ------: | -------- | --------------- |
| 100.0% |     209 | `invoke` | `click/core.py` |

##### `invoke` (`click/core.py`)

|      % | Samples | Caller   | Location        |
| -----: | ------: | -------- | --------------- |
| 100.0% |     209 | `invoke` | `click/core.py` |
| 100.0% |     209 | `main`   | `click/core.py` |

##### `main` (`click/core.py`)

|      % | Samples | Caller     | Location        |
| -----: | ------: | ---------- | --------------- |
| 100.0% |     209 | `__call__` | `click/core.py` |

##### `__call__` (`click/core.py`)

|      % | Samples | Caller         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     209 | `patched_main` | `black/__init__.py` |

##### `patched_main` (`black/__init__.py`)

|      % | Samples | Caller     | Location            |
| -----: | ------: | ---------- | ------------------- |
| 100.0% |     209 | `<module>` | `black/__main__.py` |

##### `<module>` (`black/__main__.py`)

|      % | Samples | Caller      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     209 | `_run_code` | `<frozen runpy>` |

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Caller                | Location         |
| -----: | ------: | --------------------- | ---------------- |
| 100.0% |     209 | `_run_module_as_main` | `<frozen runpy>` |

##### `_format_str_once` (`black/__init__.py`)

|     % | Samples | Caller          | Location            |
| ----: | ------: | --------------- | ------------------- |
| 69.4% |     125 | `format_str`    | `black/__init__.py` |
| 30.6% |      55 | `assert_stable` | `black/__init__.py` |

##### `format_str` (`black/__init__.py`)

|      % | Samples | Caller                 | Location            |
| -----: | ------: | ---------------------- | ------------------- |
| 100.0% |     125 | `format_file_contents` | `black/__init__.py` |

##### `check_stability_and_equivalence` (`black/__init__.py`)

|      % | Samples | Caller                 | Location            |
| -----: | ------: | ---------------------- | ------------------- |
| 100.0% |      84 | `format_file_contents` | `black/__init__.py` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|      % | Samples | Caller         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |      81 | `parse_string` | `blib2to3/pgen2/driver.py` |

##### `parse_string` (`blib2to3/pgen2/driver.py`)

|      % | Samples | Caller          | Location           |
| -----: | ------: | --------------- | ------------------ |
| 100.0% |      81 | `lib2to3_parse` | `black/parsing.py` |

##### `lib2to3_parse` (`black/parsing.py`)

|      % | Samples | Caller             | Location            |
| -----: | ------: | ------------------ | ------------------- |
| 100.0% |      81 | `_format_str_once` | `black/__init__.py` |

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller     | Location                  |
| -----: | ------: | ---------- | ------------------------- |
| 100.0% |      64 | `addtoken` | `blib2to3/pgen2/parse.py` |

##### `addtoken` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |      64 | `parse_tokens` | `blib2to3/pgen2/driver.py` |

##### `visit` (`black/nodes.py`)

|      % | Samples | Caller             | Location            |
| -----: | ------: | ------------------ | ------------------- |
| 100.0% |      60 | `visit_default`    | `black/nodes.py`    |
| 100.0% |      60 | `_format_str_once` | `black/__init__.py` |
|  96.7% |      58 | `visit_stmt`       | `black/linegen.py`  |
|  95.0% |      57 | `visit_funcdef`    | `black/linegen.py`  |

##### `visit_default` (`black/nodes.py`)

|      % | Samples | Caller          | Location           |
| -----: | ------: | --------------- | ------------------ |
| 100.0% |      60 | `visit_default` | `black/linegen.py` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_run_module_as_main` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 99.1% |     209 | `_run_code`           | `<frozen runpy>` |
|  0.9% |       2 | `_get_module_details` | `<frozen runpy>` |

##### `format_file_contents` (`black/__init__.py`)

|     % | Samples | Callee                            | Location            |
| ----: | ------: | --------------------------------- | ------------------- |
| 59.8% |     125 | `format_str`                      | `black/__init__.py` |
| 40.2% |      84 | `check_stability_and_equivalence` | `black/__init__.py` |

##### `format_file_in_place` (`black/__init__.py`)

|      % | Samples | Callee                 | Location            |
| -----: | ------: | ---------------------- | ------------------- |
| 100.0% |     209 | `format_file_contents` | `black/__init__.py` |

##### `reformat_one` (`black/__init__.py`)

|      % | Samples | Callee                 | Location            |
| -----: | ------: | ---------------------- | ------------------- |
| 100.0% |     209 | `format_file_in_place` | `black/__init__.py` |

##### `main` (`black/__init__.py`)

|      % | Samples | Callee         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     209 | `reformat_one` | `black/__init__.py` |

##### `new_func` (`click/decorators.py`)

|      % | Samples | Callee | Location            |
| -----: | ------: | ------ | ------------------- |
| 100.0% |     209 | `main` | `black/__init__.py` |

##### `invoke` (`click/core.py`)

|      % | Samples | Callee     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |     209 | `new_func` | `click/decorators.py` |
| 100.0% |     209 | `invoke`   | `click/core.py`       |

##### `main` (`click/core.py`)

|      % | Samples | Callee   | Location        |
| -----: | ------: | -------- | --------------- |
| 100.0% |     209 | `invoke` | `click/core.py` |

##### `__call__` (`click/core.py`)

|      % | Samples | Callee | Location        |
| -----: | ------: | ------ | --------------- |
| 100.0% |     209 | `main` | `click/core.py` |

##### `patched_main` (`black/__init__.py`)

|      % | Samples | Callee     | Location        |
| -----: | ------: | ---------- | --------------- |
| 100.0% |     209 | `__call__` | `click/core.py` |

##### `<module>` (`black/__main__.py`)

|      % | Samples | Callee         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     209 | `patched_main` | `black/__init__.py` |

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee     | Location            |
| -----: | ------: | ---------- | ------------------- |
| 100.0% |     209 | `<module>` | `black/__main__.py` |

##### `_format_str_once` (`black/__init__.py`)

|     % | Samples | Callee                   | Location            |
| ----: | ------: | ------------------------ | ------------------- |
| 45.0% |      81 | `lib2to3_parse`          | `black/parsing.py`  |
| 33.3% |      60 | `visit`                  | `black/nodes.py`    |
|  8.3% |      15 | `detect_target_versions` | `black/__init__.py` |
|  5.6% |      10 | `transform_line`         | `black/linegen.py`  |
|  3.3% |       6 | `maybe_empty_lines`      | `black/lines.py`    |

##### `format_str` (`black/__init__.py`)

|      % | Samples | Callee             | Location            |
| -----: | ------: | ------------------ | ------------------- |
| 100.0% |     125 | `_format_str_once` | `black/__init__.py` |

##### `check_stability_and_equivalence` (`black/__init__.py`)

|     % | Samples | Callee              | Location            |
| ----: | ------: | ------------------- | ------------------- |
| 65.5% |      55 | `assert_stable`     | `black/__init__.py` |
| 34.5% |      29 | `assert_equivalent` | `black/__init__.py` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|     % | Samples | Callee     | Location                   |
| ----: | ------: | ---------- | -------------------------- |
| 79.0% |      64 | `addtoken` | `blib2to3/pgen2/parse.py`  |
| 18.5% |      15 | `__next__` | `blib2to3/pgen2/driver.py` |

##### `parse_string` (`blib2to3/pgen2/driver.py`)

|      % | Samples | Callee         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |      81 | `parse_tokens` | `blib2to3/pgen2/driver.py` |

##### `lib2to3_parse` (`black/parsing.py`)

|      % | Samples | Callee         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |      81 | `parse_string` | `blib2to3/pgen2/driver.py` |

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|     % | Samples | Callee  | Location                  |
| ----: | ------: | ------- | ------------------------- |
| 29.7% |      19 | `pop`   | `blib2to3/pgen2/parse.py` |
| 21.9% |      14 | `shift` | `blib2to3/pgen2/parse.py` |
|  4.7% |       3 | `push`  | `blib2to3/pgen2/parse.py` |

##### `addtoken` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Callee      | Location                  |
| -----: | ------: | ----------- | ------------------------- |
| 100.0% |      64 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `visit` (`black/nodes.py`)

|      % | Samples | Callee              | Location           |
| -----: | ------: | ------------------- | ------------------ |
| 100.0% |      60 | `visit_default`     | `black/linegen.py` |
|  98.3% |      59 | `visit_stmt`        | `black/linegen.py` |
|  95.0% |      57 | `visit_suite`       | `black/linegen.py` |
|  95.0% |      57 | `visit_funcdef`     | `black/linegen.py` |
|  65.0% |      39 | `visit_simple_stmt` | `black/linegen.py` |

##### `visit_default` (`black/nodes.py`)

|      % | Samples | Callee  | Location         |
| -----: | ------: | ------- | ---------------- |
| 100.0% |      60 | `visit` | `black/nodes.py` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `format_file_contents` (`black/__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.8% |      15 | `_addtoken` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 6.8% |      15 | `parse` (`ast.py`) ← `_parse_single_version` (`black/parsing.py`) ← `parse_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 5.9% |      13 | `_addtoken` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 4.6% |      10 | `__new__` (`blib2to3/pytree.py`) ← `convert` ← `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3.7% |       8 | `generate_comments` (`black/comments.py`) ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` |
| 3.7% |       8 | `generate_tokens` (`blib2to3/pgen2/tokenize.py`) ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.7% |       6 | `get_features_used` (`black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2.3% |       5 | `get_features_used` (`black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.8% |       4 | `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.8% |       4 | `generate_tokens` (`blib2to3/pgen2/tokenize.py`) ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.8% |       4 | `__init__` (`<string>`) ← `__init__` ← `line` (`black/linegen.py`) ← `visit_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.4% |       3 | `convert` (`blib2to3/pytree.py`) ← `shift` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.4% |       3 | `_stringify_ast` (`black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.4% |       3 | `_stringify_ast_with_new_parent` (`black/parsing.py`) ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.4% |       3 | `normalize_trailing_prefix` (`black/comments.py`) ← `generate_comments` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.4% |       3 | `convert` (`blib2to3/pytree.py`) ← `shift` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.4% |       3 | `shift` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.4% |       3 | `__new__` (`blib2to3/pytree.py`) ← `convert` ← `shift` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.9% |       2 | `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.9% |       2 | `visit_default` (`black/nodes.py`) ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                   |

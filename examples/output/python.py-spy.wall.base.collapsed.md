# Sampling profile

Collected 215 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 94.9% |     204 |
| Unknown          |  4.2% |       9 |
| Standard library |  0.9% |       2 |

## Call tree

Call paths to the hottest functions.

```
├── 206 samples (95.8%) _run_module_as_main  <frozen runpy>
│   ├── 199 samples (92.6%) [[via 11 frames]] format_file_contents  black/__init__.py
│   │   ├── 118 samples (54.9%) format_str
│   │   │   └── 118 samples (54.9%) _format_str_once
│   │   │       ├── 52 samples (24.2%) [[via 2 frames]] parse_tokens  (self 1.9%)  blib2to3/pgen2/driver.py
│   │   │       │   ├── 32 samples (14.9%) addtoken  blib2to3/pgen2/parse.py
│   │   │       │   │   └── 31 samples (14.4%) _addtoken  (self 3.7%; 7.0% in 2 call stacks)
│   │   │       │   │       ├── 12 samples (5.6%) pop  (self 0.9%)
│   │   │       │   │       │   └── 10 samples (4.7%) convert  (self 1.4%; 5.1% in 4 call stacks)  blib2to3/pytree.py
│   │   │       │   │       │       └── 6 samples (2.8%) __new__  (3.7% self in 3 call stacks)
│   │   │       │   │       └── 11 samples (5.1%) 2 more branches, largest shift (4.2%) and push (0.9%)
│   │   │       │   └── 15 samples (7.0%) __next__
│   │   │       │       └── 15 samples (7.0%) generate_tokens  (self 6.0%; 9.8% in 2 call stacks)  blib2to3/pgen2/tokenize.py
│   │   │       │           └── 1 sample (0.5%) current
│   │   │       ├── 51 samples (23.7%) visit  (self 0.9%; 3.3% in 4 call stacks)  black/nodes.py
│   │   │       │   ├── 30 samples (14.0%) [[via 2–4 frames]] visit_default  (self 2.3%; 4.7% in 7 call stacks)  black/linegen.py
│   │   │       │   │   ├── 12 samples (5.6%) generate_comments  (self 5.1%; 8.4% in 4 call stacks)  black/comments.py
│   │   │       │   │   ├── 11 samples (5.1%) append  black/lines.py
│   │   │       │   │   │   ├── 5 samples (2.3%) mark  (self 1.9%)  black/brackets.py
│   │   │       │   │   │   └── 5 samples (2.3%) 3 more branches, largest append_comment (0.9%) and whitespace (0.9%)
│   │   │       │   │   └── 2 samples (0.9%) visit_default  black/nodes.py
│   │   │       │   ├── 9 samples (4.2%) [[via 4 frames]] visit_stmt  black/linegen.py
│   │   │       │   │   ├── 6 samples (2.8%) line  (0.9% self in 2 call stacks)
│   │   │       │   │   │   └── 6 samples (2.8%) __init__  <string>
│   │   │       │   │   └── 3 samples (1.4%) normalize_invisible_parens  (self 0.9%)
│   │   │       │   └── 10 samples (4.7%) 5 more branches, largest visit_STRING (1.4%)  black/linegen.py and visit_DEDENT (0.9%)
│   │   │       ├── 4 samples (1.9%) detect_target_versions
│   │   │       │   └── 4 samples (1.9%) get_features_used
│   │   │       ├── 2 samples (0.9%) all_lines  (1.9% self in 2 call stacks)  black/lines.py
│   │   │       └── 8 samples (3.7%) 2 more branches, largest transform_line (2.3%)  black/linegen.py and normalize_fmt_off (1.4%)
│   │   └── 81 samples (37.7%) check_stability_and_equivalence
│   │       ├── 56 samples (26.0%) assert_stable
│   │       │   └── 56 samples (26.0%) _format_str_once
│   │       │       ├── 3 samples (1.4%) [[via 2 frames]] pre_order  blib2to3/pytree.py
│   │       │       └── 53 samples (24.7%) 6 more branches, largest visit (11.6%)  black/nodes.py and lib2to3_parse (9.8%)
│   │       └── 25 samples (11.6%) assert_equivalent  (self 0.9%)
│   │           ├── 15 samples (7.0%) [[via 2 frames]] parse  ast.py
│   │           └── 8 samples (3.7%) _stringify_ast  black/parsing.py
│   └── 6 samples (2.8%) 1 more branch, _get_module_details
└── 9 samples (4.2%) (anonymous)
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|    % | Samples | Function            | Location                     |
| ---: | ------: | ------------------- | ---------------------------- |
| 9.8% |      21 | `generate_tokens`   | `blib2to3/pgen2/tokenize.py` |
| 8.4% |      18 | `generate_comments` | `black/comments.py`          |
| 7.0% |      15 | `_addtoken`         | `blib2to3/pgen2/parse.py`    |
| 7.0% |      15 | `parse`             | `ast.py`                     |
| 5.1% |      11 | `convert`           | `blib2to3/pytree.py`         |
| 4.7% |      10 | `visit_default`     | `black/linegen.py`           |
| 4.2% |       9 | `(anonymous)`       | `<unknown>`                  |
| 3.7% |       8 | `_stringify_ast`    | `black/parsing.py`           |
| 3.7% |       8 | `__new__`           | `blib2to3/pytree.py`         |
| 3.3% |       7 | `visit`             | `black/nodes.py`             |
| 3.3% |       7 | `__init__`          | `<string>`                   |
| 1.9% |       4 | `parse_tokens`      | `blib2to3/pgen2/driver.py`   |
| 1.9% |       4 | `mark`              | `black/brackets.py`          |
| 1.9% |       4 | `pre_order`         | `blib2to3/pytree.py`         |
| 1.9% |       4 | `all_lines`         | `black/lines.py`             |
| 1.9% |       4 | `__str__`           | `black/lines.py`             |
| 1.9% |       4 | `get_features_used` | `black/__init__.py`          |
| 1.4% |       3 | `changed`           | `blib2to3/pytree.py`         |
| 1.4% |       3 | `visit_default`     | `black/nodes.py`             |
| 1.4% |       3 | `append_comment`    | `black/lines.py`             |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Ours

|    % | Samples | Function                     | Location                     |
| ---: | ------: | ---------------------------- | ---------------------------- |
| 9.8% |      21 | `generate_tokens`            | `blib2to3/pgen2/tokenize.py` |
| 8.4% |      18 | `generate_comments`          | `black/comments.py`          |
| 7.0% |      15 | `_addtoken`                  | `blib2to3/pgen2/parse.py`    |
| 7.0% |      15 | `parse`                      | `ast.py`                     |
| 5.1% |      11 | `convert`                    | `blib2to3/pytree.py`         |
| 4.7% |      10 | `visit_default`              | `black/linegen.py`           |
| 3.7% |       8 | `_stringify_ast`             | `black/parsing.py`           |
| 3.7% |       8 | `__new__`                    | `blib2to3/pytree.py`         |
| 3.3% |       7 | `visit`                      | `black/nodes.py`             |
| 3.3% |       7 | `__init__`                   | `<string>`                   |
| 1.9% |       4 | `parse_tokens`               | `blib2to3/pgen2/driver.py`   |
| 1.9% |       4 | `mark`                       | `black/brackets.py`          |
| 1.9% |       4 | `pre_order`                  | `blib2to3/pytree.py`         |
| 1.9% |       4 | `all_lines`                  | `black/lines.py`             |
| 1.9% |       4 | `__str__`                    | `black/lines.py`             |
| 1.9% |       4 | `get_features_used`          | `black/__init__.py`          |
| 1.4% |       3 | `changed`                    | `blib2to3/pytree.py`         |
| 1.4% |       3 | `visit_default`              | `black/nodes.py`             |
| 1.4% |       3 | `append_comment`             | `black/lines.py`             |
| 1.4% |       3 | `normalize_invisible_parens` | `black/linegen.py`           |

##### Unknown

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 4.2% |       9 | `(anonymous)` | `<unknown>` |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|     % | Samples | Location                         |
| ----: | ------: | -------------------------------- |
| 52.4% |      11 | `blib2to3/pgen2/tokenize.py:875` |
| 14.3% |       3 | `blib2to3/pgen2/tokenize.py:879` |
|  9.5% |       2 | `blib2to3/pgen2/tokenize.py:881` |
|  4.8% |       1 | `blib2to3/pgen2/tokenize.py:973` |
|  4.8% |       1 | `blib2to3/pgen2/tokenize.py:780` |

##### `generate_comments` (`black/comments.py`)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 83.3% |      15 | `black/comments.py:72` |
| 16.7% |       3 | `black/comments.py:76` |

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|     % | Samples | Location                      |
| ----: | ------: | ----------------------------- |
| 26.7% |       4 | `blib2to3/pgen2/parse.py:326` |
| 20.0% |       3 | `blib2to3/pgen2/parse.py:298` |
| 13.3% |       2 | `blib2to3/pgen2/parse.py:299` |
| 13.3% |       2 | `blib2to3/pgen2/parse.py:297` |
| 13.3% |       2 | `blib2to3/pgen2/parse.py:302` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      15 | `ast.py:50` |

##### `convert` (`blib2to3/pytree.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 45.5% |       5 | `blib2to3/pytree.py:503` |
| 18.2% |       2 | `blib2to3/pytree.py:486` |
|  9.1% |       1 | `blib2to3/pytree.py:494` |
|  9.1% |       1 | `blib2to3/pytree.py:501` |
|  9.1% |       1 | `blib2to3/pytree.py:498` |

##### `visit_default` (`black/linegen.py`)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 40.0% |       4 | `black/linegen.py:158` |
| 30.0% |       3 | `black/linegen.py:155` |
| 20.0% |       2 | `black/linegen.py:138` |
| 10.0% |       1 | `black/linegen.py:154` |

##### `_stringify_ast` (`black/parsing.py`)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 25.0% |       2 | `black/parsing.py:217` |
| 12.5% |       1 | `black/parsing.py:197` |
| 12.5% |       1 | `black/parsing.py:244` |
| 12.5% |       1 | `black/parsing.py:176` |
| 12.5% |       1 | `black/parsing.py:214` |

##### `__new__` (`blib2to3/pytree.py`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       8 | `blib2to3/pytree.py:84` |

##### `visit` (`black/nodes.py`)

|     % | Samples | Location             |
| ----: | ------: | -------------------- |
| 71.4% |       5 | `black/nodes.py:181` |
| 14.3% |       1 | `black/nodes.py:173` |
| 14.3% |       1 | `black/nodes.py:174` |

##### `__init__` (`<string>`)

|     % | Samples | Location     |
| ----: | ------: | ------------ |
| 85.7% |       6 | `<string>:4` |
| 14.3% |       1 | `<string>:9` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|     % | Samples | Location                       |
| ----: | ------: | ------------------------------ |
| 50.0% |       2 | `blib2to3/pgen2/driver.py:167` |
| 25.0% |       1 | `blib2to3/pgen2/driver.py:172` |
| 25.0% |       1 | `blib2to3/pgen2/driver.py:162` |

##### `mark` (`black/brackets.py`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 50.0% |       2 | `black/brackets.py:128` |
| 25.0% |       1 | `black/brackets.py:98`  |
| 25.0% |       1 | `black/brackets.py:116` |

##### `pre_order` (`blib2to3/pytree.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 50.0% |       2 | `blib2to3/pytree.py:318` |
| 25.0% |       1 | `blib2to3/pytree.py:469` |
| 25.0% |       1 | `blib2to3/pytree.py:316` |

##### `all_lines` (`black/lines.py`)

|     % | Samples | Location             |
| ----: | ------: | -------------------- |
| 50.0% |       2 | `black/lines.py:541` |
| 50.0% |       2 | `black/lines.py:539` |

##### `__str__` (`black/lines.py`)

|     % | Samples | Location             |
| ----: | ------: | -------------------- |
| 50.0% |       2 | `black/lines.py:501` |
| 25.0% |       1 | `black/lines.py:500` |
| 25.0% |       1 | `black/lines.py:492` |

##### `get_features_used` (`black/__init__.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 50.0% |       2 | `black/__init__.py:1367` |
| 25.0% |       1 | `black/__init__.py:1424` |
| 25.0% |       1 | `black/__init__.py:1349` |

##### `changed` (`blib2to3/pytree.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 33.3% |       1 | `blib2to3/pytree.py:173` |
| 33.3% |       1 | `blib2to3/pytree.py:174` |
| 33.3% |       1 | `blib2to3/pytree.py:171` |

##### `visit_default` (`black/nodes.py`)

|     % | Samples | Location             |
| ----: | ------: | -------------------- |
| 33.3% |       1 | `black/nodes.py:187` |
| 33.3% |       1 | `black/nodes.py:190` |
| 33.3% |       1 | `black/nodes.py:191` |

##### `append_comment` (`black/lines.py`)

|      % | Samples | Location             |
| -----: | ------: | -------------------- |
| 100.0% |       3 | `black/lines.py:395` |

##### `normalize_invisible_parens` (`black/linegen.py`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 66.7% |       2 | `black/linegen.py:1437` |
| 33.3% |       1 | `black/linegen.py:1351` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|      % | Samples | Caller     | Location                   |
| -----: | ------: | ---------- | -------------------------- |
| 100.0% |      21 | `__next__` | `blib2to3/pgen2/driver.py` |

##### `generate_comments` (`black/comments.py`)

|      % | Samples | Caller          | Location           |
| -----: | ------: | --------------- | ------------------ |
| 100.0% |      18 | `visit_default` | `black/linegen.py` |

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller     | Location                  |
| -----: | ------: | ---------- | ------------------------- |
| 100.0% |      15 | `addtoken` | `blib2to3/pgen2/parse.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location           |
| -----: | ------: | ----------------------- | ------------------ |
| 100.0% |      15 | `_parse_single_version` | `black/parsing.py` |

##### `convert` (`blib2to3/pytree.py`)

|     % | Samples | Caller  | Location                  |
| ----: | ------: | ------- | ------------------------- |
| 63.6% |       7 | `shift` | `blib2to3/pgen2/parse.py` |
| 36.4% |       4 | `pop`   | `blib2to3/pgen2/parse.py` |

##### `visit_default` (`black/linegen.py`)

|     % | Samples | Caller         | Location           |
| ----: | ------: | -------------- | ------------------ |
| 70.0% |       7 | `visit`        | `black/nodes.py`   |
| 20.0% |       2 | `visit_suite`  | `black/linegen.py` |
| 10.0% |       1 | `visit_INDENT` | `black/linegen.py` |

##### `_stringify_ast` (`black/parsing.py`)

|     % | Samples | Caller                           | Location            |
| ----: | ------: | -------------------------------- | ------------------- |
| 87.5% |       7 | `_stringify_ast_with_new_parent` | `black/parsing.py`  |
| 12.5% |       1 | `assert_equivalent`              | `black/__init__.py` |

##### `__new__` (`blib2to3/pytree.py`)

|      % | Samples | Caller    | Location             |
| -----: | ------: | --------- | -------------------- |
| 100.0% |       8 | `convert` | `blib2to3/pytree.py` |

##### `visit` (`black/nodes.py`)

|     % | Samples | Caller          | Location           |
| ----: | ------: | --------------- | ------------------ |
| 85.7% |       6 | `visit_default` | `black/nodes.py`   |
| 14.3% |       1 | `visit_stmt`    | `black/linegen.py` |

##### `__init__` (`<string>`)

|      % | Samples | Caller     | Location   |
| -----: | ------: | ---------- | ---------- |
| 100.0% |       7 | `__init__` | `<string>` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|      % | Samples | Caller         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |       4 | `parse_string` | `blib2to3/pgen2/driver.py` |

##### `mark` (`black/brackets.py`)

|      % | Samples | Caller   | Location         |
| -----: | ------: | -------- | ---------------- |
| 100.0% |       4 | `append` | `black/lines.py` |

##### `pre_order` (`blib2to3/pytree.py`)

|     % | Samples | Caller              | Location             |
| ----: | ------: | ------------------- | -------------------- |
| 75.0% |       3 | `pre_order`         | `blib2to3/pytree.py` |
| 25.0% |       1 | `get_features_used` | `black/__init__.py`  |

##### `all_lines` (`black/lines.py`)

|      % | Samples | Caller             | Location            |
| -----: | ------: | ------------------ | ------------------- |
| 100.0% |       4 | `_format_str_once` | `black/__init__.py` |

##### `__str__` (`black/lines.py`)

|     % | Samples | Caller             | Location            |
| ----: | ------: | ------------------ | ------------------- |
| 75.0% |       3 | `line_to_string`   | `black/lines.py`    |
| 25.0% |       1 | `_format_str_once` | `black/__init__.py` |

##### `get_features_used` (`black/__init__.py`)

|      % | Samples | Caller                   | Location            |
| -----: | ------: | ------------------------ | ------------------- |
| 100.0% |       4 | `detect_target_versions` | `black/__init__.py` |

##### `changed` (`blib2to3/pytree.py`)

|      % | Samples | Caller    | Location             |
| -----: | ------: | --------- | -------------------- |
| 100.0% |       3 | `changed` | `blib2to3/pytree.py` |

##### `visit_default` (`black/nodes.py`)

|      % | Samples | Caller          | Location           |
| -----: | ------: | --------------- | ------------------ |
| 100.0% |       3 | `visit_default` | `black/linegen.py` |

##### `append_comment` (`black/lines.py`)

|      % | Samples | Caller   | Location         |
| -----: | ------: | -------- | ---------------- |
| 100.0% |       3 | `append` | `black/lines.py` |

##### `normalize_invisible_parens` (`black/linegen.py`)

|      % | Samples | Caller       | Location           |
| -----: | ------: | ------------ | ------------------ |
| 100.0% |       3 | `visit_stmt` | `black/linegen.py` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                          | Location              |
| ----: | ------: | --------------------------------- | --------------------- |
| 95.8% |     206 | `_run_module_as_main`             | `<frozen runpy>`      |
| 93.0% |     200 | `format_file_in_place`            | `black/__init__.py`   |
| 93.0% |     200 | `reformat_one`                    | `black/__init__.py`   |
| 93.0% |     200 | `main`                            | `black/__init__.py`   |
| 93.0% |     200 | `new_func`                        | `click/decorators.py` |
| 93.0% |     200 | `invoke`                          | `click/core.py`       |
| 93.0% |     200 | `main`                            | `click/core.py`       |
| 93.0% |     200 | `__call__`                        | `click/core.py`       |
| 93.0% |     200 | `patched_main`                    | `black/__init__.py`   |
| 93.0% |     200 | `<module>`                        | `black/__main__.py`   |
| 93.0% |     200 | `_run_code`                       | `<frozen runpy>`      |
| 92.6% |     199 | `format_file_contents`            | `black/__init__.py`   |
| 80.9% |     174 | `_format_str_once`                | `black/__init__.py`   |
| 54.9% |     118 | `format_str`                      | `black/__init__.py`   |
| 37.7% |      81 | `check_stability_and_equivalence` | `black/__init__.py`   |
| 35.3% |      76 | `visit_default`                   | `black/linegen.py`    |
| 35.3% |      76 | `visit`                           | `black/nodes.py`      |
| 35.3% |      76 | `visit_default`                   | `black/nodes.py`      |
| 35.3% |      76 | `visit_stmt`                      | `black/linegen.py`    |
| 34.4% |      74 | `visit_suite`                     | `black/linegen.py`    |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Ours

|     % | Samples | Function                          | Location                   |
| ----: | ------: | --------------------------------- | -------------------------- |
| 93.0% |     200 | `format_file_in_place`            | `black/__init__.py`        |
| 93.0% |     200 | `reformat_one`                    | `black/__init__.py`        |
| 93.0% |     200 | `main`                            | `black/__init__.py`        |
| 93.0% |     200 | `new_func`                        | `click/decorators.py`      |
| 93.0% |     200 | `invoke`                          | `click/core.py`            |
| 93.0% |     200 | `main`                            | `click/core.py`            |
| 93.0% |     200 | `__call__`                        | `click/core.py`            |
| 93.0% |     200 | `patched_main`                    | `black/__init__.py`        |
| 93.0% |     200 | `<module>`                        | `black/__main__.py`        |
| 92.6% |     199 | `format_file_contents`            | `black/__init__.py`        |
| 80.9% |     174 | `_format_str_once`                | `black/__init__.py`        |
| 54.9% |     118 | `format_str`                      | `black/__init__.py`        |
| 37.7% |      81 | `check_stability_and_equivalence` | `black/__init__.py`        |
| 35.3% |      76 | `visit_default`                   | `black/linegen.py`         |
| 35.3% |      76 | `visit`                           | `black/nodes.py`           |
| 35.3% |      76 | `visit_default`                   | `black/nodes.py`           |
| 35.3% |      76 | `visit_stmt`                      | `black/linegen.py`         |
| 34.4% |      74 | `visit_suite`                     | `black/linegen.py`         |
| 34.0% |      73 | `visit_funcdef`                   | `black/linegen.py`         |
| 34.0% |      73 | `parse_tokens`                    | `blib2to3/pgen2/driver.py` |

##### Unknown

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 4.2% |       9 | `(anonymous)` | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `format_file_in_place` (`black/__init__.py`)

|      % | Samples | Caller         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     200 | `reformat_one` | `black/__init__.py` |

##### `reformat_one` (`black/__init__.py`)

|      % | Samples | Caller | Location            |
| -----: | ------: | ------ | ------------------- |
| 100.0% |     200 | `main` | `black/__init__.py` |

##### `main` (`black/__init__.py`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |     200 | `new_func` | `click/decorators.py` |

##### `new_func` (`click/decorators.py`)

|      % | Samples | Caller   | Location        |
| -----: | ------: | -------- | --------------- |
| 100.0% |     200 | `invoke` | `click/core.py` |

##### `invoke` (`click/core.py`)

|      % | Samples | Caller   | Location        |
| -----: | ------: | -------- | --------------- |
| 100.0% |     200 | `invoke` | `click/core.py` |
| 100.0% |     200 | `main`   | `click/core.py` |

##### `main` (`click/core.py`)

|      % | Samples | Caller     | Location        |
| -----: | ------: | ---------- | --------------- |
| 100.0% |     200 | `__call__` | `click/core.py` |

##### `__call__` (`click/core.py`)

|      % | Samples | Caller         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     200 | `patched_main` | `black/__init__.py` |

##### `patched_main` (`black/__init__.py`)

|      % | Samples | Caller     | Location            |
| -----: | ------: | ---------- | ------------------- |
| 100.0% |     200 | `<module>` | `black/__main__.py` |

##### `<module>` (`black/__main__.py`)

|      % | Samples | Caller      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     200 | `_run_code` | `<frozen runpy>` |

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Caller                | Location         |
| -----: | ------: | --------------------- | ---------------- |
| 100.0% |     200 | `_run_module_as_main` | `<frozen runpy>` |

##### `format_file_contents` (`black/__init__.py`)

|      % | Samples | Caller                 | Location            |
| -----: | ------: | ---------------------- | ------------------- |
| 100.0% |     199 | `format_file_in_place` | `black/__init__.py` |

##### `_format_str_once` (`black/__init__.py`)

|     % | Samples | Caller          | Location            |
| ----: | ------: | --------------- | ------------------- |
| 67.8% |     118 | `format_str`    | `black/__init__.py` |
| 32.2% |      56 | `assert_stable` | `black/__init__.py` |

##### `format_str` (`black/__init__.py`)

|      % | Samples | Caller                 | Location            |
| -----: | ------: | ---------------------- | ------------------- |
| 100.0% |     118 | `format_file_contents` | `black/__init__.py` |

##### `check_stability_and_equivalence` (`black/__init__.py`)

|      % | Samples | Caller                 | Location            |
| -----: | ------: | ---------------------- | ------------------- |
| 100.0% |      81 | `format_file_contents` | `black/__init__.py` |

##### `visit_default` (`black/linegen.py`)

|      % | Samples | Caller              | Location           |
| -----: | ------: | ------------------- | ------------------ |
| 100.0% |      76 | `visit`             | `black/nodes.py`   |
|  97.4% |      74 | `visit_suite`       | `black/linegen.py` |
|  57.9% |      44 | `visit_simple_stmt` | `black/linegen.py` |
|  39.5% |      30 | `visit_power`       | `black/linegen.py` |
|   2.6% |       2 | `visit_DEDENT`      | `black/linegen.py` |

##### `visit` (`black/nodes.py`)

|      % | Samples | Caller             | Location            |
| -----: | ------: | ------------------ | ------------------- |
| 100.0% |      76 | `visit_default`    | `black/nodes.py`    |
| 100.0% |      76 | `_format_str_once` | `black/__init__.py` |
|  98.7% |      75 | `visit_stmt`       | `black/linegen.py`  |
|  96.1% |      73 | `visit_funcdef`    | `black/linegen.py`  |

##### `visit_default` (`black/nodes.py`)

|      % | Samples | Caller          | Location           |
| -----: | ------: | --------------- | ------------------ |
| 100.0% |      76 | `visit_default` | `black/linegen.py` |

##### `visit_stmt` (`black/linegen.py`)

|      % | Samples | Caller  | Location         |
| -----: | ------: | ------- | ---------------- |
| 100.0% |      76 | `visit` | `black/nodes.py` |

##### `visit_suite` (`black/linegen.py`)

|      % | Samples | Caller  | Location         |
| -----: | ------: | ------- | ---------------- |
| 100.0% |      74 | `visit` | `black/nodes.py` |

##### `visit_funcdef` (`black/linegen.py`)

|      % | Samples | Caller  | Location         |
| -----: | ------: | ------- | ---------------- |
| 100.0% |      73 | `visit` | `black/nodes.py` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|      % | Samples | Caller         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |      73 | `parse_string` | `blib2to3/pgen2/driver.py` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_run_module_as_main` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 97.1% |     200 | `_run_code`           | `<frozen runpy>` |
|  2.9% |       6 | `_get_module_details` | `<frozen runpy>` |

##### `format_file_in_place` (`black/__init__.py`)

|     % | Samples | Callee                 | Location            |
| ----: | ------: | ---------------------- | ------------------- |
| 99.5% |     199 | `format_file_contents` | `black/__init__.py` |
|  0.5% |       1 | `decode_bytes`         | `black/__init__.py` |

##### `reformat_one` (`black/__init__.py`)

|      % | Samples | Callee                 | Location            |
| -----: | ------: | ---------------------- | ------------------- |
| 100.0% |     200 | `format_file_in_place` | `black/__init__.py` |

##### `main` (`black/__init__.py`)

|      % | Samples | Callee         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     200 | `reformat_one` | `black/__init__.py` |

##### `new_func` (`click/decorators.py`)

|      % | Samples | Callee | Location            |
| -----: | ------: | ------ | ------------------- |
| 100.0% |     200 | `main` | `black/__init__.py` |

##### `invoke` (`click/core.py`)

|      % | Samples | Callee     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |     200 | `new_func` | `click/decorators.py` |
| 100.0% |     200 | `invoke`   | `click/core.py`       |

##### `main` (`click/core.py`)

|      % | Samples | Callee   | Location        |
| -----: | ------: | -------- | --------------- |
| 100.0% |     200 | `invoke` | `click/core.py` |

##### `__call__` (`click/core.py`)

|      % | Samples | Callee | Location        |
| -----: | ------: | ------ | --------------- |
| 100.0% |     200 | `main` | `click/core.py` |

##### `patched_main` (`black/__init__.py`)

|      % | Samples | Callee     | Location        |
| -----: | ------: | ---------- | --------------- |
| 100.0% |     200 | `__call__` | `click/core.py` |

##### `<module>` (`black/__main__.py`)

|      % | Samples | Callee         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     200 | `patched_main` | `black/__init__.py` |

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee     | Location            |
| -----: | ------: | ---------- | ------------------- |
| 100.0% |     200 | `<module>` | `black/__main__.py` |

##### `format_file_contents` (`black/__init__.py`)

|     % | Samples | Callee                            | Location            |
| ----: | ------: | --------------------------------- | ------------------- |
| 59.3% |     118 | `format_str`                      | `black/__init__.py` |
| 40.7% |      81 | `check_stability_and_equivalence` | `black/__init__.py` |

##### `_format_str_once` (`black/__init__.py`)

|     % | Samples | Callee                   | Location            |
| ----: | ------: | ------------------------ | ------------------- |
| 43.7% |      76 | `visit`                  | `black/nodes.py`    |
| 42.0% |      73 | `lib2to3_parse`          | `black/parsing.py`  |
|  4.0% |       7 | `detect_target_versions` | `black/__init__.py` |
|  3.4% |       6 | `transform_line`         | `black/linegen.py`  |
|  2.3% |       4 | `all_lines`              | `black/lines.py`    |

##### `format_str` (`black/__init__.py`)

|      % | Samples | Callee             | Location            |
| -----: | ------: | ------------------ | ------------------- |
| 100.0% |     118 | `_format_str_once` | `black/__init__.py` |

##### `check_stability_and_equivalence` (`black/__init__.py`)

|     % | Samples | Callee              | Location            |
| ----: | ------: | ------------------- | ------------------- |
| 69.1% |      56 | `assert_stable`     | `black/__init__.py` |
| 30.9% |      25 | `assert_equivalent` | `black/__init__.py` |

##### `visit_default` (`black/linegen.py`)

|      % | Samples | Callee              | Location             |
| -----: | ------: | ------------------- | -------------------- |
| 100.0% |      76 | `visit_default`     | `black/nodes.py`     |
|  27.6% |      21 | `generate_comments` | `black/comments.py`  |
|  22.4% |      17 | `append`            | `black/lines.py`     |
|   1.3% |       1 | `prefix`            | `blib2to3/pytree.py` |

##### `visit` (`black/nodes.py`)

|      % | Samples | Callee              | Location           |
| -----: | ------: | ------------------- | ------------------ |
| 100.0% |      76 | `visit_stmt`        | `black/linegen.py` |
| 100.0% |      76 | `visit_default`     | `black/linegen.py` |
|  97.4% |      74 | `visit_suite`       | `black/linegen.py` |
|  96.1% |      73 | `visit_funcdef`     | `black/linegen.py` |
|  59.2% |      45 | `visit_simple_stmt` | `black/linegen.py` |

##### `visit_default` (`black/nodes.py`)

|      % | Samples | Callee  | Location         |
| -----: | ------: | ------- | ---------------- |
| 100.0% |      76 | `visit` | `black/nodes.py` |

##### `visit_stmt` (`black/linegen.py`)

|     % | Samples | Callee                       | Location           |
| ----: | ------: | ---------------------------- | ------------------ |
| 98.7% |      75 | `visit`                      | `black/nodes.py`   |
|  7.9% |       6 | `line`                       | `black/linegen.py` |
|  5.3% |       4 | `normalize_invisible_parens` | `black/linegen.py` |

##### `visit_suite` (`black/linegen.py`)

|      % | Samples | Callee          | Location           |
| -----: | ------: | --------------- | ------------------ |
| 100.0% |      74 | `visit_default` | `black/linegen.py` |

##### `visit_funcdef` (`black/linegen.py`)

|      % | Samples | Callee  | Location         |
| -----: | ------: | ------- | ---------------- |
| 100.0% |      73 | `visit` | `black/nodes.py` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|     % | Samples | Callee                      | Location                   |
| ----: | ------: | --------------------------- | -------------------------- |
| 60.3% |      44 | `addtoken`                  | `blib2to3/pgen2/parse.py`  |
| 32.9% |      24 | `__next__`                  | `blib2to3/pgen2/driver.py` |
|  1.4% |       1 | `_partially_consume_prefix` | `blib2to3/pgen2/driver.py` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `format_file_contents` (`black/__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 7.0% |      15 | `parse` (`ast.py`) ← `_parse_single_version` (`black/parsing.py`) ← `parse_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 6.0% |      13 | `generate_tokens` (`blib2to3/pgen2/tokenize.py`) ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 5.1% |      11 | `generate_comments` (`black/comments.py`) ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                          |
| 3.7% |       8 | `generate_tokens` (`blib2to3/pgen2/tokenize.py`) ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3.7% |       8 | `_addtoken` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3.3% |       7 | `_addtoken` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 2.8% |       6 | `convert` (`blib2to3/pytree.py`) ← `shift` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.8% |       6 | `__new__` (`blib2to3/pytree.py`) ← `convert` ← `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 2.8% |       6 | `__init__` (`<string>`) ← `__init__` ← `line` (`black/linegen.py`) ← `visit_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.9% |       4 | `generate_comments` (`black/comments.py`) ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` |
| 1.9% |       4 | `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.9% |       4 | `get_features_used` (`black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.4% |       3 | `__str__` (`black/lines.py`) ← `line_to_string` ← `transform_line` (`black/linegen.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.4% |       3 | `convert` (`blib2to3/pytree.py`) ← `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.4% |       3 | `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.4% |       3 | `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.9% |       2 | `normalize_invisible_parens` (`black/linegen.py`) ← `visit_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.9% |       2 | `_stringify_ast` (`black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.9% |       2 | `generate_comments` (`black/comments.py`) ← `visit_default` (`black/linegen.py`) ← `visit_DEDENT` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.9% |       2 | `all_lines` (`black/lines.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

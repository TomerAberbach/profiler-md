# Peak memory profile diff

Held 66.3 MiB (-6.596 KiB, ~0%) over 28,448 → 28,443 allocations (2.39 KiB per allocation).

| Category         | Change |      Delta |     % |     Size |     Allocations |
| ---------------- | -----: | ---------: | ----: | -------: | --------------: |
| Ours             |    ~0% | -8.663 KiB | 78.7% | 52.2 MiB | 26,755 → 26,749 |
| Standard library |    ~0% | +2.066 KiB | 20.9% | 13.9 MiB |   1,474 → 1,475 |
| Third-party      |   0.0% |        0 B |  0.3% |  221 KiB |             219 |

Paths starting with `./` or `../` are relative to `/src/black/src/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
└── 66.3 MiB (100.0%) _run_tracker at /venv/lib/python3.10/site-packages/memray/commands/run.py:40
    └── 66.3 MiB (100.0%) run_module at /usr/local/lib/python3.10/runpy.py:199
        ├── … 61.2 MiB (92.3%) format_file_contents at ./black/__init__.py:1054 → 1059
        │   ├── 51 MiB → 50.9 MiB (76.8%) format_str at 1189 → 1168
        │   │   └── 51 MiB → 50.9 MiB (76.8%) _format_str_once at 1236 → 1215
        │   │       ├── 26.6 MiB → 28.6 MiB (40.1% → 43.1%, self <0.1% → 1.5%) visit at ./black/nodes.py:163 → 152
        │   │       │   ├── … 19.2 MiB → 21.2 MiB (29.0% → 32.0%, self 1.5% → 3.0%) visit_default at ./black/linegen.py:134
        │   │       │   │   ├── 13.2 MiB → 14.2 MiB (19.8% → 21.3%, self 3.0% → 4.5%) generate_comments at ./black/comments.py:52
        │   │       │   │   │   └── 11.2 MiB (16.8%) normalize_trailing_prefix at 127
        │   │       │   │   │       └── 11.2 MiB (16.8%) prefix at ./blib2to3/pytree.py:480 → 469 …
        │   │       │   │   └── 5.06 MiB (7.6%) append at ./black/lines.py:63 → 52
        │   │       │   │       ├── 3.28 KiB → 1 MiB (<0.1% → 1.5%, self 0.0% → 1.5%) mark at ./black/brackets.py:70
        │   │       │   │       └── 5.06 MiB → 4.06 MiB (7.6% → 6.1%) 2 more callees, led by (7.6% → 6.1%) whitespace at ./black/nodes.py:194 → 183
        │   │       │   ├── … 3.24 MiB → 1.24 MiB (4.9% → 1.9%) wrap_in_parentheses at ./black/nodes.py:935 → 930
        │   │       │   │   └── … 2.98 MiB → 998 KiB (4.5% → 1.5%, self 24.5% → 21.5% globally) changed at ./blib2to3/pytree.py:171 → 160
        │   │       │   └── 4.01 MiB → 5.01 MiB (6.1% → 7.6%) 9 more callees, led by (2.4%) visit_INDENT at ./black/linegen.py:179
        │   │       ├── … 16.1 MiB → 15 MiB (24.2% → 22.7%) parse_tokens at ./blib2to3/pgen2/driver.py:114
        │   │       │   ├── 15 MiB → 14 MiB (22.7% → 21.2%) addtoken at ./blib2to3/pgen2/parse.py:242 → 230
        │   │       │   │   └── 15 MiB → 14 MiB (22.6% → 21.1%, self 1.5% → 0.0%) _addtoken at 290 → 278
        │   │       │   │       ├── 6 MiB → 8.01 MiB (9.1% → 12.1%) pop at 398 → 386
        │   │       │   │       │   └── 6 MiB → 8.01 MiB (9.1% → 12.1%, self 0.0% → 1.5%) convert at ./blib2to3/pytree.py:486 → 475
        │   │       │   │       │       └── 6 MiB → 7.01 MiB (9.1% → 10.6%) __init__ at 248 → 237
        │   │       │   │       ├── 7 MiB → 5 MiB (10.6% → 7.5%, self 3.0% → 4.5%) shift at 373 → 361
        │   │       │   │       │   └── 5 MiB → 2 MiB (7.5% → 3.0%, self 3.0% → 1.5%, self 3.0% globally) convert at ./blib2to3/pytree.py:486 → 475
        │   │       │   │       │       ├── 1 MiB (1.5%, self 4.5% → 1.5% globally) __new__ at 81 → 70
        │   │       │   │       │       └── 2 MiB → 0 B (3.0% → 0.0%) __init__ at 400
        │   │       │   │       └── 1 MiB (1.5%) push at 386 → 374
        │   │       │   └── 1 MiB (1.5%) __next__ at 80 …
        │   │       ├── 7.09 MiB → 6.09 MiB (10.7% → 9.2%, self 0.1% → 1.6%) transform_line at ./black/linegen.py:601
        │   │       │   ├── … 1 MiB (1.5%) _hugging_power_ops_line_to_string at ./black/linegen.py:590
        │   │       │   │   └── 1 MiB (1.5%, self 1.5% → <0.1% globally) hug_power_op at ./black/trans.py:85 → 81
        │   │       │   │       ├── 0 B → 1 MiB (0.0% → 1.5%) clone at ./black/lines.py:470
        │   │       │   │       │   └── 0 B → 1 MiB (0.0% → 1.5%, self 1.5% → 4.5% globally) __init__ at <string>:2
        │   │       │   │       └── 1 MiB → 0 B (1.5% → 0.0%) clone at ./blib2to3/pytree.py:452
        │   │       │   │           └── 1 MiB → 0 B (1.5% → 0.0%) __new__ at ./blib2to3/pytree.py:81 → 70
        │   │       │   ├── 0 B → 1 MiB (0.0% → 1.5%) __init__ at ./black/trans.py:278
        │   │       │   └── 6.04 MiB → 3.04 MiB (9.1% → 4.6%) 3 more callees, led by (6.1% → 3.1%) run_transformer at 1755 → 1771
        │   │       └── 1 MiB (1.5%, self 1.5%) maybe_empty_lines at ./black/lines.py:560 → 549
        │   └── 10.2 MiB (15.4%) check_stability_and_equivalence at 1037 → 1042 …
        └── 4.89 MiB (7.4%) _get_module_details at 103 …
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes held at peak memory within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|     Change |          Delta |            % |                Size | Allocations | Function                                           | Location                              |
| ---------: | -------------: | -----------: | ------------------: | ----------: | -------------------------------------------------- | ------------------------------------- |
|    +199.9% |         +2 MiB |  1.5% → 4.5% |       1 MiB → 3 MiB |       2 → 4 | `__init__`                                         | `<string>:2`                          |
|     +16.7% |         +1 MiB | 9.1% → 10.6% |    6 MiB → 7.01 MiB |     11 → 12 | `__init__`                                         | `./blib2to3/pytree.py:248 → 237`      |
|     +50.0% |         +1 MiB |  3.0% → 4.5% |       2 MiB → 3 MiB |       2 → 3 | `shift`                                            | `./blib2to3/pgen2/parse.py:373 → 361` |
| +201649.2% |         +1 MiB | <0.1% → 1.5% |       520 B → 1 MiB |       1 → 2 | `visit`                                            | `./black/nodes.py:163 → 152`          |
|    +100.0% |         +1 MiB |  1.5% → 3.0% |       1 MiB → 2 MiB |       1 → 2 | `visit_default`                                    | `./black/linegen.py:134`              |
|    +962.3% |         +1 MiB |  0.2% → 1.7% |   106 KiB → 1.1 MiB |   188 → 189 | `mark`                                             | `./black/brackets.py:70`              |
|     +50.0% |         +1 MiB |  3.0% → 4.5% |       2 MiB → 3 MiB |       2 → 3 | `generate_comments`                                | `./black/comments.py:52`              |
|        new |         +1 MiB |  0.0% → 1.5% |         0 B → 1 MiB |       0 → 1 | `closure`                                          | `./blib2to3/pgen2/pgen.py:197`        |
|        new |         +1 MiB |  0.0% → 1.5% |         0 B → 1 MiB |       0 → 1 | `__init__`                                         | `./black/trans.py:278`                |
|        new |         +1 MiB |  0.0% → 1.5% |         0 B → 1 MiB |       0 → 1 | `contains_implicit_multiline_string_with_comments` | `./black/lines.py:250`                |
|   +2084.7% | +1,023.601 KiB |  0.1% → 1.6% | 49.1 KiB → 1.05 MiB |     24 → 25 | `transform_line`                                   | `./black/linegen.py:601`              |
|      +0.1% |     +2.066 KiB |         4.6% |            3.07 MiB |   108 → 109 | `_call_with_frames_removed`                        | `<frozen importlib._bootstrap>:233`   |
|    +100.0% |     +1.078 KiB |        <0.1% | 1.08 KiB → 2.16 KiB |       2 → 4 | `_maybe_split_omitting_optional_parens`            | `./black/linegen.py:932`              |
|      +0.5% |          +49 B |        <0.1% |  8.75 KiB → 8.8 KiB |           2 | `whitespace`                                       | `./black/nodes.py:194 → 183`          |
|        ~0% |          +32 B |         0.3% |             223 KiB |           3 | `_format_str_once`                                 | `./black/__init__.py:1236 → 1215`     |

##### Ours

|     Change |          Delta |            % |                Size | Allocations | Function                                           | Location                              |
| ---------: | -------------: | -----------: | ------------------: | ----------: | -------------------------------------------------- | ------------------------------------- |
|    +199.9% |         +2 MiB |  1.5% → 4.5% |       1 MiB → 3 MiB |       2 → 4 | `__init__`                                         | `<string>:2`                          |
|     +16.7% |         +1 MiB | 9.1% → 10.6% |    6 MiB → 7.01 MiB |     11 → 12 | `__init__`                                         | `./blib2to3/pytree.py:248 → 237`      |
|     +50.0% |         +1 MiB |  3.0% → 4.5% |       2 MiB → 3 MiB |       2 → 3 | `shift`                                            | `./blib2to3/pgen2/parse.py:373 → 361` |
| +201649.2% |         +1 MiB | <0.1% → 1.5% |       520 B → 1 MiB |       1 → 2 | `visit`                                            | `./black/nodes.py:163 → 152`          |
|    +100.0% |         +1 MiB |  1.5% → 3.0% |       1 MiB → 2 MiB |       1 → 2 | `visit_default`                                    | `./black/linegen.py:134`              |
|    +962.3% |         +1 MiB |  0.2% → 1.7% |   106 KiB → 1.1 MiB |   188 → 189 | `mark`                                             | `./black/brackets.py:70`              |
|     +50.0% |         +1 MiB |  3.0% → 4.5% |       2 MiB → 3 MiB |       2 → 3 | `generate_comments`                                | `./black/comments.py:52`              |
|        new |         +1 MiB |  0.0% → 1.5% |         0 B → 1 MiB |       0 → 1 | `closure`                                          | `./blib2to3/pgen2/pgen.py:197`        |
|        new |         +1 MiB |  0.0% → 1.5% |         0 B → 1 MiB |       0 → 1 | `__init__`                                         | `./black/trans.py:278`                |
|        new |         +1 MiB |  0.0% → 1.5% |         0 B → 1 MiB |       0 → 1 | `contains_implicit_multiline_string_with_comments` | `./black/lines.py:250`                |
|   +2084.7% | +1,023.601 KiB |  0.1% → 1.6% | 49.1 KiB → 1.05 MiB |     24 → 25 | `transform_line`                                   | `./black/linegen.py:601`              |
|    +100.0% |     +1.078 KiB |        <0.1% | 1.08 KiB → 2.16 KiB |       2 → 4 | `_maybe_split_omitting_optional_parens`            | `./black/linegen.py:932`              |
|      +0.5% |          +49 B |        <0.1% |  8.75 KiB → 8.8 KiB |           2 | `whitespace`                                       | `./black/nodes.py:194 → 183`          |
|        ~0% |          +32 B |         0.3% |             223 KiB |           3 | `_format_str_once`                                 | `./black/__init__.py:1236 → 1215`     |

##### Standard library

| Change |      Delta |    % |     Size | Allocations | Function                    | Location                            |
| -----: | ---------: | ---: | -------: | ----------: | --------------------------- | ----------------------------------- |
|  +0.1% | +2.066 KiB | 4.6% | 3.07 MiB |   108 → 109 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

#### Improvements

Functions with the largest decrease in bytes held at peak memory within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Ours

|  Change |      Delta |             % |                Size |     Allocations | Function                  | Location                              |
| ------: | ---------: | ------------: | ------------------: | --------------: | ------------------------- | ------------------------------------- |
| removed |     -2 MiB |   3.0% → 0.0% |         2 MiB → 0 B |           2 → 0 | `__init__`                | `./blib2to3/pytree.py:400`            |
|  -66.7% |     -2 MiB |   4.5% → 1.5% |       3 MiB → 1 MiB |           3 → 1 | `__new__`                 | `./blib2to3/pytree.py:81 → 70`        |
|  -12.3% |     -2 MiB | 24.5% → 21.5% | 16.2 MiB → 14.2 MiB | 25,907 → 25,905 | `changed`                 | `./blib2to3/pytree.py:171 → 160`      |
| removed |     -1 MiB |   1.5% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__init__`                | `./blib2to3/pgen2/pgen.py:376`        |
| removed |     -1 MiB |   1.5% → 0.0% |         1 MiB → 0 B |           1 → 0 | `_addtoken`               | `./blib2to3/pgen2/parse.py:290 → 278` |
|  -99.9% |     -1 MiB |  1.5% → <0.1% |       1 MiB → 704 B |           2 → 1 | `hug_power_op`            | `./black/trans.py:85 → 81`            |
| removed |     -1 MiB |   1.5% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__str__`                 | `./blib2to3/pytree.py:440`            |
| removed |     -1 MiB |   1.5% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__str__`                 | `./black/lines.py:490`                |
|  -50.0% |     -1 MiB |   3.0% → 1.5% |       2 MiB → 1 MiB |           2 → 1 | `prev_sibling`            | `./blib2to3/pytree.py:207 → 196`      |
|   -0.2% | -3.468 KiB |          3.1% | 2.04 MiB → 2.03 MiB |         66 → 60 | `run_transformer`         | `./black/linegen.py:1755 → 1771`      |
|   -0.1% |     -3 KiB |          3.0% |               2 MiB |           3 → 2 | `convert`                 | `./blib2to3/pytree.py:486 → 475`      |
|  -23.0% | -2.367 KiB |         <0.1% | 10.3 KiB → 7.91 KiB |               8 | `<module>`                | `./black/trans.py:1`                  |
|  -26.8% |  -1.07 KiB |         <0.1% |    4 KiB → 2.93 KiB |               3 | `<module>`                | `./black/ranges.py:1`                 |
| removed |     -520 B |  <0.1% → 0.0% |         520 B → 0 B |           1 → 0 | `_first_right_hand_split` | `./black/linegen.py:829`              |
|     ~0% |       -8 B |         <0.1% |            22.3 KiB |              13 | `<module>`                | `./blib2to3/pgen2/tokenize.py:1`      |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `__init__` (`<string>:2`)

| Change |  Delta |            % |        Size | Allocations | Location     |
| -----: | -----: | -----------: | ----------: | ----------: | ------------ |
|    new | +1 MiB | 0.0% → 33.3% | 0 B → 1 MiB |       0 → 1 | `<string>:3` |
|    new | +1 MiB | 0.0% → 33.3% | 0 B → 1 MiB |       0 → 1 | `<string>:8` |

##### `__init__` (`./blib2to3/pytree.py:237`)

| Change |      Delta |              % |          Size | Allocations | Location                         |
| -----: | ---------: | -------------: | ------------: | ----------: | -------------------------------- |
|    new | +2.002 MiB |   0.0% → 28.6% |   0 B → 2 MiB |       0 → 3 | `./blib2to3/pytree.py:256`       |
| -16.7% | -1.001 MiB | 100.0% → 71.4% | 6 MiB → 5 MiB |       7 → 5 | `./blib2to3/pytree.py:269 → 258` |

##### `shift` (`./blib2to3/pgen2/parse.py:361`)

| Change |  Delta |      % |          Size | Allocations | Location                              |
| -----: | -----: | -----: | ------------: | ----------: | ------------------------------------- |
| +50.0% | +1 MiB | 100.0% | 2 MiB → 3 MiB |       2 → 3 | `./blib2to3/pgen2/parse.py:383 → 371` |

##### `visit` (`./black/nodes.py:152`)

| Change |  Delta |             % |        Size | Allocations | Location               |
| -----: | -----: | ------------: | ----------: | ----------: | ---------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./black/nodes.py:174` |

##### `visit_default` (`./black/linegen.py:134`)

|  Change |  Delta |      % |          Size | Allocations | Location                 |
| ------: | -----: | -----: | ------------: | ----------: | ------------------------ |
| +100.0% | +1 MiB | 100.0% | 1 MiB → 2 MiB |       1 → 2 | `./black/linegen.py:158` |

##### `mark` (`./black/brackets.py:70`)

| Change |  Delta |            % |        Size | Allocations | Location                  |
| -----: | -----: | -----------: | ----------: | ----------: | ------------------------- |
|    new | +1 MiB | 0.0% → 90.6% | 0 B → 1 MiB |       0 → 1 | `./black/brackets.py:122` |

##### `generate_comments` (`./black/comments.py:52`)

| Change |  Delta |      % |          Size | Allocations | Location                 |
| -----: | -----: | -----: | ------------: | ----------: | ------------------------ |
| +50.0% | +1 MiB | 100.0% | 2 MiB → 3 MiB |       2 → 3 | `./black/comments.py:72` |

##### `closure` (`./blib2to3/pgen2/pgen.py:197`)

| Change |  Delta |             % |        Size | Allocations | Location                       |
| -----: | -----: | ------------: | ----------: | ----------: | ------------------------------ |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./blib2to3/pgen2/pgen.py:198` |

##### `__init__` (`./black/trans.py:278`)

| Change |  Delta |             % |        Size | Allocations | Location               |
| -----: | -----: | ------------: | ----------: | ----------: | ---------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./black/trans.py:279` |

##### `contains_implicit_multiline_string_with_comments` (`./black/lines.py:250`)

| Change |  Delta |             % |        Size | Allocations | Location               |
| -----: | -----: | ------------: | ----------: | ----------: | ---------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./black/lines.py:257` |

##### `transform_line` (`./black/linegen.py:601`)

| Change |  Delta |            % |              Size | Allocations | Location                 |
| -----: | -----: | -----------: | ----------------: | ----------: | ------------------------ |
|    new | +1 MiB | 0.0% → 95.5% |       0 B → 1 MiB |       0 → 1 | `./black/linegen.py:626` |
|  -2.5% | -944 B | 75.3% → 3.4% |   37 KiB → 36 KiB |       2 → 1 | `./black/linegen.py:679` |
|  +5.0% | +536 B | 21.3% → 1.0% | 10.5 KiB → 11 KiB |     20 → 21 | `./black/linegen.py:714` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

| Change |      Delta |      % |     Size | Allocations | Location                            |
| -----: | ---------: | -----: | -------: | ----------: | ----------------------------------- |
|  +0.1% | +2.066 KiB | 100.0% | 3.07 MiB |   108 → 109 | `<frozen importlib._bootstrap>:241` |

##### `_maybe_split_omitting_optional_parens` (`./black/linegen.py:932`)

|  Change |      Delta |      % |                Size | Allocations | Location                 |
| ------: | ---------: | -----: | ------------------: | ----------: | ------------------------ |
| +100.0% | +1.078 KiB | 100.0% | 1.08 KiB → 2.16 KiB |       2 → 4 | `./black/linegen.py:980` |

##### `_format_str_once` (`./black/__init__.py:1215`)

| Change | Delta |    % |          Size | Allocations | Location                          |
| -----: | ----: | ---: | ------------: | ----------: | --------------------------------- |
|  +5.5% | +32 B | 0.3% | 584 B → 616 B |           1 | `./black/__init__.py:1239 → 1218` |

##### `__init__` (`./blib2to3/pytree.py:400`)

|  Change |  Delta |             % |        Size | Allocations | Location                   |
| ------: | -----: | ------------: | ----------: | ----------: | -------------------------- |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |       2 → 0 | `./blib2to3/pytree.py:425` |

##### `__new__` (`./blib2to3/pytree.py:70`)

| Change |  Delta |      % |          Size | Allocations | Location                       |
| -----: | -----: | -----: | ------------: | ----------: | ------------------------------ |
| -66.7% | -2 MiB | 100.0% | 3 MiB → 1 MiB |       3 → 1 | `./blib2to3/pytree.py:84 → 73` |

##### `changed` (`./blib2to3/pytree.py:160`)

| Change |  Delta |      % |                Size |     Allocations | Location                         |
| -----: | -----: | -----: | ------------------: | --------------: | -------------------------------- |
| -12.3% | -2 MiB | 100.0% | 16.2 MiB → 14.2 MiB | 25,907 → 25,905 | `./blib2to3/pytree.py:176 → 165` |

##### `__init__` (`./blib2to3/pgen2/pgen.py:376`)

|  Change |  Delta |             % |        Size | Allocations | Location                       |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pgen2/pgen.py:377` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

|  Change |  Delta |             % |        Size | Allocations | Location                        |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pgen2/parse.py:314` |

##### `hug_power_op` (`./black/trans.py:81`)

|  Change |  Delta |            % |        Size | Allocations | Location              |
| ------: | -----: | -----------: | ----------: | ----------: | --------------------- |
| removed | -1 MiB | 99.9% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./black/trans.py:95` |

##### `__str__` (`./blib2to3/pytree.py:440`)

|  Change |  Delta |             % |        Size | Allocations | Location                   |
| ------: | -----: | ------------: | ----------: | ----------: | -------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pytree.py:446` |

##### `__str__` (`./black/lines.py:490`)

|  Change |  Delta |             % |        Size | Allocations | Location               |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./black/lines.py:496` |

##### `prev_sibling` (`./blib2to3/pytree.py:196`)

| Change |  Delta |      % |          Size | Allocations | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | -------------------------------- |
| -50.0% | -1 MiB | 100.0% | 2 MiB → 1 MiB |       2 → 1 | `./blib2to3/pytree.py:219 → 208` |

##### `run_transformer` (`./black/linegen.py:1771`)

| Change |      Delta |           % |              Size | Allocations | Location                         |
| -----: | ---------: | ----------: | ----------------: | ----------: | -------------------------------- |
|  -9.5% | -3.468 KiB | 1.7% → 1.6% | 36.4 KiB → 33 KiB |     63 → 57 | `./black/linegen.py:1770 → 1786` |

##### `convert` (`./blib2to3/pytree.py:475`)

| Change |      Delta |              % |          Size | Allocations | Location                         |
| -----: | ---------: | -------------: | ------------: | ----------: | -------------------------------- |
| -50.1% | -1.002 MiB | 100.0% → 50.0% | 2 MiB → 1 MiB |       3 → 1 | `./blib2to3/pytree.py:503 → 492` |
|    new |     +1 MiB |   0.0% → 50.0% |   0 B → 1 MiB |       0 → 1 | `./blib2to3/pytree.py:490`       |

##### `<module>` (`./black/trans.py:1`)

|  Change |      Delta |            % |           Size | Allocations | Location                |
| ------: | ---------: | -----------: | -------------: | ----------: | ----------------------- |
| removed | -4.523 KiB | 44.0% → 0.0% | 4.52 KiB → 0 B |       1 → 0 | `./black/trans.py:1914` |
|     new | +2.156 KiB | 0.0% → 27.3% | 0 B → 2.16 KiB |       0 → 1 | `./black/trans.py:41`   |

##### `<module>` (`./black/ranges.py:1`)

|  Change |      Delta |            % |           Size | Allocations | Location                |
| ------: | ---------: | -----------: | -------------: | ----------: | ----------------------- |
| removed | -2.156 KiB | 53.9% → 0.0% | 2.16 KiB → 0 B |       1 → 0 | `./black/ranges.py:509` |
|     new | +1.085 KiB | 0.0% → 37.1% | 0 B → 1.09 KiB |       0 → 1 | `./black/ranges.py:7`   |

##### `_first_right_hand_split` (`./black/linegen.py:829`)

|  Change |  Delta |             % |        Size | Allocations | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------------ |
| removed | -520 B | 100.0% → 0.0% | 520 B → 0 B |       1 → 0 | `./black/linegen.py:918` |

##### `<module>` (`./blib2to3/pgen2/tokenize.py:1`)

|  Change |      Delta |            % |           Size | Allocations | Location                               |
| ------: | ---------: | -----------: | -------------: | ----------: | -------------------------------------- |
| removed | -4.523 KiB | 20.2% → 0.0% | 4.52 KiB → 0 B |       1 → 0 | `./blib2to3/pgen2/tokenize.py:170`     |
|     new | +4.523 KiB | 0.0% → 20.3% | 0 B → 4.52 KiB |       0 → 1 | `./blib2to3/pgen2/tokenize.py:163`     |
|   -1.3% |       -8 B |         2.6% |  600 B → 592 B |           1 | `./blib2to3/pgen2/tokenize.py:76 → 65` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `__init__` (`<string>:2`)

|  Change |  Delta |              % |          Size | Allocations | Caller     | Location     |
| ------: | -----: | -------------: | ------------: | ----------: | ---------- | ------------ |
| +200.0% | +2 MiB | 99.9% → 100.0% | 1 MiB → 3 MiB |       1 → 3 | `__init__` | `<string>:2` |

##### `__init__` (`./blib2to3/pytree.py:237`)

| Change |  Delta |      % |             Size | Allocations | Caller    | Location                         |
| -----: | -----: | -----: | ---------------: | ----------: | --------- | -------------------------------- |
| +16.7% | +1 MiB | 100.0% | 6 MiB → 7.01 MiB |     11 → 12 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `shift` (`./blib2to3/pgen2/parse.py:361`)

| Change |  Delta |      % |          Size | Allocations | Caller      | Location                              |
| -----: | -----: | -----: | ------------: | ----------: | ----------- | ------------------------------------- |
| +50.0% | +1 MiB | 100.0% | 2 MiB → 3 MiB |       2 → 3 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `visit` (`./black/nodes.py:152`)

|     Change |  Delta |      % |          Size | Allocations | Caller          | Location                     |
| ---------: | -----: | -----: | ------------: | ----------: | --------------- | ---------------------------- |
| +201649.2% | +1 MiB | 100.0% | 520 B → 1 MiB |       1 → 2 | `visit_default` | `./black/nodes.py:187 → 176` |

##### `visit_default` (`./black/linegen.py:134`)

|  Change |  Delta |      % |          Size | Allocations | Caller  | Location                     |
| ------: | -----: | -----: | ------------: | ----------: | ------- | ---------------------------- |
| +100.0% | +1 MiB | 100.0% | 1 MiB → 2 MiB |       1 → 2 | `visit` | `./black/nodes.py:163 → 152` |

##### `mark` (`./black/brackets.py:70`)

|    Change |  Delta |            % |             Size | Allocations | Caller   | Location                   |
| --------: | -----: | -----------: | ---------------: | ----------: | -------- | -------------------------- |
| +57487.7% | +1 MiB | 1.7% → 90.7% | 1.78 KiB → 1 MiB |       2 → 3 | `append` | `./black/lines.py:63 → 52` |

##### `generate_comments` (`./black/comments.py:52`)

| Change |  Delta |      % |          Size | Allocations | Caller          | Location                 |
| -----: | -----: | -----: | ------------: | ----------: | --------------- | ------------------------ |
| +50.0% | +1 MiB | 100.0% | 2 MiB → 3 MiB |       2 → 3 | `visit_default` | `./black/linegen.py:134` |

##### `closure` (`./blib2to3/pgen2/pgen.py:197`)

| Change |  Delta |             % |        Size | Allocations | Caller     | Location                       |
| -----: | -----: | ------------: | ----------: | ----------: | ---------- | ------------------------------ |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `make_dfa` | `./blib2to3/pgen2/pgen.py:189` |

##### `__init__` (`./black/trans.py:278`)

| Change |  Delta |             % |        Size | Allocations | Caller           | Location                 |
| -----: | -----: | ------------: | ----------: | ----------: | ---------------- | ------------------------ |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `transform_line` | `./black/linegen.py:601` |

##### `contains_implicit_multiline_string_with_comments` (`./black/lines.py:250`)

| Change |  Delta |             % |        Size | Allocations | Caller           | Location                 |
| -----: | -----: | ------------: | ----------: | ----------: | ---------------- | ------------------------ |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `transform_line` | `./black/linegen.py:601` |

##### `transform_line` (`./black/linegen.py:601`)

|   Change |  Delta |             % |                Size | Allocations | Caller             | Location                          |
| -------: | -----: | ------------: | ------------------: | ----------: | ------------------ | --------------------------------- |
| +2678.2% | +1 MiB | 77.9% → 99.0% | 38.2 KiB → 1.04 MiB |       4 → 5 | `_format_str_once` | `./black/__init__.py:1236 → 1215` |
|    -3.7% | -408 B |  22.1% → 1.0% | 10.9 KiB → 10.5 KiB |          20 | `run_transformer`  | `./black/linegen.py:1755 → 1771`  |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

| Change |      Delta |      % |     Size | Allocations | Caller           | Location                                     |
| -----: | ---------: | -----: | -------: | ----------: | ---------------- | -------------------------------------------- |
|  +0.1% | +2.066 KiB | 100.0% | 3.07 MiB |   108 → 109 | `source_to_code` | `<frozen importlib._bootstrap_external>:942` |

##### `_maybe_split_omitting_optional_parens` (`./black/linegen.py:932`)

|  Change |      Delta |      % |                Size | Allocations | Caller             | Location                 |
| ------: | ---------: | -----: | ------------------: | ----------: | ------------------ | ------------------------ |
| +100.0% | +1.078 KiB | 100.0% | 1.08 KiB → 2.16 KiB |       2 → 4 | `right_hand_split` | `./black/linegen.py:809` |

##### `whitespace` (`./black/nodes.py:183`)

| Change | Delta |      % |               Size | Allocations | Caller   | Location                   |
| -----: | ----: | -----: | -----------------: | ----------: | -------- | -------------------------- |
|  +0.5% | +49 B | 100.0% | 8.75 KiB → 8.8 KiB |           2 | `append` | `./black/lines.py:63 → 52` |

##### `_format_str_once` (`./black/__init__.py:1215`)

| Change | Delta |      % |    Size | Allocations | Caller       | Location                          |
| -----: | ----: | -----: | ------: | ----------: | ------------ | --------------------------------- |
|    ~0% | +32 B | 100.0% | 223 KiB |           3 | `format_str` | `./black/__init__.py:1189 → 1168` |

##### `__init__` (`./blib2to3/pytree.py:400`)

|  Change |  Delta |             % |        Size | Allocations | Caller    | Location                   |
| ------: | -----: | ------------: | ----------: | ----------: | --------- | -------------------------- |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |       2 → 0 | `convert` | `./blib2to3/pytree.py:486` |

##### `__new__` (`./blib2to3/pytree.py:70`)

|  Change |  Delta |            % |        Size | Allocations | Caller  | Location                   |
| ------: | -----: | -----------: | ----------: | ----------: | ------- | -------------------------- |
| removed | -2 MiB | 66.7% → 0.0% | 2 MiB → 0 B |       2 → 0 | `clone` | `./blib2to3/pytree.py:452` |

##### `changed` (`./blib2to3/pytree.py:160`)

|  Change |  Delta |            % |        Size | Allocations | Caller    | Location                   |
| ------: | -----: | -----------: | ----------: | ----------: | --------- | -------------------------- |
| removed | -2 MiB | 12.3% → 0.0% | 2 MiB → 0 B |       2 → 0 | `changed` | `./blib2to3/pytree.py:171` |

##### `__init__` (`./blib2to3/pgen2/pgen.py:376`)

|  Change |  Delta |             % |        Size | Allocations | Caller       | Location                       |
| ------: | -----: | ------------: | ----------: | ----------: | ------------ | ------------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `parse_atom` | `./blib2to3/pgen2/pgen.py:329` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

|  Change |  Delta |             % |        Size | Allocations | Caller     | Location                              |
| ------: | -----: | ------------: | ----------: | ----------: | ---------- | ------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `addtoken` | `./blib2to3/pgen2/parse.py:242 → 230` |

##### `hug_power_op` (`./black/trans.py:81`)

| Change |  Delta |      % |          Size | Allocations | Caller            | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | ----------------- | -------------------------------- |
| -99.9% | -1 MiB | 100.0% | 1 MiB → 704 B |       2 → 1 | `run_transformer` | `./black/linegen.py:1755 → 1771` |

##### `__str__` (`./blib2to3/pytree.py:440`)

|  Change |  Delta |             % |        Size | Allocations | Caller    | Location               |
| ------: | -----: | ------------: | ----------: | ----------: | --------- | ---------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `__str__` | `./black/lines.py:490` |

##### `__str__` (`./black/lines.py:490`)

|  Change |  Delta |             % |        Size | Allocations | Caller           | Location                |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------- | ----------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `line_to_string` | `./black/lines.py:1073` |

##### `prev_sibling` (`./blib2to3/pytree.py:196`)

|  Change |  Delta |            % |        Size | Allocations | Caller           | Location                     |
| ------: | -----: | -----------: | ----------: | ----------: | ---------------- | ---------------------------- |
| removed | -1 MiB | 50.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `preceding_leaf` | `./black/nodes.py:441 → 436` |

##### `run_transformer` (`./black/linegen.py:1771`)

| Change |      Delta |      % |                Size | Allocations | Caller           | Location                 |
| -----: | ---------: | -----: | ------------------: | ----------: | ---------------- | ------------------------ |
|  -0.2% | -3.468 KiB | 100.0% | 2.04 MiB → 2.03 MiB |     66 → 60 | `transform_line` | `./black/linegen.py:601` |

##### `convert` (`./blib2to3/pytree.py:475`)

| Change |      Delta |              % |          Size | Allocations | Caller  | Location                              |
| -----: | ---------: | -------------: | ------------: | ----------: | ------- | ------------------------------------- |
| -50.1% | -1.002 MiB | 100.0% → 50.0% | 2 MiB → 1 MiB |       3 → 1 | `shift` | `./blib2to3/pgen2/parse.py:373 → 361` |
|    new |     +1 MiB |   0.0% → 50.0% |   0 B → 1 MiB |       0 → 1 | `pop`   | `./blib2to3/pgen2/parse.py:398 → 386` |

##### `<module>` (`./black/trans.py:1`)

| Change |      Delta |      % |                Size | Allocations | Caller                      | Location                            |
| -----: | ---------: | -----: | ------------------: | ----------: | --------------------------- | ----------------------------------- |
| -23.0% | -2.367 KiB | 100.0% | 10.3 KiB → 7.91 KiB |           8 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`./black/ranges.py:1`)

| Change |     Delta |      % |             Size | Allocations | Caller                      | Location                            |
| -----: | --------: | -----: | ---------------: | ----------: | --------------------------- | ----------------------------------- |
| -26.8% | -1.07 KiB | 100.0% | 4 KiB → 2.93 KiB |           3 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `_first_right_hand_split` (`./black/linegen.py:829`)

|  Change |  Delta |             % |        Size | Allocations | Caller             | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------ | ------------------------ |
| removed | -520 B | 100.0% → 0.0% | 520 B → 0 B |       1 → 0 | `right_hand_split` | `./black/linegen.py:809` |

##### `<module>` (`./blib2to3/pgen2/tokenize.py:1`)

| Change | Delta |      % |     Size | Allocations | Caller                      | Location                            |
| -----: | ----: | -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
|    ~0% |  -8 B | 100.0% | 22.3 KiB |          13 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

### Total size

#### Regressions

Functions with the largest increase in bytes held at peak memory within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Ours

|  Change |  Delta |             % |                Size |     Allocations | Function                                           | Location                              |
| ------: | -----: | ------------: | ------------------: | --------------: | -------------------------------------------------- | ------------------------------------- |
|  +33.3% | +2 MiB |  9.1% → 12.1% |    6 MiB → 8.01 MiB |         11 → 13 | `pop`                                              | `./blib2to3/pgen2/parse.py:398 → 386` |
|   +7.5% | +2 MiB | 40.1% → 43.1% | 26.6 MiB → 28.6 MiB | 26,393 → 26,395 | `visit`                                            | `./black/nodes.py:163 → 152`          |
|   +7.5% | +2 MiB | 40.1% → 43.1% | 26.6 MiB → 28.6 MiB | 26,392 → 26,394 | `visit_default`                                    | `./black/nodes.py:187 → 176`          |
|   +7.5% | +2 MiB | 40.1% → 43.1% | 26.6 MiB → 28.6 MiB | 26,392 → 26,394 | `visit_default`                                    | `./black/linegen.py:134`              |
|   +7.6% | +2 MiB | 39.6% → 42.6% | 26.2 MiB → 28.2 MiB | 25,804 → 25,806 | `visit_stmt`                                       | `./black/linegen.py:199`              |
|   +7.7% | +2 MiB | 39.2% → 42.2% |     26 MiB → 28 MiB | 25,386 → 25,388 | `visit_suite`                                      | `./black/linegen.py:288`              |
|   +7.7% | +2 MiB | 39.2% → 42.2% |     26 MiB → 28 MiB | 25,384 → 25,386 | `visit_funcdef`                                    | `./black/linegen.py:254`              |
| +199.9% | +2 MiB |   1.5% → 4.5% |       1 MiB → 3 MiB |           2 → 4 | `__init__`                                         | `<string>:2`                          |
|  +16.7% | +1 MiB |  9.1% → 10.6% |    6 MiB → 7.01 MiB |         11 → 12 | `__init__`                                         | `./blib2to3/pytree.py:248 → 237`      |
|  +19.7% | +1 MiB |   7.6% → 9.2% | 5.07 MiB → 6.07 MiB |       102 → 103 | `append`                                           | `./black/lines.py:63 → 52`            |
| +933.6% | +1 MiB |   0.2% → 1.7% |  110 KiB → 1.11 MiB |       189 → 190 | `mark`                                             | `./black/brackets.py:70`              |
|  +10.8% | +1 MiB | 14.0% → 15.5% | 9.27 MiB → 10.3 MiB |   9,584 → 9,585 | `visit_power`                                      | `./black/linegen.py:341`              |
|   +6.7% | +1 MiB | 22.6% → 24.1% |     15 MiB → 16 MiB | 23,656 → 23,657 | `generate_comments`                                | `./black/comments.py:52`              |
| +100.0% | +1 MiB |   1.5% → 3.0% |       1 MiB → 2 MiB |           1 → 2 | `line`                                             | `./black/linegen.py:109`              |
| +346.8% | +1 MiB |   0.4% → 1.9% |  295 KiB → 1.29 MiB |       525 → 526 | `visit_NUMBER`                                     | `./black/linegen.py:505`              |
|     new | +1 MiB |   0.0% → 1.5% |         0 B → 1 MiB |           0 → 1 | `closure`                                          | `./blib2to3/pgen2/pgen.py:197`        |
|     new | +1 MiB |   0.0% → 1.5% |         0 B → 1 MiB |           0 → 1 | `make_dfa`                                         | `./blib2to3/pgen2/pgen.py:189`        |
|     new | +1 MiB |   0.0% → 1.5% |         0 B → 1 MiB |           0 → 1 | `__init__`                                         | `./black/trans.py:278`                |
|     new | +1 MiB |   0.0% → 1.5% |         0 B → 1 MiB |           0 → 1 | `clone`                                            | `./black/lines.py:470`                |
|     new | +1 MiB |   0.0% → 1.5% |         0 B → 1 MiB |           0 → 1 | `contains_implicit_multiline_string_with_comments` | `./black/lines.py:250`                |

##### Standard library

| Change |      Delta |    % |     Size | Allocations | Function         | Location                                     |
| -----: | ---------: | ---: | -------: | ----------: | ---------------- | -------------------------------------------- |
|  +0.1% | +2.066 KiB | 4.6% | 3.07 MiB |   108 → 109 | `source_to_code` | `<frozen importlib._bootstrap_external>:942` |
|  +0.1% | +2.066 KiB | 4.9% | 3.23 MiB |   263 → 264 | `get_code`       | `<frozen importlib._bootstrap_external>:950` |

#### Improvements

Functions with the largest decrease in bytes held at peak memory within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Ours

|  Change |      Delta |             % |                Size |     Allocations | Function                     | Location                              |
| ------: | ---------: | ------------: | ------------------: | --------------: | ---------------------------- | ------------------------------------- |
|  -28.6% | -2.002 MiB |  10.6% → 7.5% |       7 MiB → 5 MiB |           8 → 5 | `shift`                      | `./blib2to3/pgen2/parse.py:373 → 361` |
| removed |     -2 MiB |   3.0% → 0.0% |         2 MiB → 0 B |           2 → 0 | `__init__`                   | `./blib2to3/pytree.py:400`            |
|  -66.7% |     -2 MiB |   4.5% → 1.5% |       3 MiB → 1 MiB |           3 → 1 | `__new__`                    | `./blib2to3/pytree.py:81 → 70`        |
| removed |     -2 MiB |   3.0% → 0.0% |         2 MiB → 0 B |           2 → 0 | `clone`                      | `./blib2to3/pytree.py:452`            |
|  -66.7% |     -2 MiB |   4.5% → 1.5% |       3 MiB → 1 MiB |           4 → 2 | `hug_power_op`               | `./black/trans.py:85 → 81`            |
| removed |     -2 MiB |   3.0% → 0.0% |         2 MiB → 0 B |           2 → 0 | `__str__`                    | `./black/lines.py:490`                |
| removed |     -2 MiB |   3.0% → 0.0% |         2 MiB → 0 B |           2 → 0 | `line_to_string`             | `./black/lines.py:1073`               |
|  -59.8% |     -2 MiB |   5.0% → 2.0% | 3.34 MiB → 1.34 MiB |   2,441 → 2,439 | `normalize_invisible_parens` | `./black/linegen.py:1328 → 1344`      |
|  -12.3% |     -2 MiB | 24.5% → 21.5% | 16.2 MiB → 14.2 MiB | 25,907 → 25,905 | `changed`                    | `./blib2to3/pytree.py:171 → 160`      |
|  -12.3% |     -2 MiB | 24.5% → 21.5% | 16.2 MiB → 14.2 MiB | 25,907 → 25,905 | `prefix`                     | `./blib2to3/pytree.py:480 → 469`      |
|  -67.2% |     -2 MiB |   4.5% → 1.5% |  2.98 MiB → 998 KiB |   1,777 → 1,775 | `prefix`                     | `./blib2to3/pytree.py:329 → 318`      |
|  -61.8% |     -2 MiB |   4.9% → 1.9% | 3.24 MiB → 1.24 MiB |   2,253 → 2,251 | `wrap_in_parentheses`        | `./black/nodes.py:935 → 930`          |
|  -14.1% | -1.003 MiB |  10.7% → 9.2% | 7.09 MiB → 6.09 MiB |       106 → 100 | `transform_line`             | `./black/linegen.py:601`              |
|  -24.7% | -1.003 MiB |   6.1% → 4.6% | 4.05 MiB → 3.05 MiB |         99 → 93 | `run_transformer`            | `./black/linegen.py:1755 → 1771`      |
|   -6.2% | -1.001 MiB | 24.2% → 22.7% |   16.1 MiB → 15 MiB |         37 → 35 | `parse_string`               | `./blib2to3/pgen2/driver.py:198`      |
|   -6.2% | -1.001 MiB | 24.2% → 22.7% |   16.1 MiB → 15 MiB |         37 → 35 | `lib2to3_parse`              | `./black/parsing.py:55`               |
|   -6.2% | -1.001 MiB | 24.2% → 22.7% |   16.1 MiB → 15 MiB |         36 → 34 | `parse_tokens`               | `./blib2to3/pgen2/driver.py:114`      |
|   -6.7% | -1.001 MiB | 22.7% → 21.2% |     15 MiB → 14 MiB |         24 → 22 | `addtoken`                   | `./blib2to3/pgen2/parse.py:242 → 230` |
|   -9.1% | -1.001 MiB | 16.6% → 15.1% |     11 MiB → 10 MiB |         17 → 15 | `convert`                    | `./blib2to3/pytree.py:486 → 475`      |
|   -6.7% | -1.001 MiB | 22.6% → 21.1% |     15 MiB → 14 MiB |         21 → 19 | `_addtoken`                  | `./blib2to3/pgen2/parse.py:290 → 278` |

##### Standard library

| Change |      Delta |      % |     Size |     Allocations | Function                    | Location                                     |
| -----: | ---------: | -----: | -------: | --------------: | --------------------------- | -------------------------------------------- |
|    ~0% | -6.596 KiB | 100.0% | 66.3 MiB | 28,448 → 28,443 | `run_module`                | `/usr/local/lib/python3.10/runpy.py:199`     |
|    ~0% | -5.217 KiB |  92.6% | 61.4 MiB | 27,574 → 27,568 | `_run_module_code`          | `/usr/local/lib/python3.10/runpy.py:89`      |
|    ~0% | -5.217 KiB |  92.6% | 61.4 MiB | 27,573 → 27,567 | `_run_code`                 | `/usr/local/lib/python3.10/runpy.py:63`      |
|    ~0% | -1.378 KiB |   7.4% | 4.89 MiB |       873 → 874 | `_get_module_details`       | `/usr/local/lib/python3.10/runpy.py:103`     |
|    ~0% | -1.378 KiB |   7.4% | 4.89 MiB |       869 → 870 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`          |
|    ~0% | -1.378 KiB |   7.4% | 4.89 MiB |       870 → 871 | `exec_module`               | `<frozen importlib._bootstrap_external>:877` |
|    ~0% | -1.378 KiB |   7.4% | 4.89 MiB |       870 → 871 | `_load_unlocked`            | `<frozen importlib._bootstrap>:664`          |
|    ~0% | -1.378 KiB |   7.4% | 4.89 MiB |       870 → 871 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:987`          |
|    ~0% | -1.378 KiB |   7.4% | 4.89 MiB |       870 → 871 | `_find_and_load`            | `<frozen importlib._bootstrap>:1022`         |
|    ~0% |       -8 B |   0.3% |  219 KiB |             222 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1053`         |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `pop` (`./blib2to3/pgen2/parse.py:386`)

| Change |  Delta |      % |             Size | Allocations | Caller      | Location                              |
| -----: | -----: | -----: | ---------------: | ----------: | ----------- | ------------------------------------- |
| +33.3% | +2 MiB | 100.0% | 6 MiB → 8.01 MiB |     11 → 13 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `visit` (`./black/nodes.py:152`)

| Change |  Delta |             % |                Size |     Allocations | Caller             | Location                          |
| -----: | -----: | ------------: | ------------------: | --------------: | ------------------ | --------------------------------- |
| +11.9% | +3 MiB | 94.6% → 98.4% | 25.1 MiB → 28.1 MiB | 25,610 → 25,613 | `visit_stmt`       | `./black/linegen.py:199`          |
|  +7.5% | +2 MiB |        100.0% | 26.6 MiB → 28.6 MiB | 26,393 → 26,395 | `_format_str_once` | `./black/__init__.py:1236 → 1215` |
|  +7.5% | +2 MiB |        100.0% | 26.6 MiB → 28.6 MiB | 26,392 → 26,394 | `visit_default`    | `./black/nodes.py:187 → 176`      |
|  +7.7% | +2 MiB | 97.8% → 97.9% |     26 MiB → 28 MiB | 25,384 → 25,386 | `visit_funcdef`    | `./black/linegen.py:254`          |

##### `visit_default` (`./black/nodes.py:176`)

| Change |  Delta |      % |                Size |     Allocations | Caller          | Location                 |
| -----: | -----: | -----: | ------------------: | --------------: | --------------- | ------------------------ |
|  +7.5% | +2 MiB | 100.0% | 26.6 MiB → 28.6 MiB | 26,392 → 26,394 | `visit_default` | `./black/linegen.py:134` |

##### `visit_default` (`./black/linegen.py:134`)

|  Change |  Delta |             % |                Size |     Allocations | Caller              | Location                     |
| ------: | -----: | ------------: | ------------------: | --------------: | ------------------- | ---------------------------- |
|   +7.5% | +2 MiB |        100.0% | 26.6 MiB → 28.6 MiB | 26,392 → 26,394 | `visit`             | `./black/nodes.py:163 → 152` |
|   +7.7% | +2 MiB | 97.9% → 98.0% |     26 MiB → 28 MiB | 25,386 → 25,388 | `visit_suite`       | `./black/linegen.py:288`     |
|  -10.8% | -2 MiB | 69.8% → 57.9% | 18.5 MiB → 16.5 MiB | 15,456 → 15,454 | `visit_simple_stmt` | `./black/linegen.py:295`     |
|  +10.8% | +1 MiB | 34.9% → 35.9% | 9.26 MiB → 10.3 MiB |   9,582 → 9,583 | `visit_power`       | `./black/linegen.py:341`     |
| +346.8% | +1 MiB |   1.1% → 4.5% |  295 KiB → 1.29 MiB |       525 → 526 | `visit_NUMBER`      | `./black/linegen.py:505`     |

##### `visit_stmt` (`./black/linegen.py:199`)

| Change |  Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
|  +7.6% | +2 MiB | 100.0% | 26.2 MiB → 28.2 MiB | 25,804 → 25,806 | `visit` | `./black/nodes.py:163 → 152` |

##### `visit_suite` (`./black/linegen.py:288`)

| Change |  Delta |      % |            Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | --------------: | --------------: | ------- | ---------------------------- |
|  +7.7% | +2 MiB | 100.0% | 26 MiB → 28 MiB | 25,386 → 25,388 | `visit` | `./black/nodes.py:163 → 152` |

##### `visit_funcdef` (`./black/linegen.py:254`)

| Change |  Delta |      % |            Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | --------------: | --------------: | ------- | ---------------------------- |
|  +7.7% | +2 MiB | 100.0% | 26 MiB → 28 MiB | 25,384 → 25,386 | `visit` | `./black/nodes.py:163 → 152` |

##### `__init__` (`<string>:2`)

|  Change |  Delta |              % |          Size | Allocations | Caller     | Location                 |
| ------: | -----: | -------------: | ------------: | ----------: | ---------- | ------------------------ |
| +200.0% | +2 MiB | 99.9% → 100.0% | 1 MiB → 3 MiB |       1 → 3 | `__init__` | `<string>:2`             |
| +100.0% | +1 MiB |  99.9% → 66.7% | 1 MiB → 2 MiB |       1 → 2 | `line`     | `./black/linegen.py:109` |
|     new | +1 MiB |   0.0% → 33.3% |   0 B → 1 MiB |       0 → 1 | `clone`    | `./black/lines.py:470`   |

##### `__init__` (`./blib2to3/pytree.py:237`)

| Change |  Delta |      % |             Size | Allocations | Caller    | Location                         |
| -----: | -----: | -----: | ---------------: | ----------: | --------- | -------------------------------- |
| +16.7% | +1 MiB | 100.0% | 6 MiB → 7.01 MiB |     11 → 12 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `append` (`./black/lines.py:52`)

| Change |  Delta |      % |                Size | Allocations | Caller          | Location                 |
| -----: | -----: | -----: | ------------------: | ----------: | --------------- | ------------------------ |
| +19.7% | +1 MiB | 100.0% | 5.07 MiB → 6.07 MiB |   102 → 103 | `visit_default` | `./black/linegen.py:134` |

##### `mark` (`./black/brackets.py:70`)

|    Change |  Delta |            % |             Size | Allocations | Caller   | Location                   |
| --------: | -----: | -----------: | ---------------: | ----------: | -------- | -------------------------- |
| +20227.2% | +1 MiB | 4.6% → 90.8% | 5.06 KiB → 1 MiB |       3 → 4 | `append` | `./black/lines.py:63 → 52` |

##### `visit_power` (`./black/linegen.py:341`)

| Change |  Delta |      % |                Size |   Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | ------------: | ------- | ---------------------------- |
| +10.8% | +1 MiB | 100.0% | 9.27 MiB → 10.3 MiB | 9,584 → 9,585 | `visit` | `./black/nodes.py:163 → 152` |

##### `generate_comments` (`./black/comments.py:52`)

| Change |  Delta |      % |            Size |     Allocations | Caller          | Location                 |
| -----: | -----: | -----: | --------------: | --------------: | --------------- | ------------------------ |
|  +6.7% | +1 MiB | 100.0% | 15 MiB → 16 MiB | 23,656 → 23,657 | `visit_default` | `./black/linegen.py:134` |

##### `line` (`./black/linegen.py:109`)

| Change |  Delta |            % |        Size | Allocations | Caller              | Location                 |
| -----: | -----: | -----------: | ----------: | ----------: | ------------------- | ------------------------ |
|    new | +1 MiB | 0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `visit_simple_stmt` | `./black/linegen.py:295` |

##### `visit_NUMBER` (`./black/linegen.py:505`)

|  Change |  Delta |      % |               Size | Allocations | Caller  | Location                     |
| ------: | -----: | -----: | -----------------: | ----------: | ------- | ---------------------------- |
| +346.8% | +1 MiB | 100.0% | 295 KiB → 1.29 MiB |   525 → 526 | `visit` | `./black/nodes.py:163 → 152` |

##### `closure` (`./blib2to3/pgen2/pgen.py:197`)

| Change |  Delta |             % |        Size | Allocations | Caller     | Location                       |
| -----: | -----: | ------------: | ----------: | ----------: | ---------- | ------------------------------ |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `make_dfa` | `./blib2to3/pgen2/pgen.py:189` |

##### `make_dfa` (`./blib2to3/pgen2/pgen.py:189`)

| Change |  Delta |             % |        Size | Allocations | Caller  | Location                       |
| -----: | -----: | ------------: | ----------: | ----------: | ------- | ------------------------------ |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `parse` | `./blib2to3/pgen2/pgen.py:164` |

##### `__init__` (`./black/trans.py:278`)

| Change |  Delta |             % |        Size | Allocations | Caller           | Location                 |
| -----: | -----: | ------------: | ----------: | ----------: | ---------------- | ------------------------ |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `transform_line` | `./black/linegen.py:601` |

##### `clone` (`./black/lines.py:470`)

| Change |  Delta |             % |        Size | Allocations | Caller         | Location              |
| -----: | -----: | ------------: | ----------: | ----------: | -------------- | --------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `hug_power_op` | `./black/trans.py:81` |

##### `contains_implicit_multiline_string_with_comments` (`./black/lines.py:250`)

| Change |  Delta |             % |        Size | Allocations | Caller           | Location                 |
| -----: | -----: | ------------: | ----------: | ----------: | ---------------- | ------------------------ |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `transform_line` | `./black/linegen.py:601` |

##### `source_to_code` (`<frozen importlib._bootstrap_external>:942`)

| Change |      Delta |      % |     Size | Allocations | Caller     | Location                                     |
| -----: | ---------: | -----: | -------: | ----------: | ---------- | -------------------------------------------- |
|  +0.1% | +2.066 KiB | 100.0% | 3.07 MiB |   108 → 109 | `get_code` | `<frozen importlib._bootstrap_external>:950` |

##### `get_code` (`<frozen importlib._bootstrap_external>:950`)

| Change |      Delta |      % |     Size | Allocations | Caller        | Location                                     |
| -----: | ---------: | -----: | -------: | ----------: | ------------- | -------------------------------------------- |
|  +0.1% | +2.066 KiB | 100.0% | 3.23 MiB |   263 → 264 | `exec_module` | `<frozen importlib._bootstrap_external>:877` |

##### `shift` (`./blib2to3/pgen2/parse.py:361`)

| Change |      Delta |      % |          Size | Allocations | Caller      | Location                              |
| -----: | ---------: | -----: | ------------: | ----------: | ----------- | ------------------------------------- |
| -28.6% | -2.002 MiB | 100.0% | 7 MiB → 5 MiB |       8 → 5 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `__init__` (`./blib2to3/pytree.py:400`)

|  Change |  Delta |             % |        Size | Allocations | Caller    | Location                   |
| ------: | -----: | ------------: | ----------: | ----------: | --------- | -------------------------- |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |       2 → 0 | `convert` | `./blib2to3/pytree.py:486` |

##### `__new__` (`./blib2to3/pytree.py:70`)

|  Change |  Delta |            % |        Size | Allocations | Caller  | Location                   |
| ------: | -----: | -----------: | ----------: | ----------: | ------- | -------------------------- |
| removed | -2 MiB | 66.7% → 0.0% | 2 MiB → 0 B |       2 → 0 | `clone` | `./blib2to3/pytree.py:452` |

##### `clone` (`./blib2to3/pytree.py:452`)

|  Change |  Delta |             % |        Size | Allocations | Caller         | Location              |
| ------: | -----: | ------------: | ----------: | ----------: | -------------- | --------------------- |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |       2 → 0 | `hug_power_op` | `./black/trans.py:85` |

##### `hug_power_op` (`./black/trans.py:81`)

|  Change |  Delta |            % |          Size | Allocations | Caller            | Location                         |
| ------: | -----: | -----------: | ------------: | ----------: | ----------------- | -------------------------------- |
| -100.0% | -2 MiB | 66.7% → 0.1% | 2 MiB → 704 B |       3 → 1 | `run_transformer` | `./black/linegen.py:1755 → 1771` |

##### `__str__` (`./black/lines.py:490`)

|  Change |  Delta |             % |        Size | Allocations | Caller           | Location                |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------- | ----------------------- |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |       2 → 0 | `line_to_string` | `./black/lines.py:1073` |

##### `line_to_string` (`./black/lines.py:1073`)

|  Change |  Delta |             % |        Size | Allocations | Caller           | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------- | ------------------------ |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |       2 → 0 | `transform_line` | `./black/linegen.py:601` |

##### `normalize_invisible_parens` (`./black/linegen.py:1344`)

| Change |  Delta |      % |                Size |   Allocations | Caller       | Location                 |
| -----: | -----: | -----: | ------------------: | ------------: | ------------ | ------------------------ |
| -59.8% | -2 MiB | 100.0% | 3.34 MiB → 1.34 MiB | 2,441 → 2,439 | `visit_stmt` | `./black/linegen.py:199` |

##### `changed` (`./blib2to3/pytree.py:160`)

|  Change |  Delta |            % |                Size |     Allocations | Caller    | Location                         |
| ------: | -----: | -----------: | ------------------: | --------------: | --------- | -------------------------------- |
| removed | -2 MiB | 12.3% → 0.0% |         2 MiB → 0 B |           2 → 0 | `changed` | `./blib2to3/pytree.py:171`       |
|  -12.3% | -2 MiB |       100.0% | 16.2 MiB → 14.2 MiB | 25,907 → 25,905 | `prefix`  | `./blib2to3/pytree.py:480 → 469` |

##### `prefix` (`./blib2to3/pytree.py:469`)

| Change |  Delta |            % |               Size |   Allocations | Caller   | Location                         |
| -----: | -----: | -----------: | -----------------: | ------------: | -------- | -------------------------------- |
| -67.2% | -2 MiB | 18.3% → 6.9% | 2.98 MiB → 998 KiB | 1,777 → 1,775 | `prefix` | `./blib2to3/pytree.py:329 → 318` |

##### `prefix` (`./blib2to3/pytree.py:318`)

| Change |  Delta |      % |               Size |   Allocations | Caller                | Location                     |
| -----: | -----: | -----: | -----------------: | ------------: | --------------------- | ---------------------------- |
| -67.2% | -2 MiB | 100.0% | 2.98 MiB → 998 KiB | 1,777 → 1,775 | `wrap_in_parentheses` | `./black/nodes.py:935 → 930` |

##### `wrap_in_parentheses` (`./black/nodes.py:930`)

| Change |  Delta |      % |                Size |   Allocations | Caller                       | Location                         |
| -----: | -----: | -----: | ------------------: | ------------: | ---------------------------- | -------------------------------- |
| -61.8% | -2 MiB | 100.0% | 3.24 MiB → 1.24 MiB | 2,253 → 2,251 | `normalize_invisible_parens` | `./black/linegen.py:1328 → 1344` |

##### `transform_line` (`./black/linegen.py:601`)

|   Change |          Delta |            % |                Size | Allocations | Caller             | Location                          |
| -------: | -------------: | -----------: | ------------------: | ----------: | ------------------ | --------------------------------- |
|   -14.1% |     -1.003 MiB |       100.0% | 7.09 MiB → 6.09 MiB |   106 → 100 | `_format_str_once` | `./black/__init__.py:1236 → 1215` |
| +3966.2% | +1,021.289 KiB | 0.4% → 16.8% | 25.8 KiB → 1.02 MiB |     46 → 43 | `run_transformer`  | `./black/linegen.py:1755 → 1771`  |

##### `run_transformer` (`./black/linegen.py:1771`)

| Change |      Delta |      % |                Size | Allocations | Caller           | Location                 |
| -----: | ---------: | -----: | ------------------: | ----------: | ---------------- | ------------------------ |
| -24.7% | -1.003 MiB | 100.0% | 4.05 MiB → 3.05 MiB |     99 → 93 | `transform_line` | `./black/linegen.py:601` |

##### `parse_string` (`./blib2to3/pgen2/driver.py:198`)

| Change |      Delta |      % |              Size | Allocations | Caller          | Location                |
| -----: | ---------: | -----: | ----------------: | ----------: | --------------- | ----------------------- |
|  -6.2% | -1.001 MiB | 100.0% | 16.1 MiB → 15 MiB |     37 → 35 | `lib2to3_parse` | `./black/parsing.py:55` |

##### `lib2to3_parse` (`./black/parsing.py:55`)

| Change |      Delta |      % |              Size | Allocations | Caller             | Location                          |
| -----: | ---------: | -----: | ----------------: | ----------: | ------------------ | --------------------------------- |
|  -6.2% | -1.001 MiB | 100.0% | 16.1 MiB → 15 MiB |     37 → 35 | `_format_str_once` | `./black/__init__.py:1236 → 1215` |

##### `parse_tokens` (`./blib2to3/pgen2/driver.py:114`)

| Change |      Delta |      % |              Size | Allocations | Caller         | Location                         |
| -----: | ---------: | -----: | ----------------: | ----------: | -------------- | -------------------------------- |
|  -6.2% | -1.001 MiB | 100.0% | 16.1 MiB → 15 MiB |     36 → 34 | `parse_string` | `./blib2to3/pgen2/driver.py:198` |

##### `addtoken` (`./blib2to3/pgen2/parse.py:230`)

| Change |      Delta |      % |            Size | Allocations | Caller         | Location                         |
| -----: | ---------: | -----: | --------------: | ----------: | -------------- | -------------------------------- |
|  -6.7% | -1.001 MiB | 100.0% | 15 MiB → 14 MiB |     24 → 22 | `parse_tokens` | `./blib2to3/pgen2/driver.py:114` |

##### `convert` (`./blib2to3/pytree.py:475`)

| Change |      Delta |             % |             Size | Allocations | Caller  | Location                              |
| -----: | ---------: | ------------: | ---------------: | ----------: | ------- | ------------------------------------- |
| -60.0% | -3.002 MiB | 45.4% → 20.0% |    5 MiB → 2 MiB |       6 → 2 | `shift` | `./blib2to3/pgen2/parse.py:373 → 361` |
| +33.3% |     +2 MiB | 54.6% → 80.0% | 6 MiB → 8.01 MiB |     11 → 13 | `pop`   | `./blib2to3/pgen2/parse.py:398 → 386` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

| Change |      Delta |      % |            Size | Allocations | Caller     | Location                              |
| -----: | ---------: | -----: | --------------: | ----------: | ---------- | ------------------------------------- |
|  -6.7% | -1.001 MiB | 100.0% | 15 MiB → 14 MiB |     21 → 19 | `addtoken` | `./blib2to3/pgen2/parse.py:242 → 230` |

##### `run_module` (`/usr/local/lib/python3.10/runpy.py:199`)

| Change |      Delta |      % |     Size |     Allocations | Caller         | Location                                                       |
| -----: | ---------: | -----: | -------: | --------------: | -------------- | -------------------------------------------------------------- |
|    ~0% | -6.596 KiB | 100.0% | 66.3 MiB | 28,448 → 28,443 | `_run_tracker` | `/venv/lib/python3.10/site-packages/memray/commands/run.py:40` |

##### `_run_module_code` (`/usr/local/lib/python3.10/runpy.py:89`)

| Change |      Delta |      % |     Size |     Allocations | Caller       | Location                                 |
| -----: | ---------: | -----: | -------: | --------------: | ------------ | ---------------------------------------- |
|    ~0% | -5.217 KiB | 100.0% | 61.4 MiB | 27,574 → 27,568 | `run_module` | `/usr/local/lib/python3.10/runpy.py:199` |

##### `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`)

| Change |      Delta |      % |     Size |     Allocations | Caller             | Location                                |
| -----: | ---------: | -----: | -------: | --------------: | ------------------ | --------------------------------------- |
|    ~0% | -5.217 KiB | 100.0% | 61.4 MiB | 27,573 → 27,567 | `_run_module_code` | `/usr/local/lib/python3.10/runpy.py:89` |

##### `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`)

| Change |      Delta |      % |     Size | Allocations | Caller                | Location                                 |
| -----: | ---------: | -----: | -------: | ----------: | --------------------- | ---------------------------------------- |
|    ~0% | -1.378 KiB | 100.0% | 4.89 MiB |   873 → 874 | `run_module`          | `/usr/local/lib/python3.10/runpy.py:199` |
|    ~0% | -1.378 KiB |  99.9% | 4.89 MiB |   870 → 871 | `_get_module_details` | `/usr/local/lib/python3.10/runpy.py:103` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

| Change |      Delta |             % |     Size | Allocations | Caller             | Location                                     |
| -----: | ---------: | ------------: | -------: | ----------: | ------------------ | -------------------------------------------- |
|  -0.1% | -2.669 KiB | 79.4% → 79.3% | 3.88 MiB |   854 → 855 | `exec_module`      | `<frozen importlib._bootstrap_external>:877` |
|  +0.1% | +2.066 KiB | 62.8% → 62.9% | 3.07 MiB |   108 → 109 | `source_to_code`   | `<frozen importlib._bootstrap_external>:942` |
|    ~0% |       -8 B |          4.4% |  219 KiB |         222 | `_handle_fromlist` | `<frozen importlib._bootstrap>:1053`         |

##### `exec_module` (`<frozen importlib._bootstrap_external>:877`)

| Change |      Delta |      % |     Size | Allocations | Caller           | Location                            |
| -----: | ---------: | -----: | -------: | ----------: | ---------------- | ----------------------------------- |
|    ~0% | -1.378 KiB | 100.0% | 4.89 MiB |   870 → 871 | `_load_unlocked` | `<frozen importlib._bootstrap>:664` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:664`)

| Change |      Delta |      % |     Size | Allocations | Caller                    | Location                            |
| -----: | ---------: | -----: | -------: | ----------: | ------------------------- | ----------------------------------- |
|    ~0% | -1.378 KiB | 100.0% | 4.89 MiB |   870 → 871 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:987` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:987`)

| Change |      Delta |      % |     Size | Allocations | Caller           | Location                             |
| -----: | ---------: | -----: | -------: | ----------: | ---------------- | ------------------------------------ |
|    ~0% | -1.378 KiB | 100.0% | 4.89 MiB |   870 → 871 | `_find_and_load` | `<frozen importlib._bootstrap>:1022` |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1022`)

| Change |      Delta |      % |              Size | Allocations | Caller                | Location                                 |
| -----: | ---------: | -----: | ----------------: | ----------: | --------------------- | ---------------------------------------- |
|  -0.1% | -2.669 KiB |  79.1% |          3.87 MiB |   841 → 842 | `<module>`            | `./black/__init__.py:1`                  |
|  -2.9% | -2.367 KiB |   1.6% | 82 KiB → 79.7 KiB |          81 | `<module>`            | `./black/linegen.py:1`                   |
|    ~0% | -1.378 KiB | 100.0% |          4.89 MiB |   870 → 871 | `_get_module_details` | `/usr/local/lib/python3.10/runpy.py:103` |
|  +0.4% |     +794 B |   3.5% |           174 KiB |   163 → 164 | `<module>`            | `./black/files.py:1`                     |
|    ~0% |      +30 B |  25.6% |          1.25 MiB |         206 | `<module>`            | `./black/comments.py:1`                  |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1053`)

| Change | Delta |     % |     Size | Allocations | Caller     | Location                 |
| -----: | ----: | ----: | -------: | ----------: | ---------- | ------------------------ |
|    ~0% |  -8 B | 37.7% | 82.4 KiB |          73 | `<module>` | `./blib2to3/pygram.py:1` |
|    ~0% |  -8 B | 41.0% | 89.7 KiB |          77 | `<module>` | `./black/nodes.py:1`     |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `pop` (`./blib2to3/pgen2/parse.py:386`)

| Change |  Delta |      % |             Size | Allocations | Callee    | Location                         |
| -----: | -----: | -----: | ---------------: | ----------: | --------- | -------------------------------- |
| +33.3% | +2 MiB | 100.0% | 6 MiB → 8.01 MiB |     11 → 13 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `visit` (`./black/nodes.py:152`)

| Change |  Delta |             % |                Size |     Allocations | Callee              | Location                 |
| -----: | -----: | ------------: | ------------------: | --------------: | ------------------- | ------------------------ |
|  +7.5% | +2 MiB |        100.0% | 26.6 MiB → 28.6 MiB | 26,392 → 26,394 | `visit_default`     | `./black/linegen.py:134` |
|  +7.6% | +2 MiB | 98.7% → 98.8% | 26.2 MiB → 28.2 MiB | 25,804 → 25,806 | `visit_stmt`        | `./black/linegen.py:199` |
|  +7.7% | +2 MiB | 97.9% → 98.0% |     26 MiB → 28 MiB | 25,386 → 25,388 | `visit_suite`       | `./black/linegen.py:288` |
|  +7.7% | +2 MiB | 97.8% → 97.9% |     26 MiB → 28 MiB | 25,384 → 25,386 | `visit_funcdef`     | `./black/linegen.py:254` |
|  -5.4% | -1 MiB | 69.8% → 61.4% | 18.5 MiB → 17.5 MiB | 15,457 → 15,456 | `visit_simple_stmt` | `./black/linegen.py:295` |

##### `visit_default` (`./black/nodes.py:176`)

| Change |  Delta |      % |                Size |     Allocations | Callee  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
|  +7.5% | +2 MiB | 100.0% | 26.6 MiB → 28.6 MiB | 26,392 → 26,394 | `visit` | `./black/nodes.py:163 → 152` |

##### `visit_default` (`./black/linegen.py:134`)

| Change |  Delta |             % |                Size |     Allocations | Callee              | Location                     |
| -----: | -----: | ------------: | ------------------: | --------------: | ------------------- | ---------------------------- |
|  +7.5% | +2 MiB |        100.0% | 26.6 MiB → 28.6 MiB | 26,392 → 26,394 | `visit_default`     | `./black/nodes.py:187 → 176` |
| +19.7% | +1 MiB | 19.1% → 21.3% | 5.07 MiB → 6.07 MiB |       102 → 103 | `append`            | `./black/lines.py:63 → 52`   |
|  +6.7% | +1 MiB | 56.4% → 56.0% |     15 MiB → 16 MiB | 23,656 → 23,657 | `generate_comments` | `./black/comments.py:52`     |

##### `visit_stmt` (`./black/linegen.py:199`)

| Change |  Delta |             % |                Size |     Allocations | Callee                       | Location                         |
| -----: | -----: | ------------: | ------------------: | --------------: | ---------------------------- | -------------------------------- |
| +11.9% | +3 MiB | 95.8% → 99.6% | 25.1 MiB → 28.1 MiB | 25,610 → 25,613 | `visit`                      | `./black/nodes.py:163 → 152`     |
| -59.8% | -2 MiB |  12.7% → 4.8% | 3.34 MiB → 1.34 MiB |   2,441 → 2,439 | `normalize_invisible_parens` | `./black/linegen.py:1328 → 1344` |

##### `visit_suite` (`./black/linegen.py:288`)

| Change |  Delta |      % |            Size |     Allocations | Callee          | Location                 |
| -----: | -----: | -----: | --------------: | --------------: | --------------- | ------------------------ |
|  +7.7% | +2 MiB | 100.0% | 26 MiB → 28 MiB | 25,386 → 25,388 | `visit_default` | `./black/linegen.py:134` |

##### `visit_funcdef` (`./black/linegen.py:254`)

| Change |  Delta |      % |            Size |     Allocations | Callee  | Location                     |
| -----: | -----: | -----: | --------------: | --------------: | ------- | ---------------------------- |
|  +7.7% | +2 MiB | 100.0% | 26 MiB → 28 MiB | 25,384 → 25,386 | `visit` | `./black/nodes.py:163 → 152` |

##### `__init__` (`<string>:2`)

|  Change |  Delta |              % |          Size | Allocations | Callee     | Location     |
| ------: | -----: | -------------: | ------------: | ----------: | ---------- | ------------ |
| +200.0% | +2 MiB | 99.9% → 100.0% | 1 MiB → 3 MiB |       1 → 3 | `__init__` | `<string>:2` |

##### `append` (`./black/lines.py:52`)

|    Change |  Delta |             % |             Size | Allocations | Callee       | Location                     |
| --------: | -----: | ------------: | ---------------: | ----------: | ------------ | ---------------------------- |
| +20227.2% | +1 MiB |  0.1% → 16.6% | 5.06 KiB → 1 MiB |       3 → 4 | `mark`       | `./black/brackets.py:70`     |
|       ~0% |  +49 B | 99.9% → 83.4% |         5.06 MiB |          96 | `whitespace` | `./black/nodes.py:194 → 183` |

##### `visit_power` (`./black/linegen.py:341`)

| Change |  Delta |      % |                Size |   Allocations | Callee          | Location                 |
| -----: | -----: | -----: | ------------------: | ------------: | --------------- | ------------------------ |
| +10.8% | +1 MiB | 100.0% | 9.26 MiB → 10.3 MiB | 9,582 → 9,583 | `visit_default` | `./black/linegen.py:134` |

##### `line` (`./black/linegen.py:109`)

|  Change |  Delta |      % |          Size | Allocations | Callee     | Location     |
| ------: | -----: | -----: | ------------: | ----------: | ---------- | ------------ |
| +100.0% | +1 MiB | 100.0% | 1 MiB → 2 MiB |       1 → 2 | `__init__` | `<string>:2` |

##### `visit_NUMBER` (`./black/linegen.py:505`)

|  Change |  Delta |      % |               Size | Allocations | Callee          | Location                 |
| ------: | -----: | -----: | -----------------: | ----------: | --------------- | ------------------------ |
| +346.8% | +1 MiB | 100.0% | 295 KiB → 1.29 MiB |   525 → 526 | `visit_default` | `./black/linegen.py:134` |

##### `make_dfa` (`./blib2to3/pgen2/pgen.py:189`)

| Change |  Delta |             % |        Size | Allocations | Callee    | Location                       |
| -----: | -----: | ------------: | ----------: | ----------: | --------- | ------------------------------ |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `closure` | `./blib2to3/pgen2/pgen.py:197` |

##### `clone` (`./black/lines.py:470`)

| Change |  Delta |             % |        Size | Allocations | Callee     | Location     |
| -----: | -----: | ------------: | ----------: | ----------: | ---------- | ------------ |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `__init__` | `<string>:2` |

##### `source_to_code` (`<frozen importlib._bootstrap_external>:942`)

| Change |      Delta |      % |     Size | Allocations | Callee                      | Location                            |
| -----: | ---------: | -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
|  +0.1% | +2.066 KiB | 100.0% | 3.07 MiB |   108 → 109 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `get_code` (`<frozen importlib._bootstrap_external>:950`)

| Change |      Delta |     % |     Size | Allocations | Callee           | Location                                     |
| -----: | ---------: | ----: | -------: | ----------: | ---------------- | -------------------------------------------- |
|  +0.1% | +2.066 KiB | 95.2% | 3.07 MiB |   108 → 109 | `source_to_code` | `<frozen importlib._bootstrap_external>:942` |

##### `shift` (`./blib2to3/pgen2/parse.py:361`)

| Change |      Delta |             % |          Size | Allocations | Callee    | Location                         |
| -----: | ---------: | ------------: | ------------: | ----------: | --------- | -------------------------------- |
| -60.0% | -3.002 MiB | 71.4% → 40.0% | 5 MiB → 2 MiB |       6 → 2 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `clone` (`./blib2to3/pytree.py:452`)

|  Change |  Delta |             % |        Size | Allocations | Callee    | Location                  |
| ------: | -----: | ------------: | ----------: | ----------: | --------- | ------------------------- |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |       2 → 0 | `__new__` | `./blib2to3/pytree.py:81` |

##### `hug_power_op` (`./black/trans.py:81`)

|  Change |  Delta |            % |        Size | Allocations | Callee  | Location                   |
| ------: | -----: | -----------: | ----------: | ----------: | ------- | -------------------------- |
| removed | -2 MiB | 66.7% → 0.0% | 2 MiB → 0 B |       2 → 0 | `clone` | `./blib2to3/pytree.py:452` |
|     new | +1 MiB | 0.0% → 99.9% | 0 B → 1 MiB |       0 → 1 | `clone` | `./black/lines.py:470`     |

##### `__str__` (`./black/lines.py:490`)

|  Change |  Delta |            % |        Size | Allocations | Callee    | Location                   |
| ------: | -----: | -----------: | ----------: | ----------: | --------- | -------------------------- |
| removed | -1 MiB | 50.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `__str__` | `./blib2to3/pytree.py:440` |

##### `line_to_string` (`./black/lines.py:1073`)

|  Change |  Delta |             % |        Size | Allocations | Callee    | Location               |
| ------: | -----: | ------------: | ----------: | ----------: | --------- | ---------------------- |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |       2 → 0 | `__str__` | `./black/lines.py:490` |

##### `normalize_invisible_parens` (`./black/linegen.py:1344`)

| Change |  Delta |             % |                Size |   Allocations | Callee                | Location                     |
| -----: | -----: | ------------: | ------------------: | ------------: | --------------------- | ---------------------------- |
| -61.8% | -2 MiB | 96.8% → 92.1% | 3.24 MiB → 1.24 MiB | 2,253 → 2,251 | `wrap_in_parentheses` | `./black/nodes.py:935 → 930` |

##### `changed` (`./blib2to3/pytree.py:160`)

|  Change |  Delta |            % |        Size | Allocations | Callee    | Location                   |
| ------: | -----: | -----------: | ----------: | ----------: | --------- | -------------------------- |
| removed | -2 MiB | 12.3% → 0.0% | 2 MiB → 0 B |       2 → 0 | `changed` | `./blib2to3/pytree.py:171` |

##### `prefix` (`./blib2to3/pytree.py:469`)

| Change |  Delta |      % |                Size |     Allocations | Callee    | Location                         |
| -----: | -----: | -----: | ------------------: | --------------: | --------- | -------------------------------- |
| -12.3% | -2 MiB | 100.0% | 16.2 MiB → 14.2 MiB | 25,907 → 25,905 | `changed` | `./blib2to3/pytree.py:171 → 160` |

##### `prefix` (`./blib2to3/pytree.py:318`)

| Change |  Delta |      % |               Size |   Allocations | Callee   | Location                         |
| -----: | -----: | -----: | -----------------: | ------------: | -------- | -------------------------------- |
| -67.2% | -2 MiB | 100.0% | 2.98 MiB → 998 KiB | 1,777 → 1,775 | `prefix` | `./blib2to3/pytree.py:480 → 469` |

##### `wrap_in_parentheses` (`./black/nodes.py:930`)

| Change |  Delta |             % |               Size |   Allocations | Callee   | Location                         |
| -----: | -----: | ------------: | -----------------: | ------------: | -------- | -------------------------------- |
| -67.2% | -2 MiB | 91.9% → 78.9% | 2.98 MiB → 998 KiB | 1,777 → 1,775 | `prefix` | `./blib2to3/pytree.py:329 → 318` |

##### `transform_line` (`./black/linegen.py:601`)

|  Change |      Delta |             % |                Size | Allocations | Callee                                             | Location                         |
| ------: | ---------: | ------------: | ------------------: | ----------: | -------------------------------------------------- | -------------------------------- |
| removed |     -2 MiB |  28.2% → 0.0% |         2 MiB → 0 B |       2 → 0 | `line_to_string`                                   | `./black/lines.py:1073`          |
|  -24.7% | -1.003 MiB | 57.2% → 50.1% | 4.05 MiB → 3.05 MiB |     99 → 93 | `run_transformer`                                  | `./black/linegen.py:1755 → 1771` |
|     new |     +1 MiB |  0.0% → 16.4% |         0 B → 1 MiB |       0 → 1 | `__init__`                                         | `./black/trans.py:278`           |
|     new |     +1 MiB |  0.0% → 16.4% |         0 B → 1 MiB |       0 → 1 | `contains_implicit_multiline_string_with_comments` | `./black/lines.py:250`           |

##### `run_transformer` (`./black/linegen.py:1771`)

|   Change |          Delta |             % |                Size | Allocations | Callee           | Location                   |
| -------: | -------------: | ------------: | ------------------: | ----------: | ---------------- | -------------------------- |
|  -100.0% |         -2 MiB | 49.4% → <0.1% |       2 MiB → 704 B |       3 → 1 | `hug_power_op`   | `./black/trans.py:85 → 81` |
| +3966.2% | +1,021.289 KiB |  0.6% → 33.5% | 25.8 KiB → 1.02 MiB |     46 → 43 | `transform_line` | `./black/linegen.py:601`   |
|   +13.8% |         +584 B |   0.1% → 0.2% |  4.13 KiB → 4.7 KiB |       6 → 7 | `_rhs`           | `./black/linegen.py:650`   |

##### `parse_string` (`./blib2to3/pgen2/driver.py:198`)

| Change |      Delta |      % |              Size | Allocations | Callee         | Location                         |
| -----: | ---------: | -----: | ----------------: | ----------: | -------------- | -------------------------------- |
|  -6.2% | -1.001 MiB | 100.0% | 16.1 MiB → 15 MiB |     36 → 34 | `parse_tokens` | `./blib2to3/pgen2/driver.py:114` |

##### `lib2to3_parse` (`./black/parsing.py:55`)

| Change |      Delta |      % |              Size | Allocations | Callee         | Location                         |
| -----: | ---------: | -----: | ----------------: | ----------: | -------------- | -------------------------------- |
|  -6.2% | -1.001 MiB | 100.0% | 16.1 MiB → 15 MiB |     37 → 35 | `parse_string` | `./blib2to3/pgen2/driver.py:198` |

##### `parse_tokens` (`./blib2to3/pgen2/driver.py:114`)

| Change |      Delta |             % |            Size | Allocations | Callee     | Location                              |
| -----: | ---------: | ------------: | --------------: | ----------: | ---------- | ------------------------------------- |
|  -6.7% | -1.001 MiB | 93.7% → 93.3% | 15 MiB → 14 MiB |     24 → 22 | `addtoken` | `./blib2to3/pgen2/parse.py:242 → 230` |

##### `addtoken` (`./blib2to3/pgen2/parse.py:230`)

| Change |      Delta |     % |            Size | Allocations | Callee      | Location                              |
| -----: | ---------: | ----: | --------------: | ----------: | ----------- | ------------------------------------- |
|  -6.7% | -1.001 MiB | 99.8% | 15 MiB → 14 MiB |     21 → 19 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `convert` (`./blib2to3/pytree.py:475`)

|  Change |  Delta |             % |             Size | Allocations | Callee     | Location                         |
| ------: | -----: | ------------: | ---------------: | ----------: | ---------- | -------------------------------- |
| removed | -2 MiB |  18.2% → 0.0% |      2 MiB → 0 B |       2 → 0 | `__init__` | `./blib2to3/pytree.py:400`       |
|  +16.7% | +1 MiB | 54.6% → 70.0% | 6 MiB → 7.01 MiB |     11 → 12 | `__init__` | `./blib2to3/pytree.py:248 → 237` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

| Change |      Delta |             % |             Size | Allocations | Callee  | Location                              |
| -----: | ---------: | ------------: | ---------------: | ----------: | ------- | ------------------------------------- |
| -28.6% | -2.002 MiB | 46.7% → 35.7% |    7 MiB → 5 MiB |       8 → 5 | `shift` | `./blib2to3/pgen2/parse.py:373 → 361` |
| +33.3% |     +2 MiB | 40.0% → 57.2% | 6 MiB → 8.01 MiB |     11 → 13 | `pop`   | `./blib2to3/pgen2/parse.py:398 → 386` |

##### `run_module` (`/usr/local/lib/python3.10/runpy.py:199`)

| Change |      Delta |     % |     Size |     Allocations | Callee                | Location                                 |
| -----: | ---------: | ----: | -------: | --------------: | --------------------- | ---------------------------------------- |
|    ~0% | -5.217 KiB | 92.6% | 61.4 MiB | 27,574 → 27,568 | `_run_module_code`    | `/usr/local/lib/python3.10/runpy.py:89`  |
|    ~0% | -1.378 KiB |  7.4% | 4.89 MiB |       873 → 874 | `_get_module_details` | `/usr/local/lib/python3.10/runpy.py:103` |

##### `_run_module_code` (`/usr/local/lib/python3.10/runpy.py:89`)

| Change |      Delta |      % |     Size |     Allocations | Callee      | Location                                |
| -----: | ---------: | -----: | -------: | --------------: | ----------- | --------------------------------------- |
|    ~0% | -5.217 KiB | 100.0% | 61.4 MiB | 27,573 → 27,567 | `_run_code` | `/usr/local/lib/python3.10/runpy.py:63` |

##### `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`)

| Change |      Delta |      % |     Size |     Allocations | Callee     | Location                |
| -----: | ---------: | -----: | -------: | --------------: | ---------- | ----------------------- |
|    ~0% | -5.217 KiB | 100.0% | 61.4 MiB | 27,572 → 27,566 | `<module>` | `./black/__main__.py:1` |

##### `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`)

| Change |      Delta |     % |     Size | Allocations | Callee                | Location                                 |
| -----: | ---------: | ----: | -------: | ----------: | --------------------- | ---------------------------------------- |
|    ~0% | -1.378 KiB | 99.9% | 4.89 MiB |   870 → 871 | `_find_and_load`      | `<frozen importlib._bootstrap>:1022`     |
|    ~0% | -1.378 KiB | 99.9% | 4.89 MiB |   870 → 871 | `_get_module_details` | `/usr/local/lib/python3.10/runpy.py:103` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

| Change |      Delta |             % |                Size | Allocations | Callee     | Location                |
| -----: | ---------: | ------------: | ------------------: | ----------: | ---------- | ----------------------- |
|  -0.1% | -2.669 KiB | 79.4% → 79.3% |            3.88 MiB |   854 → 855 | `<module>` | `./black/__init__.py:1` |
|  -2.6% | -2.367 KiB |          1.8% |   91 KiB → 88.6 KiB |          87 | `<module>` | `./black/linegen.py:1`  |
|  -7.6% | -2.367 KiB |          0.6% | 31.1 KiB → 28.8 KiB |          30 | `<module>` | `./black/trans.py:1`    |
| -23.5% |  -1.07 KiB |          0.1% | 4.56 KiB → 3.49 KiB |           4 | `<module>` | `./black/ranges.py:1`   |
|  +0.4% |     +794 B |          3.5% |   176 KiB → 177 KiB |   164 → 165 | `<module>` | `./black/files.py:1`    |

##### `exec_module` (`<frozen importlib._bootstrap_external>:877`)

| Change |      Delta |             % |     Size | Allocations | Callee                      | Location                                     |
| -----: | ---------: | ------------: | -------: | ----------: | --------------------------- | -------------------------------------------- |
|  -0.1% | -2.669 KiB | 79.4% → 79.3% | 3.88 MiB |   854 → 855 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`          |
|  +0.1% | +2.066 KiB | 66.0% → 66.1% | 3.23 MiB |   263 → 264 | `get_code`                  | `<frozen importlib._bootstrap_external>:950` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:664`)

| Change |      Delta |      % |     Size | Allocations | Callee        | Location                                     |
| -----: | ---------: | -----: | -------: | ----------: | ------------- | -------------------------------------------- |
|    ~0% | -1.378 KiB | 100.0% | 4.89 MiB |   870 → 871 | `exec_module` | `<frozen importlib._bootstrap_external>:877` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:987`)

| Change |      Delta |      % |     Size | Allocations | Callee           | Location                            |
| -----: | ---------: | -----: | -------: | ----------: | ---------------- | ----------------------------------- |
|    ~0% | -1.378 KiB | 100.0% | 4.89 MiB |   870 → 871 | `_load_unlocked` | `<frozen importlib._bootstrap>:664` |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1022`)

| Change |      Delta |      % |     Size | Allocations | Callee                    | Location                            |
| -----: | ---------: | -----: | -------: | ----------: | ------------------------- | ----------------------------------- |
|    ~0% | -1.378 KiB | 100.0% | 4.89 MiB |   870 → 871 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:987` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1053`)

| Change | Delta |      % |    Size | Allocations | Callee                      | Location                            |
| -----: | ----: | -----: | ------: | ----------: | --------------------------- | ----------------------------------- |
|    ~0% |  -8 B | 100.0% | 219 KiB |         222 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes held at peak memory in their leaf frame.

Common call stack: `run_module` (`/usr/local/lib/python3.10/runpy.py:199`) ← `_run_tracker` (`/venv/lib/python3.10/site-packages/memray/commands/run.py:40`)

|   Change |  Delta |            % |                Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------: | -----: | -----------: | ------------------: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      new | +2 MiB |  0.0% → 3.0% |         0 B → 2 MiB |       0 → 2 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `preceding_leaf` (`./black/nodes.py:436`) ← `whitespace` (183) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|   +16.7% | +1 MiB | 9.1% → 10.6% |    6 MiB → 7.01 MiB |     11 → 12 | `__init__` (`./blib2to3/pytree.py:237`) ← `convert` (475) ← `pop` (`./blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|   +50.0% | +1 MiB |  3.0% → 4.5% |       2 MiB → 3 MiB |       2 → 3 | `shift` (`./blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| +2678.2% | +1 MiB |  0.1% → 1.6% | 38.2 KiB → 1.04 MiB |       4 → 5 | `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|      new | +1 MiB |  0.0% → 1.5% |         0 B → 1 MiB |       0 → 1 | `closure` (`./blib2to3/pgen2/pgen.py:197`) ← `make_dfa` (189) ← `parse` (164) ← `__init__` (23) ← `generate_grammar` (415) ← `load_grammar` (`./blib2to3/pgen2/driver.py:246`) ← `load_packaged_grammar` (280) ← `initialize` (`./blib2to3/pygram.py:165`) ← `<module>` (`./black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `<module>` (`./black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `<module>` (`./black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`) ← `_get_module_details` (103)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|      new | +1 MiB |  0.0% → 1.5% |         0 B → 1 MiB |       0 → 1 | `convert` (`./blib2to3/pytree.py:475`) ← `pop` (`./blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|      new | +1 MiB |  0.0% → 1.5% |         0 B → 1 MiB |       0 → 1 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `whitespace` (`./black/nodes.py:183`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|      new | +1 MiB |  0.0% → 1.5% |         0 B → 1 MiB |       0 → 1 | `__init__` (`./black/trans.py:278`) ← `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|      new | +1 MiB |  0.0% → 1.5% |         0 B → 1 MiB |       0 → 1 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|      new | +1 MiB |  0.0% → 1.5% |         0 B → 1 MiB |       0 → 1 | `mark` (`./black/brackets.py:70`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|      new | +1 MiB |  0.0% → 1.5% |         0 B → 1 MiB |       0 → 1 | `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|      new | +1 MiB |  0.0% → 1.5% |         0 B → 1 MiB |       0 → 1 | `__init__` (`<string>:2`) ← `__init__` (2) ← `clone` (`./black/lines.py:470`) ← `hug_power_op` (`./black/trans.py:81`) ← `_hugging_power_ops_line_to_string` (`./black/linegen.py:590`) ← `transform_line` (601) ← `run_transformer` (1771) ← `transform_line` (601) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|      new | +1 MiB |  0.0% → 1.5% |         0 B → 1 MiB |       0 → 1 | `prev_sibling` (`./blib2to3/pytree.py:196`) ← `whitespace` (`./black/nodes.py:183`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|      new | +1 MiB |  0.0% → 1.5% |         0 B → 1 MiB |       0 → 1 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `whitespace` (`./black/nodes.py:183`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit_NUMBER` (505) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|      new | +1 MiB |  0.0% → 1.5% |         0 B → 1 MiB |       0 → 1 | `__init__` (`<string>:2`) ← `__init__` (2) ← `line` (`./black/linegen.py:109`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|      new | +1 MiB |  0.0% → 1.5% |         0 B → 1 MiB |       0 → 1 | `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|      new | +1 MiB |  0.0% → 1.5% |         0 B → 1 MiB |       0 → 1 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|      new | +1 MiB |  0.0% → 1.5% |         0 B → 1 MiB |       0 → 1 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|      new | +1 MiB |  0.0% → 1.5% |         0 B → 1 MiB |       0 → 1 | `contains_implicit_multiline_string_with_comments` (`./black/lines.py:250`) ← `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|      new | +1 MiB |  0.0% → 1.5% |         0 B → 1 MiB |       0 → 1 | `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89) |

### Improvements

Call stacks with the largest decrease in bytes held at peak memory in their leaf frame.

Common call stack: `run_module` (`/usr/local/lib/python3.10/runpy.py:199`) ← `_run_tracker` (`/venv/lib/python3.10/site-packages/memray/commands/run.py:40`)

|  Change |      Delta |            % |                Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------: | ---------: | -----------: | ------------------: | ----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |     -2 MiB |  3.0% → 0.0% |         2 MiB → 0 B |       2 → 0 | `__init__` (`./blib2to3/pytree.py:400`) ← `convert` (486) ← `shift` (`./blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  -50.1% | -1.002 MiB |  3.0% → 1.5% |       2 MiB → 1 MiB |       3 → 1 | `convert` (`./blib2to3/pytree.py:475`) ← `shift` (`./blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed |     -1 MiB |  1.5% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__` (`./blib2to3/pgen2/pgen.py:376`) ← `parse_atom` (329) ← `parse_item` (309) ← `parse_alt` (300) ← `parse_rhs` (283) ← `parse_atom` (329) ← `parse_item` (309) ← `parse_alt` (300) ← `parse_rhs` (283) ← `parse` (175) ← `__init__` (34) ← `generate_grammar` (426) ← `load_grammar` (`./blib2to3/pgen2/driver.py:246`) ← `load_packaged_grammar` (280) ← `initialize` (`./blib2to3/pygram.py:165`) ← `<module>` (`./black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `<module>` (`./black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `<module>` (`./black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`) ← `_get_module_details` (103)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |     -1 MiB |  1.5% → 0.0% |         1 MiB → 0 B |       1 → 0 | `_addtoken` (`./blib2to3/pgen2/parse.py:290`) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed |     -1 MiB |  1.5% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__new__` (`./blib2to3/pytree.py:81`) ← `clone` (452) ← `hug_power_op` (`./black/trans.py:85`) ← `_hugging_power_ops_line_to_string` (`./black/linegen.py:590`) ← `transform_line` (601) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -99.9% |     -1 MiB | 1.5% → <0.1% |       1 MiB → 704 B |       2 → 1 | `hug_power_op` (`./black/trans.py:81`) ← `run_transformer` (`./black/linegen.py:1771`) ← `transform_line` (601) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed |     -1 MiB |  1.5% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__str__` (`./blib2to3/pytree.py:440`) ← `__str__` (`./black/lines.py:490`) ← `line_to_string` (1073) ← `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  -99.1% |     -1 MiB | 1.5% → <0.1% |    1.01 MiB → 9 KiB |     17 → 16 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `preceding_leaf` (`./black/nodes.py:436`) ← `whitespace` (183) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -94.9% |     -1 MiB |  1.6% → 0.1% | 1.05 MiB → 54.6 KiB |     85 → 84 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `prev_siblings_are` (`./black/nodes.py:454`) ← `is_docstring` (553) ← `visit_STRING` (`./black/linegen.py:413`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed |     -1 MiB |  1.5% → 0.0% |         1 MiB → 0 B |       1 → 0 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89) |
| removed |     -1 MiB |  1.5% → 0.0% |         1 MiB → 0 B |       1 → 0 | `prev_sibling` (`./blib2to3/pytree.py:207`) ← `preceding_leaf` (`./black/nodes.py:441`) ← `whitespace` (194) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed |     -1 MiB |  1.5% → 0.0% |         1 MiB → 0 B |       1 → 0 | `update_sibling_maps` (`./blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`./black/nodes.py:194`) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                 |
| removed |     -1 MiB |  1.5% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__str__` (`./black/lines.py:490`) ← `line_to_string` (1073) ← `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |     -1 MiB |  1.5% → 0.0% |         1 MiB → 0 B |       1 → 0 | `changed` (`./blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `prefix` (329) ← `wrap_in_parentheses` (`./black/nodes.py:935`) ← `normalize_invisible_parens` (`./black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed |     -1 MiB |  1.5% → 0.0% |         1 MiB → 0 B |       1 → 0 | `prev_sibling` (`./blib2to3/pytree.py:207`) ← `whitespace` (`./black/nodes.py:194`) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| removed |     -1 MiB |  1.5% → 0.0% |         1 MiB → 0 B |       1 → 0 | `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed |     -1 MiB |  1.5% → 0.0% |         1 MiB → 0 B |       1 → 0 | `changed` (`./blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `prefix` (329) ← `wrap_in_parentheses` (`./black/nodes.py:935`) ← `normalize_invisible_parens` (`./black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed |     -1 MiB |  1.5% → 0.0% |         1 MiB → 0 B |       1 → 0 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |     -1 MiB |  1.5% → 0.0% |         1 MiB → 0 B |       1 → 0 | `update_sibling_maps` (`./blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`./black/nodes.py:194`) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed |     -1 MiB |  1.5% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__new__` (`./blib2to3/pytree.py:81`) ← `clone` (452) ← `hug_power_op` (`./black/trans.py:85`) ← `run_transformer` (`./black/linegen.py:1755`) ← `transform_line` (601) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

# Leaked memory profile diff

Leaked 57.6 MiB → 58.7 MiB (+1.048 MiB, +1.8%) over 27,439 → 27,468 allocations (2.15 KiB → 2.19 KiB per allocation).

| Category         | Change |       Delta |             % |                Size |     Allocations |
| ---------------- | -----: | ----------: | ------------: | ------------------: | --------------: |
| Ours             |  +0.1% | +47.485 KiB | 90.2% → 88.7% |              52 MiB | 26,732 → 26,759 |
| Standard library | +18.4% |  +1.002 MiB |  9.4% → 11.0% | 5.44 MiB → 6.44 MiB |       492 → 494 |
| Third-party      |   0.0% |         0 B |          0.4% |             216 KiB |             215 |

Paths starting with `./` or `../` are relative to `/src/black/src/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
└── 57.6 MiB → 58.7 MiB (100.0%) _run_tracker at /venv/lib/python3.10/site-packages/memray/commands/run.py:40
    └── 57.6 MiB → 58.7 MiB (100.0%) run_module at /usr/local/lib/python3.10/runpy.py:199
        ├── … 52.7 MiB → 53.8 MiB (91.5% → 91.6%) format_file_contents at ./black/__init__.py:1054 → 1059
        │   ├── 36.1 MiB (62.6% → 61.5%) format_str at 1189 → 1168
        │   │   └── 36.1 MiB (62.6% → 61.5%) _format_str_once at 1236 → 1215
        │   │       ├── … 16 MiB → 15 MiB (27.8% → 25.6%) parse_tokens at ./blib2to3/pgen2/driver.py:114
        │   │       │   ├── 15 MiB → 14 MiB (26.0% → 23.9%) addtoken at ./blib2to3/pgen2/parse.py:242 → 230
        │   │       │   │   └── 15 MiB → 14 MiB (26.0% → 23.9%, self 1.7% → 0.0%) _addtoken at 290 → 278
        │   │       │   │       ├── 6 MiB → 8 MiB (10.4% → 13.6%) pop at 398 → 386
        │   │       │   │       │   └── 6 MiB → 8 MiB (10.4% → 13.6%, self 0.0% → 1.7%) convert at ./blib2to3/pytree.py:486 → 475
        │   │       │   │       │       └── 6 MiB → 7 MiB (10.4% → 11.9%) __init__ at 248 → 237
        │   │       │   │       ├── 7 MiB → 5 MiB (12.1% → 8.5%, self 3.5% → 5.1%) shift at 373 → 361
        │   │       │   │       │   └── 5 MiB → 2 MiB (8.7% → 3.4%, self 3.5% → 1.7%, self 3.5% → 3.4% globally) convert at ./blib2to3/pytree.py:486 → 475
        │   │       │   │       │       ├── 2 MiB → 0 B (3.5% → 0.0%) __init__ at 400
        │   │       │   │       │       └── 1 MiB (1.7%, self 5.2% → 1.7% globally) __new__ at 81 → 70
        │   │       │   │       └── 1 MiB (1.7%) push at 386 → 374
        │   │       │   └── 1 MiB (1.7%) __next__ at 80 …
        │   │       ├── 12 MiB → 14 MiB (20.9% → 23.9%, self <0.1% → 1.7%) visit at ./black/nodes.py:163 → 152
        │   │       │   ├── … 8.01 MiB → 10 MiB (13.9% → 17.1%, self 1.7% → 3.4%) visit_default at ./black/linegen.py:134
        │   │       │   │   └── 7.01 MiB → 8.01 MiB (12.2% → 13.7%) 2 more callees, led by (8.7% → 8.5%) append at ./black/lines.py:63 → 52
        │   │       │   ├── … 2 MiB → 0 B (3.5% → 0.0%, self 28.2% → 24.2% globally) changed at ./blib2to3/pytree.py:171 → 160
        │   │       │   ├── … 1 MiB → 0 B (1.7% → 0.0%, self 3.5% → 1.7% globally) prev_sibling at ./blib2to3/pytree.py:207 → 196
        │   │       │   │   └── 1 MiB → 0 B (1.7% → 0.0%, self 7.2% → 7.1% globally) update_sibling_maps at 369 → 358
        │   │       │   └── 1.01 MiB → 3.01 MiB (1.8% → 5.1%) 6 more callees, led by (1.7%) visit_INDENT at ./black/linegen.py:179
        │   │       ├── 7.02 MiB → 6.02 MiB (12.2% → 10.3%, self <0.1% → 1.7%) transform_line at ./black/linegen.py:601
        │   │       │   ├── … 1 MiB (1.7%) _hugging_power_ops_line_to_string at ./black/linegen.py:590
        │   │       │   │   └── 1 MiB (1.7%, self 1.7% → <0.1% globally) hug_power_op at ./black/trans.py:85 → 81
        │   │       │   │       ├── 1 MiB → 0 B (1.7% → 0.0%) clone at ./blib2to3/pytree.py:452
        │   │       │   │       │   └── 1 MiB → 0 B (1.7% → 0.0%) __new__ at ./blib2to3/pytree.py:81 → 70
        │   │       │   │       └── 0 B → 1 MiB (0.0% → 1.7%) clone at ./black/lines.py:470
        │   │       │   │           └── 0 B → 1 MiB (0.0% → 1.7%, self 1.7% → 5.1% globally) __init__ at <string>:2
        │   │       │   └── 6.01 MiB → 4.02 MiB (10.4% → 6.8%) 4 more callees, led by (7.0% → 3.4%) run_transformer at 1755 → 1771
        │   │       └── 1 MiB (1.7%, self 1.7%) maybe_empty_lines at ./black/lines.py:560 → 549
        │   └── 16.6 MiB → 17.7 MiB (28.8% → 30.1%) check_stability_and_equivalence at 1037 → 1042
        │       ├── … 14.5 MiB (25.2% → 24.8%) visit at ./black/nodes.py:163 → 152
        │       │   ├── … 11.2 MiB (19.4% → 19.1%) visit_default at ./black/linegen.py:134
        │       │   │   └── 11.2 MiB (19.4% → 19.1%) 2 more callees, led by (19.4% → 19.0%) generate_comments at ./black/comments.py:52
        │       │   └── 3.33 MiB (5.8% → 5.7%) 7 more callees, led by (2.3%) visit_stmt at ./black/linegen.py:199
        │       └── … 2 MiB → 3 MiB (3.5% → 5.1%) parse at /usr/local/lib/python3.10/ast.py:33
        └── 4.89 MiB (8.5% → 8.3%) _get_module_details at 103 …
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes never freed within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|     Change |      Delta |             % |                Size | Allocations | Function                                           | Location                              |
| ---------: | ---------: | ------------: | ------------------: | ----------: | -------------------------------------------------- | ------------------------------------- |
|    +199.9% |     +2 MiB |   1.7% → 5.1% |       1 MiB → 3 MiB |       2 → 4 | `__init__`                                         | `<string>:2`                          |
|   +2341.2% | +1.038 MiB |   0.1% → 1.8% | 45.4 KiB → 1.08 MiB |     17 → 23 | `transform_line`                                   | `./black/linegen.py:601`              |
|     +16.7% |     +1 MiB | 10.4% → 11.9% |    6 MiB → 7.01 MiB |     11 → 12 | `__init__`                                         | `./blib2to3/pytree.py:248 → 237`      |
|     +50.0% |     +1 MiB |   3.5% → 5.1% |       2 MiB → 3 MiB |       2 → 3 | `shift`                                            | `./blib2to3/pgen2/parse.py:373 → 361` |
| +201649.2% |     +1 MiB |  <0.1% → 1.7% |       520 B → 1 MiB |       1 → 2 | `visit`                                            | `./black/nodes.py:163 → 152`          |
|    +100.0% |     +1 MiB |   1.7% → 3.4% |       1 MiB → 2 MiB |       1 → 2 | `visit_default`                                    | `./black/linegen.py:134`              |
|    +962.3% |     +1 MiB |   0.2% → 1.9% |   106 KiB → 1.1 MiB |   188 → 189 | `mark`                                             | `./black/brackets.py:70`              |
|     +50.0% |     +1 MiB |   3.5% → 5.1% |       2 MiB → 3 MiB |       2 → 3 | `generate_comments`                                | `./black/comments.py:52`              |
|     +50.0% |     +1 MiB |   3.5% → 5.1% |       2 MiB → 3 MiB |       2 → 3 | `parse`                                            | `/usr/local/lib/python3.10/ast.py:33` |
|        new |     +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |       0 → 1 | `closure`                                          | `./blib2to3/pgen2/pgen.py:197`        |
|        new |     +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |       0 → 1 | `__init__`                                         | `./black/trans.py:278`                |
|        new |     +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |       0 → 1 | `contains_implicit_multiline_string_with_comments` | `./black/lines.py:250`                |
|      +0.5% | +9.828 KiB |          3.5% | 2.03 MiB → 2.04 MiB |     48 → 65 | `run_transformer`                                  | `./black/linegen.py:1755 → 1771`      |
|     +94.2% | +2.156 KiB |         <0.1% | 2.29 KiB → 4.45 KiB |       2 → 6 | `_maybe_split_omitting_optional_parens`            | `./black/linegen.py:932`              |
|      +0.1% | +2.066 KiB |   5.3% → 5.2% |            3.07 MiB |   108 → 109 | `_call_with_frames_removed`                        | `<frozen importlib._bootstrap>:233`   |
|    +100.0% | +1.031 KiB |         <0.1% | 1.03 KiB → 2.06 KiB |       2 → 4 | `_hugging_power_ops_line_to_string`                | `./black/linegen.py:590`              |
|     +94.5% |     +552 B |         <0.1% |    584 B → 1.11 KiB |       1 → 2 | `right_hand_split`                                 | `./black/linegen.py:809`              |
|      +0.5% |      +49 B |         <0.1% |  8.75 KiB → 8.8 KiB |           2 | `whitespace`                                       | `./black/nodes.py:194 → 183`          |
|      +2.7% |      +32 B |         <0.1% | 1.15 KiB → 1.18 KiB |           2 | `_format_str_once`                                 | `./black/__init__.py:1236 → 1215`     |

##### Ours

|     Change |      Delta |             % |                Size | Allocations | Function                                           | Location                              |
| ---------: | ---------: | ------------: | ------------------: | ----------: | -------------------------------------------------- | ------------------------------------- |
|    +199.9% |     +2 MiB |   1.7% → 5.1% |       1 MiB → 3 MiB |       2 → 4 | `__init__`                                         | `<string>:2`                          |
|   +2341.2% | +1.038 MiB |   0.1% → 1.8% | 45.4 KiB → 1.08 MiB |     17 → 23 | `transform_line`                                   | `./black/linegen.py:601`              |
|     +16.7% |     +1 MiB | 10.4% → 11.9% |    6 MiB → 7.01 MiB |     11 → 12 | `__init__`                                         | `./blib2to3/pytree.py:248 → 237`      |
|     +50.0% |     +1 MiB |   3.5% → 5.1% |       2 MiB → 3 MiB |       2 → 3 | `shift`                                            | `./blib2to3/pgen2/parse.py:373 → 361` |
| +201649.2% |     +1 MiB |  <0.1% → 1.7% |       520 B → 1 MiB |       1 → 2 | `visit`                                            | `./black/nodes.py:163 → 152`          |
|    +100.0% |     +1 MiB |   1.7% → 3.4% |       1 MiB → 2 MiB |       1 → 2 | `visit_default`                                    | `./black/linegen.py:134`              |
|    +962.3% |     +1 MiB |   0.2% → 1.9% |   106 KiB → 1.1 MiB |   188 → 189 | `mark`                                             | `./black/brackets.py:70`              |
|     +50.0% |     +1 MiB |   3.5% → 5.1% |       2 MiB → 3 MiB |       2 → 3 | `generate_comments`                                | `./black/comments.py:52`              |
|        new |     +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |       0 → 1 | `closure`                                          | `./blib2to3/pgen2/pgen.py:197`        |
|        new |     +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |       0 → 1 | `__init__`                                         | `./black/trans.py:278`                |
|        new |     +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |       0 → 1 | `contains_implicit_multiline_string_with_comments` | `./black/lines.py:250`                |
|      +0.5% | +9.828 KiB |          3.5% | 2.03 MiB → 2.04 MiB |     48 → 65 | `run_transformer`                                  | `./black/linegen.py:1755 → 1771`      |
|     +94.2% | +2.156 KiB |         <0.1% | 2.29 KiB → 4.45 KiB |       2 → 6 | `_maybe_split_omitting_optional_parens`            | `./black/linegen.py:932`              |
|    +100.0% | +1.031 KiB |         <0.1% | 1.03 KiB → 2.06 KiB |       2 → 4 | `_hugging_power_ops_line_to_string`                | `./black/linegen.py:590`              |
|     +94.5% |     +552 B |         <0.1% |    584 B → 1.11 KiB |       1 → 2 | `right_hand_split`                                 | `./black/linegen.py:809`              |
|      +0.5% |      +49 B |         <0.1% |  8.75 KiB → 8.8 KiB |           2 | `whitespace`                                       | `./black/nodes.py:194 → 183`          |
|      +2.7% |      +32 B |         <0.1% | 1.15 KiB → 1.18 KiB |           2 | `_format_str_once`                                 | `./black/__init__.py:1236 → 1215`     |

##### Standard library

| Change |      Delta |           % |          Size | Allocations | Function                    | Location                              |
| -----: | ---------: | ----------: | ------------: | ----------: | --------------------------- | ------------------------------------- |
| +50.0% |     +1 MiB | 3.5% → 5.1% | 2 MiB → 3 MiB |       2 → 3 | `parse`                     | `/usr/local/lib/python3.10/ast.py:33` |
|  +0.1% | +2.066 KiB | 5.3% → 5.2% |      3.07 MiB |   108 → 109 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`   |

#### Improvements

Functions with the largest decrease in bytes never freed within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Ours

|  Change |      Delta |             % |                Size |     Allocations | Function                  | Location                              |
| ------: | ---------: | ------------: | ------------------: | --------------: | ------------------------- | ------------------------------------- |
| removed |     -2 MiB |   3.5% → 0.0% |         2 MiB → 0 B |           2 → 0 | `__init__`                | `./blib2to3/pytree.py:400`            |
|  -66.7% |     -2 MiB |   5.2% → 1.7% |       3 MiB → 1 MiB |           3 → 1 | `__new__`                 | `./blib2to3/pytree.py:81 → 70`        |
|  -12.3% |     -2 MiB | 28.2% → 24.2% | 16.2 MiB → 14.2 MiB | 25,907 → 25,905 | `changed`                 | `./blib2to3/pytree.py:171 → 160`      |
| removed |     -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__init__`                | `./blib2to3/pgen2/pgen.py:376`        |
| removed |     -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `_addtoken`               | `./blib2to3/pgen2/parse.py:290 → 278` |
|  -99.9% |     -1 MiB |  1.7% → <0.1% |       1 MiB → 704 B |           2 → 1 | `hug_power_op`            | `./black/trans.py:85 → 81`            |
| removed |     -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__str__`                 | `./blib2to3/pytree.py:440`            |
| removed |     -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__str__`                 | `./black/lines.py:490`                |
|  -50.0% |     -1 MiB |   3.5% → 1.7% |       2 MiB → 1 MiB |           2 → 1 | `prev_sibling`            | `./blib2to3/pytree.py:207 → 196`      |
|   -0.1% |     -3 KiB |   3.5% → 3.4% |               2 MiB |           3 → 2 | `convert`                 | `./blib2to3/pytree.py:486 → 475`      |
|  -23.0% | -2.367 KiB |         <0.1% | 10.3 KiB → 7.91 KiB |               8 | `<module>`                | `./black/trans.py:1`                  |
|  -26.8% |  -1.07 KiB |         <0.1% |    4 KiB → 2.93 KiB |               3 | `<module>`                | `./black/ranges.py:1`                 |
| removed |     -520 B |  <0.1% → 0.0% |         520 B → 0 B |           1 → 0 | `_first_right_hand_split` | `./black/linegen.py:829`              |
|     ~0% |       -8 B |         <0.1% |            22.3 KiB |              13 | `<module>`                | `./blib2to3/pgen2/tokenize.py:1`      |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `__init__` (`<string>:2`)

| Change |  Delta |            % |        Size | Allocations | Location     |
| -----: | -----: | -----------: | ----------: | ----------: | ------------ |
|    new | +1 MiB | 0.0% → 33.3% | 0 B → 1 MiB |       0 → 1 | `<string>:3` |
|    new | +1 MiB | 0.0% → 33.3% | 0 B → 1 MiB |       0 → 1 | `<string>:8` |

##### `transform_line` (`./black/linegen.py:601`)

|  Change |       Delta |            % |               Size | Allocations | Location                 |
| ------: | ----------: | -----------: | -----------------: | ----------: | ------------------------ |
|     new |      +1 MiB | 0.0% → 92.3% |        0 B → 1 MiB |       0 → 1 | `./black/linegen.py:626` |
| +104.9% | +38.757 KiB | 81.3% → 6.8% |  37 KiB → 75.7 KiB |       2 → 5 | `./black/linegen.py:679` |
|  +15.4% |  +1.046 KiB | 15.0% → 0.7% | 6.8 KiB → 7.85 KiB |     13 → 15 | `./black/linegen.py:714` |

##### `__init__` (`./blib2to3/pytree.py:237`)

| Change |      Delta |              % |          Size | Allocations | Location                         |
| -----: | ---------: | -------------: | ------------: | ----------: | -------------------------------- |
|    new | +2.002 MiB |   0.0% → 28.6% |   0 B → 2 MiB |       0 → 3 | `./blib2to3/pytree.py:256`       |
| -16.7% | -1.001 MiB | 100.0% → 71.4% | 6 MiB → 5 MiB |       7 → 5 | `./blib2to3/pytree.py:269 → 258` |

##### `shift` (`./blib2to3/pgen2/parse.py:361`)

| Change |  Delta |      % |          Size | Allocations | Location                              |
| -----: | -----: | -----: | ------------: | ----------: | ------------------------------------- |
| +50.0% | +1 MiB | 100.0% | 2 MiB → 3 MiB |       2 → 3 | `./blib2to3/pgen2/parse.py:383 → 371` |

##### `visit` (`./black/nodes.py:152`)

| Change |  Delta |             % |        Size | Allocations | Location               |
| -----: | -----: | ------------: | ----------: | ----------: | ---------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./black/nodes.py:174` |

##### `visit_default` (`./black/linegen.py:134`)

|  Change |  Delta |      % |          Size | Allocations | Location                 |
| ------: | -----: | -----: | ------------: | ----------: | ------------------------ |
| +100.0% | +1 MiB | 100.0% | 1 MiB → 2 MiB |       1 → 2 | `./black/linegen.py:158` |

##### `mark` (`./black/brackets.py:70`)

| Change |  Delta |            % |        Size | Allocations | Location                  |
| -----: | -----: | -----------: | ----------: | ----------: | ------------------------- |
|    new | +1 MiB | 0.0% → 90.6% | 0 B → 1 MiB |       0 → 1 | `./black/brackets.py:122` |

##### `generate_comments` (`./black/comments.py:52`)

| Change |  Delta |      % |          Size | Allocations | Location                 |
| -----: | -----: | -----: | ------------: | ----------: | ------------------------ |
| +50.0% | +1 MiB | 100.0% | 2 MiB → 3 MiB |       2 → 3 | `./black/comments.py:72` |

##### `parse` (`/usr/local/lib/python3.10/ast.py:33`)

| Change |  Delta |      % |          Size | Allocations | Location                              |
| -----: | -----: | -----: | ------------: | ----------: | ------------------------------------- |
| +50.0% | +1 MiB | 100.0% | 2 MiB → 3 MiB |       2 → 3 | `/usr/local/lib/python3.10/ast.py:50` |

##### `closure` (`./blib2to3/pgen2/pgen.py:197`)

| Change |  Delta |             % |        Size | Allocations | Location                       |
| -----: | -----: | ------------: | ----------: | ----------: | ------------------------------ |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./blib2to3/pgen2/pgen.py:198` |

##### `__init__` (`./black/trans.py:278`)

| Change |  Delta |             % |        Size | Allocations | Location               |
| -----: | -----: | ------------: | ----------: | ----------: | ---------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./black/trans.py:279` |

##### `contains_implicit_multiline_string_with_comments` (`./black/lines.py:250`)

| Change |  Delta |             % |        Size | Allocations | Location               |
| -----: | -----: | ------------: | ----------: | ----------: | ---------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./black/lines.py:257` |

##### `run_transformer` (`./black/linegen.py:1771`)

| Change |      Delta |           % |              Size | Allocations | Location                         |
| -----: | ---------: | ----------: | ----------------: | ----------: | -------------------------------- |
| +37.8% | +9.828 KiB | 1.3% → 1.7% | 26 KiB → 35.8 KiB |     45 → 62 | `./black/linegen.py:1770 → 1786` |

##### `_maybe_split_omitting_optional_parens` (`./black/linegen.py:932`)

|  Change |      Delta |             % |            Size | Allocations | Location                 |
| ------: | ---------: | ------------: | --------------: | ----------: | ------------------------ |
| +400.0% | +2.156 KiB | 23.5% → 60.6% | 552 B → 2.7 KiB |       1 → 5 | `./black/linegen.py:980` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

| Change |      Delta |      % |     Size | Allocations | Location                            |
| -----: | ---------: | -----: | -------: | ----------: | ----------------------------------- |
|  +0.1% | +2.066 KiB | 100.0% | 3.07 MiB |   108 → 109 | `<frozen importlib._bootstrap>:241` |

##### `_hugging_power_ops_line_to_string` (`./black/linegen.py:590`)

|  Change |      Delta |      % |                Size | Allocations | Location                 |
| ------: | ---------: | -----: | ------------------: | ----------: | ------------------------ |
| +100.0% | +1.031 KiB | 100.0% | 1.03 KiB → 2.06 KiB |       2 → 4 | `./black/linegen.py:596` |

##### `right_hand_split` (`./black/linegen.py:809`)

| Change |  Delta |            % |        Size | Allocations | Location                 |
| -----: | -----: | -----------: | ----------: | ----------: | ------------------------ |
|    new | +552 B | 0.0% → 48.6% | 0 B → 552 B |       0 → 1 | `./black/linegen.py:824` |

##### `_format_str_once` (`./black/__init__.py:1215`)

| Change | Delta |             % |          Size | Allocations | Location                          |
| -----: | ----: | ------------: | ------------: | ----------: | --------------------------------- |
|  +5.5% | +32 B | 49.7% → 51.0% | 584 B → 616 B |           1 | `./black/__init__.py:1239 → 1218` |

##### `__init__` (`./blib2to3/pytree.py:400`)

|  Change |  Delta |             % |        Size | Allocations | Location                   |
| ------: | -----: | ------------: | ----------: | ----------: | -------------------------- |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |       2 → 0 | `./blib2to3/pytree.py:425` |

##### `__new__` (`./blib2to3/pytree.py:70`)

| Change |  Delta |      % |          Size | Allocations | Location                       |
| -----: | -----: | -----: | ------------: | ----------: | ------------------------------ |
| -66.7% | -2 MiB | 100.0% | 3 MiB → 1 MiB |       3 → 1 | `./blib2to3/pytree.py:84 → 73` |

##### `changed` (`./blib2to3/pytree.py:160`)

| Change |  Delta |      % |                Size |     Allocations | Location                         |
| -----: | -----: | -----: | ------------------: | --------------: | -------------------------------- |
| -12.3% | -2 MiB | 100.0% | 16.2 MiB → 14.2 MiB | 25,907 → 25,905 | `./blib2to3/pytree.py:176 → 165` |

##### `__init__` (`./blib2to3/pgen2/pgen.py:376`)

|  Change |  Delta |             % |        Size | Allocations | Location                       |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pgen2/pgen.py:377` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

|  Change |  Delta |             % |        Size | Allocations | Location                        |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pgen2/parse.py:314` |

##### `hug_power_op` (`./black/trans.py:81`)

|  Change |  Delta |            % |        Size | Allocations | Location              |
| ------: | -----: | -----------: | ----------: | ----------: | --------------------- |
| removed | -1 MiB | 99.9% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./black/trans.py:95` |

##### `__str__` (`./blib2to3/pytree.py:440`)

|  Change |  Delta |             % |        Size | Allocations | Location                   |
| ------: | -----: | ------------: | ----------: | ----------: | -------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pytree.py:446` |

##### `__str__` (`./black/lines.py:490`)

|  Change |  Delta |             % |        Size | Allocations | Location               |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./black/lines.py:496` |

##### `prev_sibling` (`./blib2to3/pytree.py:196`)

| Change |  Delta |      % |          Size | Allocations | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | -------------------------------- |
| -50.0% | -1 MiB | 100.0% | 2 MiB → 1 MiB |       2 → 1 | `./blib2to3/pytree.py:219 → 208` |

##### `convert` (`./blib2to3/pytree.py:475`)

| Change |      Delta |              % |          Size | Allocations | Location                         |
| -----: | ---------: | -------------: | ------------: | ----------: | -------------------------------- |
| -50.1% | -1.002 MiB | 100.0% → 50.0% | 2 MiB → 1 MiB |       3 → 1 | `./blib2to3/pytree.py:503 → 492` |
|    new |     +1 MiB |   0.0% → 50.0% |   0 B → 1 MiB |       0 → 1 | `./blib2to3/pytree.py:490`       |

##### `<module>` (`./black/trans.py:1`)

|  Change |      Delta |            % |           Size | Allocations | Location                |
| ------: | ---------: | -----------: | -------------: | ----------: | ----------------------- |
| removed | -4.523 KiB | 44.0% → 0.0% | 4.52 KiB → 0 B |       1 → 0 | `./black/trans.py:1914` |
|     new | +2.156 KiB | 0.0% → 27.3% | 0 B → 2.16 KiB |       0 → 1 | `./black/trans.py:41`   |

##### `<module>` (`./black/ranges.py:1`)

|  Change |      Delta |            % |           Size | Allocations | Location                |
| ------: | ---------: | -----------: | -------------: | ----------: | ----------------------- |
| removed | -2.156 KiB | 53.9% → 0.0% | 2.16 KiB → 0 B |       1 → 0 | `./black/ranges.py:509` |
|     new | +1.085 KiB | 0.0% → 37.1% | 0 B → 1.09 KiB |       0 → 1 | `./black/ranges.py:7`   |

##### `_first_right_hand_split` (`./black/linegen.py:829`)

|  Change |  Delta |             % |        Size | Allocations | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------------ |
| removed | -520 B | 100.0% → 0.0% | 520 B → 0 B |       1 → 0 | `./black/linegen.py:918` |

##### `<module>` (`./blib2to3/pgen2/tokenize.py:1`)

|  Change |      Delta |            % |           Size | Allocations | Location                               |
| ------: | ---------: | -----------: | -------------: | ----------: | -------------------------------------- |
| removed | -4.523 KiB | 20.2% → 0.0% | 4.52 KiB → 0 B |       1 → 0 | `./blib2to3/pgen2/tokenize.py:170`     |
|     new | +4.523 KiB | 0.0% → 20.3% | 0 B → 4.52 KiB |       0 → 1 | `./blib2to3/pgen2/tokenize.py:163`     |
|   -1.3% |       -8 B |         2.6% |  600 B → 592 B |           1 | `./blib2to3/pgen2/tokenize.py:76 → 65` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `__init__` (`<string>:2`)

|  Change |  Delta |              % |          Size | Allocations | Caller     | Location     |
| ------: | -----: | -------------: | ------------: | ----------: | ---------- | ------------ |
| +200.0% | +2 MiB | 99.9% → 100.0% | 1 MiB → 3 MiB |       1 → 3 | `__init__` | `<string>:2` |

##### `transform_line` (`./black/linegen.py:601`)

|   Change |      Delta |             % |                Size | Allocations | Caller             | Location                          |
| -------: | ---------: | ------------: | ------------------: | ----------: | ------------------ | --------------------------------- |
| +2711.8% | +1.036 MiB | 86.2% → 99.3% | 39.2 KiB → 1.08 MiB |       5 → 8 | `_format_str_once` | `./black/__init__.py:1236 → 1215` |
|   +31.3% | +1.968 KiB |  13.8% → 0.7% | 6.28 KiB → 8.25 KiB |     12 → 15 | `run_transformer`  | `./black/linegen.py:1755 → 1771`  |

##### `__init__` (`./blib2to3/pytree.py:237`)

| Change |  Delta |      % |             Size | Allocations | Caller    | Location                         |
| -----: | -----: | -----: | ---------------: | ----------: | --------- | -------------------------------- |
| +16.7% | +1 MiB | 100.0% | 6 MiB → 7.01 MiB |     11 → 12 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `shift` (`./blib2to3/pgen2/parse.py:361`)

| Change |  Delta |      % |          Size | Allocations | Caller      | Location                              |
| -----: | -----: | -----: | ------------: | ----------: | ----------- | ------------------------------------- |
| +50.0% | +1 MiB | 100.0% | 2 MiB → 3 MiB |       2 → 3 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `visit` (`./black/nodes.py:152`)

|     Change |  Delta |      % |          Size | Allocations | Caller          | Location                     |
| ---------: | -----: | -----: | ------------: | ----------: | --------------- | ---------------------------- |
| +201649.2% | +1 MiB | 100.0% | 520 B → 1 MiB |       1 → 2 | `visit_default` | `./black/nodes.py:187 → 176` |

##### `visit_default` (`./black/linegen.py:134`)

|  Change |  Delta |      % |          Size | Allocations | Caller  | Location                     |
| ------: | -----: | -----: | ------------: | ----------: | ------- | ---------------------------- |
| +100.0% | +1 MiB | 100.0% | 1 MiB → 2 MiB |       1 → 2 | `visit` | `./black/nodes.py:163 → 152` |

##### `mark` (`./black/brackets.py:70`)

|    Change |  Delta |            % |             Size | Allocations | Caller   | Location                   |
| --------: | -----: | -----------: | ---------------: | ----------: | -------- | -------------------------- |
| +57487.7% | +1 MiB | 1.7% → 90.7% | 1.78 KiB → 1 MiB |       2 → 3 | `append` | `./black/lines.py:63 → 52` |

##### `generate_comments` (`./black/comments.py:52`)

| Change |  Delta |      % |          Size | Allocations | Caller          | Location                 |
| -----: | -----: | -----: | ------------: | ----------: | --------------- | ------------------------ |
| +50.0% | +1 MiB | 100.0% | 2 MiB → 3 MiB |       2 → 3 | `visit_default` | `./black/linegen.py:134` |

##### `parse` (`/usr/local/lib/python3.10/ast.py:33`)

| Change |  Delta |      % |          Size | Allocations | Caller                  | Location                       |
| -----: | -----: | -----: | ------------: | ----------: | ----------------------- | ------------------------------ |
| +50.0% | +1 MiB | 100.0% | 2 MiB → 3 MiB |       2 → 3 | `_parse_single_version` | `./black/parsing.py:117 → 125` |

##### `closure` (`./blib2to3/pgen2/pgen.py:197`)

| Change |  Delta |             % |        Size | Allocations | Caller     | Location                       |
| -----: | -----: | ------------: | ----------: | ----------: | ---------- | ------------------------------ |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `make_dfa` | `./blib2to3/pgen2/pgen.py:189` |

##### `__init__` (`./black/trans.py:278`)

| Change |  Delta |             % |        Size | Allocations | Caller           | Location                 |
| -----: | -----: | ------------: | ----------: | ----------: | ---------------- | ------------------------ |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `transform_line` | `./black/linegen.py:601` |

##### `contains_implicit_multiline_string_with_comments` (`./black/lines.py:250`)

| Change |  Delta |             % |        Size | Allocations | Caller           | Location                 |
| -----: | -----: | ------------: | ----------: | ----------: | ---------------- | ------------------------ |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `transform_line` | `./black/linegen.py:601` |

##### `run_transformer` (`./black/linegen.py:1771`)

| Change |      Delta |      % |                Size | Allocations | Caller           | Location                 |
| -----: | ---------: | -----: | ------------------: | ----------: | ---------------- | ------------------------ |
|  +0.5% | +9.828 KiB | 100.0% | 2.03 MiB → 2.04 MiB |     48 → 65 | `transform_line` | `./black/linegen.py:601` |

##### `_maybe_split_omitting_optional_parens` (`./black/linegen.py:932`)

|  Change |      Delta |             % |            Size | Allocations | Caller             | Location                 |
| ------: | ---------: | ------------: | --------------: | ----------: | ------------------ | ------------------------ |
| +400.0% | +2.156 KiB | 23.5% → 60.6% | 552 B → 2.7 KiB |       1 → 5 | `right_hand_split` | `./black/linegen.py:809` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

| Change |      Delta |      % |     Size | Allocations | Caller           | Location                                     |
| -----: | ---------: | -----: | -------: | ----------: | ---------------- | -------------------------------------------- |
|  +0.1% | +2.066 KiB | 100.0% | 3.07 MiB |   108 → 109 | `source_to_code` | `<frozen importlib._bootstrap_external>:942` |

##### `_hugging_power_ops_line_to_string` (`./black/linegen.py:590`)

|  Change |      Delta |      % |                Size | Allocations | Caller           | Location                 |
| ------: | ---------: | -----: | ------------------: | ----------: | ---------------- | ------------------------ |
| +100.0% | +1.031 KiB | 100.0% | 1.03 KiB → 2.06 KiB |       2 → 4 | `transform_line` | `./black/linegen.py:601` |

##### `right_hand_split` (`./black/linegen.py:809`)

| Change |  Delta |      % |             Size | Allocations | Caller | Location                 |
| -----: | -----: | -----: | ---------------: | ----------: | ------ | ------------------------ |
| +94.5% | +552 B | 100.0% | 584 B → 1.11 KiB |       1 → 2 | `_rhs` | `./black/linegen.py:650` |

##### `whitespace` (`./black/nodes.py:183`)

| Change | Delta |      % |               Size | Allocations | Caller   | Location                   |
| -----: | ----: | -----: | -----------------: | ----------: | -------- | -------------------------- |
|  +0.5% | +49 B | 100.0% | 8.75 KiB → 8.8 KiB |           2 | `append` | `./black/lines.py:63 → 52` |

##### `_format_str_once` (`./black/__init__.py:1215`)

| Change | Delta |      % |                Size | Allocations | Caller       | Location                          |
| -----: | ----: | -----: | ------------------: | ----------: | ------------ | --------------------------------- |
|  +2.7% | +32 B | 100.0% | 1.15 KiB → 1.18 KiB |           2 | `format_str` | `./black/__init__.py:1189 → 1168` |

##### `__init__` (`./blib2to3/pytree.py:400`)

|  Change |  Delta |             % |        Size | Allocations | Caller    | Location                   |
| ------: | -----: | ------------: | ----------: | ----------: | --------- | -------------------------- |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |       2 → 0 | `convert` | `./blib2to3/pytree.py:486` |

##### `__new__` (`./blib2to3/pytree.py:70`)

|  Change |  Delta |            % |        Size | Allocations | Caller  | Location                   |
| ------: | -----: | -----------: | ----------: | ----------: | ------- | -------------------------- |
| removed | -2 MiB | 66.7% → 0.0% | 2 MiB → 0 B |       2 → 0 | `clone` | `./blib2to3/pytree.py:452` |

##### `changed` (`./blib2to3/pytree.py:160`)

|  Change |  Delta |            % |        Size | Allocations | Caller    | Location                   |
| ------: | -----: | -----------: | ----------: | ----------: | --------- | -------------------------- |
| removed | -2 MiB | 12.3% → 0.0% | 2 MiB → 0 B |       2 → 0 | `changed` | `./blib2to3/pytree.py:171` |

##### `__init__` (`./blib2to3/pgen2/pgen.py:376`)

|  Change |  Delta |             % |        Size | Allocations | Caller       | Location                       |
| ------: | -----: | ------------: | ----------: | ----------: | ------------ | ------------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `parse_atom` | `./blib2to3/pgen2/pgen.py:329` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

|  Change |  Delta |             % |        Size | Allocations | Caller     | Location                              |
| ------: | -----: | ------------: | ----------: | ----------: | ---------- | ------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `addtoken` | `./blib2to3/pgen2/parse.py:242 → 230` |

##### `hug_power_op` (`./black/trans.py:81`)

| Change |  Delta |      % |          Size | Allocations | Caller            | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | ----------------- | -------------------------------- |
| -99.9% | -1 MiB | 100.0% | 1 MiB → 704 B |       2 → 1 | `run_transformer` | `./black/linegen.py:1755 → 1771` |

##### `__str__` (`./blib2to3/pytree.py:440`)

|  Change |  Delta |             % |        Size | Allocations | Caller    | Location               |
| ------: | -----: | ------------: | ----------: | ----------: | --------- | ---------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `__str__` | `./black/lines.py:490` |

##### `__str__` (`./black/lines.py:490`)

|  Change |  Delta |             % |        Size | Allocations | Caller           | Location                |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------- | ----------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `line_to_string` | `./black/lines.py:1073` |

##### `prev_sibling` (`./blib2to3/pytree.py:196`)

|  Change |  Delta |            % |        Size | Allocations | Caller           | Location                     |
| ------: | -----: | -----------: | ----------: | ----------: | ---------------- | ---------------------------- |
| removed | -1 MiB | 50.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `preceding_leaf` | `./black/nodes.py:441 → 436` |

##### `convert` (`./blib2to3/pytree.py:475`)

| Change |      Delta |              % |          Size | Allocations | Caller  | Location                              |
| -----: | ---------: | -------------: | ------------: | ----------: | ------- | ------------------------------------- |
| -50.1% | -1.002 MiB | 100.0% → 50.0% | 2 MiB → 1 MiB |       3 → 1 | `shift` | `./blib2to3/pgen2/parse.py:373 → 361` |
|    new |     +1 MiB |   0.0% → 50.0% |   0 B → 1 MiB |       0 → 1 | `pop`   | `./blib2to3/pgen2/parse.py:398 → 386` |

##### `<module>` (`./black/trans.py:1`)

| Change |      Delta |      % |                Size | Allocations | Caller                      | Location                            |
| -----: | ---------: | -----: | ------------------: | ----------: | --------------------------- | ----------------------------------- |
| -23.0% | -2.367 KiB | 100.0% | 10.3 KiB → 7.91 KiB |           8 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`./black/ranges.py:1`)

| Change |     Delta |      % |             Size | Allocations | Caller                      | Location                            |
| -----: | --------: | -----: | ---------------: | ----------: | --------------------------- | ----------------------------------- |
| -26.8% | -1.07 KiB | 100.0% | 4 KiB → 2.93 KiB |           3 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `_first_right_hand_split` (`./black/linegen.py:829`)

|  Change |  Delta |             % |        Size | Allocations | Caller             | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------ | ------------------------ |
| removed | -520 B | 100.0% → 0.0% | 520 B → 0 B |       1 → 0 | `right_hand_split` | `./black/linegen.py:809` |

##### `<module>` (`./blib2to3/pgen2/tokenize.py:1`)

| Change | Delta |      % |     Size | Allocations | Caller                      | Location                            |
| -----: | ----: | -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
|    ~0% |  -8 B | 100.0% | 22.3 KiB |          13 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

### Total size

#### Regressions

Functions with the largest increase in bytes never freed within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |      Delta |             % |                Size |     Allocations | Function                          | Location                                                    |
| ------: | ---------: | ------------: | ------------------: | --------------: | --------------------------------- | ----------------------------------------------------------- |
|  +33.3% |     +2 MiB | 10.4% → 13.6% |    6 MiB → 8.01 MiB |         11 → 13 | `pop`                             | `./blib2to3/pgen2/parse.py:398 → 386`                       |
|   +7.5% |     +2 MiB | 46.1% → 48.7% | 26.6 MiB → 28.6 MiB | 26,394 → 26,396 | `visit`                           | `./black/nodes.py:163 → 152`                                |
|   +7.5% |     +2 MiB | 46.1% → 48.7% | 26.6 MiB → 28.6 MiB | 26,393 → 26,395 | `visit_default`                   | `./black/nodes.py:187 → 176`                                |
|   +7.5% |     +2 MiB | 46.1% → 48.7% | 26.6 MiB → 28.6 MiB | 26,393 → 26,395 | `visit_default`                   | `./black/linegen.py:134`                                    |
|   +7.6% |     +2 MiB | 45.5% → 48.1% | 26.2 MiB → 28.2 MiB | 25,805 → 25,807 | `visit_stmt`                      | `./black/linegen.py:199`                                    |
|   +7.7% |     +2 MiB | 45.1% → 47.7% |     26 MiB → 28 MiB | 25,387 → 25,389 | `visit_suite`                     | `./black/linegen.py:288`                                    |
|   +7.7% |     +2 MiB | 45.1% → 47.7% |     26 MiB → 28 MiB | 25,385 → 25,387 | `visit_funcdef`                   | `./black/linegen.py:254`                                    |
| +199.9% |     +2 MiB |   1.7% → 5.1% |       1 MiB → 3 MiB |           2 → 4 | `__init__`                        | `<string>:2`                                                |
|   +6.3% | +1.052 MiB | 28.8% → 30.1% | 16.6 MiB → 17.7 MiB | 26,400 → 26,430 | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042`                           |
|   +2.0% | +1.049 MiB | 91.5% → 91.7% | 52.7 MiB → 53.8 MiB | 26,565 → 26,593 | `_run_module_code`                | `/usr/local/lib/python3.10/runpy.py:89`                     |
|   +2.0% | +1.049 MiB | 91.5% → 91.7% | 52.7 MiB → 53.8 MiB | 26,564 → 26,592 | `_run_code`                       | `/usr/local/lib/python3.10/runpy.py:63`                     |
|   +2.0% | +1.049 MiB | 91.5% → 91.7% | 52.7 MiB → 53.8 MiB | 26,563 → 26,591 | `__call__`                        | `/venv/lib/python3.10/site-packages/click/core.py:1651`     |
|   +2.0% | +1.049 MiB | 91.5% → 91.7% | 52.7 MiB → 53.8 MiB | 26,563 → 26,591 | `patched_main`                    | `./black/__init__.py:1594 → 1580`                           |
|   +2.0% | +1.049 MiB | 91.5% → 91.7% | 52.7 MiB → 53.8 MiB | 26,563 → 26,591 | `<module>`                        | `./black/__main__.py:1`                                     |
|   +2.0% | +1.049 MiB | 91.5% → 91.7% | 52.7 MiB → 53.8 MiB | 26,562 → 26,590 | `main`                            | `/venv/lib/python3.10/site-packages/click/core.py:1483`     |
|   +2.0% | +1.049 MiB | 91.5% → 91.6% | 52.7 MiB → 53.8 MiB | 26,545 → 26,573 | `new_func`                        | `/venv/lib/python3.10/site-packages/click/decorators.py:33` |
|   +2.0% | +1.049 MiB | 91.5% → 91.6% | 52.7 MiB → 53.8 MiB | 26,545 → 26,573 | `invoke`                          | `/venv/lib/python3.10/site-packages/click/core.py:861`      |
|   +2.0% | +1.049 MiB | 91.5% → 91.6% | 52.7 MiB → 53.8 MiB | 26,545 → 26,573 | `invoke`                          | `/venv/lib/python3.10/site-packages/click/core.py:1400`     |
|   +2.0% | +1.049 MiB | 91.5% → 91.6% | 52.7 MiB → 53.8 MiB | 26,544 → 26,572 | `main`                            | `./black/__init__.py:244 → 240`                             |
|   +2.0% | +1.049 MiB | 91.5% → 91.6% | 52.7 MiB → 53.8 MiB | 26,534 → 26,562 | `reformat_one`                    | `./black/__init__.py:860 → 865`                             |

##### Ours

|  Change |      Delta |             % |                Size |     Allocations | Function                          | Location                              |
| ------: | ---------: | ------------: | ------------------: | --------------: | --------------------------------- | ------------------------------------- |
|  +33.3% |     +2 MiB | 10.4% → 13.6% |    6 MiB → 8.01 MiB |         11 → 13 | `pop`                             | `./blib2to3/pgen2/parse.py:398 → 386` |
|   +7.5% |     +2 MiB | 46.1% → 48.7% | 26.6 MiB → 28.6 MiB | 26,394 → 26,396 | `visit`                           | `./black/nodes.py:163 → 152`          |
|   +7.5% |     +2 MiB | 46.1% → 48.7% | 26.6 MiB → 28.6 MiB | 26,393 → 26,395 | `visit_default`                   | `./black/nodes.py:187 → 176`          |
|   +7.5% |     +2 MiB | 46.1% → 48.7% | 26.6 MiB → 28.6 MiB | 26,393 → 26,395 | `visit_default`                   | `./black/linegen.py:134`              |
|   +7.6% |     +2 MiB | 45.5% → 48.1% | 26.2 MiB → 28.2 MiB | 25,805 → 25,807 | `visit_stmt`                      | `./black/linegen.py:199`              |
|   +7.7% |     +2 MiB | 45.1% → 47.7% |     26 MiB → 28 MiB | 25,387 → 25,389 | `visit_suite`                     | `./black/linegen.py:288`              |
|   +7.7% |     +2 MiB | 45.1% → 47.7% |     26 MiB → 28 MiB | 25,385 → 25,387 | `visit_funcdef`                   | `./black/linegen.py:254`              |
| +199.9% |     +2 MiB |   1.7% → 5.1% |       1 MiB → 3 MiB |           2 → 4 | `__init__`                        | `<string>:2`                          |
|   +6.3% | +1.052 MiB | 28.8% → 30.1% | 16.6 MiB → 17.7 MiB | 26,400 → 26,430 | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042`     |
|   +2.0% | +1.049 MiB | 91.5% → 91.7% | 52.7 MiB → 53.8 MiB | 26,563 → 26,591 | `patched_main`                    | `./black/__init__.py:1594 → 1580`     |
|   +2.0% | +1.049 MiB | 91.5% → 91.7% | 52.7 MiB → 53.8 MiB | 26,563 → 26,591 | `<module>`                        | `./black/__main__.py:1`               |
|   +2.0% | +1.049 MiB | 91.5% → 91.6% | 52.7 MiB → 53.8 MiB | 26,544 → 26,572 | `main`                            | `./black/__init__.py:244 → 240`       |
|   +2.0% | +1.049 MiB | 91.5% → 91.6% | 52.7 MiB → 53.8 MiB | 26,534 → 26,562 | `reformat_one`                    | `./black/__init__.py:860 → 865`       |
|   +2.0% | +1.049 MiB | 91.5% → 91.6% | 52.7 MiB → 53.8 MiB | 26,530 → 26,558 | `format_file_in_place`            | `./black/__init__.py:917 → 922`       |
|   +2.0% | +1.049 MiB | 91.5% → 91.6% | 52.7 MiB → 53.8 MiB | 26,529 → 26,557 | `format_file_contents`            | `./black/__init__.py:1054 → 1059`     |
|  +16.7% |     +1 MiB | 10.4% → 11.9% |    6 MiB → 7.01 MiB |         11 → 12 | `__init__`                        | `./blib2to3/pytree.py:248 → 237`      |
|  +19.7% |     +1 MiB |  8.8% → 10.3% | 5.07 MiB → 6.07 MiB |       102 → 103 | `append`                          | `./black/lines.py:63 → 52`            |
| +933.6% |     +1 MiB |   0.2% → 1.9% |  110 KiB → 1.11 MiB |       189 → 190 | `mark`                            | `./black/brackets.py:70`              |
|  +10.8% |     +1 MiB | 16.1% → 17.5% | 9.27 MiB → 10.3 MiB |   9,584 → 9,585 | `visit_power`                     | `./black/linegen.py:341`              |
|   +6.7% |     +1 MiB | 26.0% → 27.3% |     15 MiB → 16 MiB | 23,656 → 23,657 | `generate_comments`               | `./black/comments.py:52`              |

##### Standard library

| Change |      Delta |             % |                Size |     Allocations | Function           | Location                                     |
| -----: | ---------: | ------------: | ------------------: | --------------: | ------------------ | -------------------------------------------- |
|  +2.0% | +1.049 MiB | 91.5% → 91.7% | 52.7 MiB → 53.8 MiB | 26,565 → 26,593 | `_run_module_code` | `/usr/local/lib/python3.10/runpy.py:89`      |
|  +2.0% | +1.049 MiB | 91.5% → 91.7% | 52.7 MiB → 53.8 MiB | 26,564 → 26,592 | `_run_code`        | `/usr/local/lib/python3.10/runpy.py:63`      |
|  +1.8% | +1.048 MiB |        100.0% | 57.6 MiB → 58.7 MiB | 27,439 → 27,468 | `run_module`       | `/usr/local/lib/python3.10/runpy.py:199`     |
| +50.0% |     +1 MiB |   3.5% → 5.1% |       2 MiB → 3 MiB |           2 → 3 | `parse`            | `/usr/local/lib/python3.10/ast.py:33`        |
|  +0.1% | +2.066 KiB |   5.3% → 5.2% |            3.07 MiB |       108 → 109 | `source_to_code`   | `<frozen importlib._bootstrap_external>:942` |
|  +0.1% | +2.066 KiB |   5.6% → 5.5% |            3.23 MiB |       263 → 264 | `get_code`         | `<frozen importlib._bootstrap_external>:950` |

#### Improvements

Functions with the largest decrease in bytes never freed within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Ours

|  Change |      Delta |             % |                Size |     Allocations | Function                     | Location                              |
| ------: | ---------: | ------------: | ------------------: | --------------: | ---------------------------- | ------------------------------------- |
|  -28.6% | -2.002 MiB |  12.1% → 8.5% |       7 MiB → 5 MiB |           8 → 5 | `shift`                      | `./blib2to3/pgen2/parse.py:373 → 361` |
| removed |     -2 MiB |   3.5% → 0.0% |         2 MiB → 0 B |           2 → 0 | `__init__`                   | `./blib2to3/pytree.py:400`            |
|  -66.7% |     -2 MiB |   5.2% → 1.7% |       3 MiB → 1 MiB |           3 → 1 | `__new__`                    | `./blib2to3/pytree.py:81 → 70`        |
| removed |     -2 MiB |   3.5% → 0.0% |         2 MiB → 0 B |           2 → 0 | `clone`                      | `./blib2to3/pytree.py:452`            |
|  -66.6% |     -2 MiB |   5.2% → 1.7% |       3 MiB → 1 MiB |           6 → 4 | `hug_power_op`               | `./black/trans.py:85 → 81`            |
| removed |     -2 MiB |   3.5% → 0.0% |         2 MiB → 0 B |           2 → 0 | `__str__`                    | `./black/lines.py:490`                |
| removed |     -2 MiB |   3.5% → 0.0% |         2 MiB → 0 B |           2 → 0 | `line_to_string`             | `./black/lines.py:1073`               |
|  -59.8% |     -2 MiB |   5.8% → 2.3% | 3.34 MiB → 1.34 MiB |   2,442 → 2,440 | `normalize_invisible_parens` | `./black/linegen.py:1328 → 1344`      |
|  -12.3% |     -2 MiB | 28.2% → 24.2% | 16.2 MiB → 14.2 MiB | 25,907 → 25,905 | `changed`                    | `./blib2to3/pytree.py:171 → 160`      |
|  -12.3% |     -2 MiB | 28.2% → 24.2% | 16.2 MiB → 14.2 MiB | 25,907 → 25,905 | `prefix`                     | `./blib2to3/pytree.py:480 → 469`      |
|  -67.2% |     -2 MiB |   5.2% → 1.7% |  2.98 MiB → 998 KiB |   1,777 → 1,775 | `prefix`                     | `./blib2to3/pytree.py:329 → 318`      |
|  -61.8% |     -2 MiB |   5.6% → 2.1% | 3.24 MiB → 1.24 MiB |   2,253 → 2,251 | `wrap_in_parentheses`        | `./black/nodes.py:935 → 930`          |
|   -6.2% | -1.001 MiB | 27.8% → 25.6% |   16.1 MiB → 15 MiB |         37 → 35 | `parse_string`               | `./blib2to3/pgen2/driver.py:198`      |
|   -6.2% | -1.001 MiB | 27.8% → 25.6% |   16.1 MiB → 15 MiB |         37 → 35 | `lib2to3_parse`              | `./black/parsing.py:55`               |
|   -6.2% | -1.001 MiB | 27.8% → 25.6% |   16.1 MiB → 15 MiB |         36 → 34 | `parse_tokens`               | `./blib2to3/pgen2/driver.py:114`      |
|   -6.7% | -1.001 MiB | 26.1% → 23.9% |     15 MiB → 14 MiB |         24 → 22 | `addtoken`                   | `./blib2to3/pgen2/parse.py:242 → 230` |
|   -9.1% | -1.001 MiB | 19.1% → 17.0% |     11 MiB → 10 MiB |         17 → 15 | `convert`                    | `./blib2to3/pytree.py:486 → 475`      |
|   -6.7% | -1.001 MiB | 26.0% → 23.9% |     15 MiB → 14 MiB |         21 → 19 | `_addtoken`                  | `./blib2to3/pgen2/parse.py:290 → 278` |
| removed |     -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__init__`                   | `./blib2to3/pgen2/pgen.py:376`        |
|  -99.5% |     -1 MiB |  1.7% → <0.1% |    1 MiB → 4.73 KiB |           3 → 2 | `parse_atom`                 | `./blib2to3/pgen2/pgen.py:329 → 318`  |

##### Standard library

| Change |      Delta |           % |     Size | Allocations | Function                    | Location                                     |
| -----: | ---------: | ----------: | -------: | ----------: | --------------------------- | -------------------------------------------- |
|    ~0% | -1.378 KiB | 8.5% → 8.3% | 4.89 MiB |   873 → 874 | `_get_module_details`       | `/usr/local/lib/python3.10/runpy.py:103`     |
|    ~0% | -1.378 KiB | 8.5% → 8.3% | 4.89 MiB |   869 → 870 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`          |
|    ~0% | -1.378 KiB | 8.5% → 8.3% | 4.89 MiB |   870 → 871 | `exec_module`               | `<frozen importlib._bootstrap_external>:877` |
|    ~0% | -1.378 KiB | 8.5% → 8.3% | 4.89 MiB |   870 → 871 | `_load_unlocked`            | `<frozen importlib._bootstrap>:664`          |
|    ~0% | -1.378 KiB | 8.5% → 8.3% | 4.89 MiB |   870 → 871 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:987`          |
|    ~0% | -1.378 KiB | 8.5% → 8.3% | 4.89 MiB |   870 → 871 | `_find_and_load`            | `<frozen importlib._bootstrap>:1022`         |
|    ~0% |       -8 B |        0.4% |  219 KiB |         222 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1053`         |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `pop` (`./blib2to3/pgen2/parse.py:386`)

| Change |  Delta |      % |             Size | Allocations | Caller      | Location                              |
| -----: | -----: | -----: | ---------------: | ----------: | ----------- | ------------------------------------- |
| +33.3% | +2 MiB | 100.0% | 6 MiB → 8.01 MiB |     11 → 13 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `visit` (`./black/nodes.py:152`)

| Change |  Delta |             % |                Size |     Allocations | Caller             | Location                          |
| -----: | -----: | ------------: | ------------------: | --------------: | ------------------ | --------------------------------- |
| +11.9% | +3 MiB | 94.6% → 98.4% | 25.1 MiB → 28.1 MiB | 25,611 → 25,614 | `visit_stmt`       | `./black/linegen.py:199`          |
|  +7.5% | +2 MiB |        100.0% | 26.6 MiB → 28.6 MiB | 26,394 → 26,396 | `_format_str_once` | `./black/__init__.py:1236 → 1215` |
|  +7.5% | +2 MiB |        100.0% | 26.6 MiB → 28.6 MiB | 26,393 → 26,395 | `visit_default`    | `./black/nodes.py:187 → 176`      |
|  +7.7% | +2 MiB | 97.8% → 97.9% |     26 MiB → 28 MiB | 25,385 → 25,387 | `visit_funcdef`    | `./black/linegen.py:254`          |

##### `visit_default` (`./black/nodes.py:176`)

| Change |  Delta |      % |                Size |     Allocations | Caller          | Location                 |
| -----: | -----: | -----: | ------------------: | --------------: | --------------- | ------------------------ |
|  +7.5% | +2 MiB | 100.0% | 26.6 MiB → 28.6 MiB | 26,393 → 26,395 | `visit_default` | `./black/linegen.py:134` |

##### `visit_default` (`./black/linegen.py:134`)

|  Change |  Delta |             % |                Size |     Allocations | Caller              | Location                     |
| ------: | -----: | ------------: | ------------------: | --------------: | ------------------- | ---------------------------- |
|   +7.5% | +2 MiB |        100.0% | 26.6 MiB → 28.6 MiB | 26,393 → 26,395 | `visit`             | `./black/nodes.py:163 → 152` |
|   +7.7% | +2 MiB | 97.9% → 98.0% |     26 MiB → 28 MiB | 25,387 → 25,389 | `visit_suite`       | `./black/linegen.py:288`     |
|  -10.8% | -2 MiB | 69.8% → 57.9% | 18.5 MiB → 16.5 MiB | 15,457 → 15,455 | `visit_simple_stmt` | `./black/linegen.py:295`     |
|  +10.8% | +1 MiB | 34.9% → 35.9% | 9.26 MiB → 10.3 MiB |   9,582 → 9,583 | `visit_power`       | `./black/linegen.py:341`     |
| +346.8% | +1 MiB |   1.1% → 4.5% |  295 KiB → 1.29 MiB |       525 → 526 | `visit_NUMBER`      | `./black/linegen.py:505`     |

##### `visit_stmt` (`./black/linegen.py:199`)

| Change |  Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
|  +7.6% | +2 MiB | 100.0% | 26.2 MiB → 28.2 MiB | 25,805 → 25,807 | `visit` | `./black/nodes.py:163 → 152` |

##### `visit_suite` (`./black/linegen.py:288`)

| Change |  Delta |      % |            Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | --------------: | --------------: | ------- | ---------------------------- |
|  +7.7% | +2 MiB | 100.0% | 26 MiB → 28 MiB | 25,387 → 25,389 | `visit` | `./black/nodes.py:163 → 152` |

##### `visit_funcdef` (`./black/linegen.py:254`)

| Change |  Delta |      % |            Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | --------------: | --------------: | ------- | ---------------------------- |
|  +7.7% | +2 MiB | 100.0% | 26 MiB → 28 MiB | 25,385 → 25,387 | `visit` | `./black/nodes.py:163 → 152` |

##### `__init__` (`<string>:2`)

|  Change |  Delta |              % |          Size | Allocations | Caller     | Location                 |
| ------: | -----: | -------------: | ------------: | ----------: | ---------- | ------------------------ |
| +200.0% | +2 MiB | 99.9% → 100.0% | 1 MiB → 3 MiB |       1 → 3 | `__init__` | `<string>:2`             |
| +100.0% | +1 MiB |  99.9% → 66.7% | 1 MiB → 2 MiB |       1 → 2 | `line`     | `./black/linegen.py:109` |
|     new | +1 MiB |   0.0% → 33.3% |   0 B → 1 MiB |       0 → 1 | `clone`    | `./black/lines.py:470`   |

##### `check_stability_and_equivalence` (`./black/__init__.py:1042`)

| Change |      Delta |      % |                Size |     Allocations | Caller                 | Location                          |
| -----: | ---------: | -----: | ------------------: | --------------: | ---------------------- | --------------------------------- |
|  +6.3% | +1.052 MiB | 100.0% | 16.6 MiB → 17.7 MiB | 26,400 → 26,430 | `format_file_contents` | `./black/__init__.py:1054 → 1059` |

##### `_run_module_code` (`/usr/local/lib/python3.10/runpy.py:89`)

| Change |      Delta |      % |                Size |     Allocations | Caller       | Location                                 |
| -----: | ---------: | -----: | ------------------: | --------------: | ------------ | ---------------------------------------- |
|  +2.0% | +1.049 MiB | 100.0% | 52.7 MiB → 53.8 MiB | 26,565 → 26,593 | `run_module` | `/usr/local/lib/python3.10/runpy.py:199` |

##### `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`)

| Change |      Delta |      % |                Size |     Allocations | Caller             | Location                                |
| -----: | ---------: | -----: | ------------------: | --------------: | ------------------ | --------------------------------------- |
|  +2.0% | +1.049 MiB | 100.0% | 52.7 MiB → 53.8 MiB | 26,564 → 26,592 | `_run_module_code` | `/usr/local/lib/python3.10/runpy.py:89` |

##### `__call__` (`/venv/lib/python3.10/site-packages/click/core.py:1651`)

| Change |      Delta |      % |                Size |     Allocations | Caller         | Location                          |
| -----: | ---------: | -----: | ------------------: | --------------: | -------------- | --------------------------------- |
|  +2.0% | +1.049 MiB | 100.0% | 52.7 MiB → 53.8 MiB | 26,563 → 26,591 | `patched_main` | `./black/__init__.py:1594 → 1580` |

##### `patched_main` (`./black/__init__.py:1580`)

| Change |      Delta |      % |                Size |     Allocations | Caller     | Location                |
| -----: | ---------: | -----: | ------------------: | --------------: | ---------- | ----------------------- |
|  +2.0% | +1.049 MiB | 100.0% | 52.7 MiB → 53.8 MiB | 26,563 → 26,591 | `<module>` | `./black/__main__.py:1` |

##### `<module>` (`./black/__main__.py:1`)

| Change |      Delta |      % |                Size |     Allocations | Caller      | Location                                |
| -----: | ---------: | -----: | ------------------: | --------------: | ----------- | --------------------------------------- |
|  +2.0% | +1.049 MiB | 100.0% | 52.7 MiB → 53.8 MiB | 26,563 → 26,591 | `_run_code` | `/usr/local/lib/python3.10/runpy.py:63` |

##### `main` (`/venv/lib/python3.10/site-packages/click/core.py:1483`)

| Change |      Delta |      % |                Size |     Allocations | Caller     | Location                                                |
| -----: | ---------: | -----: | ------------------: | --------------: | ---------- | ------------------------------------------------------- |
|  +2.0% | +1.049 MiB | 100.0% | 52.7 MiB → 53.8 MiB | 26,562 → 26,590 | `__call__` | `/venv/lib/python3.10/site-packages/click/core.py:1651` |

##### `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`)

| Change |      Delta |      % |                Size |     Allocations | Caller   | Location                                               |
| -----: | ---------: | -----: | ------------------: | --------------: | -------- | ------------------------------------------------------ |
|  +2.0% | +1.049 MiB | 100.0% | 52.7 MiB → 53.8 MiB | 26,545 → 26,573 | `invoke` | `/venv/lib/python3.10/site-packages/click/core.py:861` |

##### `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`)

| Change |      Delta |      % |                Size |     Allocations | Caller   | Location                                                |
| -----: | ---------: | -----: | ------------------: | --------------: | -------- | ------------------------------------------------------- |
|  +2.0% | +1.049 MiB | 100.0% | 52.7 MiB → 53.8 MiB | 26,545 → 26,573 | `invoke` | `/venv/lib/python3.10/site-packages/click/core.py:1400` |

##### `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:1400`)

| Change |      Delta |      % |                Size |     Allocations | Caller | Location                                                |
| -----: | ---------: | -----: | ------------------: | --------------: | ------ | ------------------------------------------------------- |
|  +2.0% | +1.049 MiB | 100.0% | 52.7 MiB → 53.8 MiB | 26,545 → 26,573 | `main` | `/venv/lib/python3.10/site-packages/click/core.py:1483` |

##### `main` (`./black/__init__.py:240`)

| Change |      Delta |      % |                Size |     Allocations | Caller     | Location                                                    |
| -----: | ---------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------------------------------- |
|  +2.0% | +1.049 MiB | 100.0% | 52.7 MiB → 53.8 MiB | 26,544 → 26,572 | `new_func` | `/venv/lib/python3.10/site-packages/click/decorators.py:33` |

##### `reformat_one` (`./black/__init__.py:865`)

| Change |      Delta |      % |                Size |     Allocations | Caller | Location                        |
| -----: | ---------: | -----: | ------------------: | --------------: | ------ | ------------------------------- |
|  +2.0% | +1.049 MiB | 100.0% | 52.7 MiB → 53.8 MiB | 26,534 → 26,562 | `main` | `./black/__init__.py:244 → 240` |

##### `format_file_in_place` (`./black/__init__.py:922`)

| Change |      Delta |      % |                Size |     Allocations | Caller         | Location                        |
| -----: | ---------: | -----: | ------------------: | --------------: | -------------- | ------------------------------- |
|  +2.0% | +1.049 MiB | 100.0% | 52.7 MiB → 53.8 MiB | 26,530 → 26,558 | `reformat_one` | `./black/__init__.py:860 → 865` |

##### `format_file_contents` (`./black/__init__.py:1059`)

| Change |      Delta |      % |                Size |     Allocations | Caller                 | Location                        |
| -----: | ---------: | -----: | ------------------: | --------------: | ---------------------- | ------------------------------- |
|  +2.0% | +1.049 MiB | 100.0% | 52.7 MiB → 53.8 MiB | 26,529 → 26,557 | `format_file_in_place` | `./black/__init__.py:917 → 922` |

##### `__init__` (`./blib2to3/pytree.py:237`)

| Change |  Delta |      % |             Size | Allocations | Caller    | Location                         |
| -----: | -----: | -----: | ---------------: | ----------: | --------- | -------------------------------- |
| +16.7% | +1 MiB | 100.0% | 6 MiB → 7.01 MiB |     11 → 12 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `append` (`./black/lines.py:52`)

| Change |  Delta |      % |                Size | Allocations | Caller          | Location                 |
| -----: | -----: | -----: | ------------------: | ----------: | --------------- | ------------------------ |
| +19.7% | +1 MiB | 100.0% | 5.07 MiB → 6.07 MiB |   102 → 103 | `visit_default` | `./black/linegen.py:134` |

##### `mark` (`./black/brackets.py:70`)

|    Change |  Delta |            % |             Size | Allocations | Caller   | Location                   |
| --------: | -----: | -----------: | ---------------: | ----------: | -------- | -------------------------- |
| +20227.2% | +1 MiB | 4.6% → 90.8% | 5.06 KiB → 1 MiB |       3 → 4 | `append` | `./black/lines.py:63 → 52` |

##### `visit_power` (`./black/linegen.py:341`)

| Change |  Delta |      % |                Size |   Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | ------------: | ------- | ---------------------------- |
| +10.8% | +1 MiB | 100.0% | 9.27 MiB → 10.3 MiB | 9,584 → 9,585 | `visit` | `./black/nodes.py:163 → 152` |

##### `generate_comments` (`./black/comments.py:52`)

| Change |  Delta |      % |            Size |     Allocations | Caller          | Location                 |
| -----: | -----: | -----: | --------------: | --------------: | --------------- | ------------------------ |
|  +6.7% | +1 MiB | 100.0% | 15 MiB → 16 MiB | 23,656 → 23,657 | `visit_default` | `./black/linegen.py:134` |

##### `run_module` (`/usr/local/lib/python3.10/runpy.py:199`)

| Change |      Delta |      % |                Size |     Allocations | Caller         | Location                                                       |
| -----: | ---------: | -----: | ------------------: | --------------: | -------------- | -------------------------------------------------------------- |
|  +1.8% | +1.048 MiB | 100.0% | 57.6 MiB → 58.7 MiB | 27,439 → 27,468 | `_run_tracker` | `/venv/lib/python3.10/site-packages/memray/commands/run.py:40` |

##### `parse` (`/usr/local/lib/python3.10/ast.py:33`)

| Change |  Delta |      % |          Size | Allocations | Caller                  | Location                       |
| -----: | -----: | -----: | ------------: | ----------: | ----------------------- | ------------------------------ |
| +50.0% | +1 MiB | 100.0% | 2 MiB → 3 MiB |       2 → 3 | `_parse_single_version` | `./black/parsing.py:117 → 125` |

##### `source_to_code` (`<frozen importlib._bootstrap_external>:942`)

| Change |      Delta |      % |     Size | Allocations | Caller     | Location                                     |
| -----: | ---------: | -----: | -------: | ----------: | ---------- | -------------------------------------------- |
|  +0.1% | +2.066 KiB | 100.0% | 3.07 MiB |   108 → 109 | `get_code` | `<frozen importlib._bootstrap_external>:950` |

##### `get_code` (`<frozen importlib._bootstrap_external>:950`)

| Change |      Delta |      % |     Size | Allocations | Caller        | Location                                     |
| -----: | ---------: | -----: | -------: | ----------: | ------------- | -------------------------------------------- |
|  +0.1% | +2.066 KiB | 100.0% | 3.23 MiB |   263 → 264 | `exec_module` | `<frozen importlib._bootstrap_external>:877` |

##### `shift` (`./blib2to3/pgen2/parse.py:361`)

| Change |      Delta |      % |          Size | Allocations | Caller      | Location                              |
| -----: | ---------: | -----: | ------------: | ----------: | ----------- | ------------------------------------- |
| -28.6% | -2.002 MiB | 100.0% | 7 MiB → 5 MiB |       8 → 5 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `__init__` (`./blib2to3/pytree.py:400`)

|  Change |  Delta |             % |        Size | Allocations | Caller    | Location                   |
| ------: | -----: | ------------: | ----------: | ----------: | --------- | -------------------------- |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |       2 → 0 | `convert` | `./blib2to3/pytree.py:486` |

##### `__new__` (`./blib2to3/pytree.py:70`)

|  Change |  Delta |            % |        Size | Allocations | Caller  | Location                   |
| ------: | -----: | -----------: | ----------: | ----------: | ------- | -------------------------- |
| removed | -2 MiB | 66.7% → 0.0% | 2 MiB → 0 B |       2 → 0 | `clone` | `./blib2to3/pytree.py:452` |

##### `clone` (`./blib2to3/pytree.py:452`)

|  Change |  Delta |             % |        Size | Allocations | Caller         | Location              |
| ------: | -----: | ------------: | ----------: | ----------: | -------------- | --------------------- |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |       2 → 0 | `hug_power_op` | `./black/trans.py:85` |

##### `hug_power_op` (`./black/trans.py:81`)

| Change |  Delta |            % |             Size | Allocations | Caller            | Location                         |
| -----: | -----: | -----------: | ---------------: | ----------: | ----------------- | -------------------------------- |
| -99.9% | -2 MiB | 66.7% → 0.2% | 2 MiB → 1.91 KiB |       5 → 3 | `run_transformer` | `./black/linegen.py:1755 → 1771` |

##### `__str__` (`./black/lines.py:490`)

|  Change |  Delta |             % |        Size | Allocations | Caller           | Location                |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------- | ----------------------- |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |       2 → 0 | `line_to_string` | `./black/lines.py:1073` |

##### `line_to_string` (`./black/lines.py:1073`)

|  Change |  Delta |             % |        Size | Allocations | Caller           | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------- | ------------------------ |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |       2 → 0 | `transform_line` | `./black/linegen.py:601` |

##### `normalize_invisible_parens` (`./black/linegen.py:1344`)

| Change |  Delta |      % |                Size |   Allocations | Caller       | Location                 |
| -----: | -----: | -----: | ------------------: | ------------: | ------------ | ------------------------ |
| -59.8% | -2 MiB | 100.0% | 3.34 MiB → 1.34 MiB | 2,442 → 2,440 | `visit_stmt` | `./black/linegen.py:199` |

##### `changed` (`./blib2to3/pytree.py:160`)

|  Change |  Delta |            % |                Size |     Allocations | Caller    | Location                         |
| ------: | -----: | -----------: | ------------------: | --------------: | --------- | -------------------------------- |
| removed | -2 MiB | 12.3% → 0.0% |         2 MiB → 0 B |           2 → 0 | `changed` | `./blib2to3/pytree.py:171`       |
|  -12.3% | -2 MiB |       100.0% | 16.2 MiB → 14.2 MiB | 25,907 → 25,905 | `prefix`  | `./blib2to3/pytree.py:480 → 469` |

##### `prefix` (`./blib2to3/pytree.py:469`)

| Change |  Delta |            % |               Size |   Allocations | Caller   | Location                         |
| -----: | -----: | -----------: | -----------------: | ------------: | -------- | -------------------------------- |
| -67.2% | -2 MiB | 18.3% → 6.9% | 2.98 MiB → 998 KiB | 1,777 → 1,775 | `prefix` | `./blib2to3/pytree.py:329 → 318` |

##### `prefix` (`./blib2to3/pytree.py:318`)

| Change |  Delta |      % |               Size |   Allocations | Caller                | Location                     |
| -----: | -----: | -----: | -----------------: | ------------: | --------------------- | ---------------------------- |
| -67.2% | -2 MiB | 100.0% | 2.98 MiB → 998 KiB | 1,777 → 1,775 | `wrap_in_parentheses` | `./black/nodes.py:935 → 930` |

##### `wrap_in_parentheses` (`./black/nodes.py:930`)

| Change |  Delta |      % |                Size |   Allocations | Caller                       | Location                         |
| -----: | -----: | -----: | ------------------: | ------------: | ---------------------------- | -------------------------------- |
| -61.8% | -2 MiB | 100.0% | 3.24 MiB → 1.24 MiB | 2,253 → 2,251 | `normalize_invisible_parens` | `./black/linegen.py:1328 → 1344` |

##### `parse_string` (`./blib2to3/pgen2/driver.py:198`)

| Change |      Delta |      % |              Size | Allocations | Caller          | Location                |
| -----: | ---------: | -----: | ----------------: | ----------: | --------------- | ----------------------- |
|  -6.2% | -1.001 MiB | 100.0% | 16.1 MiB → 15 MiB |     37 → 35 | `lib2to3_parse` | `./black/parsing.py:55` |

##### `lib2to3_parse` (`./black/parsing.py:55`)

| Change |      Delta |      % |              Size | Allocations | Caller             | Location                          |
| -----: | ---------: | -----: | ----------------: | ----------: | ------------------ | --------------------------------- |
|  -6.2% | -1.001 MiB | 100.0% | 16.1 MiB → 15 MiB |     37 → 35 | `_format_str_once` | `./black/__init__.py:1236 → 1215` |

##### `parse_tokens` (`./blib2to3/pgen2/driver.py:114`)

| Change |      Delta |      % |              Size | Allocations | Caller         | Location                         |
| -----: | ---------: | -----: | ----------------: | ----------: | -------------- | -------------------------------- |
|  -6.2% | -1.001 MiB | 100.0% | 16.1 MiB → 15 MiB |     36 → 34 | `parse_string` | `./blib2to3/pgen2/driver.py:198` |

##### `addtoken` (`./blib2to3/pgen2/parse.py:230`)

| Change |      Delta |      % |            Size | Allocations | Caller         | Location                         |
| -----: | ---------: | -----: | --------------: | ----------: | -------------- | -------------------------------- |
|  -6.7% | -1.001 MiB | 100.0% | 15 MiB → 14 MiB |     24 → 22 | `parse_tokens` | `./blib2to3/pgen2/driver.py:114` |

##### `convert` (`./blib2to3/pytree.py:475`)

| Change |      Delta |             % |             Size | Allocations | Caller  | Location                              |
| -----: | ---------: | ------------: | ---------------: | ----------: | ------- | ------------------------------------- |
| -60.0% | -3.002 MiB | 45.4% → 20.0% |    5 MiB → 2 MiB |       6 → 2 | `shift` | `./blib2to3/pgen2/parse.py:373 → 361` |
| +33.3% |     +2 MiB | 54.6% → 80.0% | 6 MiB → 8.01 MiB |     11 → 13 | `pop`   | `./blib2to3/pgen2/parse.py:398 → 386` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

| Change |      Delta |      % |            Size | Allocations | Caller     | Location                              |
| -----: | ---------: | -----: | --------------: | ----------: | ---------- | ------------------------------------- |
|  -6.7% | -1.001 MiB | 100.0% | 15 MiB → 14 MiB |     21 → 19 | `addtoken` | `./blib2to3/pgen2/parse.py:242 → 230` |

##### `__init__` (`./blib2to3/pgen2/pgen.py:376`)

|  Change |  Delta |             % |        Size | Allocations | Caller       | Location                       |
| ------: | -----: | ------------: | ----------: | ----------: | ------------ | ------------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `parse_atom` | `./blib2to3/pgen2/pgen.py:329` |

##### `parse_atom` (`./blib2to3/pgen2/pgen.py:318`)

| Change |  Delta |      % |             Size | Allocations | Caller       | Location                             |
| -----: | -----: | -----: | ---------------: | ----------: | ------------ | ------------------------------------ |
| -99.5% | -1 MiB | 100.0% | 1 MiB → 4.73 KiB |       3 → 2 | `parse_item` | `./blib2to3/pgen2/pgen.py:309 → 298` |

##### `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`)

| Change |      Delta |      % |     Size | Allocations | Caller                | Location                                 |
| -----: | ---------: | -----: | -------: | ----------: | --------------------- | ---------------------------------------- |
|    ~0% | -1.378 KiB | 100.0% | 4.89 MiB |   873 → 874 | `run_module`          | `/usr/local/lib/python3.10/runpy.py:199` |
|    ~0% | -1.378 KiB |  99.9% | 4.89 MiB |   870 → 871 | `_get_module_details` | `/usr/local/lib/python3.10/runpy.py:103` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

| Change |      Delta |             % |     Size | Allocations | Caller             | Location                                     |
| -----: | ---------: | ------------: | -------: | ----------: | ------------------ | -------------------------------------------- |
|  -0.1% | -2.669 KiB | 79.4% → 79.3% | 3.88 MiB |   854 → 855 | `exec_module`      | `<frozen importlib._bootstrap_external>:877` |
|  +0.1% | +2.066 KiB | 62.8% → 62.9% | 3.07 MiB |   108 → 109 | `source_to_code`   | `<frozen importlib._bootstrap_external>:942` |
|    ~0% |       -8 B |          4.4% |  219 KiB |         222 | `_handle_fromlist` | `<frozen importlib._bootstrap>:1053`         |

##### `exec_module` (`<frozen importlib._bootstrap_external>:877`)

| Change |      Delta |      % |     Size | Allocations | Caller           | Location                            |
| -----: | ---------: | -----: | -------: | ----------: | ---------------- | ----------------------------------- |
|    ~0% | -1.378 KiB | 100.0% | 4.89 MiB |   870 → 871 | `_load_unlocked` | `<frozen importlib._bootstrap>:664` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:664`)

| Change |      Delta |      % |     Size | Allocations | Caller                    | Location                            |
| -----: | ---------: | -----: | -------: | ----------: | ------------------------- | ----------------------------------- |
|    ~0% | -1.378 KiB | 100.0% | 4.89 MiB |   870 → 871 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:987` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:987`)

| Change |      Delta |      % |     Size | Allocations | Caller           | Location                             |
| -----: | ---------: | -----: | -------: | ----------: | ---------------- | ------------------------------------ |
|    ~0% | -1.378 KiB | 100.0% | 4.89 MiB |   870 → 871 | `_find_and_load` | `<frozen importlib._bootstrap>:1022` |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1022`)

| Change |      Delta |      % |              Size | Allocations | Caller                | Location                                 |
| -----: | ---------: | -----: | ----------------: | ----------: | --------------------- | ---------------------------------------- |
|  -0.1% | -2.669 KiB |  79.1% |          3.87 MiB |   841 → 842 | `<module>`            | `./black/__init__.py:1`                  |
|  -2.9% | -2.367 KiB |   1.6% | 82 KiB → 79.7 KiB |          81 | `<module>`            | `./black/linegen.py:1`                   |
|    ~0% | -1.378 KiB | 100.0% |          4.89 MiB |   870 → 871 | `_get_module_details` | `/usr/local/lib/python3.10/runpy.py:103` |
|  +0.4% |     +794 B |   3.5% |           174 KiB |   163 → 164 | `<module>`            | `./black/files.py:1`                     |
|    ~0% |      +30 B |  25.6% |          1.25 MiB |         206 | `<module>`            | `./black/comments.py:1`                  |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1053`)

| Change | Delta |     % |     Size | Allocations | Caller     | Location                 |
| -----: | ----: | ----: | -------: | ----------: | ---------- | ------------------------ |
|    ~0% |  -8 B | 37.7% | 82.4 KiB |          73 | `<module>` | `./blib2to3/pygram.py:1` |
|    ~0% |  -8 B | 41.0% | 89.7 KiB |          77 | `<module>` | `./black/nodes.py:1`     |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `pop` (`./blib2to3/pgen2/parse.py:386`)

| Change |  Delta |      % |             Size | Allocations | Callee    | Location                         |
| -----: | -----: | -----: | ---------------: | ----------: | --------- | -------------------------------- |
| +33.3% | +2 MiB | 100.0% | 6 MiB → 8.01 MiB |     11 → 13 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `visit` (`./black/nodes.py:152`)

| Change |  Delta |             % |                Size |     Allocations | Callee              | Location                 |
| -----: | -----: | ------------: | ------------------: | --------------: | ------------------- | ------------------------ |
|  +7.5% | +2 MiB |        100.0% | 26.6 MiB → 28.6 MiB | 26,393 → 26,395 | `visit_default`     | `./black/linegen.py:134` |
|  +7.6% | +2 MiB | 98.7% → 98.8% | 26.2 MiB → 28.2 MiB | 25,805 → 25,807 | `visit_stmt`        | `./black/linegen.py:199` |
|  +7.7% | +2 MiB | 97.9% → 98.0% |     26 MiB → 28 MiB | 25,387 → 25,389 | `visit_suite`       | `./black/linegen.py:288` |
|  +7.7% | +2 MiB | 97.8% → 97.9% |     26 MiB → 28 MiB | 25,385 → 25,387 | `visit_funcdef`     | `./black/linegen.py:254` |
|  -5.4% | -1 MiB | 69.8% → 61.4% | 18.5 MiB → 17.5 MiB | 15,458 → 15,457 | `visit_simple_stmt` | `./black/linegen.py:295` |

##### `visit_default` (`./black/nodes.py:176`)

| Change |  Delta |      % |                Size |     Allocations | Callee  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
|  +7.5% | +2 MiB | 100.0% | 26.6 MiB → 28.6 MiB | 26,393 → 26,395 | `visit` | `./black/nodes.py:163 → 152` |

##### `visit_default` (`./black/linegen.py:134`)

| Change |  Delta |             % |                Size |     Allocations | Callee              | Location                     |
| -----: | -----: | ------------: | ------------------: | --------------: | ------------------- | ---------------------------- |
|  +7.5% | +2 MiB |        100.0% | 26.6 MiB → 28.6 MiB | 26,393 → 26,395 | `visit_default`     | `./black/nodes.py:187 → 176` |
| +19.7% | +1 MiB | 19.1% → 21.3% | 5.07 MiB → 6.07 MiB |       102 → 103 | `append`            | `./black/lines.py:63 → 52`   |
|  +6.7% | +1 MiB | 56.4% → 56.0% |     15 MiB → 16 MiB | 23,656 → 23,657 | `generate_comments` | `./black/comments.py:52`     |

##### `visit_stmt` (`./black/linegen.py:199`)

| Change |  Delta |             % |                Size |     Allocations | Callee                       | Location                         |
| -----: | -----: | ------------: | ------------------: | --------------: | ---------------------------- | -------------------------------- |
| +11.9% | +3 MiB | 95.8% → 99.6% | 25.1 MiB → 28.1 MiB | 25,611 → 25,614 | `visit`                      | `./black/nodes.py:163 → 152`     |
| -59.8% | -2 MiB |  12.7% → 4.8% | 3.34 MiB → 1.34 MiB |   2,442 → 2,440 | `normalize_invisible_parens` | `./black/linegen.py:1328 → 1344` |

##### `visit_suite` (`./black/linegen.py:288`)

| Change |  Delta |      % |            Size |     Allocations | Callee          | Location                 |
| -----: | -----: | -----: | --------------: | --------------: | --------------- | ------------------------ |
|  +7.7% | +2 MiB | 100.0% | 26 MiB → 28 MiB | 25,387 → 25,389 | `visit_default` | `./black/linegen.py:134` |

##### `visit_funcdef` (`./black/linegen.py:254`)

| Change |  Delta |      % |            Size |     Allocations | Callee  | Location                     |
| -----: | -----: | -----: | --------------: | --------------: | ------- | ---------------------------- |
|  +7.7% | +2 MiB | 100.0% | 26 MiB → 28 MiB | 25,385 → 25,387 | `visit` | `./black/nodes.py:163 → 152` |

##### `__init__` (`<string>:2`)

|  Change |  Delta |              % |          Size | Allocations | Callee     | Location     |
| ------: | -----: | -------------: | ------------: | ----------: | ---------- | ------------ |
| +200.0% | +2 MiB | 99.9% → 100.0% | 1 MiB → 3 MiB |       1 → 3 | `__init__` | `<string>:2` |

##### `check_stability_and_equivalence` (`./black/__init__.py:1042`)

| Change |       Delta |             % |                Size |     Allocations | Callee              | Location                          |
| -----: | ----------: | ------------: | ------------------: | --------------: | ------------------- | --------------------------------- |
| +50.0% |      +1 MiB | 12.0% → 17.0% |       2 MiB → 3 MiB |           3 → 4 | `assert_equivalent` | `./black/__init__.py:1524 → 1510` |
|  +0.4% | +53.328 KiB | 88.0% → 83.0% | 14.6 MiB → 14.7 MiB | 26,397 → 26,426 | `assert_stable`     | `./black/__init__.py:1557 → 1543` |

##### `_run_module_code` (`/usr/local/lib/python3.10/runpy.py:89`)

| Change |      Delta |      % |                Size |     Allocations | Callee      | Location                                |
| -----: | ---------: | -----: | ------------------: | --------------: | ----------- | --------------------------------------- |
|  +2.0% | +1.049 MiB | 100.0% | 52.7 MiB → 53.8 MiB | 26,564 → 26,592 | `_run_code` | `/usr/local/lib/python3.10/runpy.py:63` |

##### `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`)

| Change |      Delta |      % |                Size |     Allocations | Callee     | Location                |
| -----: | ---------: | -----: | ------------------: | --------------: | ---------- | ----------------------- |
|  +2.0% | +1.049 MiB | 100.0% | 52.7 MiB → 53.8 MiB | 26,563 → 26,591 | `<module>` | `./black/__main__.py:1` |

##### `__call__` (`/venv/lib/python3.10/site-packages/click/core.py:1651`)

| Change |      Delta |      % |                Size |     Allocations | Callee | Location                                                |
| -----: | ---------: | -----: | ------------------: | --------------: | ------ | ------------------------------------------------------- |
|  +2.0% | +1.049 MiB | 100.0% | 52.7 MiB → 53.8 MiB | 26,562 → 26,590 | `main` | `/venv/lib/python3.10/site-packages/click/core.py:1483` |

##### `patched_main` (`./black/__init__.py:1580`)

| Change |      Delta |      % |                Size |     Allocations | Callee     | Location                                                |
| -----: | ---------: | -----: | ------------------: | --------------: | ---------- | ------------------------------------------------------- |
|  +2.0% | +1.049 MiB | 100.0% | 52.7 MiB → 53.8 MiB | 26,563 → 26,591 | `__call__` | `/venv/lib/python3.10/site-packages/click/core.py:1651` |

##### `<module>` (`./black/__main__.py:1`)

| Change |      Delta |      % |                Size |     Allocations | Callee         | Location                          |
| -----: | ---------: | -----: | ------------------: | --------------: | -------------- | --------------------------------- |
|  +2.0% | +1.049 MiB | 100.0% | 52.7 MiB → 53.8 MiB | 26,563 → 26,591 | `patched_main` | `./black/__init__.py:1594 → 1580` |

##### `main` (`/venv/lib/python3.10/site-packages/click/core.py:1483`)

| Change |      Delta |      % |                Size |     Allocations | Callee   | Location                                                |
| -----: | ---------: | -----: | ------------------: | --------------: | -------- | ------------------------------------------------------- |
|  +2.0% | +1.049 MiB | 100.0% | 52.7 MiB → 53.8 MiB | 26,545 → 26,573 | `invoke` | `/venv/lib/python3.10/site-packages/click/core.py:1400` |

##### `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`)

| Change |      Delta |      % |                Size |     Allocations | Callee | Location                        |
| -----: | ---------: | -----: | ------------------: | --------------: | ------ | ------------------------------- |
|  +2.0% | +1.049 MiB | 100.0% | 52.7 MiB → 53.8 MiB | 26,544 → 26,572 | `main` | `./black/__init__.py:244 → 240` |

##### `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`)

| Change |      Delta |      % |                Size |     Allocations | Callee     | Location                                                    |
| -----: | ---------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------------------------------- |
|  +2.0% | +1.049 MiB | 100.0% | 52.7 MiB → 53.8 MiB | 26,545 → 26,573 | `new_func` | `/venv/lib/python3.10/site-packages/click/decorators.py:33` |

##### `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:1400`)

| Change |      Delta |      % |                Size |     Allocations | Callee   | Location                                               |
| -----: | ---------: | -----: | ------------------: | --------------: | -------- | ------------------------------------------------------ |
|  +2.0% | +1.049 MiB | 100.0% | 52.7 MiB → 53.8 MiB | 26,545 → 26,573 | `invoke` | `/venv/lib/python3.10/site-packages/click/core.py:861` |

##### `main` (`./black/__init__.py:240`)

| Change |      Delta |      % |                Size |     Allocations | Callee         | Location                        |
| -----: | ---------: | -----: | ------------------: | --------------: | -------------- | ------------------------------- |
|  +2.0% | +1.049 MiB | 100.0% | 52.7 MiB → 53.8 MiB | 26,534 → 26,562 | `reformat_one` | `./black/__init__.py:860 → 865` |

##### `reformat_one` (`./black/__init__.py:865`)

| Change |      Delta |      % |                Size |     Allocations | Callee                 | Location                        |
| -----: | ---------: | -----: | ------------------: | --------------: | ---------------------- | ------------------------------- |
|  +2.0% | +1.049 MiB | 100.0% | 52.7 MiB → 53.8 MiB | 26,530 → 26,558 | `format_file_in_place` | `./black/__init__.py:917 → 922` |

##### `format_file_in_place` (`./black/__init__.py:922`)

| Change |      Delta |      % |                Size |     Allocations | Callee                 | Location                          |
| -----: | ---------: | -----: | ------------------: | --------------: | ---------------------- | --------------------------------- |
|  +2.0% | +1.049 MiB | 100.0% | 52.7 MiB → 53.8 MiB | 26,529 → 26,557 | `format_file_contents` | `./black/__init__.py:1054 → 1059` |

##### `format_file_contents` (`./black/__init__.py:1059`)

| Change |      Delta |             % |                Size |     Allocations | Callee                            | Location                          |
| -----: | ---------: | ------------: | ------------------: | --------------: | --------------------------------- | --------------------------------- |
|  +6.3% | +1.052 MiB | 31.5% → 32.9% | 16.6 MiB → 17.7 MiB | 26,400 → 26,430 | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042` |
|    ~0% | -2.397 KiB | 68.5% → 67.1% |            36.1 MiB |       129 → 127 | `format_str`                      | `./black/__init__.py:1189 → 1168` |

##### `append` (`./black/lines.py:52`)

|    Change |  Delta |             % |             Size | Allocations | Callee       | Location                     |
| --------: | -----: | ------------: | ---------------: | ----------: | ------------ | ---------------------------- |
| +20227.2% | +1 MiB |  0.1% → 16.6% | 5.06 KiB → 1 MiB |       3 → 4 | `mark`       | `./black/brackets.py:70`     |
|       ~0% |  +49 B | 99.9% → 83.4% |         5.06 MiB |          96 | `whitespace` | `./black/nodes.py:194 → 183` |

##### `visit_power` (`./black/linegen.py:341`)

| Change |  Delta |      % |                Size |   Allocations | Callee          | Location                 |
| -----: | -----: | -----: | ------------------: | ------------: | --------------- | ------------------------ |
| +10.8% | +1 MiB | 100.0% | 9.26 MiB → 10.3 MiB | 9,582 → 9,583 | `visit_default` | `./black/linegen.py:134` |

##### `run_module` (`/usr/local/lib/python3.10/runpy.py:199`)

| Change |      Delta |             % |                Size |     Allocations | Callee                | Location                                 |
| -----: | ---------: | ------------: | ------------------: | --------------: | --------------------- | ---------------------------------------- |
|  +2.0% | +1.049 MiB | 91.5% → 91.7% | 52.7 MiB → 53.8 MiB | 26,565 → 26,593 | `_run_module_code`    | `/usr/local/lib/python3.10/runpy.py:89`  |
|    ~0% | -1.378 KiB |   8.5% → 8.3% |            4.89 MiB |       873 → 874 | `_get_module_details` | `/usr/local/lib/python3.10/runpy.py:103` |

##### `source_to_code` (`<frozen importlib._bootstrap_external>:942`)

| Change |      Delta |      % |     Size | Allocations | Callee                      | Location                            |
| -----: | ---------: | -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
|  +0.1% | +2.066 KiB | 100.0% | 3.07 MiB |   108 → 109 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `get_code` (`<frozen importlib._bootstrap_external>:950`)

| Change |      Delta |     % |     Size | Allocations | Callee           | Location                                     |
| -----: | ---------: | ----: | -------: | ----------: | ---------------- | -------------------------------------------- |
|  +0.1% | +2.066 KiB | 95.2% | 3.07 MiB |   108 → 109 | `source_to_code` | `<frozen importlib._bootstrap_external>:942` |

##### `shift` (`./blib2to3/pgen2/parse.py:361`)

| Change |      Delta |             % |          Size | Allocations | Callee    | Location                         |
| -----: | ---------: | ------------: | ------------: | ----------: | --------- | -------------------------------- |
| -60.0% | -3.002 MiB | 71.4% → 40.0% | 5 MiB → 2 MiB |       6 → 2 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `clone` (`./blib2to3/pytree.py:452`)

|  Change |  Delta |             % |        Size | Allocations | Callee    | Location                  |
| ------: | -----: | ------------: | ----------: | ----------: | --------- | ------------------------- |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |       2 → 0 | `__new__` | `./blib2to3/pytree.py:81` |

##### `hug_power_op` (`./black/trans.py:81`)

|  Change |  Delta |            % |        Size | Allocations | Callee  | Location                   |
| ------: | -----: | -----------: | ----------: | ----------: | ------- | -------------------------- |
| removed | -2 MiB | 66.6% → 0.0% | 2 MiB → 0 B |       2 → 0 | `clone` | `./blib2to3/pytree.py:452` |
|     new | +1 MiB | 0.0% → 99.8% | 0 B → 1 MiB |       0 → 1 | `clone` | `./black/lines.py:470`     |

##### `__str__` (`./black/lines.py:490`)

|  Change |  Delta |            % |        Size | Allocations | Callee    | Location                   |
| ------: | -----: | -----------: | ----------: | ----------: | --------- | -------------------------- |
| removed | -1 MiB | 50.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `__str__` | `./blib2to3/pytree.py:440` |

##### `line_to_string` (`./black/lines.py:1073`)

|  Change |  Delta |             % |        Size | Allocations | Callee    | Location               |
| ------: | -----: | ------------: | ----------: | ----------: | --------- | ---------------------- |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |       2 → 0 | `__str__` | `./black/lines.py:490` |

##### `normalize_invisible_parens` (`./black/linegen.py:1344`)

| Change |  Delta |             % |                Size |   Allocations | Callee                | Location                     |
| -----: | -----: | ------------: | ------------------: | ------------: | --------------------- | ---------------------------- |
| -61.8% | -2 MiB | 96.8% → 92.1% | 3.24 MiB → 1.24 MiB | 2,253 → 2,251 | `wrap_in_parentheses` | `./black/nodes.py:935 → 930` |

##### `changed` (`./blib2to3/pytree.py:160`)

|  Change |  Delta |            % |        Size | Allocations | Callee    | Location                   |
| ------: | -----: | -----------: | ----------: | ----------: | --------- | -------------------------- |
| removed | -2 MiB | 12.3% → 0.0% | 2 MiB → 0 B |       2 → 0 | `changed` | `./blib2to3/pytree.py:171` |

##### `prefix` (`./blib2to3/pytree.py:469`)

| Change |  Delta |      % |                Size |     Allocations | Callee    | Location                         |
| -----: | -----: | -----: | ------------------: | --------------: | --------- | -------------------------------- |
| -12.3% | -2 MiB | 100.0% | 16.2 MiB → 14.2 MiB | 25,907 → 25,905 | `changed` | `./blib2to3/pytree.py:171 → 160` |

##### `prefix` (`./blib2to3/pytree.py:318`)

| Change |  Delta |      % |               Size |   Allocations | Callee   | Location                         |
| -----: | -----: | -----: | -----------------: | ------------: | -------- | -------------------------------- |
| -67.2% | -2 MiB | 100.0% | 2.98 MiB → 998 KiB | 1,777 → 1,775 | `prefix` | `./blib2to3/pytree.py:480 → 469` |

##### `wrap_in_parentheses` (`./black/nodes.py:930`)

| Change |  Delta |             % |               Size |   Allocations | Callee   | Location                         |
| -----: | -----: | ------------: | -----------------: | ------------: | -------- | -------------------------------- |
| -67.2% | -2 MiB | 91.9% → 78.9% | 2.98 MiB → 998 KiB | 1,777 → 1,775 | `prefix` | `./blib2to3/pytree.py:329 → 318` |

##### `parse_string` (`./blib2to3/pgen2/driver.py:198`)

| Change |      Delta |      % |              Size | Allocations | Callee         | Location                         |
| -----: | ---------: | -----: | ----------------: | ----------: | -------------- | -------------------------------- |
|  -6.2% | -1.001 MiB | 100.0% | 16.1 MiB → 15 MiB |     36 → 34 | `parse_tokens` | `./blib2to3/pgen2/driver.py:114` |

##### `lib2to3_parse` (`./black/parsing.py:55`)

| Change |      Delta |      % |              Size | Allocations | Callee         | Location                         |
| -----: | ---------: | -----: | ----------------: | ----------: | -------------- | -------------------------------- |
|  -6.2% | -1.001 MiB | 100.0% | 16.1 MiB → 15 MiB |     37 → 35 | `parse_string` | `./blib2to3/pgen2/driver.py:198` |

##### `parse_tokens` (`./blib2to3/pgen2/driver.py:114`)

| Change |      Delta |             % |            Size | Allocations | Callee     | Location                              |
| -----: | ---------: | ------------: | --------------: | ----------: | ---------- | ------------------------------------- |
|  -6.7% | -1.001 MiB | 93.7% → 93.3% | 15 MiB → 14 MiB |     24 → 22 | `addtoken` | `./blib2to3/pgen2/parse.py:242 → 230` |

##### `addtoken` (`./blib2to3/pgen2/parse.py:230`)

| Change |      Delta |     % |            Size | Allocations | Callee      | Location                              |
| -----: | ---------: | ----: | --------------: | ----------: | ----------- | ------------------------------------- |
|  -6.7% | -1.001 MiB | 99.8% | 15 MiB → 14 MiB |     21 → 19 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `convert` (`./blib2to3/pytree.py:475`)

|  Change |  Delta |             % |             Size | Allocations | Callee     | Location                         |
| ------: | -----: | ------------: | ---------------: | ----------: | ---------- | -------------------------------- |
| removed | -2 MiB |  18.2% → 0.0% |      2 MiB → 0 B |       2 → 0 | `__init__` | `./blib2to3/pytree.py:400`       |
|  +16.7% | +1 MiB | 54.6% → 70.0% | 6 MiB → 7.01 MiB |     11 → 12 | `__init__` | `./blib2to3/pytree.py:248 → 237` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

| Change |      Delta |             % |             Size | Allocations | Callee  | Location                              |
| -----: | ---------: | ------------: | ---------------: | ----------: | ------- | ------------------------------------- |
| -28.6% | -2.002 MiB | 46.7% → 35.7% |    7 MiB → 5 MiB |       8 → 5 | `shift` | `./blib2to3/pgen2/parse.py:373 → 361` |
| +33.3% |     +2 MiB | 40.0% → 57.2% | 6 MiB → 8.01 MiB |     11 → 13 | `pop`   | `./blib2to3/pgen2/parse.py:398 → 386` |

##### `parse_atom` (`./blib2to3/pgen2/pgen.py:318`)

|  Change |  Delta |            % |        Size | Allocations | Callee      | Location                       |
| ------: | -----: | -----------: | ----------: | ----------: | ----------- | ------------------------------ |
| removed | -1 MiB | 99.5% → 0.0% | 1 MiB → 0 B |       1 → 0 | `__init__`  | `./blib2to3/pgen2/pgen.py:376` |
| removed | -1 MiB | 99.5% → 0.0% | 1 MiB → 0 B |       1 → 0 | `parse_rhs` | `./blib2to3/pgen2/pgen.py:283` |

##### `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`)

| Change |      Delta |     % |     Size | Allocations | Callee                | Location                                 |
| -----: | ---------: | ----: | -------: | ----------: | --------------------- | ---------------------------------------- |
|    ~0% | -1.378 KiB | 99.9% | 4.89 MiB |   870 → 871 | `_find_and_load`      | `<frozen importlib._bootstrap>:1022`     |
|    ~0% | -1.378 KiB | 99.9% | 4.89 MiB |   870 → 871 | `_get_module_details` | `/usr/local/lib/python3.10/runpy.py:103` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

| Change |      Delta |             % |                Size | Allocations | Callee     | Location                |
| -----: | ---------: | ------------: | ------------------: | ----------: | ---------- | ----------------------- |
|  -0.1% | -2.669 KiB | 79.4% → 79.3% |            3.88 MiB |   854 → 855 | `<module>` | `./black/__init__.py:1` |
|  -2.6% | -2.367 KiB |          1.8% |   91 KiB → 88.6 KiB |          87 | `<module>` | `./black/linegen.py:1`  |
|  -7.6% | -2.367 KiB |          0.6% | 31.1 KiB → 28.8 KiB |          30 | `<module>` | `./black/trans.py:1`    |
| -23.5% |  -1.07 KiB |          0.1% | 4.56 KiB → 3.49 KiB |           4 | `<module>` | `./black/ranges.py:1`   |
|  +0.4% |     +794 B |          3.5% |   176 KiB → 177 KiB |   164 → 165 | `<module>` | `./black/files.py:1`    |

##### `exec_module` (`<frozen importlib._bootstrap_external>:877`)

| Change |      Delta |             % |     Size | Allocations | Callee                      | Location                                     |
| -----: | ---------: | ------------: | -------: | ----------: | --------------------------- | -------------------------------------------- |
|  -0.1% | -2.669 KiB | 79.4% → 79.3% | 3.88 MiB |   854 → 855 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`          |
|  +0.1% | +2.066 KiB | 66.0% → 66.1% | 3.23 MiB |   263 → 264 | `get_code`                  | `<frozen importlib._bootstrap_external>:950` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:664`)

| Change |      Delta |      % |     Size | Allocations | Callee        | Location                                     |
| -----: | ---------: | -----: | -------: | ----------: | ------------- | -------------------------------------------- |
|    ~0% | -1.378 KiB | 100.0% | 4.89 MiB |   870 → 871 | `exec_module` | `<frozen importlib._bootstrap_external>:877` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:987`)

| Change |      Delta |      % |     Size | Allocations | Callee           | Location                            |
| -----: | ---------: | -----: | -------: | ----------: | ---------------- | ----------------------------------- |
|    ~0% | -1.378 KiB | 100.0% | 4.89 MiB |   870 → 871 | `_load_unlocked` | `<frozen importlib._bootstrap>:664` |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1022`)

| Change |      Delta |      % |     Size | Allocations | Callee                    | Location                            |
| -----: | ---------: | -----: | -------: | ----------: | ------------------------- | ----------------------------------- |
|    ~0% | -1.378 KiB | 100.0% | 4.89 MiB |   870 → 871 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:987` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1053`)

| Change | Delta |      % |    Size | Allocations | Callee                      | Location                            |
| -----: | ----: | -----: | ------: | ----------: | --------------------------- | ----------------------------------- |
|    ~0% |  -8 B | 100.0% | 219 KiB |         222 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes never freed in their leaf frame.

Common call stack: `run_module` (`/usr/local/lib/python3.10/runpy.py:199`) ← `_run_tracker` (`/venv/lib/python3.10/site-packages/memray/commands/run.py:40`)

|    Change |  Delta |             % |            Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------: | -----: | ------------: | --------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|       new | +2 MiB |   0.0% → 3.4% |     0 B → 2 MiB |       0 → 2 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `preceding_leaf` (`./black/nodes.py:436`) ← `whitespace` (183) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|    +16.7% | +1 MiB | 10.4% → 11.9% |   6 MiB → 7 MiB |       7 → 8 | `__init__` (`./blib2to3/pytree.py:237`) ← `convert` (475) ← `pop` (`./blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|    +50.0% | +1 MiB |   3.5% → 5.1% |   2 MiB → 3 MiB |       2 → 3 | `shift` (`./blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| +46479.4% | +1 MiB |  <0.1% → 1.7% | 2.2 KiB → 1 MiB |       3 → 4 | `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|    +50.0% | +1 MiB |   3.5% → 5.1% |   2 MiB → 3 MiB |       2 → 3 | `parse` (`/usr/local/lib/python3.10/ast.py:33`) ← `_parse_single_version` (`./black/parsing.py:125`) ← `parse_ast` (137) ← `assert_equivalent` (`./black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|       new | +1 MiB |   0.0% → 1.7% |     0 B → 1 MiB |       0 → 1 | `closure` (`./blib2to3/pgen2/pgen.py:197`) ← `make_dfa` (189) ← `parse` (164) ← `__init__` (23) ← `generate_grammar` (415) ← `load_grammar` (`./blib2to3/pgen2/driver.py:246`) ← `load_packaged_grammar` (280) ← `initialize` (`./blib2to3/pygram.py:165`) ← `<module>` (`./black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `<module>` (`./black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `<module>` (`./black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`) ← `_get_module_details` (103)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|       new | +1 MiB |   0.0% → 1.7% |     0 B → 1 MiB |       0 → 1 | `convert` (`./blib2to3/pytree.py:475`) ← `pop` (`./blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|       new | +1 MiB |   0.0% → 1.7% |     0 B → 1 MiB |       0 → 1 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `whitespace` (`./black/nodes.py:183`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|       new | +1 MiB |   0.0% → 1.7% |     0 B → 1 MiB |       0 → 1 | `__init__` (`./black/trans.py:278`) ← `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|       new | +1 MiB |   0.0% → 1.7% |     0 B → 1 MiB |       0 → 1 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|       new | +1 MiB |   0.0% → 1.7% |     0 B → 1 MiB |       0 → 1 | `mark` (`./black/brackets.py:70`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|       new | +1 MiB |   0.0% → 1.7% |     0 B → 1 MiB |       0 → 1 | `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|       new | +1 MiB |   0.0% → 1.7% |     0 B → 1 MiB |       0 → 1 | `__init__` (`<string>:2`) ← `__init__` (2) ← `clone` (`./black/lines.py:470`) ← `hug_power_op` (`./black/trans.py:81`) ← `_hugging_power_ops_line_to_string` (`./black/linegen.py:590`) ← `transform_line` (601) ← `run_transformer` (1771) ← `transform_line` (601) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|       new | +1 MiB |   0.0% → 1.7% |     0 B → 1 MiB |       0 → 1 | `prev_sibling` (`./blib2to3/pytree.py:196`) ← `whitespace` (`./black/nodes.py:183`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                           |
|       new | +1 MiB |   0.0% → 1.7% |     0 B → 1 MiB |       0 → 1 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `whitespace` (`./black/nodes.py:183`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit_NUMBER` (505) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89) |
|       new | +1 MiB |   0.0% → 1.7% |     0 B → 1 MiB |       0 → 1 | `__init__` (`<string>:2`) ← `__init__` (2) ← `line` (`./black/linegen.py:109`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|       new | +1 MiB |   0.0% → 1.7% |     0 B → 1 MiB |       0 → 1 | `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|       new | +1 MiB |   0.0% → 1.7% |     0 B → 1 MiB |       0 → 1 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|       new | +1 MiB |   0.0% → 1.7% |     0 B → 1 MiB |       0 → 1 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                     |
|       new | +1 MiB |   0.0% → 1.7% |     0 B → 1 MiB |       0 → 1 | `contains_implicit_multiline_string_with_comments` (`./black/lines.py:250`) ← `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

### Improvements

Call stacks with the largest decrease in bytes never freed in their leaf frame.

Common call stack: `run_module` (`/usr/local/lib/python3.10/runpy.py:199`) ← `_run_tracker` (`/venv/lib/python3.10/site-packages/memray/commands/run.py:40`)

|  Change |      Delta |            % |          Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------: | ---------: | -----------: | ------------: | ----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |     -2 MiB |  3.5% → 0.0% |   2 MiB → 0 B |       2 → 0 | `__init__` (`./blib2to3/pytree.py:400`) ← `convert` (486) ← `shift` (`./blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  -50.1% | -1.002 MiB |  3.5% → 1.7% | 2 MiB → 1 MiB |       3 → 1 | `convert` (`./blib2to3/pytree.py:475`) ← `shift` (`./blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed |     -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `__init__` (`./blib2to3/pgen2/pgen.py:376`) ← `parse_atom` (329) ← `parse_item` (309) ← `parse_alt` (300) ← `parse_rhs` (283) ← `parse_atom` (329) ← `parse_item` (309) ← `parse_alt` (300) ← `parse_rhs` (283) ← `parse` (175) ← `__init__` (34) ← `generate_grammar` (426) ← `load_grammar` (`./blib2to3/pgen2/driver.py:246`) ← `load_packaged_grammar` (280) ← `initialize` (`./blib2to3/pygram.py:165`) ← `<module>` (`./black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `<module>` (`./black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `<module>` (`./black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`) ← `_get_module_details` (103)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |     -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `_addtoken` (`./blib2to3/pgen2/parse.py:290`) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed |     -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `__new__` (`./blib2to3/pytree.py:81`) ← `clone` (452) ← `hug_power_op` (`./black/trans.py:85`) ← `_hugging_power_ops_line_to_string` (`./black/linegen.py:590`) ← `transform_line` (601) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -99.9% |     -1 MiB | 1.7% → <0.1% | 1 MiB → 704 B |       2 → 1 | `hug_power_op` (`./black/trans.py:81`) ← `run_transformer` (`./black/linegen.py:1771`) ← `transform_line` (601) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed |     -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `__str__` (`./blib2to3/pytree.py:440`) ← `__str__` (`./black/lines.py:490`) ← `line_to_string` (1073) ← `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed |     -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `update_sibling_maps` (`./blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `preceding_leaf` (`./black/nodes.py:441`) ← `whitespace` (194) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |     -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `update_sibling_maps` (`./blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `prev_siblings_are` (`./black/nodes.py:459`) ← `is_docstring` (558) ← `visit_STRING` (`./black/linegen.py:413`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed |     -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89) |
| removed |     -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `prev_sibling` (`./blib2to3/pytree.py:207`) ← `preceding_leaf` (`./black/nodes.py:441`) ← `whitespace` (194) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed |     -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `update_sibling_maps` (`./blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`./black/nodes.py:194`) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                 |
| removed |     -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `__str__` (`./black/lines.py:490`) ← `line_to_string` (1073) ← `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |     -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `changed` (`./blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `prefix` (329) ← `wrap_in_parentheses` (`./black/nodes.py:935`) ← `normalize_invisible_parens` (`./black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed |     -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `prev_sibling` (`./blib2to3/pytree.py:207`) ← `whitespace` (`./black/nodes.py:194`) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| removed |     -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed |     -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `changed` (`./blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `prefix` (329) ← `wrap_in_parentheses` (`./black/nodes.py:935`) ← `normalize_invisible_parens` (`./black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed |     -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |     -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `update_sibling_maps` (`./blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`./black/nodes.py:194`) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed |     -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `__new__` (`./blib2to3/pytree.py:81`) ← `clone` (452) ← `hug_power_op` (`./black/trans.py:85`) ← `run_transformer` (`./black/linegen.py:1755`) ← `transform_line` (601) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

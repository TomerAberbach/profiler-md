# Peak memory profile

Held 78.6 MiB over 22,694 samples (3.55 KiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Ours             | 81.6% | 64.2 MiB |  21,445 |
| Standard library | 16.7% | 13.2 MiB |   1,015 |
| Third-party      |  1.6% | 1.27 MiB |     234 |

## Hottest functions

### Self size

Functions ranked by bytes held at peak memory directly in the function body, excluding callees.

|     % |     Size | Samples | Function                         | Location                                       |
| ----: | -------: | ------: | -------------------------------- | ---------------------------------------------- |
| 23.2% | 18.2 MiB |  20,790 | `mark`                           | `black/brackets.py:70`                         |
| 11.6% | 9.12 MiB |     142 | `parse`                          | `/usr/lib/python3.11/ast.py:33`                |
|  9.1% | 7.14 MiB |     202 | `update_sibling_maps`            | `blib2to3/pytree.py:369`                       |
|  9.0% |  7.1 MiB |       4 | `assert_equivalent`              | `black/__init__.py:1524`                       |
|  8.9% |    7 MiB |       7 | `changed`                        | `blib2to3/pytree.py:171`                       |
|  7.6% |    6 MiB |       6 | `__new__`                        | `blib2to3/pytree.py:81`                        |
|  5.1% | 4.05 MiB |      60 | `_stringify_ast`                 | `black/parsing.py:174`                         |
|  3.8% |    3 MiB |       3 | `prefix`                         | `blib2to3/pytree.py:480`                       |
|  3.8% |    3 MiB |       3 | `push`                           | `blib2to3/pgen2/parse.py:386`                  |
|  2.5% |    2 MiB |       2 | `_stringify_ast_with_new_parent` | `black/parsing.py:166`                         |
|  2.5% |    2 MiB |       2 | `generate_comments`              | `black/comments.py:52`                         |
|  1.3% |    1 MiB |       5 | `visit`                          | `black/nodes.py:163`                           |
|  1.3% |    1 MiB |       5 | `__init__`                       | `blib2to3/pytree.py:248`                       |
|  1.3% |    1 MiB |       1 | `__init__`                       | `<string>:2`                                   |
|  1.3% |    1 MiB |       1 | `debug`                          | `/usr/lib/python3.11/logging/__init__.py:1467` |
|  1.3% |    1 MiB |       1 | `generate_tokens`                | `blib2to3/pgen2/tokenize.py:565`               |
|  0.3% |  225 KiB |       5 | `_format_str_once`               | `black/__init__.py:1236`                       |
|  0.3% |  222 KiB |       1 | `decode`                         | `<frozen codecs>:319`                          |
|  0.1% | 75.7 KiB |      79 | `__new__`                        | `<frozen abc>:105`                             |
|  0.1% | 57.2 KiB |      65 | `normalize_string_prefix`        | `black/strings.py:143`                         |

#### Lines

Lines ranked by contribution to each function's self size.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 18.2 MiB |  20,789 | `black/brackets.py:112` |
|  <0.1% | 1.49 KiB |       1 | `black/brackets.py:114` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Samples | Location                        |
| -----: | -------: | ------: | ------------------------------- |
| 100.0% | 9.12 MiB |     142 | `/usr/lib/python3.11/ast.py:50` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|     % |     Size | Samples | Location                 |
| ----: | -------: | ------: | ------------------------ |
| 57.0% | 4.07 MiB |      97 | `blib2to3/pytree.py:377` |
| 29.0% | 2.07 MiB |      95 | `blib2to3/pytree.py:376` |
| 14.0% |    1 MiB |       1 | `blib2to3/pytree.py:370` |
|  0.1% | 4.99 KiB |       9 | `blib2to3/pytree.py:379` |

##### `assert_equivalent` (`black/__init__.py:1524`)

|     % |     Size | Samples | Location                 |
| ----: | -------: | ------: | ------------------------ |
| 55.4% | 3.93 MiB |       2 | `black/__init__.py:1547` |
| 44.6% | 3.17 MiB |       2 | `black/__init__.py:1546` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Samples | Location                 |
| ----: | ----: | ------: | ------------------------ |
| 71.4% | 5 MiB |       5 | `blib2to3/pytree.py:176` |
| 28.6% | 2 MiB |       2 | `blib2to3/pytree.py:175` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Samples | Location                |
| -----: | ----: | ------: | ----------------------- |
| 100.0% | 6 MiB |       6 | `blib2to3/pytree.py:84` |

##### `_stringify_ast` (`black/parsing.py:174`)

|     % |     Size | Samples | Location               |
| ----: | -------: | ------: | ---------------------- |
| 74.2% |    3 MiB |       3 | `black/parsing.py:197` |
| 24.7% |    1 MiB |       1 | `black/parsing.py:185` |
|  1.1% | 46.8 KiB |      56 | `black/parsing.py:240` |

##### `prefix` (`blib2to3/pytree.py:480`)

|      % |  Size | Samples | Location                 |
| -----: | ----: | ------: | ------------------------ |
| 100.0% | 3 MiB |       3 | `blib2to3/pytree.py:482` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Samples | Location                      |
| -----: | ----: | ------: | ----------------------------- |
| 100.0% | 3 MiB |       3 | `blib2to3/pgen2/parse.py:394` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py:166`)

|      % |  Size | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 2 MiB |       2 | `black/parsing.py:170` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 2 MiB |       2 | `black/comments.py:76` |

##### `visit` (`black/nodes.py:163`)

|     % |     Size | Samples | Location             |
| ----: | -------: | ------: | -------------------- |
| 99.7% |    1 MiB |       1 | `black/nodes.py:181` |
|  0.3% | 2.68 KiB |       3 | `black/nodes.py:183` |
|  0.1% |    690 B |       1 | `black/nodes.py:185` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Samples | Location                 |
| -----: | ----: | ------: | ------------------------ |
| 100.0% | 1 MiB |       5 | `blib2to3/pytree.py:266` |

##### `__init__` (`<string>:2`)

|      % |  Size | Samples | Location     |
| -----: | ----: | ------: | ------------ |
| 100.0% | 1 MiB |       1 | `<string>:9` |

##### `debug` (`/usr/lib/python3.11/logging/__init__.py:1467`)

|      % |  Size | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 1 MiB |       1 | `/usr/lib/python3.11/logging/__init__.py:1476` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|      % |  Size | Samples | Location                         |
| -----: | ----: | ------: | -------------------------------- |
| 100.0% | 1 MiB |       1 | `blib2to3/pgen2/tokenize.py:972` |

##### `_format_str_once` (`black/__init__.py:1236`)

|     % |     Size | Samples | Location                 |
| ----: | -------: | ------: | ------------------------ |
| 98.6% |  222 KiB |       1 | `black/__init__.py:1287` |
|  0.5% | 1.07 KiB |       1 | `black/__init__.py:1271` |
|  0.3% |    800 B |       1 | `black/__init__.py:1239` |
|  0.3% |    644 B |       1 | `black/__init__.py:1269` |
|  0.3% |    638 B |       1 | `black/__init__.py:1244` |

##### `decode` (`<frozen codecs>:319`)

|      % |    Size | Samples | Location              |
| -----: | ------: | ------: | --------------------- |
| 100.0% | 222 KiB |       1 | `<frozen codecs>:322` |

##### `__new__` (`<frozen abc>:105`)

|      % |     Size | Samples | Location           |
| -----: | -------: | ------: | ------------------ |
| 100.0% | 75.7 KiB |      79 | `<frozen abc>:106` |

##### `normalize_string_prefix` (`black/strings.py:143`)

|      % |     Size | Samples | Location               |
| -----: | -------: | ------: | ---------------------- |
| 100.0% | 57.2 KiB |      65 | `black/strings.py:158` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Samples | Caller   | Location            |
| -----: | -------: | ------: | -------- | ------------------- |
| 100.0% | 18.2 MiB |  20,790 | `append` | `black/lines.py:63` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Samples | Caller                  | Location               |
| -----: | -------: | ------: | ----------------------- | ---------------------- |
| 100.0% | 9.12 MiB |     142 | `_parse_single_version` | `black/parsing.py:117` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|      % |     Size | Samples | Caller         | Location                 |
| -----: | -------: | ------: | -------------- | ------------------------ |
| 100.0% | 7.14 MiB |     202 | `prev_sibling` | `blib2to3/pytree.py:207` |

##### `assert_equivalent` (`black/__init__.py:1524`)

|      % |    Size | Samples | Caller                            | Location                 |
| -----: | ------: | ------: | --------------------------------- | ------------------------ |
| 100.0% | 7.1 MiB |       4 | `check_stability_and_equivalence` | `black/__init__.py:1037` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Samples | Caller    | Location                 |
| ----: | ----: | ------: | --------- | ------------------------ |
| 85.7% | 6 MiB |       6 | `changed` | `blib2to3/pytree.py:171` |
| 14.3% | 1 MiB |       1 | `prefix`  | `blib2to3/pytree.py:480` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Samples | Caller    | Location                 |
| -----: | ----: | ------: | --------- | ------------------------ |
| 100.0% | 6 MiB |       6 | `convert` | `blib2to3/pytree.py:486` |

##### `_stringify_ast` (`black/parsing.py:174`)

|      % |     Size | Samples | Caller                           | Location               |
| -----: | -------: | ------: | -------------------------------- | ---------------------- |
| 100.0% | 4.05 MiB |      60 | `_stringify_ast_with_new_parent` | `black/parsing.py:166` |

##### `prefix` (`blib2to3/pytree.py:480`)

|      % |  Size | Samples | Caller   | Location            |
| -----: | ----: | ------: | -------- | ------------------- |
| 100.0% | 3 MiB |       3 | `append` | `black/lines.py:63` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Samples | Caller      | Location                      |
| -----: | ----: | ------: | ----------- | ----------------------------- |
| 100.0% | 3 MiB |       3 | `_addtoken` | `blib2to3/pgen2/parse.py:290` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py:166`)

|      % |  Size | Samples | Caller           | Location               |
| -----: | ----: | ------: | ---------------- | ---------------------- |
| 100.0% | 2 MiB |       2 | `_stringify_ast` | `black/parsing.py:174` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Samples | Caller          | Location               |
| -----: | ----: | ------: | --------------- | ---------------------- |
| 100.0% | 2 MiB |       2 | `visit_default` | `black/linegen.py:134` |

##### `visit` (`black/nodes.py:163`)

|     % |     Size | Samples | Caller             | Location                 |
| ----: | -------: | ------: | ------------------ | ------------------------ |
| 99.7% |    1 MiB |       1 | `visit_stmt`       | `black/linegen.py:199`   |
|  0.3% | 2.68 KiB |       3 | `visit_default`    | `black/nodes.py:187`     |
|  0.1% |    690 B |       1 | `_format_str_once` | `black/__init__.py:1236` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Samples | Caller    | Location                 |
| -----: | ----: | ------: | --------- | ------------------------ |
| 100.0% | 1 MiB |       5 | `convert` | `blib2to3/pytree.py:486` |

##### `__init__` (`<string>:2`)

|      % |  Size | Samples | Caller     | Location     |
| -----: | ----: | ------: | ---------- | ------------ |
| 100.0% | 1 MiB |       1 | `__init__` | `<string>:2` |

##### `debug` (`/usr/lib/python3.11/logging/__init__.py:1467`)

|      % |  Size | Samples | Caller         | Location                       |
| -----: | ----: | ------: | -------------- | ------------------------------ |
| 100.0% | 1 MiB |       1 | `parse_tokens` | `blib2to3/pgen2/driver.py:114` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|      % |  Size | Samples | Caller     | Location                      |
| -----: | ----: | ------: | ---------- | ----------------------------- |
| 100.0% | 1 MiB |       1 | `__next__` | `blib2to3/pgen2/driver.py:80` |

##### `_format_str_once` (`black/__init__.py:1236`)

|      % |    Size | Samples | Caller       | Location                 |
| -----: | ------: | ------: | ------------ | ------------------------ |
| 100.0% | 225 KiB |       5 | `format_str` | `black/__init__.py:1189` |

##### `decode` (`<frozen codecs>:319`)

|      % |    Size | Samples | Caller         | Location                 |
| -----: | ------: | ------: | -------------- | ------------------------ |
| 100.0% | 222 KiB |       1 | `decode_bytes` | `black/__init__.py:1290` |

##### `__new__` (`<frozen abc>:105`)

|     % |     Size | Samples | Caller     | Location           |
| ----: | -------: | ------: | ---------- | ------------------ |
| 23.1% | 17.5 KiB |      18 | `<module>` | `black/trans.py:1` |

##### `normalize_string_prefix` (`black/strings.py:143`)

|      % |     Size | Samples | Caller         | Location               |
| -----: | -------: | ------: | -------------- | ---------------------- |
| 100.0% | 57.2 KiB |      65 | `visit_STRING` | `black/linegen.py:413` |

### Total size

Functions ranked by total bytes held at peak memory in the function and all its callees.

|     % |     Size | Samples | Function                          | Location                                                |
| ----: | -------: | ------: | --------------------------------- | ------------------------------------------------------- |
| 94.5% | 74.3 MiB |  21,393 | `__call__`                        | `/venv/lib/python3.11/site-packages/click/core.py:1567` |
| 94.5% | 74.3 MiB |  21,393 | `patched_main`                    | `black/__init__.py:1594`                                |
| 94.5% | 74.3 MiB |  21,393 | `<module>`                        | `black/__main__.py:1`                                   |
| 94.5% | 74.2 MiB |  21,365 | `main`                            | `black/__init__.py:244`                                 |
| 94.5% | 74.2 MiB |  21,361 | `reformat_one`                    | `black/__init__.py:860`                                 |
| 94.5% | 74.2 MiB |  21,358 | `format_file_in_place`            | `black/__init__.py:917`                                 |
| 94.2% |   74 MiB |  21,355 | `format_file_contents`            | `black/__init__.py:1054`                                |
| 65.9% | 51.8 MiB |  21,146 | `format_str`                      | `black/__init__.py:1189`                                |
| 65.9% | 51.8 MiB |  21,145 | `_format_str_once`                | `black/__init__.py:1236`                                |
| 50.2% | 39.4 MiB |  21,090 | `visit`                           | `black/nodes.py:163`                                    |
| 50.2% | 39.4 MiB |  21,088 | `visit_default`                   | `black/linegen.py:134`                                  |
| 50.2% | 39.4 MiB |  21,088 | `visit_default`                   | `black/nodes.py:187`                                    |
| 49.8% | 39.2 MiB |  20,717 | `visit_stmt`                      | `black/linegen.py:199`                                  |
| 46.9% | 36.8 MiB |  20,274 | `visit_funcdef`                   | `black/linegen.py:254`                                  |
| 46.7% | 36.7 MiB |  20,148 | `visit_suite`                     | `black/linegen.py:288`                                  |
| 36.0% | 28.3 MiB |  20,893 | `append`                          | `black/lines.py:63`                                     |
| 31.6% | 24.8 MiB |  13,403 | `visit_simple_stmt`               | `black/linegen.py:295`                                  |
| 28.3% | 22.3 MiB |     209 | `check_stability_and_equivalence` | `black/__init__.py:1037`                                |
| 28.3% | 22.3 MiB |     208 | `assert_equivalent`               | `black/__init__.py:1524`                                |
| 23.2% | 18.2 MiB |  20,790 | `mark`                            | `black/brackets.py:70`                                  |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `patched_main` (`black/__init__.py:1594`)

|      % |     Size | Samples | Callee     | Location                                                |
| -----: | -------: | ------: | ---------- | ------------------------------------------------------- |
| 100.0% | 74.3 MiB |  21,393 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py:1567` |

##### `<module>` (`black/__main__.py:1`)

|      % |     Size | Samples | Callee         | Location                 |
| -----: | -------: | ------: | -------------- | ------------------------ |
| 100.0% | 74.3 MiB |  21,393 | `patched_main` | `black/__init__.py:1594` |

##### `main` (`black/__init__.py:244`)

|      % |     Size | Samples | Callee         | Location                |
| -----: | -------: | ------: | -------------- | ----------------------- |
| 100.0% | 74.2 MiB |  21,361 | `reformat_one` | `black/__init__.py:860` |
|  <0.1% | 2.06 KiB |       2 | `get_sources`  | `black/__init__.py:724` |

##### `reformat_one` (`black/__init__.py:860`)

|      % |     Size | Samples | Callee                 | Location                |
| -----: | -------: | ------: | ---------------------- | ----------------------- |
| 100.0% | 74.2 MiB |  21,358 | `format_file_in_place` | `black/__init__.py:917` |
|  <0.1% | 1.13 KiB |       1 | `read`                 | `black/cache.py:60`     |

##### `format_file_in_place` (`black/__init__.py:917`)

|     % |    Size | Samples | Callee                 | Location                 |
| ----: | ------: | ------: | ---------------------- | ------------------------ |
| 99.7% |  74 MiB |  21,355 | `format_file_contents` | `black/__init__.py:1054` |
|  0.3% | 223 KiB |       2 | `decode_bytes`         | `black/__init__.py:1290` |

##### `format_file_contents` (`black/__init__.py:1054`)

|     % |     Size | Samples | Callee                            | Location                 |
| ----: | -------: | ------: | --------------------------------- | ------------------------ |
| 69.9% | 51.8 MiB |  21,146 | `format_str`                      | `black/__init__.py:1189` |
| 30.1% | 22.3 MiB |     209 | `check_stability_and_equivalence` | `black/__init__.py:1037` |

##### `format_str` (`black/__init__.py:1189`)

|      % |     Size | Samples | Callee             | Location                 |
| -----: | -------: | ------: | ------------------ | ------------------------ |
| 100.0% | 51.8 MiB |  21,145 | `_format_str_once` | `black/__init__.py:1236` |

##### `_format_str_once` (`black/__init__.py:1236`)

|     % |     Size | Samples | Callee                   | Location                 |
| ----: | -------: | ------: | ------------------------ | ------------------------ |
| 76.2% | 39.4 MiB |  21,090 | `visit`                  | `black/nodes.py:163`     |
| 23.3% |   12 MiB |      31 | `lib2to3_parse`          | `black/parsing.py:55`    |
| <0.1% | 19.9 KiB |       3 | `normalize_fmt_off`      | `black/comments.py:168`  |
| <0.1% | 12.2 KiB |      12 | `transform_line`         | `black/linegen.py:601`   |
| <0.1% | 3.49 KiB |       1 | `detect_target_versions` | `black/__init__.py:1464` |

##### `visit` (`black/nodes.py:163`)

|      % |     Size | Samples | Callee              | Location               |
| -----: | -------: | ------: | ------------------- | ---------------------- |
| 100.0% | 39.4 MiB |  21,088 | `visit_default`     | `black/linegen.py:134` |
|  99.3% | 39.2 MiB |  20,717 | `visit_stmt`        | `black/linegen.py:199` |
|  93.3% | 36.8 MiB |  20,274 | `visit_funcdef`     | `black/linegen.py:254` |
|  93.1% | 36.7 MiB |  20,148 | `visit_suite`       | `black/linegen.py:288` |
|  62.9% | 24.8 MiB |  13,403 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Samples | Callee              | Location               |
| -----: | -------: | ------: | ------------------- | ---------------------- |
| 100.0% | 39.4 MiB |  21,088 | `visit_default`     | `black/nodes.py:187`   |
|  71.7% | 28.3 MiB |  20,893 | `append`            | `black/lines.py:63`    |
|  20.3% |    8 MiB |       8 | `generate_comments` | `black/comments.py:52` |
|   2.5% |    1 MiB |       1 | `line`              | `black/linegen.py:109` |

##### `visit_default` (`black/nodes.py:187`)

|      % |     Size | Samples | Callee  | Location             |
| -----: | -------: | ------: | ------- | -------------------- |
| 100.0% | 39.4 MiB |  21,088 | `visit` | `black/nodes.py:163` |

##### `visit_stmt` (`black/linegen.py:199`)

|      % |     Size | Samples | Callee                       | Location                |
| -----: | -------: | ------: | ---------------------------- | ----------------------- |
| 100.0% | 39.2 MiB |  20,715 | `visit`                      | `black/nodes.py:163`    |
|   2.6% |    1 MiB |       2 | `normalize_invisible_parens` | `black/linegen.py:1328` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Samples | Callee  | Location             |
| -----: | -------: | ------: | ------- | -------------------- |
| 100.0% | 36.8 MiB |  20,274 | `visit` | `black/nodes.py:163` |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Samples | Callee          | Location               |
| -----: | -------: | ------: | --------------- | ---------------------- |
| 100.0% | 36.7 MiB |  20,148 | `visit_default` | `black/linegen.py:134` |

##### `append` (`black/lines.py:63`)

|     % |     Size | Samples | Callee       | Location                 |
| ----: | -------: | ------: | ------------ | ------------------------ |
| 64.4% | 18.2 MiB |  20,790 | `mark`       | `black/brackets.py:70`   |
| 24.9% | 7.05 MiB |      96 | `whitespace` | `black/nodes.py:194`     |
| 10.6% |    3 MiB |       3 | `prefix`     | `blib2to3/pytree.py:480` |

##### `visit_simple_stmt` (`black/linegen.py:295`)

|      % |     Size | Samples | Callee          | Location               |
| -----: | -------: | ------: | --------------- | ---------------------- |
| 100.0% | 24.8 MiB |  13,403 | `visit_default` | `black/linegen.py:134` |

##### `check_stability_and_equivalence` (`black/__init__.py:1037`)

|      % |     Size | Samples | Callee              | Location                 |
| -----: | -------: | ------: | ------------------- | ------------------------ |
| 100.0% | 22.3 MiB |     208 | `assert_equivalent` | `black/__init__.py:1524` |

##### `assert_equivalent` (`black/__init__.py:1524`)

|     % |     Size | Samples | Callee           | Location               |
| ----: | -------: | ------: | ---------------- | ---------------------- |
| 41.0% | 9.12 MiB |     142 | `parse_ast`      | `black/parsing.py:129` |
| 27.2% | 6.05 MiB |      62 | `_stringify_ast` | `black/parsing.py:174` |

## Hottest call stacks

Call stacks ranked by bytes held at peak memory in their leaf frame. `…` stands for frames the entry filter hides.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11.6% | 9.12 MiB |     142 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  9.0% |  7.1 MiB |       4 | `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  6.4% |    5 MiB |       5 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `shift` (`blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  3.8% |    3 MiB |       3 | `push` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  2.6% | 2.03 MiB |      38 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  2.5% |    2 MiB |       2 | `_stringify_ast_with_new_parent` (`black/parsing.py:166`) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.5% |    2 MiB |       2 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.5% |    2 MiB |       2 | `_stringify_ast` (`black/parsing.py:174`) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.4% | 1.09 MiB |     125 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                             |
|  1.3% | 1.04 MiB |      51 | `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← … ← `_find_and_load` (1167) ← … ← `_find_and_load` (1167) ← … ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.3% | 1.01 MiB |       6 | `compile` (`/usr/lib/python3.11/re/__init__.py:225`) ← `<module>` (`blib2to3/pgen2/tokenize.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`blib2to3/pgen2/driver.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← … ← `_handle_fromlist` (1209) ← `<module>` (`blib2to3/pygram.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← … ← `_handle_fromlist` (1209) ← `<module>` (`black/nodes.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/comments.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.3% |    1 MiB |       5 | `__init__` (`blib2to3/pytree.py:248`) ← `convert` (486) ← `pop` (`blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.3% |    1 MiB |       1 | `_stringify_ast` (`black/parsing.py:174`) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                       |
|  1.3% |    1 MiB |       1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                        |
|  1.3% |    1 MiB |       1 | `dataclass` (`/usr/lib/python3.11/dataclasses.py:1192`) ← `<module>` (`black/comments.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.3% |    1 MiB |       1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`black/nodes.py:194`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                    |
|  1.3% |    1 MiB |       1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.3% |    1 MiB |       1 | `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.3% |    1 MiB |       1 | `_stringify_ast` (`black/parsing.py:174`) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.3% |    1 MiB |       1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`black/nodes.py:194`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_factor` (379) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) |

# Leaked memory profile

Leaked 55.9 MiB over 22,489 samples (2.55 KiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Ours             | 85.6% | 47.9 MiB |  21,383 |
| Standard library | 12.2% | 6.83 MiB |     876 |
| Third-party      |  2.2% | 1.23 MiB |     230 |

## Hottest functions

### Self size

Functions ranked by bytes never freed directly in the function body, excluding callees.

|     % |     Size | Samples | Function                  | Location                                       |
| ----: | -------: | ------: | ------------------------- | ---------------------------------------------- |
| 30.8% | 17.2 MiB |  20,789 | `mark`                    | `black/brackets.py:70`                         |
| 11.0% | 6.14 MiB |     201 | `update_sibling_maps`     | `blib2to3/pytree.py:369`                       |
| 10.7% |    6 MiB |       6 | `changed`                 | `blib2to3/pytree.py:171`                       |
| 10.7% |    6 MiB |       6 | `__new__`                 | `blib2to3/pytree.py:81`                        |
|  5.4% | 3.01 MiB |       4 | `parse`                   | `/usr/lib/python3.11/ast.py:33`                |
|  5.4% |    3 MiB |       3 | `generate_comments`       | `black/comments.py:52`                         |
|  5.4% |    3 MiB |       3 | `push`                    | `blib2to3/pgen2/parse.py:386`                  |
|  3.6% |    2 MiB |       2 | `prefix`                  | `blib2to3/pytree.py:480`                       |
|  1.8% |    1 MiB |       5 | `visit`                   | `black/nodes.py:163`                           |
|  1.8% |    1 MiB |       5 | `__init__`                | `blib2to3/pytree.py:248`                       |
|  1.8% |    1 MiB |       1 | `_stringify_ast`          | `black/parsing.py:174`                         |
|  1.8% |    1 MiB |       1 | `debug`                   | `/usr/lib/python3.11/logging/__init__.py:1467` |
|  1.8% |    1 MiB |       1 | `generate_tokens`         | `blib2to3/pgen2/tokenize.py:565`               |
|  0.1% | 76.5 KiB |       6 | `transform_line`          | `black/linegen.py:601`                         |
|  0.1% | 75.7 KiB |      79 | `__new__`                 | `<frozen abc>:105`                             |
|  0.1% | 57.2 KiB |      65 | `normalize_string_prefix` | `black/strings.py:143`                         |
|  0.1% | 41.5 KiB |      16 | `copy`                    | `blib2to3/pgen2/grammar.py:131`                |
|  0.1% |   32 KiB |       1 | `classify`                | `blib2to3/pgen2/parse.py:336`                  |
| <0.1% | 25.3 KiB |      40 | `make_first`              | `blib2to3/pgen2/pgen.py:74`                    |
| <0.1% | 24.1 KiB |      27 | `__new__`                 | `/usr/lib/python3.11/enum.py:488`              |

#### Lines

Lines ranked by contribution to each function's self size.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 17.2 MiB |  20,788 | `black/brackets.py:112` |
|  <0.1% | 1.49 KiB |       1 | `black/brackets.py:114` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|     % |     Size | Samples | Location                 |
| ----: | -------: | ------: | ------------------------ |
| 50.0% | 3.07 MiB |      96 | `blib2to3/pytree.py:377` |
| 33.7% | 2.07 MiB |      95 | `blib2to3/pytree.py:376` |
| 16.3% |    1 MiB |       1 | `blib2to3/pytree.py:370` |
|  0.1% | 4.99 KiB |       9 | `blib2to3/pytree.py:379` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Samples | Location                 |
| ----: | ----: | ------: | ------------------------ |
| 83.3% | 5 MiB |       5 | `blib2to3/pytree.py:176` |
| 16.7% | 1 MiB |       1 | `blib2to3/pytree.py:175` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Samples | Location                |
| -----: | ----: | ------: | ----------------------- |
| 100.0% | 6 MiB |       6 | `blib2to3/pytree.py:84` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Samples | Location                        |
| -----: | -------: | ------: | ------------------------------- |
| 100.0% | 3.01 MiB |       4 | `/usr/lib/python3.11/ast.py:50` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 3 MiB |       3 | `black/comments.py:76` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Samples | Location                      |
| -----: | ----: | ------: | ----------------------------- |
| 100.0% | 3 MiB |       3 | `blib2to3/pgen2/parse.py:394` |

##### `prefix` (`blib2to3/pytree.py:480`)

|      % |  Size | Samples | Location                 |
| -----: | ----: | ------: | ------------------------ |
| 100.0% | 2 MiB |       2 | `blib2to3/pytree.py:482` |

##### `visit` (`black/nodes.py:163`)

|     % |     Size | Samples | Location             |
| ----: | -------: | ------: | -------------------- |
| 99.7% |    1 MiB |       1 | `black/nodes.py:181` |
|  0.3% | 2.68 KiB |       3 | `black/nodes.py:183` |
|  0.1% |    690 B |       1 | `black/nodes.py:185` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Samples | Location                 |
| -----: | ----: | ------: | ------------------------ |
| 100.0% | 1 MiB |       5 | `blib2to3/pytree.py:266` |

##### `_stringify_ast` (`black/parsing.py:174`)

|      % |  Size | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 1 MiB |       1 | `black/parsing.py:197` |

##### `debug` (`/usr/lib/python3.11/logging/__init__.py:1467`)

|      % |  Size | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 1 MiB |       1 | `/usr/lib/python3.11/logging/__init__.py:1476` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|      % |  Size | Samples | Location                         |
| -----: | ----: | ------: | -------------------------------- |
| 100.0% | 1 MiB |       1 | `blib2to3/pgen2/tokenize.py:972` |

##### `transform_line` (`black/linegen.py:601`)

|     % |     Size | Samples | Location               |
| ----: | -------: | ------: | ---------------------- |
| 96.4% | 73.7 KiB |       3 | `black/linegen.py:679` |
|  1.8% | 1.39 KiB |       1 | `black/linegen.py:635` |
|  1.2% |    910 B |       1 | `black/linegen.py:714` |
|  0.7% |    518 B |       1 | `black/linegen.py:631` |

##### `__new__` (`<frozen abc>:105`)

|      % |     Size | Samples | Location           |
| -----: | -------: | ------: | ------------------ |
| 100.0% | 75.7 KiB |      79 | `<frozen abc>:106` |

##### `normalize_string_prefix` (`black/strings.py:143`)

|      % |     Size | Samples | Location               |
| -----: | -------: | ------: | ---------------------- |
| 100.0% | 57.2 KiB |      65 | `black/strings.py:158` |

##### `copy` (`blib2to3/pgen2/grammar.py:131`)

|     % |     Size | Samples | Location                        |
| ----: | -------: | ------: | ------------------------------- |
| 88.2% | 36.6 KiB |      12 | `blib2to3/pgen2/grammar.py:145` |
|  7.6% | 3.16 KiB |       2 | `blib2to3/pgen2/grammar.py:146` |
|  4.2% | 1.75 KiB |       2 | `blib2to3/pgen2/grammar.py:147` |

##### `classify` (`blib2to3/pgen2/parse.py:336`)

|      % |   Size | Samples | Location                      |
| -----: | -----: | ------: | ----------------------------- |
| 100.0% | 32 KiB |       1 | `blib2to3/pgen2/parse.py:343` |

##### `make_first` (`blib2to3/pgen2/pgen.py:74`)

|      % |     Size | Samples | Location                    |
| -----: | -------: | ------: | --------------------------- |
| 100.0% | 25.3 KiB |      40 | `blib2to3/pgen2/pgen.py:81` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

|      % |     Size | Samples | Location                          |
| -----: | -------: | ------: | --------------------------------- |
| 100.0% | 24.1 KiB |      27 | `/usr/lib/python3.11/enum.py:554` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Samples | Caller   | Location            |
| -----: | -------: | ------: | -------- | ------------------- |
| 100.0% | 17.2 MiB |  20,789 | `append` | `black/lines.py:63` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|      % |     Size | Samples | Caller         | Location                 |
| -----: | -------: | ------: | -------------- | ------------------------ |
| 100.0% | 6.14 MiB |     201 | `prev_sibling` | `blib2to3/pytree.py:207` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Samples | Caller    | Location                 |
| ----: | ----: | ------: | --------- | ------------------------ |
| 83.3% | 5 MiB |       5 | `changed` | `blib2to3/pytree.py:171` |
| 16.7% | 1 MiB |       1 | `prefix`  | `blib2to3/pytree.py:480` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Samples | Caller    | Location                 |
| -----: | ----: | ------: | --------- | ------------------------ |
| 100.0% | 6 MiB |       6 | `convert` | `blib2to3/pytree.py:486` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Samples | Caller                  | Location               |
| -----: | -------: | ------: | ----------------------- | ---------------------- |
| 100.0% | 3.01 MiB |       4 | `_parse_single_version` | `black/parsing.py:117` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Samples | Caller          | Location               |
| -----: | ----: | ------: | --------------- | ---------------------- |
| 100.0% | 3 MiB |       3 | `visit_default` | `black/linegen.py:134` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Samples | Caller      | Location                      |
| -----: | ----: | ------: | ----------- | ----------------------------- |
| 100.0% | 3 MiB |       3 | `_addtoken` | `blib2to3/pgen2/parse.py:290` |

##### `prefix` (`blib2to3/pytree.py:480`)

|      % |  Size | Samples | Caller   | Location            |
| -----: | ----: | ------: | -------- | ------------------- |
| 100.0% | 2 MiB |       2 | `append` | `black/lines.py:63` |

##### `visit` (`black/nodes.py:163`)

|     % |     Size | Samples | Caller             | Location                 |
| ----: | -------: | ------: | ------------------ | ------------------------ |
| 99.7% |    1 MiB |       1 | `visit_stmt`       | `black/linegen.py:199`   |
|  0.3% | 2.68 KiB |       3 | `visit_default`    | `black/nodes.py:187`     |
|  0.1% |    690 B |       1 | `_format_str_once` | `black/__init__.py:1236` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Samples | Caller    | Location                 |
| -----: | ----: | ------: | --------- | ------------------------ |
| 100.0% | 1 MiB |       5 | `convert` | `blib2to3/pytree.py:486` |

##### `_stringify_ast` (`black/parsing.py:174`)

|      % |  Size | Samples | Caller                           | Location               |
| -----: | ----: | ------: | -------------------------------- | ---------------------- |
| 100.0% | 1 MiB |       1 | `_stringify_ast_with_new_parent` | `black/parsing.py:166` |

##### `debug` (`/usr/lib/python3.11/logging/__init__.py:1467`)

|      % |  Size | Samples | Caller         | Location                       |
| -----: | ----: | ------: | -------------- | ------------------------------ |
| 100.0% | 1 MiB |       1 | `parse_tokens` | `blib2to3/pgen2/driver.py:114` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|      % |  Size | Samples | Caller     | Location                      |
| -----: | ----: | ------: | ---------- | ----------------------------- |
| 100.0% | 1 MiB |       1 | `__next__` | `blib2to3/pgen2/driver.py:80` |

##### `transform_line` (`black/linegen.py:601`)

|      % |     Size | Samples | Caller             | Location                 |
| -----: | -------: | ------: | ------------------ | ------------------------ |
| 100.0% | 76.5 KiB |       6 | `_format_str_once` | `black/__init__.py:1236` |

##### `__new__` (`<frozen abc>:105`)

|     % |     Size | Samples | Caller     | Location           |
| ----: | -------: | ------: | ---------- | ------------------ |
| 23.1% | 17.5 KiB |      18 | `<module>` | `black/trans.py:1` |

##### `normalize_string_prefix` (`black/strings.py:143`)

|      % |     Size | Samples | Caller         | Location               |
| -----: | -------: | ------: | -------------- | ---------------------- |
| 100.0% | 57.2 KiB |      65 | `visit_STRING` | `black/linegen.py:413` |

##### `copy` (`blib2to3/pgen2/grammar.py:131`)

|      % |     Size | Samples | Caller       | Location                 |
| -----: | -------: | ------: | ------------ | ------------------------ |
| 100.0% | 41.5 KiB |      16 | `initialize` | `blib2to3/pygram.py:165` |

##### `classify` (`blib2to3/pgen2/parse.py:336`)

|      % |   Size | Samples | Caller     | Location                      |
| -----: | -----: | ------: | ---------- | ----------------------------- |
| 100.0% | 32 KiB |       1 | `addtoken` | `blib2to3/pgen2/parse.py:242` |

##### `make_first` (`blib2to3/pgen2/pgen.py:74`)

|      % |     Size | Samples | Caller         | Location                    |
| -----: | -------: | ------: | -------------- | --------------------------- |
| 100.0% | 25.3 KiB |      40 | `make_grammar` | `blib2to3/pgen2/pgen.py:49` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

|     % |     Size | Samples | Caller     | Location              |
| ----: | -------: | ------: | ---------- | --------------------- |
| 31.7% | 7.64 KiB |       9 | `<module>` | `black/mode.py:1`     |
| 10.1% | 2.44 KiB |       3 | `<module>` | `black/__init__.py:1` |
|  7.0% | 1.69 KiB |       2 | `<module>` | `black/linegen.py:1`  |
|  7.0% | 1.69 KiB |       2 | `<module>` | `black/report.py:1`   |

### Total size

Functions ranked by total bytes never freed in the function and all its callees.

|     % |     Size | Samples | Function                          | Location                                                |
| ----: | -------: | ------: | --------------------------------- | ------------------------------------------------------- |
| 92.3% | 51.6 MiB |  21,189 | `__call__`                        | `/venv/lib/python3.11/site-packages/click/core.py:1567` |
| 92.3% | 51.6 MiB |  21,189 | `patched_main`                    | `black/__init__.py:1594`                                |
| 92.3% | 51.6 MiB |  21,189 | `<module>`                        | `black/__main__.py:1`                                   |
| 92.3% | 51.6 MiB |  21,164 | `main`                            | `black/__init__.py:244`                                 |
| 92.3% | 51.6 MiB |  21,159 | `reformat_one`                    | `black/__init__.py:860`                                 |
| 92.3% | 51.6 MiB |  21,152 | `format_file_in_place`            | `black/__init__.py:917`                                 |
| 92.3% | 51.6 MiB |  21,151 | `format_file_contents`            | `black/__init__.py:1054`                                |
| 85.1% | 47.6 MiB |  21,143 | `_format_str_once`                | `black/__init__.py:1236`                                |
| 63.4% | 35.4 MiB |  21,086 | `visit`                           | `black/nodes.py:163`                                    |
| 63.4% | 35.4 MiB |  21,084 | `visit_default`                   | `black/linegen.py:134`                                  |
| 63.4% | 35.4 MiB |  21,084 | `visit_default`                   | `black/nodes.py:187`                                    |
| 62.9% | 35.2 MiB |  20,713 | `visit_stmt`                      | `black/linegen.py:199`                                  |
| 58.7% | 32.8 MiB |  20,270 | `visit_funcdef`                   | `black/linegen.py:254`                                  |
| 58.5% | 32.7 MiB |  20,144 | `visit_suite`                     | `black/linegen.py:288`                                  |
| 55.6% | 31.1 MiB |      89 | `format_str`                      | `black/__init__.py:1189`                                |
| 45.2% | 25.3 MiB |  20,890 | `append`                          | `black/lines.py:63`                                     |
| 42.6% | 23.8 MiB |  13,402 | `visit_simple_stmt`               | `black/linegen.py:295`                                  |
| 36.7% | 20.5 MiB |  21,062 | `check_stability_and_equivalence` | `black/__init__.py:1037`                                |
| 30.8% | 17.2 MiB |  20,789 | `mark`                            | `black/brackets.py:70`                                  |
| 30.2% | 16.9 MiB |  10,808 | `visit_power`                     | `black/linegen.py:341`                                  |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `patched_main` (`black/__init__.py:1594`)

|      % |     Size | Samples | Callee     | Location                                                |
| -----: | -------: | ------: | ---------- | ------------------------------------------------------- |
| 100.0% | 51.6 MiB |  21,189 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py:1567` |

##### `<module>` (`black/__main__.py:1`)

|      % |     Size | Samples | Callee         | Location                 |
| -----: | -------: | ------: | -------------- | ------------------------ |
| 100.0% | 51.6 MiB |  21,189 | `patched_main` | `black/__init__.py:1594` |

##### `main` (`black/__init__.py:244`)

|      % |     Size | Samples | Callee         | Location                |
| -----: | -------: | ------: | -------------- | ----------------------- |
| 100.0% | 51.6 MiB |  21,159 | `reformat_one` | `black/__init__.py:860` |
|  <0.1% | 2.06 KiB |       2 | `get_sources`  | `black/__init__.py:724` |

##### `reformat_one` (`black/__init__.py:860`)

|      % |     Size | Samples | Callee                 | Location                |
| -----: | -------: | ------: | ---------------------- | ----------------------- |
| 100.0% | 51.6 MiB |  21,152 | `format_file_in_place` | `black/__init__.py:917` |
|  <0.1% | 1.92 KiB |       2 | `done`                 | `black/report.py:36`    |
|  <0.1% | 1.13 KiB |       1 | `read`                 | `black/cache.py:60`     |
|  <0.1% |     72 B |       2 | `write`                | `black/cache.py:132`    |

##### `format_file_in_place` (`black/__init__.py:917`)

|      % |     Size | Samples | Callee                 | Location                 |
| -----: | -------: | ------: | ---------------------- | ------------------------ |
| 100.0% | 51.6 MiB |  21,151 | `format_file_contents` | `black/__init__.py:1054` |
|  <0.1% |    552 B |       1 | `decode_bytes`         | `black/__init__.py:1290` |

##### `format_file_contents` (`black/__init__.py:1054`)

|     % |     Size | Samples | Callee                            | Location                 |
| ----: | -------: | ------: | --------------------------------- | ------------------------ |
| 60.2% | 31.1 MiB |      89 | `format_str`                      | `black/__init__.py:1189` |
| 39.8% | 20.5 MiB |  21,062 | `check_stability_and_equivalence` | `black/__init__.py:1037` |

##### `_format_str_once` (`black/__init__.py:1236`)

|     % |     Size | Samples | Callee                   | Location                 |
| ----: | -------: | ------: | ------------------------ | ------------------------ |
| 74.5% | 35.4 MiB |  21,086 | `visit`                  | `black/nodes.py:163`     |
| 25.3% |   12 MiB |      31 | `lib2to3_parse`          | `black/parsing.py:55`    |
|  0.2% | 85.9 KiB |      15 | `transform_line`         | `black/linegen.py:601`   |
| <0.1% | 19.9 KiB |       3 | `normalize_fmt_off`      | `black/comments.py:168`  |
| <0.1% | 3.49 KiB |       1 | `detect_target_versions` | `black/__init__.py:1464` |

##### `visit` (`black/nodes.py:163`)

|      % |     Size | Samples | Callee              | Location               |
| -----: | -------: | ------: | ------------------- | ---------------------- |
| 100.0% | 35.4 MiB |  21,084 | `visit_default`     | `black/linegen.py:134` |
|  99.2% | 35.2 MiB |  20,713 | `visit_stmt`        | `black/linegen.py:199` |
|  92.6% | 32.8 MiB |  20,270 | `visit_funcdef`     | `black/linegen.py:254` |
|  92.4% | 32.7 MiB |  20,144 | `visit_suite`       | `black/linegen.py:288` |
|  67.2% | 23.8 MiB |  13,402 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Samples | Callee              | Location               |
| -----: | -------: | ------: | ------------------- | ---------------------- |
| 100.0% | 35.4 MiB |  21,084 | `visit_default`     | `black/nodes.py:187`   |
|  71.3% | 25.3 MiB |  20,890 | `append`            | `black/lines.py:63`    |
|  22.6% |    8 MiB |       8 | `generate_comments` | `black/comments.py:52` |

##### `visit_default` (`black/nodes.py:187`)

|      % |     Size | Samples | Callee  | Location             |
| -----: | -------: | ------: | ------- | -------------------- |
| 100.0% | 35.4 MiB |  21,084 | `visit` | `black/nodes.py:163` |

##### `visit_stmt` (`black/linegen.py:199`)

|      % |     Size | Samples | Callee                       | Location                |
| -----: | -------: | ------: | ---------------------------- | ----------------------- |
| 100.0% | 35.2 MiB |  20,711 | `visit`                      | `black/nodes.py:163`    |
|   2.8% |    1 MiB |       2 | `normalize_invisible_parens` | `black/linegen.py:1328` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Samples | Callee  | Location             |
| -----: | -------: | ------: | ------- | -------------------- |
| 100.0% | 32.8 MiB |  20,270 | `visit` | `black/nodes.py:163` |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Samples | Callee          | Location               |
| -----: | -------: | ------: | --------------- | ---------------------- |
| 100.0% | 32.7 MiB |  20,144 | `visit_default` | `black/linegen.py:134` |

##### `format_str` (`black/__init__.py:1189`)

|      % |     Size | Samples | Callee             | Location                 |
| -----: | -------: | ------: | ------------------ | ------------------------ |
| 100.0% | 31.1 MiB |      88 | `_format_str_once` | `black/__init__.py:1236` |

##### `append` (`black/lines.py:63`)

|     % |     Size | Samples | Callee       | Location                 |
| ----: | -------: | ------: | ------------ | ------------------------ |
| 68.1% | 17.2 MiB |  20,789 | `mark`       | `black/brackets.py:70`   |
| 23.9% | 6.05 MiB |      95 | `whitespace` | `black/nodes.py:194`     |
|  7.9% |    2 MiB |       2 | `prefix`     | `blib2to3/pytree.py:480` |

##### `visit_simple_stmt` (`black/linegen.py:295`)

|      % |     Size | Samples | Callee          | Location               |
| -----: | -------: | ------: | --------------- | ---------------------- |
| 100.0% | 23.8 MiB |  13,402 | `visit_default` | `black/linegen.py:134` |

##### `check_stability_and_equivalence` (`black/__init__.py:1037`)

|     % |     Size | Samples | Callee              | Location                 |
| ----: | -------: | ------: | ------------------- | ------------------------ |
| 80.5% | 16.5 MiB |  21,055 | `assert_stable`     | `black/__init__.py:1557` |
| 19.5% | 4.01 MiB |       6 | `assert_equivalent` | `black/__init__.py:1524` |

##### `visit_power` (`black/linegen.py:341`)

|      % |     Size | Samples | Callee          | Location               |
| -----: | -------: | ------: | --------------- | ---------------------- |
| 100.0% | 16.9 MiB |  10,807 | `visit_default` | `black/linegen.py:134` |

## Hottest call stacks

Call stacks ranked by bytes never freed in their leaf frame. `…` stands for frames the entry filter hides.

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.9% |    5 MiB |       5 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `shift` (`blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 5.4% | 3.01 MiB |       4 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 5.4% |    3 MiB |       3 | `push` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 3.6% |    2 MiB |       2 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.9% | 1.04 MiB |      51 | `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← … ← `_find_and_load` (1167) ← … ← `_find_and_load` (1167) ← … ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.8% | 1.01 MiB |       6 | `compile` (`/usr/lib/python3.11/re/__init__.py:225`) ← `<module>` (`blib2to3/pgen2/tokenize.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`blib2to3/pgen2/driver.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← … ← `_handle_fromlist` (1209) ← `<module>` (`blib2to3/pygram.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← … ← `_handle_fromlist` (1209) ← `<module>` (`black/nodes.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/comments.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.8% |    1 MiB |       1 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `assert_stable` (1557) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.8% |    1 MiB |       1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.8% |    1 MiB |       1 | `dataclass` (`/usr/lib/python3.11/dataclasses.py:1192`) ← `<module>` (`black/comments.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.8% |    1 MiB |       1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`black/nodes.py:194`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.8% |    1 MiB |       1 | `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.8% |    1 MiB |       1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) |
| 1.8% |    1 MiB |       1 | `_stringify_ast` (`black/parsing.py:174`) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.8% |    1 MiB |       1 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.8% |    1 MiB |       1 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `pop` (`blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.8% |    1 MiB |       1 | `prefix` (`blib2to3/pytree.py:480`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.8% |    1 MiB |       1 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.8% |    1 MiB |       1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `preceding_leaf` (`black/nodes.py:441`) ← `whitespace` (194) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.8% |    1 MiB |       1 | `__init__` (`blib2to3/pytree.py:248`) ← `convert` (486) ← `pop` (`blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.8% |    1 MiB |       1 | `prefix` (`blib2to3/pytree.py:480`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

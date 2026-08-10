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
| 21.9% | 17.2 MiB |  20,789 | `mark`                           | `black/brackets.py:70`                         |
| 11.6% | 9.12 MiB |     142 | `parse`                          | `/usr/lib/python3.11/ast.py:33`                |
|  9.0% |  7.1 MiB |       4 | `assert_equivalent`              | `black/__init__.py:1524`                       |
|  8.9% |    7 MiB |       7 | `__new__`                        | `blib2to3/pytree.py:81`                        |
|  7.8% | 6.14 MiB |     201 | `update_sibling_maps`            | `blib2to3/pytree.py:369`                       |
|  7.6% |    6 MiB |       6 | `changed`                        | `blib2to3/pytree.py:171`                       |
|  5.1% |    4 MiB |       4 | `__init__`                       | `<string>:2`                                   |
|  3.9% | 3.05 MiB |      59 | `_stringify_ast`                 | `black/parsing.py:174`                         |
|  3.8% |    3 MiB |       3 | `_stringify_ast_with_new_parent` | `black/parsing.py:166`                         |
|  3.8% |    3 MiB |       3 | `push`                           | `blib2to3/pgen2/parse.py:386`                  |
|  2.5% |    2 MiB |       3 | `visit_default`                  | `black/linegen.py:134`                         |
|  1.3% |    1 MiB |       5 | `__init__`                       | `blib2to3/pytree.py:248`                       |
|  1.3% |    1 MiB |       1 | `prefix`                         | `blib2to3/pytree.py:480`                       |
|  1.3% |    1 MiB |       1 | `generate_comments`              | `black/comments.py:52`                         |
|  1.3% |    1 MiB |       1 | `debug`                          | `/usr/lib/python3.11/logging/__init__.py:1467` |
|  1.3% |    1 MiB |       1 | `__str__`                        | `black/lines.py:490`                           |
|  1.3% |    1 MiB |       1 | `generate_tokens`                | `blib2to3/pgen2/tokenize.py:565`               |
|  0.3% |  225 KiB |       5 | `_format_str_once`               | `black/__init__.py:1236`                       |
|  0.3% |  222 KiB |       1 | `decode`                         | `<frozen codecs>:319`                          |
|  0.1% | 75.7 KiB |      79 | `__new__`                        | `<frozen abc>:105`                             |

#### Categories

##### Ours

|     % |     Size | Samples | Function                         | Location                         |
| ----: | -------: | ------: | -------------------------------- | -------------------------------- |
| 21.9% | 17.2 MiB |  20,789 | `mark`                           | `black/brackets.py:70`           |
|  9.0% |  7.1 MiB |       4 | `assert_equivalent`              | `black/__init__.py:1524`         |
|  8.9% |    7 MiB |       7 | `__new__`                        | `blib2to3/pytree.py:81`          |
|  7.8% | 6.14 MiB |     201 | `update_sibling_maps`            | `blib2to3/pytree.py:369`         |
|  7.6% |    6 MiB |       6 | `changed`                        | `blib2to3/pytree.py:171`         |
|  5.1% |    4 MiB |       4 | `__init__`                       | `<string>:2`                     |
|  3.9% | 3.05 MiB |      59 | `_stringify_ast`                 | `black/parsing.py:174`           |
|  3.8% |    3 MiB |       3 | `_stringify_ast_with_new_parent` | `black/parsing.py:166`           |
|  3.8% |    3 MiB |       3 | `push`                           | `blib2to3/pgen2/parse.py:386`    |
|  2.5% |    2 MiB |       3 | `visit_default`                  | `black/linegen.py:134`           |
|  1.3% |    1 MiB |       5 | `__init__`                       | `blib2to3/pytree.py:248`         |
|  1.3% |    1 MiB |       1 | `prefix`                         | `blib2to3/pytree.py:480`         |
|  1.3% |    1 MiB |       1 | `generate_comments`              | `black/comments.py:52`           |
|  1.3% |    1 MiB |       1 | `__str__`                        | `black/lines.py:490`             |
|  1.3% |    1 MiB |       1 | `generate_tokens`                | `blib2to3/pgen2/tokenize.py:565` |
|  0.3% |  225 KiB |       5 | `_format_str_once`               | `black/__init__.py:1236`         |
|  0.1% | 57.2 KiB |      65 | `normalize_string_prefix`        | `black/strings.py:143`           |
|  0.1% | 41.5 KiB |      16 | `copy`                           | `blib2to3/pgen2/grammar.py:131`  |
| <0.1% |   32 KiB |       1 | `classify`                       | `blib2to3/pgen2/parse.py:336`    |
| <0.1% | 25.3 KiB |      40 | `make_first`                     | `blib2to3/pgen2/pgen.py:74`      |

##### Standard library

|     % |     Size | Samples | Function                | Location                                       |
| ----: | -------: | ------: | ----------------------- | ---------------------------------------------- |
| 11.6% | 9.12 MiB |     142 | `parse`                 | `/usr/lib/python3.11/ast.py:33`                |
|  1.3% |    1 MiB |       1 | `debug`                 | `/usr/lib/python3.11/logging/__init__.py:1467` |
|  0.3% |  222 KiB |       1 | `decode`                | `<frozen codecs>:319`                          |
|  0.1% | 75.7 KiB |      79 | `__new__`               | `<frozen abc>:105`                             |
| <0.1% | 24.1 KiB |      27 | `__new__`               | `/usr/lib/python3.11/enum.py:488`              |
| <0.1% |   12 KiB |       3 | `inner`                 | `/usr/lib/python3.11/typing.py:338`            |
| <0.1% | 1.37 KiB |       1 | `python_implementation` | `/usr/lib/python3.11/platform.py:1106`         |
| <0.1% |    960 B |       1 | `_find_and_load`        | `<frozen importlib._bootstrap>:1167`           |
| <0.1% |    698 B |       1 | `compile`               | `/usr/lib/python3.11/re/__init__.py:225`       |
| <0.1% |    560 B |       1 | `getLogger`             | `/usr/lib/python3.11/logging/__init__.py:2081` |
| <0.1% |    552 B |       1 | `detect_encoding`       | `/usr/lib/python3.11/tokenize.py:299`          |

#### Lines

Lines ranked by contribution to each function's self size.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 17.2 MiB |  20,788 | `black/brackets.py:112` |
|  <0.1% | 1.49 KiB |       1 | `black/brackets.py:114` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Samples | Location                        |
| -----: | -------: | ------: | ------------------------------- |
| 100.0% | 9.12 MiB |     142 | `/usr/lib/python3.11/ast.py:50` |

##### `assert_equivalent` (`black/__init__.py:1524`)

|     % |     Size | Samples | Location                 |
| ----: | -------: | ------: | ------------------------ |
| 55.4% | 3.93 MiB |       2 | `black/__init__.py:1547` |
| 44.6% | 3.17 MiB |       2 | `black/__init__.py:1546` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Samples | Location                |
| -----: | ----: | ------: | ----------------------- |
| 100.0% | 7 MiB |       7 | `blib2to3/pytree.py:84` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|     % |     Size | Samples | Location                 |
| ----: | -------: | ------: | ------------------------ |
| 82.5% | 5.07 MiB |      98 | `blib2to3/pytree.py:377` |
| 17.4% | 1.07 MiB |      94 | `blib2to3/pytree.py:376` |
|  0.1% | 4.99 KiB |       9 | `blib2to3/pytree.py:379` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Samples | Location                 |
| ----: | ----: | ------: | ------------------------ |
| 83.3% | 5 MiB |       5 | `blib2to3/pytree.py:175` |
| 16.7% | 1 MiB |       1 | `blib2to3/pytree.py:176` |

##### `__init__` (`<string>:2`)

|     % |  Size | Samples | Location     |
| ----: | ----: | ------: | ------------ |
| 50.0% | 2 MiB |       2 | `<string>:8` |
| 25.0% | 1 MiB |       1 | `<string>:5` |
| 25.0% | 1 MiB |       1 | `<string>:7` |

##### `_stringify_ast` (`black/parsing.py:174`)

|     % |     Size | Samples | Location               |
| ----: | -------: | ------: | ---------------------- |
| 34.3% | 1.05 MiB |      57 | `black/parsing.py:240` |
| 32.8% |    1 MiB |       1 | `black/parsing.py:244` |
| 32.8% |    1 MiB |       1 | `black/parsing.py:197` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py:166`)

|      % |  Size | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 3 MiB |       3 | `black/parsing.py:170` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Samples | Location                      |
| -----: | ----: | ------: | ----------------------------- |
| 100.0% | 3 MiB |       3 | `blib2to3/pgen2/parse.py:394` |

##### `visit_default` (`black/linegen.py:134`)

|      % |  Size | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 2 MiB |       2 | `black/linegen.py:158` |
|  <0.1% | 702 B |       1 | `black/linegen.py:144` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Samples | Location                 |
| -----: | ----: | ------: | ------------------------ |
| 100.0% | 1 MiB |       5 | `blib2to3/pytree.py:266` |

##### `prefix` (`blib2to3/pytree.py:480`)

|      % |  Size | Samples | Location                 |
| -----: | ----: | ------: | ------------------------ |
| 100.0% | 1 MiB |       1 | `blib2to3/pytree.py:482` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 1 MiB |       1 | `black/comments.py:76` |

##### `debug` (`/usr/lib/python3.11/logging/__init__.py:1467`)

|      % |  Size | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 1 MiB |       1 | `/usr/lib/python3.11/logging/__init__.py:1476` |

##### `__str__` (`black/lines.py:490`)

|      % |  Size | Samples | Location             |
| -----: | ----: | ------: | -------------------- |
| 100.0% | 1 MiB |       1 | `black/lines.py:500` |

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

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|      % |   Size | Samples | Location                            |
| -----: | -----: | ------: | ----------------------------------- |
| 100.0% | 12 KiB |       3 | `/usr/lib/python3.11/typing.py:341` |

##### `python_implementation` (`/usr/lib/python3.11/platform.py:1106`)

|      % |     Size | Samples | Location                               |
| -----: | -------: | ------: | -------------------------------------- |
| 100.0% | 1.37 KiB |       1 | `/usr/lib/python3.11/platform.py:1117` |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

|      % |  Size | Samples | Location                             |
| -----: | ----: | ------: | ------------------------------------ |
| 100.0% | 960 B |       1 | `<frozen importlib._bootstrap>:1178` |

##### `compile` (`/usr/lib/python3.11/re/__init__.py:225`)

|      % |  Size | Samples | Location                                 |
| -----: | ----: | ------: | ---------------------------------------- |
| 100.0% | 698 B |       1 | `/usr/lib/python3.11/re/__init__.py:227` |

##### `getLogger` (`/usr/lib/python3.11/logging/__init__.py:2081`)

|      % |  Size | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 560 B |       1 | `/usr/lib/python3.11/logging/__init__.py:2089` |

##### `detect_encoding` (`/usr/lib/python3.11/tokenize.py:299`)

|      % |  Size | Samples | Location                              |
| -----: | ----: | ------: | ------------------------------------- |
| 100.0% | 552 B |       1 | `/usr/lib/python3.11/tokenize.py:375` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Samples | Caller   | Location            |
| -----: | -------: | ------: | -------- | ------------------- |
| 100.0% | 17.2 MiB |  20,789 | `append` | `black/lines.py:63` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Samples | Caller                  | Location               |
| -----: | -------: | ------: | ----------------------- | ---------------------- |
| 100.0% | 9.12 MiB |     142 | `_parse_single_version` | `black/parsing.py:117` |

##### `assert_equivalent` (`black/__init__.py:1524`)

|      % |    Size | Samples | Caller                            | Location                 |
| -----: | ------: | ------: | --------------------------------- | ------------------------ |
| 100.0% | 7.1 MiB |       4 | `check_stability_and_equivalence` | `black/__init__.py:1037` |

##### `__new__` (`blib2to3/pytree.py:81`)

|     % |  Size | Samples | Caller    | Location                 |
| ----: | ----: | ------: | --------- | ------------------------ |
| 85.7% | 6 MiB |       6 | `convert` | `blib2to3/pytree.py:486` |
| 14.3% | 1 MiB |       1 | `clone`   | `blib2to3/pytree.py:452` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|      % |     Size | Samples | Caller         | Location                 |
| -----: | -------: | ------: | -------------- | ------------------------ |
| 100.0% | 6.14 MiB |     201 | `prev_sibling` | `blib2to3/pytree.py:207` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Samples | Caller    | Location                 |
| ----: | ----: | ------: | --------- | ------------------------ |
| 83.3% | 5 MiB |       5 | `changed` | `blib2to3/pytree.py:171` |
| 16.7% | 1 MiB |       1 | `prefix`  | `blib2to3/pytree.py:480` |

##### `__init__` (`<string>:2`)

|     % |  Size | Samples | Caller            | Location                |
| ----: | ----: | ------: | ----------------- | ----------------------- |
| 75.0% | 3 MiB |       3 | `__init__`        | `<string>:2`            |
| 25.0% | 1 MiB |       1 | `delimiter_split` | `black/linegen.py:1203` |

##### `_stringify_ast` (`black/parsing.py:174`)

|      % |     Size | Samples | Caller                           | Location               |
| -----: | -------: | ------: | -------------------------------- | ---------------------- |
| 100.0% | 3.05 MiB |      59 | `_stringify_ast_with_new_parent` | `black/parsing.py:166` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py:166`)

|      % |  Size | Samples | Caller           | Location               |
| -----: | ----: | ------: | ---------------- | ---------------------- |
| 100.0% | 3 MiB |       3 | `_stringify_ast` | `black/parsing.py:174` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Samples | Caller      | Location                      |
| -----: | ----: | ------: | ----------- | ----------------------------- |
| 100.0% | 3 MiB |       3 | `_addtoken` | `blib2to3/pgen2/parse.py:290` |

##### `visit_default` (`black/linegen.py:134`)

|      % |  Size | Samples | Caller         | Location               |
| -----: | ----: | ------: | -------------- | ---------------------- |
| 100.0% | 2 MiB |       2 | `visit`        | `black/nodes.py:163`   |
|  <0.1% | 702 B |       1 | `visit_STRING` | `black/linegen.py:413` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Samples | Caller    | Location                 |
| -----: | ----: | ------: | --------- | ------------------------ |
| 100.0% | 1 MiB |       5 | `convert` | `blib2to3/pytree.py:486` |

##### `prefix` (`blib2to3/pytree.py:480`)

|      % |  Size | Samples | Caller   | Location            |
| -----: | ----: | ------: | -------- | ------------------- |
| 100.0% | 1 MiB |       1 | `append` | `black/lines.py:63` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Samples | Caller          | Location               |
| -----: | ----: | ------: | --------------- | ---------------------- |
| 100.0% | 1 MiB |       1 | `visit_default` | `black/linegen.py:134` |

##### `debug` (`/usr/lib/python3.11/logging/__init__.py:1467`)

|      % |  Size | Samples | Caller         | Location                       |
| -----: | ----: | ------: | -------------- | ------------------------------ |
| 100.0% | 1 MiB |       1 | `parse_tokens` | `blib2to3/pgen2/driver.py:114` |

##### `__str__` (`black/lines.py:490`)

|      % |  Size | Samples | Caller           | Location              |
| -----: | ----: | ------: | ---------------- | --------------------- |
| 100.0% | 1 MiB |       1 | `line_to_string` | `black/lines.py:1073` |

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

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|     % |     Size | Samples | Caller | Location            |
| ----: | -------: | ------: | ------ | ------------------- |
| 75.3% | 9.02 KiB |       1 | `Line` | `black/lines.py:49` |

##### `python_implementation` (`/usr/lib/python3.11/platform.py:1106`)

|      % |     Size | Samples | Caller     | Location              |
| -----: | -------: | ------: | ---------- | --------------------- |
| 100.0% | 1.37 KiB |       1 | `<module>` | `black/__init__.py:1` |

##### `getLogger` (`/usr/lib/python3.11/logging/__init__.py:2081`)

|      % |  Size | Samples | Caller         | Location                       |
| -----: | ----: | ------: | -------------- | ------------------------------ |
| 100.0% | 560 B |       1 | `load_grammar` | `blib2to3/pgen2/driver.py:246` |

##### `detect_encoding` (`/usr/lib/python3.11/tokenize.py:299`)

|      % |  Size | Samples | Caller         | Location                 |
| -----: | ----: | ------: | -------------- | ------------------------ |
| 100.0% | 552 B |       1 | `decode_bytes` | `black/__init__.py:1290` |

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
| 46.4% | 36.4 MiB |  21,087 | `visit`                           | `black/nodes.py:163`                                    |
| 46.4% | 36.4 MiB |  21,085 | `visit_default`                   | `black/linegen.py:134`                                  |
| 46.4% | 36.4 MiB |  21,085 | `visit_default`                   | `black/nodes.py:187`                                    |
| 46.0% | 36.2 MiB |  20,714 | `visit_stmt`                      | `black/linegen.py:199`                                  |
| 45.6% | 35.8 MiB |  20,273 | `visit_funcdef`                   | `black/linegen.py:254`                                  |
| 45.5% | 35.7 MiB |  20,147 | `visit_suite`                     | `black/linegen.py:288`                                  |
| 31.6% | 24.8 MiB |  13,403 | `visit_simple_stmt`               | `black/linegen.py:295`                                  |
| 30.9% | 24.3 MiB |  20,889 | `append`                          | `black/lines.py:63`                                     |
| 28.3% | 22.3 MiB |     209 | `check_stability_and_equivalence` | `black/__init__.py:1037`                                |
| 28.3% | 22.3 MiB |     208 | `assert_equivalent`               | `black/__init__.py:1524`                                |
| 21.9% | 17.2 MiB |  20,789 | `mark`                            | `black/brackets.py:70`                                  |

#### Categories

##### Ours

|     % |     Size | Samples | Function                          | Location                 |
| ----: | -------: | ------: | --------------------------------- | ------------------------ |
| 94.5% | 74.3 MiB |  21,393 | `patched_main`                    | `black/__init__.py:1594` |
| 94.5% | 74.3 MiB |  21,393 | `<module>`                        | `black/__main__.py:1`    |
| 94.5% | 74.2 MiB |  21,365 | `main`                            | `black/__init__.py:244`  |
| 94.5% | 74.2 MiB |  21,361 | `reformat_one`                    | `black/__init__.py:860`  |
| 94.5% | 74.2 MiB |  21,358 | `format_file_in_place`            | `black/__init__.py:917`  |
| 94.2% |   74 MiB |  21,355 | `format_file_contents`            | `black/__init__.py:1054` |
| 65.9% | 51.8 MiB |  21,146 | `format_str`                      | `black/__init__.py:1189` |
| 65.9% | 51.8 MiB |  21,145 | `_format_str_once`                | `black/__init__.py:1236` |
| 46.4% | 36.4 MiB |  21,087 | `visit`                           | `black/nodes.py:163`     |
| 46.4% | 36.4 MiB |  21,085 | `visit_default`                   | `black/linegen.py:134`   |
| 46.4% | 36.4 MiB |  21,085 | `visit_default`                   | `black/nodes.py:187`     |
| 46.0% | 36.2 MiB |  20,714 | `visit_stmt`                      | `black/linegen.py:199`   |
| 45.6% | 35.8 MiB |  20,273 | `visit_funcdef`                   | `black/linegen.py:254`   |
| 45.5% | 35.7 MiB |  20,147 | `visit_suite`                     | `black/linegen.py:288`   |
| 31.6% | 24.8 MiB |  13,403 | `visit_simple_stmt`               | `black/linegen.py:295`   |
| 30.9% | 24.3 MiB |  20,889 | `append`                          | `black/lines.py:63`      |
| 28.3% | 22.3 MiB |     209 | `check_stability_and_equivalence` | `black/__init__.py:1037` |
| 28.3% | 22.3 MiB |     208 | `assert_equivalent`               | `black/__init__.py:1524` |
| 21.9% | 17.2 MiB |  20,789 | `mark`                            | `black/brackets.py:70`   |
| 21.5% | 16.9 MiB |  10,808 | `visit_power`                     | `black/linegen.py:341`   |

##### Standard library

|     % |     Size | Samples | Function                | Location                                       |
| ----: | -------: | ------: | ----------------------- | ---------------------------------------------- |
| 11.6% | 9.12 MiB |     142 | `parse`                 | `/usr/lib/python3.11/ast.py:33`                |
|  5.5% | 4.31 MiB |   1,292 | `_find_and_load`        | `<frozen importlib._bootstrap>:1167`           |
|  1.7% |  1.3 MiB |     318 | `_handle_fromlist`      | `<frozen importlib._bootstrap>:1209`           |
|  1.3% | 1.05 MiB |      26 | `compile`               | `/usr/lib/python3.11/re/__init__.py:225`       |
|  1.3% | 1.01 MiB |      11 | `dataclass`             | `/usr/lib/python3.11/dataclasses.py:1192`      |
|  1.3% |    1 MiB |       1 | `debug`                 | `/usr/lib/python3.11/logging/__init__.py:1467` |
|  0.3% |  222 KiB |       1 | `decode`                | `<frozen codecs>:319`                          |
|  0.1% | 75.7 KiB |      79 | `__new__`               | `<frozen abc>:105`                             |
| <0.1% | 32.5 KiB |      38 | `__new__`               | `/usr/lib/python3.11/enum.py:488`              |
| <0.1% | 13.6 KiB |       5 | `inner`                 | `/usr/lib/python3.11/typing.py:338`            |
| <0.1% | 6.95 KiB |       6 | `__new__`               | `/usr/lib/python3.11/typing.py:2815`           |
| <0.1% | 4.63 KiB |       4 | `NamedTemporaryFile`    | `/usr/lib/python3.11/tempfile.py:677`          |
| <0.1% | 2.18 KiB |       1 | `_subx`                 | `/usr/lib/python3.11/re/__init__.py:315`       |
| <0.1% | 1.37 KiB |       1 | `python_implementation` | `/usr/lib/python3.11/platform.py:1106`         |
| <0.1% |    710 B |       1 | `__new__`               | `/usr/lib/python3.11/pathlib.py:869`           |
| <0.1% |    560 B |       1 | `getLogger`             | `/usr/lib/python3.11/logging/__init__.py:2081` |
| <0.1% |    552 B |       1 | `detect_encoding`       | `/usr/lib/python3.11/tokenize.py:299`          |

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
| 70.4% | 36.4 MiB |  21,087 | `visit`                  | `black/nodes.py:163`     |
| 23.3% |   12 MiB |      31 | `lib2to3_parse`          | `black/parsing.py:55`    |
|  5.8% | 3.01 MiB |      15 | `transform_line`         | `black/linegen.py:601`   |
| <0.1% | 19.9 KiB |       3 | `normalize_fmt_off`      | `black/comments.py:168`  |
| <0.1% | 3.49 KiB |       1 | `detect_target_versions` | `black/__init__.py:1464` |

##### `visit` (`black/nodes.py:163`)

|      % |     Size | Samples | Callee              | Location               |
| -----: | -------: | ------: | ------------------- | ---------------------- |
| 100.0% | 36.4 MiB |  21,085 | `visit_default`     | `black/linegen.py:134` |
|  99.2% | 36.2 MiB |  20,714 | `visit_stmt`        | `black/linegen.py:199` |
|  98.3% | 35.8 MiB |  20,273 | `visit_funcdef`     | `black/linegen.py:254` |
|  98.1% | 35.7 MiB |  20,147 | `visit_suite`       | `black/linegen.py:288` |
|  68.1% | 24.8 MiB |  13,403 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Samples | Callee              | Location               |
| -----: | -------: | ------: | ------------------- | ---------------------- |
| 100.0% | 36.4 MiB |  21,085 | `visit_default`     | `black/nodes.py:187`   |
|  66.6% | 24.3 MiB |  20,889 | `append`            | `black/lines.py:63`    |
|  16.5% |    6 MiB |       6 | `generate_comments` | `black/comments.py:52` |

##### `visit_default` (`black/nodes.py:187`)

|      % |     Size | Samples | Callee  | Location             |
| -----: | -------: | ------: | ------- | -------------------- |
| 100.0% | 36.4 MiB |  21,085 | `visit` | `black/nodes.py:163` |

##### `visit_stmt` (`black/linegen.py:199`)

|      % |     Size | Samples | Callee                       | Location                |
| -----: | -------: | ------: | ---------------------------- | ----------------------- |
| 100.0% | 36.2 MiB |  20,712 | `visit`                      | `black/nodes.py:163`    |
|   2.8% |    1 MiB |       2 | `normalize_invisible_parens` | `black/linegen.py:1328` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Samples | Callee  | Location             |
| -----: | -------: | ------: | ------- | -------------------- |
| 100.0% | 35.8 MiB |  20,273 | `visit` | `black/nodes.py:163` |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Samples | Callee          | Location               |
| -----: | -------: | ------: | --------------- | ---------------------- |
| 100.0% | 35.7 MiB |  20,147 | `visit_default` | `black/linegen.py:134` |

##### `visit_simple_stmt` (`black/linegen.py:295`)

|     % |     Size | Samples | Callee          | Location               |
| ----: | -------: | ------: | --------------- | ---------------------- |
| 96.0% | 23.8 MiB |  13,402 | `visit_default` | `black/linegen.py:134` |
|  4.0% |    1 MiB |       1 | `line`          | `black/linegen.py:109` |

##### `append` (`black/lines.py:63`)

|     % |     Size | Samples | Callee       | Location                 |
| ----: | -------: | ------: | ------------ | ------------------------ |
| 70.9% | 17.2 MiB |  20,789 | `mark`       | `black/brackets.py:70`   |
| 24.9% | 6.05 MiB |      95 | `whitespace` | `black/nodes.py:194`     |
|  4.1% |    1 MiB |       1 | `prefix`     | `blib2to3/pytree.py:480` |

##### `check_stability_and_equivalence` (`black/__init__.py:1037`)

|      % |     Size | Samples | Callee              | Location                 |
| -----: | -------: | ------: | ------------------- | ------------------------ |
| 100.0% | 22.3 MiB |     208 | `assert_equivalent` | `black/__init__.py:1524` |

##### `assert_equivalent` (`black/__init__.py:1524`)

|     % |     Size | Samples | Callee           | Location               |
| ----: | -------: | ------: | ---------------- | ---------------------- |
| 41.0% | 9.12 MiB |     142 | `parse_ast`      | `black/parsing.py:129` |
| 27.2% | 6.05 MiB |      62 | `_stringify_ast` | `black/parsing.py:174` |

##### `visit_power` (`black/linegen.py:341`)

|      % |     Size | Samples | Callee          | Location               |
| -----: | -------: | ------: | --------------- | ---------------------- |
| 100.0% | 16.9 MiB |  10,807 | `visit_default` | `black/linegen.py:134` |

## Hottest call stacks

Call stacks ranked by bytes held at peak memory in their leaf frame. `…` stands for frames the entry filter hides.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11.6% | 9.12 MiB |     142 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  9.0% |  7.1 MiB |       4 | `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  6.4% |    5 MiB |       5 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `shift` (`blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  3.8% |    3 MiB |       3 | `_stringify_ast_with_new_parent` (`black/parsing.py:166`) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  3.8% |    3 MiB |       3 | `push` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  2.6% | 2.04 MiB |      43 | `_stringify_ast` (`black/parsing.py:174`) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  2.5% |    2 MiB |       2 | `__init__` (`<string>:2`) ← `__init__` (2) ← `line` (`black/linegen.py:109`) ← `visit_INDENT` (179) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.0% | 1.56 MiB |     767 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.4% | 1.09 MiB |     125 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                             |
|  1.3% | 1.04 MiB |      51 | `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← … ← `_find_and_load` (1167) ← … ← `_find_and_load` (1167) ← … ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.3% | 1.01 MiB |       6 | `compile` (`/usr/lib/python3.11/re/__init__.py:225`) ← `<module>` (`blib2to3/pgen2/tokenize.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`blib2to3/pgen2/driver.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← … ← `_handle_fromlist` (1209) ← `<module>` (`blib2to3/pygram.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← … ← `_handle_fromlist` (1209) ← `<module>` (`black/nodes.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/comments.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.3% |    1 MiB |       5 | `__init__` (`blib2to3/pytree.py:248`) ← `convert` (486) ← `pop` (`blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.3% |    1 MiB |       1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `changed` (171) ← `prefix` (480) ← `prefix` (329) ← `wrap_in_parentheses` (`black/nodes.py:935`) ← `normalize_invisible_parens` (`black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.3% |    1 MiB |       1 | `dataclass` (`/usr/lib/python3.11/dataclasses.py:1192`) ← `<module>` (`black/comments.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.3% |    1 MiB |       1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`black/nodes.py:194`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                    |
|  1.3% |    1 MiB |       1 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.3% |    1 MiB |       1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.3% |    1 MiB |       1 | `__init__` (`<string>:2`) ← `__init__` (2) ← `line` (`black/linegen.py:109`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.3% |    1 MiB |       1 | `debug` (`/usr/lib/python3.11/logging/__init__.py:1467`) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.3% |    1 MiB |       1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`black/nodes.py:194`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) |

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

|     % |     Size | Samples | Function                         | Location                                       |
| ----: | -------: | ------: | -------------------------------- | ---------------------------------------------- |
| 29.0% | 16.2 MiB |  20,788 | `mark`                           | `black/brackets.py:70`                         |
| 12.5% |    7 MiB |       7 | `__new__`                        | `blib2to3/pytree.py:81`                        |
|  9.2% | 5.14 MiB |     200 | `update_sibling_maps`            | `blib2to3/pytree.py:369`                       |
|  8.9% |    5 MiB |       5 | `changed`                        | `blib2to3/pytree.py:171`                       |
|  5.4% | 3.01 MiB |       4 | `parse`                          | `/usr/lib/python3.11/ast.py:33`                |
|  5.4% |    3 MiB |       3 | `push`                           | `blib2to3/pgen2/parse.py:386`                  |
|  3.6% |    2 MiB |       6 | `__init__`                       | `blib2to3/pytree.py:248`                       |
|  3.6% |    2 MiB |       3 | `visit_default`                  | `black/linegen.py:134`                         |
|  3.6% |    2 MiB |       2 | `__init__`                       | `<string>:2`                                   |
|  1.9% | 1.07 MiB |       7 | `transform_line`                 | `black/linegen.py:601`                         |
|  1.8% |    1 MiB |       1 | `prefix`                         | `blib2to3/pytree.py:480`                       |
|  1.8% |    1 MiB |       1 | `generate_comments`              | `black/comments.py:52`                         |
|  1.8% |    1 MiB |       1 | `debug`                          | `/usr/lib/python3.11/logging/__init__.py:1467` |
|  1.8% |    1 MiB |       1 | `_stringify_ast_with_new_parent` | `black/parsing.py:166`                         |
|  1.8% |    1 MiB |       1 | `generate_tokens`                | `blib2to3/pgen2/tokenize.py:565`               |
|  0.1% | 75.7 KiB |      79 | `__new__`                        | `<frozen abc>:105`                             |
|  0.1% | 57.2 KiB |      65 | `normalize_string_prefix`        | `black/strings.py:143`                         |
|  0.1% | 41.5 KiB |      16 | `copy`                           | `blib2to3/pgen2/grammar.py:131`                |
|  0.1% |   32 KiB |       1 | `classify`                       | `blib2to3/pgen2/parse.py:336`                  |
| <0.1% | 25.3 KiB |      40 | `make_first`                     | `blib2to3/pgen2/pgen.py:74`                    |

#### Categories

##### Ours

|     % |     Size | Samples | Function                         | Location                         |
| ----: | -------: | ------: | -------------------------------- | -------------------------------- |
| 29.0% | 16.2 MiB |  20,788 | `mark`                           | `black/brackets.py:70`           |
| 12.5% |    7 MiB |       7 | `__new__`                        | `blib2to3/pytree.py:81`          |
|  9.2% | 5.14 MiB |     200 | `update_sibling_maps`            | `blib2to3/pytree.py:369`         |
|  8.9% |    5 MiB |       5 | `changed`                        | `blib2to3/pytree.py:171`         |
|  5.4% |    3 MiB |       3 | `push`                           | `blib2to3/pgen2/parse.py:386`    |
|  3.6% |    2 MiB |       6 | `__init__`                       | `blib2to3/pytree.py:248`         |
|  3.6% |    2 MiB |       3 | `visit_default`                  | `black/linegen.py:134`           |
|  3.6% |    2 MiB |       2 | `__init__`                       | `<string>:2`                     |
|  1.9% | 1.07 MiB |       7 | `transform_line`                 | `black/linegen.py:601`           |
|  1.8% |    1 MiB |       1 | `prefix`                         | `blib2to3/pytree.py:480`         |
|  1.8% |    1 MiB |       1 | `generate_comments`              | `black/comments.py:52`           |
|  1.8% |    1 MiB |       1 | `_stringify_ast_with_new_parent` | `black/parsing.py:166`           |
|  1.8% |    1 MiB |       1 | `generate_tokens`                | `blib2to3/pgen2/tokenize.py:565` |
|  0.1% | 57.2 KiB |      65 | `normalize_string_prefix`        | `black/strings.py:143`           |
|  0.1% | 41.5 KiB |      16 | `copy`                           | `blib2to3/pgen2/grammar.py:131`  |
|  0.1% |   32 KiB |       1 | `classify`                       | `blib2to3/pgen2/parse.py:336`    |
| <0.1% | 25.3 KiB |      40 | `make_first`                     | `blib2to3/pgen2/pgen.py:74`      |
| <0.1% | 20.7 KiB |      14 | `<module>`                       | `blib2to3/pgen2/tokenize.py:1`   |
| <0.1% | 18.6 KiB |       2 | `convert_one_fmt_off_pair`       | `black/comments.py:177`          |
| <0.1% |   15 KiB |      18 | `<module>`                       | `blib2to3/pytree.py:1`           |

##### Standard library

|     % |     Size | Samples | Function                | Location                                       |
| ----: | -------: | ------: | ----------------------- | ---------------------------------------------- |
|  5.4% | 3.01 MiB |       4 | `parse`                 | `/usr/lib/python3.11/ast.py:33`                |
|  1.8% |    1 MiB |       1 | `debug`                 | `/usr/lib/python3.11/logging/__init__.py:1467` |
|  0.1% | 75.7 KiB |      79 | `__new__`               | `<frozen abc>:105`                             |
| <0.1% | 24.1 KiB |      27 | `__new__`               | `/usr/lib/python3.11/enum.py:488`              |
| <0.1% |   12 KiB |       3 | `inner`                 | `/usr/lib/python3.11/typing.py:338`            |
| <0.1% | 1.37 KiB |       1 | `python_implementation` | `/usr/lib/python3.11/platform.py:1106`         |
| <0.1% |    960 B |       1 | `_find_and_load`        | `<frozen importlib._bootstrap>:1167`           |
| <0.1% |    698 B |       1 | `compile`               | `/usr/lib/python3.11/re/__init__.py:225`       |
| <0.1% |    560 B |       1 | `getLogger`             | `/usr/lib/python3.11/logging/__init__.py:2081` |
| <0.1% |    552 B |       1 | `detect_encoding`       | `/usr/lib/python3.11/tokenize.py:299`          |

#### Lines

Lines ranked by contribution to each function's self size.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 16.2 MiB |  20,787 | `black/brackets.py:112` |
|  <0.1% | 1.49 KiB |       1 | `black/brackets.py:114` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Samples | Location                |
| -----: | ----: | ------: | ----------------------- |
| 100.0% | 7 MiB |       7 | `blib2to3/pytree.py:84` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|     % |     Size | Samples | Location                 |
| ----: | -------: | ------: | ------------------------ |
| 98.6% | 5.07 MiB |      98 | `blib2to3/pytree.py:377` |
|  1.3% | 70.3 KiB |      93 | `blib2to3/pytree.py:376` |
|  0.1% | 4.99 KiB |       9 | `blib2to3/pytree.py:379` |

##### `changed` (`blib2to3/pytree.py:171`)

|      % |  Size | Samples | Location                 |
| -----: | ----: | ------: | ------------------------ |
| 100.0% | 5 MiB |       5 | `blib2to3/pytree.py:175` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Samples | Location                        |
| -----: | -------: | ------: | ------------------------------- |
| 100.0% | 3.01 MiB |       4 | `/usr/lib/python3.11/ast.py:50` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Samples | Location                      |
| -----: | ----: | ------: | ----------------------------- |
| 100.0% | 3 MiB |       3 | `blib2to3/pgen2/parse.py:394` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Samples | Location                 |
| -----: | ----: | ------: | ------------------------ |
| 100.0% | 2 MiB |       6 | `blib2to3/pytree.py:266` |

##### `visit_default` (`black/linegen.py:134`)

|      % |  Size | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 2 MiB |       2 | `black/linegen.py:158` |
|  <0.1% | 702 B |       1 | `black/linegen.py:144` |

##### `__init__` (`<string>:2`)

|     % |  Size | Samples | Location     |
| ----: | ----: | ------: | ------------ |
| 50.0% | 1 MiB |       1 | `<string>:5` |
| 50.0% | 1 MiB |       1 | `<string>:7` |

##### `transform_line` (`black/linegen.py:601`)

|     % |     Size | Samples | Location               |
| ----: | -------: | ------: | ---------------------- |
| 93.0% |    1 MiB |       1 | `black/linegen.py:707` |
|  6.7% | 73.7 KiB |       3 | `black/linegen.py:679` |
|  0.1% | 1.39 KiB |       1 | `black/linegen.py:635` |
|  0.1% |    910 B |       1 | `black/linegen.py:714` |
| <0.1% |    518 B |       1 | `black/linegen.py:631` |

##### `prefix` (`blib2to3/pytree.py:480`)

|      % |  Size | Samples | Location                 |
| -----: | ----: | ------: | ------------------------ |
| 100.0% | 1 MiB |       1 | `blib2to3/pytree.py:482` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 1 MiB |       1 | `black/comments.py:76` |

##### `debug` (`/usr/lib/python3.11/logging/__init__.py:1467`)

|      % |  Size | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 1 MiB |       1 | `/usr/lib/python3.11/logging/__init__.py:1476` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py:166`)

|      % |  Size | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 1 MiB |       1 | `black/parsing.py:170` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|      % |  Size | Samples | Location                         |
| -----: | ----: | ------: | -------------------------------- |
| 100.0% | 1 MiB |       1 | `blib2to3/pgen2/tokenize.py:972` |

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

##### `<module>` (`blib2to3/pgen2/tokenize.py:1`)

|     % |     Size | Samples | Location                         |
| ----: | -------: | ------: | -------------------------------- |
| 15.4% | 3.19 KiB |       1 | `blib2to3/pgen2/tokenize.py:170` |
| 15.4% | 3.19 KiB |       1 | `blib2to3/pgen2/tokenize.py:208` |
| 14.7% | 3.04 KiB |       3 | `blib2to3/pgen2/tokenize.py:490` |
|  9.7% |    2 KiB |       1 | `blib2to3/pgen2/tokenize.py:224` |
|  9.7% |    2 KiB |       1 | `blib2to3/pgen2/tokenize.py:229` |

##### `convert_one_fmt_off_pair` (`black/comments.py:177`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 18.6 KiB |       2 | `black/comments.py:186` |

##### `<module>` (`blib2to3/pytree.py:1`)

|     % |     Size | Samples | Location                 |
| ----: | -------: | ------: | ------------------------ |
| 16.3% | 2.44 KiB |       3 | `blib2to3/pytree.py:64`  |
| 11.3% | 1.69 KiB |       2 | `blib2to3/pytree.py:382` |
| 11.3% | 1.69 KiB |       2 | `blib2to3/pytree.py:242` |
| 11.3% | 1.69 KiB |       2 | `blib2to3/pytree.py:509` |
| 11.3% | 1.69 KiB |       2 | `blib2to3/pytree.py:600` |

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|      % |   Size | Samples | Location                            |
| -----: | -----: | ------: | ----------------------------------- |
| 100.0% | 12 KiB |       3 | `/usr/lib/python3.11/typing.py:341` |

##### `python_implementation` (`/usr/lib/python3.11/platform.py:1106`)

|      % |     Size | Samples | Location                               |
| -----: | -------: | ------: | -------------------------------------- |
| 100.0% | 1.37 KiB |       1 | `/usr/lib/python3.11/platform.py:1117` |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

|      % |  Size | Samples | Location                             |
| -----: | ----: | ------: | ------------------------------------ |
| 100.0% | 960 B |       1 | `<frozen importlib._bootstrap>:1178` |

##### `compile` (`/usr/lib/python3.11/re/__init__.py:225`)

|      % |  Size | Samples | Location                                 |
| -----: | ----: | ------: | ---------------------------------------- |
| 100.0% | 698 B |       1 | `/usr/lib/python3.11/re/__init__.py:227` |

##### `getLogger` (`/usr/lib/python3.11/logging/__init__.py:2081`)

|      % |  Size | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 560 B |       1 | `/usr/lib/python3.11/logging/__init__.py:2089` |

##### `detect_encoding` (`/usr/lib/python3.11/tokenize.py:299`)

|      % |  Size | Samples | Location                              |
| -----: | ----: | ------: | ------------------------------------- |
| 100.0% | 552 B |       1 | `/usr/lib/python3.11/tokenize.py:375` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Samples | Caller   | Location            |
| -----: | -------: | ------: | -------- | ------------------- |
| 100.0% | 16.2 MiB |  20,788 | `append` | `black/lines.py:63` |

##### `__new__` (`blib2to3/pytree.py:81`)

|     % |  Size | Samples | Caller    | Location                 |
| ----: | ----: | ------: | --------- | ------------------------ |
| 85.7% | 6 MiB |       6 | `convert` | `blib2to3/pytree.py:486` |
| 14.3% | 1 MiB |       1 | `clone`   | `blib2to3/pytree.py:452` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|     % |     Size | Samples | Caller         | Location                 |
| ----: | -------: | ------: | -------------- | ------------------------ |
| 80.6% | 4.14 MiB |     199 | `prev_sibling` | `blib2to3/pytree.py:207` |
| 19.4% |    1 MiB |       1 | `next_sibling` | `blib2to3/pytree.py:193` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Samples | Caller    | Location                 |
| ----: | ----: | ------: | --------- | ------------------------ |
| 80.0% | 4 MiB |       4 | `changed` | `blib2to3/pytree.py:171` |
| 20.0% | 1 MiB |       1 | `prefix`  | `blib2to3/pytree.py:480` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Samples | Caller                  | Location               |
| -----: | -------: | ------: | ----------------------- | ---------------------- |
| 100.0% | 3.01 MiB |       4 | `_parse_single_version` | `black/parsing.py:117` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Samples | Caller      | Location                      |
| -----: | ----: | ------: | ----------- | ----------------------------- |
| 100.0% | 3 MiB |       3 | `_addtoken` | `blib2to3/pgen2/parse.py:290` |

##### `__init__` (`blib2to3/pytree.py:248`)

|     % |  Size | Samples | Caller                | Location                 |
| ----: | ----: | ------: | --------------------- | ------------------------ |
| 50.1% | 1 MiB |       5 | `convert`             | `blib2to3/pytree.py:486` |
| 49.9% | 1 MiB |       1 | `wrap_in_parentheses` | `black/nodes.py:935`     |

##### `visit_default` (`black/linegen.py:134`)

|      % |  Size | Samples | Caller         | Location               |
| -----: | ----: | ------: | -------------- | ---------------------- |
| 100.0% | 2 MiB |       2 | `visit`        | `black/nodes.py:163`   |
|  <0.1% | 702 B |       1 | `visit_STRING` | `black/linegen.py:413` |

##### `__init__` (`<string>:2`)

|     % |  Size | Samples | Caller            | Location                |
| ----: | ----: | ------: | ----------------- | ----------------------- |
| 50.0% | 1 MiB |       1 | `line`            | `black/linegen.py:109`  |
| 50.0% | 1 MiB |       1 | `delimiter_split` | `black/linegen.py:1203` |

##### `transform_line` (`black/linegen.py:601`)

|      % |     Size | Samples | Caller             | Location                 |
| -----: | -------: | ------: | ------------------ | ------------------------ |
| 100.0% | 1.07 MiB |       7 | `_format_str_once` | `black/__init__.py:1236` |

##### `prefix` (`blib2to3/pytree.py:480`)

|      % |  Size | Samples | Caller   | Location            |
| -----: | ----: | ------: | -------- | ------------------- |
| 100.0% | 1 MiB |       1 | `append` | `black/lines.py:63` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Samples | Caller          | Location               |
| -----: | ----: | ------: | --------------- | ---------------------- |
| 100.0% | 1 MiB |       1 | `visit_default` | `black/linegen.py:134` |

##### `debug` (`/usr/lib/python3.11/logging/__init__.py:1467`)

|      % |  Size | Samples | Caller         | Location                       |
| -----: | ----: | ------: | -------------- | ------------------------------ |
| 100.0% | 1 MiB |       1 | `parse_tokens` | `blib2to3/pgen2/driver.py:114` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py:166`)

|      % |  Size | Samples | Caller           | Location               |
| -----: | ----: | ------: | ---------------- | ---------------------- |
| 100.0% | 1 MiB |       1 | `_stringify_ast` | `black/parsing.py:174` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|      % |  Size | Samples | Caller     | Location                      |
| -----: | ----: | ------: | ---------- | ----------------------------- |
| 100.0% | 1 MiB |       1 | `__next__` | `blib2to3/pgen2/driver.py:80` |

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

##### `convert_one_fmt_off_pair` (`black/comments.py:177`)

|      % |     Size | Samples | Caller              | Location                |
| -----: | -------: | ------: | ------------------- | ----------------------- |
| 100.0% | 18.6 KiB |       2 | `normalize_fmt_off` | `black/comments.py:168` |

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|     % |     Size | Samples | Caller | Location            |
| ----: | -------: | ------: | ------ | ------------------- |
| 75.3% | 9.02 KiB |       1 | `Line` | `black/lines.py:49` |

##### `python_implementation` (`/usr/lib/python3.11/platform.py:1106`)

|      % |     Size | Samples | Caller     | Location              |
| -----: | -------: | ------: | ---------- | --------------------- |
| 100.0% | 1.37 KiB |       1 | `<module>` | `black/__init__.py:1` |

##### `getLogger` (`/usr/lib/python3.11/logging/__init__.py:2081`)

|      % |  Size | Samples | Caller         | Location                       |
| -----: | ----: | ------: | -------------- | ------------------------------ |
| 100.0% | 560 B |       1 | `load_grammar` | `blib2to3/pgen2/driver.py:246` |

##### `detect_encoding` (`/usr/lib/python3.11/tokenize.py:299`)

|      % |  Size | Samples | Caller         | Location                 |
| -----: | ----: | ------: | -------------- | ------------------------ |
| 100.0% | 552 B |       1 | `decode_bytes` | `black/__init__.py:1290` |

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
| 58.0% | 32.4 MiB |  21,083 | `visit`                           | `black/nodes.py:163`                                    |
| 58.0% | 32.4 MiB |  21,081 | `visit_default`                   | `black/linegen.py:134`                                  |
| 58.0% | 32.4 MiB |  21,081 | `visit_default`                   | `black/nodes.py:187`                                    |
| 57.5% | 32.2 MiB |  20,710 | `visit_stmt`                      | `black/linegen.py:199`                                  |
| 56.9% | 31.8 MiB |  20,269 | `visit_funcdef`                   | `black/linegen.py:254`                                  |
| 56.7% | 31.7 MiB |  20,143 | `visit_suite`                     | `black/linegen.py:288`                                  |
| 48.4% | 27.1 MiB |      85 | `format_str`                      | `black/__init__.py:1189`                                |
| 43.9% | 24.5 MiB |  21,066 | `check_stability_and_equivalence` | `black/__init__.py:1037`                                |
| 38.1% | 21.3 MiB |  20,886 | `append`                          | `black/lines.py:63`                                     |
| 37.2% | 20.8 MiB |  13,399 | `visit_simple_stmt`               | `black/linegen.py:295`                                  |
| 36.7% | 20.5 MiB |  21,059 | `assert_stable`                   | `black/__init__.py:1557`                                |
| 29.0% | 16.2 MiB |  20,788 | `mark`                            | `black/brackets.py:70`                                  |

#### Categories

##### Ours

|     % |     Size | Samples | Function                          | Location                 |
| ----: | -------: | ------: | --------------------------------- | ------------------------ |
| 92.3% | 51.6 MiB |  21,189 | `patched_main`                    | `black/__init__.py:1594` |
| 92.3% | 51.6 MiB |  21,189 | `<module>`                        | `black/__main__.py:1`    |
| 92.3% | 51.6 MiB |  21,164 | `main`                            | `black/__init__.py:244`  |
| 92.3% | 51.6 MiB |  21,159 | `reformat_one`                    | `black/__init__.py:860`  |
| 92.3% | 51.6 MiB |  21,152 | `format_file_in_place`            | `black/__init__.py:917`  |
| 92.3% | 51.6 MiB |  21,151 | `format_file_contents`            | `black/__init__.py:1054` |
| 85.1% | 47.6 MiB |  21,143 | `_format_str_once`                | `black/__init__.py:1236` |
| 58.0% | 32.4 MiB |  21,083 | `visit`                           | `black/nodes.py:163`     |
| 58.0% | 32.4 MiB |  21,081 | `visit_default`                   | `black/linegen.py:134`   |
| 58.0% | 32.4 MiB |  21,081 | `visit_default`                   | `black/nodes.py:187`     |
| 57.5% | 32.2 MiB |  20,710 | `visit_stmt`                      | `black/linegen.py:199`   |
| 56.9% | 31.8 MiB |  20,269 | `visit_funcdef`                   | `black/linegen.py:254`   |
| 56.7% | 31.7 MiB |  20,143 | `visit_suite`                     | `black/linegen.py:288`   |
| 48.4% | 27.1 MiB |      85 | `format_str`                      | `black/__init__.py:1189` |
| 43.9% | 24.5 MiB |  21,066 | `check_stability_and_equivalence` | `black/__init__.py:1037` |
| 38.1% | 21.3 MiB |  20,886 | `append`                          | `black/lines.py:63`      |
| 37.2% | 20.8 MiB |  13,399 | `visit_simple_stmt`               | `black/linegen.py:295`   |
| 36.7% | 20.5 MiB |  21,059 | `assert_stable`                   | `black/__init__.py:1557` |
| 29.0% | 16.2 MiB |  20,788 | `mark`                            | `black/brackets.py:70`   |
| 24.9% | 13.9 MiB |  10,805 | `visit_power`                     | `black/linegen.py:341`   |

##### Standard library

|     % |     Size | Samples | Function                | Location                                       |
| ----: | -------: | ------: | ----------------------- | ---------------------------------------------- |
|  7.6% | 4.28 MiB |   1,291 | `_find_and_load`        | `<frozen importlib._bootstrap>:1167`           |
|  5.4% | 3.01 MiB |       4 | `parse`                 | `/usr/lib/python3.11/ast.py:33`                |
|  2.3% |  1.3 MiB |     318 | `_handle_fromlist`      | `<frozen importlib._bootstrap>:1209`           |
|  1.9% | 1.05 MiB |      26 | `compile`               | `/usr/lib/python3.11/re/__init__.py:225`       |
|  1.8% | 1.01 MiB |      11 | `dataclass`             | `/usr/lib/python3.11/dataclasses.py:1192`      |
|  1.8% |    1 MiB |       1 | `debug`                 | `/usr/lib/python3.11/logging/__init__.py:1467` |
|  0.1% | 75.7 KiB |      79 | `__new__`               | `<frozen abc>:105`                             |
|  0.1% | 32.5 KiB |      38 | `__new__`               | `/usr/lib/python3.11/enum.py:488`              |
| <0.1% | 13.6 KiB |       5 | `inner`                 | `/usr/lib/python3.11/typing.py:338`            |
| <0.1% | 6.95 KiB |       6 | `__new__`               | `/usr/lib/python3.11/typing.py:2815`           |
| <0.1% | 4.63 KiB |       4 | `NamedTemporaryFile`    | `/usr/lib/python3.11/tempfile.py:677`          |
| <0.1% | 2.18 KiB |       1 | `_subx`                 | `/usr/lib/python3.11/re/__init__.py:315`       |
| <0.1% | 1.37 KiB |       1 | `python_implementation` | `/usr/lib/python3.11/platform.py:1106`         |
| <0.1% |    710 B |       1 | `__new__`               | `/usr/lib/python3.11/pathlib.py:869`           |
| <0.1% |    560 B |       1 | `getLogger`             | `/usr/lib/python3.11/logging/__init__.py:2081` |
| <0.1% |    552 B |       1 | `detect_encoding`       | `/usr/lib/python3.11/tokenize.py:299`          |

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
| 52.5% | 27.1 MiB |      85 | `format_str`                      | `black/__init__.py:1189` |
| 47.5% | 24.5 MiB |  21,066 | `check_stability_and_equivalence` | `black/__init__.py:1037` |

##### `_format_str_once` (`black/__init__.py:1236`)

|     % |     Size | Samples | Callee                   | Location                 |
| ----: | -------: | ------: | ------------------------ | ------------------------ |
| 68.2% | 32.4 MiB |  21,083 | `visit`                  | `black/nodes.py:163`     |
| 25.3% |   12 MiB |      31 | `lib2to3_parse`          | `black/parsing.py:55`    |
|  6.5% | 3.08 MiB |      18 | `transform_line`         | `black/linegen.py:601`   |
| <0.1% | 19.9 KiB |       3 | `normalize_fmt_off`      | `black/comments.py:168`  |
| <0.1% | 3.49 KiB |       1 | `detect_target_versions` | `black/__init__.py:1464` |

##### `visit` (`black/nodes.py:163`)

|      % |     Size | Samples | Callee              | Location               |
| -----: | -------: | ------: | ------------------- | ---------------------- |
| 100.0% | 32.4 MiB |  21,081 | `visit_default`     | `black/linegen.py:134` |
|  99.1% | 32.2 MiB |  20,710 | `visit_stmt`        | `black/linegen.py:199` |
|  98.1% | 31.8 MiB |  20,269 | `visit_funcdef`     | `black/linegen.py:254` |
|  97.8% | 31.7 MiB |  20,143 | `visit_suite`       | `black/linegen.py:288` |
|  64.2% | 20.8 MiB |  13,399 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Samples | Callee              | Location               |
| -----: | -------: | ------: | ------------------- | ---------------------- |
| 100.0% | 32.4 MiB |  21,081 | `visit_default`     | `black/nodes.py:187`   |
|  65.6% | 21.3 MiB |  20,886 | `append`            | `black/lines.py:63`    |
|  15.4% |    5 MiB |       5 | `generate_comments` | `black/comments.py:52` |
|   3.1% |    1 MiB |       1 | `line`              | `black/linegen.py:109` |

##### `visit_default` (`black/nodes.py:187`)

|      % |     Size | Samples | Callee  | Location             |
| -----: | -------: | ------: | ------- | -------------------- |
| 100.0% | 32.4 MiB |  21,081 | `visit` | `black/nodes.py:163` |

##### `visit_stmt` (`black/linegen.py:199`)

|     % |     Size | Samples | Callee                       | Location                |
| ----: | -------: | ------: | ---------------------------- | ----------------------- |
| 96.9% | 31.2 MiB |  20,707 | `visit`                      | `black/nodes.py:163`    |
|  9.3% |    3 MiB |       4 | `normalize_invisible_parens` | `black/linegen.py:1328` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Samples | Callee  | Location             |
| -----: | -------: | ------: | ------- | -------------------- |
| 100.0% | 31.8 MiB |  20,269 | `visit` | `black/nodes.py:163` |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Samples | Callee          | Location               |
| -----: | -------: | ------: | --------------- | ---------------------- |
| 100.0% | 31.7 MiB |  20,143 | `visit_default` | `black/linegen.py:134` |

##### `format_str` (`black/__init__.py:1189`)

|      % |     Size | Samples | Callee             | Location                 |
| -----: | -------: | ------: | ------------------ | ------------------------ |
| 100.0% | 27.1 MiB |      84 | `_format_str_once` | `black/__init__.py:1236` |

##### `check_stability_and_equivalence` (`black/__init__.py:1037`)

|     % |     Size | Samples | Callee              | Location                 |
| ----: | -------: | ------: | ------------------- | ------------------------ |
| 83.7% | 20.5 MiB |  21,059 | `assert_stable`     | `black/__init__.py:1557` |
| 16.3% | 4.01 MiB |       6 | `assert_equivalent` | `black/__init__.py:1524` |

##### `append` (`black/lines.py:63`)

|     % |     Size | Samples | Callee       | Location                 |
| ----: | -------: | ------: | ------------ | ------------------------ |
| 76.2% | 16.2 MiB |  20,788 | `mark`       | `black/brackets.py:70`   |
| 19.0% | 4.05 MiB |      93 | `whitespace` | `black/nodes.py:194`     |
|  4.7% |    1 MiB |       1 | `prefix`     | `blib2to3/pytree.py:480` |

##### `visit_simple_stmt` (`black/linegen.py:295`)

|      % |     Size | Samples | Callee          | Location               |
| -----: | -------: | ------: | --------------- | ---------------------- |
| 100.0% | 20.8 MiB |  13,399 | `visit_default` | `black/linegen.py:134` |

##### `assert_stable` (`black/__init__.py:1557`)

|      % |     Size | Samples | Callee             | Location                 |
| -----: | -------: | ------: | ------------------ | ------------------------ |
| 100.0% | 20.5 MiB |  21,059 | `_format_str_once` | `black/__init__.py:1236` |

##### `visit_power` (`black/linegen.py:341`)

|      % |     Size | Samples | Callee          | Location               |
| -----: | -------: | ------: | --------------- | ---------------------- |
| 100.0% | 13.9 MiB |  10,804 | `visit_default` | `black/linegen.py:134` |

## Hottest call stacks

Call stacks ranked by bytes never freed in their leaf frame. `…` stands for frames the entry filter hides.

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.9% |    5 MiB |       5 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `shift` (`blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 5.4% | 3.01 MiB |       4 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 5.4% |    3 MiB |       3 | `push` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.9% | 1.07 MiB |       4 | `transform_line` (`black/linegen.py:601`) ← `_format_str_once` (`black/__init__.py:1236`) ← `assert_stable` (1557) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.9% | 1.04 MiB |      51 | `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← … ← `_find_and_load` (1167) ← … ← `_find_and_load` (1167) ← … ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.8% | 1.01 MiB |       6 | `compile` (`/usr/lib/python3.11/re/__init__.py:225`) ← `<module>` (`blib2to3/pgen2/tokenize.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`blib2to3/pgen2/driver.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← … ← `_handle_fromlist` (1209) ← `<module>` (`blib2to3/pygram.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← … ← `_handle_fromlist` (1209) ← `<module>` (`black/nodes.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/comments.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.8% |    1 MiB |       1 | `__init__` (`blib2to3/pytree.py:248`) ← `wrap_in_parentheses` (`black/nodes.py:935`) ← `normalize_invisible_parens` (`black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `assert_stable` (1557) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.8% |    1 MiB |       1 | `__init__` (`<string>:2`) ← `line` (`black/linegen.py:109`) ← `visit_default` (134) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `assert_stable` (1557) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.8% |    1 MiB |       1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `changed` (171) ← `prefix` (480) ← `prefix` (329) ← `wrap_in_parentheses` (`black/nodes.py:935`) ← `normalize_invisible_parens` (`black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.8% |    1 MiB |       1 | `dataclass` (`/usr/lib/python3.11/dataclasses.py:1192`) ← `<module>` (`black/comments.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.8% |    1 MiB |       1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`black/nodes.py:194`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                    |
| 1.8% |    1 MiB |       1 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.8% |    1 MiB |       1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.8% |    1 MiB |       1 | `debug` (`/usr/lib/python3.11/logging/__init__.py:1467`) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.8% |    1 MiB |       1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`black/nodes.py:194`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) |
| 1.8% |    1 MiB |       1 | `_stringify_ast_with_new_parent` (`black/parsing.py:166`) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.8% |    1 MiB |       1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `assert_stable` (1557) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                          |
| 1.8% |    1 MiB |       1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.8% |    1 MiB |       1 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `pop` (`blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.8% |    1 MiB |       1 | `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`) ← `__next__` (`blib2to3/pgen2/driver.py:80`) ← `parse_tokens` (114) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

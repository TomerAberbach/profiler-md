# Peak memory profile

Held 72.4 MiB over 23,696 samples (3.13 KiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Ours             | 71.8% |   52 MiB |  21,382 |
| Standard library | 26.4% | 19.1 MiB |   2,080 |
| Third-party      |  1.8% | 1.27 MiB |     234 |

## Hottest functions

### Self size

Functions ranked by bytes held at peak memory directly in the function body, excluding callees.

|     % |     Size | Samples | Function                           | Location                        |
| ----: | -------: | ------: | ---------------------------------- | ------------------------------- |
| 26.5% | 19.2 MiB |  20,791 | `mark`                             | `black/brackets.py:70`          |
| 22.0% |   16 MiB |   1,014 | `parse`                            | `/usr/lib/python3.11/ast.py:33` |
|  9.7% |    7 MiB |       7 | `changed`                          | `blib2to3/pytree.py:171`        |
|  6.9% |    5 MiB |       5 | `__new__`                          | `blib2to3/pytree.py:81`         |
|  4.3% | 3.14 MiB |     198 | `update_sibling_maps`              | `blib2to3/pytree.py:369`        |
|  4.1% |    3 MiB |       8 | `transform_line`                   | `black/linegen.py:601`          |
|  2.8% |    2 MiB |       2 | `convert`                          | `blib2to3/pytree.py:486`        |
|  2.8% |    2 MiB |       2 | `_addtoken`                        | `blib2to3/pgen2/parse.py:290`   |
|  2.8% |    2 MiB |       2 | `generate_comments`                | `black/comments.py:52`          |
|  1.4% | 1.01 MiB |       6 | `make_grammar`                     | `blib2to3/pgen2/pgen.py:49`     |
|  1.4% |    1 MiB |       5 | `visit`                            | `black/nodes.py:163`            |
|  1.4% |    1 MiB |       3 | `addtoken`                         | `blib2to3/pgen2/parse.py:242`   |
|  1.4% |    1 MiB |       2 | `visit_default`                    | `black/linegen.py:134`          |
|  1.4% |    1 MiB |       1 | `pop`                              | `blib2to3/pgen2/parse.py:398`   |
|  1.4% |    1 MiB |       1 | `lines_with_leading_tabs_expanded` | `black/strings.py:46`           |
|  1.4% |    1 MiB |       1 | `is_import`                        | `black/lines.py:134`            |
|  1.4% |    1 MiB |       1 | `__init__`                         | `<string>:2`                    |
|  0.3% |  225 KiB |       5 | `_format_str_once`                 | `black/__init__.py:1236`        |
|  0.3% |  222 KiB |       1 | `decode`                           | `<frozen codecs>:319`           |
|  0.1% | 75.7 KiB |      79 | `__new__`                          | `<frozen abc>:105`              |

#### Categories

##### Ours

|     % |     Size | Samples | Function                           | Location                        |
| ----: | -------: | ------: | ---------------------------------- | ------------------------------- |
| 26.5% | 19.2 MiB |  20,791 | `mark`                             | `black/brackets.py:70`          |
|  9.7% |    7 MiB |       7 | `changed`                          | `blib2to3/pytree.py:171`        |
|  6.9% |    5 MiB |       5 | `__new__`                          | `blib2to3/pytree.py:81`         |
|  4.3% | 3.14 MiB |     198 | `update_sibling_maps`              | `blib2to3/pytree.py:369`        |
|  4.1% |    3 MiB |       8 | `transform_line`                   | `black/linegen.py:601`          |
|  2.8% |    2 MiB |       2 | `convert`                          | `blib2to3/pytree.py:486`        |
|  2.8% |    2 MiB |       2 | `_addtoken`                        | `blib2to3/pgen2/parse.py:290`   |
|  2.8% |    2 MiB |       2 | `generate_comments`                | `black/comments.py:52`          |
|  1.4% | 1.01 MiB |       6 | `make_grammar`                     | `blib2to3/pgen2/pgen.py:49`     |
|  1.4% |    1 MiB |       5 | `visit`                            | `black/nodes.py:163`            |
|  1.4% |    1 MiB |       3 | `addtoken`                         | `blib2to3/pgen2/parse.py:242`   |
|  1.4% |    1 MiB |       2 | `visit_default`                    | `black/linegen.py:134`          |
|  1.4% |    1 MiB |       1 | `pop`                              | `blib2to3/pgen2/parse.py:398`   |
|  1.4% |    1 MiB |       1 | `lines_with_leading_tabs_expanded` | `black/strings.py:46`           |
|  1.4% |    1 MiB |       1 | `is_import`                        | `black/lines.py:134`            |
|  1.4% |    1 MiB |       1 | `__init__`                         | `<string>:2`                    |
|  0.3% |  225 KiB |       5 | `_format_str_once`                 | `black/__init__.py:1236`        |
|  0.1% | 57.2 KiB |      65 | `normalize_string_prefix`          | `black/strings.py:143`          |
|  0.1% | 41.5 KiB |      16 | `copy`                             | `blib2to3/pgen2/grammar.py:131` |
| <0.1% |   32 KiB |       1 | `classify`                         | `blib2to3/pgen2/parse.py:336`   |

##### Standard library

|     % |     Size | Samples | Function                | Location                                       |
| ----: | -------: | ------: | ----------------------- | ---------------------------------------------- |
| 22.0% |   16 MiB |   1,014 | `parse`                 | `/usr/lib/python3.11/ast.py:33`                |
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

|     % |     Size | Samples | Location                |
| ----: | -------: | ------: | ----------------------- |
| 94.8% | 18.2 MiB |  20,789 | `black/brackets.py:112` |
|  5.2% |    1 MiB |       1 | `black/brackets.py:118` |
| <0.1% | 1.49 KiB |       1 | `black/brackets.py:114` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |   Size | Samples | Location                        |
| -----: | -----: | ------: | ------------------------------- |
| 100.0% | 16 MiB |   1,014 | `/usr/lib/python3.11/ast.py:50` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Samples | Location                 |
| ----: | ----: | ------: | ------------------------ |
| 57.1% | 4 MiB |       4 | `blib2to3/pytree.py:175` |
| 42.9% | 3 MiB |       3 | `blib2to3/pytree.py:176` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Samples | Location                |
| -----: | ----: | ------: | ----------------------- |
| 100.0% | 5 MiB |       5 | `blib2to3/pytree.py:84` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|     % |     Size | Samples | Location                 |
| ----: | -------: | ------: | ------------------------ |
| 34.0% | 1.07 MiB |      94 | `blib2to3/pytree.py:377` |
| 34.0% | 1.07 MiB |      94 | `blib2to3/pytree.py:376` |
| 32.0% |    1 MiB |      10 | `blib2to3/pytree.py:379` |

##### `transform_line` (`black/linegen.py:601`)

|     % |     Size | Samples | Location               |
| ----: | -------: | ------: | ---------------------- |
| 33.3% |    1 MiB |       2 | `black/linegen.py:714` |
| 33.3% |    1 MiB |       1 | `black/linegen.py:627` |
| 33.3% |    1 MiB |       1 | `black/linegen.py:626` |
|  0.1% | 1.69 KiB |       2 | `black/linegen.py:679` |
| <0.1% | 1.39 KiB |       1 | `black/linegen.py:635` |

##### `convert` (`blib2to3/pytree.py:486`)

|      % |  Size | Samples | Location                 |
| -----: | ----: | ------: | ------------------------ |
| 100.0% | 2 MiB |       2 | `blib2to3/pytree.py:501` |

##### `_addtoken` (`blib2to3/pgen2/parse.py:290`)

|     % |  Size | Samples | Location                      |
| ----: | ----: | ------: | ----------------------------- |
| 50.0% | 1 MiB |       1 | `blib2to3/pgen2/parse.py:315` |
| 50.0% | 1 MiB |       1 | `blib2to3/pgen2/parse.py:314` |

##### `generate_comments` (`black/comments.py:52`)

|     % |  Size | Samples | Location               |
| ----: | ----: | ------: | ---------------------- |
| 50.0% | 1 MiB |       1 | `black/comments.py:76` |
| 50.0% | 1 MiB |       1 | `black/comments.py:72` |

##### `make_grammar` (`blib2to3/pgen2/pgen.py:49`)

|     % |     Size | Samples | Location                    |
| ----: | -------: | ------: | --------------------------- |
| 98.6% |    1 MiB |       1 | `blib2to3/pgen2/pgen.py:56` |
|  0.4% | 4.52 KiB |       1 | `blib2to3/pgen2/pgen.py:70` |
|  0.4% | 4.52 KiB |       1 | `blib2to3/pgen2/pgen.py:58` |
|  0.3% | 3.19 KiB |       1 | `blib2to3/pgen2/pgen.py:57` |
|  0.1% |    1 KiB |       1 | `blib2to3/pgen2/pgen.py:69` |

##### `visit` (`black/nodes.py:163`)

|     % |     Size | Samples | Location             |
| ----: | -------: | ------: | -------------------- |
| 99.7% |    1 MiB |       2 | `black/nodes.py:185` |
|  0.3% | 2.68 KiB |       3 | `black/nodes.py:183` |

##### `addtoken` (`blib2to3/pgen2/parse.py:242`)

|     % |  Size | Samples | Location                      |
| ----: | ----: | ------: | ----------------------------- |
| 99.9% | 1 MiB |       2 | `blib2to3/pgen2/parse.py:252` |
|  0.1% | 560 B |       1 | `blib2to3/pgen2/parse.py:245` |

##### `visit_default` (`black/linegen.py:134`)

|     % |  Size | Samples | Location               |
| ----: | ----: | ------: | ---------------------- |
| 99.9% | 1 MiB |       1 | `black/linegen.py:158` |
|  0.1% | 702 B |       1 | `black/linegen.py:144` |

##### `pop` (`blib2to3/pgen2/parse.py:398`)

|      % |  Size | Samples | Location                      |
| -----: | ----: | ------: | ----------------------------- |
| 100.0% | 1 MiB |       1 | `blib2to3/pgen2/parse.py:408` |

##### `lines_with_leading_tabs_expanded` (`black/strings.py:46`)

|      % |  Size | Samples | Location              |
| -----: | ----: | ------: | --------------------- |
| 100.0% | 1 MiB |       1 | `black/strings.py:58` |

##### `is_import` (`black/lines.py:134`)

|      % |  Size | Samples | Location             |
| -----: | ----: | ------: | -------------------- |
| 100.0% | 1 MiB |       1 | `black/lines.py:137` |

##### `__init__` (`<string>:2`)

|      % |  Size | Samples | Location     |
| -----: | ----: | ------: | ------------ |
| 100.0% | 1 MiB |       1 | `<string>:6` |

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

|     % |     Size | Samples | Caller                           | Location                |
| ----: | -------: | ------: | -------------------------------- | ----------------------- |
| 94.8% | 18.2 MiB |  20,790 | `append`                         | `black/lines.py:63`     |
|  5.2% |    1 MiB |       1 | `max_delimiter_priority_in_atom` | `black/brackets.py:328` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |   Size | Samples | Caller                  | Location               |
| -----: | -----: | ------: | ----------------------- | ---------------------- |
| 100.0% | 16 MiB |   1,014 | `_parse_single_version` | `black/parsing.py:117` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Samples | Caller    | Location                 |
| ----: | ----: | ------: | --------- | ------------------------ |
| 71.4% | 5 MiB |       5 | `changed` | `blib2to3/pytree.py:171` |
| 28.6% | 2 MiB |       2 | `prefix`  | `blib2to3/pytree.py:480` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Samples | Caller    | Location                 |
| -----: | ----: | ------: | --------- | ------------------------ |
| 100.0% | 5 MiB |       5 | `convert` | `blib2to3/pytree.py:486` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|      % |     Size | Samples | Caller         | Location                 |
| -----: | -------: | ------: | -------------- | ------------------------ |
| 100.0% | 3.14 MiB |     198 | `prev_sibling` | `blib2to3/pytree.py:207` |

##### `transform_line` (`black/linegen.py:601`)

|      % |  Size | Samples | Caller             | Location                 |
| -----: | ----: | ------: | ------------------ | ------------------------ |
| 100.0% | 3 MiB |       8 | `_format_str_once` | `black/__init__.py:1236` |

##### `convert` (`blib2to3/pytree.py:486`)

|      % |  Size | Samples | Caller | Location                      |
| -----: | ----: | ------: | ------ | ----------------------------- |
| 100.0% | 2 MiB |       2 | `pop`  | `blib2to3/pgen2/parse.py:398` |

##### `_addtoken` (`blib2to3/pgen2/parse.py:290`)

|      % |  Size | Samples | Caller     | Location                      |
| -----: | ----: | ------: | ---------- | ----------------------------- |
| 100.0% | 2 MiB |       2 | `addtoken` | `blib2to3/pgen2/parse.py:242` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Samples | Caller          | Location               |
| -----: | ----: | ------: | --------------- | ---------------------- |
| 100.0% | 2 MiB |       2 | `visit_default` | `black/linegen.py:134` |

##### `make_grammar` (`blib2to3/pgen2/pgen.py:49`)

|      % |     Size | Samples | Caller             | Location                     |
| -----: | -------: | ------: | ------------------ | ---------------------------- |
| 100.0% | 1.01 MiB |       6 | `generate_grammar` | `blib2to3/pgen2/pgen.py:426` |

##### `visit` (`black/nodes.py:163`)

|     % |  Size | Samples | Caller             | Location                 |
| ----: | ----: | ------: | ------------------ | ------------------------ |
| 99.9% | 1 MiB |       4 | `visit_default`    | `black/nodes.py:187`     |
|  0.1% | 690 B |       1 | `_format_str_once` | `black/__init__.py:1236` |

##### `addtoken` (`blib2to3/pgen2/parse.py:242`)

|      % |  Size | Samples | Caller         | Location                       |
| -----: | ----: | ------: | -------------- | ------------------------------ |
| 100.0% | 1 MiB |       3 | `parse_tokens` | `blib2to3/pgen2/driver.py:114` |

##### `visit_default` (`black/linegen.py:134`)

|     % |  Size | Samples | Caller         | Location               |
| ----: | ----: | ------: | -------------- | ---------------------- |
| 99.9% | 1 MiB |       1 | `visit`        | `black/nodes.py:163`   |
|  0.1% | 702 B |       1 | `visit_STRING` | `black/linegen.py:413` |

##### `pop` (`blib2to3/pgen2/parse.py:398`)

|      % |  Size | Samples | Caller      | Location                      |
| -----: | ----: | ------: | ----------- | ----------------------------- |
| 100.0% | 1 MiB |       1 | `_addtoken` | `blib2to3/pgen2/parse.py:290` |

##### `lines_with_leading_tabs_expanded` (`black/strings.py:46`)

|      % |  Size | Samples | Caller          | Location              |
| -----: | ----: | ------: | --------------- | --------------------- |
| 100.0% | 1 MiB |       1 | `fix_docstring` | `black/strings.py:65` |

##### `is_import` (`black/lines.py:134`)

|      % |  Size | Samples | Caller               | Location             |
| -----: | ----: | ------: | -------------------- | -------------------- |
| 100.0% | 1 MiB |       1 | `_maybe_empty_lines` | `black/lines.py:610` |

##### `__init__` (`<string>:2`)

|      % |  Size | Samples | Caller | Location               |
| -----: | ----: | ------: | ------ | ---------------------- |
| 100.0% | 1 MiB |       1 | `line` | `black/linegen.py:109` |

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

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

|     % |     Size | Samples | Caller     | Location              |
| ----: | -------: | ------: | ---------- | --------------------- |
| 31.7% | 7.64 KiB |       9 | `<module>` | `black/mode.py:1`     |
| 10.1% | 2.44 KiB |       3 | `<module>` | `black/__init__.py:1` |
|  7.0% | 1.69 KiB |       2 | `<module>` | `black/report.py:1`   |
|  7.0% | 1.69 KiB |       2 | `<module>` | `black/linegen.py:1`  |

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
| 92.5% |   67 MiB |  22,200 | `__call__`                        | `/venv/lib/python3.11/site-packages/click/core.py:1567` |
| 92.5% |   67 MiB |  22,200 | `patched_main`                    | `black/__init__.py:1594`                                |
| 92.5% |   67 MiB |  22,200 | `<module>`                        | `black/__main__.py:1`                                   |
| 92.4% | 66.9 MiB |  22,172 | `main`                            | `black/__init__.py:244`                                 |
| 92.4% | 66.9 MiB |  22,168 | `reformat_one`                    | `black/__init__.py:860`                                 |
| 92.4% | 66.9 MiB |  22,165 | `format_file_in_place`            | `black/__init__.py:917`                                 |
| 92.1% | 66.7 MiB |  22,162 | `format_file_contents`            | `black/__init__.py:1054`                                |
| 70.1% | 50.8 MiB |  21,147 | `format_str`                      | `black/__init__.py:1189`                                |
| 70.1% | 50.8 MiB |  21,146 | `_format_str_once`                | `black/__init__.py:1236`                                |
| 48.9% | 35.4 MiB |  21,086 | `visit`                           | `black/nodes.py:163`                                    |
| 48.9% | 35.4 MiB |  21,084 | `visit_default`                   | `black/linegen.py:134`                                  |
| 48.9% | 35.4 MiB |  21,084 | `visit_default`                   | `black/nodes.py:187`                                    |
| 48.6% | 35.2 MiB |  20,713 | `visit_stmt`                      | `black/linegen.py:199`                                  |
| 48.1% | 34.8 MiB |  20,272 | `visit_funcdef`                   | `black/linegen.py:254`                                  |
| 48.0% | 34.7 MiB |  20,146 | `visit_suite`                     | `black/linegen.py:288`                                  |
| 32.9% | 23.8 MiB |  13,402 | `visit_simple_stmt`               | `black/linegen.py:295`                                  |
| 29.4% | 21.3 MiB |  20,886 | `append`                          | `black/lines.py:63`                                     |
| 26.5% | 19.2 MiB |  20,791 | `mark`                            | `black/brackets.py:70`                                  |
| 22.0% |   16 MiB |   1,015 | `check_stability_and_equivalence` | `black/__init__.py:1037`                                |
| 22.0% |   16 MiB |   1,014 | `parse`                           | `/usr/lib/python3.11/ast.py:33`                         |

#### Categories

##### Ours

|     % |     Size | Samples | Function                          | Location                 |
| ----: | -------: | ------: | --------------------------------- | ------------------------ |
| 92.5% |   67 MiB |  22,200 | `patched_main`                    | `black/__init__.py:1594` |
| 92.5% |   67 MiB |  22,200 | `<module>`                        | `black/__main__.py:1`    |
| 92.4% | 66.9 MiB |  22,172 | `main`                            | `black/__init__.py:244`  |
| 92.4% | 66.9 MiB |  22,168 | `reformat_one`                    | `black/__init__.py:860`  |
| 92.4% | 66.9 MiB |  22,165 | `format_file_in_place`            | `black/__init__.py:917`  |
| 92.1% | 66.7 MiB |  22,162 | `format_file_contents`            | `black/__init__.py:1054` |
| 70.1% | 50.8 MiB |  21,147 | `format_str`                      | `black/__init__.py:1189` |
| 70.1% | 50.8 MiB |  21,146 | `_format_str_once`                | `black/__init__.py:1236` |
| 48.9% | 35.4 MiB |  21,086 | `visit`                           | `black/nodes.py:163`     |
| 48.9% | 35.4 MiB |  21,084 | `visit_default`                   | `black/linegen.py:134`   |
| 48.9% | 35.4 MiB |  21,084 | `visit_default`                   | `black/nodes.py:187`     |
| 48.6% | 35.2 MiB |  20,713 | `visit_stmt`                      | `black/linegen.py:199`   |
| 48.1% | 34.8 MiB |  20,272 | `visit_funcdef`                   | `black/linegen.py:254`   |
| 48.0% | 34.7 MiB |  20,146 | `visit_suite`                     | `black/linegen.py:288`   |
| 32.9% | 23.8 MiB |  13,402 | `visit_simple_stmt`               | `black/linegen.py:295`   |
| 29.4% | 21.3 MiB |  20,886 | `append`                          | `black/lines.py:63`      |
| 26.5% | 19.2 MiB |  20,791 | `mark`                            | `black/brackets.py:70`   |
| 22.0% |   16 MiB |   1,015 | `check_stability_and_equivalence` | `black/__init__.py:1037` |
| 22.0% |   16 MiB |   1,014 | `_parse_single_version`           | `black/parsing.py:117`   |
| 22.0% |   16 MiB |   1,014 | `parse_ast`                       | `black/parsing.py:129`   |

##### Standard library

|     % |     Size | Samples | Function                | Location                                       |
| ----: | -------: | ------: | ----------------------- | ---------------------------------------------- |
| 22.0% |   16 MiB |   1,014 | `parse`                 | `/usr/lib/python3.11/ast.py:33`                |
|  7.5% | 5.45 MiB |   1,487 | `_find_and_load`        | `<frozen importlib._bootstrap>:1167`           |
|  0.4% |  333 KiB |     341 | `_handle_fromlist`      | `<frozen importlib._bootstrap>:1209`           |
|  0.3% |  222 KiB |       1 | `decode`                | `<frozen codecs>:319`                          |
|  0.1% | 75.7 KiB |      79 | `__new__`               | `<frozen abc>:105`                             |
|  0.1% | 47.8 KiB |      25 | `compile`               | `/usr/lib/python3.11/re/__init__.py:225`       |
| <0.1% | 32.5 KiB |      38 | `__new__`               | `/usr/lib/python3.11/enum.py:488`              |
| <0.1% | 13.6 KiB |       5 | `inner`                 | `/usr/lib/python3.11/typing.py:338`            |
| <0.1% | 9.23 KiB |      10 | `dataclass`             | `/usr/lib/python3.11/dataclasses.py:1192`      |
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

|      % |   Size | Samples | Callee     | Location                                                |
| -----: | -----: | ------: | ---------- | ------------------------------------------------------- |
| 100.0% | 67 MiB |  22,200 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py:1567` |

##### `<module>` (`black/__main__.py:1`)

|      % |   Size | Samples | Callee         | Location                 |
| -----: | -----: | ------: | -------------- | ------------------------ |
| 100.0% | 67 MiB |  22,200 | `patched_main` | `black/__init__.py:1594` |

##### `main` (`black/__init__.py:244`)

|      % |     Size | Samples | Callee         | Location                |
| -----: | -------: | ------: | -------------- | ----------------------- |
| 100.0% | 66.9 MiB |  22,168 | `reformat_one` | `black/__init__.py:860` |
|  <0.1% | 2.06 KiB |       2 | `get_sources`  | `black/__init__.py:724` |

##### `reformat_one` (`black/__init__.py:860`)

|      % |     Size | Samples | Callee                 | Location                |
| -----: | -------: | ------: | ---------------------- | ----------------------- |
| 100.0% | 66.9 MiB |  22,165 | `format_file_in_place` | `black/__init__.py:917` |
|  <0.1% | 1.13 KiB |       1 | `read`                 | `black/cache.py:60`     |

##### `format_file_in_place` (`black/__init__.py:917`)

|     % |     Size | Samples | Callee                 | Location                 |
| ----: | -------: | ------: | ---------------------- | ------------------------ |
| 99.7% | 66.7 MiB |  22,162 | `format_file_contents` | `black/__init__.py:1054` |
|  0.3% |  223 KiB |       2 | `decode_bytes`         | `black/__init__.py:1290` |

##### `format_file_contents` (`black/__init__.py:1054`)

|     % |     Size | Samples | Callee                            | Location                 |
| ----: | -------: | ------: | --------------------------------- | ------------------------ |
| 76.1% | 50.8 MiB |  21,147 | `format_str`                      | `black/__init__.py:1189` |
| 23.9% |   16 MiB |   1,015 | `check_stability_and_equivalence` | `black/__init__.py:1037` |

##### `format_str` (`black/__init__.py:1189`)

|      % |     Size | Samples | Callee             | Location                 |
| -----: | -------: | ------: | ------------------ | ------------------------ |
| 100.0% | 50.8 MiB |  21,146 | `_format_str_once` | `black/__init__.py:1236` |

##### `_format_str_once` (`black/__init__.py:1236`)

|     % |     Size | Samples | Callee              | Location                |
| ----: | -------: | ------: | ------------------- | ----------------------- |
| 69.8% | 35.4 MiB |  21,086 | `visit`             | `black/nodes.py:163`    |
| 21.8% |   11 MiB |      30 | `lib2to3_parse`     | `black/parsing.py:55`   |
|  5.9% | 3.01 MiB |      17 | `transform_line`    | `black/linegen.py:601`  |
|  2.0% |    1 MiB |       3 | `maybe_empty_lines` | `black/lines.py:560`    |
| <0.1% | 19.9 KiB |       3 | `normalize_fmt_off` | `black/comments.py:168` |

##### `visit` (`black/nodes.py:163`)

|      % |     Size | Samples | Callee              | Location               |
| -----: | -------: | ------: | ------------------- | ---------------------- |
| 100.0% | 35.4 MiB |  21,084 | `visit_default`     | `black/linegen.py:134` |
|  99.2% | 35.2 MiB |  20,713 | `visit_stmt`        | `black/linegen.py:199` |
|  98.2% | 34.8 MiB |  20,272 | `visit_funcdef`     | `black/linegen.py:254` |
|  98.0% | 34.7 MiB |  20,146 | `visit_suite`       | `black/linegen.py:288` |
|  67.2% | 23.8 MiB |  13,402 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Samples | Callee              | Location               |
| -----: | -------: | ------: | ------------------- | ---------------------- |
| 100.0% | 35.4 MiB |  21,084 | `visit_default`     | `black/nodes.py:187`   |
|  60.1% | 21.3 MiB |  20,886 | `append`            | `black/lines.py:63`    |
|  16.9% |    6 MiB |       6 | `generate_comments` | `black/comments.py:52` |

##### `visit_default` (`black/nodes.py:187`)

|      % |     Size | Samples | Callee  | Location             |
| -----: | -------: | ------: | ------- | -------------------- |
| 100.0% | 35.4 MiB |  21,084 | `visit` | `black/nodes.py:163` |

##### `visit_stmt` (`black/linegen.py:199`)

|      % |     Size | Samples | Callee                       | Location                |
| -----: | -------: | ------: | ---------------------------- | ----------------------- |
| 100.0% | 35.2 MiB |  20,711 | `visit`                      | `black/nodes.py:163`    |
|  11.4% |    4 MiB |       5 | `normalize_invisible_parens` | `black/linegen.py:1328` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Samples | Callee  | Location             |
| -----: | -------: | ------: | ------- | -------------------- |
| 100.0% | 34.8 MiB |  20,272 | `visit` | `black/nodes.py:163` |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Samples | Callee          | Location               |
| -----: | -------: | ------: | --------------- | ---------------------- |
| 100.0% | 34.7 MiB |  20,146 | `visit_default` | `black/linegen.py:134` |

##### `visit_simple_stmt` (`black/linegen.py:295`)

|      % |     Size | Samples | Callee          | Location               |
| -----: | -------: | ------: | --------------- | ---------------------- |
| 100.0% | 23.8 MiB |  13,402 | `visit_default` | `black/linegen.py:134` |

##### `append` (`black/lines.py:63`)

|     % |     Size | Samples | Callee       | Location               |
| ----: | -------: | ------: | ------------ | ---------------------- |
| 85.6% | 18.2 MiB |  20,790 | `mark`       | `black/brackets.py:70` |
| 14.3% | 3.05 MiB |      92 | `whitespace` | `black/nodes.py:194`   |

##### `check_stability_and_equivalence` (`black/__init__.py:1037`)

|      % |   Size | Samples | Callee              | Location                 |
| -----: | -----: | ------: | ------------------- | ------------------------ |
| 100.0% | 16 MiB |   1,014 | `assert_equivalent` | `black/__init__.py:1524` |

##### `_parse_single_version` (`black/parsing.py:117`)

|      % |   Size | Samples | Callee  | Location                        |
| -----: | -----: | ------: | ------- | ------------------------------- |
| 100.0% | 16 MiB |   1,014 | `parse` | `/usr/lib/python3.11/ast.py:33` |

##### `parse_ast` (`black/parsing.py:129`)

|      % |   Size | Samples | Callee                  | Location               |
| -----: | -----: | ------: | ----------------------- | ---------------------- |
| 100.0% | 16 MiB |   1,014 | `_parse_single_version` | `black/parsing.py:117` |

## Hottest call stacks

Call stacks ranked by bytes held at peak memory in their leaf frame. `…` stands for frames the entry filter hides.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 22.0% |   16 MiB |   1,014 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  6.9% |    5 MiB |       5 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `shift` (`blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  4.1% |    3 MiB |       8 | `transform_line` (`black/linegen.py:601`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.8% |    2 MiB |       2 | `_addtoken` (`blib2to3/pgen2/parse.py:290`) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.8% |    2 MiB |       2 | `convert` (`blib2to3/pytree.py:486`) ← `pop` (`blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.7% | 1.21 MiB |     288 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.6% | 1.13 MiB |     158 | `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.4% | 1.04 MiB |      51 | `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← … ← `_find_and_load` (1167) ← … ← `_find_and_load` (1167) ← … ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.4% | 1.04 MiB |      49 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.4% | 1.02 MiB |      18 | `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/comments.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.4% | 1.01 MiB |       6 | `make_grammar` (`blib2to3/pgen2/pgen.py:49`) ← `generate_grammar` (426) ← `load_grammar` (`blib2to3/pgen2/driver.py:246`) ← `load_packaged_grammar` (280) ← `initialize` (`blib2to3/pygram.py:165`) ← `<module>` (`black/nodes.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/comments.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.4% | 1.01 MiB |      10 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`black/nodes.py:194`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.4% |    1 MiB |       4 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.4% |    1 MiB |       3 | `addtoken` (`blib2to3/pgen2/parse.py:242`) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.4% |    1 MiB |       1 | `lines_with_leading_tabs_expanded` (`black/strings.py:46`) ← `fix_docstring` (65) ← `visit_STRING` (`black/linegen.py:413`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.4% |    1 MiB |       1 | `is_import` (`black/lines.py:134`) ← `_maybe_empty_lines` (610) ← `maybe_empty_lines` (560) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.4% |    1 MiB |       1 | `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.4% |    1 MiB |       1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `preceding_leaf` (`black/nodes.py:441`) ← `whitespace` (194) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.4% |    1 MiB |       1 | `changed` (`blib2to3/pytree.py:171`) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) |
|  1.4% |    1 MiB |       1 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_test` (160) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

# Leaked memory profile

Leaked 58.1 MiB over 22,685 samples (2.62 KiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Ours             | 89.3% | 51.9 MiB |  21,387 |
| Standard library |  8.6% | 4.97 MiB |   1,068 |
| Third-party      |  2.1% | 1.23 MiB |     230 |

## Hottest functions

### Self size

Functions ranked by bytes never freed directly in the function body, excluding callees.

|     % |     Size | Samples | Function                           | Location                        |
| ----: | -------: | ------: | ---------------------------------- | ------------------------------- |
| 33.1% | 19.2 MiB |  20,791 | `mark`                             | `black/brackets.py:70`          |
| 12.1% |    7 MiB |       7 | `changed`                          | `blib2to3/pytree.py:171`        |
|  8.6% |    5 MiB |       5 | `__new__`                          | `blib2to3/pytree.py:81`         |
|  5.4% | 3.14 MiB |     198 | `update_sibling_maps`              | `blib2to3/pytree.py:369`        |
|  5.3% | 3.07 MiB |       9 | `transform_line`                   | `black/linegen.py:601`          |
|  3.5% | 2.01 MiB |       3 | `parse`                            | `/usr/lib/python3.11/ast.py:33` |
|  3.4% |    2 MiB |       2 | `generate_comments`                | `black/comments.py:52`          |
|  3.4% |    2 MiB |       2 | `convert`                          | `blib2to3/pytree.py:486`        |
|  3.4% |    2 MiB |       2 | `_addtoken`                        | `blib2to3/pgen2/parse.py:290`   |
|  1.7% | 1.01 MiB |       6 | `make_grammar`                     | `blib2to3/pgen2/pgen.py:49`     |
|  1.7% |    1 MiB |       5 | `visit`                            | `black/nodes.py:163`            |
|  1.7% |    1 MiB |       3 | `addtoken`                         | `blib2to3/pgen2/parse.py:242`   |
|  1.7% |    1 MiB |       2 | `visit_default`                    | `black/linegen.py:134`          |
|  1.7% |    1 MiB |       1 | `lines_with_leading_tabs_expanded` | `black/strings.py:46`           |
|  1.7% |    1 MiB |       1 | `is_import`                        | `black/lines.py:134`            |
|  1.7% |    1 MiB |       1 | `__init__`                         | `<string>:2`                    |
|  1.7% |    1 MiB |       1 | `pop`                              | `blib2to3/pgen2/parse.py:398`   |
|  0.1% | 75.7 KiB |      79 | `__new__`                          | `<frozen abc>:105`              |
|  0.1% | 57.2 KiB |      65 | `normalize_string_prefix`          | `black/strings.py:143`          |
|  0.1% | 41.5 KiB |      16 | `copy`                             | `blib2to3/pgen2/grammar.py:131` |

#### Categories

##### Ours

|     % |     Size | Samples | Function                           | Location                        |
| ----: | -------: | ------: | ---------------------------------- | ------------------------------- |
| 33.1% | 19.2 MiB |  20,791 | `mark`                             | `black/brackets.py:70`          |
| 12.1% |    7 MiB |       7 | `changed`                          | `blib2to3/pytree.py:171`        |
|  8.6% |    5 MiB |       5 | `__new__`                          | `blib2to3/pytree.py:81`         |
|  5.4% | 3.14 MiB |     198 | `update_sibling_maps`              | `blib2to3/pytree.py:369`        |
|  5.3% | 3.07 MiB |       9 | `transform_line`                   | `black/linegen.py:601`          |
|  3.4% |    2 MiB |       2 | `generate_comments`                | `black/comments.py:52`          |
|  3.4% |    2 MiB |       2 | `convert`                          | `blib2to3/pytree.py:486`        |
|  3.4% |    2 MiB |       2 | `_addtoken`                        | `blib2to3/pgen2/parse.py:290`   |
|  1.7% | 1.01 MiB |       6 | `make_grammar`                     | `blib2to3/pgen2/pgen.py:49`     |
|  1.7% |    1 MiB |       5 | `visit`                            | `black/nodes.py:163`            |
|  1.7% |    1 MiB |       3 | `addtoken`                         | `blib2to3/pgen2/parse.py:242`   |
|  1.7% |    1 MiB |       2 | `visit_default`                    | `black/linegen.py:134`          |
|  1.7% |    1 MiB |       1 | `lines_with_leading_tabs_expanded` | `black/strings.py:46`           |
|  1.7% |    1 MiB |       1 | `is_import`                        | `black/lines.py:134`            |
|  1.7% |    1 MiB |       1 | `__init__`                         | `<string>:2`                    |
|  1.7% |    1 MiB |       1 | `pop`                              | `blib2to3/pgen2/parse.py:398`   |
|  0.1% | 57.2 KiB |      65 | `normalize_string_prefix`          | `black/strings.py:143`          |
|  0.1% | 41.5 KiB |      16 | `copy`                             | `blib2to3/pgen2/grammar.py:131` |
|  0.1% |   32 KiB |       1 | `classify`                         | `blib2to3/pgen2/parse.py:336`   |
| <0.1% | 25.3 KiB |      40 | `make_first`                       | `blib2to3/pgen2/pgen.py:74`     |

##### Standard library

|     % |     Size | Samples | Function                | Location                                       |
| ----: | -------: | ------: | ----------------------- | ---------------------------------------------- |
|  3.5% | 2.01 MiB |       3 | `parse`                 | `/usr/lib/python3.11/ast.py:33`                |
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

|     % |     Size | Samples | Location                |
| ----: | -------: | ------: | ----------------------- |
| 94.8% | 18.2 MiB |  20,789 | `black/brackets.py:112` |
|  5.2% |    1 MiB |       1 | `black/brackets.py:118` |
| <0.1% | 1.49 KiB |       1 | `black/brackets.py:114` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Samples | Location                 |
| ----: | ----: | ------: | ------------------------ |
| 57.1% | 4 MiB |       4 | `blib2to3/pytree.py:175` |
| 42.9% | 3 MiB |       3 | `blib2to3/pytree.py:176` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Samples | Location                |
| -----: | ----: | ------: | ----------------------- |
| 100.0% | 5 MiB |       5 | `blib2to3/pytree.py:84` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|     % |     Size | Samples | Location                 |
| ----: | -------: | ------: | ------------------------ |
| 34.0% | 1.07 MiB |      94 | `blib2to3/pytree.py:377` |
| 34.0% | 1.07 MiB |      94 | `blib2to3/pytree.py:376` |
| 32.0% |    1 MiB |      10 | `blib2to3/pytree.py:379` |

##### `transform_line` (`black/linegen.py:601`)

|     % |     Size | Samples | Location               |
| ----: | -------: | ------: | ---------------------- |
| 32.6% |    1 MiB |       2 | `black/linegen.py:714` |
| 32.5% |    1 MiB |       1 | `black/linegen.py:627` |
| 32.5% |    1 MiB |       1 | `black/linegen.py:626` |
|  2.3% | 73.7 KiB |       3 | `black/linegen.py:679` |
| <0.1% | 1.39 KiB |       1 | `black/linegen.py:635` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Samples | Location                        |
| -----: | -------: | ------: | ------------------------------- |
| 100.0% | 2.01 MiB |       3 | `/usr/lib/python3.11/ast.py:50` |

##### `generate_comments` (`black/comments.py:52`)

|     % |  Size | Samples | Location               |
| ----: | ----: | ------: | ---------------------- |
| 50.0% | 1 MiB |       1 | `black/comments.py:76` |
| 50.0% | 1 MiB |       1 | `black/comments.py:72` |

##### `convert` (`blib2to3/pytree.py:486`)

|      % |  Size | Samples | Location                 |
| -----: | ----: | ------: | ------------------------ |
| 100.0% | 2 MiB |       2 | `blib2to3/pytree.py:501` |

##### `_addtoken` (`blib2to3/pgen2/parse.py:290`)

|     % |  Size | Samples | Location                      |
| ----: | ----: | ------: | ----------------------------- |
| 50.0% | 1 MiB |       1 | `blib2to3/pgen2/parse.py:315` |
| 50.0% | 1 MiB |       1 | `blib2to3/pgen2/parse.py:314` |

##### `make_grammar` (`blib2to3/pgen2/pgen.py:49`)

|     % |     Size | Samples | Location                    |
| ----: | -------: | ------: | --------------------------- |
| 98.6% |    1 MiB |       1 | `blib2to3/pgen2/pgen.py:56` |
|  0.4% | 4.52 KiB |       1 | `blib2to3/pgen2/pgen.py:70` |
|  0.4% | 4.52 KiB |       1 | `blib2to3/pgen2/pgen.py:58` |
|  0.3% | 3.19 KiB |       1 | `blib2to3/pgen2/pgen.py:57` |
|  0.1% |    1 KiB |       1 | `blib2to3/pgen2/pgen.py:69` |

##### `visit` (`black/nodes.py:163`)

|     % |     Size | Samples | Location             |
| ----: | -------: | ------: | -------------------- |
| 99.7% |    1 MiB |       2 | `black/nodes.py:185` |
|  0.3% | 2.68 KiB |       3 | `black/nodes.py:183` |

##### `addtoken` (`blib2to3/pgen2/parse.py:242`)

|     % |  Size | Samples | Location                      |
| ----: | ----: | ------: | ----------------------------- |
| 99.9% | 1 MiB |       2 | `blib2to3/pgen2/parse.py:252` |
|  0.1% | 560 B |       1 | `blib2to3/pgen2/parse.py:245` |

##### `visit_default` (`black/linegen.py:134`)

|     % |  Size | Samples | Location               |
| ----: | ----: | ------: | ---------------------- |
| 99.9% | 1 MiB |       1 | `black/linegen.py:158` |
|  0.1% | 702 B |       1 | `black/linegen.py:144` |

##### `lines_with_leading_tabs_expanded` (`black/strings.py:46`)

|      % |  Size | Samples | Location              |
| -----: | ----: | ------: | --------------------- |
| 100.0% | 1 MiB |       1 | `black/strings.py:58` |

##### `is_import` (`black/lines.py:134`)

|      % |  Size | Samples | Location             |
| -----: | ----: | ------: | -------------------- |
| 100.0% | 1 MiB |       1 | `black/lines.py:137` |

##### `__init__` (`<string>:2`)

|      % |  Size | Samples | Location     |
| -----: | ----: | ------: | ------------ |
| 100.0% | 1 MiB |       1 | `<string>:6` |

##### `pop` (`blib2to3/pgen2/parse.py:398`)

|      % |  Size | Samples | Location                      |
| -----: | ----: | ------: | ----------------------------- |
| 100.0% | 1 MiB |       1 | `blib2to3/pgen2/parse.py:408` |

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

|     % |     Size | Samples | Caller                           | Location                |
| ----: | -------: | ------: | -------------------------------- | ----------------------- |
| 94.8% | 18.2 MiB |  20,790 | `append`                         | `black/lines.py:63`     |
|  5.2% |    1 MiB |       1 | `max_delimiter_priority_in_atom` | `black/brackets.py:328` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Samples | Caller    | Location                 |
| ----: | ----: | ------: | --------- | ------------------------ |
| 71.4% | 5 MiB |       5 | `changed` | `blib2to3/pytree.py:171` |
| 28.6% | 2 MiB |       2 | `prefix`  | `blib2to3/pytree.py:480` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Samples | Caller    | Location                 |
| -----: | ----: | ------: | --------- | ------------------------ |
| 100.0% | 5 MiB |       5 | `convert` | `blib2to3/pytree.py:486` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|      % |     Size | Samples | Caller         | Location                 |
| -----: | -------: | ------: | -------------- | ------------------------ |
| 100.0% | 3.14 MiB |     198 | `prev_sibling` | `blib2to3/pytree.py:207` |

##### `transform_line` (`black/linegen.py:601`)

|      % |     Size | Samples | Caller             | Location                 |
| -----: | -------: | ------: | ------------------ | ------------------------ |
| 100.0% | 3.07 MiB |       9 | `_format_str_once` | `black/__init__.py:1236` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Samples | Caller                  | Location               |
| -----: | -------: | ------: | ----------------------- | ---------------------- |
| 100.0% | 2.01 MiB |       3 | `_parse_single_version` | `black/parsing.py:117` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Samples | Caller          | Location               |
| -----: | ----: | ------: | --------------- | ---------------------- |
| 100.0% | 2 MiB |       2 | `visit_default` | `black/linegen.py:134` |

##### `convert` (`blib2to3/pytree.py:486`)

|      % |  Size | Samples | Caller | Location                      |
| -----: | ----: | ------: | ------ | ----------------------------- |
| 100.0% | 2 MiB |       2 | `pop`  | `blib2to3/pgen2/parse.py:398` |

##### `_addtoken` (`blib2to3/pgen2/parse.py:290`)

|      % |  Size | Samples | Caller     | Location                      |
| -----: | ----: | ------: | ---------- | ----------------------------- |
| 100.0% | 2 MiB |       2 | `addtoken` | `blib2to3/pgen2/parse.py:242` |

##### `make_grammar` (`blib2to3/pgen2/pgen.py:49`)

|      % |     Size | Samples | Caller             | Location                     |
| -----: | -------: | ------: | ------------------ | ---------------------------- |
| 100.0% | 1.01 MiB |       6 | `generate_grammar` | `blib2to3/pgen2/pgen.py:426` |

##### `visit` (`black/nodes.py:163`)

|     % |  Size | Samples | Caller             | Location                 |
| ----: | ----: | ------: | ------------------ | ------------------------ |
| 99.9% | 1 MiB |       4 | `visit_default`    | `black/nodes.py:187`     |
|  0.1% | 690 B |       1 | `_format_str_once` | `black/__init__.py:1236` |

##### `addtoken` (`blib2to3/pgen2/parse.py:242`)

|      % |  Size | Samples | Caller         | Location                       |
| -----: | ----: | ------: | -------------- | ------------------------------ |
| 100.0% | 1 MiB |       3 | `parse_tokens` | `blib2to3/pgen2/driver.py:114` |

##### `visit_default` (`black/linegen.py:134`)

|     % |  Size | Samples | Caller         | Location               |
| ----: | ----: | ------: | -------------- | ---------------------- |
| 99.9% | 1 MiB |       1 | `visit`        | `black/nodes.py:163`   |
|  0.1% | 702 B |       1 | `visit_STRING` | `black/linegen.py:413` |

##### `lines_with_leading_tabs_expanded` (`black/strings.py:46`)

|      % |  Size | Samples | Caller          | Location              |
| -----: | ----: | ------: | --------------- | --------------------- |
| 100.0% | 1 MiB |       1 | `fix_docstring` | `black/strings.py:65` |

##### `is_import` (`black/lines.py:134`)

|      % |  Size | Samples | Caller               | Location             |
| -----: | ----: | ------: | -------------------- | -------------------- |
| 100.0% | 1 MiB |       1 | `_maybe_empty_lines` | `black/lines.py:610` |

##### `__init__` (`<string>:2`)

|      % |  Size | Samples | Caller | Location               |
| -----: | ----: | ------: | ------ | ---------------------- |
| 100.0% | 1 MiB |       1 | `line` | `black/linegen.py:109` |

##### `pop` (`blib2to3/pgen2/parse.py:398`)

|      % |  Size | Samples | Caller      | Location                      |
| -----: | ----: | ------: | ----------- | ----------------------------- |
| 100.0% | 1 MiB |       1 | `_addtoken` | `blib2to3/pgen2/parse.py:290` |

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
|  7.0% | 1.69 KiB |       2 | `<module>` | `black/report.py:1`   |
|  7.0% | 1.69 KiB |       2 | `<module>` | `black/linegen.py:1`  |

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
| 90.7% | 52.6 MiB |  21,190 | `__call__`                        | `/venv/lib/python3.11/site-packages/click/core.py:1567` |
| 90.7% | 52.6 MiB |  21,190 | `patched_main`                    | `black/__init__.py:1594`                                |
| 90.7% | 52.6 MiB |  21,190 | `<module>`                        | `black/__main__.py:1`                                   |
| 90.6% | 52.6 MiB |  21,165 | `main`                            | `black/__init__.py:244`                                 |
| 90.6% | 52.6 MiB |  21,160 | `reformat_one`                    | `black/__init__.py:860`                                 |
| 90.6% | 52.6 MiB |  21,153 | `format_file_in_place`            | `black/__init__.py:917`                                 |
| 90.6% | 52.6 MiB |  21,152 | `format_file_contents`            | `black/__init__.py:1054`                                |
| 87.1% | 50.6 MiB |  21,146 | `_format_str_once`                | `black/__init__.py:1236`                                |
| 61.0% | 35.4 MiB |  21,086 | `visit`                           | `black/nodes.py:163`                                    |
| 61.0% | 35.4 MiB |  21,084 | `visit_default`                   | `black/nodes.py:187`                                    |
| 61.0% | 35.4 MiB |  21,084 | `visit_default`                   | `black/linegen.py:134`                                  |
| 60.6% | 35.2 MiB |  20,713 | `visit_stmt`                      | `black/linegen.py:199`                                  |
| 60.4% | 35.1 MiB |      93 | `format_str`                      | `black/__init__.py:1189`                                |
| 60.0% | 34.8 MiB |  20,272 | `visit_funcdef`                   | `black/linegen.py:254`                                  |
| 59.8% | 34.7 MiB |  20,146 | `visit_suite`                     | `black/linegen.py:288`                                  |
| 41.0% | 23.8 MiB |  13,402 | `visit_simple_stmt`               | `black/linegen.py:295`                                  |
| 36.7% | 21.3 MiB |  20,886 | `append`                          | `black/lines.py:63`                                     |
| 33.1% | 19.2 MiB |  20,791 | `mark`                            | `black/brackets.py:70`                                  |
| 30.2% | 17.5 MiB |  21,059 | `check_stability_and_equivalence` | `black/__init__.py:1037`                                |
| 27.4% | 15.9 MiB |  10,807 | `visit_power`                     | `black/linegen.py:341`                                  |

#### Categories

##### Ours

|     % |     Size | Samples | Function                          | Location                 |
| ----: | -------: | ------: | --------------------------------- | ------------------------ |
| 90.7% | 52.6 MiB |  21,190 | `patched_main`                    | `black/__init__.py:1594` |
| 90.7% | 52.6 MiB |  21,190 | `<module>`                        | `black/__main__.py:1`    |
| 90.6% | 52.6 MiB |  21,165 | `main`                            | `black/__init__.py:244`  |
| 90.6% | 52.6 MiB |  21,160 | `reformat_one`                    | `black/__init__.py:860`  |
| 90.6% | 52.6 MiB |  21,153 | `format_file_in_place`            | `black/__init__.py:917`  |
| 90.6% | 52.6 MiB |  21,152 | `format_file_contents`            | `black/__init__.py:1054` |
| 87.1% | 50.6 MiB |  21,146 | `_format_str_once`                | `black/__init__.py:1236` |
| 61.0% | 35.4 MiB |  21,086 | `visit`                           | `black/nodes.py:163`     |
| 61.0% | 35.4 MiB |  21,084 | `visit_default`                   | `black/nodes.py:187`     |
| 61.0% | 35.4 MiB |  21,084 | `visit_default`                   | `black/linegen.py:134`   |
| 60.6% | 35.2 MiB |  20,713 | `visit_stmt`                      | `black/linegen.py:199`   |
| 60.4% | 35.1 MiB |      93 | `format_str`                      | `black/__init__.py:1189` |
| 60.0% | 34.8 MiB |  20,272 | `visit_funcdef`                   | `black/linegen.py:254`   |
| 59.8% | 34.7 MiB |  20,146 | `visit_suite`                     | `black/linegen.py:288`   |
| 41.0% | 23.8 MiB |  13,402 | `visit_simple_stmt`               | `black/linegen.py:295`   |
| 36.7% | 21.3 MiB |  20,886 | `append`                          | `black/lines.py:63`      |
| 33.1% | 19.2 MiB |  20,791 | `mark`                            | `black/brackets.py:70`   |
| 30.2% | 17.5 MiB |  21,059 | `check_stability_and_equivalence` | `black/__init__.py:1037` |
| 27.4% | 15.9 MiB |  10,807 | `visit_power`                     | `black/linegen.py:341`   |
| 26.7% | 15.5 MiB |  21,054 | `assert_stable`                   | `black/__init__.py:1557` |

##### Standard library

|     % |     Size | Samples | Function                | Location                                       |
| ----: | -------: | ------: | ----------------------- | ---------------------------------------------- |
|  9.3% | 5.42 MiB |   1,486 | `_find_and_load`        | `<frozen importlib._bootstrap>:1167`           |
|  3.5% | 2.01 MiB |       3 | `parse`                 | `/usr/lib/python3.11/ast.py:33`                |
|  0.6% |  333 KiB |     341 | `_handle_fromlist`      | `<frozen importlib._bootstrap>:1209`           |
|  0.1% | 75.7 KiB |      79 | `__new__`               | `<frozen abc>:105`                             |
|  0.1% | 47.8 KiB |      25 | `compile`               | `/usr/lib/python3.11/re/__init__.py:225`       |
|  0.1% | 32.5 KiB |      38 | `__new__`               | `/usr/lib/python3.11/enum.py:488`              |
| <0.1% | 13.6 KiB |       5 | `inner`                 | `/usr/lib/python3.11/typing.py:338`            |
| <0.1% | 9.23 KiB |      10 | `dataclass`             | `/usr/lib/python3.11/dataclasses.py:1192`      |
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
| 100.0% | 52.6 MiB |  21,190 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py:1567` |

##### `<module>` (`black/__main__.py:1`)

|      % |     Size | Samples | Callee         | Location                 |
| -----: | -------: | ------: | -------------- | ------------------------ |
| 100.0% | 52.6 MiB |  21,190 | `patched_main` | `black/__init__.py:1594` |

##### `main` (`black/__init__.py:244`)

|      % |     Size | Samples | Callee         | Location                |
| -----: | -------: | ------: | -------------- | ----------------------- |
| 100.0% | 52.6 MiB |  21,160 | `reformat_one` | `black/__init__.py:860` |
|  <0.1% | 2.06 KiB |       2 | `get_sources`  | `black/__init__.py:724` |

##### `reformat_one` (`black/__init__.py:860`)

|      % |     Size | Samples | Callee                 | Location                |
| -----: | -------: | ------: | ---------------------- | ----------------------- |
| 100.0% | 52.6 MiB |  21,153 | `format_file_in_place` | `black/__init__.py:917` |
|  <0.1% | 1.92 KiB |       2 | `done`                 | `black/report.py:36`    |
|  <0.1% | 1.13 KiB |       1 | `read`                 | `black/cache.py:60`     |
|  <0.1% |     72 B |       2 | `write`                | `black/cache.py:132`    |

##### `format_file_in_place` (`black/__init__.py:917`)

|      % |     Size | Samples | Callee                 | Location                 |
| -----: | -------: | ------: | ---------------------- | ------------------------ |
| 100.0% | 52.6 MiB |  21,152 | `format_file_contents` | `black/__init__.py:1054` |
|  <0.1% |    552 B |       1 | `decode_bytes`         | `black/__init__.py:1290` |

##### `format_file_contents` (`black/__init__.py:1054`)

|     % |     Size | Samples | Callee                            | Location                 |
| ----: | -------: | ------: | --------------------------------- | ------------------------ |
| 66.7% | 35.1 MiB |      93 | `format_str`                      | `black/__init__.py:1189` |
| 33.3% | 17.5 MiB |  21,059 | `check_stability_and_equivalence` | `black/__init__.py:1037` |

##### `_format_str_once` (`black/__init__.py:1236`)

|     % |     Size | Samples | Callee              | Location                |
| ----: | -------: | ------: | ------------------- | ----------------------- |
| 70.0% | 35.4 MiB |  21,086 | `visit`             | `black/nodes.py:163`    |
| 21.8% |   11 MiB |      30 | `lib2to3_parse`     | `black/parsing.py:55`   |
|  6.1% | 3.08 MiB |      18 | `transform_line`    | `black/linegen.py:601`  |
|  2.0% |    1 MiB |       3 | `maybe_empty_lines` | `black/lines.py:560`    |
| <0.1% | 19.9 KiB |       3 | `normalize_fmt_off` | `black/comments.py:168` |

##### `visit` (`black/nodes.py:163`)

|      % |     Size | Samples | Callee              | Location               |
| -----: | -------: | ------: | ------------------- | ---------------------- |
| 100.0% | 35.4 MiB |  21,084 | `visit_default`     | `black/linegen.py:134` |
|  99.2% | 35.2 MiB |  20,713 | `visit_stmt`        | `black/linegen.py:199` |
|  98.2% | 34.8 MiB |  20,272 | `visit_funcdef`     | `black/linegen.py:254` |
|  98.0% | 34.7 MiB |  20,146 | `visit_suite`       | `black/linegen.py:288` |
|  67.2% | 23.8 MiB |  13,402 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/nodes.py:187`)

|      % |     Size | Samples | Callee  | Location             |
| -----: | -------: | ------: | ------- | -------------------- |
| 100.0% | 35.4 MiB |  21,084 | `visit` | `black/nodes.py:163` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Samples | Callee              | Location               |
| -----: | -------: | ------: | ------------------- | ---------------------- |
| 100.0% | 35.4 MiB |  21,084 | `visit_default`     | `black/nodes.py:187`   |
|  60.1% | 21.3 MiB |  20,886 | `append`            | `black/lines.py:63`    |
|  16.9% |    6 MiB |       6 | `generate_comments` | `black/comments.py:52` |

##### `visit_stmt` (`black/linegen.py:199`)

|      % |     Size | Samples | Callee                       | Location                |
| -----: | -------: | ------: | ---------------------------- | ----------------------- |
| 100.0% | 35.2 MiB |  20,711 | `visit`                      | `black/nodes.py:163`    |
|  11.4% |    4 MiB |       5 | `normalize_invisible_parens` | `black/linegen.py:1328` |

##### `format_str` (`black/__init__.py:1189`)

|      % |     Size | Samples | Callee             | Location                 |
| -----: | -------: | ------: | ------------------ | ------------------------ |
| 100.0% | 35.1 MiB |      92 | `_format_str_once` | `black/__init__.py:1236` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Samples | Callee  | Location             |
| -----: | -------: | ------: | ------- | -------------------- |
| 100.0% | 34.8 MiB |  20,272 | `visit` | `black/nodes.py:163` |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Samples | Callee          | Location               |
| -----: | -------: | ------: | --------------- | ---------------------- |
| 100.0% | 34.7 MiB |  20,146 | `visit_default` | `black/linegen.py:134` |

##### `visit_simple_stmt` (`black/linegen.py:295`)

|      % |     Size | Samples | Callee          | Location               |
| -----: | -------: | ------: | --------------- | ---------------------- |
| 100.0% | 23.8 MiB |  13,402 | `visit_default` | `black/linegen.py:134` |

##### `append` (`black/lines.py:63`)

|     % |     Size | Samples | Callee       | Location               |
| ----: | -------: | ------: | ------------ | ---------------------- |
| 85.6% | 18.2 MiB |  20,790 | `mark`       | `black/brackets.py:70` |
| 14.3% | 3.05 MiB |      92 | `whitespace` | `black/nodes.py:194`   |

##### `check_stability_and_equivalence` (`black/__init__.py:1037`)

|     % |     Size | Samples | Callee              | Location                 |
| ----: | -------: | ------: | ------------------- | ------------------------ |
| 88.6% | 15.5 MiB |  21,054 | `assert_stable`     | `black/__init__.py:1557` |
| 11.4% | 2.01 MiB |       4 | `assert_equivalent` | `black/__init__.py:1524` |

##### `visit_power` (`black/linegen.py:341`)

|      % |     Size | Samples | Callee          | Location               |
| -----: | -------: | ------: | --------------- | ---------------------- |
| 100.0% | 15.9 MiB |  10,806 | `visit_default` | `black/linegen.py:134` |

##### `assert_stable` (`black/__init__.py:1557`)

|      % |     Size | Samples | Callee             | Location                 |
| -----: | -------: | ------: | ------------------ | ------------------------ |
| 100.0% | 15.5 MiB |  21,054 | `_format_str_once` | `black/__init__.py:1236` |

## Hottest call stacks

Call stacks ranked by bytes never freed in their leaf frame. `…` stands for frames the entry filter hides.

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.6% |    5 MiB |       5 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `shift` (`blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 5.2% |    3 MiB |       6 | `transform_line` (`black/linegen.py:601`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 3.5% | 2.01 MiB |       3 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 3.4% |    2 MiB |       2 | `_addtoken` (`blib2to3/pgen2/parse.py:290`) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 3.4% |    2 MiB |       2 | `convert` (`blib2to3/pytree.py:486`) ← `pop` (`blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.9% | 1.13 MiB |     158 | `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.8% | 1.04 MiB |      51 | `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← … ← `_find_and_load` (1167) ← … ← `_find_and_load` (1167) ← … ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.8% | 1.02 MiB |      18 | `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/comments.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.7% | 1.01 MiB |       6 | `make_grammar` (`blib2to3/pgen2/pgen.py:49`) ← `generate_grammar` (426) ← `load_grammar` (`blib2to3/pgen2/driver.py:246`) ← `load_packaged_grammar` (280) ← `initialize` (`blib2to3/pygram.py:165`) ← `<module>` (`black/nodes.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/comments.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.7% |    1 MiB |       3 | `addtoken` (`blib2to3/pgen2/parse.py:242`) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.7% |    1 MiB |       1 | `lines_with_leading_tabs_expanded` (`black/strings.py:46`) ← `fix_docstring` (65) ← `visit_STRING` (`black/linegen.py:413`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.7% |    1 MiB |       1 | `is_import` (`black/lines.py:134`) ← `_maybe_empty_lines` (610) ← `maybe_empty_lines` (560) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.7% |    1 MiB |       1 | `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.7% |    1 MiB |       1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `preceding_leaf` (`black/nodes.py:441`) ← `whitespace` (194) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.7% |    1 MiB |       1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`black/nodes.py:194`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.7% |    1 MiB |       1 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.7% |    1 MiB |       1 | `changed` (`blib2to3/pytree.py:171`) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) |
| 1.7% |    1 MiB |       1 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_test` (160) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.7% |    1 MiB |       1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`black/nodes.py:194`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                     |
| 1.7% |    1 MiB |       1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `wrap_in_parentheses` (`black/nodes.py:935`) ← `normalize_invisible_parens` (`black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

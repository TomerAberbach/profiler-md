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

|     % |     Size | Samples | Function                               | Location                                               |
| ----: | -------: | ------: | -------------------------------------- | ------------------------------------------------------ |
| 25.2% | 18.2 MiB |  20,790 | `mark`                                 | `black/brackets.py:70`                                 |
| 22.0% |   16 MiB |   1,014 | `parse`                                | `/usr/lib/python3.11/ast.py:33`                        |
|  8.3% |    6 MiB |       6 | `changed`                              | `blib2to3/pytree.py:171`                               |
|  6.9% |    5 MiB |       5 | `__new__`                              | `blib2to3/pytree.py:81`                                |
|  4.1% |    3 MiB |       8 | `transform_line`                       | `black/linegen.py:601`                                 |
|  4.1% |    3 MiB |       4 | `visit_default`                        | `black/linegen.py:134`                                 |
|  4.1% |    3 MiB |       3 | `generate_comments`                    | `black/comments.py:52`                                 |
|  3.1% | 2.27 MiB |     352 | `_call_with_frames_removed`            | `<frozen importlib._bootstrap>:233`                    |
|  3.0% | 2.14 MiB |     197 | `update_sibling_maps`                  | `blib2to3/pytree.py:369`                               |
|  2.8% |    2 MiB |       2 | `convert`                              | `blib2to3/pytree.py:486`                               |
|  2.8% |    2 MiB |       2 | `push`                                 | `blib2to3/pgen2/parse.py:386`                          |
|  1.4% | 1.01 MiB |       6 | `make_grammar`                         | `blib2to3/pgen2/pgen.py:49`                            |
|  1.4% | 1.01 MiB |      11 | `<module>`                             | `/venv/lib/python3.11/site-packages/click/parser.py:1` |
|  1.4% |    1 MiB |       5 | `visit`                                | `black/nodes.py:163`                                   |
|  1.4% |    1 MiB |       2 | `maybe_empty_lines`                    | `black/lines.py:560`                                   |
|  1.4% |    1 MiB |       1 | `_addtoken`                            | `blib2to3/pgen2/parse.py:290`                          |
|  1.4% |    1 MiB |       1 | `contains_uncollapsable_type_comments` | `black/lines.py:276`                                   |
|  1.4% |    1 MiB |       1 | `__init__`                             | `<string>:2`                                           |
|  1.4% |    1 MiB |       1 | `__init__`                             | `blib2to3/pytree.py:400`                               |
|  0.4% |  311 KiB |     341 | `_compile_bytecode`                    | `<frozen importlib._bootstrap_external>:727`           |

#### Categories

##### Ours

|     % |     Size | Samples | Function                               | Location                        |
| ----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 25.2% | 18.2 MiB |  20,790 | `mark`                                 | `black/brackets.py:70`          |
|  8.3% |    6 MiB |       6 | `changed`                              | `blib2to3/pytree.py:171`        |
|  6.9% |    5 MiB |       5 | `__new__`                              | `blib2to3/pytree.py:81`         |
|  4.1% |    3 MiB |       8 | `transform_line`                       | `black/linegen.py:601`          |
|  4.1% |    3 MiB |       4 | `visit_default`                        | `black/linegen.py:134`          |
|  4.1% |    3 MiB |       3 | `generate_comments`                    | `black/comments.py:52`          |
|  3.0% | 2.14 MiB |     197 | `update_sibling_maps`                  | `blib2to3/pytree.py:369`        |
|  2.8% |    2 MiB |       2 | `convert`                              | `blib2to3/pytree.py:486`        |
|  2.8% |    2 MiB |       2 | `push`                                 | `blib2to3/pgen2/parse.py:386`   |
|  1.4% | 1.01 MiB |       6 | `make_grammar`                         | `blib2to3/pgen2/pgen.py:49`     |
|  1.4% |    1 MiB |       5 | `visit`                                | `black/nodes.py:163`            |
|  1.4% |    1 MiB |       2 | `maybe_empty_lines`                    | `black/lines.py:560`            |
|  1.4% |    1 MiB |       1 | `_addtoken`                            | `blib2to3/pgen2/parse.py:290`   |
|  1.4% |    1 MiB |       1 | `contains_uncollapsable_type_comments` | `black/lines.py:276`            |
|  1.4% |    1 MiB |       1 | `__init__`                             | `<string>:2`                    |
|  1.4% |    1 MiB |       1 | `__init__`                             | `blib2to3/pytree.py:400`        |
|  0.3% |  225 KiB |       5 | `_format_str_once`                     | `black/__init__.py:1236`        |
|  0.1% | 57.2 KiB |      65 | `normalize_string_prefix`              | `black/strings.py:143`          |
|  0.1% | 41.5 KiB |      16 | `copy`                                 | `blib2to3/pgen2/grammar.py:131` |
| <0.1% |   32 KiB |       1 | `classify`                             | `blib2to3/pgen2/parse.py:336`   |

##### Standard library

|     % |     Size | Samples | Function                    | Location                                          |
| ----: | -------: | ------: | --------------------------- | ------------------------------------------------- |
| 22.0% |   16 MiB |   1,014 | `parse`                     | `/usr/lib/python3.11/ast.py:33`                   |
|  3.1% | 2.27 MiB |     352 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`               |
|  0.4% |  311 KiB |     341 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`      |
|  0.3% |  222 KiB |       1 | `decode`                    | `<frozen codecs>:319`                             |
|  0.2% |  112 KiB |     108 | `_code_to_timestamp_pyc`    | `<frozen importlib._bootstrap_external>:740`      |
|  0.1% | 75.7 KiB |      79 | `__new__`                   | `<frozen abc>:105`                                |
| <0.1% | 24.1 KiB |      27 | `__new__`                   | `/usr/lib/python3.11/enum.py:488`                 |
| <0.1% | 22.6 KiB |      12 | `compile`                   | `/usr/lib/python3.11/re/_compiler.py:738`         |
| <0.1% | 19.8 KiB |      12 | `<module>`                  | `/usr/lib/python3.11/tomllib/_parser.py:1`        |
| <0.1% | 17.4 KiB |      21 | `__new__`                   | `/usr/lib/python3.11/typing.py:2891`              |
| <0.1% |   12 KiB |       3 | `inner`                     | `/usr/lib/python3.11/typing.py:338`               |
| <0.1% |    8 KiB |       4 | `_fill_cache`               | `<frozen importlib._bootstrap_external>:1655`     |
| <0.1% | 7.97 KiB |       1 | `_parse_sub`                | `/usr/lib/python3.11/re/_parser.py:447`           |
| <0.1% | 6.73 KiB |       8 | `__setattr__`               | `/usr/lib/python3.11/enum.py:831`                 |
| <0.1% | 5.63 KiB |       6 | `namedtuple`                | `/usr/lib/python3.11/collections/__init__.py:348` |
| <0.1% | 5.61 KiB |       3 | `_parse`                    | `/usr/lib/python3.11/re/_parser.py:507`           |
| <0.1% | 5.32 KiB |       2 | `_code`                     | `/usr/lib/python3.11/re/_compiler.py:571`         |
| <0.1% | 4.73 KiB |       6 | `<module>`                  | `/usr/lib/python3.11/pkgutil.py:1`                |
| <0.1% | 2.85 KiB |       1 | `wrap`                      | `/usr/lib/python3.11/dataclasses.py:1209`         |
| <0.1% | 2.85 KiB |       4 | `_process_class`            | `/usr/lib/python3.11/dataclasses.py:884`          |

##### Third-party

|     % |     Size | Samples | Function              | Location                                                                   |
| ----: | -------: | ------: | --------------------- | -------------------------------------------------------------------------- |
|  1.4% | 1.01 MiB |      11 | `<module>`            | `/venv/lib/python3.11/site-packages/click/parser.py:1`                     |
|  0.1% | 44.3 KiB |      31 | `__init__`            | `/venv/lib/python3.11/site-packages/click/core.py:2883`                    |
|  0.1% |   42 KiB |       7 | `<module>`            | `/venv/lib/python3.11/site-packages/packaging/tags.py:1`                   |
| <0.1% |   25 KiB |      22 | `<module>`            | `/venv/lib/python3.11/site-packages/click/core.py:1`                       |
| <0.1% |   15 KiB |      18 | `<module>`            | `/venv/lib/python3.11/site-packages/mypy_extensions.py:1`                  |
| <0.1% | 13.4 KiB |      15 | `<module>`            | `/venv/lib/python3.11/site-packages/click/exceptions.py:1`                 |
| <0.1% | 9.61 KiB |       9 | `<module>`            | `/venv/lib/python3.11/site-packages/packaging/version.py:1`                |
| <0.1% | 7.08 KiB |       8 | `<module>`            | `/venv/lib/python3.11/site-packages/click/utils.py:1`                      |
| <0.1% | 6.48 KiB |       6 | `<module>`            | `/venv/lib/python3.11/site-packages/pathspec/util.py:1`                    |
| <0.1% | 6.24 KiB |       5 | `<module>`            | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:1`                |
| <0.1% |  5.8 KiB |       6 | `<module>`            | `/venv/lib/python3.11/site-packages/click/_compat.py:1`                    |
| <0.1% | 3.82 KiB |       1 | `Specifier`           | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:220`           |
| <0.1% | 3.79 KiB |       3 | `new_func`            | `/venv/lib/python3.11/site-packages/click/decorators.py:33`                |
| <0.1% | 3.72 KiB |       4 | `<module>`            | `/venv/lib/python3.11/site-packages/pathspec/pattern.py:1`                 |
| <0.1% | 3.56 KiB |       4 | `<module>`            | `/venv/lib/python3.11/site-packages/packaging/utils.py:1`                  |
| <0.1% | 3.37 KiB |       5 | `handle_parse_result` | `/venv/lib/python3.11/site-packages/click/core.py:2663`                    |
| <0.1% | 3.19 KiB |       1 | `<module>`            | `/venv/lib/python3.11/site-packages/click/__init__.py:1`                   |
| <0.1% | 3.19 KiB |       4 | `<module>`            | `/venv/lib/python3.11/site-packages/pathspec/pathspec.py:1`                |
| <0.1% | 2.81 KiB |       3 | `<module>`            | `/venv/lib/python3.11/site-packages/pathspec/patterns/gitignore/base.py:1` |
| <0.1% | 2.76 KiB |       2 | `<module>`            | `/venv/lib/python3.11/site-packages/click/types.py:1`                      |

#### Lines

Lines ranked by contribution to each function's self size.

##### `mark` (`black/brackets.py:70`)

|     % |     Size | Samples | Location                |
| ----: | -------: | ------: | ----------------------- |
| 94.5% | 17.2 MiB |  20,788 | `black/brackets.py:112` |
|  5.5% |    1 MiB |       1 | `black/brackets.py:118` |
| <0.1% | 1.49 KiB |       1 | `black/brackets.py:114` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |   Size | Samples | Location                        |
| -----: | -----: | ------: | ------------------------------- |
| 100.0% | 16 MiB |   1,014 | `/usr/lib/python3.11/ast.py:50` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Samples | Location                 |
| ----: | ----: | ------: | ------------------------ |
| 66.7% | 4 MiB |       4 | `blib2to3/pytree.py:175` |
| 33.3% | 2 MiB |       2 | `blib2to3/pytree.py:176` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Samples | Location                |
| -----: | ----: | ------: | ----------------------- |
| 100.0% | 5 MiB |       5 | `blib2to3/pytree.py:84` |

##### `transform_line` (`black/linegen.py:601`)

|     % |     Size | Samples | Location               |
| ----: | -------: | ------: | ---------------------- |
| 33.3% |    1 MiB |       3 | `black/linegen.py:679` |
| 33.3% |    1 MiB |       2 | `black/linegen.py:714` |
| 33.3% |    1 MiB |       1 | `black/linegen.py:626` |
| <0.1% | 1.39 KiB |       1 | `black/linegen.py:635` |
| <0.1% |    518 B |       1 | `black/linegen.py:631` |

##### `visit_default` (`black/linegen.py:134`)

|      % |  Size | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 3 MiB |       3 | `black/linegen.py:158` |
|  <0.1% | 702 B |       1 | `black/linegen.py:144` |

##### `generate_comments` (`black/comments.py:52`)

|     % |  Size | Samples | Location               |
| ----: | ----: | ------: | ---------------------- |
| 66.7% | 2 MiB |       2 | `black/comments.py:76` |
| 33.3% | 1 MiB |       1 | `black/comments.py:72` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Samples | Location                            |
| -----: | -------: | ------: | ----------------------------------- |
| 100.0% | 2.27 MiB |     352 | `<frozen importlib._bootstrap>:241` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|     % |     Size | Samples | Location                 |
| ----: | -------: | ------: | ------------------------ |
| 96.6% | 2.07 MiB |      95 | `blib2to3/pytree.py:377` |
|  3.2% | 70.3 KiB |      93 | `blib2to3/pytree.py:376` |
|  0.2% | 4.99 KiB |       9 | `blib2to3/pytree.py:379` |

##### `convert` (`blib2to3/pytree.py:486`)

|      % |  Size | Samples | Location                 |
| -----: | ----: | ------: | ------------------------ |
| 100.0% | 2 MiB |       2 | `blib2to3/pytree.py:501` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Samples | Location                      |
| -----: | ----: | ------: | ----------------------------- |
| 100.0% | 2 MiB |       2 | `blib2to3/pgen2/parse.py:394` |

##### `make_grammar` (`blib2to3/pgen2/pgen.py:49`)

|     % |     Size | Samples | Location                    |
| ----: | -------: | ------: | --------------------------- |
| 98.6% |    1 MiB |       1 | `blib2to3/pgen2/pgen.py:56` |
|  0.4% | 4.52 KiB |       1 | `blib2to3/pgen2/pgen.py:70` |
|  0.4% | 4.52 KiB |       1 | `blib2to3/pgen2/pgen.py:58` |
|  0.3% | 3.19 KiB |       1 | `blib2to3/pgen2/pgen.py:57` |
|  0.1% |    1 KiB |       1 | `blib2to3/pgen2/pgen.py:69` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/parser.py:1`)

|     % |     Size | Samples | Location                                                 |
| ----: | -------: | ------: | -------------------------------------------------------- |
| 99.2% |    1 MiB |       1 | `/venv/lib/python3.11/site-packages/click/parser.py:25`  |
|  0.2% | 2.29 KiB |       3 | `/venv/lib/python3.11/site-packages/click/parser.py:224` |
|  0.2% | 1.69 KiB |       2 | `/venv/lib/python3.11/site-packages/click/parser.py:185` |
|  0.2% | 1.69 KiB |       2 | `/venv/lib/python3.11/site-packages/click/parser.py:127` |
|  0.2% | 1.69 KiB |       2 | `/venv/lib/python3.11/site-packages/click/parser.py:216` |

##### `visit` (`black/nodes.py:163`)

|     % |     Size | Samples | Location             |
| ----: | -------: | ------: | -------------------- |
| 99.7% |    1 MiB |       2 | `black/nodes.py:185` |
|  0.3% | 2.68 KiB |       3 | `black/nodes.py:183` |

##### `maybe_empty_lines` (`black/lines.py:560`)

|     % |     Size | Samples | Location             |
| ----: | -------: | ------: | -------------------- |
| 99.9% |    1 MiB |       1 | `black/lines.py:584` |
|  0.1% | 1.11 KiB |       1 | `black/lines.py:571` |

##### `_addtoken` (`blib2to3/pgen2/parse.py:290`)

|      % |  Size | Samples | Location                      |
| -----: | ----: | ------: | ----------------------------- |
| 100.0% | 1 MiB |       1 | `blib2to3/pgen2/parse.py:315` |

##### `contains_uncollapsable_type_comments` (`black/lines.py:276`)

|      % |  Size | Samples | Location             |
| -----: | ----: | ------: | -------------------- |
| 100.0% | 1 MiB |       1 | `black/lines.py:280` |

##### `__init__` (`<string>:2`)

|      % |  Size | Samples | Location     |
| -----: | ----: | ------: | ------------ |
| 100.0% | 1 MiB |       1 | `<string>:7` |

##### `__init__` (`blib2to3/pytree.py:400`)

|      % |  Size | Samples | Location                 |
| -----: | ----: | ------: | ------------------------ |
| 100.0% | 1 MiB |       1 | `blib2to3/pytree.py:425` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |    Size | Samples | Location                                     |
| -----: | ------: | ------: | -------------------------------------------- |
| 100.0% | 311 KiB |     341 | `<frozen importlib._bootstrap_external>:729` |

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

##### `_code_to_timestamp_pyc` (`<frozen importlib._bootstrap_external>:740`)

|      % |    Size | Samples | Location                                     |
| -----: | ------: | ------: | -------------------------------------------- |
| 100.0% | 112 KiB |     108 | `<frozen importlib._bootstrap_external>:746` |

##### `__new__` (`<frozen abc>:105`)

|      % |     Size | Samples | Location           |
| -----: | -------: | ------: | ------------------ |
| 100.0% | 75.7 KiB |      79 | `<frozen abc>:106` |

##### `normalize_string_prefix` (`black/strings.py:143`)

|      % |     Size | Samples | Location               |
| -----: | -------: | ------: | ---------------------- |
| 100.0% | 57.2 KiB |      65 | `black/strings.py:158` |

##### `__init__` (`/venv/lib/python3.11/site-packages/click/core.py:2883`)

|     % |   Size | Samples | Location                                                |
| ----: | -----: | ------: | ------------------------------------------------------- |
| 97.1% | 43 KiB |      29 | `/venv/lib/python3.11/site-packages/click/core.py:3023` |
|  1.6% |  704 B |       1 | `/venv/lib/python3.11/site-packages/click/core.py:2905` |
|  1.4% |  614 B |       1 | `/venv/lib/python3.11/site-packages/click/core.py:2907` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/tags.py:1`)

|     % |     Size | Samples | Location                                                   |
| ----: | -------: | ------: | ---------------------------------------------------------- |
| 89.8% | 37.7 KiB |       3 | `/venv/lib/python3.11/site-packages/packaging/tags.py:118` |
|  3.5% | 1.48 KiB |       1 | `/venv/lib/python3.11/site-packages/packaging/tags.py:322` |
|  2.2% |    960 B |       1 | `/venv/lib/python3.11/site-packages/packaging/tags.py:110` |
|  2.2% |    960 B |       1 | `/venv/lib/python3.11/site-packages/packaging/tags.py:101` |
|  2.2% |    960 B |       1 | `/venv/lib/python3.11/site-packages/packaging/tags.py:93`  |

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

##### `<module>` (`/venv/lib/python3.11/site-packages/click/core.py:1`)

|     % |     Size | Samples | Location                                                |
| ----: | -------: | ------: | ------------------------------------------------------- |
| 30.4% |  7.6 KiB |       4 | `/venv/lib/python3.11/site-packages/click/core.py:204`  |
| 19.2% | 4.79 KiB |       4 | `/venv/lib/python3.11/site-packages/click/core.py:956`  |
| 15.7% | 3.92 KiB |       4 | `/venv/lib/python3.11/site-packages/click/core.py:1587` |
|  9.5% | 2.37 KiB |       3 | `/venv/lib/python3.11/site-packages/click/core.py:2057` |
|  6.8% | 1.69 KiB |       2 | `/venv/lib/python3.11/site-packages/click/core.py:2050` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

|      % |     Size | Samples | Location                          |
| -----: | -------: | ------: | --------------------------------- |
| 100.0% | 24.1 KiB |      27 | `/usr/lib/python3.11/enum.py:554` |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|      % |     Size | Samples | Location                                  |
| -----: | -------: | ------: | ----------------------------------------- |
| 100.0% | 22.6 KiB |      12 | `/usr/lib/python3.11/re/_compiler.py:759` |

##### `<module>` (`/usr/lib/python3.11/tomllib/_parser.py:1`)

|     % |  Size | Samples | Location                                    |
| ----: | ----: | ------: | ------------------------------------------- |
| 20.2% | 4 KiB |       1 | `/usr/lib/python3.11/tomllib/_parser.py:37` |
| 10.1% | 2 KiB |       1 | `/usr/lib/python3.11/tomllib/_parser.py:26` |
| 10.1% | 2 KiB |       1 | `/usr/lib/python3.11/tomllib/_parser.py:22` |
| 10.1% | 2 KiB |       1 | `/usr/lib/python3.11/tomllib/_parser.py:38` |
| 10.1% | 2 KiB |       1 | `/usr/lib/python3.11/tomllib/_parser.py:27` |

##### `__new__` (`/usr/lib/python3.11/typing.py:2891`)

|      % |     Size | Samples | Location                             |
| -----: | -------: | ------: | ------------------------------------ |
| 100.0% | 17.4 KiB |      21 | `/usr/lib/python3.11/typing.py:2909` |

##### `<module>` (`/venv/lib/python3.11/site-packages/mypy_extensions.py:1`)

|     % |     Size | Samples | Location                                                    |
| ----: | -------: | ------: | ----------------------------------------------------------- |
| 11.3% | 1.69 KiB |       2 | `/venv/lib/python3.11/site-packages/mypy_extensions.py:198` |
| 11.3% | 1.69 KiB |       2 | `/venv/lib/python3.11/site-packages/mypy_extensions.py:167` |
| 11.3% | 1.69 KiB |       2 | `/venv/lib/python3.11/site-packages/mypy_extensions.py:212` |
| 11.3% | 1.69 KiB |       2 | `/venv/lib/python3.11/site-packages/mypy_extensions.py:191` |
| 11.3% | 1.69 KiB |       2 | `/venv/lib/python3.11/site-packages/mypy_extensions.py:154` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/exceptions.py:1`)

|     % |     Size | Samples | Location                                                     |
| ----: | -------: | ------: | ------------------------------------------------------------ |
| 18.4% | 2.45 KiB |       3 | `/venv/lib/python3.11/site-packages/click/exceptions.py:114` |
| 11.5% | 1.53 KiB |       2 | `/venv/lib/python3.11/site-packages/click/exceptions.py:366` |
|  7.0% |    960 B |       1 | `/venv/lib/python3.11/site-packages/click/exceptions.py:304` |
|  7.0% |    960 B |       1 | `/venv/lib/python3.11/site-packages/click/exceptions.py:268` |
|  7.0% |    960 B |       1 | `/venv/lib/python3.11/site-packages/click/exceptions.py:232` |

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|      % |   Size | Samples | Location                            |
| -----: | -----: | ------: | ----------------------------------- |
| 100.0% | 12 KiB |       3 | `/usr/lib/python3.11/typing.py:341` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/version.py:1`)

|     % |     Size | Samples | Location                                                      |
| ----: | -------: | ------: | ------------------------------------------------------------- |
| 38.2% | 3.68 KiB |       3 | `/venv/lib/python3.11/site-packages/packaging/version.py:340` |
| 15.5% | 1.49 KiB |       2 | `/venv/lib/python3.11/site-packages/packaging/version.py:124` |
| 15.4% | 1.48 KiB |       1 | `/venv/lib/python3.11/site-packages/packaging/version.py:285` |
| 11.3% | 1.09 KiB |       1 | `/venv/lib/python3.11/site-packages/packaging/version.py:228` |
|  9.8% |    960 B |       1 | `/venv/lib/python3.11/site-packages/packaging/version.py:134` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1655`)

|      % |  Size | Samples | Location                                      |
| -----: | ----: | ------: | --------------------------------------------- |
| 100.0% | 8 KiB |       4 | `<frozen importlib._bootstrap_external>:1667` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|      % |     Size | Samples | Location                                |
| -----: | -------: | ------: | --------------------------------------- |
| 100.0% | 7.97 KiB |       1 | `/usr/lib/python3.11/re/_parser.py:455` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/utils.py:1`)

|     % |     Size | Samples | Location                                                |
| ----: | -------: | ------: | ------------------------------------------------------- |
| 44.8% | 3.17 KiB |       3 | `/venv/lib/python3.11/site-packages/click/utils.py:522` |
| 31.4% | 2.22 KiB |       3 | `/venv/lib/python3.11/site-packages/click/utils.py:207` |
| 23.8% | 1.69 KiB |       2 | `/venv/lib/python3.11/site-packages/click/utils.py:113` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

|      % |     Size | Samples | Location                          |
| -----: | -------: | ------: | --------------------------------- |
| 100.0% | 6.73 KiB |       8 | `/usr/lib/python3.11/enum.py:842` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/util.py:1`)

|     % |     Size | Samples | Location                                                  |
| ----: | -------: | ------: | --------------------------------------------------------- |
| 22.9% | 1.48 KiB |       1 | `/venv/lib/python3.11/site-packages/pathspec/util.py:254` |
| 16.9% | 1.09 KiB |       1 | `/venv/lib/python3.11/site-packages/pathspec/util.py:765` |
| 16.3% | 1.05 KiB |       1 | `/venv/lib/python3.11/site-packages/pathspec/util.py:710` |
| 15.1% |   1000 B |       1 | `/venv/lib/python3.11/site-packages/pathspec/util.py:741` |
| 14.5% |    960 B |       1 | `/venv/lib/python3.11/site-packages/pathspec/util.py:651` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/_ranges.py:1`)

|     % |     Size | Samples | Location                                                      |
| ----: | -------: | ------: | ------------------------------------------------------------- |
| 23.8% | 1.48 KiB |       1 | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:681` |
| 23.0% | 1.43 KiB |       1 | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:44`  |
| 19.4% | 1.21 KiB |       1 | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:63`  |
| 16.9% | 1.05 KiB |       1 | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:179` |
| 16.9% | 1.05 KiB |       1 | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:236` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/_compat.py:1`)

|     % |     Size | Samples | Location                                                  |
| ----: | -------: | ------: | --------------------------------------------------------- |
| 29.1% | 1.69 KiB |       2 | `/venv/lib/python3.11/site-packages/click/_compat.py:452` |
| 29.1% | 1.69 KiB |       2 | `/venv/lib/python3.11/site-packages/click/_compat.py:82`  |
| 25.6% | 1.48 KiB |       1 | `/venv/lib/python3.11/site-packages/click/_compat.py:344` |
| 16.2% |    960 B |       1 | `/venv/lib/python3.11/site-packages/click/_compat.py:56`  |

##### `namedtuple` (`/usr/lib/python3.11/collections/__init__.py:348`)

|      % |     Size | Samples | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 5.63 KiB |       6 | `/usr/lib/python3.11/collections/__init__.py:501` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|     % |     Size | Samples | Location                                |
| ----: | -------: | ------: | --------------------------------------- |
| 43.4% | 2.43 KiB |       1 | `/usr/lib/python3.11/re/_parser.py:539` |
| 33.9% |  1.9 KiB |       1 | `/usr/lib/python3.11/re/_parser.py:568` |
| 22.7% | 1.28 KiB |       1 | `/usr/lib/python3.11/re/_parser.py:838` |

##### `_code` (`/usr/lib/python3.11/re/_compiler.py:571`)

|     % |     Size | Samples | Location                                  |
| ----: | -------: | ------: | ----------------------------------------- |
| 81.6% | 4.34 KiB |       1 | `/usr/lib/python3.11/re/_compiler.py:580` |
| 18.4% |   1002 B |       1 | `/usr/lib/python3.11/re/_compiler.py:577` |

##### `<module>` (`/usr/lib/python3.11/pkgutil.py:1`)

|     % |     Size | Samples | Location                             |
| ----: | -------: | ------: | ------------------------------------ |
| 35.7% | 1.69 KiB |       2 | `/usr/lib/python3.11/pkgutil.py:269` |
| 35.7% | 1.69 KiB |       2 | `/usr/lib/python3.11/pkgutil.py:194` |
| 15.9% |    768 B |       1 | `/usr/lib/python3.11/pkgutil.py:137` |
| 12.8% |    620 B |       1 | `/usr/lib/python3.11/pkgutil.py:184` |

##### `Specifier` (`/venv/lib/python3.11/site-packages/packaging/specifiers.py:220`)

|      % |     Size | Samples | Location                                                         |
| -----: | -------: | ------: | ---------------------------------------------------------------- |
| 100.0% | 3.82 KiB |       1 | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:340` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |     Size | Samples | Location                                                    |
| -----: | -------: | ------: | ----------------------------------------------------------- |
| 100.0% | 3.79 KiB |       3 | `/venv/lib/python3.11/site-packages/click/decorators.py:34` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/pattern.py:1`)

|     % |     Size | Samples | Location                                                     |
| ----: | -------: | ------: | ------------------------------------------------------------ |
| 46.4% | 1.73 KiB |       2 | `/venv/lib/python3.11/site-packages/pathspec/pattern.py:29`  |
| 27.3% | 1.02 KiB |       1 | `/venv/lib/python3.11/site-packages/pathspec/pattern.py:90`  |
| 26.3% |   1000 B |       1 | `/venv/lib/python3.11/site-packages/pathspec/pattern.py:245` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/utils.py:1`)

|     % |  Size | Samples | Location                                                   |
| ----: | ----: | ------: | ---------------------------------------------------------- |
| 26.3% | 960 B |       1 | `/venv/lib/python3.11/site-packages/packaging/utils.py:62` |
| 26.3% | 960 B |       1 | `/venv/lib/python3.11/site-packages/packaging/utils.py:46` |
| 26.3% | 960 B |       1 | `/venv/lib/python3.11/site-packages/packaging/utils.py:54` |
| 21.1% | 768 B |       1 | `/venv/lib/python3.11/site-packages/packaging/utils.py:27` |

##### `handle_parse_result` (`/venv/lib/python3.11/site-packages/click/core.py:2663`)

|     % |    Size | Samples | Location                                                |
| ----: | ------: | ------: | ------------------------------------------------------- |
| 38.5% | 1.3 KiB |       2 | `/venv/lib/python3.11/site-packages/click/core.py:2686` |
| 22.3% |   768 B |       1 | `/venv/lib/python3.11/site-packages/click/core.py:2739` |
| 22.3% |   768 B |       1 | `/venv/lib/python3.11/site-packages/click/core.py:2740` |
| 17.0% |   586 B |       1 | `/venv/lib/python3.11/site-packages/click/core.py:2711` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/__init__.py:1`)

|      % |     Size | Samples | Location                                                  |
| -----: | -------: | ------: | --------------------------------------------------------- |
| 100.0% | 3.19 KiB |       1 | `/venv/lib/python3.11/site-packages/click/__init__.py:74` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/pathspec.py:1`)

|     % |     Size | Samples | Location                                                     |
| ----: | -------: | ------: | ------------------------------------------------------------ |
| 76.5% | 2.44 KiB |       3 | `/venv/lib/python3.11/site-packages/pathspec/pathspec.py:55` |
| 23.5% |    768 B |       1 | `/venv/lib/python3.11/site-packages/pathspec/pathspec.py:14` |

##### `wrap` (`/usr/lib/python3.11/dataclasses.py:1209`)

|      % |     Size | Samples | Location                                  |
| -----: | -------: | ------: | ----------------------------------------- |
| 100.0% | 2.85 KiB |       1 | `/usr/lib/python3.11/dataclasses.py:1210` |

##### `_process_class` (`/usr/lib/python3.11/dataclasses.py:884`)

|     % |     Size | Samples | Location                                  |
| ----: | -------: | ------: | ----------------------------------------- |
| 41.3% | 1.18 KiB |       1 | `/usr/lib/python3.11/dataclasses.py:958`  |
| 21.0% |    612 B |       1 | `/usr/lib/python3.11/dataclasses.py:1027` |
| 19.9% |    580 B |       1 | `/usr/lib/python3.11/dataclasses.py:1096` |
| 17.8% |    518 B |       1 | `/usr/lib/python3.11/dataclasses.py:947`  |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/patterns/gitignore/base.py:1`)

|     % |  Size | Samples | Location                                                                     |
| ----: | ----: | ------: | ---------------------------------------------------------------------------- |
| 33.3% | 960 B |       1 | `/venv/lib/python3.11/site-packages/pathspec/patterns/gitignore/base.py:22`  |
| 33.3% | 960 B |       1 | `/venv/lib/python3.11/site-packages/pathspec/patterns/gitignore/base.py:205` |
| 33.3% | 960 B |       1 | `/venv/lib/python3.11/site-packages/pathspec/patterns/gitignore/base.py:197` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/types.py:1`)

|     % |     Size | Samples | Location                                                |
| ----: | -------: | ------: | ------------------------------------------------------- |
| 53.7% | 1.48 KiB |       1 | `/venv/lib/python3.11/site-packages/click/types.py:464` |
| 46.3% | 1.28 KiB |       1 | `/venv/lib/python3.11/site-packages/click/types.py:37`  |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `mark` (`black/brackets.py:70`)

|     % |     Size | Samples | Caller                           | Location                |
| ----: | -------: | ------: | -------------------------------- | ----------------------- |
| 94.5% | 17.2 MiB |  20,789 | `append`                         | `black/lines.py:63`     |
|  5.5% |    1 MiB |       1 | `max_delimiter_priority_in_atom` | `black/brackets.py:328` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |   Size | Samples | Caller                  | Location               |
| -----: | -----: | ------: | ----------------------- | ---------------------- |
| 100.0% | 16 MiB |   1,014 | `_parse_single_version` | `black/parsing.py:117` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Samples | Caller    | Location                 |
| ----: | ----: | ------: | --------- | ------------------------ |
| 66.7% | 4 MiB |       4 | `changed` | `blib2to3/pytree.py:171` |
| 33.3% | 2 MiB |       2 | `prefix`  | `blib2to3/pytree.py:480` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Samples | Caller    | Location                 |
| -----: | ----: | ------: | --------- | ------------------------ |
| 100.0% | 5 MiB |       5 | `convert` | `blib2to3/pytree.py:486` |

##### `transform_line` (`black/linegen.py:601`)

|      % |  Size | Samples | Caller             | Location                 |
| -----: | ----: | ------: | ------------------ | ------------------------ |
| 100.0% | 3 MiB |       8 | `_format_str_once` | `black/__init__.py:1236` |

##### `visit_default` (`black/linegen.py:134`)

|      % |  Size | Samples | Caller         | Location               |
| -----: | ----: | ------: | -------------- | ---------------------- |
| 100.0% | 3 MiB |       3 | `visit`        | `black/nodes.py:163`   |
|  <0.1% | 702 B |       1 | `visit_STRING` | `black/linegen.py:413` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Samples | Caller          | Location               |
| -----: | ----: | ------: | --------------- | ---------------------- |
| 100.0% | 3 MiB |       3 | `visit_default` | `black/linegen.py:134` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Samples | Caller           | Location                                     |
| -----: | -------: | ------: | ---------------- | -------------------------------------------- |
| 100.0% | 2.27 MiB |     352 | `source_to_code` | `<frozen importlib._bootstrap_external>:999` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|      % |     Size | Samples | Caller         | Location                 |
| -----: | -------: | ------: | -------------- | ------------------------ |
| 100.0% | 2.14 MiB |     197 | `prev_sibling` | `blib2to3/pytree.py:207` |

##### `convert` (`blib2to3/pytree.py:486`)

|      % |  Size | Samples | Caller | Location                      |
| -----: | ----: | ------: | ------ | ----------------------------- |
| 100.0% | 2 MiB |       2 | `pop`  | `blib2to3/pgen2/parse.py:398` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Samples | Caller      | Location                      |
| -----: | ----: | ------: | ----------- | ----------------------------- |
| 100.0% | 2 MiB |       2 | `_addtoken` | `blib2to3/pgen2/parse.py:290` |

##### `make_grammar` (`blib2to3/pgen2/pgen.py:49`)

|      % |     Size | Samples | Caller             | Location                     |
| -----: | -------: | ------: | ------------------ | ---------------------------- |
| 100.0% | 1.01 MiB |       6 | `generate_grammar` | `blib2to3/pgen2/pgen.py:426` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/parser.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 1.01 MiB |      11 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `visit` (`black/nodes.py:163`)

|     % |  Size | Samples | Caller             | Location                 |
| ----: | ----: | ------: | ------------------ | ------------------------ |
| 99.9% | 1 MiB |       4 | `visit_default`    | `black/nodes.py:187`     |
|  0.1% | 690 B |       1 | `_format_str_once` | `black/__init__.py:1236` |

##### `maybe_empty_lines` (`black/lines.py:560`)

|      % |  Size | Samples | Caller             | Location                 |
| -----: | ----: | ------: | ------------------ | ------------------------ |
| 100.0% | 1 MiB |       2 | `_format_str_once` | `black/__init__.py:1236` |

##### `_addtoken` (`blib2to3/pgen2/parse.py:290`)

|      % |  Size | Samples | Caller     | Location                      |
| -----: | ----: | ------: | ---------- | ----------------------------- |
| 100.0% | 1 MiB |       1 | `addtoken` | `blib2to3/pgen2/parse.py:242` |

##### `contains_uncollapsable_type_comments` (`black/lines.py:276`)

|      % |  Size | Samples | Caller           | Location               |
| -----: | ----: | ------: | ---------------- | ---------------------- |
| 100.0% | 1 MiB |       1 | `transform_line` | `black/linegen.py:601` |

##### `__init__` (`<string>:2`)

|      % |  Size | Samples | Caller | Location               |
| -----: | ----: | ------: | ------ | ---------------------- |
| 100.0% | 1 MiB |       1 | `line` | `black/linegen.py:109` |

##### `__init__` (`blib2to3/pytree.py:400`)

|      % |  Size | Samples | Caller    | Location                 |
| -----: | ----: | ------: | --------- | ------------------------ |
| 100.0% | 1 MiB |       1 | `convert` | `blib2to3/pytree.py:486` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |    Size | Samples | Caller     | Location                                      |
| -----: | ------: | ------: | ---------- | --------------------------------------------- |
| 100.0% | 311 KiB |     341 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `_format_str_once` (`black/__init__.py:1236`)

|      % |    Size | Samples | Caller       | Location                 |
| -----: | ------: | ------: | ------------ | ------------------------ |
| 100.0% | 225 KiB |       5 | `format_str` | `black/__init__.py:1189` |

##### `decode` (`<frozen codecs>:319`)

|      % |    Size | Samples | Caller         | Location                 |
| -----: | ------: | ------: | -------------- | ------------------------ |
| 100.0% | 222 KiB |       1 | `decode_bytes` | `black/__init__.py:1290` |

##### `_code_to_timestamp_pyc` (`<frozen importlib._bootstrap_external>:740`)

|      % |    Size | Samples | Caller     | Location                                      |
| -----: | ------: | ------: | ---------- | --------------------------------------------- |
| 100.0% | 112 KiB |     108 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `__new__` (`<frozen abc>:105`)

|     % |     Size | Samples | Caller     | Location                                                       |
| ----: | -------: | ------: | ---------- | -------------------------------------------------------------- |
| 50.5% | 38.2 KiB |      45 | `<module>` | `/venv/lib/python3.11/site-packages/click/types.py:1`          |
| 23.1% | 17.5 KiB |      18 | `<module>` | `black/trans.py:1`                                             |
| 18.3% | 13.9 KiB |       9 | `<module>` | `/venv/lib/python3.11/site-packages/click/core.py:1`           |
|  8.0% | 6.07 KiB |       7 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:1` |

##### `normalize_string_prefix` (`black/strings.py:143`)

|      % |     Size | Samples | Caller         | Location               |
| -----: | -------: | ------: | -------------- | ---------------------- |
| 100.0% | 57.2 KiB |      65 | `visit_STRING` | `black/linegen.py:413` |

##### `__init__` (`/venv/lib/python3.11/site-packages/click/core.py:2883`)

|      % |     Size | Samples | Caller      | Location                                                     |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------------ |
| 100.0% | 44.3 KiB |      31 | `decorator` | `/venv/lib/python3.11/site-packages/click/decorators.py:373` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/tags.py:1`)

|      % |   Size | Samples | Caller                      | Location                            |
| -----: | -----: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 42 KiB |       7 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `copy` (`blib2to3/pgen2/grammar.py:131`)

|      % |     Size | Samples | Caller       | Location                 |
| -----: | -------: | ------: | ------------ | ------------------------ |
| 100.0% | 41.5 KiB |      16 | `initialize` | `blib2to3/pygram.py:165` |

##### `classify` (`blib2to3/pgen2/parse.py:336`)

|      % |   Size | Samples | Caller     | Location                      |
| -----: | -----: | ------: | ---------- | ----------------------------- |
| 100.0% | 32 KiB |       1 | `addtoken` | `blib2to3/pgen2/parse.py:242` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/core.py:1`)

|      % |   Size | Samples | Caller                      | Location                            |
| -----: | -----: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 25 KiB |      22 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

|     % |     Size | Samples | Caller     | Location                                                     |
| ----: | -------: | ------: | ---------- | ------------------------------------------------------------ |
| 31.7% | 7.64 KiB |       9 | `<module>` | `black/mode.py:1`                                            |
| 16.2% | 3.89 KiB |       4 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/_elffile.py:1` |
| 13.7% |  3.3 KiB |       3 | `<module>` | `/venv/lib/python3.11/site-packages/click/_utils.py:1`       |
| 10.1% | 2.44 KiB |       3 | `<module>` | `black/__init__.py:1`                                        |
|  7.2% | 1.74 KiB |       2 | `<module>` | `/venv/lib/python3.11/site-packages/click/core.py:1`         |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|      % |     Size | Samples | Caller     | Location                                 |
| -----: | -------: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 22.6 KiB |      12 | `_compile` | `/usr/lib/python3.11/re/__init__.py:272` |

##### `<module>` (`/usr/lib/python3.11/tomllib/_parser.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 19.8 KiB |      12 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `__new__` (`/usr/lib/python3.11/typing.py:2891`)

|     % |     Size | Samples | Caller     | Location                                                    |
| ----: | -------: | ------: | ---------- | ----------------------------------------------------------- |
| 90.3% | 15.7 KiB |      19 | `<module>` | `/venv/lib/python3.11/site-packages/click/types.py:1`       |
|  9.7% | 1.69 KiB |       2 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/version.py:1` |

##### `<module>` (`/venv/lib/python3.11/site-packages/mypy_extensions.py:1`)

|      % |   Size | Samples | Caller                      | Location                            |
| -----: | -----: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 15 KiB |      18 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/exceptions.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 13.4 KiB |      15 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|     % |     Size | Samples | Caller        | Location                                              |
| ----: | -------: | ------: | ------------- | ----------------------------------------------------- |
| 75.3% | 9.02 KiB |       1 | `Line`        | `black/lines.py:49`                                   |
| 17.9% | 2.15 KiB |       1 | `__getitem__` | `/usr/lib/python3.11/typing.py:467`                   |
|  6.7% |    826 B |       1 | `<module>`    | `/venv/lib/python3.11/site-packages/click/types.py:1` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/version.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 9.61 KiB |       9 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1655`)

|      % |  Size | Samples | Caller      | Location                                      |
| -----: | ----: | ------: | ----------- | --------------------------------------------- |
| 100.0% | 8 KiB |       4 | `find_spec` | `<frozen importlib._bootstrap_external>:1604` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|      % |     Size | Samples | Caller  | Location                                |
| -----: | -------: | ------: | ------- | --------------------------------------- |
| 100.0% | 7.97 KiB |       1 | `parse` | `/usr/lib/python3.11/re/_parser.py:970` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/utils.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 7.08 KiB |       8 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

|     % |     Size | Samples | Caller         | Location                          |
| ----: | -------: | ------: | -------------- | --------------------------------- |
| 66.6% | 4.48 KiB |       5 | `__set_name__` | `/usr/lib/python3.11/enum.py:237` |
| 33.4% | 2.25 KiB |       3 | `__new__`      | `/usr/lib/python3.11/enum.py:488` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/util.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 6.48 KiB |       6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/_ranges.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 6.24 KiB |       5 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/_compat.py:1`)

|      % |    Size | Samples | Caller                      | Location                            |
| -----: | ------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 5.8 KiB |       6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `namedtuple` (`/usr/lib/python3.11/collections/__init__.py:348`)

|     % |     Size | Samples | Caller          | Location                             |
| ----: | -------: | ------: | --------------- | ------------------------------------ |
| 83.3% | 4.69 KiB |       5 | `_make_nmtuple` | `/usr/lib/python3.11/typing.py:2795` |
| 16.7% |    960 B |       1 | `<module>`      | `/usr/lib/python3.11/pkgutil.py:1`   |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|      % |     Size | Samples | Caller       | Location                                |
| -----: | -------: | ------: | ------------ | --------------------------------------- |
| 100.0% | 5.61 KiB |       3 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py:447` |

##### `_code` (`/usr/lib/python3.11/re/_compiler.py:571`)

|      % |     Size | Samples | Caller    | Location                                  |
| -----: | -------: | ------: | --------- | ----------------------------------------- |
| 100.0% | 5.32 KiB |       2 | `compile` | `/usr/lib/python3.11/re/_compiler.py:738` |

##### `<module>` (`/usr/lib/python3.11/pkgutil.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 4.73 KiB |       6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `Specifier` (`/venv/lib/python3.11/site-packages/packaging/specifiers.py:220`)

|      % |     Size | Samples | Caller     | Location                                                       |
| -----: | -------: | ------: | ---------- | -------------------------------------------------------------- |
| 100.0% | 3.82 KiB |       1 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:1` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |     Size | Samples | Caller   | Location                                               |
| -----: | -------: | ------: | -------- | ------------------------------------------------------ |
| 100.0% | 3.79 KiB |       3 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:853` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/pattern.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.72 KiB |       4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/utils.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.56 KiB |       4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `handle_parse_result` (`/venv/lib/python3.11/site-packages/click/core.py:2663`)

|      % |     Size | Samples | Caller       | Location                                                |
| -----: | -------: | ------: | ------------ | ------------------------------------------------------- |
| 100.0% | 3.37 KiB |       5 | `parse_args` | `/venv/lib/python3.11/site-packages/click/core.py:1303` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/__init__.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.19 KiB |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/pathspec.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.19 KiB |       4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `wrap` (`/usr/lib/python3.11/dataclasses.py:1209`)

|      % |     Size | Samples | Caller     | Location                                                   |
| -----: | -------: | ------: | ---------- | ---------------------------------------------------------- |
| 100.0% | 2.85 KiB |       1 | `<module>` | `/venv/lib/python3.11/site-packages/pathspec/pattern.py:1` |

##### `_process_class` (`/usr/lib/python3.11/dataclasses.py:884`)

|      % |     Size | Samples | Caller | Location                                  |
| -----: | -------: | ------: | ------ | ----------------------------------------- |
| 100.0% | 2.85 KiB |       4 | `wrap` | `/usr/lib/python3.11/dataclasses.py:1209` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/patterns/gitignore/base.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 2.81 KiB |       3 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/types.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 2.76 KiB |       2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

### Total size

Functions ranked by total bytes held at peak memory in the function and all its callees.

|      % |     Size | Samples | Function               | Location                                                       |
| -----: | -------: | ------: | ---------------------- | -------------------------------------------------------------- |
| 100.0% | 72.4 MiB |  23,696 | `_run_tracker`         | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40` |
| 100.0% | 72.4 MiB |  23,695 | `run_module`           | `<frozen runpy>:201`                                           |
|  92.5% |   67 MiB |  22,200 | `__call__`             | `/venv/lib/python3.11/site-packages/click/core.py:1567`        |
|  92.5% |   67 MiB |  22,200 | `patched_main`         | `black/__init__.py:1594`                                       |
|  92.5% |   67 MiB |  22,200 | `<module>`             | `black/__main__.py:1`                                          |
|  92.5% |   67 MiB |  22,200 | `_run_code`            | `<frozen runpy>:65`                                            |
|  92.5% |   67 MiB |  22,200 | `_run_module_code`     | `<frozen runpy>:91`                                            |
|  92.5% |   67 MiB |  22,199 | `main`                 | `/venv/lib/python3.11/site-packages/click/core.py:1422`        |
|  92.4% | 66.9 MiB |  22,180 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:1339`        |
|  92.4% | 66.9 MiB |  22,177 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:853`         |
|  92.4% | 66.9 MiB |  22,175 | `new_func`             | `/venv/lib/python3.11/site-packages/click/decorators.py:33`    |
|  92.4% | 66.9 MiB |  22,172 | `main`                 | `black/__init__.py:244`                                        |
|  92.4% | 66.9 MiB |  22,168 | `reformat_one`         | `black/__init__.py:860`                                        |
|  92.4% | 66.9 MiB |  22,165 | `format_file_in_place` | `black/__init__.py:917`                                        |
|  92.1% | 66.7 MiB |  22,162 | `format_file_contents` | `black/__init__.py:1054`                                       |
|  70.1% | 50.8 MiB |  21,147 | `format_str`           | `black/__init__.py:1189`                                       |
|  70.1% | 50.8 MiB |  21,146 | `_format_str_once`     | `black/__init__.py:1236`                                       |
|  47.6% | 34.4 MiB |  21,085 | `visit`                | `black/nodes.py:163`                                           |
|  47.6% | 34.4 MiB |  21,083 | `visit_default`        | `black/linegen.py:134`                                         |
|  47.6% | 34.4 MiB |  21,083 | `visit_default`        | `black/nodes.py:187`                                           |

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
| 47.6% | 34.4 MiB |  21,085 | `visit`                           | `black/nodes.py:163`     |
| 47.6% | 34.4 MiB |  21,083 | `visit_default`                   | `black/linegen.py:134`   |
| 47.6% | 34.4 MiB |  21,083 | `visit_default`                   | `black/nodes.py:187`     |
| 47.2% | 34.2 MiB |  20,712 | `visit_stmt`                      | `black/linegen.py:199`   |
| 46.7% | 33.8 MiB |  20,271 | `visit_funcdef`                   | `black/linegen.py:254`   |
| 46.6% | 33.7 MiB |  20,145 | `visit_suite`                     | `black/linegen.py:288`   |
| 32.9% | 23.8 MiB |  13,402 | `visit_simple_stmt`               | `black/linegen.py:295`   |
| 26.6% | 19.3 MiB |  20,884 | `append`                          | `black/lines.py:63`      |
| 25.2% | 18.2 MiB |  20,790 | `mark`                            | `black/brackets.py:70`   |
| 23.3% | 16.9 MiB |  10,808 | `visit_power`                     | `black/linegen.py:341`   |
| 22.0% |   16 MiB |   1,015 | `check_stability_and_equivalence` | `black/__init__.py:1037` |
| 22.0% |   16 MiB |   1,014 | `_parse_single_version`           | `black/parsing.py:117`   |

##### Standard library

|      % |     Size | Samples | Function                    | Location                                      |
| -----: | -------: | ------: | --------------------------- | --------------------------------------------- |
| 100.0% | 72.4 MiB |  23,695 | `run_module`                | `<frozen runpy>:201`                          |
|  92.5% |   67 MiB |  22,200 | `_run_code`                 | `<frozen runpy>:65`                           |
|  92.5% |   67 MiB |  22,200 | `_run_module_code`          | `<frozen runpy>:91`                           |
|  22.0% |   16 MiB |   1,014 | `parse`                     | `/usr/lib/python3.11/ast.py:33`               |
|   7.5% | 5.46 MiB |   1,494 | `_get_module_details`       | `<frozen runpy>:105`                          |
|   7.5% | 5.45 MiB |   1,487 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`          |
|   7.5% | 5.45 MiB |   1,485 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`          |
|   7.5% | 5.45 MiB |   1,484 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`           |
|   7.5% | 5.45 MiB |   1,482 | `exec_module`               | `<frozen importlib._bootstrap_external>:934`  |
|   7.5% | 5.43 MiB |   1,470 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|   3.7% | 2.69 MiB |     802 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |
|   3.1% | 2.27 MiB |     352 | `source_to_code`            | `<frozen importlib._bootstrap_external>:999`  |
|   0.4% |  333 KiB |     341 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`          |
|   0.4% |  311 KiB |     341 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`  |
|   0.3% |  222 KiB |       1 | `decode`                    | `<frozen codecs>:319`                         |
|   0.2% |  112 KiB |     108 | `_code_to_timestamp_pyc`    | `<frozen importlib._bootstrap_external>:740`  |
|   0.1% | 75.7 KiB |      79 | `__new__`                   | `<frozen abc>:105`                            |
|   0.1% | 47.8 KiB |      25 | `compile`                   | `/usr/lib/python3.11/re/__init__.py:225`      |
|   0.1% | 47.1 KiB |      24 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py:272`      |
|   0.1% | 46.5 KiB |      23 | `compile`                   | `/usr/lib/python3.11/re/_compiler.py:738`     |

##### Third-party

|      % |     Size | Samples | Function       | Location                                                                         |
| -----: | -------: | ------: | -------------- | -------------------------------------------------------------------------------- |
| 100.0% | 72.4 MiB |  23,696 | `_run_tracker` | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40`                   |
|  92.5% |   67 MiB |  22,200 | `__call__`     | `/venv/lib/python3.11/site-packages/click/core.py:1567`                          |
|  92.5% |   67 MiB |  22,199 | `main`         | `/venv/lib/python3.11/site-packages/click/core.py:1422`                          |
|  92.4% | 66.9 MiB |  22,180 | `invoke`       | `/venv/lib/python3.11/site-packages/click/core.py:1339`                          |
|  92.4% | 66.9 MiB |  22,177 | `invoke`       | `/venv/lib/python3.11/site-packages/click/core.py:853`                           |
|  92.4% | 66.9 MiB |  22,175 | `new_func`     | `/venv/lib/python3.11/site-packages/click/decorators.py:33`                      |
|   1.8% | 1.31 MiB |     304 | `<module>`     | `/venv/lib/python3.11/site-packages/click/__init__.py:1`                         |
|   1.7% | 1.23 MiB |     233 | `<module>`     | `/venv/lib/python3.11/site-packages/click/core.py:1`                             |
|   1.4% | 1.02 MiB |      24 | `<module>`     | `/venv/lib/python3.11/site-packages/click/formatting.py:1`                       |
|   1.4% | 1.01 MiB |      11 | `<module>`     | `/venv/lib/python3.11/site-packages/click/parser.py:1`                           |
|   0.2% |  173 KiB |     141 | `<module>`     | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:1`                   |
|   0.2% |  125 KiB |     127 | `<module>`     | `/venv/lib/python3.11/site-packages/click/types.py:1`                            |
|   0.1% | 99.6 KiB |      72 | `<module>`     | `/venv/lib/python3.11/site-packages/packaging/utils.py:1`                        |
|   0.1% | 93.8 KiB |     119 | `<module>`     | `/venv/lib/python3.11/site-packages/pathspec/__init__.py:1`                      |
|   0.1% | 91.5 KiB |     115 | `<module>`     | `/venv/lib/python3.11/site-packages/pathspec/gitignore.py:1`                     |
|   0.1% | 74.5 KiB |      43 | `<module>`     | `/venv/lib/python3.11/site-packages/packaging/tags.py:1`                         |
|   0.1% | 65.5 KiB |      84 | `<module>`     | `/venv/lib/python3.11/site-packages/pathspec/_backends/agg.py:1`                 |
|   0.1% | 47.3 KiB |      33 | `decorator`    | `/venv/lib/python3.11/site-packages/click/decorators.py:373`                     |
|   0.1% | 46.9 KiB |      59 | `<module>`     | `/venv/lib/python3.11/site-packages/pathspec/_backends/hyperscan/gitignore.py:1` |
|   0.1% | 45.5 KiB |      32 | `__init__`     | `/venv/lib/python3.11/site-packages/click/core.py:2883`                          |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|      % |     Size | Samples | Callee       | Location             |
| -----: | -------: | ------: | ------------ | -------------------- |
| 100.0% | 72.4 MiB |  23,695 | `run_module` | `<frozen runpy>:201` |

##### `run_module` (`<frozen runpy>:201`)

|     % |     Size | Samples | Callee                | Location             |
| ----: | -------: | ------: | --------------------- | -------------------- |
| 92.5% |   67 MiB |  22,200 | `_run_module_code`    | `<frozen runpy>:91`  |
|  7.5% | 5.46 MiB |   1,494 | `_get_module_details` | `<frozen runpy>:105` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`)

|      % |   Size | Samples | Callee | Location                                                |
| -----: | -----: | ------: | ------ | ------------------------------------------------------- |
| 100.0% | 67 MiB |  22,199 | `main` | `/venv/lib/python3.11/site-packages/click/core.py:1422` |

##### `patched_main` (`black/__init__.py:1594`)

|      % |   Size | Samples | Callee     | Location                                                |
| -----: | -----: | ------: | ---------- | ------------------------------------------------------- |
| 100.0% | 67 MiB |  22,200 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py:1567` |

##### `<module>` (`black/__main__.py:1`)

|      % |   Size | Samples | Callee         | Location                 |
| -----: | -----: | ------: | -------------- | ------------------------ |
| 100.0% | 67 MiB |  22,200 | `patched_main` | `black/__init__.py:1594` |

##### `_run_code` (`<frozen runpy>:65`)

|      % |   Size | Samples | Callee     | Location              |
| -----: | -----: | ------: | ---------- | --------------------- |
| 100.0% | 67 MiB |  22,200 | `<module>` | `black/__main__.py:1` |

##### `_run_module_code` (`<frozen runpy>:91`)

|      % |   Size | Samples | Callee      | Location            |
| -----: | -----: | ------: | ----------- | ------------------- |
| 100.0% | 67 MiB |  22,200 | `_run_code` | `<frozen runpy>:65` |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py:1422`)

|      % |     Size | Samples | Callee         | Location                                                |
| -----: | -------: | ------: | -------------- | ------------------------------------------------------- |
| 100.0% | 66.9 MiB |  22,180 | `invoke`       | `/venv/lib/python3.11/site-packages/click/core.py:1339` |
|  <0.1% | 14.1 KiB |      17 | `make_context` | `/venv/lib/python3.11/site-packages/click/core.py:1266` |
|  <0.1% |     32 B |       1 | `__enter__`    | `/venv/lib/python3.11/site-packages/click/core.py:545`  |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:1339`)

|      % |     Size | Samples | Callee   | Location                                               |
| -----: | -------: | ------: | -------- | ------------------------------------------------------ |
| 100.0% | 66.9 MiB |  22,177 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:853` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`)

|      % |     Size | Samples | Callee     | Location                                                    |
| -----: | -------: | ------: | ---------- | ----------------------------------------------------------- |
| 100.0% | 66.9 MiB |  22,175 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |     Size | Samples | Callee | Location                |
| -----: | -------: | ------: | ------ | ----------------------- |
| 100.0% | 66.9 MiB |  22,172 | `main` | `black/__init__.py:244` |

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
| 67.9% | 34.4 MiB |  21,085 | `visit`             | `black/nodes.py:163`    |
| 21.8% |   11 MiB |      30 | `lib2to3_parse`     | `black/parsing.py:55`   |
|  7.9% | 4.01 MiB |      18 | `transform_line`    | `black/linegen.py:601`  |
|  2.0% |    1 MiB |       3 | `maybe_empty_lines` | `black/lines.py:560`    |
| <0.1% | 19.9 KiB |       3 | `normalize_fmt_off` | `black/comments.py:168` |

##### `visit` (`black/nodes.py:163`)

|      % |     Size | Samples | Callee              | Location               |
| -----: | -------: | ------: | ------------------- | ---------------------- |
| 100.0% | 34.4 MiB |  21,083 | `visit_default`     | `black/linegen.py:134` |
|  99.2% | 34.2 MiB |  20,712 | `visit_stmt`        | `black/linegen.py:199` |
|  98.2% | 33.8 MiB |  20,271 | `visit_funcdef`     | `black/linegen.py:254` |
|  97.9% | 33.7 MiB |  20,145 | `visit_suite`       | `black/linegen.py:288` |
|  69.2% | 23.8 MiB |  13,402 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Samples | Callee              | Location               |
| -----: | -------: | ------: | ------------------- | ---------------------- |
| 100.0% | 34.4 MiB |  21,083 | `visit_default`     | `black/nodes.py:187`   |
|  56.0% | 19.3 MiB |  20,884 | `append`            | `black/lines.py:63`    |
|  20.3% |    7 MiB |       7 | `generate_comments` | `black/comments.py:52` |

##### `visit_default` (`black/nodes.py:187`)

|      % |     Size | Samples | Callee  | Location             |
| -----: | -------: | ------: | ------- | -------------------- |
| 100.0% | 34.4 MiB |  21,083 | `visit` | `black/nodes.py:163` |

##### `visit_stmt` (`black/linegen.py:199`)

|      % |     Size | Samples | Callee                       | Location                |
| -----: | -------: | ------: | ---------------------------- | ----------------------- |
| 100.0% | 34.2 MiB |  20,710 | `visit`                      | `black/nodes.py:163`    |
|   8.8% |    3 MiB |       4 | `normalize_invisible_parens` | `black/linegen.py:1328` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Samples | Callee  | Location             |
| -----: | -------: | ------: | ------- | -------------------- |
| 100.0% | 33.8 MiB |  20,271 | `visit` | `black/nodes.py:163` |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Samples | Callee          | Location               |
| -----: | -------: | ------: | --------------- | ---------------------- |
| 100.0% | 33.7 MiB |  20,145 | `visit_default` | `black/linegen.py:134` |

##### `visit_simple_stmt` (`black/linegen.py:295`)

|      % |     Size | Samples | Callee          | Location               |
| -----: | -------: | ------: | --------------- | ---------------------- |
| 100.0% | 23.8 MiB |  13,402 | `visit_default` | `black/linegen.py:134` |

##### `append` (`black/lines.py:63`)

|     % |     Size | Samples | Callee       | Location               |
| ----: | -------: | ------: | ------------ | ---------------------- |
| 89.3% | 17.2 MiB |  20,789 | `mark`       | `black/brackets.py:70` |
| 10.7% | 2.05 MiB |      91 | `whitespace` | `black/nodes.py:194`   |

##### `visit_power` (`black/linegen.py:341`)

|      % |     Size | Samples | Callee          | Location               |
| -----: | -------: | ------: | --------------- | ---------------------- |
| 100.0% | 16.9 MiB |  10,807 | `visit_default` | `black/linegen.py:134` |

##### `check_stability_and_equivalence` (`black/__init__.py:1037`)

|      % |   Size | Samples | Callee              | Location                 |
| -----: | -----: | ------: | ------------------- | ------------------------ |
| 100.0% | 16 MiB |   1,014 | `assert_equivalent` | `black/__init__.py:1524` |

##### `_parse_single_version` (`black/parsing.py:117`)

|      % |   Size | Samples | Callee  | Location                        |
| -----: | -----: | ------: | ------- | ------------------------------- |
| 100.0% | 16 MiB |   1,014 | `parse` | `/usr/lib/python3.11/ast.py:33` |

##### `_get_module_details` (`<frozen runpy>:105`)

|     % |     Size | Samples | Callee                | Location                             |
| ----: | -------: | ------: | --------------------- | ------------------------------------ |
| 99.9% | 5.45 MiB |   1,487 | `_find_and_load`      | `<frozen importlib._bootstrap>:1167` |
| 99.9% | 5.45 MiB |   1,487 | `_get_module_details` | `<frozen runpy>:105`                 |
|  0.1% | 5.66 KiB |       6 | `find_spec`           | `<frozen importlib.util>:73`         |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

|      % |     Size | Samples | Callee                    | Location                             |
| -----: | -------: | ------: | ------------------------- | ------------------------------------ |
| 100.0% | 5.45 MiB |   1,485 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |
|  <0.1% |    560 B |       1 | `__enter__`               | `<frozen importlib._bootstrap>:169`  |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

|      % |     Size | Samples | Callee                      | Location                             |
| -----: | -------: | ------: | --------------------------- | ------------------------------------ |
| 100.0% | 5.45 MiB |   1,484 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`  |
|   0.7% | 37.2 KiB |      47 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`  |
|   0.1% | 7.48 KiB |       4 | `_find_spec`                | `<frozen importlib._bootstrap>:1056` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

|      % |     Size | Samples | Callee             | Location                                     |
| -----: | -------: | ------: | ------------------ | -------------------------------------------- |
| 100.0% | 5.45 MiB |   1,482 | `exec_module`      | `<frozen importlib._bootstrap_external>:934` |
|  <0.1% | 1.83 KiB |       2 | `module_from_spec` | `<frozen importlib._bootstrap>:566`          |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

|     % |     Size | Samples | Callee                      | Location                                      |
| ----: | -------: | ------: | --------------------------- | --------------------------------------------- |
| 99.1% |  5.4 MiB |   1,436 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
| 49.3% | 2.69 MiB |     802 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|     % |     Size | Samples | Callee     | Location                                                 |
| ----: | -------: | ------: | ---------- | -------------------------------------------------------- |
| 99.4% |  5.4 MiB |   1,436 | `<module>` | `black/__init__.py:1`                                    |
| 43.0% | 2.34 MiB |     316 | `<module>` | `black/comments.py:1`                                    |
| 24.2% | 1.32 MiB |     295 | `<module>` | `black/nodes.py:1`                                       |
| 24.1% | 1.31 MiB |     304 | `<module>` | `/venv/lib/python3.11/site-packages/click/__init__.py:1` |
| 22.7% | 1.23 MiB |     233 | `<module>` | `/venv/lib/python3.11/site-packages/click/core.py:1`     |

##### `get_code` (`<frozen importlib._bootstrap_external>:1007`)

|     % |     Size | Samples | Callee                   | Location                                      |
| ----: | -------: | ------: | ------------------------ | --------------------------------------------- |
| 84.6% | 2.27 MiB |     352 | `source_to_code`         | `<frozen importlib._bootstrap_external>:999`  |
| 11.3% |  311 KiB |     341 | `_compile_bytecode`      | `<frozen importlib._bootstrap_external>:727`  |
|  4.1% |  112 KiB |     108 | `_code_to_timestamp_pyc` | `<frozen importlib._bootstrap_external>:740`  |
| <0.1% |    624 B |       1 | `_cache_bytecode`        | `<frozen importlib._bootstrap_external>:1151` |

##### `source_to_code` (`<frozen importlib._bootstrap_external>:999`)

|      % |     Size | Samples | Callee                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 2.27 MiB |     352 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/__init__.py:1`)

|     % |    Size | Samples | Callee           | Location                             |
| ----: | ------: | ------: | ---------------- | ------------------------------------ |
| 99.8% | 1.3 MiB |     303 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/core.py:1`)

|     % |     Size | Samples | Callee             | Location                                               |
| ----: | -------: | ------: | ------------------ | ------------------------------------------------------ |
| 85.5% | 1.05 MiB |      53 | `_find_and_load`   | `<frozen importlib._bootstrap>:1167`                   |
| 11.1% |  140 KiB |     145 | `_handle_fromlist` | `<frozen importlib._bootstrap>:1209`                   |
|  1.1% | 13.9 KiB |       9 | `__new__`          | `<frozen abc>:105`                                     |
|  0.2% | 2.49 KiB |       3 | `__new__`          | `/usr/lib/python3.11/enum.py:488`                      |
|  0.1% |    768 B |       1 | `Context`          | `/venv/lib/python3.11/site-packages/click/core.py:204` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/formatting.py:1`)

|     % |     Size | Samples | Callee           | Location                             |
| ----: | -------: | ------: | ---------------- | ------------------------------------ |
| 99.8% | 1.02 MiB |      22 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1209`)

|      % |    Size | Samples | Callee                      | Location                            |
| -----: | ------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 333 KiB |     341 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/specifiers.py:1`)

|     % |     Size | Samples | Callee           | Location                                                         |
| ----: | -------: | ------: | ---------------- | ---------------------------------------------------------------- |
| 90.2% |  156 KiB |     130 | `_find_and_load` | `<frozen importlib._bootstrap>:1167`                             |
|  4.9% |  8.5 KiB |       2 | `Specifier`      | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:220` |
|  3.5% | 6.07 KiB |       7 | `__new__`        | `<frozen abc>:105`                                               |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/types.py:1`)

|     % |     Size | Samples | Callee           | Location                             |
| ----: | -------: | ------: | ---------------- | ------------------------------------ |
| 53.0% | 66.2 KiB |      58 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |
| 30.6% | 38.2 KiB |      45 | `__new__`        | `<frozen abc>:105`                   |
| 12.6% | 15.7 KiB |      19 | `__new__`        | `/usr/lib/python3.11/typing.py:2891` |
|  1.1% | 1.42 KiB |       2 | `inner`          | `/usr/lib/python3.11/typing.py:338`  |
|  0.4% |    542 B |       1 | `__init__`       | `/usr/lib/python3.11/typing.py:992`  |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/utils.py:1`)

|     % |     Size | Samples | Callee           | Location                             |
| ----: | -------: | ------: | ---------------- | ------------------------------------ |
| 96.4% | 96.1 KiB |      68 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/__init__.py:1`)

|     % |     Size | Samples | Callee           | Location                             |
| ----: | -------: | ------: | ---------------- | ------------------------------------ |
| 99.2% | 93.1 KiB |     118 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/gitignore.py:1`)

|     % |   Size | Samples | Callee           | Location                             |
| ----: | -----: | ------: | ---------------- | ------------------------------------ |
| 97.3% | 89 KiB |     112 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/tags.py:1`)

|     % |     Size | Samples | Callee             | Location                             |
| ----: | -------: | ------: | ------------------ | ------------------------------------ |
| 22.4% | 16.7 KiB |      17 | `_find_and_load`   | `<frozen importlib._bootstrap>:1167` |
| 21.2% | 15.8 KiB |      19 | `_handle_fromlist` | `<frozen importlib._bootstrap>:1209` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/_backends/agg.py:1`)

|     % |     Size | Samples | Callee           | Location                             |
| ----: | -------: | ------: | ---------------- | ------------------------------------ |
| 98.9% | 64.8 KiB |      83 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `compile` (`/usr/lib/python3.11/re/__init__.py:225`)

|     % |     Size | Samples | Callee     | Location                                 |
| ----: | -------: | ------: | ---------- | ---------------------------------------- |
| 98.6% | 47.1 KiB |      24 | `_compile` | `/usr/lib/python3.11/re/__init__.py:272` |

##### `decorator` (`/venv/lib/python3.11/site-packages/click/decorators.py:373`)

|     % |     Size | Samples | Callee     | Location                                                |
| ----: | -------: | ------: | ---------- | ------------------------------------------------------- |
| 96.2% | 45.5 KiB |      32 | `__init__` | `/venv/lib/python3.11/site-packages/click/core.py:2883` |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py:272`)

|     % |     Size | Samples | Callee    | Location                                  |
| ----: | -------: | ------: | --------- | ----------------------------------------- |
| 98.6% | 46.5 KiB |      23 | `compile` | `/usr/lib/python3.11/re/_compiler.py:738` |
|  1.4% |    698 B |       1 | `__and__` | `/usr/lib/python3.11/enum.py:1504`        |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/_backends/hyperscan/gitignore.py:1`)

|     % |     Size | Samples | Callee           | Location                             |
| ----: | -------: | ------: | ---------------- | ------------------------------------ |
| 94.8% | 44.5 KiB |      56 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|     % |     Size | Samples | Callee  | Location                                  |
| ----: | -------: | ------: | ------- | ----------------------------------------- |
| 31.0% | 14.4 KiB |       5 | `parse` | `/usr/lib/python3.11/re/_parser.py:970`   |
| 20.4% |  9.5 KiB |       6 | `_code` | `/usr/lib/python3.11/re/_compiler.py:571` |

##### `__init__` (`/venv/lib/python3.11/site-packages/click/core.py:2883`)

|    % |     Size | Samples | Callee     | Location                                                |
| ---: | -------: | ------: | ---------- | ------------------------------------------------------- |
| 2.6% | 1.17 KiB |       1 | `__init__` | `/venv/lib/python3.11/site-packages/click/core.py:2237` |

## Hottest call stacks

Call stacks ranked by bytes held at peak memory in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>:201`) ← `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 22.0% |   16 MiB |   1,014 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  6.9% |    5 MiB |       5 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `shift` (`blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  4.1% |    3 MiB |       8 | `transform_line` (`black/linegen.py:601`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.8% |    2 MiB |       2 | `push` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  2.8% |    2 MiB |       2 | `convert` (`blib2to3/pytree.py:486`) ← `pop` (`blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.5% | 1.07 MiB |      96 | `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `source_to_code` (`<frozen importlib._bootstrap_external>:999`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.4% | 1.04 MiB |      49 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.4% | 1.01 MiB |       6 | `make_grammar` (`blib2to3/pgen2/pgen.py:49`) ← `generate_grammar` (426) ← `load_grammar` (`blib2to3/pgen2/driver.py:246`) ← `load_packaged_grammar` (280) ← `initialize` (`blib2to3/pygram.py:165`) ← `<module>` (`black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.4% | 1.01 MiB |      15 | `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `source_to_code` (`<frozen importlib._bootstrap_external>:999`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.4% | 1.01 MiB |      11 | `<module>` (`/venv/lib/python3.11/site-packages/click/parser.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/formatting.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/core.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.4% |    1 MiB |       4 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.4% |    1 MiB |       2 | `maybe_empty_lines` (`black/lines.py:560`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.4% |    1 MiB |       1 | `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.4% |    1 MiB |       1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `preceding_leaf` (`black/nodes.py:441`) ← `whitespace` (194) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.4% |    1 MiB |       1 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit_NUMBER` (505) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                |
|  1.4% |    1 MiB |       1 | `changed` (`blib2to3/pytree.py:171`) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91) |
|  1.4% |    1 MiB |       1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`black/nodes.py:194`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                         |
|  1.4% |    1 MiB |       1 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_test` (160) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.4% |    1 MiB |       1 | `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.4% |    1 MiB |       1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `wrap_in_parentheses` (`black/nodes.py:935`) ← `normalize_invisible_parens` (`black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

# Leaked memory profile

Leaked 57.1 MiB over 22,684 samples (2.58 KiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Ours             | 89.1% | 50.9 MiB |  21,386 |
| Standard library |  8.7% | 4.97 MiB |   1,068 |
| Third-party      |  2.2% | 1.23 MiB |     230 |

## Hottest functions

### Self size

Functions ranked by bytes never freed directly in the function body, excluding callees.

|     % |     Size | Samples | Function                               | Location                                               |
| ----: | -------: | ------: | -------------------------------------- | ------------------------------------------------------ |
| 30.2% | 17.2 MiB |  20,789 | `mark`                                 | `black/brackets.py:70`                                 |
| 10.5% |    6 MiB |       6 | `changed`                              | `blib2to3/pytree.py:171`                               |
|  8.8% |    5 MiB |       5 | `__new__`                              | `blib2to3/pytree.py:81`                                |
|  5.4% | 3.07 MiB |       9 | `transform_line`                       | `black/linegen.py:601`                                 |
|  5.3% |    3 MiB |       4 | `visit_default`                        | `black/linegen.py:134`                                 |
|  5.3% |    3 MiB |       3 | `generate_comments`                    | `black/comments.py:52`                                 |
|  4.0% | 2.27 MiB |     352 | `_call_with_frames_removed`            | `<frozen importlib._bootstrap>:233`                    |
|  3.8% | 2.14 MiB |     197 | `update_sibling_maps`                  | `blib2to3/pytree.py:369`                               |
|  3.5% | 2.01 MiB |       3 | `parse`                                | `/usr/lib/python3.11/ast.py:33`                        |
|  3.5% |    2 MiB |       2 | `convert`                              | `blib2to3/pytree.py:486`                               |
|  3.5% |    2 MiB |       2 | `push`                                 | `blib2to3/pgen2/parse.py:386`                          |
|  1.8% | 1.01 MiB |       6 | `make_grammar`                         | `blib2to3/pgen2/pgen.py:49`                            |
|  1.8% | 1.01 MiB |      11 | `<module>`                             | `/venv/lib/python3.11/site-packages/click/parser.py:1` |
|  1.8% |    1 MiB |       5 | `visit`                                | `black/nodes.py:163`                                   |
|  1.8% |    1 MiB |       2 | `maybe_empty_lines`                    | `black/lines.py:560`                                   |
|  1.8% |    1 MiB |       1 | `contains_uncollapsable_type_comments` | `black/lines.py:276`                                   |
|  1.8% |    1 MiB |       1 | `__init__`                             | `<string>:2`                                           |
|  1.8% |    1 MiB |       1 | `_addtoken`                            | `blib2to3/pgen2/parse.py:290`                          |
|  1.8% |    1 MiB |       1 | `__init__`                             | `blib2to3/pytree.py:400`                               |
|  0.5% |  311 KiB |     341 | `_compile_bytecode`                    | `<frozen importlib._bootstrap_external>:727`           |

#### Categories

##### Ours

|     % |     Size | Samples | Function                               | Location                        |
| ----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 30.2% | 17.2 MiB |  20,789 | `mark`                                 | `black/brackets.py:70`          |
| 10.5% |    6 MiB |       6 | `changed`                              | `blib2to3/pytree.py:171`        |
|  8.8% |    5 MiB |       5 | `__new__`                              | `blib2to3/pytree.py:81`         |
|  5.4% | 3.07 MiB |       9 | `transform_line`                       | `black/linegen.py:601`          |
|  5.3% |    3 MiB |       4 | `visit_default`                        | `black/linegen.py:134`          |
|  5.3% |    3 MiB |       3 | `generate_comments`                    | `black/comments.py:52`          |
|  3.8% | 2.14 MiB |     197 | `update_sibling_maps`                  | `blib2to3/pytree.py:369`        |
|  3.5% |    2 MiB |       2 | `convert`                              | `blib2to3/pytree.py:486`        |
|  3.5% |    2 MiB |       2 | `push`                                 | `blib2to3/pgen2/parse.py:386`   |
|  1.8% | 1.01 MiB |       6 | `make_grammar`                         | `blib2to3/pgen2/pgen.py:49`     |
|  1.8% |    1 MiB |       5 | `visit`                                | `black/nodes.py:163`            |
|  1.8% |    1 MiB |       2 | `maybe_empty_lines`                    | `black/lines.py:560`            |
|  1.8% |    1 MiB |       1 | `contains_uncollapsable_type_comments` | `black/lines.py:276`            |
|  1.8% |    1 MiB |       1 | `__init__`                             | `<string>:2`                    |
|  1.8% |    1 MiB |       1 | `_addtoken`                            | `blib2to3/pgen2/parse.py:290`   |
|  1.8% |    1 MiB |       1 | `__init__`                             | `blib2to3/pytree.py:400`        |
|  0.1% | 57.2 KiB |      65 | `normalize_string_prefix`              | `black/strings.py:143`          |
|  0.1% | 41.5 KiB |      16 | `copy`                                 | `blib2to3/pgen2/grammar.py:131` |
|  0.1% |   32 KiB |       1 | `classify`                             | `blib2to3/pgen2/parse.py:336`   |
| <0.1% | 25.3 KiB |      40 | `make_first`                           | `blib2to3/pgen2/pgen.py:74`     |

##### Standard library

|     % |     Size | Samples | Function                    | Location                                          |
| ----: | -------: | ------: | --------------------------- | ------------------------------------------------- |
|  4.0% | 2.27 MiB |     352 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`               |
|  3.5% | 2.01 MiB |       3 | `parse`                     | `/usr/lib/python3.11/ast.py:33`                   |
|  0.5% |  311 KiB |     341 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`      |
|  0.2% |  112 KiB |     108 | `_code_to_timestamp_pyc`    | `<frozen importlib._bootstrap_external>:740`      |
|  0.1% | 75.7 KiB |      79 | `__new__`                   | `<frozen abc>:105`                                |
| <0.1% | 24.1 KiB |      27 | `__new__`                   | `/usr/lib/python3.11/enum.py:488`                 |
| <0.1% | 22.6 KiB |      12 | `compile`                   | `/usr/lib/python3.11/re/_compiler.py:738`         |
| <0.1% | 19.8 KiB |      12 | `<module>`                  | `/usr/lib/python3.11/tomllib/_parser.py:1`        |
| <0.1% | 17.4 KiB |      21 | `__new__`                   | `/usr/lib/python3.11/typing.py:2891`              |
| <0.1% |   12 KiB |       3 | `inner`                     | `/usr/lib/python3.11/typing.py:338`               |
| <0.1% |    8 KiB |       4 | `_fill_cache`               | `<frozen importlib._bootstrap_external>:1655`     |
| <0.1% | 7.97 KiB |       1 | `_parse_sub`                | `/usr/lib/python3.11/re/_parser.py:447`           |
| <0.1% | 6.73 KiB |       8 | `__setattr__`               | `/usr/lib/python3.11/enum.py:831`                 |
| <0.1% | 5.63 KiB |       6 | `namedtuple`                | `/usr/lib/python3.11/collections/__init__.py:348` |
| <0.1% | 5.61 KiB |       3 | `_parse`                    | `/usr/lib/python3.11/re/_parser.py:507`           |
| <0.1% | 5.32 KiB |       2 | `_code`                     | `/usr/lib/python3.11/re/_compiler.py:571`         |
| <0.1% | 4.73 KiB |       6 | `<module>`                  | `/usr/lib/python3.11/pkgutil.py:1`                |
| <0.1% | 2.85 KiB |       1 | `wrap`                      | `/usr/lib/python3.11/dataclasses.py:1209`         |
| <0.1% | 2.85 KiB |       4 | `_process_class`            | `/usr/lib/python3.11/dataclasses.py:884`          |
| <0.1% | 2.56 KiB |       3 | `_signature_from_function`  | `/usr/lib/python3.11/inspect.py:2331`             |

##### Third-party

|     % |     Size | Samples | Function              | Location                                                                   |
| ----: | -------: | ------: | --------------------- | -------------------------------------------------------------------------- |
|  1.8% | 1.01 MiB |      11 | `<module>`            | `/venv/lib/python3.11/site-packages/click/parser.py:1`                     |
|  0.1% | 44.3 KiB |      31 | `__init__`            | `/venv/lib/python3.11/site-packages/click/core.py:2883`                    |
| <0.1% |   25 KiB |      22 | `<module>`            | `/venv/lib/python3.11/site-packages/click/core.py:1`                       |
| <0.1% |   15 KiB |      18 | `<module>`            | `/venv/lib/python3.11/site-packages/mypy_extensions.py:1`                  |
| <0.1% | 13.4 KiB |      15 | `<module>`            | `/venv/lib/python3.11/site-packages/click/exceptions.py:1`                 |
| <0.1% | 9.61 KiB |       9 | `<module>`            | `/venv/lib/python3.11/site-packages/packaging/version.py:1`                |
| <0.1% | 7.08 KiB |       8 | `<module>`            | `/venv/lib/python3.11/site-packages/click/utils.py:1`                      |
| <0.1% | 6.48 KiB |       6 | `<module>`            | `/venv/lib/python3.11/site-packages/pathspec/util.py:1`                    |
| <0.1% | 6.24 KiB |       5 | `<module>`            | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:1`                |
| <0.1% | 5.97 KiB |       6 | `<module>`            | `/venv/lib/python3.11/site-packages/packaging/tags.py:1`                   |
| <0.1% |  5.8 KiB |       6 | `<module>`            | `/venv/lib/python3.11/site-packages/click/_compat.py:1`                    |
| <0.1% | 3.82 KiB |       1 | `Specifier`           | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:220`           |
| <0.1% | 3.72 KiB |       4 | `<module>`            | `/venv/lib/python3.11/site-packages/pathspec/pattern.py:1`                 |
| <0.1% | 3.56 KiB |       4 | `<module>`            | `/venv/lib/python3.11/site-packages/packaging/utils.py:1`                  |
| <0.1% | 3.37 KiB |       5 | `handle_parse_result` | `/venv/lib/python3.11/site-packages/click/core.py:2663`                    |
| <0.1% | 3.19 KiB |       1 | `<module>`            | `/venv/lib/python3.11/site-packages/click/__init__.py:1`                   |
| <0.1% | 3.19 KiB |       4 | `<module>`            | `/venv/lib/python3.11/site-packages/pathspec/pathspec.py:1`                |
| <0.1% | 3.04 KiB |       2 | `new_func`            | `/venv/lib/python3.11/site-packages/click/decorators.py:33`                |
| <0.1% | 2.81 KiB |       3 | `<module>`            | `/venv/lib/python3.11/site-packages/pathspec/patterns/gitignore/base.py:1` |
| <0.1% | 2.76 KiB |       2 | `<module>`            | `/venv/lib/python3.11/site-packages/click/types.py:1`                      |

#### Lines

Lines ranked by contribution to each function's self size.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 17.2 MiB |  20,788 | `black/brackets.py:112` |
|  <0.1% | 1.49 KiB |       1 | `black/brackets.py:114` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Samples | Location                 |
| ----: | ----: | ------: | ------------------------ |
| 66.7% | 4 MiB |       4 | `blib2to3/pytree.py:175` |
| 33.3% | 2 MiB |       2 | `blib2to3/pytree.py:176` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Samples | Location                |
| -----: | ----: | ------: | ----------------------- |
| 100.0% | 5 MiB |       5 | `blib2to3/pytree.py:84` |

##### `transform_line` (`black/linegen.py:601`)

|     % |     Size | Samples | Location               |
| ----: | -------: | ------: | ---------------------- |
| 34.9% | 1.07 MiB |       4 | `black/linegen.py:679` |
| 32.6% |    1 MiB |       2 | `black/linegen.py:714` |
| 32.5% |    1 MiB |       1 | `black/linegen.py:626` |
| <0.1% | 1.39 KiB |       1 | `black/linegen.py:635` |
| <0.1% |    518 B |       1 | `black/linegen.py:631` |

##### `visit_default` (`black/linegen.py:134`)

|      % |  Size | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 3 MiB |       3 | `black/linegen.py:158` |
|  <0.1% | 702 B |       1 | `black/linegen.py:144` |

##### `generate_comments` (`black/comments.py:52`)

|     % |  Size | Samples | Location               |
| ----: | ----: | ------: | ---------------------- |
| 66.7% | 2 MiB |       2 | `black/comments.py:76` |
| 33.3% | 1 MiB |       1 | `black/comments.py:72` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Samples | Location                            |
| -----: | -------: | ------: | ----------------------------------- |
| 100.0% | 2.27 MiB |     352 | `<frozen importlib._bootstrap>:241` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|     % |     Size | Samples | Location                 |
| ----: | -------: | ------: | ------------------------ |
| 96.6% | 2.07 MiB |      95 | `blib2to3/pytree.py:377` |
|  3.2% | 70.3 KiB |      93 | `blib2to3/pytree.py:376` |
|  0.2% | 4.99 KiB |       9 | `blib2to3/pytree.py:379` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Samples | Location                        |
| -----: | -------: | ------: | ------------------------------- |
| 100.0% | 2.01 MiB |       3 | `/usr/lib/python3.11/ast.py:50` |

##### `convert` (`blib2to3/pytree.py:486`)

|      % |  Size | Samples | Location                 |
| -----: | ----: | ------: | ------------------------ |
| 100.0% | 2 MiB |       2 | `blib2to3/pytree.py:501` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Samples | Location                      |
| -----: | ----: | ------: | ----------------------------- |
| 100.0% | 2 MiB |       2 | `blib2to3/pgen2/parse.py:394` |

##### `make_grammar` (`blib2to3/pgen2/pgen.py:49`)

|     % |     Size | Samples | Location                    |
| ----: | -------: | ------: | --------------------------- |
| 98.6% |    1 MiB |       1 | `blib2to3/pgen2/pgen.py:56` |
|  0.4% | 4.52 KiB |       1 | `blib2to3/pgen2/pgen.py:70` |
|  0.4% | 4.52 KiB |       1 | `blib2to3/pgen2/pgen.py:58` |
|  0.3% | 3.19 KiB |       1 | `blib2to3/pgen2/pgen.py:57` |
|  0.1% |    1 KiB |       1 | `blib2to3/pgen2/pgen.py:69` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/parser.py:1`)

|     % |     Size | Samples | Location                                                 |
| ----: | -------: | ------: | -------------------------------------------------------- |
| 99.2% |    1 MiB |       1 | `/venv/lib/python3.11/site-packages/click/parser.py:25`  |
|  0.2% | 2.29 KiB |       3 | `/venv/lib/python3.11/site-packages/click/parser.py:224` |
|  0.2% | 1.69 KiB |       2 | `/venv/lib/python3.11/site-packages/click/parser.py:185` |
|  0.2% | 1.69 KiB |       2 | `/venv/lib/python3.11/site-packages/click/parser.py:127` |
|  0.2% | 1.69 KiB |       2 | `/venv/lib/python3.11/site-packages/click/parser.py:216` |

##### `visit` (`black/nodes.py:163`)

|     % |     Size | Samples | Location             |
| ----: | -------: | ------: | -------------------- |
| 99.7% |    1 MiB |       2 | `black/nodes.py:185` |
|  0.3% | 2.68 KiB |       3 | `black/nodes.py:183` |

##### `maybe_empty_lines` (`black/lines.py:560`)

|     % |     Size | Samples | Location             |
| ----: | -------: | ------: | -------------------- |
| 99.9% |    1 MiB |       1 | `black/lines.py:584` |
|  0.1% | 1.11 KiB |       1 | `black/lines.py:571` |

##### `contains_uncollapsable_type_comments` (`black/lines.py:276`)

|      % |  Size | Samples | Location             |
| -----: | ----: | ------: | -------------------- |
| 100.0% | 1 MiB |       1 | `black/lines.py:280` |

##### `__init__` (`<string>:2`)

|      % |  Size | Samples | Location     |
| -----: | ----: | ------: | ------------ |
| 100.0% | 1 MiB |       1 | `<string>:7` |

##### `_addtoken` (`blib2to3/pgen2/parse.py:290`)

|      % |  Size | Samples | Location                      |
| -----: | ----: | ------: | ----------------------------- |
| 100.0% | 1 MiB |       1 | `blib2to3/pgen2/parse.py:315` |

##### `__init__` (`blib2to3/pytree.py:400`)

|      % |  Size | Samples | Location                 |
| -----: | ----: | ------: | ------------------------ |
| 100.0% | 1 MiB |       1 | `blib2to3/pytree.py:425` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |    Size | Samples | Location                                     |
| -----: | ------: | ------: | -------------------------------------------- |
| 100.0% | 311 KiB |     341 | `<frozen importlib._bootstrap_external>:729` |

##### `_code_to_timestamp_pyc` (`<frozen importlib._bootstrap_external>:740`)

|      % |    Size | Samples | Location                                     |
| -----: | ------: | ------: | -------------------------------------------- |
| 100.0% | 112 KiB |     108 | `<frozen importlib._bootstrap_external>:746` |

##### `__new__` (`<frozen abc>:105`)

|      % |     Size | Samples | Location           |
| -----: | -------: | ------: | ------------------ |
| 100.0% | 75.7 KiB |      79 | `<frozen abc>:106` |

##### `normalize_string_prefix` (`black/strings.py:143`)

|      % |     Size | Samples | Location               |
| -----: | -------: | ------: | ---------------------- |
| 100.0% | 57.2 KiB |      65 | `black/strings.py:158` |

##### `__init__` (`/venv/lib/python3.11/site-packages/click/core.py:2883`)

|     % |   Size | Samples | Location                                                |
| ----: | -----: | ------: | ------------------------------------------------------- |
| 97.1% | 43 KiB |      29 | `/venv/lib/python3.11/site-packages/click/core.py:3023` |
|  1.6% |  704 B |       1 | `/venv/lib/python3.11/site-packages/click/core.py:2905` |
|  1.4% |  614 B |       1 | `/venv/lib/python3.11/site-packages/click/core.py:2907` |

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

##### `<module>` (`/venv/lib/python3.11/site-packages/click/core.py:1`)

|     % |     Size | Samples | Location                                                |
| ----: | -------: | ------: | ------------------------------------------------------- |
| 30.4% |  7.6 KiB |       4 | `/venv/lib/python3.11/site-packages/click/core.py:204`  |
| 19.2% | 4.79 KiB |       4 | `/venv/lib/python3.11/site-packages/click/core.py:956`  |
| 15.7% | 3.92 KiB |       4 | `/venv/lib/python3.11/site-packages/click/core.py:1587` |
|  9.5% | 2.37 KiB |       3 | `/venv/lib/python3.11/site-packages/click/core.py:2057` |
|  6.8% | 1.69 KiB |       2 | `/venv/lib/python3.11/site-packages/click/core.py:2050` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

|      % |     Size | Samples | Location                          |
| -----: | -------: | ------: | --------------------------------- |
| 100.0% | 24.1 KiB |      27 | `/usr/lib/python3.11/enum.py:554` |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|      % |     Size | Samples | Location                                  |
| -----: | -------: | ------: | ----------------------------------------- |
| 100.0% | 22.6 KiB |      12 | `/usr/lib/python3.11/re/_compiler.py:759` |

##### `<module>` (`/usr/lib/python3.11/tomllib/_parser.py:1`)

|     % |  Size | Samples | Location                                    |
| ----: | ----: | ------: | ------------------------------------------- |
| 20.2% | 4 KiB |       1 | `/usr/lib/python3.11/tomllib/_parser.py:37` |
| 10.1% | 2 KiB |       1 | `/usr/lib/python3.11/tomllib/_parser.py:26` |
| 10.1% | 2 KiB |       1 | `/usr/lib/python3.11/tomllib/_parser.py:22` |
| 10.1% | 2 KiB |       1 | `/usr/lib/python3.11/tomllib/_parser.py:38` |
| 10.1% | 2 KiB |       1 | `/usr/lib/python3.11/tomllib/_parser.py:27` |

##### `__new__` (`/usr/lib/python3.11/typing.py:2891`)

|      % |     Size | Samples | Location                             |
| -----: | -------: | ------: | ------------------------------------ |
| 100.0% | 17.4 KiB |      21 | `/usr/lib/python3.11/typing.py:2909` |

##### `<module>` (`/venv/lib/python3.11/site-packages/mypy_extensions.py:1`)

|     % |     Size | Samples | Location                                                    |
| ----: | -------: | ------: | ----------------------------------------------------------- |
| 11.3% | 1.69 KiB |       2 | `/venv/lib/python3.11/site-packages/mypy_extensions.py:198` |
| 11.3% | 1.69 KiB |       2 | `/venv/lib/python3.11/site-packages/mypy_extensions.py:167` |
| 11.3% | 1.69 KiB |       2 | `/venv/lib/python3.11/site-packages/mypy_extensions.py:212` |
| 11.3% | 1.69 KiB |       2 | `/venv/lib/python3.11/site-packages/mypy_extensions.py:191` |
| 11.3% | 1.69 KiB |       2 | `/venv/lib/python3.11/site-packages/mypy_extensions.py:154` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/exceptions.py:1`)

|     % |     Size | Samples | Location                                                     |
| ----: | -------: | ------: | ------------------------------------------------------------ |
| 18.4% | 2.45 KiB |       3 | `/venv/lib/python3.11/site-packages/click/exceptions.py:114` |
| 11.5% | 1.53 KiB |       2 | `/venv/lib/python3.11/site-packages/click/exceptions.py:366` |
|  7.0% |    960 B |       1 | `/venv/lib/python3.11/site-packages/click/exceptions.py:304` |
|  7.0% |    960 B |       1 | `/venv/lib/python3.11/site-packages/click/exceptions.py:268` |
|  7.0% |    960 B |       1 | `/venv/lib/python3.11/site-packages/click/exceptions.py:232` |

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|      % |   Size | Samples | Location                            |
| -----: | -----: | ------: | ----------------------------------- |
| 100.0% | 12 KiB |       3 | `/usr/lib/python3.11/typing.py:341` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/version.py:1`)

|     % |     Size | Samples | Location                                                      |
| ----: | -------: | ------: | ------------------------------------------------------------- |
| 38.2% | 3.68 KiB |       3 | `/venv/lib/python3.11/site-packages/packaging/version.py:340` |
| 15.5% | 1.49 KiB |       2 | `/venv/lib/python3.11/site-packages/packaging/version.py:124` |
| 15.4% | 1.48 KiB |       1 | `/venv/lib/python3.11/site-packages/packaging/version.py:285` |
| 11.3% | 1.09 KiB |       1 | `/venv/lib/python3.11/site-packages/packaging/version.py:228` |
|  9.8% |    960 B |       1 | `/venv/lib/python3.11/site-packages/packaging/version.py:134` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1655`)

|      % |  Size | Samples | Location                                      |
| -----: | ----: | ------: | --------------------------------------------- |
| 100.0% | 8 KiB |       4 | `<frozen importlib._bootstrap_external>:1667` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|      % |     Size | Samples | Location                                |
| -----: | -------: | ------: | --------------------------------------- |
| 100.0% | 7.97 KiB |       1 | `/usr/lib/python3.11/re/_parser.py:455` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/utils.py:1`)

|     % |     Size | Samples | Location                                                |
| ----: | -------: | ------: | ------------------------------------------------------- |
| 44.8% | 3.17 KiB |       3 | `/venv/lib/python3.11/site-packages/click/utils.py:522` |
| 31.4% | 2.22 KiB |       3 | `/venv/lib/python3.11/site-packages/click/utils.py:207` |
| 23.8% | 1.69 KiB |       2 | `/venv/lib/python3.11/site-packages/click/utils.py:113` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

|      % |     Size | Samples | Location                          |
| -----: | -------: | ------: | --------------------------------- |
| 100.0% | 6.73 KiB |       8 | `/usr/lib/python3.11/enum.py:842` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/util.py:1`)

|     % |     Size | Samples | Location                                                  |
| ----: | -------: | ------: | --------------------------------------------------------- |
| 22.9% | 1.48 KiB |       1 | `/venv/lib/python3.11/site-packages/pathspec/util.py:254` |
| 16.9% | 1.09 KiB |       1 | `/venv/lib/python3.11/site-packages/pathspec/util.py:765` |
| 16.3% | 1.05 KiB |       1 | `/venv/lib/python3.11/site-packages/pathspec/util.py:710` |
| 15.1% |   1000 B |       1 | `/venv/lib/python3.11/site-packages/pathspec/util.py:741` |
| 14.5% |    960 B |       1 | `/venv/lib/python3.11/site-packages/pathspec/util.py:651` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/_ranges.py:1`)

|     % |     Size | Samples | Location                                                      |
| ----: | -------: | ------: | ------------------------------------------------------------- |
| 23.8% | 1.48 KiB |       1 | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:681` |
| 23.0% | 1.43 KiB |       1 | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:44`  |
| 19.4% | 1.21 KiB |       1 | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:63`  |
| 16.9% | 1.05 KiB |       1 | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:179` |
| 16.9% | 1.05 KiB |       1 | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:236` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/tags.py:1`)

|     % |     Size | Samples | Location                                                   |
| ----: | -------: | ------: | ---------------------------------------------------------- |
| 28.0% | 1.67 KiB |       2 | `/venv/lib/python3.11/site-packages/packaging/tags.py:118` |
| 24.9% | 1.48 KiB |       1 | `/venv/lib/python3.11/site-packages/packaging/tags.py:322` |
| 15.7% |    960 B |       1 | `/venv/lib/python3.11/site-packages/packaging/tags.py:110` |
| 15.7% |    960 B |       1 | `/venv/lib/python3.11/site-packages/packaging/tags.py:101` |
| 15.7% |    960 B |       1 | `/venv/lib/python3.11/site-packages/packaging/tags.py:93`  |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/_compat.py:1`)

|     % |     Size | Samples | Location                                                  |
| ----: | -------: | ------: | --------------------------------------------------------- |
| 29.1% | 1.69 KiB |       2 | `/venv/lib/python3.11/site-packages/click/_compat.py:452` |
| 29.1% | 1.69 KiB |       2 | `/venv/lib/python3.11/site-packages/click/_compat.py:82`  |
| 25.6% | 1.48 KiB |       1 | `/venv/lib/python3.11/site-packages/click/_compat.py:344` |
| 16.2% |    960 B |       1 | `/venv/lib/python3.11/site-packages/click/_compat.py:56`  |

##### `namedtuple` (`/usr/lib/python3.11/collections/__init__.py:348`)

|      % |     Size | Samples | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 5.63 KiB |       6 | `/usr/lib/python3.11/collections/__init__.py:501` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|     % |     Size | Samples | Location                                |
| ----: | -------: | ------: | --------------------------------------- |
| 43.4% | 2.43 KiB |       1 | `/usr/lib/python3.11/re/_parser.py:539` |
| 33.9% |  1.9 KiB |       1 | `/usr/lib/python3.11/re/_parser.py:568` |
| 22.7% | 1.28 KiB |       1 | `/usr/lib/python3.11/re/_parser.py:838` |

##### `_code` (`/usr/lib/python3.11/re/_compiler.py:571`)

|     % |     Size | Samples | Location                                  |
| ----: | -------: | ------: | ----------------------------------------- |
| 81.6% | 4.34 KiB |       1 | `/usr/lib/python3.11/re/_compiler.py:580` |
| 18.4% |   1002 B |       1 | `/usr/lib/python3.11/re/_compiler.py:577` |

##### `<module>` (`/usr/lib/python3.11/pkgutil.py:1`)

|     % |     Size | Samples | Location                             |
| ----: | -------: | ------: | ------------------------------------ |
| 35.7% | 1.69 KiB |       2 | `/usr/lib/python3.11/pkgutil.py:269` |
| 35.7% | 1.69 KiB |       2 | `/usr/lib/python3.11/pkgutil.py:194` |
| 15.9% |    768 B |       1 | `/usr/lib/python3.11/pkgutil.py:137` |
| 12.8% |    620 B |       1 | `/usr/lib/python3.11/pkgutil.py:184` |

##### `Specifier` (`/venv/lib/python3.11/site-packages/packaging/specifiers.py:220`)

|      % |     Size | Samples | Location                                                         |
| -----: | -------: | ------: | ---------------------------------------------------------------- |
| 100.0% | 3.82 KiB |       1 | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:340` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/pattern.py:1`)

|     % |     Size | Samples | Location                                                     |
| ----: | -------: | ------: | ------------------------------------------------------------ |
| 46.4% | 1.73 KiB |       2 | `/venv/lib/python3.11/site-packages/pathspec/pattern.py:29`  |
| 27.3% | 1.02 KiB |       1 | `/venv/lib/python3.11/site-packages/pathspec/pattern.py:90`  |
| 26.3% |   1000 B |       1 | `/venv/lib/python3.11/site-packages/pathspec/pattern.py:245` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/utils.py:1`)

|     % |  Size | Samples | Location                                                   |
| ----: | ----: | ------: | ---------------------------------------------------------- |
| 26.3% | 960 B |       1 | `/venv/lib/python3.11/site-packages/packaging/utils.py:62` |
| 26.3% | 960 B |       1 | `/venv/lib/python3.11/site-packages/packaging/utils.py:46` |
| 26.3% | 960 B |       1 | `/venv/lib/python3.11/site-packages/packaging/utils.py:54` |
| 21.1% | 768 B |       1 | `/venv/lib/python3.11/site-packages/packaging/utils.py:27` |

##### `handle_parse_result` (`/venv/lib/python3.11/site-packages/click/core.py:2663`)

|     % |    Size | Samples | Location                                                |
| ----: | ------: | ------: | ------------------------------------------------------- |
| 38.5% | 1.3 KiB |       2 | `/venv/lib/python3.11/site-packages/click/core.py:2686` |
| 22.3% |   768 B |       1 | `/venv/lib/python3.11/site-packages/click/core.py:2739` |
| 22.3% |   768 B |       1 | `/venv/lib/python3.11/site-packages/click/core.py:2740` |
| 17.0% |   586 B |       1 | `/venv/lib/python3.11/site-packages/click/core.py:2711` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/__init__.py:1`)

|      % |     Size | Samples | Location                                                  |
| -----: | -------: | ------: | --------------------------------------------------------- |
| 100.0% | 3.19 KiB |       1 | `/venv/lib/python3.11/site-packages/click/__init__.py:74` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/pathspec.py:1`)

|     % |     Size | Samples | Location                                                     |
| ----: | -------: | ------: | ------------------------------------------------------------ |
| 76.5% | 2.44 KiB |       3 | `/venv/lib/python3.11/site-packages/pathspec/pathspec.py:55` |
| 23.5% |    768 B |       1 | `/venv/lib/python3.11/site-packages/pathspec/pathspec.py:14` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |     Size | Samples | Location                                                    |
| -----: | -------: | ------: | ----------------------------------------------------------- |
| 100.0% | 3.04 KiB |       2 | `/venv/lib/python3.11/site-packages/click/decorators.py:34` |

##### `wrap` (`/usr/lib/python3.11/dataclasses.py:1209`)

|      % |     Size | Samples | Location                                  |
| -----: | -------: | ------: | ----------------------------------------- |
| 100.0% | 2.85 KiB |       1 | `/usr/lib/python3.11/dataclasses.py:1210` |

##### `_process_class` (`/usr/lib/python3.11/dataclasses.py:884`)

|     % |     Size | Samples | Location                                  |
| ----: | -------: | ------: | ----------------------------------------- |
| 41.3% | 1.18 KiB |       1 | `/usr/lib/python3.11/dataclasses.py:958`  |
| 21.0% |    612 B |       1 | `/usr/lib/python3.11/dataclasses.py:1027` |
| 19.9% |    580 B |       1 | `/usr/lib/python3.11/dataclasses.py:1096` |
| 17.8% |    518 B |       1 | `/usr/lib/python3.11/dataclasses.py:947`  |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/patterns/gitignore/base.py:1`)

|     % |  Size | Samples | Location                                                                     |
| ----: | ----: | ------: | ---------------------------------------------------------------------------- |
| 33.3% | 960 B |       1 | `/venv/lib/python3.11/site-packages/pathspec/patterns/gitignore/base.py:22`  |
| 33.3% | 960 B |       1 | `/venv/lib/python3.11/site-packages/pathspec/patterns/gitignore/base.py:205` |
| 33.3% | 960 B |       1 | `/venv/lib/python3.11/site-packages/pathspec/patterns/gitignore/base.py:197` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/types.py:1`)

|     % |     Size | Samples | Location                                                |
| ----: | -------: | ------: | ------------------------------------------------------- |
| 53.7% | 1.48 KiB |       1 | `/venv/lib/python3.11/site-packages/click/types.py:464` |
| 46.3% | 1.28 KiB |       1 | `/venv/lib/python3.11/site-packages/click/types.py:37`  |

##### `_signature_from_function` (`/usr/lib/python3.11/inspect.py:2331`)

|     % |     Size | Samples | Location                              |
| ----: | -------: | ------: | ------------------------------------- |
| 41.4% | 1.06 KiB |       1 | `/usr/lib/python3.11/inspect.py:2358` |
| 37.0% |    972 B |       1 | `/usr/lib/python3.11/inspect.py:2376` |
| 21.6% |    568 B |       1 | `/usr/lib/python3.11/inspect.py:2421` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `mark` (`black/brackets.py:70`)

|     % |     Size | Samples | Caller                           | Location                |
| ----: | -------: | ------: | -------------------------------- | ----------------------- |
| 94.2% | 16.2 MiB |  20,788 | `append`                         | `black/lines.py:63`     |
|  5.8% |    1 MiB |       1 | `max_delimiter_priority_in_atom` | `black/brackets.py:328` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Samples | Caller    | Location                 |
| ----: | ----: | ------: | --------- | ------------------------ |
| 66.7% | 4 MiB |       4 | `changed` | `blib2to3/pytree.py:171` |
| 33.3% | 2 MiB |       2 | `prefix`  | `blib2to3/pytree.py:480` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Samples | Caller    | Location                 |
| -----: | ----: | ------: | --------- | ------------------------ |
| 100.0% | 5 MiB |       5 | `convert` | `blib2to3/pytree.py:486` |

##### `transform_line` (`black/linegen.py:601`)

|      % |     Size | Samples | Caller             | Location                 |
| -----: | -------: | ------: | ------------------ | ------------------------ |
| 100.0% | 3.07 MiB |       9 | `_format_str_once` | `black/__init__.py:1236` |

##### `visit_default` (`black/linegen.py:134`)

|      % |  Size | Samples | Caller         | Location               |
| -----: | ----: | ------: | -------------- | ---------------------- |
| 100.0% | 3 MiB |       3 | `visit`        | `black/nodes.py:163`   |
|  <0.1% | 702 B |       1 | `visit_STRING` | `black/linegen.py:413` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Samples | Caller          | Location               |
| -----: | ----: | ------: | --------------- | ---------------------- |
| 100.0% | 3 MiB |       3 | `visit_default` | `black/linegen.py:134` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Samples | Caller           | Location                                     |
| -----: | -------: | ------: | ---------------- | -------------------------------------------- |
| 100.0% | 2.27 MiB |     352 | `source_to_code` | `<frozen importlib._bootstrap_external>:999` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|      % |     Size | Samples | Caller         | Location                 |
| -----: | -------: | ------: | -------------- | ------------------------ |
| 100.0% | 2.14 MiB |     197 | `prev_sibling` | `blib2to3/pytree.py:207` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Samples | Caller                  | Location               |
| -----: | -------: | ------: | ----------------------- | ---------------------- |
| 100.0% | 2.01 MiB |       3 | `_parse_single_version` | `black/parsing.py:117` |

##### `convert` (`blib2to3/pytree.py:486`)

|      % |  Size | Samples | Caller | Location                      |
| -----: | ----: | ------: | ------ | ----------------------------- |
| 100.0% | 2 MiB |       2 | `pop`  | `blib2to3/pgen2/parse.py:398` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Samples | Caller      | Location                      |
| -----: | ----: | ------: | ----------- | ----------------------------- |
| 100.0% | 2 MiB |       2 | `_addtoken` | `blib2to3/pgen2/parse.py:290` |

##### `make_grammar` (`blib2to3/pgen2/pgen.py:49`)

|      % |     Size | Samples | Caller             | Location                     |
| -----: | -------: | ------: | ------------------ | ---------------------------- |
| 100.0% | 1.01 MiB |       6 | `generate_grammar` | `blib2to3/pgen2/pgen.py:426` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/parser.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 1.01 MiB |      11 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `visit` (`black/nodes.py:163`)

|     % |  Size | Samples | Caller             | Location                 |
| ----: | ----: | ------: | ------------------ | ------------------------ |
| 99.9% | 1 MiB |       4 | `visit_default`    | `black/nodes.py:187`     |
|  0.1% | 690 B |       1 | `_format_str_once` | `black/__init__.py:1236` |

##### `maybe_empty_lines` (`black/lines.py:560`)

|      % |  Size | Samples | Caller             | Location                 |
| -----: | ----: | ------: | ------------------ | ------------------------ |
| 100.0% | 1 MiB |       2 | `_format_str_once` | `black/__init__.py:1236` |

##### `contains_uncollapsable_type_comments` (`black/lines.py:276`)

|      % |  Size | Samples | Caller           | Location               |
| -----: | ----: | ------: | ---------------- | ---------------------- |
| 100.0% | 1 MiB |       1 | `transform_line` | `black/linegen.py:601` |

##### `__init__` (`<string>:2`)

|      % |  Size | Samples | Caller | Location               |
| -----: | ----: | ------: | ------ | ---------------------- |
| 100.0% | 1 MiB |       1 | `line` | `black/linegen.py:109` |

##### `_addtoken` (`blib2to3/pgen2/parse.py:290`)

|      % |  Size | Samples | Caller     | Location                      |
| -----: | ----: | ------: | ---------- | ----------------------------- |
| 100.0% | 1 MiB |       1 | `addtoken` | `blib2to3/pgen2/parse.py:242` |

##### `__init__` (`blib2to3/pytree.py:400`)

|      % |  Size | Samples | Caller    | Location                 |
| -----: | ----: | ------: | --------- | ------------------------ |
| 100.0% | 1 MiB |       1 | `convert` | `blib2to3/pytree.py:486` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |    Size | Samples | Caller     | Location                                      |
| -----: | ------: | ------: | ---------- | --------------------------------------------- |
| 100.0% | 311 KiB |     341 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `_code_to_timestamp_pyc` (`<frozen importlib._bootstrap_external>:740`)

|      % |    Size | Samples | Caller     | Location                                      |
| -----: | ------: | ------: | ---------- | --------------------------------------------- |
| 100.0% | 112 KiB |     108 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `__new__` (`<frozen abc>:105`)

|     % |     Size | Samples | Caller     | Location                                                       |
| ----: | -------: | ------: | ---------- | -------------------------------------------------------------- |
| 50.5% | 38.2 KiB |      45 | `<module>` | `/venv/lib/python3.11/site-packages/click/types.py:1`          |
| 23.1% | 17.5 KiB |      18 | `<module>` | `black/trans.py:1`                                             |
| 18.3% | 13.9 KiB |       9 | `<module>` | `/venv/lib/python3.11/site-packages/click/core.py:1`           |
|  8.0% | 6.07 KiB |       7 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:1` |

##### `normalize_string_prefix` (`black/strings.py:143`)

|      % |     Size | Samples | Caller         | Location               |
| -----: | -------: | ------: | -------------- | ---------------------- |
| 100.0% | 57.2 KiB |      65 | `visit_STRING` | `black/linegen.py:413` |

##### `__init__` (`/venv/lib/python3.11/site-packages/click/core.py:2883`)

|      % |     Size | Samples | Caller      | Location                                                     |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------------ |
| 100.0% | 44.3 KiB |      31 | `decorator` | `/venv/lib/python3.11/site-packages/click/decorators.py:373` |

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

##### `<module>` (`/venv/lib/python3.11/site-packages/click/core.py:1`)

|      % |   Size | Samples | Caller                      | Location                            |
| -----: | -----: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 25 KiB |      22 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

|     % |     Size | Samples | Caller     | Location                                                     |
| ----: | -------: | ------: | ---------- | ------------------------------------------------------------ |
| 31.7% | 7.64 KiB |       9 | `<module>` | `black/mode.py:1`                                            |
| 16.2% | 3.89 KiB |       4 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/_elffile.py:1` |
| 13.7% |  3.3 KiB |       3 | `<module>` | `/venv/lib/python3.11/site-packages/click/_utils.py:1`       |
| 10.1% | 2.44 KiB |       3 | `<module>` | `black/__init__.py:1`                                        |
|  7.2% | 1.74 KiB |       2 | `<module>` | `/venv/lib/python3.11/site-packages/click/core.py:1`         |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|      % |     Size | Samples | Caller     | Location                                 |
| -----: | -------: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 22.6 KiB |      12 | `_compile` | `/usr/lib/python3.11/re/__init__.py:272` |

##### `<module>` (`/usr/lib/python3.11/tomllib/_parser.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 19.8 KiB |      12 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `__new__` (`/usr/lib/python3.11/typing.py:2891`)

|     % |     Size | Samples | Caller     | Location                                                    |
| ----: | -------: | ------: | ---------- | ----------------------------------------------------------- |
| 90.3% | 15.7 KiB |      19 | `<module>` | `/venv/lib/python3.11/site-packages/click/types.py:1`       |
|  9.7% | 1.69 KiB |       2 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/version.py:1` |

##### `<module>` (`/venv/lib/python3.11/site-packages/mypy_extensions.py:1`)

|      % |   Size | Samples | Caller                      | Location                            |
| -----: | -----: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 15 KiB |      18 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/exceptions.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 13.4 KiB |      15 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|     % |     Size | Samples | Caller        | Location                                              |
| ----: | -------: | ------: | ------------- | ----------------------------------------------------- |
| 75.3% | 9.02 KiB |       1 | `Line`        | `black/lines.py:49`                                   |
| 17.9% | 2.15 KiB |       1 | `__getitem__` | `/usr/lib/python3.11/typing.py:467`                   |
|  6.7% |    826 B |       1 | `<module>`    | `/venv/lib/python3.11/site-packages/click/types.py:1` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/version.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 9.61 KiB |       9 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1655`)

|      % |  Size | Samples | Caller      | Location                                      |
| -----: | ----: | ------: | ----------- | --------------------------------------------- |
| 100.0% | 8 KiB |       4 | `find_spec` | `<frozen importlib._bootstrap_external>:1604` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|      % |     Size | Samples | Caller  | Location                                |
| -----: | -------: | ------: | ------- | --------------------------------------- |
| 100.0% | 7.97 KiB |       1 | `parse` | `/usr/lib/python3.11/re/_parser.py:970` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/utils.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 7.08 KiB |       8 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

|     % |     Size | Samples | Caller         | Location                          |
| ----: | -------: | ------: | -------------- | --------------------------------- |
| 66.6% | 4.48 KiB |       5 | `__set_name__` | `/usr/lib/python3.11/enum.py:237` |
| 33.4% | 2.25 KiB |       3 | `__new__`      | `/usr/lib/python3.11/enum.py:488` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/util.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 6.48 KiB |       6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/_ranges.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 6.24 KiB |       5 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/tags.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 5.97 KiB |       6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/_compat.py:1`)

|      % |    Size | Samples | Caller                      | Location                            |
| -----: | ------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 5.8 KiB |       6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `namedtuple` (`/usr/lib/python3.11/collections/__init__.py:348`)

|     % |     Size | Samples | Caller          | Location                             |
| ----: | -------: | ------: | --------------- | ------------------------------------ |
| 83.3% | 4.69 KiB |       5 | `_make_nmtuple` | `/usr/lib/python3.11/typing.py:2795` |
| 16.7% |    960 B |       1 | `<module>`      | `/usr/lib/python3.11/pkgutil.py:1`   |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|      % |     Size | Samples | Caller       | Location                                |
| -----: | -------: | ------: | ------------ | --------------------------------------- |
| 100.0% | 5.61 KiB |       3 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py:447` |

##### `_code` (`/usr/lib/python3.11/re/_compiler.py:571`)

|      % |     Size | Samples | Caller    | Location                                  |
| -----: | -------: | ------: | --------- | ----------------------------------------- |
| 100.0% | 5.32 KiB |       2 | `compile` | `/usr/lib/python3.11/re/_compiler.py:738` |

##### `<module>` (`/usr/lib/python3.11/pkgutil.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 4.73 KiB |       6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `Specifier` (`/venv/lib/python3.11/site-packages/packaging/specifiers.py:220`)

|      % |     Size | Samples | Caller     | Location                                                       |
| -----: | -------: | ------: | ---------- | -------------------------------------------------------------- |
| 100.0% | 3.82 KiB |       1 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:1` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/pattern.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.72 KiB |       4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/utils.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.56 KiB |       4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `handle_parse_result` (`/venv/lib/python3.11/site-packages/click/core.py:2663`)

|      % |     Size | Samples | Caller       | Location                                                |
| -----: | -------: | ------: | ------------ | ------------------------------------------------------- |
| 100.0% | 3.37 KiB |       5 | `parse_args` | `/venv/lib/python3.11/site-packages/click/core.py:1303` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/__init__.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.19 KiB |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/pathspec.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.19 KiB |       4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |     Size | Samples | Caller   | Location                                               |
| -----: | -------: | ------: | -------- | ------------------------------------------------------ |
| 100.0% | 3.04 KiB |       2 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:853` |

##### `wrap` (`/usr/lib/python3.11/dataclasses.py:1209`)

|      % |     Size | Samples | Caller     | Location                                                   |
| -----: | -------: | ------: | ---------- | ---------------------------------------------------------- |
| 100.0% | 2.85 KiB |       1 | `<module>` | `/venv/lib/python3.11/site-packages/pathspec/pattern.py:1` |

##### `_process_class` (`/usr/lib/python3.11/dataclasses.py:884`)

|      % |     Size | Samples | Caller | Location                                  |
| -----: | -------: | ------: | ------ | ----------------------------------------- |
| 100.0% | 2.85 KiB |       4 | `wrap` | `/usr/lib/python3.11/dataclasses.py:1209` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/patterns/gitignore/base.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 2.81 KiB |       3 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/types.py:1`)

|      % |     Size | Samples | Caller                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 2.76 KiB |       2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `_signature_from_function` (`/usr/lib/python3.11/inspect.py:2331`)

|      % |     Size | Samples | Caller                     | Location                              |
| -----: | -------: | ------: | -------------------------- | ------------------------------------- |
| 100.0% | 2.56 KiB |       3 | `_signature_from_callable` | `/usr/lib/python3.11/inspect.py:2426` |

### Total size

Functions ranked by total bytes never freed in the function and all its callees.

|      % |     Size | Samples | Function               | Location                                                       |
| -----: | -------: | ------: | ---------------------- | -------------------------------------------------------------- |
| 100.0% | 57.1 MiB |  22,684 | `_run_tracker`         | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40` |
| 100.0% | 57.1 MiB |  22,683 | `run_module`           | `<frozen runpy>:201`                                           |
|  90.5% | 51.6 MiB |  21,189 | `__call__`             | `/venv/lib/python3.11/site-packages/click/core.py:1567`        |
|  90.5% | 51.6 MiB |  21,189 | `patched_main`         | `black/__init__.py:1594`                                       |
|  90.5% | 51.6 MiB |  21,189 | `<module>`             | `black/__main__.py:1`                                          |
|  90.5% | 51.6 MiB |  21,189 | `_run_code`            | `<frozen runpy>:65`                                            |
|  90.5% | 51.6 MiB |  21,189 | `_run_module_code`     | `<frozen runpy>:91`                                            |
|  90.5% | 51.6 MiB |  21,188 | `main`                 | `/venv/lib/python3.11/site-packages/click/core.py:1422`        |
|  90.5% | 51.6 MiB |  21,169 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:1339`        |
|  90.5% | 51.6 MiB |  21,167 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:853`         |
|  90.5% | 51.6 MiB |  21,166 | `new_func`             | `/venv/lib/python3.11/site-packages/click/decorators.py:33`    |
|  90.5% | 51.6 MiB |  21,164 | `main`                 | `black/__init__.py:244`                                        |
|  90.4% | 51.6 MiB |  21,159 | `reformat_one`         | `black/__init__.py:860`                                        |
|  90.4% | 51.6 MiB |  21,152 | `format_file_in_place` | `black/__init__.py:917`                                        |
|  90.4% | 51.6 MiB |  21,151 | `format_file_contents` | `black/__init__.py:1054`                                       |
|  86.9% | 49.6 MiB |  21,145 | `_format_str_once`     | `black/__init__.py:1236`                                       |
|  59.7% | 34.1 MiB |      92 | `format_str`           | `black/__init__.py:1189`                                       |
|  58.6% | 33.4 MiB |  21,084 | `visit`                | `black/nodes.py:163`                                           |
|  58.6% | 33.4 MiB |  21,082 | `visit_default`        | `black/nodes.py:187`                                           |
|  58.6% | 33.4 MiB |  21,082 | `visit_default`        | `black/linegen.py:134`                                         |

#### Categories

##### Ours

|     % |     Size | Samples | Function                          | Location                 |
| ----: | -------: | ------: | --------------------------------- | ------------------------ |
| 90.5% | 51.6 MiB |  21,189 | `patched_main`                    | `black/__init__.py:1594` |
| 90.5% | 51.6 MiB |  21,189 | `<module>`                        | `black/__main__.py:1`    |
| 90.5% | 51.6 MiB |  21,164 | `main`                            | `black/__init__.py:244`  |
| 90.4% | 51.6 MiB |  21,159 | `reformat_one`                    | `black/__init__.py:860`  |
| 90.4% | 51.6 MiB |  21,152 | `format_file_in_place`            | `black/__init__.py:917`  |
| 90.4% | 51.6 MiB |  21,151 | `format_file_contents`            | `black/__init__.py:1054` |
| 86.9% | 49.6 MiB |  21,145 | `_format_str_once`                | `black/__init__.py:1236` |
| 59.7% | 34.1 MiB |      92 | `format_str`                      | `black/__init__.py:1189` |
| 58.6% | 33.4 MiB |  21,084 | `visit`                           | `black/nodes.py:163`     |
| 58.6% | 33.4 MiB |  21,082 | `visit_default`                   | `black/nodes.py:187`     |
| 58.6% | 33.4 MiB |  21,082 | `visit_default`                   | `black/linegen.py:134`   |
| 58.1% | 33.2 MiB |  20,711 | `visit_stmt`                      | `black/linegen.py:199`   |
| 57.5% | 32.8 MiB |  20,270 | `visit_funcdef`                   | `black/linegen.py:254`   |
| 57.4% | 32.7 MiB |  20,144 | `visit_suite`                     | `black/linegen.py:288`   |
| 40.0% | 22.8 MiB |  13,401 | `visit_simple_stmt`               | `black/linegen.py:295`   |
| 32.0% | 18.3 MiB |  20,883 | `append`                          | `black/lines.py:63`      |
| 30.7% | 17.5 MiB |  21,059 | `check_stability_and_equivalence` | `black/__init__.py:1037` |
| 30.2% | 17.2 MiB |  20,789 | `mark`                            | `black/brackets.py:70`   |
| 29.6% | 16.9 MiB |  10,808 | `visit_power`                     | `black/linegen.py:341`   |
| 27.2% | 15.5 MiB |  21,054 | `assert_stable`                   | `black/__init__.py:1557` |

##### Standard library

|      % |     Size | Samples | Function                    | Location                                      |
| -----: | -------: | ------: | --------------------------- | --------------------------------------------- |
| 100.0% | 57.1 MiB |  22,683 | `run_module`                | `<frozen runpy>:201`                          |
|  90.5% | 51.6 MiB |  21,189 | `_run_code`                 | `<frozen runpy>:65`                           |
|  90.5% | 51.6 MiB |  21,189 | `_run_module_code`          | `<frozen runpy>:91`                           |
|   9.5% | 5.42 MiB |   1,493 | `_get_module_details`       | `<frozen runpy>:105`                          |
|   9.5% | 5.42 MiB |   1,486 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`          |
|   9.5% | 5.42 MiB |   1,484 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`          |
|   9.5% | 5.42 MiB |   1,483 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`           |
|   9.5% | 5.41 MiB |   1,481 | `exec_module`               | `<frozen importlib._bootstrap_external>:934`  |
|   9.5% |  5.4 MiB |   1,469 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|   4.7% | 2.69 MiB |     802 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |
|   4.0% | 2.27 MiB |     352 | `source_to_code`            | `<frozen importlib._bootstrap_external>:999`  |
|   3.5% | 2.01 MiB |       3 | `parse`                     | `/usr/lib/python3.11/ast.py:33`               |
|   0.6% |  333 KiB |     341 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`          |
|   0.5% |  311 KiB |     341 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`  |
|   0.2% |  112 KiB |     108 | `_code_to_timestamp_pyc`    | `<frozen importlib._bootstrap_external>:740`  |
|   0.1% | 75.7 KiB |      79 | `__new__`                   | `<frozen abc>:105`                            |
|   0.1% | 47.8 KiB |      25 | `compile`                   | `/usr/lib/python3.11/re/__init__.py:225`      |
|   0.1% | 47.1 KiB |      24 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py:272`      |
|   0.1% | 46.5 KiB |      23 | `compile`                   | `/usr/lib/python3.11/re/_compiler.py:738`     |
|   0.1% |   35 KiB |      32 | `<module>`                  | `/usr/lib/python3.11/tomllib/__init__.py:1`   |

##### Third-party

|      % |     Size | Samples | Function       | Location                                                                         |
| -----: | -------: | ------: | -------------- | -------------------------------------------------------------------------------- |
| 100.0% | 57.1 MiB |  22,684 | `_run_tracker` | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40`                   |
|  90.5% | 51.6 MiB |  21,189 | `__call__`     | `/venv/lib/python3.11/site-packages/click/core.py:1567`                          |
|  90.5% | 51.6 MiB |  21,188 | `main`         | `/venv/lib/python3.11/site-packages/click/core.py:1422`                          |
|  90.5% | 51.6 MiB |  21,169 | `invoke`       | `/venv/lib/python3.11/site-packages/click/core.py:1339`                          |
|  90.5% | 51.6 MiB |  21,167 | `invoke`       | `/venv/lib/python3.11/site-packages/click/core.py:853`                           |
|  90.5% | 51.6 MiB |  21,166 | `new_func`     | `/venv/lib/python3.11/site-packages/click/decorators.py:33`                      |
|   2.3% | 1.31 MiB |     304 | `<module>`     | `/venv/lib/python3.11/site-packages/click/__init__.py:1`                         |
|   2.2% | 1.23 MiB |     233 | `<module>`     | `/venv/lib/python3.11/site-packages/click/core.py:1`                             |
|   1.8% | 1.02 MiB |      24 | `<module>`     | `/venv/lib/python3.11/site-packages/click/formatting.py:1`                       |
|   1.8% | 1.01 MiB |      11 | `<module>`     | `/venv/lib/python3.11/site-packages/click/parser.py:1`                           |
|   0.2% |  137 KiB |     140 | `<module>`     | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:1`                   |
|   0.2% |  125 KiB |     127 | `<module>`     | `/venv/lib/python3.11/site-packages/click/types.py:1`                            |
|   0.2% | 93.8 KiB |     119 | `<module>`     | `/venv/lib/python3.11/site-packages/pathspec/__init__.py:1`                      |
|   0.2% | 91.5 KiB |     115 | `<module>`     | `/venv/lib/python3.11/site-packages/pathspec/gitignore.py:1`                     |
|   0.1% | 65.5 KiB |      84 | `<module>`     | `/venv/lib/python3.11/site-packages/pathspec/_backends/agg.py:1`                 |
|   0.1% | 63.6 KiB |      71 | `<module>`     | `/venv/lib/python3.11/site-packages/packaging/utils.py:1`                        |
|   0.1% | 47.3 KiB |      33 | `decorator`    | `/venv/lib/python3.11/site-packages/click/decorators.py:373`                     |
|   0.1% | 46.9 KiB |      59 | `<module>`     | `/venv/lib/python3.11/site-packages/pathspec/_backends/hyperscan/gitignore.py:1` |
|   0.1% | 45.5 KiB |      32 | `__init__`     | `/venv/lib/python3.11/site-packages/click/core.py:2883`                          |
|   0.1% | 40.8 KiB |      42 | `<module>`     | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:1`                      |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|      % |     Size | Samples | Callee       | Location             |
| -----: | -------: | ------: | ------------ | -------------------- |
| 100.0% | 57.1 MiB |  22,683 | `run_module` | `<frozen runpy>:201` |

##### `run_module` (`<frozen runpy>:201`)

|     % |     Size | Samples | Callee                | Location             |
| ----: | -------: | ------: | --------------------- | -------------------- |
| 90.5% | 51.6 MiB |  21,189 | `_run_module_code`    | `<frozen runpy>:91`  |
|  9.5% | 5.42 MiB |   1,493 | `_get_module_details` | `<frozen runpy>:105` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`)

|      % |     Size | Samples | Callee | Location                                                |
| -----: | -------: | ------: | ------ | ------------------------------------------------------- |
| 100.0% | 51.6 MiB |  21,188 | `main` | `/venv/lib/python3.11/site-packages/click/core.py:1422` |

##### `patched_main` (`black/__init__.py:1594`)

|      % |     Size | Samples | Callee     | Location                                                |
| -----: | -------: | ------: | ---------- | ------------------------------------------------------- |
| 100.0% | 51.6 MiB |  21,189 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py:1567` |

##### `<module>` (`black/__main__.py:1`)

|      % |     Size | Samples | Callee         | Location                 |
| -----: | -------: | ------: | -------------- | ------------------------ |
| 100.0% | 51.6 MiB |  21,189 | `patched_main` | `black/__init__.py:1594` |

##### `_run_code` (`<frozen runpy>:65`)

|      % |     Size | Samples | Callee     | Location              |
| -----: | -------: | ------: | ---------- | --------------------- |
| 100.0% | 51.6 MiB |  21,189 | `<module>` | `black/__main__.py:1` |

##### `_run_module_code` (`<frozen runpy>:91`)

|      % |     Size | Samples | Callee      | Location            |
| -----: | -------: | ------: | ----------- | ------------------- |
| 100.0% | 51.6 MiB |  21,189 | `_run_code` | `<frozen runpy>:65` |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py:1422`)

|      % |     Size | Samples | Callee         | Location                                                |
| -----: | -------: | ------: | -------------- | ------------------------------------------------------- |
| 100.0% | 51.6 MiB |  21,169 | `invoke`       | `/venv/lib/python3.11/site-packages/click/core.py:1339` |
|  <0.1% | 13.6 KiB |      16 | `make_context` | `/venv/lib/python3.11/site-packages/click/core.py:1266` |
|  <0.1% |    529 B |       2 | `__exit__`     | `/venv/lib/python3.11/site-packages/click/core.py:550`  |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:1339`)

|      % |     Size | Samples | Callee   | Location                                               |
| -----: | -------: | ------: | -------- | ------------------------------------------------------ |
| 100.0% | 51.6 MiB |  21,167 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:853` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`)

|      % |     Size | Samples | Callee     | Location                                                    |
| -----: | -------: | ------: | ---------- | ----------------------------------------------------------- |
| 100.0% | 51.6 MiB |  21,166 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |     Size | Samples | Callee | Location                |
| -----: | -------: | ------: | ------ | ----------------------- |
| 100.0% | 51.6 MiB |  21,164 | `main` | `black/__init__.py:244` |

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
| 66.0% | 34.1 MiB |      92 | `format_str`                      | `black/__init__.py:1189` |
| 34.0% | 17.5 MiB |  21,059 | `check_stability_and_equivalence` | `black/__init__.py:1037` |

##### `_format_str_once` (`black/__init__.py:1236`)

|     % |     Size | Samples | Callee              | Location                |
| ----: | -------: | ------: | ------------------- | ----------------------- |
| 67.4% | 33.4 MiB |  21,084 | `visit`             | `black/nodes.py:163`    |
| 22.3% |   11 MiB |      30 | `lib2to3_parse`     | `black/parsing.py:55`   |
|  8.2% | 4.08 MiB |      19 | `transform_line`    | `black/linegen.py:601`  |
|  2.0% |    1 MiB |       3 | `maybe_empty_lines` | `black/lines.py:560`    |
| <0.1% | 19.9 KiB |       3 | `normalize_fmt_off` | `black/comments.py:168` |

##### `format_str` (`black/__init__.py:1189`)

|      % |     Size | Samples | Callee             | Location                 |
| -----: | -------: | ------: | ------------------ | ------------------------ |
| 100.0% | 34.1 MiB |      91 | `_format_str_once` | `black/__init__.py:1236` |

##### `visit` (`black/nodes.py:163`)

|      % |     Size | Samples | Callee              | Location               |
| -----: | -------: | ------: | ------------------- | ---------------------- |
| 100.0% | 33.4 MiB |  21,082 | `visit_default`     | `black/linegen.py:134` |
|  99.2% | 33.2 MiB |  20,711 | `visit_stmt`        | `black/linegen.py:199` |
|  98.1% | 32.8 MiB |  20,270 | `visit_funcdef`     | `black/linegen.py:254` |
|  97.9% | 32.7 MiB |  20,144 | `visit_suite`       | `black/linegen.py:288` |
|  68.3% | 22.8 MiB |  13,401 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/nodes.py:187`)

|      % |     Size | Samples | Callee  | Location             |
| -----: | -------: | ------: | ------- | -------------------- |
| 100.0% | 33.4 MiB |  21,082 | `visit` | `black/nodes.py:163` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Samples | Callee              | Location               |
| -----: | -------: | ------: | ------------------- | ---------------------- |
| 100.0% | 33.4 MiB |  21,082 | `visit_default`     | `black/nodes.py:187`   |
|  54.7% | 18.3 MiB |  20,883 | `append`            | `black/lines.py:63`    |
|  20.9% |    7 MiB |       7 | `generate_comments` | `black/comments.py:52` |

##### `visit_stmt` (`black/linegen.py:199`)

|      % |     Size | Samples | Callee                       | Location                |
| -----: | -------: | ------: | ---------------------------- | ----------------------- |
| 100.0% | 33.2 MiB |  20,709 | `visit`                      | `black/nodes.py:163`    |
|   9.0% |    3 MiB |       4 | `normalize_invisible_parens` | `black/linegen.py:1328` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Samples | Callee  | Location             |
| -----: | -------: | ------: | ------- | -------------------- |
| 100.0% | 32.8 MiB |  20,270 | `visit` | `black/nodes.py:163` |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Samples | Callee          | Location               |
| -----: | -------: | ------: | --------------- | ---------------------- |
| 100.0% | 32.7 MiB |  20,144 | `visit_default` | `black/linegen.py:134` |

##### `visit_simple_stmt` (`black/linegen.py:295`)

|      % |     Size | Samples | Callee          | Location               |
| -----: | -------: | ------: | --------------- | ---------------------- |
| 100.0% | 22.8 MiB |  13,401 | `visit_default` | `black/linegen.py:134` |

##### `append` (`black/lines.py:63`)

|     % |     Size | Samples | Callee       | Location               |
| ----: | -------: | ------: | ------------ | ---------------------- |
| 88.7% | 16.2 MiB |  20,788 | `mark`       | `black/brackets.py:70` |
| 11.2% | 2.05 MiB |      91 | `whitespace` | `black/nodes.py:194`   |

##### `check_stability_and_equivalence` (`black/__init__.py:1037`)

|     % |     Size | Samples | Callee              | Location                 |
| ----: | -------: | ------: | ------------------- | ------------------------ |
| 88.6% | 15.5 MiB |  21,054 | `assert_stable`     | `black/__init__.py:1557` |
| 11.4% | 2.01 MiB |       4 | `assert_equivalent` | `black/__init__.py:1524` |

##### `visit_power` (`black/linegen.py:341`)

|      % |     Size | Samples | Callee          | Location               |
| -----: | -------: | ------: | --------------- | ---------------------- |
| 100.0% | 16.9 MiB |  10,807 | `visit_default` | `black/linegen.py:134` |

##### `assert_stable` (`black/__init__.py:1557`)

|      % |     Size | Samples | Callee             | Location                 |
| -----: | -------: | ------: | ------------------ | ------------------------ |
| 100.0% | 15.5 MiB |  21,054 | `_format_str_once` | `black/__init__.py:1236` |

##### `_get_module_details` (`<frozen runpy>:105`)

|     % |     Size | Samples | Callee                | Location                             |
| ----: | -------: | ------: | --------------------- | ------------------------------------ |
| 99.9% | 5.42 MiB |   1,486 | `_find_and_load`      | `<frozen importlib._bootstrap>:1167` |
| 99.9% | 5.42 MiB |   1,486 | `_get_module_details` | `<frozen runpy>:105`                 |
|  0.1% | 5.66 KiB |       6 | `find_spec`           | `<frozen importlib.util>:73`         |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

|      % |     Size | Samples | Callee                    | Location                             |
| -----: | -------: | ------: | ------------------------- | ------------------------------------ |
| 100.0% | 5.42 MiB |   1,484 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |
|  <0.1% |    560 B |       1 | `__enter__`               | `<frozen importlib._bootstrap>:169`  |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

|      % |     Size | Samples | Callee                      | Location                             |
| -----: | -------: | ------: | --------------------------- | ------------------------------------ |
| 100.0% | 5.42 MiB |   1,483 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`  |
|   0.7% | 37.2 KiB |      47 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`  |
|   0.1% | 7.48 KiB |       4 | `_find_spec`                | `<frozen importlib._bootstrap>:1056` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

|      % |     Size | Samples | Callee             | Location                                     |
| -----: | -------: | ------: | ------------------ | -------------------------------------------- |
| 100.0% | 5.41 MiB |   1,481 | `exec_module`      | `<frozen importlib._bootstrap_external>:934` |
|  <0.1% | 1.83 KiB |       2 | `module_from_spec` | `<frozen importlib._bootstrap>:566`          |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

|     % |     Size | Samples | Callee                      | Location                                      |
| ----: | -------: | ------: | --------------------------- | --------------------------------------------- |
| 99.1% | 5.37 MiB |   1,435 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
| 49.6% | 2.69 MiB |     802 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|     % |     Size | Samples | Callee     | Location                                                 |
| ----: | -------: | ------: | ---------- | -------------------------------------------------------- |
| 99.4% | 5.37 MiB |   1,435 | `<module>` | `black/__init__.py:1`                                    |
| 43.3% | 2.34 MiB |     316 | `<module>` | `black/comments.py:1`                                    |
| 24.4% | 1.32 MiB |     295 | `<module>` | `black/nodes.py:1`                                       |
| 24.2% | 1.31 MiB |     304 | `<module>` | `/venv/lib/python3.11/site-packages/click/__init__.py:1` |
| 22.8% | 1.23 MiB |     233 | `<module>` | `/venv/lib/python3.11/site-packages/click/core.py:1`     |

##### `get_code` (`<frozen importlib._bootstrap_external>:1007`)

|     % |     Size | Samples | Callee                   | Location                                      |
| ----: | -------: | ------: | ------------------------ | --------------------------------------------- |
| 84.6% | 2.27 MiB |     352 | `source_to_code`         | `<frozen importlib._bootstrap_external>:999`  |
| 11.3% |  311 KiB |     341 | `_compile_bytecode`      | `<frozen importlib._bootstrap_external>:727`  |
|  4.1% |  112 KiB |     108 | `_code_to_timestamp_pyc` | `<frozen importlib._bootstrap_external>:740`  |
| <0.1% |    624 B |       1 | `_cache_bytecode`        | `<frozen importlib._bootstrap_external>:1151` |

##### `source_to_code` (`<frozen importlib._bootstrap_external>:999`)

|      % |     Size | Samples | Callee                      | Location                            |
| -----: | -------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 2.27 MiB |     352 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/__init__.py:1`)

|     % |    Size | Samples | Callee           | Location                             |
| ----: | ------: | ------: | ---------------- | ------------------------------------ |
| 99.8% | 1.3 MiB |     303 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/core.py:1`)

|     % |     Size | Samples | Callee             | Location                                               |
| ----: | -------: | ------: | ------------------ | ------------------------------------------------------ |
| 85.5% | 1.05 MiB |      53 | `_find_and_load`   | `<frozen importlib._bootstrap>:1167`                   |
| 11.1% |  140 KiB |     145 | `_handle_fromlist` | `<frozen importlib._bootstrap>:1209`                   |
|  1.1% | 13.9 KiB |       9 | `__new__`          | `<frozen abc>:105`                                     |
|  0.2% | 2.49 KiB |       3 | `__new__`          | `/usr/lib/python3.11/enum.py:488`                      |
|  0.1% |    768 B |       1 | `Context`          | `/venv/lib/python3.11/site-packages/click/core.py:204` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/formatting.py:1`)

|     % |     Size | Samples | Callee           | Location                             |
| ----: | -------: | ------: | ---------------- | ------------------------------------ |
| 99.8% | 1.02 MiB |      22 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1209`)

|      % |    Size | Samples | Callee                      | Location                            |
| -----: | ------: | ------: | --------------------------- | ----------------------------------- |
| 100.0% | 333 KiB |     341 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/specifiers.py:1`)

|     % |     Size | Samples | Callee           | Location                                                         |
| ----: | -------: | ------: | ---------------- | ---------------------------------------------------------------- |
| 87.6% |  120 KiB |     129 | `_find_and_load` | `<frozen importlib._bootstrap>:1167`                             |
|  6.2% |  8.5 KiB |       2 | `Specifier`      | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:220` |
|  4.4% | 6.07 KiB |       7 | `__new__`        | `<frozen abc>:105`                                               |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/types.py:1`)

|     % |     Size | Samples | Callee           | Location                             |
| ----: | -------: | ------: | ---------------- | ------------------------------------ |
| 53.0% | 66.2 KiB |      58 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |
| 30.6% | 38.2 KiB |      45 | `__new__`        | `<frozen abc>:105`                   |
| 12.6% | 15.7 KiB |      19 | `__new__`        | `/usr/lib/python3.11/typing.py:2891` |
|  1.1% | 1.42 KiB |       2 | `inner`          | `/usr/lib/python3.11/typing.py:338`  |
|  0.4% |    542 B |       1 | `__init__`       | `/usr/lib/python3.11/typing.py:992`  |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/__init__.py:1`)

|     % |     Size | Samples | Callee           | Location                             |
| ----: | -------: | ------: | ---------------- | ------------------------------------ |
| 99.2% | 93.1 KiB |     118 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/gitignore.py:1`)

|     % |   Size | Samples | Callee           | Location                             |
| ----: | -----: | ------: | ---------------- | ------------------------------------ |
| 97.3% | 89 KiB |     112 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/_backends/agg.py:1`)

|     % |     Size | Samples | Callee           | Location                             |
| ----: | -------: | ------: | ---------------- | ------------------------------------ |
| 98.9% | 64.8 KiB |      83 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/utils.py:1`)

|     % |   Size | Samples | Callee           | Location                             |
| ----: | -----: | ------: | ---------------- | ------------------------------------ |
| 94.4% | 60 KiB |      67 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `compile` (`/usr/lib/python3.11/re/__init__.py:225`)

|     % |     Size | Samples | Callee     | Location                                 |
| ----: | -------: | ------: | ---------- | ---------------------------------------- |
| 98.6% | 47.1 KiB |      24 | `_compile` | `/usr/lib/python3.11/re/__init__.py:272` |

##### `decorator` (`/venv/lib/python3.11/site-packages/click/decorators.py:373`)

|     % |     Size | Samples | Callee     | Location                                                |
| ----: | -------: | ------: | ---------- | ------------------------------------------------------- |
| 96.2% | 45.5 KiB |      32 | `__init__` | `/venv/lib/python3.11/site-packages/click/core.py:2883` |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py:272`)

|     % |     Size | Samples | Callee    | Location                                  |
| ----: | -------: | ------: | --------- | ----------------------------------------- |
| 98.6% | 46.5 KiB |      23 | `compile` | `/usr/lib/python3.11/re/_compiler.py:738` |
|  1.4% |    698 B |       1 | `__and__` | `/usr/lib/python3.11/enum.py:1504`        |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/_backends/hyperscan/gitignore.py:1`)

|     % |     Size | Samples | Callee           | Location                             |
| ----: | -------: | ------: | ---------------- | ------------------------------------ |
| 94.8% | 44.5 KiB |      56 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|     % |     Size | Samples | Callee  | Location                                  |
| ----: | -------: | ------: | ------- | ----------------------------------------- |
| 31.0% | 14.4 KiB |       5 | `parse` | `/usr/lib/python3.11/re/_parser.py:970`   |
| 20.4% |  9.5 KiB |       6 | `_code` | `/usr/lib/python3.11/re/_compiler.py:571` |

##### `__init__` (`/venv/lib/python3.11/site-packages/click/core.py:2883`)

|    % |     Size | Samples | Callee     | Location                                                |
| ---: | -------: | ------: | ---------- | ------------------------------------------------------- |
| 2.6% | 1.17 KiB |       1 | `__init__` | `/venv/lib/python3.11/site-packages/click/core.py:2237` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/_ranges.py:1`)

|     % |     Size | Samples | Callee           | Location                             |
| ----: | -------: | ------: | ---------------- | ------------------------------------ |
| 80.6% | 32.9 KiB |      35 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |
|  4.1% | 1.69 KiB |       2 | `__new__`        | `/usr/lib/python3.11/enum.py:488`    |

##### `<module>` (`/usr/lib/python3.11/tomllib/__init__.py:1`)

|      % |   Size | Samples | Callee           | Location                             |
| -----: | -----: | ------: | ---------------- | ------------------------------------ |
| 100.0% | 35 KiB |      32 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

## Hottest call stacks

Call stacks ranked by bytes never freed in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>:201`) ← `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 8.8% |    5 MiB |       5 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `shift` (`blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 5.3% |    3 MiB |       6 | `transform_line` (`black/linegen.py:601`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 3.5% | 2.01 MiB |       3 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 3.5% |    2 MiB |       2 | `push` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3.5% |    2 MiB |       2 | `convert` (`blib2to3/pytree.py:486`) ← `pop` (`blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.9% | 1.07 MiB |      96 | `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `source_to_code` (`<frozen importlib._bootstrap_external>:999`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.8% | 1.01 MiB |       6 | `make_grammar` (`blib2to3/pgen2/pgen.py:49`) ← `generate_grammar` (426) ← `load_grammar` (`blib2to3/pgen2/driver.py:246`) ← `load_packaged_grammar` (280) ← `initialize` (`blib2to3/pygram.py:165`) ← `<module>` (`black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.8% | 1.01 MiB |      15 | `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `source_to_code` (`<frozen importlib._bootstrap_external>:999`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.8% | 1.01 MiB |      11 | `<module>` (`/venv/lib/python3.11/site-packages/click/parser.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/formatting.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/core.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.8% |    1 MiB |       2 | `maybe_empty_lines` (`black/lines.py:560`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.8% |    1 MiB |       1 | `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.8% |    1 MiB |       1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `preceding_leaf` (`black/nodes.py:441`) ← `whitespace` (194) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.8% |    1 MiB |       1 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit_NUMBER` (505) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                |
| 1.8% |    1 MiB |       1 | `changed` (`blib2to3/pytree.py:171`) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91) |
| 1.8% |    1 MiB |       1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`black/nodes.py:194`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                         |
| 1.8% |    1 MiB |       1 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_test` (160) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.8% |    1 MiB |       1 | `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.8% |    1 MiB |       1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `wrap_in_parentheses` (`black/nodes.py:935`) ← `normalize_invisible_parens` (`black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.8% |    1 MiB |       1 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.8% |    1 MiB |       1 | `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

# Peak memory profile

Held 72.4 MiB over 23,709 allocations (3.13 KiB per allocation).

| Category         |     % |     Size | Allocations |
| ---------------- | ----: | -------: | ----------: |
| Ours             | 71.8% |   52 MiB |      21,382 |
| Standard library | 27.9% | 20.2 MiB |       2,095 |
| Third-party      |  0.3% |  238 KiB |         232 |

## Hottest functions

### Self size

Functions ranked by bytes held at peak memory directly in the function body, excluding callees.

|     % |     Size | Allocations | Function                    | Location                                     |
| ----: | -------: | ----------: | --------------------------- | -------------------------------------------- |
| 22.4% | 16.2 MiB |      20,788 | `mark`                      | `black/brackets.py:70`                       |
| 22.0% |   16 MiB |       1,014 | `parse`                     | `/usr/lib/python3.11/ast.py:33`              |
|  8.3% |    6 MiB |           6 | `changed`                   | `blib2to3/pytree.py:171`                     |
|  6.9% |    5 MiB |           5 | `__new__`                   | `blib2to3/pytree.py:81`                      |
|  5.5% |    4 MiB |           5 | `visit_default`             | `black/linegen.py:134`                       |
|  5.5% |    4 MiB |           4 | `generate_tokens`           | `blib2to3/pgen2/tokenize.py:565`             |
|  4.1% |    3 MiB |           3 | `__str__`                   | `black/lines.py:490`                         |
|  3.1% | 2.27 MiB |         352 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`          |
|  2.8% |    2 MiB |           6 | `visit`                     | `black/nodes.py:163`                         |
|  2.8% |    2 MiB |           2 | `generate_comments`         | `black/comments.py:52`                       |
|  2.8% |    2 MiB |           2 | `is_split_before_delimiter` | `black/brackets.py:232`                      |
|  1.8% | 1.31 MiB |         353 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727` |
|  1.6% | 1.14 MiB |         196 | `update_sibling_maps`       | `blib2to3/pytree.py:369`                     |
|  1.4% | 1.01 MiB |           6 | `make_label`                | `blib2to3/pgen2/pgen.py:84`                  |
|  1.4% |    1 MiB |           5 | `__init__`                  | `blib2to3/pytree.py:248`                     |
|  1.4% |    1 MiB |           1 | `push`                      | `blib2to3/pgen2/parse.py:386`                |
|  1.4% |    1 MiB |           1 | `prefix`                    | `blib2to3/pytree.py:480`                     |
|  1.4% |    1 MiB |           1 | `normalize_trailing_prefix` | `black/comments.py:127`                      |
|  1.4% |    1 MiB |           1 | `__init__`                  | `<string>:2`                                 |
|  0.3% |  225 KiB |           5 | `_format_str_once`          | `black/__init__.py:1236`                     |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                    | Location                         |
| ----: | -------: | ----------: | --------------------------- | -------------------------------- |
| 22.4% | 16.2 MiB |      20,788 | `mark`                      | `black/brackets.py:70`           |
|  8.3% |    6 MiB |           6 | `changed`                   | `blib2to3/pytree.py:171`         |
|  6.9% |    5 MiB |           5 | `__new__`                   | `blib2to3/pytree.py:81`          |
|  5.5% |    4 MiB |           5 | `visit_default`             | `black/linegen.py:134`           |
|  5.5% |    4 MiB |           4 | `generate_tokens`           | `blib2to3/pgen2/tokenize.py:565` |
|  4.1% |    3 MiB |           3 | `__str__`                   | `black/lines.py:490`             |
|  2.8% |    2 MiB |           6 | `visit`                     | `black/nodes.py:163`             |
|  2.8% |    2 MiB |           2 | `generate_comments`         | `black/comments.py:52`           |
|  2.8% |    2 MiB |           2 | `is_split_before_delimiter` | `black/brackets.py:232`          |
|  1.6% | 1.14 MiB |         196 | `update_sibling_maps`       | `blib2to3/pytree.py:369`         |
|  1.4% | 1.01 MiB |           6 | `make_label`                | `blib2to3/pgen2/pgen.py:84`      |
|  1.4% |    1 MiB |           5 | `__init__`                  | `blib2to3/pytree.py:248`         |
|  1.4% |    1 MiB |           1 | `push`                      | `blib2to3/pgen2/parse.py:386`    |
|  1.4% |    1 MiB |           1 | `prefix`                    | `blib2to3/pytree.py:480`         |
|  1.4% |    1 MiB |           1 | `normalize_trailing_prefix` | `black/comments.py:127`          |
|  1.4% |    1 MiB |           1 | `__init__`                  | `<string>:2`                     |
|  0.3% |  225 KiB |           5 | `_format_str_once`          | `black/__init__.py:1236`         |
|  0.1% | 57.2 KiB |          65 | `normalize_string_prefix`   | `black/strings.py:143`           |
|  0.1% | 41.5 KiB |          16 | `copy`                      | `blib2to3/pgen2/grammar.py:131`  |
| <0.1% |   32 KiB |           1 | `classify`                  | `blib2to3/pgen2/parse.py:336`    |

##### Standard library

|     % |     Size | Allocations | Function                    | Location                                          |
| ----: | -------: | ----------: | --------------------------- | ------------------------------------------------- |
| 22.0% |   16 MiB |       1,014 | `parse`                     | `/usr/lib/python3.11/ast.py:33`                   |
|  3.1% | 2.27 MiB |         352 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`               |
|  1.8% | 1.31 MiB |         353 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`      |
|  0.3% |  222 KiB |           1 | `decode`                    | `<frozen codecs>:319`                             |
|  0.2% |  113 KiB |          82 | `__new__`                   | `<frozen abc>:105`                                |
|  0.2% |  112 KiB |         108 | `_code_to_timestamp_pyc`    | `<frozen importlib._bootstrap_external>:740`      |
| <0.1% | 24.1 KiB |          27 | `__new__`                   | `/usr/lib/python3.11/enum.py:488`                 |
| <0.1% | 22.6 KiB |          12 | `compile`                   | `/usr/lib/python3.11/re/_compiler.py:738`         |
| <0.1% | 19.8 KiB |          12 | `<module>`                  | `/usr/lib/python3.11/tomllib/_parser.py:1`        |
| <0.1% | 17.4 KiB |          21 | `__new__`                   | `/usr/lib/python3.11/typing.py:2891`              |
| <0.1% |   12 KiB |           3 | `inner`                     | `/usr/lib/python3.11/typing.py:338`               |
| <0.1% |    8 KiB |           4 | `_fill_cache`               | `<frozen importlib._bootstrap_external>:1655`     |
| <0.1% | 7.97 KiB |           1 | `_parse_sub`                | `/usr/lib/python3.11/re/_parser.py:447`           |
| <0.1% | 6.73 KiB |           8 | `__setattr__`               | `/usr/lib/python3.11/enum.py:831`                 |
| <0.1% | 5.63 KiB |           6 | `namedtuple`                | `/usr/lib/python3.11/collections/__init__.py:348` |
| <0.1% | 5.61 KiB |           3 | `_parse`                    | `/usr/lib/python3.11/re/_parser.py:507`           |
| <0.1% | 5.32 KiB |           2 | `_code`                     | `/usr/lib/python3.11/re/_compiler.py:571`         |
| <0.1% | 4.73 KiB |           6 | `<module>`                  | `/usr/lib/python3.11/pkgutil.py:1`                |
| <0.1% | 2.85 KiB |           1 | `wrap`                      | `/usr/lib/python3.11/dataclasses.py:1209`         |
| <0.1% | 2.85 KiB |           4 | `_process_class`            | `/usr/lib/python3.11/dataclasses.py:884`          |

#### Lines

Lines ranked by contribution to each function's self size.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Allocations | Location                |
| -----: | -------: | ----------: | ----------------------- |
| 100.0% | 16.2 MiB |      20,787 | `black/brackets.py:112` |
|  <0.1% | 1.49 KiB |           1 | `black/brackets.py:114` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |   Size | Allocations | Location                        |
| -----: | -----: | ----------: | ------------------------------- |
| 100.0% | 16 MiB |       1,014 | `/usr/lib/python3.11/ast.py:50` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Allocations | Location                 |
| ----: | ----: | ----------: | ------------------------ |
| 66.7% | 4 MiB |           4 | `blib2to3/pytree.py:176` |
| 33.3% | 2 MiB |           2 | `blib2to3/pytree.py:175` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 5 MiB |           5 | `blib2to3/pytree.py:84` |

##### `visit_default` (`black/linegen.py:134`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 75.0% | 3 MiB |           3 | `black/linegen.py:158` |
| 25.0% | 1 MiB |           1 | `black/linegen.py:138` |
| <0.1% | 702 B |           1 | `black/linegen.py:144` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|     % |  Size | Allocations | Location                         |
| ----: | ----: | ----------: | -------------------------------- |
| 50.0% | 2 MiB |           2 | `blib2to3/pgen2/tokenize.py:879` |
| 25.0% | 1 MiB |           1 | `blib2to3/pgen2/tokenize.py:752` |
| 25.0% | 1 MiB |           1 | `blib2to3/pgen2/tokenize.py:972` |

##### `__str__` (`black/lines.py:490`)

|     % |  Size | Allocations | Location             |
| ----: | ----: | ----------: | -------------------- |
| 66.7% | 2 MiB |           2 | `black/lines.py:500` |
| 33.3% | 1 MiB |           1 | `black/lines.py:498` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Allocations | Location                            |
| -----: | -------: | ----------: | ----------------------------------- |
| 100.0% | 2.27 MiB |         352 | `<frozen importlib._bootstrap>:241` |

##### `visit` (`black/nodes.py:163`)

|     % |     Size | Allocations | Location             |
| ----: | -------: | ----------: | -------------------- |
| 99.9% |    2 MiB |           3 | `black/nodes.py:185` |
|  0.1% | 2.68 KiB |           3 | `black/nodes.py:183` |

##### `generate_comments` (`black/comments.py:52`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 50.0% | 1 MiB |           1 | `black/comments.py:76` |
| 50.0% | 1 MiB |           1 | `black/comments.py:72` |

##### `is_split_before_delimiter` (`black/brackets.py:232`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 2 MiB |           2 | `black/brackets.py:240` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Location                                     |
| -----: | -------: | ----------: | -------------------------------------------- |
| 100.0% | 1.31 MiB |         353 | `<frozen importlib._bootstrap_external>:729` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 88.0% |    1 MiB |          10 | `blib2to3/pytree.py:379` |
|  6.0% | 70.3 KiB |          93 | `blib2to3/pytree.py:376` |
|  6.0% | 70.3 KiB |          93 | `blib2to3/pytree.py:377` |

##### `make_label` (`blib2to3/pgen2/pgen.py:84`)

|     % |     Size | Allocations | Location                     |
| ----: | -------: | ----------: | ---------------------------- |
| 99.2% |    1 MiB |           1 | `blib2to3/pgen2/pgen.py:111` |
|  0.3% | 3.19 KiB |           1 | `blib2to3/pgen2/pgen.py:95`  |
|  0.3% |  2.7 KiB |           2 | `blib2to3/pgen2/pgen.py:132` |
|  0.2% | 1.81 KiB |           1 | `blib2to3/pgen2/pgen.py:131` |
|  0.1% |    768 B |           1 | `blib2to3/pgen2/pgen.py:123` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           5 | `blib2to3/pytree.py:266` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:394` |

##### `prefix` (`blib2to3/pytree.py:480`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:482` |

##### `normalize_trailing_prefix` (`black/comments.py:127`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 1 MiB |           1 | `black/comments.py:136` |

##### `__init__` (`<string>:2`)

|      % |  Size | Allocations | Location     |
| -----: | ----: | ----------: | ------------ |
| 100.0% | 1 MiB |           1 | `<string>:7` |

##### `_format_str_once` (`black/__init__.py:1236`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 98.6% |  222 KiB |           1 | `black/__init__.py:1287` |
|  0.5% | 1.07 KiB |           1 | `black/__init__.py:1271` |
|  0.3% |    800 B |           1 | `black/__init__.py:1239` |
|  0.3% |    644 B |           1 | `black/__init__.py:1269` |
|  0.3% |    638 B |           1 | `black/__init__.py:1244` |

##### `decode` (`<frozen codecs>:319`)

|      % |    Size | Allocations | Location              |
| -----: | ------: | ----------: | --------------------- |
| 100.0% | 222 KiB |           1 | `<frozen codecs>:322` |

##### `__new__` (`<frozen abc>:105`)

|     % |    Size | Allocations | Location           |
| ----: | ------: | ----------: | ------------------ |
| 99.3% | 113 KiB |          81 | `<frozen abc>:106` |
|  0.7% |   768 B |           1 | `<frozen abc>:107` |

##### `_code_to_timestamp_pyc` (`<frozen importlib._bootstrap_external>:740`)

|      % |    Size | Allocations | Location                                     |
| -----: | ------: | ----------: | -------------------------------------------- |
| 100.0% | 112 KiB |         108 | `<frozen importlib._bootstrap_external>:746` |

##### `normalize_string_prefix` (`black/strings.py:143`)

|      % |     Size | Allocations | Location               |
| -----: | -------: | ----------: | ---------------------- |
| 100.0% | 57.2 KiB |          65 | `black/strings.py:158` |

##### `copy` (`blib2to3/pgen2/grammar.py:131`)

|     % |     Size | Allocations | Location                        |
| ----: | -------: | ----------: | ------------------------------- |
| 88.2% | 36.6 KiB |          12 | `blib2to3/pgen2/grammar.py:145` |
|  7.6% | 3.16 KiB |           2 | `blib2to3/pgen2/grammar.py:146` |
|  4.2% | 1.75 KiB |           2 | `blib2to3/pgen2/grammar.py:147` |

##### `classify` (`blib2to3/pgen2/parse.py:336`)

|      % |   Size | Allocations | Location                      |
| -----: | -----: | ----------: | ----------------------------- |
| 100.0% | 32 KiB |           1 | `blib2to3/pgen2/parse.py:343` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

|      % |     Size | Allocations | Location                          |
| -----: | -------: | ----------: | --------------------------------- |
| 100.0% | 24.1 KiB |          27 | `/usr/lib/python3.11/enum.py:554` |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|      % |     Size | Allocations | Location                                  |
| -----: | -------: | ----------: | ----------------------------------------- |
| 100.0% | 22.6 KiB |          12 | `/usr/lib/python3.11/re/_compiler.py:759` |

##### `<module>` (`/usr/lib/python3.11/tomllib/_parser.py:1`)

|     % |  Size | Allocations | Location                                    |
| ----: | ----: | ----------: | ------------------------------------------- |
| 20.2% | 4 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:37` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:22` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:26` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:27` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:36` |

##### `__new__` (`/usr/lib/python3.11/typing.py:2891`)

|      % |     Size | Allocations | Location                             |
| -----: | -------: | ----------: | ------------------------------------ |
| 100.0% | 17.4 KiB |          21 | `/usr/lib/python3.11/typing.py:2909` |

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|      % |   Size | Allocations | Location                            |
| -----: | -----: | ----------: | ----------------------------------- |
| 100.0% | 12 KiB |           3 | `/usr/lib/python3.11/typing.py:341` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1655`)

|      % |  Size | Allocations | Location                                      |
| -----: | ----: | ----------: | --------------------------------------------- |
| 100.0% | 8 KiB |           4 | `<frozen importlib._bootstrap_external>:1667` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|      % |     Size | Allocations | Location                                |
| -----: | -------: | ----------: | --------------------------------------- |
| 100.0% | 7.97 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:455` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

|      % |     Size | Allocations | Location                          |
| -----: | -------: | ----------: | --------------------------------- |
| 100.0% | 6.73 KiB |           8 | `/usr/lib/python3.11/enum.py:842` |

##### `namedtuple` (`/usr/lib/python3.11/collections/__init__.py:348`)

|      % |     Size | Allocations | Location                                          |
| -----: | -------: | ----------: | ------------------------------------------------- |
| 100.0% | 5.63 KiB |           6 | `/usr/lib/python3.11/collections/__init__.py:501` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|     % |     Size | Allocations | Location                                |
| ----: | -------: | ----------: | --------------------------------------- |
| 43.4% | 2.43 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:539` |
| 33.9% |  1.9 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:568` |
| 22.7% | 1.28 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:838` |

##### `_code` (`/usr/lib/python3.11/re/_compiler.py:571`)

|     % |     Size | Allocations | Location                                  |
| ----: | -------: | ----------: | ----------------------------------------- |
| 81.6% | 4.34 KiB |           1 | `/usr/lib/python3.11/re/_compiler.py:580` |
| 18.4% |  1,002 B |           1 | `/usr/lib/python3.11/re/_compiler.py:577` |

##### `<module>` (`/usr/lib/python3.11/pkgutil.py:1`)

|     % |     Size | Allocations | Location                             |
| ----: | -------: | ----------: | ------------------------------------ |
| 35.7% | 1.69 KiB |           2 | `/usr/lib/python3.11/pkgutil.py:194` |
| 35.7% | 1.69 KiB |           2 | `/usr/lib/python3.11/pkgutil.py:269` |
| 15.9% |    768 B |           1 | `/usr/lib/python3.11/pkgutil.py:137` |
| 12.8% |    620 B |           1 | `/usr/lib/python3.11/pkgutil.py:184` |

##### `wrap` (`/usr/lib/python3.11/dataclasses.py:1209`)

|      % |     Size | Allocations | Location                                  |
| -----: | -------: | ----------: | ----------------------------------------- |
| 100.0% | 2.85 KiB |           1 | `/usr/lib/python3.11/dataclasses.py:1210` |

##### `_process_class` (`/usr/lib/python3.11/dataclasses.py:884`)

|     % |     Size | Allocations | Location                                  |
| ----: | -------: | ----------: | ----------------------------------------- |
| 41.3% | 1.18 KiB |           1 | `/usr/lib/python3.11/dataclasses.py:958`  |
| 21.0% |    612 B |           1 | `/usr/lib/python3.11/dataclasses.py:1027` |
| 19.9% |    580 B |           1 | `/usr/lib/python3.11/dataclasses.py:1096` |
| 17.8% |    518 B |           1 | `/usr/lib/python3.11/dataclasses.py:947`  |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Allocations | Caller   | Location            |
| -----: | -------: | ----------: | -------- | ------------------- |
| 100.0% | 16.2 MiB |      20,788 | `append` | `black/lines.py:63` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |   Size | Allocations | Caller                  | Location               |
| -----: | -----: | ----------: | ----------------------- | ---------------------- |
| 100.0% | 16 MiB |       1,014 | `_parse_single_version` | `black/parsing.py:117` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Allocations | Caller    | Location                 |
| ----: | ----: | ----------: | --------- | ------------------------ |
| 66.7% | 4 MiB |           4 | `changed` | `blib2to3/pytree.py:171` |
| 33.3% | 2 MiB |           2 | `prefix`  | `blib2to3/pytree.py:480` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 5 MiB |           5 | `convert` | `blib2to3/pytree.py:486` |

##### `visit_default` (`black/linegen.py:134`)

|      % |  Size | Allocations | Caller         | Location               |
| -----: | ----: | ----------: | -------------- | ---------------------- |
| 100.0% | 4 MiB |           4 | `visit`        | `black/nodes.py:163`   |
|  <0.1% | 702 B |           1 | `visit_STRING` | `black/linegen.py:413` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|      % |  Size | Allocations | Caller     | Location                      |
| -----: | ----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 4 MiB |           4 | `__next__` | `blib2to3/pgen2/driver.py:80` |

##### `__str__` (`black/lines.py:490`)

|     % |  Size | Allocations | Caller             | Location                 |
| ----: | ----: | ----------: | ------------------ | ------------------------ |
| 66.7% | 2 MiB |           2 | `_format_str_once` | `black/__init__.py:1236` |
| 33.3% | 1 MiB |           1 | `line_to_string`   | `black/lines.py:1073`    |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Allocations | Caller           | Location                                     |
| -----: | -------: | ----------: | ---------------- | -------------------------------------------- |
| 100.0% | 2.27 MiB |         352 | `source_to_code` | `<frozen importlib._bootstrap_external>:999` |

##### `visit` (`black/nodes.py:163`)

|      % |  Size | Allocations | Caller             | Location                 |
| -----: | ----: | ----------: | ------------------ | ------------------------ |
| 100.0% | 2 MiB |           5 | `visit_default`    | `black/nodes.py:187`     |
|  <0.1% | 690 B |           1 | `_format_str_once` | `black/__init__.py:1236` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Allocations | Caller          | Location               |
| -----: | ----: | ----------: | --------------- | ---------------------- |
| 100.0% | 2 MiB |           2 | `visit_default` | `black/linegen.py:134` |

##### `is_split_before_delimiter` (`black/brackets.py:232`)

|      % |  Size | Allocations | Caller | Location               |
| -----: | ----: | ----------: | ------ | ---------------------- |
| 100.0% | 2 MiB |           2 | `mark` | `black/brackets.py:70` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Caller     | Location                                      |
| -----: | -------: | ----------: | ---------- | --------------------------------------------- |
| 100.0% | 1.31 MiB |         353 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|      % |     Size | Allocations | Caller         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 1.14 MiB |         196 | `prev_sibling` | `blib2to3/pytree.py:207` |

##### `make_label` (`blib2to3/pgen2/pgen.py:84`)

|      % |     Size | Allocations | Caller         | Location                    |
| -----: | -------: | ----------: | -------------- | --------------------------- |
| 100.0% | 1.01 MiB |           6 | `make_grammar` | `blib2to3/pgen2/pgen.py:49` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 1 MiB |           5 | `convert` | `blib2to3/pytree.py:486` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `_addtoken` | `blib2to3/pgen2/parse.py:290` |

##### `prefix` (`blib2to3/pytree.py:480`)

|      % |  Size | Allocations | Caller   | Location            |
| -----: | ----: | ----------: | -------- | ------------------- |
| 100.0% | 1 MiB |           1 | `append` | `black/lines.py:63` |

##### `normalize_trailing_prefix` (`black/comments.py:127`)

|      % |  Size | Allocations | Caller              | Location               |
| -----: | ----: | ----------: | ------------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `generate_comments` | `black/comments.py:52` |

##### `__init__` (`<string>:2`)

|      % |  Size | Allocations | Caller | Location               |
| -----: | ----: | ----------: | ------ | ---------------------- |
| 100.0% | 1 MiB |           1 | `line` | `black/linegen.py:109` |

##### `_format_str_once` (`black/__init__.py:1236`)

|      % |    Size | Allocations | Caller       | Location                 |
| -----: | ------: | ----------: | ------------ | ------------------------ |
| 100.0% | 225 KiB |           5 | `format_str` | `black/__init__.py:1189` |

##### `decode` (`<frozen codecs>:319`)

|      % |    Size | Allocations | Caller         | Location                 |
| -----: | ------: | ----------: | -------------- | ------------------------ |
| 100.0% | 222 KiB |           1 | `decode_bytes` | `black/__init__.py:1290` |

##### `__new__` (`<frozen abc>:105`)

|     % |     Size | Allocations | Caller     | Location                                                       |
| ----: | -------: | ----------: | ---------- | -------------------------------------------------------------- |
| 37.1% | 42.1 KiB |           8 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:1` |
| 34.6% | 39.2 KiB |          46 | `<module>` | `/venv/lib/python3.11/site-packages/click/types.py:1`          |
| 15.4% | 17.5 KiB |          18 | `<module>` | `black/trans.py:1`                                             |
| 12.9% | 14.6 KiB |          10 | `<module>` | `/venv/lib/python3.11/site-packages/click/core.py:1`           |

##### `_code_to_timestamp_pyc` (`<frozen importlib._bootstrap_external>:740`)

|      % |    Size | Allocations | Caller     | Location                                      |
| -----: | ------: | ----------: | ---------- | --------------------------------------------- |
| 100.0% | 112 KiB |         108 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `normalize_string_prefix` (`black/strings.py:143`)

|      % |     Size | Allocations | Caller         | Location               |
| -----: | -------: | ----------: | -------------- | ---------------------- |
| 100.0% | 57.2 KiB |          65 | `visit_STRING` | `black/linegen.py:413` |

##### `copy` (`blib2to3/pgen2/grammar.py:131`)

|      % |     Size | Allocations | Caller       | Location                 |
| -----: | -------: | ----------: | ------------ | ------------------------ |
| 100.0% | 41.5 KiB |          16 | `initialize` | `blib2to3/pygram.py:165` |

##### `classify` (`blib2to3/pgen2/parse.py:336`)

|      % |   Size | Allocations | Caller     | Location                      |
| -----: | -----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 32 KiB |           1 | `addtoken` | `blib2to3/pgen2/parse.py:242` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

|     % |     Size | Allocations | Caller     | Location                                                     |
| ----: | -------: | ----------: | ---------- | ------------------------------------------------------------ |
| 31.7% | 7.64 KiB |           9 | `<module>` | `black/mode.py:1`                                            |
| 16.2% | 3.89 KiB |           4 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/_elffile.py:1` |
| 13.7% |  3.3 KiB |           3 | `<module>` | `/venv/lib/python3.11/site-packages/click/_utils.py:1`       |
| 10.1% | 2.44 KiB |           3 | `<module>` | `black/__init__.py:1`                                        |
|  7.2% | 1.74 KiB |           2 | `<module>` | `/venv/lib/python3.11/site-packages/click/core.py:1`         |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|      % |     Size | Allocations | Caller     | Location                                 |
| -----: | -------: | ----------: | ---------- | ---------------------------------------- |
| 100.0% | 22.6 KiB |          12 | `_compile` | `/usr/lib/python3.11/re/__init__.py:272` |

##### `<module>` (`/usr/lib/python3.11/tomllib/_parser.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 19.8 KiB |          12 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `__new__` (`/usr/lib/python3.11/typing.py:2891`)

|     % |     Size | Allocations | Caller     | Location                                                    |
| ----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 90.3% | 15.7 KiB |          19 | `<module>` | `/venv/lib/python3.11/site-packages/click/types.py:1`       |
|  9.7% | 1.69 KiB |           2 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/version.py:1` |

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|     % |     Size | Allocations | Caller        | Location                                              |
| ----: | -------: | ----------: | ------------- | ----------------------------------------------------- |
| 75.3% | 9.02 KiB |           1 | `Line`        | `black/lines.py:49`                                   |
| 17.9% | 2.15 KiB |           1 | `__getitem__` | `/usr/lib/python3.11/typing.py:467`                   |
|  6.7% |    826 B |           1 | `<module>`    | `/venv/lib/python3.11/site-packages/click/types.py:1` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1655`)

|      % |  Size | Allocations | Caller      | Location                                      |
| -----: | ----: | ----------: | ----------- | --------------------------------------------- |
| 100.0% | 8 KiB |           4 | `find_spec` | `<frozen importlib._bootstrap_external>:1604` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|      % |     Size | Allocations | Caller  | Location                                |
| -----: | -------: | ----------: | ------- | --------------------------------------- |
| 100.0% | 7.97 KiB |           1 | `parse` | `/usr/lib/python3.11/re/_parser.py:970` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

|     % |     Size | Allocations | Caller         | Location                          |
| ----: | -------: | ----------: | -------------- | --------------------------------- |
| 66.6% | 4.48 KiB |           5 | `__set_name__` | `/usr/lib/python3.11/enum.py:237` |
| 33.4% | 2.25 KiB |           3 | `__new__`      | `/usr/lib/python3.11/enum.py:488` |

##### `namedtuple` (`/usr/lib/python3.11/collections/__init__.py:348`)

|     % |     Size | Allocations | Caller          | Location                             |
| ----: | -------: | ----------: | --------------- | ------------------------------------ |
| 83.3% | 4.69 KiB |           5 | `_make_nmtuple` | `/usr/lib/python3.11/typing.py:2795` |
| 16.7% |    960 B |           1 | `<module>`      | `/usr/lib/python3.11/pkgutil.py:1`   |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|      % |     Size | Allocations | Caller       | Location                                |
| -----: | -------: | ----------: | ------------ | --------------------------------------- |
| 100.0% | 5.61 KiB |           3 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py:447` |

##### `_code` (`/usr/lib/python3.11/re/_compiler.py:571`)

|      % |     Size | Allocations | Caller    | Location                                  |
| -----: | -------: | ----------: | --------- | ----------------------------------------- |
| 100.0% | 5.32 KiB |           2 | `compile` | `/usr/lib/python3.11/re/_compiler.py:738` |

##### `<module>` (`/usr/lib/python3.11/pkgutil.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 4.73 KiB |           6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `wrap` (`/usr/lib/python3.11/dataclasses.py:1209`)

|      % |     Size | Allocations | Caller     | Location                                                   |
| -----: | -------: | ----------: | ---------- | ---------------------------------------------------------- |
| 100.0% | 2.85 KiB |           1 | `<module>` | `/venv/lib/python3.11/site-packages/pathspec/pattern.py:1` |

##### `_process_class` (`/usr/lib/python3.11/dataclasses.py:884`)

|      % |     Size | Allocations | Caller | Location                                  |
| -----: | -------: | ----------: | ------ | ----------------------------------------- |
| 100.0% | 2.85 KiB |           4 | `wrap` | `/usr/lib/python3.11/dataclasses.py:1209` |

### Total size

Functions ranked by total bytes held at peak memory in the function and all its callees.

|      % |     Size | Allocations | Function               | Location                                                       |
| -----: | -------: | ----------: | ---------------------- | -------------------------------------------------------------- |
| 100.0% | 72.4 MiB |      23,709 | `_run_tracker`         | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40` |
| 100.0% | 72.4 MiB |      23,708 | `run_module`           | `<frozen runpy>:201`                                           |
|  92.5% |   67 MiB |      22,201 | `__call__`             | `/venv/lib/python3.11/site-packages/click/core.py:1629`        |
|  92.5% |   67 MiB |      22,201 | `patched_main`         | `black/__init__.py:1594`                                       |
|  92.5% |   67 MiB |      22,201 | `<module>`             | `black/__main__.py:1`                                          |
|  92.5% |   67 MiB |      22,201 | `_run_code`            | `<frozen runpy>:65`                                            |
|  92.5% |   67 MiB |      22,201 | `_run_module_code`     | `<frozen runpy>:91`                                            |
|  92.4% |   67 MiB |      22,200 | `main`                 | `/venv/lib/python3.11/site-packages/click/core.py:1484`        |
|  92.4% | 66.9 MiB |      22,180 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:1401`        |
|  92.4% | 66.9 MiB |      22,177 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:857`         |
|  92.4% | 66.9 MiB |      22,175 | `new_func`             | `/venv/lib/python3.11/site-packages/click/decorators.py:33`    |
|  92.4% | 66.9 MiB |      22,172 | `main`                 | `black/__init__.py:244`                                        |
|  92.4% | 66.9 MiB |      22,168 | `reformat_one`         | `black/__init__.py:860`                                        |
|  92.4% | 66.9 MiB |      22,165 | `format_file_in_place` | `black/__init__.py:917`                                        |
|  92.1% | 66.7 MiB |      22,162 | `format_file_contents` | `black/__init__.py:1054`                                       |
|  70.1% | 50.8 MiB |      21,147 | `format_str`           | `black/__init__.py:1189`                                       |
|  70.1% | 50.8 MiB |      21,146 | `_format_str_once`     | `black/__init__.py:1236`                                       |
|  50.3% | 36.4 MiB |      21,087 | `visit`                | `black/nodes.py:163`                                           |
|  50.3% | 36.4 MiB |      21,085 | `visit_default`        | `black/nodes.py:187`                                           |
|  50.3% | 36.4 MiB |      21,085 | `visit_default`        | `black/linegen.py:134`                                         |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                          | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 92.5% |   67 MiB |      22,201 | `patched_main`                    | `black/__init__.py:1594` |
| 92.5% |   67 MiB |      22,201 | `<module>`                        | `black/__main__.py:1`    |
| 92.4% | 66.9 MiB |      22,172 | `main`                            | `black/__init__.py:244`  |
| 92.4% | 66.9 MiB |      22,168 | `reformat_one`                    | `black/__init__.py:860`  |
| 92.4% | 66.9 MiB |      22,165 | `format_file_in_place`            | `black/__init__.py:917`  |
| 92.1% | 66.7 MiB |      22,162 | `format_file_contents`            | `black/__init__.py:1054` |
| 70.1% | 50.8 MiB |      21,147 | `format_str`                      | `black/__init__.py:1189` |
| 70.1% | 50.8 MiB |      21,146 | `_format_str_once`                | `black/__init__.py:1236` |
| 50.3% | 36.4 MiB |      21,087 | `visit`                           | `black/nodes.py:163`     |
| 50.3% | 36.4 MiB |      21,085 | `visit_default`                   | `black/nodes.py:187`     |
| 50.3% | 36.4 MiB |      21,085 | `visit_default`                   | `black/linegen.py:134`   |
| 49.9% | 36.2 MiB |      20,714 | `visit_stmt`                      | `black/linegen.py:199`   |
| 48.1% | 34.8 MiB |      20,272 | `visit_funcdef`                   | `black/linegen.py:254`   |
| 48.0% | 34.7 MiB |      20,146 | `visit_suite`                     | `black/linegen.py:288`   |
| 28.0% | 20.3 MiB |      20,885 | `append`                          | `black/lines.py:63`      |
| 27.4% | 19.8 MiB |      13,398 | `visit_simple_stmt`               | `black/linegen.py:295`   |
| 25.2% | 18.2 MiB |      20,790 | `mark`                            | `black/brackets.py:70`   |
| 23.3% | 16.9 MiB |      10,808 | `visit_power`                     | `black/linegen.py:341`   |
| 22.0% |   16 MiB |       1,015 | `check_stability_and_equivalence` | `black/__init__.py:1037` |
| 22.0% |   16 MiB |       1,014 | `_parse_single_version`           | `black/parsing.py:117`   |

##### Standard library

|      % |     Size | Allocations | Function                    | Location                                      |
| -----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 100.0% | 72.4 MiB |      23,708 | `run_module`                | `<frozen runpy>:201`                          |
|  92.5% |   67 MiB |      22,201 | `_run_code`                 | `<frozen runpy>:65`                           |
|  92.5% |   67 MiB |      22,201 | `_run_module_code`          | `<frozen runpy>:91`                           |
|  22.0% |   16 MiB |       1,014 | `parse`                     | `/usr/lib/python3.11/ast.py:33`               |
|   7.5% | 5.46 MiB |       1,506 | `_get_module_details`       | `<frozen runpy>:105`                          |
|   7.5% | 5.46 MiB |       1,499 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`          |
|   7.5% | 5.46 MiB |       1,497 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`          |
|   7.5% | 5.46 MiB |       1,496 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`           |
|   7.5% | 5.45 MiB |       1,494 | `exec_module`               | `<frozen importlib._bootstrap_external>:934`  |
|   7.5% | 5.44 MiB |       1,482 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|   5.1% | 3.69 MiB |         814 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |
|   3.1% | 2.27 MiB |         352 | `source_to_code`            | `<frozen importlib._bootstrap_external>:999`  |
|   1.8% | 1.31 MiB |         353 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`  |
|   0.5% |  334 KiB |         342 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`          |
|   0.3% |  222 KiB |           1 | `decode`                    | `<frozen codecs>:319`                         |
|   0.2% |  113 KiB |          82 | `__new__`                   | `<frozen abc>:105`                            |
|   0.2% |  112 KiB |         108 | `_code_to_timestamp_pyc`    | `<frozen importlib._bootstrap_external>:740`  |
|   0.1% | 47.8 KiB |          25 | `compile`                   | `/usr/lib/python3.11/re/__init__.py:225`      |
|   0.1% | 47.1 KiB |          24 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py:272`      |
|   0.1% | 46.5 KiB |          23 | `compile`                   | `/usr/lib/python3.11/re/_compiler.py:738`     |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|      % |     Size | Allocations | Callee       | Location             |
| -----: | -------: | ----------: | ------------ | -------------------- |
| 100.0% | 72.4 MiB |      23,708 | `run_module` | `<frozen runpy>:201` |

##### `run_module` (`<frozen runpy>:201`)

|     % |     Size | Allocations | Callee                | Location             |
| ----: | -------: | ----------: | --------------------- | -------------------- |
| 92.5% |   67 MiB |      22,201 | `_run_module_code`    | `<frozen runpy>:91`  |
|  7.5% | 5.46 MiB |       1,506 | `_get_module_details` | `<frozen runpy>:105` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1629`)

|      % |   Size | Allocations | Callee | Location                                                |
| -----: | -----: | ----------: | ------ | ------------------------------------------------------- |
| 100.0% | 67 MiB |      22,200 | `main` | `/venv/lib/python3.11/site-packages/click/core.py:1484` |

##### `patched_main` (`black/__init__.py:1594`)

|      % |   Size | Allocations | Callee     | Location                                                |
| -----: | -----: | ----------: | ---------- | ------------------------------------------------------- |
| 100.0% | 67 MiB |      22,201 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py:1629` |

##### `<module>` (`black/__main__.py:1`)

|      % |   Size | Allocations | Callee         | Location                 |
| -----: | -----: | ----------: | -------------- | ------------------------ |
| 100.0% | 67 MiB |      22,201 | `patched_main` | `black/__init__.py:1594` |

##### `_run_code` (`<frozen runpy>:65`)

|      % |   Size | Allocations | Callee     | Location              |
| -----: | -----: | ----------: | ---------- | --------------------- |
| 100.0% | 67 MiB |      22,201 | `<module>` | `black/__main__.py:1` |

##### `_run_module_code` (`<frozen runpy>:91`)

|      % |   Size | Allocations | Callee      | Location            |
| -----: | -----: | ----------: | ----------- | ------------------- |
| 100.0% | 67 MiB |      22,201 | `_run_code` | `<frozen runpy>:65` |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py:1484`)

|      % |     Size | Allocations | Callee         | Location                                                |
| -----: | -------: | ----------: | -------------- | ------------------------------------------------------- |
| 100.0% | 66.9 MiB |      22,180 | `invoke`       | `/venv/lib/python3.11/site-packages/click/core.py:1401` |
|  <0.1% | 14.6 KiB |          18 | `make_context` | `/venv/lib/python3.11/site-packages/click/core.py:1328` |
|  <0.1% |     32 B |           1 | `__enter__`    | `/venv/lib/python3.11/site-packages/click/core.py:549`  |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:1401`)

|      % |     Size | Allocations | Callee   | Location                                               |
| -----: | -------: | ----------: | -------- | ------------------------------------------------------ |
| 100.0% | 66.9 MiB |      22,177 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:857` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`)

|      % |     Size | Allocations | Callee     | Location                                                    |
| -----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 100.0% | 66.9 MiB |      22,175 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |     Size | Allocations | Callee | Location                |
| -----: | -------: | ----------: | ------ | ----------------------- |
| 100.0% | 66.9 MiB |      22,172 | `main` | `black/__init__.py:244` |

##### `main` (`black/__init__.py:244`)

|      % |     Size | Allocations | Callee         | Location                |
| -----: | -------: | ----------: | -------------- | ----------------------- |
| 100.0% | 66.9 MiB |      22,168 | `reformat_one` | `black/__init__.py:860` |
|  <0.1% | 2.06 KiB |           2 | `get_sources`  | `black/__init__.py:724` |

##### `reformat_one` (`black/__init__.py:860`)

|      % |     Size | Allocations | Callee                 | Location                |
| -----: | -------: | ----------: | ---------------------- | ----------------------- |
| 100.0% | 66.9 MiB |      22,165 | `format_file_in_place` | `black/__init__.py:917` |
|  <0.1% | 1.13 KiB |           1 | `read`                 | `black/cache.py:60`     |

##### `format_file_in_place` (`black/__init__.py:917`)

|     % |     Size | Allocations | Callee                 | Location                 |
| ----: | -------: | ----------: | ---------------------- | ------------------------ |
| 99.7% | 66.7 MiB |      22,162 | `format_file_contents` | `black/__init__.py:1054` |
|  0.3% |  223 KiB |           2 | `decode_bytes`         | `black/__init__.py:1290` |

##### `format_file_contents` (`black/__init__.py:1054`)

|     % |     Size | Allocations | Callee                            | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 76.1% | 50.8 MiB |      21,147 | `format_str`                      | `black/__init__.py:1189` |
| 23.9% |   16 MiB |       1,015 | `check_stability_and_equivalence` | `black/__init__.py:1037` |

##### `format_str` (`black/__init__.py:1189`)

|      % |     Size | Allocations | Callee             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 50.8 MiB |      21,146 | `_format_str_once` | `black/__init__.py:1236` |

##### `_format_str_once` (`black/__init__.py:1236`)

|     % |     Size | Allocations | Callee              | Location                |
| ----: | -------: | ----------: | ------------------- | ----------------------- |
| 71.8% | 36.4 MiB |      21,087 | `visit`             | `black/nodes.py:163`    |
| 21.8% |   11 MiB |          30 | `lib2to3_parse`     | `black/parsing.py:55`   |
|  3.9% |    2 MiB |           2 | `__str__`           | `black/lines.py:490`    |
|  2.0% | 1.01 MiB |          15 | `transform_line`    | `black/linegen.py:601`  |
| <0.1% | 19.9 KiB |           3 | `normalize_fmt_off` | `black/comments.py:168` |

##### `visit` (`black/nodes.py:163`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 36.4 MiB |      21,085 | `visit_default`     | `black/linegen.py:134` |
|  99.2% | 36.2 MiB |      20,714 | `visit_stmt`        | `black/linegen.py:199` |
|  95.5% | 34.8 MiB |      20,272 | `visit_funcdef`     | `black/linegen.py:254` |
|  95.3% | 34.7 MiB |      20,146 | `visit_suite`       | `black/linegen.py:288` |
|  54.4% | 19.8 MiB |      13,398 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/nodes.py:187`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 36.4 MiB |      21,085 | `visit` | `black/nodes.py:163` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 36.4 MiB |      21,085 | `visit_default`     | `black/nodes.py:187`   |
|  55.7% | 20.3 MiB |      20,885 | `append`            | `black/lines.py:63`    |
|  24.7% |    9 MiB |           9 | `generate_comments` | `black/comments.py:52` |

##### `visit_stmt` (`black/linegen.py:199`)

|      % |     Size | Allocations | Callee                       | Location                |
| -----: | -------: | ----------: | ---------------------------- | ----------------------- |
| 100.0% | 36.2 MiB |      20,712 | `visit`                      | `black/nodes.py:163`    |
|  <0.1% | 1.15 KiB |           1 | `normalize_invisible_parens` | `black/linegen.py:1328` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 34.8 MiB |      20,272 | `visit` | `black/nodes.py:163` |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 34.7 MiB |      20,146 | `visit_default` | `black/linegen.py:134` |

##### `append` (`black/lines.py:63`)

|     % |     Size | Allocations | Callee       | Location                 |
| ----: | -------: | ----------: | ------------ | ------------------------ |
| 89.8% | 18.2 MiB |      20,790 | `mark`       | `black/brackets.py:70`   |
|  5.2% | 1.05 MiB |          90 | `whitespace` | `black/nodes.py:194`     |
|  4.9% |    1 MiB |           1 | `prefix`     | `blib2to3/pytree.py:480` |

##### `visit_simple_stmt` (`black/linegen.py:295`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 19.8 MiB |      13,398 | `visit_default` | `black/linegen.py:134` |

##### `mark` (`black/brackets.py:70`)

|     % |  Size | Allocations | Callee                      | Location                |
| ----: | ----: | ----------: | --------------------------- | ----------------------- |
| 11.0% | 2 MiB |           2 | `is_split_before_delimiter` | `black/brackets.py:232` |

##### `visit_power` (`black/linegen.py:341`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 16.9 MiB |      10,807 | `visit_default` | `black/linegen.py:134` |

##### `check_stability_and_equivalence` (`black/__init__.py:1037`)

|      % |   Size | Allocations | Callee              | Location                 |
| -----: | -----: | ----------: | ------------------- | ------------------------ |
| 100.0% | 16 MiB |       1,014 | `assert_equivalent` | `black/__init__.py:1524` |

##### `_parse_single_version` (`black/parsing.py:117`)

|      % |   Size | Allocations | Callee  | Location                        |
| -----: | -----: | ----------: | ------- | ------------------------------- |
| 100.0% | 16 MiB |       1,014 | `parse` | `/usr/lib/python3.11/ast.py:33` |

##### `_get_module_details` (`<frozen runpy>:105`)

|     % |     Size | Allocations | Callee                | Location                             |
| ----: | -------: | ----------: | --------------------- | ------------------------------------ |
| 99.9% | 5.46 MiB |       1,499 | `_find_and_load`      | `<frozen importlib._bootstrap>:1167` |
| 99.9% | 5.46 MiB |       1,499 | `_get_module_details` | `<frozen runpy>:105`                 |
|  0.1% | 5.66 KiB |           6 | `find_spec`           | `<frozen importlib.util>:73`         |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

|      % |     Size | Allocations | Callee                    | Location                             |
| -----: | -------: | ----------: | ------------------------- | ------------------------------------ |
| 100.0% | 5.46 MiB |       1,497 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |
|  <0.1% |    560 B |           1 | `__enter__`               | `<frozen importlib._bootstrap>:169`  |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

|      % |     Size | Allocations | Callee                      | Location                             |
| -----: | -------: | ----------: | --------------------------- | ------------------------------------ |
| 100.0% | 5.46 MiB |       1,496 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`  |
|   0.7% | 37.2 KiB |          47 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`  |
|   0.1% | 7.48 KiB |           4 | `_find_spec`                | `<frozen importlib._bootstrap>:1056` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

|      % |     Size | Allocations | Callee             | Location                                     |
| -----: | -------: | ----------: | ------------------ | -------------------------------------------- |
| 100.0% | 5.45 MiB |       1,494 | `exec_module`      | `<frozen importlib._bootstrap_external>:934` |
|  <0.1% | 1.83 KiB |           2 | `module_from_spec` | `<frozen importlib._bootstrap>:566`          |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

|     % |     Size | Allocations | Callee                      | Location                                      |
| ----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 99.1% | 5.41 MiB |       1,448 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
| 67.7% | 3.69 MiB |         814 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|     % |     Size | Allocations | Callee     | Location                                                 |
| ----: | -------: | ----------: | ---------- | -------------------------------------------------------- |
| 99.4% | 5.41 MiB |       1,448 | `<module>` | `black/__init__.py:1`                                    |
| 42.9% | 2.34 MiB |         316 | `<module>` | `black/comments.py:1`                                    |
| 24.2% | 1.32 MiB |         295 | `<module>` | `black/nodes.py:1`                                       |
| 24.2% | 1.31 MiB |         316 | `<module>` | `/venv/lib/python3.11/site-packages/click/__init__.py:1` |
| 22.7% | 1.23 MiB |         236 | `<module>` | `/venv/lib/python3.11/site-packages/click/core.py:1`     |

##### `get_code` (`<frozen importlib._bootstrap_external>:1007`)

|     % |     Size | Allocations | Callee                   | Location                                      |
| ----: | -------: | ----------: | ------------------------ | --------------------------------------------- |
| 61.5% | 2.27 MiB |         352 | `source_to_code`         | `<frozen importlib._bootstrap_external>:999`  |
| 35.5% | 1.31 MiB |         353 | `_compile_bytecode`      | `<frozen importlib._bootstrap_external>:727`  |
|  3.0% |  112 KiB |         108 | `_code_to_timestamp_pyc` | `<frozen importlib._bootstrap_external>:740`  |
| <0.1% |    624 B |           1 | `_cache_bytecode`        | `<frozen importlib._bootstrap_external>:1151` |

##### `source_to_code` (`<frozen importlib._bootstrap_external>:999`)

|      % |     Size | Allocations | Callee                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 2.27 MiB |         352 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1209`)

|      % |    Size | Allocations | Callee                      | Location                            |
| -----: | ------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 334 KiB |         342 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `compile` (`/usr/lib/python3.11/re/__init__.py:225`)

|     % |     Size | Allocations | Callee     | Location                                 |
| ----: | -------: | ----------: | ---------- | ---------------------------------------- |
| 98.6% | 47.1 KiB |          24 | `_compile` | `/usr/lib/python3.11/re/__init__.py:272` |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py:272`)

|     % |     Size | Allocations | Callee    | Location                                  |
| ----: | -------: | ----------: | --------- | ----------------------------------------- |
| 98.6% | 46.5 KiB |          23 | `compile` | `/usr/lib/python3.11/re/_compiler.py:738` |
|  1.4% |    698 B |           1 | `__and__` | `/usr/lib/python3.11/enum.py:1504`        |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|     % |     Size | Allocations | Callee  | Location                                  |
| ----: | -------: | ----------: | ------- | ----------------------------------------- |
| 31.0% | 14.4 KiB |           5 | `parse` | `/usr/lib/python3.11/re/_parser.py:970`   |
| 20.4% |  9.5 KiB |           6 | `_code` | `/usr/lib/python3.11/re/_compiler.py:571` |

## Hottest call stacks

Call stacks ranked by bytes held at peak memory in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>:201`) ← `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|     % |     Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----: | -------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 22.0% |   16 MiB |       1,014 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  6.9% |    5 MiB |           5 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `shift` (`blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  5.5% |    4 MiB |           4 | `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`) ← `__next__` (`blib2to3/pgen2/driver.py:80`) ← `parse_tokens` (114) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  2.8% |    2 MiB |           2 | `__str__` (`black/lines.py:490`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.5% | 1.07 MiB |          96 | `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `source_to_code` (`<frozen importlib._bootstrap_external>:999`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.4% | 1.04 MiB |          49 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.4% | 1.03 MiB |          23 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/core.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.4% | 1.01 MiB |          15 | `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `source_to_code` (`<frozen importlib._bootstrap_external>:999`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.4% | 1.01 MiB |           6 | `make_label` (`blib2to3/pgen2/pgen.py:84`) ← `make_grammar` (49) ← `generate_grammar` (426) ← `load_grammar` (`blib2to3/pgen2/driver.py:246`) ← `load_packaged_grammar` (280) ← `initialize` (`blib2to3/pygram.py:165`) ← `<module>` (`black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.4% |    1 MiB |           5 | `__init__` (`blib2to3/pytree.py:248`) ← `convert` (486) ← `pop` (`blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.4% |    1 MiB |           1 | `push` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.4% |    1 MiB |           1 | `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.4% |    1 MiB |           1 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                            |
|  1.4% |    1 MiB |           1 | `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                           |
|  1.4% |    1 MiB |           1 | `__str__` (`black/lines.py:490`) ← `line_to_string` (1073) ← `transform_line` (`black/linegen.py:601`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.4% |    1 MiB |           1 | `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                       |
|  1.4% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91) |
|  1.4% |    1 MiB |           1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`black/nodes.py:194`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.4% |    1 MiB |           1 | `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                             |
|  1.4% |    1 MiB |           1 | `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

# Leaked memory profile

Leaked 57.1 MiB over 22,698 allocations (2.58 KiB per allocation).

| Category         |     % |     Size | Allocations |
| ---------------- | ----: | -------: | ----------: |
| Ours             | 89.1% | 50.9 MiB |      21,386 |
| Standard library | 10.5% | 5.97 MiB |       1,082 |
| Third-party      |  0.4% |  237 KiB |         230 |

## Hottest functions

### Self size

Functions ranked by bytes never freed directly in the function body, excluding callees.

|     % |     Size | Allocations | Function                    | Location                                     |
| ----: | -------: | ----------: | --------------------------- | -------------------------------------------- |
| 28.4% | 16.2 MiB |      20,788 | `mark`                      | `black/brackets.py:70`                       |
| 10.5% |    6 MiB |           6 | `changed`                   | `blib2to3/pytree.py:171`                     |
|  8.8% |    5 MiB |           5 | `__new__`                   | `blib2to3/pytree.py:81`                      |
|  7.0% |    4 MiB |           5 | `visit_default`             | `black/linegen.py:134`                       |
|  7.0% |    4 MiB |           4 | `generate_tokens`           | `blib2to3/pgen2/tokenize.py:565`             |
|  5.3% |    3 MiB |           3 | `__str__`                   | `black/lines.py:490`                         |
|  4.0% | 2.27 MiB |         352 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`          |
|  3.5% | 2.01 MiB |           3 | `parse`                     | `/usr/lib/python3.11/ast.py:33`              |
|  3.5% |    2 MiB |           2 | `generate_comments`         | `black/comments.py:52`                       |
|  3.5% |    2 MiB |           2 | `is_split_before_delimiter` | `black/brackets.py:232`                      |
|  2.3% | 1.31 MiB |         353 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727` |
|  2.0% | 1.14 MiB |         196 | `update_sibling_maps`       | `blib2to3/pytree.py:369`                     |
|  1.8% | 1.01 MiB |           6 | `make_label`                | `blib2to3/pgen2/pgen.py:84`                  |
|  1.8% |    1 MiB |           5 | `visit`                     | `black/nodes.py:163`                         |
|  1.8% |    1 MiB |           5 | `__init__`                  | `blib2to3/pytree.py:248`                     |
|  1.8% |    1 MiB |           1 | `push`                      | `blib2to3/pgen2/parse.py:386`                |
|  1.8% |    1 MiB |           1 | `prefix`                    | `blib2to3/pytree.py:480`                     |
|  1.8% |    1 MiB |           1 | `normalize_trailing_prefix` | `black/comments.py:127`                      |
|  1.8% |    1 MiB |           1 | `__init__`                  | `<string>:2`                                 |
|  0.2% |  112 KiB |         108 | `_code_to_timestamp_pyc`    | `<frozen importlib._bootstrap_external>:740` |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                    | Location                         |
| ----: | -------: | ----------: | --------------------------- | -------------------------------- |
| 28.4% | 16.2 MiB |      20,788 | `mark`                      | `black/brackets.py:70`           |
| 10.5% |    6 MiB |           6 | `changed`                   | `blib2to3/pytree.py:171`         |
|  8.8% |    5 MiB |           5 | `__new__`                   | `blib2to3/pytree.py:81`          |
|  7.0% |    4 MiB |           5 | `visit_default`             | `black/linegen.py:134`           |
|  7.0% |    4 MiB |           4 | `generate_tokens`           | `blib2to3/pgen2/tokenize.py:565` |
|  5.3% |    3 MiB |           3 | `__str__`                   | `black/lines.py:490`             |
|  3.5% |    2 MiB |           2 | `generate_comments`         | `black/comments.py:52`           |
|  3.5% |    2 MiB |           2 | `is_split_before_delimiter` | `black/brackets.py:232`          |
|  2.0% | 1.14 MiB |         196 | `update_sibling_maps`       | `blib2to3/pytree.py:369`         |
|  1.8% | 1.01 MiB |           6 | `make_label`                | `blib2to3/pgen2/pgen.py:84`      |
|  1.8% |    1 MiB |           5 | `visit`                     | `black/nodes.py:163`             |
|  1.8% |    1 MiB |           5 | `__init__`                  | `blib2to3/pytree.py:248`         |
|  1.8% |    1 MiB |           1 | `push`                      | `blib2to3/pgen2/parse.py:386`    |
|  1.8% |    1 MiB |           1 | `prefix`                    | `blib2to3/pytree.py:480`         |
|  1.8% |    1 MiB |           1 | `normalize_trailing_prefix` | `black/comments.py:127`          |
|  1.8% |    1 MiB |           1 | `__init__`                  | `<string>:2`                     |
|  0.1% | 76.5 KiB |           6 | `transform_line`            | `black/linegen.py:601`           |
|  0.1% | 57.2 KiB |          65 | `normalize_string_prefix`   | `black/strings.py:143`           |
|  0.1% | 41.5 KiB |          16 | `copy`                      | `blib2to3/pgen2/grammar.py:131`  |
|  0.1% |   32 KiB |           1 | `classify`                  | `blib2to3/pgen2/parse.py:336`    |

##### Standard library

|     % |     Size | Allocations | Function                    | Location                                          |
| ----: | -------: | ----------: | --------------------------- | ------------------------------------------------- |
|  4.0% | 2.27 MiB |         352 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`               |
|  3.5% | 2.01 MiB |           3 | `parse`                     | `/usr/lib/python3.11/ast.py:33`                   |
|  2.3% | 1.31 MiB |         353 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`      |
|  0.2% |  112 KiB |         108 | `_code_to_timestamp_pyc`    | `<frozen importlib._bootstrap_external>:740`      |
|  0.1% | 77.4 KiB |          81 | `__new__`                   | `<frozen abc>:105`                                |
| <0.1% | 24.1 KiB |          27 | `__new__`                   | `/usr/lib/python3.11/enum.py:488`                 |
| <0.1% | 22.6 KiB |          12 | `compile`                   | `/usr/lib/python3.11/re/_compiler.py:738`         |
| <0.1% | 19.8 KiB |          12 | `<module>`                  | `/usr/lib/python3.11/tomllib/_parser.py:1`        |
| <0.1% | 17.4 KiB |          21 | `__new__`                   | `/usr/lib/python3.11/typing.py:2891`              |
| <0.1% |   12 KiB |           3 | `inner`                     | `/usr/lib/python3.11/typing.py:338`               |
| <0.1% |    8 KiB |           4 | `_fill_cache`               | `<frozen importlib._bootstrap_external>:1655`     |
| <0.1% | 7.97 KiB |           1 | `_parse_sub`                | `/usr/lib/python3.11/re/_parser.py:447`           |
| <0.1% | 6.73 KiB |           8 | `__setattr__`               | `/usr/lib/python3.11/enum.py:831`                 |
| <0.1% | 5.63 KiB |           6 | `namedtuple`                | `/usr/lib/python3.11/collections/__init__.py:348` |
| <0.1% | 5.61 KiB |           3 | `_parse`                    | `/usr/lib/python3.11/re/_parser.py:507`           |
| <0.1% | 5.32 KiB |           2 | `_code`                     | `/usr/lib/python3.11/re/_compiler.py:571`         |
| <0.1% | 4.73 KiB |           6 | `<module>`                  | `/usr/lib/python3.11/pkgutil.py:1`                |
| <0.1% | 2.85 KiB |           1 | `wrap`                      | `/usr/lib/python3.11/dataclasses.py:1209`         |
| <0.1% | 2.85 KiB |           4 | `_process_class`            | `/usr/lib/python3.11/dataclasses.py:884`          |
| <0.1% | 2.56 KiB |           3 | `_signature_from_function`  | `/usr/lib/python3.11/inspect.py:2331`             |

#### Lines

Lines ranked by contribution to each function's self size.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Allocations | Location                |
| -----: | -------: | ----------: | ----------------------- |
| 100.0% | 16.2 MiB |      20,787 | `black/brackets.py:112` |
|  <0.1% | 1.49 KiB |           1 | `black/brackets.py:114` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Allocations | Location                 |
| ----: | ----: | ----------: | ------------------------ |
| 66.7% | 4 MiB |           4 | `blib2to3/pytree.py:176` |
| 33.3% | 2 MiB |           2 | `blib2to3/pytree.py:175` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 5 MiB |           5 | `blib2to3/pytree.py:84` |

##### `visit_default` (`black/linegen.py:134`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 75.0% | 3 MiB |           3 | `black/linegen.py:158` |
| 25.0% | 1 MiB |           1 | `black/linegen.py:138` |
| <0.1% | 702 B |           1 | `black/linegen.py:144` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|     % |  Size | Allocations | Location                         |
| ----: | ----: | ----------: | -------------------------------- |
| 50.0% | 2 MiB |           2 | `blib2to3/pgen2/tokenize.py:879` |
| 25.0% | 1 MiB |           1 | `blib2to3/pgen2/tokenize.py:752` |
| 25.0% | 1 MiB |           1 | `blib2to3/pgen2/tokenize.py:972` |

##### `__str__` (`black/lines.py:490`)

|     % |  Size | Allocations | Location             |
| ----: | ----: | ----------: | -------------------- |
| 66.7% | 2 MiB |           2 | `black/lines.py:500` |
| 33.3% | 1 MiB |           1 | `black/lines.py:498` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Allocations | Location                            |
| -----: | -------: | ----------: | ----------------------------------- |
| 100.0% | 2.27 MiB |         352 | `<frozen importlib._bootstrap>:241` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Location                        |
| -----: | -------: | ----------: | ------------------------------- |
| 100.0% | 2.01 MiB |           3 | `/usr/lib/python3.11/ast.py:50` |

##### `generate_comments` (`black/comments.py:52`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 50.0% | 1 MiB |           1 | `black/comments.py:76` |
| 50.0% | 1 MiB |           1 | `black/comments.py:72` |

##### `is_split_before_delimiter` (`black/brackets.py:232`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 2 MiB |           2 | `black/brackets.py:240` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Location                                     |
| -----: | -------: | ----------: | -------------------------------------------- |
| 100.0% | 1.31 MiB |         353 | `<frozen importlib._bootstrap_external>:729` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 88.0% |    1 MiB |          10 | `blib2to3/pytree.py:379` |
|  6.0% | 70.3 KiB |          93 | `blib2to3/pytree.py:376` |
|  6.0% | 70.3 KiB |          93 | `blib2to3/pytree.py:377` |

##### `make_label` (`blib2to3/pgen2/pgen.py:84`)

|     % |     Size | Allocations | Location                     |
| ----: | -------: | ----------: | ---------------------------- |
| 99.2% |    1 MiB |           1 | `blib2to3/pgen2/pgen.py:111` |
|  0.3% | 3.19 KiB |           1 | `blib2to3/pgen2/pgen.py:95`  |
|  0.3% |  2.7 KiB |           2 | `blib2to3/pgen2/pgen.py:132` |
|  0.2% | 1.81 KiB |           1 | `blib2to3/pgen2/pgen.py:131` |
|  0.1% |    768 B |           1 | `blib2to3/pgen2/pgen.py:123` |

##### `visit` (`black/nodes.py:163`)

|     % |     Size | Allocations | Location             |
| ----: | -------: | ----------: | -------------------- |
| 99.7% |    1 MiB |           2 | `black/nodes.py:185` |
|  0.3% | 2.68 KiB |           3 | `black/nodes.py:183` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           5 | `blib2to3/pytree.py:266` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:394` |

##### `prefix` (`blib2to3/pytree.py:480`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:482` |

##### `normalize_trailing_prefix` (`black/comments.py:127`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 1 MiB |           1 | `black/comments.py:136` |

##### `__init__` (`<string>:2`)

|      % |  Size | Allocations | Location     |
| -----: | ----: | ----------: | ------------ |
| 100.0% | 1 MiB |           1 | `<string>:7` |

##### `_code_to_timestamp_pyc` (`<frozen importlib._bootstrap_external>:740`)

|      % |    Size | Allocations | Location                                     |
| -----: | ------: | ----------: | -------------------------------------------- |
| 100.0% | 112 KiB |         108 | `<frozen importlib._bootstrap_external>:746` |

##### `__new__` (`<frozen abc>:105`)

|     % |     Size | Allocations | Location           |
| ----: | -------: | ----------: | ------------------ |
| 99.0% | 76.7 KiB |          80 | `<frozen abc>:106` |
|  1.0% |    768 B |           1 | `<frozen abc>:107` |

##### `transform_line` (`black/linegen.py:601`)

|     % |     Size | Allocations | Location               |
| ----: | -------: | ----------: | ---------------------- |
| 96.4% | 73.7 KiB |           3 | `black/linegen.py:679` |
|  1.8% | 1.39 KiB |           1 | `black/linegen.py:635` |
|  1.2% |    910 B |           1 | `black/linegen.py:714` |
|  0.7% |    518 B |           1 | `black/linegen.py:631` |

##### `normalize_string_prefix` (`black/strings.py:143`)

|      % |     Size | Allocations | Location               |
| -----: | -------: | ----------: | ---------------------- |
| 100.0% | 57.2 KiB |          65 | `black/strings.py:158` |

##### `copy` (`blib2to3/pgen2/grammar.py:131`)

|     % |     Size | Allocations | Location                        |
| ----: | -------: | ----------: | ------------------------------- |
| 88.2% | 36.6 KiB |          12 | `blib2to3/pgen2/grammar.py:145` |
|  7.6% | 3.16 KiB |           2 | `blib2to3/pgen2/grammar.py:146` |
|  4.2% | 1.75 KiB |           2 | `blib2to3/pgen2/grammar.py:147` |

##### `classify` (`blib2to3/pgen2/parse.py:336`)

|      % |   Size | Allocations | Location                      |
| -----: | -----: | ----------: | ----------------------------- |
| 100.0% | 32 KiB |           1 | `blib2to3/pgen2/parse.py:343` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

|      % |     Size | Allocations | Location                          |
| -----: | -------: | ----------: | --------------------------------- |
| 100.0% | 24.1 KiB |          27 | `/usr/lib/python3.11/enum.py:554` |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|      % |     Size | Allocations | Location                                  |
| -----: | -------: | ----------: | ----------------------------------------- |
| 100.0% | 22.6 KiB |          12 | `/usr/lib/python3.11/re/_compiler.py:759` |

##### `<module>` (`/usr/lib/python3.11/tomllib/_parser.py:1`)

|     % |  Size | Allocations | Location                                    |
| ----: | ----: | ----------: | ------------------------------------------- |
| 20.2% | 4 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:37` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:22` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:26` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:27` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:36` |

##### `__new__` (`/usr/lib/python3.11/typing.py:2891`)

|      % |     Size | Allocations | Location                             |
| -----: | -------: | ----------: | ------------------------------------ |
| 100.0% | 17.4 KiB |          21 | `/usr/lib/python3.11/typing.py:2909` |

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|      % |   Size | Allocations | Location                            |
| -----: | -----: | ----------: | ----------------------------------- |
| 100.0% | 12 KiB |           3 | `/usr/lib/python3.11/typing.py:341` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1655`)

|      % |  Size | Allocations | Location                                      |
| -----: | ----: | ----------: | --------------------------------------------- |
| 100.0% | 8 KiB |           4 | `<frozen importlib._bootstrap_external>:1667` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|      % |     Size | Allocations | Location                                |
| -----: | -------: | ----------: | --------------------------------------- |
| 100.0% | 7.97 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:455` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

|      % |     Size | Allocations | Location                          |
| -----: | -------: | ----------: | --------------------------------- |
| 100.0% | 6.73 KiB |           8 | `/usr/lib/python3.11/enum.py:842` |

##### `namedtuple` (`/usr/lib/python3.11/collections/__init__.py:348`)

|      % |     Size | Allocations | Location                                          |
| -----: | -------: | ----------: | ------------------------------------------------- |
| 100.0% | 5.63 KiB |           6 | `/usr/lib/python3.11/collections/__init__.py:501` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|     % |     Size | Allocations | Location                                |
| ----: | -------: | ----------: | --------------------------------------- |
| 43.4% | 2.43 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:539` |
| 33.9% |  1.9 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:568` |
| 22.7% | 1.28 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:838` |

##### `_code` (`/usr/lib/python3.11/re/_compiler.py:571`)

|     % |     Size | Allocations | Location                                  |
| ----: | -------: | ----------: | ----------------------------------------- |
| 81.6% | 4.34 KiB |           1 | `/usr/lib/python3.11/re/_compiler.py:580` |
| 18.4% |  1,002 B |           1 | `/usr/lib/python3.11/re/_compiler.py:577` |

##### `<module>` (`/usr/lib/python3.11/pkgutil.py:1`)

|     % |     Size | Allocations | Location                             |
| ----: | -------: | ----------: | ------------------------------------ |
| 35.7% | 1.69 KiB |           2 | `/usr/lib/python3.11/pkgutil.py:194` |
| 35.7% | 1.69 KiB |           2 | `/usr/lib/python3.11/pkgutil.py:269` |
| 15.9% |    768 B |           1 | `/usr/lib/python3.11/pkgutil.py:137` |
| 12.8% |    620 B |           1 | `/usr/lib/python3.11/pkgutil.py:184` |

##### `wrap` (`/usr/lib/python3.11/dataclasses.py:1209`)

|      % |     Size | Allocations | Location                                  |
| -----: | -------: | ----------: | ----------------------------------------- |
| 100.0% | 2.85 KiB |           1 | `/usr/lib/python3.11/dataclasses.py:1210` |

##### `_process_class` (`/usr/lib/python3.11/dataclasses.py:884`)

|     % |     Size | Allocations | Location                                  |
| ----: | -------: | ----------: | ----------------------------------------- |
| 41.3% | 1.18 KiB |           1 | `/usr/lib/python3.11/dataclasses.py:958`  |
| 21.0% |    612 B |           1 | `/usr/lib/python3.11/dataclasses.py:1027` |
| 19.9% |    580 B |           1 | `/usr/lib/python3.11/dataclasses.py:1096` |
| 17.8% |    518 B |           1 | `/usr/lib/python3.11/dataclasses.py:947`  |

##### `_signature_from_function` (`/usr/lib/python3.11/inspect.py:2331`)

|     % |     Size | Allocations | Location                              |
| ----: | -------: | ----------: | ------------------------------------- |
| 41.4% | 1.06 KiB |           1 | `/usr/lib/python3.11/inspect.py:2358` |
| 37.0% |    972 B |           1 | `/usr/lib/python3.11/inspect.py:2376` |
| 21.6% |    568 B |           1 | `/usr/lib/python3.11/inspect.py:2421` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Allocations | Caller   | Location            |
| -----: | -------: | ----------: | -------- | ------------------- |
| 100.0% | 16.2 MiB |      20,788 | `append` | `black/lines.py:63` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Allocations | Caller    | Location                 |
| ----: | ----: | ----------: | --------- | ------------------------ |
| 66.7% | 4 MiB |           4 | `changed` | `blib2to3/pytree.py:171` |
| 33.3% | 2 MiB |           2 | `prefix`  | `blib2to3/pytree.py:480` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 5 MiB |           5 | `convert` | `blib2to3/pytree.py:486` |

##### `visit_default` (`black/linegen.py:134`)

|      % |  Size | Allocations | Caller         | Location               |
| -----: | ----: | ----------: | -------------- | ---------------------- |
| 100.0% | 4 MiB |           4 | `visit`        | `black/nodes.py:163`   |
|  <0.1% | 702 B |           1 | `visit_STRING` | `black/linegen.py:413` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|      % |  Size | Allocations | Caller     | Location                      |
| -----: | ----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 4 MiB |           4 | `__next__` | `blib2to3/pgen2/driver.py:80` |

##### `__str__` (`black/lines.py:490`)

|     % |  Size | Allocations | Caller             | Location                 |
| ----: | ----: | ----------: | ------------------ | ------------------------ |
| 66.7% | 2 MiB |           2 | `_format_str_once` | `black/__init__.py:1236` |
| 33.3% | 1 MiB |           1 | `line_to_string`   | `black/lines.py:1073`    |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Allocations | Caller           | Location                                     |
| -----: | -------: | ----------: | ---------------- | -------------------------------------------- |
| 100.0% | 2.27 MiB |         352 | `source_to_code` | `<frozen importlib._bootstrap_external>:999` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Caller                  | Location               |
| -----: | -------: | ----------: | ----------------------- | ---------------------- |
| 100.0% | 2.01 MiB |           3 | `_parse_single_version` | `black/parsing.py:117` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Allocations | Caller          | Location               |
| -----: | ----: | ----------: | --------------- | ---------------------- |
| 100.0% | 2 MiB |           2 | `visit_default` | `black/linegen.py:134` |

##### `is_split_before_delimiter` (`black/brackets.py:232`)

|      % |  Size | Allocations | Caller | Location               |
| -----: | ----: | ----------: | ------ | ---------------------- |
| 100.0% | 2 MiB |           2 | `mark` | `black/brackets.py:70` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Caller     | Location                                      |
| -----: | -------: | ----------: | ---------- | --------------------------------------------- |
| 100.0% | 1.31 MiB |         353 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|      % |     Size | Allocations | Caller         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 1.14 MiB |         196 | `prev_sibling` | `blib2to3/pytree.py:207` |

##### `make_label` (`blib2to3/pgen2/pgen.py:84`)

|      % |     Size | Allocations | Caller         | Location                    |
| -----: | -------: | ----------: | -------------- | --------------------------- |
| 100.0% | 1.01 MiB |           6 | `make_grammar` | `blib2to3/pgen2/pgen.py:49` |

##### `visit` (`black/nodes.py:163`)

|     % |  Size | Allocations | Caller             | Location                 |
| ----: | ----: | ----------: | ------------------ | ------------------------ |
| 99.9% | 1 MiB |           4 | `visit_default`    | `black/nodes.py:187`     |
|  0.1% | 690 B |           1 | `_format_str_once` | `black/__init__.py:1236` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 1 MiB |           5 | `convert` | `blib2to3/pytree.py:486` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `_addtoken` | `blib2to3/pgen2/parse.py:290` |

##### `prefix` (`blib2to3/pytree.py:480`)

|      % |  Size | Allocations | Caller   | Location            |
| -----: | ----: | ----------: | -------- | ------------------- |
| 100.0% | 1 MiB |           1 | `append` | `black/lines.py:63` |

##### `normalize_trailing_prefix` (`black/comments.py:127`)

|      % |  Size | Allocations | Caller              | Location               |
| -----: | ----: | ----------: | ------------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `generate_comments` | `black/comments.py:52` |

##### `__init__` (`<string>:2`)

|      % |  Size | Allocations | Caller | Location               |
| -----: | ----: | ----------: | ------ | ---------------------- |
| 100.0% | 1 MiB |           1 | `line` | `black/linegen.py:109` |

##### `_code_to_timestamp_pyc` (`<frozen importlib._bootstrap_external>:740`)

|      % |    Size | Allocations | Caller     | Location                                      |
| -----: | ------: | ----------: | ---------- | --------------------------------------------- |
| 100.0% | 112 KiB |         108 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `__new__` (`<frozen abc>:105`)

|     % |     Size | Allocations | Caller     | Location                                                       |
| ----: | -------: | ----------: | ---------- | -------------------------------------------------------------- |
| 50.7% | 39.2 KiB |          46 | `<module>` | `/venv/lib/python3.11/site-packages/click/types.py:1`          |
| 22.6% | 17.5 KiB |          18 | `<module>` | `black/trans.py:1`                                             |
| 18.9% | 14.6 KiB |          10 | `<module>` | `/venv/lib/python3.11/site-packages/click/core.py:1`           |
|  7.8% | 6.07 KiB |           7 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:1` |

##### `transform_line` (`black/linegen.py:601`)

|      % |     Size | Allocations | Caller             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 76.5 KiB |           6 | `_format_str_once` | `black/__init__.py:1236` |

##### `normalize_string_prefix` (`black/strings.py:143`)

|      % |     Size | Allocations | Caller         | Location               |
| -----: | -------: | ----------: | -------------- | ---------------------- |
| 100.0% | 57.2 KiB |          65 | `visit_STRING` | `black/linegen.py:413` |

##### `copy` (`blib2to3/pgen2/grammar.py:131`)

|      % |     Size | Allocations | Caller       | Location                 |
| -----: | -------: | ----------: | ------------ | ------------------------ |
| 100.0% | 41.5 KiB |          16 | `initialize` | `blib2to3/pygram.py:165` |

##### `classify` (`blib2to3/pgen2/parse.py:336`)

|      % |   Size | Allocations | Caller     | Location                      |
| -----: | -----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 32 KiB |           1 | `addtoken` | `blib2to3/pgen2/parse.py:242` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

|     % |     Size | Allocations | Caller     | Location                                                     |
| ----: | -------: | ----------: | ---------- | ------------------------------------------------------------ |
| 31.7% | 7.64 KiB |           9 | `<module>` | `black/mode.py:1`                                            |
| 16.2% | 3.89 KiB |           4 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/_elffile.py:1` |
| 13.7% |  3.3 KiB |           3 | `<module>` | `/venv/lib/python3.11/site-packages/click/_utils.py:1`       |
| 10.1% | 2.44 KiB |           3 | `<module>` | `black/__init__.py:1`                                        |
|  7.2% | 1.74 KiB |           2 | `<module>` | `/venv/lib/python3.11/site-packages/click/core.py:1`         |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|      % |     Size | Allocations | Caller     | Location                                 |
| -----: | -------: | ----------: | ---------- | ---------------------------------------- |
| 100.0% | 22.6 KiB |          12 | `_compile` | `/usr/lib/python3.11/re/__init__.py:272` |

##### `<module>` (`/usr/lib/python3.11/tomllib/_parser.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 19.8 KiB |          12 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `__new__` (`/usr/lib/python3.11/typing.py:2891`)

|     % |     Size | Allocations | Caller     | Location                                                    |
| ----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 90.3% | 15.7 KiB |          19 | `<module>` | `/venv/lib/python3.11/site-packages/click/types.py:1`       |
|  9.7% | 1.69 KiB |           2 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/version.py:1` |

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|     % |     Size | Allocations | Caller        | Location                                              |
| ----: | -------: | ----------: | ------------- | ----------------------------------------------------- |
| 75.3% | 9.02 KiB |           1 | `Line`        | `black/lines.py:49`                                   |
| 17.9% | 2.15 KiB |           1 | `__getitem__` | `/usr/lib/python3.11/typing.py:467`                   |
|  6.7% |    826 B |           1 | `<module>`    | `/venv/lib/python3.11/site-packages/click/types.py:1` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1655`)

|      % |  Size | Allocations | Caller      | Location                                      |
| -----: | ----: | ----------: | ----------- | --------------------------------------------- |
| 100.0% | 8 KiB |           4 | `find_spec` | `<frozen importlib._bootstrap_external>:1604` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|      % |     Size | Allocations | Caller  | Location                                |
| -----: | -------: | ----------: | ------- | --------------------------------------- |
| 100.0% | 7.97 KiB |           1 | `parse` | `/usr/lib/python3.11/re/_parser.py:970` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

|     % |     Size | Allocations | Caller         | Location                          |
| ----: | -------: | ----------: | -------------- | --------------------------------- |
| 66.6% | 4.48 KiB |           5 | `__set_name__` | `/usr/lib/python3.11/enum.py:237` |
| 33.4% | 2.25 KiB |           3 | `__new__`      | `/usr/lib/python3.11/enum.py:488` |

##### `namedtuple` (`/usr/lib/python3.11/collections/__init__.py:348`)

|     % |     Size | Allocations | Caller          | Location                             |
| ----: | -------: | ----------: | --------------- | ------------------------------------ |
| 83.3% | 4.69 KiB |           5 | `_make_nmtuple` | `/usr/lib/python3.11/typing.py:2795` |
| 16.7% |    960 B |           1 | `<module>`      | `/usr/lib/python3.11/pkgutil.py:1`   |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|      % |     Size | Allocations | Caller       | Location                                |
| -----: | -------: | ----------: | ------------ | --------------------------------------- |
| 100.0% | 5.61 KiB |           3 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py:447` |

##### `_code` (`/usr/lib/python3.11/re/_compiler.py:571`)

|      % |     Size | Allocations | Caller    | Location                                  |
| -----: | -------: | ----------: | --------- | ----------------------------------------- |
| 100.0% | 5.32 KiB |           2 | `compile` | `/usr/lib/python3.11/re/_compiler.py:738` |

##### `<module>` (`/usr/lib/python3.11/pkgutil.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 4.73 KiB |           6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `wrap` (`/usr/lib/python3.11/dataclasses.py:1209`)

|      % |     Size | Allocations | Caller     | Location                                                   |
| -----: | -------: | ----------: | ---------- | ---------------------------------------------------------- |
| 100.0% | 2.85 KiB |           1 | `<module>` | `/venv/lib/python3.11/site-packages/pathspec/pattern.py:1` |

##### `_process_class` (`/usr/lib/python3.11/dataclasses.py:884`)

|      % |     Size | Allocations | Caller | Location                                  |
| -----: | -------: | ----------: | ------ | ----------------------------------------- |
| 100.0% | 2.85 KiB |           4 | `wrap` | `/usr/lib/python3.11/dataclasses.py:1209` |

##### `_signature_from_function` (`/usr/lib/python3.11/inspect.py:2331`)

|      % |     Size | Allocations | Caller                     | Location                              |
| -----: | -------: | ----------: | -------------------------- | ------------------------------------- |
| 100.0% | 2.56 KiB |           3 | `_signature_from_callable` | `/usr/lib/python3.11/inspect.py:2426` |

### Total size

Functions ranked by total bytes never freed in the function and all its callees.

|      % |     Size | Allocations | Function               | Location                                                       |
| -----: | -------: | ----------: | ---------------------- | -------------------------------------------------------------- |
| 100.0% | 57.1 MiB |      22,698 | `_run_tracker`         | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40` |
| 100.0% | 57.1 MiB |      22,697 | `run_module`           | `<frozen runpy>:201`                                           |
|  90.5% | 51.6 MiB |      21,191 | `__call__`             | `/venv/lib/python3.11/site-packages/click/core.py:1629`        |
|  90.5% | 51.6 MiB |      21,191 | `patched_main`         | `black/__init__.py:1594`                                       |
|  90.5% | 51.6 MiB |      21,191 | `<module>`             | `black/__main__.py:1`                                          |
|  90.5% | 51.6 MiB |      21,191 | `_run_code`            | `<frozen runpy>:65`                                            |
|  90.5% | 51.6 MiB |      21,191 | `_run_module_code`     | `<frozen runpy>:91`                                            |
|  90.5% | 51.6 MiB |      21,190 | `main`                 | `/venv/lib/python3.11/site-packages/click/core.py:1484`        |
|  90.5% | 51.6 MiB |      21,170 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:1401`        |
|  90.5% | 51.6 MiB |      21,168 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:857`         |
|  90.5% | 51.6 MiB |      21,167 | `new_func`             | `/venv/lib/python3.11/site-packages/click/decorators.py:33`    |
|  90.4% | 51.6 MiB |      21,165 | `main`                 | `black/__init__.py:244`                                        |
|  90.4% | 51.6 MiB |      21,159 | `reformat_one`         | `black/__init__.py:860`                                        |
|  90.4% | 51.6 MiB |      21,152 | `format_file_in_place` | `black/__init__.py:917`                                        |
|  90.4% | 51.6 MiB |      21,151 | `format_file_contents` | `black/__init__.py:1054`                                       |
|  86.9% | 49.6 MiB |      21,145 | `_format_str_once`     | `black/__init__.py:1236`                                       |
|  62.1% | 35.4 MiB |      21,086 | `visit`                | `black/nodes.py:163`                                           |
|  62.1% | 35.4 MiB |      21,084 | `visit_default`        | `black/nodes.py:187`                                           |
|  62.1% | 35.4 MiB |      21,084 | `visit_default`        | `black/linegen.py:134`                                         |
|  61.6% | 35.2 MiB |      20,713 | `visit_stmt`           | `black/linegen.py:199`                                         |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                          | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 90.5% | 51.6 MiB |      21,191 | `patched_main`                    | `black/__init__.py:1594` |
| 90.5% | 51.6 MiB |      21,191 | `<module>`                        | `black/__main__.py:1`    |
| 90.4% | 51.6 MiB |      21,165 | `main`                            | `black/__init__.py:244`  |
| 90.4% | 51.6 MiB |      21,159 | `reformat_one`                    | `black/__init__.py:860`  |
| 90.4% | 51.6 MiB |      21,152 | `format_file_in_place`            | `black/__init__.py:917`  |
| 90.4% | 51.6 MiB |      21,151 | `format_file_contents`            | `black/__init__.py:1054` |
| 86.9% | 49.6 MiB |      21,145 | `_format_str_once`                | `black/__init__.py:1236` |
| 62.1% | 35.4 MiB |      21,086 | `visit`                           | `black/nodes.py:163`     |
| 62.1% | 35.4 MiB |      21,084 | `visit_default`                   | `black/nodes.py:187`     |
| 62.1% | 35.4 MiB |      21,084 | `visit_default`                   | `black/linegen.py:134`   |
| 61.6% | 35.2 MiB |      20,713 | `visit_stmt`                      | `black/linegen.py:199`   |
| 59.7% | 34.1 MiB |          92 | `format_str`                      | `black/__init__.py:1189` |
| 59.2% | 33.8 MiB |      20,271 | `visit_funcdef`                   | `black/linegen.py:254`   |
| 59.1% | 33.7 MiB |      20,145 | `visit_suite`                     | `black/linegen.py:288`   |
| 35.5% | 20.3 MiB |      20,885 | `append`                          | `black/lines.py:63`      |
| 33.0% | 18.8 MiB |      13,397 | `visit_simple_stmt`               | `black/linegen.py:295`   |
| 31.9% | 18.2 MiB |      20,790 | `mark`                            | `black/brackets.py:70`   |
| 30.7% | 17.5 MiB |      21,059 | `check_stability_and_equivalence` | `black/__init__.py:1037` |
| 29.6% | 16.9 MiB |      10,808 | `visit_power`                     | `black/linegen.py:341`   |
| 27.2% | 15.5 MiB |      21,054 | `assert_stable`                   | `black/__init__.py:1557` |

##### Standard library

|      % |     Size | Allocations | Function                    | Location                                      |
| -----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 100.0% | 57.1 MiB |      22,697 | `run_module`                | `<frozen runpy>:201`                          |
|  90.5% | 51.6 MiB |      21,191 | `_run_code`                 | `<frozen runpy>:65`                           |
|  90.5% | 51.6 MiB |      21,191 | `_run_module_code`          | `<frozen runpy>:91`                           |
|   9.5% | 5.43 MiB |       1,505 | `_get_module_details`       | `<frozen runpy>:105`                          |
|   9.5% | 5.42 MiB |       1,498 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`          |
|   9.5% | 5.42 MiB |       1,496 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`          |
|   9.5% | 5.42 MiB |       1,495 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`           |
|   9.5% | 5.42 MiB |       1,493 | `exec_module`               | `<frozen importlib._bootstrap_external>:934`  |
|   9.5% |  5.4 MiB |       1,481 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|   6.5% | 3.69 MiB |         814 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |
|   4.0% | 2.27 MiB |         352 | `source_to_code`            | `<frozen importlib._bootstrap_external>:999`  |
|   3.5% | 2.01 MiB |           3 | `parse`                     | `/usr/lib/python3.11/ast.py:33`               |
|   2.3% | 1.31 MiB |         353 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`  |
|   0.6% |  334 KiB |         342 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`          |
|   0.2% |  112 KiB |         108 | `_code_to_timestamp_pyc`    | `<frozen importlib._bootstrap_external>:740`  |
|   0.1% | 77.4 KiB |          81 | `__new__`                   | `<frozen abc>:105`                            |
|   0.1% | 47.8 KiB |          25 | `compile`                   | `/usr/lib/python3.11/re/__init__.py:225`      |
|   0.1% | 47.1 KiB |          24 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py:272`      |
|   0.1% | 46.5 KiB |          23 | `compile`                   | `/usr/lib/python3.11/re/_compiler.py:738`     |
|   0.1% |   35 KiB |          32 | `<module>`                  | `/usr/lib/python3.11/tomllib/__init__.py:1`   |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|      % |     Size | Allocations | Callee       | Location             |
| -----: | -------: | ----------: | ------------ | -------------------- |
| 100.0% | 57.1 MiB |      22,697 | `run_module` | `<frozen runpy>:201` |

##### `run_module` (`<frozen runpy>:201`)

|     % |     Size | Allocations | Callee                | Location             |
| ----: | -------: | ----------: | --------------------- | -------------------- |
| 90.5% | 51.6 MiB |      21,191 | `_run_module_code`    | `<frozen runpy>:91`  |
|  9.5% | 5.43 MiB |       1,505 | `_get_module_details` | `<frozen runpy>:105` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1629`)

|      % |     Size | Allocations | Callee | Location                                                |
| -----: | -------: | ----------: | ------ | ------------------------------------------------------- |
| 100.0% | 51.6 MiB |      21,190 | `main` | `/venv/lib/python3.11/site-packages/click/core.py:1484` |

##### `patched_main` (`black/__init__.py:1594`)

|      % |     Size | Allocations | Callee     | Location                                                |
| -----: | -------: | ----------: | ---------- | ------------------------------------------------------- |
| 100.0% | 51.6 MiB |      21,191 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py:1629` |

##### `<module>` (`black/__main__.py:1`)

|      % |     Size | Allocations | Callee         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 51.6 MiB |      21,191 | `patched_main` | `black/__init__.py:1594` |

##### `_run_code` (`<frozen runpy>:65`)

|      % |     Size | Allocations | Callee     | Location              |
| -----: | -------: | ----------: | ---------- | --------------------- |
| 100.0% | 51.6 MiB |      21,191 | `<module>` | `black/__main__.py:1` |

##### `_run_module_code` (`<frozen runpy>:91`)

|      % |     Size | Allocations | Callee      | Location            |
| -----: | -------: | ----------: | ----------- | ------------------- |
| 100.0% | 51.6 MiB |      21,191 | `_run_code` | `<frozen runpy>:65` |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py:1484`)

|      % |     Size | Allocations | Callee         | Location                                                |
| -----: | -------: | ----------: | -------------- | ------------------------------------------------------- |
| 100.0% | 51.6 MiB |      21,170 | `invoke`       | `/venv/lib/python3.11/site-packages/click/core.py:1401` |
|  <0.1% | 14.1 KiB |          17 | `make_context` | `/venv/lib/python3.11/site-packages/click/core.py:1328` |
|  <0.1% |    529 B |           2 | `__exit__`     | `/venv/lib/python3.11/site-packages/click/core.py:554`  |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:1401`)

|      % |     Size | Allocations | Callee   | Location                                               |
| -----: | -------: | ----------: | -------- | ------------------------------------------------------ |
| 100.0% | 51.6 MiB |      21,168 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:857` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`)

|      % |     Size | Allocations | Callee     | Location                                                    |
| -----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 100.0% | 51.6 MiB |      21,167 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |     Size | Allocations | Callee | Location                |
| -----: | -------: | ----------: | ------ | ----------------------- |
| 100.0% | 51.6 MiB |      21,165 | `main` | `black/__init__.py:244` |

##### `main` (`black/__init__.py:244`)

|      % |     Size | Allocations | Callee         | Location                |
| -----: | -------: | ----------: | -------------- | ----------------------- |
| 100.0% | 51.6 MiB |      21,159 | `reformat_one` | `black/__init__.py:860` |
|  <0.1% | 2.06 KiB |           2 | `get_sources`  | `black/__init__.py:724` |
|  <0.1% |    550 B |           1 | `__str__`      | `black/report.py:80`    |

##### `reformat_one` (`black/__init__.py:860`)

|      % |     Size | Allocations | Callee                 | Location                |
| -----: | -------: | ----------: | ---------------------- | ----------------------- |
| 100.0% | 51.6 MiB |      21,152 | `format_file_in_place` | `black/__init__.py:917` |
|  <0.1% | 1.57 KiB |           2 | `done`                 | `black/report.py:36`    |
|  <0.1% | 1.13 KiB |           1 | `read`                 | `black/cache.py:60`     |
|  <0.1% |     72 B |           2 | `write`                | `black/cache.py:132`    |

##### `format_file_in_place` (`black/__init__.py:917`)

|      % |     Size | Allocations | Callee                 | Location                 |
| -----: | -------: | ----------: | ---------------------- | ------------------------ |
| 100.0% | 51.6 MiB |      21,151 | `format_file_contents` | `black/__init__.py:1054` |
|  <0.1% |    552 B |           1 | `decode_bytes`         | `black/__init__.py:1290` |

##### `format_file_contents` (`black/__init__.py:1054`)

|     % |     Size | Allocations | Callee                            | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 66.0% | 34.1 MiB |          92 | `format_str`                      | `black/__init__.py:1189` |
| 34.0% | 17.5 MiB |      21,059 | `check_stability_and_equivalence` | `black/__init__.py:1037` |

##### `_format_str_once` (`black/__init__.py:1236`)

|     % |     Size | Allocations | Callee              | Location                |
| ----: | -------: | ----------: | ------------------- | ----------------------- |
| 71.5% | 35.4 MiB |      21,086 | `visit`             | `black/nodes.py:163`    |
| 22.3% |   11 MiB |          30 | `lib2to3_parse`     | `black/parsing.py:55`   |
|  4.0% |    2 MiB |           2 | `__str__`           | `black/lines.py:490`    |
|  2.2% | 1.08 MiB |          16 | `transform_line`    | `black/linegen.py:601`  |
| <0.1% | 19.9 KiB |           3 | `normalize_fmt_off` | `black/comments.py:168` |

##### `visit` (`black/nodes.py:163`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 35.4 MiB |      21,084 | `visit_default`     | `black/linegen.py:134` |
|  99.2% | 35.2 MiB |      20,713 | `visit_stmt`        | `black/linegen.py:199` |
|  95.4% | 33.8 MiB |      20,271 | `visit_funcdef`     | `black/linegen.py:254` |
|  95.2% | 33.7 MiB |      20,145 | `visit_suite`       | `black/linegen.py:288` |
|  53.1% | 18.8 MiB |      13,397 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/nodes.py:187`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 35.4 MiB |      21,084 | `visit` | `black/nodes.py:163` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 35.4 MiB |      21,084 | `visit_default`     | `black/nodes.py:187`   |
|  57.2% | 20.3 MiB |      20,885 | `append`            | `black/lines.py:63`    |
|  25.4% |    9 MiB |           9 | `generate_comments` | `black/comments.py:52` |

##### `visit_stmt` (`black/linegen.py:199`)

|      % |     Size | Allocations | Callee                       | Location                |
| -----: | -------: | ----------: | ---------------------------- | ----------------------- |
| 100.0% | 35.2 MiB |      20,711 | `visit`                      | `black/nodes.py:163`    |
|  <0.1% | 1.15 KiB |           1 | `normalize_invisible_parens` | `black/linegen.py:1328` |

##### `format_str` (`black/__init__.py:1189`)

|      % |     Size | Allocations | Callee             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 34.1 MiB |          91 | `_format_str_once` | `black/__init__.py:1236` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 33.8 MiB |      20,271 | `visit` | `black/nodes.py:163` |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 33.7 MiB |      20,145 | `visit_default` | `black/linegen.py:134` |

##### `append` (`black/lines.py:63`)

|     % |     Size | Allocations | Callee       | Location                 |
| ----: | -------: | ----------: | ------------ | ------------------------ |
| 89.8% | 18.2 MiB |      20,790 | `mark`       | `black/brackets.py:70`   |
|  5.2% | 1.05 MiB |          90 | `whitespace` | `black/nodes.py:194`     |
|  4.9% |    1 MiB |           1 | `prefix`     | `blib2to3/pytree.py:480` |

##### `visit_simple_stmt` (`black/linegen.py:295`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 18.8 MiB |      13,397 | `visit_default` | `black/linegen.py:134` |

##### `mark` (`black/brackets.py:70`)

|     % |  Size | Allocations | Callee                      | Location                |
| ----: | ----: | ----------: | --------------------------- | ----------------------- |
| 11.0% | 2 MiB |           2 | `is_split_before_delimiter` | `black/brackets.py:232` |

##### `check_stability_and_equivalence` (`black/__init__.py:1037`)

|     % |     Size | Allocations | Callee              | Location                 |
| ----: | -------: | ----------: | ------------------- | ------------------------ |
| 88.6% | 15.5 MiB |      21,054 | `assert_stable`     | `black/__init__.py:1557` |
| 11.4% | 2.01 MiB |           4 | `assert_equivalent` | `black/__init__.py:1524` |

##### `visit_power` (`black/linegen.py:341`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 16.9 MiB |      10,807 | `visit_default` | `black/linegen.py:134` |

##### `assert_stable` (`black/__init__.py:1557`)

|      % |     Size | Allocations | Callee             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 15.5 MiB |      21,054 | `_format_str_once` | `black/__init__.py:1236` |

##### `_get_module_details` (`<frozen runpy>:105`)

|     % |     Size | Allocations | Callee                | Location                             |
| ----: | -------: | ----------: | --------------------- | ------------------------------------ |
| 99.9% | 5.42 MiB |       1,498 | `_find_and_load`      | `<frozen importlib._bootstrap>:1167` |
| 99.9% | 5.42 MiB |       1,498 | `_get_module_details` | `<frozen runpy>:105`                 |
|  0.1% | 5.66 KiB |           6 | `find_spec`           | `<frozen importlib.util>:73`         |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

|      % |     Size | Allocations | Callee                    | Location                             |
| -----: | -------: | ----------: | ------------------------- | ------------------------------------ |
| 100.0% | 5.42 MiB |       1,496 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |
|  <0.1% |    560 B |           1 | `__enter__`               | `<frozen importlib._bootstrap>:169`  |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

|      % |     Size | Allocations | Callee                      | Location                             |
| -----: | -------: | ----------: | --------------------------- | ------------------------------------ |
| 100.0% | 5.42 MiB |       1,495 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`  |
|   0.7% | 37.2 KiB |          47 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`  |
|   0.1% | 7.48 KiB |           4 | `_find_spec`                | `<frozen importlib._bootstrap>:1056` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

|      % |     Size | Allocations | Callee             | Location                                     |
| -----: | -------: | ----------: | ------------------ | -------------------------------------------- |
| 100.0% | 5.42 MiB |       1,493 | `exec_module`      | `<frozen importlib._bootstrap_external>:934` |
|  <0.1% | 1.83 KiB |           2 | `module_from_spec` | `<frozen importlib._bootstrap>:566`          |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

|     % |     Size | Allocations | Callee                      | Location                                      |
| ----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 99.1% | 5.37 MiB |       1,447 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
| 68.1% | 3.69 MiB |         814 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|     % |     Size | Allocations | Callee     | Location                                                 |
| ----: | -------: | ----------: | ---------- | -------------------------------------------------------- |
| 99.4% | 5.37 MiB |       1,447 | `<module>` | `black/__init__.py:1`                                    |
| 43.2% | 2.34 MiB |         316 | `<module>` | `black/comments.py:1`                                    |
| 24.3% | 1.32 MiB |         295 | `<module>` | `black/nodes.py:1`                                       |
| 24.3% | 1.31 MiB |         316 | `<module>` | `/venv/lib/python3.11/site-packages/click/__init__.py:1` |
| 22.8% | 1.23 MiB |         236 | `<module>` | `/venv/lib/python3.11/site-packages/click/core.py:1`     |

##### `get_code` (`<frozen importlib._bootstrap_external>:1007`)

|     % |     Size | Allocations | Callee                   | Location                                      |
| ----: | -------: | ----------: | ------------------------ | --------------------------------------------- |
| 61.5% | 2.27 MiB |         352 | `source_to_code`         | `<frozen importlib._bootstrap_external>:999`  |
| 35.5% | 1.31 MiB |         353 | `_compile_bytecode`      | `<frozen importlib._bootstrap_external>:727`  |
|  3.0% |  112 KiB |         108 | `_code_to_timestamp_pyc` | `<frozen importlib._bootstrap_external>:740`  |
| <0.1% |    624 B |           1 | `_cache_bytecode`        | `<frozen importlib._bootstrap_external>:1151` |

##### `source_to_code` (`<frozen importlib._bootstrap_external>:999`)

|      % |     Size | Allocations | Callee                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 2.27 MiB |         352 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1209`)

|      % |    Size | Allocations | Callee                      | Location                            |
| -----: | ------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 334 KiB |         342 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `compile` (`/usr/lib/python3.11/re/__init__.py:225`)

|     % |     Size | Allocations | Callee     | Location                                 |
| ----: | -------: | ----------: | ---------- | ---------------------------------------- |
| 98.6% | 47.1 KiB |          24 | `_compile` | `/usr/lib/python3.11/re/__init__.py:272` |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py:272`)

|     % |     Size | Allocations | Callee    | Location                                  |
| ----: | -------: | ----------: | --------- | ----------------------------------------- |
| 98.6% | 46.5 KiB |          23 | `compile` | `/usr/lib/python3.11/re/_compiler.py:738` |
|  1.4% |    698 B |           1 | `__and__` | `/usr/lib/python3.11/enum.py:1504`        |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|     % |     Size | Allocations | Callee  | Location                                  |
| ----: | -------: | ----------: | ------- | ----------------------------------------- |
| 31.0% | 14.4 KiB |           5 | `parse` | `/usr/lib/python3.11/re/_parser.py:970`   |
| 20.4% |  9.5 KiB |           6 | `_code` | `/usr/lib/python3.11/re/_compiler.py:571` |

##### `<module>` (`/usr/lib/python3.11/tomllib/__init__.py:1`)

|      % |   Size | Allocations | Callee           | Location                             |
| -----: | -----: | ----------: | ---------------- | ------------------------------------ |
| 100.0% | 35 KiB |          32 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

## Hottest call stacks

Call stacks ranked by bytes never freed in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>:201`) ← `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|    % |     Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | -------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.8% |    5 MiB |           5 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `shift` (`blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 7.0% |    4 MiB |           4 | `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`) ← `__next__` (`blib2to3/pgen2/driver.py:80`) ← `parse_tokens` (114) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 3.5% | 2.01 MiB |           3 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 3.5% |    2 MiB |           2 | `__str__` (`black/lines.py:490`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.9% | 1.07 MiB |          96 | `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `source_to_code` (`<frozen importlib._bootstrap_external>:999`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.8% | 1.03 MiB |          23 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/core.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.8% | 1.01 MiB |          15 | `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `source_to_code` (`<frozen importlib._bootstrap_external>:999`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.8% | 1.01 MiB |           6 | `make_label` (`blib2to3/pgen2/pgen.py:84`) ← `make_grammar` (49) ← `generate_grammar` (426) ← `load_grammar` (`blib2to3/pgen2/driver.py:246`) ← `load_packaged_grammar` (280) ← `initialize` (`blib2to3/pygram.py:165`) ← `<module>` (`black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.8% |    1 MiB |           1 | `push` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.8% |    1 MiB |           1 | `__init__` (`blib2to3/pytree.py:248`) ← `convert` (486) ← `pop` (`blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.8% |    1 MiB |           1 | `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.8% |    1 MiB |           1 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                            |
| 1.8% |    1 MiB |           1 | `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                           |
| 1.8% |    1 MiB |           1 | `__str__` (`black/lines.py:490`) ← `line_to_string` (1073) ← `transform_line` (`black/linegen.py:601`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.8% |    1 MiB |           1 | `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                       |
| 1.8% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91) |
| 1.8% |    1 MiB |           1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`black/nodes.py:194`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.8% |    1 MiB |           1 | `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                             |
| 1.8% |    1 MiB |           1 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.8% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                              |

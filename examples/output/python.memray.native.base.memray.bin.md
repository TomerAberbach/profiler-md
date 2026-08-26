# Peak memory profile

Held 78.6 MiB over 22,684 allocations (3.55 KiB per allocation).

| Category         |     % |     Size | Allocations |
| ---------------- | ----: | -------: | ----------: |
| Ours             | 82.9% | 65.2 MiB |      21,440 |
| Standard library | 15.5% | 12.2 MiB |       1,010 |
| Third-party      |  1.6% | 1.27 MiB |         234 |

## Hottest functions

### Self size

Functions ranked by bytes held at peak memory directly in the function body, excluding callees.

|     % |     Size | Allocations | Function                    | Location                                               |
| ----: | -------: | ----------: | --------------------------- | ------------------------------------------------------ |
| 19.4% | 15.2 MiB |      20,787 | `mark`                      | `black/brackets.py:70`                                 |
| 12.7% |   10 MiB |          10 | `changed`                   | `blib2to3/pytree.py:171`                               |
| 11.6% | 9.12 MiB |         142 | `parse`                     | `/usr/lib/python3.11/ast.py:33`                        |
|  9.0% |  7.1 MiB |           4 | `assert_equivalent`         | `black/__init__.py:1524`                               |
|  8.9% |    7 MiB |           7 | `__new__`                   | `blib2to3/pytree.py:81`                                |
|  7.7% | 6.05 MiB |          62 | `_stringify_ast`            | `black/parsing.py:174`                                 |
|  2.5% |    2 MiB |           6 | `visit`                     | `black/nodes.py:163`                                   |
|  2.5% |    2 MiB |           5 | `transform_line`            | `black/linegen.py:601`                                 |
|  2.5% |    2 MiB |           3 | `run_transformer`           | `black/linegen.py:1755`                                |
|  1.5% | 1.14 MiB |         196 | `update_sibling_maps`       | `blib2to3/pytree.py:369`                               |
|  1.3% | 1.01 MiB |           2 | `__next__`                  | `blib2to3/pgen2/driver.py:80`                          |
|  1.3% | 1.01 MiB |          11 | `<module>`                  | `/venv/lib/python3.11/site-packages/click/parser.py:1` |
|  1.3% | 1.01 MiB |           4 | `_parse`                    | `/usr/lib/python3.11/re/_parser.py:507`                |
|  1.3% |    1 MiB |           5 | `__init__`                  | `blib2to3/pytree.py:248`                               |
|  1.3% |    1 MiB |           2 | `visit_power`               | `black/linegen.py:341`                                 |
|  1.3% |    1 MiB |           2 | `visit_default`             | `black/linegen.py:134`                                 |
|  1.3% |    1 MiB |           3 | `_create_fn`                | `/usr/lib/python3.11/dataclasses.py:413`               |
|  1.3% |    1 MiB |           1 | `sub_twice`                 | `black/strings.py:28`                                  |
|  1.3% |    1 MiB |           1 | `pop`                       | `blib2to3/pgen2/parse.py:398`                          |
|  1.3% |    1 MiB |           1 | `normalize_trailing_prefix` | `black/comments.py:127`                                |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                    | Location                      |
| ----: | -------: | ----------: | --------------------------- | ----------------------------- |
| 19.4% | 15.2 MiB |      20,787 | `mark`                      | `black/brackets.py:70`        |
| 12.7% |   10 MiB |          10 | `changed`                   | `blib2to3/pytree.py:171`      |
|  9.0% |  7.1 MiB |           4 | `assert_equivalent`         | `black/__init__.py:1524`      |
|  8.9% |    7 MiB |           7 | `__new__`                   | `blib2to3/pytree.py:81`       |
|  7.7% | 6.05 MiB |          62 | `_stringify_ast`            | `black/parsing.py:174`        |
|  2.5% |    2 MiB |           6 | `visit`                     | `black/nodes.py:163`          |
|  2.5% |    2 MiB |           5 | `transform_line`            | `black/linegen.py:601`        |
|  2.5% |    2 MiB |           3 | `run_transformer`           | `black/linegen.py:1755`       |
|  1.5% | 1.14 MiB |         196 | `update_sibling_maps`       | `blib2to3/pytree.py:369`      |
|  1.3% | 1.01 MiB |           2 | `__next__`                  | `blib2to3/pgen2/driver.py:80` |
|  1.3% |    1 MiB |           5 | `__init__`                  | `blib2to3/pytree.py:248`      |
|  1.3% |    1 MiB |           2 | `visit_power`               | `black/linegen.py:341`        |
|  1.3% |    1 MiB |           2 | `visit_default`             | `black/linegen.py:134`        |
|  1.3% |    1 MiB |           1 | `sub_twice`                 | `black/strings.py:28`         |
|  1.3% |    1 MiB |           1 | `pop`                       | `blib2to3/pgen2/parse.py:398` |
|  1.3% |    1 MiB |           1 | `normalize_trailing_prefix` | `black/comments.py:127`       |
|  1.3% |    1 MiB |           1 | `line`                      | `black/linegen.py:109`        |
|  1.3% |    1 MiB |           1 | `is_arith_like`             | `black/nodes.py:548`          |
|  1.3% |    1 MiB |           1 | `__init__`                  | `blib2to3/pytree.py:400`      |
|  1.3% |    1 MiB |           1 | `push`                      | `blib2to3/pgen2/parse.py:386` |

##### Standard library

|     % |     Size | Allocations | Function                   | Location                                          |
| ----: | -------: | ----------: | -------------------------- | ------------------------------------------------- |
| 11.6% | 9.12 MiB |         142 | `parse`                    | `/usr/lib/python3.11/ast.py:33`                   |
|  1.3% | 1.01 MiB |           4 | `_parse`                   | `/usr/lib/python3.11/re/_parser.py:507`           |
|  1.3% |    1 MiB |           3 | `_create_fn`               | `/usr/lib/python3.11/dataclasses.py:413`          |
|  0.7% |  560 KiB |         606 | `_compile_bytecode`        | `<frozen importlib._bootstrap_external>:727`      |
|  0.3% |  222 KiB |           1 | `decode`                   | `<frozen codecs>:319`                             |
|  0.1% | 75.7 KiB |          79 | `__new__`                  | `<frozen abc>:105`                                |
| <0.1% | 24.1 KiB |          27 | `__new__`                  | `/usr/lib/python3.11/enum.py:488`                 |
| <0.1% | 22.6 KiB |          12 | `compile`                  | `/usr/lib/python3.11/re/_compiler.py:738`         |
| <0.1% | 19.8 KiB |          12 | `<module>`                 | `/usr/lib/python3.11/tomllib/_parser.py:1`        |
| <0.1% | 17.4 KiB |          21 | `__new__`                  | `/usr/lib/python3.11/typing.py:2891`              |
| <0.1% |   12 KiB |           3 | `inner`                    | `/usr/lib/python3.11/typing.py:338`               |
| <0.1% |    8 KiB |           4 | `_fill_cache`              | `<frozen importlib._bootstrap_external>:1655`     |
| <0.1% | 7.97 KiB |           1 | `_parse_sub`               | `/usr/lib/python3.11/re/_parser.py:447`           |
| <0.1% | 6.73 KiB |           8 | `__setattr__`              | `/usr/lib/python3.11/enum.py:831`                 |
| <0.1% | 5.63 KiB |           6 | `namedtuple`               | `/usr/lib/python3.11/collections/__init__.py:348` |
| <0.1% | 5.32 KiB |           2 | `_code`                    | `/usr/lib/python3.11/re/_compiler.py:571`         |
| <0.1% | 4.73 KiB |           6 | `<module>`                 | `/usr/lib/python3.11/pkgutil.py:1`                |
| <0.1% | 2.85 KiB |           1 | `wrap`                     | `/usr/lib/python3.11/dataclasses.py:1209`         |
| <0.1% | 2.85 KiB |           4 | `_process_class`           | `/usr/lib/python3.11/dataclasses.py:884`          |
| <0.1% | 2.56 KiB |           3 | `_signature_from_function` | `/usr/lib/python3.11/inspect.py:2331`             |

##### Third-party

|     % |     Size | Allocations | Function              | Location                                                                   |
| ----: | -------: | ----------: | --------------------- | -------------------------------------------------------------------------- |
|  1.3% | 1.01 MiB |          11 | `<module>`            | `/venv/lib/python3.11/site-packages/click/parser.py:1`                     |
|  0.1% | 44.3 KiB |          31 | `__init__`            | `/venv/lib/python3.11/site-packages/click/core.py:2883`                    |
|  0.1% |   42 KiB |           7 | `<module>`            | `/venv/lib/python3.11/site-packages/packaging/tags.py:1`                   |
| <0.1% |   25 KiB |          22 | `<module>`            | `/venv/lib/python3.11/site-packages/click/core.py:1`                       |
| <0.1% |   15 KiB |          18 | `<module>`            | `/venv/lib/python3.11/site-packages/mypy_extensions.py:1`                  |
| <0.1% | 13.4 KiB |          15 | `<module>`            | `/venv/lib/python3.11/site-packages/click/exceptions.py:1`                 |
| <0.1% | 9.61 KiB |           9 | `<module>`            | `/venv/lib/python3.11/site-packages/packaging/version.py:1`                |
| <0.1% | 7.08 KiB |           8 | `<module>`            | `/venv/lib/python3.11/site-packages/click/utils.py:1`                      |
| <0.1% | 6.48 KiB |           6 | `<module>`            | `/venv/lib/python3.11/site-packages/pathspec/util.py:1`                    |
| <0.1% | 6.24 KiB |           5 | `<module>`            | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:1`                |
| <0.1% |  5.8 KiB |           6 | `<module>`            | `/venv/lib/python3.11/site-packages/click/_compat.py:1`                    |
| <0.1% | 3.82 KiB |           1 | `Specifier`           | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:220`           |
| <0.1% | 3.79 KiB |           3 | `new_func`            | `/venv/lib/python3.11/site-packages/click/decorators.py:33`                |
| <0.1% | 3.72 KiB |           4 | `<module>`            | `/venv/lib/python3.11/site-packages/pathspec/pattern.py:1`                 |
| <0.1% | 3.56 KiB |           4 | `<module>`            | `/venv/lib/python3.11/site-packages/packaging/utils.py:1`                  |
| <0.1% | 3.37 KiB |           5 | `handle_parse_result` | `/venv/lib/python3.11/site-packages/click/core.py:2663`                    |
| <0.1% | 3.19 KiB |           1 | `<module>`            | `/venv/lib/python3.11/site-packages/click/__init__.py:1`                   |
| <0.1% | 3.19 KiB |           4 | `<module>`            | `/venv/lib/python3.11/site-packages/pathspec/pathspec.py:1`                |
| <0.1% | 2.81 KiB |           3 | `<module>`            | `/venv/lib/python3.11/site-packages/pathspec/patterns/gitignore/base.py:1` |
| <0.1% | 2.76 KiB |           2 | `<module>`            | `/venv/lib/python3.11/site-packages/click/types.py:1`                      |

#### Lines

Lines ranked by contribution to each function's self size.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Allocations | Location                |
| -----: | -------: | ----------: | ----------------------- |
| 100.0% | 15.2 MiB |      20,786 | `black/brackets.py:112` |
|  <0.1% | 1.49 KiB |           1 | `black/brackets.py:114` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Allocations | Location                 |
| ----: | ----: | ----------: | ------------------------ |
| 60.0% | 6 MiB |           6 | `blib2to3/pytree.py:176` |
| 40.0% | 4 MiB |           4 | `blib2to3/pytree.py:175` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Location                        |
| -----: | -------: | ----------: | ------------------------------- |
| 100.0% | 9.12 MiB |         142 | `/usr/lib/python3.11/ast.py:50` |

##### `assert_equivalent` (`black/__init__.py:1524`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 55.4% | 3.93 MiB |           2 | `black/__init__.py:1547` |
| 44.6% | 3.17 MiB |           2 | `black/__init__.py:1546` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 7 MiB |           7 | `blib2to3/pytree.py:84` |

##### `_stringify_ast` (`black/parsing.py:174`)

|     % |     Size | Allocations | Location               |
| ----: | -------: | ----------: | ---------------------- |
| 82.7% |    5 MiB |           5 | `black/parsing.py:197` |
| 16.5% |    1 MiB |           1 | `black/parsing.py:185` |
|  0.8% | 46.8 KiB |          56 | `black/parsing.py:240` |

##### `visit` (`black/nodes.py:163`)

|     % |     Size | Allocations | Location             |
| ----: | -------: | ----------: | -------------------- |
| 99.9% |    2 MiB |           3 | `black/nodes.py:185` |
|  0.1% | 2.68 KiB |           3 | `black/nodes.py:183` |

##### `transform_line` (`black/linegen.py:601`)

|     % |     Size | Allocations | Location               |
| ----: | -------: | ----------: | ---------------------- |
| 50.0% |    1 MiB |           2 | `black/linegen.py:714` |
| 49.9% |    1 MiB |           1 | `black/linegen.py:626` |
|  0.1% | 1.39 KiB |           1 | `black/linegen.py:635` |
| <0.1% |    518 B |           1 | `black/linegen.py:631` |

##### `run_transformer` (`black/linegen.py:1755`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 2 MiB |           3 | `black/linegen.py:1766` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 88.0% |    1 MiB |          10 | `blib2to3/pytree.py:379` |
|  6.0% | 70.3 KiB |          93 | `blib2to3/pytree.py:377` |
|  6.0% | 70.3 KiB |          93 | `blib2to3/pytree.py:376` |

##### `__next__` (`blib2to3/pgen2/driver.py:80`)

|     % |     Size | Allocations | Location                      |
| ----: | -------: | ----------: | ----------------------------- |
| 99.2% |    1 MiB |           1 | `blib2to3/pgen2/driver.py:93` |
|  0.8% | 8.27 KiB |           1 | `blib2to3/pgen2/driver.py:92` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/parser.py:1`)

|     % |     Size | Allocations | Location                                                 |
| ----: | -------: | ----------: | -------------------------------------------------------- |
| 99.4% |    1 MiB |           3 | `/venv/lib/python3.11/site-packages/click/parser.py:185` |
|  0.2% | 2.29 KiB |           3 | `/venv/lib/python3.11/site-packages/click/parser.py:224` |
|  0.2% | 1.69 KiB |           2 | `/venv/lib/python3.11/site-packages/click/parser.py:216` |
|  0.2% | 1.69 KiB |           2 | `/venv/lib/python3.11/site-packages/click/parser.py:127` |
|  0.1% |    768 B |           1 | `/venv/lib/python3.11/site-packages/click/parser.py:51`  |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|     % |     Size | Allocations | Location                                |
| ----: | -------: | ----------: | --------------------------------------- |
| 99.5% |    1 MiB |           1 | `/usr/lib/python3.11/re/_parser.py:514` |
|  0.2% | 2.43 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:539` |
|  0.2% |  1.9 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:568` |
|  0.1% | 1.28 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:838` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           5 | `blib2to3/pytree.py:266` |

##### `visit_power` (`black/linegen.py:341`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 99.9% | 1 MiB |           1 | `black/linegen.py:342` |
|  0.1% | 904 B |           1 | `black/linegen.py:361` |

##### `visit_default` (`black/linegen.py:134`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 99.9% | 1 MiB |           1 | `black/linegen.py:158` |
|  0.1% | 702 B |           1 | `black/linegen.py:144` |

##### `_create_fn` (`/usr/lib/python3.11/dataclasses.py:413`)

|      % |  Size | Allocations | Location                                 |
| -----: | ----: | ----------: | ---------------------------------------- |
| 100.0% | 1 MiB |           3 | `/usr/lib/python3.11/dataclasses.py:433` |

##### `sub_twice` (`black/strings.py:28`)

|      % |  Size | Allocations | Location              |
| -----: | ----: | ----------: | --------------------- |
| 100.0% | 1 MiB |           1 | `black/strings.py:34` |

##### `pop` (`blib2to3/pgen2/parse.py:398`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:408` |

##### `normalize_trailing_prefix` (`black/comments.py:127`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 1 MiB |           1 | `black/comments.py:136` |

##### `line` (`black/linegen.py:109`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 1 MiB |           1 | `black/linegen.py:131` |

##### `is_arith_like` (`black/nodes.py:548`)

|      % |  Size | Allocations | Location             |
| -----: | ----: | ----------: | -------------------- |
| 100.0% | 1 MiB |           1 | `black/nodes.py:550` |

##### `__init__` (`blib2to3/pytree.py:400`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:425` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:394` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |    Size | Allocations | Location                                     |
| -----: | ------: | ----------: | -------------------------------------------- |
| 100.0% | 560 KiB |         606 | `<frozen importlib._bootstrap_external>:729` |

##### `decode` (`<frozen codecs>:319`)

|      % |    Size | Allocations | Location              |
| -----: | ------: | ----------: | --------------------- |
| 100.0% | 222 KiB |           1 | `<frozen codecs>:322` |

##### `__new__` (`<frozen abc>:105`)

|      % |     Size | Allocations | Location           |
| -----: | -------: | ----------: | ------------------ |
| 100.0% | 75.7 KiB |          79 | `<frozen abc>:106` |

##### `__init__` (`/venv/lib/python3.11/site-packages/click/core.py:2883`)

|     % |   Size | Allocations | Location                                                |
| ----: | -----: | ----------: | ------------------------------------------------------- |
| 97.1% | 43 KiB |          29 | `/venv/lib/python3.11/site-packages/click/core.py:3023` |
|  1.6% |  704 B |           1 | `/venv/lib/python3.11/site-packages/click/core.py:2905` |
|  1.4% |  614 B |           1 | `/venv/lib/python3.11/site-packages/click/core.py:2907` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/tags.py:1`)

|     % |     Size | Allocations | Location                                                   |
| ----: | -------: | ----------: | ---------------------------------------------------------- |
| 89.8% | 37.7 KiB |           3 | `/venv/lib/python3.11/site-packages/packaging/tags.py:118` |
|  3.5% | 1.48 KiB |           1 | `/venv/lib/python3.11/site-packages/packaging/tags.py:322` |
|  2.2% |    960 B |           1 | `/venv/lib/python3.11/site-packages/packaging/tags.py:110` |
|  2.2% |    960 B |           1 | `/venv/lib/python3.11/site-packages/packaging/tags.py:101` |
|  2.2% |    960 B |           1 | `/venv/lib/python3.11/site-packages/packaging/tags.py:93`  |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/core.py:1`)

|     % |     Size | Allocations | Location                                                |
| ----: | -------: | ----------: | ------------------------------------------------------- |
| 30.4% |  7.6 KiB |           4 | `/venv/lib/python3.11/site-packages/click/core.py:204`  |
| 19.2% | 4.79 KiB |           4 | `/venv/lib/python3.11/site-packages/click/core.py:956`  |
| 15.7% | 3.92 KiB |           4 | `/venv/lib/python3.11/site-packages/click/core.py:1587` |
|  9.5% | 2.37 KiB |           3 | `/venv/lib/python3.11/site-packages/click/core.py:2057` |
|  6.8% | 1.69 KiB |           2 | `/venv/lib/python3.11/site-packages/click/core.py:1580` |

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
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:26` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:22` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:38` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:27` |

##### `__new__` (`/usr/lib/python3.11/typing.py:2891`)

|      % |     Size | Allocations | Location                             |
| -----: | -------: | ----------: | ------------------------------------ |
| 100.0% | 17.4 KiB |          21 | `/usr/lib/python3.11/typing.py:2909` |

##### `<module>` (`/venv/lib/python3.11/site-packages/mypy_extensions.py:1`)

|     % |     Size | Allocations | Location                                                    |
| ----: | -------: | ----------: | ----------------------------------------------------------- |
| 11.3% | 1.69 KiB |           2 | `/venv/lib/python3.11/site-packages/mypy_extensions.py:167` |
| 11.3% | 1.69 KiB |           2 | `/venv/lib/python3.11/site-packages/mypy_extensions.py:212` |
| 11.3% | 1.69 KiB |           2 | `/venv/lib/python3.11/site-packages/mypy_extensions.py:191` |
| 11.3% | 1.69 KiB |           2 | `/venv/lib/python3.11/site-packages/mypy_extensions.py:154` |
| 11.3% | 1.69 KiB |           2 | `/venv/lib/python3.11/site-packages/mypy_extensions.py:205` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/exceptions.py:1`)

|     % |     Size | Allocations | Location                                                     |
| ----: | -------: | ----------: | ------------------------------------------------------------ |
| 18.4% | 2.45 KiB |           3 | `/venv/lib/python3.11/site-packages/click/exceptions.py:114` |
| 11.5% | 1.53 KiB |           2 | `/venv/lib/python3.11/site-packages/click/exceptions.py:366` |
|  7.0% |    960 B |           1 | `/venv/lib/python3.11/site-packages/click/exceptions.py:68`  |
|  7.0% |    960 B |           1 | `/venv/lib/python3.11/site-packages/click/exceptions.py:35`  |
|  7.0% |    960 B |           1 | `/venv/lib/python3.11/site-packages/click/exceptions.py:362` |

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|      % |   Size | Allocations | Location                            |
| -----: | -----: | ----------: | ----------------------------------- |
| 100.0% | 12 KiB |           3 | `/usr/lib/python3.11/typing.py:341` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/version.py:1`)

|     % |     Size | Allocations | Location                                                      |
| ----: | -------: | ----------: | ------------------------------------------------------------- |
| 38.2% | 3.68 KiB |           3 | `/venv/lib/python3.11/site-packages/packaging/version.py:340` |
| 15.5% | 1.49 KiB |           2 | `/venv/lib/python3.11/site-packages/packaging/version.py:124` |
| 15.4% | 1.48 KiB |           1 | `/venv/lib/python3.11/site-packages/packaging/version.py:285` |
| 11.3% | 1.09 KiB |           1 | `/venv/lib/python3.11/site-packages/packaging/version.py:228` |
|  9.8% |    960 B |           1 | `/venv/lib/python3.11/site-packages/packaging/version.py:134` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1655`)

|      % |  Size | Allocations | Location                                      |
| -----: | ----: | ----------: | --------------------------------------------- |
| 100.0% | 8 KiB |           4 | `<frozen importlib._bootstrap_external>:1667` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|      % |     Size | Allocations | Location                                |
| -----: | -------: | ----------: | --------------------------------------- |
| 100.0% | 7.97 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:455` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/utils.py:1`)

|     % |     Size | Allocations | Location                                                |
| ----: | -------: | ----------: | ------------------------------------------------------- |
| 44.8% | 3.17 KiB |           3 | `/venv/lib/python3.11/site-packages/click/utils.py:522` |
| 31.4% | 2.22 KiB |           3 | `/venv/lib/python3.11/site-packages/click/utils.py:207` |
| 23.8% | 1.69 KiB |           2 | `/venv/lib/python3.11/site-packages/click/utils.py:113` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

|      % |     Size | Allocations | Location                          |
| -----: | -------: | ----------: | --------------------------------- |
| 100.0% | 6.73 KiB |           8 | `/usr/lib/python3.11/enum.py:842` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/util.py:1`)

|     % |     Size | Allocations | Location                                                  |
| ----: | -------: | ----------: | --------------------------------------------------------- |
| 22.9% | 1.48 KiB |           1 | `/venv/lib/python3.11/site-packages/pathspec/util.py:254` |
| 16.9% | 1.09 KiB |           1 | `/venv/lib/python3.11/site-packages/pathspec/util.py:765` |
| 16.3% | 1.05 KiB |           1 | `/venv/lib/python3.11/site-packages/pathspec/util.py:710` |
| 15.1% |   1000 B |           1 | `/venv/lib/python3.11/site-packages/pathspec/util.py:741` |
| 14.5% |    960 B |           1 | `/venv/lib/python3.11/site-packages/pathspec/util.py:651` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/_ranges.py:1`)

|     % |     Size | Allocations | Location                                                      |
| ----: | -------: | ----------: | ------------------------------------------------------------- |
| 23.8% | 1.48 KiB |           1 | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:681` |
| 23.0% | 1.43 KiB |           1 | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:44`  |
| 19.4% | 1.21 KiB |           1 | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:63`  |
| 16.9% | 1.05 KiB |           1 | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:179` |
| 16.9% | 1.05 KiB |           1 | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:236` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/_compat.py:1`)

|     % |     Size | Allocations | Location                                                  |
| ----: | -------: | ----------: | --------------------------------------------------------- |
| 29.1% | 1.69 KiB |           2 | `/venv/lib/python3.11/site-packages/click/_compat.py:82`  |
| 29.1% | 1.69 KiB |           2 | `/venv/lib/python3.11/site-packages/click/_compat.py:452` |
| 25.6% | 1.48 KiB |           1 | `/venv/lib/python3.11/site-packages/click/_compat.py:344` |
| 16.2% |    960 B |           1 | `/venv/lib/python3.11/site-packages/click/_compat.py:56`  |

##### `namedtuple` (`/usr/lib/python3.11/collections/__init__.py:348`)

|      % |     Size | Allocations | Location                                          |
| -----: | -------: | ----------: | ------------------------------------------------- |
| 100.0% | 5.63 KiB |           6 | `/usr/lib/python3.11/collections/__init__.py:501` |

##### `_code` (`/usr/lib/python3.11/re/_compiler.py:571`)

|     % |     Size | Allocations | Location                                  |
| ----: | -------: | ----------: | ----------------------------------------- |
| 81.6% | 4.34 KiB |           1 | `/usr/lib/python3.11/re/_compiler.py:580` |
| 18.4% |   1002 B |           1 | `/usr/lib/python3.11/re/_compiler.py:577` |

##### `<module>` (`/usr/lib/python3.11/pkgutil.py:1`)

|     % |     Size | Allocations | Location                             |
| ----: | -------: | ----------: | ------------------------------------ |
| 35.7% | 1.69 KiB |           2 | `/usr/lib/python3.11/pkgutil.py:269` |
| 35.7% | 1.69 KiB |           2 | `/usr/lib/python3.11/pkgutil.py:194` |
| 15.9% |    768 B |           1 | `/usr/lib/python3.11/pkgutil.py:137` |
| 12.8% |    620 B |           1 | `/usr/lib/python3.11/pkgutil.py:184` |

##### `Specifier` (`/venv/lib/python3.11/site-packages/packaging/specifiers.py:220`)

|      % |     Size | Allocations | Location                                                         |
| -----: | -------: | ----------: | ---------------------------------------------------------------- |
| 100.0% | 3.82 KiB |           1 | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:340` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |     Size | Allocations | Location                                                    |
| -----: | -------: | ----------: | ----------------------------------------------------------- |
| 100.0% | 3.79 KiB |           3 | `/venv/lib/python3.11/site-packages/click/decorators.py:34` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/pattern.py:1`)

|     % |     Size | Allocations | Location                                                     |
| ----: | -------: | ----------: | ------------------------------------------------------------ |
| 46.4% | 1.73 KiB |           2 | `/venv/lib/python3.11/site-packages/pathspec/pattern.py:29`  |
| 27.3% | 1.02 KiB |           1 | `/venv/lib/python3.11/site-packages/pathspec/pattern.py:90`  |
| 26.3% |   1000 B |           1 | `/venv/lib/python3.11/site-packages/pathspec/pattern.py:245` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/utils.py:1`)

|     % |  Size | Allocations | Location                                                   |
| ----: | ----: | ----------: | ---------------------------------------------------------- |
| 26.3% | 960 B |           1 | `/venv/lib/python3.11/site-packages/packaging/utils.py:62` |
| 26.3% | 960 B |           1 | `/venv/lib/python3.11/site-packages/packaging/utils.py:54` |
| 26.3% | 960 B |           1 | `/venv/lib/python3.11/site-packages/packaging/utils.py:46` |
| 21.1% | 768 B |           1 | `/venv/lib/python3.11/site-packages/packaging/utils.py:27` |

##### `handle_parse_result` (`/venv/lib/python3.11/site-packages/click/core.py:2663`)

|     % |    Size | Allocations | Location                                                |
| ----: | ------: | ----------: | ------------------------------------------------------- |
| 38.5% | 1.3 KiB |           2 | `/venv/lib/python3.11/site-packages/click/core.py:2686` |
| 22.3% |   768 B |           1 | `/venv/lib/python3.11/site-packages/click/core.py:2740` |
| 22.3% |   768 B |           1 | `/venv/lib/python3.11/site-packages/click/core.py:2739` |
| 17.0% |   586 B |           1 | `/venv/lib/python3.11/site-packages/click/core.py:2711` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/__init__.py:1`)

|      % |     Size | Allocations | Location                                                  |
| -----: | -------: | ----------: | --------------------------------------------------------- |
| 100.0% | 3.19 KiB |           1 | `/venv/lib/python3.11/site-packages/click/__init__.py:74` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/pathspec.py:1`)

|     % |     Size | Allocations | Location                                                     |
| ----: | -------: | ----------: | ------------------------------------------------------------ |
| 76.5% | 2.44 KiB |           3 | `/venv/lib/python3.11/site-packages/pathspec/pathspec.py:55` |
| 23.5% |    768 B |           1 | `/venv/lib/python3.11/site-packages/pathspec/pathspec.py:14` |

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

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/patterns/gitignore/base.py:1`)

|     % |  Size | Allocations | Location                                                                     |
| ----: | ----: | ----------: | ---------------------------------------------------------------------------- |
| 33.3% | 960 B |           1 | `/venv/lib/python3.11/site-packages/pathspec/patterns/gitignore/base.py:22`  |
| 33.3% | 960 B |           1 | `/venv/lib/python3.11/site-packages/pathspec/patterns/gitignore/base.py:205` |
| 33.3% | 960 B |           1 | `/venv/lib/python3.11/site-packages/pathspec/patterns/gitignore/base.py:197` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/types.py:1`)

|     % |     Size | Allocations | Location                                                |
| ----: | -------: | ----------: | ------------------------------------------------------- |
| 53.7% | 1.48 KiB |           1 | `/venv/lib/python3.11/site-packages/click/types.py:464` |
| 46.3% | 1.28 KiB |           1 | `/venv/lib/python3.11/site-packages/click/types.py:37`  |

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
| 100.0% | 15.2 MiB |      20,787 | `append` | `black/lines.py:63` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Allocations | Caller    | Location                 |
| ----: | ----: | ----------: | --------- | ------------------------ |
| 80.0% | 8 MiB |           8 | `changed` | `blib2to3/pytree.py:171` |
| 20.0% | 2 MiB |           2 | `prefix`  | `blib2to3/pytree.py:480` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Caller                  | Location               |
| -----: | -------: | ----------: | ----------------------- | ---------------------- |
| 100.0% | 9.12 MiB |         142 | `_parse_single_version` | `black/parsing.py:117` |

##### `assert_equivalent` (`black/__init__.py:1524`)

|      % |    Size | Allocations | Caller                            | Location                 |
| -----: | ------: | ----------: | --------------------------------- | ------------------------ |
| 100.0% | 7.1 MiB |           4 | `check_stability_and_equivalence` | `black/__init__.py:1037` |

##### `__new__` (`blib2to3/pytree.py:81`)

|     % |  Size | Allocations | Caller                | Location                 |
| ----: | ----: | ----------: | --------------------- | ------------------------ |
| 85.7% | 6 MiB |           6 | `convert`             | `blib2to3/pytree.py:486` |
| 14.3% | 1 MiB |           1 | `wrap_in_parentheses` | `black/nodes.py:935`     |

##### `_stringify_ast` (`black/parsing.py:174`)

|      % |     Size | Allocations | Caller                           | Location               |
| -----: | -------: | ----------: | -------------------------------- | ---------------------- |
| 100.0% | 6.05 MiB |          62 | `_stringify_ast_with_new_parent` | `black/parsing.py:166` |

##### `visit` (`black/nodes.py:163`)

|      % |  Size | Allocations | Caller             | Location                 |
| -----: | ----: | ----------: | ------------------ | ------------------------ |
| 100.0% | 2 MiB |           5 | `visit_default`    | `black/nodes.py:187`     |
|  <0.1% | 690 B |           1 | `_format_str_once` | `black/__init__.py:1236` |

##### `transform_line` (`black/linegen.py:601`)

|      % |  Size | Allocations | Caller             | Location                 |
| -----: | ----: | ----------: | ------------------ | ------------------------ |
| 100.0% | 2 MiB |           5 | `_format_str_once` | `black/__init__.py:1236` |

##### `run_transformer` (`black/linegen.py:1755`)

|      % |  Size | Allocations | Caller           | Location               |
| -----: | ----: | ----------: | ---------------- | ---------------------- |
| 100.0% | 2 MiB |           3 | `transform_line` | `black/linegen.py:601` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|      % |     Size | Allocations | Caller         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 1.14 MiB |         196 | `prev_sibling` | `blib2to3/pytree.py:207` |

##### `__next__` (`blib2to3/pgen2/driver.py:80`)

|      % |     Size | Allocations | Caller         | Location                       |
| -----: | -------: | ----------: | -------------- | ------------------------------ |
| 100.0% | 1.01 MiB |           2 | `parse_tokens` | `blib2to3/pgen2/driver.py:114` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/parser.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 1.01 MiB |          11 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|      % |     Size | Allocations | Caller       | Location                                |
| -----: | -------: | ----------: | ------------ | --------------------------------------- |
| 100.0% | 1.01 MiB |           4 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py:447` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 1 MiB |           5 | `convert` | `blib2to3/pytree.py:486` |

##### `visit_power` (`black/linegen.py:341`)

|      % |  Size | Allocations | Caller  | Location             |
| -----: | ----: | ----------: | ------- | -------------------- |
| 100.0% | 1 MiB |           2 | `visit` | `black/nodes.py:163` |

##### `visit_default` (`black/linegen.py:134`)

|     % |  Size | Allocations | Caller         | Location               |
| ----: | ----: | ----------: | -------------- | ---------------------- |
| 99.9% | 1 MiB |           1 | `visit`        | `black/nodes.py:163`   |
|  0.1% | 702 B |           1 | `visit_STRING` | `black/linegen.py:413` |

##### `_create_fn` (`/usr/lib/python3.11/dataclasses.py:413`)

|     % |  Size | Allocations | Caller     | Location                                 |
| ----: | ----: | ----------: | ---------- | ---------------------------------------- |
| 99.9% | 1 MiB |           1 | `_init_fn` | `/usr/lib/python3.11/dataclasses.py:528` |
| <0.1% | 341 B |           1 | `_cmp_fn`  | `/usr/lib/python3.11/dataclasses.py:624` |
| <0.1% | 336 B |           1 | `_repr_fn` | `/usr/lib/python3.11/dataclasses.py:588` |

##### `sub_twice` (`black/strings.py:28`)

|      % |  Size | Allocations | Caller                    | Location               |
| -----: | ----: | ----------: | ------------------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `normalize_string_quotes` | `black/strings.py:169` |

##### `pop` (`blib2to3/pgen2/parse.py:398`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `_addtoken` | `blib2to3/pgen2/parse.py:290` |

##### `normalize_trailing_prefix` (`black/comments.py:127`)

|      % |  Size | Allocations | Caller              | Location               |
| -----: | ----: | ----------: | ------------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `generate_comments` | `black/comments.py:52` |

##### `line` (`black/linegen.py:109`)

|      % |  Size | Allocations | Caller         | Location               |
| -----: | ----: | ----------: | -------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `visit_INDENT` | `black/linegen.py:179` |

##### `is_arith_like` (`black/nodes.py:548`)

|      % |  Size | Allocations | Caller              | Location               |
| -----: | ----: | ----------: | ------------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `__init__` (`blib2to3/pytree.py:400`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 1 MiB |           1 | `convert` | `blib2to3/pytree.py:486` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `_addtoken` | `blib2to3/pgen2/parse.py:290` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |    Size | Allocations | Caller     | Location                                      |
| -----: | ------: | ----------: | ---------- | --------------------------------------------- |
| 100.0% | 560 KiB |         606 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `decode` (`<frozen codecs>:319`)

|      % |    Size | Allocations | Caller         | Location                 |
| -----: | ------: | ----------: | -------------- | ------------------------ |
| 100.0% | 222 KiB |           1 | `decode_bytes` | `black/__init__.py:1290` |

##### `__new__` (`<frozen abc>:105`)

|     % |     Size | Allocations | Caller     | Location                                                       |
| ----: | -------: | ----------: | ---------- | -------------------------------------------------------------- |
| 50.5% | 38.2 KiB |          45 | `<module>` | `/venv/lib/python3.11/site-packages/click/types.py:1`          |
| 23.1% | 17.5 KiB |          18 | `<module>` | `black/trans.py:1`                                             |
| 18.3% | 13.9 KiB |           9 | `<module>` | `/venv/lib/python3.11/site-packages/click/core.py:1`           |
|  8.0% | 6.07 KiB |           7 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:1` |

##### `__init__` (`/venv/lib/python3.11/site-packages/click/core.py:2883`)

|      % |     Size | Allocations | Caller      | Location                                                     |
| -----: | -------: | ----------: | ----------- | ------------------------------------------------------------ |
| 100.0% | 44.3 KiB |          31 | `decorator` | `/venv/lib/python3.11/site-packages/click/decorators.py:373` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/tags.py:1`)

|      % |   Size | Allocations | Caller                      | Location                            |
| -----: | -----: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 42 KiB |           7 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/core.py:1`)

|      % |   Size | Allocations | Caller                      | Location                            |
| -----: | -----: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 25 KiB |          22 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

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

##### `<module>` (`/venv/lib/python3.11/site-packages/mypy_extensions.py:1`)

|      % |   Size | Allocations | Caller                      | Location                            |
| -----: | -----: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 15 KiB |          18 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/exceptions.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 13.4 KiB |          15 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|     % |     Size | Allocations | Caller        | Location                                              |
| ----: | -------: | ----------: | ------------- | ----------------------------------------------------- |
| 75.3% | 9.02 KiB |           1 | `Line`        | `black/lines.py:49`                                   |
| 17.9% | 2.15 KiB |           1 | `__getitem__` | `/usr/lib/python3.11/typing.py:467`                   |
|  6.7% |    826 B |           1 | `<module>`    | `/venv/lib/python3.11/site-packages/click/types.py:1` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/version.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 9.61 KiB |           9 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1655`)

|      % |  Size | Allocations | Caller      | Location                                      |
| -----: | ----: | ----------: | ----------- | --------------------------------------------- |
| 100.0% | 8 KiB |           4 | `find_spec` | `<frozen importlib._bootstrap_external>:1604` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|      % |     Size | Allocations | Caller  | Location                                |
| -----: | -------: | ----------: | ------- | --------------------------------------- |
| 100.0% | 7.97 KiB |           1 | `parse` | `/usr/lib/python3.11/re/_parser.py:970` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/utils.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 7.08 KiB |           8 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

|     % |     Size | Allocations | Caller         | Location                          |
| ----: | -------: | ----------: | -------------- | --------------------------------- |
| 66.6% | 4.48 KiB |           5 | `__set_name__` | `/usr/lib/python3.11/enum.py:237` |
| 33.4% | 2.25 KiB |           3 | `__new__`      | `/usr/lib/python3.11/enum.py:488` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/util.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 6.48 KiB |           6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/_ranges.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 6.24 KiB |           5 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/_compat.py:1`)

|      % |    Size | Allocations | Caller                      | Location                            |
| -----: | ------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 5.8 KiB |           6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `namedtuple` (`/usr/lib/python3.11/collections/__init__.py:348`)

|     % |     Size | Allocations | Caller          | Location                             |
| ----: | -------: | ----------: | --------------- | ------------------------------------ |
| 83.3% | 4.69 KiB |           5 | `_make_nmtuple` | `/usr/lib/python3.11/typing.py:2795` |
| 16.7% |    960 B |           1 | `<module>`      | `/usr/lib/python3.11/pkgutil.py:1`   |

##### `_code` (`/usr/lib/python3.11/re/_compiler.py:571`)

|      % |     Size | Allocations | Caller    | Location                                  |
| -----: | -------: | ----------: | --------- | ----------------------------------------- |
| 100.0% | 5.32 KiB |           2 | `compile` | `/usr/lib/python3.11/re/_compiler.py:738` |

##### `<module>` (`/usr/lib/python3.11/pkgutil.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 4.73 KiB |           6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `Specifier` (`/venv/lib/python3.11/site-packages/packaging/specifiers.py:220`)

|      % |     Size | Allocations | Caller     | Location                                                       |
| -----: | -------: | ----------: | ---------- | -------------------------------------------------------------- |
| 100.0% | 3.82 KiB |           1 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:1` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |     Size | Allocations | Caller   | Location                                               |
| -----: | -------: | ----------: | -------- | ------------------------------------------------------ |
| 100.0% | 3.79 KiB |           3 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:853` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/pattern.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.72 KiB |           4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/utils.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.56 KiB |           4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `handle_parse_result` (`/venv/lib/python3.11/site-packages/click/core.py:2663`)

|      % |     Size | Allocations | Caller       | Location                                                |
| -----: | -------: | ----------: | ------------ | ------------------------------------------------------- |
| 100.0% | 3.37 KiB |           5 | `parse_args` | `/venv/lib/python3.11/site-packages/click/core.py:1303` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/__init__.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.19 KiB |           1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/pathspec.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.19 KiB |           4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `wrap` (`/usr/lib/python3.11/dataclasses.py:1209`)

|      % |     Size | Allocations | Caller     | Location                                                   |
| -----: | -------: | ----------: | ---------- | ---------------------------------------------------------- |
| 100.0% | 2.85 KiB |           1 | `<module>` | `/venv/lib/python3.11/site-packages/pathspec/pattern.py:1` |

##### `_process_class` (`/usr/lib/python3.11/dataclasses.py:884`)

|      % |     Size | Allocations | Caller | Location                                  |
| -----: | -------: | ----------: | ------ | ----------------------------------------- |
| 100.0% | 2.85 KiB |           4 | `wrap` | `/usr/lib/python3.11/dataclasses.py:1209` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/patterns/gitignore/base.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 2.81 KiB |           3 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/types.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 2.76 KiB |           2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `_signature_from_function` (`/usr/lib/python3.11/inspect.py:2331`)

|      % |     Size | Allocations | Caller                     | Location                              |
| -----: | -------: | ----------: | -------------------------- | ------------------------------------- |
| 100.0% | 2.56 KiB |           3 | `_signature_from_callable` | `/usr/lib/python3.11/inspect.py:2426` |

### Total size

Functions ranked by total bytes held at peak memory in the function and all its callees.

|      % |     Size | Allocations | Function               | Location                                                       |
| -----: | -------: | ----------: | ---------------------- | -------------------------------------------------------------- |
| 100.0% | 78.6 MiB |      22,684 | `_run_tracker`         | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40` |
| 100.0% | 78.6 MiB |      22,683 | `run_module`           | `<frozen runpy>:201`                                           |
|  94.5% | 74.3 MiB |      21,394 | `__call__`             | `/venv/lib/python3.11/site-packages/click/core.py:1567`        |
|  94.5% | 74.3 MiB |      21,394 | `patched_main`         | `black/__init__.py:1594`                                       |
|  94.5% | 74.3 MiB |      21,394 | `<module>`             | `black/__main__.py:1`                                          |
|  94.5% | 74.3 MiB |      21,394 | `_run_code`            | `<frozen runpy>:65`                                            |
|  94.5% | 74.3 MiB |      21,394 | `_run_module_code`     | `<frozen runpy>:91`                                            |
|  94.5% | 74.3 MiB |      21,393 | `main`                 | `/venv/lib/python3.11/site-packages/click/core.py:1422`        |
|  94.5% | 74.3 MiB |      21,374 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:1339`        |
|  94.5% | 74.3 MiB |      21,371 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:853`         |
|  94.5% | 74.3 MiB |      21,369 | `new_func`             | `/venv/lib/python3.11/site-packages/click/decorators.py:33`    |
|  94.5% | 74.2 MiB |      21,366 | `main`                 | `black/__init__.py:244`                                        |
|  94.5% | 74.2 MiB |      21,362 | `reformat_one`         | `black/__init__.py:860`                                        |
|  94.5% | 74.2 MiB |      21,359 | `format_file_in_place` | `black/__init__.py:917`                                        |
|  94.2% |   74 MiB |      21,356 | `format_file_contents` | `black/__init__.py:1054`                                       |
|  65.9% | 51.8 MiB |      21,147 | `format_str`           | `black/__init__.py:1189`                                       |
|  65.9% | 51.8 MiB |      21,146 | `_format_str_once`     | `black/__init__.py:1236`                                       |
|  45.1% | 35.4 MiB |      21,086 | `visit`                | `black/nodes.py:163`                                           |
|  45.1% | 35.4 MiB |      21,084 | `visit_default`        | `black/linegen.py:134`                                         |
|  45.1% | 35.4 MiB |      21,084 | `visit_default`        | `black/nodes.py:187`                                           |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                          | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 94.5% | 74.3 MiB |      21,394 | `patched_main`                    | `black/__init__.py:1594` |
| 94.5% | 74.3 MiB |      21,394 | `<module>`                        | `black/__main__.py:1`    |
| 94.5% | 74.2 MiB |      21,366 | `main`                            | `black/__init__.py:244`  |
| 94.5% | 74.2 MiB |      21,362 | `reformat_one`                    | `black/__init__.py:860`  |
| 94.5% | 74.2 MiB |      21,359 | `format_file_in_place`            | `black/__init__.py:917`  |
| 94.2% |   74 MiB |      21,356 | `format_file_contents`            | `black/__init__.py:1054` |
| 65.9% | 51.8 MiB |      21,147 | `format_str`                      | `black/__init__.py:1189` |
| 65.9% | 51.8 MiB |      21,146 | `_format_str_once`                | `black/__init__.py:1236` |
| 45.1% | 35.4 MiB |      21,086 | `visit`                           | `black/nodes.py:163`     |
| 45.1% | 35.4 MiB |      21,084 | `visit_default`                   | `black/linegen.py:134`   |
| 45.1% | 35.4 MiB |      21,084 | `visit_default`                   | `black/nodes.py:187`     |
| 44.8% | 35.2 MiB |      20,713 | `visit_stmt`                      | `black/linegen.py:199`   |
| 41.7% | 32.7 MiB |      20,144 | `visit_suite`                     | `black/linegen.py:288`   |
| 40.5% | 31.8 MiB |      20,269 | `visit_funcdef`                   | `black/linegen.py:254`   |
| 34.1% | 26.8 MiB |      13,405 | `visit_simple_stmt`               | `black/linegen.py:295`   |
| 28.3% | 22.3 MiB |         209 | `check_stability_and_equivalence` | `black/__init__.py:1037` |
| 28.3% | 22.3 MiB |         208 | `assert_equivalent`               | `black/__init__.py:1524` |
| 21.5% | 16.9 MiB |      10,808 | `visit_power`                     | `black/linegen.py:341`   |
| 20.7% | 16.3 MiB |      20,881 | `append`                          | `black/lines.py:63`      |
| 19.4% | 15.2 MiB |      20,787 | `mark`                            | `black/brackets.py:70`   |

##### Standard library

|      % |     Size | Allocations | Function                    | Location                                     |
| -----: | -------: | ----------: | --------------------------- | -------------------------------------------- |
| 100.0% | 78.6 MiB |      22,683 | `run_module`                | `<frozen runpy>:201`                         |
|  94.5% | 74.3 MiB |      21,394 | `_run_code`                 | `<frozen runpy>:65`                          |
|  94.5% | 74.3 MiB |      21,394 | `_run_module_code`          | `<frozen runpy>:91`                          |
|  11.6% | 9.12 MiB |         142 | `parse`                     | `/usr/lib/python3.11/ast.py:33`              |
|   5.5% |  4.3 MiB |       1,288 | `_get_module_details`       | `<frozen runpy>:105`                         |
|   5.5% |  4.3 MiB |       1,281 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`         |
|   5.5% | 4.29 MiB |       1,279 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`         |
|   5.5% | 4.29 MiB |       1,278 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`          |
|   5.5% | 4.29 MiB |       1,276 | `exec_module`               | `<frozen importlib._bootstrap_external>:934` |
|   5.4% | 4.26 MiB |       1,246 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`          |
|   1.7% |  1.3 MiB |         318 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`         |
|   1.3% | 1.05 MiB |          26 | `compile`                   | `/usr/lib/python3.11/re/__init__.py:225`     |
|   1.3% | 1.05 MiB |          25 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py:272`     |
|   1.3% | 1.05 MiB |          24 | `compile`                   | `/usr/lib/python3.11/re/_compiler.py:738`    |
|   1.3% | 1.01 MiB |           6 | `parse`                     | `/usr/lib/python3.11/re/_parser.py:970`      |
|   1.3% | 1.01 MiB |          15 | `wrap`                      | `/usr/lib/python3.11/dataclasses.py:1209`    |
|   1.3% | 1.01 MiB |           5 | `_parse_sub`                | `/usr/lib/python3.11/re/_parser.py:447`      |
|   1.3% | 1.01 MiB |          14 | `_process_class`            | `/usr/lib/python3.11/dataclasses.py:884`     |
|   1.3% | 1.01 MiB |          11 | `dataclass`                 | `/usr/lib/python3.11/dataclasses.py:1192`    |
|   1.3% | 1.01 MiB |           4 | `_parse`                    | `/usr/lib/python3.11/re/_parser.py:507`      |

##### Third-party

|      % |     Size | Allocations | Function       | Location                                                                         |
| -----: | -------: | ----------: | -------------- | -------------------------------------------------------------------------------- |
| 100.0% | 78.6 MiB |      22,684 | `_run_tracker` | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40`                   |
|  94.5% | 74.3 MiB |      21,394 | `__call__`     | `/venv/lib/python3.11/site-packages/click/core.py:1567`                          |
|  94.5% | 74.3 MiB |      21,393 | `main`         | `/venv/lib/python3.11/site-packages/click/core.py:1422`                          |
|  94.5% | 74.3 MiB |      21,374 | `invoke`       | `/venv/lib/python3.11/site-packages/click/core.py:1339`                          |
|  94.5% | 74.3 MiB |      21,371 | `invoke`       | `/venv/lib/python3.11/site-packages/click/core.py:853`                           |
|  94.5% | 74.3 MiB |      21,369 | `new_func`     | `/venv/lib/python3.11/site-packages/click/decorators.py:33`                      |
|   1.7% | 1.31 MiB |         304 | `<module>`     | `/venv/lib/python3.11/site-packages/click/__init__.py:1`                         |
|   1.6% | 1.23 MiB |         233 | `<module>`     | `/venv/lib/python3.11/site-packages/click/core.py:1`                             |
|   1.3% | 1.02 MiB |          24 | `<module>`     | `/venv/lib/python3.11/site-packages/click/formatting.py:1`                       |
|   1.3% | 1.01 MiB |          11 | `<module>`     | `/venv/lib/python3.11/site-packages/click/parser.py:1`                           |
|   0.2% |  173 KiB |         141 | `<module>`     | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:1`                   |
|   0.2% |  125 KiB |         127 | `<module>`     | `/venv/lib/python3.11/site-packages/click/types.py:1`                            |
|   0.1% | 99.6 KiB |          72 | `<module>`     | `/venv/lib/python3.11/site-packages/packaging/utils.py:1`                        |
|   0.1% | 93.8 KiB |         119 | `<module>`     | `/venv/lib/python3.11/site-packages/pathspec/__init__.py:1`                      |
|   0.1% | 91.5 KiB |         115 | `<module>`     | `/venv/lib/python3.11/site-packages/pathspec/gitignore.py:1`                     |
|   0.1% | 74.5 KiB |          43 | `<module>`     | `/venv/lib/python3.11/site-packages/packaging/tags.py:1`                         |
|   0.1% | 65.5 KiB |          84 | `<module>`     | `/venv/lib/python3.11/site-packages/pathspec/_backends/agg.py:1`                 |
|   0.1% | 47.3 KiB |          33 | `decorator`    | `/venv/lib/python3.11/site-packages/click/decorators.py:373`                     |
|   0.1% | 46.9 KiB |          59 | `<module>`     | `/venv/lib/python3.11/site-packages/pathspec/_backends/hyperscan/gitignore.py:1` |
|   0.1% | 45.5 KiB |          32 | `__init__`     | `/venv/lib/python3.11/site-packages/click/core.py:2883`                          |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|      % |     Size | Allocations | Callee       | Location             |
| -----: | -------: | ----------: | ------------ | -------------------- |
| 100.0% | 78.6 MiB |      22,683 | `run_module` | `<frozen runpy>:201` |

##### `run_module` (`<frozen runpy>:201`)

|     % |     Size | Allocations | Callee                | Location             |
| ----: | -------: | ----------: | --------------------- | -------------------- |
| 94.5% | 74.3 MiB |      21,394 | `_run_module_code`    | `<frozen runpy>:91`  |
|  5.5% |  4.3 MiB |       1,288 | `_get_module_details` | `<frozen runpy>:105` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`)

|      % |     Size | Allocations | Callee | Location                                                |
| -----: | -------: | ----------: | ------ | ------------------------------------------------------- |
| 100.0% | 74.3 MiB |      21,393 | `main` | `/venv/lib/python3.11/site-packages/click/core.py:1422` |

##### `patched_main` (`black/__init__.py:1594`)

|      % |     Size | Allocations | Callee     | Location                                                |
| -----: | -------: | ----------: | ---------- | ------------------------------------------------------- |
| 100.0% | 74.3 MiB |      21,394 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py:1567` |

##### `<module>` (`black/__main__.py:1`)

|      % |     Size | Allocations | Callee         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 74.3 MiB |      21,394 | `patched_main` | `black/__init__.py:1594` |

##### `_run_code` (`<frozen runpy>:65`)

|      % |     Size | Allocations | Callee     | Location              |
| -----: | -------: | ----------: | ---------- | --------------------- |
| 100.0% | 74.3 MiB |      21,394 | `<module>` | `black/__main__.py:1` |

##### `_run_module_code` (`<frozen runpy>:91`)

|      % |     Size | Allocations | Callee      | Location            |
| -----: | -------: | ----------: | ----------- | ------------------- |
| 100.0% | 74.3 MiB |      21,394 | `_run_code` | `<frozen runpy>:65` |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py:1422`)

|      % |     Size | Allocations | Callee         | Location                                                |
| -----: | -------: | ----------: | -------------- | ------------------------------------------------------- |
| 100.0% | 74.3 MiB |      21,374 | `invoke`       | `/venv/lib/python3.11/site-packages/click/core.py:1339` |
|  <0.1% | 14.1 KiB |          17 | `make_context` | `/venv/lib/python3.11/site-packages/click/core.py:1266` |
|  <0.1% |     32 B |           1 | `__enter__`    | `/venv/lib/python3.11/site-packages/click/core.py:545`  |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:1339`)

|      % |     Size | Allocations | Callee   | Location                                               |
| -----: | -------: | ----------: | -------- | ------------------------------------------------------ |
| 100.0% | 74.3 MiB |      21,371 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:853` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`)

|      % |     Size | Allocations | Callee     | Location                                                    |
| -----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 100.0% | 74.3 MiB |      21,369 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |     Size | Allocations | Callee | Location                |
| -----: | -------: | ----------: | ------ | ----------------------- |
| 100.0% | 74.2 MiB |      21,366 | `main` | `black/__init__.py:244` |

##### `main` (`black/__init__.py:244`)

|      % |     Size | Allocations | Callee         | Location                |
| -----: | -------: | ----------: | -------------- | ----------------------- |
| 100.0% | 74.2 MiB |      21,362 | `reformat_one` | `black/__init__.py:860` |
|  <0.1% | 2.06 KiB |           2 | `get_sources`  | `black/__init__.py:724` |

##### `reformat_one` (`black/__init__.py:860`)

|      % |     Size | Allocations | Callee                 | Location                |
| -----: | -------: | ----------: | ---------------------- | ----------------------- |
| 100.0% | 74.2 MiB |      21,359 | `format_file_in_place` | `black/__init__.py:917` |
|  <0.1% | 1.13 KiB |           1 | `read`                 | `black/cache.py:60`     |

##### `format_file_in_place` (`black/__init__.py:917`)

|     % |    Size | Allocations | Callee                 | Location                 |
| ----: | ------: | ----------: | ---------------------- | ------------------------ |
| 99.7% |  74 MiB |      21,356 | `format_file_contents` | `black/__init__.py:1054` |
|  0.3% | 223 KiB |           2 | `decode_bytes`         | `black/__init__.py:1290` |

##### `format_file_contents` (`black/__init__.py:1054`)

|     % |     Size | Allocations | Callee                            | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 69.9% | 51.8 MiB |      21,147 | `format_str`                      | `black/__init__.py:1189` |
| 30.1% | 22.3 MiB |         209 | `check_stability_and_equivalence` | `black/__init__.py:1037` |

##### `format_str` (`black/__init__.py:1189`)

|      % |     Size | Allocations | Callee             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 51.8 MiB |      21,146 | `_format_str_once` | `black/__init__.py:1236` |

##### `_format_str_once` (`black/__init__.py:1236`)

|     % |     Size | Allocations | Callee                   | Location                 |
| ----: | -------: | ----------: | ------------------------ | ------------------------ |
| 68.5% | 35.4 MiB |      21,086 | `visit`                  | `black/nodes.py:163`     |
| 23.3% | 12.1 MiB |          32 | `lib2to3_parse`          | `black/parsing.py:55`    |
|  7.8% | 4.01 MiB |          16 | `transform_line`         | `black/linegen.py:601`   |
| <0.1% | 19.9 KiB |           3 | `normalize_fmt_off`      | `black/comments.py:168`  |
| <0.1% | 3.49 KiB |           1 | `detect_target_versions` | `black/__init__.py:1464` |

##### `visit` (`black/nodes.py:163`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 35.4 MiB |      21,084 | `visit_default`     | `black/linegen.py:134` |
|  99.2% | 35.2 MiB |      20,713 | `visit_stmt`        | `black/linegen.py:199` |
|  92.4% | 32.7 MiB |      20,144 | `visit_suite`       | `black/linegen.py:288` |
|  89.8% | 31.8 MiB |      20,269 | `visit_funcdef`     | `black/linegen.py:254` |
|  75.7% | 26.8 MiB |      13,405 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 35.4 MiB |      21,084 | `visit_default`     | `black/nodes.py:187`   |
|  46.0% | 16.3 MiB |      20,881 | `append`            | `black/lines.py:63`    |
|  19.8% |    7 MiB |           7 | `generate_comments` | `black/comments.py:52` |

##### `visit_default` (`black/nodes.py:187`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 35.4 MiB |      21,084 | `visit` | `black/nodes.py:163` |

##### `visit_stmt` (`black/linegen.py:199`)

|      % |     Size | Allocations | Callee                       | Location                |
| -----: | -------: | ----------: | ---------------------------- | ----------------------- |
| 100.0% | 35.2 MiB |      20,711 | `visit`                      | `black/nodes.py:163`    |
|  14.2% |    5 MiB |           6 | `normalize_invisible_parens` | `black/linegen.py:1328` |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 32.7 MiB |      20,144 | `visit_default` | `black/linegen.py:134` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 31.8 MiB |      20,269 | `visit` | `black/nodes.py:163` |

##### `visit_simple_stmt` (`black/linegen.py:295`)

|     % |     Size | Allocations | Callee          | Location               |
| ----: | -------: | ----------: | --------------- | ---------------------- |
| 96.3% | 25.8 MiB |      13,404 | `visit_default` | `black/linegen.py:134` |
|  3.7% |    1 MiB |           1 | `is_arith_like` | `black/nodes.py:548`   |

##### `check_stability_and_equivalence` (`black/__init__.py:1037`)

|      % |     Size | Allocations | Callee              | Location                 |
| -----: | -------: | ----------: | ------------------- | ------------------------ |
| 100.0% | 22.3 MiB |         208 | `assert_equivalent` | `black/__init__.py:1524` |

##### `assert_equivalent` (`black/__init__.py:1524`)

|     % |     Size | Allocations | Callee           | Location               |
| ----: | -------: | ----------: | ---------------- | ---------------------- |
| 41.0% | 9.12 MiB |         142 | `parse_ast`      | `black/parsing.py:129` |
| 27.2% | 6.05 MiB |          62 | `_stringify_ast` | `black/parsing.py:174` |

##### `visit_power` (`black/linegen.py:341`)

|     % |     Size | Allocations | Callee          | Location               |
| ----: | -------: | ----------: | --------------- | ---------------------- |
| 94.1% | 15.9 MiB |      10,806 | `visit_default` | `black/linegen.py:134` |

##### `append` (`black/lines.py:63`)

|     % |     Size | Allocations | Callee       | Location               |
| ----: | -------: | ----------: | ------------ | ---------------------- |
| 93.5% | 15.2 MiB |      20,787 | `mark`       | `black/brackets.py:70` |
|  6.5% | 1.05 MiB |          90 | `whitespace` | `black/nodes.py:194`   |

##### `_get_module_details` (`<frozen runpy>:105`)

|     % |     Size | Allocations | Callee                | Location                             |
| ----: | -------: | ----------: | --------------------- | ------------------------------------ |
| 99.9% |  4.3 MiB |       1,281 | `_find_and_load`      | `<frozen importlib._bootstrap>:1167` |
| 99.9% |  4.3 MiB |       1,281 | `_get_module_details` | `<frozen runpy>:105`                 |
|  0.1% | 5.66 KiB |           6 | `find_spec`           | `<frozen importlib.util>:73`         |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

|      % |     Size | Allocations | Callee                    | Location                             |
| -----: | -------: | ----------: | ------------------------- | ------------------------------------ |
| 100.0% | 4.29 MiB |       1,279 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |
|  <0.1% |    560 B |           1 | `__enter__`               | `<frozen importlib._bootstrap>:169`  |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

|      % |     Size | Allocations | Callee                      | Location                             |
| -----: | -------: | ----------: | --------------------------- | ------------------------------------ |
| 100.0% | 4.29 MiB |       1,278 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`  |
|   0.8% | 37.2 KiB |          47 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`  |
|   0.2% | 7.48 KiB |           4 | `_find_spec`                | `<frozen importlib._bootstrap>:1056` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

|      % |     Size | Allocations | Callee             | Location                                     |
| -----: | -------: | ----------: | ------------------ | -------------------------------------------- |
| 100.0% | 4.29 MiB |       1,276 | `exec_module`      | `<frozen importlib._bootstrap_external>:934` |
|  <0.1% | 1.83 KiB |           2 | `module_from_spec` | `<frozen importlib._bootstrap>:566`          |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

|     % |     Size | Allocations | Callee                      | Location                                      |
| ----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 99.3% | 4.26 MiB |       1,246 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
| 12.7% |  560 KiB |         606 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Allocations | Callee           | Location                                                 |
| -----: | -------: | ----------: | ---------------- | -------------------------------------------------------- |
| 100.0% | 4.26 MiB |       1,246 | `<module>`       | `black/__init__.py:1`                                    |
|  30.8% | 1.31 MiB |         329 | `_find_and_load` | `<frozen importlib._bootstrap>:1167`                     |
|  30.7% | 1.31 MiB |         304 | `<module>`       | `/venv/lib/python3.11/site-packages/click/__init__.py:1` |
|  30.1% | 1.28 MiB |         258 | `<module>`       | `black/comments.py:1`                                    |
|  29.8% | 1.27 MiB |         244 | `<module>`       | `black/nodes.py:1`                                       |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/__init__.py:1`)

|     % |    Size | Allocations | Callee           | Location                             |
| ----: | ------: | ----------: | ---------------- | ------------------------------------ |
| 99.8% | 1.3 MiB |         303 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1209`)

|      % |    Size | Allocations | Callee                      | Location                            |
| -----: | ------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 1.3 MiB |         318 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/core.py:1`)

|     % |     Size | Allocations | Callee             | Location                                               |
| ----: | -------: | ----------: | ------------------ | ------------------------------------------------------ |
| 85.5% | 1.05 MiB |          53 | `_find_and_load`   | `<frozen importlib._bootstrap>:1167`                   |
| 11.1% |  140 KiB |         145 | `_handle_fromlist` | `<frozen importlib._bootstrap>:1209`                   |
|  1.1% | 13.9 KiB |           9 | `__new__`          | `<frozen abc>:105`                                     |
|  0.2% | 2.49 KiB |           3 | `__new__`          | `/usr/lib/python3.11/enum.py:488`                      |
|  0.1% |    768 B |           1 | `Context`          | `/venv/lib/python3.11/site-packages/click/core.py:204` |

##### `compile` (`/usr/lib/python3.11/re/__init__.py:225`)

|     % |     Size | Allocations | Callee     | Location                                 |
| ----: | -------: | ----------: | ---------- | ---------------------------------------- |
| 99.9% | 1.05 MiB |          25 | `_compile` | `/usr/lib/python3.11/re/__init__.py:272` |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py:272`)

|     % |     Size | Allocations | Callee    | Location                                  |
| ----: | -------: | ----------: | --------- | ----------------------------------------- |
| 99.9% | 1.05 MiB |          24 | `compile` | `/usr/lib/python3.11/re/_compiler.py:738` |
|  0.1% |    698 B |           1 | `__and__` | `/usr/lib/python3.11/enum.py:1504`        |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|     % |     Size | Allocations | Callee  | Location                                  |
| ----: | -------: | ----------: | ------- | ----------------------------------------- |
| 97.0% | 1.01 MiB |           6 | `parse` | `/usr/lib/python3.11/re/_parser.py:970`   |
|  0.9% |  9.5 KiB |           6 | `_code` | `/usr/lib/python3.11/re/_compiler.py:571` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/formatting.py:1`)

|     % |     Size | Allocations | Callee           | Location                             |
| ----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 99.8% | 1.02 MiB |          22 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `parse` (`/usr/lib/python3.11/re/_parser.py:970`)

|     % |     Size | Allocations | Callee       | Location                                |
| ----: | -------: | ----------: | ------------ | --------------------------------------- |
| 99.9% | 1.01 MiB |           5 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py:447` |

##### `wrap` (`/usr/lib/python3.11/dataclasses.py:1209`)

|     % |     Size | Allocations | Callee           | Location                                 |
| ----: | -------: | ----------: | ---------------- | ---------------------------------------- |
| 99.7% | 1.01 MiB |          14 | `_process_class` | `/usr/lib/python3.11/dataclasses.py:884` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|     % |     Size | Allocations | Callee   | Location                                |
| ----: | -------: | ----------: | -------- | --------------------------------------- |
| 99.2% | 1.01 MiB |           4 | `_parse` | `/usr/lib/python3.11/re/_parser.py:507` |

##### `_process_class` (`/usr/lib/python3.11/dataclasses.py:884`)

|     % |    Size | Allocations | Callee               | Location                                 |
| ----: | ------: | ----------: | -------------------- | ---------------------------------------- |
| 98.9% |   1 MiB |           1 | `_init_fn`           | `/usr/lib/python3.11/dataclasses.py:528` |
|  0.6% | 6.5 KiB |           5 | `signature`          | `/usr/lib/python3.11/inspect.py:3277`    |
|  0.1% | 1.5 KiB |           2 | `_set_new_attribute` | `/usr/lib/python3.11/dataclasses.py:827` |
| <0.1% |   341 B |           1 | `_cmp_fn`            | `/usr/lib/python3.11/dataclasses.py:624` |
| <0.1% |   336 B |           1 | `_repr_fn`           | `/usr/lib/python3.11/dataclasses.py:588` |

##### `dataclass` (`/usr/lib/python3.11/dataclasses.py:1192`)

|      % |     Size | Allocations | Callee | Location                                  |
| -----: | -------: | ----------: | ------ | ----------------------------------------- |
| 100.0% | 1.01 MiB |          11 | `wrap` | `/usr/lib/python3.11/dataclasses.py:1209` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|     % |  Size | Allocations | Callee       | Location                                |
| ----: | ----: | ----------: | ------------ | --------------------------------------- |
| 99.6% | 1 MiB |           2 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py:447` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/specifiers.py:1`)

|     % |     Size | Allocations | Callee           | Location                                                         |
| ----: | -------: | ----------: | ---------------- | ---------------------------------------------------------------- |
| 90.2% |  156 KiB |         130 | `_find_and_load` | `<frozen importlib._bootstrap>:1167`                             |
|  4.9% |  8.5 KiB |           2 | `Specifier`      | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:220` |
|  3.5% | 6.07 KiB |           7 | `__new__`        | `<frozen abc>:105`                                               |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/types.py:1`)

|     % |     Size | Allocations | Callee           | Location                             |
| ----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 53.0% | 66.2 KiB |          58 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |
| 30.6% | 38.2 KiB |          45 | `__new__`        | `<frozen abc>:105`                   |
| 12.6% | 15.7 KiB |          19 | `__new__`        | `/usr/lib/python3.11/typing.py:2891` |
|  1.1% | 1.42 KiB |           2 | `inner`          | `/usr/lib/python3.11/typing.py:338`  |
|  0.4% |    542 B |           1 | `__init__`       | `/usr/lib/python3.11/typing.py:992`  |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/utils.py:1`)

|     % |     Size | Allocations | Callee           | Location                             |
| ----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 96.4% | 96.1 KiB |          68 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/__init__.py:1`)

|     % |     Size | Allocations | Callee           | Location                             |
| ----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 99.2% | 93.1 KiB |         118 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/gitignore.py:1`)

|     % |   Size | Allocations | Callee           | Location                             |
| ----: | -----: | ----------: | ---------------- | ------------------------------------ |
| 97.3% | 89 KiB |         112 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/tags.py:1`)

|     % |     Size | Allocations | Callee             | Location                             |
| ----: | -------: | ----------: | ------------------ | ------------------------------------ |
| 22.4% | 16.7 KiB |          17 | `_find_and_load`   | `<frozen importlib._bootstrap>:1167` |
| 21.2% | 15.8 KiB |          19 | `_handle_fromlist` | `<frozen importlib._bootstrap>:1209` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/_backends/agg.py:1`)

|     % |     Size | Allocations | Callee           | Location                             |
| ----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 98.9% | 64.8 KiB |          83 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `decorator` (`/venv/lib/python3.11/site-packages/click/decorators.py:373`)

|     % |     Size | Allocations | Callee     | Location                                                |
| ----: | -------: | ----------: | ---------- | ------------------------------------------------------- |
| 96.2% | 45.5 KiB |          32 | `__init__` | `/venv/lib/python3.11/site-packages/click/core.py:2883` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/_backends/hyperscan/gitignore.py:1`)

|     % |     Size | Allocations | Callee           | Location                             |
| ----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 94.8% | 44.5 KiB |          56 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `__init__` (`/venv/lib/python3.11/site-packages/click/core.py:2883`)

|    % |     Size | Allocations | Callee     | Location                                                |
| ---: | -------: | ----------: | ---------- | ------------------------------------------------------- |
| 2.6% | 1.17 KiB |           1 | `__init__` | `/venv/lib/python3.11/site-packages/click/core.py:2237` |

## Hottest call stacks

Call stacks ranked by bytes held at peak memory in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>:201`) ← `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|     % |     Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | -------: | ----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11.6% | 9.12 MiB |         142 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  9.0% |  7.1 MiB |           4 | `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  7.6% |    6 MiB |           6 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `shift` (`blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  5.1% | 4.01 MiB |          19 | `_stringify_ast` (`black/parsing.py:174`) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  2.5% |    2 MiB |           5 | `transform_line` (`black/linegen.py:601`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.3% | 1.01 MiB |           2 | `__next__` (`blib2to3/pgen2/driver.py:80`) ← `parse_tokens` (114) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.3% | 1.01 MiB |          11 | `<module>` (`/venv/lib/python3.11/site-packages/click/parser.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/formatting.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/core.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                    |
|  1.3% | 1.01 MiB |          10 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`black/nodes.py:194`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.3% |    1 MiB |           5 | `__init__` (`blib2to3/pytree.py:248`) ← `convert` (486) ← `pop` (`blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.3% |    1 MiB |           2 | `run_transformer` (`black/linegen.py:1755`) ← `transform_line` (601) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.3% |    1 MiB |           1 | `_stringify_ast` (`black/parsing.py:174`) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.3% |    1 MiB |           1 | `run_transformer` (`black/linegen.py:1755`) ← `transform_line` (601) ← `run_transformer` (1755) ← `transform_line` (601) ← `run_transformer` (1755) ← `transform_line` (601) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.3% |    1 MiB |           1 | `_stringify_ast` (`black/parsing.py:174`) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.3% |    1 MiB |           1 | `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_factor` (379) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.3% |    1 MiB |           1 | `sub_twice` (`black/strings.py:28`) ← `normalize_string_quotes` (169) ← `visit_STRING` (`black/linegen.py:413`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.3% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                 |
|  1.3% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `prefix` (480) ← `wrap_in_parentheses` (`black/nodes.py:935`) ← `normalize_invisible_parens` (`black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.3% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                           |
|  1.3% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                            |
|  1.3% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91) |

# Leaked memory profile

Leaked 60.9 MiB over 22,489 allocations (2.77 KiB per allocation).

| Category         |     % |     Size | Allocations |
| ---------------- | ----: | -------: | ----------: |
| Ours             | 88.4% | 53.8 MiB |      21,384 |
| Standard library |  9.6% | 5.83 MiB |         875 |
| Third-party      |  2.0% | 1.23 MiB |         230 |

## Hottest functions

### Self size

Functions ranked by bytes never freed directly in the function body, excluding callees.

|     % |     Size | Allocations | Function                    | Location                                               |
| ----: | -------: | ----------: | --------------------------- | ------------------------------------------------------ |
| 25.0% | 15.2 MiB |      20,787 | `mark`                      | `black/brackets.py:70`                                 |
| 16.4% |   10 MiB |          10 | `changed`                   | `blib2to3/pytree.py:171`                               |
| 11.5% |    7 MiB |           7 | `__new__`                   | `blib2to3/pytree.py:81`                                |
|  4.9% | 3.01 MiB |           4 | `parse`                     | `/usr/lib/python3.11/ast.py:33`                        |
|  3.3% | 2.04 MiB |           8 | `transform_line`            | `black/linegen.py:601`                                 |
|  3.3% |    2 MiB |           6 | `visit`                     | `black/nodes.py:163`                                   |
|  3.3% |    2 MiB |           3 | `run_transformer`           | `black/linegen.py:1755`                                |
|  3.3% |    2 MiB |           2 | `_stringify_ast`            | `black/parsing.py:174`                                 |
|  1.9% | 1.14 MiB |         196 | `update_sibling_maps`       | `blib2to3/pytree.py:369`                               |
|  1.7% | 1.01 MiB |           2 | `__next__`                  | `blib2to3/pgen2/driver.py:80`                          |
|  1.7% | 1.01 MiB |          11 | `<module>`                  | `/venv/lib/python3.11/site-packages/click/parser.py:1` |
|  1.7% | 1.01 MiB |           4 | `_parse`                    | `/usr/lib/python3.11/re/_parser.py:507`                |
|  1.6% |    1 MiB |           5 | `__init__`                  | `blib2to3/pytree.py:248`                               |
|  1.6% |    1 MiB |           2 | `visit_power`               | `black/linegen.py:341`                                 |
|  1.6% |    1 MiB |           2 | `visit_default`             | `black/linegen.py:134`                                 |
|  1.6% |    1 MiB |           3 | `_create_fn`                | `/usr/lib/python3.11/dataclasses.py:413`               |
|  1.6% |    1 MiB |           1 | `sub_twice`                 | `black/strings.py:28`                                  |
|  1.6% |    1 MiB |           1 | `normalize_trailing_prefix` | `black/comments.py:127`                                |
|  1.6% |    1 MiB |           1 | `line`                      | `black/linegen.py:109`                                 |
|  1.6% |    1 MiB |           1 | `is_arith_like`             | `black/nodes.py:548`                                   |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                    | Location                         |
| ----: | -------: | ----------: | --------------------------- | -------------------------------- |
| 25.0% | 15.2 MiB |      20,787 | `mark`                      | `black/brackets.py:70`           |
| 16.4% |   10 MiB |          10 | `changed`                   | `blib2to3/pytree.py:171`         |
| 11.5% |    7 MiB |           7 | `__new__`                   | `blib2to3/pytree.py:81`          |
|  3.3% | 2.04 MiB |           8 | `transform_line`            | `black/linegen.py:601`           |
|  3.3% |    2 MiB |           6 | `visit`                     | `black/nodes.py:163`             |
|  3.3% |    2 MiB |           3 | `run_transformer`           | `black/linegen.py:1755`          |
|  3.3% |    2 MiB |           2 | `_stringify_ast`            | `black/parsing.py:174`           |
|  1.9% | 1.14 MiB |         196 | `update_sibling_maps`       | `blib2to3/pytree.py:369`         |
|  1.7% | 1.01 MiB |           2 | `__next__`                  | `blib2to3/pgen2/driver.py:80`    |
|  1.6% |    1 MiB |           5 | `__init__`                  | `blib2to3/pytree.py:248`         |
|  1.6% |    1 MiB |           2 | `visit_power`               | `black/linegen.py:341`           |
|  1.6% |    1 MiB |           2 | `visit_default`             | `black/linegen.py:134`           |
|  1.6% |    1 MiB |           1 | `sub_twice`                 | `black/strings.py:28`            |
|  1.6% |    1 MiB |           1 | `normalize_trailing_prefix` | `black/comments.py:127`          |
|  1.6% |    1 MiB |           1 | `line`                      | `black/linegen.py:109`           |
|  1.6% |    1 MiB |           1 | `is_arith_like`             | `black/nodes.py:548`             |
|  1.6% |    1 MiB |           1 | `pop`                       | `blib2to3/pgen2/parse.py:398`    |
|  1.6% |    1 MiB |           1 | `__init__`                  | `blib2to3/pytree.py:400`         |
|  1.6% |    1 MiB |           1 | `push`                      | `blib2to3/pgen2/parse.py:386`    |
|  1.6% |    1 MiB |           1 | `generate_tokens`           | `blib2to3/pgen2/tokenize.py:565` |

##### Standard library

|     % |     Size | Allocations | Function                   | Location                                          |
| ----: | -------: | ----------: | -------------------------- | ------------------------------------------------- |
|  4.9% | 3.01 MiB |           4 | `parse`                    | `/usr/lib/python3.11/ast.py:33`                   |
|  1.7% | 1.01 MiB |           4 | `_parse`                   | `/usr/lib/python3.11/re/_parser.py:507`           |
|  1.6% |    1 MiB |           3 | `_create_fn`               | `/usr/lib/python3.11/dataclasses.py:413`          |
|  0.9% |  560 KiB |         606 | `_compile_bytecode`        | `<frozen importlib._bootstrap_external>:727`      |
|  0.1% | 75.7 KiB |          79 | `__new__`                  | `<frozen abc>:105`                                |
| <0.1% | 24.1 KiB |          27 | `__new__`                  | `/usr/lib/python3.11/enum.py:488`                 |
| <0.1% | 22.6 KiB |          12 | `compile`                  | `/usr/lib/python3.11/re/_compiler.py:738`         |
| <0.1% | 19.8 KiB |          12 | `<module>`                 | `/usr/lib/python3.11/tomllib/_parser.py:1`        |
| <0.1% | 17.4 KiB |          21 | `__new__`                  | `/usr/lib/python3.11/typing.py:2891`              |
| <0.1% |   12 KiB |           3 | `inner`                    | `/usr/lib/python3.11/typing.py:338`               |
| <0.1% |    8 KiB |           4 | `_fill_cache`              | `<frozen importlib._bootstrap_external>:1655`     |
| <0.1% | 7.97 KiB |           1 | `_parse_sub`               | `/usr/lib/python3.11/re/_parser.py:447`           |
| <0.1% | 6.73 KiB |           8 | `__setattr__`              | `/usr/lib/python3.11/enum.py:831`                 |
| <0.1% | 5.63 KiB |           6 | `namedtuple`               | `/usr/lib/python3.11/collections/__init__.py:348` |
| <0.1% | 5.32 KiB |           2 | `_code`                    | `/usr/lib/python3.11/re/_compiler.py:571`         |
| <0.1% | 4.73 KiB |           6 | `<module>`                 | `/usr/lib/python3.11/pkgutil.py:1`                |
| <0.1% | 2.85 KiB |           1 | `wrap`                     | `/usr/lib/python3.11/dataclasses.py:1209`         |
| <0.1% | 2.85 KiB |           4 | `_process_class`           | `/usr/lib/python3.11/dataclasses.py:884`          |
| <0.1% | 2.56 KiB |           3 | `_signature_from_function` | `/usr/lib/python3.11/inspect.py:2331`             |
| <0.1% |  2.5 KiB |           1 | `<module>`                 | `/usr/lib/python3.11/secrets.py:1`                |

##### Third-party

|     % |     Size | Allocations | Function              | Location                                                                   |
| ----: | -------: | ----------: | --------------------- | -------------------------------------------------------------------------- |
|  1.7% | 1.01 MiB |          11 | `<module>`            | `/venv/lib/python3.11/site-packages/click/parser.py:1`                     |
|  0.1% | 44.3 KiB |          31 | `__init__`            | `/venv/lib/python3.11/site-packages/click/core.py:2883`                    |
| <0.1% |   25 KiB |          22 | `<module>`            | `/venv/lib/python3.11/site-packages/click/core.py:1`                       |
| <0.1% |   15 KiB |          18 | `<module>`            | `/venv/lib/python3.11/site-packages/mypy_extensions.py:1`                  |
| <0.1% | 13.4 KiB |          15 | `<module>`            | `/venv/lib/python3.11/site-packages/click/exceptions.py:1`                 |
| <0.1% | 9.61 KiB |           9 | `<module>`            | `/venv/lib/python3.11/site-packages/packaging/version.py:1`                |
| <0.1% | 7.08 KiB |           8 | `<module>`            | `/venv/lib/python3.11/site-packages/click/utils.py:1`                      |
| <0.1% | 6.48 KiB |           6 | `<module>`            | `/venv/lib/python3.11/site-packages/pathspec/util.py:1`                    |
| <0.1% | 6.24 KiB |           5 | `<module>`            | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:1`                |
| <0.1% | 5.97 KiB |           6 | `<module>`            | `/venv/lib/python3.11/site-packages/packaging/tags.py:1`                   |
| <0.1% |  5.8 KiB |           6 | `<module>`            | `/venv/lib/python3.11/site-packages/click/_compat.py:1`                    |
| <0.1% | 3.82 KiB |           1 | `Specifier`           | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:220`           |
| <0.1% | 3.72 KiB |           4 | `<module>`            | `/venv/lib/python3.11/site-packages/pathspec/pattern.py:1`                 |
| <0.1% | 3.56 KiB |           4 | `<module>`            | `/venv/lib/python3.11/site-packages/packaging/utils.py:1`                  |
| <0.1% | 3.37 KiB |           5 | `handle_parse_result` | `/venv/lib/python3.11/site-packages/click/core.py:2663`                    |
| <0.1% | 3.19 KiB |           1 | `<module>`            | `/venv/lib/python3.11/site-packages/click/__init__.py:1`                   |
| <0.1% | 3.19 KiB |           4 | `<module>`            | `/venv/lib/python3.11/site-packages/pathspec/pathspec.py:1`                |
| <0.1% | 3.04 KiB |           2 | `new_func`            | `/venv/lib/python3.11/site-packages/click/decorators.py:33`                |
| <0.1% | 2.81 KiB |           3 | `<module>`            | `/venv/lib/python3.11/site-packages/pathspec/patterns/gitignore/base.py:1` |
| <0.1% | 2.76 KiB |           2 | `<module>`            | `/venv/lib/python3.11/site-packages/click/types.py:1`                      |

#### Lines

Lines ranked by contribution to each function's self size.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Allocations | Location                |
| -----: | -------: | ----------: | ----------------------- |
| 100.0% | 15.2 MiB |      20,786 | `black/brackets.py:112` |
|  <0.1% | 1.49 KiB |           1 | `black/brackets.py:114` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Allocations | Location                 |
| ----: | ----: | ----------: | ------------------------ |
| 60.0% | 6 MiB |           6 | `blib2to3/pytree.py:176` |
| 40.0% | 4 MiB |           4 | `blib2to3/pytree.py:175` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 7 MiB |           7 | `blib2to3/pytree.py:84` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Location                        |
| -----: | -------: | ----------: | ------------------------------- |
| 100.0% | 3.01 MiB |           4 | `/usr/lib/python3.11/ast.py:50` |

##### `transform_line` (`black/linegen.py:601`)

|     % |     Size | Allocations | Location               |
| ----: | -------: | ----------: | ---------------------- |
| 49.1% |    1 MiB |           2 | `black/linegen.py:714` |
| 49.0% |    1 MiB |           1 | `black/linegen.py:626` |
|  1.8% | 37.7 KiB |           3 | `black/linegen.py:679` |
|  0.1% | 1.39 KiB |           1 | `black/linegen.py:635` |
| <0.1% |    518 B |           1 | `black/linegen.py:631` |

##### `visit` (`black/nodes.py:163`)

|     % |     Size | Allocations | Location             |
| ----: | -------: | ----------: | -------------------- |
| 99.9% |    2 MiB |           3 | `black/nodes.py:185` |
|  0.1% | 2.68 KiB |           3 | `black/nodes.py:183` |

##### `run_transformer` (`black/linegen.py:1755`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 2 MiB |           3 | `black/linegen.py:1766` |

##### `_stringify_ast` (`black/parsing.py:174`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 50.0% | 1 MiB |           1 | `black/parsing.py:197` |
| 50.0% | 1 MiB |           1 | `black/parsing.py:185` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 88.0% |    1 MiB |          10 | `blib2to3/pytree.py:379` |
|  6.0% | 70.3 KiB |          93 | `blib2to3/pytree.py:376` |
|  6.0% | 70.3 KiB |          93 | `blib2to3/pytree.py:377` |

##### `__next__` (`blib2to3/pgen2/driver.py:80`)

|     % |     Size | Allocations | Location                      |
| ----: | -------: | ----------: | ----------------------------- |
| 99.2% |    1 MiB |           1 | `blib2to3/pgen2/driver.py:93` |
|  0.8% | 8.27 KiB |           1 | `blib2to3/pgen2/driver.py:92` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/parser.py:1`)

|     % |     Size | Allocations | Location                                                 |
| ----: | -------: | ----------: | -------------------------------------------------------- |
| 99.4% |    1 MiB |           3 | `/venv/lib/python3.11/site-packages/click/parser.py:185` |
|  0.2% | 2.29 KiB |           3 | `/venv/lib/python3.11/site-packages/click/parser.py:224` |
|  0.2% | 1.69 KiB |           2 | `/venv/lib/python3.11/site-packages/click/parser.py:216` |
|  0.2% | 1.69 KiB |           2 | `/venv/lib/python3.11/site-packages/click/parser.py:127` |
|  0.1% |    768 B |           1 | `/venv/lib/python3.11/site-packages/click/parser.py:51`  |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|     % |     Size | Allocations | Location                                |
| ----: | -------: | ----------: | --------------------------------------- |
| 99.5% |    1 MiB |           1 | `/usr/lib/python3.11/re/_parser.py:514` |
|  0.2% | 2.43 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:539` |
|  0.2% |  1.9 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:568` |
|  0.1% | 1.28 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:838` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           5 | `blib2to3/pytree.py:266` |

##### `visit_power` (`black/linegen.py:341`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 99.9% | 1 MiB |           1 | `black/linegen.py:342` |
|  0.1% | 904 B |           1 | `black/linegen.py:361` |

##### `visit_default` (`black/linegen.py:134`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 99.9% | 1 MiB |           1 | `black/linegen.py:158` |
|  0.1% | 702 B |           1 | `black/linegen.py:144` |

##### `_create_fn` (`/usr/lib/python3.11/dataclasses.py:413`)

|      % |  Size | Allocations | Location                                 |
| -----: | ----: | ----------: | ---------------------------------------- |
| 100.0% | 1 MiB |           3 | `/usr/lib/python3.11/dataclasses.py:433` |

##### `sub_twice` (`black/strings.py:28`)

|      % |  Size | Allocations | Location              |
| -----: | ----: | ----------: | --------------------- |
| 100.0% | 1 MiB |           1 | `black/strings.py:34` |

##### `normalize_trailing_prefix` (`black/comments.py:127`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 1 MiB |           1 | `black/comments.py:136` |

##### `line` (`black/linegen.py:109`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 1 MiB |           1 | `black/linegen.py:131` |

##### `is_arith_like` (`black/nodes.py:548`)

|      % |  Size | Allocations | Location             |
| -----: | ----: | ----------: | -------------------- |
| 100.0% | 1 MiB |           1 | `black/nodes.py:550` |

##### `pop` (`blib2to3/pgen2/parse.py:398`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:408` |

##### `__init__` (`blib2to3/pytree.py:400`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:425` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:394` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|      % |  Size | Allocations | Location                         |
| -----: | ----: | ----------: | -------------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/tokenize.py:972` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |    Size | Allocations | Location                                     |
| -----: | ------: | ----------: | -------------------------------------------- |
| 100.0% | 560 KiB |         606 | `<frozen importlib._bootstrap_external>:729` |

##### `__new__` (`<frozen abc>:105`)

|      % |     Size | Allocations | Location           |
| -----: | -------: | ----------: | ------------------ |
| 100.0% | 75.7 KiB |          79 | `<frozen abc>:106` |

##### `__init__` (`/venv/lib/python3.11/site-packages/click/core.py:2883`)

|     % |   Size | Allocations | Location                                                |
| ----: | -----: | ----------: | ------------------------------------------------------- |
| 97.1% | 43 KiB |          29 | `/venv/lib/python3.11/site-packages/click/core.py:3023` |
|  1.6% |  704 B |           1 | `/venv/lib/python3.11/site-packages/click/core.py:2905` |
|  1.4% |  614 B |           1 | `/venv/lib/python3.11/site-packages/click/core.py:2907` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/core.py:1`)

|     % |     Size | Allocations | Location                                                |
| ----: | -------: | ----------: | ------------------------------------------------------- |
| 30.4% |  7.6 KiB |           4 | `/venv/lib/python3.11/site-packages/click/core.py:204`  |
| 19.2% | 4.79 KiB |           4 | `/venv/lib/python3.11/site-packages/click/core.py:956`  |
| 15.7% | 3.92 KiB |           4 | `/venv/lib/python3.11/site-packages/click/core.py:1587` |
|  9.5% | 2.37 KiB |           3 | `/venv/lib/python3.11/site-packages/click/core.py:2057` |
|  6.8% | 1.69 KiB |           2 | `/venv/lib/python3.11/site-packages/click/core.py:1580` |

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
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:26` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:22` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:38` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:27` |

##### `__new__` (`/usr/lib/python3.11/typing.py:2891`)

|      % |     Size | Allocations | Location                             |
| -----: | -------: | ----------: | ------------------------------------ |
| 100.0% | 17.4 KiB |          21 | `/usr/lib/python3.11/typing.py:2909` |

##### `<module>` (`/venv/lib/python3.11/site-packages/mypy_extensions.py:1`)

|     % |     Size | Allocations | Location                                                    |
| ----: | -------: | ----------: | ----------------------------------------------------------- |
| 11.3% | 1.69 KiB |           2 | `/venv/lib/python3.11/site-packages/mypy_extensions.py:167` |
| 11.3% | 1.69 KiB |           2 | `/venv/lib/python3.11/site-packages/mypy_extensions.py:212` |
| 11.3% | 1.69 KiB |           2 | `/venv/lib/python3.11/site-packages/mypy_extensions.py:191` |
| 11.3% | 1.69 KiB |           2 | `/venv/lib/python3.11/site-packages/mypy_extensions.py:154` |
| 11.3% | 1.69 KiB |           2 | `/venv/lib/python3.11/site-packages/mypy_extensions.py:205` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/exceptions.py:1`)

|     % |     Size | Allocations | Location                                                     |
| ----: | -------: | ----------: | ------------------------------------------------------------ |
| 18.4% | 2.45 KiB |           3 | `/venv/lib/python3.11/site-packages/click/exceptions.py:114` |
| 11.5% | 1.53 KiB |           2 | `/venv/lib/python3.11/site-packages/click/exceptions.py:366` |
|  7.0% |    960 B |           1 | `/venv/lib/python3.11/site-packages/click/exceptions.py:68`  |
|  7.0% |    960 B |           1 | `/venv/lib/python3.11/site-packages/click/exceptions.py:35`  |
|  7.0% |    960 B |           1 | `/venv/lib/python3.11/site-packages/click/exceptions.py:362` |

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|      % |   Size | Allocations | Location                            |
| -----: | -----: | ----------: | ----------------------------------- |
| 100.0% | 12 KiB |           3 | `/usr/lib/python3.11/typing.py:341` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/version.py:1`)

|     % |     Size | Allocations | Location                                                      |
| ----: | -------: | ----------: | ------------------------------------------------------------- |
| 38.2% | 3.68 KiB |           3 | `/venv/lib/python3.11/site-packages/packaging/version.py:340` |
| 15.5% | 1.49 KiB |           2 | `/venv/lib/python3.11/site-packages/packaging/version.py:124` |
| 15.4% | 1.48 KiB |           1 | `/venv/lib/python3.11/site-packages/packaging/version.py:285` |
| 11.3% | 1.09 KiB |           1 | `/venv/lib/python3.11/site-packages/packaging/version.py:228` |
|  9.8% |    960 B |           1 | `/venv/lib/python3.11/site-packages/packaging/version.py:134` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1655`)

|      % |  Size | Allocations | Location                                      |
| -----: | ----: | ----------: | --------------------------------------------- |
| 100.0% | 8 KiB |           4 | `<frozen importlib._bootstrap_external>:1667` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|      % |     Size | Allocations | Location                                |
| -----: | -------: | ----------: | --------------------------------------- |
| 100.0% | 7.97 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:455` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/utils.py:1`)

|     % |     Size | Allocations | Location                                                |
| ----: | -------: | ----------: | ------------------------------------------------------- |
| 44.8% | 3.17 KiB |           3 | `/venv/lib/python3.11/site-packages/click/utils.py:522` |
| 31.4% | 2.22 KiB |           3 | `/venv/lib/python3.11/site-packages/click/utils.py:207` |
| 23.8% | 1.69 KiB |           2 | `/venv/lib/python3.11/site-packages/click/utils.py:113` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

|      % |     Size | Allocations | Location                          |
| -----: | -------: | ----------: | --------------------------------- |
| 100.0% | 6.73 KiB |           8 | `/usr/lib/python3.11/enum.py:842` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/util.py:1`)

|     % |     Size | Allocations | Location                                                  |
| ----: | -------: | ----------: | --------------------------------------------------------- |
| 22.9% | 1.48 KiB |           1 | `/venv/lib/python3.11/site-packages/pathspec/util.py:254` |
| 16.9% | 1.09 KiB |           1 | `/venv/lib/python3.11/site-packages/pathspec/util.py:765` |
| 16.3% | 1.05 KiB |           1 | `/venv/lib/python3.11/site-packages/pathspec/util.py:710` |
| 15.1% |   1000 B |           1 | `/venv/lib/python3.11/site-packages/pathspec/util.py:741` |
| 14.5% |    960 B |           1 | `/venv/lib/python3.11/site-packages/pathspec/util.py:651` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/_ranges.py:1`)

|     % |     Size | Allocations | Location                                                      |
| ----: | -------: | ----------: | ------------------------------------------------------------- |
| 23.8% | 1.48 KiB |           1 | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:681` |
| 23.0% | 1.43 KiB |           1 | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:44`  |
| 19.4% | 1.21 KiB |           1 | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:63`  |
| 16.9% | 1.05 KiB |           1 | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:179` |
| 16.9% | 1.05 KiB |           1 | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:236` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/tags.py:1`)

|     % |     Size | Allocations | Location                                                   |
| ----: | -------: | ----------: | ---------------------------------------------------------- |
| 28.0% | 1.67 KiB |           2 | `/venv/lib/python3.11/site-packages/packaging/tags.py:118` |
| 24.9% | 1.48 KiB |           1 | `/venv/lib/python3.11/site-packages/packaging/tags.py:322` |
| 15.7% |    960 B |           1 | `/venv/lib/python3.11/site-packages/packaging/tags.py:110` |
| 15.7% |    960 B |           1 | `/venv/lib/python3.11/site-packages/packaging/tags.py:101` |
| 15.7% |    960 B |           1 | `/venv/lib/python3.11/site-packages/packaging/tags.py:93`  |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/_compat.py:1`)

|     % |     Size | Allocations | Location                                                  |
| ----: | -------: | ----------: | --------------------------------------------------------- |
| 29.1% | 1.69 KiB |           2 | `/venv/lib/python3.11/site-packages/click/_compat.py:82`  |
| 29.1% | 1.69 KiB |           2 | `/venv/lib/python3.11/site-packages/click/_compat.py:452` |
| 25.6% | 1.48 KiB |           1 | `/venv/lib/python3.11/site-packages/click/_compat.py:344` |
| 16.2% |    960 B |           1 | `/venv/lib/python3.11/site-packages/click/_compat.py:56`  |

##### `namedtuple` (`/usr/lib/python3.11/collections/__init__.py:348`)

|      % |     Size | Allocations | Location                                          |
| -----: | -------: | ----------: | ------------------------------------------------- |
| 100.0% | 5.63 KiB |           6 | `/usr/lib/python3.11/collections/__init__.py:501` |

##### `_code` (`/usr/lib/python3.11/re/_compiler.py:571`)

|     % |     Size | Allocations | Location                                  |
| ----: | -------: | ----------: | ----------------------------------------- |
| 81.6% | 4.34 KiB |           1 | `/usr/lib/python3.11/re/_compiler.py:580` |
| 18.4% |   1002 B |           1 | `/usr/lib/python3.11/re/_compiler.py:577` |

##### `<module>` (`/usr/lib/python3.11/pkgutil.py:1`)

|     % |     Size | Allocations | Location                             |
| ----: | -------: | ----------: | ------------------------------------ |
| 35.7% | 1.69 KiB |           2 | `/usr/lib/python3.11/pkgutil.py:269` |
| 35.7% | 1.69 KiB |           2 | `/usr/lib/python3.11/pkgutil.py:194` |
| 15.9% |    768 B |           1 | `/usr/lib/python3.11/pkgutil.py:137` |
| 12.8% |    620 B |           1 | `/usr/lib/python3.11/pkgutil.py:184` |

##### `Specifier` (`/venv/lib/python3.11/site-packages/packaging/specifiers.py:220`)

|      % |     Size | Allocations | Location                                                         |
| -----: | -------: | ----------: | ---------------------------------------------------------------- |
| 100.0% | 3.82 KiB |           1 | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:340` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/pattern.py:1`)

|     % |     Size | Allocations | Location                                                     |
| ----: | -------: | ----------: | ------------------------------------------------------------ |
| 46.4% | 1.73 KiB |           2 | `/venv/lib/python3.11/site-packages/pathspec/pattern.py:29`  |
| 27.3% | 1.02 KiB |           1 | `/venv/lib/python3.11/site-packages/pathspec/pattern.py:90`  |
| 26.3% |   1000 B |           1 | `/venv/lib/python3.11/site-packages/pathspec/pattern.py:245` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/utils.py:1`)

|     % |  Size | Allocations | Location                                                   |
| ----: | ----: | ----------: | ---------------------------------------------------------- |
| 26.3% | 960 B |           1 | `/venv/lib/python3.11/site-packages/packaging/utils.py:62` |
| 26.3% | 960 B |           1 | `/venv/lib/python3.11/site-packages/packaging/utils.py:54` |
| 26.3% | 960 B |           1 | `/venv/lib/python3.11/site-packages/packaging/utils.py:46` |
| 21.1% | 768 B |           1 | `/venv/lib/python3.11/site-packages/packaging/utils.py:27` |

##### `handle_parse_result` (`/venv/lib/python3.11/site-packages/click/core.py:2663`)

|     % |    Size | Allocations | Location                                                |
| ----: | ------: | ----------: | ------------------------------------------------------- |
| 38.5% | 1.3 KiB |           2 | `/venv/lib/python3.11/site-packages/click/core.py:2686` |
| 22.3% |   768 B |           1 | `/venv/lib/python3.11/site-packages/click/core.py:2740` |
| 22.3% |   768 B |           1 | `/venv/lib/python3.11/site-packages/click/core.py:2739` |
| 17.0% |   586 B |           1 | `/venv/lib/python3.11/site-packages/click/core.py:2711` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/__init__.py:1`)

|      % |     Size | Allocations | Location                                                  |
| -----: | -------: | ----------: | --------------------------------------------------------- |
| 100.0% | 3.19 KiB |           1 | `/venv/lib/python3.11/site-packages/click/__init__.py:74` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/pathspec.py:1`)

|     % |     Size | Allocations | Location                                                     |
| ----: | -------: | ----------: | ------------------------------------------------------------ |
| 76.5% | 2.44 KiB |           3 | `/venv/lib/python3.11/site-packages/pathspec/pathspec.py:55` |
| 23.5% |    768 B |           1 | `/venv/lib/python3.11/site-packages/pathspec/pathspec.py:14` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |     Size | Allocations | Location                                                    |
| -----: | -------: | ----------: | ----------------------------------------------------------- |
| 100.0% | 3.04 KiB |           2 | `/venv/lib/python3.11/site-packages/click/decorators.py:34` |

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

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/patterns/gitignore/base.py:1`)

|     % |  Size | Allocations | Location                                                                     |
| ----: | ----: | ----------: | ---------------------------------------------------------------------------- |
| 33.3% | 960 B |           1 | `/venv/lib/python3.11/site-packages/pathspec/patterns/gitignore/base.py:22`  |
| 33.3% | 960 B |           1 | `/venv/lib/python3.11/site-packages/pathspec/patterns/gitignore/base.py:205` |
| 33.3% | 960 B |           1 | `/venv/lib/python3.11/site-packages/pathspec/patterns/gitignore/base.py:197` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/types.py:1`)

|     % |     Size | Allocations | Location                                                |
| ----: | -------: | ----------: | ------------------------------------------------------- |
| 53.7% | 1.48 KiB |           1 | `/venv/lib/python3.11/site-packages/click/types.py:464` |
| 46.3% | 1.28 KiB |           1 | `/venv/lib/python3.11/site-packages/click/types.py:37`  |

##### `_signature_from_function` (`/usr/lib/python3.11/inspect.py:2331`)

|     % |     Size | Allocations | Location                              |
| ----: | -------: | ----------: | ------------------------------------- |
| 41.4% | 1.06 KiB |           1 | `/usr/lib/python3.11/inspect.py:2358` |
| 37.0% |    972 B |           1 | `/usr/lib/python3.11/inspect.py:2376` |
| 21.6% |    568 B |           1 | `/usr/lib/python3.11/inspect.py:2421` |

##### `<module>` (`/usr/lib/python3.11/secrets.py:1`)

|      % |    Size | Allocations | Location                            |
| -----: | ------: | ----------: | ----------------------------------- |
| 100.0% | 2.5 KiB |           1 | `/usr/lib/python3.11/secrets.py:21` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Allocations | Caller   | Location            |
| -----: | -------: | ----------: | -------- | ------------------- |
| 100.0% | 15.2 MiB |      20,787 | `append` | `black/lines.py:63` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Allocations | Caller    | Location                 |
| ----: | ----: | ----------: | --------- | ------------------------ |
| 80.0% | 8 MiB |           8 | `changed` | `blib2to3/pytree.py:171` |
| 20.0% | 2 MiB |           2 | `prefix`  | `blib2to3/pytree.py:480` |

##### `__new__` (`blib2to3/pytree.py:81`)

|     % |  Size | Allocations | Caller                | Location                 |
| ----: | ----: | ----------: | --------------------- | ------------------------ |
| 85.7% | 6 MiB |           6 | `convert`             | `blib2to3/pytree.py:486` |
| 14.3% | 1 MiB |           1 | `wrap_in_parentheses` | `black/nodes.py:935`     |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Caller                  | Location               |
| -----: | -------: | ----------: | ----------------------- | ---------------------- |
| 100.0% | 3.01 MiB |           4 | `_parse_single_version` | `black/parsing.py:117` |

##### `transform_line` (`black/linegen.py:601`)

|      % |     Size | Allocations | Caller             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 2.04 MiB |           8 | `_format_str_once` | `black/__init__.py:1236` |

##### `visit` (`black/nodes.py:163`)

|      % |  Size | Allocations | Caller             | Location                 |
| -----: | ----: | ----------: | ------------------ | ------------------------ |
| 100.0% | 2 MiB |           5 | `visit_default`    | `black/nodes.py:187`     |
|  <0.1% | 690 B |           1 | `_format_str_once` | `black/__init__.py:1236` |

##### `run_transformer` (`black/linegen.py:1755`)

|      % |  Size | Allocations | Caller           | Location               |
| -----: | ----: | ----------: | ---------------- | ---------------------- |
| 100.0% | 2 MiB |           3 | `transform_line` | `black/linegen.py:601` |

##### `_stringify_ast` (`black/parsing.py:174`)

|      % |  Size | Allocations | Caller                           | Location               |
| -----: | ----: | ----------: | -------------------------------- | ---------------------- |
| 100.0% | 2 MiB |           2 | `_stringify_ast_with_new_parent` | `black/parsing.py:166` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|      % |     Size | Allocations | Caller         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 1.14 MiB |         196 | `prev_sibling` | `blib2to3/pytree.py:207` |

##### `__next__` (`blib2to3/pgen2/driver.py:80`)

|      % |     Size | Allocations | Caller         | Location                       |
| -----: | -------: | ----------: | -------------- | ------------------------------ |
| 100.0% | 1.01 MiB |           2 | `parse_tokens` | `blib2to3/pgen2/driver.py:114` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/parser.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 1.01 MiB |          11 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|      % |     Size | Allocations | Caller       | Location                                |
| -----: | -------: | ----------: | ------------ | --------------------------------------- |
| 100.0% | 1.01 MiB |           4 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py:447` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 1 MiB |           5 | `convert` | `blib2to3/pytree.py:486` |

##### `visit_power` (`black/linegen.py:341`)

|      % |  Size | Allocations | Caller  | Location             |
| -----: | ----: | ----------: | ------- | -------------------- |
| 100.0% | 1 MiB |           2 | `visit` | `black/nodes.py:163` |

##### `visit_default` (`black/linegen.py:134`)

|     % |  Size | Allocations | Caller         | Location               |
| ----: | ----: | ----------: | -------------- | ---------------------- |
| 99.9% | 1 MiB |           1 | `visit`        | `black/nodes.py:163`   |
|  0.1% | 702 B |           1 | `visit_STRING` | `black/linegen.py:413` |

##### `_create_fn` (`/usr/lib/python3.11/dataclasses.py:413`)

|     % |  Size | Allocations | Caller     | Location                                 |
| ----: | ----: | ----------: | ---------- | ---------------------------------------- |
| 99.9% | 1 MiB |           1 | `_init_fn` | `/usr/lib/python3.11/dataclasses.py:528` |
| <0.1% | 341 B |           1 | `_cmp_fn`  | `/usr/lib/python3.11/dataclasses.py:624` |
| <0.1% | 336 B |           1 | `_repr_fn` | `/usr/lib/python3.11/dataclasses.py:588` |

##### `sub_twice` (`black/strings.py:28`)

|      % |  Size | Allocations | Caller                    | Location               |
| -----: | ----: | ----------: | ------------------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `normalize_string_quotes` | `black/strings.py:169` |

##### `normalize_trailing_prefix` (`black/comments.py:127`)

|      % |  Size | Allocations | Caller              | Location               |
| -----: | ----: | ----------: | ------------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `generate_comments` | `black/comments.py:52` |

##### `line` (`black/linegen.py:109`)

|      % |  Size | Allocations | Caller         | Location               |
| -----: | ----: | ----------: | -------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `visit_INDENT` | `black/linegen.py:179` |

##### `is_arith_like` (`black/nodes.py:548`)

|      % |  Size | Allocations | Caller              | Location               |
| -----: | ----: | ----------: | ------------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `pop` (`blib2to3/pgen2/parse.py:398`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `_addtoken` | `blib2to3/pgen2/parse.py:290` |

##### `__init__` (`blib2to3/pytree.py:400`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 1 MiB |           1 | `convert` | `blib2to3/pytree.py:486` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `_addtoken` | `blib2to3/pgen2/parse.py:290` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|      % |  Size | Allocations | Caller     | Location                      |
| -----: | ----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `__next__` | `blib2to3/pgen2/driver.py:80` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |    Size | Allocations | Caller     | Location                                      |
| -----: | ------: | ----------: | ---------- | --------------------------------------------- |
| 100.0% | 560 KiB |         606 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `__new__` (`<frozen abc>:105`)

|     % |     Size | Allocations | Caller     | Location                                                       |
| ----: | -------: | ----------: | ---------- | -------------------------------------------------------------- |
| 50.5% | 38.2 KiB |          45 | `<module>` | `/venv/lib/python3.11/site-packages/click/types.py:1`          |
| 23.1% | 17.5 KiB |          18 | `<module>` | `black/trans.py:1`                                             |
| 18.3% | 13.9 KiB |           9 | `<module>` | `/venv/lib/python3.11/site-packages/click/core.py:1`           |
|  8.0% | 6.07 KiB |           7 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:1` |

##### `__init__` (`/venv/lib/python3.11/site-packages/click/core.py:2883`)

|      % |     Size | Allocations | Caller      | Location                                                     |
| -----: | -------: | ----------: | ----------- | ------------------------------------------------------------ |
| 100.0% | 44.3 KiB |          31 | `decorator` | `/venv/lib/python3.11/site-packages/click/decorators.py:373` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/core.py:1`)

|      % |   Size | Allocations | Caller                      | Location                            |
| -----: | -----: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 25 KiB |          22 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

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

##### `<module>` (`/venv/lib/python3.11/site-packages/mypy_extensions.py:1`)

|      % |   Size | Allocations | Caller                      | Location                            |
| -----: | -----: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 15 KiB |          18 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/exceptions.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 13.4 KiB |          15 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|     % |     Size | Allocations | Caller        | Location                                              |
| ----: | -------: | ----------: | ------------- | ----------------------------------------------------- |
| 75.3% | 9.02 KiB |           1 | `Line`        | `black/lines.py:49`                                   |
| 17.9% | 2.15 KiB |           1 | `__getitem__` | `/usr/lib/python3.11/typing.py:467`                   |
|  6.7% |    826 B |           1 | `<module>`    | `/venv/lib/python3.11/site-packages/click/types.py:1` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/version.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 9.61 KiB |           9 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1655`)

|      % |  Size | Allocations | Caller      | Location                                      |
| -----: | ----: | ----------: | ----------- | --------------------------------------------- |
| 100.0% | 8 KiB |           4 | `find_spec` | `<frozen importlib._bootstrap_external>:1604` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|      % |     Size | Allocations | Caller  | Location                                |
| -----: | -------: | ----------: | ------- | --------------------------------------- |
| 100.0% | 7.97 KiB |           1 | `parse` | `/usr/lib/python3.11/re/_parser.py:970` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/utils.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 7.08 KiB |           8 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

|     % |     Size | Allocations | Caller         | Location                          |
| ----: | -------: | ----------: | -------------- | --------------------------------- |
| 66.6% | 4.48 KiB |           5 | `__set_name__` | `/usr/lib/python3.11/enum.py:237` |
| 33.4% | 2.25 KiB |           3 | `__new__`      | `/usr/lib/python3.11/enum.py:488` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/util.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 6.48 KiB |           6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/_ranges.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 6.24 KiB |           5 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/tags.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 5.97 KiB |           6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/_compat.py:1`)

|      % |    Size | Allocations | Caller                      | Location                            |
| -----: | ------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 5.8 KiB |           6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `namedtuple` (`/usr/lib/python3.11/collections/__init__.py:348`)

|     % |     Size | Allocations | Caller          | Location                             |
| ----: | -------: | ----------: | --------------- | ------------------------------------ |
| 83.3% | 4.69 KiB |           5 | `_make_nmtuple` | `/usr/lib/python3.11/typing.py:2795` |
| 16.7% |    960 B |           1 | `<module>`      | `/usr/lib/python3.11/pkgutil.py:1`   |

##### `_code` (`/usr/lib/python3.11/re/_compiler.py:571`)

|      % |     Size | Allocations | Caller    | Location                                  |
| -----: | -------: | ----------: | --------- | ----------------------------------------- |
| 100.0% | 5.32 KiB |           2 | `compile` | `/usr/lib/python3.11/re/_compiler.py:738` |

##### `<module>` (`/usr/lib/python3.11/pkgutil.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 4.73 KiB |           6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `Specifier` (`/venv/lib/python3.11/site-packages/packaging/specifiers.py:220`)

|      % |     Size | Allocations | Caller     | Location                                                       |
| -----: | -------: | ----------: | ---------- | -------------------------------------------------------------- |
| 100.0% | 3.82 KiB |           1 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:1` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/pattern.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.72 KiB |           4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/utils.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.56 KiB |           4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `handle_parse_result` (`/venv/lib/python3.11/site-packages/click/core.py:2663`)

|      % |     Size | Allocations | Caller       | Location                                                |
| -----: | -------: | ----------: | ------------ | ------------------------------------------------------- |
| 100.0% | 3.37 KiB |           5 | `parse_args` | `/venv/lib/python3.11/site-packages/click/core.py:1303` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/__init__.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.19 KiB |           1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/pathspec.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.19 KiB |           4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |     Size | Allocations | Caller   | Location                                               |
| -----: | -------: | ----------: | -------- | ------------------------------------------------------ |
| 100.0% | 3.04 KiB |           2 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:853` |

##### `wrap` (`/usr/lib/python3.11/dataclasses.py:1209`)

|      % |     Size | Allocations | Caller     | Location                                                   |
| -----: | -------: | ----------: | ---------- | ---------------------------------------------------------- |
| 100.0% | 2.85 KiB |           1 | `<module>` | `/venv/lib/python3.11/site-packages/pathspec/pattern.py:1` |

##### `_process_class` (`/usr/lib/python3.11/dataclasses.py:884`)

|      % |     Size | Allocations | Caller | Location                                  |
| -----: | -------: | ----------: | ------ | ----------------------------------------- |
| 100.0% | 2.85 KiB |           4 | `wrap` | `/usr/lib/python3.11/dataclasses.py:1209` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/patterns/gitignore/base.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 2.81 KiB |           3 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/types.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 2.76 KiB |           2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `_signature_from_function` (`/usr/lib/python3.11/inspect.py:2331`)

|      % |     Size | Allocations | Caller                     | Location                              |
| -----: | -------: | ----------: | -------------------------- | ------------------------------------- |
| 100.0% | 2.56 KiB |           3 | `_signature_from_callable` | `/usr/lib/python3.11/inspect.py:2426` |

##### `<module>` (`/usr/lib/python3.11/secrets.py:1`)

|      % |    Size | Allocations | Caller                      | Location                            |
| -----: | ------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 2.5 KiB |           1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

### Total size

Functions ranked by total bytes never freed in the function and all its callees.

|      % |     Size | Allocations | Function               | Location                                                       |
| -----: | -------: | ----------: | ---------------------- | -------------------------------------------------------------- |
| 100.0% | 60.9 MiB |      22,489 | `_run_tracker`         | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40` |
| 100.0% | 60.9 MiB |      22,488 | `run_module`           | `<frozen runpy>:201`                                           |
|  93.0% | 56.6 MiB |      21,200 | `__call__`             | `/venv/lib/python3.11/site-packages/click/core.py:1567`        |
|  93.0% | 56.6 MiB |      21,200 | `patched_main`         | `black/__init__.py:1594`                                       |
|  93.0% | 56.6 MiB |      21,200 | `<module>`             | `black/__main__.py:1`                                          |
|  93.0% | 56.6 MiB |      21,200 | `_run_code`            | `<frozen runpy>:65`                                            |
|  93.0% | 56.6 MiB |      21,200 | `_run_module_code`     | `<frozen runpy>:91`                                            |
|  93.0% | 56.6 MiB |      21,199 | `main`                 | `/venv/lib/python3.11/site-packages/click/core.py:1422`        |
|  93.0% | 56.6 MiB |      21,180 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:1339`        |
|  93.0% | 56.6 MiB |      21,178 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:853`         |
|  93.0% | 56.6 MiB |      21,177 | `new_func`             | `/venv/lib/python3.11/site-packages/click/decorators.py:33`    |
|  93.0% | 56.6 MiB |      21,175 | `main`                 | `black/__init__.py:244`                                        |
|  92.9% | 56.6 MiB |      21,170 | `reformat_one`         | `black/__init__.py:860`                                        |
|  92.9% | 56.6 MiB |      21,158 | `format_file_in_place` | `black/__init__.py:917`                                        |
|  92.9% | 56.6 MiB |      21,157 | `format_file_contents` | `black/__init__.py:1054`                                       |
|  84.7% | 51.6 MiB |      21,148 | `_format_str_once`     | `black/__init__.py:1236`                                       |
|  59.3% | 36.1 MiB |          95 | `format_str`           | `black/__init__.py:1189`                                       |
|  58.2% | 35.4 MiB |      21,086 | `visit`                | `black/nodes.py:163`                                           |
|  58.2% | 35.4 MiB |      21,084 | `visit_default`        | `black/nodes.py:187`                                           |
|  58.2% | 35.4 MiB |      21,084 | `visit_default`        | `black/linegen.py:134`                                         |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                          | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 93.0% | 56.6 MiB |      21,200 | `patched_main`                    | `black/__init__.py:1594` |
| 93.0% | 56.6 MiB |      21,200 | `<module>`                        | `black/__main__.py:1`    |
| 93.0% | 56.6 MiB |      21,175 | `main`                            | `black/__init__.py:244`  |
| 92.9% | 56.6 MiB |      21,170 | `reformat_one`                    | `black/__init__.py:860`  |
| 92.9% | 56.6 MiB |      21,158 | `format_file_in_place`            | `black/__init__.py:917`  |
| 92.9% | 56.6 MiB |      21,157 | `format_file_contents`            | `black/__init__.py:1054` |
| 84.7% | 51.6 MiB |      21,148 | `_format_str_once`                | `black/__init__.py:1236` |
| 59.3% | 36.1 MiB |          95 | `format_str`                      | `black/__init__.py:1189` |
| 58.2% | 35.4 MiB |      21,086 | `visit`                           | `black/nodes.py:163`     |
| 58.2% | 35.4 MiB |      21,084 | `visit_default`                   | `black/nodes.py:187`     |
| 58.2% | 35.4 MiB |      21,084 | `visit_default`                   | `black/linegen.py:134`   |
| 57.7% | 35.2 MiB |      20,713 | `visit_stmt`                      | `black/linegen.py:199`   |
| 53.8% | 32.7 MiB |      20,144 | `visit_suite`                     | `black/linegen.py:288`   |
| 52.3% | 31.8 MiB |      20,269 | `visit_funcdef`                   | `black/linegen.py:254`   |
| 44.1% | 26.8 MiB |      13,405 | `visit_simple_stmt`               | `black/linegen.py:295`   |
| 33.7% | 20.5 MiB |      21,062 | `check_stability_and_equivalence` | `black/__init__.py:1037` |
| 27.8% | 16.9 MiB |      10,808 | `visit_power`                     | `black/linegen.py:341`   |
| 26.7% | 16.3 MiB |      20,881 | `append`                          | `black/lines.py:63`      |
| 25.4% | 15.5 MiB |      21,054 | `assert_stable`                   | `black/__init__.py:1557` |
| 25.0% | 15.2 MiB |      20,787 | `mark`                            | `black/brackets.py:70`   |

##### Standard library

|      % |     Size | Allocations | Function                    | Location                                     |
| -----: | -------: | ----------: | --------------------------- | -------------------------------------------- |
| 100.0% | 60.9 MiB |      22,488 | `run_module`                | `<frozen runpy>:201`                         |
|  93.0% | 56.6 MiB |      21,200 | `_run_code`                 | `<frozen runpy>:65`                          |
|  93.0% | 56.6 MiB |      21,200 | `_run_module_code`          | `<frozen runpy>:91`                          |
|   7.0% | 4.27 MiB |       1,287 | `_get_module_details`       | `<frozen runpy>:105`                         |
|   7.0% | 4.26 MiB |       1,280 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`         |
|   7.0% | 4.26 MiB |       1,278 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`         |
|   7.0% | 4.26 MiB |       1,277 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`          |
|   7.0% | 4.26 MiB |       1,275 | `exec_module`               | `<frozen importlib._bootstrap_external>:934` |
|   6.9% | 4.23 MiB |       1,245 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`          |
|   4.9% | 3.01 MiB |           4 | `parse`                     | `/usr/lib/python3.11/ast.py:33`              |
|   2.1% |  1.3 MiB |         318 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`         |
|   1.7% | 1.05 MiB |          26 | `compile`                   | `/usr/lib/python3.11/re/__init__.py:225`     |
|   1.7% | 1.05 MiB |          25 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py:272`     |
|   1.7% | 1.05 MiB |          24 | `compile`                   | `/usr/lib/python3.11/re/_compiler.py:738`    |
|   1.7% | 1.01 MiB |           6 | `parse`                     | `/usr/lib/python3.11/re/_parser.py:970`      |
|   1.7% | 1.01 MiB |          15 | `wrap`                      | `/usr/lib/python3.11/dataclasses.py:1209`    |
|   1.7% | 1.01 MiB |           5 | `_parse_sub`                | `/usr/lib/python3.11/re/_parser.py:447`      |
|   1.7% | 1.01 MiB |          14 | `_process_class`            | `/usr/lib/python3.11/dataclasses.py:884`     |
|   1.7% | 1.01 MiB |          11 | `dataclass`                 | `/usr/lib/python3.11/dataclasses.py:1192`    |
|   1.7% | 1.01 MiB |           4 | `_parse`                    | `/usr/lib/python3.11/re/_parser.py:507`      |

##### Third-party

|      % |     Size | Allocations | Function       | Location                                                                         |
| -----: | -------: | ----------: | -------------- | -------------------------------------------------------------------------------- |
| 100.0% | 60.9 MiB |      22,489 | `_run_tracker` | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40`                   |
|  93.0% | 56.6 MiB |      21,200 | `__call__`     | `/venv/lib/python3.11/site-packages/click/core.py:1567`                          |
|  93.0% | 56.6 MiB |      21,199 | `main`         | `/venv/lib/python3.11/site-packages/click/core.py:1422`                          |
|  93.0% | 56.6 MiB |      21,180 | `invoke`       | `/venv/lib/python3.11/site-packages/click/core.py:1339`                          |
|  93.0% | 56.6 MiB |      21,178 | `invoke`       | `/venv/lib/python3.11/site-packages/click/core.py:853`                           |
|  93.0% | 56.6 MiB |      21,177 | `new_func`     | `/venv/lib/python3.11/site-packages/click/decorators.py:33`                      |
|   2.1% | 1.31 MiB |         304 | `<module>`     | `/venv/lib/python3.11/site-packages/click/__init__.py:1`                         |
|   2.0% | 1.23 MiB |         233 | `<module>`     | `/venv/lib/python3.11/site-packages/click/core.py:1`                             |
|   1.7% | 1.02 MiB |          24 | `<module>`     | `/venv/lib/python3.11/site-packages/click/formatting.py:1`                       |
|   1.7% | 1.01 MiB |          11 | `<module>`     | `/venv/lib/python3.11/site-packages/click/parser.py:1`                           |
|   0.2% |  137 KiB |         140 | `<module>`     | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:1`                   |
|   0.2% |  125 KiB |         127 | `<module>`     | `/venv/lib/python3.11/site-packages/click/types.py:1`                            |
|   0.2% | 93.8 KiB |         119 | `<module>`     | `/venv/lib/python3.11/site-packages/pathspec/__init__.py:1`                      |
|   0.1% | 91.5 KiB |         115 | `<module>`     | `/venv/lib/python3.11/site-packages/pathspec/gitignore.py:1`                     |
|   0.1% | 65.5 KiB |          84 | `<module>`     | `/venv/lib/python3.11/site-packages/pathspec/_backends/agg.py:1`                 |
|   0.1% | 63.6 KiB |          71 | `<module>`     | `/venv/lib/python3.11/site-packages/packaging/utils.py:1`                        |
|   0.1% | 47.3 KiB |          33 | `decorator`    | `/venv/lib/python3.11/site-packages/click/decorators.py:373`                     |
|   0.1% | 46.9 KiB |          59 | `<module>`     | `/venv/lib/python3.11/site-packages/pathspec/_backends/hyperscan/gitignore.py:1` |
|   0.1% | 45.5 KiB |          32 | `__init__`     | `/venv/lib/python3.11/site-packages/click/core.py:2883`                          |
|   0.1% | 40.8 KiB |          42 | `<module>`     | `/venv/lib/python3.11/site-packages/packaging/_ranges.py:1`                      |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|      % |     Size | Allocations | Callee       | Location             |
| -----: | -------: | ----------: | ------------ | -------------------- |
| 100.0% | 60.9 MiB |      22,488 | `run_module` | `<frozen runpy>:201` |

##### `run_module` (`<frozen runpy>:201`)

|     % |     Size | Allocations | Callee                | Location             |
| ----: | -------: | ----------: | --------------------- | -------------------- |
| 93.0% | 56.6 MiB |      21,200 | `_run_module_code`    | `<frozen runpy>:91`  |
|  7.0% | 4.27 MiB |       1,287 | `_get_module_details` | `<frozen runpy>:105` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`)

|      % |     Size | Allocations | Callee | Location                                                |
| -----: | -------: | ----------: | ------ | ------------------------------------------------------- |
| 100.0% | 56.6 MiB |      21,199 | `main` | `/venv/lib/python3.11/site-packages/click/core.py:1422` |

##### `patched_main` (`black/__init__.py:1594`)

|      % |     Size | Allocations | Callee     | Location                                                |
| -----: | -------: | ----------: | ---------- | ------------------------------------------------------- |
| 100.0% | 56.6 MiB |      21,200 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py:1567` |

##### `<module>` (`black/__main__.py:1`)

|      % |     Size | Allocations | Callee         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 56.6 MiB |      21,200 | `patched_main` | `black/__init__.py:1594` |

##### `_run_code` (`<frozen runpy>:65`)

|      % |     Size | Allocations | Callee     | Location              |
| -----: | -------: | ----------: | ---------- | --------------------- |
| 100.0% | 56.6 MiB |      21,200 | `<module>` | `black/__main__.py:1` |

##### `_run_module_code` (`<frozen runpy>:91`)

|      % |     Size | Allocations | Callee      | Location            |
| -----: | -------: | ----------: | ----------- | ------------------- |
| 100.0% | 56.6 MiB |      21,200 | `_run_code` | `<frozen runpy>:65` |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py:1422`)

|      % |     Size | Allocations | Callee         | Location                                                |
| -----: | -------: | ----------: | -------------- | ------------------------------------------------------- |
| 100.0% | 56.6 MiB |      21,180 | `invoke`       | `/venv/lib/python3.11/site-packages/click/core.py:1339` |
|  <0.1% | 13.6 KiB |          16 | `make_context` | `/venv/lib/python3.11/site-packages/click/core.py:1266` |
|  <0.1% |    529 B |           2 | `__exit__`     | `/venv/lib/python3.11/site-packages/click/core.py:550`  |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:1339`)

|      % |     Size | Allocations | Callee   | Location                                               |
| -----: | -------: | ----------: | -------- | ------------------------------------------------------ |
| 100.0% | 56.6 MiB |      21,178 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:853` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`)

|      % |     Size | Allocations | Callee     | Location                                                    |
| -----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 100.0% | 56.6 MiB |      21,177 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |     Size | Allocations | Callee | Location                |
| -----: | -------: | ----------: | ------ | ----------------------- |
| 100.0% | 56.6 MiB |      21,175 | `main` | `black/__init__.py:244` |

##### `main` (`black/__init__.py:244`)

|      % |     Size | Allocations | Callee         | Location                |
| -----: | -------: | ----------: | -------------- | ----------------------- |
| 100.0% | 56.6 MiB |      21,170 | `reformat_one` | `black/__init__.py:860` |
|  <0.1% | 2.06 KiB |           2 | `get_sources`  | `black/__init__.py:724` |

##### `reformat_one` (`black/__init__.py:860`)

|      % |     Size | Allocations | Callee                 | Location                |
| -----: | -------: | ----------: | ---------------------- | ----------------------- |
| 100.0% | 56.6 MiB |      21,158 | `format_file_in_place` | `black/__init__.py:917` |
|  <0.1% | 5.22 KiB |           7 | `write`                | `black/cache.py:132`    |
|  <0.1% | 1.92 KiB |           2 | `done`                 | `black/report.py:36`    |
|  <0.1% | 1.13 KiB |           1 | `read`                 | `black/cache.py:60`     |

##### `format_file_in_place` (`black/__init__.py:917`)

|      % |     Size | Allocations | Callee                 | Location                 |
| -----: | -------: | ----------: | ---------------------- | ------------------------ |
| 100.0% | 56.6 MiB |      21,157 | `format_file_contents` | `black/__init__.py:1054` |
|  <0.1% |    552 B |           1 | `decode_bytes`         | `black/__init__.py:1290` |

##### `format_file_contents` (`black/__init__.py:1054`)

|     % |     Size | Allocations | Callee                            | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 63.8% | 36.1 MiB |          95 | `format_str`                      | `black/__init__.py:1189` |
| 36.2% | 20.5 MiB |      21,062 | `check_stability_and_equivalence` | `black/__init__.py:1037` |

##### `_format_str_once` (`black/__init__.py:1236`)

|     % |     Size | Allocations | Callee                   | Location                 |
| ----: | -------: | ----------: | ------------------------ | ------------------------ |
| 68.7% | 35.4 MiB |      21,086 | `visit`                  | `black/nodes.py:163`     |
| 23.4% | 12.1 MiB |          32 | `lib2to3_parse`          | `black/parsing.py:55`    |
|  7.8% | 4.05 MiB |          19 | `transform_line`         | `black/linegen.py:601`   |
| <0.1% | 19.9 KiB |           3 | `normalize_fmt_off`      | `black/comments.py:168`  |
| <0.1% | 3.49 KiB |           1 | `detect_target_versions` | `black/__init__.py:1464` |

##### `format_str` (`black/__init__.py:1189`)

|      % |     Size | Allocations | Callee             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 36.1 MiB |          94 | `_format_str_once` | `black/__init__.py:1236` |

##### `visit` (`black/nodes.py:163`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 35.4 MiB |      21,084 | `visit_default`     | `black/linegen.py:134` |
|  99.2% | 35.2 MiB |      20,713 | `visit_stmt`        | `black/linegen.py:199` |
|  92.4% | 32.7 MiB |      20,144 | `visit_suite`       | `black/linegen.py:288` |
|  89.8% | 31.8 MiB |      20,269 | `visit_funcdef`     | `black/linegen.py:254` |
|  75.7% | 26.8 MiB |      13,405 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/nodes.py:187`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 35.4 MiB |      21,084 | `visit` | `black/nodes.py:163` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 35.4 MiB |      21,084 | `visit_default`     | `black/nodes.py:187`   |
|  46.0% | 16.3 MiB |      20,881 | `append`            | `black/lines.py:63`    |
|  19.8% |    7 MiB |           7 | `generate_comments` | `black/comments.py:52` |

##### `visit_stmt` (`black/linegen.py:199`)

|      % |     Size | Allocations | Callee                       | Location                |
| -----: | -------: | ----------: | ---------------------------- | ----------------------- |
| 100.0% | 35.2 MiB |      20,711 | `visit`                      | `black/nodes.py:163`    |
|  14.2% |    5 MiB |           6 | `normalize_invisible_parens` | `black/linegen.py:1328` |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 32.7 MiB |      20,144 | `visit_default` | `black/linegen.py:134` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 31.8 MiB |      20,269 | `visit` | `black/nodes.py:163` |

##### `visit_simple_stmt` (`black/linegen.py:295`)

|     % |     Size | Allocations | Callee          | Location               |
| ----: | -------: | ----------: | --------------- | ---------------------- |
| 96.3% | 25.8 MiB |      13,404 | `visit_default` | `black/linegen.py:134` |
|  3.7% |    1 MiB |           1 | `is_arith_like` | `black/nodes.py:548`   |

##### `check_stability_and_equivalence` (`black/__init__.py:1037`)

|     % |     Size | Allocations | Callee              | Location                 |
| ----: | -------: | ----------: | ------------------- | ------------------------ |
| 75.6% | 15.5 MiB |      21,054 | `assert_stable`     | `black/__init__.py:1557` |
| 24.4% | 5.01 MiB |           7 | `assert_equivalent` | `black/__init__.py:1524` |

##### `visit_power` (`black/linegen.py:341`)

|     % |     Size | Allocations | Callee          | Location               |
| ----: | -------: | ----------: | --------------- | ---------------------- |
| 94.1% | 15.9 MiB |      10,806 | `visit_default` | `black/linegen.py:134` |

##### `append` (`black/lines.py:63`)

|     % |     Size | Allocations | Callee       | Location               |
| ----: | -------: | ----------: | ------------ | ---------------------- |
| 93.5% | 15.2 MiB |      20,787 | `mark`       | `black/brackets.py:70` |
|  6.5% | 1.05 MiB |          90 | `whitespace` | `black/nodes.py:194`   |

##### `assert_stable` (`black/__init__.py:1557`)

|      % |     Size | Allocations | Callee             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 15.5 MiB |      21,054 | `_format_str_once` | `black/__init__.py:1236` |

##### `_get_module_details` (`<frozen runpy>:105`)

|     % |     Size | Allocations | Callee                | Location                             |
| ----: | -------: | ----------: | --------------------- | ------------------------------------ |
| 99.9% | 4.26 MiB |       1,280 | `_find_and_load`      | `<frozen importlib._bootstrap>:1167` |
| 99.9% | 4.26 MiB |       1,280 | `_get_module_details` | `<frozen runpy>:105`                 |
|  0.1% | 5.66 KiB |           6 | `find_spec`           | `<frozen importlib.util>:73`         |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

|      % |     Size | Allocations | Callee                    | Location                             |
| -----: | -------: | ----------: | ------------------------- | ------------------------------------ |
| 100.0% | 4.26 MiB |       1,278 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |
|  <0.1% |    560 B |           1 | `__enter__`               | `<frozen importlib._bootstrap>:169`  |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

|      % |     Size | Allocations | Callee                      | Location                             |
| -----: | -------: | ----------: | --------------------------- | ------------------------------------ |
| 100.0% | 4.26 MiB |       1,277 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`  |
|   0.9% | 37.2 KiB |          47 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`  |
|   0.2% | 7.48 KiB |           4 | `_find_spec`                | `<frozen importlib._bootstrap>:1056` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

|      % |     Size | Allocations | Callee             | Location                                     |
| -----: | -------: | ----------: | ------------------ | -------------------------------------------- |
| 100.0% | 4.26 MiB |       1,275 | `exec_module`      | `<frozen importlib._bootstrap_external>:934` |
|  <0.1% | 1.83 KiB |           2 | `module_from_spec` | `<frozen importlib._bootstrap>:566`          |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

|     % |     Size | Allocations | Callee                      | Location                                      |
| ----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 99.3% | 4.23 MiB |       1,245 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
| 12.9% |  560 KiB |         606 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Allocations | Callee           | Location                                                 |
| -----: | -------: | ----------: | ---------------- | -------------------------------------------------------- |
| 100.0% | 4.23 MiB |       1,245 | `<module>`       | `black/__init__.py:1`                                    |
|  31.1% | 1.31 MiB |         329 | `_find_and_load` | `<frozen importlib._bootstrap>:1167`                     |
|  30.9% | 1.31 MiB |         304 | `<module>`       | `/venv/lib/python3.11/site-packages/click/__init__.py:1` |
|  30.4% | 1.28 MiB |         258 | `<module>`       | `black/comments.py:1`                                    |
|  30.0% | 1.27 MiB |         244 | `<module>`       | `black/nodes.py:1`                                       |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/__init__.py:1`)

|     % |    Size | Allocations | Callee           | Location                             |
| ----: | ------: | ----------: | ---------------- | ------------------------------------ |
| 99.8% | 1.3 MiB |         303 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1209`)

|      % |    Size | Allocations | Callee                      | Location                            |
| -----: | ------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 1.3 MiB |         318 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/core.py:1`)

|     % |     Size | Allocations | Callee             | Location                                               |
| ----: | -------: | ----------: | ------------------ | ------------------------------------------------------ |
| 85.5% | 1.05 MiB |          53 | `_find_and_load`   | `<frozen importlib._bootstrap>:1167`                   |
| 11.1% |  140 KiB |         145 | `_handle_fromlist` | `<frozen importlib._bootstrap>:1209`                   |
|  1.1% | 13.9 KiB |           9 | `__new__`          | `<frozen abc>:105`                                     |
|  0.2% | 2.49 KiB |           3 | `__new__`          | `/usr/lib/python3.11/enum.py:488`                      |
|  0.1% |    768 B |           1 | `Context`          | `/venv/lib/python3.11/site-packages/click/core.py:204` |

##### `compile` (`/usr/lib/python3.11/re/__init__.py:225`)

|     % |     Size | Allocations | Callee     | Location                                 |
| ----: | -------: | ----------: | ---------- | ---------------------------------------- |
| 99.9% | 1.05 MiB |          25 | `_compile` | `/usr/lib/python3.11/re/__init__.py:272` |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py:272`)

|     % |     Size | Allocations | Callee    | Location                                  |
| ----: | -------: | ----------: | --------- | ----------------------------------------- |
| 99.9% | 1.05 MiB |          24 | `compile` | `/usr/lib/python3.11/re/_compiler.py:738` |
|  0.1% |    698 B |           1 | `__and__` | `/usr/lib/python3.11/enum.py:1504`        |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|     % |     Size | Allocations | Callee  | Location                                  |
| ----: | -------: | ----------: | ------- | ----------------------------------------- |
| 97.0% | 1.01 MiB |           6 | `parse` | `/usr/lib/python3.11/re/_parser.py:970`   |
|  0.9% |  9.5 KiB |           6 | `_code` | `/usr/lib/python3.11/re/_compiler.py:571` |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/formatting.py:1`)

|     % |     Size | Allocations | Callee           | Location                             |
| ----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 99.8% | 1.02 MiB |          22 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `parse` (`/usr/lib/python3.11/re/_parser.py:970`)

|     % |     Size | Allocations | Callee       | Location                                |
| ----: | -------: | ----------: | ------------ | --------------------------------------- |
| 99.9% | 1.01 MiB |           5 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py:447` |

##### `wrap` (`/usr/lib/python3.11/dataclasses.py:1209`)

|     % |     Size | Allocations | Callee           | Location                                 |
| ----: | -------: | ----------: | ---------------- | ---------------------------------------- |
| 99.7% | 1.01 MiB |          14 | `_process_class` | `/usr/lib/python3.11/dataclasses.py:884` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|     % |     Size | Allocations | Callee   | Location                                |
| ----: | -------: | ----------: | -------- | --------------------------------------- |
| 99.2% | 1.01 MiB |           4 | `_parse` | `/usr/lib/python3.11/re/_parser.py:507` |

##### `_process_class` (`/usr/lib/python3.11/dataclasses.py:884`)

|     % |    Size | Allocations | Callee               | Location                                 |
| ----: | ------: | ----------: | -------------------- | ---------------------------------------- |
| 98.9% |   1 MiB |           1 | `_init_fn`           | `/usr/lib/python3.11/dataclasses.py:528` |
|  0.6% | 6.5 KiB |           5 | `signature`          | `/usr/lib/python3.11/inspect.py:3277`    |
|  0.1% | 1.5 KiB |           2 | `_set_new_attribute` | `/usr/lib/python3.11/dataclasses.py:827` |
| <0.1% |   341 B |           1 | `_cmp_fn`            | `/usr/lib/python3.11/dataclasses.py:624` |
| <0.1% |   336 B |           1 | `_repr_fn`           | `/usr/lib/python3.11/dataclasses.py:588` |

##### `dataclass` (`/usr/lib/python3.11/dataclasses.py:1192`)

|      % |     Size | Allocations | Callee | Location                                  |
| -----: | -------: | ----------: | ------ | ----------------------------------------- |
| 100.0% | 1.01 MiB |          11 | `wrap` | `/usr/lib/python3.11/dataclasses.py:1209` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|     % |  Size | Allocations | Callee       | Location                                |
| ----: | ----: | ----------: | ------------ | --------------------------------------- |
| 99.6% | 1 MiB |           2 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py:447` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/specifiers.py:1`)

|     % |     Size | Allocations | Callee           | Location                                                         |
| ----: | -------: | ----------: | ---------------- | ---------------------------------------------------------------- |
| 87.6% |  120 KiB |         129 | `_find_and_load` | `<frozen importlib._bootstrap>:1167`                             |
|  6.2% |  8.5 KiB |           2 | `Specifier`      | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:220` |
|  4.4% | 6.07 KiB |           7 | `__new__`        | `<frozen abc>:105`                                               |

##### `<module>` (`/venv/lib/python3.11/site-packages/click/types.py:1`)

|     % |     Size | Allocations | Callee           | Location                             |
| ----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 53.0% | 66.2 KiB |          58 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |
| 30.6% | 38.2 KiB |          45 | `__new__`        | `<frozen abc>:105`                   |
| 12.6% | 15.7 KiB |          19 | `__new__`        | `/usr/lib/python3.11/typing.py:2891` |
|  1.1% | 1.42 KiB |           2 | `inner`          | `/usr/lib/python3.11/typing.py:338`  |
|  0.4% |    542 B |           1 | `__init__`       | `/usr/lib/python3.11/typing.py:992`  |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/__init__.py:1`)

|     % |     Size | Allocations | Callee           | Location                             |
| ----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 99.2% | 93.1 KiB |         118 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/gitignore.py:1`)

|     % |   Size | Allocations | Callee           | Location                             |
| ----: | -----: | ----------: | ---------------- | ------------------------------------ |
| 97.3% | 89 KiB |         112 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/_backends/agg.py:1`)

|     % |     Size | Allocations | Callee           | Location                             |
| ----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 98.9% | 64.8 KiB |          83 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/utils.py:1`)

|     % |   Size | Allocations | Callee           | Location                             |
| ----: | -----: | ----------: | ---------------- | ------------------------------------ |
| 94.4% | 60 KiB |          67 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `decorator` (`/venv/lib/python3.11/site-packages/click/decorators.py:373`)

|     % |     Size | Allocations | Callee     | Location                                                |
| ----: | -------: | ----------: | ---------- | ------------------------------------------------------- |
| 96.2% | 45.5 KiB |          32 | `__init__` | `/venv/lib/python3.11/site-packages/click/core.py:2883` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/_backends/hyperscan/gitignore.py:1`)

|     % |     Size | Allocations | Callee           | Location                             |
| ----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 94.8% | 44.5 KiB |          56 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `__init__` (`/venv/lib/python3.11/site-packages/click/core.py:2883`)

|    % |     Size | Allocations | Callee     | Location                                                |
| ---: | -------: | ----------: | ---------- | ------------------------------------------------------- |
| 2.6% | 1.17 KiB |           1 | `__init__` | `/venv/lib/python3.11/site-packages/click/core.py:2237` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/_ranges.py:1`)

|     % |     Size | Allocations | Callee           | Location                             |
| ----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 80.6% | 32.9 KiB |          35 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |
|  4.1% | 1.69 KiB |           2 | `__new__`        | `/usr/lib/python3.11/enum.py:488`    |

## Hottest call stacks

Call stacks ranked by bytes never freed in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>:201`) ← `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|    % |     Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---: | -------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9.9% |    6 MiB |           6 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `shift` (`blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 4.9% | 3.01 MiB |           4 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 3.3% |    2 MiB |           5 | `transform_line` (`black/linegen.py:601`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.7% | 1.01 MiB |           2 | `__next__` (`blib2to3/pgen2/driver.py:80`) ← `parse_tokens` (114) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.7% | 1.01 MiB |          11 | `<module>` (`/venv/lib/python3.11/site-packages/click/parser.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/formatting.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/core.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.6% |    1 MiB |           2 | `run_transformer` (`black/linegen.py:1755`) ← `transform_line` (601) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.6% |    1 MiB |           1 | `_stringify_ast` (`black/parsing.py:174`) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.6% |    1 MiB |           1 | `_stringify_ast` (`black/parsing.py:174`) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.6% |    1 MiB |           1 | `run_transformer` (`black/linegen.py:1755`) ← `transform_line` (601) ← `run_transformer` (1755) ← `transform_line` (601) ← `run_transformer` (1755) ← `transform_line` (601) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.6% |    1 MiB |           1 | `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_factor` (379) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.6% |    1 MiB |           1 | `sub_twice` (`black/strings.py:28`) ← `normalize_string_quotes` (169) ← `visit_STRING` (`black/linegen.py:413`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.6% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.6% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `prefix` (480) ← `wrap_in_parentheses` (`black/nodes.py:935`) ← `normalize_invisible_parens` (`black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.6% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                        |
| 1.6% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                         |
| 1.6% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                              |
| 1.6% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `prefix` (329) ← `prefix` (329) ← `wrap_in_parentheses` (`black/nodes.py:935`) ← `normalize_invisible_parens` (`black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.6% |    1 MiB |           1 | `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.6% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                       |
| 1.6% |    1 MiB |           1 | `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91) |

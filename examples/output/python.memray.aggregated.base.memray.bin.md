# Peak memory profile

Held 78.6 MiB over 22,707 allocations (3.54 KiB per allocation).

| Category         |     % |     Size | Allocations |
| ---------------- | ----: | -------: | ----------: |
| Ours             | 81.6% | 64.2 MiB |      21,445 |
| Standard library | 18.1% | 14.2 MiB |       1,030 |
| Third-party      |  0.3% |  238 KiB |         232 |

## Hottest functions

### Self size

Functions ranked by bytes held at peak memory directly in the function body, excluding callees.

|     % |     Size | Allocations | Function                               | Location                                     |
| ----: | -------: | ----------: | -------------------------------------- | -------------------------------------------- |
| 20.6% | 16.2 MiB |      20,788 | `mark`                                 | `black/brackets.py:70`                       |
| 12.9% | 10.1 MiB |         143 | `parse`                                | `/usr/lib/python3.11/ast.py:33`              |
|  9.0% |  7.1 MiB |           4 | `assert_equivalent`                    | `black/__init__.py:1524`                     |
|  8.9% |    7 MiB |           7 | `changed`                              | `blib2to3/pytree.py:171`                     |
|  6.4% | 5.05 MiB |          61 | `_stringify_ast`                       | `black/parsing.py:174`                       |
|  6.4% |    5 MiB |           5 | `__new__`                              | `blib2to3/pytree.py:81`                      |
|  5.1% |    4 MiB |           4 | `push`                                 | `blib2to3/pgen2/parse.py:386`                |
|  3.8% |    3 MiB |           7 | `visit`                                | `black/nodes.py:163`                         |
|  3.2% | 2.55 MiB |         619 | `_compile_bytecode`                    | `<frozen importlib._bootstrap_external>:727` |
|  2.5% |    2 MiB |           2 | `generate_comments`                    | `black/comments.py:52`                       |
|  2.5% |    2 MiB |           2 | `generate_tokens`                      | `blib2to3/pgen2/tokenize.py:565`             |
|  1.5% | 1.14 MiB |         196 | `update_sibling_maps`                  | `blib2to3/pytree.py:369`                     |
|  1.3% |    1 MiB |           5 | `__init__`                             | `blib2to3/pytree.py:248`                     |
|  1.3% |    1 MiB |           2 | `visit_default`                        | `black/linegen.py:134`                       |
|  1.3% |    1 MiB |           1 | `normalize_trailing_prefix`            | `black/comments.py:127`                      |
|  1.3% |    1 MiB |           1 | `contains_uncollapsable_type_comments` | `black/lines.py:276`                         |
|  1.3% |    1 MiB |           1 | `<listcomp>`                           | `black/parsing.py:154`                       |
|  1.3% |    1 MiB |           1 | `_addtoken`                            | `blib2to3/pgen2/parse.py:290`                |
|  1.3% |    1 MiB |           1 | `__init__`                             | `<string>:2`                                 |
|  1.3% |    1 MiB |           1 | `prefix`                               | `blib2to3/pytree.py:480`                     |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                               | Location                         |
| ----: | -------: | ----------: | -------------------------------------- | -------------------------------- |
| 20.6% | 16.2 MiB |      20,788 | `mark`                                 | `black/brackets.py:70`           |
|  9.0% |  7.1 MiB |           4 | `assert_equivalent`                    | `black/__init__.py:1524`         |
|  8.9% |    7 MiB |           7 | `changed`                              | `blib2to3/pytree.py:171`         |
|  6.4% | 5.05 MiB |          61 | `_stringify_ast`                       | `black/parsing.py:174`           |
|  6.4% |    5 MiB |           5 | `__new__`                              | `blib2to3/pytree.py:81`          |
|  5.1% |    4 MiB |           4 | `push`                                 | `blib2to3/pgen2/parse.py:386`    |
|  3.8% |    3 MiB |           7 | `visit`                                | `black/nodes.py:163`             |
|  2.5% |    2 MiB |           2 | `generate_comments`                    | `black/comments.py:52`           |
|  2.5% |    2 MiB |           2 | `generate_tokens`                      | `blib2to3/pgen2/tokenize.py:565` |
|  1.5% | 1.14 MiB |         196 | `update_sibling_maps`                  | `blib2to3/pytree.py:369`         |
|  1.3% |    1 MiB |           5 | `__init__`                             | `blib2to3/pytree.py:248`         |
|  1.3% |    1 MiB |           2 | `visit_default`                        | `black/linegen.py:134`           |
|  1.3% |    1 MiB |           1 | `normalize_trailing_prefix`            | `black/comments.py:127`          |
|  1.3% |    1 MiB |           1 | `contains_uncollapsable_type_comments` | `black/lines.py:276`             |
|  1.3% |    1 MiB |           1 | `<listcomp>`                           | `black/parsing.py:154`           |
|  1.3% |    1 MiB |           1 | `_addtoken`                            | `blib2to3/pgen2/parse.py:290`    |
|  1.3% |    1 MiB |           1 | `__init__`                             | `<string>:2`                     |
|  1.3% |    1 MiB |           1 | `prefix`                               | `blib2to3/pytree.py:480`         |
|  1.3% |    1 MiB |           1 | `pop`                                  | `blib2to3/pgen2/parse.py:398`    |
|  1.3% |    1 MiB |           1 | `hug_power_op`                         | `black/trans.py:85`              |

##### Standard library

|     % |     Size | Allocations | Function                   | Location                                          |
| ----: | -------: | ----------: | -------------------------- | ------------------------------------------------- |
| 12.9% | 10.1 MiB |         143 | `parse`                    | `/usr/lib/python3.11/ast.py:33`                   |
|  3.2% | 2.55 MiB |         619 | `_compile_bytecode`        | `<frozen importlib._bootstrap_external>:727`      |
|  1.3% |    1 MiB |           1 | `__getitem__`              | `/usr/lib/python3.11/re/_parser.py:162`           |
|  0.3% |  222 KiB |           1 | `decode`                   | `<frozen codecs>:319`                             |
|  0.1% |  113 KiB |          82 | `__new__`                  | `<frozen abc>:105`                                |
| <0.1% | 24.1 KiB |          27 | `__new__`                  | `/usr/lib/python3.11/enum.py:488`                 |
| <0.1% | 22.6 KiB |          12 | `compile`                  | `/usr/lib/python3.11/re/_compiler.py:738`         |
| <0.1% | 19.8 KiB |          12 | `<module>`                 | `/usr/lib/python3.11/tomllib/_parser.py:1`        |
| <0.1% | 17.4 KiB |          21 | `__new__`                  | `/usr/lib/python3.11/typing.py:2891`              |
| <0.1% |   12 KiB |           3 | `inner`                    | `/usr/lib/python3.11/typing.py:338`               |
| <0.1% |    8 KiB |           4 | `_fill_cache`              | `<frozen importlib._bootstrap_external>:1655`     |
| <0.1% | 7.97 KiB |           1 | `_parse_sub`               | `/usr/lib/python3.11/re/_parser.py:447`           |
| <0.1% | 6.73 KiB |           8 | `__setattr__`              | `/usr/lib/python3.11/enum.py:831`                 |
| <0.1% | 5.63 KiB |           6 | `namedtuple`               | `/usr/lib/python3.11/collections/__init__.py:348` |
| <0.1% | 5.61 KiB |           3 | `_parse`                   | `/usr/lib/python3.11/re/_parser.py:507`           |
| <0.1% | 5.32 KiB |           2 | `_code`                    | `/usr/lib/python3.11/re/_compiler.py:571`         |
| <0.1% | 4.73 KiB |           6 | `<module>`                 | `/usr/lib/python3.11/pkgutil.py:1`                |
| <0.1% | 2.85 KiB |           1 | `wrap`                     | `/usr/lib/python3.11/dataclasses.py:1209`         |
| <0.1% | 2.85 KiB |           4 | `_process_class`           | `/usr/lib/python3.11/dataclasses.py:884`          |
| <0.1% | 2.56 KiB |           3 | `_signature_from_function` | `/usr/lib/python3.11/inspect.py:2331`             |

#### Lines

Lines ranked by contribution to each function's self size.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Allocations | Location                |
| -----: | -------: | ----------: | ----------------------- |
| 100.0% | 16.2 MiB |      20,787 | `black/brackets.py:112` |
|  <0.1% | 1.49 KiB |           1 | `black/brackets.py:114` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Location                        |
| -----: | -------: | ----------: | ------------------------------- |
| 100.0% | 10.1 MiB |         143 | `/usr/lib/python3.11/ast.py:50` |

##### `assert_equivalent` (`black/__init__.py:1524`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 55.4% | 3.93 MiB |           2 | `black/__init__.py:1547` |
| 44.6% | 3.17 MiB |           2 | `black/__init__.py:1546` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Allocations | Location                 |
| ----: | ----: | ----------: | ------------------------ |
| 57.1% | 4 MiB |           4 | `blib2to3/pytree.py:176` |
| 42.9% | 3 MiB |           3 | `blib2to3/pytree.py:175` |

##### `_stringify_ast` (`black/parsing.py:174`)

|     % |     Size | Allocations | Location               |
| ----: | -------: | ----------: | ---------------------- |
| 40.5% | 2.05 MiB |          58 | `black/parsing.py:240` |
| 39.6% |    2 MiB |           2 | `black/parsing.py:185` |
| 19.8% |    1 MiB |           1 | `black/parsing.py:244` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 5 MiB |           5 | `blib2to3/pytree.py:84` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 4 MiB |           4 | `blib2to3/pgen2/parse.py:394` |

##### `visit` (`black/nodes.py:163`)

|     % |     Size | Allocations | Location             |
| ----: | -------: | ----------: | -------------------- |
| 99.9% |    3 MiB |           4 | `black/nodes.py:185` |
|  0.1% | 2.68 KiB |           3 | `black/nodes.py:183` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Location                                     |
| -----: | -------: | ----------: | -------------------------------------------- |
| 100.0% | 2.55 MiB |         619 | `<frozen importlib._bootstrap_external>:729` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 2 MiB |           2 | `black/comments.py:76` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|     % |  Size | Allocations | Location                         |
| ----: | ----: | ----------: | -------------------------------- |
| 50.0% | 1 MiB |           1 | `blib2to3/pgen2/tokenize.py:972` |
| 50.0% | 1 MiB |           1 | `blib2to3/pgen2/tokenize.py:614` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 87.6% |    1 MiB |           1 | `blib2to3/pytree.py:371` |
|  6.0% | 70.3 KiB |          93 | `blib2to3/pytree.py:376` |
|  6.0% | 70.3 KiB |          93 | `blib2to3/pytree.py:377` |
|  0.4% | 4.99 KiB |           9 | `blib2to3/pytree.py:379` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           5 | `blib2to3/pytree.py:266` |

##### `visit_default` (`black/linegen.py:134`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 99.9% | 1 MiB |           1 | `black/linegen.py:158` |
|  0.1% | 702 B |           1 | `black/linegen.py:144` |

##### `normalize_trailing_prefix` (`black/comments.py:127`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 1 MiB |           1 | `black/comments.py:136` |

##### `contains_uncollapsable_type_comments` (`black/lines.py:276`)

|      % |  Size | Allocations | Location             |
| -----: | ----: | ----------: | -------------------- |
| 100.0% | 1 MiB |           1 | `black/lines.py:280` |

##### `<listcomp>` (`black/parsing.py:154`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 1 MiB |           1 | `black/parsing.py:154` |

##### `_addtoken` (`blib2to3/pgen2/parse.py:290`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:314` |

##### `__init__` (`<string>:2`)

|      % |  Size | Allocations | Location     |
| -----: | ----: | ----------: | ------------ |
| 100.0% | 1 MiB |           1 | `<string>:5` |

##### `prefix` (`blib2to3/pytree.py:480`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:482` |

##### `pop` (`blib2to3/pgen2/parse.py:398`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:408` |

##### `hug_power_op` (`black/trans.py:85`)

|      % |  Size | Allocations | Location            |
| -----: | ----: | ----------: | ------------------- |
| 100.0% | 1 MiB |           1 | `black/trans.py:95` |

##### `__getitem__` (`/usr/lib/python3.11/re/_parser.py:162`)

|      % |  Size | Allocations | Location                                |
| -----: | ----: | ----------: | --------------------------------------- |
| 100.0% | 1 MiB |           1 | `/usr/lib/python3.11/re/_parser.py:164` |

##### `decode` (`<frozen codecs>:319`)

|      % |    Size | Allocations | Location              |
| -----: | ------: | ----------: | --------------------- |
| 100.0% | 222 KiB |           1 | `<frozen codecs>:322` |

##### `__new__` (`<frozen abc>:105`)

|     % |    Size | Allocations | Location           |
| ----: | ------: | ----------: | ------------------ |
| 99.3% | 113 KiB |          81 | `<frozen abc>:106` |
|  0.7% |   768 B |           1 | `<frozen abc>:107` |

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
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:38` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:22` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:36` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:26` |

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
| 35.7% | 1.69 KiB |           2 | `/usr/lib/python3.11/pkgutil.py:269` |
| 35.7% | 1.69 KiB |           2 | `/usr/lib/python3.11/pkgutil.py:194` |
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

|     % |     Size | Allocations | Caller                           | Location                |
| ----: | -------: | ----------: | -------------------------------- | ----------------------- |
| 93.8% | 15.2 MiB |      20,787 | `append`                         | `black/lines.py:63`     |
|  6.2% |    1 MiB |           1 | `max_delimiter_priority_in_atom` | `black/brackets.py:328` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Caller                  | Location               |
| -----: | -------: | ----------: | ----------------------- | ---------------------- |
| 100.0% | 10.1 MiB |         143 | `_parse_single_version` | `black/parsing.py:117` |

##### `assert_equivalent` (`black/__init__.py:1524`)

|      % |    Size | Allocations | Caller                            | Location                 |
| -----: | ------: | ----------: | --------------------------------- | ------------------------ |
| 100.0% | 7.1 MiB |           4 | `check_stability_and_equivalence` | `black/__init__.py:1037` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Allocations | Caller    | Location                 |
| ----: | ----: | ----------: | --------- | ------------------------ |
| 71.4% | 5 MiB |           5 | `changed` | `blib2to3/pytree.py:171` |
| 28.6% | 2 MiB |           2 | `prefix`  | `blib2to3/pytree.py:480` |

##### `_stringify_ast` (`black/parsing.py:174`)

|      % |     Size | Allocations | Caller                           | Location               |
| -----: | -------: | ----------: | -------------------------------- | ---------------------- |
| 100.0% | 5.05 MiB |          61 | `_stringify_ast_with_new_parent` | `black/parsing.py:166` |

##### `__new__` (`blib2to3/pytree.py:81`)

|     % |  Size | Allocations | Caller    | Location                 |
| ----: | ----: | ----------: | --------- | ------------------------ |
| 80.0% | 4 MiB |           4 | `convert` | `blib2to3/pytree.py:486` |
| 20.0% | 1 MiB |           1 | `clone`   | `blib2to3/pytree.py:452` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 4 MiB |           4 | `_addtoken` | `blib2to3/pgen2/parse.py:290` |

##### `visit` (`black/nodes.py:163`)

|     % |  Size | Allocations | Caller             | Location                 |
| ----: | ----: | ----------: | ------------------ | ------------------------ |
| 66.7% | 2 MiB |           5 | `visit_default`    | `black/nodes.py:187`     |
| 33.3% | 1 MiB |           1 | `visit_stmt`       | `black/linegen.py:199`   |
| <0.1% | 690 B |           1 | `_format_str_once` | `black/__init__.py:1236` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Caller     | Location                                      |
| -----: | -------: | ----------: | ---------- | --------------------------------------------- |
| 100.0% | 2.55 MiB |         619 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Allocations | Caller          | Location               |
| -----: | ----: | ----------: | --------------- | ---------------------- |
| 100.0% | 2 MiB |           2 | `visit_default` | `black/linegen.py:134` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|      % |  Size | Allocations | Caller     | Location                      |
| -----: | ----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 2 MiB |           2 | `__next__` | `blib2to3/pgen2/driver.py:80` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|      % |     Size | Allocations | Caller         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 1.14 MiB |         196 | `prev_sibling` | `blib2to3/pytree.py:207` |

##### `__init__` (`blib2to3/pytree.py:248`)

|     % |     Size | Allocations | Caller                | Location                 |
| ----: | -------: | ----------: | --------------------- | ------------------------ |
| 99.7% |    1 MiB |           1 | `wrap_in_parentheses` | `black/nodes.py:935`     |
|  0.3% | 3.03 KiB |           4 | `convert`             | `blib2to3/pytree.py:486` |

##### `visit_default` (`black/linegen.py:134`)

|     % |  Size | Allocations | Caller         | Location               |
| ----: | ----: | ----------: | -------------- | ---------------------- |
| 99.9% | 1 MiB |           1 | `visit`        | `black/nodes.py:163`   |
|  0.1% | 702 B |           1 | `visit_STRING` | `black/linegen.py:413` |

##### `normalize_trailing_prefix` (`black/comments.py:127`)

|      % |  Size | Allocations | Caller              | Location               |
| -----: | ----: | ----------: | ------------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `generate_comments` | `black/comments.py:52` |

##### `contains_uncollapsable_type_comments` (`black/lines.py:276`)

|      % |  Size | Allocations | Caller           | Location               |
| -----: | ----: | ----------: | ---------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `transform_line` | `black/linegen.py:601` |

##### `<listcomp>` (`black/parsing.py:154`)

|      % |  Size | Allocations | Caller       | Location               |
| -----: | ----: | ----------: | ------------ | ---------------------- |
| 100.0% | 1 MiB |           1 | `_normalize` | `black/parsing.py:151` |

##### `_addtoken` (`blib2to3/pgen2/parse.py:290`)

|      % |  Size | Allocations | Caller     | Location                      |
| -----: | ----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `addtoken` | `blib2to3/pgen2/parse.py:242` |

##### `__init__` (`<string>:2`)

|      % |  Size | Allocations | Caller     | Location     |
| -----: | ----: | ----------: | ---------- | ------------ |
| 100.0% | 1 MiB |           1 | `__init__` | `<string>:2` |

##### `prefix` (`blib2to3/pytree.py:480`)

|      % |  Size | Allocations | Caller   | Location            |
| -----: | ----: | ----------: | -------- | ------------------- |
| 100.0% | 1 MiB |           1 | `append` | `black/lines.py:63` |

##### `pop` (`blib2to3/pgen2/parse.py:398`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `_addtoken` | `blib2to3/pgen2/parse.py:290` |

##### `hug_power_op` (`black/trans.py:85`)

|      % |  Size | Allocations | Caller            | Location                |
| -----: | ----: | ----------: | ----------------- | ----------------------- |
| 100.0% | 1 MiB |           1 | `run_transformer` | `black/linegen.py:1755` |

##### `__getitem__` (`/usr/lib/python3.11/re/_parser.py:162`)

|      % |  Size | Allocations | Caller   | Location                                |
| -----: | ----: | ----------: | -------- | --------------------------------------- |
| 100.0% | 1 MiB |           1 | `_parse` | `/usr/lib/python3.11/re/_parser.py:507` |

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

Functions ranked by total bytes held at peak memory in the function and all its callees.

|      % |     Size | Allocations | Function               | Location                                                       |
| -----: | -------: | ----------: | ---------------------- | -------------------------------------------------------------- |
| 100.0% | 78.6 MiB |      22,707 | `_run_tracker`         | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40` |
| 100.0% | 78.6 MiB |      22,706 | `run_module`           | `<frozen runpy>:201`                                           |
|  94.5% | 74.3 MiB |      21,394 | `__call__`             | `/venv/lib/python3.11/site-packages/click/core.py:1629`        |
|  94.5% | 74.3 MiB |      21,394 | `patched_main`         | `black/__init__.py:1594`                                       |
|  94.5% | 74.3 MiB |      21,394 | `<module>`             | `black/__main__.py:1`                                          |
|  94.5% | 74.3 MiB |      21,394 | `_run_code`            | `<frozen runpy>:65`                                            |
|  94.5% | 74.3 MiB |      21,394 | `_run_module_code`     | `<frozen runpy>:91`                                            |
|  94.5% | 74.3 MiB |      21,393 | `main`                 | `/venv/lib/python3.11/site-packages/click/core.py:1484`        |
|  94.5% | 74.2 MiB |      21,373 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:1401`        |
|  94.5% | 74.2 MiB |      21,370 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:857`         |
|  94.5% | 74.2 MiB |      21,368 | `new_func`             | `/venv/lib/python3.11/site-packages/click/decorators.py:33`    |
|  94.5% | 74.2 MiB |      21,365 | `main`                 | `black/__init__.py:244`                                        |
|  94.5% | 74.2 MiB |      21,361 | `reformat_one`         | `black/__init__.py:860`                                        |
|  94.5% | 74.2 MiB |      21,358 | `format_file_in_place` | `black/__init__.py:917`                                        |
|  94.2% |   74 MiB |      21,355 | `format_file_contents` | `black/__init__.py:1054`                                       |
|  64.6% | 50.8 MiB |      21,145 | `format_str`           | `black/__init__.py:1189`                                       |
|  64.6% | 50.8 MiB |      21,144 | `_format_str_once`     | `black/__init__.py:1236`                                       |
|  42.6% | 33.4 MiB |      21,084 | `visit`                | `black/nodes.py:163`                                           |
|  42.6% | 33.4 MiB |      21,082 | `visit_default`        | `black/linegen.py:134`                                         |
|  42.6% | 33.4 MiB |      21,082 | `visit_default`        | `black/nodes.py:187`                                           |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                          | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 94.5% | 74.3 MiB |      21,394 | `patched_main`                    | `black/__init__.py:1594` |
| 94.5% | 74.3 MiB |      21,394 | `<module>`                        | `black/__main__.py:1`    |
| 94.5% | 74.2 MiB |      21,365 | `main`                            | `black/__init__.py:244`  |
| 94.5% | 74.2 MiB |      21,361 | `reformat_one`                    | `black/__init__.py:860`  |
| 94.5% | 74.2 MiB |      21,358 | `format_file_in_place`            | `black/__init__.py:917`  |
| 94.2% |   74 MiB |      21,355 | `format_file_contents`            | `black/__init__.py:1054` |
| 64.6% | 50.8 MiB |      21,145 | `format_str`                      | `black/__init__.py:1189` |
| 64.6% | 50.8 MiB |      21,144 | `_format_str_once`                | `black/__init__.py:1236` |
| 42.6% | 33.4 MiB |      21,084 | `visit`                           | `black/nodes.py:163`     |
| 42.6% | 33.4 MiB |      21,082 | `visit_default`                   | `black/linegen.py:134`   |
| 42.6% | 33.4 MiB |      21,082 | `visit_default`                   | `black/nodes.py:187`     |
| 42.2% | 33.2 MiB |      20,711 | `visit_stmt`                      | `black/linegen.py:199`   |
| 41.8% | 32.8 MiB |      20,270 | `visit_funcdef`                   | `black/linegen.py:254`   |
| 41.7% | 32.7 MiB |      20,144 | `visit_suite`                     | `black/linegen.py:288`   |
| 30.3% | 23.8 MiB |      13,402 | `visit_simple_stmt`               | `black/linegen.py:295`   |
| 29.6% | 23.3 MiB |         210 | `check_stability_and_equivalence` | `black/__init__.py:1037` |
| 29.6% | 23.3 MiB |         209 | `assert_equivalent`               | `black/__init__.py:1524` |
| 22.8% | 17.9 MiB |      10,809 | `visit_power`                     | `black/linegen.py:341`   |
| 22.0% | 17.3 MiB |      20,882 | `append`                          | `black/lines.py:63`      |
| 20.6% | 16.2 MiB |      20,788 | `mark`                            | `black/brackets.py:70`   |

##### Standard library

|      % |     Size | Allocations | Function                    | Location                                      |
| -----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 100.0% | 78.6 MiB |      22,706 | `run_module`                | `<frozen runpy>:201`                          |
|  94.5% | 74.3 MiB |      21,394 | `_run_code`                 | `<frozen runpy>:65`                           |
|  94.5% | 74.3 MiB |      21,394 | `_run_module_code`          | `<frozen runpy>:91`                           |
|  12.9% | 10.1 MiB |         143 | `parse`                     | `/usr/lib/python3.11/ast.py:33`               |
|   5.5% | 4.33 MiB |       1,311 | `_get_module_details`       | `<frozen runpy>:105`                          |
|   5.5% | 4.32 MiB |       1,304 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`          |
|   5.5% | 4.32 MiB |       1,302 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`          |
|   5.5% | 4.32 MiB |       1,301 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`           |
|   5.5% | 4.32 MiB |       1,299 | `exec_module`               | `<frozen importlib._bootstrap_external>:934`  |
|   5.5% | 4.28 MiB |       1,269 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|   3.2% | 2.55 MiB |         619 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`  |
|   3.2% | 2.55 MiB |         619 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |
|   1.7% | 1.31 MiB |         319 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`          |
|   1.3% | 1.05 MiB |          26 | `compile`                   | `/usr/lib/python3.11/re/__init__.py:225`      |
|   1.3% | 1.05 MiB |          25 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py:272`      |
|   1.3% | 1.05 MiB |          24 | `compile`                   | `/usr/lib/python3.11/re/_compiler.py:738`     |
|   1.3% | 1.01 MiB |           6 | `parse`                     | `/usr/lib/python3.11/re/_parser.py:970`       |
|   1.3% | 1.01 MiB |           5 | `_parse_sub`                | `/usr/lib/python3.11/re/_parser.py:447`       |
|   1.3% | 1.01 MiB |           4 | `_parse`                    | `/usr/lib/python3.11/re/_parser.py:507`       |
|   1.3% |    1 MiB |           1 | `__getitem__`               | `/usr/lib/python3.11/re/_parser.py:162`       |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|      % |     Size | Allocations | Callee       | Location             |
| -----: | -------: | ----------: | ------------ | -------------------- |
| 100.0% | 78.6 MiB |      22,706 | `run_module` | `<frozen runpy>:201` |

##### `run_module` (`<frozen runpy>:201`)

|     % |     Size | Allocations | Callee                | Location             |
| ----: | -------: | ----------: | --------------------- | -------------------- |
| 94.5% | 74.3 MiB |      21,394 | `_run_module_code`    | `<frozen runpy>:91`  |
|  5.5% | 4.33 MiB |       1,311 | `_get_module_details` | `<frozen runpy>:105` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1629`)

|      % |     Size | Allocations | Callee | Location                                                |
| -----: | -------: | ----------: | ------ | ------------------------------------------------------- |
| 100.0% | 74.3 MiB |      21,393 | `main` | `/venv/lib/python3.11/site-packages/click/core.py:1484` |

##### `patched_main` (`black/__init__.py:1594`)

|      % |     Size | Allocations | Callee     | Location                                                |
| -----: | -------: | ----------: | ---------- | ------------------------------------------------------- |
| 100.0% | 74.3 MiB |      21,394 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py:1629` |

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

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py:1484`)

|      % |     Size | Allocations | Callee         | Location                                                |
| -----: | -------: | ----------: | -------------- | ------------------------------------------------------- |
| 100.0% | 74.2 MiB |      21,373 | `invoke`       | `/venv/lib/python3.11/site-packages/click/core.py:1401` |
|  <0.1% | 14.6 KiB |          18 | `make_context` | `/venv/lib/python3.11/site-packages/click/core.py:1328` |
|  <0.1% |     32 B |           1 | `__enter__`    | `/venv/lib/python3.11/site-packages/click/core.py:549`  |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:1401`)

|      % |     Size | Allocations | Callee   | Location                                               |
| -----: | -------: | ----------: | -------- | ------------------------------------------------------ |
| 100.0% | 74.2 MiB |      21,370 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:857` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`)

|      % |     Size | Allocations | Callee     | Location                                                    |
| -----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 100.0% | 74.2 MiB |      21,368 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |     Size | Allocations | Callee | Location                |
| -----: | -------: | ----------: | ------ | ----------------------- |
| 100.0% | 74.2 MiB |      21,365 | `main` | `black/__init__.py:244` |

##### `main` (`black/__init__.py:244`)

|      % |     Size | Allocations | Callee         | Location                |
| -----: | -------: | ----------: | -------------- | ----------------------- |
| 100.0% | 74.2 MiB |      21,361 | `reformat_one` | `black/__init__.py:860` |
|  <0.1% | 2.06 KiB |           2 | `get_sources`  | `black/__init__.py:724` |

##### `reformat_one` (`black/__init__.py:860`)

|      % |     Size | Allocations | Callee                 | Location                |
| -----: | -------: | ----------: | ---------------------- | ----------------------- |
| 100.0% | 74.2 MiB |      21,358 | `format_file_in_place` | `black/__init__.py:917` |
|  <0.1% | 1.13 KiB |           1 | `read`                 | `black/cache.py:60`     |

##### `format_file_in_place` (`black/__init__.py:917`)

|     % |    Size | Allocations | Callee                 | Location                 |
| ----: | ------: | ----------: | ---------------------- | ------------------------ |
| 99.7% |  74 MiB |      21,355 | `format_file_contents` | `black/__init__.py:1054` |
|  0.3% | 223 KiB |           2 | `decode_bytes`         | `black/__init__.py:1290` |

##### `format_file_contents` (`black/__init__.py:1054`)

|     % |     Size | Allocations | Callee                            | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 68.6% | 50.8 MiB |      21,145 | `format_str`                      | `black/__init__.py:1189` |
| 31.4% | 23.3 MiB |         210 | `check_stability_and_equivalence` | `black/__init__.py:1037` |

##### `format_str` (`black/__init__.py:1189`)

|      % |     Size | Allocations | Callee             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 50.8 MiB |      21,144 | `_format_str_once` | `black/__init__.py:1236` |

##### `_format_str_once` (`black/__init__.py:1236`)

|     % |     Size | Allocations | Callee                   | Location                 |
| ----: | -------: | ----------: | ------------------------ | ------------------------ |
| 65.9% | 33.4 MiB |      21,084 | `visit`                  | `black/nodes.py:163`     |
| 23.7% |   12 MiB |          31 | `lib2to3_parse`          | `black/parsing.py:55`    |
|  9.9% | 5.01 MiB |          17 | `transform_line`         | `black/linegen.py:601`   |
| <0.1% | 19.9 KiB |           3 | `normalize_fmt_off`      | `black/comments.py:168`  |
| <0.1% | 3.49 KiB |           1 | `detect_target_versions` | `black/__init__.py:1464` |

##### `visit` (`black/nodes.py:163`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 33.4 MiB |      21,082 | `visit_default`     | `black/linegen.py:134` |
|  99.2% | 33.2 MiB |      20,711 | `visit_stmt`        | `black/linegen.py:199` |
|  98.1% | 32.8 MiB |      20,270 | `visit_funcdef`     | `black/linegen.py:254` |
|  97.9% | 32.7 MiB |      20,144 | `visit_suite`       | `black/linegen.py:288` |
|  71.2% | 23.8 MiB |      13,402 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 33.4 MiB |      21,082 | `visit_default`     | `black/nodes.py:187`   |
|  51.7% | 17.3 MiB |      20,882 | `append`            | `black/lines.py:63`    |
|  26.9% |    9 MiB |           9 | `generate_comments` | `black/comments.py:52` |

##### `visit_default` (`black/nodes.py:187`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 33.4 MiB |      21,082 | `visit` | `black/nodes.py:163` |

##### `visit_stmt` (`black/linegen.py:199`)

|      % |     Size | Allocations | Callee                       | Location                |
| -----: | -------: | ----------: | ---------------------------- | ----------------------- |
| 100.0% | 33.2 MiB |      20,709 | `visit`                      | `black/nodes.py:163`    |
|   9.0% |    3 MiB |           4 | `normalize_invisible_parens` | `black/linegen.py:1328` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 32.8 MiB |      20,270 | `visit` | `black/nodes.py:163` |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 32.7 MiB |      20,144 | `visit_default` | `black/linegen.py:134` |

##### `visit_simple_stmt` (`black/linegen.py:295`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 23.8 MiB |      13,402 | `visit_default` | `black/linegen.py:134` |

##### `check_stability_and_equivalence` (`black/__init__.py:1037`)

|      % |     Size | Allocations | Callee              | Location                 |
| -----: | -------: | ----------: | ------------------- | ------------------------ |
| 100.0% | 23.3 MiB |         209 | `assert_equivalent` | `black/__init__.py:1524` |

##### `assert_equivalent` (`black/__init__.py:1524`)

|     % |     Size | Allocations | Callee           | Location               |
| ----: | -------: | ----------: | ---------------- | ---------------------- |
| 43.5% | 10.1 MiB |         143 | `parse_ast`      | `black/parsing.py:129` |
| 26.0% | 6.05 MiB |          62 | `_stringify_ast` | `black/parsing.py:174` |

##### `visit_power` (`black/linegen.py:341`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 17.9 MiB |      10,808 | `visit_default` | `black/linegen.py:134` |

##### `append` (`black/lines.py:63`)

|     % |     Size | Allocations | Callee       | Location                 |
| ----: | -------: | ----------: | ------------ | ------------------------ |
| 88.1% | 15.2 MiB |      20,787 | `mark`       | `black/brackets.py:70`   |
|  6.1% | 1.05 MiB |          90 | `whitespace` | `black/nodes.py:194`     |
|  5.8% |    1 MiB |           1 | `prefix`     | `blib2to3/pytree.py:480` |

##### `_get_module_details` (`<frozen runpy>:105`)

|     % |     Size | Allocations | Callee                | Location                             |
| ----: | -------: | ----------: | --------------------- | ------------------------------------ |
| 99.9% | 4.32 MiB |       1,304 | `_find_and_load`      | `<frozen importlib._bootstrap>:1167` |
| 99.9% | 4.32 MiB |       1,304 | `_get_module_details` | `<frozen runpy>:105`                 |
|  0.1% | 5.66 KiB |           6 | `find_spec`           | `<frozen importlib.util>:73`         |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

|      % |     Size | Allocations | Callee                    | Location                             |
| -----: | -------: | ----------: | ------------------------- | ------------------------------------ |
| 100.0% | 4.32 MiB |       1,302 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |
|  <0.1% |    560 B |           1 | `__enter__`               | `<frozen importlib._bootstrap>:169`  |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

|      % |     Size | Allocations | Callee                      | Location                             |
| -----: | -------: | ----------: | --------------------------- | ------------------------------------ |
| 100.0% | 4.32 MiB |       1,301 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`  |
|   0.8% | 37.2 KiB |          47 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`  |
|   0.2% | 7.48 KiB |           4 | `_find_spec`                | `<frozen importlib._bootstrap>:1056` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

|      % |     Size | Allocations | Callee             | Location                                     |
| -----: | -------: | ----------: | ------------------ | -------------------------------------------- |
| 100.0% | 4.32 MiB |       1,299 | `exec_module`      | `<frozen importlib._bootstrap_external>:934` |
|  <0.1% | 1.83 KiB |           2 | `module_from_spec` | `<frozen importlib._bootstrap>:566`          |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

|     % |     Size | Allocations | Callee                      | Location                                      |
| ----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 99.3% | 4.28 MiB |       1,269 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
| 59.2% | 2.55 MiB |         619 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Allocations | Callee           | Location                                                 |
| -----: | -------: | ----------: | ---------------- | -------------------------------------------------------- |
| 100.0% | 4.28 MiB |       1,269 | `<module>`       | `black/__init__.py:1`                                    |
|  30.7% | 1.32 MiB |         330 | `_find_and_load` | `<frozen importlib._bootstrap>:1167`                     |
|  30.7% | 1.31 MiB |         316 | `<module>`       | `/venv/lib/python3.11/site-packages/click/__init__.py:1` |
|  30.4% |  1.3 MiB |         269 | `<module>`       | `black/comments.py:1`                                    |
|  30.0% | 1.29 MiB |         255 | `<module>`       | `black/nodes.py:1`                                       |

##### `get_code` (`<frozen importlib._bootstrap_external>:1007`)

|      % |     Size | Allocations | Callee              | Location                                     |
| -----: | -------: | ----------: | ------------------- | -------------------------------------------- |
| 100.0% | 2.55 MiB |         619 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:727` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1209`)

|      % |     Size | Allocations | Callee                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 1.31 MiB |         319 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

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

##### `parse` (`/usr/lib/python3.11/re/_parser.py:970`)

|     % |     Size | Allocations | Callee       | Location                                |
| ----: | -------: | ----------: | ------------ | --------------------------------------- |
| 99.9% | 1.01 MiB |           5 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py:447` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|     % |     Size | Allocations | Callee   | Location                                |
| ----: | -------: | ----------: | -------- | --------------------------------------- |
| 99.2% | 1.01 MiB |           4 | `_parse` | `/usr/lib/python3.11/re/_parser.py:507` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|     % |  Size | Allocations | Callee        | Location                                |
| ----: | ----: | ----------: | ------------- | --------------------------------------- |
| 99.6% | 1 MiB |           2 | `_parse_sub`  | `/usr/lib/python3.11/re/_parser.py:447` |
| 99.5% | 1 MiB |           1 | `__getitem__` | `/usr/lib/python3.11/re/_parser.py:162` |

## Hottest call stacks

Call stacks ranked by bytes held at peak memory in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>:201`) ← `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|     % |     Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | -------: | ----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 12.9% | 10.1 MiB |         143 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  9.0% |  7.1 MiB |           4 | `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  5.1% |    4 MiB |           4 | `push` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  5.1% |    4 MiB |           4 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `shift` (`blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  3.8% |    3 MiB |           3 | `_stringify_ast` (`black/parsing.py:174`) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  2.6% | 2.04 MiB |          43 | `_stringify_ast` (`black/parsing.py:174`) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  2.5% |    2 MiB |           2 | `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`) ← `__next__` (`blib2to3/pgen2/driver.py:80`) ← `parse_tokens` (114) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.3% | 1.03 MiB |          33 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/files.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.3% | 1.03 MiB |          23 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/core.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.3% | 1.01 MiB |          17 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `preceding_leaf` (`black/nodes.py:441`) ← `whitespace` (194) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                             |
|  1.3% |    1 MiB |           1 | `__init__` (`blib2to3/pytree.py:248`) ← `wrap_in_parentheses` (`black/nodes.py:935`) ← `normalize_invisible_parens` (`black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.3% |    1 MiB |           1 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                     |
|  1.3% |    1 MiB |           1 | `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91) |
|  1.3% |    1 MiB |           1 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                    |
|  1.3% |    1 MiB |           1 | `contains_uncollapsable_type_comments` (`black/lines.py:276`) ← `transform_line` (`black/linegen.py:601`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.3% |    1 MiB |           1 | `<listcomp>` (`black/parsing.py:154`) ← `_normalize` (151) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.3% |    1 MiB |           1 | `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.3% |    1 MiB |           1 | `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                    |
|  1.3% |    1 MiB |           1 | `__init__` (`<string>:2`) ← `__init__` (2) ← `bracket_split_build_line` (`black/linegen.py:1082`) ← `_first_right_hand_split` (829) ← `_maybe_split_omitting_optional_parens` (932) ← `right_hand_split` (809) ← `_rhs` (650) ← `run_transformer` (1755) ← `transform_line` (601) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.3% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)              |

# Leaked memory profile

Leaked 58.9 MiB over 22,506 allocations (2.68 KiB per allocation).

| Category         |     % |     Size | Allocations |
| ---------------- | ----: | -------: | ----------: |
| Ours             | 88.0% | 51.9 MiB |      21,387 |
| Standard library | 11.6% | 6.83 MiB |         889 |
| Third-party      |  0.4% |  237 KiB |         230 |

## Hottest functions

### Self size

Functions ranked by bytes never freed directly in the function body, excluding callees.

|     % |     Size | Allocations | Function                               | Location                                     |
| ----: | -------: | ----------: | -------------------------------------- | -------------------------------------------- |
| 27.5% | 16.2 MiB |      20,788 | `mark`                                 | `black/brackets.py:70`                       |
| 11.9% |    7 MiB |           7 | `changed`                              | `blib2to3/pytree.py:171`                     |
|  8.5% |    5 MiB |           5 | `__new__`                              | `blib2to3/pytree.py:81`                      |
|  6.8% |    4 MiB |           4 | `push`                                 | `blib2to3/pgen2/parse.py:386`                |
|  5.1% | 3.01 MiB |           4 | `parse`                                | `/usr/lib/python3.11/ast.py:33`              |
|  5.1% |    3 MiB |           7 | `visit`                                | `black/nodes.py:163`                         |
|  4.3% | 2.55 MiB |         619 | `_compile_bytecode`                    | `<frozen importlib._bootstrap_external>:727` |
|  3.4% |    2 MiB |           2 | `generate_comments`                    | `black/comments.py:52`                       |
|  3.4% |    2 MiB |           2 | `generate_tokens`                      | `blib2to3/pgen2/tokenize.py:565`             |
|  1.9% | 1.14 MiB |         196 | `update_sibling_maps`                  | `blib2to3/pytree.py:369`                     |
|  1.7% |    1 MiB |           5 | `__init__`                             | `blib2to3/pytree.py:248`                     |
|  1.7% |    1 MiB |           2 | `visit_default`                        | `black/linegen.py:134`                       |
|  1.7% |    1 MiB |           1 | `pop`                                  | `blib2to3/pgen2/parse.py:398`                |
|  1.7% |    1 MiB |           1 | `_addtoken`                            | `blib2to3/pgen2/parse.py:290`                |
|  1.7% |    1 MiB |           1 | `normalize_trailing_prefix`            | `black/comments.py:127`                      |
|  1.7% |    1 MiB |           1 | `contains_uncollapsable_type_comments` | `black/lines.py:276`                         |
|  1.7% |    1 MiB |           1 | `_stringify_ast`                       | `black/parsing.py:174`                       |
|  1.7% |    1 MiB |           1 | `__init__`                             | `<string>:2`                                 |
|  1.7% |    1 MiB |           1 | `prefix`                               | `blib2to3/pytree.py:480`                     |
|  1.7% |    1 MiB |           1 | `__getitem__`                          | `/usr/lib/python3.11/re/_parser.py:162`      |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                               | Location                         |
| ----: | -------: | ----------: | -------------------------------------- | -------------------------------- |
| 27.5% | 16.2 MiB |      20,788 | `mark`                                 | `black/brackets.py:70`           |
| 11.9% |    7 MiB |           7 | `changed`                              | `blib2to3/pytree.py:171`         |
|  8.5% |    5 MiB |           5 | `__new__`                              | `blib2to3/pytree.py:81`          |
|  6.8% |    4 MiB |           4 | `push`                                 | `blib2to3/pgen2/parse.py:386`    |
|  5.1% |    3 MiB |           7 | `visit`                                | `black/nodes.py:163`             |
|  3.4% |    2 MiB |           2 | `generate_comments`                    | `black/comments.py:52`           |
|  3.4% |    2 MiB |           2 | `generate_tokens`                      | `blib2to3/pgen2/tokenize.py:565` |
|  1.9% | 1.14 MiB |         196 | `update_sibling_maps`                  | `blib2to3/pytree.py:369`         |
|  1.7% |    1 MiB |           5 | `__init__`                             | `blib2to3/pytree.py:248`         |
|  1.7% |    1 MiB |           2 | `visit_default`                        | `black/linegen.py:134`           |
|  1.7% |    1 MiB |           1 | `pop`                                  | `blib2to3/pgen2/parse.py:398`    |
|  1.7% |    1 MiB |           1 | `_addtoken`                            | `blib2to3/pgen2/parse.py:290`    |
|  1.7% |    1 MiB |           1 | `normalize_trailing_prefix`            | `black/comments.py:127`          |
|  1.7% |    1 MiB |           1 | `contains_uncollapsable_type_comments` | `black/lines.py:276`             |
|  1.7% |    1 MiB |           1 | `_stringify_ast`                       | `black/parsing.py:174`           |
|  1.7% |    1 MiB |           1 | `__init__`                             | `<string>:2`                     |
|  1.7% |    1 MiB |           1 | `prefix`                               | `blib2to3/pytree.py:480`         |
|  1.7% |    1 MiB |           1 | `hug_power_op`                         | `black/trans.py:85`              |
|  1.7% |    1 MiB |           1 | `__str__`                              | `blib2to3/pytree.py:440`         |
|  0.1% | 76.5 KiB |           6 | `transform_line`                       | `black/linegen.py:601`           |

##### Standard library

|     % |     Size | Allocations | Function                   | Location                                          |
| ----: | -------: | ----------: | -------------------------- | ------------------------------------------------- |
|  5.1% | 3.01 MiB |           4 | `parse`                    | `/usr/lib/python3.11/ast.py:33`                   |
|  4.3% | 2.55 MiB |         619 | `_compile_bytecode`        | `<frozen importlib._bootstrap_external>:727`      |
|  1.7% |    1 MiB |           1 | `__getitem__`              | `/usr/lib/python3.11/re/_parser.py:162`           |
|  0.1% | 77.4 KiB |          81 | `__new__`                  | `<frozen abc>:105`                                |
| <0.1% | 24.1 KiB |          27 | `__new__`                  | `/usr/lib/python3.11/enum.py:488`                 |
| <0.1% | 22.6 KiB |          12 | `compile`                  | `/usr/lib/python3.11/re/_compiler.py:738`         |
| <0.1% | 19.8 KiB |          12 | `<module>`                 | `/usr/lib/python3.11/tomllib/_parser.py:1`        |
| <0.1% | 17.4 KiB |          21 | `__new__`                  | `/usr/lib/python3.11/typing.py:2891`              |
| <0.1% |   12 KiB |           3 | `inner`                    | `/usr/lib/python3.11/typing.py:338`               |
| <0.1% |    8 KiB |           4 | `_fill_cache`              | `<frozen importlib._bootstrap_external>:1655`     |
| <0.1% | 7.97 KiB |           1 | `_parse_sub`               | `/usr/lib/python3.11/re/_parser.py:447`           |
| <0.1% | 6.73 KiB |           8 | `__setattr__`              | `/usr/lib/python3.11/enum.py:831`                 |
| <0.1% | 5.63 KiB |           6 | `namedtuple`               | `/usr/lib/python3.11/collections/__init__.py:348` |
| <0.1% | 5.61 KiB |           3 | `_parse`                   | `/usr/lib/python3.11/re/_parser.py:507`           |
| <0.1% | 5.32 KiB |           2 | `_code`                    | `/usr/lib/python3.11/re/_compiler.py:571`         |
| <0.1% | 4.73 KiB |           6 | `<module>`                 | `/usr/lib/python3.11/pkgutil.py:1`                |
| <0.1% | 2.85 KiB |           1 | `wrap`                     | `/usr/lib/python3.11/dataclasses.py:1209`         |
| <0.1% | 2.85 KiB |           4 | `_process_class`           | `/usr/lib/python3.11/dataclasses.py:884`          |
| <0.1% | 2.56 KiB |           3 | `_signature_from_function` | `/usr/lib/python3.11/inspect.py:2331`             |
| <0.1% |  2.5 KiB |           1 | `<module>`                 | `/usr/lib/python3.11/secrets.py:1`                |

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
| 57.1% | 4 MiB |           4 | `blib2to3/pytree.py:176` |
| 42.9% | 3 MiB |           3 | `blib2to3/pytree.py:175` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 5 MiB |           5 | `blib2to3/pytree.py:84` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 4 MiB |           4 | `blib2to3/pgen2/parse.py:394` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Location                        |
| -----: | -------: | ----------: | ------------------------------- |
| 100.0% | 3.01 MiB |           4 | `/usr/lib/python3.11/ast.py:50` |

##### `visit` (`black/nodes.py:163`)

|     % |     Size | Allocations | Location             |
| ----: | -------: | ----------: | -------------------- |
| 99.9% |    3 MiB |           4 | `black/nodes.py:185` |
|  0.1% | 2.68 KiB |           3 | `black/nodes.py:183` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Location                                     |
| -----: | -------: | ----------: | -------------------------------------------- |
| 100.0% | 2.55 MiB |         619 | `<frozen importlib._bootstrap_external>:729` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 2 MiB |           2 | `black/comments.py:76` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|     % |  Size | Allocations | Location                         |
| ----: | ----: | ----------: | -------------------------------- |
| 50.0% | 1 MiB |           1 | `blib2to3/pgen2/tokenize.py:972` |
| 50.0% | 1 MiB |           1 | `blib2to3/pgen2/tokenize.py:614` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 87.6% |    1 MiB |           1 | `blib2to3/pytree.py:371` |
|  6.0% | 70.3 KiB |          93 | `blib2to3/pytree.py:377` |
|  6.0% | 70.3 KiB |          93 | `blib2to3/pytree.py:376` |
|  0.4% | 4.99 KiB |           9 | `blib2to3/pytree.py:379` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           5 | `blib2to3/pytree.py:266` |

##### `visit_default` (`black/linegen.py:134`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 99.9% | 1 MiB |           1 | `black/linegen.py:158` |
|  0.1% | 702 B |           1 | `black/linegen.py:144` |

##### `pop` (`blib2to3/pgen2/parse.py:398`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:408` |

##### `_addtoken` (`blib2to3/pgen2/parse.py:290`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:314` |

##### `normalize_trailing_prefix` (`black/comments.py:127`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 1 MiB |           1 | `black/comments.py:136` |

##### `contains_uncollapsable_type_comments` (`black/lines.py:276`)

|      % |  Size | Allocations | Location             |
| -----: | ----: | ----------: | -------------------- |
| 100.0% | 1 MiB |           1 | `black/lines.py:280` |

##### `_stringify_ast` (`black/parsing.py:174`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 1 MiB |           1 | `black/parsing.py:240` |

##### `__init__` (`<string>:2`)

|      % |  Size | Allocations | Location     |
| -----: | ----: | ----------: | ------------ |
| 100.0% | 1 MiB |           1 | `<string>:5` |

##### `prefix` (`blib2to3/pytree.py:480`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:482` |

##### `__getitem__` (`/usr/lib/python3.11/re/_parser.py:162`)

|      % |  Size | Allocations | Location                                |
| -----: | ----: | ----------: | --------------------------------------- |
| 100.0% | 1 MiB |           1 | `/usr/lib/python3.11/re/_parser.py:164` |

##### `hug_power_op` (`black/trans.py:85`)

|      % |  Size | Allocations | Location            |
| -----: | ----: | ----------: | ------------------- |
| 100.0% | 1 MiB |           1 | `black/trans.py:95` |

##### `__str__` (`blib2to3/pytree.py:440`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:446` |

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
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:38` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:22` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:36` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:26` |

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
| 35.7% | 1.69 KiB |           2 | `/usr/lib/python3.11/pkgutil.py:269` |
| 35.7% | 1.69 KiB |           2 | `/usr/lib/python3.11/pkgutil.py:194` |
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

##### `<module>` (`/usr/lib/python3.11/secrets.py:1`)

|      % |    Size | Allocations | Location                            |
| -----: | ------: | ----------: | ----------------------------------- |
| 100.0% | 2.5 KiB |           1 | `/usr/lib/python3.11/secrets.py:21` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `mark` (`black/brackets.py:70`)

|     % |     Size | Allocations | Caller                           | Location                |
| ----: | -------: | ----------: | -------------------------------- | ----------------------- |
| 93.8% | 15.2 MiB |      20,787 | `append`                         | `black/lines.py:63`     |
|  6.2% |    1 MiB |           1 | `max_delimiter_priority_in_atom` | `black/brackets.py:328` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Allocations | Caller    | Location                 |
| ----: | ----: | ----------: | --------- | ------------------------ |
| 71.4% | 5 MiB |           5 | `changed` | `blib2to3/pytree.py:171` |
| 28.6% | 2 MiB |           2 | `prefix`  | `blib2to3/pytree.py:480` |

##### `__new__` (`blib2to3/pytree.py:81`)

|     % |  Size | Allocations | Caller    | Location                 |
| ----: | ----: | ----------: | --------- | ------------------------ |
| 80.0% | 4 MiB |           4 | `convert` | `blib2to3/pytree.py:486` |
| 20.0% | 1 MiB |           1 | `clone`   | `blib2to3/pytree.py:452` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 4 MiB |           4 | `_addtoken` | `blib2to3/pgen2/parse.py:290` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Caller                  | Location               |
| -----: | -------: | ----------: | ----------------------- | ---------------------- |
| 100.0% | 3.01 MiB |           4 | `_parse_single_version` | `black/parsing.py:117` |

##### `visit` (`black/nodes.py:163`)

|     % |  Size | Allocations | Caller             | Location                 |
| ----: | ----: | ----------: | ------------------ | ------------------------ |
| 66.7% | 2 MiB |           5 | `visit_default`    | `black/nodes.py:187`     |
| 33.3% | 1 MiB |           1 | `visit_stmt`       | `black/linegen.py:199`   |
| <0.1% | 690 B |           1 | `_format_str_once` | `black/__init__.py:1236` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Caller     | Location                                      |
| -----: | -------: | ----------: | ---------- | --------------------------------------------- |
| 100.0% | 2.55 MiB |         619 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Allocations | Caller          | Location               |
| -----: | ----: | ----------: | --------------- | ---------------------- |
| 100.0% | 2 MiB |           2 | `visit_default` | `black/linegen.py:134` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|      % |  Size | Allocations | Caller     | Location                      |
| -----: | ----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 2 MiB |           2 | `__next__` | `blib2to3/pgen2/driver.py:80` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|      % |     Size | Allocations | Caller         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 1.14 MiB |         196 | `prev_sibling` | `blib2to3/pytree.py:207` |

##### `__init__` (`blib2to3/pytree.py:248`)

|     % |     Size | Allocations | Caller                | Location                 |
| ----: | -------: | ----------: | --------------------- | ------------------------ |
| 99.7% |    1 MiB |           1 | `wrap_in_parentheses` | `black/nodes.py:935`     |
|  0.3% | 3.03 KiB |           4 | `convert`             | `blib2to3/pytree.py:486` |

##### `visit_default` (`black/linegen.py:134`)

|     % |  Size | Allocations | Caller         | Location               |
| ----: | ----: | ----------: | -------------- | ---------------------- |
| 99.9% | 1 MiB |           1 | `visit`        | `black/nodes.py:163`   |
|  0.1% | 702 B |           1 | `visit_STRING` | `black/linegen.py:413` |

##### `pop` (`blib2to3/pgen2/parse.py:398`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `_addtoken` | `blib2to3/pgen2/parse.py:290` |

##### `_addtoken` (`blib2to3/pgen2/parse.py:290`)

|      % |  Size | Allocations | Caller     | Location                      |
| -----: | ----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `addtoken` | `blib2to3/pgen2/parse.py:242` |

##### `normalize_trailing_prefix` (`black/comments.py:127`)

|      % |  Size | Allocations | Caller              | Location               |
| -----: | ----: | ----------: | ------------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `generate_comments` | `black/comments.py:52` |

##### `contains_uncollapsable_type_comments` (`black/lines.py:276`)

|      % |  Size | Allocations | Caller           | Location               |
| -----: | ----: | ----------: | ---------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `transform_line` | `black/linegen.py:601` |

##### `_stringify_ast` (`black/parsing.py:174`)

|      % |  Size | Allocations | Caller                           | Location               |
| -----: | ----: | ----------: | -------------------------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `_stringify_ast_with_new_parent` | `black/parsing.py:166` |

##### `__init__` (`<string>:2`)

|      % |  Size | Allocations | Caller     | Location     |
| -----: | ----: | ----------: | ---------- | ------------ |
| 100.0% | 1 MiB |           1 | `__init__` | `<string>:2` |

##### `prefix` (`blib2to3/pytree.py:480`)

|      % |  Size | Allocations | Caller   | Location            |
| -----: | ----: | ----------: | -------- | ------------------- |
| 100.0% | 1 MiB |           1 | `append` | `black/lines.py:63` |

##### `__getitem__` (`/usr/lib/python3.11/re/_parser.py:162`)

|      % |  Size | Allocations | Caller   | Location                                |
| -----: | ----: | ----------: | -------- | --------------------------------------- |
| 100.0% | 1 MiB |           1 | `_parse` | `/usr/lib/python3.11/re/_parser.py:507` |

##### `hug_power_op` (`black/trans.py:85`)

|      % |  Size | Allocations | Caller            | Location                |
| -----: | ----: | ----------: | ----------------- | ----------------------- |
| 100.0% | 1 MiB |           1 | `run_transformer` | `black/linegen.py:1755` |

##### `__str__` (`blib2to3/pytree.py:440`)

|      % |  Size | Allocations | Caller    | Location             |
| -----: | ----: | ----------: | --------- | -------------------- |
| 100.0% | 1 MiB |           1 | `__str__` | `black/lines.py:490` |

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

##### `<module>` (`/usr/lib/python3.11/secrets.py:1`)

|      % |    Size | Allocations | Caller                      | Location                            |
| -----: | ------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 2.5 KiB |           1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

### Total size

Functions ranked by total bytes never freed in the function and all its callees.

|      % |     Size | Allocations | Function               | Location                                                       |
| -----: | -------: | ----------: | ---------------------- | -------------------------------------------------------------- |
| 100.0% | 58.9 MiB |      22,506 | `_run_tracker`         | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40` |
| 100.0% | 58.9 MiB |      22,505 | `run_module`           | `<frozen runpy>:201`                                           |
|  92.7% | 54.6 MiB |      21,194 | `__call__`             | `/venv/lib/python3.11/site-packages/click/core.py:1629`        |
|  92.7% | 54.6 MiB |      21,194 | `patched_main`         | `black/__init__.py:1594`                                       |
|  92.7% | 54.6 MiB |      21,194 | `<module>`             | `black/__main__.py:1`                                          |
|  92.7% | 54.6 MiB |      21,194 | `_run_code`            | `<frozen runpy>:65`                                            |
|  92.7% | 54.6 MiB |      21,194 | `_run_module_code`     | `<frozen runpy>:91`                                            |
|  92.7% | 54.6 MiB |      21,193 | `main`                 | `/venv/lib/python3.11/site-packages/click/core.py:1484`        |
|  92.7% | 54.6 MiB |      21,173 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:1401`        |
|  92.7% | 54.6 MiB |      21,171 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:857`         |
|  92.7% | 54.6 MiB |      21,170 | `new_func`             | `/venv/lib/python3.11/site-packages/click/decorators.py:33`    |
|  92.7% | 54.6 MiB |      21,168 | `main`                 | `black/__init__.py:244`                                        |
|  92.7% | 54.6 MiB |      21,162 | `reformat_one`         | `black/__init__.py:860`                                        |
|  92.7% | 54.6 MiB |      21,155 | `format_file_in_place` | `black/__init__.py:917`                                        |
|  92.7% | 54.6 MiB |      21,154 | `format_file_contents` | `black/__init__.py:1054`                                       |
|  85.9% | 50.6 MiB |      21,146 | `_format_str_once`     | `black/__init__.py:1236`                                       |
|  59.5% | 35.1 MiB |          93 | `format_str`           | `black/__init__.py:1189`                                       |
|  56.7% | 33.4 MiB |      21,084 | `visit`                | `black/nodes.py:163`                                           |
|  56.7% | 33.4 MiB |      21,082 | `visit_default`        | `black/linegen.py:134`                                         |
|  56.7% | 33.4 MiB |      21,082 | `visit_default`        | `black/nodes.py:187`                                           |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                          | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 92.7% | 54.6 MiB |      21,194 | `patched_main`                    | `black/__init__.py:1594` |
| 92.7% | 54.6 MiB |      21,194 | `<module>`                        | `black/__main__.py:1`    |
| 92.7% | 54.6 MiB |      21,168 | `main`                            | `black/__init__.py:244`  |
| 92.7% | 54.6 MiB |      21,162 | `reformat_one`                    | `black/__init__.py:860`  |
| 92.7% | 54.6 MiB |      21,155 | `format_file_in_place`            | `black/__init__.py:917`  |
| 92.7% | 54.6 MiB |      21,154 | `format_file_contents`            | `black/__init__.py:1054` |
| 85.9% | 50.6 MiB |      21,146 | `_format_str_once`                | `black/__init__.py:1236` |
| 59.5% | 35.1 MiB |          93 | `format_str`                      | `black/__init__.py:1189` |
| 56.7% | 33.4 MiB |      21,084 | `visit`                           | `black/nodes.py:163`     |
| 56.7% | 33.4 MiB |      21,082 | `visit_default`                   | `black/linegen.py:134`   |
| 56.7% | 33.4 MiB |      21,082 | `visit_default`                   | `black/nodes.py:187`     |
| 56.3% | 33.2 MiB |      20,711 | `visit_stmt`                      | `black/linegen.py:199`   |
| 55.7% | 32.8 MiB |      20,270 | `visit_funcdef`                   | `black/linegen.py:254`   |
| 55.5% | 32.7 MiB |      20,144 | `visit_suite`                     | `black/linegen.py:288`   |
| 40.4% | 23.8 MiB |      13,402 | `visit_simple_stmt`               | `black/linegen.py:295`   |
| 33.1% | 19.5 MiB |      21,061 | `check_stability_and_equivalence` | `black/__init__.py:1037` |
| 30.4% | 17.9 MiB |      10,809 | `visit_power`                     | `black/linegen.py:341`   |
| 29.3% | 17.3 MiB |      20,882 | `append`                          | `black/lines.py:63`      |
| 27.5% | 16.2 MiB |      20,788 | `mark`                            | `black/brackets.py:70`   |
| 26.3% | 15.5 MiB |      21,054 | `assert_stable`                   | `black/__init__.py:1557` |

##### Standard library

|      % |     Size | Allocations | Function                    | Location                                      |
| -----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 100.0% | 58.9 MiB |      22,505 | `run_module`                | `<frozen runpy>:201`                          |
|  92.7% | 54.6 MiB |      21,194 | `_run_code`                 | `<frozen runpy>:65`                           |
|  92.7% | 54.6 MiB |      21,194 | `_run_module_code`          | `<frozen runpy>:91`                           |
|   7.3% | 4.29 MiB |       1,310 | `_get_module_details`       | `<frozen runpy>:105`                          |
|   7.3% | 4.28 MiB |       1,303 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`          |
|   7.3% | 4.28 MiB |       1,301 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`          |
|   7.3% | 4.28 MiB |       1,300 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`           |
|   7.3% | 4.28 MiB |       1,298 | `exec_module`               | `<frozen importlib._bootstrap_external>:934`  |
|   7.2% | 4.25 MiB |       1,268 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|   5.1% | 3.01 MiB |           4 | `parse`                     | `/usr/lib/python3.11/ast.py:33`               |
|   4.3% | 2.55 MiB |         619 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`  |
|   4.3% | 2.55 MiB |         619 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |
|   2.2% | 1.31 MiB |         319 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`          |
|   1.8% | 1.05 MiB |          26 | `compile`                   | `/usr/lib/python3.11/re/__init__.py:225`      |
|   1.8% | 1.05 MiB |          25 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py:272`      |
|   1.8% | 1.05 MiB |          24 | `compile`                   | `/usr/lib/python3.11/re/_compiler.py:738`     |
|   1.7% | 1.01 MiB |           6 | `parse`                     | `/usr/lib/python3.11/re/_parser.py:970`       |
|   1.7% | 1.01 MiB |           5 | `_parse_sub`                | `/usr/lib/python3.11/re/_parser.py:447`       |
|   1.7% | 1.01 MiB |           4 | `_parse`                    | `/usr/lib/python3.11/re/_parser.py:507`       |
|   1.7% |    1 MiB |           1 | `__getitem__`               | `/usr/lib/python3.11/re/_parser.py:162`       |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|      % |     Size | Allocations | Callee       | Location             |
| -----: | -------: | ----------: | ------------ | -------------------- |
| 100.0% | 58.9 MiB |      22,505 | `run_module` | `<frozen runpy>:201` |

##### `run_module` (`<frozen runpy>:201`)

|     % |     Size | Allocations | Callee                | Location             |
| ----: | -------: | ----------: | --------------------- | -------------------- |
| 92.7% | 54.6 MiB |      21,194 | `_run_module_code`    | `<frozen runpy>:91`  |
|  7.3% | 4.29 MiB |       1,310 | `_get_module_details` | `<frozen runpy>:105` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1629`)

|      % |     Size | Allocations | Callee | Location                                                |
| -----: | -------: | ----------: | ------ | ------------------------------------------------------- |
| 100.0% | 54.6 MiB |      21,193 | `main` | `/venv/lib/python3.11/site-packages/click/core.py:1484` |

##### `patched_main` (`black/__init__.py:1594`)

|      % |     Size | Allocations | Callee     | Location                                                |
| -----: | -------: | ----------: | ---------- | ------------------------------------------------------- |
| 100.0% | 54.6 MiB |      21,194 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py:1629` |

##### `<module>` (`black/__main__.py:1`)

|      % |     Size | Allocations | Callee         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 54.6 MiB |      21,194 | `patched_main` | `black/__init__.py:1594` |

##### `_run_code` (`<frozen runpy>:65`)

|      % |     Size | Allocations | Callee     | Location              |
| -----: | -------: | ----------: | ---------- | --------------------- |
| 100.0% | 54.6 MiB |      21,194 | `<module>` | `black/__main__.py:1` |

##### `_run_module_code` (`<frozen runpy>:91`)

|      % |     Size | Allocations | Callee      | Location            |
| -----: | -------: | ----------: | ----------- | ------------------- |
| 100.0% | 54.6 MiB |      21,194 | `_run_code` | `<frozen runpy>:65` |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py:1484`)

|      % |     Size | Allocations | Callee         | Location                                                |
| -----: | -------: | ----------: | -------------- | ------------------------------------------------------- |
| 100.0% | 54.6 MiB |      21,173 | `invoke`       | `/venv/lib/python3.11/site-packages/click/core.py:1401` |
|  <0.1% | 14.1 KiB |          17 | `make_context` | `/venv/lib/python3.11/site-packages/click/core.py:1328` |
|  <0.1% |    529 B |           2 | `__exit__`     | `/venv/lib/python3.11/site-packages/click/core.py:554`  |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:1401`)

|      % |     Size | Allocations | Callee   | Location                                               |
| -----: | -------: | ----------: | -------- | ------------------------------------------------------ |
| 100.0% | 54.6 MiB |      21,171 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:857` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`)

|      % |     Size | Allocations | Callee     | Location                                                    |
| -----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 100.0% | 54.6 MiB |      21,170 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |     Size | Allocations | Callee | Location                |
| -----: | -------: | ----------: | ------ | ----------------------- |
| 100.0% | 54.6 MiB |      21,168 | `main` | `black/__init__.py:244` |

##### `main` (`black/__init__.py:244`)

|      % |     Size | Allocations | Callee         | Location                |
| -----: | -------: | ----------: | -------------- | ----------------------- |
| 100.0% | 54.6 MiB |      21,162 | `reformat_one` | `black/__init__.py:860` |
|  <0.1% | 2.06 KiB |           2 | `get_sources`  | `black/__init__.py:724` |
|  <0.1% |    550 B |           1 | `__str__`      | `black/report.py:80`    |

##### `reformat_one` (`black/__init__.py:860`)

|      % |     Size | Allocations | Callee                 | Location                |
| -----: | -------: | ----------: | ---------------------- | ----------------------- |
| 100.0% | 54.6 MiB |      21,155 | `format_file_in_place` | `black/__init__.py:917` |
|  <0.1% | 1.57 KiB |           2 | `done`                 | `black/report.py:36`    |
|  <0.1% | 1.13 KiB |           1 | `read`                 | `black/cache.py:60`     |
|  <0.1% |     72 B |           2 | `write`                | `black/cache.py:132`    |

##### `format_file_in_place` (`black/__init__.py:917`)

|      % |     Size | Allocations | Callee                 | Location                 |
| -----: | -------: | ----------: | ---------------------- | ------------------------ |
| 100.0% | 54.6 MiB |      21,154 | `format_file_contents` | `black/__init__.py:1054` |
|  <0.1% |    552 B |           1 | `decode_bytes`         | `black/__init__.py:1290` |

##### `format_file_contents` (`black/__init__.py:1054`)

|     % |     Size | Allocations | Callee                            | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 64.2% | 35.1 MiB |          93 | `format_str`                      | `black/__init__.py:1189` |
| 35.8% | 19.5 MiB |      21,061 | `check_stability_and_equivalence` | `black/__init__.py:1037` |

##### `_format_str_once` (`black/__init__.py:1236`)

|     % |     Size | Allocations | Callee                   | Location                 |
| ----: | -------: | ----------: | ------------------------ | ------------------------ |
| 66.1% | 33.4 MiB |      21,084 | `visit`                  | `black/nodes.py:163`     |
| 23.8% |   12 MiB |          31 | `lib2to3_parse`          | `black/parsing.py:55`    |
| 10.0% | 5.08 MiB |          20 | `transform_line`         | `black/linegen.py:601`   |
| <0.1% | 19.9 KiB |           3 | `normalize_fmt_off`      | `black/comments.py:168`  |
| <0.1% | 3.49 KiB |           1 | `detect_target_versions` | `black/__init__.py:1464` |

##### `format_str` (`black/__init__.py:1189`)

|      % |     Size | Allocations | Callee             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 35.1 MiB |          92 | `_format_str_once` | `black/__init__.py:1236` |

##### `visit` (`black/nodes.py:163`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 33.4 MiB |      21,082 | `visit_default`     | `black/linegen.py:134` |
|  99.2% | 33.2 MiB |      20,711 | `visit_stmt`        | `black/linegen.py:199` |
|  98.1% | 32.8 MiB |      20,270 | `visit_funcdef`     | `black/linegen.py:254` |
|  97.9% | 32.7 MiB |      20,144 | `visit_suite`       | `black/linegen.py:288` |
|  71.2% | 23.8 MiB |      13,402 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 33.4 MiB |      21,082 | `visit_default`     | `black/nodes.py:187`   |
|  51.7% | 17.3 MiB |      20,882 | `append`            | `black/lines.py:63`    |
|  26.9% |    9 MiB |           9 | `generate_comments` | `black/comments.py:52` |

##### `visit_default` (`black/nodes.py:187`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 33.4 MiB |      21,082 | `visit` | `black/nodes.py:163` |

##### `visit_stmt` (`black/linegen.py:199`)

|      % |     Size | Allocations | Callee                       | Location                |
| -----: | -------: | ----------: | ---------------------------- | ----------------------- |
| 100.0% | 33.2 MiB |      20,709 | `visit`                      | `black/nodes.py:163`    |
|   9.0% |    3 MiB |           4 | `normalize_invisible_parens` | `black/linegen.py:1328` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 32.8 MiB |      20,270 | `visit` | `black/nodes.py:163` |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 32.7 MiB |      20,144 | `visit_default` | `black/linegen.py:134` |

##### `visit_simple_stmt` (`black/linegen.py:295`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 23.8 MiB |      13,402 | `visit_default` | `black/linegen.py:134` |

##### `check_stability_and_equivalence` (`black/__init__.py:1037`)

|     % |     Size | Allocations | Callee              | Location                 |
| ----: | -------: | ----------: | ------------------- | ------------------------ |
| 79.5% | 15.5 MiB |      21,054 | `assert_stable`     | `black/__init__.py:1557` |
| 20.5% | 4.01 MiB |           6 | `assert_equivalent` | `black/__init__.py:1524` |

##### `visit_power` (`black/linegen.py:341`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 17.9 MiB |      10,808 | `visit_default` | `black/linegen.py:134` |

##### `append` (`black/lines.py:63`)

|     % |     Size | Allocations | Callee       | Location                 |
| ----: | -------: | ----------: | ------------ | ------------------------ |
| 88.1% | 15.2 MiB |      20,787 | `mark`       | `black/brackets.py:70`   |
|  6.1% | 1.05 MiB |          90 | `whitespace` | `black/nodes.py:194`     |
|  5.8% |    1 MiB |           1 | `prefix`     | `blib2to3/pytree.py:480` |

##### `assert_stable` (`black/__init__.py:1557`)

|      % |     Size | Allocations | Callee             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 15.5 MiB |      21,054 | `_format_str_once` | `black/__init__.py:1236` |

##### `_get_module_details` (`<frozen runpy>:105`)

|     % |     Size | Allocations | Callee                | Location                             |
| ----: | -------: | ----------: | --------------------- | ------------------------------------ |
| 99.9% | 4.28 MiB |       1,303 | `_find_and_load`      | `<frozen importlib._bootstrap>:1167` |
| 99.9% | 4.28 MiB |       1,303 | `_get_module_details` | `<frozen runpy>:105`                 |
|  0.1% | 5.66 KiB |           6 | `find_spec`           | `<frozen importlib.util>:73`         |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

|      % |     Size | Allocations | Callee                    | Location                             |
| -----: | -------: | ----------: | ------------------------- | ------------------------------------ |
| 100.0% | 4.28 MiB |       1,301 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |
|  <0.1% |    560 B |           1 | `__enter__`               | `<frozen importlib._bootstrap>:169`  |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

|      % |     Size | Allocations | Callee                      | Location                             |
| -----: | -------: | ----------: | --------------------------- | ------------------------------------ |
| 100.0% | 4.28 MiB |       1,300 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`  |
|   0.8% | 37.2 KiB |          47 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`  |
|   0.2% | 7.48 KiB |           4 | `_find_spec`                | `<frozen importlib._bootstrap>:1056` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

|      % |     Size | Allocations | Callee             | Location                                     |
| -----: | -------: | ----------: | ------------------ | -------------------------------------------- |
| 100.0% | 4.28 MiB |       1,298 | `exec_module`      | `<frozen importlib._bootstrap_external>:934` |
|  <0.1% | 1.83 KiB |           2 | `module_from_spec` | `<frozen importlib._bootstrap>:566`          |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

|     % |     Size | Allocations | Callee                      | Location                                      |
| ----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 99.3% | 4.25 MiB |       1,268 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
| 59.7% | 2.55 MiB |         619 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Allocations | Callee           | Location                                                 |
| -----: | -------: | ----------: | ---------------- | -------------------------------------------------------- |
| 100.0% | 4.25 MiB |       1,268 | `<module>`       | `black/__init__.py:1`                                    |
|  31.0% | 1.32 MiB |         330 | `_find_and_load` | `<frozen importlib._bootstrap>:1167`                     |
|  30.9% | 1.31 MiB |         316 | `<module>`       | `/venv/lib/python3.11/site-packages/click/__init__.py:1` |
|  30.6% |  1.3 MiB |         269 | `<module>`       | `black/comments.py:1`                                    |
|  30.3% | 1.29 MiB |         255 | `<module>`       | `black/nodes.py:1`                                       |

##### `get_code` (`<frozen importlib._bootstrap_external>:1007`)

|      % |     Size | Allocations | Callee              | Location                                     |
| -----: | -------: | ----------: | ------------------- | -------------------------------------------- |
| 100.0% | 2.55 MiB |         619 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:727` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1209`)

|      % |     Size | Allocations | Callee                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 1.31 MiB |         319 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

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

##### `parse` (`/usr/lib/python3.11/re/_parser.py:970`)

|     % |     Size | Allocations | Callee       | Location                                |
| ----: | -------: | ----------: | ------------ | --------------------------------------- |
| 99.9% | 1.01 MiB |           5 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py:447` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|     % |     Size | Allocations | Callee   | Location                                |
| ----: | -------: | ----------: | -------- | --------------------------------------- |
| 99.2% | 1.01 MiB |           4 | `_parse` | `/usr/lib/python3.11/re/_parser.py:507` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|     % |  Size | Allocations | Callee        | Location                                |
| ----: | ----: | ----------: | ------------- | --------------------------------------- |
| 99.6% | 1 MiB |           2 | `_parse_sub`  | `/usr/lib/python3.11/re/_parser.py:447` |
| 99.5% | 1 MiB |           1 | `__getitem__` | `/usr/lib/python3.11/re/_parser.py:162` |

## Hottest call stacks

Call stacks ranked by bytes never freed in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>:201`) ← `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|    % |     Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---: | -------: | ----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.8% |    4 MiB |           4 | `push` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 6.8% |    4 MiB |           4 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `shift` (`blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 5.1% | 3.01 MiB |           4 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 3.4% |    2 MiB |           2 | `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`) ← `__next__` (`blib2to3/pgen2/driver.py:80`) ← `parse_tokens` (114) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.7% | 1.03 MiB |          33 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/files.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.7% | 1.03 MiB |          23 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/core.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.7% |    1 MiB |           1 | `__init__` (`blib2to3/pytree.py:248`) ← `wrap_in_parentheses` (`black/nodes.py:935`) ← `normalize_invisible_parens` (`black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.7% |    1 MiB |           1 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                     |
| 1.7% |    1 MiB |           1 | `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91) |
| 1.7% |    1 MiB |           1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `preceding_leaf` (`black/nodes.py:441`) ← `whitespace` (194) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                             |
| 1.7% |    1 MiB |           1 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                    |
| 1.7% |    1 MiB |           1 | `contains_uncollapsable_type_comments` (`black/lines.py:276`) ← `transform_line` (`black/linegen.py:601`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.7% |    1 MiB |           1 | `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.7% |    1 MiB |           1 | `_stringify_ast` (`black/parsing.py:174`) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.7% |    1 MiB |           1 | `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                    |
| 1.7% |    1 MiB |           1 | `__init__` (`<string>:2`) ← `__init__` (2) ← `bracket_split_build_line` (`black/linegen.py:1082`) ← `_first_right_hand_split` (829) ← `_maybe_split_omitting_optional_parens` (932) ← `right_hand_split` (809) ← `_rhs` (650) ← `run_transformer` (1755) ← `transform_line` (601) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.7% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)              |
| 1.7% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `changed` (171) ← `prefix` (480) ← `prefix` (329) ← `wrap_in_parentheses` (`black/nodes.py:935`) ← `normalize_invisible_parens` (`black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.7% |    1 MiB |           1 | `_addtoken` (`blib2to3/pgen2/parse.py:290`) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.7% |    1 MiB |           1 | `pop` (`blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

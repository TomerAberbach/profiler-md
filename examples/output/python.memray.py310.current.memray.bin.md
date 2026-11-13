# Peak memory profile

Held 66.3 MiB over 28,443 allocations (2.39 KiB per allocation).

| Category         |     % |     Size | Allocations |
| ---------------- | ----: | -------: | ----------: |
| Ours             | 78.7% | 52.2 MiB |      26,749 |
| Standard library | 20.9% | 13.9 MiB |       1,475 |
| Third-party      |  0.3% |  221 KiB |         219 |

Paths starting with `./` or `../` are relative to `/src/black/src/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── 66.3 MiB (100.0%) _run_tracker at /venv/lib/python3.10/site-packages/memray/commands/run.py:40
    └── 66.3 MiB (100.0%) run_module at /usr/local/lib/python3.10/runpy.py:199
        ├── … 61.2 MiB (92.3%) format_file_contents at ./black/__init__.py:1059
        │   ├── 50.9 MiB (76.8%) format_str at 1168
        │   │   └── 50.9 MiB (76.8%) _format_str_once at 1215
        │   │       ├── 28.6 MiB (43.1%, self 1.5%) visit at ./black/nodes.py:152
        │   │       │   ├── … 21.2 MiB (32.0%, self 3.0%) visit_default at ./black/linegen.py:134
        │   │       │   │   ├── 14.2 MiB (21.3%, self 4.5%) generate_comments at ./black/comments.py:52
        │   │       │   │   │   └── … 11.2 MiB (16.8%, self 21.5% globally) changed at ./blib2to3/pytree.py:160
        │   │       │   │   └── 5.06 MiB (7.6%) append at ./black/lines.py:52
        │   │       │   │       ├── 4.06 MiB (6.1%) whitespace at ./black/nodes.py:183
        │   │       │   │       │   ├── … 2.04 MiB (3.1%, self 6.2% globally) update_sibling_maps at ./blib2to3/pytree.py:358
        │   │       │   │       │   └── 2.01 MiB (3.0%) prev_sibling at ./blib2to3/pytree.py:196 …
        │   │       │   │       └── 1 MiB (1.5%, self 1.5%) mark at ./black/brackets.py:70
        │   │       │   ├── … 1.6 MiB (2.4%) visit_INDENT at ./black/linegen.py:179
        │   │       │   │   ├── 1 MiB (1.5%) line at 109
        │   │       │   │   │   └── 1 MiB (1.5%, self 4.5% globally) __init__ at <string>:2
        │   │       │   │   └── 610 KiB (0.9%) visit_default at 134 …
        │   │       │   └── 4.76 MiB (7.2%) 9 more callees, led by (2.0%) visit_stmt at ./black/linegen.py:199
        │   │       ├── … 15 MiB (22.7%) parse_tokens at ./blib2to3/pgen2/driver.py:114
        │   │       │   ├── 14 MiB (21.2%) addtoken at ./blib2to3/pgen2/parse.py:230
        │   │       │   │   └── 14 MiB (21.1%) _addtoken at 278
        │   │       │   │       ├── 8.01 MiB (12.1%) pop at 386
        │   │       │   │       │   └── 8.01 MiB (12.1%, self 1.5%, self 3.0% globally) convert at ./blib2to3/pytree.py:475
        │   │       │   │       │       └── 7.01 MiB (10.6%) __init__ at 237
        │   │       │   │       ├── 5 MiB (7.5%, self 4.5%) shift at 361
        │   │       │   │       │   └── 2 MiB (3.0%) convert at ./blib2to3/pytree.py:475 …
        │   │       │   │       └── 1 MiB (1.5%) push at 374
        │   │       │   └── 1 MiB (1.5%) __next__ at 80
        │   │       │       └── 1 MiB (1.5%) generate_tokens at ./blib2to3/pgen2/tokenize.py:554
        │   │       ├── 6.09 MiB (9.2%, self 1.6%) transform_line at ./black/linegen.py:601
        │   │       │   ├── 2.04 MiB (3.1%, self 3.1%) run_transformer at 1771
        │   │       │   └── 3 MiB (4.5%) 3 more callees, led by (1.5%) _hugging_power_ops_line_to_string at ./black/linegen.py:590
        │   │       └── 1 MiB (1.5%, self 1.5%) maybe_empty_lines at ./black/lines.py:549
        │   └── … 10.2 MiB (15.4%) parse at /usr/local/lib/python3.10/ast.py:33
        └── … 4.88 MiB (7.4%) exec_module at <frozen importlib._bootstrap_external>:877
            ├── … 3.07 MiB (4.6%) _call_with_frames_removed at <frozen importlib._bootstrap>:233
            └── 1.65 MiB (2.5%) _call_with_frames_removed at <frozen importlib._bootstrap>:233
                ├── … 1 MiB (1.5%) closure at ./blib2to3/pgen2/pgen.py:197
                └── 536 KiB (0.8%) 80 more callees, led by (0.1%) <module> at /venv/lib/python3.10/site-packages/click/types.py:1
```

## Hottest functions

### Self size

Functions with the most bytes held at peak memory within the function body, excluding callees.

|     % |     Size | Allocations | Function                    | Location                              |
| ----: | -------: | ----------: | --------------------------- | ------------------------------------- |
| 21.5% | 14.2 MiB |      25,905 | `changed`                   | `./blib2to3/pytree.py:160`            |
| 15.4% | 10.2 MiB |         983 | `parse`                     | `/usr/local/lib/python3.10/ast.py:33` |
| 10.6% | 7.01 MiB |          12 | `__init__`                  | `./blib2to3/pytree.py:237`            |
|  6.2% | 4.14 MiB |         199 | `update_sibling_maps`       | `./blib2to3/pytree.py:358`            |
|  4.6% | 3.07 MiB |         109 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`   |
|  4.5% |    3 MiB |           4 | `__init__`                  | `<string>:2`                          |
|  4.5% |    3 MiB |           3 | `shift`                     | `./blib2to3/pgen2/parse.py:361`       |
|  4.5% |    3 MiB |           3 | `generate_comments`         | `./black/comments.py:52`              |
|  3.1% | 2.03 MiB |          60 | `run_transformer`           | `./black/linegen.py:1771`             |
|  3.0% |    2 MiB |           2 | `convert`                   | `./blib2to3/pytree.py:475`            |
|  3.0% |    2 MiB |           2 | `visit_default`             | `./black/linegen.py:134`              |
|  1.7% |  1.1 MiB |         189 | `mark`                      | `./black/brackets.py:70`              |
|  1.6% | 1.05 MiB |          25 | `transform_line`            | `./black/linegen.py:601`              |
|  1.5% |    1 MiB |           3 | `generate_tokens`           | `./blib2to3/pgen2/tokenize.py:554`    |
|  1.5% |    1 MiB |           2 | `maybe_empty_lines`         | `./black/lines.py:549`                |
|  1.5% |    1 MiB |           2 | `visit`                     | `./black/nodes.py:152`                |
|  1.5% |    1 MiB |           1 | `closure`                   | `./blib2to3/pgen2/pgen.py:197`        |
|  1.5% |    1 MiB |           1 | `push`                      | `./blib2to3/pgen2/parse.py:374`       |
|  1.5% |    1 MiB |           1 | `__new__`                   | `./blib2to3/pytree.py:70`             |
|  1.5% |    1 MiB |           1 | `prev_sibling`              | `./blib2to3/pytree.py:196`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Ours

|     % |     Size | Allocations | Function                                           | Location                           |
| ----: | -------: | ----------: | -------------------------------------------------- | ---------------------------------- |
| 21.5% | 14.2 MiB |      25,905 | `changed`                                          | `./blib2to3/pytree.py:160`         |
| 10.6% | 7.01 MiB |          12 | `__init__`                                         | `./blib2to3/pytree.py:237`         |
|  6.2% | 4.14 MiB |         199 | `update_sibling_maps`                              | `./blib2to3/pytree.py:358`         |
|  4.5% |    3 MiB |           4 | `__init__`                                         | `<string>:2`                       |
|  4.5% |    3 MiB |           3 | `shift`                                            | `./blib2to3/pgen2/parse.py:361`    |
|  4.5% |    3 MiB |           3 | `generate_comments`                                | `./black/comments.py:52`           |
|  3.1% | 2.03 MiB |          60 | `run_transformer`                                  | `./black/linegen.py:1771`          |
|  3.0% |    2 MiB |           2 | `convert`                                          | `./blib2to3/pytree.py:475`         |
|  3.0% |    2 MiB |           2 | `visit_default`                                    | `./black/linegen.py:134`           |
|  1.7% |  1.1 MiB |         189 | `mark`                                             | `./black/brackets.py:70`           |
|  1.6% | 1.05 MiB |          25 | `transform_line`                                   | `./black/linegen.py:601`           |
|  1.5% |    1 MiB |           3 | `generate_tokens`                                  | `./blib2to3/pgen2/tokenize.py:554` |
|  1.5% |    1 MiB |           2 | `maybe_empty_lines`                                | `./black/lines.py:549`             |
|  1.5% |    1 MiB |           2 | `visit`                                            | `./black/nodes.py:152`             |
|  1.5% |    1 MiB |           1 | `closure`                                          | `./blib2to3/pgen2/pgen.py:197`     |
|  1.5% |    1 MiB |           1 | `push`                                             | `./blib2to3/pgen2/parse.py:374`    |
|  1.5% |    1 MiB |           1 | `__new__`                                          | `./blib2to3/pytree.py:70`          |
|  1.5% |    1 MiB |           1 | `prev_sibling`                                     | `./blib2to3/pytree.py:196`         |
|  1.5% |    1 MiB |           1 | `__init__`                                         | `./black/trans.py:278`             |
|  1.5% |    1 MiB |           1 | `contains_implicit_multiline_string_with_comments` | `./black/lines.py:250`             |

##### Standard library

|     % |     Size | Allocations | Function                    | Location                                                |
| ----: | -------: | ----------: | --------------------------- | ------------------------------------------------------- |
| 15.4% | 10.2 MiB |         983 | `parse`                     | `/usr/local/lib/python3.10/ast.py:33`                   |
|  4.6% | 3.07 MiB |         109 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`                     |
|  0.3% |  222 KiB |           1 | `decode`                    | `/usr/local/lib/python3.10/codecs.py:319`               |
|  0.2% |  159 KiB |         154 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:670`            |
|  0.1% | 65.9 KiB |          67 | `__new__`                   | `/usr/local/lib/python3.10/abc.py:105`                  |
| <0.1% | 22.6 KiB |          12 | `compile`                   | `/usr/local/lib/python3.10/sre_compile.py:783`          |
| <0.1% | 16.3 KiB |          20 | `_parse_sub`                | `/usr/local/lib/python3.10/sre_parse.py:436`            |
| <0.1% | 15.8 KiB |          20 | `__new__`                   | `/usr/local/lib/python3.10/enum.py:180`                 |
| <0.1% | 11.2 KiB |           2 | `inner`                     | `/usr/local/lib/python3.10/typing.py:306`               |
| <0.1% | 9.78 KiB |          11 | `__new__`                   | `/usr/local/lib/python3.10/typing.py:2338`              |
| <0.1% |    8 KiB |           4 | `_fill_cache`               | `<frozen importlib._bootstrap_external>:1587`           |
| <0.1% | 7.78 KiB |          12 | `_compile`                  | `/usr/local/lib/python3.10/sre_compile.py:87`           |
| <0.1% | 7.61 KiB |           6 | `_parse`                    | `/usr/local/lib/python3.10/sre_parse.py:494`            |
| <0.1% | 7.42 KiB |          10 | `namedtuple`                | `/usr/local/lib/python3.10/collections/__init__.py:328` |
| <0.1% | 6.71 KiB |          11 | `__setattr__`               | `/usr/local/lib/python3.10/enum.py:470`                 |
| <0.1% | 6.11 KiB |           9 | `_set_new_attribute`        | `/usr/local/lib/python3.10/dataclasses.py:824`          |
| <0.1% |  4.5 KiB |           8 | `_process_class`            | `/usr/local/lib/python3.10/dataclasses.py:881`          |
| <0.1% | 4.46 KiB |           7 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:987`                     |
| <0.1% | 3.49 KiB |           4 | `<module>`                  | `/usr/local/lib/python3.10/pkgutil.py:1`                |
| <0.1% | 3.05 KiB |           2 | `<module>`                  | `/usr/local/lib/python3.10/secrets.py:1`                |

#### Lines

Lines with the largest contribution to each function's self size.

##### `changed` (`./blib2to3/pytree.py:160`)

|      % |     Size | Allocations | Location                   |
| -----: | -------: | ----------: | -------------------------- |
| 100.0% | 14.2 MiB |      25,905 | `./blib2to3/pytree.py:165` |

##### `parse` (`/usr/local/lib/python3.10/ast.py:33`)

|      % |     Size | Allocations | Location                              |
| -----: | -------: | ----------: | ------------------------------------- |
| 100.0% | 10.2 MiB |         983 | `/usr/local/lib/python3.10/ast.py:50` |

##### `__init__` (`./blib2to3/pytree.py:237`)

|     % |     Size | Allocations | Location                   |
| ----: | -------: | ----------: | -------------------------- |
| 71.4% |    5 MiB |           5 | `./blib2to3/pytree.py:258` |
| 28.6% |    2 MiB |           3 | `./blib2to3/pytree.py:256` |
| <0.1% | 3.03 KiB |           4 | `./blib2to3/pytree.py:255` |

##### `update_sibling_maps` (`./blib2to3/pytree.py:358`)

|     % |     Size | Allocations | Location                   |
| ----: | -------: | ----------: | -------------------------- |
| 49.9% | 2.07 MiB |          95 | `./blib2to3/pytree.py:366` |
| 48.3% |    2 MiB |           2 | `./blib2to3/pytree.py:360` |
|  1.7% |   71 KiB |          93 | `./blib2to3/pytree.py:365` |
|  0.1% | 5.06 KiB |           9 | `./blib2to3/pytree.py:368` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Allocations | Location                            |
| -----: | -------: | ----------: | ----------------------------------- |
| 100.0% | 3.07 MiB |         109 | `<frozen importlib._bootstrap>:241` |

##### `__init__` (`<string>:2`)

|     % |  Size | Allocations | Location      |
| ----: | ----: | ----------: | ------------- |
| 33.3% | 1 MiB |           1 | `<string>:3`  |
| 33.3% | 1 MiB |           1 | `<string>:9`  |
| 33.3% | 1 MiB |           1 | `<string>:8`  |
| <0.1% | 576 B |           1 | `<string>:13` |

##### `shift` (`./blib2to3/pgen2/parse.py:361`)

|      % |  Size | Allocations | Location                        |
| -----: | ----: | ----------: | ------------------------------- |
| 100.0% | 3 MiB |           3 | `./blib2to3/pgen2/parse.py:371` |

##### `generate_comments` (`./black/comments.py:52`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 3 MiB |           3 | `./black/comments.py:72` |

##### `run_transformer` (`./black/linegen.py:1771`)

|     % |   Size | Allocations | Location                  |
| ----: | -----: | ----------: | ------------------------- |
| 98.4% |  2 MiB |           2 | `./black/linegen.py:1782` |
|  1.6% | 33 KiB |          57 | `./black/linegen.py:1786` |

##### `convert` (`./blib2to3/pytree.py:475`)

|     % |  Size | Allocations | Location                   |
| ----: | ----: | ----------: | -------------------------- |
| 50.0% | 1 MiB |           1 | `./blib2to3/pytree.py:492` |
| 50.0% | 1 MiB |           1 | `./blib2to3/pytree.py:490` |

##### `visit_default` (`./black/linegen.py:134`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 2 MiB |           2 | `./black/linegen.py:158` |

##### `mark` (`./black/brackets.py:70`)

|     % |    Size | Allocations | Location                  |
| ----: | ------: | ----------: | ------------------------- |
| 90.6% |   1 MiB |           1 | `./black/brackets.py:122` |
|  9.3% | 105 KiB |         187 | `./black/brackets.py:112` |

##### `transform_line` (`./black/linegen.py:601`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 95.5% |    1 MiB |           1 | `./black/linegen.py:626` |
|  3.4% |   36 KiB |           1 | `./black/linegen.py:679` |
|  1.0% |   11 KiB |          21 | `./black/linegen.py:714` |
|  0.1% | 1.16 KiB |           1 | `./black/linegen.py:722` |
| <0.1% |    536 B |           1 | `./black/linegen.py:635` |

##### `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`)

|     % |     Size | Allocations | Location                            |
| ----: | -------: | ----------: | ----------------------------------- |
| 99.5% |    1 MiB |           1 | `./blib2to3/pgen2/tokenize.py:868`  |
|  0.5% | 4.73 KiB |           2 | `./blib2to3/pgen2/tokenize.py:1092` |

##### `maybe_empty_lines` (`./black/lines.py:549`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 99.9% | 1 MiB |           1 | `./black/lines.py:573` |

##### `visit` (`./black/nodes.py:152`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 1 MiB |           1 | `./black/nodes.py:174` |
|  <0.1% | 520 B |           1 | `./black/nodes.py:172` |

##### `closure` (`./blib2to3/pgen2/pgen.py:197`)

|      % |  Size | Allocations | Location                       |
| -----: | ----: | ----------: | ------------------------------ |
| 100.0% | 1 MiB |           1 | `./blib2to3/pgen2/pgen.py:198` |

##### `push` (`./blib2to3/pgen2/parse.py:374`)

|      % |  Size | Allocations | Location                        |
| -----: | ----: | ----------: | ------------------------------- |
| 100.0% | 1 MiB |           1 | `./blib2to3/pgen2/parse.py:382` |

##### `__new__` (`./blib2to3/pytree.py:70`)

|      % |  Size | Allocations | Location                  |
| -----: | ----: | ----------: | ------------------------- |
| 100.0% | 1 MiB |           1 | `./blib2to3/pytree.py:73` |

##### `prev_sibling` (`./blib2to3/pytree.py:196`)

|      % |  Size | Allocations | Location                   |
| -----: | ----: | ----------: | -------------------------- |
| 100.0% | 1 MiB |           1 | `./blib2to3/pytree.py:208` |

##### `__init__` (`./black/trans.py:278`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 1 MiB |           1 | `./black/trans.py:279` |

##### `contains_implicit_multiline_string_with_comments` (`./black/lines.py:250`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 1 MiB |           1 | `./black/lines.py:257` |

##### `decode` (`/usr/local/lib/python3.10/codecs.py:319`)

|      % |    Size | Allocations | Location                                  |
| -----: | ------: | ----------: | ----------------------------------------- |
| 100.0% | 222 KiB |           1 | `/usr/local/lib/python3.10/codecs.py:322` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:670`)

|      % |    Size | Allocations | Location                                     |
| -----: | ------: | ----------: | -------------------------------------------- |
| 100.0% | 159 KiB |         154 | `<frozen importlib._bootstrap_external>:672` |

##### `__new__` (`/usr/local/lib/python3.10/abc.py:105`)

|     % |    Size | Allocations | Location                               |
| ----: | ------: | ----------: | -------------------------------------- |
| 94.1% |  62 KiB |          61 | `/usr/local/lib/python3.10/abc.py:106` |
|  5.9% | 3.9 KiB |           6 | `/usr/local/lib/python3.10/abc.py:107` |

##### `compile` (`/usr/local/lib/python3.10/sre_compile.py:783`)

|      % |     Size | Allocations | Location                                       |
| -----: | -------: | ----------: | ---------------------------------------------- |
| 100.0% | 22.6 KiB |          12 | `/usr/local/lib/python3.10/sre_compile.py:804` |

##### `_parse_sub` (`/usr/local/lib/python3.10/sre_parse.py:436`)

|      % |     Size | Allocations | Location                                     |
| -----: | -------: | ----------: | -------------------------------------------- |
| 100.0% | 16.3 KiB |          20 | `/usr/local/lib/python3.10/sre_parse.py:444` |

##### `__new__` (`/usr/local/lib/python3.10/enum.py:180`)

|     % |     Size | Allocations | Location                                |
| ----: | -------: | ----------: | --------------------------------------- |
| 78.6% | 12.4 KiB |          14 | `/usr/local/lib/python3.10/enum.py:215` |
| 10.7% | 1.69 KiB |           3 | `/usr/local/lib/python3.10/enum.py:313` |
| 10.7% | 1.69 KiB |           3 | `/usr/local/lib/python3.10/enum.py:318` |

##### `inner` (`/usr/local/lib/python3.10/typing.py:306`)

|      % |     Size | Allocations | Location                                  |
| -----: | -------: | ----------: | ----------------------------------------- |
| 100.0% | 11.2 KiB |           2 | `/usr/local/lib/python3.10/typing.py:309` |

##### `__new__` (`/usr/local/lib/python3.10/typing.py:2338`)

|      % |     Size | Allocations | Location                                   |
| -----: | -------: | ----------: | ------------------------------------------ |
| 100.0% | 9.78 KiB |          11 | `/usr/local/lib/python3.10/typing.py:2350` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1587`)

|      % |  Size | Allocations | Location                                      |
| -----: | ----: | ----------: | --------------------------------------------- |
| 100.0% | 8 KiB |           4 | `<frozen importlib._bootstrap_external>:1599` |

##### `_compile` (`/usr/local/lib/python3.10/sre_compile.py:87`)

|     % |     Size | Allocations | Location                                       |
| ----: | -------: | ----------: | ---------------------------------------------- |
| 41.7% | 3.24 KiB |           5 | `/usr/local/lib/python3.10/sre_compile.py:184` |
| 25.0% | 1.95 KiB |           3 | `/usr/local/lib/python3.10/sre_compile.py:164` |
| 25.0% | 1.95 KiB |           3 | `/usr/local/lib/python3.10/sre_compile.py:225` |
|  8.3% |    664 B |           1 | `/usr/local/lib/python3.10/sre_compile.py:172` |

##### `_parse` (`/usr/local/lib/python3.10/sre_parse.py:494`)

|     % |     Size | Allocations | Location                                     |
| ----: | -------: | ----------: | -------------------------------------------- |
| 20.9% | 1.59 KiB |           3 | `/usr/local/lib/python3.10/sre_parse.py:841` |
|  7.0% |    544 B |           1 | `/usr/local/lib/python3.10/sre_parse.py:755` |

##### `namedtuple` (`/usr/local/lib/python3.10/collections/__init__.py:328`)

|      % |     Size | Allocations | Location                                                |
| -----: | -------: | ----------: | ------------------------------------------------------- |
| 100.0% | 7.42 KiB |          10 | `/usr/local/lib/python3.10/collections/__init__.py:481` |

##### `__setattr__` (`/usr/local/lib/python3.10/enum.py:470`)

|      % |     Size | Allocations | Location                                |
| -----: | -------: | ----------: | --------------------------------------- |
| 100.0% | 6.71 KiB |          11 | `/usr/local/lib/python3.10/enum.py:481` |

##### `_set_new_attribute` (`/usr/local/lib/python3.10/dataclasses.py:824`)

|      % |     Size | Allocations | Location                                       |
| -----: | -------: | ----------: | ---------------------------------------------- |
| 100.0% | 6.11 KiB |           9 | `/usr/local/lib/python3.10/dataclasses.py:830` |

##### `_process_class` (`/usr/local/lib/python3.10/dataclasses.py:881`)

|     % |     Size | Allocations | Location                                        |
| ----: | -------: | ----------: | ----------------------------------------------- |
| 62.5% | 2.81 KiB |           5 | `/usr/local/lib/python3.10/dataclasses.py:1088` |
| 12.5% |    576 B |           1 | `/usr/local/lib/python3.10/dataclasses.py:899`  |
| 12.5% |    576 B |           1 | `/usr/local/lib/python3.10/dataclasses.py:958`  |
| 12.5% |    576 B |           1 | `/usr/local/lib/python3.10/dataclasses.py:995`  |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:987`)

|      % |     Size | Allocations | Location                             |
| -----: | -------: | ----------: | ------------------------------------ |
| 100.0% | 4.46 KiB |           7 | `<frozen importlib._bootstrap>:1012` |

##### `<module>` (`/usr/local/lib/python3.10/pkgutil.py:1`)

|     % |     Size | Allocations | Location                                   |
| ----: | -------: | ----------: | ------------------------------------------ |
| 42.5% | 1.48 KiB |           2 | `/usr/local/lib/python3.10/pkgutil.py:269` |
| 31.1% | 1.09 KiB |           1 | `/usr/local/lib/python3.10/pkgutil.py:137` |
| 26.4% |    944 B |           1 | `/usr/local/lib/python3.10/pkgutil.py:194` |

##### `<module>` (`/usr/local/lib/python3.10/secrets.py:1`)

|     % |     Size | Allocations | Location                                  |
| ----: | -------: | ----------: | ----------------------------------------- |
| 81.6% | 2.49 KiB |           1 | `/usr/local/lib/python3.10/secrets.py:21` |
| 18.4% |    576 B |           1 | `/usr/local/lib/python3.10/secrets.py:16` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `changed` (`./blib2to3/pytree.py:160`)

|      % |     Size | Allocations | Caller   | Location                   |
| -----: | -------: | ----------: | -------- | -------------------------- |
| 100.0% | 14.2 MiB |      25,905 | `prefix` | `./blib2to3/pytree.py:469` |

##### `parse` (`/usr/local/lib/python3.10/ast.py:33`)

|      % |     Size | Allocations | Caller                  | Location                 |
| -----: | -------: | ----------: | ----------------------- | ------------------------ |
| 100.0% | 10.2 MiB |         983 | `_parse_single_version` | `./black/parsing.py:125` |

##### `__init__` (`./blib2to3/pytree.py:237`)

|      % |     Size | Allocations | Caller    | Location                   |
| -----: | -------: | ----------: | --------- | -------------------------- |
| 100.0% | 7.01 MiB |          12 | `convert` | `./blib2to3/pytree.py:475` |

##### `update_sibling_maps` (`./blib2to3/pytree.py:358`)

|      % |     Size | Allocations | Caller         | Location                   |
| -----: | -------: | ----------: | -------------- | -------------------------- |
| 100.0% | 4.14 MiB |         199 | `prev_sibling` | `./blib2to3/pytree.py:196` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Allocations | Caller           | Location                                     |
| -----: | -------: | ----------: | ---------------- | -------------------------------------------- |
| 100.0% | 3.07 MiB |         109 | `source_to_code` | `<frozen importlib._bootstrap_external>:942` |

##### `__init__` (`<string>:2`)

|      % |  Size | Allocations | Caller     | Location                  |
| -----: | ----: | ----------: | ---------- | ------------------------- |
| 100.0% | 3 MiB |           3 | `__init__` | `<string>:2`              |
|  <0.1% | 576 B |           1 | `main`     | `./black/__init__.py:240` |

##### `shift` (`./blib2to3/pgen2/parse.py:361`)

|      % |  Size | Allocations | Caller      | Location                        |
| -----: | ----: | ----------: | ----------- | ------------------------------- |
| 100.0% | 3 MiB |           3 | `_addtoken` | `./blib2to3/pgen2/parse.py:278` |

##### `generate_comments` (`./black/comments.py:52`)

|      % |  Size | Allocations | Caller          | Location                 |
| -----: | ----: | ----------: | --------------- | ------------------------ |
| 100.0% | 3 MiB |           3 | `visit_default` | `./black/linegen.py:134` |

##### `run_transformer` (`./black/linegen.py:1771`)

|      % |     Size | Allocations | Caller           | Location                 |
| -----: | -------: | ----------: | ---------------- | ------------------------ |
| 100.0% | 2.03 MiB |          60 | `transform_line` | `./black/linegen.py:601` |

##### `convert` (`./blib2to3/pytree.py:475`)

|     % |  Size | Allocations | Caller  | Location                        |
| ----: | ----: | ----------: | ------- | ------------------------------- |
| 50.0% | 1 MiB |           1 | `pop`   | `./blib2to3/pgen2/parse.py:386` |
| 50.0% | 1 MiB |           1 | `shift` | `./blib2to3/pgen2/parse.py:361` |

##### `visit_default` (`./black/linegen.py:134`)

|      % |  Size | Allocations | Caller  | Location               |
| -----: | ----: | ----------: | ------- | ---------------------- |
| 100.0% | 2 MiB |           2 | `visit` | `./black/nodes.py:152` |

##### `mark` (`./black/brackets.py:70`)

|     % |    Size | Allocations | Caller                           | Location                  |
| ----: | ------: | ----------: | -------------------------------- | ------------------------- |
| 90.7% |   1 MiB |           3 | `append`                         | `./black/lines.py:52`     |
|  9.3% | 105 KiB |         186 | `max_delimiter_priority_in_atom` | `./black/brackets.py:328` |

##### `transform_line` (`./black/linegen.py:601`)

|     % |     Size | Allocations | Caller             | Location                   |
| ----: | -------: | ----------: | ------------------ | -------------------------- |
| 99.0% | 1.04 MiB |           5 | `_format_str_once` | `./black/__init__.py:1215` |
|  1.0% | 10.5 KiB |          20 | `run_transformer`  | `./black/linegen.py:1771`  |

##### `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`)

|     % |     Size | Allocations | Caller     | Location                        |
| ----: | -------: | ----------: | ---------- | ------------------------------- |
| 99.5% |    1 MiB |           1 | `__next__` | `./blib2to3/pgen2/driver.py:80` |
|  0.5% | 4.73 KiB |           2 | `gettoken` | `./blib2to3/pgen2/pgen.py:346`  |

##### `maybe_empty_lines` (`./black/lines.py:549`)

|      % |  Size | Allocations | Caller             | Location                   |
| -----: | ----: | ----------: | ------------------ | -------------------------- |
| 100.0% | 1 MiB |           2 | `_format_str_once` | `./black/__init__.py:1215` |

##### `visit` (`./black/nodes.py:152`)

|      % |  Size | Allocations | Caller          | Location               |
| -----: | ----: | ----------: | --------------- | ---------------------- |
| 100.0% | 1 MiB |           2 | `visit_default` | `./black/nodes.py:176` |

##### `closure` (`./blib2to3/pgen2/pgen.py:197`)

|      % |  Size | Allocations | Caller     | Location                       |
| -----: | ----: | ----------: | ---------- | ------------------------------ |
| 100.0% | 1 MiB |           1 | `make_dfa` | `./blib2to3/pgen2/pgen.py:189` |

##### `push` (`./blib2to3/pgen2/parse.py:374`)

|      % |  Size | Allocations | Caller      | Location                        |
| -----: | ----: | ----------: | ----------- | ------------------------------- |
| 100.0% | 1 MiB |           1 | `_addtoken` | `./blib2to3/pgen2/parse.py:278` |

##### `__new__` (`./blib2to3/pytree.py:70`)

|      % |  Size | Allocations | Caller    | Location                   |
| -----: | ----: | ----------: | --------- | -------------------------- |
| 100.0% | 1 MiB |           1 | `convert` | `./blib2to3/pytree.py:475` |

##### `prev_sibling` (`./blib2to3/pytree.py:196`)

|      % |  Size | Allocations | Caller       | Location               |
| -----: | ----: | ----------: | ------------ | ---------------------- |
| 100.0% | 1 MiB |           1 | `whitespace` | `./black/nodes.py:183` |

##### `__init__` (`./black/trans.py:278`)

|      % |  Size | Allocations | Caller           | Location                 |
| -----: | ----: | ----------: | ---------------- | ------------------------ |
| 100.0% | 1 MiB |           1 | `transform_line` | `./black/linegen.py:601` |

##### `contains_implicit_multiline_string_with_comments` (`./black/lines.py:250`)

|      % |  Size | Allocations | Caller           | Location                 |
| -----: | ----: | ----------: | ---------------- | ------------------------ |
| 100.0% | 1 MiB |           1 | `transform_line` | `./black/linegen.py:601` |

##### `decode` (`/usr/local/lib/python3.10/codecs.py:319`)

|      % |    Size | Allocations | Caller         | Location                   |
| -----: | ------: | ----------: | -------------- | -------------------------- |
| 100.0% | 222 KiB |           1 | `decode_bytes` | `./black/__init__.py:1269` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:670`)

|      % |    Size | Allocations | Caller     | Location                                     |
| -----: | ------: | ----------: | ---------- | -------------------------------------------- |
| 100.0% | 159 KiB |         154 | `get_code` | `<frozen importlib._bootstrap_external>:950` |

##### `__new__` (`/usr/local/lib/python3.10/abc.py:105`)

|     % |     Size | Allocations | Caller     | Location                                                       |
| ----: | -------: | ----------: | ---------- | -------------------------------------------------------------- |
| 44.2% | 29.1 KiB |          34 | `<module>` | `/venv/lib/python3.10/site-packages/click/types.py:1`          |
| 23.9% | 15.7 KiB |          17 | `<module>` | `./black/trans.py:1`                                           |
| 20.9% | 13.8 KiB |           8 | `<module>` | `/venv/lib/python3.10/site-packages/click/core.py:1`           |
| 11.0% | 7.25 KiB |           8 | `<module>` | `/venv/lib/python3.10/site-packages/packaging/specifiers.py:1` |

##### `compile` (`/usr/local/lib/python3.10/sre_compile.py:783`)

|      % |     Size | Allocations | Caller     | Location                              |
| -----: | -------: | ----------: | ---------- | ------------------------------------- |
| 100.0% | 22.6 KiB |          12 | `_compile` | `/usr/local/lib/python3.10/re.py:288` |

##### `_parse_sub` (`/usr/local/lib/python3.10/sre_parse.py:436`)

|      % |     Size | Allocations | Caller   | Location                                     |
| -----: | -------: | ----------: | -------- | -------------------------------------------- |
| 100.0% | 16.3 KiB |          20 | `_parse` | `/usr/local/lib/python3.10/sre_parse.py:494` |

##### `__new__` (`/usr/local/lib/python3.10/enum.py:180`)

|     % |     Size | Allocations | Caller     | Location                                                     |
| ----: | -------: | ----------: | ---------- | ------------------------------------------------------------ |
| 38.8% | 6.14 KiB |           9 | `<module>` | `./black/mode.py:1`                                          |
| 17.5% | 2.77 KiB |           3 | `<module>` | `/venv/lib/python3.10/site-packages/packaging/_elffile.py:1` |
| 10.9% | 1.73 KiB |           2 | `<module>` | `/venv/lib/python3.10/site-packages/click/core.py:1`         |
|  9.4% | 1.48 KiB |           2 | `<module>` | `/venv/lib/python3.10/site-packages/click/_utils.py:1`       |
|  5.8% |    944 B |           1 | `<module>` | `/venv/lib/python3.10/site-packages/packaging/_ranges.py:1`  |

##### `inner` (`/usr/local/lib/python3.10/typing.py:306`)

|     % |     Size | Allocations | Caller        | Location                                  |
| ----: | -------: | ----------: | ------------- | ----------------------------------------- |
| 80.7% | 9.03 KiB |           1 | `Optional`    | `/usr/local/lib/python3.10/typing.py:523` |
| 19.3% | 2.16 KiB |           1 | `__getitem__` | `/usr/local/lib/python3.10/typing.py:407` |

##### `__new__` (`/usr/local/lib/python3.10/typing.py:2338`)

|     % |     Size | Allocations | Caller     | Location                                                    |
| ----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 90.6% | 8.86 KiB |          10 | `<module>` | `/venv/lib/python3.10/site-packages/click/types.py:1`       |
|  9.4% |    944 B |           1 | `<module>` | `/venv/lib/python3.10/site-packages/packaging/version.py:1` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1587`)

|      % |  Size | Allocations | Caller      | Location                                      |
| -----: | ----: | ----------: | ----------- | --------------------------------------------- |
| 100.0% | 8 KiB |           4 | `find_spec` | `<frozen importlib._bootstrap_external>:1536` |

##### `_compile` (`/usr/local/lib/python3.10/sre_compile.py:87`)

|     % |     Size | Allocations | Caller     | Location                                       |
| ----: | -------: | ----------: | ---------- | ---------------------------------------------- |
| 58.3% | 4.54 KiB |           7 | `_compile` | `/usr/local/lib/python3.10/sre_compile.py:87`  |
| 41.7% | 3.24 KiB |           5 | `_code`    | `/usr/local/lib/python3.10/sre_compile.py:622` |

##### `_parse` (`/usr/local/lib/python3.10/sre_parse.py:494`)

|      % |     Size | Allocations | Caller       | Location                                     |
| -----: | -------: | ----------: | ------------ | -------------------------------------------- |
| 100.0% | 7.61 KiB |           6 | `_parse_sub` | `/usr/local/lib/python3.10/sre_parse.py:436` |

##### `namedtuple` (`/usr/local/lib/python3.10/collections/__init__.py:328`)

|     % |     Size | Allocations | Caller          | Location                                   |
| ----: | -------: | ----------: | --------------- | ------------------------------------------ |
| 80.0% | 5.94 KiB |           8 | `_make_nmtuple` | `/usr/local/lib/python3.10/typing.py:2247` |
| 20.0% | 1.48 KiB |           2 | `<module>`      | `/usr/local/lib/python3.10/pkgutil.py:1`   |

##### `__setattr__` (`/usr/local/lib/python3.10/enum.py:470`)

|      % |     Size | Allocations | Caller    | Location                                |
| -----: | -------: | ----------: | --------- | --------------------------------------- |
| 100.0% | 6.71 KiB |          11 | `__new__` | `/usr/local/lib/python3.10/enum.py:180` |

##### `_set_new_attribute` (`/usr/local/lib/python3.10/dataclasses.py:824`)

|      % |     Size | Allocations | Caller           | Location                                       |
| -----: | -------: | ----------: | ---------------- | ---------------------------------------------- |
| 100.0% | 6.11 KiB |           9 | `_process_class` | `/usr/local/lib/python3.10/dataclasses.py:881` |

##### `_process_class` (`/usr/local/lib/python3.10/dataclasses.py:881`)

|      % |    Size | Allocations | Caller | Location                                        |
| -----: | ------: | ----------: | ------ | ----------------------------------------------- |
| 100.0% | 4.5 KiB |           8 | `wrap` | `/usr/local/lib/python3.10/dataclasses.py:1174` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:987`)

|      % |     Size | Allocations | Caller           | Location                             |
| -----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 100.0% | 4.46 KiB |           7 | `_find_and_load` | `<frozen importlib._bootstrap>:1022` |

##### `<module>` (`/usr/local/lib/python3.10/pkgutil.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.49 KiB |           4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/usr/local/lib/python3.10/secrets.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.05 KiB |           2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

### Total size

Functions with the most bytes held at peak memory within the function and its callees.

|      % |     Size | Allocations | Function               | Location                                                       |
| -----: | -------: | ----------: | ---------------------- | -------------------------------------------------------------- |
| 100.0% | 66.3 MiB |      28,443 | `run_module`           | `/usr/local/lib/python3.10/runpy.py:199`                       |
| 100.0% | 66.3 MiB |      28,443 | `_run_tracker`         | `/venv/lib/python3.10/site-packages/memray/commands/run.py:40` |
|  92.6% | 61.4 MiB |      27,568 | `_run_module_code`     | `/usr/local/lib/python3.10/runpy.py:89`                        |
|  92.6% | 61.4 MiB |      27,567 | `_run_code`            | `/usr/local/lib/python3.10/runpy.py:63`                        |
|  92.6% | 61.4 MiB |      27,566 | `__call__`             | `/venv/lib/python3.10/site-packages/click/core.py:1651`        |
|  92.6% | 61.4 MiB |      27,566 | `patched_main`         | `./black/__init__.py:1580`                                     |
|  92.6% | 61.4 MiB |      27,566 | `<module>`             | `./black/__main__.py:1`                                        |
|  92.6% | 61.4 MiB |      27,565 | `main`                 | `/venv/lib/python3.10/site-packages/click/core.py:1483`        |
|  92.6% | 61.4 MiB |      27,548 | `invoke`               | `/venv/lib/python3.10/site-packages/click/core.py:1400`        |
|  92.6% | 61.4 MiB |      27,546 | `invoke`               | `/venv/lib/python3.10/site-packages/click/core.py:861`         |
|  92.6% | 61.4 MiB |      27,544 | `new_func`             | `/venv/lib/python3.10/site-packages/click/decorators.py:33`    |
|  92.6% | 61.4 MiB |      27,542 | `main`                 | `./black/__init__.py:240`                                      |
|  92.6% | 61.4 MiB |      27,533 | `reformat_one`         | `./black/__init__.py:865`                                      |
|  92.6% | 61.4 MiB |      27,531 | `format_file_in_place` | `./black/__init__.py:922`                                      |
|  92.3% | 61.2 MiB |      27,528 | `format_file_contents` | `./black/__init__.py:1059`                                     |
|  76.8% | 50.9 MiB |      26,545 | `format_str`           | `./black/__init__.py:1168`                                     |
|  76.8% | 50.9 MiB |      26,544 | `_format_str_once`     | `./black/__init__.py:1215`                                     |
|  43.1% | 28.6 MiB |      26,395 | `visit`                | `./black/nodes.py:152`                                         |
|  43.1% | 28.6 MiB |      26,394 | `visit_default`        | `./black/nodes.py:176`                                         |
|  43.1% | 28.6 MiB |      26,394 | `visit_default`        | `./black/linegen.py:134`                                       |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Ours

|     % |     Size | Allocations | Function               | Location                         |
| ----: | -------: | ----------: | ---------------------- | -------------------------------- |
| 92.6% | 61.4 MiB |      27,566 | `patched_main`         | `./black/__init__.py:1580`       |
| 92.6% | 61.4 MiB |      27,566 | `<module>`             | `./black/__main__.py:1`          |
| 92.6% | 61.4 MiB |      27,542 | `main`                 | `./black/__init__.py:240`        |
| 92.6% | 61.4 MiB |      27,533 | `reformat_one`         | `./black/__init__.py:865`        |
| 92.6% | 61.4 MiB |      27,531 | `format_file_in_place` | `./black/__init__.py:922`        |
| 92.3% | 61.2 MiB |      27,528 | `format_file_contents` | `./black/__init__.py:1059`       |
| 76.8% | 50.9 MiB |      26,545 | `format_str`           | `./black/__init__.py:1168`       |
| 76.8% | 50.9 MiB |      26,544 | `_format_str_once`     | `./black/__init__.py:1215`       |
| 43.1% | 28.6 MiB |      26,395 | `visit`                | `./black/nodes.py:152`           |
| 43.1% | 28.6 MiB |      26,394 | `visit_default`        | `./black/nodes.py:176`           |
| 43.1% | 28.6 MiB |      26,394 | `visit_default`        | `./black/linegen.py:134`         |
| 42.6% | 28.2 MiB |      25,806 | `visit_stmt`           | `./black/linegen.py:199`         |
| 42.2% |   28 MiB |      25,388 | `visit_suite`          | `./black/linegen.py:288`         |
| 42.2% |   28 MiB |      25,386 | `visit_funcdef`        | `./black/linegen.py:254`         |
| 26.5% | 17.5 MiB |      15,456 | `visit_simple_stmt`    | `./black/linegen.py:295`         |
| 24.1% |   16 MiB |      23,657 | `generate_comments`    | `./black/comments.py:52`         |
| 22.7% |   15 MiB |          35 | `parse_string`         | `./blib2to3/pgen2/driver.py:198` |
| 22.7% |   15 MiB |          35 | `lib2to3_parse`        | `./black/parsing.py:55`          |
| 22.7% |   15 MiB |          34 | `parse_tokens`         | `./blib2to3/pgen2/driver.py:114` |
| 21.5% | 14.2 MiB |      25,905 | `changed`              | `./blib2to3/pytree.py:160`       |

##### Standard library

|      % |     Size | Allocations | Function                    | Location                                       |
| -----: | -------: | ----------: | --------------------------- | ---------------------------------------------- |
| 100.0% | 66.3 MiB |      28,443 | `run_module`                | `/usr/local/lib/python3.10/runpy.py:199`       |
|  92.6% | 61.4 MiB |      27,568 | `_run_module_code`          | `/usr/local/lib/python3.10/runpy.py:89`        |
|  92.6% | 61.4 MiB |      27,567 | `_run_code`                 | `/usr/local/lib/python3.10/runpy.py:63`        |
|  15.4% | 10.2 MiB |         983 | `parse`                     | `/usr/local/lib/python3.10/ast.py:33`          |
|   7.4% | 4.89 MiB |         874 | `_get_module_details`       | `/usr/local/lib/python3.10/runpy.py:103`       |
|   7.4% | 4.89 MiB |         871 | `exec_module`               | `<frozen importlib._bootstrap_external>:877`   |
|   7.4% | 4.89 MiB |         871 | `_load_unlocked`            | `<frozen importlib._bootstrap>:664`            |
|   7.4% | 4.89 MiB |         871 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:987`            |
|   7.4% | 4.89 MiB |         871 | `_find_and_load`            | `<frozen importlib._bootstrap>:1022`           |
|   7.4% | 4.89 MiB |         870 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`            |
|   4.9% | 3.23 MiB |         264 | `get_code`                  | `<frozen importlib._bootstrap_external>:950`   |
|   4.6% | 3.07 MiB |         109 | `source_to_code`            | `<frozen importlib._bootstrap_external>:942`   |
|   0.3% |  222 KiB |           1 | `decode`                    | `/usr/local/lib/python3.10/codecs.py:319`      |
|   0.3% |  219 KiB |         222 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1053`           |
|   0.2% |  159 KiB |         154 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:670`   |
|   0.1% |   67 KiB |          69 | `__new__`                   | `/usr/local/lib/python3.10/abc.py:105`         |
|   0.1% | 55.6 KiB |          52 | `_compile`                  | `/usr/local/lib/python3.10/re.py:288`          |
|   0.1% | 54.8 KiB |          51 | `compile`                   | `/usr/local/lib/python3.10/sre_compile.py:783` |
|   0.1% | 50.7 KiB |          45 | `compile`                   | `/usr/local/lib/python3.10/re.py:249`          |
|  <0.1% | 24.4 KiB |          27 | `_parse_sub`                | `/usr/local/lib/python3.10/sre_parse.py:436`   |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run_module` (`/usr/local/lib/python3.10/runpy.py:199`)

|      % |     Size | Allocations | Caller         | Location                                                       |
| -----: | -------: | ----------: | -------------- | -------------------------------------------------------------- |
| 100.0% | 66.3 MiB |      28,443 | `_run_tracker` | `/venv/lib/python3.10/site-packages/memray/commands/run.py:40` |

##### `_run_module_code` (`/usr/local/lib/python3.10/runpy.py:89`)

|      % |     Size | Allocations | Caller       | Location                                 |
| -----: | -------: | ----------: | ------------ | ---------------------------------------- |
| 100.0% | 61.4 MiB |      27,568 | `run_module` | `/usr/local/lib/python3.10/runpy.py:199` |

##### `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`)

|      % |     Size | Allocations | Caller             | Location                                |
| -----: | -------: | ----------: | ------------------ | --------------------------------------- |
| 100.0% | 61.4 MiB |      27,567 | `_run_module_code` | `/usr/local/lib/python3.10/runpy.py:89` |

##### `__call__` (`/venv/lib/python3.10/site-packages/click/core.py:1651`)

|      % |     Size | Allocations | Caller         | Location                   |
| -----: | -------: | ----------: | -------------- | -------------------------- |
| 100.0% | 61.4 MiB |      27,566 | `patched_main` | `./black/__init__.py:1580` |

##### `patched_main` (`./black/__init__.py:1580`)

|      % |     Size | Allocations | Caller     | Location                |
| -----: | -------: | ----------: | ---------- | ----------------------- |
| 100.0% | 61.4 MiB |      27,566 | `<module>` | `./black/__main__.py:1` |

##### `<module>` (`./black/__main__.py:1`)

|      % |     Size | Allocations | Caller      | Location                                |
| -----: | -------: | ----------: | ----------- | --------------------------------------- |
| 100.0% | 61.4 MiB |      27,566 | `_run_code` | `/usr/local/lib/python3.10/runpy.py:63` |

##### `main` (`/venv/lib/python3.10/site-packages/click/core.py:1483`)

|      % |     Size | Allocations | Caller     | Location                                                |
| -----: | -------: | ----------: | ---------- | ------------------------------------------------------- |
| 100.0% | 61.4 MiB |      27,565 | `__call__` | `/venv/lib/python3.10/site-packages/click/core.py:1651` |

##### `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:1400`)

|      % |     Size | Allocations | Caller | Location                                                |
| -----: | -------: | ----------: | ------ | ------------------------------------------------------- |
| 100.0% | 61.4 MiB |      27,548 | `main` | `/venv/lib/python3.10/site-packages/click/core.py:1483` |

##### `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`)

|      % |     Size | Allocations | Caller   | Location                                                |
| -----: | -------: | ----------: | -------- | ------------------------------------------------------- |
| 100.0% | 61.4 MiB |      27,546 | `invoke` | `/venv/lib/python3.10/site-packages/click/core.py:1400` |

##### `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`)

|      % |     Size | Allocations | Caller   | Location                                               |
| -----: | -------: | ----------: | -------- | ------------------------------------------------------ |
| 100.0% | 61.4 MiB |      27,544 | `invoke` | `/venv/lib/python3.10/site-packages/click/core.py:861` |

##### `main` (`./black/__init__.py:240`)

|      % |     Size | Allocations | Caller     | Location                                                    |
| -----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 100.0% | 61.4 MiB |      27,542 | `new_func` | `/venv/lib/python3.10/site-packages/click/decorators.py:33` |

##### `reformat_one` (`./black/__init__.py:865`)

|      % |     Size | Allocations | Caller | Location                  |
| -----: | -------: | ----------: | ------ | ------------------------- |
| 100.0% | 61.4 MiB |      27,533 | `main` | `./black/__init__.py:240` |

##### `format_file_in_place` (`./black/__init__.py:922`)

|      % |     Size | Allocations | Caller         | Location                  |
| -----: | -------: | ----------: | -------------- | ------------------------- |
| 100.0% | 61.4 MiB |      27,531 | `reformat_one` | `./black/__init__.py:865` |

##### `format_file_contents` (`./black/__init__.py:1059`)

|      % |     Size | Allocations | Caller                 | Location                  |
| -----: | -------: | ----------: | ---------------------- | ------------------------- |
| 100.0% | 61.2 MiB |      27,528 | `format_file_in_place` | `./black/__init__.py:922` |

##### `format_str` (`./black/__init__.py:1168`)

|      % |     Size | Allocations | Caller                 | Location                   |
| -----: | -------: | ----------: | ---------------------- | -------------------------- |
| 100.0% | 50.9 MiB |      26,545 | `format_file_contents` | `./black/__init__.py:1059` |

##### `_format_str_once` (`./black/__init__.py:1215`)

|      % |     Size | Allocations | Caller       | Location                   |
| -----: | -------: | ----------: | ------------ | -------------------------- |
| 100.0% | 50.9 MiB |      26,544 | `format_str` | `./black/__init__.py:1168` |

##### `visit` (`./black/nodes.py:152`)

|      % |     Size | Allocations | Caller             | Location                   |
| -----: | -------: | ----------: | ------------------ | -------------------------- |
| 100.0% | 28.6 MiB |      26,395 | `_format_str_once` | `./black/__init__.py:1215` |
| 100.0% | 28.6 MiB |      26,394 | `visit_default`    | `./black/nodes.py:176`     |
|  98.4% | 28.1 MiB |      25,613 | `visit_stmt`       | `./black/linegen.py:199`   |
|  97.9% |   28 MiB |      25,386 | `visit_funcdef`    | `./black/linegen.py:254`   |
|   0.4% |  131 KiB |         232 | `visit_decorators` | `./black/linegen.py:335`   |

##### `visit_default` (`./black/nodes.py:176`)

|      % |     Size | Allocations | Caller          | Location                 |
| -----: | -------: | ----------: | --------------- | ------------------------ |
| 100.0% | 28.6 MiB |      26,394 | `visit_default` | `./black/linegen.py:134` |

##### `visit_default` (`./black/linegen.py:134`)

|      % |     Size | Allocations | Caller              | Location                 |
| -----: | -------: | ----------: | ------------------- | ------------------------ |
| 100.0% | 28.6 MiB |      26,394 | `visit`             | `./black/nodes.py:152`   |
|  98.0% |   28 MiB |      25,388 | `visit_suite`       | `./black/linegen.py:288` |
|  57.9% | 16.5 MiB |      15,454 | `visit_simple_stmt` | `./black/linegen.py:295` |
|  35.9% | 10.3 MiB |       9,583 | `visit_power`       | `./black/linegen.py:341` |
|   4.5% | 1.29 MiB |         526 | `visit_NUMBER`      | `./black/linegen.py:505` |

##### `visit_stmt` (`./black/linegen.py:199`)

|      % |     Size | Allocations | Caller  | Location               |
| -----: | -------: | ----------: | ------- | ---------------------- |
| 100.0% | 28.2 MiB |      25,806 | `visit` | `./black/nodes.py:152` |

##### `visit_suite` (`./black/linegen.py:288`)

|      % |   Size | Allocations | Caller  | Location               |
| -----: | -----: | ----------: | ------- | ---------------------- |
| 100.0% | 28 MiB |      25,388 | `visit` | `./black/nodes.py:152` |

##### `visit_funcdef` (`./black/linegen.py:254`)

|      % |   Size | Allocations | Caller  | Location               |
| -----: | -----: | ----------: | ------- | ---------------------- |
| 100.0% | 28 MiB |      25,386 | `visit` | `./black/nodes.py:152` |

##### `visit_simple_stmt` (`./black/linegen.py:295`)

|      % |     Size | Allocations | Caller  | Location               |
| -----: | -------: | ----------: | ------- | ---------------------- |
| 100.0% | 17.5 MiB |      15,456 | `visit` | `./black/nodes.py:152` |

##### `generate_comments` (`./black/comments.py:52`)

|      % |   Size | Allocations | Caller          | Location                 |
| -----: | -----: | ----------: | --------------- | ------------------------ |
| 100.0% | 16 MiB |      23,657 | `visit_default` | `./black/linegen.py:134` |

##### `parse_string` (`./blib2to3/pgen2/driver.py:198`)

|      % |   Size | Allocations | Caller          | Location                |
| -----: | -----: | ----------: | --------------- | ----------------------- |
| 100.0% | 15 MiB |          35 | `lib2to3_parse` | `./black/parsing.py:55` |

##### `lib2to3_parse` (`./black/parsing.py:55`)

|      % |   Size | Allocations | Caller             | Location                   |
| -----: | -----: | ----------: | ------------------ | -------------------------- |
| 100.0% | 15 MiB |          35 | `_format_str_once` | `./black/__init__.py:1215` |

##### `parse_tokens` (`./blib2to3/pgen2/driver.py:114`)

|      % |   Size | Allocations | Caller         | Location                         |
| -----: | -----: | ----------: | -------------- | -------------------------------- |
| 100.0% | 15 MiB |          34 | `parse_string` | `./blib2to3/pgen2/driver.py:198` |

##### `changed` (`./blib2to3/pytree.py:160`)

|      % |     Size | Allocations | Caller   | Location                   |
| -----: | -------: | ----------: | -------- | -------------------------- |
| 100.0% | 14.2 MiB |      25,905 | `prefix` | `./blib2to3/pytree.py:469` |

##### `parse` (`/usr/local/lib/python3.10/ast.py:33`)

|      % |     Size | Allocations | Caller                  | Location                 |
| -----: | -------: | ----------: | ----------------------- | ------------------------ |
| 100.0% | 10.2 MiB |         983 | `_parse_single_version` | `./black/parsing.py:125` |

##### `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`)

|      % |     Size | Allocations | Caller                | Location                                 |
| -----: | -------: | ----------: | --------------------- | ---------------------------------------- |
| 100.0% | 4.89 MiB |         874 | `run_module`          | `/usr/local/lib/python3.10/runpy.py:199` |
|  99.9% | 4.89 MiB |         871 | `_get_module_details` | `/usr/local/lib/python3.10/runpy.py:103` |

##### `exec_module` (`<frozen importlib._bootstrap_external>:877`)

|      % |     Size | Allocations | Caller           | Location                            |
| -----: | -------: | ----------: | ---------------- | ----------------------------------- |
| 100.0% | 4.89 MiB |         871 | `_load_unlocked` | `<frozen importlib._bootstrap>:664` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:664`)

|      % |     Size | Allocations | Caller                    | Location                            |
| -----: | -------: | ----------: | ------------------------- | ----------------------------------- |
| 100.0% | 4.89 MiB |         871 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:987` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:987`)

|      % |     Size | Allocations | Caller           | Location                             |
| -----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 100.0% | 4.89 MiB |         871 | `_find_and_load` | `<frozen importlib._bootstrap>:1022` |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1022`)

|      % |     Size | Allocations | Caller                      | Location                                                 |
| -----: | -------: | ----------: | --------------------------- | -------------------------------------------------------- |
| 100.0% | 4.89 MiB |         871 | `_get_module_details`       | `/usr/local/lib/python3.10/runpy.py:103`                 |
|  79.1% | 3.87 MiB |         842 | `<module>`                  | `./black/__init__.py:1`                                  |
|  25.6% | 1.25 MiB |         206 | `<module>`                  | `./black/comments.py:1`                                  |
|   4.6% |  228 KiB |         233 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`                      |
|   4.2% |  211 KiB |         194 | `<module>`                  | `/venv/lib/python3.10/site-packages/click/__init__.py:1` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|     % |     Size | Allocations | Caller                    | Location                                     |
| ----: | -------: | ----------: | ------------------------- | -------------------------------------------- |
| 79.3% | 3.88 MiB |         855 | `exec_module`             | `<frozen importlib._bootstrap_external>:877` |
| 62.9% | 3.07 MiB |         109 | `source_to_code`          | `<frozen importlib._bootstrap_external>:942` |
|  4.4% |  219 KiB |         222 | `_handle_fromlist`        | `<frozen importlib._bootstrap>:1053`         |
|  0.6% | 30.3 KiB |          39 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:987`          |

##### `get_code` (`<frozen importlib._bootstrap_external>:950`)

|      % |     Size | Allocations | Caller        | Location                                     |
| -----: | -------: | ----------: | ------------- | -------------------------------------------- |
| 100.0% | 3.23 MiB |         264 | `exec_module` | `<frozen importlib._bootstrap_external>:877` |

##### `source_to_code` (`<frozen importlib._bootstrap_external>:942`)

|      % |     Size | Allocations | Caller     | Location                                     |
| -----: | -------: | ----------: | ---------- | -------------------------------------------- |
| 100.0% | 3.07 MiB |         109 | `get_code` | `<frozen importlib._bootstrap_external>:950` |

##### `decode` (`/usr/local/lib/python3.10/codecs.py:319`)

|      % |    Size | Allocations | Caller         | Location                   |
| -----: | ------: | ----------: | -------------- | -------------------------- |
| 100.0% | 222 KiB |           1 | `decode_bytes` | `./black/__init__.py:1269` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1053`)

|     % |     Size | Allocations | Caller     | Location                                                             |
| ----: | -------: | ----------: | ---------- | -------------------------------------------------------------------- |
| 41.0% | 89.7 KiB |          77 | `<module>` | `./black/nodes.py:1`                                                 |
| 40.6% | 88.8 KiB |          98 | `<module>` | `/venv/lib/python3.10/site-packages/click/core.py:1`                 |
| 37.7% | 82.4 KiB |          73 | `<module>` | `./blib2to3/pygram.py:1`                                             |
|  9.7% | 21.1 KiB |          28 | `<module>` | `/venv/lib/python3.10/site-packages/pathspec/patterns/__init__.py:1` |
|  8.0% | 17.5 KiB |          23 | `<module>` | `./blib2to3/pgen2/driver.py:1`                                       |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:670`)

|      % |    Size | Allocations | Caller     | Location                                     |
| -----: | ------: | ----------: | ---------- | -------------------------------------------- |
| 100.0% | 159 KiB |         154 | `get_code` | `<frozen importlib._bootstrap_external>:950` |

##### `__new__` (`/usr/local/lib/python3.10/abc.py:105`)

|     % |     Size | Allocations | Caller     | Location                                                       |
| ----: | -------: | ----------: | ---------- | -------------------------------------------------------------- |
| 45.1% | 30.2 KiB |          36 | `<module>` | `/venv/lib/python3.10/site-packages/click/types.py:1`          |
| 23.5% | 15.7 KiB |          17 | `<module>` | `./black/trans.py:1`                                           |
| 20.6% | 13.8 KiB |           8 | `<module>` | `/venv/lib/python3.10/site-packages/click/core.py:1`           |
| 10.8% | 7.25 KiB |           8 | `<module>` | `/venv/lib/python3.10/site-packages/packaging/specifiers.py:1` |

##### `_compile` (`/usr/local/lib/python3.10/re.py:288`)

|     % |     Size | Allocations | Caller    | Location                              |
| ----: | -------: | ----------: | --------- | ------------------------------------- |
| 91.2% | 50.7 KiB |          45 | `compile` | `/usr/local/lib/python3.10/re.py:249` |
|  4.0% | 2.24 KiB |           3 | `match`   | `/usr/local/lib/python3.10/re.py:187` |
|  3.6% | 1.99 KiB |           3 | `findall` | `/usr/local/lib/python3.10/re.py:232` |
|  1.2% |    664 B |           1 | `split`   | `/usr/local/lib/python3.10/re.py:222` |

##### `compile` (`/usr/local/lib/python3.10/sre_compile.py:783`)

|      % |     Size | Allocations | Caller     | Location                              |
| -----: | -------: | ----------: | ---------- | ------------------------------------- |
| 100.0% | 54.8 KiB |          51 | `_compile` | `/usr/local/lib/python3.10/re.py:288` |

##### `compile` (`/usr/local/lib/python3.10/re.py:249`)

|     % |     Size | Allocations | Caller            | Location                                                         |
| ----: | -------: | ----------: | ----------------- | ---------------------------------------------------------------- |
| 28.0% | 14.2 KiB |           9 | `<module>`        | `./blib2to3/pgen2/tokenize.py:1`                                 |
| 21.3% | 10.8 KiB |           4 | `Specifier`       | `/venv/lib/python3.10/site-packages/packaging/specifiers.py:220` |
| 12.7% | 6.42 KiB |           9 | `_cached_compile` | `./black/strings.py:164`                                         |
| 10.2% | 5.19 KiB |           6 | `<module>`        | `/venv/lib/python3.10/site-packages/tomli/_re.py:1`              |
|  9.3% |  4.7 KiB |           5 | `Version`         | `/venv/lib/python3.10/site-packages/packaging/version.py:340`    |

##### `_parse_sub` (`/usr/local/lib/python3.10/sre_parse.py:436`)

|      % |     Size | Allocations | Caller   | Location                                     |
| -----: | -------: | ----------: | -------- | -------------------------------------------- |
| 100.0% | 24.4 KiB |          27 | `parse`  | `/usr/local/lib/python3.10/sre_parse.py:944` |
|  95.6% | 23.4 KiB |          25 | `_parse` | `/usr/local/lib/python3.10/sre_parse.py:494` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run_module` (`/usr/local/lib/python3.10/runpy.py:199`)

|     % |     Size | Allocations | Callee                | Location                                 |
| ----: | -------: | ----------: | --------------------- | ---------------------------------------- |
| 92.6% | 61.4 MiB |      27,568 | `_run_module_code`    | `/usr/local/lib/python3.10/runpy.py:89`  |
|  7.4% | 4.89 MiB |         874 | `_get_module_details` | `/usr/local/lib/python3.10/runpy.py:103` |

##### `_run_tracker` (`/venv/lib/python3.10/site-packages/memray/commands/run.py:40`)

|      % |     Size | Allocations | Callee       | Location                                 |
| -----: | -------: | ----------: | ------------ | ---------------------------------------- |
| 100.0% | 66.3 MiB |      28,443 | `run_module` | `/usr/local/lib/python3.10/runpy.py:199` |

##### `_run_module_code` (`/usr/local/lib/python3.10/runpy.py:89`)

|      % |     Size | Allocations | Callee      | Location                                |
| -----: | -------: | ----------: | ----------- | --------------------------------------- |
| 100.0% | 61.4 MiB |      27,567 | `_run_code` | `/usr/local/lib/python3.10/runpy.py:63` |

##### `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`)

|      % |     Size | Allocations | Callee     | Location                |
| -----: | -------: | ----------: | ---------- | ----------------------- |
| 100.0% | 61.4 MiB |      27,566 | `<module>` | `./black/__main__.py:1` |

##### `__call__` (`/venv/lib/python3.10/site-packages/click/core.py:1651`)

|      % |     Size | Allocations | Callee | Location                                                |
| -----: | -------: | ----------: | ------ | ------------------------------------------------------- |
| 100.0% | 61.4 MiB |      27,565 | `main` | `/venv/lib/python3.10/site-packages/click/core.py:1483` |

##### `patched_main` (`./black/__init__.py:1580`)

|      % |     Size | Allocations | Callee     | Location                                                |
| -----: | -------: | ----------: | ---------- | ------------------------------------------------------- |
| 100.0% | 61.4 MiB |      27,566 | `__call__` | `/venv/lib/python3.10/site-packages/click/core.py:1651` |

##### `<module>` (`./black/__main__.py:1`)

|      % |     Size | Allocations | Callee         | Location                   |
| -----: | -------: | ----------: | -------------- | -------------------------- |
| 100.0% | 61.4 MiB |      27,566 | `patched_main` | `./black/__init__.py:1580` |

##### `main` (`/venv/lib/python3.10/site-packages/click/core.py:1483`)

|      % |     Size | Allocations | Callee         | Location                                                |
| -----: | -------: | ----------: | -------------- | ------------------------------------------------------- |
| 100.0% | 61.4 MiB |      27,548 | `invoke`       | `/venv/lib/python3.10/site-packages/click/core.py:1400` |
|  <0.1% | 10.9 KiB |          16 | `make_context` | `/venv/lib/python3.10/site-packages/click/core.py:1330` |
|  <0.1% |     32 B |           1 | `__enter__`    | `/venv/lib/python3.10/site-packages/click/core.py:553`  |

##### `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:1400`)

|      % |     Size | Allocations | Callee   | Location                                               |
| -----: | -------: | ----------: | -------- | ------------------------------------------------------ |
| 100.0% | 61.4 MiB |      27,546 | `invoke` | `/venv/lib/python3.10/site-packages/click/core.py:861` |

##### `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`)

|      % |     Size | Allocations | Callee     | Location                                                    |
| -----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 100.0% | 61.4 MiB |      27,544 | `new_func` | `/venv/lib/python3.10/site-packages/click/decorators.py:33` |

##### `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`)

|      % |     Size | Allocations | Callee | Location                  |
| -----: | -------: | ----------: | ------ | ------------------------- |
| 100.0% | 61.4 MiB |      27,542 | `main` | `./black/__init__.py:240` |

##### `main` (`./black/__init__.py:240`)

|      % |     Size | Allocations | Callee         | Location                  |
| -----: | -------: | ----------: | -------------- | ------------------------- |
| 100.0% | 61.4 MiB |      27,533 | `reformat_one` | `./black/__init__.py:865` |
|  <0.1% |    4 KiB |           5 | `get_sources`  | `./black/__init__.py:729` |
|  <0.1% |    576 B |           1 | `__init__`     | `<string>:2`              |

##### `reformat_one` (`./black/__init__.py:865`)

|      % |     Size | Allocations | Callee                 | Location                  |
| -----: | -------: | ----------: | ---------------------- | ------------------------- |
| 100.0% | 61.4 MiB |      27,531 | `format_file_in_place` | `./black/__init__.py:922` |

##### `format_file_in_place` (`./black/__init__.py:922`)

|     % |     Size | Allocations | Callee                 | Location                   |
| ----: | -------: | ----------: | ---------------------- | -------------------------- |
| 99.6% | 61.2 MiB |      27,528 | `format_file_contents` | `./black/__init__.py:1059` |
|  0.4% |  223 KiB |           2 | `decode_bytes`         | `./black/__init__.py:1269` |

##### `format_file_contents` (`./black/__init__.py:1059`)

|     % |     Size | Allocations | Callee                            | Location                   |
| ----: | -------: | ----------: | --------------------------------- | -------------------------- |
| 83.3% | 50.9 MiB |      26,545 | `format_str`                      | `./black/__init__.py:1168` |
| 16.7% | 10.2 MiB |         983 | `check_stability_and_equivalence` | `./black/__init__.py:1042` |

##### `format_str` (`./black/__init__.py:1168`)

|      % |     Size | Allocations | Callee             | Location                   |
| -----: | -------: | ----------: | ------------------ | -------------------------- |
| 100.0% | 50.9 MiB |      26,544 | `_format_str_once` | `./black/__init__.py:1215` |

##### `_format_str_once` (`./black/__init__.py:1215`)

|     % |     Size | Allocations | Callee              | Location                  |
| ----: | -------: | ----------: | ------------------- | ------------------------- |
| 56.1% | 28.6 MiB |      26,395 | `visit`             | `./black/nodes.py:152`    |
| 29.5% |   15 MiB |          35 | `lib2to3_parse`     | `./black/parsing.py:55`   |
| 11.9% | 6.09 MiB |         100 | `transform_line`    | `./black/linegen.py:601`  |
|  2.0% |    1 MiB |           3 | `maybe_empty_lines` | `./black/lines.py:549`    |
| <0.1% | 22.1 KiB |           7 | `normalize_fmt_off` | `./black/comments.py:168` |

##### `visit` (`./black/nodes.py:152`)

|      % |     Size | Allocations | Callee              | Location                 |
| -----: | -------: | ----------: | ------------------- | ------------------------ |
| 100.0% | 28.6 MiB |      26,394 | `visit_default`     | `./black/linegen.py:134` |
|  98.8% | 28.2 MiB |      25,806 | `visit_stmt`        | `./black/linegen.py:199` |
|  98.0% |   28 MiB |      25,388 | `visit_suite`       | `./black/linegen.py:288` |
|  97.9% |   28 MiB |      25,386 | `visit_funcdef`     | `./black/linegen.py:254` |
|  61.4% | 17.5 MiB |      15,456 | `visit_simple_stmt` | `./black/linegen.py:295` |

##### `visit_default` (`./black/nodes.py:176`)

|      % |     Size | Allocations | Callee  | Location               |
| -----: | -------: | ----------: | ------- | ---------------------- |
| 100.0% | 28.6 MiB |      26,394 | `visit` | `./black/nodes.py:152` |

##### `visit_default` (`./black/linegen.py:134`)

|      % |     Size | Allocations | Callee              | Location                 |
| -----: | -------: | ----------: | ------------------- | ------------------------ |
| 100.0% | 28.6 MiB |      26,394 | `visit_default`     | `./black/nodes.py:176`   |
|  56.0% |   16 MiB |      23,657 | `generate_comments` | `./black/comments.py:52` |
|  21.3% | 6.07 MiB |         103 | `append`            | `./black/lines.py:52`    |

##### `visit_stmt` (`./black/linegen.py:199`)

|     % |     Size | Allocations | Callee                       | Location                  |
| ----: | -------: | ----------: | ---------------------------- | ------------------------- |
| 99.6% | 28.1 MiB |      25,613 | `visit`                      | `./black/nodes.py:152`    |
|  4.8% | 1.34 MiB |       2,439 | `normalize_invisible_parens` | `./black/linegen.py:1344` |

##### `visit_suite` (`./black/linegen.py:288`)

|      % |   Size | Allocations | Callee          | Location                 |
| -----: | -----: | ----------: | --------------- | ------------------------ |
| 100.0% | 28 MiB |      25,388 | `visit_default` | `./black/linegen.py:134` |

##### `visit_funcdef` (`./black/linegen.py:254`)

|      % |   Size | Allocations | Callee  | Location               |
| -----: | -----: | ----------: | ------- | ---------------------- |
| 100.0% | 28 MiB |      25,386 | `visit` | `./black/nodes.py:152` |

##### `visit_simple_stmt` (`./black/linegen.py:295`)

|     % |     Size | Allocations | Callee          | Location                 |
| ----: | -------: | ----------: | --------------- | ------------------------ |
| 94.3% | 16.5 MiB |      15,454 | `visit_default` | `./black/linegen.py:134` |
|  5.7% |    1 MiB |           1 | `line`          | `./black/linegen.py:109` |
| <0.1% |    672 B |           1 | `is_stub_suite` | `./black/nodes.py:796`   |

##### `generate_comments` (`./black/comments.py:52`)

|     % |   Size | Allocations | Callee                      | Location                  |
| ----: | -----: | ----------: | --------------------------- | ------------------------- |
| 81.2% | 13 MiB |      23,654 | `normalize_trailing_prefix` | `./black/comments.py:127` |

##### `parse_string` (`./blib2to3/pgen2/driver.py:198`)

|      % |   Size | Allocations | Callee         | Location                         |
| -----: | -----: | ----------: | -------------- | -------------------------------- |
| 100.0% | 15 MiB |          34 | `parse_tokens` | `./blib2to3/pgen2/driver.py:114` |

##### `lib2to3_parse` (`./black/parsing.py:55`)

|      % |   Size | Allocations | Callee         | Location                         |
| -----: | -----: | ----------: | -------------- | -------------------------------- |
| 100.0% | 15 MiB |          35 | `parse_string` | `./blib2to3/pgen2/driver.py:198` |

##### `parse_tokens` (`./blib2to3/pgen2/driver.py:114`)

|     % |   Size | Allocations | Callee     | Location                        |
| ----: | -----: | ----------: | ---------- | ------------------------------- |
| 93.3% | 14 MiB |          22 | `addtoken` | `./blib2to3/pgen2/parse.py:230` |
|  6.6% |  1 MiB |           1 | `__next__` | `./blib2to3/pgen2/driver.py:80` |

##### `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`)

|     % |     Size | Allocations | Callee                | Location                                         |
| ----: | -------: | ----------: | --------------------- | ------------------------------------------------ |
| 99.9% | 4.89 MiB |         871 | `_find_and_load`      | `<frozen importlib._bootstrap>:1022`             |
| 99.9% | 4.89 MiB |         871 | `_get_module_details` | `/usr/local/lib/python3.10/runpy.py:103`         |
| <0.1% |    2 KiB |           1 | `find_spec`           | `/usr/local/lib/python3.10/importlib/util.py:73` |

##### `exec_module` (`<frozen importlib._bootstrap_external>:877`)

|     % |     Size | Allocations | Callee                      | Location                                     |
| ----: | -------: | ----------: | --------------------------- | -------------------------------------------- |
| 79.3% | 3.88 MiB |         855 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`          |
| 66.1% | 3.23 MiB |         264 | `get_code`                  | `<frozen importlib._bootstrap_external>:950` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:664`)

|      % |     Size | Allocations | Callee        | Location                                     |
| -----: | -------: | ----------: | ------------- | -------------------------------------------- |
| 100.0% | 4.89 MiB |         871 | `exec_module` | `<frozen importlib._bootstrap_external>:877` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:987`)

|      % |     Size | Allocations | Callee                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 4.89 MiB |         871 | `_load_unlocked`            | `<frozen importlib._bootstrap>:664` |
|   0.6% | 30.3 KiB |          39 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |
|   0.2% | 8.16 KiB |           4 | `_find_spec`                | `<frozen importlib._bootstrap>:921` |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1022`)

|      % |     Size | Allocations | Callee                    | Location                            |
| -----: | -------: | ----------: | ------------------------- | ----------------------------------- |
| 100.0% | 4.89 MiB |         871 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:987` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|     % |     Size | Allocations | Callee           | Location                                                 |
| ----: | -------: | ----------: | ---------------- | -------------------------------------------------------- |
| 79.3% | 3.88 MiB |         855 | `<module>`       | `./black/__init__.py:1`                                  |
| 25.7% | 1.26 MiB |         209 | `<module>`       | `./black/comments.py:1`                                  |
| 25.6% | 1.25 MiB |         204 | `<module>`       | `./black/nodes.py:1`                                     |
|  4.6% |  228 KiB |         233 | `_find_and_load` | `<frozen importlib._bootstrap>:1022`                     |
|  4.3% |  215 KiB |         195 | `<module>`       | `/venv/lib/python3.10/site-packages/click/__init__.py:1` |

##### `get_code` (`<frozen importlib._bootstrap_external>:950`)

|     % |     Size | Allocations | Callee              | Location                                      |
| ----: | -------: | ----------: | ------------------- | --------------------------------------------- |
| 95.2% | 3.07 MiB |         109 | `source_to_code`    | `<frozen importlib._bootstrap_external>:942`  |
|  4.8% |  159 KiB |         154 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:670`  |
| <0.1% |    536 B |           1 | `_cache_bytecode`   | `<frozen importlib._bootstrap_external>:1094` |

##### `source_to_code` (`<frozen importlib._bootstrap_external>:942`)

|      % |     Size | Allocations | Callee                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.07 MiB |         109 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1053`)

|      % |    Size | Allocations | Callee                      | Location                            |
| -----: | ------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 219 KiB |         222 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `__new__` (`/usr/local/lib/python3.10/abc.py:105`)

|    % |     Size | Allocations | Callee              | Location                                   |
| ---: | -------: | ----------: | ------------------- | ------------------------------------------ |
| 1.7% | 1.13 KiB |           2 | `__init_subclass__` | `/usr/local/lib/python3.10/typing.py:1350` |

##### `_compile` (`/usr/local/lib/python3.10/re.py:288`)

|     % |     Size | Allocations | Callee    | Location                                       |
| ----: | -------: | ----------: | --------- | ---------------------------------------------- |
| 98.6% | 54.8 KiB |          51 | `compile` | `/usr/local/lib/python3.10/sre_compile.py:783` |

##### `compile` (`/usr/local/lib/python3.10/sre_compile.py:783`)

|     % |     Size | Allocations | Callee  | Location                                       |
| ----: | -------: | ----------: | ------- | ---------------------------------------------- |
| 44.6% | 24.4 KiB |          27 | `parse` | `/usr/local/lib/python3.10/sre_parse.py:944`   |
| 14.2% | 7.78 KiB |          12 | `_code` | `/usr/local/lib/python3.10/sre_compile.py:622` |

##### `compile` (`/usr/local/lib/python3.10/re.py:249`)

|      % |     Size | Allocations | Callee     | Location                              |
| -----: | -------: | ----------: | ---------- | ------------------------------------- |
| 100.0% | 50.7 KiB |          45 | `_compile` | `/usr/local/lib/python3.10/re.py:288` |

##### `_parse_sub` (`/usr/local/lib/python3.10/sre_parse.py:436`)

|      % |     Size | Allocations | Callee   | Location                                     |
| -----: | -------: | ----------: | -------- | -------------------------------------------- |
| 100.0% | 24.4 KiB |          27 | `_parse` | `/usr/local/lib/python3.10/sre_parse.py:494` |

## Hottest call stacks

Call stacks with the most bytes held at peak memory in their leaf frame.

Common call stack: `run_module` (`/usr/local/lib/python3.10/runpy.py:199`) ← `_run_tracker` (`/venv/lib/python3.10/site-packages/memray/commands/run.py:40`)

|     % |     Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----: | -------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15.4% | 10.2 MiB |         983 | `parse` (`/usr/local/lib/python3.10/ast.py:33`) ← `_parse_single_version` (`./black/parsing.py:125`) ← `parse_ast` (137) ← `assert_equivalent` (`./black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 10.6% | 7.01 MiB |          12 | `__init__` (`./blib2to3/pytree.py:237`) ← `convert` (475) ← `pop` (`./blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  4.5% |    3 MiB |           3 | `shift` (`./blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  3.1% | 2.02 MiB |          43 | `run_transformer` (`./black/linegen.py:1771`) ← `transform_line` (601) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  3.0% | 2.01 MiB |          27 | `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `source_to_code` (`<frozen importlib._bootstrap_external>:942`) ← `get_code` (950) ← `exec_module` (877) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `<module>` (`./black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`) ← `_get_module_details` (103)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.0% |    2 MiB |           2 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `preceding_leaf` (`./black/nodes.py:436`) ← `whitespace` (183) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                   |
|  1.6% | 1.04 MiB |           5 | `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.5% | 1.01 MiB |          15 | `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `source_to_code` (`<frozen importlib._bootstrap_external>:942`) ← `get_code` (950) ← `exec_module` (877) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`) ← `_get_module_details` (103)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.5% |    1 MiB |           2 | `maybe_empty_lines` (`./black/lines.py:549`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.5% |    1 MiB |           1 | `closure` (`./blib2to3/pgen2/pgen.py:197`) ← `make_dfa` (189) ← `parse` (164) ← `__init__` (23) ← `generate_grammar` (415) ← `load_grammar` (`./blib2to3/pgen2/driver.py:246`) ← `load_packaged_grammar` (280) ← `initialize` (`./blib2to3/pygram.py:165`) ← `<module>` (`./black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `<module>` (`./black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `<module>` (`./black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`) ← `_get_module_details` (103)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.5% |    1 MiB |           1 | `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`) ← `__next__` (`./blib2to3/pgen2/driver.py:80`) ← `parse_tokens` (114) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.5% |    1 MiB |           1 | `push` (`./blib2to3/pgen2/parse.py:374`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.5% |    1 MiB |           1 | `convert` (`./blib2to3/pytree.py:475`) ← `shift` (`./blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.5% |    1 MiB |           1 | `convert` (`./blib2to3/pytree.py:475`) ← `pop` (`./blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.5% |    1 MiB |           1 | `__new__` (`./blib2to3/pytree.py:70`) ← `convert` (475) ← `shift` (`./blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.5% |    1 MiB |           1 | `__init__` (`<string>:2`) ← `__init__` (2) ← `line` (`./black/linegen.py:109`) ← `visit_INDENT` (179) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.5% |    1 MiB |           1 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `whitespace` (`./black/nodes.py:183`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.5% |    1 MiB |           1 | `__init__` (`./black/trans.py:278`) ← `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.5% |    1 MiB |           1 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                       |
|  1.5% |    1 MiB |           1 | `mark` (`./black/brackets.py:70`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89) |

# Leaked memory profile

Leaked 58.7 MiB over 27,468 allocations (2.19 KiB per allocation).

| Category         |     % |     Size | Allocations |
| ---------------- | ----: | -------: | ----------: |
| Ours             | 88.7% |   52 MiB |      26,759 |
| Standard library | 11.0% | 6.44 MiB |         494 |
| Third-party      |  0.4% |  216 KiB |         215 |

Paths starting with `./` or `../` are relative to `/src/black/src/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── 58.7 MiB (100.0%) _run_tracker at /venv/lib/python3.10/site-packages/memray/commands/run.py:40
    └── 58.7 MiB (100.0%) run_module at /usr/local/lib/python3.10/runpy.py:199
        ├── … 53.8 MiB (91.6%) format_file_contents at ./black/__init__.py:1059
        │   ├── 36.1 MiB (61.5%) format_str at 1168
        │   │   └── 36.1 MiB (61.5%) _format_str_once at 1215
        │   │       ├── … 15 MiB (25.6%) parse_tokens at ./blib2to3/pgen2/driver.py:114
        │   │       │   ├── 14 MiB (23.9%) addtoken at ./blib2to3/pgen2/parse.py:230
        │   │       │   │   └── 14 MiB (23.9%) _addtoken at 278
        │   │       │   │       ├── 8 MiB (13.6%) pop at 386
        │   │       │   │       │   └── 8 MiB (13.6%, self 1.7%, self 3.4% globally) convert at ./blib2to3/pytree.py:475
        │   │       │   │       │       └── 7 MiB (11.9%) __init__ at 237
        │   │       │   │       ├── 5 MiB (8.5%, self 5.1%) shift at 361
        │   │       │   │       │   └── 2 MiB (3.4%) convert at ./blib2to3/pytree.py:475 …
        │   │       │   │       └── 1 MiB (1.7%) push at 374
        │   │       │   └── 1 MiB (1.7%) __next__ at 80
        │   │       │       └── 1 MiB (1.7%) generate_tokens at ./blib2to3/pgen2/tokenize.py:554
        │   │       ├── 14 MiB (23.9%, self 1.7%) visit at ./black/nodes.py:152
        │   │       │   ├── … 10 MiB (17.1%, self 3.4%) visit_default at ./black/linegen.py:134
        │   │       │   │   ├── 5.01 MiB (8.5%) append at ./black/lines.py:52
        │   │       │   │   │   ├── 4.01 MiB (6.8%) whitespace at ./black/nodes.py:183
        │   │       │   │   │   │   ├── … 2 MiB (3.4%, self 7.1% globally) update_sibling_maps at ./blib2to3/pytree.py:358
        │   │       │   │   │   │   └── 2 MiB (3.4%) prev_sibling at ./blib2to3/pytree.py:196 …
        │   │       │   │   │   └── 1 MiB (1.7%, self 1.7%) mark at ./black/brackets.py:70
        │   │       │   │   └── 3 MiB (5.1%) generate_comments at ./black/comments.py:52
        │   │       │   ├── … 1 MiB (1.7%, self 5.1% globally) __init__ at <string>:2
        │   │       │   └── 2.02 MiB (3.4%) 7 more callees, led by (1.7%) visit_simple_stmt at ./black/linegen.py:295
        │   │       ├── 6.02 MiB (10.3%, self 1.7%) transform_line at ./black/linegen.py:601
        │   │       │   ├── 2.02 MiB (3.4%, self 3.4%) run_transformer at 1771
        │   │       │   └── 3 MiB (5.1%) 3 more callees, led by (1.7%) _hugging_power_ops_line_to_string at ./black/linegen.py:590
        │   │       └── 1 MiB (1.7%, self 1.7%) maybe_empty_lines at ./black/lines.py:549
        │   └── 17.7 MiB (30.1%) check_stability_and_equivalence at 1042
        │       ├── … 14.5 MiB (24.8%) visit at ./black/nodes.py:152
        │       │   ├── … 11.2 MiB (19.1%) visit_default at ./black/linegen.py:134
        │       │   │   └── 11.2 MiB (19.0%) generate_comments at ./black/comments.py:52
        │       │   │       └── … 11.2 MiB (19.0%, self 24.2% globally) changed at ./blib2to3/pytree.py:160
        │       │   └── 3.33 MiB (5.7%) 7 more callees, led by (2.3%) visit_stmt at ./black/linegen.py:199
        │       └── … 3 MiB (5.1%) parse at /usr/local/lib/python3.10/ast.py:33
        └── … 4.88 MiB (8.3%) exec_module at <frozen importlib._bootstrap_external>:877
            ├── … 3.07 MiB (5.2%) _call_with_frames_removed at <frozen importlib._bootstrap>:233
            └── 1.65 MiB (2.8%) _call_with_frames_removed at <frozen importlib._bootstrap>:233 …
```

## Hottest functions

### Self size

Functions with the most bytes never freed within the function body, excluding callees.

|     % |     Size | Allocations | Function                    | Location                              |
| ----: | -------: | ----------: | --------------------------- | ------------------------------------- |
| 24.2% | 14.2 MiB |      25,905 | `changed`                   | `./blib2to3/pytree.py:160`            |
| 11.9% | 7.01 MiB |          12 | `__init__`                  | `./blib2to3/pytree.py:237`            |
|  7.1% | 4.14 MiB |         199 | `update_sibling_maps`       | `./blib2to3/pytree.py:358`            |
|  5.2% | 3.07 MiB |         109 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`   |
|  5.1% |    3 MiB |           4 | `__init__`                  | `<string>:2`                          |
|  5.1% |    3 MiB |           3 | `shift`                     | `./blib2to3/pgen2/parse.py:361`       |
|  5.1% |    3 MiB |           3 | `generate_comments`         | `./black/comments.py:52`              |
|  5.1% |    3 MiB |           3 | `parse`                     | `/usr/local/lib/python3.10/ast.py:33` |
|  3.5% | 2.04 MiB |          65 | `run_transformer`           | `./black/linegen.py:1771`             |
|  3.4% |    2 MiB |           2 | `convert`                   | `./blib2to3/pytree.py:475`            |
|  3.4% |    2 MiB |           2 | `visit_default`             | `./black/linegen.py:134`              |
|  1.9% |  1.1 MiB |         189 | `mark`                      | `./black/brackets.py:70`              |
|  1.8% | 1.08 MiB |          23 | `transform_line`            | `./black/linegen.py:601`              |
|  1.7% |    1 MiB |           3 | `generate_tokens`           | `./blib2to3/pgen2/tokenize.py:554`    |
|  1.7% |    1 MiB |           2 | `maybe_empty_lines`         | `./black/lines.py:549`                |
|  1.7% |    1 MiB |           2 | `visit`                     | `./black/nodes.py:152`                |
|  1.7% |    1 MiB |           1 | `closure`                   | `./blib2to3/pgen2/pgen.py:197`        |
|  1.7% |    1 MiB |           1 | `push`                      | `./blib2to3/pgen2/parse.py:374`       |
|  1.7% |    1 MiB |           1 | `__new__`                   | `./blib2to3/pytree.py:70`             |
|  1.7% |    1 MiB |           1 | `prev_sibling`              | `./blib2to3/pytree.py:196`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Ours

|     % |     Size | Allocations | Function                                           | Location                           |
| ----: | -------: | ----------: | -------------------------------------------------- | ---------------------------------- |
| 24.2% | 14.2 MiB |      25,905 | `changed`                                          | `./blib2to3/pytree.py:160`         |
| 11.9% | 7.01 MiB |          12 | `__init__`                                         | `./blib2to3/pytree.py:237`         |
|  7.1% | 4.14 MiB |         199 | `update_sibling_maps`                              | `./blib2to3/pytree.py:358`         |
|  5.1% |    3 MiB |           4 | `__init__`                                         | `<string>:2`                       |
|  5.1% |    3 MiB |           3 | `shift`                                            | `./blib2to3/pgen2/parse.py:361`    |
|  5.1% |    3 MiB |           3 | `generate_comments`                                | `./black/comments.py:52`           |
|  3.5% | 2.04 MiB |          65 | `run_transformer`                                  | `./black/linegen.py:1771`          |
|  3.4% |    2 MiB |           2 | `convert`                                          | `./blib2to3/pytree.py:475`         |
|  3.4% |    2 MiB |           2 | `visit_default`                                    | `./black/linegen.py:134`           |
|  1.9% |  1.1 MiB |         189 | `mark`                                             | `./black/brackets.py:70`           |
|  1.8% | 1.08 MiB |          23 | `transform_line`                                   | `./black/linegen.py:601`           |
|  1.7% |    1 MiB |           3 | `generate_tokens`                                  | `./blib2to3/pgen2/tokenize.py:554` |
|  1.7% |    1 MiB |           2 | `maybe_empty_lines`                                | `./black/lines.py:549`             |
|  1.7% |    1 MiB |           2 | `visit`                                            | `./black/nodes.py:152`             |
|  1.7% |    1 MiB |           1 | `closure`                                          | `./blib2to3/pgen2/pgen.py:197`     |
|  1.7% |    1 MiB |           1 | `push`                                             | `./blib2to3/pgen2/parse.py:374`    |
|  1.7% |    1 MiB |           1 | `__new__`                                          | `./blib2to3/pytree.py:70`          |
|  1.7% |    1 MiB |           1 | `prev_sibling`                                     | `./blib2to3/pytree.py:196`         |
|  1.7% |    1 MiB |           1 | `__init__`                                         | `./black/trans.py:278`             |
|  1.7% |    1 MiB |           1 | `contains_implicit_multiline_string_with_comments` | `./black/lines.py:250`             |

##### Standard library

|     % |     Size | Allocations | Function                    | Location                                                |
| ----: | -------: | ----------: | --------------------------- | ------------------------------------------------------- |
|  5.2% | 3.07 MiB |         109 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`                     |
|  5.1% |    3 MiB |           3 | `parse`                     | `/usr/local/lib/python3.10/ast.py:33`                   |
|  0.3% |  159 KiB |         154 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:670`            |
|  0.1% | 65.9 KiB |          67 | `__new__`                   | `/usr/local/lib/python3.10/abc.py:105`                  |
| <0.1% | 22.6 KiB |          12 | `compile`                   | `/usr/local/lib/python3.10/sre_compile.py:783`          |
| <0.1% | 16.3 KiB |          20 | `_parse_sub`                | `/usr/local/lib/python3.10/sre_parse.py:436`            |
| <0.1% | 15.8 KiB |          20 | `__new__`                   | `/usr/local/lib/python3.10/enum.py:180`                 |
| <0.1% | 11.2 KiB |           2 | `inner`                     | `/usr/local/lib/python3.10/typing.py:306`               |
| <0.1% | 9.78 KiB |          11 | `__new__`                   | `/usr/local/lib/python3.10/typing.py:2338`              |
| <0.1% |    8 KiB |           4 | `_fill_cache`               | `<frozen importlib._bootstrap_external>:1587`           |
| <0.1% | 7.78 KiB |          12 | `_compile`                  | `/usr/local/lib/python3.10/sre_compile.py:87`           |
| <0.1% | 7.61 KiB |           6 | `_parse`                    | `/usr/local/lib/python3.10/sre_parse.py:494`            |
| <0.1% | 7.42 KiB |          10 | `namedtuple`                | `/usr/local/lib/python3.10/collections/__init__.py:328` |
| <0.1% | 6.71 KiB |          11 | `__setattr__`               | `/usr/local/lib/python3.10/enum.py:470`                 |
| <0.1% | 6.11 KiB |           9 | `_set_new_attribute`        | `/usr/local/lib/python3.10/dataclasses.py:824`          |
| <0.1% |  4.5 KiB |           8 | `_process_class`            | `/usr/local/lib/python3.10/dataclasses.py:881`          |
| <0.1% | 4.46 KiB |           7 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:987`                     |
| <0.1% | 3.49 KiB |           4 | `<module>`                  | `/usr/local/lib/python3.10/pkgutil.py:1`                |
| <0.1% | 3.05 KiB |           2 | `<module>`                  | `/usr/local/lib/python3.10/secrets.py:1`                |
| <0.1% | 2.49 KiB |           1 | `rng`                       | `/usr/local/lib/python3.10/tempfile.py:142`             |

#### Lines

Lines with the largest contribution to each function's self size.

##### `changed` (`./blib2to3/pytree.py:160`)

|      % |     Size | Allocations | Location                   |
| -----: | -------: | ----------: | -------------------------- |
| 100.0% | 14.2 MiB |      25,905 | `./blib2to3/pytree.py:165` |

##### `__init__` (`./blib2to3/pytree.py:237`)

|     % |     Size | Allocations | Location                   |
| ----: | -------: | ----------: | -------------------------- |
| 71.4% |    5 MiB |           5 | `./blib2to3/pytree.py:258` |
| 28.6% |    2 MiB |           3 | `./blib2to3/pytree.py:256` |
| <0.1% | 3.03 KiB |           4 | `./blib2to3/pytree.py:255` |

##### `update_sibling_maps` (`./blib2to3/pytree.py:358`)

|     % |     Size | Allocations | Location                   |
| ----: | -------: | ----------: | -------------------------- |
| 49.9% | 2.07 MiB |          95 | `./blib2to3/pytree.py:366` |
| 48.3% |    2 MiB |           2 | `./blib2to3/pytree.py:360` |
|  1.7% |   71 KiB |          93 | `./blib2to3/pytree.py:365` |
|  0.1% | 5.06 KiB |           9 | `./blib2to3/pytree.py:368` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Allocations | Location                            |
| -----: | -------: | ----------: | ----------------------------------- |
| 100.0% | 3.07 MiB |         109 | `<frozen importlib._bootstrap>:241` |

##### `__init__` (`<string>:2`)

|     % |  Size | Allocations | Location      |
| ----: | ----: | ----------: | ------------- |
| 33.3% | 1 MiB |           1 | `<string>:3`  |
| 33.3% | 1 MiB |           1 | `<string>:9`  |
| 33.3% | 1 MiB |           1 | `<string>:8`  |
| <0.1% | 576 B |           1 | `<string>:13` |

##### `shift` (`./blib2to3/pgen2/parse.py:361`)

|      % |  Size | Allocations | Location                        |
| -----: | ----: | ----------: | ------------------------------- |
| 100.0% | 3 MiB |           3 | `./blib2to3/pgen2/parse.py:371` |

##### `generate_comments` (`./black/comments.py:52`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 3 MiB |           3 | `./black/comments.py:72` |

##### `parse` (`/usr/local/lib/python3.10/ast.py:33`)

|      % |  Size | Allocations | Location                              |
| -----: | ----: | ----------: | ------------------------------------- |
| 100.0% | 3 MiB |           3 | `/usr/local/lib/python3.10/ast.py:50` |

##### `run_transformer` (`./black/linegen.py:1771`)

|     % |     Size | Allocations | Location                  |
| ----: | -------: | ----------: | ------------------------- |
| 98.2% |    2 MiB |           2 | `./black/linegen.py:1782` |
|  1.7% | 35.8 KiB |          62 | `./black/linegen.py:1786` |

##### `convert` (`./blib2to3/pytree.py:475`)

|     % |  Size | Allocations | Location                   |
| ----: | ----: | ----------: | -------------------------- |
| 50.0% | 1 MiB |           1 | `./blib2to3/pytree.py:492` |
| 50.0% | 1 MiB |           1 | `./blib2to3/pytree.py:490` |

##### `visit_default` (`./black/linegen.py:134`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 2 MiB |           2 | `./black/linegen.py:158` |

##### `mark` (`./black/brackets.py:70`)

|     % |    Size | Allocations | Location                  |
| ----: | ------: | ----------: | ------------------------- |
| 90.6% |   1 MiB |           1 | `./black/brackets.py:122` |
|  9.3% | 105 KiB |         187 | `./black/brackets.py:112` |

##### `transform_line` (`./black/linegen.py:601`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 92.3% |    1 MiB |           1 | `./black/linegen.py:626` |
|  6.8% | 75.7 KiB |           5 | `./black/linegen.py:679` |
|  0.7% | 7.85 KiB |          15 | `./black/linegen.py:714` |
|  0.1% | 1.16 KiB |           1 | `./black/linegen.py:722` |
| <0.1% |    536 B |           1 | `./black/linegen.py:635` |

##### `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`)

|     % |     Size | Allocations | Location                            |
| ----: | -------: | ----------: | ----------------------------------- |
| 99.5% |    1 MiB |           1 | `./blib2to3/pgen2/tokenize.py:868`  |
|  0.5% | 4.73 KiB |           2 | `./blib2to3/pgen2/tokenize.py:1092` |

##### `maybe_empty_lines` (`./black/lines.py:549`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 99.9% | 1 MiB |           1 | `./black/lines.py:573` |

##### `visit` (`./black/nodes.py:152`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 1 MiB |           1 | `./black/nodes.py:174` |
|  <0.1% | 520 B |           1 | `./black/nodes.py:172` |

##### `closure` (`./blib2to3/pgen2/pgen.py:197`)

|      % |  Size | Allocations | Location                       |
| -----: | ----: | ----------: | ------------------------------ |
| 100.0% | 1 MiB |           1 | `./blib2to3/pgen2/pgen.py:198` |

##### `push` (`./blib2to3/pgen2/parse.py:374`)

|      % |  Size | Allocations | Location                        |
| -----: | ----: | ----------: | ------------------------------- |
| 100.0% | 1 MiB |           1 | `./blib2to3/pgen2/parse.py:382` |

##### `__new__` (`./blib2to3/pytree.py:70`)

|      % |  Size | Allocations | Location                  |
| -----: | ----: | ----------: | ------------------------- |
| 100.0% | 1 MiB |           1 | `./blib2to3/pytree.py:73` |

##### `prev_sibling` (`./blib2to3/pytree.py:196`)

|      % |  Size | Allocations | Location                   |
| -----: | ----: | ----------: | -------------------------- |
| 100.0% | 1 MiB |           1 | `./blib2to3/pytree.py:208` |

##### `__init__` (`./black/trans.py:278`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 1 MiB |           1 | `./black/trans.py:279` |

##### `contains_implicit_multiline_string_with_comments` (`./black/lines.py:250`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 1 MiB |           1 | `./black/lines.py:257` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:670`)

|      % |    Size | Allocations | Location                                     |
| -----: | ------: | ----------: | -------------------------------------------- |
| 100.0% | 159 KiB |         154 | `<frozen importlib._bootstrap_external>:672` |

##### `__new__` (`/usr/local/lib/python3.10/abc.py:105`)

|     % |    Size | Allocations | Location                               |
| ----: | ------: | ----------: | -------------------------------------- |
| 94.1% |  62 KiB |          61 | `/usr/local/lib/python3.10/abc.py:106` |
|  5.9% | 3.9 KiB |           6 | `/usr/local/lib/python3.10/abc.py:107` |

##### `compile` (`/usr/local/lib/python3.10/sre_compile.py:783`)

|      % |     Size | Allocations | Location                                       |
| -----: | -------: | ----------: | ---------------------------------------------- |
| 100.0% | 22.6 KiB |          12 | `/usr/local/lib/python3.10/sre_compile.py:804` |

##### `_parse_sub` (`/usr/local/lib/python3.10/sre_parse.py:436`)

|      % |     Size | Allocations | Location                                     |
| -----: | -------: | ----------: | -------------------------------------------- |
| 100.0% | 16.3 KiB |          20 | `/usr/local/lib/python3.10/sre_parse.py:444` |

##### `__new__` (`/usr/local/lib/python3.10/enum.py:180`)

|     % |     Size | Allocations | Location                                |
| ----: | -------: | ----------: | --------------------------------------- |
| 78.6% | 12.4 KiB |          14 | `/usr/local/lib/python3.10/enum.py:215` |
| 10.7% | 1.69 KiB |           3 | `/usr/local/lib/python3.10/enum.py:313` |
| 10.7% | 1.69 KiB |           3 | `/usr/local/lib/python3.10/enum.py:318` |

##### `inner` (`/usr/local/lib/python3.10/typing.py:306`)

|      % |     Size | Allocations | Location                                  |
| -----: | -------: | ----------: | ----------------------------------------- |
| 100.0% | 11.2 KiB |           2 | `/usr/local/lib/python3.10/typing.py:309` |

##### `__new__` (`/usr/local/lib/python3.10/typing.py:2338`)

|      % |     Size | Allocations | Location                                   |
| -----: | -------: | ----------: | ------------------------------------------ |
| 100.0% | 9.78 KiB |          11 | `/usr/local/lib/python3.10/typing.py:2350` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1587`)

|      % |  Size | Allocations | Location                                      |
| -----: | ----: | ----------: | --------------------------------------------- |
| 100.0% | 8 KiB |           4 | `<frozen importlib._bootstrap_external>:1599` |

##### `_compile` (`/usr/local/lib/python3.10/sre_compile.py:87`)

|     % |     Size | Allocations | Location                                       |
| ----: | -------: | ----------: | ---------------------------------------------- |
| 41.7% | 3.24 KiB |           5 | `/usr/local/lib/python3.10/sre_compile.py:184` |
| 25.0% | 1.95 KiB |           3 | `/usr/local/lib/python3.10/sre_compile.py:164` |
| 25.0% | 1.95 KiB |           3 | `/usr/local/lib/python3.10/sre_compile.py:225` |
|  8.3% |    664 B |           1 | `/usr/local/lib/python3.10/sre_compile.py:172` |

##### `_parse` (`/usr/local/lib/python3.10/sre_parse.py:494`)

|     % |     Size | Allocations | Location                                     |
| ----: | -------: | ----------: | -------------------------------------------- |
| 20.9% | 1.59 KiB |           3 | `/usr/local/lib/python3.10/sre_parse.py:841` |
|  7.0% |    544 B |           1 | `/usr/local/lib/python3.10/sre_parse.py:755` |

##### `namedtuple` (`/usr/local/lib/python3.10/collections/__init__.py:328`)

|      % |     Size | Allocations | Location                                                |
| -----: | -------: | ----------: | ------------------------------------------------------- |
| 100.0% | 7.42 KiB |          10 | `/usr/local/lib/python3.10/collections/__init__.py:481` |

##### `__setattr__` (`/usr/local/lib/python3.10/enum.py:470`)

|      % |     Size | Allocations | Location                                |
| -----: | -------: | ----------: | --------------------------------------- |
| 100.0% | 6.71 KiB |          11 | `/usr/local/lib/python3.10/enum.py:481` |

##### `_set_new_attribute` (`/usr/local/lib/python3.10/dataclasses.py:824`)

|      % |     Size | Allocations | Location                                       |
| -----: | -------: | ----------: | ---------------------------------------------- |
| 100.0% | 6.11 KiB |           9 | `/usr/local/lib/python3.10/dataclasses.py:830` |

##### `_process_class` (`/usr/local/lib/python3.10/dataclasses.py:881`)

|     % |     Size | Allocations | Location                                        |
| ----: | -------: | ----------: | ----------------------------------------------- |
| 62.5% | 2.81 KiB |           5 | `/usr/local/lib/python3.10/dataclasses.py:1088` |
| 12.5% |    576 B |           1 | `/usr/local/lib/python3.10/dataclasses.py:899`  |
| 12.5% |    576 B |           1 | `/usr/local/lib/python3.10/dataclasses.py:958`  |
| 12.5% |    576 B |           1 | `/usr/local/lib/python3.10/dataclasses.py:995`  |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:987`)

|      % |     Size | Allocations | Location                             |
| -----: | -------: | ----------: | ------------------------------------ |
| 100.0% | 4.46 KiB |           7 | `<frozen importlib._bootstrap>:1012` |

##### `<module>` (`/usr/local/lib/python3.10/pkgutil.py:1`)

|     % |     Size | Allocations | Location                                   |
| ----: | -------: | ----------: | ------------------------------------------ |
| 42.5% | 1.48 KiB |           2 | `/usr/local/lib/python3.10/pkgutil.py:269` |
| 31.1% | 1.09 KiB |           1 | `/usr/local/lib/python3.10/pkgutil.py:137` |
| 26.4% |    944 B |           1 | `/usr/local/lib/python3.10/pkgutil.py:194` |

##### `<module>` (`/usr/local/lib/python3.10/secrets.py:1`)

|     % |     Size | Allocations | Location                                  |
| ----: | -------: | ----------: | ----------------------------------------- |
| 81.6% | 2.49 KiB |           1 | `/usr/local/lib/python3.10/secrets.py:21` |
| 18.4% |    576 B |           1 | `/usr/local/lib/python3.10/secrets.py:16` |

##### `rng` (`/usr/local/lib/python3.10/tempfile.py:142`)

|      % |     Size | Allocations | Location                                    |
| -----: | -------: | ----------: | ------------------------------------------- |
| 100.0% | 2.49 KiB |           1 | `/usr/local/lib/python3.10/tempfile.py:146` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `changed` (`./blib2to3/pytree.py:160`)

|      % |     Size | Allocations | Caller   | Location                   |
| -----: | -------: | ----------: | -------- | -------------------------- |
| 100.0% | 14.2 MiB |      25,905 | `prefix` | `./blib2to3/pytree.py:469` |

##### `__init__` (`./blib2to3/pytree.py:237`)

|      % |     Size | Allocations | Caller    | Location                   |
| -----: | -------: | ----------: | --------- | -------------------------- |
| 100.0% | 7.01 MiB |          12 | `convert` | `./blib2to3/pytree.py:475` |

##### `update_sibling_maps` (`./blib2to3/pytree.py:358`)

|      % |     Size | Allocations | Caller         | Location                   |
| -----: | -------: | ----------: | -------------- | -------------------------- |
| 100.0% | 4.14 MiB |         199 | `prev_sibling` | `./blib2to3/pytree.py:196` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Allocations | Caller           | Location                                     |
| -----: | -------: | ----------: | ---------------- | -------------------------------------------- |
| 100.0% | 3.07 MiB |         109 | `source_to_code` | `<frozen importlib._bootstrap_external>:942` |

##### `__init__` (`<string>:2`)

|      % |  Size | Allocations | Caller     | Location                  |
| -----: | ----: | ----------: | ---------- | ------------------------- |
| 100.0% | 3 MiB |           3 | `__init__` | `<string>:2`              |
|  <0.1% | 576 B |           1 | `main`     | `./black/__init__.py:240` |

##### `shift` (`./blib2to3/pgen2/parse.py:361`)

|      % |  Size | Allocations | Caller      | Location                        |
| -----: | ----: | ----------: | ----------- | ------------------------------- |
| 100.0% | 3 MiB |           3 | `_addtoken` | `./blib2to3/pgen2/parse.py:278` |

##### `generate_comments` (`./black/comments.py:52`)

|      % |  Size | Allocations | Caller          | Location                 |
| -----: | ----: | ----------: | --------------- | ------------------------ |
| 100.0% | 3 MiB |           3 | `visit_default` | `./black/linegen.py:134` |

##### `parse` (`/usr/local/lib/python3.10/ast.py:33`)

|      % |  Size | Allocations | Caller                  | Location                 |
| -----: | ----: | ----------: | ----------------------- | ------------------------ |
| 100.0% | 3 MiB |           3 | `_parse_single_version` | `./black/parsing.py:125` |

##### `run_transformer` (`./black/linegen.py:1771`)

|      % |     Size | Allocations | Caller           | Location                 |
| -----: | -------: | ----------: | ---------------- | ------------------------ |
| 100.0% | 2.04 MiB |          65 | `transform_line` | `./black/linegen.py:601` |

##### `convert` (`./blib2to3/pytree.py:475`)

|     % |  Size | Allocations | Caller  | Location                        |
| ----: | ----: | ----------: | ------- | ------------------------------- |
| 50.0% | 1 MiB |           1 | `pop`   | `./blib2to3/pgen2/parse.py:386` |
| 50.0% | 1 MiB |           1 | `shift` | `./blib2to3/pgen2/parse.py:361` |

##### `visit_default` (`./black/linegen.py:134`)

|      % |  Size | Allocations | Caller  | Location               |
| -----: | ----: | ----------: | ------- | ---------------------- |
| 100.0% | 2 MiB |           2 | `visit` | `./black/nodes.py:152` |

##### `mark` (`./black/brackets.py:70`)

|     % |    Size | Allocations | Caller                           | Location                  |
| ----: | ------: | ----------: | -------------------------------- | ------------------------- |
| 90.7% |   1 MiB |           3 | `append`                         | `./black/lines.py:52`     |
|  9.3% | 105 KiB |         186 | `max_delimiter_priority_in_atom` | `./black/brackets.py:328` |

##### `transform_line` (`./black/linegen.py:601`)

|     % |     Size | Allocations | Caller             | Location                   |
| ----: | -------: | ----------: | ------------------ | -------------------------- |
| 99.3% | 1.08 MiB |           8 | `_format_str_once` | `./black/__init__.py:1215` |
|  0.7% | 8.25 KiB |          15 | `run_transformer`  | `./black/linegen.py:1771`  |

##### `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`)

|     % |     Size | Allocations | Caller     | Location                        |
| ----: | -------: | ----------: | ---------- | ------------------------------- |
| 99.5% |    1 MiB |           1 | `__next__` | `./blib2to3/pgen2/driver.py:80` |
|  0.5% | 4.73 KiB |           2 | `gettoken` | `./blib2to3/pgen2/pgen.py:346`  |

##### `maybe_empty_lines` (`./black/lines.py:549`)

|      % |  Size | Allocations | Caller             | Location                   |
| -----: | ----: | ----------: | ------------------ | -------------------------- |
| 100.0% | 1 MiB |           2 | `_format_str_once` | `./black/__init__.py:1215` |

##### `visit` (`./black/nodes.py:152`)

|      % |  Size | Allocations | Caller          | Location               |
| -----: | ----: | ----------: | --------------- | ---------------------- |
| 100.0% | 1 MiB |           2 | `visit_default` | `./black/nodes.py:176` |

##### `closure` (`./blib2to3/pgen2/pgen.py:197`)

|      % |  Size | Allocations | Caller     | Location                       |
| -----: | ----: | ----------: | ---------- | ------------------------------ |
| 100.0% | 1 MiB |           1 | `make_dfa` | `./blib2to3/pgen2/pgen.py:189` |

##### `push` (`./blib2to3/pgen2/parse.py:374`)

|      % |  Size | Allocations | Caller      | Location                        |
| -----: | ----: | ----------: | ----------- | ------------------------------- |
| 100.0% | 1 MiB |           1 | `_addtoken` | `./blib2to3/pgen2/parse.py:278` |

##### `__new__` (`./blib2to3/pytree.py:70`)

|      % |  Size | Allocations | Caller    | Location                   |
| -----: | ----: | ----------: | --------- | -------------------------- |
| 100.0% | 1 MiB |           1 | `convert` | `./blib2to3/pytree.py:475` |

##### `prev_sibling` (`./blib2to3/pytree.py:196`)

|      % |  Size | Allocations | Caller       | Location               |
| -----: | ----: | ----------: | ------------ | ---------------------- |
| 100.0% | 1 MiB |           1 | `whitespace` | `./black/nodes.py:183` |

##### `__init__` (`./black/trans.py:278`)

|      % |  Size | Allocations | Caller           | Location                 |
| -----: | ----: | ----------: | ---------------- | ------------------------ |
| 100.0% | 1 MiB |           1 | `transform_line` | `./black/linegen.py:601` |

##### `contains_implicit_multiline_string_with_comments` (`./black/lines.py:250`)

|      % |  Size | Allocations | Caller           | Location                 |
| -----: | ----: | ----------: | ---------------- | ------------------------ |
| 100.0% | 1 MiB |           1 | `transform_line` | `./black/linegen.py:601` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:670`)

|      % |    Size | Allocations | Caller     | Location                                     |
| -----: | ------: | ----------: | ---------- | -------------------------------------------- |
| 100.0% | 159 KiB |         154 | `get_code` | `<frozen importlib._bootstrap_external>:950` |

##### `__new__` (`/usr/local/lib/python3.10/abc.py:105`)

|     % |     Size | Allocations | Caller     | Location                                                       |
| ----: | -------: | ----------: | ---------- | -------------------------------------------------------------- |
| 44.2% | 29.1 KiB |          34 | `<module>` | `/venv/lib/python3.10/site-packages/click/types.py:1`          |
| 23.9% | 15.7 KiB |          17 | `<module>` | `./black/trans.py:1`                                           |
| 20.9% | 13.8 KiB |           8 | `<module>` | `/venv/lib/python3.10/site-packages/click/core.py:1`           |
| 11.0% | 7.25 KiB |           8 | `<module>` | `/venv/lib/python3.10/site-packages/packaging/specifiers.py:1` |

##### `compile` (`/usr/local/lib/python3.10/sre_compile.py:783`)

|      % |     Size | Allocations | Caller     | Location                              |
| -----: | -------: | ----------: | ---------- | ------------------------------------- |
| 100.0% | 22.6 KiB |          12 | `_compile` | `/usr/local/lib/python3.10/re.py:288` |

##### `_parse_sub` (`/usr/local/lib/python3.10/sre_parse.py:436`)

|      % |     Size | Allocations | Caller   | Location                                     |
| -----: | -------: | ----------: | -------- | -------------------------------------------- |
| 100.0% | 16.3 KiB |          20 | `_parse` | `/usr/local/lib/python3.10/sre_parse.py:494` |

##### `__new__` (`/usr/local/lib/python3.10/enum.py:180`)

|     % |     Size | Allocations | Caller     | Location                                                     |
| ----: | -------: | ----------: | ---------- | ------------------------------------------------------------ |
| 38.8% | 6.14 KiB |           9 | `<module>` | `./black/mode.py:1`                                          |
| 17.5% | 2.77 KiB |           3 | `<module>` | `/venv/lib/python3.10/site-packages/packaging/_elffile.py:1` |
| 10.9% | 1.73 KiB |           2 | `<module>` | `/venv/lib/python3.10/site-packages/click/core.py:1`         |
|  9.4% | 1.48 KiB |           2 | `<module>` | `/venv/lib/python3.10/site-packages/click/_utils.py:1`       |
|  5.8% |    944 B |           1 | `<module>` | `/venv/lib/python3.10/site-packages/packaging/_ranges.py:1`  |

##### `inner` (`/usr/local/lib/python3.10/typing.py:306`)

|     % |     Size | Allocations | Caller        | Location                                  |
| ----: | -------: | ----------: | ------------- | ----------------------------------------- |
| 80.7% | 9.03 KiB |           1 | `Optional`    | `/usr/local/lib/python3.10/typing.py:523` |
| 19.3% | 2.16 KiB |           1 | `__getitem__` | `/usr/local/lib/python3.10/typing.py:407` |

##### `__new__` (`/usr/local/lib/python3.10/typing.py:2338`)

|     % |     Size | Allocations | Caller     | Location                                                    |
| ----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 90.6% | 8.86 KiB |          10 | `<module>` | `/venv/lib/python3.10/site-packages/click/types.py:1`       |
|  9.4% |    944 B |           1 | `<module>` | `/venv/lib/python3.10/site-packages/packaging/version.py:1` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1587`)

|      % |  Size | Allocations | Caller      | Location                                      |
| -----: | ----: | ----------: | ----------- | --------------------------------------------- |
| 100.0% | 8 KiB |           4 | `find_spec` | `<frozen importlib._bootstrap_external>:1536` |

##### `_compile` (`/usr/local/lib/python3.10/sre_compile.py:87`)

|     % |     Size | Allocations | Caller     | Location                                       |
| ----: | -------: | ----------: | ---------- | ---------------------------------------------- |
| 58.3% | 4.54 KiB |           7 | `_compile` | `/usr/local/lib/python3.10/sre_compile.py:87`  |
| 41.7% | 3.24 KiB |           5 | `_code`    | `/usr/local/lib/python3.10/sre_compile.py:622` |

##### `_parse` (`/usr/local/lib/python3.10/sre_parse.py:494`)

|      % |     Size | Allocations | Caller       | Location                                     |
| -----: | -------: | ----------: | ------------ | -------------------------------------------- |
| 100.0% | 7.61 KiB |           6 | `_parse_sub` | `/usr/local/lib/python3.10/sre_parse.py:436` |

##### `namedtuple` (`/usr/local/lib/python3.10/collections/__init__.py:328`)

|     % |     Size | Allocations | Caller          | Location                                   |
| ----: | -------: | ----------: | --------------- | ------------------------------------------ |
| 80.0% | 5.94 KiB |           8 | `_make_nmtuple` | `/usr/local/lib/python3.10/typing.py:2247` |
| 20.0% | 1.48 KiB |           2 | `<module>`      | `/usr/local/lib/python3.10/pkgutil.py:1`   |

##### `__setattr__` (`/usr/local/lib/python3.10/enum.py:470`)

|      % |     Size | Allocations | Caller    | Location                                |
| -----: | -------: | ----------: | --------- | --------------------------------------- |
| 100.0% | 6.71 KiB |          11 | `__new__` | `/usr/local/lib/python3.10/enum.py:180` |

##### `_set_new_attribute` (`/usr/local/lib/python3.10/dataclasses.py:824`)

|      % |     Size | Allocations | Caller           | Location                                       |
| -----: | -------: | ----------: | ---------------- | ---------------------------------------------- |
| 100.0% | 6.11 KiB |           9 | `_process_class` | `/usr/local/lib/python3.10/dataclasses.py:881` |

##### `_process_class` (`/usr/local/lib/python3.10/dataclasses.py:881`)

|      % |    Size | Allocations | Caller | Location                                        |
| -----: | ------: | ----------: | ------ | ----------------------------------------------- |
| 100.0% | 4.5 KiB |           8 | `wrap` | `/usr/local/lib/python3.10/dataclasses.py:1174` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:987`)

|      % |     Size | Allocations | Caller           | Location                             |
| -----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 100.0% | 4.46 KiB |           7 | `_find_and_load` | `<frozen importlib._bootstrap>:1022` |

##### `<module>` (`/usr/local/lib/python3.10/pkgutil.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.49 KiB |           4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/usr/local/lib/python3.10/secrets.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.05 KiB |           2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `rng` (`/usr/local/lib/python3.10/tempfile.py:142`)

|      % |     Size | Allocations | Caller     | Location                                    |
| -----: | -------: | ----------: | ---------- | ------------------------------------------- |
| 100.0% | 2.49 KiB |           1 | `__next__` | `/usr/local/lib/python3.10/tempfile.py:153` |

### Total size

Functions with the most bytes never freed within the function and its callees.

|      % |     Size | Allocations | Function               | Location                                                       |
| -----: | -------: | ----------: | ---------------------- | -------------------------------------------------------------- |
| 100.0% | 58.7 MiB |      27,468 | `run_module`           | `/usr/local/lib/python3.10/runpy.py:199`                       |
| 100.0% | 58.7 MiB |      27,468 | `_run_tracker`         | `/venv/lib/python3.10/site-packages/memray/commands/run.py:40` |
|  91.7% | 53.8 MiB |      26,593 | `_run_module_code`     | `/usr/local/lib/python3.10/runpy.py:89`                        |
|  91.7% | 53.8 MiB |      26,592 | `_run_code`            | `/usr/local/lib/python3.10/runpy.py:63`                        |
|  91.7% | 53.8 MiB |      26,591 | `__call__`             | `/venv/lib/python3.10/site-packages/click/core.py:1651`        |
|  91.7% | 53.8 MiB |      26,591 | `patched_main`         | `./black/__init__.py:1580`                                     |
|  91.7% | 53.8 MiB |      26,591 | `<module>`             | `./black/__main__.py:1`                                        |
|  91.7% | 53.8 MiB |      26,590 | `main`                 | `/venv/lib/python3.10/site-packages/click/core.py:1483`        |
|  91.6% | 53.8 MiB |      26,573 | `new_func`             | `/venv/lib/python3.10/site-packages/click/decorators.py:33`    |
|  91.6% | 53.8 MiB |      26,573 | `invoke`               | `/venv/lib/python3.10/site-packages/click/core.py:861`         |
|  91.6% | 53.8 MiB |      26,573 | `invoke`               | `/venv/lib/python3.10/site-packages/click/core.py:1400`        |
|  91.6% | 53.8 MiB |      26,572 | `main`                 | `./black/__init__.py:240`                                      |
|  91.6% | 53.8 MiB |      26,562 | `reformat_one`         | `./black/__init__.py:865`                                      |
|  91.6% | 53.8 MiB |      26,558 | `format_file_in_place` | `./black/__init__.py:922`                                      |
|  91.6% | 53.8 MiB |      26,557 | `format_file_contents` | `./black/__init__.py:1059`                                     |
|  86.5% | 50.8 MiB |      26,552 | `_format_str_once`     | `./black/__init__.py:1215`                                     |
|  61.5% | 36.1 MiB |         127 | `format_str`           | `./black/__init__.py:1168`                                     |
|  48.7% | 28.6 MiB |      26,396 | `visit`                | `./black/nodes.py:152`                                         |
|  48.7% | 28.6 MiB |      26,395 | `visit_default`        | `./black/nodes.py:176`                                         |
|  48.7% | 28.6 MiB |      26,395 | `visit_default`        | `./black/linegen.py:134`                                       |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Ours

|     % |     Size | Allocations | Function                          | Location                         |
| ----: | -------: | ----------: | --------------------------------- | -------------------------------- |
| 91.7% | 53.8 MiB |      26,591 | `patched_main`                    | `./black/__init__.py:1580`       |
| 91.7% | 53.8 MiB |      26,591 | `<module>`                        | `./black/__main__.py:1`          |
| 91.6% | 53.8 MiB |      26,572 | `main`                            | `./black/__init__.py:240`        |
| 91.6% | 53.8 MiB |      26,562 | `reformat_one`                    | `./black/__init__.py:865`        |
| 91.6% | 53.8 MiB |      26,558 | `format_file_in_place`            | `./black/__init__.py:922`        |
| 91.6% | 53.8 MiB |      26,557 | `format_file_contents`            | `./black/__init__.py:1059`       |
| 86.5% | 50.8 MiB |      26,552 | `_format_str_once`                | `./black/__init__.py:1215`       |
| 61.5% | 36.1 MiB |         127 | `format_str`                      | `./black/__init__.py:1168`       |
| 48.7% | 28.6 MiB |      26,396 | `visit`                           | `./black/nodes.py:152`           |
| 48.7% | 28.6 MiB |      26,395 | `visit_default`                   | `./black/nodes.py:176`           |
| 48.7% | 28.6 MiB |      26,395 | `visit_default`                   | `./black/linegen.py:134`         |
| 48.1% | 28.2 MiB |      25,807 | `visit_stmt`                      | `./black/linegen.py:199`         |
| 47.7% |   28 MiB |      25,389 | `visit_suite`                     | `./black/linegen.py:288`         |
| 47.7% |   28 MiB |      25,387 | `visit_funcdef`                   | `./black/linegen.py:254`         |
| 30.1% | 17.7 MiB |      26,430 | `check_stability_and_equivalence` | `./black/__init__.py:1042`       |
| 29.9% | 17.5 MiB |      15,457 | `visit_simple_stmt`               | `./black/linegen.py:295`         |
| 27.3% |   16 MiB |      23,657 | `generate_comments`               | `./black/comments.py:52`         |
| 25.6% |   15 MiB |          35 | `parse_string`                    | `./blib2to3/pgen2/driver.py:198` |
| 25.6% |   15 MiB |          35 | `lib2to3_parse`                   | `./black/parsing.py:55`          |
| 25.6% |   15 MiB |          34 | `parse_tokens`                    | `./blib2to3/pgen2/driver.py:114` |

##### Standard library

|      % |     Size | Allocations | Function                    | Location                                       |
| -----: | -------: | ----------: | --------------------------- | ---------------------------------------------- |
| 100.0% | 58.7 MiB |      27,468 | `run_module`                | `/usr/local/lib/python3.10/runpy.py:199`       |
|  91.7% | 53.8 MiB |      26,593 | `_run_module_code`          | `/usr/local/lib/python3.10/runpy.py:89`        |
|  91.7% | 53.8 MiB |      26,592 | `_run_code`                 | `/usr/local/lib/python3.10/runpy.py:63`        |
|   8.3% | 4.89 MiB |         874 | `_get_module_details`       | `/usr/local/lib/python3.10/runpy.py:103`       |
|   8.3% | 4.89 MiB |         871 | `exec_module`               | `<frozen importlib._bootstrap_external>:877`   |
|   8.3% | 4.89 MiB |         871 | `_load_unlocked`            | `<frozen importlib._bootstrap>:664`            |
|   8.3% | 4.89 MiB |         871 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:987`            |
|   8.3% | 4.89 MiB |         871 | `_find_and_load`            | `<frozen importlib._bootstrap>:1022`           |
|   8.3% | 4.89 MiB |         870 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`            |
|   5.5% | 3.23 MiB |         264 | `get_code`                  | `<frozen importlib._bootstrap_external>:950`   |
|   5.2% | 3.07 MiB |         109 | `source_to_code`            | `<frozen importlib._bootstrap_external>:942`   |
|   5.1% |    3 MiB |           3 | `parse`                     | `/usr/local/lib/python3.10/ast.py:33`          |
|   0.4% |  219 KiB |         222 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1053`           |
|   0.3% |  159 KiB |         154 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:670`   |
|   0.1% |   67 KiB |          69 | `__new__`                   | `/usr/local/lib/python3.10/abc.py:105`         |
|   0.1% | 55.6 KiB |          52 | `_compile`                  | `/usr/local/lib/python3.10/re.py:288`          |
|   0.1% | 54.8 KiB |          51 | `compile`                   | `/usr/local/lib/python3.10/sre_compile.py:783` |
|   0.1% | 50.7 KiB |          45 | `compile`                   | `/usr/local/lib/python3.10/re.py:249`          |
|  <0.1% | 24.4 KiB |          27 | `_parse_sub`                | `/usr/local/lib/python3.10/sre_parse.py:436`   |
|  <0.1% | 24.4 KiB |          27 | `_parse`                    | `/usr/local/lib/python3.10/sre_parse.py:494`   |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run_module` (`/usr/local/lib/python3.10/runpy.py:199`)

|      % |     Size | Allocations | Caller         | Location                                                       |
| -----: | -------: | ----------: | -------------- | -------------------------------------------------------------- |
| 100.0% | 58.7 MiB |      27,468 | `_run_tracker` | `/venv/lib/python3.10/site-packages/memray/commands/run.py:40` |

##### `_run_module_code` (`/usr/local/lib/python3.10/runpy.py:89`)

|      % |     Size | Allocations | Caller       | Location                                 |
| -----: | -------: | ----------: | ------------ | ---------------------------------------- |
| 100.0% | 53.8 MiB |      26,593 | `run_module` | `/usr/local/lib/python3.10/runpy.py:199` |

##### `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`)

|      % |     Size | Allocations | Caller             | Location                                |
| -----: | -------: | ----------: | ------------------ | --------------------------------------- |
| 100.0% | 53.8 MiB |      26,592 | `_run_module_code` | `/usr/local/lib/python3.10/runpy.py:89` |

##### `__call__` (`/venv/lib/python3.10/site-packages/click/core.py:1651`)

|      % |     Size | Allocations | Caller         | Location                   |
| -----: | -------: | ----------: | -------------- | -------------------------- |
| 100.0% | 53.8 MiB |      26,591 | `patched_main` | `./black/__init__.py:1580` |

##### `patched_main` (`./black/__init__.py:1580`)

|      % |     Size | Allocations | Caller     | Location                |
| -----: | -------: | ----------: | ---------- | ----------------------- |
| 100.0% | 53.8 MiB |      26,591 | `<module>` | `./black/__main__.py:1` |

##### `<module>` (`./black/__main__.py:1`)

|      % |     Size | Allocations | Caller      | Location                                |
| -----: | -------: | ----------: | ----------- | --------------------------------------- |
| 100.0% | 53.8 MiB |      26,591 | `_run_code` | `/usr/local/lib/python3.10/runpy.py:63` |

##### `main` (`/venv/lib/python3.10/site-packages/click/core.py:1483`)

|      % |     Size | Allocations | Caller     | Location                                                |
| -----: | -------: | ----------: | ---------- | ------------------------------------------------------- |
| 100.0% | 53.8 MiB |      26,590 | `__call__` | `/venv/lib/python3.10/site-packages/click/core.py:1651` |

##### `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`)

|      % |     Size | Allocations | Caller   | Location                                               |
| -----: | -------: | ----------: | -------- | ------------------------------------------------------ |
| 100.0% | 53.8 MiB |      26,573 | `invoke` | `/venv/lib/python3.10/site-packages/click/core.py:861` |

##### `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`)

|      % |     Size | Allocations | Caller   | Location                                                |
| -----: | -------: | ----------: | -------- | ------------------------------------------------------- |
| 100.0% | 53.8 MiB |      26,573 | `invoke` | `/venv/lib/python3.10/site-packages/click/core.py:1400` |

##### `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:1400`)

|      % |     Size | Allocations | Caller | Location                                                |
| -----: | -------: | ----------: | ------ | ------------------------------------------------------- |
| 100.0% | 53.8 MiB |      26,573 | `main` | `/venv/lib/python3.10/site-packages/click/core.py:1483` |

##### `main` (`./black/__init__.py:240`)

|      % |     Size | Allocations | Caller     | Location                                                    |
| -----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 100.0% | 53.8 MiB |      26,572 | `new_func` | `/venv/lib/python3.10/site-packages/click/decorators.py:33` |

##### `reformat_one` (`./black/__init__.py:865`)

|      % |     Size | Allocations | Caller | Location                  |
| -----: | -------: | ----------: | ------ | ------------------------- |
| 100.0% | 53.8 MiB |      26,562 | `main` | `./black/__init__.py:240` |

##### `format_file_in_place` (`./black/__init__.py:922`)

|      % |     Size | Allocations | Caller         | Location                  |
| -----: | -------: | ----------: | -------------- | ------------------------- |
| 100.0% | 53.8 MiB |      26,558 | `reformat_one` | `./black/__init__.py:865` |

##### `format_file_contents` (`./black/__init__.py:1059`)

|      % |     Size | Allocations | Caller                 | Location                  |
| -----: | -------: | ----------: | ---------------------- | ------------------------- |
| 100.0% | 53.8 MiB |      26,557 | `format_file_in_place` | `./black/__init__.py:922` |

##### `_format_str_once` (`./black/__init__.py:1215`)

|     % |     Size | Allocations | Caller          | Location                   |
| ----: | -------: | ----------: | --------------- | -------------------------- |
| 71.1% | 36.1 MiB |         126 | `format_str`    | `./black/__init__.py:1168` |
| 28.9% | 14.7 MiB |      26,426 | `assert_stable` | `./black/__init__.py:1543` |

##### `format_str` (`./black/__init__.py:1168`)

|      % |     Size | Allocations | Caller                 | Location                   |
| -----: | -------: | ----------: | ---------------------- | -------------------------- |
| 100.0% | 36.1 MiB |         127 | `format_file_contents` | `./black/__init__.py:1059` |

##### `visit` (`./black/nodes.py:152`)

|      % |     Size | Allocations | Caller             | Location                   |
| -----: | -------: | ----------: | ------------------ | -------------------------- |
| 100.0% | 28.6 MiB |      26,396 | `_format_str_once` | `./black/__init__.py:1215` |
| 100.0% | 28.6 MiB |      26,395 | `visit_default`    | `./black/nodes.py:176`     |
|  98.4% | 28.1 MiB |      25,614 | `visit_stmt`       | `./black/linegen.py:199`   |
|  97.9% |   28 MiB |      25,387 | `visit_funcdef`    | `./black/linegen.py:254`   |
|   0.4% |  131 KiB |         232 | `visit_decorators` | `./black/linegen.py:335`   |

##### `visit_default` (`./black/nodes.py:176`)

|      % |     Size | Allocations | Caller          | Location                 |
| -----: | -------: | ----------: | --------------- | ------------------------ |
| 100.0% | 28.6 MiB |      26,395 | `visit_default` | `./black/linegen.py:134` |

##### `visit_default` (`./black/linegen.py:134`)

|      % |     Size | Allocations | Caller              | Location                 |
| -----: | -------: | ----------: | ------------------- | ------------------------ |
| 100.0% | 28.6 MiB |      26,395 | `visit`             | `./black/nodes.py:152`   |
|  98.0% |   28 MiB |      25,389 | `visit_suite`       | `./black/linegen.py:288` |
|  57.9% | 16.5 MiB |      15,455 | `visit_simple_stmt` | `./black/linegen.py:295` |
|  35.9% | 10.3 MiB |       9,583 | `visit_power`       | `./black/linegen.py:341` |
|   4.5% | 1.29 MiB |         526 | `visit_NUMBER`      | `./black/linegen.py:505` |

##### `visit_stmt` (`./black/linegen.py:199`)

|      % |     Size | Allocations | Caller  | Location               |
| -----: | -------: | ----------: | ------- | ---------------------- |
| 100.0% | 28.2 MiB |      25,807 | `visit` | `./black/nodes.py:152` |

##### `visit_suite` (`./black/linegen.py:288`)

|      % |   Size | Allocations | Caller  | Location               |
| -----: | -----: | ----------: | ------- | ---------------------- |
| 100.0% | 28 MiB |      25,389 | `visit` | `./black/nodes.py:152` |

##### `visit_funcdef` (`./black/linegen.py:254`)

|      % |   Size | Allocations | Caller  | Location               |
| -----: | -----: | ----------: | ------- | ---------------------- |
| 100.0% | 28 MiB |      25,387 | `visit` | `./black/nodes.py:152` |

##### `check_stability_and_equivalence` (`./black/__init__.py:1042`)

|      % |     Size | Allocations | Caller                 | Location                   |
| -----: | -------: | ----------: | ---------------------- | -------------------------- |
| 100.0% | 17.7 MiB |      26,430 | `format_file_contents` | `./black/__init__.py:1059` |

##### `visit_simple_stmt` (`./black/linegen.py:295`)

|      % |     Size | Allocations | Caller  | Location               |
| -----: | -------: | ----------: | ------- | ---------------------- |
| 100.0% | 17.5 MiB |      15,457 | `visit` | `./black/nodes.py:152` |

##### `generate_comments` (`./black/comments.py:52`)

|      % |   Size | Allocations | Caller          | Location                 |
| -----: | -----: | ----------: | --------------- | ------------------------ |
| 100.0% | 16 MiB |      23,657 | `visit_default` | `./black/linegen.py:134` |

##### `parse_string` (`./blib2to3/pgen2/driver.py:198`)

|      % |   Size | Allocations | Caller          | Location                |
| -----: | -----: | ----------: | --------------- | ----------------------- |
| 100.0% | 15 MiB |          35 | `lib2to3_parse` | `./black/parsing.py:55` |

##### `lib2to3_parse` (`./black/parsing.py:55`)

|      % |   Size | Allocations | Caller             | Location                   |
| -----: | -----: | ----------: | ------------------ | -------------------------- |
| 100.0% | 15 MiB |          35 | `_format_str_once` | `./black/__init__.py:1215` |

##### `parse_tokens` (`./blib2to3/pgen2/driver.py:114`)

|      % |   Size | Allocations | Caller         | Location                         |
| -----: | -----: | ----------: | -------------- | -------------------------------- |
| 100.0% | 15 MiB |          34 | `parse_string` | `./blib2to3/pgen2/driver.py:198` |

##### `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`)

|      % |     Size | Allocations | Caller                | Location                                 |
| -----: | -------: | ----------: | --------------------- | ---------------------------------------- |
| 100.0% | 4.89 MiB |         874 | `run_module`          | `/usr/local/lib/python3.10/runpy.py:199` |
|  99.9% | 4.89 MiB |         871 | `_get_module_details` | `/usr/local/lib/python3.10/runpy.py:103` |

##### `exec_module` (`<frozen importlib._bootstrap_external>:877`)

|      % |     Size | Allocations | Caller           | Location                            |
| -----: | -------: | ----------: | ---------------- | ----------------------------------- |
| 100.0% | 4.89 MiB |         871 | `_load_unlocked` | `<frozen importlib._bootstrap>:664` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:664`)

|      % |     Size | Allocations | Caller                    | Location                            |
| -----: | -------: | ----------: | ------------------------- | ----------------------------------- |
| 100.0% | 4.89 MiB |         871 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:987` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:987`)

|      % |     Size | Allocations | Caller           | Location                             |
| -----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 100.0% | 4.89 MiB |         871 | `_find_and_load` | `<frozen importlib._bootstrap>:1022` |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1022`)

|      % |     Size | Allocations | Caller                      | Location                                                 |
| -----: | -------: | ----------: | --------------------------- | -------------------------------------------------------- |
| 100.0% | 4.89 MiB |         871 | `_get_module_details`       | `/usr/local/lib/python3.10/runpy.py:103`                 |
|  79.1% | 3.87 MiB |         842 | `<module>`                  | `./black/__init__.py:1`                                  |
|  25.6% | 1.25 MiB |         206 | `<module>`                  | `./black/comments.py:1`                                  |
|   4.6% |  228 KiB |         233 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`                      |
|   4.2% |  211 KiB |         194 | `<module>`                  | `/venv/lib/python3.10/site-packages/click/__init__.py:1` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|     % |     Size | Allocations | Caller                    | Location                                     |
| ----: | -------: | ----------: | ------------------------- | -------------------------------------------- |
| 79.3% | 3.88 MiB |         855 | `exec_module`             | `<frozen importlib._bootstrap_external>:877` |
| 62.9% | 3.07 MiB |         109 | `source_to_code`          | `<frozen importlib._bootstrap_external>:942` |
|  4.4% |  219 KiB |         222 | `_handle_fromlist`        | `<frozen importlib._bootstrap>:1053`         |
|  0.6% | 30.3 KiB |          39 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:987`          |

##### `get_code` (`<frozen importlib._bootstrap_external>:950`)

|      % |     Size | Allocations | Caller        | Location                                     |
| -----: | -------: | ----------: | ------------- | -------------------------------------------- |
| 100.0% | 3.23 MiB |         264 | `exec_module` | `<frozen importlib._bootstrap_external>:877` |

##### `source_to_code` (`<frozen importlib._bootstrap_external>:942`)

|      % |     Size | Allocations | Caller     | Location                                     |
| -----: | -------: | ----------: | ---------- | -------------------------------------------- |
| 100.0% | 3.07 MiB |         109 | `get_code` | `<frozen importlib._bootstrap_external>:950` |

##### `parse` (`/usr/local/lib/python3.10/ast.py:33`)

|      % |  Size | Allocations | Caller                  | Location                 |
| -----: | ----: | ----------: | ----------------------- | ------------------------ |
| 100.0% | 3 MiB |           3 | `_parse_single_version` | `./black/parsing.py:125` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1053`)

|     % |     Size | Allocations | Caller     | Location                                                             |
| ----: | -------: | ----------: | ---------- | -------------------------------------------------------------------- |
| 41.0% | 89.7 KiB |          77 | `<module>` | `./black/nodes.py:1`                                                 |
| 40.6% | 88.8 KiB |          98 | `<module>` | `/venv/lib/python3.10/site-packages/click/core.py:1`                 |
| 37.7% | 82.4 KiB |          73 | `<module>` | `./blib2to3/pygram.py:1`                                             |
|  9.7% | 21.1 KiB |          28 | `<module>` | `/venv/lib/python3.10/site-packages/pathspec/patterns/__init__.py:1` |
|  8.0% | 17.5 KiB |          23 | `<module>` | `./blib2to3/pgen2/driver.py:1`                                       |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:670`)

|      % |    Size | Allocations | Caller     | Location                                     |
| -----: | ------: | ----------: | ---------- | -------------------------------------------- |
| 100.0% | 159 KiB |         154 | `get_code` | `<frozen importlib._bootstrap_external>:950` |

##### `__new__` (`/usr/local/lib/python3.10/abc.py:105`)

|     % |     Size | Allocations | Caller     | Location                                                       |
| ----: | -------: | ----------: | ---------- | -------------------------------------------------------------- |
| 45.1% | 30.2 KiB |          36 | `<module>` | `/venv/lib/python3.10/site-packages/click/types.py:1`          |
| 23.5% | 15.7 KiB |          17 | `<module>` | `./black/trans.py:1`                                           |
| 20.6% | 13.8 KiB |           8 | `<module>` | `/venv/lib/python3.10/site-packages/click/core.py:1`           |
| 10.8% | 7.25 KiB |           8 | `<module>` | `/venv/lib/python3.10/site-packages/packaging/specifiers.py:1` |

##### `_compile` (`/usr/local/lib/python3.10/re.py:288`)

|     % |     Size | Allocations | Caller    | Location                              |
| ----: | -------: | ----------: | --------- | ------------------------------------- |
| 91.2% | 50.7 KiB |          45 | `compile` | `/usr/local/lib/python3.10/re.py:249` |
|  4.0% | 2.24 KiB |           3 | `match`   | `/usr/local/lib/python3.10/re.py:187` |
|  3.6% | 1.99 KiB |           3 | `findall` | `/usr/local/lib/python3.10/re.py:232` |
|  1.2% |    664 B |           1 | `split`   | `/usr/local/lib/python3.10/re.py:222` |

##### `compile` (`/usr/local/lib/python3.10/sre_compile.py:783`)

|      % |     Size | Allocations | Caller     | Location                              |
| -----: | -------: | ----------: | ---------- | ------------------------------------- |
| 100.0% | 54.8 KiB |          51 | `_compile` | `/usr/local/lib/python3.10/re.py:288` |

##### `compile` (`/usr/local/lib/python3.10/re.py:249`)

|     % |     Size | Allocations | Caller            | Location                                                         |
| ----: | -------: | ----------: | ----------------- | ---------------------------------------------------------------- |
| 28.0% | 14.2 KiB |           9 | `<module>`        | `./blib2to3/pgen2/tokenize.py:1`                                 |
| 21.3% | 10.8 KiB |           4 | `Specifier`       | `/venv/lib/python3.10/site-packages/packaging/specifiers.py:220` |
| 12.7% | 6.42 KiB |           9 | `_cached_compile` | `./black/strings.py:164`                                         |
| 10.2% | 5.19 KiB |           6 | `<module>`        | `/venv/lib/python3.10/site-packages/tomli/_re.py:1`              |
|  9.3% |  4.7 KiB |           5 | `Version`         | `/venv/lib/python3.10/site-packages/packaging/version.py:340`    |

##### `_parse_sub` (`/usr/local/lib/python3.10/sre_parse.py:436`)

|      % |     Size | Allocations | Caller   | Location                                     |
| -----: | -------: | ----------: | -------- | -------------------------------------------- |
| 100.0% | 24.4 KiB |          27 | `parse`  | `/usr/local/lib/python3.10/sre_parse.py:944` |
|  95.6% | 23.4 KiB |          25 | `_parse` | `/usr/local/lib/python3.10/sre_parse.py:494` |

##### `_parse` (`/usr/local/lib/python3.10/sre_parse.py:494`)

|      % |     Size | Allocations | Caller       | Location                                     |
| -----: | -------: | ----------: | ------------ | -------------------------------------------- |
| 100.0% | 24.4 KiB |          27 | `_parse_sub` | `/usr/local/lib/python3.10/sre_parse.py:436` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run_module` (`/usr/local/lib/python3.10/runpy.py:199`)

|     % |     Size | Allocations | Callee                | Location                                 |
| ----: | -------: | ----------: | --------------------- | ---------------------------------------- |
| 91.7% | 53.8 MiB |      26,593 | `_run_module_code`    | `/usr/local/lib/python3.10/runpy.py:89`  |
|  8.3% | 4.89 MiB |         874 | `_get_module_details` | `/usr/local/lib/python3.10/runpy.py:103` |

##### `_run_tracker` (`/venv/lib/python3.10/site-packages/memray/commands/run.py:40`)

|      % |     Size | Allocations | Callee       | Location                                 |
| -----: | -------: | ----------: | ------------ | ---------------------------------------- |
| 100.0% | 58.7 MiB |      27,468 | `run_module` | `/usr/local/lib/python3.10/runpy.py:199` |

##### `_run_module_code` (`/usr/local/lib/python3.10/runpy.py:89`)

|      % |     Size | Allocations | Callee      | Location                                |
| -----: | -------: | ----------: | ----------- | --------------------------------------- |
| 100.0% | 53.8 MiB |      26,592 | `_run_code` | `/usr/local/lib/python3.10/runpy.py:63` |

##### `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`)

|      % |     Size | Allocations | Callee     | Location                |
| -----: | -------: | ----------: | ---------- | ----------------------- |
| 100.0% | 53.8 MiB |      26,591 | `<module>` | `./black/__main__.py:1` |

##### `__call__` (`/venv/lib/python3.10/site-packages/click/core.py:1651`)

|      % |     Size | Allocations | Callee | Location                                                |
| -----: | -------: | ----------: | ------ | ------------------------------------------------------- |
| 100.0% | 53.8 MiB |      26,590 | `main` | `/venv/lib/python3.10/site-packages/click/core.py:1483` |

##### `patched_main` (`./black/__init__.py:1580`)

|      % |     Size | Allocations | Callee     | Location                                                |
| -----: | -------: | ----------: | ---------- | ------------------------------------------------------- |
| 100.0% | 53.8 MiB |      26,591 | `__call__` | `/venv/lib/python3.10/site-packages/click/core.py:1651` |

##### `<module>` (`./black/__main__.py:1`)

|      % |     Size | Allocations | Callee         | Location                   |
| -----: | -------: | ----------: | -------------- | -------------------------- |
| 100.0% | 53.8 MiB |      26,591 | `patched_main` | `./black/__init__.py:1580` |

##### `main` (`/venv/lib/python3.10/site-packages/click/core.py:1483`)

|      % |     Size | Allocations | Callee         | Location                                                |
| -----: | -------: | ----------: | -------------- | ------------------------------------------------------- |
| 100.0% | 53.8 MiB |      26,573 | `invoke`       | `/venv/lib/python3.10/site-packages/click/core.py:1400` |
|  <0.1% | 10.9 KiB |          16 | `make_context` | `/venv/lib/python3.10/site-packages/click/core.py:1330` |
|  <0.1% |      1 B |           1 | `__exit__`     | `/venv/lib/python3.10/site-packages/click/core.py:558`  |

##### `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`)

|      % |     Size | Allocations | Callee | Location                  |
| -----: | -------: | ----------: | ------ | ------------------------- |
| 100.0% | 53.8 MiB |      26,572 | `main` | `./black/__init__.py:240` |

##### `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`)

|      % |     Size | Allocations | Callee     | Location                                                    |
| -----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 100.0% | 53.8 MiB |      26,573 | `new_func` | `/venv/lib/python3.10/site-packages/click/decorators.py:33` |

##### `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:1400`)

|      % |     Size | Allocations | Callee   | Location                                               |
| -----: | -------: | ----------: | -------- | ------------------------------------------------------ |
| 100.0% | 53.8 MiB |      26,573 | `invoke` | `/venv/lib/python3.10/site-packages/click/core.py:861` |

##### `main` (`./black/__init__.py:240`)

|      % |     Size | Allocations | Callee         | Location                                               |
| -----: | -------: | ----------: | -------------- | ------------------------------------------------------ |
| 100.0% | 53.8 MiB |      26,562 | `reformat_one` | `./black/__init__.py:865`                              |
|  <0.1% |    4 KiB |           5 | `get_sources`  | `./black/__init__.py:729`                              |
|  <0.1% |    576 B |           1 | `__init__`     | `<string>:2`                                           |
|  <0.1% |    528 B |           1 | `exit`         | `/venv/lib/python3.10/site-packages/click/core.py:823` |

##### `reformat_one` (`./black/__init__.py:865`)

|      % |     Size | Allocations | Callee                 | Location                  |
| -----: | -------: | ----------: | ---------------------- | ------------------------- |
| 100.0% | 53.8 MiB |      26,558 | `format_file_in_place` | `./black/__init__.py:922` |
|  <0.1% |     72 B |           2 | `write`                | `./black/cache.py:132`    |

##### `format_file_in_place` (`./black/__init__.py:922`)

|      % |     Size | Allocations | Callee                 | Location                   |
| -----: | -------: | ----------: | ---------------------- | -------------------------- |
| 100.0% | 53.8 MiB |      26,557 | `format_file_contents` | `./black/__init__.py:1059` |
|  <0.1% |    520 B |           1 | `decode_bytes`         | `./black/__init__.py:1269` |

##### `format_file_contents` (`./black/__init__.py:1059`)

|     % |     Size | Allocations | Callee                            | Location                   |
| ----: | -------: | ----------: | --------------------------------- | -------------------------- |
| 67.1% | 36.1 MiB |         127 | `format_str`                      | `./black/__init__.py:1168` |
| 32.9% | 17.7 MiB |      26,430 | `check_stability_and_equivalence` | `./black/__init__.py:1042` |

##### `_format_str_once` (`./black/__init__.py:1215`)

|     % |     Size | Allocations | Callee              | Location                  |
| ----: | -------: | ----------: | ------------------- | ------------------------- |
| 56.3% | 28.6 MiB |      26,396 | `visit`             | `./black/nodes.py:152`    |
| 29.6% |   15 MiB |          35 | `lib2to3_parse`     | `./black/parsing.py:55`   |
| 12.1% | 6.13 MiB |         108 | `transform_line`    | `./black/linegen.py:601`  |
|  2.0% |    1 MiB |           3 | `maybe_empty_lines` | `./black/lines.py:549`    |
| <0.1% | 22.1 KiB |           7 | `normalize_fmt_off` | `./black/comments.py:168` |

##### `format_str` (`./black/__init__.py:1168`)

|      % |     Size | Allocations | Callee             | Location                   |
| -----: | -------: | ----------: | ------------------ | -------------------------- |
| 100.0% | 36.1 MiB |         126 | `_format_str_once` | `./black/__init__.py:1215` |

##### `visit` (`./black/nodes.py:152`)

|      % |     Size | Allocations | Callee              | Location                 |
| -----: | -------: | ----------: | ------------------- | ------------------------ |
| 100.0% | 28.6 MiB |      26,395 | `visit_default`     | `./black/linegen.py:134` |
|  98.8% | 28.2 MiB |      25,807 | `visit_stmt`        | `./black/linegen.py:199` |
|  98.0% |   28 MiB |      25,389 | `visit_suite`       | `./black/linegen.py:288` |
|  97.9% |   28 MiB |      25,387 | `visit_funcdef`     | `./black/linegen.py:254` |
|  61.4% | 17.5 MiB |      15,457 | `visit_simple_stmt` | `./black/linegen.py:295` |

##### `visit_default` (`./black/nodes.py:176`)

|      % |     Size | Allocations | Callee  | Location               |
| -----: | -------: | ----------: | ------- | ---------------------- |
| 100.0% | 28.6 MiB |      26,395 | `visit` | `./black/nodes.py:152` |

##### `visit_default` (`./black/linegen.py:134`)

|      % |     Size | Allocations | Callee              | Location                 |
| -----: | -------: | ----------: | ------------------- | ------------------------ |
| 100.0% | 28.6 MiB |      26,395 | `visit_default`     | `./black/nodes.py:176`   |
|  56.0% |   16 MiB |      23,657 | `generate_comments` | `./black/comments.py:52` |
|  21.3% | 6.07 MiB |         103 | `append`            | `./black/lines.py:52`    |

##### `visit_stmt` (`./black/linegen.py:199`)

|     % |     Size | Allocations | Callee                       | Location                  |
| ----: | -------: | ----------: | ---------------------------- | ------------------------- |
| 99.6% | 28.1 MiB |      25,614 | `visit`                      | `./black/nodes.py:152`    |
|  4.8% | 1.34 MiB |       2,440 | `normalize_invisible_parens` | `./black/linegen.py:1344` |

##### `visit_suite` (`./black/linegen.py:288`)

|      % |   Size | Allocations | Callee          | Location                 |
| -----: | -----: | ----------: | --------------- | ------------------------ |
| 100.0% | 28 MiB |      25,389 | `visit_default` | `./black/linegen.py:134` |

##### `visit_funcdef` (`./black/linegen.py:254`)

|      % |   Size | Allocations | Callee  | Location               |
| -----: | -----: | ----------: | ------- | ---------------------- |
| 100.0% | 28 MiB |      25,387 | `visit` | `./black/nodes.py:152` |

##### `check_stability_and_equivalence` (`./black/__init__.py:1042`)

|     % |     Size | Allocations | Callee              | Location                   |
| ----: | -------: | ----------: | ------------------- | -------------------------- |
| 83.0% | 14.7 MiB |      26,426 | `assert_stable`     | `./black/__init__.py:1543` |
| 17.0% |    3 MiB |           4 | `assert_equivalent` | `./black/__init__.py:1510` |

##### `visit_simple_stmt` (`./black/linegen.py:295`)

|     % |     Size | Allocations | Callee          | Location                 |
| ----: | -------: | ----------: | --------------- | ------------------------ |
| 94.3% | 16.5 MiB |      15,455 | `visit_default` | `./black/linegen.py:134` |
|  5.7% |    1 MiB |           1 | `line`          | `./black/linegen.py:109` |
| <0.1% |    672 B |           1 | `is_stub_suite` | `./black/nodes.py:796`   |

##### `generate_comments` (`./black/comments.py:52`)

|     % |   Size | Allocations | Callee                      | Location                  |
| ----: | -----: | ----------: | --------------------------- | ------------------------- |
| 81.2% | 13 MiB |      23,654 | `normalize_trailing_prefix` | `./black/comments.py:127` |

##### `parse_string` (`./blib2to3/pgen2/driver.py:198`)

|      % |   Size | Allocations | Callee         | Location                         |
| -----: | -----: | ----------: | -------------- | -------------------------------- |
| 100.0% | 15 MiB |          34 | `parse_tokens` | `./blib2to3/pgen2/driver.py:114` |

##### `lib2to3_parse` (`./black/parsing.py:55`)

|      % |   Size | Allocations | Callee         | Location                         |
| -----: | -----: | ----------: | -------------- | -------------------------------- |
| 100.0% | 15 MiB |          35 | `parse_string` | `./blib2to3/pgen2/driver.py:198` |

##### `parse_tokens` (`./blib2to3/pgen2/driver.py:114`)

|     % |   Size | Allocations | Callee     | Location                        |
| ----: | -----: | ----------: | ---------- | ------------------------------- |
| 93.3% | 14 MiB |          22 | `addtoken` | `./blib2to3/pgen2/parse.py:230` |
|  6.6% |  1 MiB |           1 | `__next__` | `./blib2to3/pgen2/driver.py:80` |

##### `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`)

|     % |     Size | Allocations | Callee                | Location                                         |
| ----: | -------: | ----------: | --------------------- | ------------------------------------------------ |
| 99.9% | 4.89 MiB |         871 | `_find_and_load`      | `<frozen importlib._bootstrap>:1022`             |
| 99.9% | 4.89 MiB |         871 | `_get_module_details` | `/usr/local/lib/python3.10/runpy.py:103`         |
| <0.1% |    2 KiB |           1 | `find_spec`           | `/usr/local/lib/python3.10/importlib/util.py:73` |

##### `exec_module` (`<frozen importlib._bootstrap_external>:877`)

|     % |     Size | Allocations | Callee                      | Location                                     |
| ----: | -------: | ----------: | --------------------------- | -------------------------------------------- |
| 79.3% | 3.88 MiB |         855 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`          |
| 66.1% | 3.23 MiB |         264 | `get_code`                  | `<frozen importlib._bootstrap_external>:950` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:664`)

|      % |     Size | Allocations | Callee        | Location                                     |
| -----: | -------: | ----------: | ------------- | -------------------------------------------- |
| 100.0% | 4.89 MiB |         871 | `exec_module` | `<frozen importlib._bootstrap_external>:877` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:987`)

|      % |     Size | Allocations | Callee                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 4.89 MiB |         871 | `_load_unlocked`            | `<frozen importlib._bootstrap>:664` |
|   0.6% | 30.3 KiB |          39 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |
|   0.2% | 8.16 KiB |           4 | `_find_spec`                | `<frozen importlib._bootstrap>:921` |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1022`)

|      % |     Size | Allocations | Callee                    | Location                            |
| -----: | -------: | ----------: | ------------------------- | ----------------------------------- |
| 100.0% | 4.89 MiB |         871 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:987` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|     % |     Size | Allocations | Callee           | Location                                                 |
| ----: | -------: | ----------: | ---------------- | -------------------------------------------------------- |
| 79.3% | 3.88 MiB |         855 | `<module>`       | `./black/__init__.py:1`                                  |
| 25.7% | 1.26 MiB |         209 | `<module>`       | `./black/comments.py:1`                                  |
| 25.6% | 1.25 MiB |         204 | `<module>`       | `./black/nodes.py:1`                                     |
|  4.6% |  228 KiB |         233 | `_find_and_load` | `<frozen importlib._bootstrap>:1022`                     |
|  4.3% |  215 KiB |         195 | `<module>`       | `/venv/lib/python3.10/site-packages/click/__init__.py:1` |

##### `get_code` (`<frozen importlib._bootstrap_external>:950`)

|     % |     Size | Allocations | Callee              | Location                                      |
| ----: | -------: | ----------: | ------------------- | --------------------------------------------- |
| 95.2% | 3.07 MiB |         109 | `source_to_code`    | `<frozen importlib._bootstrap_external>:942`  |
|  4.8% |  159 KiB |         154 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:670`  |
| <0.1% |    536 B |           1 | `_cache_bytecode`   | `<frozen importlib._bootstrap_external>:1094` |

##### `source_to_code` (`<frozen importlib._bootstrap_external>:942`)

|      % |     Size | Allocations | Callee                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.07 MiB |         109 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1053`)

|      % |    Size | Allocations | Callee                      | Location                            |
| -----: | ------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 219 KiB |         222 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `__new__` (`/usr/local/lib/python3.10/abc.py:105`)

|    % |     Size | Allocations | Callee              | Location                                   |
| ---: | -------: | ----------: | ------------------- | ------------------------------------------ |
| 1.7% | 1.13 KiB |           2 | `__init_subclass__` | `/usr/local/lib/python3.10/typing.py:1350` |

##### `_compile` (`/usr/local/lib/python3.10/re.py:288`)

|     % |     Size | Allocations | Callee    | Location                                       |
| ----: | -------: | ----------: | --------- | ---------------------------------------------- |
| 98.6% | 54.8 KiB |          51 | `compile` | `/usr/local/lib/python3.10/sre_compile.py:783` |

##### `compile` (`/usr/local/lib/python3.10/sre_compile.py:783`)

|     % |     Size | Allocations | Callee  | Location                                       |
| ----: | -------: | ----------: | ------- | ---------------------------------------------- |
| 44.6% | 24.4 KiB |          27 | `parse` | `/usr/local/lib/python3.10/sre_parse.py:944`   |
| 14.2% | 7.78 KiB |          12 | `_code` | `/usr/local/lib/python3.10/sre_compile.py:622` |

##### `compile` (`/usr/local/lib/python3.10/re.py:249`)

|      % |     Size | Allocations | Callee     | Location                              |
| -----: | -------: | ----------: | ---------- | ------------------------------------- |
| 100.0% | 50.7 KiB |          45 | `_compile` | `/usr/local/lib/python3.10/re.py:288` |

##### `_parse_sub` (`/usr/local/lib/python3.10/sre_parse.py:436`)

|      % |     Size | Allocations | Callee   | Location                                     |
| -----: | -------: | ----------: | -------- | -------------------------------------------- |
| 100.0% | 24.4 KiB |          27 | `_parse` | `/usr/local/lib/python3.10/sre_parse.py:494` |

##### `_parse` (`/usr/local/lib/python3.10/sre_parse.py:494`)

|     % |     Size | Allocations | Callee       | Location                                     |
| ----: | -------: | ----------: | ------------ | -------------------------------------------- |
| 95.6% | 23.4 KiB |          25 | `_parse_sub` | `/usr/local/lib/python3.10/sre_parse.py:436` |
|  2.3% |    576 B |           1 | `opengroup`  | `/usr/local/lib/python3.10/sre_parse.py:85`  |

## Hottest call stacks

Call stacks with the most bytes never freed in their leaf frame.

Common call stack: `run_module` (`/usr/local/lib/python3.10/runpy.py:199`) ← `_run_tracker` (`/venv/lib/python3.10/site-packages/memray/commands/run.py:40`)

|     % |     Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----: | -------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11.9% |    7 MiB |           8 | `__init__` (`./blib2to3/pytree.py:237`) ← `convert` (475) ← `pop` (`./blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  5.1% |    3 MiB |           3 | `shift` (`./blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  5.1% |    3 MiB |           3 | `parse` (`/usr/local/lib/python3.10/ast.py:33`) ← `_parse_single_version` (`./black/parsing.py:125`) ← `parse_ast` (137) ← `assert_equivalent` (`./black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  3.4% | 2.01 MiB |          27 | `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `source_to_code` (`<frozen importlib._bootstrap_external>:942`) ← `get_code` (950) ← `exec_module` (877) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `<module>` (`./black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`) ← `_get_module_details` (103)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.4% | 2.01 MiB |          15 | `run_transformer` (`./black/linegen.py:1771`) ← `transform_line` (601) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  3.4% |    2 MiB |           2 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `preceding_leaf` (`./black/nodes.py:436`) ← `whitespace` (183) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                   |
|  1.7% | 1.01 MiB |          15 | `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `source_to_code` (`<frozen importlib._bootstrap_external>:942`) ← `get_code` (950) ← `exec_module` (877) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`) ← `_get_module_details` (103)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.7% |    1 MiB |           4 | `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.7% |    1 MiB |           2 | `maybe_empty_lines` (`./black/lines.py:549`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.7% |    1 MiB |           1 | `closure` (`./blib2to3/pgen2/pgen.py:197`) ← `make_dfa` (189) ← `parse` (164) ← `__init__` (23) ← `generate_grammar` (415) ← `load_grammar` (`./blib2to3/pgen2/driver.py:246`) ← `load_packaged_grammar` (280) ← `initialize` (`./blib2to3/pygram.py:165`) ← `<module>` (`./black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `<module>` (`./black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `<module>` (`./black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`) ← `_get_module_details` (103)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.7% |    1 MiB |           1 | `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`) ← `__next__` (`./blib2to3/pgen2/driver.py:80`) ← `parse_tokens` (114) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.7% |    1 MiB |           1 | `push` (`./blib2to3/pgen2/parse.py:374`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.7% |    1 MiB |           1 | `convert` (`./blib2to3/pytree.py:475`) ← `shift` (`./blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.7% |    1 MiB |           1 | `convert` (`./blib2to3/pytree.py:475`) ← `pop` (`./blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.7% |    1 MiB |           1 | `__new__` (`./blib2to3/pytree.py:70`) ← `convert` (475) ← `shift` (`./blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.7% |    1 MiB |           1 | `__init__` (`<string>:2`) ← `__init__` (2) ← `line` (`./black/linegen.py:109`) ← `visit_INDENT` (179) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.7% |    1 MiB |           1 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `whitespace` (`./black/nodes.py:183`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.7% |    1 MiB |           1 | `__init__` (`./black/trans.py:278`) ← `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.7% |    1 MiB |           1 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                       |
|  1.7% |    1 MiB |           1 | `mark` (`./black/brackets.py:70`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89) |

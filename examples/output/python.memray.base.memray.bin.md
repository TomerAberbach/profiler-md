# Peak memory profile

Held 72.4 MiB over 23,696 samples (3.13 KiB per sample).

| Category    |     % |     Size | Samples |
| ----------- | ----: | -------: | ------: |
| ours        | 71.8% |   52 MiB |  21,382 |
| stdlib      | 26.4% | 19.1 MiB |   2,080 |
| third-party |  1.8% | 1.27 MiB |     234 |

## Hottest functions

### Self size

Functions ranked by bytes held at peak memory directly in the function body, excluding callees.

|     % |     Size | Samples | Function                               | Location                        |
| ----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 25.2% | 18.2 MiB |  20,790 | `mark`                                 | `black/brackets.py:70`          |
| 22.0% |   16 MiB |   1,014 | `parse`                                | `/usr/lib/python3.11/ast.py:33` |
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
|  0.3% |  222 KiB |       1 | `decode`                               | `<frozen codecs>:319`           |
|  0.1% | 75.7 KiB |      79 | `__new__`                              | `<frozen abc>:105`              |

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
| 47.6% | 34.4 MiB |  21,085 | `visit`                           | `black/nodes.py:163`                                    |
| 47.6% | 34.4 MiB |  21,083 | `visit_default`                   | `black/linegen.py:134`                                  |
| 47.6% | 34.4 MiB |  21,083 | `visit_default`                   | `black/nodes.py:187`                                    |
| 47.2% | 34.2 MiB |  20,712 | `visit_stmt`                      | `black/linegen.py:199`                                  |
| 46.7% | 33.8 MiB |  20,271 | `visit_funcdef`                   | `black/linegen.py:254`                                  |
| 46.6% | 33.7 MiB |  20,145 | `visit_suite`                     | `black/linegen.py:288`                                  |
| 32.9% | 23.8 MiB |  13,402 | `visit_simple_stmt`               | `black/linegen.py:295`                                  |
| 26.6% | 19.3 MiB |  20,884 | `append`                          | `black/lines.py:63`                                     |
| 25.2% | 18.2 MiB |  20,790 | `mark`                            | `black/brackets.py:70`                                  |
| 23.3% | 16.9 MiB |  10,808 | `visit_power`                     | `black/linegen.py:341`                                  |
| 22.0% |   16 MiB |   1,015 | `check_stability_and_equivalence` | `black/__init__.py:1037`                                |

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

## Hottest call stacks

Call stacks ranked by bytes held at peak memory in their leaf frame. `…` stands for frames the entry filter hides.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 22.0% |   16 MiB |   1,014 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  6.9% |    5 MiB |       5 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `shift` (`blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  4.1% |    3 MiB |       8 | `transform_line` (`black/linegen.py:601`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.8% |    2 MiB |       2 | `push` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  2.8% |    2 MiB |       2 | `convert` (`blib2to3/pytree.py:486`) ← `pop` (`blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.6% | 1.13 MiB |     158 | `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.4% | 1.04 MiB |      51 | `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← … ← `_find_and_load` (1167) ← … ← `_find_and_load` (1167) ← … ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.4% | 1.04 MiB |      49 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.4% | 1.02 MiB |      18 | `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/comments.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.4% | 1.01 MiB |       6 | `make_grammar` (`blib2to3/pgen2/pgen.py:49`) ← `generate_grammar` (426) ← `load_grammar` (`blib2to3/pgen2/driver.py:246`) ← `load_packaged_grammar` (280) ← `initialize` (`blib2to3/pygram.py:165`) ← `<module>` (`black/nodes.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/comments.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.4% |    1 MiB |       4 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.4% |    1 MiB |       2 | `maybe_empty_lines` (`black/lines.py:560`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.4% |    1 MiB |       1 | `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.4% |    1 MiB |       1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `preceding_leaf` (`black/nodes.py:441`) ← `whitespace` (194) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.4% |    1 MiB |       1 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit_NUMBER` (505) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                |
|  1.4% |    1 MiB |       1 | `changed` (`blib2to3/pytree.py:171`) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) |
|  1.4% |    1 MiB |       1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`black/nodes.py:194`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                         |
|  1.4% |    1 MiB |       1 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_test` (160) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.4% |    1 MiB |       1 | `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.4% |    1 MiB |       1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `wrap_in_parentheses` (`black/nodes.py:935`) ← `normalize_invisible_parens` (`black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

# Leaked memory profile

Leaked 57.1 MiB over 22,684 samples (2.58 KiB per sample).

| Category    |     % |     Size | Samples |
| ----------- | ----: | -------: | ------: |
| ours        | 89.1% | 50.9 MiB |  21,386 |
| stdlib      |  8.7% | 4.97 MiB |   1,068 |
| third-party |  2.2% | 1.23 MiB |     230 |

## Hottest functions

### Self size

Functions ranked by bytes never freed directly in the function body, excluding callees.

|     % |     Size | Samples | Function                               | Location                        |
| ----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 30.2% | 17.2 MiB |  20,789 | `mark`                                 | `black/brackets.py:70`          |
| 10.5% |    6 MiB |       6 | `changed`                              | `blib2to3/pytree.py:171`        |
|  8.8% |    5 MiB |       5 | `__new__`                              | `blib2to3/pytree.py:81`         |
|  5.4% | 3.07 MiB |       9 | `transform_line`                       | `black/linegen.py:601`          |
|  5.3% |    3 MiB |       4 | `visit_default`                        | `black/linegen.py:134`          |
|  5.3% |    3 MiB |       3 | `generate_comments`                    | `black/comments.py:52`          |
|  3.8% | 2.14 MiB |     197 | `update_sibling_maps`                  | `blib2to3/pytree.py:369`        |
|  3.5% | 2.01 MiB |       3 | `parse`                                | `/usr/lib/python3.11/ast.py:33` |
|  3.5% |    2 MiB |       2 | `convert`                              | `blib2to3/pytree.py:486`        |
|  3.5% |    2 MiB |       2 | `push`                                 | `blib2to3/pgen2/parse.py:386`   |
|  1.8% | 1.01 MiB |       6 | `make_grammar`                         | `blib2to3/pgen2/pgen.py:49`     |
|  1.8% |    1 MiB |       5 | `visit`                                | `black/nodes.py:163`            |
|  1.8% |    1 MiB |       2 | `maybe_empty_lines`                    | `black/lines.py:560`            |
|  1.8% |    1 MiB |       1 | `contains_uncollapsable_type_comments` | `black/lines.py:276`            |
|  1.8% |    1 MiB |       1 | `__init__`                             | `<string>:2`                    |
|  1.8% |    1 MiB |       1 | `_addtoken`                            | `blib2to3/pgen2/parse.py:290`   |
|  1.8% |    1 MiB |       1 | `__init__`                             | `blib2to3/pytree.py:400`        |
|  0.1% | 75.7 KiB |      79 | `__new__`                              | `<frozen abc>:105`              |
|  0.1% | 57.2 KiB |      65 | `normalize_string_prefix`              | `black/strings.py:143`          |
|  0.1% | 41.5 KiB |      16 | `copy`                                 | `blib2to3/pgen2/grammar.py:131` |

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

### Total size

Functions ranked by total bytes never freed in the function and all its callees.

|     % |     Size | Samples | Function                          | Location                                                |
| ----: | -------: | ------: | --------------------------------- | ------------------------------------------------------- |
| 90.5% | 51.6 MiB |  21,189 | `__call__`                        | `/venv/lib/python3.11/site-packages/click/core.py:1567` |
| 90.5% | 51.6 MiB |  21,189 | `patched_main`                    | `black/__init__.py:1594`                                |
| 90.5% | 51.6 MiB |  21,189 | `<module>`                        | `black/__main__.py:1`                                   |
| 90.5% | 51.6 MiB |  21,164 | `main`                            | `black/__init__.py:244`                                 |
| 90.4% | 51.6 MiB |  21,159 | `reformat_one`                    | `black/__init__.py:860`                                 |
| 90.4% | 51.6 MiB |  21,152 | `format_file_in_place`            | `black/__init__.py:917`                                 |
| 90.4% | 51.6 MiB |  21,151 | `format_file_contents`            | `black/__init__.py:1054`                                |
| 86.9% | 49.6 MiB |  21,145 | `_format_str_once`                | `black/__init__.py:1236`                                |
| 59.7% | 34.1 MiB |      92 | `format_str`                      | `black/__init__.py:1189`                                |
| 58.6% | 33.4 MiB |  21,084 | `visit`                           | `black/nodes.py:163`                                    |
| 58.6% | 33.4 MiB |  21,082 | `visit_default`                   | `black/nodes.py:187`                                    |
| 58.6% | 33.4 MiB |  21,082 | `visit_default`                   | `black/linegen.py:134`                                  |
| 58.1% | 33.2 MiB |  20,711 | `visit_stmt`                      | `black/linegen.py:199`                                  |
| 57.5% | 32.8 MiB |  20,270 | `visit_funcdef`                   | `black/linegen.py:254`                                  |
| 57.4% | 32.7 MiB |  20,144 | `visit_suite`                     | `black/linegen.py:288`                                  |
| 40.0% | 22.8 MiB |  13,401 | `visit_simple_stmt`               | `black/linegen.py:295`                                  |
| 32.0% | 18.3 MiB |  20,883 | `append`                          | `black/lines.py:63`                                     |
| 30.7% | 17.5 MiB |  21,059 | `check_stability_and_equivalence` | `black/__init__.py:1037`                                |
| 30.2% | 17.2 MiB |  20,789 | `mark`                            | `black/brackets.py:70`                                  |
| 29.6% | 16.9 MiB |  10,808 | `visit_power`                     | `black/linegen.py:341`                                  |

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

## Hottest call stacks

Call stacks ranked by bytes never freed in their leaf frame. `…` stands for frames the entry filter hides.

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.8% |    5 MiB |       5 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `shift` (`blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 5.3% |    3 MiB |       6 | `transform_line` (`black/linegen.py:601`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 3.5% | 2.01 MiB |       3 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 3.5% |    2 MiB |       2 | `push` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3.5% |    2 MiB |       2 | `convert` (`blib2to3/pytree.py:486`) ← `pop` (`blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2.0% | 1.13 MiB |     158 | `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.8% | 1.04 MiB |      51 | `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← … ← `_find_and_load` (1167) ← … ← `_find_and_load` (1167) ← … ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.8% | 1.02 MiB |      18 | `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/comments.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.8% | 1.01 MiB |       6 | `make_grammar` (`blib2to3/pgen2/pgen.py:49`) ← `generate_grammar` (426) ← `load_grammar` (`blib2to3/pgen2/driver.py:246`) ← `load_packaged_grammar` (280) ← `initialize` (`blib2to3/pygram.py:165`) ← `<module>` (`black/nodes.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/comments.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`) ← `<module>` (`black/__init__.py:1`) ← … ← `_find_and_load` (`<frozen importlib._bootstrap>:1167`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.8% |    1 MiB |       2 | `maybe_empty_lines` (`black/lines.py:560`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.8% |    1 MiB |       1 | `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.8% |    1 MiB |       1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `preceding_leaf` (`black/nodes.py:441`) ← `whitespace` (194) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.8% |    1 MiB |       1 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit_NUMBER` (505) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                |
| 1.8% |    1 MiB |       1 | `changed` (`blib2to3/pytree.py:171`) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) |
| 1.8% |    1 MiB |       1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`black/nodes.py:194`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                         |
| 1.8% |    1 MiB |       1 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_test` (160) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.8% |    1 MiB |       1 | `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.8% |    1 MiB |       1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `wrap_in_parentheses` (`black/nodes.py:935`) ← `normalize_invisible_parens` (`black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.8% |    1 MiB |       1 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.8% |    1 MiB |       1 | `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

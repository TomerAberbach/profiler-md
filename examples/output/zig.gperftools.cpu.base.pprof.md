# CPU profile

Took 5.28s over 5,287 samples (1.0ms per sample).

| Category         |     % |    Time | Samples |
| ---------------- | ----: | ------: | ------: |
| Standard library | 92.2% |   4.87s |   4,876 |
| Unknown          |  6.4% | 336.0ms |     336 |
| Native           |  1.4% |  75.0ms |      75 |

Paths starting with `./` or `../` are relative to `/out/`.

## Call tree

Call paths to the hottest functions.

```
└── 5.28s (100.0%) [[via 2 frames]] (anonymous)  (self 6.4%)
    └── 4.93s (93.3%) [[via 3 frames]] profile.main  ./profile.zig:12
        ├── 3.79s (71.7%) [[via 3 frames]] zig.Ast.Render.renderMembers  /opt/zig/lib/std/zig/Ast/Render.zig:122
        │   ├── 3.26s (61.8%) zig.Ast.Render.renderMember  :141
        │   │   ├── 1.37s (26.0%) zig.Ast.Render.renderExpression  (self 1.2%; 2.5% in 109 call stacks)  :314
        │   │   │   ├── 233.0ms (4.4%) [[via 1–9 frames]] zig.Ast.Render.renderIdentifier  (1.3% self in 59 call stacks)  /opt/zig/lib/std/zig/Ast/Render.zig:2926
        │   │   │   │   ├── 107.0ms (2.0%) zig.Ast.Render.tokenSliceForRender  (3.7% self in 161 call stacks)  :3268
        │   │   │   │   │   └── 98.0ms (1.9%) zig.Ast.tokenSlice  /opt/zig/lib/std/zig/Ast.zig:265
        │   │   │   │   │       └── 89.0ms (1.7%) zig.tokenizer.Tokenizer.next  (self 1.2%)  /opt/zig/lib/std/zig/tokenizer.zig:395
        │   │   │   │   └── 114.0ms (2.2%) 7 more branches, largest zig.Ast.Render.renderToken (2.0%)  :2844
        │   │   │   ├── 180.0ms (3.4%) [[via 2–8 frames]] zig.Ast.Render.renderParamList  /opt/zig/lib/std/zig/Ast/Render.zig:2728
        │   │   │   │   ├── 84.0ms (1.6%) zig.Ast.Render.renderToken  (1.1% self in 51 call stacks)  :2844
        │   │   │   │   │   ├── 24.0ms (0.5%) zig.Ast.Render.renderSpace  :2862
        │   │   │   │   │   │   └── 10.0ms (0.2%) zig.Ast.Render.renderComments  (3.0% self in 145 call stacks)  :3112
        │   │   │   │   │   └── 54.0ms (1.0%) 4 more branches, largest zig.Ast.Render.tokenSliceForRender (0.4%)  :3268
        │   │   │   │   └── 92.0ms (1.7%) 10 more branches, largest zig.Ast.Render.renderIdentifier (1.3%)  :2926
        │   │   │   ├── 30.0ms (0.6%) [[via 2–4 frames]] zig.Ast.Render.renderSpace  (3.1% self in 131 call stacks)  /opt/zig/lib/std/zig/Ast/Render.zig:2862
        │   │   │   ├── 14.0ms (0.3%) [[via 6–8 frames]] multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_6976  (2.3% self in 108 call stacks)  /opt/zig/lib/std/multi_array_list.zig:83
        │   │   │   └── 856.0ms (16.2%) 41 more branches, largest zig.Ast.Render.finishRenderBlock (3.7%)  :1967 and zig.Ast.Render.renderFnProto (1.8%)
        │   │   ├── 758.0ms (14.3%) [[via 3–5 frames]] zig.Ast.Render.renderExpression  (self 0.6%)  /opt/zig/lib/std/zig/Ast/Render.zig:314
        │   │   │   └── 727.0ms (13.8%) 45 more branches, largest zig.Ast.Render.renderIdentifier (3.4%)  /opt/zig/lib/std/zig/Ast/Render.zig:2926 and zig.Ast.Render.finishRenderBlock (2.1%)
        │   │   ├── 459.0ms (8.7%) zig.Ast.Render.renderVarDecl  :1122
        │   │   │   └── 457.0ms (8.6%) zig.Ast.Render.renderVarDeclWithoutFixups  :1140
        │   │   │       ├── 390.0ms (7.4%) zig.Ast.Render.renderExpression  :314
        │   │   │       │   ├── 107.0ms (2.0%) zig.Ast.Render.renderContainerDecl  :2295
        │   │   │       │   │   ├── 56.0ms (1.1%) zig.Ast.Render.hasComment  :3089
        │   │   │       │   │   │   ├── 29.0ms (0.5%) zig.Ast.tokenSlice  (4.7% self in 218 call stacks)  /opt/zig/lib/std/zig/Ast.zig:265
        │   │   │       │   │   │   └── 13.0ms (0.2%) zig.tokenizer.Token.Tag.lexeme  (2.9% self in 125 call stacks)  /opt/zig/lib/std/zig/tokenizer.zig:186
        │   │   │       │   │   └── 35.0ms (0.7%) zig.Ast.Render.renderExtraNewline  :3175
        │   │   │       │   │       └── 25.0ms (0.5%) zig.Ast.Render.renderExtraNewlineToken  (1.4% self in 46 call stacks)  :3180
        │   │   │       │   └── 273.0ms (5.2%) 27 more branches, largest zig.Ast.Render.renderArrayInit (1.4%)  /opt/zig/lib/std/zig/Ast/Render.zig:2067 and zig.Ast.Render.renderStructInit (0.9%)
        │   │   │       └── 66.0ms (1.2%) 5 more branches, largest zig.Ast.Render.renderIdentifier (0.6%)  :2926
        │   │   └── 671.0ms (12.7%) 13 more branches, largest zig.Ast.Render.renderVarDecl (5.8%)  /opt/zig/lib/std/zig/Ast/Render.zig:1122 and zig.Ast.Render.renderContainerField (4.9%)
        │   └── 501.0ms (9.5%) zig.Ast.Render.renderExpression  :314
        │       └── 482.0ms (9.1%) 31 more branches, largest zig.Ast.Render.renderParamList (1.7%)  /opt/zig/lib/std/zig/Ast/Render.zig:2728 and zig.Ast.Render.renderArrayInit (1.5%)
        ├── 1.08s (20.4%) zig.Ast.parse  /opt/zig/lib/std/zig/Ast.zig:145
        │   ├── 528.0ms (10.0%) zig.tokenizer.Tokenizer.next  (self 8.5%; 23.8% in 465 call stacks)  /opt/zig/lib/std/zig/tokenizer.zig:395
        │   │   └── 81.0ms (1.5%) [[via 2 frames]] static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex  (self 1.1%; 5.4% in 178 call stacks)  /opt/zig/lib/std/static_string_map.zig:198
        │   └── 530.0ms (10.0%) 2 more branches, largest zig.Parse.parseRoot (8.6%)  /opt/zig/lib/std/zig/Parse.zig:192 and multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).append (1.4%)
        └── 26.0ms (0.5%) [[via 10 frames]] __read
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|     % |    Time | Samples | Function                                                                                             | Location                                     |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| 23.8% |   1.25s |   1,258 | `zig.tokenizer.Tokenizer.next`                                                                       | `/opt/zig/lib/std/zig/tokenizer.zig:395`     |
|  6.4% | 336.0ms |     336 | `(anonymous)`                                                                                        | `<unknown>`                                  |
|  5.4% | 287.0ms |     287 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` | `/opt/zig/lib/std/static_string_map.zig:198` |
|  4.7% | 250.0ms |     250 | `zig.Ast.tokenSlice`                                                                                 | `/opt/zig/lib/std/zig/Ast.zig:265`           |
|  3.7% | 194.0ms |     194 | `zig.Ast.Render.tokenSliceForRender`                                                                 | `/opt/zig/lib/std/zig/Ast/Render.zig:3268`   |
|  3.1% | 164.0ms |     164 | `zig.Ast.Render.renderSpace`                                                                         | `/opt/zig/lib/std/zig/Ast/Render.zig:2862`   |
|  3.0% | 160.0ms |     160 | `zig.Ast.Render.renderComments`                                                                      | `/opt/zig/lib/std/zig/Ast/Render.zig:3112`   |
|  2.9% | 154.0ms |     154 | `zig.tokenizer.Token.Tag.lexeme`                                                                     | `/opt/zig/lib/std/zig/tokenizer.zig:186`     |
|  2.5% | 131.0ms |     131 | `zig.Ast.Render.renderExpression`                                                                    | `/opt/zig/lib/std/zig/Ast/Render.zig:314`    |
|  2.3% | 121.0ms |     121 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_6976`                               | `/opt/zig/lib/std/multi_array_list.zig:83`   |
|  2.1% | 113.0ms |     113 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_6974`                               | `/opt/zig/lib/std/multi_array_list.zig:83`   |
|  1.5% |  81.0ms |      81 | `zig.Ast.tokenTag`                                                                                   | `/opt/zig/lib/std/zig/Ast.zig:88`            |
|  1.5% |  77.0ms |      77 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).Slice.items__anon_6665`             | `/opt/zig/lib/std/multi_array_list.zig:83`   |
|  1.4% |  74.0ms |      74 | `zig.Ast.Render.renderExtraNewlineToken`                                                             | `/opt/zig/lib/std/zig/Ast/Render.zig:3180`   |
|  1.3% |  71.0ms |      71 | `mem.eqlBytes`                                                                                       | `/opt/zig/lib/std/mem.zig:729`               |
|  1.3% |  70.0ms |      70 | `static_string_map.defaultEql`                                                                       | `/opt/zig/lib/std/static_string_map.zig:13`  |
|  1.3% |  67.0ms |      67 | `zig.Ast.Render.renderIdentifier`                                                                    | `/opt/zig/lib/std/zig/Ast/Render.zig:2926`   |
|  1.2% |  65.0ms |      65 | `zig.Ast.firstToken`                                                                                 | `/opt/zig/lib/std/zig/Ast.zig:596`           |
|  1.2% |  62.0ms |      62 | `Io.Writer.writeAll`                                                                                 | `/opt/zig/lib/std/Io/Writer.zig:530`         |
|  1.2% |  61.0ms |      61 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_6965`                               | `/opt/zig/lib/std/multi_array_list.zig:83`   |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |    Time | Samples | Function                                                                                             | Location                                     |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| 23.8% |   1.25s |   1,258 | `zig.tokenizer.Tokenizer.next`                                                                       | `/opt/zig/lib/std/zig/tokenizer.zig:395`     |
|  5.4% | 287.0ms |     287 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` | `/opt/zig/lib/std/static_string_map.zig:198` |
|  4.7% | 250.0ms |     250 | `zig.Ast.tokenSlice`                                                                                 | `/opt/zig/lib/std/zig/Ast.zig:265`           |
|  3.7% | 194.0ms |     194 | `zig.Ast.Render.tokenSliceForRender`                                                                 | `/opt/zig/lib/std/zig/Ast/Render.zig:3268`   |
|  3.1% | 164.0ms |     164 | `zig.Ast.Render.renderSpace`                                                                         | `/opt/zig/lib/std/zig/Ast/Render.zig:2862`   |
|  3.0% | 160.0ms |     160 | `zig.Ast.Render.renderComments`                                                                      | `/opt/zig/lib/std/zig/Ast/Render.zig:3112`   |
|  2.9% | 154.0ms |     154 | `zig.tokenizer.Token.Tag.lexeme`                                                                     | `/opt/zig/lib/std/zig/tokenizer.zig:186`     |
|  2.5% | 131.0ms |     131 | `zig.Ast.Render.renderExpression`                                                                    | `/opt/zig/lib/std/zig/Ast/Render.zig:314`    |
|  2.3% | 121.0ms |     121 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_6976`                               | `/opt/zig/lib/std/multi_array_list.zig:83`   |
|  2.1% | 113.0ms |     113 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_6974`                               | `/opt/zig/lib/std/multi_array_list.zig:83`   |
|  1.5% |  81.0ms |      81 | `zig.Ast.tokenTag`                                                                                   | `/opt/zig/lib/std/zig/Ast.zig:88`            |
|  1.5% |  77.0ms |      77 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).Slice.items__anon_6665`             | `/opt/zig/lib/std/multi_array_list.zig:83`   |
|  1.4% |  74.0ms |      74 | `zig.Ast.Render.renderExtraNewlineToken`                                                             | `/opt/zig/lib/std/zig/Ast/Render.zig:3180`   |
|  1.3% |  71.0ms |      71 | `mem.eqlBytes`                                                                                       | `/opt/zig/lib/std/mem.zig:729`               |
|  1.3% |  70.0ms |      70 | `static_string_map.defaultEql`                                                                       | `/opt/zig/lib/std/static_string_map.zig:13`  |
|  1.3% |  67.0ms |      67 | `zig.Ast.Render.renderIdentifier`                                                                    | `/opt/zig/lib/std/zig/Ast/Render.zig:2926`   |
|  1.2% |  65.0ms |      65 | `zig.Ast.firstToken`                                                                                 | `/opt/zig/lib/std/zig/Ast.zig:596`           |
|  1.2% |  62.0ms |      62 | `Io.Writer.writeAll`                                                                                 | `/opt/zig/lib/std/Io/Writer.zig:530`         |
|  1.2% |  61.0ms |      61 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_6965`                               | `/opt/zig/lib/std/multi_array_list.zig:83`   |
|  1.1% |  60.0ms |      60 | `zig.Ast.Render.renderToken`                                                                         | `/opt/zig/lib/std/zig/Ast/Render.zig:2844`   |

##### Unknown

|    % |    Time | Samples | Function      | Location    |
| ---: | ------: | ------: | ------------- | ----------- |
| 6.4% | 336.0ms |     336 | `(anonymous)` | `<unknown>` |

##### Native

|     % |   Time | Samples | Function             | Location    |
| ----: | -----: | ------: | -------------------- | ----------- |
|  0.5% | 26.0ms |      26 | `__read`             | `<unknown>` |
|  0.4% | 23.0ms |      23 | `openat`             | `<unknown>` |
|  0.3% | 15.0ms |      15 | `brk`                | `<unknown>` |
|  0.1% |  4.0ms |       4 | `close`              | `<unknown>` |
|  0.1% |  4.0ms |       4 | `posix_memalign`     | `<unknown>` |
| <0.1% |  2.0ms |       2 | `cfree`              | `<unknown>` |
| <0.1% |  1.0ms |       1 | `malloc_usable_size` | `<unknown>` |

#### Lines

Lines with the largest contribution to each function's self time.

##### `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:395`)

|     % |    Time | Samples | Location                                  |
| ----: | ------: | ------: | ----------------------------------------- |
| 22.3% | 281.0ms |     281 | `/opt/zig/lib/std/zig/tokenizer.zig:665`  |
| 21.0% | 264.0ms |     264 | `/opt/zig/lib/std/zig/tokenizer.zig:666`  |
| 10.9% | 137.0ms |     137 | `/opt/zig/lib/std/zig/tokenizer.zig:669`  |
|  8.2% | 103.0ms |     103 | `/opt/zig/lib/std/zig/tokenizer.zig:404`  |
|  7.9% | 100.0ms |     100 | `/opt/zig/lib/std/zig/tokenizer.zig:1029` |

##### `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` (`/opt/zig/lib/std/static_string_map.zig:198`)

|     % |    Time | Samples | Location                                     |
| ----: | ------: | ------: | -------------------------------------------- |
| 47.4% | 136.0ms |     136 | `/opt/zig/lib/std/static_string_map.zig:213` |
| 45.3% | 130.0ms |     130 | `/opt/zig/lib/std/static_string_map.zig:208` |
|  5.2% |  15.0ms |      15 | `/opt/zig/lib/std/static_string_map.zig:203` |
|  0.3% |   1.0ms |       1 | `/opt/zig/lib/std/static_string_map.zig:209` |
|  0.3% |   1.0ms |       1 | `/opt/zig/lib/std/static_string_map.zig:214` |

##### `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:265`)

|     % |   Time | Samples | Location                           |
| ----: | -----: | ------: | ---------------------------------- |
| 32.8% | 82.0ms |      82 | `/opt/zig/lib/std/zig/Ast.zig:265` |
| 13.6% | 34.0ms |      34 | `/opt/zig/lib/std/zig/Ast.zig:280` |
| 13.2% | 33.0ms |      33 | `/opt/zig/lib/std/zig/Ast.zig:266` |
|  6.4% | 16.0ms |      16 | `/opt/zig/lib/std/zig/Ast.zig:275` |
|  3.6% |  9.0ms |       9 | `/opt/zig/lib/std/zig/Ast.zig:279` |

##### `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3268`)

|     % |    Time | Samples | Location                                   |
| ----: | ------: | ------: | ------------------------------------------ |
| 72.7% | 141.0ms |     141 | `/opt/zig/lib/std/zig/Ast/Render.zig:3268` |
| 11.9% |  23.0ms |      23 | `/opt/zig/lib/std/zig/Ast/Render.zig:3276` |
|  3.1% |   6.0ms |       6 | `/opt/zig/lib/std/zig/Ast/Render.zig:3270` |
|  1.5% |   3.0ms |       3 | `/opt/zig/lib/std/zig/Ast/Render.zig:3269` |

##### `zig.Ast.Render.renderSpace` (`/opt/zig/lib/std/zig/Ast/Render.zig:2862`)

|     % |   Time | Samples | Location                                   |
| ----: | -----: | ------: | ------------------------------------------ |
| 13.4% | 22.0ms |      22 | `/opt/zig/lib/std/zig/Ast/Render.zig:2880` |
| 12.8% | 21.0ms |      21 | `/opt/zig/lib/std/zig/Ast/Render.zig:2866` |
| 10.4% | 17.0ms |      17 | `/opt/zig/lib/std/zig/Ast/Render.zig:2868` |
|  9.1% | 15.0ms |      15 | `/opt/zig/lib/std/zig/Ast/Render.zig:2863` |
|  8.5% | 14.0ms |      14 | `/opt/zig/lib/std/zig/Ast/Render.zig:2875` |

##### `zig.Ast.Render.renderComments` (`/opt/zig/lib/std/zig/Ast/Render.zig:3112`)

|     % |   Time | Samples | Location                                   |
| ----: | -----: | ------: | ------------------------------------------ |
| 30.0% | 48.0ms |      48 | `/opt/zig/lib/std/zig/Ast/Render.zig:3117` |
|  9.4% | 15.0ms |      15 | `/opt/zig/lib/std/zig/Ast/Render.zig:3172` |
|  1.9% |  3.0ms |       3 | `/opt/zig/lib/std/zig/Ast/Render.zig:3165` |
|  0.6% |  1.0ms |       1 | `/opt/zig/lib/std/zig/Ast/Render.zig:3121` |

##### `zig.tokenizer.Token.Tag.lexeme` (`/opt/zig/lib/std/zig/tokenizer.zig:186`)

|     % |   Time | Samples | Location                                 |
| ----: | -----: | ------: | ---------------------------------------- |
| 22.1% | 34.0ms |      34 | `/opt/zig/lib/std/zig/tokenizer.zig:187` |
|  0.6% |  1.0ms |       1 | `/opt/zig/lib/std/zig/tokenizer.zig:186` |

##### `zig.Ast.Render.renderExpression` (`/opt/zig/lib/std/zig/Ast/Render.zig:314`)

|     % |   Time | Samples | Location                                  |
| ----: | -----: | ------: | ----------------------------------------- |
| 23.7% | 31.0ms |      31 | `/opt/zig/lib/std/zig/Ast/Render.zig:315` |
| 15.3% | 20.0ms |      20 | `/opt/zig/lib/std/zig/Ast/Render.zig:326` |
| 10.7% | 14.0ms |      14 | `/opt/zig/lib/std/zig/Ast/Render.zig:324` |
|  9.2% | 12.0ms |      12 | `/opt/zig/lib/std/zig/Ast/Render.zig:432` |
|  4.6% |  6.0ms |       6 | `/opt/zig/lib/std/zig/Ast/Render.zig:316` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_6976` (`/opt/zig/lib/std/multi_array_list.zig:83`)

|     % |    Time | Samples | Location                                   |
| ----: | ------: | ------: | ------------------------------------------ |
| 95.0% | 115.0ms |     115 | `/opt/zig/lib/std/multi_array_list.zig:85` |
|  3.3% |   4.0ms |       4 | `/opt/zig/lib/std/multi_array_list.zig:88` |
|  0.8% |   1.0ms |       1 | `/opt/zig/lib/std/multi_array_list.zig:92` |
|  0.8% |   1.0ms |       1 | `/opt/zig/lib/std/multi_array_list.zig:93` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_6974` (`/opt/zig/lib/std/multi_array_list.zig:83`)

|     % |   Time | Samples | Location                                   |
| ----: | -----: | ------: | ------------------------------------------ |
| 68.1% | 77.0ms |      77 | `/opt/zig/lib/std/multi_array_list.zig:85` |
| 23.9% | 27.0ms |      27 | `/opt/zig/lib/std/multi_array_list.zig:88` |
|  7.1% |  8.0ms |       8 | `/opt/zig/lib/std/multi_array_list.zig:93` |
|  0.9% |  1.0ms |       1 | `/opt/zig/lib/std/multi_array_list.zig:92` |

##### `zig.Ast.tokenTag` (`/opt/zig/lib/std/zig/Ast.zig:88`)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 60.5% | 49.0ms |      49 | `/opt/zig/lib/std/zig/Ast.zig:89` |

##### `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).Slice.items__anon_6665` (`/opt/zig/lib/std/multi_array_list.zig:83`)

|     % |   Time | Samples | Location                                   |
| ----: | -----: | ------: | ------------------------------------------ |
| 74.0% | 57.0ms |      57 | `/opt/zig/lib/std/multi_array_list.zig:85` |
| 26.0% | 20.0ms |      20 | `/opt/zig/lib/std/multi_array_list.zig:88` |

##### `zig.Ast.Render.renderExtraNewlineToken` (`/opt/zig/lib/std/zig/Ast/Render.zig:3180`)

|     % |   Time | Samples | Location                                   |
| ----: | -----: | ------: | ------------------------------------------ |
| 40.5% | 30.0ms |      30 | `/opt/zig/lib/std/zig/Ast/Render.zig:3199` |
| 20.3% | 15.0ms |      15 | `/opt/zig/lib/std/zig/Ast/Render.zig:3201` |
|  8.1% |  6.0ms |       6 | `/opt/zig/lib/std/zig/Ast/Render.zig:3180` |
|  5.4% |  4.0ms |       4 | `/opt/zig/lib/std/zig/Ast/Render.zig:3202` |
|  5.4% |  4.0ms |       4 | `/opt/zig/lib/std/zig/Ast/Render.zig:3181` |

##### `mem.eqlBytes` (`/opt/zig/lib/std/mem.zig:729`)

|     % |   Time | Samples | Location                       |
| ----: | -----: | ------: | ------------------------------ |
| 59.2% | 42.0ms |      42 | `/opt/zig/lib/std/mem.zig:733` |
| 39.4% | 28.0ms |      28 | `/opt/zig/lib/std/mem.zig:737` |
|  1.4% |  1.0ms |       1 | `/opt/zig/lib/std/mem.zig:729` |

##### `static_string_map.defaultEql` (`/opt/zig/lib/std/static_string_map.zig:13`)

|     % |   Time | Samples | Location                                    |
| ----: | -----: | ------: | ------------------------------------------- |
| 87.1% | 61.0ms |      61 | `/opt/zig/lib/std/static_string_map.zig:15` |
| 10.0% |  7.0ms |       7 | `/opt/zig/lib/std/static_string_map.zig:16` |
|  2.9% |  2.0ms |       2 | `/opt/zig/lib/std/static_string_map.zig:14` |

##### `zig.Ast.Render.renderIdentifier` (`/opt/zig/lib/std/zig/Ast/Render.zig:2926`)

|     % |   Time | Samples | Location                                   |
| ----: | -----: | ------: | ------------------------------------------ |
| 59.7% | 40.0ms |      40 | `/opt/zig/lib/std/zig/Ast/Render.zig:2927` |
| 11.9% |  8.0ms |       8 | `/opt/zig/lib/std/zig/Ast/Render.zig:2937` |
|  7.5% |  5.0ms |       5 | `/opt/zig/lib/std/zig/Ast/Render.zig:2926` |
|  6.0% |  4.0ms |       4 | `/opt/zig/lib/std/zig/Ast/Render.zig:2929` |
|  1.5% |  1.0ms |       1 | `/opt/zig/lib/std/zig/Ast/Render.zig:2931` |

##### `zig.Ast.firstToken` (`/opt/zig/lib/std/zig/Ast.zig:596`)

|     % |   Time | Samples | Location                           |
| ----: | -----: | ------: | ---------------------------------- |
| 29.2% | 19.0ms |      19 | `/opt/zig/lib/std/zig/Ast.zig:596` |
| 13.8% |  9.0ms |       9 | `/opt/zig/lib/std/zig/Ast.zig:599` |
|  1.5% |  1.0ms |       1 | `/opt/zig/lib/std/zig/Ast.zig:717` |
|  1.5% |  1.0ms |       1 | `/opt/zig/lib/std/zig/Ast.zig:779` |
|  1.5% |  1.0ms |       1 | `/opt/zig/lib/std/zig/Ast.zig:731` |

##### `Io.Writer.writeAll` (`/opt/zig/lib/std/Io/Writer.zig:530`)

|     % |   Time | Samples | Location                             |
| ----: | -----: | ------: | ------------------------------------ |
| 40.3% | 25.0ms |      25 | `/opt/zig/lib/std/Io/Writer.zig:530` |
| 33.9% | 21.0ms |      21 | `/opt/zig/lib/std/Io/Writer.zig:532` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_6965` (`/opt/zig/lib/std/multi_array_list.zig:83`)

|      % |   Time | Samples | Location                                   |
| -----: | -----: | ------: | ------------------------------------------ |
| 100.0% | 61.0ms |      61 | `/opt/zig/lib/std/multi_array_list.zig:85` |

##### `zig.Ast.Render.renderToken` (`/opt/zig/lib/std/zig/Ast/Render.zig:2844`)

|     % |   Time | Samples | Location                                   |
| ----: | -----: | ------: | ------------------------------------------ |
| 58.3% | 35.0ms |      35 | `/opt/zig/lib/std/zig/Ast/Render.zig:2845` |
| 18.3% | 11.0ms |      11 | `/opt/zig/lib/std/zig/Ast/Render.zig:2848` |
| 11.7% |  7.0ms |       7 | `/opt/zig/lib/std/zig/Ast/Render.zig:2847` |
|  6.7% |  4.0ms |       4 | `/opt/zig/lib/std/zig/Ast/Render.zig:2849` |
|  5.0% |  3.0ms |       3 | `/opt/zig/lib/std/zig/Ast/Render.zig:2844` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:395`)

|     % |    Time | Samples | Caller               | Location                           |
| ----: | ------: | ------: | -------------------- | ---------------------------------- |
| 64.5% | 811.0ms |     811 | `zig.Ast.tokenSlice` | `/opt/zig/lib/std/zig/Ast.zig:265` |
| 35.5% | 447.0ms |     447 | `zig.Ast.parse`      | `/opt/zig/lib/std/zig/Ast.zig:145` |

##### `(anonymous)` (`<unknown>`)

|     % |    Time | Samples | Caller                                                                                 | Location                                    |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------- | ------------------------------------------- |
| 44.3% | 149.0ms |     149 | `array_list.Aligned(u8,null).ensureUnusedCapacity`                                     | `/opt/zig/lib/std/array_list.zig:1241`      |
| 24.1% |  81.0ms |      81 | `zig.Ast.Render.AutoIndentingStream.writeAll`                                          | `/opt/zig/lib/std/zig/Ast/Render.zig:3496`  |
|  8.6% |  29.0ms |      29 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureUnusedCapacity` | `/opt/zig/lib/std/multi_array_list.zig:482` |
|  4.8% |  16.0ms |      16 | `zig.Ast.parse`                                                                        | `/opt/zig/lib/std/zig/Ast.zig:145`          |
|  3.0% |  10.0ms |      10 | `start.callMain`                                                                       | `/opt/zig/lib/std/start.zig:613`            |

##### `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` (`/opt/zig/lib/std/static_string_map.zig:198`)

|      % |    Time | Samples | Caller                                                                                          | Location                                     |
| -----: | ------: | ------: | ----------------------------------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 287.0ms |     287 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).get` | `/opt/zig/lib/std/static_string_map.zig:191` |

##### `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:265`)

|     % |    Time | Samples | Caller                                   | Location                                   |
| ----: | ------: | ------: | ---------------------------------------- | ------------------------------------------ |
| 69.2% | 173.0ms |     173 | `zig.Ast.Render.tokenSliceForRender`     | `/opt/zig/lib/std/zig/Ast/Render.zig:3268` |
| 12.8% |  32.0ms |      32 | `zig.Ast.Render.renderToken`             | `/opt/zig/lib/std/zig/Ast/Render.zig:2844` |
| 11.6% |  29.0ms |      29 | `zig.Ast.Render.hasComment`              | `/opt/zig/lib/std/zig/Ast/Render.zig:3089` |
|  5.6% |  14.0ms |      14 | `zig.Ast.Render.renderIdentifier`        | `/opt/zig/lib/std/zig/Ast/Render.zig:2926` |
|  0.8% |   2.0ms |       2 | `zig.Ast.Render.renderExtraNewlineToken` | `/opt/zig/lib/std/zig/Ast/Render.zig:3180` |

##### `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3268`)

|     % |    Time | Samples | Caller                                | Location                                   |
| ----: | ------: | ------: | ------------------------------------- | ------------------------------------------ |
| 55.2% | 107.0ms |     107 | `zig.Ast.Render.renderToken`          | `/opt/zig/lib/std/zig/Ast/Render.zig:2844` |
| 21.1% |  41.0ms |      41 | `zig.Ast.Render.renderIdentifier`     | `/opt/zig/lib/std/zig/Ast/Render.zig:2926` |
| 11.3% |  22.0ms |      22 | `zig.Ast.Render.renderExpression`     | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
|  2.6% |   5.0ms |       5 | `zig.Ast.Render.finishRenderBlock`    | `/opt/zig/lib/std/zig/Ast/Render.zig:1967` |
|  2.6% |   5.0ms |       5 | `zig.Ast.Render.renderContainerField` | `/opt/zig/lib/std/zig/Ast/Render.zig:1473` |

##### `zig.Ast.Render.renderSpace` (`/opt/zig/lib/std/zig/Ast/Render.zig:2862`)

|     % |    Time | Samples | Caller                                | Location                                   |
| ----: | ------: | ------: | ------------------------------------- | ------------------------------------------ |
| 84.1% | 138.0ms |     138 | `zig.Ast.Render.renderToken`          | `/opt/zig/lib/std/zig/Ast/Render.zig:2844` |
|  9.1% |  15.0ms |      15 | `zig.Ast.Render.renderExpression`     | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
|  2.4% |   4.0ms |       4 | `zig.Ast.Render.renderArrayInit`      | `/opt/zig/lib/std/zig/Ast/Render.zig:2067` |
|  1.8% |   3.0ms |       3 | `zig.Ast.Render.renderContainerField` | `/opt/zig/lib/std/zig/Ast/Render.zig:1473` |
|  0.6% |   1.0ms |       1 | `zig.Ast.Render.renderContainerDecl`  | `/opt/zig/lib/std/zig/Ast/Render.zig:2295` |

##### `zig.Ast.Render.renderComments` (`/opt/zig/lib/std/zig/Ast/Render.zig:3112`)

|      % |    Time | Samples | Caller                       | Location                                   |
| -----: | ------: | ------: | ---------------------------- | ------------------------------------------ |
| 100.0% | 160.0ms |     160 | `zig.Ast.Render.renderSpace` | `/opt/zig/lib/std/zig/Ast/Render.zig:2862` |

##### `zig.tokenizer.Token.Tag.lexeme` (`/opt/zig/lib/std/zig/tokenizer.zig:186`)

|     % |    Time | Samples | Caller                               | Location                                   |
| ----: | ------: | ------: | ------------------------------------ | ------------------------------------------ |
| 76.6% | 118.0ms |     118 | `zig.Ast.Render.tokenSliceForRender` | `/opt/zig/lib/std/zig/Ast/Render.zig:3268` |
| 21.4% |  33.0ms |      33 | `zig.Ast.Render.hasComment`          | `/opt/zig/lib/std/zig/Ast/Render.zig:3089` |
|  1.3% |   2.0ms |       2 | `zig.Parse.parseExpr`                | `/opt/zig/lib/std/zig/Parse.zig:1532`      |
|  0.6% |   1.0ms |       1 | `zig.Parse.parseExprPrecedence`      | `/opt/zig/lib/std/zig/Parse.zig:1593`      |

##### `zig.Ast.Render.renderExpression` (`/opt/zig/lib/std/zig/Ast/Render.zig:314`)

|     % |   Time | Samples | Caller                                 | Location                                   |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------------------ |
| 23.7% | 31.0ms |      31 | `zig.Ast.Render.renderExpression`      | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
| 20.6% | 27.0ms |      27 | `zig.Ast.Render.renderParamList`       | `/opt/zig/lib/std/zig/Ast/Render.zig:2728` |
|  9.9% | 13.0ms |      13 | `zig.Ast.Render.renderCall`            | `/opt/zig/lib/std/zig/Ast/Render.zig:2719` |
|  7.6% | 10.0ms |      10 | `zig.Ast.Render.renderExpressionFixup` | `/opt/zig/lib/std/zig/Ast/Render.zig:924`  |
|  6.9% |  9.0ms |       9 | `zig.Ast.Render.finishRenderBlock`     | `/opt/zig/lib/std/zig/Ast/Render.zig:1967` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_6976` (`/opt/zig/lib/std/multi_array_list.zig:83`)

|     % |    Time | Samples | Caller                                                           | Location                                    |
| ----: | ------: | ------: | ---------------------------------------------------------------- | ------------------------------------------- |
| 99.2% | 120.0ms |     120 | `zig.Ast.nodeData`                                               | `/opt/zig/lib/std/zig/Ast.zig:104`          |
|  0.8% |   1.0ms |       1 | `multi_array_list.MultiArrayList(zig.Ast.Node).items__anon_3832` | `/opt/zig/lib/std/multi_array_list.zig:236` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_6974` (`/opt/zig/lib/std/multi_array_list.zig:83`)

|      % |    Time | Samples | Caller                  | Location                           |
| -----: | ------: | ------: | ----------------------- | ---------------------------------- |
| 100.0% | 113.0ms |     113 | `zig.Ast.nodeMainToken` | `/opt/zig/lib/std/zig/Ast.zig:100` |

##### `zig.Ast.tokenTag` (`/opt/zig/lib/std/zig/Ast.zig:88`)

|     % |   Time | Samples | Caller                               | Location                                   |
| ----: | -----: | ------: | ------------------------------------ | ------------------------------------------ |
| 43.2% | 35.0ms |      35 | `zig.Ast.tokenSlice`                 | `/opt/zig/lib/std/zig/Ast.zig:265`         |
| 21.0% | 17.0ms |      17 | `zig.Ast.Render.tokenSliceForRender` | `/opt/zig/lib/std/zig/Ast/Render.zig:3268` |
| 18.5% | 15.0ms |      15 | `zig.Ast.Render.renderSpace`         | `/opt/zig/lib/std/zig/Ast/Render.zig:2862` |
|  9.9% |  8.0ms |       8 | `zig.Ast.Render.renderIdentifier`    | `/opt/zig/lib/std/zig/Ast/Render.zig:2926` |
|  4.9% |  4.0ms |       4 | `zig.Ast.fullPtrTypeComponents`      | `/opt/zig/lib/std/zig/Ast.zig:2121`        |

##### `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).Slice.items__anon_6665` (`/opt/zig/lib/std/multi_array_list.zig:83`)

|     % |   Time | Samples | Caller                          | Location                            |
| ----: | -----: | ------: | ------------------------------- | ----------------------------------- |
| 46.8% | 36.0ms |      36 | `zig.Parse.tokenTag`            | `/opt/zig/lib/std/zig/Parse.zig:14` |
| 44.2% | 34.0ms |      34 | `zig.Ast.tokenTag`              | `/opt/zig/lib/std/zig/Ast.zig:88`   |
|  9.1% |  7.0ms |       7 | `zig.Ast.isTokenPrecededByTags` | `/opt/zig/lib/std/zig/Ast.zig:108`  |

##### `zig.Ast.Render.renderExtraNewlineToken` (`/opt/zig/lib/std/zig/Ast/Render.zig:3180`)

|     % |   Time | Samples | Caller                              | Location                                   |
| ----: | -----: | ------: | ----------------------------------- | ------------------------------------------ |
| 79.7% | 59.0ms |      59 | `zig.Ast.Render.renderExtraNewline` | `/opt/zig/lib/std/zig/Ast/Render.zig:3175` |
| 12.2% |  9.0ms |       9 | `zig.Ast.Render.renderStructInit`   | `/opt/zig/lib/std/zig/Ast/Render.zig:1995` |
|  4.1% |  3.0ms |       3 | `zig.Ast.Render.renderExpression`   | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
|  2.7% |  2.0ms |       2 | `zig.Ast.Render.renderAsm`          | `/opt/zig/lib/std/zig/Ast/Render.zig:2594` |
|  1.4% |  1.0ms |       1 | `zig.Ast.Render.renderDocComments`  | `/opt/zig/lib/std/zig/Ast/Render.zig:3208` |

##### `mem.eqlBytes` (`/opt/zig/lib/std/mem.zig:729`)

|     % |   Time | Samples | Caller                       | Location                                   |
| ----: | -----: | ------: | ---------------------------- | ------------------------------------------ |
| 85.9% | 61.0ms |      61 | `mem.eql__anon_3429`         | `/opt/zig/lib/std/mem.zig:693`             |
| 12.7% |  9.0ms |       9 | `mem.eql__anon_15242`        | `/opt/zig/lib/std/mem.zig:693`             |
|  1.4% |  1.0ms |       1 | `zig.Ast.Render.renderSpace` | `/opt/zig/lib/std/zig/Ast/Render.zig:2862` |

##### `static_string_map.defaultEql` (`/opt/zig/lib/std/static_string_map.zig:13`)

|      % |   Time | Samples | Caller                                                                                               | Location                                     |
| -----: | -----: | ------: | ---------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 70.0ms |      70 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` | `/opt/zig/lib/std/static_string_map.zig:198` |

##### `zig.Ast.Render.renderIdentifier` (`/opt/zig/lib/std/zig/Ast/Render.zig:2926`)

|     % |   Time | Samples | Caller                                      | Location                                   |
| ----: | -----: | ------: | ------------------------------------------- | ------------------------------------------ |
| 47.8% | 32.0ms |      32 | `zig.Ast.Render.renderExpression`           | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
| 14.9% | 10.0ms |      10 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `/opt/zig/lib/std/zig/Ast/Render.zig:1140` |
| 10.4% |  7.0ms |       7 | `zig.Ast.Render.renderParamList`            | `/opt/zig/lib/std/zig/Ast/Render.zig:2728` |
|  7.5% |  5.0ms |       5 | `zig.Ast.Render.renderStructInit`           | `/opt/zig/lib/std/zig/Ast/Render.zig:1995` |
|  4.5% |  3.0ms |       3 | `zig.Ast.Render.renderCall`                 | `/opt/zig/lib/std/zig/Ast/Render.zig:2719` |

##### `zig.Ast.firstToken` (`/opt/zig/lib/std/zig/Ast.zig:596`)

|     % |   Time | Samples | Caller                              | Location                                   |
| ----: | -----: | ------: | ----------------------------------- | ------------------------------------------ |
| 40.0% | 26.0ms |      26 | `zig.Ast.Render.renderExtraNewline` | `/opt/zig/lib/std/zig/Ast/Render.zig:3175` |
| 15.4% | 10.0ms |      10 | `zig.Ast.Render.renderArrayInit`    | `/opt/zig/lib/std/zig/Ast/Render.zig:2067` |
|  9.2% |  6.0ms |       6 | `zig.Ast.Render.renderBuiltinCall`  | `/opt/zig/lib/std/zig/Ast/Render.zig:1582` |
|  9.2% |  6.0ms |       6 | `zig.Ast.Render.rowSize`            | `/opt/zig/lib/std/zig/Ast/Render.zig:3402` |
|  7.7% |  5.0ms |       5 | `zig.Ast.Render.renderMember`       | `/opt/zig/lib/std/zig/Ast/Render.zig:141`  |

##### `Io.Writer.writeAll` (`/opt/zig/lib/std/Io/Writer.zig:530`)

|     % |   Time | Samples | Caller                                        | Location                                   |
| ----: | -----: | ------: | --------------------------------------------- | ------------------------------------------ |
| 98.4% | 61.0ms |      61 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `/opt/zig/lib/std/zig/Ast/Render.zig:3496` |
|  1.6% |  1.0ms |       1 | `Io.Writer.alignBufferOptions`                | `/opt/zig/lib/std/Io/Writer.zig:1006`      |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_6965` (`/opt/zig/lib/std/multi_array_list.zig:83`)

|      % |   Time | Samples | Caller            | Location                          |
| -----: | -----: | ------: | ----------------- | --------------------------------- |
| 100.0% | 61.0ms |      61 | `zig.Ast.nodeTag` | `/opt/zig/lib/std/zig/Ast.zig:96` |

##### `zig.Ast.Render.renderToken` (`/opt/zig/lib/std/zig/Ast/Render.zig:2844`)

|     % |   Time | Samples | Caller                                      | Location                                   |
| ----: | -----: | ------: | ------------------------------------------- | ------------------------------------------ |
| 18.3% | 11.0ms |      11 | `zig.Ast.Render.renderExpression`           | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
| 16.7% | 10.0ms |      10 | `zig.Ast.Render.renderIdentifier`           | `/opt/zig/lib/std/zig/Ast/Render.zig:2926` |
| 13.3% |  8.0ms |       8 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `/opt/zig/lib/std/zig/Ast/Render.zig:1140` |
| 13.3% |  8.0ms |       8 | `zig.Ast.Render.renderParamList`            | `/opt/zig/lib/std/zig/Ast/Render.zig:2728` |
|  8.3% |  5.0ms |       5 | `zig.Ast.Render.renderFnProto`              | `/opt/zig/lib/std/zig/Ast/Render.zig:1660` |

##### `__read` (`<unknown>`)

|      % |   Time | Samples | Caller       | Location                         |
| -----: | -----: | ------: | ------------ | -------------------------------- |
| 100.0% | 26.0ms |      26 | `posix.read` | `/opt/zig/lib/std/posix.zig:844` |

##### `openat` (`<unknown>`)

|     % |   Time | Samples | Caller             | Location                          |
| ----: | -----: | ------: | ------------------ | --------------------------------- |
| 91.3% | 21.0ms |      21 | `posix.openatZ`    | `/opt/zig/lib/std/posix.zig:1835` |
|  8.7% |  2.0ms |       2 | `fs.Dir.openFileZ` | `/opt/zig/lib/std/fs/Dir.zig:855` |

##### `brk` (`<unknown>`)

|      % |   Time | Samples | Caller               | Location    |
| -----: | -----: | ------: | -------------------- | ----------- |
| 100.0% | 15.0ms |      15 | `__default_morecore` | `<unknown>` |

##### `close` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                         |
| -----: | ----: | ------: | ------------- | -------------------------------- |
| 100.0% | 4.0ms |       4 | `posix.close` | `/opt/zig/lib/std/posix.zig:285` |

##### `posix_memalign` (`<unknown>`)

|      % |  Time | Samples | Caller                   | Location                                 |
| -----: | ----: | ------: | ------------------------ | ---------------------------------------- |
| 100.0% | 4.0ms |       4 | `mem.Allocator.rawAlloc` | `/opt/zig/lib/std/mem/Allocator.zig:128` |

##### `cfree` (`<unknown>`)

|      % |  Time | Samples | Caller                  | Location                                 |
| -----: | ----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% | 2.0ms |       2 | `mem.Allocator.rawFree` | `/opt/zig/lib/std/mem/Allocator.zig:146` |

##### `malloc_usable_size` (`<unknown>`)

|      % |  Time | Samples | Caller                   | Location                                 |
| -----: | ----: | ------: | ------------------------ | ---------------------------------------- |
| 100.0% | 1.0ms |       1 | `mem.Allocator.rawRemap` | `/opt/zig/lib/std/mem/Allocator.zig:140` |

### Total time

Functions with the most time spent within the function and its callees.

|      % |  Time | Samples | Function                                    | Location                                          |
| -----: | ----: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 5.28s |   5,287 | `start.callMain`                            | `/opt/zig/lib/std/start.zig:613`                  |
| 100.0% | 5.28s |   5,287 | `start.callMainWithArgs`                    | `/opt/zig/lib/std/start.zig:580`                  |
| 100.0% | 5.28s |   5,287 | `main`                                      | `/opt/zig/lib/std/start.zig:590`                  |
| 100.0% | 5.28s |   5,287 | `(anonymous)`                               | `<unknown>`                                       |
| 100.0% | 5.28s |   5,287 | `__libc_start_main`                         | `<unknown>`                                       |
| 100.0% | 5.28s |   5,287 | `_start`                                    | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|  99.8% | 5.27s |   5,276 | `profile.main`                              | `./profile.zig:12`                                |
|  76.5% | 4.04s |   4,043 | `zig.Ast.Render.renderTree`                 | `/opt/zig/lib/std/zig/Ast/Render.zig:86`          |
|  76.5% | 4.04s |   4,043 | `zig.Ast.render`                            | `/opt/zig/lib/std/zig/Ast.zig:217`                |
|  76.5% | 4.04s |   4,043 | `zig.Ast.renderAlloc`                       | `/opt/zig/lib/std/zig/Ast.zig:206`                |
|  76.4% | 4.04s |   4,040 | `zig.Ast.Render.renderMembers`              | `/opt/zig/lib/std/zig/Ast/Render.zig:122`         |
|  73.2% | 3.87s |   3,870 | `zig.Ast.Render.renderExpression`           | `/opt/zig/lib/std/zig/Ast/Render.zig:314`         |
|  66.1% | 3.49s |   3,495 | `zig.Ast.Render.renderMember`               | `/opt/zig/lib/std/zig/Ast/Render.zig:141`         |
|  50.8% | 2.68s |   2,687 | `zig.Ast.Render.finishRenderBlock`          | `/opt/zig/lib/std/zig/Ast/Render.zig:1967`        |
|  44.9% | 2.37s |   2,372 | `zig.Ast.Render.renderVarDecl`              | `/opt/zig/lib/std/zig/Ast/Render.zig:1122`        |
|  44.8% | 2.37s |   2,370 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `/opt/zig/lib/std/zig/Ast/Render.zig:1140`        |
|  33.8% | 1.78s |   1,786 | `zig.Ast.Render.renderToken`                | `/opt/zig/lib/std/zig/Ast/Render.zig:2844`        |
|  31.0% | 1.64s |   1,640 | `zig.Ast.Render.renderContainerDecl`        | `/opt/zig/lib/std/zig/Ast/Render.zig:2295`        |
|  30.5% | 1.61s |   1,615 | `zig.tokenizer.Tokenizer.next`              | `/opt/zig/lib/std/zig/tokenizer.zig:395`          |
|  28.7% | 1.51s |   1,516 | `zig.Ast.Render.tokenSliceForRender`        | `/opt/zig/lib/std/zig/Ast/Render.zig:3268`        |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|      % |  Time | Samples | Function                                    | Location                                          |
| -----: | ----: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 5.28s |   5,287 | `start.callMain`                            | `/opt/zig/lib/std/start.zig:613`                  |
| 100.0% | 5.28s |   5,287 | `start.callMainWithArgs`                    | `/opt/zig/lib/std/start.zig:580`                  |
| 100.0% | 5.28s |   5,287 | `main`                                      | `/opt/zig/lib/std/start.zig:590`                  |
| 100.0% | 5.28s |   5,287 | `_start`                                    | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|  76.5% | 4.04s |   4,043 | `zig.Ast.Render.renderTree`                 | `/opt/zig/lib/std/zig/Ast/Render.zig:86`          |
|  76.5% | 4.04s |   4,043 | `zig.Ast.render`                            | `/opt/zig/lib/std/zig/Ast.zig:217`                |
|  76.5% | 4.04s |   4,043 | `zig.Ast.renderAlloc`                       | `/opt/zig/lib/std/zig/Ast.zig:206`                |
|  76.4% | 4.04s |   4,040 | `zig.Ast.Render.renderMembers`              | `/opt/zig/lib/std/zig/Ast/Render.zig:122`         |
|  73.2% | 3.87s |   3,870 | `zig.Ast.Render.renderExpression`           | `/opt/zig/lib/std/zig/Ast/Render.zig:314`         |
|  66.1% | 3.49s |   3,495 | `zig.Ast.Render.renderMember`               | `/opt/zig/lib/std/zig/Ast/Render.zig:141`         |
|  50.8% | 2.68s |   2,687 | `zig.Ast.Render.finishRenderBlock`          | `/opt/zig/lib/std/zig/Ast/Render.zig:1967`        |
|  44.9% | 2.37s |   2,372 | `zig.Ast.Render.renderVarDecl`              | `/opt/zig/lib/std/zig/Ast/Render.zig:1122`        |
|  44.8% | 2.37s |   2,370 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `/opt/zig/lib/std/zig/Ast/Render.zig:1140`        |
|  33.8% | 1.78s |   1,786 | `zig.Ast.Render.renderToken`                | `/opt/zig/lib/std/zig/Ast/Render.zig:2844`        |
|  31.0% | 1.64s |   1,640 | `zig.Ast.Render.renderContainerDecl`        | `/opt/zig/lib/std/zig/Ast/Render.zig:2295`        |
|  30.5% | 1.61s |   1,615 | `zig.tokenizer.Tokenizer.next`              | `/opt/zig/lib/std/zig/tokenizer.zig:395`          |
|  28.7% | 1.51s |   1,516 | `zig.Ast.Render.tokenSliceForRender`        | `/opt/zig/lib/std/zig/Ast/Render.zig:3268`        |
|  27.7% | 1.46s |   1,462 | `zig.Ast.Render.renderIdentifier`           | `/opt/zig/lib/std/zig/Ast/Render.zig:2926`        |
|  26.1% | 1.38s |   1,380 | `zig.Ast.tokenSlice`                        | `/opt/zig/lib/std/zig/Ast.zig:265`                |
|  21.8% | 1.15s |   1,155 | `zig.Ast.parse`                             | `/opt/zig/lib/std/zig/Ast.zig:145`                |

##### Unknown

|      % |  Time | Samples | Function      | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 5.28s |   5,287 | `(anonymous)` | `<unknown>` |

##### Native

|      % |   Time | Samples | Function             | Location    |
| -----: | -----: | ------: | -------------------- | ----------- |
| 100.0% |  5.28s |   5,287 | `__libc_start_main`  | `<unknown>` |
|   0.5% | 26.0ms |      26 | `__read`             | `<unknown>` |
|   0.4% | 23.0ms |      23 | `openat`             | `<unknown>` |
|   0.4% | 20.0ms |      20 | `cfree`              | `<unknown>` |
|   0.3% | 15.0ms |      15 | `brk`                | `<unknown>` |
|   0.3% | 15.0ms |      15 | `__default_morecore` | `<unknown>` |
|   0.3% | 14.0ms |      14 | `posix_memalign`     | `<unknown>` |
|   0.2% | 10.0ms |      10 | `__libc_malloc`      | `<unknown>` |
|   0.1% |  4.0ms |       4 | `close`              | `<unknown>` |
|  <0.1% |  1.0ms |       1 | `malloc_usable_size` | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `start.callMain` (`/opt/zig/lib/std/start.zig:613`)

|      % |  Time | Samples | Caller                   | Location                         |
| -----: | ----: | ------: | ------------------------ | -------------------------------- |
| 100.0% | 5.28s |   5,287 | `start.callMainWithArgs` | `/opt/zig/lib/std/start.zig:580` |

##### `start.callMainWithArgs` (`/opt/zig/lib/std/start.zig:580`)

|      % |  Time | Samples | Caller | Location                         |
| -----: | ----: | ------: | ------ | -------------------------------- |
| 100.0% | 5.28s |   5,287 | `main` | `/opt/zig/lib/std/start.zig:590` |

##### `main` (`/opt/zig/lib/std/start.zig:590`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 5.28s |   5,287 | `(anonymous)` | `<unknown>` |

##### `(anonymous)` (`<unknown>`)

|      % |    Time | Samples | Caller                                                                                 | Location                                    |
| -----: | ------: | ------: | -------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% |   5.28s |   5,287 | `__libc_start_main`                                                                    | `<unknown>`                                 |
|   2.8% | 149.0ms |     149 | `array_list.Aligned(u8,null).ensureUnusedCapacity`                                     | `/opt/zig/lib/std/array_list.zig:1241`      |
|   1.5% |  81.0ms |      81 | `zig.Ast.Render.AutoIndentingStream.writeAll`                                          | `/opt/zig/lib/std/zig/Ast/Render.zig:3496`  |
|   0.5% |  29.0ms |      29 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureUnusedCapacity` | `/opt/zig/lib/std/multi_array_list.zig:482` |
|   0.3% |  18.0ms |      18 | `(anonymous)`                                                                          | `<unknown>`                                 |

##### `__libc_start_main` (`<unknown>`)

|      % |  Time | Samples | Caller   | Location                                          |
| -----: | ----: | ------: | -------- | ------------------------------------------------- |
| 100.0% | 5.28s |   5,287 | `_start` | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |

##### `profile.main` (`./profile.zig:12`)

|      % |  Time | Samples | Caller           | Location                         |
| -----: | ----: | ------: | ---------------- | -------------------------------- |
| 100.0% | 5.27s |   5,276 | `start.callMain` | `/opt/zig/lib/std/start.zig:613` |

##### `zig.Ast.Render.renderTree` (`/opt/zig/lib/std/zig/Ast/Render.zig:86`)

|      % |  Time | Samples | Caller           | Location                           |
| -----: | ----: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 4.04s |   4,043 | `zig.Ast.render` | `/opt/zig/lib/std/zig/Ast.zig:217` |

##### `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`)

|      % |  Time | Samples | Caller                | Location                           |
| -----: | ----: | ------: | --------------------- | ---------------------------------- |
| 100.0% | 4.04s |   4,043 | `zig.Ast.renderAlloc` | `/opt/zig/lib/std/zig/Ast.zig:206` |

##### `zig.Ast.renderAlloc` (`/opt/zig/lib/std/zig/Ast.zig:206`)

|      % |  Time | Samples | Caller         | Location           |
| -----: | ----: | ------: | -------------- | ------------------ |
| 100.0% | 4.04s |   4,043 | `profile.main` | `./profile.zig:12` |

##### `zig.Ast.Render.renderMembers` (`/opt/zig/lib/std/zig/Ast/Render.zig:122`)

|      % |  Time | Samples | Caller                      | Location                                 |
| -----: | ----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% | 4.04s |   4,040 | `zig.Ast.Render.renderTree` | `/opt/zig/lib/std/zig/Ast/Render.zig:86` |

##### `zig.Ast.Render.renderExpression` (`/opt/zig/lib/std/zig/Ast/Render.zig:314`)

|     % |    Time | Samples | Caller                                      | Location                                   |
| ----: | ------: | ------: | ------------------------------------------- | ------------------------------------------ |
| 59.4% |   2.29s |   2,299 | `zig.Ast.Render.renderMember`               | `/opt/zig/lib/std/zig/Ast/Render.zig:141`  |
| 55.3% |   2.14s |   2,142 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `/opt/zig/lib/std/zig/Ast/Render.zig:1140` |
| 53.2% |   2.06s |   2,060 | `zig.Ast.Render.finishRenderBlock`          | `/opt/zig/lib/std/zig/Ast/Render.zig:1967` |
| 29.1% |   1.12s |   1,127 | `zig.Ast.Render.renderExpression`           | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
| 18.3% | 709.0ms |     709 | `zig.Ast.Render.renderThenElse`             | `/opt/zig/lib/std/zig/Ast/Render.zig:1340` |

##### `zig.Ast.Render.renderMember` (`/opt/zig/lib/std/zig/Ast/Render.zig:141`)

|     % |  Time | Samples | Caller                               | Location                                   |
| ----: | ----: | ------: | ------------------------------------ | ------------------------------------------ |
| 99.6% | 3.48s |   3,482 | `zig.Ast.Render.renderMembers`       | `/opt/zig/lib/std/zig/Ast/Render.zig:122`  |
| 42.1% | 1.47s |   1,470 | `zig.Ast.Render.renderContainerDecl` | `/opt/zig/lib/std/zig/Ast/Render.zig:2295` |

##### `zig.Ast.Render.finishRenderBlock` (`/opt/zig/lib/std/zig/Ast/Render.zig:1967`)

|      % |  Time | Samples | Caller                            | Location                                  |
| -----: | ----: | ------: | --------------------------------- | ----------------------------------------- |
| 100.0% | 2.68s |   2,687 | `zig.Ast.Render.renderExpression` | `/opt/zig/lib/std/zig/Ast/Render.zig:314` |

##### `zig.Ast.Render.renderVarDecl` (`/opt/zig/lib/std/zig/Ast/Render.zig:1122`)

|     % |    Time | Samples | Caller                             | Location                                   |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------ |
| 72.3% |   1.71s |   1,715 | `zig.Ast.Render.renderMember`      | `/opt/zig/lib/std/zig/Ast/Render.zig:141`  |
| 34.1% | 808.0ms |     808 | `zig.Ast.Render.finishRenderBlock` | `/opt/zig/lib/std/zig/Ast/Render.zig:1967` |

##### `zig.Ast.Render.renderVarDeclWithoutFixups` (`/opt/zig/lib/std/zig/Ast/Render.zig:1140`)

|      % |  Time | Samples | Caller                         | Location                                   |
| -----: | ----: | ------: | ------------------------------ | ------------------------------------------ |
| 100.0% | 2.37s |   2,370 | `zig.Ast.Render.renderVarDecl` | `/opt/zig/lib/std/zig/Ast/Render.zig:1122` |

##### `zig.Ast.Render.renderToken` (`/opt/zig/lib/std/zig/Ast/Render.zig:2844`)

|     % |    Time | Samples | Caller                                      | Location                                   |
| ----: | ------: | ------: | ------------------------------------------- | ------------------------------------------ |
| 41.5% | 741.0ms |     741 | `zig.Ast.Render.renderIdentifier`           | `/opt/zig/lib/std/zig/Ast/Render.zig:2926` |
| 11.1% | 199.0ms |     199 | `zig.Ast.Render.renderParamList`            | `/opt/zig/lib/std/zig/Ast/Render.zig:2728` |
|  8.5% | 152.0ms |     152 | `zig.Ast.Render.renderExpression`           | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
|  8.4% | 150.0ms |     150 | `zig.Ast.Render.renderSpace`                | `/opt/zig/lib/std/zig/Ast/Render.zig:2862` |
|  6.2% | 111.0ms |     111 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `/opt/zig/lib/std/zig/Ast/Render.zig:1140` |

##### `zig.Ast.Render.renderContainerDecl` (`/opt/zig/lib/std/zig/Ast/Render.zig:2295`)

|      % |  Time | Samples | Caller                            | Location                                  |
| -----: | ----: | ------: | --------------------------------- | ----------------------------------------- |
| 100.0% | 1.64s |   1,640 | `zig.Ast.Render.renderExpression` | `/opt/zig/lib/std/zig/Ast/Render.zig:314` |

##### `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:395`)

|     % |    Time | Samples | Caller               | Location                           |
| ----: | ------: | ------: | -------------------- | ---------------------------------- |
| 67.3% |   1.08s |   1,087 | `zig.Ast.tokenSlice` | `/opt/zig/lib/std/zig/Ast.zig:265` |
| 32.7% | 528.0ms |     528 | `zig.Ast.parse`      | `/opt/zig/lib/std/zig/Ast.zig:145` |

##### `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3268`)

|     % |    Time | Samples | Caller                                   | Location                                   |
| ----: | ------: | ------: | ---------------------------------------- | ------------------------------------------ |
| 53.4% | 809.0ms |     809 | `zig.Ast.Render.renderToken`             | `/opt/zig/lib/std/zig/Ast/Render.zig:2844` |
| 39.9% | 605.0ms |     605 | `zig.Ast.Render.renderIdentifier`        | `/opt/zig/lib/std/zig/Ast/Render.zig:2926` |
|  3.9% |  59.0ms |      59 | `zig.Ast.Render.renderExtraNewlineToken` | `/opt/zig/lib/std/zig/Ast/Render.zig:3180` |
|  1.5% |  22.0ms |      22 | `zig.Ast.Render.renderExpression`        | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
|  0.3% |   5.0ms |       5 | `zig.Ast.Render.finishRenderBlock`       | `/opt/zig/lib/std/zig/Ast/Render.zig:1967` |

##### `zig.Ast.Render.renderIdentifier` (`/opt/zig/lib/std/zig/Ast/Render.zig:2926`)

|     % |    Time | Samples | Caller                                      | Location                                   |
| ----: | ------: | ------: | ------------------------------------------- | ------------------------------------------ |
| 40.8% | 597.0ms |     597 | `zig.Ast.Render.renderExpression`           | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
| 11.1% | 162.0ms |     162 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `/opt/zig/lib/std/zig/Ast/Render.zig:1140` |
|  9.4% | 138.0ms |     138 | `zig.Ast.Render.renderContainerField`       | `/opt/zig/lib/std/zig/Ast/Render.zig:1473` |
|  8.4% | 123.0ms |     123 | `zig.Ast.Render.renderParamList`            | `/opt/zig/lib/std/zig/Ast/Render.zig:2728` |
|  6.7% |  98.0ms |      98 | `zig.Ast.Render.renderFnProto`              | `/opt/zig/lib/std/zig/Ast/Render.zig:1660` |

##### `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:265`)

|     % |    Time | Samples | Caller                               | Location                                   |
| ----: | ------: | ------: | ------------------------------------ | ------------------------------------------ |
| 84.7% |   1.16s |   1,169 | `zig.Ast.Render.tokenSliceForRender` | `/opt/zig/lib/std/zig/Ast/Render.zig:3268` |
| 11.4% | 157.0ms |     157 | `zig.Ast.Render.hasComment`          | `/opt/zig/lib/std/zig/Ast/Render.zig:3089` |
|  2.3% |  32.0ms |      32 | `zig.Ast.Render.renderToken`         | `/opt/zig/lib/std/zig/Ast/Render.zig:2844` |
|  1.0% |  14.0ms |      14 | `zig.Ast.Render.renderIdentifier`    | `/opt/zig/lib/std/zig/Ast/Render.zig:2926` |
|  0.4% |   6.0ms |       6 | `zig.Ast.Render.renderExpression`    | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |

##### `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)

|      % |  Time | Samples | Caller         | Location           |
| -----: | ----: | ------: | -------------- | ------------------ |
| 100.0% | 1.15s |   1,155 | `profile.main` | `./profile.zig:12` |

##### `__read` (`<unknown>`)

|      % |   Time | Samples | Caller       | Location                         |
| -----: | -----: | ------: | ------------ | -------------------------------- |
| 100.0% | 26.0ms |      26 | `posix.read` | `/opt/zig/lib/std/posix.zig:844` |

##### `openat` (`<unknown>`)

|     % |   Time | Samples | Caller             | Location                          |
| ----: | -----: | ------: | ------------------ | --------------------------------- |
| 91.3% | 21.0ms |      21 | `posix.openatZ`    | `/opt/zig/lib/std/posix.zig:1835` |
|  8.7% |  2.0ms |       2 | `fs.Dir.openFileZ` | `/opt/zig/lib/std/fs/Dir.zig:855` |

##### `cfree` (`<unknown>`)

|     % |   Time | Samples | Caller                        | Location                                 |
| ----: | -----: | ------: | ----------------------------- | ---------------------------------------- |
| 85.0% | 17.0ms |      17 | `heap.CAllocator.alignedFree` | `/opt/zig/lib/std/heap.zig:183`          |
| 15.0% |  3.0ms |       3 | `mem.Allocator.rawFree`       | `/opt/zig/lib/std/mem/Allocator.zig:146` |

##### `brk` (`<unknown>`)

|      % |   Time | Samples | Caller               | Location    |
| -----: | -----: | ------: | -------------------- | ----------- |
| 100.0% | 15.0ms |      15 | `__default_morecore` | `<unknown>` |

##### `__default_morecore` (`<unknown>`)

|      % |   Time | Samples | Caller        | Location    |
| -----: | -----: | ------: | ------------- | ----------- |
| 100.0% | 15.0ms |      15 | `(anonymous)` | `<unknown>` |

##### `posix_memalign` (`<unknown>`)

|     % |   Time | Samples | Caller                         | Location                                 |
| ----: | -----: | ------: | ------------------------------ | ---------------------------------------- |
| 71.4% | 10.0ms |      10 | `heap.CAllocator.alignedAlloc` | `/opt/zig/lib/std/heap.zig:157`          |
| 28.6% |  4.0ms |       4 | `mem.Allocator.rawAlloc`       | `/opt/zig/lib/std/mem/Allocator.zig:128` |

##### `__libc_malloc` (`<unknown>`)

|      % |   Time | Samples | Caller           | Location    |
| -----: | -----: | ------: | ---------------- | ----------- |
| 100.0% | 10.0ms |      10 | `posix_memalign` | `<unknown>` |

##### `close` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                         |
| -----: | ----: | ------: | ------------- | -------------------------------- |
| 100.0% | 4.0ms |       4 | `posix.close` | `/opt/zig/lib/std/posix.zig:285` |

##### `malloc_usable_size` (`<unknown>`)

|      % |  Time | Samples | Caller                   | Location                                 |
| -----: | ----: | ------: | ------------------------ | ---------------------------------------- |
| 100.0% | 1.0ms |       1 | `mem.Allocator.rawRemap` | `/opt/zig/lib/std/mem/Allocator.zig:140` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `start.callMain` (`/opt/zig/lib/std/start.zig:613`)

|     % |   Time | Samples | Callee               | Location                           |
| ----: | -----: | ------: | -------------------- | ---------------------------------- |
| 99.8% |  5.27s |   5,276 | `profile.main`       | `./profile.zig:12`                 |
|  0.2% | 10.0ms |      10 | `(anonymous)`        | `<unknown>`                        |
| <0.1% |  1.0ms |       1 | `zig.Ast.firstToken` | `/opt/zig/lib/std/zig/Ast.zig:596` |

##### `start.callMainWithArgs` (`/opt/zig/lib/std/start.zig:580`)

|      % |  Time | Samples | Callee           | Location                         |
| -----: | ----: | ------: | ---------------- | -------------------------------- |
| 100.0% | 5.28s |   5,287 | `start.callMain` | `/opt/zig/lib/std/start.zig:613` |

##### `main` (`/opt/zig/lib/std/start.zig:590`)

|      % |  Time | Samples | Callee                   | Location                         |
| -----: | ----: | ------: | ------------------------ | -------------------------------- |
| 100.0% | 5.28s |   5,287 | `start.callMainWithArgs` | `/opt/zig/lib/std/start.zig:580` |

##### `(anonymous)` (`<unknown>`)

|      % |   Time | Samples | Callee               | Location                         |
| -----: | -----: | ------: | -------------------- | -------------------------------- |
| 100.0% |  5.28s |   5,287 | `main`               | `/opt/zig/lib/std/start.zig:590` |
|   0.3% | 18.0ms |      18 | `(anonymous)`        | `<unknown>`                      |
|   0.3% | 15.0ms |      15 | `__default_morecore` | `<unknown>`                      |

##### `__libc_start_main` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 5.28s |   5,287 | `(anonymous)` | `<unknown>` |

##### `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)

|      % |  Time | Samples | Callee              | Location    |
| -----: | ----: | ------: | ------------------- | ----------- |
| 100.0% | 5.28s |   5,287 | `__libc_start_main` | `<unknown>` |

##### `profile.main` (`./profile.zig:12`)

|     % |   Time | Samples | Callee                                   | Location                                 |
| ----: | -----: | ------: | ---------------------------------------- | ---------------------------------------- |
| 76.6% |  4.04s |   4,043 | `zig.Ast.renderAlloc`                    | `/opt/zig/lib/std/zig/Ast.zig:206`       |
| 21.9% |  1.15s |   1,155 | `zig.Ast.parse`                          | `/opt/zig/lib/std/zig/Ast.zig:145`       |
|  1.0% | 54.0ms |      54 | `fs.Dir.readFileAllocOptions__anon_2384` | `/opt/zig/lib/std/fs/Dir.zig:1997`       |
|  0.2% |  9.0ms |       9 | `fs.Dir.Walker.next`                     | `/opt/zig/lib/std/fs/Dir.zig:689`        |
|  0.2% |  8.0ms |       8 | `mem.Allocator.free__anon_2930`          | `/opt/zig/lib/std/mem/Allocator.zig:424` |

##### `zig.Ast.Render.renderTree` (`/opt/zig/lib/std/zig/Ast/Render.zig:86`)

|     % |  Time | Samples | Callee                                      | Location                                   |
| ----: | ----: | ------: | ------------------------------------------- | ------------------------------------------ |
| 99.9% | 4.04s |   4,040 | `zig.Ast.Render.renderMembers`              | `/opt/zig/lib/std/zig/Ast/Render.zig:122`  |
| <0.1% | 2.0ms |       2 | `zig.Ast.Render.renderContainerDocComments` | `/opt/zig/lib/std/zig/Ast/Render.zig:3239` |
| <0.1% | 1.0ms |       1 | `zig.Ast.Render.AutoIndentingStream.deinit` | `/opt/zig/lib/std/zig/Ast/Render.zig:3491` |

##### `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`)

|      % |  Time | Samples | Callee                      | Location                                 |
| -----: | ----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% | 4.04s |   4,043 | `zig.Ast.Render.renderTree` | `/opt/zig/lib/std/zig/Ast/Render.zig:86` |

##### `zig.Ast.renderAlloc` (`/opt/zig/lib/std/zig/Ast.zig:206`)

|      % |  Time | Samples | Callee           | Location                           |
| -----: | ----: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 4.04s |   4,043 | `zig.Ast.render` | `/opt/zig/lib/std/zig/Ast.zig:217` |

##### `zig.Ast.Render.renderMembers` (`/opt/zig/lib/std/zig/Ast/Render.zig:122`)

|     % |    Time | Samples | Callee                               | Location                                   |
| ----: | ------: | ------: | ------------------------------------ | ------------------------------------------ |
| 86.2% |   3.48s |   3,482 | `zig.Ast.Render.renderMember`        | `/opt/zig/lib/std/zig/Ast/Render.zig:141`  |
| 13.2% | 534.0ms |     534 | `zig.Ast.Render.renderExpression`    | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
|  0.5% |  21.0ms |      21 | `zig.Ast.Render.renderExtraNewline`  | `/opt/zig/lib/std/zig/Ast/Render.zig:3175` |
| <0.1% |   2.0ms |       2 | `zig.Ast.fullContainerField`         | `/opt/zig/lib/std/zig/Ast.zig:2392`        |
| <0.1% |   1.0ms |       1 | `zig.Ast.Render.tokenSliceForRender` | `/opt/zig/lib/std/zig/Ast/Render.zig:3268` |

##### `zig.Ast.Render.renderExpression` (`/opt/zig/lib/std/zig/Ast/Render.zig:314`)

|     % |    Time | Samples | Callee                               | Location                                   |
| ----: | ------: | ------: | ------------------------------------ | ------------------------------------------ |
| 69.4% |   2.68s |   2,687 | `zig.Ast.Render.finishRenderBlock`   | `/opt/zig/lib/std/zig/Ast/Render.zig:1967` |
| 42.4% |   1.64s |   1,640 | `zig.Ast.Render.renderContainerDecl` | `/opt/zig/lib/std/zig/Ast/Render.zig:2295` |
| 29.1% |   1.12s |   1,127 | `zig.Ast.Render.renderExpression`    | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
| 24.9% | 964.0ms |     964 | `zig.Ast.Render.renderParamList`     | `/opt/zig/lib/std/zig/Ast/Render.zig:2728` |
| 18.2% | 705.0ms |     705 | `zig.Ast.Render.renderExpressions`   | `/opt/zig/lib/std/zig/Ast/Render.zig:305`  |

##### `zig.Ast.Render.renderMember` (`/opt/zig/lib/std/zig/Ast/Render.zig:141`)

|     % |    Time | Samples | Callee                                | Location                                   |
| ----: | ------: | ------: | ------------------------------------- | ------------------------------------------ |
| 65.8% |   2.29s |   2,299 | `zig.Ast.Render.renderExpression`     | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
| 49.1% |   1.71s |   1,715 | `zig.Ast.Render.renderVarDecl`        | `/opt/zig/lib/std/zig/Ast/Render.zig:1122` |
|  8.2% | 286.0ms |     286 | `zig.Ast.Render.renderContainerField` | `/opt/zig/lib/std/zig/Ast/Render.zig:1473` |
|  2.5% |  88.0ms |      88 | `zig.Ast.Render.renderDocComments`    | `/opt/zig/lib/std/zig/Ast/Render.zig:3208` |
|  0.5% |  16.0ms |      16 | `zig.Ast.firstToken`                  | `/opt/zig/lib/std/zig/Ast.zig:596`         |

##### `zig.Ast.Render.finishRenderBlock` (`/opt/zig/lib/std/zig/Ast/Render.zig:1967`)

|     % |    Time | Samples | Callee                              | Location                                   |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------------ |
| 76.7% |   2.06s |   2,060 | `zig.Ast.Render.renderExpression`   | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
| 30.1% | 808.0ms |     808 | `zig.Ast.Render.renderVarDecl`      | `/opt/zig/lib/std/zig/Ast/Render.zig:1122` |
|  3.6% |  96.0ms |      96 | `zig.Ast.Render.renderExtraNewline` | `/opt/zig/lib/std/zig/Ast/Render.zig:3175` |
|  1.5% |  39.0ms |      39 | `zig.Ast.Render.renderToken`        | `/opt/zig/lib/std/zig/Ast/Render.zig:2844` |
|  1.1% |  29.0ms |      29 | `zig.Ast.lastToken`                 | `/opt/zig/lib/std/zig/Ast.zig:874`         |

##### `zig.Ast.Render.renderVarDecl` (`/opt/zig/lib/std/zig/Ast/Render.zig:1122`)

|     % |  Time | Samples | Callee                                                                      | Location                                   |
| ----: | ----: | ------: | --------------------------------------------------------------------------- | ------------------------------------------ |
| 99.9% | 2.37s |   2,370 | `zig.Ast.Render.renderVarDeclWithoutFixups`                                 | `/opt/zig/lib/std/zig/Ast/Render.zig:1140` |
|  0.1% | 2.0ms |       2 | `hash_map.HashMapUnmanaged(u32,void,hash_map.AutoContext(u32),80).contains` | `/opt/zig/lib/std/hash_map.zig:1214`       |

##### `zig.Ast.Render.renderVarDeclWithoutFixups` (`/opt/zig/lib/std/zig/Ast/Render.zig:1140`)

|     % |    Time | Samples | Callee                            | Location                                   |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------------ |
| 90.4% |   2.14s |   2,142 | `zig.Ast.Render.renderExpression` | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
|  6.8% | 162.0ms |     162 | `zig.Ast.Render.renderIdentifier` | `/opt/zig/lib/std/zig/Ast/Render.zig:2926` |
|  4.7% | 111.0ms |     111 | `zig.Ast.Render.renderToken`      | `/opt/zig/lib/std/zig/Ast/Render.zig:2844` |
|  0.8% |  20.0ms |      20 | `zig.Ast.firstToken`              | `/opt/zig/lib/std/zig/Ast.zig:596`         |
|  0.3% |   7.0ms |       7 | `zig.Ast.Render.renderSpace`      | `/opt/zig/lib/std/zig/Ast/Render.zig:2862` |

##### `zig.Ast.Render.renderToken` (`/opt/zig/lib/std/zig/Ast/Render.zig:2844`)

|     % |    Time | Samples | Callee                                        | Location                                   |
| ----: | ------: | ------: | --------------------------------------------- | ------------------------------------------ |
| 45.3% | 809.0ms |     809 | `zig.Ast.Render.tokenSliceForRender`          | `/opt/zig/lib/std/zig/Ast/Render.zig:3268` |
| 28.8% | 514.0ms |     514 | `zig.Ast.Render.renderSpace`                  | `/opt/zig/lib/std/zig/Ast/Render.zig:2862` |
| 23.2% | 415.0ms |     415 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `/opt/zig/lib/std/zig/Ast/Render.zig:3496` |
|  1.8% |  32.0ms |      32 | `zig.Ast.tokenSlice`                          | `/opt/zig/lib/std/zig/Ast.zig:265`         |

##### `zig.Ast.Render.renderContainerDecl` (`/opt/zig/lib/std/zig/Ast/Render.zig:2295`)

|     % |    Time | Samples | Callee                              | Location                                   |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------------ |
| 89.6% |   1.47s |   1,470 | `zig.Ast.Render.renderMember`       | `/opt/zig/lib/std/zig/Ast/Render.zig:141`  |
|  6.8% | 111.0ms |     111 | `zig.Ast.Render.hasComment`         | `/opt/zig/lib/std/zig/Ast/Render.zig:3089` |
|  3.7% |  61.0ms |      61 | `zig.Ast.Render.renderExtraNewline` | `/opt/zig/lib/std/zig/Ast/Render.zig:3175` |
|  1.3% |  21.0ms |      21 | `zig.Ast.Render.renderExpression`   | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
|  1.0% |  16.0ms |      16 | `zig.Ast.Render.renderToken`        | `/opt/zig/lib/std/zig/Ast/Render.zig:2844` |

##### `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:395`)

|     % |    Time | Samples | Callee                           | Location                                |
| ----: | ------: | ------: | -------------------------------- | --------------------------------------- |
| 22.1% | 357.0ms |     357 | `zig.tokenizer.Token.getKeyword` | `/opt/zig/lib/std/zig/tokenizer.zig:61` |

##### `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3268`)

|     % |    Time | Samples | Callee                           | Location                                 |
| ----: | ------: | ------: | -------------------------------- | ---------------------------------------- |
| 77.1% |   1.16s |   1,169 | `zig.Ast.tokenSlice`             | `/opt/zig/lib/std/zig/Ast.zig:265`       |
|  7.8% | 118.0ms |     118 | `zig.tokenizer.Token.Tag.lexeme` | `/opt/zig/lib/std/zig/tokenizer.zig:186` |
|  2.2% |  34.0ms |      34 | `zig.Ast.tokenTag`               | `/opt/zig/lib/std/zig/Ast.zig:88`        |
|  0.1% |   1.0ms |       1 | `mem.trimEnd__anon_15431`        | `/opt/zig/lib/std/mem.zig:1216`          |

##### `zig.Ast.Render.renderIdentifier` (`/opt/zig/lib/std/zig/Ast/Render.zig:2926`)

|     % |    Time | Samples | Callee                                     | Location                                   |
| ----: | ------: | ------: | ------------------------------------------ | ------------------------------------------ |
| 50.7% | 741.0ms |     741 | `zig.Ast.Render.renderToken`               | `/opt/zig/lib/std/zig/Ast/Render.zig:2844` |
| 41.4% | 605.0ms |     605 | `zig.Ast.Render.tokenSliceForRender`       | `/opt/zig/lib/std/zig/Ast/Render.zig:3268` |
|  1.4% |  21.0ms |      21 | `array_hash_map.ArrayHashMapUnmanaged.get` | `/opt/zig/lib/std/array_hash_map.zig:1080` |
|  1.0% |  14.0ms |      14 | `zig.Ast.tokenSlice`                       | `/opt/zig/lib/std/zig/Ast.zig:265`         |
|  0.5% |   8.0ms |       8 | `zig.Ast.tokenTag`                         | `/opt/zig/lib/std/zig/Ast.zig:88`          |

##### `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:265`)

|     % |   Time | Samples | Callee                         | Location                                 |
| ----: | -----: | ------: | ------------------------------ | ---------------------------------------- |
| 78.8% |  1.08s |   1,087 | `zig.tokenizer.Tokenizer.next` | `/opt/zig/lib/std/zig/tokenizer.zig:395` |
|  2.7% | 37.0ms |      37 | `zig.Ast.tokenTag`             | `/opt/zig/lib/std/zig/Ast.zig:88`        |
|  0.4% |  6.0ms |       6 | `zig.Ast.tokenStart`           | `/opt/zig/lib/std/zig/Ast.zig:92`        |

##### `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)

|     % |    Time | Samples | Callee                                                                   | Location                                    |
| ----: | ------: | ------: | ------------------------------------------------------------------------ | ------------------------------------------- |
| 45.7% | 528.0ms |     528 | `zig.tokenizer.Tokenizer.next`                                           | `/opt/zig/lib/std/zig/tokenizer.zig:395`    |
| 41.7% | 482.0ms |     482 | `zig.Parse.parseRoot`                                                    | `/opt/zig/lib/std/zig/Parse.zig:192`        |
|  9.2% | 106.0ms |     106 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).append` | `/opt/zig/lib/std/multi_array_list.zig:252` |
|  1.4% |  16.0ms |      16 | `(anonymous)`                                                            | `<unknown>`                                 |

##### `cfree` (`<unknown>`)

|     % |   Time | Samples | Callee        | Location    |
| ----: | -----: | ------: | ------------- | ----------- |
| 90.0% | 18.0ms |      18 | `(anonymous)` | `<unknown>` |

##### `__default_morecore` (`<unknown>`)

|      % |   Time | Samples | Callee | Location    |
| -----: | -----: | ------: | ------ | ----------- |
| 100.0% | 15.0ms |      15 | `brk`  | `<unknown>` |

##### `posix_memalign` (`<unknown>`)

|     % |   Time | Samples | Callee          | Location    |
| ----: | -----: | ------: | --------------- | ----------- |
| 71.4% | 10.0ms |      10 | `__libc_malloc` | `<unknown>` |

##### `__libc_malloc` (`<unknown>`)

|      % |   Time | Samples | Callee        | Location    |
| -----: | -----: | ------: | ------------- | ----------- |
| 100.0% | 10.0ms |      10 | `(anonymous)` | `<unknown>` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

Common call stack: `profile.main` (`./profile.zig:12`) ← `start.callMain` (`/opt/zig/lib/std/start.zig:613`) ← `start.callMainWithArgs` (580) ← `main` (590) ← `(anonymous)` ← `__libc_start_main` ← `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.5% | 447.0ms |     447 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:395`) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.1% |  59.0ms |      59 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` (`/opt/zig/lib/std/static_string_map.zig:198`) ← `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).get` (191) ← `zig.tokenizer.Token.getKeyword` (`/opt/zig/lib/std/zig/tokenizer.zig:61`) ← `zig.tokenizer.Tokenizer.next` (395) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.6% |  33.0ms |      33 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:395`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:265`) ← `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3268`) ← `zig.Ast.Render.renderIdentifier` (2926) ← `zig.Ast.Render.renderContainerField` (1473) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderContainerDecl` (2295) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206)                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.5% |  29.0ms |      29 | `(anonymous)` ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureUnusedCapacity` (`/opt/zig/lib/std/multi_array_list.zig:482`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).append` (252) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.5% |  26.0ms |      26 | `__read` ← `posix.read` (`/opt/zig/lib/std/posix.zig:844`) ← `fs.File.read` (`/opt/zig/lib/std/fs/File.zig:847`) ← `Io.GenericReader(fs.File,error{AccessDenied,BrokenPipe,Canceled,ConnectionResetByPeer,ConnectionTimedOut,InputOutput,IsDir,LockViolation,NotOpenForReading,OperationAborted,ProcessNotFound,SocketNotConnected,SystemResources,Unexpected,WouldBlock},(function 'read')).typeErasedReadFn` (`/opt/zig/lib/std/Io.zig:291`) ← `Io.DeprecatedReader.read` (`/opt/zig/lib/std/Io/DeprecatedReader.zig:9`) ← `Io.DeprecatedReader.readAtLeast` (25) ← `Io.DeprecatedReader.readAll` (16) ← `Io.DeprecatedReader.readAllArrayListAligned__anon_2535` (55) ← `Io.GenericReader(fs.File,error{AccessDenied,BrokenPipe,Canceled,ConnectionResetByPeer,ConnectionTimedOut,InputOutput,IsDir,LockViolation,NotOpenForReading,OperationAborted,ProcessNotFound,SocketNotConnected,SystemResources,Unexpected,WouldBlock},(function 'read')).readAllArrayListAligned` (`/opt/zig/lib/std/Io.zig:126`) ← `fs.File.readToEndAllocOptions__anon_2451` (`/opt/zig/lib/std/fs/File.zig:814`) ← `fs.Dir.readFileAllocOptions__anon_2384` (`/opt/zig/lib/std/fs/Dir.zig:1997`) |
| 0.4% |  23.0ms |      23 | `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.4% |  22.0ms |      22 | `static_string_map.defaultEql` (`/opt/zig/lib/std/static_string_map.zig:13`) ← `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` (198) ← `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).get` (191) ← `zig.tokenizer.Token.getKeyword` (`/opt/zig/lib/std/zig/tokenizer.zig:61`) ← `zig.tokenizer.Tokenizer.next` (395) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.4% |  21.0ms |      21 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureTotalCapacity` (`/opt/zig/lib/std/math.zig:458`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureUnusedCapacity` (`/opt/zig/lib/std/multi_array_list.zig:482`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).append` (252) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.3% |  17.0ms |      17 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:395`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:265`) ← `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3268`) ← `zig.Ast.Render.renderToken` (2844) ← `zig.Ast.Render.renderDocComments` (3208) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.3% |  17.0ms |      17 | `openat` ← `posix.openatZ` (`/opt/zig/lib/std/posix.zig:1835`) ← `fs.Dir.openFileZ` (`/opt/zig/lib/std/fs/Dir.zig:855`) ← `fs.Dir.openFile` (818) ← `fs.Dir.readFileAllocOptions__anon_2384` (1997)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.3% |  16.0ms |      16 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureTotalCapacity` (`/opt/zig/lib/std/multi_array_list.zig:458`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureUnusedCapacity` (482) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).append` (252) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.3% |  16.0ms |      16 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureUnusedCapacity` (`/opt/zig/lib/std/multi_array_list.zig:482`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).append` (252) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.3% |  16.0ms |      16 | `(anonymous)` ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.3% |  15.0ms |      15 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).Slice.set` (`/opt/zig/lib/std/multi_array_list.zig:96`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).set` (241) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).appendAssumeCapacity` (259) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).append` (252) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.3% |  15.0ms |      15 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:395`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:265`) ← `zig.Ast.Render.hasComment` (`/opt/zig/lib/std/zig/Ast/Render.zig:3089`) ← `zig.Ast.Render.renderContainerDecl` (2295) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.3% |  14.0ms |      14 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:395`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:265`) ← `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3268`) ← `zig.Ast.Render.renderExtraNewlineToken` (3180) ← `zig.Ast.Render.renderExtraNewline` (3175) ← `zig.Ast.Render.renderContainerDecl` (2295) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206)                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.3% |  14.0ms |      14 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:395`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:265`) ← `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3268`) ← `zig.Ast.Render.renderIdentifier` (2926) ← `zig.Ast.Render.renderFnProto` (1660) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.2% |  13.0ms |      13 | `zig.tokenizer.Token.Tag.lexeme` (`/opt/zig/lib/std/zig/tokenizer.zig:186`) ← `zig.Ast.Render.hasComment` (`/opt/zig/lib/std/zig/Ast/Render.zig:3089`) ← `zig.Ast.Render.renderContainerDecl` (2295) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.2% |  13.0ms |      13 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:395`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:265`) ← `zig.Ast.Render.hasComment` (`/opt/zig/lib/std/zig/Ast/Render.zig:3089`) ← `zig.Ast.Render.renderStructInit` (1995) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderArrayInit` (2067) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.finishRenderBlock` (1967) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206)                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.2% |  12.0ms |      12 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:395`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:265`) ← `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3268`) ← `zig.Ast.Render.renderToken` (2844) ← `zig.Ast.Render.renderDocComments` (3208) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderContainerDecl` (2295) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206)                                                                                                                                                                                                                                                                                                                                                                                                                                    |

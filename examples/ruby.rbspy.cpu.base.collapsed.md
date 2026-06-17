# Sampling profile

Collected 133 samples.

| Category                         |     % | Samples |
| -------------------------------- | ----: | ------: |
| unknown) [c function] - (unknown | 63.9% |      85 |
| stdlib                           | 36.1% |      48 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                             | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 63.9% |      85 | `(unknown) [c function] - (unknown)` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Caller attribution may be imprecise due to inlining.

##### `(unknown) [c function] - (unknown)` (`<unknown>`)

|    % | Samples | Caller                                                                                                              | Location            |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------- | ------------------- |
| 5.9% |       5 | `(unknown) [c function] - (unknown)`                                                                                | `<unknown>`         |
| 3.5% |       3 | `Interface> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb` | <module:629         |
| 3.5% |       3 | `Parser> - /var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb`                                                  | <module:91          |
| 1.2% |       1 | `Node> - /var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node.rb`                                       | block in <class:188 |
| 1.2% |       1 | `ConstantOperatorWriteNode> - /var/lib/gems/3.1.0/gems/prism-1.9.0/lib/prism/node.rb`                               | <class:5161         |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                                                                                                                 | Location     |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ------------ |
| 100.0% |     133 | `(unknown) [c function] - (unknown)`                                                                                     | `<unknown>`  |
|   3.0% |       4 | `Formatter> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/formatter.rb`                                          | <module:33   |
|   3.0% |       4 | `RuboCop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/formatter.rb`                                            | <module:34   |
|   3.0% |       4 | `Parser> - /var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb`                                                       | <module:91   |
|   2.3% |       3 | `Interface> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb`      | <module:629  |
|   2.3% |       3 | `Protocol> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb`       | <module:630  |
|   2.3% |       3 | `LanguageServer> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb` | <module:631  |
|   1.5% |       2 | `gem_prelude> - unknown`                                                                                                 | <internal:16 |
|   0.8% |       1 | `MutableConstant> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/mutable_constant.rb`                   | <class:244   |
|   0.8% |       1 | `Style> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/mutable_constant.rb`                             | <module:245  |
|   0.8% |       1 | `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/mutable_constant.rb`                               | <module:246  |
|   0.8% |       1 | `RuboCop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/mutable_constant.rb`                           | <module:247  |
|   0.8% |       1 | `Resolver> - /usr/lib/ruby/vendor_ruby/rubygems/resolver.rb`                                                             | <class:319   |
|   0.8% |       1 | `DirEmpty> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/dir_empty.rb`                                 | <class:51    |
|   0.8% |       1 | `Style> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/dir_empty.rb`                                    | <module:52   |
|   0.8% |       1 | `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/dir_empty.rb`                                      | <module:53   |
|   0.8% |       1 | `RuboCop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/dir_empty.rb`                                  | <module:54   |
|   0.8% |       1 | `NegativeConditional> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/negative_conditional.rb`           | <module:32   |
|   0.8% |       1 | `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/negative_conditional.rb`                           | <module:33   |
|   0.8% |       1 | `RuboCop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/negative_conditional.rb`                       | <module:34   |

#### Callees

Callees ranked by contribution to each function's total samples. Callee attribution may be imprecise due to inlining.

##### `(unknown) [c function] - (unknown)` (`<unknown>`)

|     % | Samples | Callee                                                                        | Location            |
| ----: | ------: | ----------------------------------------------------------------------------- | ------------------- |
| 57.1% |      76 | `(unknown) [c function] - (unknown)`                                          | `<unknown>`         |
|  0.8% |       1 | `Node> - /var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node.rb` | block in <class:188 |

##### `Formatter> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/formatter.rb` (<module:33)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       4 | `(unknown) [c function] - (unknown)` | `<unknown>` |

##### `RuboCop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/formatter.rb` (<module:34)

|      % | Samples | Callee                                                                          | Location   |
| -----: | ------: | ------------------------------------------------------------------------------- | ---------- |
| 100.0% |       4 | `Formatter> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/formatter.rb` | <module:33 |

##### `Parser> - /var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb` (<module:91)

|     % | Samples | Callee                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------- | ----------- |
| 75.0% |       3 | `(unknown) [c function] - (unknown)`                            | `<unknown>` |
| 25.0% |       1 | `AST> - /var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb` | <module:28  |

##### `Interface> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb` (<module:629)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       3 | `(unknown) [c function] - (unknown)` | `<unknown>` |

##### `Protocol> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb` (<module:630)

|      % | Samples | Callee                                                                                                              | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       3 | `Interface> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb` | <module:629 |

##### `LanguageServer> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb` (<module:631)

|      % | Samples | Callee                                                                                                             | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------ | ----------- |
| 100.0% |       3 | `Protocol> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb` | <module:630 |

##### `gem_prelude> - unknown` (<internal:16)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       2 | `(unknown) [c function] - (unknown)` | `<unknown>` |

##### `Style> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/mutable_constant.rb` (<module:245)

|      % | Samples | Callee                                                                                                 | Location   |
| -----: | ------: | ------------------------------------------------------------------------------------------------------ | ---------- |
| 100.0% |       1 | `MutableConstant> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/mutable_constant.rb` | <class:244 |

##### `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/mutable_constant.rb` (<module:246)

|      % | Samples | Callee                                                                                       | Location    |
| -----: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       1 | `Style> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/mutable_constant.rb` | <module:245 |

##### `RuboCop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/mutable_constant.rb` (<module:247)

|      % | Samples | Callee                                                                                     | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 100.0% |       1 | `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/mutable_constant.rb` | <module:246 |

##### `Resolver> - /usr/lib/ruby/vendor_ruby/rubygems/resolver.rb` (<class:319)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       1 | `(unknown) [c function] - (unknown)` | `<unknown>` |

##### `Style> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/dir_empty.rb` (<module:52)

|      % | Samples | Callee                                                                                   | Location  |
| -----: | ------: | ---------------------------------------------------------------------------------------- | --------- |
| 100.0% |       1 | `DirEmpty> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/dir_empty.rb` | <class:51 |

##### `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/dir_empty.rb` (<module:53)

|      % | Samples | Callee                                                                                | Location   |
| -----: | ------: | ------------------------------------------------------------------------------------- | ---------- |
| 100.0% |       1 | `Style> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/dir_empty.rb` | <module:52 |

##### `RuboCop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/dir_empty.rb` (<module:54)

|      % | Samples | Callee                                                                              | Location   |
| -----: | ------: | ----------------------------------------------------------------------------------- | ---------- |
| 100.0% |       1 | `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/dir_empty.rb` | <module:53 |

##### `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/negative_conditional.rb` (<module:33)

|      % | Samples | Callee                                                                                                         | Location   |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------- | ---------- |
| 100.0% |       1 | `NegativeConditional> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/negative_conditional.rb` | <module:32 |

##### `RuboCop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/negative_conditional.rb` (<module:34)

|      % | Samples | Callee                                                                                         | Location   |
| -----: | ------: | ---------------------------------------------------------------------------------------------- | ---------- |
| 100.0% |       1 | `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/negative_conditional.rb` | <module:33 |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11.3% |      15 | `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  4.5% |       6 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  2.3% |       3 | `(unknown) [c function] - (unknown)` ← `Interface> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb` (<module:629) ← `Protocol> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb` (630) ← `LanguageServer> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb` (631) ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.3% |       3 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  2.3% |       3 | `(unknown) [c function] - (unknown)` ← `Parser> - /var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb` (<module:91) ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.3% |       3 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.5% |       2 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.5% |       2 | `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.5% |       2 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.8% |       1 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.8% |       1 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.8% |       1 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `MutableConstant> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/mutable_constant.rb` (<class:244) ← `Style> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/mutable_constant.rb` (<module:245) ← `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/mutable_constant.rb` (246) ← `RuboCop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/mutable_constant.rb` (247) ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.8% |       1 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `Resolver> - /usr/lib/ruby/vendor_ruby/rubygems/resolver.rb` (<class:319)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.8% |       1 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.8% |       1 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `DirEmpty> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/dir_empty.rb` (<class:51) ← `Style> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/dir_empty.rb` (<module:52) ← `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/dir_empty.rb` (53) ← `RuboCop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/dir_empty.rb` (54) ← `(unknown) [c function] - (unknown)` |
|  0.8% |       1 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.8% |       1 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.8% |       1 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.8% |       1 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.8% |       1 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                       |

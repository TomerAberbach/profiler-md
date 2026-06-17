# Sampling profile

Collected 131 samples.

| Category                         |     % | Samples |
| -------------------------------- | ----: | ------: |
| unknown) [c function] - (unknown | 67.9% |      89 |
| stdlib                           | 31.3% |      41 |
| ours                             |  0.8% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                               | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 67.9% |      89 | `(unknown) [c function] - (unknown)`   | `<unknown>` |
|  0.8% |       1 | `DNS> - /usr/lib/ruby/3.1.0/resolv.rb` | <class:2344 |

#### Callers

Callers ranked by contribution to each function's self samples. Caller attribution may be imprecise due to inlining.

##### `(unknown) [c function] - (unknown)` (`<unknown>`)

|    % | Samples | Caller                                                                                                              | Location    |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| 4.5% |       4 | `Interface> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb` | <module:629 |
| 3.4% |       3 | `(unknown) [c function] - (unknown)`                                                                                | `<unknown>` |
| 3.4% |       3 | `Parser> - /var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb`                                                  | <module:91  |

##### `DNS> - /usr/lib/ruby/3.1.0/resolv.rb` (<class:2344)

|      % | Samples | Caller                                    | Location    |
| -----: | ------: | ----------------------------------------- | ----------- |
| 100.0% |       1 | `Resolv> - /usr/lib/ruby/3.1.0/resolv.rb` | <class:2909 |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                                                                                                                 | Location     |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ------------ |
| 100.0% |     131 | `(unknown) [c function] - (unknown)`                                                                                     | `<unknown>`  |
|   3.1% |       4 | `Formatter> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/formatter.rb`                                          | <module:33   |
|   3.1% |       4 | `RuboCop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/formatter.rb`                                            | <module:34   |
|   3.1% |       4 | `Interface> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb`      | <module:629  |
|   3.1% |       4 | `Protocol> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb`       | <module:630  |
|   3.1% |       4 | `LanguageServer> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb` | <module:631  |
|   2.3% |       3 | `Parser> - /var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb`                                                       | <module:91   |
|   1.5% |       2 | `gem_prelude> - unknown`                                                                                                 | <internal:16 |
|   0.8% |       1 | `GemDeclaration> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/gem_declaration.rb`                     | <module:11   |
|   0.8% |       1 | `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/gem_declaration.rb`                                | <module:12   |
|   0.8% |       1 | `RuboCop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/gem_declaration.rb`                            | <module:13   |
|   0.8% |       1 | `DNS> - /usr/lib/ruby/3.1.0/resolv.rb`                                                                                   | <class:2344  |
|   0.8% |       1 | `Resolv> - /usr/lib/ruby/3.1.0/resolv.rb`                                                                                | <class:2909  |
|   0.8% |       1 | `ComparableClamp> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/comparable_clamp.rb`                   | <class:122   |
|   0.8% |       1 | `Style> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/comparable_clamp.rb`                             | <module:123  |
|   0.8% |       1 | `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/comparable_clamp.rb`                               | <module:124  |
|   0.8% |       1 | `RuboCop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/comparable_clamp.rb`                           | <module:125  |
|   0.8% |       1 | `ZeroLengthPredicate> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/zero_length_predicate.rb`          | <class:151   |
|   0.8% |       1 | `Style> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/zero_length_predicate.rb`                        | <module:152  |
|   0.8% |       1 | `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/zero_length_predicate.rb`                          | <module:153  |

#### Callees

Callees ranked by contribution to each function's total samples. Callee attribution may be imprecise due to inlining.

##### `(unknown) [c function] - (unknown)` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 59.5% |      78 | `(unknown) [c function] - (unknown)` | `<unknown>` |

##### `Formatter> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/formatter.rb` (<module:33)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       4 | `(unknown) [c function] - (unknown)` | `<unknown>` |

##### `RuboCop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/formatter.rb` (<module:34)

|      % | Samples | Callee                                                                          | Location   |
| -----: | ------: | ------------------------------------------------------------------------------- | ---------- |
| 100.0% |       4 | `Formatter> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/formatter.rb` | <module:33 |

##### `Interface> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb` (<module:629)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       4 | `(unknown) [c function] - (unknown)` | `<unknown>` |

##### `Protocol> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb` (<module:630)

|      % | Samples | Callee                                                                                                              | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       4 | `Interface> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb` | <module:629 |

##### `LanguageServer> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb` (<module:631)

|      % | Samples | Callee                                                                                                             | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------ | ----------- |
| 100.0% |       4 | `Protocol> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb` | <module:630 |

##### `Parser> - /var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb` (<module:91)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       3 | `(unknown) [c function] - (unknown)` | `<unknown>` |

##### `gem_prelude> - unknown` (<internal:16)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       2 | `(unknown) [c function] - (unknown)` | `<unknown>` |

##### `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/gem_declaration.rb` (<module:12)

|      % | Samples | Callee                                                                                               | Location   |
| -----: | ------: | ---------------------------------------------------------------------------------------------------- | ---------- |
| 100.0% |       1 | `GemDeclaration> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/gem_declaration.rb` | <module:11 |

##### `RuboCop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/gem_declaration.rb` (<module:13)

|      % | Samples | Callee                                                                                    | Location   |
| -----: | ------: | ----------------------------------------------------------------------------------------- | ---------- |
| 100.0% |       1 | `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/gem_declaration.rb` | <module:12 |

##### `Resolv> - /usr/lib/ruby/3.1.0/resolv.rb` (<class:2909)

|      % | Samples | Callee                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       1 | `DNS> - /usr/lib/ruby/3.1.0/resolv.rb` | <class:2344 |

##### `Style> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/comparable_clamp.rb` (<module:123)

|      % | Samples | Callee                                                                                                 | Location   |
| -----: | ------: | ------------------------------------------------------------------------------------------------------ | ---------- |
| 100.0% |       1 | `ComparableClamp> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/comparable_clamp.rb` | <class:122 |

##### `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/comparable_clamp.rb` (<module:124)

|      % | Samples | Callee                                                                                       | Location    |
| -----: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       1 | `Style> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/comparable_clamp.rb` | <module:123 |

##### `RuboCop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/comparable_clamp.rb` (<module:125)

|      % | Samples | Callee                                                                                     | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 100.0% |       1 | `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/comparable_clamp.rb` | <module:124 |

##### `Style> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/zero_length_predicate.rb` (<module:152)

|      % | Samples | Callee                                                                                                          | Location   |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------- | ---------- |
| 100.0% |       1 | `ZeroLengthPredicate> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/zero_length_predicate.rb` | <class:151 |

##### `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/zero_length_predicate.rb` (<module:153)

|      % | Samples | Callee                                                                                            | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       1 | `Style> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/zero_length_predicate.rb` | <module:152 |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `(unknown) [c function] - (unknown)`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.6% |      10 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 3.1% |       4 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 3.1% |       4 | `(unknown) [c function] - (unknown)` ← `Interface> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb` (<module:629) ← `Protocol> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb` (630) ← `LanguageServer> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb` (631) ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                              |
| 2.3% |       3 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                           |
| 2.3% |       3 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2.3% |       3 | `(unknown) [c function] - (unknown)` ← `Parser> - /var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb` (<module:91) ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.3% |       3 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                           |
| 1.5% |       2 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.5% |       2 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `Formatter> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/formatter.rb` (<module:33) ← `RuboCop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/formatter.rb` (34) ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                        |
| 1.5% |       2 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.5% |       2 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.5% |       2 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.8% |       1 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `GemDeclaration> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/gem_declaration.rb` (<module:11) ← `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/gem_declaration.rb` (12) ← `RuboCop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/gem_declaration.rb` (13) ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                         |
| 0.8% |       1 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                      |
| 0.8% |       1 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                             |
| 0.8% |       1 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.8% |       1 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` |
| 0.8% |       1 | `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.8% |       1 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.8% |       1 | `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)` ← `(unknown) [c function] - (unknown)`                                        |

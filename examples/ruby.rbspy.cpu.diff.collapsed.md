# Sampling profile diff

133 samples → 131 samples (-2 samples, -1.5%).

| Category                         | Change | Delta |             % | Samples |
| -------------------------------- | -----: | ----: | ------------: | ------: |
| unknown) [c function] - (unknown |  +4.7% |    +4 | 63.9% → 67.9% | 85 → 89 |
| stdlib                           | -14.6% |    -7 | 36.1% → 31.3% | 48 → 41 |
| ours                             |    new |    +1 |   0.0% → 0.8% |   0 → 1 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

| Change | Delta |             % | Samples | Function                               | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
|  +4.7% |    +4 | 63.9% → 67.9% | 85 → 89 | `(unknown) [c function] - (unknown)`   | `<unknown>` |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `DNS> - /usr/lib/ruby/3.1.0/resolv.rb` | <class:2344 |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |           % | Samples | Function                                                                                                                 | Location    |
| -----: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ----------- |
| +33.3% |    +1 | 2.3% → 3.1% |   3 → 4 | `Interface> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb`      | <module:629 |
| +33.3% |    +1 | 2.3% → 3.1% |   3 → 4 | `Protocol> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb`       | <module:630 |
| +33.3% |    +1 | 2.3% → 3.1% |   3 → 4 | `LanguageServer> - /var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb` | <module:631 |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `GemDeclaration> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/gem_declaration.rb`                     | <module:11  |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/gem_declaration.rb`                                | <module:12  |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `RuboCop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/gem_declaration.rb`                            | <module:13  |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `DNS> - /usr/lib/ruby/3.1.0/resolv.rb`                                                                                   | <class:2344 |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `Resolv> - /usr/lib/ruby/3.1.0/resolv.rb`                                                                                | <class:2909 |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `ComparableClamp> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/comparable_clamp.rb`                   | <class:122  |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `Style> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/comparable_clamp.rb`                             | <module:123 |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/comparable_clamp.rb`                               | <module:124 |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `RuboCop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/comparable_clamp.rb`                           | <module:125 |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `ZeroLengthPredicate> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/zero_length_predicate.rb`          | <class:151  |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `Style> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/zero_length_predicate.rb`                        | <module:152 |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/zero_length_predicate.rb`                          | <module:153 |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `RuboCop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/zero_length_predicate.rb`                      | <module:154 |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `Traversal> - /var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/traversal.rb`                                  | <module:191 |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `AST> - /var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/traversal.rb`                                        | <module:192 |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `RuboCop> - /var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/traversal.rb`                                    | <module:193 |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `DepartmentName> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/migration/department_name.rb`                 | <class:78   |

#### Progressions

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |           % |   Samples | Function                                                                                                       | Location                       |
| ------: | ----: | ----------: | --------: | -------------------------------------------------------------------------------------------------------------- | ------------------------------ |
|   -1.5% |    -2 |      100.0% | 133 → 131 | `(unknown) [c function] - (unknown)`                                                                           | `<unknown>`                    |
| removed |    -1 | 0.8% → 0.0% |     1 → 0 | `Resolver> - /usr/lib/ruby/vendor_ruby/rubygems/resolver.rb`                                                   | <class:319                     |
| removed |    -1 | 0.8% → 0.0% |     1 → 0 | `DirEmpty> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/dir_empty.rb`                       | <class:51                      |
| removed |    -1 | 0.8% → 0.0% |     1 → 0 | `Style> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/dir_empty.rb`                          | <module:52                     |
| removed |    -1 | 0.8% → 0.0% |     1 → 0 | `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/dir_empty.rb`                            | <module:53                     |
| removed |    -1 | 0.8% → 0.0% |     1 → 0 | `RuboCop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/dir_empty.rb`                        | <module:54                     |
| removed |    -1 | 0.8% → 0.0% |     1 → 0 | `NegativeConditional> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/negative_conditional.rb` | <module:32                     |
| removed |    -1 | 0.8% → 0.0% |     1 → 0 | `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/negative_conditional.rb`                 | <module:33                     |
| removed |    -1 | 0.8% → 0.0% |     1 → 0 | `RuboCop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/negative_conditional.rb`             | <module:34                     |
| removed |    -1 | 0.8% → 0.0% |     1 → 0 | `VariableForce> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force.rb`                   | block (2 levels) in <class:383 |
| removed |    -1 | 0.8% → 0.0% |     1 → 0 | `Meta> - /var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/meta.rb`                                          | <module:47                     |
| removed |    -1 | 0.8% → 0.0% |     1 → 0 | `Parser> - /var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/meta.rb`                                        | <module:48                     |
| removed |    -1 | 0.8% → 0.0% |     1 → 0 | `AST> - /var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb`                                                | <module:28                     |
|  -25.0% |    -1 | 3.0% → 2.3% |     4 → 3 | `Parser> - /var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb`                                             | <module:91                     |
| removed |    -1 | 0.8% → 0.0% |     1 → 0 | `CompoundHash> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/security/compound_hash.rb`            | <class:103                     |
| removed |    -1 | 0.8% → 0.0% |     1 → 0 | `Security> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/security/compound_hash.rb`                | <module:104                    |
| removed |    -1 | 0.8% → 0.0% |     1 → 0 | `Cop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/security/compound_hash.rb`                     | <module:105                    |
| removed |    -1 | 0.8% → 0.0% |     1 → 0 | `RuboCop> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/security/compound_hash.rb`                 | <module:106                    |
| removed |    -1 | 0.8% → 0.0% |     1 → 0 | `SignalException> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/signal_exception.rb`         | <class:215                     |
| removed |    -1 | 0.8% → 0.0% |     1 → 0 | `Style> - /var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/signal_exception.rb`                   | <module:216                    |

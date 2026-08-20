# Sampling profile diff

Collected 139 samples → 136 samples (-3 samples, -2.2%).

| Category         |  Change | Delta |             % | Samples |
| ---------------- | ------: | ----: | ------------: | ------: |
| Native           |  -10.8% |    -9 | 59.7% → 54.4% | 83 → 74 |
| Third-party      |   -2.1% |    -1 |         33.8% | 47 → 46 |
| Unknown          |  +50.0% |    +3 |   4.3% → 6.6% |   6 → 9 |
| Standard library | +133.3% |    +4 |   2.2% → 5.1% |   3 → 7 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                    | Location                                                                                          |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|     new |    +3 | 0.0% → 2.2% |   0 → 3 | `Parser::Source::Buffer#line_index_for_position`                            | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`                                      |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `Enumerable#map [c function]`                                               | `<unknown>`                                                                                       |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `RuboCop::Cop::Style::ConditionalAssignment#assignment_type?`               | `<unknown>`                                                                                       |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `RuboCop::AST::Descendence#visit_descendants_of_types`                      | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`                     |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `block in on_send`                                                          | `<unknown>`                                                                                       |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `Symbol#start_with? [c function]`                                           | `<unknown>`                                                                                       |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `StringScanner#skip [c function]`                                           | `<unknown>`                                                                                       |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Array#each [c function]`                                                   | `<unknown>`                                                                                       |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Enumerator#each [c function]`                                              | `<unknown>`                                                                                       |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Enumerable#to_a [c function]`                                              | `<unknown>`                                                                                       |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::Cop::Commissioner#on_send`                                        | `<unknown>`                                                                                       |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Kernel#require [c function]`                                               | `<unknown>`                                                                                       |
| +100.0% |    +1 | 0.7% → 1.5% |   1 → 2 | `Module#append_features [c function]`                                       | `<unknown>`                                                                                       |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Parser::Lexer#emit`                                                        | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`                                           |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::AST::NodePattern::MethodDefiner#def_helper`                       | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`                |
| +100.0% |    +1 | 0.7% → 1.5% |   1 → 2 | `block (2 levels) in traverse`                                              | `../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`                           |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::AST::Node#type_in?`                                               | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                                       |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Psych::Visitors::ToRuby#accept`                                            | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`                                                     |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::AST::NodePattern::Compiler::SequenceSubcompiler#visit_other_type` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler/sequence_subcompiler.rb` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::Cop::Layout::CommentIndentation#correct_indentation`              | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/comment_indentation.rb`                     |

##### Native

|  Change | Delta |           % | Samples | Function                              | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------- | ----------- |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `Enumerable#map [c function]`         | `<unknown>` |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `Symbol#start_with? [c function]`     | `<unknown>` |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `StringScanner#skip [c function]`     | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Array#each [c function]`             | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Enumerator#each [c function]`        | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Enumerable#to_a [c function]`        | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Kernel#require [c function]`         | `<unknown>` |
| +100.0% |    +1 | 0.7% → 1.5% |   1 → 2 | `Module#append_features [c function]` | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Array#<=> [c function]`              | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Symbol#=== [c function]`             | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Kernel#freeze [c function]`          | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Array#select [c function]`           | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Kernel#to_enum [c function]`         | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Array#== [c function]`               | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `File#initialize [c function]`        | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `File.realpath [c function]`          | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Hash#fetch [c function]`             | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Kernel#respond_to? [c function]`     | `<unknown>` |

##### Third-party

|  Change | Delta |           % | Samples | Function                                                                    | Location                                                                                          |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|     new |    +3 | 0.0% → 2.2% |   0 → 3 | `Parser::Source::Buffer#line_index_for_position`                            | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`                                      |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `RuboCop::AST::Descendence#visit_descendants_of_types`                      | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`                     |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Parser::Lexer#emit`                                                        | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`                                           |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::AST::NodePattern::MethodDefiner#def_helper`                       | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`                |
| +100.0% |    +1 | 0.7% → 1.5% |   1 → 2 | `block (2 levels) in traverse`                                              | `../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`                           |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::AST::Node#type_in?`                                               | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                                       |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::AST::NodePattern::Compiler::SequenceSubcompiler#visit_other_type` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler/sequence_subcompiler.rb` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::Cop::Layout::CommentIndentation#correct_indentation`              | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/comment_indentation.rb`                     |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::AST::MethodIdentifierPredicates#negation_method?`                 | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/method_identifier_predicates.rb`    |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::Cop::MultilineExpressionIndentation#on_send`                      | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/multiline_expression_indentation.rb`         |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `block in def_node_matcher`                                                 | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`                |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::Cop::Util#line`                                                   | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/util.rb`                                           |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::AST::Node#first_line`                                             | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                                       |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::Cop::Style::RedundantRegexpEscape#on_regexp`                      | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_regexp_escape.rb`                  |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Parser::Lexer#emit_instance_var`                                           | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`                                           |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Parser::Builders::Default#prefix_string_map`                               | `../bundle/gems/parser-3.3.12.0/lib/parser/builders/default.rb`                                   |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `block in each_argument_node`                                               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/multiline_element_indentation.rb`            |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `block in contained_by_multiline_collection_that_could_be_broken_up?`       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/check_line_breakable.rb`                     |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::Cop::Base.cop_name`                                               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb`                                           |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::Cop::Team#support_target_ruby_version?`                           | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`                                           |

##### Unknown

| Change | Delta |           % | Samples | Function                                                      | Location    |
| -----: | ----: | ----------: | ------: | ------------------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 1.5% |   0 → 2 | `RuboCop::Cop::Style::ConditionalAssignment#assignment_type?` | `<unknown>` |
|    new |    +2 | 0.0% → 1.5% |   0 → 2 | `block in on_send`                                            | `<unknown>` |
|    new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::Cop::Commissioner#on_send`                          | `<unknown>` |
|    new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::AST::Node#proc?`                                    | `<unknown>` |
|    new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::Cop::Style::NumericPredicate#comparison`            | `<unknown>` |

##### Standard library

| Change | Delta |           % | Samples | Function                                | Location                                      |
| -----: | ----: | ----------: | ------: | --------------------------------------- | --------------------------------------------- |
|    new |    +1 | 0.0% → 0.7% |   0 → 1 | `Psych::Visitors::ToRuby#accept`        | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
|    new |    +1 | 0.0% → 0.7% |   0 → 1 | `Psych::Nodes::Node#initialize`         | `../lib/ruby/3.4.0/psych/nodes/node.rb`       |
|    new |    +1 | 0.0% → 0.7% |   0 → 1 | `Psych::TreeBuilder#set_start_location` | `../lib/ruby/3.4.0/psych/tree_builder.rb`     |
|    new |    +1 | 0.0% → 0.7% |   0 → 1 | `block in parse_in_order`               | `../lib/ruby/3.4.0/optparse.rb`               |
|    new |    +1 | 0.0% → 0.7% |   0 → 1 | `ERB::Compiler::Buffer#close`           | `../lib/ruby/3.4.0/erb/compiler.rb`           |
|    new |    +1 | 0.0% → 0.7% |   0 → 1 | `Psych::Visitors::ToRuby#resolve_class` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
|    new |    +1 | 0.0% → 0.7% |   0 → 1 | `block in merge`                        | `../lib/ruby/3.4.0/set.rb`                    |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % | Samples | Function                                               | Location                                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------ | ----------------------------------------------------------------------------- |
|  -20.6% |    -7 | 24.5% → 19.9% | 34 → 27 | `(unknown) [c function]`                               | `<unknown>`                                                                   |
| removed |    -3 |   2.2% → 0.0% |   3 → 0 | `Class#new [c function]`                               | `<unknown>`                                                                   |
| removed |    -3 |   2.2% → 0.0% |   3 → 0 | `block in visit_descendants_of_types`                  | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |
| removed |    -2 |   1.4% → 0.0% |   2 → 0 | `block in visit_all_descendants`                       | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |
| removed |    -2 |   1.4% → 0.0% |   2 → 0 | `RuboCop::AST::Node#initialize`                        | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                   |
| removed |    -2 |   1.4% → 0.0% |   2 → 0 | `Racc::Parser#_racc_do_parse_c [c function]`           | `<unknown>`                                                                   |
| removed |    -2 |   1.4% → 0.0% |   2 → 0 | `Parser::Source::Range#initialize`                     | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`                   |
| removed |    -2 |   1.4% → 0.0% |   2 → 0 | `RuboCop::Cop::RangeHelp#final_pos`                    | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb`           |
|  -33.3% |    -1 |   2.2% → 1.5% |   3 → 2 | `Kernel#public_send [c function]`                      | `<unknown>`                                                                   |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `RuboCop::Cop::Commissioner#with_cop_error_handling`   | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`               |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `RuboCop::Cop::Layout::ExtraSpacing#extra_space_range` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/extra_spacing.rb`       |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Parser::AST::Node#assign_properties`                  | `../bundle/gems/parser-3.3.12.0/lib/parser/ast/node.rb`                       |
|  -33.3% |    -1 |   2.2% → 1.5% |   3 → 2 | `String#index [c function]`                            | `<unknown>`                                                                   |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Parser::Source::Buffer#line_for_position`             | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`                  |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Regexp#match [c function]`                            | `<unknown>`                                                                   |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Module#public_instance_methods [c function]`          | `<unknown>`                                                                   |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `RuboCop::AST::SendNode#attribute_accessor?`           | `<unknown>`                                                                   |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Psych::TreeBuilder#pop`                               | `../lib/ruby/3.4.0/psych/tree_builder.rb`                                     |
|  -20.0% |    -1 |   3.6% → 2.9% |   5 → 4 | `Module#class_eval [c function]`                       | `<unknown>`                                                                   |
|  -25.0% |    -1 |   2.9% → 2.2% |   4 → 3 | `Kernel#require_relative [c function]`                 | `<unknown>`                                                                   |

##### Native

|  Change | Delta |             % | Samples | Function                                      | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ----------- |
|  -20.6% |    -7 | 24.5% → 19.9% | 34 → 27 | `(unknown) [c function]`                      | `<unknown>` |
| removed |    -3 |   2.2% → 0.0% |   3 → 0 | `Class#new [c function]`                      | `<unknown>` |
| removed |    -2 |   1.4% → 0.0% |   2 → 0 | `Racc::Parser#_racc_do_parse_c [c function]`  | `<unknown>` |
|  -33.3% |    -1 |   2.2% → 1.5% |   3 → 2 | `Kernel#public_send [c function]`             | `<unknown>` |
|  -33.3% |    -1 |   2.2% → 1.5% |   3 → 2 | `String#index [c function]`                   | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Regexp#match [c function]`                   | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Module#public_instance_methods [c function]` | `<unknown>` |
|  -20.0% |    -1 |   3.6% → 2.9% |   5 → 4 | `Module#class_eval [c function]`              | `<unknown>` |
|  -25.0% |    -1 |   2.9% → 2.2% |   4 → 3 | `Kernel#require_relative [c function]`        | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Module#attr_accessor [c function]`           | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Kernel#binding [c function]`                 | `<unknown>` |
|  -16.7% |    -1 |   4.3% → 3.7% |   6 → 5 | `String#[] [c function]`                      | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `String#% [c function]`                       | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Enumerable#each_slice [c function]`          | `<unknown>` |
|  -50.0% |    -1 |   1.4% → 0.7% |   2 → 1 | `Array#include? [c function]`                 | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Hash#freeze [c function]`                    | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `String#match? [c function]`                  | `<unknown>` |
|  -25.0% |    -1 |   2.9% → 2.2% |   4 → 3 | `Array#index [c function]`                    | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `String#tr [c function]`                      | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `StringScanner#scan [c function]`             | `<unknown>` |

##### Third-party

|  Change | Delta |           % | Samples | Function                                                             | Location                                                                                  |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| removed |    -3 | 2.2% → 0.0% |   3 → 0 | `block in visit_descendants_of_types`                                | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`             |
| removed |    -2 | 1.4% → 0.0% |   2 → 0 | `block in visit_all_descendants`                                     | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`             |
| removed |    -2 | 1.4% → 0.0% |   2 → 0 | `RuboCop::AST::Node#initialize`                                      | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                               |
| removed |    -2 | 1.4% → 0.0% |   2 → 0 | `Parser::Source::Range#initialize`                                   | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`                               |
| removed |    -2 | 1.4% → 0.0% |   2 → 0 | `RuboCop::Cop::RangeHelp#final_pos`                                  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb`                       |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::Cop::Commissioner#with_cop_error_handling`                 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                           |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::Cop::Layout::ExtraSpacing#extra_space_range`               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/extra_spacing.rb`                   |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `Parser::AST::Node#assign_properties`                                | `../bundle/gems/parser-3.3.12.0/lib/parser/ast/node.rb`                                   |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `Parser::Source::Buffer#line_for_position`                           | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`                              |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::Cop::Style::ConditionalAssignmentHelper#end_with_eq?`      | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/conditional_assignment.rb`           |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::Cop::Lint::Debugger#debugger_method?`                      | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/lint/debugger.rb`                          |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `Parser::Lexer::Literal#extend_string`                               | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer/literal.rb`                              |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `block in each_single_element_character_class`                       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_regexp_character_class.rb` |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::Cop::VariableForce#process_node`                           | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force.rb`                         |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::Cop::Style::LineEndConcatenation#standard_string_literal?` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/line_end_concatenation.rb`           |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `block in run_hook`                                                  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/force.rb`                                  |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::Cop::Layout::ElseAlignment#on_if`                          | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/else_alignment.rb`                  |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::Cop::ConfigurableEnforcedStyle#style_detected`             | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/configurable_enforced_style.rb`      |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::Cop::RangeHelp#range_with_surrounding_space`               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb`                       |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::AST::SendNode#first_argument_index`                        | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/send_node.rb`                     |

##### Unknown

|  Change | Delta |           % | Samples | Function                                                                 | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------ | ----------- |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::AST::SendNode#attribute_accessor?`                             | `<unknown>` |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::AST::Node#lvasgn_type?`                                        | `<unknown>` |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::Cop::Naming::BinaryOperatorParameterName#op_method_candidate?` | `<unknown>` |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::AST::Node#match_guard_clause?`                                 | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function                           | Location                                      |
| ------: | ----: | ----------: | ------: | ---------------------------------- | --------------------------------------------- |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `Psych::TreeBuilder#pop`           | `../lib/ruby/3.4.0/psych/tree_builder.rb`     |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `Psych::Nodes::Scalar#initialize`  | `../lib/ruby/3.4.0/psych/nodes/scalar.rb`     |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `Psych::Visitors::ToRuby#register` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % | Samples | Function                                                    | Location                                                                           |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|  +85.7% |    +6 |   5.0% → 9.6% |  7 → 13 | `RuboCop::AST::NodePattern::Macros#def_node_matcher`        | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`                |
|  +62.5% |    +5 |   5.8% → 9.6% |  8 → 13 | `block in on_send`                                          | `<unknown>`                                                                        |
|  +62.5% |    +5 |   5.8% → 9.6% |  8 → 13 | `RuboCop::AST::Traversal#on_send`                           | `<unknown>`                                                                        |
| +250.0% |    +5 |   1.4% → 5.1% |   2 → 7 | `Enumerable#find [c function]`                              | `<unknown>`                                                                        |
|     new |    +5 |   0.0% → 3.7% |   0 → 5 | `Array#select [c function]`                                 | `<unknown>`                                                                        |
|  +33.3% |    +4 |  8.6% → 11.8% | 12 → 16 | `Enumerable#each_with_index [c function]`                   | `<unknown>`                                                                        |
|  +14.3% |    +4 | 20.1% → 23.5% | 28 → 32 | `RuboCop::AST::Traversal#on_def`                            | `<unknown>`                                                                        |
|     new |    +4 |   0.0% → 2.9% |   0 → 4 | `RuboCop::Cop::Style::IfUnlessModifier#on_if`               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/if_unless_modifier.rb`        |
|     new |    +4 |   0.0% → 2.9% |   0 → 4 | `RuboCop::Cop::Util#line`                                   | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/util.rb`                            |
|     new |    +4 |   0.0% → 2.9% |   0 → 4 | `RuboCop::Cop::Util#same_line?`                             | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/util.rb`                            |
|  +15.8% |    +3 | 13.7% → 16.2% | 19 → 22 | `RuboCop::Cop::Commissioner#on_send`                        | `<unknown>`                                                                        |
|  +75.0% |    +3 |   2.9% → 5.1% |   4 → 7 | `RuboCop::AST::NodePattern#initialize`                      | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`                |
|  +75.0% |    +3 |   2.9% → 5.1% |   4 → 7 | `RuboCop::AST::NodePattern::MethodDefiner#def_helper`       | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb` |
|  +37.5% |    +3 |   5.8% → 8.1% |  8 → 11 | `RuboCop::Cop::Commissioner#on_block`                       | `<unknown>`                                                                        |
| +300.0% |    +3 |   0.7% → 2.9% |   1 → 4 | `RuboCop::AST::NodePattern::Parser#parse`                   | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/parser.rb`         |
| +100.0% |    +3 |   2.2% → 4.4% |   3 → 6 | `RuboCop::AST::NodePattern::MethodDefiner#def_node_matcher` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb` |
|     new |    +3 |   0.0% → 2.2% |   0 → 3 | `RuboCop::Cop::StatementModifier#single_line_as_modifier?`  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/statement_modifier.rb`        |
|     new |    +3 |   0.0% → 2.2% |   0 → 3 | `RuboCop::Cop::Style::IfUnlessModifier#message`             | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/if_unless_modifier.rb`        |
|     new |    +3 |   0.0% → 2.2% |   0 → 3 | `block in first_line_comment`                               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/statement_modifier.rb`        |
|     new |    +3 |   0.0% → 2.2% |   0 → 3 | `RuboCop::Cop::StatementModifier#first_line_comment`        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/statement_modifier.rb`        |

##### Native

|  Change | Delta |             % | Samples | Function                                     | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | ----------- |
| +250.0% |    +5 |   1.4% → 5.1% |   2 → 7 | `Enumerable#find [c function]`               | `<unknown>` |
|     new |    +5 |   0.0% → 3.7% |   0 → 5 | `Array#select [c function]`                  | `<unknown>` |
|  +33.3% |    +4 |  8.6% → 11.8% | 12 → 16 | `Enumerable#each_with_index [c function]`    | `<unknown>` |
|  +33.3% |    +2 |   4.3% → 5.9% |   6 → 8 | `Enumerator#each [c function]`               | `<unknown>` |
| +200.0% |    +2 |   0.7% → 2.2% |   1 → 3 | `Thread::Mutex#synchronize [c function]`     | `<unknown>` |
|     new |    +2 |   0.0% → 1.5% |   0 → 2 | `Symbol#start_with? [c function]`            | `<unknown>` |
|     new |    +2 |   0.0% → 1.5% |   0 → 2 | `StringScanner#skip [c function]`            | `<unknown>` |
|   +1.1% |    +1 | 64.0% → 66.2% | 89 → 90 | `Array#each [c function]`                    | `<unknown>` |
|  +50.0% |    +1 |   1.4% → 2.2% |   2 → 3 | `Enumerable#to_a [c function]`               | `<unknown>` |
|   +1.7% |    +1 | 42.4% → 44.1% | 59 → 60 | `Enumerable#flat_map [c function]`           | `<unknown>` |
|  +50.0% |    +1 |   1.4% → 2.2% |   2 → 3 | `Enumerable#map [c function]`                | `<unknown>` |
|   +5.3% |    +1 | 13.7% → 14.7% | 19 → 20 | `Racc::Parser#_racc_do_parse_c [c function]` | `<unknown>` |
| +100.0% |    +1 |   0.7% → 1.5% |   1 → 2 | `Module#append_features [c function]`        | `<unknown>` |
| +100.0% |    +1 |   0.7% → 1.5% |   1 → 2 | `Module#include [c function]`                | `<unknown>` |
|     new |    +1 |   0.0% → 0.7% |   0 → 1 | `Array#<=> [c function]`                     | `<unknown>` |
|     new |    +1 |   0.0% → 0.7% |   0 → 1 | `Symbol#=== [c function]`                    | `<unknown>` |
|     new |    +1 |   0.0% → 0.7% |   0 → 1 | `Enumerable#none? [c function]`              | `<unknown>` |
|     new |    +1 |   0.0% → 0.7% |   0 → 1 | `Kernel#freeze [c function]`                 | `<unknown>` |
|     new |    +1 |   0.0% → 0.7% |   0 → 1 | `Enumerable#reject [c function]`             | `<unknown>` |
|     new |    +1 |   0.0% → 0.7% |   0 → 1 | `Kernel#to_enum [c function]`                | `<unknown>` |

##### Third-party

|  Change | Delta |           % | Samples | Function                                                    | Location                                                                           |
| ------: | ----: | ----------: | ------: | ----------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|  +85.7% |    +6 | 5.0% → 9.6% |  7 → 13 | `RuboCop::AST::NodePattern::Macros#def_node_matcher`        | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`                |
|     new |    +4 | 0.0% → 2.9% |   0 → 4 | `RuboCop::Cop::Style::IfUnlessModifier#on_if`               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/if_unless_modifier.rb`        |
|     new |    +4 | 0.0% → 2.9% |   0 → 4 | `RuboCop::Cop::Util#line`                                   | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/util.rb`                            |
|     new |    +4 | 0.0% → 2.9% |   0 → 4 | `RuboCop::Cop::Util#same_line?`                             | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/util.rb`                            |
|  +75.0% |    +3 | 2.9% → 5.1% |   4 → 7 | `RuboCop::AST::NodePattern#initialize`                      | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`                |
|  +75.0% |    +3 | 2.9% → 5.1% |   4 → 7 | `RuboCop::AST::NodePattern::MethodDefiner#def_helper`       | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb` |
| +300.0% |    +3 | 0.7% → 2.9% |   1 → 4 | `RuboCop::AST::NodePattern::Parser#parse`                   | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/parser.rb`         |
| +100.0% |    +3 | 2.2% → 4.4% |   3 → 6 | `RuboCop::AST::NodePattern::MethodDefiner#def_node_matcher` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb` |
|     new |    +3 | 0.0% → 2.2% |   0 → 3 | `RuboCop::Cop::StatementModifier#single_line_as_modifier?`  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/statement_modifier.rb`        |
|     new |    +3 | 0.0% → 2.2% |   0 → 3 | `RuboCop::Cop::Style::IfUnlessModifier#message`             | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/if_unless_modifier.rb`        |
|     new |    +3 | 0.0% → 2.2% |   0 → 3 | `block in first_line_comment`                               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/statement_modifier.rb`        |
|     new |    +3 | 0.0% → 2.2% |   0 → 3 | `RuboCop::Cop::StatementModifier#first_line_comment`        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/statement_modifier.rb`        |
|     new |    +3 | 0.0% → 2.2% |   0 → 3 | `RuboCop::AST::NodePattern::LexerRex#next_token`            | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/lexer.rex.rb`      |
|  +66.7% |    +2 | 2.2% → 3.7% |   3 → 5 | `Parser::Source::Buffer#line_index_for_position`            | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`                       |
| +200.0% |    +2 | 0.7% → 2.2% |   1 → 3 | `RuboCop::Cop::Base#callbacks_needed`                       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb`                            |
| +200.0% |    +2 | 0.7% → 2.2% |   1 → 3 | `block in build_callbacks`                                  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                    |
| +200.0% |    +2 | 0.7% → 2.2% |   1 → 3 | `RuboCop::Cop::Commissioner#build_callbacks`                | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                    |
| +200.0% |    +2 | 0.7% → 2.2% |   1 → 3 | `RuboCop::Cop::Commissioner#initialize_callbacks`           | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                    |
| +200.0% |    +2 | 0.7% → 2.2% |   1 → 3 | `RuboCop::Cop::Commissioner#initialize`                     | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                    |
|  +22.2% |    +2 | 6.5% → 8.1% |  9 → 11 | `Parser::Base#next_token`                                   | `../bundle/gems/parser-3.3.12.0/lib/parser/base.rb`                                |

##### Unknown

|  Change | Delta |             % | Samples | Function                                                      | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- | ----------- |
|  +62.5% |    +5 |   5.8% → 9.6% |  8 → 13 | `block in on_send`                                            | `<unknown>` |
|  +62.5% |    +5 |   5.8% → 9.6% |  8 → 13 | `RuboCop::AST::Traversal#on_send`                             | `<unknown>` |
|  +14.3% |    +4 | 20.1% → 23.5% | 28 → 32 | `RuboCop::AST::Traversal#on_def`                              | `<unknown>` |
|  +15.8% |    +3 | 13.7% → 16.2% | 19 → 22 | `RuboCop::Cop::Commissioner#on_send`                          | `<unknown>` |
|  +37.5% |    +3 |   5.8% → 8.1% |  8 → 11 | `RuboCop::Cop::Commissioner#on_block`                         | `<unknown>` |
|     new |    +3 |   0.0% → 2.2% |   0 → 3 | `RuboCop::AST::NodePattern::Parser#next_token`                | `<unknown>` |
|  +28.6% |    +2 |   5.0% → 6.6% |   7 → 9 | `RuboCop::AST::Traversal#on_block`                            | `<unknown>` |
|     new |    +2 |   0.0% → 1.5% |   0 → 2 | `RuboCop::Cop::Commissioner#on_and`                           | `<unknown>` |
|     new |    +2 |   0.0% → 1.5% |   0 → 2 | `RuboCop::Cop::Commissioner#on_str`                           | `<unknown>` |
|   +5.3% |    +1 | 13.7% → 14.7% | 19 → 20 | `Racc::Parser#do_parse`                                       | `<unknown>` |
|  +33.3% |    +1 |   2.2% → 2.9% |   3 → 4 | `RuboCop::Cop::Commissioner#on_rescue`                        | `<unknown>` |
|  +10.0% |    +1 |   7.2% → 8.1% | 10 → 11 | `RuboCop::Cop::Commissioner#on_sclass`                        | `<unknown>` |
| +100.0% |    +1 |   0.7% → 1.5% |   1 → 2 | `RuboCop::Cop::Style::ConditionalAssignment#assignment_type?` | `<unknown>` |
|  +50.0% |    +1 |   1.4% → 2.2% |   2 → 3 | `RuboCop::Cop::Commissioner#on_ivasgn`                        | `<unknown>` |
| +100.0% |    +1 |   0.7% → 1.5% |   1 → 2 | `RuboCop::Cop::Commissioner#on_or`                            | `<unknown>` |
|     new |    +1 |   0.0% → 0.7% |   0 → 1 | `RuboCop::AST::Node#proc?`                                    | `<unknown>` |
|     new |    +1 |   0.0% → 0.7% |   0 → 1 | `RuboCop::AST::Node#lambda_or_proc?`                          | `<unknown>` |
|     new |    +1 |   0.0% → 0.7% |   0 → 1 | `RuboCop::Cop::Commissioner#on_resbody`                       | `<unknown>` |
|     new |    +1 |   0.0% → 0.7% |   0 → 1 | `Psych::TreeBuilder#start_mapping`                            | `<unknown>` |
|     new |    +1 |   0.0% → 0.7% |   0 → 1 | `Psych::TreeBuilder#start_sequence`                           | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                               | Location                                                                               |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| +200.0% |    +2 | 0.7% → 2.2% |   1 → 3 | `block in activate_bin_path`                                           | `../lib/ruby/3.4.0/rubygems.rb`                                                        |
| +200.0% |    +2 | 0.7% → 2.2% |   1 → 3 | `Gem.activate_bin_path`                                                | `../lib/ruby/3.4.0/rubygems.rb`                                                        |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `Gem::RequestSet#resolve_current`                                      | `../lib/ruby/3.4.0/rubygems/request_set.rb`                                            |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `Gem.finish_resolve`                                                   | `../lib/ruby/3.4.0/rubygems.rb`                                                        |
| +100.0% |    +1 | 0.7% → 1.5% |   1 → 2 | `Set#initialize`                                                       | `../lib/ruby/3.4.0/set.rb`                                                             |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Gem::Molinillo::DependencyGraph::Vertex#new_vertex_set`               | `../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/dependency_graph/vertex.rb` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Gem::Molinillo::DependencyGraph::Vertex#_path_to?`                    | `../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/dependency_graph/vertex.rb` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Gem::Molinillo::DependencyGraph::Vertex#path_to?`                     | `../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/dependency_graph/vertex.rb` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Gem::Molinillo::DependencyGraph#add_edge`                             | `../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/dependency_graph.rb`        |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `block in add_child_vertex`                                            | `../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/dependency_graph.rb`        |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Gem::Molinillo::DependencyGraph#add_child_vertex`                     | `../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/dependency_graph.rb`        |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `block in require_nested_dependencies_for`                             | `../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/resolution.rb`              |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Gem::Molinillo::Resolver::Resolution#require_nested_dependencies_for` | `../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/resolution.rb`              |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Gem::Molinillo::Resolver::Resolution#activate_new_spec`               | `../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/resolution.rb`              |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Gem::Molinillo::Resolver::Resolution#attempt_to_activate`             | `../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/resolution.rb`              |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Gem::Molinillo::Resolver::Resolution#process_topmost_state`           | `../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/resolution.rb`              |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Gem::Molinillo::Resolver::Resolution#resolve`                         | `../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/resolution.rb`              |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Gem::Molinillo::Resolver#resolve`                                     | `../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/resolver.rb`                |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Gem::Resolver#resolve`                                                | `../lib/ruby/3.4.0/rubygems/resolver.rb`                                               |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Gem::RequestSet#resolve`                                              | `../lib/ruby/3.4.0/rubygems/request_set.rb`                                            |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |   Samples | Function                                             | Location                                                                |
| -----: | ----: | ------------: | --------: | ---------------------------------------------------- | ----------------------------------------------------------------------- |
|  -6.7% |    -8 | 85.6% → 81.6% | 119 → 111 | `(unknown) [c function]`                             | `<unknown>`                                                             |
|  -8.8% |    -5 | 41.0% → 38.2% |   57 → 52 | `RuboCop::Cop::Commissioner#with_cop_error_handling` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`         |
| -11.9% |    -5 | 30.2% → 27.2% |   42 → 37 | `block in trigger_responding_cops`                   | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`         |
| -11.9% |    -5 | 30.2% → 27.2% |   42 → 37 | `RuboCop::Cop::Commissioner#trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`         |
|  -3.6% |    -5 | 98.6% → 97.1% | 137 → 132 | `Kernel#load [c function]`                           | `<unknown>`                                                             |
|  -9.8% |    -4 | 29.5% → 27.2% |   41 → 37 | `block (2 levels) in trigger_responding_cops`        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`         |
| -21.1% |    -4 | 13.7% → 11.0% |   19 → 15 | `RuboCop::Cop::Commissioner#on_if`                   | `<unknown>`                                                             |
|  -3.8% |    -3 | 57.6% → 56.6% |   80 → 77 | `RuboCop::Runner#do_inspection_loop`                 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                   |
|  -3.4% |    -3 | 63.3% → 62.5% |   88 → 85 | `block in run`                                       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                      |
|  -3.4% |    -3 | 63.3% → 62.5% |   88 → 85 | `RuboCop::CLI#profile_if_needed`                     | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                      |
|  -2.2% |    -3 |         99.3% | 138 → 135 | `<main>`                                             | `rubocop`                                                               |
| -50.0% |    -3 |   4.3% → 2.2% |     6 → 3 | `RuboCop::AST::Node#initialize`                      | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`             |
| -50.0% |    -3 |   4.3% → 2.2% |     6 → 3 | `RuboCop::AST::BuilderExtensions#n`                  | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/builder.rb`          |
| -15.0% |    -3 | 14.4% → 12.5% |   20 → 17 | `RuboCop::AST::ProcessedSource#tokenize`             | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb` |
| -14.3% |    -3 | 15.1% → 13.2% |   21 → 18 | `RuboCop::AST::ProcessedSource#parse`                | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb` |
| -14.3% |    -3 | 15.1% → 13.2% |   21 → 18 | `RuboCop::AST::ProcessedSource#initialize`           | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb` |
| -14.3% |    -3 | 15.1% → 13.2% |   21 → 18 | `RuboCop::AST::ProcessedSource.from_file`            | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb` |
| -14.3% |    -3 | 15.1% → 13.2% |   21 → 18 | `RuboCop::Runner#get_processed_source`               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                   |
| -50.0% |    -3 |   4.3% → 2.2% |     6 → 3 | `Parser::Source::Range#source`                       | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`             |
| -75.0% |    -3 |   2.9% → 0.7% |     4 → 1 | `RuboCop::AST::IfNode#keyword`                       | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/if_node.rb`     |

##### Native

|  Change | Delta |             % |   Samples | Function                                      | Location    |
| ------: | ----: | ------------: | --------: | --------------------------------------------- | ----------- |
|   -6.7% |    -8 | 85.6% → 81.6% | 119 → 111 | `(unknown) [c function]`                      | `<unknown>` |
|   -3.6% |    -5 | 98.6% → 97.1% | 137 → 132 | `Kernel#load [c function]`                    | `<unknown>` |
|   -2.5% |    -2 | 58.3% → 58.1% |   81 → 79 | `Enumerable#reduce [c function]`              | `<unknown>` |
|   -4.3% |    -2 | 33.1% → 32.4% |   46 → 44 | `Kernel#require_relative [c function]`        | `<unknown>` |
|   -4.0% |    -2 | 36.0% → 35.3% |   50 → 48 | `Kernel#require [c function]`                 | `<unknown>` |
|   -2.4% |    -1 | 29.5% → 29.4% |   41 → 40 | `Kernel#public_send [c function]`             | `<unknown>` |
|  -14.3% |    -1 |   5.0% → 4.4% |     7 → 6 | `Enumerable#each_cons [c function]`           | `<unknown>` |
|  -33.3% |    -1 |   2.2% → 1.5% |     3 → 2 | `String#index [c function]`                   | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `Regexp#match [c function]`                   | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `String#match [c function]`                   | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `Module#public_instance_methods [c function]` | `<unknown>` |
|  -20.0% |    -1 |   3.6% → 2.9% |     5 → 4 | `Module#class_eval [c function]`              | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `Hash#each_key [c function]`                  | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `Module#attr_accessor [c function]`           | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `Kernel#binding [c function]`                 | `<unknown>` |
|  -16.7% |    -1 |   4.3% → 3.7% |     6 → 5 | `String#[] [c function]`                      | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `String#% [c function]`                       | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `Enumerable#select [c function]`              | `<unknown>` |
|  -20.0% |    -1 |   3.6% → 2.9% |     5 → 4 | `Enumerable#each_slice [c function]`          | `<unknown>` |
|  -33.3% |    -1 |   2.2% → 1.5% |     3 → 2 | `Enumerator#with_object [c function]`         | `<unknown>` |

##### Third-party

|  Change | Delta |             % | Samples | Function                                             | Location                                                                         |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------- | -------------------------------------------------------------------------------- |
|   -8.8% |    -5 | 41.0% → 38.2% | 57 → 52 | `RuboCop::Cop::Commissioner#with_cop_error_handling` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                  |
|  -11.9% |    -5 | 30.2% → 27.2% | 42 → 37 | `block in trigger_responding_cops`                   | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                  |
|  -11.9% |    -5 | 30.2% → 27.2% | 42 → 37 | `RuboCop::Cop::Commissioner#trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                  |
|   -9.8% |    -4 | 29.5% → 27.2% | 41 → 37 | `block (2 levels) in trigger_responding_cops`        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                  |
|   -3.8% |    -3 | 57.6% → 56.6% | 80 → 77 | `RuboCop::Runner#do_inspection_loop`                 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                            |
|   -3.4% |    -3 | 63.3% → 62.5% | 88 → 85 | `block in run`                                       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                               |
|   -3.4% |    -3 | 63.3% → 62.5% | 88 → 85 | `RuboCop::CLI#profile_if_needed`                     | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                               |
|  -50.0% |    -3 |   4.3% → 2.2% |   6 → 3 | `RuboCop::AST::Node#initialize`                      | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                      |
|  -50.0% |    -3 |   4.3% → 2.2% |   6 → 3 | `RuboCop::AST::BuilderExtensions#n`                  | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/builder.rb`                   |
|  -15.0% |    -3 | 14.4% → 12.5% | 20 → 17 | `RuboCop::AST::ProcessedSource#tokenize`             | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb`          |
|  -14.3% |    -3 | 15.1% → 13.2% | 21 → 18 | `RuboCop::AST::ProcessedSource#parse`                | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb`          |
|  -14.3% |    -3 | 15.1% → 13.2% | 21 → 18 | `RuboCop::AST::ProcessedSource#initialize`           | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb`          |
|  -14.3% |    -3 | 15.1% → 13.2% | 21 → 18 | `RuboCop::AST::ProcessedSource.from_file`            | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb`          |
|  -14.3% |    -3 | 15.1% → 13.2% | 21 → 18 | `RuboCop::Runner#get_processed_source`               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                            |
|  -50.0% |    -3 |   4.3% → 2.2% |   6 → 3 | `Parser::Source::Range#source`                       | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`                      |
|  -75.0% |    -3 |   2.9% → 0.7% |   4 → 1 | `RuboCop::AST::IfNode#keyword`                       | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/if_node.rb`              |
| removed |    -3 |   2.2% → 0.0% |   3 → 0 | `RuboCop::AST::IfNode#unless?`                       | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/if_node.rb`              |
| removed |    -3 |   2.2% → 0.0% |   3 → 0 | `RuboCop::Cop::Layout::SpaceBeforeFirstArg#on_send`  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_before_first_arg.rb` |
|  -50.0% |    -2 |   2.9% → 1.5% |   4 → 2 | `block in visit_all_descendants`                     | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`    |
|  -25.0% |    -2 |   5.8% → 4.4% |   8 → 6 | `RuboCop::AST::Descendence#visit_descendants`        | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`    |

##### Unknown

|  Change | Delta |             % | Samples | Function                                     | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | ----------- |
|  -21.1% |    -4 | 13.7% → 11.0% | 19 → 15 | `RuboCop::Cop::Commissioner#on_if`           | `<unknown>` |
|   -6.7% |    -2 | 21.6% → 20.6% | 30 → 28 | `RuboCop::AST::Traversal#on_class`           | `<unknown>` |
|  -28.6% |    -2 |   5.0% → 3.7% |   7 → 5 | `RuboCop::Cop::Commissioner#on_lvasgn`       | `<unknown>` |
|   -4.1% |    -2 | 35.3% → 34.6% | 49 → 47 | `Kernel#require`                             | `<unknown>` |
| removed |    -2 |   1.4% → 0.0% |   2 → 0 | `RuboCop::AST::Traversal#on_optarg`          | `<unknown>` |
| removed |    -2 |   1.4% → 0.0% |   2 → 0 | `RuboCop::Cop::Commissioner#on_optarg`       | `<unknown>` |
| removed |    -2 |   1.4% → 0.0% |   2 → 0 | `RuboCop::Cop::Commissioner#on_args`         | `<unknown>` |
| removed |    -2 |   1.4% → 0.0% |   2 → 0 | `RuboCop::Cop::Commissioner#on_defs`         | `<unknown>` |
|   -2.4% |    -1 | 30.2% → 30.1% | 42 → 41 | `RuboCop::Cop::Commissioner#on_module`       | `<unknown>` |
|   -2.4% |    -1 | 30.2% → 30.1% | 42 → 41 | `block in on_dstr`                           | `<unknown>` |
|   -2.4% |    -1 | 30.2% → 30.1% | 42 → 41 | `RuboCop::AST::Traversal#on_dstr`            | `<unknown>` |
|   -2.4% |    -1 | 30.2% → 30.1% | 42 → 41 | `RuboCop::Cop::Commissioner#on_begin`        | `<unknown>` |
|   -3.2% |    -1 | 22.3% → 22.1% | 31 → 30 | `RuboCop::Cop::Commissioner#on_class`        | `<unknown>` |
|   -2.4% |    -1 | 29.5% → 29.4% | 41 → 40 | `RuboCop::AST::Traversal#on_while`           | `<unknown>` |
|   -8.3% |    -1 |   8.6% → 8.1% | 12 → 11 | `RuboCop::AST::Traversal#on_if`              | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `RuboCop::AST::Traversal#on_op_asgn`         | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `RuboCop::Cop::Commissioner#on_op_asgn`      | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `RuboCop::AST::SendNode#attribute_accessor?` | `<unknown>` |
|  -16.7% |    -1 |   4.3% → 3.7% |   6 → 5 | `RuboCop::AST::Traversal#on_lvasgn`          | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Psych::TreeBuilder#end_mapping`             | `<unknown>` |

##### Standard library

|  Change | Delta |             % | Samples | Function                                           | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | -------------------------------------------------- |
|   -2.3% |    -2 | 63.3% → 63.2% | 88 → 86 | `Benchmark.realtime`                               | `../lib/ruby/3.4.0/benchmark.rb`                   |
| removed |    -2 |   1.4% → 0.0% |   2 → 0 | `Psych::Visitors::ToRuby#visit_Psych_Nodes_Scalar` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`      |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Psych::TreeBuilder#pop`                           | `../lib/ruby/3.4.0/psych/tree_builder.rb`          |
|  -25.0% |    -1 |   2.9% → 2.2% |   4 → 3 | `Psych.safe_load`                                  | `../lib/ruby/3.4.0/psych.rb`                       |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Set#each`                                         | `../lib/ruby/3.4.0/set.rb`                         |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Psych::Nodes::Scalar#initialize`                  | `../lib/ruby/3.4.0/psych/nodes/scalar.rb`          |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Psych::TreeBuilder#scalar`                        | `../lib/ruby/3.4.0/psych/tree_builder.rb`          |
|  -50.0% |    -1 |   1.4% → 0.7% |   2 → 1 | `Gem::Specification.load`                          | `../lib/ruby/3.4.0/rubygems/specification.rb`      |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `block in <module:URI>`                            | `../lib/ruby/3.4.0/uri/common.rb`                  |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Psych::ScalarScanner#tokenize`                    | `../lib/ruby/3.4.0/psych/scalar_scanner.rb`        |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Psych::Visitors::ToRuby#deserialize`              | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`      |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `block in register_empty`                          | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`      |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Psych::Visitors::ToRuby#register_empty`           | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`      |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Gem::StubSpecification#spec`                      | `../lib/ruby/3.4.0/rubygems/stub_specification.rb` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Psych::Visitors::ToRuby#register`                 | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`      |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `ERB::Compiler::SimpleScanner#scan`                | `../lib/ruby/3.4.0/erb/compiler.rb`                |

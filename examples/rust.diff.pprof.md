# CPU profile diff

Took 258.0ms → 176.0ms (-82.0ms, -31.8%) over 89 samples → 68 samples (2.9ms → 2.6ms per sample).

| Category    |  Change |   Delta |             % |              Time | Samples |
| ----------- | ------: | ------: | ------------: | ----------------: | ------: |
| ours        |  -30.1% | -50.0ms | 64.3% → 65.9% | 166.0ms → 116.0ms | 47 → 46 |
| stdlib      |  -34.1% | -31.0ms | 35.3% → 34.1% |   91.0ms → 60.0ms | 41 → 22 |
| third-party | removed |  -1.0ms |   0.4% → 0.0% |       1.0ms → 0ms |   1 → 0 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

| Change |   Delta |           % |         Time | Samples | Function                                                                  | Location                                                                                                                     |
| -----: | ------: | ----------: | -----------: | ------: | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
|    new | +10.0ms | 0.0% → 5.7% | 0ms → 10.0ms |   0 → 6 | `compiler::phases::backend::ir::middle_statement_to_statements`           | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/ir.rs                                                   |
|    new |  +5.0ms | 0.0% → 2.8% |  0ms → 5.0ms |   0 → 3 | `compiler::phases::backend::code_gen::write_statement`                    | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/code_gen.rs                                             |
|    new |  +4.0ms | 0.0% → 2.3% |  0ms → 4.0ms |   0 → 2 | `std::collections::hash::map::HashMap<K,V,S,A>::insert`                   | ../../../../mike/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/collections/hash/map.rs |
|    new |  +3.0ms | 0.0% → 1.7% |  0ms → 3.0ms |   0 → 3 | `compiler::phases::backend::ir::expression_to_value`                      | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/ir.rs                                                   |
|    new |  +2.0ms | 0.0% → 1.1% |  0ms → 2.0ms |   0 → 1 | `<compiler::phases::shared::Type as core::clone::Clone>::clone`           | `<unknown>`                                                                                                                  |
|    new |  +2.0ms | 0.0% → 1.1% |  0ms → 2.0ms |   0 → 2 | `compiler::phases::backend::code_gen::write_expression`                   | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/code_gen.rs                                             |
|    new |  +2.0ms | 0.0% → 1.1% |  0ms → 2.0ms |   0 → 1 | `compiler::phases::frontend::parser::__parse__Module::__reduce43`         | ../../../../mike/code/mikecluck/web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs         |
|    new |  +2.0ms | 0.0% → 1.1% |  0ms → 2.0ms |   0 → 1 | `compiler::phases::frontend::parser::__action271`                         | ../../../../mike/code/mikecluck/web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs         |
|    new |  +1.0ms | 0.0% → 0.6% |  0ms → 1.0ms |   0 → 1 | `compiler::phases::middle_end::type_checking::visit_module_item`          | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/middle_end/type_checking.rs                                     |
|    new |  +1.0ms | 0.0% → 0.6% |  0ms → 1.0ms |   0 → 1 | `compiler::phases::middle_end::name_resolution::Context::find_identifier` | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/middle_end/name_resolution.rs                                   |
|    new |  +1.0ms | 0.0% → 0.6% |  0ms → 1.0ms |   0 → 1 | `compiler::phases::backend::ir::module_item_to_statements`                | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/ir.rs                                                   |

#### Progressions

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |   Delta |           % |            Time | Samples | Function                                                                             | Location                                                                                                             |
| ------: | ------: | ----------: | --------------: | ------: | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
|  -70.6% | -12.0ms | 6.6% → 2.8% |  17.0ms → 5.0ms |   2 → 3 | `compiler::phases::middle_end::name_resolution::resolve_statement`                   | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/middle_end/name_resolution.rs                           |
| removed | -11.0ms | 4.3% → 0.0% |    11.0ms → 0ms |   2 → 0 | `compiler::phases::backend::ir::middle_statement_to_block_or_statement::{{closure}}` | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/ir.rs                                           |
| removed | -11.0ms | 4.3% → 0.0% |    11.0ms → 0ms |   1 → 0 | `compiler::phases::backend::code_gen::visit_statement`                               | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/code_gen.rs                                     |
|  -28.6% |  -6.0ms | 8.1% → 8.5% | 21.0ms → 15.0ms |   1 → 2 | `compiler::phases::frontend::parser::__parse__Module::__reduce40`                    | ../../../../mike/code/mikecluck/web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |
| removed |  -6.0ms | 2.3% → 0.0% |     6.0ms → 0ms |   3 → 0 | `compiler::phases::backend::code_gen::generate_code`                                 | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/code_gen.rs                                     |
| removed |  -5.0ms | 1.9% → 0.0% |     5.0ms → 0ms |   3 → 0 | `compiler::phases::backend::ir::middle_statement_to_block_or_statement`              | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/ir.rs                                           |
|  -62.5% |  -5.0ms | 3.1% → 1.7% |   8.0ms → 3.0ms |       1 | `hashbrown::raw::RawTable<T,A>::reserve`                                             | ../../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs                                                             |
| removed |  -4.0ms | 1.6% → 0.0% |     4.0ms → 0ms |   3 → 0 | `compiler::phases::backend::ir::expression_to_block`                                 | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/ir.rs                                           |
|  -28.6% |  -2.0ms | 2.7% → 2.8% |   7.0ms → 5.0ms |   5 → 4 | `compiler::phases::middle_end::name_resolution::resolve_expression`                  | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/middle_end/name_resolution.rs                           |
| removed |  -2.0ms | 0.8% → 0.0% |     2.0ms → 0ms |   2 → 0 | `compiler::phases::middle_end::type_checking::visit_parameter`                       | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/middle_end/type_checking.rs                             |
|  -66.7% |  -2.0ms | 1.2% → 0.6% |   3.0ms → 1.0ms |   3 → 1 | `compiler::phases::middle_end::type_checking::visit_expression`                      | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/middle_end/type_checking.rs                             |
| removed |  -2.0ms | 0.8% → 0.0% |     2.0ms → 0ms |   2 → 0 | `compiler::phases::middle_end::ir::Identifier::from_source`                          | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/middle_end/ir.rs                                        |
|  -50.0% |  -2.0ms | 1.6% → 1.1% |   4.0ms → 2.0ms |   1 → 2 | `compiler::phases::middle_end::name_resolution::Context::add_and_rename`             | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/middle_end/name_resolution.rs                           |
| removed |  -2.0ms | 0.8% → 0.0% |     2.0ms → 0ms |   2 → 0 | `compiler::phases::backend::code_gen::visit_expression`                              | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/code_gen.rs                                     |
| removed |  -1.0ms | 0.4% → 0.0% |     1.0ms → 0ms |   1 → 0 | `compiler::phases::backend::ir::module_item_to_block_or_statement`                   | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/ir.rs                                           |
|  -33.3% |  -1.0ms | 1.2% → 1.1% |   3.0ms → 2.0ms |       1 | `compiler::phases::backend::run_backend`                                             | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/mod.rs                                          |
|  -50.0% |  -1.0ms | 0.8% → 0.6% |   2.0ms → 1.0ms |   2 → 1 | `compiler::phases::middle_end::name_resolution::resolve_block`                       | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/middle_end/name_resolution.rs                           |
|   -6.3% |  -1.0ms | 6.2% → 8.5% | 16.0ms → 15.0ms |   4 → 3 | `compiler::phases::middle_end::type_checking::visit_statement`                       | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/middle_end/type_checking.rs                             |
| removed |  -1.0ms | 0.4% → 0.0% |     1.0ms → 0ms |   1 → 0 | `hashbrown::map::make_hash`                                                          | ../../../../../rust/deps/hashbrown-0.16.1/src/map.rs                                                                 |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

| Change |   Delta |           % |          Time | Samples | Function                                                          | Location                                                                                                             |
| -----: | ------: | ----------: | ------------: | ------: | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
|    new | +15.0ms | 0.0% → 8.5% |  0ms → 15.0ms |  0 → 11 | `compiler::phases::backend::ir::module_item_to_statements`        | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/ir.rs                                           |
|    new | +15.0ms | 0.0% → 8.5% |  0ms → 15.0ms |  0 → 11 | `compiler::phases::backend::ir::module_to_statements`             | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/ir.rs                                           |
|    new | +14.0ms | 0.0% → 8.0% |  0ms → 14.0ms |  0 → 10 | `compiler::phases::backend::ir::middle_statement_to_statements`   | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/ir.rs                                           |
|    new |  +9.0ms | 0.0% → 5.1% |   0ms → 9.0ms |   0 → 7 | `compiler::phases::backend::code_gen::write_statement`            | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/code_gen.rs                                     |
|    new |  +3.0ms | 0.0% → 1.7% |   0ms → 3.0ms |   0 → 3 | `compiler::phases::backend::ir::expression_to_value`              | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/ir.rs                                           |
|    new |  +3.0ms | 0.0% → 1.7% |   0ms → 3.0ms |   0 → 3 | `compiler::phases::backend::code_gen::write_expression`           | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/code_gen.rs                                     |
|    new |  +2.0ms | 0.0% → 1.1% |   0ms → 2.0ms |   0 → 1 | `<compiler::phases::shared::Type as core::clone::Clone>::clone`   | `<unknown>`                                                                                                          |
|    new |  +2.0ms | 0.0% → 1.1% |   0ms → 2.0ms |   0 → 1 | `compiler::phases::frontend::parser::__parse__Module::__reduce43` | ../../../../mike/code/mikecluck/web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |
|    new |  +2.0ms | 0.0% → 1.1% |   0ms → 2.0ms |   0 → 2 | `compiler::types::interner::Interner::fresh_synthetic`            | ../../../../mike/code/mikecluck/web-lang/compiler/src/types/interner.rs                                              |
|    new |  +2.0ms | 0.0% → 1.1% |   0ms → 2.0ms |   0 → 1 | `compiler::phases::frontend::parser::__action271`                 | ../../../../mike/code/mikecluck/web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |
|    new |  +2.0ms | 0.0% → 1.1% |   0ms → 2.0ms |   0 → 1 | `compiler::phases::frontend::parser::__action300`                 | ../../../../mike/code/mikecluck/web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |
|    new |  +2.0ms | 0.0% → 1.1% |   0ms → 2.0ms |   0 → 1 | `compiler::phases::frontend::parser::__parse__Module::__reduce82` | ../../../../mike/code/mikecluck/web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |
| +14.3% |  +1.0ms | 2.7% → 4.5% | 7.0ms → 8.0ms |   3 → 4 | `hashbrown::raw::Bucket<T>::drop`                                 | ../../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs                                                             |
| +14.3% |  +1.0ms | 2.7% → 4.5% | 7.0ms → 8.0ms |   3 → 4 | `hashbrown::raw::RawTableInner::drop_elements`                    | ../../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs                                                             |
| +14.3% |  +1.0ms | 2.7% → 4.5% | 7.0ms → 8.0ms |   3 → 4 | `hashbrown::raw::RawTableInner::drop_inner_table`                 | ../../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs                                                             |
| +14.3% |  +1.0ms | 2.7% → 4.5% | 7.0ms → 8.0ms |   3 → 4 | `<hashbrown::raw::RawTable<T,A> as core::ops::drop::Drop>::drop`  | ../../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs                                                             |

#### Progressions

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |   Delta |             % |              Time | Samples | Function                                                                             | Location                                                                                                             |
| ------: | ------: | ------------: | ----------------: | ------: | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
|  -31.8% | -82.0ms |        100.0% | 258.0ms → 176.0ms | 89 → 68 | `compiler::main`                                                                     | ../../../../mike/code/mikecluck/web-lang/compiler/src/main.rs                                                        |
|  -57.1% | -44.0ms | 29.8% → 18.8% |   77.0ms → 33.0ms | 38 → 24 | `compiler::phases::backend::run_backend`                                             | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/mod.rs                                          |
|  -50.7% | -34.0ms | 26.0% → 18.8% |   67.0ms → 33.0ms | 23 → 17 | `compiler::phases::middle_end::name_resolution::resolve_statement`                   | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/middle_end/name_resolution.rs                           |
|  -50.7% | -34.0ms | 26.0% → 18.8% |   67.0ms → 33.0ms | 23 → 17 | `compiler::phases::middle_end::name_resolution::resolve_module_item`                 | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/middle_end/name_resolution.rs                           |
|  -50.7% | -34.0ms | 26.0% → 18.8% |   67.0ms → 33.0ms | 23 → 17 | `compiler::phases::middle_end::name_resolution::resolve_module`                      | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/middle_end/name_resolution.rs                           |
|  -50.7% | -34.0ms | 26.0% → 18.8% |   67.0ms → 33.0ms | 23 → 17 | `compiler::phases::middle_end::name_resolution::resolve_names`                       | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/middle_end/name_resolution.rs                           |
|  -35.1% | -34.0ms | 37.6% → 35.8% |   97.0ms → 63.0ms | 37 → 28 | `compiler::phases::middle_end::run_middle_end`                                       | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/middle_end/mod.rs                                       |
|  -66.7% | -32.0ms |  18.6% → 9.1% |   48.0ms → 16.0ms | 23 → 12 | `compiler::phases::backend::code_gen::generate_code`                                 | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/code_gen.rs                                     |
| removed | -25.0ms |   9.7% → 0.0% |      25.0ms → 0ms |  13 → 0 | `compiler::phases::backend::ir::module_item_to_block_or_statement`                   | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/ir.rs                                           |
| removed | -25.0ms |   9.7% → 0.0% |      25.0ms → 0ms |  13 → 0 | `compiler::phases::backend::ir::module_to_basic_block`                               | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/ir.rs                                           |
| removed | -24.0ms |   9.3% → 0.0% |      24.0ms → 0ms |  12 → 0 | `compiler::phases::backend::ir::middle_statement_to_block_or_statement`              | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/ir.rs                                           |
| removed | -21.0ms |   8.1% → 0.0% |      21.0ms → 0ms |   9 → 0 | `compiler::phases::backend::ir::middle_statement_to_block_or_statement::{{closure}}` | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/ir.rs                                           |
| removed | -19.0ms |   7.4% → 0.0% |      19.0ms → 0ms |   9 → 0 | `compiler::phases::backend::code_gen::visit_statement`                               | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/code_gen.rs                                     |
|  -42.3% | -11.0ms |  10.1% → 8.5% |   26.0ms → 15.0ms | 14 → 11 | `compiler::phases::backend::ir::from_middle_end`                                     | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/ir.rs                                           |
| removed |  -8.0ms |   3.1% → 0.0% |       8.0ms → 0ms |   5 → 0 | `<compiler::phases::middle_end::ir::ExpressionKind as core::clone::Clone>::clone`    | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/middle_end/ir.rs                                        |
| removed |  -8.0ms |   3.1% → 0.0% |       8.0ms → 0ms |   5 → 0 | `<compiler::phases::middle_end::ir::Expression as core::clone::Clone>::clone`        | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/middle_end/ir.rs                                        |
|  -28.6% |  -6.0ms |   8.1% → 8.5% |   21.0ms → 15.0ms |   1 → 2 | `compiler::phases::frontend::parser::__parse__Module::__reduce40`                    | ../../../../mike/code/mikecluck/web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |
|  -25.0% |  -6.0ms |  9.3% → 10.2% |   24.0ms → 18.0ms | 11 → 13 | `compiler::phases::middle_end::name_resolution::resolve_block`                       | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/middle_end/name_resolution.rs                           |
|  -66.7% |  -6.0ms |   3.5% → 1.7% |     9.0ms → 3.0ms |   2 → 1 | `hashbrown::map::HashMap<K,V,S,A>::insert`                                           | ../../../../../rust/deps/hashbrown-0.16.1/src/map.rs                                                                 |
| removed |  -5.0ms |   1.9% → 0.0% |       5.0ms → 0ms |   4 → 0 | `compiler::phases::backend::ir::expression_to_block`                                 | ../../../../mike/code/mikecluck/web-lang/compiler/src/phases/backend/ir.rs                                           |

# CPU profile

Took 176.0ms over 68 samples (2.6ms per sample).

| Category |     % |    Time | Samples |
| -------- | ----: | ------: | ------: |
| ours     | 93.2% | 164.0ms |      62 |
| stdlib   |  6.8% |  12.0ms |       6 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |   Time | Samples | Function                                                                 | Location                                                                                                          |
| ----: | -----: | ------: | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 18.8% | 33.0ms |       8 | `compiler::phases::frontend::parser::__parse__Module::__reduce`          | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs                              |
| 10.8% | 19.0ms |       1 | `alloc::raw_vec::RawVec<T,A>::grow_one`                                  | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/raw_vec/mod.rs        |
|  9.1% | 16.0ms |       5 | `alloc::raw_vec::RawVecInner<A>::grow_amortized`                         | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/raw_vec/mod.rs        |
|  8.5% | 15.0ms |       2 | `compiler::phases::frontend::parser::__parse__Module::__reduce40`        | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs                              |
|  8.5% | 15.0ms |       3 | `compiler::phases::middle_end::type_checking::visit_statement`           | web-lang/compiler/src/phases/middle_end/type_checking.rs                                                          |
|  5.7% | 10.0ms |       6 | `compiler::phases::backend::ir::middle_statement_to_statements`          | web-lang/compiler/src/phases/backend/ir.rs                                                                        |
|  4.0% |  7.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce78`        | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs                              |
|  2.8% |  5.0ms |       3 | `compiler::phases::middle_end::name_resolution::resolve_statement`       | web-lang/compiler/src/phases/middle_end/name_resolution.rs                                                        |
|  2.8% |  5.0ms |       3 | `compiler::phases::backend::code_gen::write_statement`                   | web-lang/compiler/src/phases/backend/code_gen.rs                                                                  |
|  2.8% |  5.0ms |       4 | `compiler::phases::middle_end::name_resolution::resolve_expression`      | web-lang/compiler/src/phases/middle_end/name_resolution.rs                                                        |
|  2.3% |  4.0ms |       2 | `core::ptr::drop_in_place<compiler::phases::backend::ir::Statement>`     | `<unknown>`                                                                                                       |
|  2.3% |  4.0ms |       2 | `std::collections::hash::map::HashMap<K,V,S,A>::insert`                  | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/collections/hash/map.rs |
|  1.7% |  3.0ms |       3 | `compiler::phases::backend::ir::expression_to_value`                     | web-lang/compiler/src/phases/backend/ir.rs                                                                        |
|  1.7% |  3.0ms |       1 | `hashbrown::raw::RawTable<T,A>::reserve`                                 | ../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs                                                             |
|  1.1% |  2.0ms |       1 | `compiler::phases::backend::run_backend`                                 | web-lang/compiler/src/phases/backend/mod.rs                                                                       |
|  1.1% |  2.0ms |       2 | `compiler::phases::middle_end::name_resolution::Context::add_and_rename` | web-lang/compiler/src/phases/middle_end/name_resolution.rs                                                        |
|  1.1% |  2.0ms |       2 | `core::ptr::drop_in_place<[compiler::phases::backend::ir::Statement]>`   | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/ptr/mod.rs             |
|  1.1% |  2.0ms |       1 | `<compiler::phases::shared::Type as core::clone::Clone>::clone`          | `<unknown>`                                                                                                       |
|  1.1% |  2.0ms |       2 | `compiler::phases::backend::code_gen::write_expression`                  | web-lang/compiler/src/phases/backend/code_gen.rs                                                                  |
|  1.1% |  2.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce43`        | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs                              |

#### Lines

Lines ranked by contribution to each function's self time.

##### `compiler::phases::frontend::parser::__parse__Module::__reduce` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs)

|      % |   Time | Samples | Location                                                                                  |
| -----: | -----: | ------: | ----------------------------------------------------------------------------------------- |
| 100.0% | 33.0ms |       8 | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs:2906 |

##### `alloc::raw_vec::RawVec<T,A>::grow_one` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/raw_vec/mod.rs)

|      % |   Time | Samples | Location                                                                                                       |
| -----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------- |
| 100.0% | 19.0ms |       1 | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/raw_vec/mod.rs:188 |

##### `alloc::raw_vec::RawVecInner<A>::grow_amortized` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/raw_vec/mod.rs)

|      % |   Time | Samples | Location                                                                                                       |
| -----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------- |
| 100.0% | 16.0ms |       5 | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/raw_vec/mod.rs:527 |

##### `compiler::phases::frontend::parser::__parse__Module::__reduce40` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs)

|      % |   Time | Samples | Location                                                                                  |
| -----: | -----: | ------: | ----------------------------------------------------------------------------------------- |
| 100.0% | 15.0ms |       2 | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs:4527 |

##### `compiler::phases::middle_end::type_checking::visit_statement` (web-lang/compiler/src/phases/middle_end/type_checking.rs)

|      % |   Time | Samples | Location                                                     |
| -----: | -----: | ------: | ------------------------------------------------------------ |
| 100.0% | 15.0ms |       3 | web-lang/compiler/src/phases/middle_end/type_checking.rs:173 |

##### `compiler::phases::backend::ir::middle_statement_to_statements` (web-lang/compiler/src/phases/backend/ir.rs)

|      % |   Time | Samples | Location                                      |
| -----: | -----: | ------: | --------------------------------------------- |
| 100.0% | 10.0ms |       6 | web-lang/compiler/src/phases/backend/ir.rs:86 |

##### `compiler::phases::frontend::parser::__parse__Module::__reduce78` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs)

|      % |  Time | Samples | Location                                                                                  |
| -----: | ----: | ------: | ----------------------------------------------------------------------------------------- |
| 100.0% | 7.0ms |       1 | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs:5241 |

##### `compiler::phases::middle_end::name_resolution::resolve_statement` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|      % |  Time | Samples | Location                                                       |
| -----: | ----: | ------: | -------------------------------------------------------------- |
| 100.0% | 5.0ms |       3 | web-lang/compiler/src/phases/middle_end/name_resolution.rs:309 |

##### `compiler::phases::backend::code_gen::write_statement` (web-lang/compiler/src/phases/backend/code_gen.rs)

|      % |  Time | Samples | Location                                            |
| -----: | ----: | ------: | --------------------------------------------------- |
| 100.0% | 5.0ms |       3 | web-lang/compiler/src/phases/backend/code_gen.rs:99 |

##### `compiler::phases::middle_end::name_resolution::resolve_expression` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|      % |  Time | Samples | Location                                                       |
| -----: | ----: | ------: | -------------------------------------------------------------- |
| 100.0% | 5.0ms |       4 | web-lang/compiler/src/phases/middle_end/name_resolution.rs:454 |

##### `core::ptr::drop_in_place<compiler::phases::backend::ir::Statement>` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 4.0ms |       2 | 0        |

##### `std::collections::hash::map::HashMap<K,V,S,A>::insert` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/collections/hash/map.rs)

|      % |  Time | Samples | Location                                                                                                               |
| -----: | ----: | ------: | ---------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 4.0ms |       2 | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/collections/hash/map.rs:1296 |

##### `compiler::phases::backend::ir::expression_to_value` (web-lang/compiler/src/phases/backend/ir.rs)

|      % |  Time | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 3.0ms |       3 | web-lang/compiler/src/phases/backend/ir.rs:214 |

##### `hashbrown::raw::RawTable<T,A>::reserve` (../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs)

|      % |  Time | Samples | Location                                                  |
| -----: | ----: | ------: | --------------------------------------------------------- |
| 100.0% | 3.0ms |       1 | ../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs:962 |

##### `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)

|      % |  Time | Samples | Location                                      |
| -----: | ----: | ------: | --------------------------------------------- |
| 100.0% | 2.0ms |       1 | web-lang/compiler/src/phases/backend/mod.rs:9 |

##### `compiler::phases::middle_end::name_resolution::Context::add_and_rename` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|      % |  Time | Samples | Location                                                       |
| -----: | ----: | ------: | -------------------------------------------------------------- |
| 100.0% | 2.0ms |       2 | web-lang/compiler/src/phases/middle_end/name_resolution.rs:118 |

##### `core::ptr::drop_in_place<[compiler::phases::backend::ir::Statement]>` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/ptr/mod.rs)

|      % |  Time | Samples | Location                                                                                                  |
| -----: | ----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.0ms |       2 | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/ptr/mod.rs:805 |

##### `<compiler::phases::shared::Type as core::clone::Clone>::clone` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.0ms |       1 | 0        |

##### `compiler::phases::backend::code_gen::write_expression` (web-lang/compiler/src/phases/backend/code_gen.rs)

|      % |  Time | Samples | Location                                             |
| -----: | ----: | ------: | ---------------------------------------------------- |
| 100.0% | 2.0ms |       2 | web-lang/compiler/src/phases/backend/code_gen.rs:203 |

##### `compiler::phases::frontend::parser::__parse__Module::__reduce43` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs)

|      % |  Time | Samples | Location                                                                                  |
| -----: | ----: | ------: | ----------------------------------------------------------------------------------------- |
| 100.0% | 2.0ms |       1 | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs:4587 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `compiler::phases::frontend::parser::__parse__Module::__reduce` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs)

|      % |   Time | Samples | Caller                                                                                                                           | Location                                                                             |
| -----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 33.0ms |       8 | `<compiler::phases::frontend::parser::__parse__Module::__StateMachine as lalrpop_util::state_machine::ParserDefinition>::reduce` | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |

##### `alloc::raw_vec::RawVec<T,A>::grow_one` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/raw_vec/mod.rs)

|      % |   Time | Samples | Caller                           | Location                                                                                               |
| -----: | -----: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 19.0ms |       1 | `alloc::vec::Vec<T,A>::push_mut` | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/vec/mod.rs |

##### `alloc::raw_vec::RawVecInner<A>::grow_amortized` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/raw_vec/mod.rs)

|     % |   Time | Samples | Caller                                                           | Location                                                                                                   |
| ----: | -----: | ------: | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 87.5% | 14.0ms |       3 | `alloc::raw_vec::RawVecInner<A>::grow_one`                       | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/raw_vec/mod.rs |
| 12.5% |  2.0ms |       2 | `alloc::raw_vec::RawVecInner<A>::reserve::do_reserve_and_handle` | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/raw_vec/mod.rs |

##### `compiler::phases::frontend::parser::__parse__Module::__reduce40` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs)

|      % |   Time | Samples | Caller                                                          | Location                                                                             |
| -----: | -----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 15.0ms |       2 | `compiler::phases::frontend::parser::__parse__Module::__reduce` | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |

##### `compiler::phases::middle_end::type_checking::visit_statement` (web-lang/compiler/src/phases/middle_end/type_checking.rs)

|     % |  Time | Samples | Caller                                                           | Location                                                 |
| ----: | ----: | ------: | ---------------------------------------------------------------- | -------------------------------------------------------- |
| 53.3% | 8.0ms |       2 | `compiler::phases::middle_end::type_checking::visit_module_item` | web-lang/compiler/src/phases/middle_end/type_checking.rs |
| 46.7% | 7.0ms |       1 | `compiler::phases::middle_end::type_checking::visit_statement`   | web-lang/compiler/src/phases/middle_end/type_checking.rs |

##### `compiler::phases::backend::ir::middle_statement_to_statements` (web-lang/compiler/src/phases/backend/ir.rs)

|     % |  Time | Samples | Caller                                                          | Location                                   |
| ----: | ----: | ------: | --------------------------------------------------------------- | ------------------------------------------ |
| 70.0% | 7.0ms |       4 | `compiler::phases::backend::ir::middle_statement_to_statements` | web-lang/compiler/src/phases/backend/ir.rs |
| 30.0% | 3.0ms |       2 | `compiler::phases::backend::ir::module_item_to_statements`      | web-lang/compiler/src/phases/backend/ir.rs |

##### `compiler::phases::frontend::parser::__parse__Module::__reduce78` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs)

|      % |  Time | Samples | Caller                                                          | Location                                                                             |
| -----: | ----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 7.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce` | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |

##### `compiler::phases::middle_end::name_resolution::resolve_statement` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|     % |  Time | Samples | Caller                                                             | Location                                                   |
| ----: | ----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------- |
| 80.0% | 4.0ms |       2 | `compiler::phases::middle_end::name_resolution::resolve_block`     | web-lang/compiler/src/phases/middle_end/name_resolution.rs |
| 20.0% | 1.0ms |       1 | `compiler::phases::middle_end::name_resolution::resolve_statement` | web-lang/compiler/src/phases/middle_end/name_resolution.rs |

##### `compiler::phases::backend::code_gen::write_statement` (web-lang/compiler/src/phases/backend/code_gen.rs)

|     % |  Time | Samples | Caller                                                 | Location                                         |
| ----: | ----: | ------: | ------------------------------------------------------ | ------------------------------------------------ |
| 80.0% | 4.0ms |       2 | `compiler::phases::backend::code_gen::generate_code`   | web-lang/compiler/src/phases/backend/code_gen.rs |
| 20.0% | 1.0ms |       1 | `compiler::phases::backend::code_gen::write_statement` | web-lang/compiler/src/phases/backend/code_gen.rs |

##### `compiler::phases::middle_end::name_resolution::resolve_expression` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|      % |  Time | Samples | Caller                                                             | Location                                                   |
| -----: | ----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------- |
| 100.0% | 5.0ms |       4 | `compiler::phases::middle_end::name_resolution::resolve_statement` | web-lang/compiler/src/phases/middle_end/name_resolution.rs |

##### `core::ptr::drop_in_place<compiler::phases::backend::ir::Statement>` (`<unknown>`)

|     % |  Time | Samples | Caller                                                                 | Location                                                                                              |
| ----: | ----: | ------: | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 75.0% | 3.0ms |       1 | `core::ptr::drop_in_place<[compiler::phases::backend::ir::Statement]>` | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/ptr/mod.rs |
| 25.0% | 1.0ms |       1 | `core::ptr::drop_in_place<compiler::phases::backend::ir::Statement>`   | `<unknown>`                                                                                           |

##### `std::collections::hash::map::HashMap<K,V,S,A>::insert` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/collections/hash/map.rs)

|      % |  Time | Samples | Caller                                                  | Location                                    |
| -----: | ----: | ------: | ------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 4.0ms |       2 | `compiler::types::symbol_table::SymbolTable::set_value` | web-lang/compiler/src/types/symbol_table.rs |

##### `compiler::phases::backend::ir::expression_to_value` (web-lang/compiler/src/phases/backend/ir.rs)

|     % |  Time | Samples | Caller                                                          | Location                                   |
| ----: | ----: | ------: | --------------------------------------------------------------- | ------------------------------------------ |
| 66.7% | 2.0ms |       2 | `compiler::phases::backend::ir::middle_statement_to_statements` | web-lang/compiler/src/phases/backend/ir.rs |
| 33.3% | 1.0ms |       1 | `compiler::phases::backend::ir::expression_to_value`            | web-lang/compiler/src/phases/backend/ir.rs |

##### `hashbrown::raw::RawTable<T,A>::reserve` (../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs)

|      % |  Time | Samples | Caller                                                     | Location                                              |
| -----: | ----: | ------: | ---------------------------------------------------------- | ----------------------------------------------------- |
| 100.0% | 3.0ms |       1 | `hashbrown::raw::RawTable<T,A>::find_or_find_insert_index` | ../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs |

##### `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)

|      % |  Time | Samples | Caller           | Location                      |
| -----: | ----: | ------: | ---------------- | ----------------------------- |
| 100.0% | 2.0ms |       1 | `compiler::main` | web-lang/compiler/src/main.rs |

##### `compiler::phases::middle_end::name_resolution::Context::add_and_rename` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|      % |  Time | Samples | Caller                                                             | Location                                                   |
| -----: | ----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------- |
| 100.0% | 2.0ms |       2 | `compiler::phases::middle_end::name_resolution::resolve_statement` | web-lang/compiler/src/phases/middle_end/name_resolution.rs |

##### `core::ptr::drop_in_place<[compiler::phases::backend::ir::Statement]>` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/ptr/mod.rs)

|      % |  Time | Samples | Caller                                                  | Location                                                                                               |
| -----: | ----: | ------: | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 2.0ms |       2 | `<alloc::vec::Vec<T,A> as core::ops::drop::Drop>::drop` | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/vec/mod.rs |

##### `<compiler::phases::shared::Type as core::clone::Clone>::clone` (`<unknown>`)

|      % |  Time | Samples | Caller                                                         | Location                                                 |
| -----: | ----: | ------: | -------------------------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 2.0ms |       1 | `compiler::phases::middle_end::type_checking::visit_statement` | web-lang/compiler/src/phases/middle_end/type_checking.rs |

##### `compiler::phases::backend::code_gen::write_expression` (web-lang/compiler/src/phases/backend/code_gen.rs)

|     % |  Time | Samples | Caller                                                  | Location                                         |
| ----: | ----: | ------: | ------------------------------------------------------- | ------------------------------------------------ |
| 50.0% | 1.0ms |       1 | `compiler::phases::backend::code_gen::write_expression` | web-lang/compiler/src/phases/backend/code_gen.rs |
| 50.0% | 1.0ms |       1 | `compiler::phases::backend::code_gen::write_statement`  | web-lang/compiler/src/phases/backend/code_gen.rs |

##### `compiler::phases::frontend::parser::__parse__Module::__reduce43` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs)

|      % |  Time | Samples | Caller                                                          | Location                                                                             |
| -----: | ----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 2.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce` | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function                                                                                                                                                        | Location                                                                                                   |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 100.0% | 176.0ms |      68 | `compiler::main`                                                                                                                                                | web-lang/compiler/src/main.rs                                                                              |
| 100.0% | 176.0ms |      68 | `core::ops::function::FnOnce::call_once`                                                                                                                        | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/ops/function.rs |
| 100.0% | 176.0ms |      68 | `std::sys::backtrace::__rust_begin_short_backtrace`                                                                                                             | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/sys/backtrace.rs |
| 100.0% | 176.0ms |      68 | `std::rt::lang_start::{{closure}}`                                                                                                                              | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/rt.rs            |
| 100.0% | 176.0ms |      68 | `<&dyn core::ops::function::Fn<(), Output = i32> + core::panic::unwind_safe::RefUnwindSafe + core::marker::Sync as core::ops::function::FnOnce<()>>::call_once` | ../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ops/function.rs                |
| 100.0% | 176.0ms |      68 | `std::panicking::catch_unwind::do_call::<&dyn core::ops::function::Fn<(), Output = i32> + core::panic::unwind_safe::RefUnwindSafe + core::marker::Sync, i32>`   | ../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/panicking.rs                    |
| 100.0% | 176.0ms |      68 | `std::panicking::catch_unwind::<i32, &dyn core::ops::function::Fn<(), Output = i32> + core::panic::unwind_safe::RefUnwindSafe + core::marker::Sync>`            | ../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/panicking.rs                    |
| 100.0% | 176.0ms |      68 | `std::panic::catch_unwind::<&dyn core::ops::function::Fn<(), Output = i32> + core::panic::unwind_safe::RefUnwindSafe + core::marker::Sync, i32>`                | ../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/panic.rs                        |
| 100.0% | 176.0ms |      68 | `std::rt::lang_start_internal::{closure#0}`                                                                                                                     | ../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/rt.rs                           |
| 100.0% | 176.0ms |      68 | `std::panicking::catch_unwind::do_call::<std::rt::lang_start_internal::{closure#0}, isize>`                                                                     | ../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/panicking.rs                    |
| 100.0% | 176.0ms |      68 | `std::panicking::catch_unwind::<isize, std::rt::lang_start_internal::{closure#0}>`                                                                              | ../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/panicking.rs                    |
| 100.0% | 176.0ms |      68 | `std::panic::catch_unwind::<std::rt::lang_start_internal::{closure#0}, isize>`                                                                                  | ../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/panic.rs                        |
| 100.0% | 176.0ms |      68 | `std::rt::lang_start_internal`                                                                                                                                  | ../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/rt.rs                           |
|  44.9% |  79.0ms |      15 | `compiler::phases::frontend::parser::__parse__Module::__reduce`                                                                                                 | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs                       |
|  44.9% |  79.0ms |      15 | `<compiler::phases::frontend::parser::__parse__Module::__StateMachine as lalrpop_util::state_machine::ParserDefinition>::reduce`                                | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs                       |
|  44.9% |  79.0ms |      15 | `lalrpop_util::state_machine::Parser<D,I>::reduce`                                                                                                              | ../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs        |
|  44.9% |  79.0ms |      15 | `lalrpop_util::state_machine::Parser<D,I>::parse`                                                                                                               | ../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs        |
|  44.9% |  79.0ms |      15 | `lalrpop_util::state_machine::Parser<D,I>::drive`                                                                                                               | ../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs        |
|  44.9% |  79.0ms |      15 | `compiler::phases::frontend::parser::__parse__Module::ModuleParser::parse`                                                                                      | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs                       |
|  44.9% |  79.0ms |      15 | `compiler::phases::frontend::Program::parse_module`                                                                                                             | web-lang/compiler/src/phases/frontend/mod.rs                                                               |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `compiler::main` (web-lang/compiler/src/main.rs)

|     % |   Time | Samples | Callee                                         | Location                                                                                        |
| ----: | -----: | ------: | ---------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 44.9% | 79.0ms |      15 | `compiler::phases::frontend::run_frontend`     | web-lang/compiler/src/phases/frontend/mod.rs                                                    |
| 35.8% | 63.0ms |      28 | `compiler::phases::middle_end::run_middle_end` | web-lang/compiler/src/phases/middle_end/mod.rs                                                  |
| 18.8% | 33.0ms |      24 | `compiler::phases::backend::run_backend`       | web-lang/compiler/src/phases/backend/mod.rs                                                     |
|  0.6% |  1.0ms |       1 | `std::fs::write`                               | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/fs.rs |

##### `core::ops::function::FnOnce::call_once` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/ops/function.rs)

|      % |    Time | Samples | Callee           | Location                      |
| -----: | ------: | ------: | ---------------- | ----------------------------- |
| 100.0% | 176.0ms |      68 | `compiler::main` | web-lang/compiler/src/main.rs |

##### `std::sys::backtrace::__rust_begin_short_backtrace` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/sys/backtrace.rs)

|      % |    Time | Samples | Callee                                   | Location                                                                                                   |
| -----: | ------: | ------: | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 100.0% | 176.0ms |      68 | `core::ops::function::FnOnce::call_once` | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/ops/function.rs |

##### `std::rt::lang_start::{{closure}}` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/rt.rs)

|      % |    Time | Samples | Callee                                              | Location                                                                                                   |
| -----: | ------: | ------: | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 100.0% | 176.0ms |      68 | `std::sys::backtrace::__rust_begin_short_backtrace` | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/sys/backtrace.rs |

##### `<&dyn core::ops::function::Fn<(), Output = i32> + core::panic::unwind_safe::RefUnwindSafe + core::marker::Sync as core::ops::function::FnOnce<()>>::call_once` (../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ops/function.rs)

|      % |    Time | Samples | Callee                             | Location                                                                                        |
| -----: | ------: | ------: | ---------------------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% | 176.0ms |      68 | `std::rt::lang_start::{{closure}}` | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/rt.rs |

##### `std::panicking::catch_unwind::do_call::<&dyn core::ops::function::Fn<(), Output = i32> + core::panic::unwind_safe::RefUnwindSafe + core::marker::Sync, i32>` (../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/panicking.rs)

|      % |    Time | Samples | Callee                                                                                                                                                          | Location                                                                                    |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 176.0ms |      68 | `<&dyn core::ops::function::Fn<(), Output = i32> + core::panic::unwind_safe::RefUnwindSafe + core::marker::Sync as core::ops::function::FnOnce<()>>::call_once` | ../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ops/function.rs |

##### `std::panicking::catch_unwind::<i32, &dyn core::ops::function::Fn<(), Output = i32> + core::panic::unwind_safe::RefUnwindSafe + core::marker::Sync>` (../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/panicking.rs)

|      % |    Time | Samples | Callee                                                                                                                                                        | Location                                                                                |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 176.0ms |      68 | `std::panicking::catch_unwind::do_call::<&dyn core::ops::function::Fn<(), Output = i32> + core::panic::unwind_safe::RefUnwindSafe + core::marker::Sync, i32>` | ../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/panicking.rs |

##### `std::panic::catch_unwind::<&dyn core::ops::function::Fn<(), Output = i32> + core::panic::unwind_safe::RefUnwindSafe + core::marker::Sync, i32>` (../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/panic.rs)

|      % |    Time | Samples | Callee                                                                                                                                               | Location                                                                                |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 176.0ms |      68 | `std::panicking::catch_unwind::<i32, &dyn core::ops::function::Fn<(), Output = i32> + core::panic::unwind_safe::RefUnwindSafe + core::marker::Sync>` | ../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/panicking.rs |

##### `std::rt::lang_start_internal::{closure#0}` (../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/rt.rs)

|      % |    Time | Samples | Callee                                                                                                                                           | Location                                                                            |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| 100.0% | 176.0ms |      68 | `std::panic::catch_unwind::<&dyn core::ops::function::Fn<(), Output = i32> + core::panic::unwind_safe::RefUnwindSafe + core::marker::Sync, i32>` | ../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/panic.rs |

##### `std::panicking::catch_unwind::do_call::<std::rt::lang_start_internal::{closure#0}, isize>` (../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/panicking.rs)

|      % |    Time | Samples | Callee                                      | Location                                                                         |
| -----: | ------: | ------: | ------------------------------------------- | -------------------------------------------------------------------------------- |
| 100.0% | 176.0ms |      68 | `std::rt::lang_start_internal::{closure#0}` | ../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/rt.rs |

##### `std::panicking::catch_unwind::<isize, std::rt::lang_start_internal::{closure#0}>` (../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/panicking.rs)

|      % |    Time | Samples | Callee                                                                                      | Location                                                                                |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 176.0ms |      68 | `std::panicking::catch_unwind::do_call::<std::rt::lang_start_internal::{closure#0}, isize>` | ../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/panicking.rs |

##### `std::panic::catch_unwind::<std::rt::lang_start_internal::{closure#0}, isize>` (../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/panic.rs)

|      % |    Time | Samples | Callee                                                                             | Location                                                                                |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 176.0ms |      68 | `std::panicking::catch_unwind::<isize, std::rt::lang_start_internal::{closure#0}>` | ../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/panicking.rs |

##### `std::rt::lang_start_internal` (../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/rt.rs)

|      % |    Time | Samples | Callee                                                                         | Location                                                                            |
| -----: | ------: | ------: | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| 100.0% | 176.0ms |      68 | `std::panic::catch_unwind::<std::rt::lang_start_internal::{closure#0}, isize>` | ../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/panic.rs |

##### `compiler::phases::frontend::parser::__parse__Module::__reduce` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs)

|     % |   Time | Samples | Callee                                                             | Location                                                                             |
| ----: | -----: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| 24.1% | 19.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce153` | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |
| 19.0% | 15.0ms |       2 | `compiler::phases::frontend::parser::__parse__Module::__reduce40`  | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |
|  8.9% |  7.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce78`  | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |
|  2.5% |  2.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce43`  | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |
|  2.5% |  2.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce82`  | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |

##### `<compiler::phases::frontend::parser::__parse__Module::__StateMachine as lalrpop_util::state_machine::ParserDefinition>::reduce` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs)

|      % |   Time | Samples | Callee                                                          | Location                                                                             |
| -----: | -----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 79.0ms |      15 | `compiler::phases::frontend::parser::__parse__Module::__reduce` | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |

##### `lalrpop_util::state_machine::Parser<D,I>::reduce` (../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs)

|      % |   Time | Samples | Callee                                                                                                                           | Location                                                                             |
| -----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 79.0ms |      15 | `<compiler::phases::frontend::parser::__parse__Module::__StateMachine as lalrpop_util::state_machine::ParserDefinition>::reduce` | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |

##### `lalrpop_util::state_machine::Parser<D,I>::parse` (../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs)

|      % |   Time | Samples | Callee                                             | Location                                                                                            |
| -----: | -----: | ------: | -------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% | 79.0ms |      15 | `lalrpop_util::state_machine::Parser<D,I>::reduce` | ../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs |

##### `lalrpop_util::state_machine::Parser<D,I>::drive` (../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs)

|      % |   Time | Samples | Callee                                            | Location                                                                                            |
| -----: | -----: | ------: | ------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% | 79.0ms |      15 | `lalrpop_util::state_machine::Parser<D,I>::parse` | ../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs |

##### `compiler::phases::frontend::parser::__parse__Module::ModuleParser::parse` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs)

|      % |   Time | Samples | Callee                                            | Location                                                                                            |
| -----: | -----: | ------: | ------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% | 79.0ms |      15 | `lalrpop_util::state_machine::Parser<D,I>::drive` | ../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs |

##### `compiler::phases::frontend::Program::parse_module` (web-lang/compiler/src/phases/frontend/mod.rs)

|      % |   Time | Samples | Callee                                                                     | Location                                                                             |
| -----: | -----: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 79.0ms |      15 | `compiler::phases::frontend::parser::__parse__Module::ModuleParser::parse` | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `compiler::main` (web-lang/compiler/src/main.rs) ← `core::ops::function::FnOnce::call_once` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/ops/function.rs) ← `std::sys::backtrace::__rust_begin_short_backtrace` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/sys/backtrace.rs) ← `std::rt::lang_start::{{closure}}` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/rt.rs) ← `<&dyn core::ops::function::Fn<(), Output = i32> + core::panic::unwind_safe::RefUnwindSafe + core::marker::Sync as core::ops::function::FnOnce<()>>::call_once` (../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ops/function.rs) ← `std::panicking::catch_unwind::do_call::<&dyn core::ops::function::Fn<(), Output = i32> + core::panic::unwind_safe::RefUnwindSafe + core::marker::Sync, i32>` (../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/panicking.rs) ← `std::panicking::catch_unwind::<i32, &dyn core::ops::function::Fn<(), Output = i32> + core::panic::unwind_safe::RefUnwindSafe + core::marker::Sync>` ← `std::panic::catch_unwind::<&dyn core::ops::function::Fn<(), Output = i32> + core::panic::unwind_safe::RefUnwindSafe + core::marker::Sync, i32>` (../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/panic.rs) ← `std::rt::lang_start_internal::{closure#0}` (../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/rt.rs) ← `std::panicking::catch_unwind::do_call::<std::rt::lang_start_internal::{closure#0}, isize>` (../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/panicking.rs) ← `std::panicking::catch_unwind::<isize, std::rt::lang_start_internal::{closure#0}>` ← `std::panic::catch_unwind::<std::rt::lang_start_internal::{closure#0}, isize>` (../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/panic.rs) ← `std::rt::lang_start_internal` (../../../../rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/rt.rs)

|     % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18.8% | 33.0ms |       8 | `compiler::phases::frontend::parser::__parse__Module::__reduce` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs) ← `<compiler::phases::frontend::parser::__parse__Module::__StateMachine as lalrpop_util::state_machine::ParserDefinition>::reduce` ← `lalrpop_util::state_machine::Parser<D,I>::reduce` (../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs) ← `lalrpop_util::state_machine::Parser<D,I>::parse` ← `lalrpop_util::state_machine::Parser<D,I>::drive` ← `compiler::phases::frontend::parser::__parse__Module::ModuleParser::parse` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs) ← `compiler::phases::frontend::Program::parse_module` (web-lang/compiler/src/phases/frontend/mod.rs) ← `compiler::phases::frontend::Program::from_entry_point` ← `compiler::phases::frontend::run_frontend`                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 10.8% | 19.0ms |       1 | `alloc::raw_vec::RawVec<T,A>::grow_one` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/raw_vec/mod.rs) ← `alloc::vec::Vec<T,A>::push_mut` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/vec/mod.rs) ← `alloc::vec::Vec<T,A>::push` ← `compiler::phases::frontend::parser::__action123` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs) ← `compiler::phases::frontend::parser::__parse__Module::__reduce153` ← `compiler::phases::frontend::parser::__parse__Module::__reduce` ← `<compiler::phases::frontend::parser::__parse__Module::__StateMachine as lalrpop_util::state_machine::ParserDefinition>::reduce` ← `lalrpop_util::state_machine::Parser<D,I>::reduce` (../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs) ← `lalrpop_util::state_machine::Parser<D,I>::parse` ← `lalrpop_util::state_machine::Parser<D,I>::drive` ← `compiler::phases::frontend::parser::__parse__Module::ModuleParser::parse` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs) ← `compiler::phases::frontend::Program::parse_module` (web-lang/compiler/src/phases/frontend/mod.rs) ← `compiler::phases::frontend::Program::from_entry_point` ← `compiler::phases::frontend::run_frontend` |
|  8.5% | 15.0ms |       2 | `compiler::phases::frontend::parser::__parse__Module::__reduce40` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs) ← `compiler::phases::frontend::parser::__parse__Module::__reduce` ← `<compiler::phases::frontend::parser::__parse__Module::__StateMachine as lalrpop_util::state_machine::ParserDefinition>::reduce` ← `lalrpop_util::state_machine::Parser<D,I>::reduce` (../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs) ← `lalrpop_util::state_machine::Parser<D,I>::parse` ← `lalrpop_util::state_machine::Parser<D,I>::drive` ← `compiler::phases::frontend::parser::__parse__Module::ModuleParser::parse` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs) ← `compiler::phases::frontend::Program::parse_module` (web-lang/compiler/src/phases/frontend/mod.rs) ← `compiler::phases::frontend::Program::from_entry_point` ← `compiler::phases::frontend::run_frontend`                                                                                                                                                                                                                                                                                                                                                                                        |
|  6.8% | 12.0ms |       1 | `alloc::raw_vec::RawVecInner<A>::grow_amortized` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/raw_vec/mod.rs) ← `alloc::raw_vec::RawVecInner<A>::grow_one` ← `alloc::raw_vec::RawVec<T,A>::grow_one` ← `alloc::vec::Vec<T,A>::push_mut` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/vec/mod.rs) ← `alloc::vec::Vec<T,A>::push` ← `compiler::phases::middle_end::name_resolution::resolve_statement` (web-lang/compiler/src/phases/middle_end/name_resolution.rs) ← `compiler::phases::middle_end::name_resolution::resolve_module_item` ← `compiler::phases::middle_end::name_resolution::resolve_module` ← `compiler::phases::middle_end::name_resolution::resolve_names` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  4.5% |  8.0ms |       2 | `compiler::phases::middle_end::type_checking::visit_statement` (web-lang/compiler/src/phases/middle_end/type_checking.rs) ← `compiler::phases::middle_end::type_checking::visit_module_item` ← `compiler::phases::middle_end::type_checking::visit_module` ← `compiler::phases::middle_end::type_checking::check_types` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  4.0% |  7.0ms |       1 | `compiler::phases::middle_end::type_checking::visit_statement` (web-lang/compiler/src/phases/middle_end/type_checking.rs) ← `compiler::phases::middle_end::type_checking::visit_statement` ← `compiler::phases::middle_end::type_checking::visit_module_item` ← `compiler::phases::middle_end::type_checking::visit_module` ← `compiler::phases::middle_end::type_checking::check_types` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  4.0% |  7.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce78` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs) ← `compiler::phases::frontend::parser::__parse__Module::__reduce` ← `<compiler::phases::frontend::parser::__parse__Module::__StateMachine as lalrpop_util::state_machine::ParserDefinition>::reduce` ← `lalrpop_util::state_machine::Parser<D,I>::reduce` (../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs) ← `lalrpop_util::state_machine::Parser<D,I>::parse` ← `lalrpop_util::state_machine::Parser<D,I>::drive` ← `compiler::phases::frontend::parser::__parse__Module::ModuleParser::parse` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs) ← `compiler::phases::frontend::Program::parse_module` (web-lang/compiler/src/phases/frontend/mod.rs) ← `compiler::phases::frontend::Program::from_entry_point` ← `compiler::phases::frontend::run_frontend`                                                                                                                                                                                                                                                                                                                                                                                        |
|  4.0% |  7.0ms |       4 | `compiler::phases::backend::ir::middle_statement_to_statements` (web-lang/compiler/src/phases/backend/ir.rs) ← `compiler::phases::backend::ir::middle_statement_to_statements` ← `compiler::phases::backend::ir::module_item_to_statements` ← `compiler::phases::backend::ir::module_to_statements` ← `compiler::phases::backend::ir::from_middle_end` ← `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.8% |  5.0ms |       4 | `compiler::phases::middle_end::name_resolution::resolve_expression` (web-lang/compiler/src/phases/middle_end/name_resolution.rs) ← `compiler::phases::middle_end::name_resolution::resolve_statement` ← `compiler::phases::middle_end::name_resolution::resolve_block` ← `compiler::phases::middle_end::name_resolution::resolve_statement` ← `compiler::phases::middle_end::name_resolution::resolve_module_item` ← `compiler::phases::middle_end::name_resolution::resolve_module` ← `compiler::phases::middle_end::name_resolution::resolve_names` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.3% |  4.0ms |       2 | `compiler::phases::backend::code_gen::write_statement` (web-lang/compiler/src/phases/backend/code_gen.rs) ← `compiler::phases::backend::code_gen::generate_code` ← `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  2.3% |  4.0ms |       2 | `compiler::phases::middle_end::name_resolution::resolve_statement` (web-lang/compiler/src/phases/middle_end/name_resolution.rs) ← `compiler::phases::middle_end::name_resolution::resolve_block` ← `compiler::phases::middle_end::name_resolution::resolve_statement` ← `compiler::phases::middle_end::name_resolution::resolve_module_item` ← `compiler::phases::middle_end::name_resolution::resolve_module` ← `compiler::phases::middle_end::name_resolution::resolve_names` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  2.3% |  4.0ms |       1 | `core::ptr::drop_in_place<(alloc::string::String,compiler::phases::frontend::ir::Module)>` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/ptr/mod.rs) ← `core::ptr::mut_ptr::<impl *mut T>::drop_in_place` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/ptr/mut_ptr.rs) ← `hashbrown::raw::Bucket<T>::drop` (../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs) ← `hashbrown::raw::RawTableInner::drop_elements` ← `hashbrown::raw::RawTableInner::drop_inner_table` ← `<hashbrown::raw::RawTable<T,A> as core::ops::drop::Drop>::drop` ← `core::ptr::drop_in_place<hashbrown::raw::RawTable<(alloc::string::String,compiler::phases::frontend::ir::Module)>>` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/ptr/mod.rs) ← `core::ptr::drop_in_place<hashbrown::map::HashMap<alloc::string::String,compiler::phases::frontend::ir::Module,std::hash::random::RandomState>>` ← `core::ptr::drop_in_place<std::collections::hash::map::HashMap<alloc::string::String,compiler::phases::frontend::ir::Module>>` ← `core::ptr::drop_in_place<compiler::phases::frontend::Program>` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                          |
|  1.7% |  3.0ms |       2 | `compiler::phases::backend::ir::middle_statement_to_statements` (web-lang/compiler/src/phases/backend/ir.rs) ← `compiler::phases::backend::ir::module_item_to_statements` ← `compiler::phases::backend::ir::module_to_statements` ← `compiler::phases::backend::ir::from_middle_end` ← `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.7% |  3.0ms |       1 | `core::ptr::drop_in_place<compiler::phases::backend::ir::Statement>` ← `core::ptr::drop_in_place<[compiler::phases::backend::ir::Statement]>` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/ptr/mod.rs) ← `<alloc::vec::Vec<T,A> as core::ops::drop::Drop>::drop` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/vec/mod.rs) ← `core::ptr::drop_in_place<alloc::vec::Vec<compiler::phases::backend::ir::Statement>>` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/ptr/mod.rs) ← `compiler::phases::backend::code_gen::generate_code` (web-lang/compiler/src/phases/backend/code_gen.rs) ← `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.7% |  3.0ms |       1 | `std::collections::hash::map::HashMap<K,V,S,A>::insert` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/collections/hash/map.rs) ← `compiler::types::symbol_table::SymbolTable::set_value` (web-lang/compiler/src/types/symbol_table.rs) ← `compiler::phases::middle_end::type_checking::visit_statement` (web-lang/compiler/src/phases/middle_end/type_checking.rs) ← `compiler::phases::middle_end::type_checking::visit_statement` ← `compiler::phases::middle_end::type_checking::visit_module_item` ← `compiler::phases::middle_end::type_checking::visit_module` ← `compiler::phases::middle_end::type_checking::check_types` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.7% |  3.0ms |       1 | `hashbrown::raw::RawTable<T,A>::reserve` (../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs) ← `hashbrown::raw::RawTable<T,A>::find_or_find_insert_index` ← `hashbrown::map::HashMap<K,V,S,A>::find_or_find_insert_index` (../../../../rust/deps/hashbrown-0.16.1/src/map.rs) ← `hashbrown::map::HashMap<K,V,S,A>::insert` ← `std::collections::hash::map::HashMap<K,V,S,A>::insert` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/collections/hash/map.rs) ← `compiler::types::symbol_table::SymbolTable::set_value` (web-lang/compiler/src/types/symbol_table.rs) ← `compiler::phases::middle_end::name_resolution::Context::add_and_rename` (web-lang/compiler/src/phases/middle_end/name_resolution.rs) ← `compiler::phases::middle_end::name_resolution::resolve_statement` ← `compiler::phases::middle_end::name_resolution::resolve_block` ← `compiler::phases::middle_end::name_resolution::resolve_statement` ← `compiler::phases::middle_end::name_resolution::resolve_module_item` ← `compiler::phases::middle_end::name_resolution::resolve_module` ← `compiler::phases::middle_end::name_resolution::resolve_names` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                                                                     |
|  1.1% |  2.0ms |       1 | `<compiler::phases::shared::Type as core::clone::Clone>::clone` ← `compiler::phases::middle_end::type_checking::visit_statement` (web-lang/compiler/src/phases/middle_end/type_checking.rs) ← `compiler::phases::middle_end::type_checking::visit_module_item` ← `compiler::phases::middle_end::type_checking::visit_module` ← `compiler::phases::middle_end::type_checking::check_types` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.1% |  2.0ms |       2 | `compiler::phases::backend::ir::expression_to_value` (web-lang/compiler/src/phases/backend/ir.rs) ← `compiler::phases::backend::ir::middle_statement_to_statements` ← `compiler::phases::backend::ir::middle_statement_to_statements` ← `compiler::phases::backend::ir::module_item_to_statements` ← `compiler::phases::backend::ir::module_to_statements` ← `compiler::phases::backend::ir::from_middle_end` ← `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.1% |  2.0ms |       2 | `compiler::phases::middle_end::name_resolution::Context::add_and_rename` (web-lang/compiler/src/phases/middle_end/name_resolution.rs) ← `compiler::phases::middle_end::name_resolution::resolve_statement` ← `compiler::phases::middle_end::name_resolution::resolve_block` ← `compiler::phases::middle_end::name_resolution::resolve_statement` ← `compiler::phases::middle_end::name_resolution::resolve_module_item` ← `compiler::phases::middle_end::name_resolution::resolve_module` ← `compiler::phases::middle_end::name_resolution::resolve_names` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.1% |  2.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce43` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs) ← `compiler::phases::frontend::parser::__parse__Module::__reduce` ← `<compiler::phases::frontend::parser::__parse__Module::__StateMachine as lalrpop_util::state_machine::ParserDefinition>::reduce` ← `lalrpop_util::state_machine::Parser<D,I>::reduce` (../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs) ← `lalrpop_util::state_machine::Parser<D,I>::parse` ← `lalrpop_util::state_machine::Parser<D,I>::drive` ← `compiler::phases::frontend::parser::__parse__Module::ModuleParser::parse` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs) ← `compiler::phases::frontend::Program::parse_module` (web-lang/compiler/src/phases/frontend/mod.rs) ← `compiler::phases::frontend::Program::from_entry_point` ← `compiler::phases::frontend::run_frontend`                                                                                                                                                                                                                                                                                                                                                                                        |

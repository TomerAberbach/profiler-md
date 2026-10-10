# Allocated heap profile diff

Allocated 97.3 MiB → 114 MiB (+16.874 MiB, +17.3%) over 156,119 objects → 88,694 objects (653 B → 1.32 KiB per object).

| Category | Change |       Delta |      % |               Size |          Objects |
| -------- | -----: | ----------: | -----: | -----------------: | ---------------: |
| Native   | +17.3% | +16.874 MiB | 100.0% | 97.3 MiB → 114 MiB | 156,119 → 88,694 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Native

| Change |       Delta |             % |               Size |         Objects | Function   | Location                                |
| -----: | ----------: | ------------: | -----------------: | --------------: | ---------- | --------------------------------------- |
| +27.1% | +22.065 MiB | 83.8% → 90.7% | 81.5 MiB → 104 MiB | 12,110 → 15,782 | `0x3e564b` | `/usr/lib/swift/linux/libswiftCore.so`  |
|    new |  +6.375 KiB |  0.0% → <0.1% |     0 B → 6.38 KiB |         0 → 408 | `0x39e55f` | `/usr/lib/swift/linux/libFoundation.so` |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Native

|  Change |      Delta |            % |                Size |          Objects | Function   | Location                                |
| ------: | ---------: | -----------: | ------------------: | ---------------: | ---------- | --------------------------------------- |
|  -33.0% | -5.196 MiB | 16.2% → 9.2% | 15.8 MiB → 10.6 MiB | 143,926 → 72,429 | `0x3e562f` | `/usr/lib/swift/linux/libswiftCore.so`  |
|   -9.9% |     -296 B |        <0.1% | 2.92 KiB → 2.63 KiB |          21 → 19 | `0x3f17a3` | `/usr/lib/swift/linux/libswiftCore.so`  |
| removed |     -240 B | <0.1% → 0.0% |         240 B → 0 B |            2 → 0 | `0xdd5eb`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`  |
| removed |      -48 B | <0.1% → 0.0% |          48 B → 0 B |            1 → 0 | `0x3f1f23` | `/usr/lib/swift/linux/libswiftCore.so`  |
| removed |      -48 B | <0.1% → 0.0% |          48 B → 0 B |            1 → 0 | `0x37422f` | `/usr/lib/swift/linux/libFoundation.so` |
|  -10.0% |      -32 B |        <0.1% |       320 B → 288 B |            5 → 4 | `0x3fe73f` | `/usr/lib/swift/linux/libswiftCore.so`  |
| removed |      -16 B | <0.1% → 0.0% |          16 B → 0 B |            1 → 0 | `0x427493` | `/usr/lib/swift/linux/libswiftCore.so`  |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `0x3e564b` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change |       Delta |            % |               Size |         Objects | Caller                                        | Location                               |
| ------: | ----------: | -----------: | -----------------: | --------------: | --------------------------------------------- | -------------------------------------- |
|  +27.1% | +22.065 MiB |       100.0% | 81.5 MiB → 104 MiB | 12,108 → 15,780 | `$sSw8allocate9byteCount9alignmentSwSi_SitFZ` | `/<compiler-generated>`                |
| removed |       -80 B | <0.1% → 0.0% |         80 B → 0 B |           1 → 0 | `0x3f1d1f`                                    | `/usr/lib/swift/linux/libswiftCore.so` |
|     new |       +80 B | 0.0% → <0.1% |         0 B → 80 B |           0 → 1 | `0x3f1857`                                    | `/usr/lib/swift/linux/libswiftCore.so` |

##### `0x39e55f` (`/usr/lib/swift/linux/libFoundation.so`)

| Change |      Delta |             % |           Size | Objects | Caller     | Location                                |
| -----: | ---------: | ------------: | -------------: | ------: | ---------- | --------------------------------------- |
|    new | +6.375 KiB | 0.0% → 100.0% | 0 B → 6.38 KiB | 0 → 408 | `0x3f0bc7` | `/usr/lib/swift/linux/libFoundation.so` |

##### `0x3e562f` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change |      Delta |            % |                Size |          Objects | Caller     | Location                               |
| ------: | ---------: | -----------: | ------------------: | ---------------: | ---------- | -------------------------------------- |
|  -33.0% | -5.196 MiB |       100.0% | 15.8 MiB → 10.6 MiB | 143,924 → 72,429 | `0x3e5a1f` | `/usr/lib/swift/linux/libswiftCore.so` |
| removed |      -56 B | <0.1% → 0.0% |          56 B → 0 B |            1 → 0 | `0x3f9e5b` | `/usr/lib/swift/linux/libswiftCore.so` |
| removed |      -16 B | <0.1% → 0.0% |          16 B → 0 B |            1 → 0 | `0x3f1d03` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `0x3f17a3` (`/usr/lib/swift/linux/libswiftCore.so`)

| Change |  Delta |             % |                Size | Objects | Caller     | Location                               |
| -----: | -----: | ------------: | ------------------: | ------: | ---------- | -------------------------------------- |
|  -9.7% | -272 B | 93.9% → 94.1% | 2.74 KiB → 2.48 KiB |  10 → 9 | `0x290383` | `/usr/lib/swift/linux/libswiftCore.so` |
| -15.8% |  -24 B |   5.1% → 4.7% |       152 B → 128 B |   9 → 8 | `0x290353` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `0xdd5eb` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |  Delta |            % |        Size | Objects | Caller    | Location                               |
| ------: | -----: | -----------: | ----------: | ------: | --------- | -------------------------------------- |
| removed | -120 B | 50.0% → 0.0% | 120 B → 0 B |   1 → 0 | `0xddf9f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -120 B | 50.0% → 0.0% | 120 B → 0 B |   1 → 0 | `0xde077` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x3f1f23` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change | Delta |             % |       Size | Objects | Caller     | Location                               |
| ------: | ----: | ------------: | ---------: | ------: | ---------- | -------------------------------------- |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   1 → 0 | `0x47ed67` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `0x37422f` (`/usr/lib/swift/linux/libFoundation.so`)

|  Change | Delta |             % |       Size | Objects | Caller     | Location                                |
| ------: | ----: | ------------: | ---------: | ------: | ---------- | --------------------------------------- |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   1 → 0 | `0x3735e7` | `/usr/lib/swift/linux/libFoundation.so` |

##### `0x3fe73f` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change | Delta |            % |       Size | Objects | Caller     | Location                               |
| ------: | ----: | -----------: | ---------: | ------: | ---------- | -------------------------------------- |
| removed | -32 B | 10.0% → 0.0% | 32 B → 0 B |   1 → 0 | `0x3fdf4f` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `0x427493` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change | Delta |             % |       Size | Objects | Caller     | Location                               |
| ------: | ----: | ------------: | ---------: | ------: | ---------- | -------------------------------------- |
| removed | -16 B | 100.0% → 0.0% | 16 B → 0 B |   1 → 0 | `0x427a7f` | `/usr/lib/swift/linux/libswiftCore.so` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|   Change |       Delta |             % |                Size |          Objects | Function                                                                                                                                                                    | Location                                                                                      |
| -------: | ----------: | ------------: | ------------------: | ---------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|      new |  +64.38 MiB |  0.0% → 56.4% |      0 B → 64.4 MiB |       0 → 75,186 | `$s11SwiftParser0B0V16parseDeclaration2in0A6Syntax07RawDeclF0VAC0D12ParseContextO_tF`                                                                                       | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift`                   |
|      new | +56.918 MiB |  0.0% → 49.9% |      0 B → 56.9 MiB |       0 → 59,378 | `$s11SwiftSyntax010SourceFileB0V0A6ParserE5parse4fromAcD0E0Vz_tFZAA03RawcdB0VAHzXEfU_`                                                                                      | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/generated/LayoutNodes+Parsable.swift` |
|      new | +56.918 MiB |  0.0% → 49.9% |      0 B → 56.9 MiB |       0 → 59,378 | `$s11SwiftParser15SyntaxParseablePAAE5parse33_A2E5EEB4E7271C1F548910D9ED42E2EBLL4fromADxAA0B0Vz_qd__AHzXEt0aC003RawC12NodeProtocolRd__lFZAI010SourceFileC0V_AI0qtuC0VTt2g5` | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/generated/LayoutNodes+Parsable.swift` |
|      new | +40.415 MiB |  0.0% → 35.4% |      0 B → 40.4 MiB |        0 → 7,278 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                                   | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
|      new | +40.415 MiB |  0.0% → 35.4% |      0 B → 40.4 MiB |        0 → 7,278 | `$s11SwiftSyntax0B7VisitorC018visitCodeBlockItemB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                       | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
|      new | +40.415 MiB |  0.0% → 35.4% |      0 B → 40.4 MiB |        0 → 7,278 | `$s11SwiftSyntax0B7VisitorC022visitCodeBlockItemListB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                   | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
|      new | +40.217 MiB |  0.0% → 35.2% |      0 B → 40.2 MiB |        0 → 7,098 | `$s11SwiftSyntax0B9DataArenaC012createLayoutC4Impl33_B3300DB0BA2B3E5E35A338B811650793LLySRyAA0D16AllocatedPointerVyAA0bC0VGSgGAJF`                                          | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift`                         |
|      new | +40.217 MiB |  0.0% → 35.2% |      0 B → 40.2 MiB |        0 → 7,098 | `$s11SwiftSyntax0B9DataArenaC6layout3forAA0D22AllocatedBufferPointerVyAA0dgI0VyAA0bC0VGSgGAL_tF`                                                                            | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift`                         |
|      new | +40.217 MiB |  0.0% → 35.2% |      0 B → 40.2 MiB |        0 → 7,098 | `$s11SwiftSyntax0B0V12layoutBufferAA014ArenaAllocatedD7PointerVyAA0efG0VyAA0B4DataVGSgGvg`                                                                                  | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift`                         |
|      new | +39.744 MiB |  0.0% → 34.8% |      0 B → 39.7 MiB |        0 → 7,117 | `$s11SwiftSyntax0B7VisitorC015visitSourceFileB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                          | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
|      new | +38.641 MiB |  0.0% → 33.8% |      0 B → 38.6 MiB |        0 → 6,756 | `$s11SwiftSyntax0B7VisitorC016visitMemberBlockB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                         | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
|      new |  +38.46 MiB |  0.0% → 33.7% |      0 B → 38.5 MiB |        0 → 6,714 | `$s11SwiftSyntax0B7VisitorC020visitMemberBlockItemB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                     | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
|      new |  +38.43 MiB |  0.0% → 33.7% |      0 B → 38.4 MiB |        0 → 6,702 | `$s11SwiftSyntax0B7VisitorC024visitMemberBlockItemListB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                 | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
| +7642.6% | +37.833 MiB |  0.5% → 33.6% |  507 KiB → 38.3 MiB |    3,721 → 6,955 | `$s11SwiftSyntax0B7VisitorC4walkyyxAA0B8ProtocolRzlF`                                                                                                                       | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
|      new | +30.064 MiB |  0.0% → 26.3% |      0 B → 30.1 MiB |        0 → 4,296 | `$s11SwiftSyntax03RawB5ArenaC6internySPyAA0cB4DataVGAFF`                                                                                                                    | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntaxArena.swift`             |
|      new | +30.064 MiB |  0.0% → 26.3% |      0 B → 30.1 MiB |        0 → 4,296 | `$s11SwiftSyntax03RawB0V5arena7payloadAcA0cB5ArenaCh_AA0cB4DataV7PayloadOtcfC`                                                                                              | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`                  |
|   +48.7% | +26.813 MiB | 56.6% → 71.7% | 55.1 MiB → 81.9 MiB | 106,418 → 59,971 | `_start`                                                                                                                                                                    | `<unknown>`                                                                                   |
|   +42.7% |  +26.23 MiB | 63.2% → 76.8% | 61.5 MiB → 87.7 MiB | 109,040 → 61,543 | `0x28597`                                                                                                                                                                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`                                                        |
|      new | +23.957 MiB |  0.0% → 21.0% |        0 B → 24 MiB |       0 → 20,088 | `$s11SwiftParser0B0V23parseBindingDeclaration__2in0A6Syntax015RawVariableDeclG0VAC0J10AttributesV_AA25RecoveryConsumptionHandleVAC0E12ParseContextOtF`                      | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift`                   |
|   +33.7% | +23.714 MiB | 72.3% → 82.4% | 70.4 MiB → 94.1 MiB | 121,124 → 62,995 | `0x284c3`                                                                                                                                                                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`                                                        |

##### Native

|    Change |       Delta |             % |                Size |          Objects | Function                                                                                                                                                               | Location                                          |
| --------: | ----------: | ------------: | ------------------: | ---------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
|    +48.7% | +26.813 MiB | 56.6% → 71.7% | 55.1 MiB → 81.9 MiB | 106,418 → 59,971 | `_start`                                                                                                                                                               | `<unknown>`                                       |
|    +42.7% |  +26.23 MiB | 63.2% → 76.8% | 61.5 MiB → 87.7 MiB | 109,040 → 61,543 | `0x28597`                                                                                                                                                              | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|    +33.7% | +23.714 MiB | 72.3% → 82.4% | 70.4 MiB → 94.1 MiB | 121,124 → 62,995 | `0x284c3`                                                                                                                                                              | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|    +27.1% | +22.065 MiB | 83.8% → 90.7% |  81.5 MiB → 104 MiB |  12,110 → 15,782 | `0x3e564b`                                                                                                                                                             | `/usr/lib/swift/linux/libswiftCore.so`            |
|       new |  +1.221 MiB |   0.0% → 1.1% |      0 B → 1.22 MiB |          0 → 138 | `$s11SwiftSyntax020RawInitializerClauseB0V_5equal_5value_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0cB5ArenaChtcAA0c4ExprB12NodeProtocolRzlufC`             | `<unknown>`                                       |
|       new |    +600 KiB |   0.0% → 0.5% |       0 B → 600 KiB |           0 → 66 | `$s11SwiftSyntax023RawOptionalChainingExprB0V_10expression_12questionMark_5arenaAcA0c15UnexpectedNodesB0VSg_xAiA0c5TokenB0VAiA0cB5ArenaChtcAA0cfB12NodeProtocolRzlufC` | `<unknown>`                                       |
|       new |    +408 KiB |   0.0% → 0.3% |       0 B → 408 KiB |           0 → 48 | `$s11SwiftSyntax017RawTypeAnnotationB0V_5colon_4type_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0cB5ArenaChtcAA0cdB12NodeProtocolRzlufC`                     | `<unknown>`                                       |
|       new |    +192 KiB |   0.0% → 0.2% |       0 B → 192 KiB |           0 → 24 | `$s11SwiftSyntax022RawValueBindingPatternB0V_16bindingSpecifier_7pattern_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0cB5ArenaChtcAA0cfB12NodeProtocolRzlufC` | `<unknown>`                                       |
|       new |     +48 KiB |  0.0% → <0.1% |        0 B → 48 KiB |           0 → 12 | `$s11SwiftSyntax021RawPrefixOperatorExprB0V_8operator_10expression_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0cB5ArenaChtcAA0cfB12NodeProtocolRzlufC`       | `<unknown>`                                       |
|       new |     +48 KiB |  0.0% → <0.1% |        0 B → 48 KiB |           0 → 12 | `$s11SwiftSyntax015RawOptionalTypeB0V_07wrappedE0_12questionMark_5arenaAcA0c15UnexpectedNodesB0VSg_xAiA0c5TokenB0VAiA0cB5ArenaChtcAA0ceB12NodeProtocolRzlufC`          | `<unknown>`                                       |
|       new |     +48 KiB |  0.0% → <0.1% |        0 B → 48 KiB |            0 → 6 | `$s11SwiftSyntax015RawReturnClauseB0V_5arrow_4type_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0cB5ArenaChtcAA0c4TypeB12NodeProtocolRzlufC`                   | `<unknown>`                                       |
|       new |     +48 KiB |  0.0% → <0.1% |        0 B → 48 KiB |            0 → 6 | `$s11SwiftSyntax016RawInheritedTypeB0V_4type_13trailingComma_5arenaAcA0c15UnexpectedNodesB0VSg_xAiA0c5TokenB0VSgAiA0cB5ArenaChtcAA0ceB12NodeProtocolRzlufC`            | `<unknown>`                                       |
|       new | +27.093 KiB |  0.0% → <0.1% |      0 B → 27.1 KiB |          0 → 408 | `0x1c448f`                                                                                                                                                             | `/usr/lib/swift/linux/libswiftCore.so`            |
|       new | +27.093 KiB |  0.0% → <0.1% |      0 B → 27.1 KiB |          0 → 408 | `0x1bcdab`                                                                                                                                                             | `/usr/lib/swift/linux/libFoundationEssentials.so` |
|       new | +27.093 KiB |  0.0% → <0.1% |      0 B → 27.1 KiB |          0 → 408 | `0x36e053`                                                                                                                                                             | `/usr/lib/swift/linux/libFoundationEssentials.so` |
| +35931.2% | +27.018 KiB |         <0.1% |     77 B → 27.1 KiB |          1 → 408 | `0x22db57`                                                                                                                                                             | `/usr/lib/swift/linux/libFoundation.so`           |
|    +19.6% |  +6.375 KiB |         <0.1% | 32.5 KiB → 38.8 KiB |        401 → 808 | `0x2f99e3`                                                                                                                                                             | `/usr/lib/swift/linux/libFoundation.so`           |
|       new |  +6.375 KiB |  0.0% → <0.1% |      0 B → 6.38 KiB |          0 → 408 | `0x39e55f`                                                                                                                                                             | `/usr/lib/swift/linux/libFoundation.so`           |
|       new |  +6.375 KiB |  0.0% → <0.1% |      0 B → 6.38 KiB |          0 → 408 | `0x3f0bc7`                                                                                                                                                             | `/usr/lib/swift/linux/libFoundation.so`           |
| +13500.0% |  +6.328 KiB |         <0.1% |     48 B → 6.38 KiB |          1 → 408 | `0x2f9c17`                                                                                                                                                             | `/usr/lib/swift/linux/libFoundation.so`           |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |       Delta |             % |                Size |          Objects | Function                                                                                                                                                                                                              | Location                                                                       |
| ------: | ----------: | ------------: | ------------------: | ---------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| removed | -80.497 MiB |  82.7% → 0.0% |      80.5 MiB → 0 B |      140,784 → 0 | `$s11SwiftParser0B0V16parseDeclaration16inMemberDeclList0A6Syntax03RawgI0VSb_tF`                                                                                                                                      | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift`    |
| removed | -34.391 MiB |  35.4% → 0.0% |      34.4 MiB → 0 B |       85,026 → 0 | `$s11SwiftParser0B0V23parseBindingDeclaration__16inMemberDeclList0A6Syntax011RawVariablehJ0VAC0H10AttributesV_AA25RecoveryConsumptionHandleVSbtF`                                                                     | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift`    |
| removed | -30.127 MiB |  31.0% → 0.0% |      30.1 MiB → 0 B |        5,160 → 0 | `$s11SwiftSyntax0B5ArenaC6internySPyAA03RawB4DataVGAFF`                                                                                                                                                               | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxArena.swift`     |
| removed | -30.127 MiB |  31.0% → 0.0% |      30.1 MiB → 0 B |        5,160 → 0 | `$s11SwiftSyntax03RawB0V5arena7payloadAcA0B5ArenaCh_AA0cB4DataV7PayloadOtcfC`                                                                                                                                         | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`   |
|  -32.2% | -20.599 MiB | 65.7% → 37.9% | 63.9 MiB → 43.3 MiB | 125,874 → 54,846 | `$s11SwiftParser0B0V22parseCodeBlockItemList12isAtTopLevel13allowInitDecl5until0A6Syntax03RawdefgP0VSb_S2bACzXEtF`                                                                                                    | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`        |
|  -22.7% |  -19.94 MiB | 90.1% → 59.3% | 87.7 MiB → 67.7 MiB | 148,916 → 78,038 | `$s11SwiftParser0B0V9parseItem33_008C1B0E0A90478841CED0DF9A7053A1LL12isAtTopLevel13allowInitDecl0A6Syntax012RawCodeBlockdT0V0D0OSb_SbtF`                                                                              | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`        |
|  -22.7% | -19.845 MiB | 90.0% → 59.3% | 87.6 MiB → 67.7 MiB | 148,874 → 78,008 | `$s11SwiftParser0B0V18parseCodeBlockItem12isAtTopLevel13allowInitDecl0A6Syntax03RawdefN0VSgSb_SbtF`                                                                                                                   | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`        |
| removed |  -19.64 MiB |  20.2% → 0.0% |      19.6 MiB → 0 B |        3,570 → 0 | `$s11SwiftSyntax03RawB0V11parsedToken4kind9wholeText9textRange8presence15tokenDiagnostic5arenaAcA0cE4KindO_AA0bH0VSnySiGAA14SourcePresenceOAA0eM0VSgAA07ParsingB5ArenaChtFZTf4nnnnnnd_n`                              | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`   |
|  -34.5% | -19.308 MiB | 57.6% → 32.1% |   56 MiB → 36.7 MiB | 115,026 → 46,494 | `$s11SwiftParser0B0V14parseCodeBlock10introducer13allowInitDecl0A6Syntax03RawdeJ0VAG0k5TokenJ0VSg_SbtF`                                                                                                               | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`        |
| removed | -19.227 MiB |  19.8% → 0.0% |      19.2 MiB → 0 B |        2,598 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZTf4nnnnnd_n`                                            | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`   |
|  -34.5% | -18.985 MiB | 56.6% → 31.6% | 55.1 MiB → 36.1 MiB | 113,856 → 45,654 | `$s11SwiftParser0B0V22parseOptionalCodeBlock13allowInitDecl0A6Syntax03RawefJ0VSgSb_tF`                                                                                                                                | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`        |
|  -32.4% | -16.336 MiB | 51.8% → 29.8% |   50.4 MiB → 34 MiB |  91,038 → 30,384 | `$s11SwiftParser0B0V30parseSequenceExpressionElement6flavor7pattern0A6Syntax07RawExprI0VAC0K6FlavorO_AC14PatternContextOtF`                                                                                           | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`     |
|  -36.9% | -16.298 MiB | 45.4% → 24.4% | 44.2 MiB → 27.9 MiB |  78,036 → 27,468 | `$s11SwiftParser0B0V28parsePostfixExpressionSuffix_6flavor7pattern0A6Syntax07RawExprI0VAI_AC0K6FlavorOAC14PatternContextOtF`                                                                                          | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`     |
|  -30.8% |  -16.17 MiB | 54.0% → 31.9% | 52.6 MiB → 36.4 MiB | 106,686 → 34,560 | `$s11SwiftParser0B0V23parseSequenceExpression6flavor7pattern0A6Syntax07RawExprH0VAC0J6FlavorO_AC14PatternContextOtF`                                                                                                  | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`     |
|  -21.4% | -15.743 MiB | 75.6% → 50.6% | 73.5 MiB → 57.8 MiB | 134,408 → 62,282 | `$s11SwiftParser0B0V22parseCodeBlockItemList12isAtTopLevel13allowInitDecl5until0A6Syntax03RawdefgP0VSb_S2bACzXEtF04$s11a9Syntax017defg6B0V0A6b35E5parse4fromAcD0G0Vz_tFZAA03RawcdefT19VAHzXEfU_SbAHzXEfU_Tf1nncn_nTm` | `Attributes.swift.o`                                                           |
|  -21.0% | -15.096 MiB | 74.0% → 49.9% |   72 MiB → 56.9 MiB | 133,694 → 59,378 | `$s11SwiftParser0B0V27parseTopLevelCodeBlockItems0A6Syntax03Rawfg8ItemListI0VyF`                                                                                                                                      | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`        |
|  -21.0% | -15.096 MiB | 74.0% → 49.9% |   72 MiB → 56.9 MiB | 133,694 → 59,378 | `$s11SwiftParser0B0V15parseSourceFile0A6Syntax03RawdeF0VyF`                                                                                                                                                           | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`        |
|  -21.3% | -15.082 MiB | 72.8% → 48.8% | 70.8 MiB → 55.8 MiB | 129,242 → 58,298 | `$s11SwiftParser0B0V5parse6source0A6Syntax010SourceFileE0VSS_tFZ`                                                                                                                                                     | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/ParseSourceFile.swift` |
| removed | -14.629 MiB |  15.0% → 0.0% |      14.6 MiB → 0 B |        1,926 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ`                                                       | `/<compiler-generated>`                                                        |
|  -34.2% | -14.276 MiB | 42.9% → 24.0% | 41.7 MiB → 27.4 MiB |  56,082 → 43,272 | `$s11SwiftParser0B0V14parseStatement0A6Syntax07RawStmtE0VyF`                                                                                                                                                          | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Statements.swift`      |

##### Native

|  Change |        Delta |            % |                Size |          Objects | Function                                                                                                                                                              | Location                                |
| ------: | -----------: | -----------: | ------------------: | ---------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
|  -33.0% |   -5.196 MiB | 16.2% → 9.2% | 15.8 MiB → 10.6 MiB | 143,926 → 72,429 | `0x3e562f`                                                                                                                                                            | `/usr/lib/swift/linux/libswiftCore.so`  |
|  -33.0% |   -5.196 MiB | 16.2% → 9.2% | 15.8 MiB → 10.6 MiB | 143,924 → 72,429 | `0x3e5a1f`                                                                                                                                                            | `/usr/lib/swift/linux/libswiftCore.so`  |
|  -77.5% |   -2.508 MiB |  3.3% → 0.6% |  3.23 MiB → 744 KiB |      4,506 → 378 | `0x182623`                                                                                                                                                            | `/usr/lib/swift/linux/libswiftCore.so`  |
| removed |   -1.007 MiB |  1.0% → 0.0% |      1.01 MiB → 0 B |          156 → 0 | `$s11SwiftSyntax020RawInitializerClauseB0V_5equal_5value_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0c4ExprB12NodeProtocolRzlufC`             | `<unknown>`                             |
| removed |     -480 KiB |  0.5% → 0.0% |       480 KiB → 0 B |           54 → 0 | `$s11SwiftSyntax016RawSomeOrAnyTypeB0V_04someeF9Specifier_10constraint_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0cgB12NodeProtocolRzlufC`   | `<unknown>`                             |
| removed | -433.687 KiB |  0.4% → 0.0% |       434 KiB → 0 B |           90 → 0 | `$s11SwiftSyntax016RawInheritedTypeB0V_4type_13trailingComma_5arenaAcA0c15UnexpectedNodesB0VSg_xAiA0c5TokenB0VSgAiA0B5ArenaChtcAA0ceB12NodeProtocolRzlufC`            | `<unknown>`                             |
| removed |     -360 KiB |  0.4% → 0.0% |       360 KiB → 0 B |           60 → 0 | `$s11SwiftSyntax015RawOptionalTypeB0V_07wrappedE0_12questionMark_5arenaAcA0c15UnexpectedNodesB0VSg_xAiA0c5TokenB0VAiA0B5ArenaChtcAA0ceB12NodeProtocolRzlufC`          | `<unknown>`                             |
| removed |     -288 KiB |  0.3% → 0.0% |       288 KiB → 0 B |           12 → 0 | `$s11SwiftSyntax012RawInOutExprB0V_9ampersand_10expression_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0cfB12NodeProtocolRzlufC`               | `<unknown>`                             |
| removed |  -48.937 KiB | <0.1% → 0.0% |      48.9 KiB → 0 B |           18 → 0 | `$s11SwiftSyntax017RawTypeAnnotationB0V_5colon_4type_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0cdB12NodeProtocolRzlufC`                     | `<unknown>`                             |
| removed |      -48 KiB | <0.1% → 0.0% |        48 KiB → 0 B |           12 → 0 | `$s11SwiftSyntax024RawTypeInitializerClauseB0V_5equal_5value_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0cdB12NodeProtocolRzlufC`             | `<unknown>`                             |
| removed |      -24 KiB | <0.1% → 0.0% |        24 KiB → 0 B |            6 → 0 | `$s11SwiftSyntax023RawOptionalChainingExprB0V_10expression_12questionMark_5arenaAcA0c15UnexpectedNodesB0VSg_xAiA0c5TokenB0VAiA0B5ArenaChtcAA0cfB12NodeProtocolRzlufC` | `<unknown>`                             |
| removed |      -24 KiB | <0.1% → 0.0% |        24 KiB → 0 B |            6 → 0 | `$s11SwiftSyntax021RawPrefixOperatorExprB0V_8operator_10expression_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0cfB12NodeProtocolRzlufC`       | `<unknown>`                             |
| removed |      -24 KiB | <0.1% → 0.0% |        24 KiB → 0 B |            6 → 0 | `$s11SwiftSyntax022RawValueBindingPatternB0V_16bindingSpecifier_7pattern_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0cfB12NodeProtocolRzlufC` | `<unknown>`                             |
| removed |      -24 KiB | <0.1% → 0.0% |        24 KiB → 0 B |            6 → 0 | `$s11SwiftSyntax014RawWhereClauseB0V_12whereKeyword_9condition_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0c4ExprB12NodeProtocolRzlufC`       | `<unknown>`                             |
| removed |   -1.125 KiB | <0.1% → 0.0% |      1.13 KiB → 0 B |           12 → 0 | `$s11SwiftSyntax015RawReturnClauseB0V_5arrow_4type_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0c4TypeB12NodeProtocolRzlufC`                   | `<unknown>`                             |
|   -6.3% |       -304 B |        <0.1% | 4.69 KiB → 4.39 KiB |          41 → 39 | `0x290383`                                                                                                                                                            | `/usr/lib/swift/linux/libswiftCore.so`  |
|   -9.9% |       -296 B |        <0.1% | 2.92 KiB → 2.63 KiB |          21 → 19 | `0x3f17a3`                                                                                                                                                            | `/usr/lib/swift/linux/libswiftCore.so`  |
|   -5.1% |       -240 B |        <0.1% | 4.55 KiB → 4.32 KiB |            4 → 2 | `0x22e487`                                                                                                                                                            | `/usr/lib/swift/linux/libFoundation.so` |
|   -4.6% |       -240 B |        <0.1% | 5.09 KiB → 4.85 KiB |            6 → 4 | `0x22cf03`                                                                                                                                                            | `/usr/lib/swift/linux/libFoundation.so` |
| removed |       -240 B | <0.1% → 0.0% |         240 B → 0 B |            2 → 0 | `0xdd5eb`                                                                                                                                                             | `/usr/lib/aarch64-linux-gnu/libc.so.6`  |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `$s11SwiftParser0B0V16parseDeclaration2in0A6Syntax07RawDeclF0VAC0D12ParseContextO_tF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift`)

| Change |       Delta |            % |           Size |    Objects | Callee                                                                                                                                                                          | Location                                                                    |
| -----: | ----------: | -----------: | -------------: | ---------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
|    new | +43.735 MiB | 0.0% → 67.9% | 0 B → 43.7 MiB | 0 → 41,568 | `$s11SwiftParser0B0V27parseNominalTypeDeclaration3for5attrs15introucerHandlexxm_AC14DeclAttributesVAA019RecoveryConsumptionJ0VtAA0deF5TraitRzlF0A6Syntax08RawClasskP0V_Tt0g5Tm` | `Attributes.swift.o`                                                        |
|    new | +23.909 MiB | 0.0% → 37.1% | 0 B → 23.9 MiB | 0 → 20,070 | `$s11SwiftParser0B0V23parseBindingDeclaration__2in0A6Syntax015RawVariableDeclG0VAC0J10AttributesV_AA25RecoveryConsumptionHandleVAC0E12ParseContextOtF`                          | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift` |
|    new | +20.957 MiB | 0.0% → 32.6% |   0 B → 21 MiB | 0 → 36,750 | `$s11SwiftParser0B0V20parseFuncDeclarationy0A6Syntax015RawFunctionDeclF0VAC0I10AttributesV_AA25RecoveryConsumptionHandleVtF`                                                    | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift` |
|    new | +18.704 MiB | 0.0% → 29.1% | 0 B → 18.7 MiB | 0 → 22,344 | `$s11SwiftParser0B0V27parseInitializerDeclarationy0A6Syntax03Rawd4DeclF0VAC0H10AttributesV_AA25RecoveryConsumptionHandleVtF`                                                    | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift` |
|    new | +14.814 MiB | 0.0% → 23.0% | 0 B → 14.8 MiB | 0 → 18,564 | `$s11SwiftParser0B0V25parseExtensionDeclarationy0A6Syntax03Rawd4DeclF0VAC0H10AttributesV_AA25RecoveryConsumptionHandleVtF`                                                      | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift` |

##### `$s11SwiftSyntax010SourceFileB0V0A6ParserE5parse4fromAcD0E0Vz_tFZAA03RawcdB0VAHzXEfU_` (`/src/.build/checkouts/swift-syntax/Sources/SwiftParser/generated/LayoutNodes+Parsable.swift`)

| Change |       Delta |             % |           Size |    Objects | Callee                                                      | Location                                                                |
| -----: | ----------: | ------------: | -------------: | ---------: | ----------------------------------------------------------- | ----------------------------------------------------------------------- |
|    new | +56.918 MiB | 0.0% → 100.0% | 0 B → 56.9 MiB | 0 → 59,378 | `$s11SwiftParser0B0V15parseSourceFile0A6Syntax03RawdeF0VyF` | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift` |

##### `$s11SwiftParser15SyntaxParseablePAAE5parse33_A2E5EEB4E7271C1F548910D9ED42E2EBLL4fromADxAA0B0Vz_qd__AHzXEt0aC003RawC12NodeProtocolRd__lFZAI010SourceFileC0V_AI0qtuC0VTt2g5` (`/src/.build/checkouts/swift-syntax/Sources/SwiftParser/generated/LayoutNodes+Parsable.swift`)

| Change |       Delta |             % |           Size |    Objects | Callee                                                                                 | Location                                                                                      |
| -----: | ----------: | ------------: | -------------: | ---------: | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|    new | +56.918 MiB | 0.0% → 100.0% | 0 B → 56.9 MiB | 0 → 59,378 | `$s11SwiftSyntax010SourceFileB0V0A6ParserE5parse4fromAcD0E0Vz_tFZAA03RawcdB0VAHzXEfU_` | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/generated/LayoutNodes+Parsable.swift` |

##### `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

| Change |       Delta |             % |           Size |   Objects | Callee                                                                                                    | Location                                                                               |
| -----: | ----------: | ------------: | -------------: | --------: | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
|    new | +40.415 MiB | 0.0% → 100.0% | 0 B → 40.4 MiB | 0 → 7,278 | `$s11SwiftSyntax0B7VisitorC018visitCodeBlockItemB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`     | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
|    new | +40.415 MiB | 0.0% → 100.0% | 0 B → 40.4 MiB | 0 → 7,278 | `$s11SwiftSyntax0B7VisitorC022visitCodeBlockItemListB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
|    new | +40.217 MiB |  0.0% → 99.5% | 0 B → 40.2 MiB | 0 → 7,098 | `$s11SwiftSyntax0B0V12layoutBufferAA014ArenaAllocatedD7PointerVyAA0efG0VyAA0B4DataVGSgGvg`                | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift`                  |
|    new | +38.614 MiB |  0.0% → 95.5% | 0 B → 38.6 MiB | 0 → 6,750 | `$s11SwiftSyntax0B7VisitorC016visitMemberBlockB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`       | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
|    new |  +38.43 MiB |  0.0% → 95.1% | 0 B → 38.4 MiB | 0 → 6,702 | `$s11SwiftSyntax0B7VisitorC020visitMemberBlockItemB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`   | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |

##### `$s11SwiftSyntax0B7VisitorC018visitCodeBlockItemB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

| Change |       Delta |             % |           Size |   Objects | Callee                                                                                    | Location                                                                               |
| -----: | ----------: | ------------: | -------------: | --------: | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
|    new | +40.415 MiB | 0.0% → 100.0% | 0 B → 40.4 MiB | 0 → 7,278 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |

##### `$s11SwiftSyntax0B7VisitorC022visitCodeBlockItemListB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

| Change |       Delta |             % |           Size |   Objects | Callee                                                                                    | Location                                                                               |
| -----: | ----------: | ------------: | -------------: | --------: | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
|    new | +40.415 MiB | 0.0% → 100.0% | 0 B → 40.4 MiB | 0 → 7,278 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |

##### `$s11SwiftSyntax0B9DataArenaC012createLayoutC4Impl33_B3300DB0BA2B3E5E35A338B811650793LLySRyAA0D16AllocatedPointerVyAA0bC0VGSgGAJF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift`)

| Change |       Delta |            % |           Size |   Objects | Callee                                                                                                                                                                                                      | Location                                                                        |
| -----: | ----------: | -----------: | -------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
|    new |  +22.78 MiB | 0.0% → 56.6% | 0 B → 22.8 MiB | 0 → 3,942 | `$s11SwiftSyntax0B9DataArenaC06createC4Impl33_B3300DB0BA2B3E5E35A338B811650793LL9allocator3raw6parent12absoluteInfoAA0D16AllocatedPointerVyAA0bC0VGAA16BumpPtrAllocatorC_AA03RawB0VANSgAA08AbsolutebS0VtFZ` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift`           |
|    new | +17.436 MiB | 0.0% → 43.4% | 0 B → 17.4 MiB | 0 → 3,156 | `$s11SwiftSyntax16BumpPtrAllocatorC8allocate_5countSryxGxm_SitlFAA21ArenaAllocatedPointerVyAA0B4DataVGSg_Ttg5`                                                                                              | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift` |

##### `$s11SwiftSyntax0B9DataArenaC6layout3forAA0D22AllocatedBufferPointerVyAA0dgI0VyAA0bC0VGSgGAL_tF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift`)

| Change |       Delta |             % |           Size |   Objects | Callee                                                                                                                             | Location                                                              |
| -----: | ----------: | ------------: | -------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
|    new | +40.217 MiB | 0.0% → 100.0% | 0 B → 40.2 MiB | 0 → 7,098 | `$s11SwiftSyntax0B9DataArenaC012createLayoutC4Impl33_B3300DB0BA2B3E5E35A338B811650793LLySRyAA0D16AllocatedPointerVyAA0bC0VGSgGAJF` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift` |

##### `$s11SwiftSyntax0B0V12layoutBufferAA014ArenaAllocatedD7PointerVyAA0efG0VyAA0B4DataVGSgGvg` (`/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift`)

| Change |       Delta |             % |           Size |   Objects | Callee                                                                                           | Location                                                              |
| -----: | ----------: | ------------: | -------------: | --------: | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
|    new | +40.217 MiB | 0.0% → 100.0% | 0 B → 40.2 MiB | 0 → 7,098 | `$s11SwiftSyntax0B9DataArenaC6layout3forAA0D22AllocatedBufferPointerVyAA0dgI0VyAA0bC0VGSgGAL_tF` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift` |

##### `$s11SwiftSyntax0B7VisitorC015visitSourceFileB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

| Change |       Delta |             % |           Size |   Objects | Callee                                                                                    | Location                                                                                  |
| -----: | ----------: | ------------: | -------------: | --------: | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
|    new | +39.743 MiB | 0.0% → 100.0% | 0 B → 39.7 MiB | 0 → 7,116 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`    |
|    new |      +248 B |  0.0% → <0.1% |    0 B → 248 B |     0 → 1 | `$s11SwiftSyntax0B10AnyVisitorC5visityAA0bD12ContinueKindOAA010BorrowExprB0VF`            | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxAnyVisitor.swift` |

##### `$s11SwiftSyntax0B7VisitorC016visitMemberBlockB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

| Change |       Delta |             % |           Size |   Objects | Callee                                                                                    | Location                                                                               |
| -----: | ----------: | ------------: | -------------: | --------: | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
|    new | +38.641 MiB | 0.0% → 100.0% | 0 B → 38.6 MiB | 0 → 6,756 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |

##### `$s11SwiftSyntax0B7VisitorC020visitMemberBlockItemB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

| Change |      Delta |             % |           Size |   Objects | Callee                                                                                    | Location                                                                               |
| -----: | ---------: | ------------: | -------------: | --------: | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
|    new | +38.46 MiB | 0.0% → 100.0% | 0 B → 38.5 MiB | 0 → 6,714 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |

##### `$s11SwiftSyntax0B7VisitorC024visitMemberBlockItemListB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

| Change |      Delta |             % |           Size |   Objects | Callee                                                                                    | Location                                                                               |
| -----: | ---------: | ------------: | -------------: | --------: | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
|    new | +38.43 MiB | 0.0% → 100.0% | 0 B → 38.4 MiB | 0 → 6,702 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |

##### `$s11SwiftSyntax0B7VisitorC4walkyyxAA0B8ProtocolRzlF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change |        Delta |             % |           Size |   Objects | Callee                                                                                             | Location                                                                               |
| ------: | -----------: | ------------: | -------------: | --------: | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
|     new |  +38.328 MiB | 0.0% → 100.0% | 0 B → 38.3 MiB | 0 → 6,955 | `$s11SwiftSyntax0B7VisitorC015visitSourceFileB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -506.919 KiB | 100.0% → 0.0% |  507 KiB → 0 B | 3,721 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF`                  | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |

##### `$s11SwiftSyntax03RawB5ArenaC6internySPyAA0cB4DataVGAFF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntaxArena.swift`)

| Change |       Delta |             % |           Size |   Objects | Callee                                                                               | Location                                                                        |
| -----: | ----------: | ------------: | -------------: | --------: | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
|    new | +30.064 MiB | 0.0% → 100.0% | 0 B → 30.1 MiB | 0 → 4,296 | `$s11SwiftSyntax16BumpPtrAllocatorC8allocate_5countSryxGxm_SitlFAA03RawB4DataV_Ttg5` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift` |

##### `$s11SwiftSyntax03RawB0V5arena7payloadAcA0cB5ArenaCh_AA0cB4DataV7PayloadOtcfC` (`/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`)

| Change |       Delta |             % |           Size |   Objects | Callee                                                   | Location                                                                          |
| -----: | ----------: | ------------: | -------------: | --------: | -------------------------------------------------------- | --------------------------------------------------------------------------------- |
|    new | +30.064 MiB | 0.0% → 100.0% | 0 B → 30.1 MiB | 0 → 4,296 | `$s11SwiftSyntax03RawB5ArenaC6internySPyAA0cB4DataVGAFF` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntaxArena.swift` |

##### `_start` (`<unknown>`)

| Change |       Delta |      % |                Size |          Objects | Callee    | Location                               |
| -----: | ----------: | -----: | ------------------: | ---------------: | --------- | -------------------------------------- |
| +48.7% | +26.813 MiB | 100.0% | 55.1 MiB → 81.9 MiB | 106,418 → 59,971 | `0x28597` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x28597` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |      Delta |      % |                Size |          Objects | Callee    | Location                               |
| -----: | ---------: | -----: | ------------------: | ---------------: | --------- | -------------------------------------- |
| +42.7% | +26.23 MiB | 100.0% | 61.5 MiB → 87.7 MiB | 109,040 → 61,543 | `0x284c3` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `$s11SwiftParser0B0V23parseBindingDeclaration__2in0A6Syntax015RawVariableDeclG0VAC0J10AttributesV_AA25RecoveryConsumptionHandleVAC0E12ParseContextOtF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift`)

| Change |       Delta |            % |           Size |   Objects | Callee                                                                                                                                                                                                                                                                          | Location                                                                                      |
| -----: | ----------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|    new | +15.583 MiB | 0.0% → 65.0% | 0 B → 15.6 MiB | 0 → 9,822 | `$s11SwiftParser0B0V18parseAccessorBlock0A6Syntax03RawdeF0VyF`                                                                                                                                                                                                                  | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift`                   |
|    new |  +3.773 MiB | 0.0% → 15.7% | 0 B → 3.77 MiB | 0 → 5,046 | `$s11SwiftParser0B0V15parseExpression6flavor7pattern0A6Syntax07RawExprG0VAC0I6FlavorO_AC14PatternContextOtF`                                                                                                                                                                    | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`                    |
|    new |    +2.4 MiB | 0.0% → 10.0% |  0 B → 2.4 MiB |   0 → 378 | `$s11SwiftParser0B0V17parseTypedPattern29allowRecoveryFromMissingColon0A6Syntax03RaweK0V_AF0l14TypeAnnotationK0VSgtSb_tF`                                                                                                                                                       | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Patterns.swift`                       |
|    new |  +1.335 MiB |  0.0% → 5.6% | 0 B → 1.34 MiB |   0 → 162 | `$s11SwiftSyntax017RawPatternBindingB0V_7pattern_14typeAnnotation_11initializer_13accessorBlock_13trailingComma_5arenaAcA0c15UnexpectedNodesB0VSg_xAlA0c4TypehB0VSgAlA0c17InitializerClauseB0VSgAlA0c8AccessorkB0VSgAlA0c5TokenB0VSgAlA0cB5ArenaChtcAA0cdB12NodeProtocolRzlufC` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/raw/RawSyntaxNodesOP.swift` |
|    new | +531.75 KiB |  0.0% → 2.2% |  0 B → 532 KiB |   0 → 126 | `$s11SwiftParser0B0V3eaty0A6Syntax018RawUnexpectedNodesD0VSg_AE0e5TokenD0VtAA25RecoveryConsumptionHandleVF`                                                                                                                                                                     | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Parser.swift`                         |

##### `0x284c3` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |       Delta |      % |                Size |          Objects | Callee         | Location                          |
| -----: | ----------: | -----: | ------------------: | ---------------: | -------------- | --------------------------------- |
| +33.7% | +23.714 MiB | 100.0% | 70.4 MiB → 94.1 MiB | 121,124 → 62,995 | `profile_main` | `/src/Sources/profile/main.swift` |

##### `$s11SwiftSyntax020RawInitializerClauseB0V_5equal_5value_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0cB5ArenaChtcAA0c4ExprB12NodeProtocolRzlufC` (`<unknown>`)

| Change |      Delta |             % |           Size | Objects | Callee                                                                                                                                                     | Location                   |
| -----: | ---------: | ------------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|    new | +1.221 MiB | 0.0% → 100.0% | 0 B → 1.22 MiB | 0 → 138 | `$s11SwiftSyntax012RawInOutExprB0V_9ampersand_10expression_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0cB5ArenaChtcAA0cfB12NodeProtocolRzlufCTm` | `AbsolutePosition.swift.o` |

##### `$s11SwiftSyntax023RawOptionalChainingExprB0V_10expression_12questionMark_5arenaAcA0c15UnexpectedNodesB0VSg_xAiA0c5TokenB0VAiA0cB5ArenaChtcAA0cfB12NodeProtocolRzlufC` (`<unknown>`)

| Change |    Delta |             % |          Size | Objects | Callee                                                                                                                                                                   | Location                   |
| -----: | -------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
|    new | +600 KiB | 0.0% → 100.0% | 0 B → 600 KiB |  0 → 66 | `$s11SwiftSyntax023RawOptionalChainingExprB0V_10expression_12questionMark_5arenaAcA0c15UnexpectedNodesB0VSg_xAiA0c5TokenB0VAiA0cB5ArenaChtcAA0cfB12NodeProtocolRzlufCTm` | `AbsolutePosition.swift.o` |

##### `$s11SwiftSyntax017RawTypeAnnotationB0V_5colon_4type_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0cB5ArenaChtcAA0cdB12NodeProtocolRzlufC` (`<unknown>`)

| Change |    Delta |             % |          Size | Objects | Callee                                                                                                                                                           | Location                   |
| -----: | -------: | ------------: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|    new | +408 KiB | 0.0% → 100.0% | 0 B → 408 KiB |  0 → 48 | `$s11SwiftSyntax011RawThenStmtB0V_11thenKeyword_10expression_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0cB5ArenaChtcAA0c4ExprB12NodeProtocolRzlufCTm` | `AbsolutePosition.swift.o` |

##### `$s11SwiftSyntax022RawValueBindingPatternB0V_16bindingSpecifier_7pattern_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0cB5ArenaChtcAA0cfB12NodeProtocolRzlufC` (`<unknown>`)

| Change |    Delta |             % |          Size | Objects | Callee                                                                                                                                                           | Location                   |
| -----: | -------: | ------------: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|    new | +192 KiB | 0.0% → 100.0% | 0 B → 192 KiB |  0 → 24 | `$s11SwiftSyntax011RawThenStmtB0V_11thenKeyword_10expression_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0cB5ArenaChtcAA0c4ExprB12NodeProtocolRzlufCTm` | `AbsolutePosition.swift.o` |

##### `$s11SwiftSyntax021RawPrefixOperatorExprB0V_8operator_10expression_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0cB5ArenaChtcAA0cfB12NodeProtocolRzlufC` (`<unknown>`)

| Change |   Delta |             % |         Size | Objects | Callee                                                                                                                                                       | Location                   |
| -----: | ------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
|    new | +48 KiB | 0.0% → 100.0% | 0 B → 48 KiB |  0 → 12 | `$s11SwiftSyntax018RawPackElementExprB0V_11eachKeyword_4pack_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0cB5ArenaChtcAA0cfB12NodeProtocolRzlufCTm` | `AbsolutePosition.swift.o` |

##### `$s11SwiftSyntax015RawOptionalTypeB0V_07wrappedE0_12questionMark_5arenaAcA0c15UnexpectedNodesB0VSg_xAiA0c5TokenB0VAiA0cB5ArenaChtcAA0ceB12NodeProtocolRzlufC` (`<unknown>`)

| Change |   Delta |             % |         Size | Objects | Callee                                                                                                                                                                   | Location                   |
| -----: | ------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
|    new | +48 KiB | 0.0% → 100.0% | 0 B → 48 KiB |  0 → 12 | `$s11SwiftSyntax023RawOptionalChainingExprB0V_10expression_12questionMark_5arenaAcA0c15UnexpectedNodesB0VSg_xAiA0c5TokenB0VAiA0cB5ArenaChtcAA0cfB12NodeProtocolRzlufCTm` | `AbsolutePosition.swift.o` |

##### `$s11SwiftSyntax015RawReturnClauseB0V_5arrow_4type_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0cB5ArenaChtcAA0c4TypeB12NodeProtocolRzlufC` (`<unknown>`)

| Change |   Delta |             % |         Size | Objects | Callee                                                                                                                                                 | Location                   |
| -----: | ------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
|    new | +48 KiB | 0.0% → 100.0% | 0 B → 48 KiB |   0 → 6 | `$s11SwiftSyntax015RawReturnClauseB0V_5arrow_4type_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0cB5ArenaChtcAA0c4TypeB12NodeProtocolRzlufCTm` | `AbsolutePosition.swift.o` |

##### `$s11SwiftSyntax016RawInheritedTypeB0V_4type_13trailingComma_5arenaAcA0c15UnexpectedNodesB0VSg_xAiA0c5TokenB0VSgAiA0cB5ArenaChtcAA0ceB12NodeProtocolRzlufC` (`<unknown>`)

| Change |   Delta |             % |         Size | Objects | Callee                                                                                                                                                                              | Location                   |
| -----: | ------: | ------------: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|    new | +48 KiB | 0.0% → 100.0% | 0 B → 48 KiB |   0 → 6 | `$s11SwiftSyntax028RawGenericSpecializationExprB0V_10expression_21genericArgumentClause_5arenaAcA0c15UnexpectedNodesB0VSg_xAiA0cdijB0VAiA0cB5ArenaChtcAA0cfB12NodeProtocolRzlufCTm` | `AbsolutePosition.swift.o` |

##### `0x1c448f` (`/usr/lib/swift/linux/libswiftCore.so`)

| Change |       Delta |             % |           Size | Objects | Callee     | Location                               |
| -----: | ----------: | ------------: | -------------: | ------: | ---------- | -------------------------------------- |
|    new | +27.093 KiB | 0.0% → 100.0% | 0 B → 27.1 KiB | 0 → 408 | `0x3e5a1f` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `0x1bcdab` (`/usr/lib/swift/linux/libFoundationEssentials.so`)

| Change |       Delta |             % |           Size | Objects | Callee     | Location                               |
| -----: | ----------: | ------------: | -------------: | ------: | ---------- | -------------------------------------- |
|    new | +27.093 KiB | 0.0% → 100.0% | 0 B → 27.1 KiB | 0 → 408 | `0x1c448f` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `0x36e053` (`/usr/lib/swift/linux/libFoundationEssentials.so`)

| Change |       Delta |             % |           Size | Objects | Callee     | Location                                          |
| -----: | ----------: | ------------: | -------------: | ------: | ---------- | ------------------------------------------------- |
|    new | +27.093 KiB | 0.0% → 100.0% | 0 B → 27.1 KiB | 0 → 408 | `0x1bcdab` | `/usr/lib/swift/linux/libFoundationEssentials.so` |

##### `0x22db57` (`/usr/lib/swift/linux/libFoundation.so`)

|  Change |       Delta |             % |           Size | Objects | Callee     | Location                                          |
| ------: | ----------: | ------------: | -------------: | ------: | ---------- | ------------------------------------------------- |
|     new | +27.093 KiB | 0.0% → 100.0% | 0 B → 27.1 KiB | 0 → 408 | `0x36e053` | `/usr/lib/swift/linux/libFoundationEssentials.so` |
| removed |       -77 B | 100.0% → 0.0% |     77 B → 0 B |   1 → 0 | `0x36e0b7` | `/usr/lib/swift/linux/libFoundationEssentials.so` |

##### `0x2f99e3` (`/usr/lib/swift/linux/libFoundation.so`)

|    Change |      Delta |             % |                Size |   Objects | Callee     | Location                                |
| --------: | ---------: | ------------: | ------------------: | --------: | ---------- | --------------------------------------- |
| +13500.0% | +6.328 KiB |  0.1% → 16.4% |     48 B → 6.38 KiB |   1 → 408 | `0x2f9c17` | `/usr/lib/swift/linux/libFoundation.so` |
|     +0.2% |      +64 B | 99.8% → 83.6% | 32.4 KiB → 32.5 KiB | 399 → 400 | `0x2fa13f` | `/usr/lib/swift/linux/libFoundation.so` |
|   removed |      -16 B |  <0.1% → 0.0% |          16 B → 0 B |     1 → 0 | `0x2f9f83` | `/usr/lib/swift/linux/libFoundation.so` |

##### `0x3f0bc7` (`/usr/lib/swift/linux/libFoundation.so`)

| Change |      Delta |             % |           Size | Objects | Callee     | Location                                |
| -----: | ---------: | ------------: | -------------: | ------: | ---------- | --------------------------------------- |
|    new | +6.375 KiB | 0.0% → 100.0% | 0 B → 6.38 KiB | 0 → 408 | `0x39e55f` | `/usr/lib/swift/linux/libFoundation.so` |

##### `0x2f9c17` (`/usr/lib/swift/linux/libFoundation.so`)

|  Change |      Delta |             % |           Size | Objects | Callee     | Location                                |
| ------: | ---------: | ------------: | -------------: | ------: | ---------- | --------------------------------------- |
|     new | +6.375 KiB | 0.0% → 100.0% | 0 B → 6.38 KiB | 0 → 408 | `0x3f0bc7` | `/usr/lib/swift/linux/libFoundation.so` |
| removed |      -48 B | 100.0% → 0.0% |     48 B → 0 B |   1 → 0 | `0x3f0c27` | `/usr/lib/swift/linux/libFoundation.so` |

##### `$s11SwiftParser0B0V16parseDeclaration16inMemberDeclList0A6Syntax03RawgI0VSb_tF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift`)

|  Change |       Delta |            % |           Size |    Objects | Callee                                                                                                                                                                          | Location                                                                    |
| ------: | ----------: | -----------: | -------------: | ---------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| removed |  -49.58 MiB | 61.6% → 0.0% | 49.6 MiB → 0 B | 92,058 → 0 | `$s11SwiftParser0B0V27parseNominalTypeDeclaration3for5attrs15introucerHandlexxm_AC14DeclAttributesVAA019RecoveryConsumptionJ0VtAA0deF5TraitRzlF0A6Syntax08RawClasskP0V_Tt0g5Tm` | `Attributes.swift.o`                                                        |
| removed | -34.344 MiB | 42.7% → 0.0% | 34.3 MiB → 0 B | 85,014 → 0 | `$s11SwiftParser0B0V23parseBindingDeclaration__16inMemberDeclList0A6Syntax011RawVariablehJ0VAC0H10AttributesV_AA25RecoveryConsumptionHandleVSbtF`                               | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift` |
| removed | -29.919 MiB | 37.2% → 0.0% | 29.9 MiB → 0 B | 45,576 → 0 | `$s11SwiftParser0B0V20parseFuncDeclarationy0A6Syntax015RawFunctionDeclF0VAC0I10AttributesV_AA25RecoveryConsumptionHandleVtF`                                                    | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift` |
| removed | -19.952 MiB | 24.8% → 0.0% |   20 MiB → 0 B | 22,320 → 0 | `$s11SwiftParser0B0V25parseExtensionDeclarationy0A6Syntax03Rawd4DeclF0VAC0H10AttributesV_AA25RecoveryConsumptionHandleVtF`                                                      | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift` |
| removed | -14.719 MiB | 18.3% → 0.0% | 14.7 MiB → 0 B | 24,174 → 0 | `$s11SwiftParser0B0V27parseInitializerDeclarationy0A6Syntax03Rawd4DeclF0VAC0H10AttributesV_AA25RecoveryConsumptionHandleVtF`                                                    | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift` |

##### `$s11SwiftParser0B0V23parseBindingDeclaration__16inMemberDeclList0A6Syntax011RawVariablehJ0VAC0H10AttributesV_AA25RecoveryConsumptionHandleVSbtF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift`)

|  Change |        Delta |            % |           Size |    Objects | Callee                                                                                                                                                                                                                                                                         | Location                                                                                      |
| ------: | -----------: | -----------: | -------------: | ---------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| removed |  -27.431 MiB | 79.8% → 0.0% | 27.4 MiB → 0 B | 65,742 → 0 | `$s11SwiftParser0B0V18parseAccessorBlock0A6Syntax03RawdeF0VyF`                                                                                                                                                                                                                 | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift`                   |
| removed |   -4.501 MiB | 13.1% → 0.0% |  4.5 MiB → 0 B | 16,002 → 0 | `$s11SwiftParser0B0V15parseExpression6flavor7pattern0A6Syntax07RawExprG0VAC0I6FlavorO_AC14PatternContextOtF`                                                                                                                                                                   | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`                    |
| removed | -924.902 KiB |  2.6% → 0.0% |  925 KiB → 0 B |    462 → 0 | `$s11SwiftParser0B0V17parseTypedPattern29allowRecoveryFromMissingColon0A6Syntax03RaweK0V_AF0l14TypeAnnotationK0VSgtSb_tF`                                                                                                                                                      | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Patterns.swift`                       |
| removed |     -696 KiB |  2.0% → 0.0% |  696 KiB → 0 B |    108 → 0 | `$s11SwiftSyntax017RawPatternBindingB0V_7pattern_14typeAnnotation_11initializer_13accessorBlock_13trailingComma_5arenaAcA0c15UnexpectedNodesB0VSg_xAlA0c4TypehB0VSgAlA0c17InitializerClauseB0VSgAlA0c8AccessorkB0VSgAlA0c5TokenB0VSgAlA0B5ArenaChtcAA0cdB12NodeProtocolRzlufC` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/raw/RawSyntaxNodesOP.swift` |
| removed |     -552 KiB |  1.6% → 0.0% |  552 KiB → 0 B |    114 → 0 | `$s11SwiftParser0B0V3eaty0A6Syntax018RawUnexpectedNodesD0VSg_AE0e5TokenD0VtAA25RecoveryConsumptionHandleVF`                                                                                                                                                                    | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Parser.swift`                         |

##### `$s11SwiftSyntax0B5ArenaC6internySPyAA03RawB4DataVGAFF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxArena.swift`)

|  Change |       Delta |             % |           Size |   Objects | Callee                                                                               | Location                                                                        |
| ------: | ----------: | ------------: | -------------: | --------: | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| removed | -30.127 MiB | 100.0% → 0.0% | 30.1 MiB → 0 B | 5,160 → 0 | `$s11SwiftSyntax16BumpPtrAllocatorC8allocate_5countSryxGxm_SitlFAA03RawB4DataV_Ttg5` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift` |

##### `$s11SwiftSyntax03RawB0V5arena7payloadAcA0B5ArenaCh_AA0cB4DataV7PayloadOtcfC` (`/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`)

|  Change |       Delta |             % |           Size |   Objects | Callee                                                  | Location                                                                   |
| ------: | ----------: | ------------: | -------------: | --------: | ------------------------------------------------------- | -------------------------------------------------------------------------- |
| removed | -30.127 MiB | 100.0% → 0.0% | 30.1 MiB → 0 B | 5,160 → 0 | `$s11SwiftSyntax0B5ArenaC6internySPyAA03RawB4DataVGAFF` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxArena.swift` |

##### `$s11SwiftParser0B0V22parseCodeBlockItemList12isAtTopLevel13allowInitDecl5until0A6Syntax03RawdefgP0VSb_S2bACzXEtF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`)

|  Change |        Delta |             % |                Size |          Objects | Callee                                                                                              | Location                                                                                     |
| ------: | -----------: | ------------: | ------------------: | ---------------: | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|  -32.2% |  -20.473 MiB | 99.6% → 99.7% | 63.7 MiB → 43.2 MiB | 122,610 → 54,642 | `$s11SwiftParser0B0V18parseCodeBlockItem12isAtTopLevel13allowInitDecl0A6Syntax03RawdefN0VSgSb_SbtF` | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`                      |
| removed |     -480 KiB |   0.7% → 0.0% |       480 KiB → 0 B |           66 → 0 | `$s11SwiftSyntax020RawCodeBlockItemListB0V8elements5arenaACSayAA0cdefB0VG_AA0B5ArenaChtcfC`         | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/raw/RawSyntaxNodesC.swift` |
|     new | +315.187 KiB |   0.0% → 0.7% |       0 B → 315 KiB |           0 → 84 | `$s11SwiftSyntax020RawCodeBlockItemListB0V8elements5arenaACSayAA0cdefB0VG_AA0cB5ArenaChtcfC`        | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/raw/RawSyntaxNodesC.swift` |
|  -21.6% |  -80.203 KiB |   0.6% → 0.7% |   371 KiB → 291 KiB |    8,970 → 7,080 | `$sSa6appendyyxnF11SwiftSyntax016RawCodeBlockItemC0V_Tg5`                                           | `/<compiler-generated>`                                                                      |

##### `$s11SwiftParser0B0V9parseItem33_008C1B0E0A90478841CED0DF9A7053A1LL12isAtTopLevel13allowInitDecl0A6Syntax012RawCodeBlockdT0V0D0OSb_SbtF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`)

|  Change |       Delta |             % |                Size |         Objects | Callee                                                                                                                                                                                                                          | Location                                                                    |
| ------: | ----------: | ------------: | ------------------: | --------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| removed | -74.889 MiB |  85.4% → 0.0% |      74.9 MiB → 0 B |     135,792 → 0 | `$s11SwiftParser0B0V16parseDeclaration16inMemberDeclList0A6Syntax03RawgI0VSb_tF`                                                                                                                                                | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift` |
|     new | +61.334 MiB |  0.0% → 90.5% |      0 B → 61.3 MiB |      0 → 72,906 | `$s11SwiftParser0B0V16parseDeclaration2in0A6Syntax07RawDeclF0VAC0D12ParseContextO_tF`                                                                                                                                           | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift` |
|  -34.3% | -14.275 MiB | 47.5% → 40.4% | 41.7 MiB → 27.4 MiB | 56,040 → 43,224 | `$s11SwiftParser0B0V18parseStatementItem33_008C1B0E0A90478841CED0DF9A7053A1LL0A6Syntax012RawCodeBlockeN0V0E0OyF`                                                                                                                | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`     |
|  -29.9% |  -9.125 MiB | 34.8% → 31.5% | 30.5 MiB → 21.4 MiB | 83,310 → 24,840 | `$s11SwiftParser0B0V15parseExpression6flavor7pattern0A6Syntax07RawExprG0VAC0I6FlavorO_AC14PatternContextOtF`                                                                                                                    | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`  |
| removed |  -8.865 MiB |  10.1% → 0.0% |      8.87 MiB → 0 B |      14,556 → 0 | `$s11SwiftParser0B0V21parsePoundIfDirective_012addSemicolonE6Needed6syntax0A6Syntax03Rawe10ConfigDeclK0VxSgACz_SbtXE_AJx_SbACztXEAG0lem6ClauseK0V8ElementsOSgACz_SayxGtXEtAG0lK12NodeProtocolRzlFAG0l14SwitchCaseListK0V_Tg5Tm` | `Attributes.swift.o`                                                        |

##### `$s11SwiftParser0B0V18parseCodeBlockItem12isAtTopLevel13allowInitDecl0A6Syntax03RawdefN0VSgSb_SbtF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`)

|  Change |       Delta |           % |                Size |          Objects | Callee                                                                                                                                   | Location                                                                                     |
| ------: | ----------: | ----------: | ------------------: | ---------------: | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|  -22.7% | -19.845 MiB |      100.0% | 87.6 MiB → 67.7 MiB | 148,874 → 78,008 | `$s11SwiftParser0B0V9parseItem33_008C1B0E0A90478841CED0DF9A7053A1LL12isAtTopLevel13allowInitDecl0A6Syntax012RawCodeBlockdT0V0D0OSb_SbtF` | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`                      |
|     new |  +1.281 MiB | 0.0% → 1.9% |      0 B → 1.28 MiB |          0 → 252 | `$s11SwiftSyntax016RawCodeBlockItemB0V_4item_9semicolon_5arenaAcA0c15UnexpectedNodesB0VSg_AC0F0OAiA0c5TokenB0VSgAiA0cB5ArenaChtcfC`      | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/raw/RawSyntaxNodesC.swift` |
| removed |  -1.196 MiB | 1.4% → 0.0% |       1.2 MiB → 0 B |          198 → 0 | `$s11SwiftSyntax016RawCodeBlockItemB0V_4item_9semicolon_5arenaAcA0c15UnexpectedNodesB0VSg_AC0F0OAiA0c5TokenB0VSgAiA0B5ArenaChtcfC`       | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/raw/RawSyntaxNodesC.swift` |
|  -66.3% |  -1.014 MiB | 1.7% → 0.8% |  1.53 MiB → 528 KiB |        390 → 186 | `$s11SwiftParser0B0V31registerNodeForIncrementalParse4node10startTokeny0A6Syntax03RawK0V_AA5LexerO6LexemeVtF`                            | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/IncrementalParseTransition.swift`    |

##### `$s11SwiftSyntax03RawB0V11parsedToken4kind9wholeText9textRange8presence15tokenDiagnostic5arenaAcA0cE4KindO_AA0bH0VSnySiGAA14SourcePresenceOAA0eM0VSgAA07ParsingB5ArenaChtFZTf4nnnnnnd_n` (`/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`)

|  Change |      Delta |             % |           Size |   Objects | Callee                                                                        | Location                                                                     |
| ------: | ---------: | ------------: | -------------: | --------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| removed | -19.64 MiB | 100.0% → 0.0% | 19.6 MiB → 0 B | 3,570 → 0 | `$s11SwiftSyntax03RawB0V5arena7payloadAcA0B5ArenaCh_AA0cB4DataV7PayloadOtcfC` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift` |

##### `$s11SwiftParser0B0V14parseCodeBlock10introducer13allowInitDecl0A6Syntax03RawdeJ0VAG0k5TokenJ0VSg_SbtF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`)

|  Change |        Delta |             % |                Size |          Objects | Callee                                                                                                                                                       | Location                                                                                     |
| ------: | -----------: | ------------: | ------------------: | ---------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
|  -35.6% |  -19.794 MiB | 99.2% → 97.4% | 55.5 MiB → 35.7 MiB | 114,918 → 46,332 | `$s11SwiftParser0B0V22parseCodeBlockItemList12isAtTopLevel13allowInitDecl5until0A6Syntax03RawdefgP0VSb_S2bACzXEtF`                                           | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`                      |
|     new |   +1.054 MiB |   0.0% → 2.9% |      0 B → 1.05 MiB |          0 → 186 | `$s11SwiftSyntax012RawCodeBlockB0V_9leftBrace_10statements_05rightG0_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAjA0cde8ItemListB0VAjljA0cB5ArenaChtcfC` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/raw/RawSyntaxNodesC.swift` |
| removed | -651.187 KiB |   1.1% → 0.0% |       651 KiB → 0 B |          114 → 0 | `$s11SwiftSyntax012RawCodeBlockB0V_9leftBrace_10statements_05rightG0_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAjA0cde8ItemListB0VAjljA0B5ArenaChtcfC`  | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/raw/RawSyntaxNodesC.swift` |
| +100.0% |      +96 KiB |   0.2% → 0.5% |    96 KiB → 192 KiB |          18 → 24 | `$s11SwiftParser0B0V6expecty0A6Syntax018RawUnexpectedNodesD0VSg10unexpected_AE0e5TokenD0V5tokentAA0I4SpecVF`                                                 | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Parser.swift`                        |
|  +58.4% |   +44.25 KiB |   0.1% → 0.3% |  75.8 KiB → 120 KiB |          24 → 30 | `$s11SwiftParser0B0V16expectRightBrace04leftE010introducer0A6Syntax018RawUnexpectedNodesH0VSg10unexpected_AG0i5TokenH0V5tokentAM_AMSgtF`                     | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Parser.swift`                        |

##### `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZTf4nnnnnd_n` (`/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`)

|  Change |       Delta |            % |           Size |   Objects | Callee                                                                                                                                                                                                              | Location                                                                     |
| ------: | ----------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| removed | -10.345 MiB | 53.8% → 0.0% | 10.3 MiB → 0 B | 1,554 → 0 | `$s11SwiftSyntax03RawB0V6layout33_387FCEF5221330B5D0404835477A54E9LL4kindAD10byteLength15descendantCount14recursiveFlags5arenaAcA0B4KindO_AA0B27ArenaAllocatedBufferPointerVyACSgGS2iAA09RecursivecbP0VAA0bS0ChtFZ` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift` |
| removed |  -8.881 MiB | 46.2% → 0.0% | 8.88 MiB → 0 B | 1,044 → 0 | `$s11SwiftSyntax0B5ArenaC011allocateRawB6Buffer5countSryAA0eB0VSgGSi_tF`                                                                                                                                            | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxArena.swift`   |

##### `$s11SwiftParser0B0V22parseOptionalCodeBlock13allowInitDecl0A6Syntax03RawefJ0VSgSb_tF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`)

| Change |       Delta |      % |                Size |          Objects | Callee                                                                                                  | Location                                                                |
| -----: | ----------: | -----: | ------------------: | ---------------: | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| -34.5% | -18.985 MiB | 100.0% | 55.1 MiB → 36.1 MiB | 113,856 → 45,654 | `$s11SwiftParser0B0V14parseCodeBlock10introducer13allowInitDecl0A6Syntax03RawdeJ0VAG0k5TokenJ0VSg_SbtF` | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift` |

##### `$s11SwiftParser0B0V30parseSequenceExpressionElement6flavor7pattern0A6Syntax07RawExprI0VAC0K6FlavorO_AC14PatternContextOtF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`)

| Change |       Delta |             % |                Size |         Objects | Callee                                                                                                                                                                        | Location                                                                                         |
| -----: | ----------: | ------------: | ------------------: | --------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| -36.8% | -16.202 MiB | 87.5% → 81.9% | 44.1 MiB → 27.9 MiB | 77,946 → 27,456 | `$s11SwiftParser0B0V28parsePostfixExpressionSuffix_6flavor7pattern0A6Syntax07RawExprI0VAI_AC0K6FlavorOAC14PatternContextOtF`                                                  | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`                       |
| -35.1% |  -6.861 MiB | 38.8% → 37.3% | 19.6 MiB → 12.7 MiB |  11,262 → 7,662 | `$s11SwiftParser0B0V20parseUnaryExpression6flavor7pattern0A6Syntax07RawExprH0VAC0J6FlavorO_AC14PatternContextOtF`                                                             | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`                       |
| +14.9% | +93.609 KiB |   1.2% → 2.1% |   627 KiB → 720 KiB |    10,572 → 132 | `$s11SwiftParser0B0V22parseKeyPathExpression7pattern0A6Syntax03Rawde4ExprH0VAC14PatternContextO_tF`                                                                           | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`                       |
|    new | +23.062 KiB |   0.0% → 0.1% |      0 B → 23.1 KiB |          0 → 18 | `$s11SwiftSyntax014RawKeyPathExprB0V_9backslash_4root_10components_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAjA0c4TypeB0VSgAjA0cde13ComponentListB0VAjA0cB5ArenaChtcfC` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/raw/RawSyntaxNodesJKLMN.swift` |
|  -4.4% | -20.472 KiB |   0.9% → 1.3% |   470 KiB → 450 KiB |     2,004 → 438 | `$s11SwiftParser0B0V30parseSequenceExpressionElement6flavor7pattern0A6Syntax07RawExprI0VAC0K6FlavorO_AC14PatternContextOtF`                                                   | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`                       |

##### `$s11SwiftParser0B0V28parsePostfixExpressionSuffix_6flavor7pattern0A6Syntax07RawExprI0VAI_AC0K6FlavorOAC14PatternContextOtF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`)

|  Change |      Delta |             % |                Size |         Objects | Callee                                                                                                                                                                                                                                                                                                    | Location                                                                                         |
| ------: | ---------: | ------------: | ------------------: | --------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -37.7% | -9.261 MiB | 55.6% → 54.8% | 24.5 MiB → 15.3 MiB | 59,052 → 21,954 | `$s11SwiftParser0B0V25parseArgumentListElements7pattern6flavor18allowTrailingCommaSay0A6Syntax014RawLabeledExprL0VGAC14PatternContextO_AC0O6FlavorOSbtF`                                                                                                                                                  | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`                       |
| removed | -6.937 MiB |  15.7% → 0.0% |      6.94 MiB → 0 B |         606 → 0 | `$s11SwiftSyntax019RawFunctionCallExprB0V_16calledExpression_9leftParen_9arguments_05rightJ0_15trailingClosure_26additionalTrailingClosures_5arenaAcA0c15UnexpectedNodesB0VSg_xAmA0c5TokenB0VSgAmA0c7Labeledf4ListB0VAmpmA0cnfB0VSgAmA0c8Multiplepn7ElementwB0VAmA0B5ArenaChtcAA0cfB12NodeProtocolRzlufC` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/raw/RawSyntaxNodesEF.swift`    |
| removed | -6.164 MiB |  14.0% → 0.0% |      6.16 MiB → 0 B |         588 → 0 | `$s11SwiftSyntax018RawLabeledExprListB0V8elements5arenaACSayAA0cdeB0VG_AA0B5ArenaChtcfC`                                                                                                                                                                                                                  | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/raw/RawSyntaxNodesJKLMN.swift` |
|  -27.4% | -2.479 MiB | 20.5% → 23.5% | 9.03 MiB → 6.56 MiB |   1,164 → 1,014 | `$s11SwiftParser0B0V27parseDottedExpressionSuffixy0A6Syntax07RawExprG0VAGSgF`                                                                                                                                                                                                                             | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`                       |
|     new | +1.688 MiB |   0.0% → 6.1% |      0 B → 1.69 MiB |         0 → 186 | `$s11SwiftSyntax018RawLabeledExprListB0V8elements5arenaACSayAA0cdeB0VG_AA0cB5ArenaChtcfC`                                                                                                                                                                                                                 | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/raw/RawSyntaxNodesJKLMN.swift` |

##### `$s11SwiftParser0B0V23parseSequenceExpression6flavor7pattern0A6Syntax07RawExprH0VAC0J6FlavorO_AC14PatternContextOtF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`)

|  Change |        Delta |             % |               Size |         Objects | Callee                                                                                                                                            | Location                                                                                      |
| ------: | -----------: | ------------: | -----------------: | --------------: | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|  -32.4% |  -16.336 MiB | 95.8% → 93.5% |  50.4 MiB → 34 MiB | 91,038 → 30,384 | `$s11SwiftParser0B0V30parseSequenceExpressionElement6flavor7pattern0A6Syntax07RawExprI0VAC0K6FlavorO_AC14PatternContextOtF`                       | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`                    |
|  -83.3% |    -1.08 MiB |   2.5% → 0.6% |  1.3 MiB → 221 KiB |  26,742 → 4,428 | `$sSa6appendyyxnF11SwiftSyntax07RawExprC0V_Tg5`                                                                                                   | `/<compiler-generated>`                                                                       |
| removed |     -864 KiB |   1.6% → 0.0% |      864 KiB → 0 B |          90 → 0 | `$s11SwiftSyntax011RawExprListB0V8elements5arenaACSayAA0cdB0VG_AA0B5ArenaChtcfC`                                                                  | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/raw/RawSyntaxNodesEF.swift` |
| +130.0% |  +789.14 KiB |   1.1% → 3.7% | 607 KiB → 1.36 MiB |       108 → 192 | `$s11SwiftParser0B0V31parseSequenceExpressionOperator6flavor7pattern0A6Syntax07RawExprI0V8operator_AISg3rhstSgAC0K6FlavorO_AC14PatternContextOtF` | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`                    |
|     new | +606.375 KiB |   0.0% → 1.6% |      0 B → 606 KiB |         0 → 102 | `$s11SwiftSyntax011RawExprListB0V8elements5arenaACSayAA0cdB0VG_AA0cB5ArenaChtcfC`                                                                 | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/raw/RawSyntaxNodesEF.swift` |

##### `$s11SwiftParser0B0V22parseCodeBlockItemList12isAtTopLevel13allowInitDecl5until0A6Syntax03RawdefgP0VSb_S2bACzXEtF04$s11a9Syntax017defg6B0V0A6b35E5parse4fromAcD0G0Vz_tFZAA03RawcdefT19VAHzXEfU_SbAHzXEfU_Tf1nncn_nTm` (`Attributes.swift.o`)

| Change |       Delta |      % |                Size |          Objects | Callee                                                                                              | Location                                                                |
| -----: | ----------: | -----: | ------------------: | ---------------: | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| -21.4% | -15.743 MiB | 100.0% | 73.5 MiB → 57.8 MiB | 134,408 → 62,282 | `$s11SwiftParser0B0V18parseCodeBlockItem12isAtTopLevel13allowInitDecl0A6Syntax03RawdefN0VSgSb_SbtF` | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift` |

##### `$s11SwiftParser0B0V27parseTopLevelCodeBlockItems0A6Syntax03Rawfg8ItemListI0VyF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`)

| Change |       Delta |      % |              Size |          Objects | Callee                                                                                                                                                                                                                | Location             |
| -----: | ----------: | -----: | ----------------: | ---------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| -21.0% | -15.096 MiB | 100.0% | 72 MiB → 56.9 MiB | 133,694 → 59,378 | `$s11SwiftParser0B0V22parseCodeBlockItemList12isAtTopLevel13allowInitDecl5until0A6Syntax03RawdefgP0VSb_S2bACzXEtF04$s11a9Syntax017defg6B0V0A6b35E5parse4fromAcD0G0Vz_tFZAA03RawcdefT19VAHzXEfU_SbAHzXEfU_Tf1nncn_nTm` | `Attributes.swift.o` |

##### `$s11SwiftParser0B0V15parseSourceFile0A6Syntax03RawdeF0VyF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`)

| Change |       Delta |      % |              Size |          Objects | Callee                                                                           | Location                                                                |
| -----: | ----------: | -----: | ----------------: | ---------------: | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| -21.0% | -15.096 MiB | 100.0% | 72 MiB → 56.9 MiB | 133,694 → 59,378 | `$s11SwiftParser0B0V27parseTopLevelCodeBlockItems0A6Syntax03Rawfg8ItemListI0VyF` | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift` |

##### `$s11SwiftParser0B0V5parse6source0A6Syntax010SourceFileE0VSS_tFZ` (`/src/.build/checkouts/swift-syntax/Sources/SwiftParser/ParseSourceFile.swift`)

| Change |       Delta |             % |                Size |          Objects | Callee                                                                                                                     | Location                                                                                      |
| -----: | ----------: | ------------: | ------------------: | ---------------: | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| -18.0% | -12.213 MiB | 95.8% → 99.8% | 67.9 MiB → 55.6 MiB | 128,480 → 56,528 | `$s11SwiftSyntax010SourceFileB0V0A6ParserE5parse4fromAcD0E0Vz_tFZ`                                                         | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/generated/LayoutNodes+Parsable.swift` |
| -96.4% |  -2.868 MiB |   4.2% → 0.2% |  2.98 MiB → 111 KiB |      762 → 1,770 | `$s11SwiftParser0B0V_19maximumNestingLevel15parseTransition12swiftVersionACSS_SiSgAA016IncrementalParseG0CSgAC0aI0OSgtcfC` | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Parser.swift`                         |

##### `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ` (`/<compiler-generated>`)

|  Change |       Delta |             % |           Size |   Objects | Callee                                                                                                                                                                     | Location                                                                     |
| ------: | ----------: | ------------: | -------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| removed | -14.629 MiB | 100.0% → 0.0% | 14.6 MiB → 0 B | 1,926 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZTf4nnnnnd_n` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift` |

##### `$s11SwiftParser0B0V14parseStatement0A6Syntax07RawStmtE0VyF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Statements.swift`)

| Change |        Delta |             % |                Size |         Objects | Callee                                                                                                          | Location                                                                   |
| -----: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| -35.0% |   -7.687 MiB | 52.7% → 52.1% |   22 MiB → 14.3 MiB | 37,782 → 25,410 | `$s11SwiftParser0B0V21parseSwitchExpression12switchHandle0A6Syntax03Rawd4ExprH0VAA019RecoveryConsumptionG0V_tF` | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift` |
| -37.7% |   -6.198 MiB | 39.5% → 37.4% | 16.5 MiB → 10.3 MiB |   7,554 → 4,746 | `$s11SwiftParser0B0V20parseReturnStatement12returnHandle0A6Syntax03Rawd4StmtH0VAA019RecoveryConsumptionG0V_tF`  | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Statements.swift`  |
| -13.0% | -846.849 KiB | 15.2% → 20.1% | 6.35 MiB → 5.52 MiB | 10,002 → 11,514 | `$s11SwiftParser0B0V17parseIfExpression8ifHandle0A6Syntax03Rawd4ExprH0VAA019RecoveryConsumptionG0V_tF`          | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift` |
| -10.7% | -207.697 KiB |   4.6% → 6.2% |   1.9 MiB → 1.7 MiB |   4,770 → 4,860 | `$s11SwiftParser0B0V19parseGuardStatement11guardHandle0A6Syntax03Rawd4StmtH0VAA019RecoveryConsumptionG0V_tF`    | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Statements.swift`  |
| -36.3% | -199.529 KiB |   1.3% → 1.2% |   550 KiB → 350 KiB |       600 → 312 | `$s11SwiftParser0B0V20parseRepeatStatement12repeatHandle0A6Syntax03Rawd4StmtH0VAA019RecoveryConsumptionG0V_tF`  | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/Statements.swift`  |

##### `0x3e5a1f` (`/usr/lib/swift/linux/libswiftCore.so`)

| Change |      Delta |      % |                Size |          Objects | Callee     | Location                               |
| -----: | ---------: | -----: | ------------------: | ---------------: | ---------- | -------------------------------------- |
| -33.0% | -5.196 MiB | 100.0% | 15.8 MiB → 10.6 MiB | 143,924 → 72,429 | `0x3e562f` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `0x182623` (`/usr/lib/swift/linux/libswiftCore.so`)

| Change |      Delta |      % |               Size |     Objects | Callee     | Location                               |
| -----: | ---------: | -----: | -----------------: | ----------: | ---------- | -------------------------------------- |
| -77.5% | -2.508 MiB | 100.0% | 3.23 MiB → 744 KiB | 4,506 → 378 | `0x3e5a1f` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `$s11SwiftSyntax020RawInitializerClauseB0V_5equal_5value_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0c4ExprB12NodeProtocolRzlufC` (`<unknown>`)

|  Change |      Delta |             % |           Size | Objects | Callee                                                                                                                                                    | Location                   |
| ------: | ---------: | ------------: | -------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| removed | -1.007 MiB | 100.0% → 0.0% | 1.01 MiB → 0 B | 156 → 0 | `$s11SwiftSyntax012RawInOutExprB0V_9ampersand_10expression_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0cfB12NodeProtocolRzlufCTm` | `AbsolutePosition.swift.o` |

##### `$s11SwiftSyntax016RawSomeOrAnyTypeB0V_04someeF9Specifier_10constraint_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0cgB12NodeProtocolRzlufC` (`<unknown>`)

|  Change |    Delta |             % |          Size | Objects | Callee                                                                                                                                                | Location                   |
| ------: | -------: | ------------: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| removed | -480 KiB | 100.0% → 0.0% | 480 KiB → 0 B |  54 → 0 | `$s11SwiftSyntax015RawReturnClauseB0V_5arrow_4type_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0c4TypeB12NodeProtocolRzlufCTm` | `AbsolutePosition.swift.o` |

##### `$s11SwiftSyntax016RawInheritedTypeB0V_4type_13trailingComma_5arenaAcA0c15UnexpectedNodesB0VSg_xAiA0c5TokenB0VSgAiA0B5ArenaChtcAA0ceB12NodeProtocolRzlufC` (`<unknown>`)

|  Change |        Delta |             % |          Size | Objects | Callee                                                                                                                                                                             | Location                   |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| removed | -433.687 KiB | 100.0% → 0.0% | 434 KiB → 0 B |  90 → 0 | `$s11SwiftSyntax028RawGenericSpecializationExprB0V_10expression_21genericArgumentClause_5arenaAcA0c15UnexpectedNodesB0VSg_xAiA0cdijB0VAiA0B5ArenaChtcAA0cfB12NodeProtocolRzlufCTm` | `AbsolutePosition.swift.o` |

##### `$s11SwiftSyntax015RawOptionalTypeB0V_07wrappedE0_12questionMark_5arenaAcA0c15UnexpectedNodesB0VSg_xAiA0c5TokenB0VAiA0B5ArenaChtcAA0ceB12NodeProtocolRzlufC` (`<unknown>`)

|  Change |    Delta |             % |          Size | Objects | Callee                                                                                                                                                                  | Location                   |
| ------: | -------: | ------------: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| removed | -360 KiB | 100.0% → 0.0% | 360 KiB → 0 B |  60 → 0 | `$s11SwiftSyntax023RawOptionalChainingExprB0V_10expression_12questionMark_5arenaAcA0c15UnexpectedNodesB0VSg_xAiA0c5TokenB0VAiA0B5ArenaChtcAA0cfB12NodeProtocolRzlufCTm` | `AbsolutePosition.swift.o` |

##### `$s11SwiftSyntax012RawInOutExprB0V_9ampersand_10expression_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0cfB12NodeProtocolRzlufC` (`<unknown>`)

|  Change |    Delta |             % |          Size | Objects | Callee                                                                                                                                                    | Location                   |
| ------: | -------: | ------------: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| removed | -288 KiB | 100.0% → 0.0% | 288 KiB → 0 B |  12 → 0 | `$s11SwiftSyntax012RawInOutExprB0V_9ampersand_10expression_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0cfB12NodeProtocolRzlufCTm` | `AbsolutePosition.swift.o` |

##### `$s11SwiftSyntax017RawTypeAnnotationB0V_5colon_4type_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0cdB12NodeProtocolRzlufC` (`<unknown>`)

|  Change |       Delta |             % |           Size | Objects | Callee                                                                                                                                                          | Location                   |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| removed | -48.937 KiB | 100.0% → 0.0% | 48.9 KiB → 0 B |  18 → 0 | `$s11SwiftSyntax011RawThenStmtB0V_11thenKeyword_10expression_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0c4ExprB12NodeProtocolRzlufCTm` | `AbsolutePosition.swift.o` |

##### `$s11SwiftSyntax024RawTypeInitializerClauseB0V_5equal_5value_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0cdB12NodeProtocolRzlufC` (`<unknown>`)

|  Change |   Delta |             % |         Size | Objects | Callee                                                                                                                                                          | Location                   |
| ------: | ------: | ------------: | -----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| removed | -48 KiB | 100.0% → 0.0% | 48 KiB → 0 B |  12 → 0 | `$s11SwiftSyntax011RawThenStmtB0V_11thenKeyword_10expression_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0c4ExprB12NodeProtocolRzlufCTm` | `AbsolutePosition.swift.o` |

##### `$s11SwiftSyntax023RawOptionalChainingExprB0V_10expression_12questionMark_5arenaAcA0c15UnexpectedNodesB0VSg_xAiA0c5TokenB0VAiA0B5ArenaChtcAA0cfB12NodeProtocolRzlufC` (`<unknown>`)

|  Change |   Delta |             % |         Size | Objects | Callee                                                                                                                                                                  | Location                   |
| ------: | ------: | ------------: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| removed | -24 KiB | 100.0% → 0.0% | 24 KiB → 0 B |   6 → 0 | `$s11SwiftSyntax023RawOptionalChainingExprB0V_10expression_12questionMark_5arenaAcA0c15UnexpectedNodesB0VSg_xAiA0c5TokenB0VAiA0B5ArenaChtcAA0cfB12NodeProtocolRzlufCTm` | `AbsolutePosition.swift.o` |

##### `$s11SwiftSyntax021RawPrefixOperatorExprB0V_8operator_10expression_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0cfB12NodeProtocolRzlufC` (`<unknown>`)

|  Change |   Delta |             % |         Size | Objects | Callee                                                                                                                                                      | Location                   |
| ------: | ------: | ------------: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| removed | -24 KiB | 100.0% → 0.0% | 24 KiB → 0 B |   6 → 0 | `$s11SwiftSyntax018RawPackElementExprB0V_11eachKeyword_4pack_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0cfB12NodeProtocolRzlufCTm` | `AbsolutePosition.swift.o` |

##### `$s11SwiftSyntax022RawValueBindingPatternB0V_16bindingSpecifier_7pattern_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0cfB12NodeProtocolRzlufC` (`<unknown>`)

|  Change |   Delta |             % |         Size | Objects | Callee                                                                                                                                                          | Location                   |
| ------: | ------: | ------------: | -----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| removed | -24 KiB | 100.0% → 0.0% | 24 KiB → 0 B |   6 → 0 | `$s11SwiftSyntax011RawThenStmtB0V_11thenKeyword_10expression_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0c4ExprB12NodeProtocolRzlufCTm` | `AbsolutePosition.swift.o` |

##### `$s11SwiftSyntax014RawWhereClauseB0V_12whereKeyword_9condition_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0c4ExprB12NodeProtocolRzlufC` (`<unknown>`)

|  Change |   Delta |             % |         Size | Objects | Callee                                                                                                                                                          | Location                   |
| ------: | ------: | ------------: | -----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| removed | -24 KiB | 100.0% → 0.0% | 24 KiB → 0 B |   6 → 0 | `$s11SwiftSyntax011RawThenStmtB0V_11thenKeyword_10expression_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0c4ExprB12NodeProtocolRzlufCTm` | `AbsolutePosition.swift.o` |

##### `$s11SwiftSyntax015RawReturnClauseB0V_5arrow_4type_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0c4TypeB12NodeProtocolRzlufC` (`<unknown>`)

|  Change |      Delta |             % |           Size | Objects | Callee                                                                                                                                                | Location                   |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| removed | -1.125 KiB | 100.0% → 0.0% | 1.13 KiB → 0 B |  12 → 0 | `$s11SwiftSyntax015RawReturnClauseB0V_5arrow_4type_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0c4TypeB12NodeProtocolRzlufCTm` | `AbsolutePosition.swift.o` |

##### `0x290383` (`/usr/lib/swift/linux/libswiftCore.so`)

| Change |  Delta |             % |                Size | Objects | Callee     | Location                               |
| -----: | -----: | ------------: | ------------------: | ------: | ---------- | -------------------------------------- |
|  -9.7% | -272 B | 58.5% → 56.4% | 2.74 KiB → 2.48 KiB |  10 → 9 | `0x3f17a3` | `/usr/lib/swift/linux/libswiftCore.so` |
|  -1.8% |  -32 B | 37.5% → 39.3% | 1.76 KiB → 1.73 KiB | 29 → 28 | `0x3f1c0b` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `0x22e487` (`/usr/lib/swift/linux/libFoundation.so`)

|  Change |  Delta |           % |        Size | Objects | Callee    | Location                               |
| ------: | -----: | ----------: | ----------: | ------: | --------- | -------------------------------------- |
| removed | -120 B | 2.6% → 0.0% | 120 B → 0 B |   1 → 0 | `0xddf9f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -120 B | 2.6% → 0.0% | 120 B → 0 B |   1 → 0 | `0xde077` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x22cf03` (`/usr/lib/swift/linux/libFoundation.so`)

| Change |  Delta |             % |                Size | Objects | Callee     | Location                                |
| -----: | -----: | ------------: | ------------------: | ------: | ---------- | --------------------------------------- |
|  -5.1% | -240 B | 89.6% → 89.0% | 4.55 KiB → 4.32 KiB |   4 → 2 | `0x22e487` | `/usr/lib/swift/linux/libFoundation.so` |

# Retained heap profile diff

Retained 5.82 MiB (-120 B, ~0%) over 359 objects → 357 objects (16.6 KiB → 16.7 KiB per object).

| Category | Change |  Delta |      % |     Size |   Objects |
| -------- | -----: | -----: | -----: | -------: | --------: |
| Native   |    ~0% | -120 B | 100.0% | 5.82 MiB | 359 → 357 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Native

|  Change |  Delta |     % |         Size | Objects | Function   | Location                               |
| ------: | -----: | ----: | -----------: | ------: | ---------- | -------------------------------------- |
| +350.0% | +224 B | <0.1% | 64 B → 288 B |   2 → 3 | `0x3fd793` | `/usr/lib/swift/linux/libswiftCore.so` |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Native

|  Change |  Delta |            % |             Size |   Objects | Function   | Location                               |
| ------: | -----: | -----------: | ---------------: | --------: | ---------- | -------------------------------------- |
|  -24.0% | -280 B |        <0.1% | 1.14 KiB → 888 B |   14 → 13 | `0x3f17a3` | `/usr/lib/swift/linux/libswiftCore.so` |
| removed |  -48 B | <0.1% → 0.0% |       48 B → 0 B |     1 → 0 | `0x3f1f23` | `/usr/lib/swift/linux/libswiftCore.so` |
|     ~0% |  -16 B |        99.8% |          5.8 MiB | 307 → 306 | `0x3e562f` | `/usr/lib/swift/linux/libswiftCore.so` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `0x3fd793` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change |  Delta |      % |         Size | Objects | Caller     | Location                               |
| ------: | -----: | -----: | -----------: | ------: | ---------- | -------------------------------------- |
| +350.0% | +224 B | 100.0% | 64 B → 288 B |   2 → 3 | `0x47ed67` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `0x3f17a3` (`/usr/lib/swift/linux/libswiftCore.so`)

| Change |  Delta |             % |            Size | Objects | Caller     | Location                               |
| -----: | -----: | ------------: | --------------: | ------: | ---------- | -------------------------------------- |
| -27.2% | -272 B | 85.6% → 82.0% | 1,000 B → 728 B |   4 → 3 | `0x290383` | `/usr/lib/swift/linux/libswiftCore.so` |
|  -5.9% |   -8 B | 11.6% → 14.4% |   136 B → 128 B |       8 | `0x290353` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `0x3f1f23` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change | Delta |             % |       Size | Objects | Caller     | Location                               |
| ------: | ----: | ------------: | ---------: | ------: | ---------- | -------------------------------------- |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   1 → 0 | `0x47ed67` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `0x3e562f` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change | Delta |            % |       Size | Objects | Caller     | Location                               |
| ------: | ----: | -----------: | ---------: | ------: | ---------- | -------------------------------------- |
| removed | -16 B | <0.1% → 0.0% | 16 B → 0 B |   1 → 0 | `0x3f1d03` | `/usr/lib/swift/linux/libswiftCore.so` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|  Change |  Delta |            % |               Size | Objects | Function                                                                                                                                                                    | Location                                                                                      |
| ------: | -----: | -----------: | -----------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|     new | +248 B | 0.0% → <0.1% |        0 B → 248 B |   0 → 1 | `$s11SwiftSyntax0B7VisitorC015visitSourceFileB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                          | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
|  +53.8% | +224 B |        <0.1% |      416 B → 640 B |  9 → 10 | `0x3f1c0b`                                                                                                                                                                  | `/usr/lib/swift/linux/libswiftCore.so`                                                        |
| +350.0% | +224 B |        <0.1% |       64 B → 288 B |   2 → 3 | `0x3fd793`                                                                                                                                                                  | `/usr/lib/swift/linux/libswiftCore.so`                                                        |
|  +11.5% | +176 B |        <0.1% | 1.5 KiB → 1.67 KiB |      31 | `0x47ed67`                                                                                                                                                                  | `/usr/lib/swift/linux/libswiftCore.so`                                                        |
|     new |  +64 B | 0.0% → <0.1% |         0 B → 64 B |   0 → 2 | `$s11SwiftSyntax010SourceFileB0V0A6ParserE5parse4fromAcD0E0Vz_tFZAA03RawcdB0VAHzXEfU_`                                                                                      | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/generated/LayoutNodes+Parsable.swift` |
|     new |  +64 B | 0.0% → <0.1% |         0 B → 64 B |   0 → 2 | `$s11SwiftParser15SyntaxParseablePAAE5parse33_A2E5EEB4E7271C1F548910D9ED42E2EBLL4fromADxAA0B0Vz_qd__AHzXEt0aC003RawC12NodeProtocolRd__lFZAI010SourceFileC0V_AI0qtuC0VTt2g5` | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/generated/LayoutNodes+Parsable.swift` |

##### Native

|  Change |  Delta |     % |               Size | Objects | Function   | Location                               |
| ------: | -----: | ----: | -----------------: | ------: | ---------- | -------------------------------------- |
|  +53.8% | +224 B | <0.1% |      416 B → 640 B |  9 → 10 | `0x3f1c0b` | `/usr/lib/swift/linux/libswiftCore.so` |
| +350.0% | +224 B | <0.1% |       64 B → 288 B |   2 → 3 | `0x3fd793` | `/usr/lib/swift/linux/libswiftCore.so` |
|  +11.5% | +176 B | <0.1% | 1.5 KiB → 1.67 KiB |      31 | `0x47ed67` | `/usr/lib/swift/linux/libswiftCore.so` |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |  Delta |            % |                Size |   Objects | Function                                                                                                                                                     | Location                                                                                  |
| ------: | -----: | -----------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
|  -24.0% | -280 B |        <0.1% |    1.14 KiB → 888 B |   14 → 13 | `0x3f17a3`                                                                                                                                                   | `/usr/lib/swift/linux/libswiftCore.so`                                                    |
| removed | -248 B | <0.1% → 0.0% |         248 B → 0 B |     1 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzFAA0bC12ContinueKindOAA010SourceFileB0VcACYbcfu911_AiKcfu912_`                | `/<compiler-generated>`                                                                   |
| removed | -248 B | <0.1% → 0.0% |         248 B → 0 B |     1 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzFAA0bC12ContinueKindOAA010SourceFileB0VcACYbcfu911_AiKcfu912_TA`              | `/<compiler-generated>`                                                                   |
| removed | -248 B | <0.1% → 0.0% |         248 B → 0 B |     1 → 0 | `$s11SwiftSyntax010SourceFileB0VAA0B19VisitorContinueKindOIggd_AcEIegnd_TR`                                                                                  | `/<compiler-generated>`                                                                   |
| removed | -248 B | <0.1% → 0.0% |         248 B → 0 B |     1 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA010SourceFileB0V_Tt0g5` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`    |
| removed | -248 B | <0.1% → 0.0% |         248 B → 0 B |     1 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF`                                                                            | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`    |
|     ~0% |  -64 B |       100.0% |            5.81 MiB | 312 → 310 | `profile_main`                                                                                                                                               | `/src/Sources/profile/main.swift`                                                         |
|     ~0% |  -64 B |       100.0% |            5.81 MiB | 312 → 310 | `0x284c3`                                                                                                                                                    | `/usr/lib/aarch64-linux-gnu/libc.so.6`                                                    |
|     ~0% |  -64 B |       100.0% |            5.81 MiB | 312 → 310 | `0x28597`                                                                                                                                                    | `/usr/lib/aarch64-linux-gnu/libc.so.6`                                                    |
|     ~0% |  -64 B |       100.0% |            5.81 MiB | 312 → 310 | `_start`                                                                                                                                                     | `<unknown>`                                                                               |
| removed |  -64 B | <0.1% → 0.0% |          64 B → 0 B |     2 → 0 | `$s11SwiftSyntax0B14InfoRepository33_144A0750A39B358DE708645CE8EF6248LLV7_BufferCMa`                                                                         | `/<compiler-generated>`                                                                   |
| removed |  -64 B | <0.1% → 0.0% |          64 B → 0 B |     2 → 0 | `$ss13ManagedBufferC6create15minimumCapacity16makingHeaderWithAByxq_GSi_xAFKXEtKFZSi_11SwiftSyntax0J0V4InfoCSgTg5`                                           | `/<compiler-generated>`                                                                   |
| removed |  -64 B | <0.1% → 0.0% |          64 B → 0 B |     2 → 0 | `$s11SwiftSyntax0B14InfoRepository33_144A0750A39B358DE708645CE8EF6248LLVADycfC`                                                                              | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxNodeFactory.swift`          |
| removed |  -64 B | <0.1% → 0.0% |          64 B → 0 B |     2 → 0 | `$s11SwiftSyntax0B11NodeFactoryVACycfC`                                                                                                                      | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxNodeFactory.swift`          |
| removed |  -64 B | <0.1% → 0.0% |          64 B → 0 B |     2 → 0 | `$s11SwiftSyntax0B7VisitorC8viewModeAcA0b8TreeViewE0O_tcfc`                                                                                                  | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`    |
| removed |  -64 B | <0.1% → 0.0% |          64 B → 0 B |     2 → 0 | `$s11SwiftSyntax0B10AnyVisitorC8viewModeAcA0b8TreeViewF0O_tcfc`                                                                                              | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxAnyVisitor.swift` |
| removed |  -64 B | <0.1% → 0.0% |          64 B → 0 B |     2 → 0 | `$s7profile11KindCounterC8viewModeAC11SwiftSyntax0g8TreeViewE0O_tcfc`                                                                                        | `/<compiler-generated>`                                                                   |
| removed |  -64 B | <0.1% → 0.0% |          64 B → 0 B |     2 → 0 | `$s7profile11KindCounterC8viewModeAC11SwiftSyntax0g8TreeViewE0O_tcfC`                                                                                        | `/src/Sources/profile/main.swift`                                                         |
|   -3.1% |  -48 B |        <0.1% | 1.51 KiB → 1.46 KiB |        14 | `0x290383`                                                                                                                                                   | `/usr/lib/swift/linux/libswiftCore.so`                                                    |
| removed |  -48 B | <0.1% → 0.0% |          48 B → 0 B |     1 → 0 | `0x3f1f23`                                                                                                                                                   | `/usr/lib/swift/linux/libswiftCore.so`                                                    |

##### Native

|  Change |  Delta |            % |                Size |   Objects | Function   | Location                               |
| ------: | -----: | -----------: | ------------------: | --------: | ---------- | -------------------------------------- |
|  -24.0% | -280 B |        <0.1% |    1.14 KiB → 888 B |   14 → 13 | `0x3f17a3` | `/usr/lib/swift/linux/libswiftCore.so` |
|     ~0% |  -64 B |       100.0% |            5.81 MiB | 312 → 310 | `0x284c3`  | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     ~0% |  -64 B |       100.0% |            5.81 MiB | 312 → 310 | `0x28597`  | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     ~0% |  -64 B |       100.0% |            5.81 MiB | 312 → 310 | `_start`   | `<unknown>`                            |
|   -3.1% |  -48 B |        <0.1% | 1.51 KiB → 1.46 KiB |        14 | `0x290383` | `/usr/lib/swift/linux/libswiftCore.so` |
| removed |  -48 B | <0.1% → 0.0% |          48 B → 0 B |     1 → 0 | `0x3f1f23` | `/usr/lib/swift/linux/libswiftCore.so` |
| removed |  -48 B | <0.1% → 0.0% |          48 B → 0 B |     1 → 0 | `0x3f1c73` | `/usr/lib/swift/linux/libswiftCore.so` |
|     ~0% |  -16 B |        99.8% |             5.8 MiB | 307 → 306 | `0x3e562f` | `/usr/lib/swift/linux/libswiftCore.so` |
| removed |  -16 B | <0.1% → 0.0% |          16 B → 0 B |     1 → 0 | `0x3f1d03` | `/usr/lib/swift/linux/libswiftCore.so` |
|   -1.5% |   -8 B |        <0.1% |       520 B → 512 B |        16 | `0x290353` | `/usr/lib/swift/linux/libswiftCore.so` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `$s11SwiftSyntax0B7VisitorC015visitSourceFileB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

| Change |  Delta |             % |        Size | Objects | Callee                                                                         | Location                                                                                  |
| -----: | -----: | ------------: | ----------: | ------: | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
|    new | +248 B | 0.0% → 100.0% | 0 B → 248 B |   0 → 1 | `$s11SwiftSyntax0B10AnyVisitorC5visityAA0bD12ContinueKindOAA010BorrowExprB0VF` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxAnyVisitor.swift` |

##### `0x3f1c0b` (`/usr/lib/swift/linux/libswiftCore.so`)

| Change |  Delta |      % |          Size | Objects | Callee     | Location                               |
| -----: | -----: | -----: | ------------: | ------: | ---------- | -------------------------------------- |
| +53.8% | +224 B | 100.0% | 416 B → 640 B |  9 → 10 | `0x47ed67` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `0x47ed67` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change |  Delta |            % |         Size | Objects | Callee     | Location                               |
| ------: | -----: | -----------: | -----------: | ------: | ---------- | -------------------------------------- |
| +350.0% | +224 B | 4.2% → 16.8% | 64 B → 288 B |   2 → 3 | `0x3fd793` | `/usr/lib/swift/linux/libswiftCore.so` |
| removed |  -48 B |  3.1% → 0.0% |   48 B → 0 B |   1 → 0 | `0x3f1f23` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `$s11SwiftSyntax010SourceFileB0V0A6ParserE5parse4fromAcD0E0Vz_tFZAA03RawcdB0VAHzXEfU_` (`/src/.build/checkouts/swift-syntax/Sources/SwiftParser/generated/LayoutNodes+Parsable.swift`)

| Change | Delta |             % |       Size | Objects | Callee                                                      | Location                                                                |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------------------------------------------- | ----------------------------------------------------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 2 | `$s11SwiftParser0B0V15parseSourceFile0A6Syntax03RawdeF0VyF` | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift` |

##### `$s11SwiftParser15SyntaxParseablePAAE5parse33_A2E5EEB4E7271C1F548910D9ED42E2EBLL4fromADxAA0B0Vz_qd__AHzXEt0aC003RawC12NodeProtocolRd__lFZAI010SourceFileC0V_AI0qtuC0VTt2g5` (`/src/.build/checkouts/swift-syntax/Sources/SwiftParser/generated/LayoutNodes+Parsable.swift`)

| Change | Delta |             % |       Size | Objects | Callee                                                                                 | Location                                                                                      |
| -----: | ----: | ------------: | ---------: | ------: | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 2 | `$s11SwiftSyntax010SourceFileB0V0A6ParserE5parse4fromAcD0E0Vz_tFZAA03RawcdB0VAHzXEfU_` | `/src/.build/checkouts/swift-syntax/Sources/SwiftParser/generated/LayoutNodes+Parsable.swift` |

##### `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzFAA0bC12ContinueKindOAA010SourceFileB0VcACYbcfu911_AiKcfu912_` (`/<compiler-generated>`)

|  Change |  Delta |             % |        Size | Objects | Callee                                                                         | Location                                                                                  |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| removed | -248 B | 100.0% → 0.0% | 248 B → 0 B |   1 → 0 | `$s11SwiftSyntax0B10AnyVisitorC5visityAA0bD12ContinueKindOAA010BorrowExprB0VF` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxAnyVisitor.swift` |

##### `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzFAA0bC12ContinueKindOAA010SourceFileB0VcACYbcfu911_AiKcfu912_TA` (`/<compiler-generated>`)

|  Change |  Delta |             % |        Size | Objects | Callee                                                                                                                                        | Location                |
| ------: | -----: | ------------: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| removed | -248 B | 100.0% → 0.0% | 248 B → 0 B |   1 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzFAA0bC12ContinueKindOAA010SourceFileB0VcACYbcfu911_AiKcfu912_` | `/<compiler-generated>` |

##### `$s11SwiftSyntax010SourceFileB0VAA0B19VisitorContinueKindOIggd_AcEIegnd_TR` (`/<compiler-generated>`)

|  Change |  Delta |             % |        Size | Objects | Callee                                                                                                                                          | Location                |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| removed | -248 B | 100.0% → 0.0% | 248 B → 0 B |   1 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzFAA0bC12ContinueKindOAA010SourceFileB0VcACYbcfu911_AiKcfu912_TA` | `/<compiler-generated>` |

##### `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA010SourceFileB0V_Tt0g5` (`/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change |  Delta |             % |        Size | Objects | Callee                                                                      | Location                |
| ------: | -----: | ------------: | ----------: | ------: | --------------------------------------------------------------------------- | ----------------------- |
| removed | -248 B | 100.0% → 0.0% | 248 B → 0 B |   1 → 0 | `$s11SwiftSyntax010SourceFileB0VAA0B19VisitorContinueKindOIggd_AcEIegnd_TR` | `/<compiler-generated>` |

##### `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` (`/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change |  Delta |             % |        Size | Objects | Callee                                                                                                                                                       | Location                                                                               |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| removed | -248 B | 100.0% → 0.0% | 248 B → 0 B |   1 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA010SourceFileB0V_Tt0g5` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |

##### `profile_main` (`/src/Sources/profile/main.swift`)

|  Change | Delta |            % |       Size | Objects | Callee                                                                | Location                          |
| ------: | ----: | -----------: | ---------: | ------: | --------------------------------------------------------------------- | --------------------------------- |
| removed | -64 B | <0.1% → 0.0% | 64 B → 0 B |   2 → 0 | `$s7profile11KindCounterC8viewModeAC11SwiftSyntax0g8TreeViewE0O_tcfC` | `/src/Sources/profile/main.swift` |

##### `0x284c3` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |      % |     Size |   Objects | Callee         | Location                          |
| -----: | ----: | -----: | -------: | --------: | -------------- | --------------------------------- |
|    ~0% | -64 B | 100.0% | 5.81 MiB | 312 → 310 | `profile_main` | `/src/Sources/profile/main.swift` |

##### `0x28597` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |      % |     Size |   Objects | Callee    | Location                               |
| -----: | ----: | -----: | -------: | --------: | --------- | -------------------------------------- |
|    ~0% | -64 B | 100.0% | 5.81 MiB | 312 → 310 | `0x284c3` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_start` (`<unknown>`)

| Change | Delta |      % |     Size |   Objects | Callee    | Location                               |
| -----: | ----: | -----: | -------: | --------: | --------- | -------------------------------------- |
|    ~0% | -64 B | 100.0% | 5.81 MiB | 312 → 310 | `0x28597` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `$s11SwiftSyntax0B14InfoRepository33_144A0750A39B358DE708645CE8EF6248LLV7_BufferCMa` (`/<compiler-generated>`)

|  Change | Delta |            % |       Size | Objects | Callee     | Location                               |
| ------: | ----: | -----------: | ---------: | ------: | ---------- | -------------------------------------- |
| removed | -48 B | 75.0% → 0.0% | 48 B → 0 B |   1 → 0 | `0x3f1c73` | `/usr/lib/swift/linux/libswiftCore.so` |
| removed | -16 B | 25.0% → 0.0% | 16 B → 0 B |   1 → 0 | `0x3f1d03` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `$ss13ManagedBufferC6create15minimumCapacity16makingHeaderWithAByxq_GSi_xAFKXEtKFZSi_11SwiftSyntax0J0V4InfoCSgTg5` (`/<compiler-generated>`)

|  Change | Delta |             % |       Size | Objects | Callee                                                                               | Location                |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------------------------------------ | ----------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   2 → 0 | `$s11SwiftSyntax0B14InfoRepository33_144A0750A39B358DE708645CE8EF6248LLV7_BufferCMa` | `/<compiler-generated>` |

##### `$s11SwiftSyntax0B14InfoRepository33_144A0750A39B358DE708645CE8EF6248LLVADycfC` (`/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxNodeFactory.swift`)

|  Change | Delta |             % |       Size | Objects | Callee                                                                                                             | Location                |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   2 → 0 | `$ss13ManagedBufferC6create15minimumCapacity16makingHeaderWithAByxq_GSi_xAFKXEtKFZSi_11SwiftSyntax0J0V4InfoCSgTg5` | `/<compiler-generated>` |

##### `$s11SwiftSyntax0B11NodeFactoryVACycfC` (`/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxNodeFactory.swift`)

|  Change | Delta |             % |       Size | Objects | Callee                                                                          | Location                                                                         |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   2 → 0 | `$s11SwiftSyntax0B14InfoRepository33_144A0750A39B358DE708645CE8EF6248LLVADycfC` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxNodeFactory.swift` |

##### `$s11SwiftSyntax0B7VisitorC8viewModeAcA0b8TreeViewE0O_tcfc` (`/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change | Delta |             % |       Size | Objects | Callee                                  | Location                                                                         |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------------------- | -------------------------------------------------------------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   2 → 0 | `$s11SwiftSyntax0B11NodeFactoryVACycfC` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxNodeFactory.swift` |

##### `$s11SwiftSyntax0B10AnyVisitorC8viewModeAcA0b8TreeViewF0O_tcfc` (`/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxAnyVisitor.swift`)

|  Change | Delta |             % |       Size | Objects | Callee                                                      | Location                                                                               |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   2 → 0 | `$s11SwiftSyntax0B7VisitorC8viewModeAcA0b8TreeViewE0O_tcfc` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |

##### `$s7profile11KindCounterC8viewModeAC11SwiftSyntax0g8TreeViewE0O_tcfc` (`/<compiler-generated>`)

|  Change | Delta |             % |       Size | Objects | Callee                                                          | Location                                                                                  |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   2 → 0 | `$s11SwiftSyntax0B10AnyVisitorC8viewModeAcA0b8TreeViewF0O_tcfc` | `/src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxAnyVisitor.swift` |

##### `$s7profile11KindCounterC8viewModeAC11SwiftSyntax0g8TreeViewE0O_tcfC` (`/src/Sources/profile/main.swift`)

|  Change | Delta |             % |       Size | Objects | Callee                                                                | Location                |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------------------------------------------------- | ----------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   2 → 0 | `$s7profile11KindCounterC8viewModeAC11SwiftSyntax0g8TreeViewE0O_tcfc` | `/<compiler-generated>` |

##### `0x290383` (`/usr/lib/swift/linux/libswiftCore.so`)

| Change |  Delta |             % |            Size | Objects | Callee     | Location                               |
| -----: | -----: | ------------: | --------------: | ------: | ---------- | -------------------------------------- |
| -27.2% | -272 B | 64.8% → 48.7% | 1,000 B → 728 B |   4 → 3 | `0x3f17a3` | `/usr/lib/swift/linux/libswiftCore.so` |
| +53.8% | +224 B | 26.9% → 42.8% |   416 B → 640 B |  9 → 10 | `0x3f1c0b` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `0x3f1c73` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change | Delta |             % |       Size | Objects | Callee     | Location                               |
| ------: | ----: | ------------: | ---------: | ------: | ---------- | -------------------------------------- |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   1 → 0 | `0x47ed67` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `0x3f1d03` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change | Delta |             % |       Size | Objects | Callee     | Location                               |
| ------: | ----: | ------------: | ---------: | ------: | ---------- | -------------------------------------- |
| removed | -16 B | 100.0% → 0.0% | 16 B → 0 B |   1 → 0 | `0x3e562f` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `0x290353` (`/usr/lib/swift/linux/libswiftCore.so`)

| Change | Delta |             % |          Size | Objects | Callee     | Location                               |
| -----: | ----: | ------------: | ------------: | ------: | ---------- | -------------------------------------- |
|  -5.9% |  -8 B | 26.2% → 25.0% | 136 B → 128 B |       8 | `0x3f17a3` | `/usr/lib/swift/linux/libswiftCore.so` |

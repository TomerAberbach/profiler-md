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

| Change |       Delta |             % |               Size |         Objects | Function   | Location                               |
| -----: | ----------: | ------------: | -----------------: | --------------: | ---------- | -------------------------------------- |
| +27.1% | +22.065 MiB | 83.8% → 90.7% | 81.5 MiB → 104 MiB | 12,110 → 15,782 | `0x3e564b` | `usr/lib/swift/linux/libswiftCore.so`  |
|    new |  +6.375 KiB |  0.0% → <0.1% |     0 B → 6.38 KiB |         0 → 408 | `0x39e55f` | `usr/lib/swift/linux/libFoundation.so` |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Native

|  Change |      Delta |            % |                Size |          Objects | Function   | Location                               |
| ------: | ---------: | -----------: | ------------------: | ---------------: | ---------- | -------------------------------------- |
|  -33.0% | -5.196 MiB | 16.2% → 9.2% | 15.8 MiB → 10.6 MiB | 143,926 → 72,429 | `0x3e562f` | `usr/lib/swift/linux/libswiftCore.so`  |
|   -9.9% |     -296 B |        <0.1% | 2.92 KiB → 2.63 KiB |          21 → 19 | `0x3f17a3` | `usr/lib/swift/linux/libswiftCore.so`  |
| removed |     -240 B | <0.1% → 0.0% |         240 B → 0 B |            2 → 0 | `0xdd5eb`  | `usr/lib/aarch64-linux-gnu/libc.so.6`  |
| removed |      -48 B | <0.1% → 0.0% |          48 B → 0 B |            1 → 0 | `0x3f1f23` | `usr/lib/swift/linux/libswiftCore.so`  |
| removed |      -48 B | <0.1% → 0.0% |          48 B → 0 B |            1 → 0 | `0x37422f` | `usr/lib/swift/linux/libFoundation.so` |
|  -10.0% |      -32 B |        <0.1% |       320 B → 288 B |            5 → 4 | `0x3fe73f` | `usr/lib/swift/linux/libswiftCore.so`  |
| removed |      -16 B | <0.1% → 0.0% |          16 B → 0 B |            1 → 0 | `0x427493` | `usr/lib/swift/linux/libswiftCore.so`  |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|   Change |       Delta |             % |                Size |          Objects | Function                                                                                                                                                                    | Location                                                                                     |
| -------: | ----------: | ------------: | ------------------: | ---------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|      new |  +64.38 MiB |  0.0% → 56.4% |      0 B → 64.4 MiB |       0 → 75,186 | `$s11SwiftParser0B0V16parseDeclaration2in0A6Syntax07RawDeclF0VAC0D12ParseContextO_tF`                                                                                       | `src/.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift`                   |
|      new | +56.918 MiB |  0.0% → 49.9% |      0 B → 56.9 MiB |       0 → 59,378 | `$s11SwiftSyntax010SourceFileB0V0A6ParserE5parse4fromAcD0E0Vz_tFZAA03RawcdB0VAHzXEfU_`                                                                                      | `src/.build/checkouts/swift-syntax/Sources/SwiftParser/generated/LayoutNodes+Parsable.swift` |
|      new | +56.918 MiB |  0.0% → 49.9% |      0 B → 56.9 MiB |       0 → 59,378 | `$s11SwiftParser15SyntaxParseablePAAE5parse33_A2E5EEB4E7271C1F548910D9ED42E2EBLL4fromADxAA0B0Vz_qd__AHzXEt0aC003RawC12NodeProtocolRd__lFZAI010SourceFileC0V_AI0qtuC0VTt2g5` | `src/.build/checkouts/swift-syntax/Sources/SwiftParser/generated/LayoutNodes+Parsable.swift` |
|      new | +40.415 MiB |  0.0% → 35.4% |      0 B → 40.4 MiB |        0 → 7,278 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                                   | `src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
|      new | +40.415 MiB |  0.0% → 35.4% |      0 B → 40.4 MiB |        0 → 7,278 | `$s11SwiftSyntax0B7VisitorC018visitCodeBlockItemB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                       | `src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
|      new | +40.415 MiB |  0.0% → 35.4% |      0 B → 40.4 MiB |        0 → 7,278 | `$s11SwiftSyntax0B7VisitorC022visitCodeBlockItemListB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                   | `src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
|      new | +40.217 MiB |  0.0% → 35.2% |      0 B → 40.2 MiB |        0 → 7,098 | `$s11SwiftSyntax0B9DataArenaC012createLayoutC4Impl33_B3300DB0BA2B3E5E35A338B811650793LLySRyAA0D16AllocatedPointerVyAA0bC0VGSgGAJF`                                          | `src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift`                         |
|      new | +40.217 MiB |  0.0% → 35.2% |      0 B → 40.2 MiB |        0 → 7,098 | `$s11SwiftSyntax0B9DataArenaC6layout3forAA0D22AllocatedBufferPointerVyAA0dgI0VyAA0bC0VGSgGAL_tF`                                                                            | `src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift`                         |
|      new | +40.217 MiB |  0.0% → 35.2% |      0 B → 40.2 MiB |        0 → 7,098 | `$s11SwiftSyntax0B0V12layoutBufferAA014ArenaAllocatedD7PointerVyAA0efG0VyAA0B4DataVGSgGvg`                                                                                  | `src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift`                         |
|      new | +39.744 MiB |  0.0% → 34.8% |      0 B → 39.7 MiB |        0 → 7,117 | `$s11SwiftSyntax0B7VisitorC015visitSourceFileB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                          | `src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
|      new | +38.641 MiB |  0.0% → 33.8% |      0 B → 38.6 MiB |        0 → 6,756 | `$s11SwiftSyntax0B7VisitorC016visitMemberBlockB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                         | `src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
|      new |  +38.46 MiB |  0.0% → 33.7% |      0 B → 38.5 MiB |        0 → 6,714 | `$s11SwiftSyntax0B7VisitorC020visitMemberBlockItemB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                     | `src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
|      new |  +38.43 MiB |  0.0% → 33.7% |      0 B → 38.4 MiB |        0 → 6,702 | `$s11SwiftSyntax0B7VisitorC024visitMemberBlockItemListB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                 | `src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
| +7642.6% | +37.833 MiB |  0.5% → 33.6% |  507 KiB → 38.3 MiB |    3,721 → 6,955 | `$s11SwiftSyntax0B7VisitorC4walkyyxAA0B8ProtocolRzlF`                                                                                                                       | `src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
|      new | +30.064 MiB |  0.0% → 26.3% |      0 B → 30.1 MiB |        0 → 4,296 | `$s11SwiftSyntax03RawB5ArenaC6internySPyAA0cB4DataVGAFF`                                                                                                                    | `src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntaxArena.swift`             |
|      new | +30.064 MiB |  0.0% → 26.3% |      0 B → 30.1 MiB |        0 → 4,296 | `$s11SwiftSyntax03RawB0V5arena7payloadAcA0cB5ArenaCh_AA0cB4DataV7PayloadOtcfC`                                                                                              | `src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`                  |
|   +48.7% | +26.813 MiB | 56.6% → 71.7% | 55.1 MiB → 81.9 MiB | 106,418 → 59,971 | `_start`                                                                                                                                                                    | `<unknown>`                                                                                  |
|   +42.7% |  +26.23 MiB | 63.2% → 76.8% | 61.5 MiB → 87.7 MiB | 109,040 → 61,543 | `0x28597`                                                                                                                                                                   | `usr/lib/aarch64-linux-gnu/libc.so.6`                                                        |
|      new | +23.957 MiB |  0.0% → 21.0% |        0 B → 24 MiB |       0 → 20,088 | `$s11SwiftParser0B0V23parseBindingDeclaration__2in0A6Syntax015RawVariableDeclG0VAC0J10AttributesV_AA25RecoveryConsumptionHandleVAC0E12ParseContextOtF`                      | `src/.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift`                   |
|   +33.7% | +23.714 MiB | 72.3% → 82.4% | 70.4 MiB → 94.1 MiB | 121,124 → 62,995 | `0x284c3`                                                                                                                                                                   | `usr/lib/aarch64-linux-gnu/libc.so.6`                                                        |

##### Native

|    Change |       Delta |             % |                Size |          Objects | Function                                                                                                                                                               | Location                                         |
| --------: | ----------: | ------------: | ------------------: | ---------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
|    +48.7% | +26.813 MiB | 56.6% → 71.7% | 55.1 MiB → 81.9 MiB | 106,418 → 59,971 | `_start`                                                                                                                                                               | `<unknown>`                                      |
|    +42.7% |  +26.23 MiB | 63.2% → 76.8% | 61.5 MiB → 87.7 MiB | 109,040 → 61,543 | `0x28597`                                                                                                                                                              | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|    +33.7% | +23.714 MiB | 72.3% → 82.4% | 70.4 MiB → 94.1 MiB | 121,124 → 62,995 | `0x284c3`                                                                                                                                                              | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|    +27.1% | +22.065 MiB | 83.8% → 90.7% |  81.5 MiB → 104 MiB |  12,110 → 15,782 | `0x3e564b`                                                                                                                                                             | `usr/lib/swift/linux/libswiftCore.so`            |
|       new |  +1.221 MiB |   0.0% → 1.1% |      0 B → 1.22 MiB |          0 → 138 | `$s11SwiftSyntax020RawInitializerClauseB0V_5equal_5value_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0cB5ArenaChtcAA0c4ExprB12NodeProtocolRzlufC`             | `<unknown>`                                      |
|       new |    +600 KiB |   0.0% → 0.5% |       0 B → 600 KiB |           0 → 66 | `$s11SwiftSyntax023RawOptionalChainingExprB0V_10expression_12questionMark_5arenaAcA0c15UnexpectedNodesB0VSg_xAiA0c5TokenB0VAiA0cB5ArenaChtcAA0cfB12NodeProtocolRzlufC` | `<unknown>`                                      |
|       new |    +408 KiB |   0.0% → 0.3% |       0 B → 408 KiB |           0 → 48 | `$s11SwiftSyntax017RawTypeAnnotationB0V_5colon_4type_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0cB5ArenaChtcAA0cdB12NodeProtocolRzlufC`                     | `<unknown>`                                      |
|       new |    +192 KiB |   0.0% → 0.2% |       0 B → 192 KiB |           0 → 24 | `$s11SwiftSyntax022RawValueBindingPatternB0V_16bindingSpecifier_7pattern_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0cB5ArenaChtcAA0cfB12NodeProtocolRzlufC` | `<unknown>`                                      |
|       new |     +48 KiB |  0.0% → <0.1% |        0 B → 48 KiB |           0 → 12 | `$s11SwiftSyntax021RawPrefixOperatorExprB0V_8operator_10expression_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0cB5ArenaChtcAA0cfB12NodeProtocolRzlufC`       | `<unknown>`                                      |
|       new |     +48 KiB |  0.0% → <0.1% |        0 B → 48 KiB |           0 → 12 | `$s11SwiftSyntax015RawOptionalTypeB0V_07wrappedE0_12questionMark_5arenaAcA0c15UnexpectedNodesB0VSg_xAiA0c5TokenB0VAiA0cB5ArenaChtcAA0ceB12NodeProtocolRzlufC`          | `<unknown>`                                      |
|       new |     +48 KiB |  0.0% → <0.1% |        0 B → 48 KiB |            0 → 6 | `$s11SwiftSyntax015RawReturnClauseB0V_5arrow_4type_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0cB5ArenaChtcAA0c4TypeB12NodeProtocolRzlufC`                   | `<unknown>`                                      |
|       new |     +48 KiB |  0.0% → <0.1% |        0 B → 48 KiB |            0 → 6 | `$s11SwiftSyntax016RawInheritedTypeB0V_4type_13trailingComma_5arenaAcA0c15UnexpectedNodesB0VSg_xAiA0c5TokenB0VSgAiA0cB5ArenaChtcAA0ceB12NodeProtocolRzlufC`            | `<unknown>`                                      |
|       new | +27.093 KiB |  0.0% → <0.1% |      0 B → 27.1 KiB |          0 → 408 | `0x1c448f`                                                                                                                                                             | `usr/lib/swift/linux/libswiftCore.so`            |
|       new | +27.093 KiB |  0.0% → <0.1% |      0 B → 27.1 KiB |          0 → 408 | `0x1bcdab`                                                                                                                                                             | `usr/lib/swift/linux/libFoundationEssentials.so` |
|       new | +27.093 KiB |  0.0% → <0.1% |      0 B → 27.1 KiB |          0 → 408 | `0x36e053`                                                                                                                                                             | `usr/lib/swift/linux/libFoundationEssentials.so` |
| +35931.2% | +27.018 KiB |         <0.1% |     77 B → 27.1 KiB |          1 → 408 | `0x22db57`                                                                                                                                                             | `usr/lib/swift/linux/libFoundation.so`           |
|    +19.6% |  +6.375 KiB |         <0.1% | 32.5 KiB → 38.8 KiB |        401 → 808 | `0x2f99e3`                                                                                                                                                             | `usr/lib/swift/linux/libFoundation.so`           |
|       new |  +6.375 KiB |  0.0% → <0.1% |      0 B → 6.38 KiB |          0 → 408 | `0x39e55f`                                                                                                                                                             | `usr/lib/swift/linux/libFoundation.so`           |
|       new |  +6.375 KiB |  0.0% → <0.1% |      0 B → 6.38 KiB |          0 → 408 | `0x3f0bc7`                                                                                                                                                             | `usr/lib/swift/linux/libFoundation.so`           |
| +13500.0% |  +6.328 KiB |         <0.1% |     48 B → 6.38 KiB |          1 → 408 | `0x2f9c17`                                                                                                                                                             | `usr/lib/swift/linux/libFoundation.so`           |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |       Delta |             % |                Size |          Objects | Function                                                                                                                                                                                                              | Location                                                                      |
| ------: | ----------: | ------------: | ------------------: | ---------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| removed | -80.497 MiB |  82.7% → 0.0% |      80.5 MiB → 0 B |      140,784 → 0 | `$s11SwiftParser0B0V16parseDeclaration16inMemberDeclList0A6Syntax03RawgI0VSb_tF`                                                                                                                                      | `src/.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift`    |
| removed | -34.391 MiB |  35.4% → 0.0% |      34.4 MiB → 0 B |       85,026 → 0 | `$s11SwiftParser0B0V23parseBindingDeclaration__16inMemberDeclList0A6Syntax011RawVariablehJ0VAC0H10AttributesV_AA25RecoveryConsumptionHandleVSbtF`                                                                     | `src/.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift`    |
| removed | -30.127 MiB |  31.0% → 0.0% |      30.1 MiB → 0 B |        5,160 → 0 | `$s11SwiftSyntax0B5ArenaC6internySPyAA03RawB4DataVGAFF`                                                                                                                                                               | `src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxArena.swift`     |
| removed | -30.127 MiB |  31.0% → 0.0% |      30.1 MiB → 0 B |        5,160 → 0 | `$s11SwiftSyntax03RawB0V5arena7payloadAcA0B5ArenaCh_AA0cB4DataV7PayloadOtcfC`                                                                                                                                         | `src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`   |
|  -32.2% | -20.599 MiB | 65.7% → 37.9% | 63.9 MiB → 43.3 MiB | 125,874 → 54,846 | `$s11SwiftParser0B0V22parseCodeBlockItemList12isAtTopLevel13allowInitDecl5until0A6Syntax03RawdefgP0VSb_S2bACzXEtF`                                                                                                    | `src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`        |
|  -22.7% |  -19.94 MiB | 90.1% → 59.3% | 87.7 MiB → 67.7 MiB | 148,916 → 78,038 | `$s11SwiftParser0B0V9parseItem33_008C1B0E0A90478841CED0DF9A7053A1LL12isAtTopLevel13allowInitDecl0A6Syntax012RawCodeBlockdT0V0D0OSb_SbtF`                                                                              | `src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`        |
|  -22.7% | -19.845 MiB | 90.0% → 59.3% | 87.6 MiB → 67.7 MiB | 148,874 → 78,008 | `$s11SwiftParser0B0V18parseCodeBlockItem12isAtTopLevel13allowInitDecl0A6Syntax03RawdefN0VSgSb_SbtF`                                                                                                                   | `src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`        |
| removed |  -19.64 MiB |  20.2% → 0.0% |      19.6 MiB → 0 B |        3,570 → 0 | `$s11SwiftSyntax03RawB0V11parsedToken4kind9wholeText9textRange8presence15tokenDiagnostic5arenaAcA0cE4KindO_AA0bH0VSnySiGAA14SourcePresenceOAA0eM0VSgAA07ParsingB5ArenaChtFZTf4nnnnnnd_n`                              | `src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`   |
|  -34.5% | -19.308 MiB | 57.6% → 32.1% |   56 MiB → 36.7 MiB | 115,026 → 46,494 | `$s11SwiftParser0B0V14parseCodeBlock10introducer13allowInitDecl0A6Syntax03RawdeJ0VAG0k5TokenJ0VSg_SbtF`                                                                                                               | `src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`        |
| removed | -19.227 MiB |  19.8% → 0.0% |      19.2 MiB → 0 B |        2,598 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZTf4nnnnnd_n`                                            | `src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`   |
|  -34.5% | -18.985 MiB | 56.6% → 31.6% | 55.1 MiB → 36.1 MiB | 113,856 → 45,654 | `$s11SwiftParser0B0V22parseOptionalCodeBlock13allowInitDecl0A6Syntax03RawefJ0VSgSb_tF`                                                                                                                                | `src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`        |
|  -32.4% | -16.336 MiB | 51.8% → 29.8% |   50.4 MiB → 34 MiB |  91,038 → 30,384 | `$s11SwiftParser0B0V30parseSequenceExpressionElement6flavor7pattern0A6Syntax07RawExprI0VAC0K6FlavorO_AC14PatternContextOtF`                                                                                           | `src/.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`     |
|  -36.9% | -16.298 MiB | 45.4% → 24.4% | 44.2 MiB → 27.9 MiB |  78,036 → 27,468 | `$s11SwiftParser0B0V28parsePostfixExpressionSuffix_6flavor7pattern0A6Syntax07RawExprI0VAI_AC0K6FlavorOAC14PatternContextOtF`                                                                                          | `src/.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`     |
|  -30.8% |  -16.17 MiB | 54.0% → 31.9% | 52.6 MiB → 36.4 MiB | 106,686 → 34,560 | `$s11SwiftParser0B0V23parseSequenceExpression6flavor7pattern0A6Syntax07RawExprH0VAC0J6FlavorO_AC14PatternContextOtF`                                                                                                  | `src/.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`     |
|  -21.4% | -15.743 MiB | 75.6% → 50.6% | 73.5 MiB → 57.8 MiB | 134,408 → 62,282 | `$s11SwiftParser0B0V22parseCodeBlockItemList12isAtTopLevel13allowInitDecl5until0A6Syntax03RawdefgP0VSb_S2bACzXEtF04$s11a9Syntax017defg6B0V0A6b35E5parse4fromAcD0G0Vz_tFZAA03RawcdefT19VAHzXEfU_SbAHzXEfU_Tf1nncn_nTm` | `Attributes.swift.o`                                                          |
|  -21.0% | -15.096 MiB | 74.0% → 49.9% |   72 MiB → 56.9 MiB | 133,694 → 59,378 | `$s11SwiftParser0B0V27parseTopLevelCodeBlockItems0A6Syntax03Rawfg8ItemListI0VyF`                                                                                                                                      | `src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`        |
|  -21.0% | -15.096 MiB | 74.0% → 49.9% |   72 MiB → 56.9 MiB | 133,694 → 59,378 | `$s11SwiftParser0B0V15parseSourceFile0A6Syntax03RawdeF0VyF`                                                                                                                                                           | `src/.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`        |
|  -21.3% | -15.082 MiB | 72.8% → 48.8% | 70.8 MiB → 55.8 MiB | 129,242 → 58,298 | `$s11SwiftParser0B0V5parse6source0A6Syntax010SourceFileE0VSS_tFZ`                                                                                                                                                     | `src/.build/checkouts/swift-syntax/Sources/SwiftParser/ParseSourceFile.swift` |
| removed | -14.629 MiB |  15.0% → 0.0% |      14.6 MiB → 0 B |        1,926 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ`                                                       | `<compiler-generated>`                                                        |
|  -34.2% | -14.276 MiB | 42.9% → 24.0% | 41.7 MiB → 27.4 MiB |  56,082 → 43,272 | `$s11SwiftParser0B0V14parseStatement0A6Syntax07RawStmtE0VyF`                                                                                                                                                          | `src/.build/checkouts/swift-syntax/Sources/SwiftParser/Statements.swift`      |

##### Native

|  Change |        Delta |            % |                Size |          Objects | Function                                                                                                                                                              | Location                               |
| ------: | -----------: | -----------: | ------------------: | ---------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
|  -33.0% |   -5.196 MiB | 16.2% → 9.2% | 15.8 MiB → 10.6 MiB | 143,926 → 72,429 | `0x3e562f`                                                                                                                                                            | `usr/lib/swift/linux/libswiftCore.so`  |
|  -33.0% |   -5.196 MiB | 16.2% → 9.2% | 15.8 MiB → 10.6 MiB | 143,924 → 72,429 | `0x3e5a1f`                                                                                                                                                            | `usr/lib/swift/linux/libswiftCore.so`  |
|  -77.5% |   -2.508 MiB |  3.3% → 0.6% |  3.23 MiB → 744 KiB |      4,506 → 378 | `0x182623`                                                                                                                                                            | `usr/lib/swift/linux/libswiftCore.so`  |
| removed |   -1.007 MiB |  1.0% → 0.0% |      1.01 MiB → 0 B |          156 → 0 | `$s11SwiftSyntax020RawInitializerClauseB0V_5equal_5value_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0c4ExprB12NodeProtocolRzlufC`             | `<unknown>`                            |
| removed |     -480 KiB |  0.5% → 0.0% |       480 KiB → 0 B |           54 → 0 | `$s11SwiftSyntax016RawSomeOrAnyTypeB0V_04someeF9Specifier_10constraint_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0cgB12NodeProtocolRzlufC`   | `<unknown>`                            |
| removed | -433.687 KiB |  0.4% → 0.0% |       434 KiB → 0 B |           90 → 0 | `$s11SwiftSyntax016RawInheritedTypeB0V_4type_13trailingComma_5arenaAcA0c15UnexpectedNodesB0VSg_xAiA0c5TokenB0VSgAiA0B5ArenaChtcAA0ceB12NodeProtocolRzlufC`            | `<unknown>`                            |
| removed |     -360 KiB |  0.4% → 0.0% |       360 KiB → 0 B |           60 → 0 | `$s11SwiftSyntax015RawOptionalTypeB0V_07wrappedE0_12questionMark_5arenaAcA0c15UnexpectedNodesB0VSg_xAiA0c5TokenB0VAiA0B5ArenaChtcAA0ceB12NodeProtocolRzlufC`          | `<unknown>`                            |
| removed |     -288 KiB |  0.3% → 0.0% |       288 KiB → 0 B |           12 → 0 | `$s11SwiftSyntax012RawInOutExprB0V_9ampersand_10expression_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0cfB12NodeProtocolRzlufC`               | `<unknown>`                            |
| removed |  -48.937 KiB | <0.1% → 0.0% |      48.9 KiB → 0 B |           18 → 0 | `$s11SwiftSyntax017RawTypeAnnotationB0V_5colon_4type_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0cdB12NodeProtocolRzlufC`                     | `<unknown>`                            |
| removed |      -48 KiB | <0.1% → 0.0% |        48 KiB → 0 B |           12 → 0 | `$s11SwiftSyntax024RawTypeInitializerClauseB0V_5equal_5value_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0cdB12NodeProtocolRzlufC`             | `<unknown>`                            |
| removed |      -24 KiB | <0.1% → 0.0% |        24 KiB → 0 B |            6 → 0 | `$s11SwiftSyntax023RawOptionalChainingExprB0V_10expression_12questionMark_5arenaAcA0c15UnexpectedNodesB0VSg_xAiA0c5TokenB0VAiA0B5ArenaChtcAA0cfB12NodeProtocolRzlufC` | `<unknown>`                            |
| removed |      -24 KiB | <0.1% → 0.0% |        24 KiB → 0 B |            6 → 0 | `$s11SwiftSyntax021RawPrefixOperatorExprB0V_8operator_10expression_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0cfB12NodeProtocolRzlufC`       | `<unknown>`                            |
| removed |      -24 KiB | <0.1% → 0.0% |        24 KiB → 0 B |            6 → 0 | `$s11SwiftSyntax022RawValueBindingPatternB0V_16bindingSpecifier_7pattern_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0cfB12NodeProtocolRzlufC` | `<unknown>`                            |
| removed |      -24 KiB | <0.1% → 0.0% |        24 KiB → 0 B |            6 → 0 | `$s11SwiftSyntax014RawWhereClauseB0V_12whereKeyword_9condition_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0c4ExprB12NodeProtocolRzlufC`       | `<unknown>`                            |
| removed |   -1.125 KiB | <0.1% → 0.0% |      1.13 KiB → 0 B |           12 → 0 | `$s11SwiftSyntax015RawReturnClauseB0V_5arrow_4type_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAIxAiA0B5ArenaChtcAA0c4TypeB12NodeProtocolRzlufC`                   | `<unknown>`                            |
|   -6.3% |       -304 B |        <0.1% | 4.69 KiB → 4.39 KiB |          41 → 39 | `0x290383`                                                                                                                                                            | `usr/lib/swift/linux/libswiftCore.so`  |
|   -9.9% |       -296 B |        <0.1% | 2.92 KiB → 2.63 KiB |          21 → 19 | `0x3f17a3`                                                                                                                                                            | `usr/lib/swift/linux/libswiftCore.so`  |
|   -5.1% |       -240 B |        <0.1% | 4.55 KiB → 4.32 KiB |            4 → 2 | `0x22e487`                                                                                                                                                            | `usr/lib/swift/linux/libFoundation.so` |
|   -4.6% |       -240 B |        <0.1% | 5.09 KiB → 4.85 KiB |            6 → 4 | `0x22cf03`                                                                                                                                                            | `usr/lib/swift/linux/libFoundation.so` |
| removed |       -240 B | <0.1% → 0.0% |         240 B → 0 B |            2 → 0 | `0xdd5eb`                                                                                                                                                             | `usr/lib/aarch64-linux-gnu/libc.so.6`  |

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

|  Change |  Delta |     % |         Size | Objects | Function   | Location                              |
| ------: | -----: | ----: | -----------: | ------: | ---------- | ------------------------------------- |
| +350.0% | +224 B | <0.1% | 64 B → 288 B |   2 → 3 | `0x3fd793` | `usr/lib/swift/linux/libswiftCore.so` |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Native

|  Change |  Delta |            % |             Size |   Objects | Function   | Location                              |
| ------: | -----: | -----------: | ---------------: | --------: | ---------- | ------------------------------------- |
|  -24.0% | -280 B |        <0.1% | 1.14 KiB → 888 B |   14 → 13 | `0x3f17a3` | `usr/lib/swift/linux/libswiftCore.so` |
| removed |  -48 B | <0.1% → 0.0% |       48 B → 0 B |     1 → 0 | `0x3f1f23` | `usr/lib/swift/linux/libswiftCore.so` |
|     ~0% |  -16 B |        99.8% |          5.8 MiB | 307 → 306 | `0x3e562f` | `usr/lib/swift/linux/libswiftCore.so` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|  Change |  Delta |            % |               Size | Objects | Function                                                                                                                                                                    | Location                                                                                     |
| ------: | -----: | -----------: | -----------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|     new | +248 B | 0.0% → <0.1% |        0 B → 248 B |   0 → 1 | `$s11SwiftSyntax0B7VisitorC015visitSourceFileB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                          | `src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
|  +53.8% | +224 B |        <0.1% |      416 B → 640 B |  9 → 10 | `0x3f1c0b`                                                                                                                                                                  | `usr/lib/swift/linux/libswiftCore.so`                                                        |
| +350.0% | +224 B |        <0.1% |       64 B → 288 B |   2 → 3 | `0x3fd793`                                                                                                                                                                  | `usr/lib/swift/linux/libswiftCore.so`                                                        |
|  +11.5% | +176 B |        <0.1% | 1.5 KiB → 1.67 KiB |      31 | `0x47ed67`                                                                                                                                                                  | `usr/lib/swift/linux/libswiftCore.so`                                                        |
|     new |  +64 B | 0.0% → <0.1% |         0 B → 64 B |   0 → 2 | `$s11SwiftSyntax010SourceFileB0V0A6ParserE5parse4fromAcD0E0Vz_tFZAA03RawcdB0VAHzXEfU_`                                                                                      | `src/.build/checkouts/swift-syntax/Sources/SwiftParser/generated/LayoutNodes+Parsable.swift` |
|     new |  +64 B | 0.0% → <0.1% |         0 B → 64 B |   0 → 2 | `$s11SwiftParser15SyntaxParseablePAAE5parse33_A2E5EEB4E7271C1F548910D9ED42E2EBLL4fromADxAA0B0Vz_qd__AHzXEt0aC003RawC12NodeProtocolRd__lFZAI010SourceFileC0V_AI0qtuC0VTt2g5` | `src/.build/checkouts/swift-syntax/Sources/SwiftParser/generated/LayoutNodes+Parsable.swift` |

##### Native

|  Change |  Delta |     % |               Size | Objects | Function   | Location                              |
| ------: | -----: | ----: | -----------------: | ------: | ---------- | ------------------------------------- |
|  +53.8% | +224 B | <0.1% |      416 B → 640 B |  9 → 10 | `0x3f1c0b` | `usr/lib/swift/linux/libswiftCore.so` |
| +350.0% | +224 B | <0.1% |       64 B → 288 B |   2 → 3 | `0x3fd793` | `usr/lib/swift/linux/libswiftCore.so` |
|  +11.5% | +176 B | <0.1% | 1.5 KiB → 1.67 KiB |      31 | `0x47ed67` | `usr/lib/swift/linux/libswiftCore.so` |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |  Delta |            % |                Size |   Objects | Function                                                                                                                                                     | Location                                                                                 |
| ------: | -----: | -----------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
|  -24.0% | -280 B |        <0.1% |    1.14 KiB → 888 B |   14 → 13 | `0x3f17a3`                                                                                                                                                   | `usr/lib/swift/linux/libswiftCore.so`                                                    |
| removed | -248 B | <0.1% → 0.0% |         248 B → 0 B |     1 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzFAA0bC12ContinueKindOAA010SourceFileB0VcACYbcfu911_AiKcfu912_`                | `<compiler-generated>`                                                                   |
| removed | -248 B | <0.1% → 0.0% |         248 B → 0 B |     1 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzFAA0bC12ContinueKindOAA010SourceFileB0VcACYbcfu911_AiKcfu912_TA`              | `<compiler-generated>`                                                                   |
| removed | -248 B | <0.1% → 0.0% |         248 B → 0 B |     1 → 0 | `$s11SwiftSyntax010SourceFileB0VAA0B19VisitorContinueKindOIggd_AcEIegnd_TR`                                                                                  | `<compiler-generated>`                                                                   |
| removed | -248 B | <0.1% → 0.0% |         248 B → 0 B |     1 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA010SourceFileB0V_Tt0g5` | `src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`    |
| removed | -248 B | <0.1% → 0.0% |         248 B → 0 B |     1 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF`                                                                            | `src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`    |
|     ~0% |  -64 B |       100.0% |            5.81 MiB | 312 → 310 | `profile_main`                                                                                                                                               | `src/Sources/profile/main.swift`                                                         |
|     ~0% |  -64 B |       100.0% |            5.81 MiB | 312 → 310 | `0x284c3`                                                                                                                                                    | `usr/lib/aarch64-linux-gnu/libc.so.6`                                                    |
|     ~0% |  -64 B |       100.0% |            5.81 MiB | 312 → 310 | `0x28597`                                                                                                                                                    | `usr/lib/aarch64-linux-gnu/libc.so.6`                                                    |
|     ~0% |  -64 B |       100.0% |            5.81 MiB | 312 → 310 | `_start`                                                                                                                                                     | `<unknown>`                                                                              |
| removed |  -64 B | <0.1% → 0.0% |          64 B → 0 B |     2 → 0 | `$s11SwiftSyntax0B14InfoRepository33_144A0750A39B358DE708645CE8EF6248LLV7_BufferCMa`                                                                         | `<compiler-generated>`                                                                   |
| removed |  -64 B | <0.1% → 0.0% |          64 B → 0 B |     2 → 0 | `$ss13ManagedBufferC6create15minimumCapacity16makingHeaderWithAByxq_GSi_xAFKXEtKFZSi_11SwiftSyntax0J0V4InfoCSgTg5`                                           | `<compiler-generated>`                                                                   |
| removed |  -64 B | <0.1% → 0.0% |          64 B → 0 B |     2 → 0 | `$s11SwiftSyntax0B14InfoRepository33_144A0750A39B358DE708645CE8EF6248LLVADycfC`                                                                              | `src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxNodeFactory.swift`          |
| removed |  -64 B | <0.1% → 0.0% |          64 B → 0 B |     2 → 0 | `$s11SwiftSyntax0B11NodeFactoryVACycfC`                                                                                                                      | `src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxNodeFactory.swift`          |
| removed |  -64 B | <0.1% → 0.0% |          64 B → 0 B |     2 → 0 | `$s11SwiftSyntax0B7VisitorC8viewModeAcA0b8TreeViewE0O_tcfc`                                                                                                  | `src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`    |
| removed |  -64 B | <0.1% → 0.0% |          64 B → 0 B |     2 → 0 | `$s11SwiftSyntax0B10AnyVisitorC8viewModeAcA0b8TreeViewF0O_tcfc`                                                                                              | `src/.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxAnyVisitor.swift` |
| removed |  -64 B | <0.1% → 0.0% |          64 B → 0 B |     2 → 0 | `$s7profile11KindCounterC8viewModeAC11SwiftSyntax0g8TreeViewE0O_tcfc`                                                                                        | `<compiler-generated>`                                                                   |
| removed |  -64 B | <0.1% → 0.0% |          64 B → 0 B |     2 → 0 | `$s7profile11KindCounterC8viewModeAC11SwiftSyntax0g8TreeViewE0O_tcfC`                                                                                        | `src/Sources/profile/main.swift`                                                         |
|   -3.1% |  -48 B |        <0.1% | 1.51 KiB → 1.46 KiB |        14 | `0x290383`                                                                                                                                                   | `usr/lib/swift/linux/libswiftCore.so`                                                    |
| removed |  -48 B | <0.1% → 0.0% |          48 B → 0 B |     1 → 0 | `0x3f1f23`                                                                                                                                                   | `usr/lib/swift/linux/libswiftCore.so`                                                    |

##### Native

|  Change |  Delta |            % |                Size |   Objects | Function   | Location                              |
| ------: | -----: | -----------: | ------------------: | --------: | ---------- | ------------------------------------- |
|  -24.0% | -280 B |        <0.1% |    1.14 KiB → 888 B |   14 → 13 | `0x3f17a3` | `usr/lib/swift/linux/libswiftCore.so` |
|     ~0% |  -64 B |       100.0% |            5.81 MiB | 312 → 310 | `0x284c3`  | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|     ~0% |  -64 B |       100.0% |            5.81 MiB | 312 → 310 | `0x28597`  | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|     ~0% |  -64 B |       100.0% |            5.81 MiB | 312 → 310 | `_start`   | `<unknown>`                           |
|   -3.1% |  -48 B |        <0.1% | 1.51 KiB → 1.46 KiB |        14 | `0x290383` | `usr/lib/swift/linux/libswiftCore.so` |
| removed |  -48 B | <0.1% → 0.0% |          48 B → 0 B |     1 → 0 | `0x3f1f23` | `usr/lib/swift/linux/libswiftCore.so` |
| removed |  -48 B | <0.1% → 0.0% |          48 B → 0 B |     1 → 0 | `0x3f1c73` | `usr/lib/swift/linux/libswiftCore.so` |
|     ~0% |  -16 B |        99.8% |             5.8 MiB | 307 → 306 | `0x3e562f` | `usr/lib/swift/linux/libswiftCore.so` |
| removed |  -16 B | <0.1% → 0.0% |          16 B → 0 B |     1 → 0 | `0x3f1d03` | `usr/lib/swift/linux/libswiftCore.so` |
|   -1.5% |   -8 B |        <0.1% |       520 B → 512 B |        16 | `0x290353` | `usr/lib/swift/linux/libswiftCore.so` |

# CPU profile diff

Took 4.96s → 5.22s (+268.00ms, +5.4%) over 4,960 samples → 5,228 samples (1.0ms per sample).

| Category         | Change |     Delta |             % |              Time |       Samples |
| ---------------- | -----: | --------: | ------------: | ----------------: | ------------: |
| Ours             |  +4.5% | +111.00ms | 49.8% → 49.4% |     2.47s → 2.58s | 2,471 → 2,582 |
| Native           |  +1.2% |  +27.00ms | 45.6% → 43.8% |     2.26s → 2.29s | 2,263 → 2,290 |
| Standard library | +57.5% | +130.00ms |   4.6% → 6.8% | 226.0ms → 356.0ms |     226 → 356 |

Paths starting with `./` or `../` are relative to `/src/`.

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |     Delta |           % |              Time |   Samples | Function                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Location                                                                     |
| ------: | --------: | ----------: | ----------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| +180.0% | +108.00ms | 1.2% → 3.2% |  60.0ms → 168.0ms |  60 → 168 | `0x95968`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`                                       |
|     new |  +52.00ms | 0.0% → 1.0% |      0ms → 52.0ms |    0 → 52 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax027c61AccessorEffectSpecifiersB0V_14asyncSpecifier_12throwsClause_5n22AcA0c15UnexpectedNodesx14VSg_AA0c5Tokenx16VSgAiA0c6Throwsjx10VSgAiA0cB5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VSgAsA0c12ThrowsClauseB0VSgASTf1nnnncn_nTf4nnnndnnnnn_nTm`                                      | `AbsolutePosition.swift.o`                                                   |
|     new |  +47.00ms | 0.0% → 0.9% |      0ms → 47.0ms |    0 → 47 | `$sSpsRi_zrlE10initialize2toyxn_tF11SwiftSyntax0D4DataV_Tg5`                                                                                                                                                                                                                                                                                                                                                                                                                                | `<unknown>`                                                                  |
| +104.7% |  +45.00ms | 0.9% → 1.7% |   43.0ms → 88.0ms |   43 → 88 | `0xe3304`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`                                       |
|  +53.3% |  +40.00ms | 1.5% → 2.2% |  75.0ms → 115.0ms |  75 → 115 | `$s11SwiftParser0B0V9LookaheadVWOs`                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `<unknown>`                                                                  |
|  +82.9% |  +34.00ms | 0.8% → 1.4% |   41.0ms → 75.0ms |   41 → 75 | `$s11SwiftParser22PrepareForKeywordMatchVyAcA5LexerO6LexemeVcfC`                                                                                                                                                                                                                                                                                                                                                                                                                            | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpec.swift`        |
| +238.5% |  +31.00ms | 0.3% → 0.8% |   13.0ms → 44.0ms |   13 → 44 | `$s11SwiftParser0B0V9LookaheadVAA13TokenConsumerA2aFP07currentD0AA5LexerO6LexemeVvgTW`                                                                                                                                                                                                                                                                                                                                                                                                      | `<unknown>`                                                                  |
|     new |  +27.00ms | 0.0% → 0.5% |      0ms → 27.0ms |    0 → 27 | `$s11SwiftParser0B0V49canParseNonisolatedAsSpecifierInExpressionContextSbyFSbAC9LookaheadVzXEfU_`                                                                                                                                                                                                                                                                                                                                                                                           | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`      |
|     new |  +26.00ms | 0.0% → 0.5% |      0ms → 26.0ms |    0 → 26 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax014c54MissingDeclB0V_10attributes_9modifiers_11placeholder_5n22AcA0c15UnexpectedNodesw23VSg_AA0c13AttributeListw17VAjA0ce8Modifiermw12VAjA0c5Tokenw8VAjA0cB5r14ChtcfcySryAA0cW9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c13AttributeListB0VAsA0cv12ModifierListB0VAsA0c5TokenB0VASTf1nnnncn_nTf4nnnndnnnnnnn_nTm` | `AbsolutePosition.swift.o`                                                   |
|     new |  +26.00ms | 0.0% → 0.5% |      0ms → 26.0ms |    0 → 26 | `0x88a40`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`                                       |
|     new |  +26.00ms | 0.0% → 0.5% |      0ms → 26.0ms |    0 → 26 | `0x8a5c4`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`                                       |
|  +46.3% |  +25.00ms | 1.1% → 1.5% |   54.0ms → 79.0ms |   54 → 79 | `0x3084c0`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `/usr/lib/swift/linux/libswiftCore.so`                                       |
|  +72.7% |  +24.00ms | 0.7% → 1.1% |   33.0ms → 57.0ms |   33 → 57 | `$s11SwiftSyntax16BumpPtrAllocatorC8allocate9byteCount9alignmentSwSi_SitF`                                                                                                                                                                                                                                                                                                                                                                                                                  | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift` |
|  +31.6% |  +24.00ms | 1.5% → 1.9% |  76.0ms → 100.0ms |  76 → 100 | `$s11SwiftSyntax0B4TextV2eeoiySbAC_ACtFZTf4nnd_n`                                                                                                                                                                                                                                                                                                                                                                                                                                           | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxText.swift`       |
|     new |  +23.00ms | 0.0% → 0.4% |      0ms → 23.0ms |    0 → 23 | `$s11SwiftSyntax03RawB0V11parsedToken4kind9wholeText9textRange8presence15tokenDiagnostic5arenaAcA0cE4KindO_AA0bH0VSnySiGAA14SourcePresenceOAA0eM0VSgAA07ParsingcB5ArenaChtFZTf4nnnnnnd_n`                                                                                                                                                                                                                                                                                                   | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`    |
|     new |  +23.00ms | 0.0% → 0.4% |      0ms → 23.0ms |    0 → 23 | `$sSR8IteratorV4nextxSgyF11SwiftSyntax03RawD0VSg_Tg5`                                                                                                                                                                                                                                                                                                                                                                                                                                       | `<unknown>`                                                                  |
|  +14.8% |  +22.00ms | 3.0% → 3.3% | 149.0ms → 171.0ms | 149 → 171 | `$s11SwiftParser5LexerO6CursorV9lexTrivia33_40499B5A26053AEB2F96A7C76320F673LL4modeAE0F6ResultVAE0F10LexingModeO_tF`                                                                                                                                                                                                                                                                                                                                                                        | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`     |
|  +51.2% |  +22.00ms | 0.9% → 1.2% |   43.0ms → 65.0ms |   43 → 65 | `0x29d220`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `/usr/lib/swift/linux/libswiftCore.so`                                       |
|     new |  +22.00ms | 0.0% → 0.4% |      0ms → 22.0ms |    0 → 22 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax019c45MemberAccessExprB0V_4base_6period_8declName_5n22AcA0c15UnexpectedNodesx9VSg_AA0cfx14VSgAjA0c5Tokenx22VAjA0c13DeclReferencefx8VAjA0cB5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0cwB0VSgAsA0c5TokenB0VAsA0c13DeclReferencewB0VASTf1nnnncn_nTf4nnnndnnnnnnn_n`                               | `crtstuff.c`                                                                 |
|  +27.3% |  +21.00ms | 1.6% → 1.9% |   77.0ms → 98.0ms |   77 → 98 | `0xa1a40`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`                                       |

##### Ours

|  Change |    Delta |           % |              Time |   Samples | Function                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Location                                                                            |
| ------: | -------: | ----------: | ----------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|     new | +52.00ms | 0.0% → 1.0% |      0ms → 52.0ms |    0 → 52 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax027c61AccessorEffectSpecifiersB0V_14asyncSpecifier_12throwsClause_5n22AcA0c15UnexpectedNodesx14VSg_AA0c5Tokenx16VSgAiA0c6Throwsjx10VSgAiA0cB5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VSgAsA0c12ThrowsClauseB0VSgASTf1nnnncn_nTf4nnnndnnnnn_nTm`                                      | `AbsolutePosition.swift.o`                                                          |
|  +82.9% | +34.00ms | 0.8% → 1.4% |   41.0ms → 75.0ms |   41 → 75 | `$s11SwiftParser22PrepareForKeywordMatchVyAcA5LexerO6LexemeVcfC`                                                                                                                                                                                                                                                                                                                                                                                                                            | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpec.swift`               |
|     new | +27.00ms | 0.0% → 0.5% |      0ms → 27.0ms |    0 → 27 | `$s11SwiftParser0B0V49canParseNonisolatedAsSpecifierInExpressionContextSbyFSbAC9LookaheadVzXEfU_`                                                                                                                                                                                                                                                                                                                                                                                           | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`             |
|     new | +26.00ms | 0.0% → 0.5% |      0ms → 26.0ms |    0 → 26 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax014c54MissingDeclB0V_10attributes_9modifiers_11placeholder_5n22AcA0c15UnexpectedNodesw23VSg_AA0c13AttributeListw17VAjA0ce8Modifiermw12VAjA0c5Tokenw8VAjA0cB5r14ChtcfcySryAA0cW9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c13AttributeListB0VAsA0cv12ModifierListB0VAsA0c5TokenB0VASTf1nnnncn_nTf4nnnndnnnnnnn_nTm` | `AbsolutePosition.swift.o`                                                          |
|  +72.7% | +24.00ms | 0.7% → 1.1% |   33.0ms → 57.0ms |   33 → 57 | `$s11SwiftSyntax16BumpPtrAllocatorC8allocate9byteCount9alignmentSwSi_SitF`                                                                                                                                                                                                                                                                                                                                                                                                                  | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift`        |
|  +31.6% | +24.00ms | 1.5% → 1.9% |  76.0ms → 100.0ms |  76 → 100 | `$s11SwiftSyntax0B4TextV2eeoiySbAC_ACtFZTf4nnd_n`                                                                                                                                                                                                                                                                                                                                                                                                                                           | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxText.swift`              |
|     new | +23.00ms | 0.0% → 0.4% |      0ms → 23.0ms |    0 → 23 | `$s11SwiftSyntax03RawB0V11parsedToken4kind9wholeText9textRange8presence15tokenDiagnostic5arenaAcA0cE4KindO_AA0bH0VSnySiGAA14SourcePresenceOAA0eM0VSgAA07ParsingcB5ArenaChtFZTf4nnnnnnd_n`                                                                                                                                                                                                                                                                                                   | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`           |
|  +14.8% | +22.00ms | 3.0% → 3.3% | 149.0ms → 171.0ms | 149 → 171 | `$s11SwiftParser5LexerO6CursorV9lexTrivia33_40499B5A26053AEB2F96A7C76320F673LL4modeAE0F6ResultVAE0F10LexingModeO_tF`                                                                                                                                                                                                                                                                                                                                                                        | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`            |
|     new | +22.00ms | 0.0% → 0.4% |      0ms → 22.0ms |    0 → 22 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax019c45MemberAccessExprB0V_4base_6period_8declName_5n22AcA0c15UnexpectedNodesx9VSg_AA0cfx14VSgAjA0c5Tokenx22VAjA0c13DeclReferencefx8VAjA0cB5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0cwB0VSgAsA0c5TokenB0VAsA0c13DeclReferencewB0VASTf1nnnncn_nTf4nnnndnnnnnnn_n`                               | `crtstuff.c`                                                                        |
|  +57.6% | +19.00ms | 0.7% → 1.0% |   33.0ms → 52.0ms |   33 → 52 | `$s11SwiftParser0B0V9LookaheadV25canParseArgumentLabelListSbyF`                                                                                                                                                                                                                                                                                                                                                                                                                             | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Names.swift`                   |
|     new | +18.00ms | 0.0% → 0.3% |      0ms → 18.0ms |    0 → 18 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax019c45AccessorDeclListB0V8elements5arenaACSayAA0cdex9VG_AA0cB5r14ChtcfcySryAA0cX9VSgGXEfU_SayAA0cuvB0VGTf1nnnncn_nTf4nnnndg_nTm`                                                                                                                                                                               | `AbsolutePosition.swift.o`                                                          |
|   +5.4% | +16.00ms |        6.0% | 297.0ms → 313.0ms | 297 → 313 | `$s11SwiftParser5LexerO6CursorV7advance2ifS2bs7UnicodeO6ScalarVXE_tF`                                                                                                                                                                                                                                                                                                                                                                                                                       | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`            |
|     new | +15.00ms | 0.0% → 0.3% |      0ms → 15.0ms |    0 → 15 | `$s11SwiftSyntax0B7VisitorC13dispatchVisit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                                                                                                                                                                                                                                                                                                                                                   | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| +127.3% | +14.00ms | 0.2% → 0.5% |   11.0ms → 25.0ms |   11 → 25 | `$s11SwiftParser5LexerO6CursorV5StateO23leadingTriviaLexingMode6cursorAE0ghI0OSgAE_tFTf4dn_n`                                                                                                                                                                                                                                                                                                                                                                                               | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`            |
|  +10.7% | +11.00ms | 2.1% → 2.2% | 103.0ms → 114.0ms | 103 → 114 | `$s11SwiftSyntax13compareMemory33_132B404099BC4B0D33927A976564E3D3LLySbSPys5UInt8VG_AFSitF`                                                                                                                                                                                                                                                                                                                                                                                                 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxText.swift`              |
|  +90.9% | +10.00ms | 0.2% → 0.4% |   11.0ms → 21.0ms |   11 → 21 | `$s11SwiftParser0B0V28parsePostfixExpressionSuffix_6flavor7pattern0A6Syntax07RawExprI0VAI_AC0K6FlavorOAC14PatternContextOtF`                                                                                                                                                                                                                                                                                                                                                                | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`             |
|   +8.0% | +10.00ms | 2.5% → 2.6% | 125.0ms → 135.0ms | 125 → 135 | `$s11SwiftParser5LexerO6CursorV9nextToken17sourceBufferStart14stateAllocatorAC6LexemeVAE_0A6Syntax07BumpPtrK0CtF`                                                                                                                                                                                                                                                                                                                                                                           | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`            |
|     new | +10.00ms | 0.0% → 0.2% |      0ms → 10.0ms |    0 → 10 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax014c30MissingExprB0V_11placeholder_5n22AcA0c15UnexpectedNodesw14VSg_AA0c5Tokenw8VAhA0cB5r14ChtcfcySryAA0cW9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VASTf1nnnncn_nTf4nnnndnnn_nTm`                                                                                                                       | `AbsolutePosition.swift.o`                                                          |
|  +16.7% |  +9.00ms | 1.1% → 1.2% |   54.0ms → 63.0ms |   54 → 63 | `$s11SwiftParser9TokenSpecV7matches03rawC4Kind7keyword13atStartOfLineSb0A6Syntax03RawcG0O_AH7KeywordOSgyXKSbyXKtF`                                                                                                                                                                                                                                                                                                                                                                          | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpec.swift`               |
|     new |  +9.00ms | 0.0% → 0.2% |       0ms → 9.0ms |     0 → 9 | `$s11SwiftSyntax0B0V12layoutBufferAA014ArenaAllocatedD7PointerVyAA0efG0VyAA0B4DataVGSgGvg`                                                                                                                                                                                                                                                                                                                                                                                                  | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift`                  |

##### Native

|  Change |     Delta |            % |             Time |  Samples | Function                                                                                                                    | Location                               |
| ------: | --------: | -----------: | ---------------: | -------: | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| +180.0% | +108.00ms |  1.2% → 3.2% | 60.0ms → 168.0ms | 60 → 168 | `0x95968`                                                                                                                   | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +104.7% |  +45.00ms |  0.9% → 1.7% |  43.0ms → 88.0ms |  43 → 88 | `0xe3304`                                                                                                                   | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  +53.3% |  +40.00ms |  1.5% → 2.2% | 75.0ms → 115.0ms | 75 → 115 | `$s11SwiftParser0B0V9LookaheadVWOs`                                                                                         | `<unknown>`                            |
| +238.5% |  +31.00ms |  0.3% → 0.8% |  13.0ms → 44.0ms |  13 → 44 | `$s11SwiftParser0B0V9LookaheadVAA13TokenConsumerA2aFP07currentD0AA5LexerO6LexemeVvgTW`                                      | `<unknown>`                            |
|     new |  +26.00ms |  0.0% → 0.5% |     0ms → 26.0ms |   0 → 26 | `0x88a40`                                                                                                                   | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |  +26.00ms |  0.0% → 0.5% |     0ms → 26.0ms |   0 → 26 | `0x8a5c4`                                                                                                                   | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  +46.3% |  +25.00ms |  1.1% → 1.5% |  54.0ms → 79.0ms |  54 → 79 | `0x3084c0`                                                                                                                  | `/usr/lib/swift/linux/libswiftCore.so` |
|  +51.2% |  +22.00ms |  0.9% → 1.2% |  43.0ms → 65.0ms |  43 → 65 | `0x29d220`                                                                                                                  | `/usr/lib/swift/linux/libswiftCore.so` |
|  +27.3% |  +21.00ms |  1.6% → 1.9% |  77.0ms → 98.0ms |  77 → 98 | `0xa1a40`                                                                                                                   | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  +77.8% |  +21.00ms |  0.5% → 0.9% |  27.0ms → 48.0ms |  27 → 48 | `0xa1a60`                                                                                                                   | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  +46.4% |  +13.00ms |  0.6% → 0.8% |  28.0ms → 41.0ms |  28 → 41 | `0xa1940`                                                                                                                   | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  +50.0% |  +13.00ms |  0.5% → 0.7% |  26.0ms → 39.0ms |  26 → 39 | `0x3e6658`                                                                                                                  | `/usr/lib/swift/linux/libswiftCore.so` |
|     new |  +13.00ms |  0.0% → 0.2% |     0ms → 13.0ms |   0 → 13 | `0x88a9c`                                                                                                                   | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +275.0% |  +11.00ms |  0.1% → 0.3% |   4.0ms → 15.0ms |   4 → 15 | `$s11SwiftParser5LexerO14LexemeSequenceVWOr`                                                                                | `<unknown>`                            |
|     new |  +10.00ms |  0.0% → 0.2% |     0ms → 10.0ms |   0 → 10 | `$s11SwiftParser0B0V30parseSequenceExpressionElement6flavor7pattern0A6Syntax07RawExprI0VAC0K6FlavorO_AC14PatternContextOtF` | `<unknown>`                            |
| +800.0% |   +8.00ms | <0.1% → 0.2% |    1.0ms → 9.0ms |    1 → 9 | `0xa1a2c`                                                                                                                   | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +140.0% |   +7.00ms |  0.1% → 0.2% |   5.0ms → 12.0ms |   5 → 12 | `0xa2dd8`                                                                                                                   | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +200.0% |   +6.00ms |  0.1% → 0.2% |    3.0ms → 9.0ms |    3 → 9 | `0x29d294`                                                                                                                  | `/usr/lib/swift/linux/libswiftCore.so` |
|     new |   +6.00ms |  0.0% → 0.1% |      0ms → 6.0ms |    0 → 6 | `0x88a50`                                                                                                                   | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +125.0% |   +5.00ms |  0.1% → 0.2% |    4.0ms → 9.0ms |    4 → 9 | `0x430114`                                                                                                                  | `/usr/lib/swift/linux/libswiftCore.so` |

##### Standard library

|  Change |    Delta |            % |            Time | Samples | Function                                                                                                                                                                                                                                                                                                                                     | Location                                                                            |
| ------: | -------: | -----------: | --------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|     new | +47.00ms |  0.0% → 0.9% |    0ms → 47.0ms |  0 → 47 | `$sSpsRi_zrlE10initialize2toyxn_tF11SwiftSyntax0D4DataV_Tg5`                                                                                                                                                                                                                                                                                 | `<unknown>`                                                                         |
|     new | +23.00ms |  0.0% → 0.4% |    0ms → 23.0ms |  0 → 23 | `$sSR8IteratorV4nextxSgyF11SwiftSyntax03RawD0VSg_Tg5`                                                                                                                                                                                                                                                                                        | `<unknown>`                                                                         |
|     new | +21.00ms |  0.0% → 0.4% |    0ms → 21.0ms |  0 → 21 | `$sSR8IteratorV4nextxSgyF11SwiftSyntax21ArenaAllocatedPointerVyAE0D4DataVGSg_Tg5`                                                                                                                                                                                                                                                            | `<unknown>`                                                                         |
|  +56.0% | +14.00ms |  0.5% → 0.7% | 25.0ms → 39.0ms | 25 → 39 | `$ss7UnicodeO6ScalarV11SwiftParserE17testCharacterInfo33_CBBF9FEF132CFB2EFF7837FA6BCFF520LLySbSJAEE0G0AGLLVF`                                                                                                                                                                                                                                | `./.build/checkouts/swift-syntax/Sources/SwiftParser/CharacterInfo.swift`           |
|  +40.0% | +10.00ms |  0.5% → 0.7% | 25.0ms → 35.0ms | 25 → 35 | `$sSpsRi_zrlE10initialize2toyxn_tF11SwiftSyntax03RawD4DataV_Tg5`                                                                                                                                                                                                                                                                             | `<unknown>`                                                                         |
|     new |  +9.00ms |  0.0% → 0.2% |     0ms → 9.0ms |   0 → 9 | `$sSpsRi_zrlE10initialize2toyxn_tF11SwiftSyntax21ArenaAllocatedPointerVyAC0D4DataVGSg_Tg5`                                                                                                                                                                                                                                                   | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntaxLayoutView.swift` |
|     new |  +7.00ms |  0.0% → 0.1% |     0ms → 7.0ms |   0 → 7 | `$sSlsEy11SubSequenceQzys15UnboundedRange_OXEcigSRys5UInt8VG_Tg5`                                                                                                                                                                                                                                                                            | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`            |
|     new |  +4.00ms |  0.0% → 0.1% |     0ms → 4.0ms |   0 → 4 | `$sSp10initialize9repeating5countyx_SitF11SwiftSyntax03RawE0VSg_Tg5`                                                                                                                                                                                                                                                                         | `<unknown>`                                                                         |
|  +50.0% |  +4.00ms |         0.2% |  8.0ms → 12.0ms |  8 → 12 | `$sSR8IteratorV4nextxSgyF11SwiftSyntax03RawD0VSg_Tg5`                                                                                                                                                                                                                                                                                        | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`           |
|     new |  +4.00ms |  0.0% → 0.1% |     0ms → 4.0ms |   0 → 4 | `$sSa034_makeUniqueAndReserveCapacityIfNotB0yyF11SwiftSyntax016RawCodeBlockItemI0V_Tg5`                                                                                                                                                                                                                                                      | `<unknown>`                                                                         |
|  +37.5% |  +3.00ms |         0.2% |  8.0ms → 11.0ms |  8 → 11 | `$ss7UnicodeO6ScalarV11SwiftParserE22isAsciiIdentifierStartSbvg`                                                                                                                                                                                                                                                                             | `./.build/checkouts/swift-syntax/Sources/SwiftParser/CharacterInfo.swift`           |
|     new |  +3.00ms |  0.0% → 0.1% |     0ms → 3.0ms |   0 → 3 | `$sSlsE3mapySayqd__Gqd__7ElementQzqd_0_YKXEqd_0_YKs5ErrorRd_0_r0_lFSay11SwiftSyntax08RawTokenE0VG_AF0f17TypeSpecifierListE0VACOs5NeverOTg504$s11d17Parser0B0V22parseh82AttributeList19misplacedSpecifiers0A6Syntax03Rawd9SpecifierfI0V10specifiers_AF0jefw34V10attributesAH04lateH0tSgSayAF0j5gw8VG_tFAH7B8OAPXEfU_0D6Parser6ParserVTf1cn_n` | `<unknown>`                                                                         |
|  +50.0% |  +2.00ms |         0.1% |   4.0ms → 6.0ms |   4 → 6 | `$sSD_7defaultq_x_q_yXKtciM11SwiftSyntax0C4KindO_SiTg5`                                                                                                                                                                                                                                                                                      | `./Sources/profile/main.swift`                                                      |
|  +11.8% |  +2.00ms |  0.3% → 0.4% | 17.0ms → 19.0ms | 17 → 19 | `$ss5UInt8VSQsSQ2eeoiySbx_xtFZTW`                                                                                                                                                                                                                                                                                                            | `./.build/checkouts/swift-syntax/Sources/SwiftParser/CharacterInfo.swift`           |
|  +66.7% |  +2.00ms |         0.1% |   3.0ms → 5.0ms |   3 → 5 | `$ss15ContiguousArrayV16_createNewBuffer14bufferIsUnique15minimumCapacity13growForAppendySb_SiSbtF11SwiftParser15TokenPrecedenceO_Tg5`                                                                                                                                                                                                       | `<unknown>`                                                                         |
|  +25.0% |  +2.00ms |         0.2% |  8.0ms → 10.0ms |  8 → 10 | `$ss22__RawDictionaryStorageC4find_9hashValues10_HashTableV6BucketV6bucket_Sb5foundtx_SitSHRzlF11SwiftSyntax0aM0V2IDV_Tg5`                                                                                                                                                                                                                   | `<unknown>`                                                                         |
|  +40.0% |  +2.00ms |         0.1% |   5.0ms → 7.0ms |   5 → 7 | `$sSls11SubSequenceQzRszrlE8popFirst7ElementQzSgyFs5SliceVySRys5UInt8VGG_Tg5`                                                                                                                                                                                                                                                                | `<unknown>`                                                                         |
|  +50.0% |  +2.00ms |         0.1% |   4.0ms → 6.0ms |   4 → 6 | `$ss17_NativeDictionaryV12ensureUnique02isD08capacityS2b_SitF11SwiftSyntax0H4KindO_SiTg5`                                                                                                                                                                                                                                                    | `./Sources/profile/main.swift`                                                      |
| +100.0% |  +2.00ms | <0.1% → 0.1% |   2.0ms → 4.0ms |   2 → 4 | `$sSUss17FixedWidthIntegerRzrlEyxqd__cSzRd__lufCSu_SiTt1g5`                                                                                                                                                                                                                                                                                  | `<unknown>`                                                                         |
|     new |  +2.00ms | 0.0% → <0.1% |     0ms → 2.0ms |   0 → 2 | `$sSa9_getCountSiyF11SwiftSyntax03RawD0V_Tg5`                                                                                                                                                                                                                                                                                                | `<unknown>`                                                                         |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |     Delta |           % |              Time |   Samples | Function                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Location                                                                               |
| ------: | --------: | ----------: | ----------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| removed | -103.00ms | 2.1% → 0.0% |     103.0ms → 0ms |   103 → 0 | `0x3e69e0`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `/usr/lib/swift/linux/libswiftCore.so`                                                 |
| removed |  -69.00ms | 1.4% → 0.0% |      69.0ms → 0ms |    69 → 0 | `0x430244`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `/usr/lib/swift/linux/libswiftCore.so`                                                 |
| removed |  -50.00ms | 1.0% → 0.0% |      50.0ms → 0ms |    50 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax027c61AccessorEffectSpecifiersB0V_14asyncSpecifier_12throwsClause_5n22AcA0c15UnexpectedNodesx14VSg_AA0c5Tokenx16VSgAiA0c6Throwsjx9VSgAiA0B5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VSgAsA0c12ThrowsClauseB0VSgASTf1nnnncn_nTf4nnnndnnnnn_nTm`                                       | `AbsolutePosition.swift.o`                                                             |
| removed |  -40.00ms | 0.8% → 0.0% |      40.0ms → 0ms |    40 → 0 | `0x3e6994`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `/usr/lib/swift/linux/libswiftCore.so`                                                 |
|  -20.1% |  -36.00ms | 3.6% → 2.7% | 179.0ms → 143.0ms | 179 → 143 | `0x3e62dc`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `/usr/lib/swift/linux/libswiftCore.so`                                                 |
|  -26.8% |  -34.00ms | 2.6% → 1.8% |  127.0ms → 93.0ms |  127 → 93 | `_init`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `crtstuff.c`                                                                           |
| removed |  -32.00ms | 0.6% → 0.0% |      32.0ms → 0ms |    32 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax014c54MissingDeclB0V_10attributes_9modifiers_11placeholder_5n22AcA0c15UnexpectedNodesw23VSg_AA0c13AttributeListw17VAjA0ce8Modifiermw12VAjA0c5Tokenw7VAjA0B5r14ChtcfcySryAA0cW9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c13AttributeListB0VAsA0cv12ModifierListB0VAsA0c5TokenB0VASTf1nnnncn_nTf4nnnndnnnnnnn_nTm` | `AbsolutePosition.swift.o`                                                             |
| removed |  -27.00ms | 0.5% → 0.0% |      27.0ms → 0ms |    27 → 0 | `$s11SwiftSyntax03RawB0V11parsedToken4kind9wholeText9textRange8presence15tokenDiagnostic5arenaAcA0cE4KindO_AA0bH0VSnySiGAA14SourcePresenceOAA0eM0VSgAA07ParsingB5ArenaChtFZTf4nnnnnnd_n`                                                                                                                                                                                                                                                                                                  | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`              |
| removed |  -26.00ms | 0.5% → 0.0% |      26.0ms → 0ms |    26 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF`                                                                                                                                                                                                                                                                                                                                                                                                         | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`    |
| removed |  -25.00ms | 0.5% → 0.0% |      25.0ms → 0ms |    25 → 0 | `$s11SwiftSyntax03RawB8ChildrenV5index_10advancedByAA0bD5IndexVAG_AA0cB0VSgtF`                                                                                                                                                                                                                                                                                                                                                                                                            | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`              |
|  -67.7% |  -21.00ms | 0.6% → 0.2% |   31.0ms → 10.0ms |   31 → 10 | `0x47f088`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `/usr/lib/swift/linux/libswiftCore.so`                                                 |
| removed |  -20.00ms | 0.4% → 0.0% |      20.0ms → 0ms |    20 → 0 | `$s11SwiftSyntax0B21ArenaAllocatedPointerV7pointeexvgAA03RawB4DataV_Tg5`                                                                                                                                                                                                                                                                                                                                                                                                                  | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxArenaAllocatedBuffer.swift` |
|  -23.2% |  -19.00ms | 1.7% → 1.2% |   82.0ms → 63.0ms |   82 → 63 | `0x4301f4`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `/usr/lib/swift/linux/libswiftCore.so`                                                 |
| removed |  -19.00ms | 0.4% → 0.0% |      19.0ms → 0ms |    19 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax019c45AccessorDeclListB0V8elements5arenaACSayAA0cdex8VG_AA0B5r14ChtcfcySryAA0cX9VSgGXEfU_SayAA0cuvB0VGTf1nnnncn_nTf4nnnndg_nTm`                                                                                                                                                                               | `AbsolutePosition.swift.o`                                                             |
|  -17.0% |  -18.00ms | 2.1% → 1.7% |  106.0ms → 88.0ms |  106 → 88 | `$s11SwiftParser5LexerO6CursorV8PositionV7advances5UInt8VSgyF`                                                                                                                                                                                                                                                                                                                                                                                                                            | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`               |
| removed |  -17.00ms | 0.3% → 0.0% |      17.0ms → 0ms |    17 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax019c45MemberAccessExprB0V_4base_6period_8declName_5n22AcA0c15UnexpectedNodesx9VSg_AA0cfx14VSgAjA0c5Tokenx22VAjA0c13DeclReferencefx7VAjA0B5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0cwB0VSgAsA0c5TokenB0VAsA0c13DeclReferencewB0VASTf1nnnncn_nTf4nnnndnnnnnnn_n`                               | `crtstuff.c`                                                                           |
| removed |  -17.00ms | 0.3% → 0.0% |      17.0ms → 0ms |    17 → 0 | `0x3e673c`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `/usr/lib/swift/linux/libswiftCore.so`                                                 |
|  -11.9% |  -16.00ms | 2.7% → 2.3% | 134.0ms → 118.0ms | 134 → 118 | `0x3e6630`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `/usr/lib/swift/linux/libswiftCore.so`                                                 |
|  -45.7% |  -16.00ms | 0.7% → 0.4% |   35.0ms → 19.0ms |   35 → 19 | `0x3e66a4`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `/usr/lib/swift/linux/libswiftCore.so`                                                 |
| removed |  -16.00ms | 0.3% → 0.0% |      16.0ms → 0ms |    16 → 0 | `$s11SwiftSyntax0B0V4InfoC0C4ImplOSgWOe`                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `<unknown>`                                                                            |

##### Ours

|  Change |    Delta |           % |             Time |  Samples | Function                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Location                                                                                      |
| ------: | -------: | ----------: | ---------------: | -------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| removed | -50.00ms | 1.0% → 0.0% |     50.0ms → 0ms |   50 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax027c61AccessorEffectSpecifiersB0V_14asyncSpecifier_12throwsClause_5n22AcA0c15UnexpectedNodesx14VSg_AA0c5Tokenx16VSgAiA0c6Throwsjx9VSgAiA0B5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VSgAsA0c12ThrowsClauseB0VSgASTf1nnnncn_nTf4nnnndnnnnn_nTm`                                       | `AbsolutePosition.swift.o`                                                                    |
|  -26.8% | -34.00ms | 2.6% → 1.8% | 127.0ms → 93.0ms | 127 → 93 | `_init`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `crtstuff.c`                                                                                  |
| removed | -32.00ms | 0.6% → 0.0% |     32.0ms → 0ms |   32 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax014c54MissingDeclB0V_10attributes_9modifiers_11placeholder_5n22AcA0c15UnexpectedNodesw23VSg_AA0c13AttributeListw17VAjA0ce8Modifiermw12VAjA0c5Tokenw7VAjA0B5r14ChtcfcySryAA0cW9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c13AttributeListB0VAsA0cv12ModifierListB0VAsA0c5TokenB0VASTf1nnnncn_nTf4nnnndnnnnnnn_nTm` | `AbsolutePosition.swift.o`                                                                    |
| removed | -27.00ms | 0.5% → 0.0% |     27.0ms → 0ms |   27 → 0 | `$s11SwiftSyntax03RawB0V11parsedToken4kind9wholeText9textRange8presence15tokenDiagnostic5arenaAcA0cE4KindO_AA0bH0VSnySiGAA14SourcePresenceOAA0eM0VSgAA07ParsingB5ArenaChtFZTf4nnnnnnd_n`                                                                                                                                                                                                                                                                                                  | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`                     |
| removed | -26.00ms | 0.5% → 0.0% |     26.0ms → 0ms |   26 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF`                                                                                                                                                                                                                                                                                                                                                                                                         | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`           |
| removed | -25.00ms | 0.5% → 0.0% |     25.0ms → 0ms |   25 → 0 | `$s11SwiftSyntax03RawB8ChildrenV5index_10advancedByAA0bD5IndexVAG_AA0cB0VSgtF`                                                                                                                                                                                                                                                                                                                                                                                                            | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`                     |
| removed | -20.00ms | 0.4% → 0.0% |     20.0ms → 0ms |   20 → 0 | `$s11SwiftSyntax0B21ArenaAllocatedPointerV7pointeexvgAA03RawB4DataV_Tg5`                                                                                                                                                                                                                                                                                                                                                                                                                  | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxArenaAllocatedBuffer.swift`        |
| removed | -19.00ms | 0.4% → 0.0% |     19.0ms → 0ms |   19 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax019c45AccessorDeclListB0V8elements5arenaACSayAA0cdex8VG_AA0B5r14ChtcfcySryAA0cX9VSgGXEfU_SayAA0cuvB0VGTf1nnnncn_nTf4nnnndg_nTm`                                                                                                                                                                               | `AbsolutePosition.swift.o`                                                                    |
|  -17.0% | -18.00ms | 2.1% → 1.7% | 106.0ms → 88.0ms | 106 → 88 | `$s11SwiftParser5LexerO6CursorV8PositionV7advances5UInt8VSgyF`                                                                                                                                                                                                                                                                                                                                                                                                                            | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`                      |
| removed | -17.00ms | 0.3% → 0.0% |     17.0ms → 0ms |   17 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax019c45MemberAccessExprB0V_4base_6period_8declName_5n22AcA0c15UnexpectedNodesx9VSg_AA0cfx14VSgAjA0c5Tokenx22VAjA0c13DeclReferencefx7VAjA0B5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0cwB0VSgAsA0c5TokenB0VAsA0c13DeclReferencewB0VASTf1nnnncn_nTf4nnnndnnnnnnn_n`                               | `crtstuff.c`                                                                                  |
|  -15.1% | -14.00ms | 1.9% → 1.5% |  93.0ms → 79.0ms |  93 → 79 | `$s11SwiftParser5LexerO6CursorV9lexNormal33_40499B5A26053AEB2F96A7C76320F673LL17sourceBufferStart29preferRegexOverBinaryOperatorAC6ResultVAE_SbtF`                                                                                                                                                                                                                                                                                                                                        | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`                      |
| removed | -13.00ms | 0.3% → 0.0% |     13.0ms → 0ms |   13 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF`                                                                                                                                                                                                                                                                                                                                                                                                | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`           |
| removed | -12.00ms | 0.2% → 0.0% |     12.0ms → 0ms |   12 → 0 | `$s11SwiftSyntax03RawB8ChildrenV5index_10advancedByAA0bD5IndexVAG_AA0cB0VSgtF`                                                                                                                                                                                                                                                                                                                                                                                                            | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxChildren.swift`                    |
| removed | -10.00ms | 0.2% → 0.0% |     10.0ms → 0ms |   10 → 0 | `$s11SwiftSyntax014RawLabeledExprB0V_5label_5colon_10expression_13trailingComma_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VSgAknKxAknkA0B5ArenaChtcAA0ceB12NodeProtocolRzlufC`                                                                                                                                                                                                                                                                                                        | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/raw/RawSyntaxNodesJKLMN.swift` |
| removed | -10.00ms | 0.2% → 0.0% |     10.0ms → 0ms |   10 → 0 | `$s11SwiftSyntax0B13ChildrenIndexV6offset13indexInParent0fG4TreeACs6UInt32V_AhA0B10IdentifierV0bdgI0Vtc33_B18D49ECBA01D94F67CC721AAEC7C395LlfC`                                                                                                                                                                                                                                                                                                                                           | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxChildren.swift`                    |
|  -22.6% |  -7.00ms | 0.6% → 0.5% |  31.0ms → 24.0ms |  31 → 24 | `$s11SwiftParser5LexerO14LexemeSequenceV7advanceAC0D0VyF6$deferL_yyF`                                                                                                                                                                                                                                                                                                                                                                                                                     | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/LexemeSequence.swift`              |
|  -33.3% |  -7.00ms | 0.4% → 0.3% |  21.0ms → 14.0ms |  21 → 14 | `$s11SwiftSyntax16BumpPtrAllocatorC23allocateFromCurrentSlab33_61CB623A74FD1871D887FFA45954E6F5LLySwSgSi_SitF`                                                                                                                                                                                                                                                                                                                                                                            | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift`                  |
|  -30.0% |  -6.00ms | 0.4% → 0.3% |  20.0ms → 14.0ms |  20 → 14 | `$s11SwiftParser19DeclarationModifierO6lexeme20experimentalFeaturesACSgAA5LexerO6LexemeV_AA0B0V012ExperimentalG0VtcfCTf4ndd_n`                                                                                                                                                                                                                                                                                                                                                            | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpecSet.swift`                      |
|  -50.0% |  -6.00ms | 0.2% → 0.1% |   12.0ms → 6.0ms |   12 → 6 | `$s11SwiftParser21ContextualDeclKeywordO6lexeme20experimentalFeaturesACSgAA5LexerO6LexemeV_AA0B0V012ExperimentalH0VtcfCTf4ndd_n`                                                                                                                                                                                                                                                                                                                                                          | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpecSet.swift`                      |
|  -25.0% |  -6.00ms | 0.5% → 0.3% |  24.0ms → 18.0ms |  24 → 18 | `$s11SwiftSyntax15TokenDiagnosticV9combining_ACSgAE_AEtcfC`                                                                                                                                                                                                                                                                                                                                                                                                                               | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/TokenDiagnostic.swift`                   |

##### Native

|  Change |     Delta |           % |              Time |   Samples | Function                                 | Location                               |
| ------: | --------: | ----------: | ----------------: | --------: | ---------------------------------------- | -------------------------------------- |
| removed | -103.00ms | 2.1% → 0.0% |     103.0ms → 0ms |   103 → 0 | `0x3e69e0`                               | `/usr/lib/swift/linux/libswiftCore.so` |
| removed |  -69.00ms | 1.4% → 0.0% |      69.0ms → 0ms |    69 → 0 | `0x430244`                               | `/usr/lib/swift/linux/libswiftCore.so` |
| removed |  -40.00ms | 0.8% → 0.0% |      40.0ms → 0ms |    40 → 0 | `0x3e6994`                               | `/usr/lib/swift/linux/libswiftCore.so` |
|  -20.1% |  -36.00ms | 3.6% → 2.7% | 179.0ms → 143.0ms | 179 → 143 | `0x3e62dc`                               | `/usr/lib/swift/linux/libswiftCore.so` |
|  -67.7% |  -21.00ms | 0.6% → 0.2% |   31.0ms → 10.0ms |   31 → 10 | `0x47f088`                               | `/usr/lib/swift/linux/libswiftCore.so` |
|  -23.2% |  -19.00ms | 1.7% → 1.2% |   82.0ms → 63.0ms |   82 → 63 | `0x4301f4`                               | `/usr/lib/swift/linux/libswiftCore.so` |
| removed |  -17.00ms | 0.3% → 0.0% |      17.0ms → 0ms |    17 → 0 | `0x3e673c`                               | `/usr/lib/swift/linux/libswiftCore.so` |
|  -11.9% |  -16.00ms | 2.7% → 2.3% | 134.0ms → 118.0ms | 134 → 118 | `0x3e6630`                               | `/usr/lib/swift/linux/libswiftCore.so` |
|  -45.7% |  -16.00ms | 0.7% → 0.4% |   35.0ms → 19.0ms |   35 → 19 | `0x3e66a4`                               | `/usr/lib/swift/linux/libswiftCore.so` |
| removed |  -16.00ms | 0.3% → 0.0% |      16.0ms → 0ms |    16 → 0 | `$s11SwiftSyntax0B0V4InfoC0C4ImplOSgWOe` | `<unknown>`                            |
|  -24.6% |  -15.00ms | 1.2% → 0.9% |   61.0ms → 46.0ms |   61 → 46 | `0x3e2ef4`                               | `/usr/lib/swift/linux/libswiftCore.so` |
|  -31.6% |  -12.00ms | 0.8% → 0.5% |   38.0ms → 26.0ms |   38 → 26 | `0x3e6648`                               | `/usr/lib/swift/linux/libswiftCore.so` |
|  -13.0% |   -9.00ms | 1.4% → 1.1% |   69.0ms → 60.0ms |   69 → 60 | `0x3e6304`                               | `/usr/lib/swift/linux/libswiftCore.so` |
| removed |   -9.00ms | 0.2% → 0.0% |       9.0ms → 0ms |     9 → 0 | `0x3e69e4`                               | `/usr/lib/swift/linux/libswiftCore.so` |
|  -32.1% |   -9.00ms | 0.6% → 0.4% |   28.0ms → 19.0ms |   28 → 19 | `$s11SwiftParser0B0VWOr`                 | `<unknown>`                            |
|  -40.9% |   -9.00ms | 0.4% → 0.2% |   22.0ms → 13.0ms |   22 → 13 | `0x3e634c`                               | `/usr/lib/swift/linux/libswiftCore.so` |
|  -42.9% |   -9.00ms | 0.4% → 0.2% |   21.0ms → 12.0ms |   21 → 12 | `0x430134`                               | `/usr/lib/swift/linux/libswiftCore.so` |
|  -50.0% |   -9.00ms | 0.4% → 0.2% |    18.0ms → 9.0ms |    18 → 9 | `0x3e2ea4`                               | `/usr/lib/swift/linux/libswiftCore.so` |
|  -17.8% |   -8.00ms | 0.9% → 0.7% |   45.0ms → 37.0ms |   45 → 37 | `0x42cf48`                               | `/usr/lib/swift/linux/libswiftCore.so` |
|  -63.6% |   -7.00ms | 0.2% → 0.1% |    11.0ms → 4.0ms |    11 → 4 | `0xa1a44`                                | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### Standard library

|  Change |    Delta |            % |            Time | Samples | Function                                                                                                                                                                                                                                                                                                                           | Location                                                                     |
| ------: | -------: | -----------: | --------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
|  -37.9% | -11.00ms |  0.6% → 0.3% | 29.0ms → 18.0ms | 29 → 18 | `$ss22__RawDictionaryStorageC4find_9hashValues10_HashTableV6BucketV6bucket_Sb5foundtx_SitSHRzlF11SwiftSyntax0M4KindO_Tg5`                                                                                                                                                                                                          | `<unknown>`                                                                  |
| removed |  -7.00ms |  0.1% → 0.0% |     7.0ms → 0ms |   7 → 0 | `$ss25isKnownUniquelyReferencedySbxSgzRlzClF11SwiftSyntax0F0V4InfoC_Tg5`                                                                                                                                                                                                                                                           | `<unknown>`                                                                  |
| removed |  -6.00ms |  0.1% → 0.0% |     6.0ms → 0ms |   6 → 0 | `$ss17_NativeDictionaryV8setValue_6forKey8isUniqueyq_n_xSbtF11SwiftSyntax03RawJ0V2IDV_SiTg5`                                                                                                                                                                                                                                       | `<unknown>`                                                                  |
|  -20.0% |  -4.00ms |  0.4% → 0.3% | 20.0ms → 16.0ms | 20 → 16 | `$sSls11SubSequenceQzRszrlE8popFirst7ElementQzSgyFs5SliceVySRys5UInt8VGG_Tg5`                                                                                                                                                                                                                                                      | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`     |
| removed |  -4.00ms |  0.1% → 0.0% |     4.0ms → 0ms |   4 → 0 | `$sSis35_ExpressibleByBuiltinIntegerLiteralssAAP08_builtindE0xBI_tcfCTW`                                                                                                                                                                                                                                                           | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`    |
|  -75.0% |  -3.00ms | 0.1% → <0.1% |   4.0ms → 1.0ms |   4 → 1 | `$sSv11SwiftSyntaxE9alignedUp12toMultipleOfSvSi_tF`                                                                                                                                                                                                                                                                                | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift` |
| removed |  -3.00ms |  0.1% → 0.0% |     3.0ms → 0ms |   3 → 0 | `$sSp4movexyF11SwiftSyntax0C0V4InfoCSg_Tg5`                                                                                                                                                                                                                                                                                        | `<unknown>`                                                                  |
|  -25.0% |  -2.00ms |  0.2% → 0.1% |   8.0ms → 6.0ms |   8 → 6 | `$ss22__RawDictionaryStorageC4findys10_HashTableV6BucketV6bucket_Sb5foundtxSHRzlF11SwiftSyntax0K4KindO_Tg5`                                                                                                                                                                                                                        | `<unknown>`                                                                  |
| removed |  -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `$sSUss17FixedWidthIntegerRzrlEyxqd__cSzRd__lufCs6UInt32V_SiTt1g5`                                                                                                                                                                                                                                                                 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`    |
| removed |  -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `$ss22_ContiguousArrayBufferV20_consumeAndCreateNew14bufferIsUnique15minimumCapacity13growForAppendAByxGSb_SiSbtF11SwiftParser0Q0V9LookaheadV13SkippingState33_8B04AB4096AC45820073D65E009E045BLLO_Tg5`                                                                                                                            | `<unknown>`                                                                  |
|  -33.3% |  -1.00ms | 0.1% → <0.1% |   3.0ms → 2.0ms |   3 → 2 | `$ss17_NativeDictionaryV16_unsafeInsertNew3key5valueyxn_q_ntF11SwiftSyntax03RawI0V2IDV_SiTg5`                                                                                                                                                                                                                                      | `<unknown>`                                                                  |
| removed |  -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `$ss22_ContiguousArrayBufferV20_consumeAndCreateNew14bufferIsUnique15minimumCapacity13growForAppendAByxGSb_SiSbtF11SwiftParser12OperatorLikeO_Tg5Tm`                                                                                                                                                                               | `Attributes.swift.o`                                                         |
| removed |  -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `$ss22_ContiguousArrayBufferV20_consumeAndCreateNew14bufferIsUnique15minimumCapacity13growForAppendAByxGSb_SiSbtFSw_Tg5`                                                                                                                                                                                                           | `<unknown>`                                                                  |
| removed |  -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `$sSa9_getCountSiyF11SwiftParser0D0V9LookaheadV13SkippingState33_8B04AB4096AC45820073D65E009E045BLLO_Tg5`                                                                                                                                                                                                                          | `<unknown>`                                                                  |
|  -50.0% |  -1.00ms |        <0.1% |   2.0ms → 1.0ms |   2 → 1 | `$sSa11_getElement_20wasNativeTypeChecked22matchingSubscriptCheckxSi_Sbs16_DependenceTokenVtF11SwiftParser0K10PrecedenceO_Tg5`                                                                                                                                                                                                     | `<unknown>`                                                                  |
| removed |  -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `$sSlsE3mapySayqd__Gqd__7ElementQzqd_0_YKXEqd_0_YKs5ErrorRd_0_r0_lFSay11SwiftSyntax08RawTokenE0VG_AF0f17TypeSpecifierListE0VACOs5NeverOTg504$s11d17Parser0B0V22parseh82AttributeList19misplacedSpecifiers0A6Syntax03Rawd9SpecifierfI0V10specifiers_AF0jefw24V10attributestSgSayAF0j5gw8VG_tFAH7B8OAOXEfU_0D6Parser6ParserVTf1cn_n` | `<unknown>`                                                                  |
| removed |  -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `$sSa36_reserveCapacityAssumingUniqueBuffer8oldCountySi_tF11SwiftSyntax017RawSwitchCaseItemI0V_Tg5`                                                                                                                                                                                                                                | `<unknown>`                                                                  |
| removed |  -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `$ss9OptionSetPs7ElementQzRszrlE6insertySb8inserted_x17memberAfterInserttxF11SwiftSyntax012RecursiveRawJ5FlagsV_Tg5`                                                                                                                                                                                                               | `<unknown>`                                                                  |
|  -33.3% |  -1.00ms | 0.1% → <0.1% |   3.0ms → 2.0ms |   3 → 2 | `$sSHsE13_rawHashValue4seedS2i_tF11SwiftSyntax0F4KindO_Tgq5`                                                                                                                                                                                                                                                                       | `<unknown>`                                                                  |
| removed |  -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `$sSa6appendyyxnF11SwiftSyntax017RawPatternBindingC0V_Tg5`                                                                                                                                                                                                                                                                         | `<unknown>`                                                                  |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `$s11SwiftParser22PrepareForKeywordMatchVyAcA5LexerO6LexemeVcfC` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpec.swift`)

|  Change |    Delta |             % |            Time | Samples | Location                                                                 |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------ |
|  +80.0% | +32.00ms | 97.6% → 96.0% | 40.0ms → 72.0ms | 40 → 72 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpec.swift:34` |
| +100.0% |  +1.00ms |   2.4% → 2.7% |   1.0ms → 2.0ms |   1 → 2 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpec.swift:36` |
|     new |  +1.00ms |   0.0% → 1.3% |     0ms → 1.0ms |   0 → 1 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpec.swift:37` |

##### `$s11SwiftParser0B0V49canParseNonisolatedAsSpecifierInExpressionContextSbyFSbAC9LookaheadVzXEfU_` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`)

| Change |    Delta |            % |         Time | Samples | Location                                                                    |
| -----: | -------: | -----------: | -----------: | ------: | --------------------------------------------------------------------------- |
|    new | +16.00ms | 0.0% → 59.3% | 0ms → 16.0ms |  0 → 16 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift:387` |
|    new | +11.00ms | 0.0% → 40.7% | 0ms → 11.0ms |  0 → 11 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift:405` |

##### `$s11SwiftSyntax16BumpPtrAllocatorC8allocate9byteCount9alignmentSwSi_SitF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift`)

|  Change |   Delta |             % |            Time | Samples | Location                                                                         |
| ------: | ------: | ------------: | --------------: | ------: | -------------------------------------------------------------------------------- |
|  +56.3% | +9.00ms | 48.5% → 43.9% | 16.0ms → 25.0ms | 16 → 25 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift:130` |
| +120.0% | +6.00ms | 15.2% → 19.3% |  5.0ms → 11.0ms |  5 → 11 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift:99`  |
|  +60.0% | +6.00ms | 30.3% → 28.1% | 10.0ms → 16.0ms | 10 → 16 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift:107` |
|     new | +2.00ms |   0.0% → 3.5% |     0ms → 2.0ms |   0 → 2 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift:115` |
|  +50.0% | +1.00ms |   6.1% → 5.3% |   2.0ms → 3.0ms |   2 → 3 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift:110` |

##### `$s11SwiftSyntax0B4TextV2eeoiySbAC_ACtFZTf4nnd_n` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxText.swift`)

|  Change |    Delta |             % |            Time | Samples | Location                                                                   |
| ------: | -------: | ------------: | --------------: | ------: | -------------------------------------------------------------------------- |
|  +28.4% | +21.00ms | 97.4% → 95.0% | 74.0ms → 95.0ms | 74 → 95 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxText.swift:201` |
| +150.0% |  +3.00ms |   2.6% → 5.0% |   2.0ms → 5.0ms |   2 → 5 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxText.swift:204` |

##### `$s11SwiftSyntax03RawB0V11parsedToken4kind9wholeText9textRange8presence15tokenDiagnostic5arenaAcA0cE4KindO_AA0bH0VSnySiGAA14SourcePresenceOAA0eM0VSgAA07ParsingcB5ArenaChtFZTf4nnnnnnd_n` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`)

| Change |    Delta |            % |         Time | Samples | Location                                                                      |
| -----: | -------: | -----------: | -----------: | ------: | ----------------------------------------------------------------------------- |
|    new | +20.00ms | 0.0% → 87.0% | 0ms → 20.0ms |  0 → 20 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift:595` |
|    new |  +2.00ms |  0.0% → 8.7% |  0ms → 2.0ms |   0 → 2 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift:591` |
|    new |  +1.00ms |  0.0% → 4.3% |  0ms → 1.0ms |   0 → 1 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift:572` |

##### `$s11SwiftParser5LexerO6CursorV9lexTrivia33_40499B5A26053AEB2F96A7C76320F673LL4modeAE0F6ResultVAE0F10LexingModeO_tF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`)

| Change |    Delta |             % |            Time | Samples | Location                                                                      |
| -----: | -------: | ------------: | --------------: | ------: | ----------------------------------------------------------------------------- |
| +71.4% | +20.00ms | 18.8% → 28.1% | 28.0ms → 48.0ms | 28 → 48 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift:1155` |
|  +7.7% |  +2.00ms | 17.4% → 16.4% | 26.0ms → 28.0ms | 26 → 28 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift:1175` |
|  -5.9% |  -2.00ms | 22.8% → 18.7% | 34.0ms → 32.0ms | 34 → 32 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift:1273` |

##### `$s11SwiftParser0B0V9LookaheadV25canParseArgumentLabelListSbyF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Names.swift`)

|  Change |    Delta |             % |            Time | Samples | Location                                                              |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------------------------------------------- |
|  +57.9% | +11.00ms | 57.6% → 57.7% | 19.0ms → 30.0ms | 19 → 30 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Names.swift:278` |
| +133.3% |  +4.00ms |  9.1% → 13.5% |   3.0ms → 7.0ms |   3 → 7 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Names.swift:277` |
|  +50.0% |  +2.00ms | 12.1% → 11.5% |   4.0ms → 6.0ms |   4 → 6 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Names.swift:284` |
|  +28.6% |  +2.00ms | 21.2% → 17.3% |   7.0ms → 9.0ms |   7 → 9 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Names.swift:286` |

##### `$s11SwiftParser5LexerO6CursorV7advance2ifS2bs7UnicodeO6ScalarVXE_tF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`)

| Change |   Delta |             % |              Time |   Samples | Location                                                                     |
| -----: | ------: | ------------: | ----------------: | --------: | ---------------------------------------------------------------------------- |
|  -3.9% | -7.00ms | 60.3% → 55.0% | 179.0ms → 172.0ms | 179 → 172 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift:720` |
|  +9.8% | +6.00ms | 20.5% → 21.4% |   61.0ms → 67.0ms |   61 → 67 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift:715` |
| +22.2% | +2.00ms |   3.0% → 3.5% |    9.0ms → 11.0ms |    9 → 11 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift:719` |

##### `$s11SwiftSyntax0B7VisitorC13dispatchVisit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

| Change |   Delta |            % |        Time | Samples | Location                                                                                 |
| -----: | ------: | -----------: | ----------: | ------: | ---------------------------------------------------------------------------------------- |
|    new | +5.00ms | 0.0% → 33.3% | 0ms → 5.0ms |   0 → 5 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift:6475` |
|    new | +2.00ms | 0.0% → 13.3% | 0ms → 2.0ms |   0 → 2 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift:6820` |
|    new | +1.00ms |  0.0% → 6.7% | 0ms → 1.0ms |   0 → 1 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift:6512` |
|    new | +1.00ms |  0.0% → 6.7% | 0ms → 1.0ms |   0 → 1 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift:6606` |
|    new | +1.00ms |  0.0% → 6.7% | 0ms → 1.0ms |   0 → 1 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift:6616` |

##### `$s11SwiftParser5LexerO6CursorV5StateO23leadingTriviaLexingMode6cursorAE0ghI0OSgAE_tFTf4dn_n` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`)

|  Change |    Delta |      % |            Time | Samples | Location                                                                     |
| ------: | -------: | -----: | --------------: | ------: | ---------------------------------------------------------------------------- |
| +127.3% | +14.00ms | 100.0% | 11.0ms → 25.0ms | 11 → 25 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift:110` |

##### `$s11SwiftSyntax13compareMemory33_132B404099BC4B0D33927A976564E3D3LLySbSPys5UInt8VG_AFSitF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxText.swift`)

| Change |    Delta |      % |              Time |   Samples | Location                                                                   |
| -----: | -------: | -----: | ----------------: | --------: | -------------------------------------------------------------------------- |
| +10.7% | +11.00ms | 100.0% | 103.0ms → 114.0ms | 103 → 114 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxText.swift:298` |

##### `$s11SwiftParser0B0V28parsePostfixExpressionSuffix_6flavor7pattern0A6Syntax07RawExprI0VAI_AC0K6FlavorOAC14PatternContextOtF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`)

|  Change |   Delta |             % |          Time | Samples | Location                                                                          |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------------------------------------------------- |
|  -66.7% | -2.00ms |  27.3% → 4.8% | 3.0ms → 1.0ms |   3 → 1 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift:744 → 765` |
| +100.0% | +1.00ms |   9.1% → 9.5% | 1.0ms → 2.0ms |   1 → 2 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift:735 → 756` |
| +100.0% | +1.00ms |   9.1% → 9.5% | 1.0ms → 2.0ms |   1 → 2 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift:749 → 770` |
|  +33.3% | +1.00ms | 27.3% → 19.0% | 3.0ms → 4.0ms |   3 → 4 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift:928 → 949` |
|     new | +1.00ms |   0.0% → 4.8% |   0ms → 1.0ms |   0 → 1 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift:787`       |

##### `$s11SwiftParser5LexerO6CursorV9nextToken17sourceBufferStart14stateAllocatorAC6LexemeVAE_0A6Syntax07BumpPtrK0CtF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`)

|  Change |   Delta |           % |           Time | Samples | Location                                                                     |
| ------: | ------: | ----------: | -------------: | ------: | ---------------------------------------------------------------------------- |
| +125.0% | +5.00ms | 3.2% → 6.7% |  4.0ms → 9.0ms |   4 → 9 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift:435` |
| +250.0% | +5.00ms | 1.6% → 5.2% |  2.0ms → 7.0ms |   2 → 7 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift:494` |
|  +42.9% | +3.00ms | 5.6% → 7.4% | 7.0ms → 10.0ms |  7 → 10 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift:436` |
|  -50.0% | -3.00ms | 4.8% → 2.2% |  6.0ms → 3.0ms |   6 → 3 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift:491` |
|     new | +3.00ms | 0.0% → 2.2% |    0ms → 3.0ms |   0 → 3 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift:480` |

##### `$s11SwiftParser9TokenSpecV7matches03rawC4Kind7keyword13atStartOfLineSb0A6Syntax03RawcG0O_AH7KeywordOSgyXKSbyXKtF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpec.swift`)

|  Change |   Delta |             % |            Time | Samples | Location                                                                  |
| ------: | ------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------- |
|  +22.2% | +6.00ms | 50.0% → 52.4% | 27.0ms → 33.0ms | 27 → 33 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpec.swift:126` |
|  +75.0% | +3.00ms |  7.4% → 11.1% |   4.0ms → 7.0ms |   4 → 7 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpec.swift:120` |
| removed | -2.00ms |   3.7% → 0.0% |     2.0ms → 0ms |   2 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpec.swift:124` |
|   +5.3% | +1.00ms | 35.2% → 31.7% | 19.0ms → 20.0ms | 19 → 20 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpec.swift:127` |

##### `$ss7UnicodeO6ScalarV11SwiftParserE17testCharacterInfo33_CBBF9FEF132CFB2EFF7837FA6BCFF520LLySbSJAEE0G0AGLLVF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/CharacterInfo.swift`)

|  Change |    Delta |             % |            Time | Samples | Location                                                                     |
| ------: | -------: | ------------: | --------------: | ------: | ---------------------------------------------------------------------------- |
| +100.0% | +10.00ms | 40.0% → 51.3% | 10.0ms → 20.0ms | 10 → 20 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/CharacterInfo.swift:72` |

##### `$ss7UnicodeO6ScalarV11SwiftParserE22isAsciiIdentifierStartSbvg` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/CharacterInfo.swift`)

| Change |   Delta |      % |           Time | Samples | Location                                                                     |
| -----: | ------: | -----: | -------------: | ------: | ---------------------------------------------------------------------------- |
| +37.5% | +3.00ms | 100.0% | 8.0ms → 11.0ms |  8 → 11 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/CharacterInfo.swift:38` |

##### `$s11SwiftSyntax03RawB0V11parsedToken4kind9wholeText9textRange8presence15tokenDiagnostic5arenaAcA0cE4KindO_AA0bH0VSnySiGAA14SourcePresenceOAA0eM0VSgAA07ParsingB5ArenaChtFZTf4nnnnnnd_n` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`)

|  Change |    Delta |            % |         Time | Samples | Location                                                                      |
| ------: | -------: | -----------: | -----------: | ------: | ----------------------------------------------------------------------------- |
| removed | -21.00ms | 77.8% → 0.0% | 21.0ms → 0ms |  21 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift:591` |
| removed |  -5.00ms | 18.5% → 0.0% |  5.0ms → 0ms |   5 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift:587` |
| removed |  -1.00ms |  3.7% → 0.0% |  1.0ms → 0ms |   1 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift:568` |

##### `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change |   Delta |            % |        Time | Samples | Location                                                                                 |
| ------: | ------: | -----------: | ----------: | ------: | ---------------------------------------------------------------------------------------- |
| removed | -9.00ms | 34.6% → 0.0% | 9.0ms → 0ms |   9 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift:4679` |
| removed | -4.00ms | 15.4% → 0.0% | 4.0ms → 0ms |   4 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift:4681` |
| removed | -2.00ms |  7.7% → 0.0% | 2.0ms → 0ms |   2 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift:4678` |

##### `$s11SwiftSyntax0B21ArenaAllocatedPointerV7pointeexvgAA03RawB4DataV_Tg5` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxArenaAllocatedBuffer.swift`)

|  Change |    Delta |             % |         Time | Samples | Location                                                                                  |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------------------------------------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |  20 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxArenaAllocatedBuffer.swift:35` |

##### `$s11SwiftParser5LexerO6CursorV8PositionV7advances5UInt8VSgyF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`)

| Change |    Delta |             % |            Time | Samples | Location                                                                     |
| -----: | -------: | ------------: | --------------: | ------: | ---------------------------------------------------------------------------- |
| -22.7% | -15.00ms | 62.3% → 58.0% | 66.0ms → 51.0ms | 66 → 51 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift:647` |
| -46.2% |  -6.00ms |  12.3% → 8.0% |  13.0ms → 7.0ms |  13 → 7 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift:652` |
| +11.5% |  +3.00ms | 24.5% → 33.0% | 26.0ms → 29.0ms | 26 → 29 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift:651` |

##### `$s11SwiftParser5LexerO6CursorV9lexNormal33_40499B5A26053AEB2F96A7C76320F673LL17sourceBufferStart29preferRegexOverBinaryOperatorAC6ResultVAE_SbtF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`)

|  Change |   Delta |            % |           Time | Samples | Location                                                                      |
| ------: | ------: | -----------: | -------------: | ------: | ----------------------------------------------------------------------------- |
| +150.0% | +9.00ms | 6.5% → 19.0% | 6.0ms → 15.0ms |  6 → 15 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift:928`  |
| removed | -5.00ms |  5.4% → 0.0% |    5.0ms → 0ms |   5 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift:968`  |
|  +66.7% | +4.00ms | 6.5% → 12.7% | 6.0ms → 10.0ms |  6 → 10 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift:932`  |
| removed | -1.00ms |  1.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift:1009` |

##### `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change |   Delta |            % |        Time | Samples | Location                                                                                 |
| ------: | ------: | -----------: | ----------: | ------: | ---------------------------------------------------------------------------------------- |
| removed | -4.00ms | 30.8% → 0.0% | 4.0ms → 0ms |   4 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift:5257` |
| removed | -2.00ms | 15.4% → 0.0% | 2.0ms → 0ms |   2 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift:5255` |
| removed | -2.00ms | 15.4% → 0.0% | 2.0ms → 0ms |   2 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift:5261` |
| removed | -1.00ms |  7.7% → 0.0% | 1.0ms → 0ms |   1 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift:5256` |

##### `$s11SwiftSyntax03RawB8ChildrenV5index_10advancedByAA0bD5IndexVAG_AA0cB0VSgtF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxChildren.swift`)

|  Change |    Delta |             % |         Time | Samples | Location                                                                       |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------ |
| removed | -12.00ms | 100.0% → 0.0% | 12.0ms → 0ms |  12 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxChildren.swift:178` |

##### `$s11SwiftSyntax014RawLabeledExprB0V_5label_5colon_10expression_13trailingComma_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VSgAknKxAknkA0B5ArenaChtcAA0ceB12NodeProtocolRzlufC` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/raw/RawSyntaxNodesJKLMN.swift`)

|  Change |   Delta |            % |        Time | Samples | Location                                                                                          |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------------------------------------------------------------------------- |
| removed | -8.00ms | 80.0% → 0.0% | 8.0ms → 0ms |   8 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/raw/RawSyntaxNodesJKLMN.swift:539` |
| removed | -2.00ms | 20.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/raw/RawSyntaxNodesJKLMN.swift:552` |

##### `$s11SwiftParser5LexerO14LexemeSequenceV7advanceAC0D0VyF6$deferL_yyF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/LexemeSequence.swift`)

| Change |   Delta |             % |            Time | Samples | Location                                                                            |
| -----: | ------: | ------------: | --------------: | ------: | ----------------------------------------------------------------------------------- |
| -62.5% | -5.00ms | 25.8% → 12.5% |   8.0ms → 3.0ms |   8 → 3 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/LexemeSequence.swift:78` |
|  -8.7% | -2.00ms | 74.2% → 87.5% | 23.0ms → 21.0ms | 23 → 21 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/LexemeSequence.swift:77` |

##### `$s11SwiftSyntax16BumpPtrAllocatorC23allocateFromCurrentSlab33_61CB623A74FD1871D887FFA45954E6F5LLySwSgSi_SitF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift`)

|  Change |   Delta |             % |          Time | Samples | Location                                                                        |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------- |
|  -66.7% | -4.00ms | 28.6% → 14.3% | 6.0ms → 2.0ms |   6 → 2 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift:91` |
| removed | -2.00ms |   9.5% → 0.0% |   2.0ms → 0ms |   2 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift:93` |
|  -12.5% | -1.00ms | 38.1% → 50.0% | 8.0ms → 7.0ms |   8 → 7 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift:81` |

##### `$s11SwiftParser19DeclarationModifierO6lexeme20experimentalFeaturesACSgAA5LexerO6LexemeV_AA0B0V012ExperimentalG0VtcfCTf4ndd_n` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpecSet.swift`)

|  Change |    Delta |            % |         Time | Samples | Location                                                                     |
| ------: | -------: | -----------: | -----------: | ------: | ---------------------------------------------------------------------------- |
| removed | -17.00ms | 85.0% → 0.0% | 17.0ms → 0ms |  17 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpecSet.swift:386` |
|     new | +13.00ms | 0.0% → 92.9% | 0ms → 13.0ms |  0 → 13 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpecSet.swift:389` |
| removed |  -1.00ms |  5.0% → 0.0% |  1.0ms → 0ms |   1 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpecSet.swift:385` |
|     new |  +1.00ms |  0.0% → 7.1% |  0ms → 1.0ms |   0 → 1 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpecSet.swift:388` |

##### `$s11SwiftParser21ContextualDeclKeywordO6lexeme20experimentalFeaturesACSgAA5LexerO6LexemeV_AA0B0V012ExperimentalH0VtcfCTf4ndd_n` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpecSet.swift`)

|  Change |   Delta |              % |           Time | Samples | Location                                                                     |
| ------: | ------: | -------------: | -------------: | ------: | ---------------------------------------------------------------------------- |
|  -40.0% | -4.00ms | 83.3% → 100.0% | 10.0ms → 6.0ms |  10 → 6 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpecSet.swift:207` |
| removed | -2.00ms |   16.7% → 0.0% |    2.0ms → 0ms |   2 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpecSet.swift:206` |

##### `$s11SwiftSyntax15TokenDiagnosticV9combining_ACSgAE_AEtcfC` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/TokenDiagnostic.swift`)

|  Change |    Delta |            % |         Time | Samples | Location                                                                        |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------------------------------------------------------- |
| removed | -17.00ms | 70.8% → 0.0% | 17.0ms → 0ms |  17 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/TokenDiagnostic.swift:144` |
|     new | +14.00ms | 0.0% → 77.8% | 0ms → 14.0ms |  0 → 14 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/TokenDiagnostic.swift:154` |
| removed |  -4.00ms | 16.7% → 0.0% |  4.0ms → 0ms |   4 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/TokenDiagnostic.swift:146` |
|     new |  +4.00ms | 0.0% → 22.2% |  0ms → 4.0ms |   0 → 4 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/TokenDiagnostic.swift:165` |
| removed |  -3.00ms | 12.5% → 0.0% |  3.0ms → 0ms |   3 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/TokenDiagnostic.swift:155` |

##### `$sSv11SwiftSyntaxE9alignedUp12toMultipleOfSvSi_tF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift`)

|  Change |   Delta |             % |        Time | Samples | Location                                                                         |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------------------------------------------------- |
| removed | -3.00ms |  75.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift:187` |
| removed | -1.00ms |  25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift:193` |
|     new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift:192` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x95968` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |     Delta |      % |             Time |  Samples | Caller    | Location                               |
| ------: | --------: | -----: | ---------------: | -------: | --------- | -------------------------------------- |
| +180.0% | +108.00ms | 100.0% | 60.0ms → 168.0ms | 60 → 168 | `0x966ab` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax027c61AccessorEffectSpecifiersB0V_14asyncSpecifier_12throwsClause_5n22AcA0c15UnexpectedNodesx14VSg_AA0c5Tokenx16VSgAiA0c6Throwsjx10VSgAiA0cB5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VSgAsA0c12ThrowsClauseB0VSgASTf1nnnncn_nTf4nnnndnnnnn_nTm` (`AbsolutePosition.swift.o`)

| Change |    Delta |            % |         Time | Samples | Caller                                                                                                                                                                                                                                                                                                                                                                                                                                               | Location     |
| -----: | -------: | -----------: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
|    new | +34.00ms | 0.0% → 65.4% | 0ms → 34.0ms |  0 → 34 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax020c48DeclReferenceExprB0V_8baseName_13argumentNames_5n22AcA0c15UnexpectedNodesx14VSg_AA0c5Tokenx18VAiA0cdh9Argumentsx10VSgAiA0cB5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VAsA0cuz9ArgumentsB0VSgASTf1nnnncn_nTf4nnnndnnnnn_n`                | `crtstuff.c` |
|    new | +11.00ms | 0.0% → 21.2% | 0ms → 11.0ms |  0 → 11 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax017c49IdentifierTypeB0V_4name_21genericArgumentClause_5n22AcA0c15UnexpectedNodesw14VSg_AA0c5Tokenw16VAiA0c7Generichiw10VSgAiA0cB5r14ChtcfcySryAA0cW9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VAsA0c7Genericz6ClauseB0VSgASTf1nnnncn_nTf4nnnndnnnnn_n`             | `crtstuff.c` |
|    new |  +5.00ms |  0.0% → 9.6% |  0ms → 5.0ms |   0 → 5 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax015c31DeclModifierB0V_4name_6detail_5n22AcA0c15UnexpectedNodesw14VSg_AA0c5Tokenw15VAiA0cde6Detailw10VSgAiA0cB5r14ChtcfcySryAA0cW9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VAsA0cuv6DetailB0VSgASTf1nnnncn_nTf4nnnndnnnnn_n`                                       | `crtstuff.c` |
|    new |  +1.00ms |  0.0% → 1.9% |  0ms → 1.0ms |   0 → 1 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax015c39IfConfigDeclB0V_7clauses_10poundEndif_5n22AcA0c15UnexpectedNodesx22VSg_AA0cde10ClauseListx12VAiA0c5Tokenx8VAiA0cB5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0cuv10ClauseListB0VAsA0c5TokenB0VASTf1nnnncn_nTf4nnnndnnnnn_n`                          | `crtstuff.c` |
|    new |  +1.00ms |  0.0% → 1.9% |  0ms → 1.0ms |   0 → 1 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax027c61FunctionEffectSpecifiersB0V_14asyncSpecifier_12throwsClause_5n22AcA0c15UnexpectedNodesx14VSg_AA0c5Tokenx16VSgAiA0c6Throwsjx10VSgAiA0cB5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VSgAsA0c12ThrowsClauseB0VSgASTf1nnnncn_nTf4nnnndnnnnn_n` | `crtstuff.c` |

##### `$sSpsRi_zrlE10initialize2toyxn_tF11SwiftSyntax0D4DataV_Tg5` (`<unknown>`)

| Change |    Delta |             % |         Time | Samples | Caller                                                                                                                                                                                                      | Location                                                           |
| -----: | -------: | ------------: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
|    new | +47.00ms | 0.0% → 100.0% | 0ms → 47.0ms |  0 → 47 | `$s11SwiftSyntax0B9DataArenaC06createC4Impl33_B3300DB0BA2B3E5E35A338B811650793LL9allocator3raw6parent12absoluteInfoAA0D16AllocatedPointerVyAA0bC0VGAA16BumpPtrAllocatorC_AA03RawB0VANSgAA08AbsolutebS0VtFZ` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift` |

##### `0xe3304` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |      % |            Time | Samples | Caller    | Location                               |
| ------: | -------: | -----: | --------------: | ------: | --------- | -------------------------------------- |
| +104.7% | +45.00ms | 100.0% | 43.0ms → 88.0ms | 43 → 88 | `0xe8df7` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `$s11SwiftParser0B0V9LookaheadVWOs` (`<unknown>`)

| Change |    Delta |             % |            Time | Samples | Caller                                                                                                                                                                                                                                                      | Location    |
| -----: | -------: | ------------: | --------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|    new | +29.00ms |  0.0% → 25.2% |    0ms → 29.0ms |  0 → 29 | `$s11SwiftParser0B0V30parseSequenceExpressionElement6flavor7pattern0A6Syntax07RawExprI0VAC0K6FlavorO_AC14PatternContextOtF`                                                                                                                                 | `<unknown>` |
| -27.8% | -10.00ms | 48.0% → 22.6% | 36.0ms → 26.0ms | 36 → 26 | `$s11SwiftParser0B0V25parseIdentifierExpression6flavor0A6Syntax07RawExprG0VAC0I6FlavorO_tF`                                                                                                                                                                 | `<unknown>` |
| +83.3% |  +5.00ms |   8.0% → 9.6% |  6.0ms → 11.0ms |  6 → 11 | `$s11SwiftParser0B0V27parseDottedExpressionSuffix12previousNode0A6Syntax018RawUnexpectedNodesI0VSg16unexpectedPeriod_AF0j5TokenI0V6periodAF0j17DeclReferenceExprI0V8declNameAF0j21GenericArgumentClauseI0VSg8genericstxSg_tAF0jiH8ProtocolRzlFAF0jsI0V_Tg5` | `<unknown>` |
|    new |  +5.00ms |   0.0% → 4.3% |     0ms → 5.0ms |   0 → 5 | `$s11SwiftParser0B0V22parseFunctionParameter0A6Syntax03RawdeF0VyF`                                                                                                                                                                                          | `<unknown>` |
| +25.0% |  +2.00ms |  10.7% → 8.7% |  8.0ms → 10.0ms |  8 → 10 | `$s11SwiftParser0B0V9LookaheadV25canParseArgumentLabelListSbyF`                                                                                                                                                                                             | `<unknown>` |

##### `$s11SwiftParser22PrepareForKeywordMatchVyAcA5LexerO6LexemeVcfC` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpec.swift`)

|  Change |    Delta |             % |           Time | Samples | Caller                                                                                                                                                                                                                                                     | Location                                                                 |
| ------: | -------: | ------------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
|     new | +23.00ms |  0.0% → 30.7% |   0ms → 23.0ms |  0 → 23 | `$s11SwiftParser25ExpressionModifierKeywordO6lexeme20experimentalFeaturesACSgAA5LexerO6LexemeV_AA0B0V012ExperimentalH0VtcfCTf4nnd_n`                                                                                                                       | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpecSet.swift` |
| removed |  -9.00ms |  22.0% → 0.0% |    9.0ms → 0ms |   9 → 0 | `$s11SwiftParser19CanBeStatementStartO6lexeme20experimentalFeaturesACSgAA5LexerO6LexemeV_AA0B0V012ExperimentalI0VtcfCTf4ndd_n`                                                                                                                             | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpecSet.swift` |
|     new |  +7.00ms |   0.0% → 9.3% |    0ms → 7.0ms |   0 → 7 | `$s11SwiftParser19CanBeStatementStartO6lexeme20experimentalFeaturesACSgAA5LexerO6LexemeV_AA0B0V012ExperimentalI0VtcfCTf4nnd_n`                                                                                                                             | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpecSet.swift` |
|  +71.4% |  +5.00ms | 17.1% → 16.0% | 7.0ms → 12.0ms |  7 → 12 | `$s11SwiftParser22PrimaryExpressionStartO6lexeme20experimentalFeaturesACSgAA5LexerO6LexemeV_AA0B0V012ExperimentalH0VtcfCTf4ndd_n`                                                                                                                          | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpecSet.swift` |
|  +55.6% |  +5.00ms | 22.0% → 18.7% | 9.0ms → 14.0ms |  9 → 14 | `$s11SwiftParser0B0V31parseSequenceExpressionOperator6flavor7pattern0A6Syntax07RawExprI0V8operator_AISg3rhstSgAC0K6FlavorO_AC14PatternContextOtF17ExpectedTokenKindL_O6lexeme20experimentalFeaturesASSgAA5LexerO6LexemeV_AC012ExperimentalV0VtcfCTf4ndd_n` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`  |

##### `$s11SwiftParser0B0V9LookaheadVAA13TokenConsumerA2aFP07currentD0AA5LexerO6LexemeVvgTW` (`<unknown>`)

|  Change |    Delta |             % |           Time | Samples | Caller                                                                                                                                                            | Location                                                                  |
| ------: | -------: | ------------: | -------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| +533.3% | +16.00ms | 23.1% → 43.2% | 3.0ms → 19.0ms |  3 → 19 | `$s11SwiftParser13TokenConsumerPAAE2at6prefixSb0A6Syntax0G4TextV_tFAA0B0V9LookaheadV_Tg5`                                                                         | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenConsumer.swift` |
|     new | +11.00ms |  0.0% → 25.0% |   0ms → 11.0ms |  0 → 11 | `$s11SwiftParser13TokenConsumerPAAE2atySbAA0C4SpecVFAA0B0V9LookaheadV_TG5`                                                                                        | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenConsumer.swift` |
|  +50.0% |  +4.00ms | 61.5% → 27.3% | 8.0ms → 12.0ms |  8 → 12 | `$s11SwiftParser13TokenConsumerPAAE2at5anyInqd__4spec_AA0C17ConsumptionHandleV6handletSgqd__m_tAA0C7SpecSetRd__lFAA0B0V9LookaheadV_AA19DeclarationModifierOTt0g5` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenConsumer.swift` |
| +100.0% |  +1.00ms |   7.7% → 4.5% |  1.0ms → 2.0ms |   1 → 2 | `$s11SwiftParser13TokenConsumerPAAE2at5anyInqd__4spec_AA0C17ConsumptionHandleV6handletSgqd__m_tAA0C7SpecSetRd__lFAA0B0V9LookaheadV_AA19CanBeStatementStartOTt0g5` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenConsumer.swift` |
| removed |  -1.00ms |   7.7% → 0.0% |    1.0ms → 0ms |   1 → 0 | `$s11SwiftParser13TokenConsumerPAAE2at5anyInqd__4spec_AA0C17ConsumptionHandleV6handletSgqd__m_tAA0C7SpecSetRd__lFAA0B0V9LookaheadV_AA15SwitchCaseStartOTt0g5`     | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenConsumer.swift` |

##### `$s11SwiftParser0B0V49canParseNonisolatedAsSpecifierInExpressionContextSbyFSbAC9LookaheadVzXEfU_` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`)

| Change |    Delta |            % |         Time | Samples | Caller                                                                                                               | Location                                                                |
| -----: | -------: | -----------: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
|    new | +26.00ms | 0.0% → 96.3% | 0ms → 26.0ms |  0 → 26 | `$s11SwiftParser0B0V13withLookaheadyxxAC0D0VzXElFSb_Tg5`                                                             | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lookahead.swift`   |
|    new |  +1.00ms |  0.0% → 3.7% |  0ms → 1.0ms |   0 → 1 | `$s11SwiftParser0B0V23parseSequenceExpression6flavor7pattern0A6Syntax07RawExprH0VAC0J6FlavorO_AC14PatternContextOtF` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift` |

##### `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax014c54MissingDeclB0V_10attributes_9modifiers_11placeholder_5n22AcA0c15UnexpectedNodesw23VSg_AA0c13AttributeListw17VAjA0ce8Modifiermw12VAjA0c5Tokenw8VAjA0cB5r14ChtcfcySryAA0cW9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c13AttributeListB0VAsA0cv12ModifierListB0VAsA0c5TokenB0VASTf1nnnncn_nTf4nnnndnnnnnnn_nTm` (`AbsolutePosition.swift.o`)

| Change |    Delta |            % |         Time | Samples | Caller                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Location     |
| -----: | -------: | -----------: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
|    new | +22.00ms | 0.0% → 84.6% | 0ms → 22.0ms |  0 → 22 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax019c45MemberAccessExprB0V_4base_6period_8declName_5n22AcA0c15UnexpectedNodesx9VSg_AA0cfx14VSgAjA0c5Tokenx22VAjA0c13DeclReferencefx8VAjA0cB5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0cwB0VSgAsA0c5TokenB0VAsA0c13DeclReferencewB0VASTf1nnnncn_nTf4nnnndnnnnnnn_n`    | `crtstuff.c` |
|    new |  +1.00ms |  0.0% → 3.8% |  0ms → 1.0ms |   0 → 1 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax012c47ArrayExprB0V_10leftSquare_8elements_05rightG0_5n22AcA0c15UnexpectedNodesw14VSg_AA0c5Tokenw20VAjA0cd11ElementListw10VAjljA0cB5r14ChtcfcySryAA0cW9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VAsA0cu11ElementListB0VAsuSTf1nnnncn_nTf4nnnndnnnnnnn_n`                       | `crtstuff.c` |
|    new |  +1.00ms |  0.0% → 3.8% |  0ms → 1.0ms |   0 → 1 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax012c48CodeBlockB0V_9leftBrace_10statements_05rightG0_5n22AcA0c15UnexpectedNodesw14VSg_AA0c5Tokenw17VAjA0cde8ItemListw10VAjljA0cB5r14ChtcfcySryAA0cW9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VAsA0cuv8ItemListB0VAsuSTf1nnnncn_nTf4nnnndnnnnnnn_n`                            | `crtstuff.c` |
|    new |  +1.00ms |  0.0% → 3.8% |  0ms → 1.0ms |   0 → 1 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax026c65SimpleStringLiteralExprB0V_12openingQuote_8segments_07closingI0_5n22AcA0c15UnexpectedNodesy14VSg_AA0c5Tokeny22VAjA0cdef11SegmentListy10VAjljA0cB5r14ChtcfcySryAA0cY9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VAsA0cuvw11SegmentListB0VAsuSTf1nnnncn_nTf4nnnndnnnnnnn_n` | `crtstuff.c` |
|    new |  +1.00ms |  0.0% → 3.8% |  0ms → 1.0ms |   0 → 1 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax013c52SourceFileB0V_7shebang_10statements_05endOfE5Token_5n22AcA0c15UnexpectedNodesw9VSg_AA0cjw27VSgAjA0c17CodeBlockItemListw10VAjljA0cB5r14ChtcfcySryAA0cW9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VSgAsA0c17CodeBlockItemListB0VAsuSTf1nnnncn_nTf4nnnndnnnnnnn_n`          | `crtstuff.c` |

##### `0x88a40` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |    Delta |             % |         Time | Samples | Caller                                                                                           | Location                                                           |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
|    new | +26.00ms | 0.0% → 100.0% | 0ms → 26.0ms |  0 → 26 | `$s11SwiftSyntax0B9DataArenaC6layout3forAA0D22AllocatedBufferPointerVyAA0dgI0VyAA0bC0VGSgGAL_tF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift` |

##### `0x8a5c4` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |    Delta |             % |         Time | Samples | Caller                                                                                                       | Location                                                           |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
|    new | +26.00ms | 0.0% → 100.0% | 0ms → 26.0ms |  0 → 26 | `$s11SwiftSyntax0B9DataArenaC6layout3forAA0D22AllocatedBufferPointerVyAA0dgI0VyAA0bC0VGSgGAL_tF6$deferL_yyF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift` |

##### `$s11SwiftSyntax16BumpPtrAllocatorC8allocate9byteCount9alignmentSwSi_SitF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift`)

|  Change |   Delta |            % |        Time | Samples | Caller                                                                                                                                                                                                                                                                                                                                                                                                                                              | Location                                                                     |
| ------: | ------: | -----------: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
|     new | +7.00ms | 0.0% → 12.3% | 0ms → 7.0ms |   0 → 7 | `$s11SwiftSyntax16BumpPtrAllocatorC8allocate_5countSryxGxm_SitlFAA21ArenaAllocatedPointerVyAA0B4DataVGSg_Ttg5`                                                                                                                                                                                                                                                                                                                                      | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift` |
|     new | +6.00ms | 0.0% → 10.5% | 0ms → 6.0ms |   0 → 6 | `$s11SwiftSyntax0B9DataArenaC06createC4Impl33_B3300DB0BA2B3E5E35A338B811650793LL9allocator3raw6parent12absoluteInfoAA0D16AllocatedPointerVyAA0bC0VGAA16BumpPtrAllocatorC_AA03RawB0VANSgAA08AbsolutebS0VtFZ`                                                                                                                                                                                                                                         | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift`           |
|     new | +6.00ms | 0.0% → 10.5% | 0ms → 6.0ms |   0 → 6 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax019c45AccessorDeclListB0V8elements5arenaACSayAA0cdex9VG_AA0cB5r14ChtcfcySryAA0cX9VSgGXEfU_SayAA0cuvB0VGTf1nnnncn_nTf4nnnndg_nTm`                                                                                                                                       | `AbsolutePosition.swift.o`                                                   |
| removed | -5.00ms | 15.2% → 0.0% | 5.0ms → 0ms |   5 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax027c61AccessorEffectSpecifiersB0V_14asyncSpecifier_12throwsClause_5n22AcA0c15UnexpectedNodesx14VSg_AA0c5Tokenx16VSgAiA0c6Throwsjx9VSgAiA0B5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VSgAsA0c12ThrowsClauseB0VSgASTf1nnnncn_nTf4nnnndnnnnn_nTm` | `AbsolutePosition.swift.o`                                                   |
| removed | -4.00ms | 12.1% → 0.0% | 4.0ms → 0ms |   4 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax019c45AccessorDeclListB0V8elements5arenaACSayAA0cdex8VG_AA0B5r14ChtcfcySryAA0cX9VSgGXEfU_SayAA0cuvB0VGTf1nnnncn_nTf4nnnndg_nTm`                                                                                                                                         | `AbsolutePosition.swift.o`                                                   |

##### `$s11SwiftSyntax0B4TextV2eeoiySbAC_ACtFZTf4nnd_n` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxText.swift`)

| Change |    Delta |      % |             Time |  Samples | Caller                                    | Location    |
| -----: | -------: | -----: | ---------------: | -------: | ----------------------------------------- | ----------- |
| +31.6% | +24.00ms | 100.0% | 76.0ms → 100.0ms | 76 → 100 | `$s11SwiftSyntax0B4TextV2eeoiySbAC_ACtFZ` | `<unknown>` |

##### `$s11SwiftSyntax03RawB0V11parsedToken4kind9wholeText9textRange8presence15tokenDiagnostic5arenaAcA0cE4KindO_AA0bH0VSnySiGAA14SourcePresenceOAA0eM0VSgAA07ParsingcB5ArenaChtFZTf4nnnnnnd_n` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`)

| Change |   Delta |            % |        Time | Samples | Caller                                                                                                                                                                           | Location                                                              |
| -----: | ------: | -----------: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
|    new | +8.00ms | 0.0% → 34.8% | 0ms → 8.0ms |   0 → 8 | `$s11SwiftParser0B0V43consumeAnyTokenWithoutAdjustingNestingLevel0A6Syntax03RaweJ0VyF`                                                                                           | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Parser.swift`    |
|    new | +6.00ms | 0.0% → 26.1% | 0ms → 6.0ms |   0 → 6 | `$s11SwiftParser0B0VAA13TokenConsumerA2aDP010consumeAnyC00C0QzyFTW`                                                                                                              | `<unknown>`                                                           |
|    new | +3.00ms | 0.0% → 13.0% | 0ms → 3.0ms |   0 → 3 | `$s11SwiftParser13TokenConsumerPAAE3eaty0C0QzAA0C4SpecVFAA0B0V_xTi50A6Syntax014IdentifierTypeG0VAAE11NameOptionsO_TG5`                                                           | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpec.swift` |
|    new | +2.00ms |  0.0% → 8.7% | 0ms → 2.0ms |   0 → 2 | `$s11SwiftParser13TokenConsumerPAAE3eaty0C0QzAA0C4SpecVFAA0B0V_Tg5`                                                                                                              | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpec.swift` |
|    new | +2.00ms |  0.0% → 8.7% | 0ms → 2.0ms |   0 → 2 | `$s11SwiftParser0B0V19consumeMemberPeriod12previousNode0A6Syntax018RawUnexpectedNodesH0VSg10unexpected_AF0i5TokenH0V6periodSb04skipD4NametxSg_tAF0ihG8ProtocolRzlFAF0iH0V_Tg5Tm` | `Attributes.swift.o`                                                  |

##### `$sSR8IteratorV4nextxSgyF11SwiftSyntax03RawD0VSg_Tg5` (`<unknown>`)

| Change |    Delta |             % |         Time | Samples | Caller                                                                                                                             | Location                                                           |
| -----: | -------: | ------------: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
|    new | +23.00ms | 0.0% → 100.0% | 0ms → 23.0ms |  0 → 23 | `$s11SwiftSyntax0B9DataArenaC012createLayoutC4Impl33_B3300DB0BA2B3E5E35A338B811650793LLySRyAA0D16AllocatedPointerVyAA0bC0VGSgGAJF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift` |

##### `$s11SwiftParser5LexerO6CursorV9lexTrivia33_40499B5A26053AEB2F96A7C76320F673LL4modeAE0F6ResultVAE0F10LexingModeO_tF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`)

| Change |    Delta |              % |              Time |   Samples | Caller                                                                                                            | Location                                                                         |
| -----: | -------: | -------------: | ----------------: | --------: | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| +12.8% | +19.00ms | 100.0% → 98.2% | 149.0ms → 168.0ms | 149 → 168 | `$s11SwiftParser5LexerO6CursorV9nextToken17sourceBufferStart14stateAllocatorAC6LexemeVAE_0A6Syntax07BumpPtrK0CtF` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`         |
|    new |  +3.00ms |    0.0% → 1.8% |       0ms → 3.0ms |     0 → 3 | `$s11SwiftParser5LexerO14LexemeSequenceV7advanceAC0D0VyF6$deferL_yyF`                                             | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/LexemeSequence.swift` |

##### `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax019c45MemberAccessExprB0V_4base_6period_8declName_5n22AcA0c15UnexpectedNodesx9VSg_AA0cfx14VSgAjA0c5Tokenx22VAjA0c13DeclReferencefx8VAjA0cB5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0cwB0VSgAsA0c5TokenB0VAsA0c13DeclReferencewB0VASTf1nnnncn_nTf4nnnndnnnnnnn_n` (`crtstuff.c`)

| Change |    Delta |             % |         Time | Samples | Caller                                                                                                                                                                                                                                                                                                                                                                                                                                       | Location    |
| -----: | -------: | ------------: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|    new | +22.00ms | 0.0% → 100.0% | 0ms → 22.0ms |  0 → 22 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax019c45MemberAccessExprB0V_4base_6period_8declName_5n22AcA0c15UnexpectedNodesx9VSg_AA0cfx14VSgAjA0c5Tokenx22VAjA0c13DeclReferencefx8VAjA0cB5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0cwB0VSgAsA0c5TokenB0VAsA0c13DeclReferencewB0VASTf1nnnncn_n` | `<unknown>` |

##### `0xa1a40` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |             % |            Time | Samples | Caller                                                                                                                                                                                           | Location                                                              |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| +187.5% | +15.00ms | 10.4% → 23.5% |  8.0ms → 23.0ms |  8 → 23 | `$s11SwiftParser0B0V9LookaheadV7lexemes12currentToken12swiftVersion20experimentalFeaturesAeA5LexerO14LexemeSequenceV_AK0L0VAC0aH0OAC012ExperimentalJ0Vtc33_8B04AB4096AC45820073D65E009E045BLlfC` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lookahead.swift` |
|  +63.6% |  +7.00ms | 14.3% → 18.4% | 11.0ms → 18.0ms | 11 → 18 | `$s11SwiftParser0B0V13withLookaheadyxxAC0D0VzXElFSb_Tg5`                                                                                                                                         | `<unknown>`                                                           |
| removed |  -7.00ms |   9.1% → 0.0% |     7.0ms → 0ms |   7 → 0 | `$s11SwiftParser0B0V18parseArgumentLabel0A6Syntax018RawUnexpectedNodesF0VSg_AE0g5TokenF0VtyF`                                                                                                    | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Names.swift`     |
| +500.0% |  +5.00ms |   1.3% → 6.1% |   1.0ms → 6.0ms |   1 → 6 | `$s11SwiftParser0B0V9LookaheadV7lexemes12currentToken12swiftVersion20experimentalFeaturesAeA5LexerO14LexemeSequenceV_AK0L0VAC0aH0OAC012ExperimentalJ0Vtc33_8B04AB4096AC45820073D65E009E045BLlfC` | `<unknown>`                                                           |
|  -80.0% |  -4.00ms |   6.5% → 1.0% |   5.0ms → 1.0ms |   5 → 1 | `$s11SwiftParser0B0V9LookaheadV25canParseArgumentLabelListSbyF`                                                                                                                                  | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Names.swift`     |

##### `$s11SwiftParser0B0V9LookaheadV25canParseArgumentLabelListSbyF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Names.swift`)

| Change |    Delta |      % |            Time | Samples | Caller                                                                                        | Location                                                          |
| -----: | -------: | -----: | --------------: | ------: | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| +57.6% | +19.00ms | 100.0% | 33.0ms → 52.0ms | 33 → 52 | `$s11SwiftParser0B0V17parseArgLabelListy0A6Syntax020RawDeclNameArgumentsG0VSgAC0iJ7OptionsVF` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Names.swift` |

##### `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax019c45AccessorDeclListB0V8elements5arenaACSayAA0cdex9VG_AA0cB5r14ChtcfcySryAA0cX9VSgGXEfU_SayAA0cuvB0VGTf1nnnncn_nTf4nnnndg_nTm` (`AbsolutePosition.swift.o`)

| Change |    Delta |            % |         Time | Samples | Caller                                                                                                                                                                                                                                                                                               | Location    |
| -----: | -------: | -----------: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|    new | +10.00ms | 0.0% → 55.6% | 0ms → 10.0ms |  0 → 10 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax020c47CodeBlockItemListB0V8elements5arenaACSayAA0cdefy9VG_AA0cB5r14ChtcfcySryAA0cY9VSgGXEfU_SayAA0cuvwB0VGTf1nnnncn_n`  | `<unknown>` |
|    new |  +2.00ms | 0.0% → 11.1% |  0ms → 2.0ms |   0 → 2 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax011c36ExprListB0V8elements5arenaACSayAA0cdw9VG_AA0cB5r14ChtcfcySryAA0cW9VSgGXEfU_SayAA0cuB0VGTf1nnnncn_n`               | `<unknown>` |
|    new |  +2.00ms | 0.0% → 11.1% |  0ms → 2.0ms |   0 → 2 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax021c47PatternBindingListB0V8elements5arenaACSayAA0cdex9VG_AA0cB5r14ChtcfcySryAA0cX9VSgGXEfU_SayAA0cuvB0VGTf1nnnncn_n`   | `<unknown>` |
|    new |  +2.00ms | 0.0% → 11.1% |  0ms → 2.0ms |   0 → 2 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax018c44LabeledExprListB0V8elements5arenaACSayAA0cdex9VG_AA0cB5r14ChtcfcySryAA0cX9VSgGXEfU_SayAA0cuvB0VGTf1nnnncn_n`      | `<unknown>` |
|    new |  +2.00ms | 0.0% → 11.1% |  0ms → 2.0ms |   0 → 2 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax021c48SwitchCaseItemListB0V8elements5arenaACSayAA0cdefy9VG_AA0cB5r14ChtcfcySryAA0cY9VSgGXEfU_SayAA0cuvwB0VGTf1nnnncn_n` | `<unknown>` |

##### `$s11SwiftParser5LexerO6CursorV7advance2ifS2bs7UnicodeO6ScalarVXE_tF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`)

| Change |    Delta |             % |              Time |   Samples | Caller                                                                                                                | Location                                                                 |
| -----: | -------: | ------------: | ----------------: | --------: | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
|  +6.8% | +19.00ms | 94.6% → 95.8% | 281.0ms → 300.0ms | 281 → 300 | `$s11SwiftParser5LexerO6CursorV7advance5whileySbs7UnicodeO6ScalarVXE_tF`                                              | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift` |
| -28.6% |  -4.00ms |   4.7% → 3.2% |   14.0ms → 10.0ms |   14 → 10 | `$s11SwiftParser5LexerO6CursorV13lexIdentifierAC6ResultVyF`                                                           | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift` |
| +50.0% |  +1.00ms |   0.7% → 1.0% |     2.0ms → 3.0ms |     2 → 3 | `$s11SwiftParser5LexerO6CursorV21lexOperatorIdentifier17sourceBufferStart021preferRegexOverBinaryF0AC6ResultVAE_SbtF` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift` |

##### `$s11SwiftSyntax0B7VisitorC13dispatchVisit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

| Change |    Delta |             % |         Time | Samples | Caller                                                                                    | Location                                                                            |
| -----: | -------: | ------------: | -----------: | ------: | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|    new | +15.00ms | 0.0% → 100.0% | 0ms → 15.0ms |  0 → 15 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |

##### `$s11SwiftParser5LexerO6CursorV5StateO23leadingTriviaLexingMode6cursorAE0ghI0OSgAE_tFTf4dn_n` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`)

|  Change |    Delta |      % |            Time | Samples | Caller                                                                                 | Location    |
| ------: | -------: | -----: | --------------: | ------: | -------------------------------------------------------------------------------------- | ----------- |
| +127.3% | +14.00ms | 100.0% | 11.0ms → 25.0ms | 11 → 25 | `$s11SwiftParser5LexerO6CursorV5StateO23leadingTriviaLexingMode6cursorAE0ghI0OSgAE_tF` | `<unknown>` |

##### `$s11SwiftSyntax13compareMemory33_132B404099BC4B0D33927A976564E3D3LLySbSPys5UInt8VG_AFSitF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxText.swift`)

| Change |    Delta |      % |              Time |   Samples | Caller                                            | Location                                                               |
| -----: | -------: | -----: | ----------------: | --------: | ------------------------------------------------- | ---------------------------------------------------------------------- |
| +10.7% | +11.00ms | 100.0% | 103.0ms → 114.0ms | 103 → 114 | `$s11SwiftSyntax0B4TextV2eeoiySbAC_ACtFZTf4nnd_n` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxText.swift` |

##### `$s11SwiftParser0B0V28parsePostfixExpressionSuffix_6flavor7pattern0A6Syntax07RawExprI0VAI_AC0K6FlavorOAC14PatternContextOtF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`)

| Change |    Delta |      % |            Time | Samples | Caller                                                                                                                      | Location                                                                |
| -----: | -------: | -----: | --------------: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| +90.9% | +10.00ms | 100.0% | 11.0ms → 21.0ms | 11 → 21 | `$s11SwiftParser0B0V30parseSequenceExpressionElement6flavor7pattern0A6Syntax07RawExprI0VAC0K6FlavorO_AC14PatternContextOtF` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift` |

##### `$s11SwiftParser5LexerO6CursorV9nextToken17sourceBufferStart14stateAllocatorAC6LexemeVAE_0A6Syntax07BumpPtrK0CtF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`)

| Change |    Delta |             % |              Time |   Samples | Caller                                                                                                                       | Location                                                                         |
| -----: | -------: | ------------: | ----------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
|  +9.0% | +11.00ms | 97.6% → 98.5% | 122.0ms → 133.0ms | 122 → 133 | `$s11SwiftParser5LexerO14LexemeSequenceV7advanceAC0D0VyF6$deferL_yyF`                                                        | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/LexemeSequence.swift` |
| -66.7% |  -2.00ms |   2.4% → 0.7% |     3.0ms → 1.0ms |     3 → 1 | `$s11SwiftParser0B0V43consumeAnyTokenWithoutAdjustingNestingLevel0A6Syntax03RaweJ0VyF`                                       | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Parser.swift`               |
|    new |  +1.00ms |   0.0% → 0.7% |       0ms → 1.0ms |     0 → 1 | `$s11SwiftParser0B0V28parsePostfixExpressionSuffix_6flavor7pattern0A6Syntax07RawExprI0VAI_AC0K6FlavorOAC14PatternContextOtF` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`          |

##### `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax014c30MissingExprB0V_11placeholder_5n22AcA0c15UnexpectedNodesw14VSg_AA0c5Tokenw8VAhA0cB5r14ChtcfcySryAA0cW9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VASTf1nnnncn_nTf4nnnndnnn_nTm` (`AbsolutePosition.swift.o`)

| Change |   Delta |            % |        Time | Samples | Caller                                                                                                                                            | Location                                                                   |
| -----: | ------: | -----------: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|    new | +2.00ms | 0.0% → 20.0% | 0ms → 2.0ms |   0 → 2 | `$s11SwiftParser0B0V22parsePostfixExpression6flavor7pattern0A6Syntax07RawExprH0VAC0J6FlavorO_AC14PatternContextOtF`                               | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`    |
|    new | +2.00ms | 0.0% → 20.0% | 0ms → 2.0ms |   0 → 2 | `$s11SwiftParser0B0V12parsePattern0A6Syntax03RawdE0VyF`                                                                                           | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Patterns.swift`       |
|    new | +2.00ms | 0.0% → 20.0% | 0ms → 2.0ms |   0 → 2 | `$s11SwiftParser0B0V31parseSequenceExpressionOperator6flavor7pattern0A6Syntax07RawExprI0V8operator_AISg3rhstSgAC0K6FlavorO_AC14PatternContextOtF` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`    |
|    new | +2.00ms | 0.0% → 20.0% | 0ms → 2.0ms |   0 → 2 | `$s11SwiftParser0B0V18parseStringLiteral0A6Syntax03Rawde4ExprF0VyF`                                                                               | `./.build/checkouts/swift-syntax/Sources/SwiftParser/StringLiterals.swift` |
|    new | +1.00ms | 0.0% → 10.0% | 0ms → 1.0ms |   0 → 1 | `$s11SwiftParser0B0V23parseSequenceExpression6flavor7pattern0A6Syntax07RawExprH0VAC0J6FlavorO_AC14PatternContextOtF`                              | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`    |

##### `$s11SwiftParser9TokenSpecV7matches03rawC4Kind7keyword13atStartOfLineSb0A6Syntax03RawcG0O_AH7KeywordOSgyXKSbyXKtF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpec.swift`)

| Change |    Delta |             % |            Time | Samples | Caller                                                                | Location                                                              |
| -----: | -------: | ------------: | --------------: | ------: | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| +29.8% | +14.00ms | 87.0% → 96.8% | 47.0ms → 61.0ms | 47 → 61 | `$s11SwiftParser9TokenSpecV2teoiySbAC_AA22PrepareForKeywordMatchVtFZ` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpec.swift` |
| -71.4% |  -5.00ms |  13.0% → 3.2% |   7.0ms → 2.0ms |   7 → 2 | `$s11SwiftParser9TokenSpecV2teoiySbAC_AA5LexerO6LexemeVtFZ`           | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpec.swift` |

##### `$s11SwiftSyntax0B0V12layoutBufferAA014ArenaAllocatedD7PointerVyAA0efG0VyAA0B4DataVGSgGvg` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift`)

| Change |   Delta |             % |        Time | Samples | Caller                                                                                    | Location                                                                            |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|    new | +9.00ms | 0.0% → 100.0% | 0ms → 9.0ms |   0 → 9 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |

##### `0xa1a60` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |            Time | Samples | Caller                                                                                                                                                                                           | Location                                                               |
| ------: | ------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
|  +45.5% | +5.00ms | 40.7% → 33.3% | 11.0ms → 16.0ms | 11 → 16 | `$s11SwiftParser0B0V13withLookaheadyxxAC0D0VzXElFSb_Tg5`                                                                                                                                         | `<unknown>`                                                            |
| +250.0% | +5.00ms |  7.4% → 14.6% |   2.0ms → 7.0ms |   2 → 7 | `$s11SwiftParser0B0V9LookaheadV7lexemes12currentToken12swiftVersion20experimentalFeaturesAeA5LexerO14LexemeSequenceV_AK0L0VAC0aH0OAC012ExperimentalJ0Vtc33_8B04AB4096AC45820073D65E009E045BLlfC` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lookahead.swift`  |
| +250.0% | +5.00ms |  7.4% → 14.6% |   2.0ms → 7.0ms |   2 → 7 | `$s11SwiftParser0B0V9LookaheadV19atStartOfSwitchCase13allowRecoveryS2b_tF`                                                                                                                       | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Statements.swift` |
| removed | -2.00ms |   7.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `$s11SwiftParser0B0V22parseTypeAttributeList19misplacedSpecifiers0A6Syntax03Rawd9SpecifierfI0V10specifiers_AF0jefI0V10attributestSgSayAF0j5TokenI0VG_tF`                                         | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Types.swift`      |
| +200.0% | +2.00ms |   3.7% → 6.3% |   1.0ms → 3.0ms |   1 → 3 | `$s11SwiftParser0B0V9LookaheadV25canParseArgumentLabelListSbyF`                                                                                                                                  | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Names.swift`      |

##### `0xa1940` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |            % |          Time | Samples | Caller                                                                                                                                                   | Location                                                                |
| ------: | ------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
|     new | +4.00ms |  0.0% → 9.8% |   0ms → 4.0ms |   0 → 4 | `$s11SwiftParser0B0V30parseSequenceExpressionElement6flavor7pattern0A6Syntax07RawExprI0VAC0K6FlavorO_AC14PatternContextOtF`                              | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift` |
| +300.0% | +3.00ms |  3.6% → 9.8% | 1.0ms → 4.0ms |   1 → 4 | `$s11SwiftParser0B0V25parseArgumentListElements7pattern6flavor18allowTrailingCommaSay0A6Syntax014RawLabeledExprL0VGAC14PatternContextO_AC0O6FlavorOSbtF` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift` |
|  -75.0% | -3.00ms | 14.3% → 2.4% | 4.0ms → 1.0ms |   4 → 1 | `$s11SwiftParser0B0V18parseArgumentLabel0A6Syntax018RawUnexpectedNodesF0VSg_AE0g5TokenF0VtyF`                                                            | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Names.swift`       |
|     new | +3.00ms |  0.0% → 7.3% |   0ms → 3.0ms |   0 → 3 | `$s11SwiftParser0B0V15parseTypeScalar19misplacedSpecifiers0A6Syntax03RawdH0VSayAF0i5TokenH0VG_tF`                                                        | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Types.swift`       |
|  -33.3% | -2.00ms | 21.4% → 9.8% | 6.0ms → 4.0ms |   6 → 4 | `$s11SwiftParser0B0V13withLookaheadyxxAC0D0VzXElFSb_Tg5`                                                                                                 | `<unknown>`                                                             |

##### `0x3e6658` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change |    Delta |             % |            Time | Samples | Caller                                                                                     | Location                                                           |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
|  +66.7% | +10.00ms | 57.7% → 64.1% | 15.0ms → 25.0ms | 15 → 25 | `$s11SwiftParser5LexerO14LexemeSequenceV7advanceAC0D0VyF6$deferL_yyF`                      | `<unknown>`                                                        |
| removed |  -5.00ms |  19.2% → 0.0% |     5.0ms → 0ms |   5 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF`          | `<unknown>`                                                        |
| +200.0% |  +4.00ms |  7.7% → 15.4% |   2.0ms → 6.0ms |   2 → 6 | `$s11SwiftParser0B0V9LookaheadVWOr`                                                        | `<unknown>`                                                        |
| +200.0% |  +4.00ms |  7.7% → 15.4% |   2.0ms → 6.0ms |   2 → 6 | `$s11SwiftSyntax0B0V11_syntaxNodeACvg`                                                     | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift` |
| removed |  -1.00ms |   3.8% → 0.0% |     1.0ms → 0ms |   1 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `<unknown>`                                                        |

##### `0x88a9c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |    Delta |             % |         Time | Samples | Caller                                                                                           | Location                                                           |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
|    new | +13.00ms | 0.0% → 100.0% | 0ms → 13.0ms |  0 → 13 | `$s11SwiftSyntax0B9DataArenaC6layout3forAA0D22AllocatedBufferPointerVyAA0dgI0VyAA0bC0VGSgGAL_tF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift` |

##### `$s11SwiftParser5LexerO14LexemeSequenceVWOr` (`<unknown>`)

| Change |   Delta |              % |          Time | Samples | Caller                                                                                                                                   | Location    |
| -----: | ------: | -------------: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|    new | +6.00ms |   0.0% → 40.0% |   0ms → 6.0ms |   0 → 6 | `$s11SwiftParser0B0V22parseFunctionParameter0A6Syntax03RawdeF0VyF`                                                                       | `<unknown>` |
|    new | +5.00ms |   0.0% → 33.3% |   0ms → 5.0ms |   0 → 5 | `$s11SwiftParser0B0V9parseItem33_008C1B0E0A90478841CED0DF9A7053A1LL12isAtTopLevel13allowInitDecl0A6Syntax012RawCodeBlockdT0V0D0OSb_SbtF` | `<unknown>` |
| -50.0% | -2.00ms | 100.0% → 13.3% | 4.0ms → 2.0ms |   4 → 2 | `$s11SwiftParser0B0V24parseMisplacedSpecifiersSay0A6Syntax08RawTokenF0VGyF`                                                              | `<unknown>` |
|    new | +2.00ms |   0.0% → 13.3% |   0ms → 2.0ms |   0 → 2 | `$s11SwiftParser0B0V9lookaheadAC9LookaheadVyF`                                                                                           | `<unknown>` |

##### `$s11SwiftParser0B0V30parseSequenceExpressionElement6flavor7pattern0A6Syntax07RawExprI0VAC0K6FlavorO_AC14PatternContextOtF` (`<unknown>`)

| Change |    Delta |             % |         Time | Samples | Caller                                                                                                               | Location                                                                |
| -----: | -------: | ------------: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |  0 → 10 | `$s11SwiftParser0B0V23parseSequenceExpression6flavor7pattern0A6Syntax07RawExprH0VAC0J6FlavorO_AC14PatternContextOtF` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift` |

##### `0xa1a2c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |              % |          Time | Samples | Caller                                                                                                                                                                                           | Location                                                              |
| ------: | ------: | -------------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| +600.0% | +6.00ms | 100.0% → 77.8% | 1.0ms → 7.0ms |   1 → 7 | `$s11SwiftParser0B0V9LookaheadV7lexemes12currentToken12swiftVersion20experimentalFeaturesAeA5LexerO14LexemeSequenceV_AK0L0VAC0aH0OAC012ExperimentalJ0Vtc33_8B04AB4096AC45820073D65E009E045BLlfC` | `<unknown>`                                                           |
|     new | +2.00ms |   0.0% → 22.2% |   0ms → 2.0ms |   0 → 2 | `$s11SwiftParser0B0V13withLookaheadyxxAC0D0VzXElFSb_Tg5`                                                                                                                                         | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lookahead.swift` |

##### `0xa2dd8` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |          Time | Samples | Caller                                                                                                                                                                                                 | Location                   |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
|     new | +6.00ms |  0.0% → 50.0% |   0ms → 6.0ms |   0 → 6 | `$s11SwiftSyntax015RawDeclModifierB0V_4name_6detail_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAiA0cde6DetailB0VSgAiA0cB5ArenaChtcfcySryAA0cB0VSgGXEfU_Tm`                                         | `AbsolutePosition.swift.o` |
| +100.0% | +2.00ms | 40.0% → 33.3% | 2.0ms → 4.0ms |   2 → 4 | `$sSp10initialize9repeating5countyx_SitF11SwiftSyntax03RawE0VSg_Tg5`                                                                                                                                   | `<unknown>`                |
| removed | -1.00ms |  20.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `$s11SwiftSyntax028RawKeyPathSubscriptComponentB0V_10leftSquare_9arguments_05rightI0_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAjA0c15LabeledExprListB0VAjljA0B5ArenaChtcfcySryAA0cB0VSgGXEfU_Tm` | `AbsolutePosition.swift.o` |
| removed | -1.00ms |  20.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `$s11SwiftSyntax017RawIdentifierTypeB0V_4name_21genericArgumentClause_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VAiA0c7GenerichiB0VSgAiA0B5ArenaChtcfcySryAA0cB0VSgGXEfU_Tm`                       | `AbsolutePosition.swift.o` |
| removed | -1.00ms |  20.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `$s11SwiftSyntax016RawCodeBlockItemB0V_4item_9semicolon_5arenaAcA0c15UnexpectedNodesB0VSg_AC0F0OAiA0c5TokenB0VSgAiA0B5ArenaChtcfcySryAA0cB0VSgGXEfU_Tm`                                                | `AbsolutePosition.swift.o` |

##### `0x88a50` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller                                                                                           | Location                                                           |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
|    new | +6.00ms | 0.0% → 100.0% | 0ms → 6.0ms |   0 → 6 | `$s11SwiftSyntax0B9DataArenaC6layout3forAA0D22AllocatedBufferPointerVyAA0dgI0VyAA0bC0VGSgGAL_tF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift` |

##### `0x430114` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change |   Delta |              % |          Time | Samples | Caller                           | Location    |
| ------: | ------: | -------------: | ------------: | ------: | -------------------------------- | ----------- |
| +100.0% | +4.00ms | 100.0% → 88.9% | 4.0ms → 8.0ms |   4 → 8 | `$s11SwiftParser0B0VWOr`         | `<unknown>` |
|     new | +1.00ms |   0.0% → 11.1% |   0ms → 1.0ms |   0 → 1 | `$s11SwiftSyntax03RawB5ArenaCfd` | `<unknown>` |

##### `$sSR8IteratorV4nextxSgyF11SwiftSyntax21ArenaAllocatedPointerVyAE0D4DataVGSg_Tg5` (`<unknown>`)

| Change |    Delta |             % |         Time | Samples | Caller                                                                                    | Location                                                                            |
| -----: | -------: | ------------: | -----------: | ------: | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|    new | +21.00ms | 0.0% → 100.0% | 0ms → 21.0ms |  0 → 21 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |

##### `$ss7UnicodeO6ScalarV11SwiftParserE17testCharacterInfo33_CBBF9FEF132CFB2EFF7837FA6BCFF520LLySbSJAEE0G0AGLLVF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/CharacterInfo.swift`)

|  Change |   Delta |             % |            Time | Samples | Caller                                                                                                                                                                                                                                 | Location                                                                 |
| ------: | ------: | ------------: | --------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
|  +37.5% | +9.00ms | 96.0% → 84.6% | 24.0ms → 33.0ms | 24 → 33 | `$s11SwiftParser5LexerO6CursorV13lexIdentifierAC6ResultVyFSbs7UnicodeO6ScalarVXEfU0_`                                                                                                                                                  | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift` |
|     new | +6.00ms |  0.0% → 15.4% |     0ms → 6.0ms |   0 → 6 | `$s11SwiftParser5LexerO6CursorV13lexIdentifierAC6ResultVyFSbs7UnicodeO6ScalarVXEfU_`                                                                                                                                                   | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift` |
| removed | -1.00ms |   4.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `$s11SwiftParser5LexerO6CursorV7advance2ifS2bs7UnicodeO6ScalarVXE_tF04$s11a7Parser5c2O6d119V9lexNormal33_40499B5A26053AEB2F96A7C76320F673LL17sourceBufferStart29preferRegexOverBinaryOperatorAC6ResultVAE_SbtFSbs7gkH6VXEfU_Tf1cn_nTm` | `Attributes.swift.o`                                                     |

##### `$sSpsRi_zrlE10initialize2toyxn_tF11SwiftSyntax03RawD4DataV_Tg5` (`<unknown>`)

|  Change |    Delta |             % |         Time | Samples | Caller                                                   | Location                                                                       |
| ------: | -------: | ------------: | -----------: | ------: | -------------------------------------------------------- | ------------------------------------------------------------------------------ |
|     new | +35.00ms | 0.0% → 100.0% | 0ms → 35.0ms |  0 → 35 | `$s11SwiftSyntax03RawB5ArenaC6internySPyAA0cB4DataVGAFF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntaxArena.swift` |
| removed | -25.00ms | 100.0% → 0.0% | 25.0ms → 0ms |  25 → 0 | `$s11SwiftSyntax0B5ArenaC6internySPyAA03RawB4DataVGAFF`  | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxArena.swift`        |

##### `$sSpsRi_zrlE10initialize2toyxn_tF11SwiftSyntax21ArenaAllocatedPointerVyAC0D4DataVGSg_Tg5` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntaxLayoutView.swift`)

| Change |   Delta |             % |        Time | Samples | Caller                                                                                                                             | Location                                                           |
| -----: | ------: | ------------: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
|    new | +9.00ms | 0.0% → 100.0% | 0ms → 9.0ms |   0 → 9 | `$s11SwiftSyntax0B9DataArenaC012createLayoutC4Impl33_B3300DB0BA2B3E5E35A338B811650793LLySRyAA0D16AllocatedPointerVyAA0bC0VGSgGAJF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift` |

##### `$sSlsEy11SubSequenceQzys15UnboundedRange_OXEcigSRys5UInt8VG_Tg5` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`)

| Change |   Delta |             % |        Time | Samples | Caller                                                         | Location                                                                 |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------------------------ |
|    new | +7.00ms | 0.0% → 100.0% | 0ms → 7.0ms |   0 → 7 | `$s11SwiftParser5LexerO6CursorV8PositionV7advances5UInt8VSgyF` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift` |

##### `$sSp10initialize9repeating5countyx_SitF11SwiftSyntax03RawE0VSg_Tg5` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                                                       | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------------ | ----------- |
|    new | +4.00ms | 0.0% → 100.0% | 0ms → 4.0ms |   0 → 4 | `$sSr10initialize9repeatingyx_tF11SwiftSyntax03RawD0VSg_Tg5` | `<unknown>` |

##### `$sSR8IteratorV4nextxSgyF11SwiftSyntax03RawD0VSg_Tg5` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`)

|  Change |    Delta |             % |         Time | Samples | Caller                                                                                                                                                                                                                                                                                                                                                                                                   | Location                                                                  |
| ------: | -------: | ------------: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
|     new | +12.00ms | 0.0% → 100.0% | 0ms → 12.0ms |  0 → 12 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZTf4nnnnnd_n`                                                                                                                                                                                                                              | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift` |
| removed |  -7.00ms |  87.5% → 0.0% |  7.0ms → 0ms |   7 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZTf4nnnnnd_n`                                                                                                                                                                                                                               | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift` |
| removed |  -1.00ms |  12.5% → 0.0% |  1.0ms → 0ms |   1 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax019c40KeyPathComponentB0V_6period_9component_5n22AcA0c15UnexpectedNodesx14VSg_AA0c5Tokenx16VSgAiC0F0OAiA0B5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VSgAsA0cuvwB0V0W0OASTf1nnnncn_nTf4nnnndnnnnn_n` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift` |

##### `$sSa034_makeUniqueAndReserveCapacityIfNotB0yyF11SwiftSyntax016RawCodeBlockItemI0V_Tg5` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                                                    | Location    |
| -----: | ------: | ------------: | ----------: | ------: | --------------------------------------------------------- | ----------- |
|    new | +4.00ms | 0.0% → 100.0% | 0ms → 4.0ms |   0 → 4 | `$sSa6appendyyxnF11SwiftSyntax016RawCodeBlockItemC0V_Tg5` | `<unknown>` |

##### `$ss7UnicodeO6ScalarV11SwiftParserE22isAsciiIdentifierStartSbvg` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/CharacterInfo.swift`)

| Change |   Delta |      % |           Time | Samples | Caller                                                                    | Location                                                                                  |
| -----: | ------: | -----: | -------------: | ------: | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| +37.5% | +3.00ms | 100.0% | 8.0ms → 11.0ms |  8 → 11 | `$ss7UnicodeO6ScalarV11SwiftParserE31isValidIdentifierStartCodePointSbvg` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/UnicodeScalarExtensions.swift` |

##### `$sSlsE3mapySayqd__Gqd__7ElementQzqd_0_YKXEqd_0_YKs5ErrorRd_0_r0_lFSay11SwiftSyntax08RawTokenE0VG_AF0f17TypeSpecifierListE0VACOs5NeverOTg504$s11d17Parser0B0V22parseh82AttributeList19misplacedSpecifiers0A6Syntax03Rawd9SpecifierfI0V10specifiers_AF0jefw34V10attributesAH04lateH0tSgSayAF0j5gw8VG_tFAH7B8OAPXEfU_0D6Parser6ParserVTf1cn_n` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                                                                                                                                                             | Location                                                          |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
|    new | +3.00ms | 0.0% → 100.0% | 0ms → 3.0ms |   0 → 3 | `$s11SwiftParser0B0V22parseTypeAttributeList19misplacedSpecifiers0A6Syntax03Rawd9SpecifierfI0V10specifiers_AF0jefI0V10attributesAH04lateH0tSgSayAF0j5TokenI0VG_tF` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Types.swift` |

##### `$sSD_7defaultq_x_q_yXKtciM11SwiftSyntax0C4KindO_SiTg5` (`./Sources/profile/main.swift`)

| Change |   Delta |      % |          Time | Samples | Caller                                                                         | Location                       |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------------------------------------------------ | ------------------------------ |
| +50.0% | +2.00ms | 100.0% | 4.0ms → 6.0ms |   4 → 6 | `$s7profile11KindCounterC8visitAnyy11SwiftSyntax0g15VisitorContinueB0OAE0G0VF` | `./Sources/profile/main.swift` |

##### `$ss5UInt8VSQsSQ2eeoiySbx_xtFZTW` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/CharacterInfo.swift`)

| Change |   Delta |      % |            Time | Samples | Caller                                                                                               | Location    |
| -----: | ------: | -----: | --------------: | ------: | ---------------------------------------------------------------------------------------------------- | ----------- |
| +11.8% | +2.00ms | 100.0% | 17.0ms → 19.0ms | 17 → 19 | `$ss2eeoiySbx_xtSYRzSQ8RawValueRpzlFSJ11SwiftParserE4Info33_CBBF9FEF132CFB2EFF7837FA6BCFF520LLV_Tg5` | `<unknown>` |

##### `$ss15ContiguousArrayV16_createNewBuffer14bufferIsUnique15minimumCapacity13growForAppendySb_SiSbtF11SwiftParser15TokenPrecedenceO_Tg5` (`<unknown>`)

|  Change |   Delta |             % |          Time | Samples | Caller                                                                                                                                                                                                                                | Location             |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
|     new | +2.00ms |  0.0% → 40.0% |   0ms → 2.0ms |   0 → 2 | `$s11SwiftParser0B0V9LookaheadV12canRecoverTo5anyIn26overrideRecoveryPrecedencex5match_AA0J17ConsumptionHandleV6handletSgxm_AA05TokenK0OSgtAA0P7SpecSetRzlF0A6Syntax023RawTypeEffectSpecifiersS0VAAE012CorrectAsyncP5KindsO_Tt0g5Tm`  | `Attributes.swift.o` |
|  +50.0% | +1.00ms | 66.7% → 60.0% | 2.0ms → 3.0ms |   2 → 3 | `$ss15ContiguousArrayV15reserveCapacityyySiF11SwiftParser15TokenPrecedenceO_Tg5`                                                                                                                                                      | `<unknown>`          |
| removed | -1.00ms |  33.3% → 0.0% |   1.0ms → 0ms |   1 → 0 | `$s11SwiftParser0B0V9LookaheadV12canRecoverTo5anyIn26overrideRecoveryPrecedencex5match_AA0J17ConsumptionHandleV6handletSgxm_AA05TokenK0OSgtAA0P7SpecSetRzlF0A6Syntax023RawTypeEffectSpecifiersS0VAAE013CorrectThrowsP5KindsO_Tt0g5Tm` | `Attributes.swift.o` |

##### `$ss22__RawDictionaryStorageC4find_9hashValues10_HashTableV6BucketV6bucket_Sb5foundtx_SitSHRzlF11SwiftSyntax0aM0V2IDV_Tg5` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Caller                                                                                       | Location    |
| -----: | ------: | -----: | -------------: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
| +25.0% | +2.00ms | 100.0% | 8.0ms → 10.0ms |  8 → 10 | `$ss17_NativeDictionaryV8setValue_6forKey8isUniqueyq_n_xSbtF11SwiftSyntax03RawJ0V2IDV_SiTg5` | `<unknown>` |

##### `$sSls11SubSequenceQzRszrlE8popFirst7ElementQzSgyFs5SliceVySRys5UInt8VGG_Tg5` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                                                         | Location                                                                 |
| -----: | ------: | -----: | ------------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------------------------ |
| +40.0% | +2.00ms | 100.0% | 5.0ms → 7.0ms |   5 → 7 | `$s11SwiftParser5LexerO6CursorV8PositionV7advances5UInt8VSgyF` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift` |

##### `$ss17_NativeDictionaryV12ensureUnique02isD08capacityS2b_SitF11SwiftSyntax0H4KindO_SiTg5` (`./Sources/profile/main.swift`)

| Change |   Delta |      % |          Time | Samples | Caller                                                  | Location    |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------------------------- | ----------- |
| +50.0% | +2.00ms | 100.0% | 4.0ms → 6.0ms |   4 → 6 | `$sSD_7defaultq_x_q_yXKtciM11SwiftSyntax0C4KindO_SiTg5` | `<unknown>` |

##### `$sSUss17FixedWidthIntegerRzrlEyxqd__cSzRd__lufCSu_SiTt1g5` (`<unknown>`)

|  Change |   Delta |      % |          Time | Samples | Caller                                              | Location                                                                     |
| ------: | ------: | -----: | ------------: | ------: | --------------------------------------------------- | ---------------------------------------------------------------------------- |
| +100.0% | +2.00ms | 100.0% | 2.0ms → 4.0ms |   2 → 4 | `$sSv11SwiftSyntaxE9alignedUp12toMultipleOfSvSi_tF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift` |

##### `$sSa9_getCountSiyF11SwiftSyntax03RawD0V_Tg5` (`<unknown>`)

| Change |   Delta |            % |        Time | Samples | Caller                                                                                                                                  | Location             |
| -----: | ------: | -----------: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
|    new | +1.00ms | 0.0% → 50.0% | 0ms → 1.0ms |   0 → 1 | `$sSa5countSivg11SwiftSyntax03RawC0V_Tg5`                                                                                               | `<unknown>`          |
|    new | +1.00ms | 0.0% → 50.0% | 0ms → 1.0ms |   0 → 1 | `$s11SwiftParser0B0V21parseEffectSpecifiers33_8AD3DBEA1A6EBF8CF81277B5457C52BFLLyxSgxmAA03RawdE5TraitRzlF0A6Syntax0n4TypedeP0V_Tt0g5Tm` | `Attributes.swift.o` |

##### `0x3e69e0` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                                                                            | Location                                                                            |
| ------: | --------: | ------------: | ------------: | ------: | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| removed | -103.00ms | 100.0% → 0.0% | 103.0ms → 0ms | 103 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |

##### `0x430244` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change |    Delta |             % |         Time | Samples | Caller                                                                   | Location    |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------ | ----------- |
| removed | -69.00ms | 100.0% → 0.0% | 69.0ms → 0ms |  69 → 0 | `$ss25isKnownUniquelyReferencedySbxSgzRlzClF11SwiftSyntax0F0V4InfoC_Tg5` | `<unknown>` |

##### `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax027c61AccessorEffectSpecifiersB0V_14asyncSpecifier_12throwsClause_5n22AcA0c15UnexpectedNodesx14VSg_AA0c5Tokenx16VSgAiA0c6Throwsjx9VSgAiA0B5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VSgAsA0c12ThrowsClauseB0VSgASTf1nnnncn_nTf4nnnndnnnnn_nTm` (`AbsolutePosition.swift.o`)

|  Change |    Delta |            % |         Time | Samples | Caller                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Location     |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ |
| removed | -33.00ms | 66.0% → 0.0% | 33.0ms → 0ms |  33 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax020c48DeclReferenceExprB0V_8baseName_13argumentNames_5n22AcA0c15UnexpectedNodesx14VSg_AA0c5Tokenx18VAiA0cdh9Argumentsx9VSgAiA0B5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VAsA0cuz9ArgumentsB0VSgASTf1nnnncn_nTf4nnnndnnnnn_n`                                                   | `crtstuff.c` |
| removed |  -8.00ms | 16.0% → 0.0% |  8.0ms → 0ms |   8 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax015c31DeclModifierB0V_4name_6detail_5n22AcA0c15UnexpectedNodesw14VSg_AA0c5Tokenw15VAiA0cde6Detailw9VSgAiA0B5r14ChtcfcySryAA0cW9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VAsA0cuv6DetailB0VSgASTf1nnnncn_nTf4nnnndnnnnn_n`                                                                          | `crtstuff.c` |
| removed |  -8.00ms | 16.0% → 0.0% |  8.0ms → 0ms |   8 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax017c49IdentifierTypeB0V_4name_21genericArgumentClause_5n22AcA0c15UnexpectedNodesw14VSg_AA0c5Tokenw16VAiA0c7Generichiw9VSgAiA0B5r14ChtcfcySryAA0cW9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VAsA0c7Genericz6ClauseB0VSgASTf1nnnncn_nTf4nnnndnnnnn_n`                                                | `crtstuff.c` |
| removed |  -1.00ms |  2.0% → 0.0% |  1.0ms → 0ms |   1 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax027c63KeyPathPropertyComponentB0V_8declName_21genericArgumentClause_5n22AcA0c15UnexpectedNodesy27VSg_AA0c17DeclReferenceExpry16VAiA0c7Generickly9VSgAiA0B5r14ChtcfcySryAA0cY9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c17DeclReferenceExprB0VAsA0c21GenericArgumentClauseB0VSgASTf1nnnncn_nTf4nnnndnnnnn_n` | `crtstuff.c` |

##### `0x3e6994` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change |    Delta |             % |         Time | Samples | Caller                                                                            | Location                                                                            |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| removed | -40.00ms | 100.0% → 0.0% | 40.0ms → 0ms |  40 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |

##### `0x3e62dc` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change |    Delta |             % |            Time | Samples | Caller                                                                                     | Location                                                                            |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| removed | -37.00ms |  20.7% → 0.0% |    37.0ms → 0ms |  37 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| +161.5% | +21.00ms |  7.3% → 23.8% | 13.0ms → 34.0ms | 13 → 34 | `$s11SwiftParser0B0V9LookaheadVWOs`                                                        | `<unknown>`                                                                         |
|  -12.2% | -10.00ms | 45.8% → 50.3% | 82.0ms → 72.0ms | 82 → 72 | `$s11SwiftSyntax0B8ProtocolPAAE3rawAA03RawB0Vvg`                                           | `<unknown>`                                                                         |
|  -52.9% |  -9.00ms |   9.5% → 5.6% |  17.0ms → 8.0ms |  17 → 8 | `$s11SwiftParser5LexerO14LexemeSequenceV7advanceAC0D0VyF`                                  | `<unknown>`                                                                         |
| removed |  -7.00ms |   3.9% → 0.0% |     7.0ms → 0ms |   7 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `<unknown>`                                                                         |

##### `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax014c54MissingDeclB0V_10attributes_9modifiers_11placeholder_5n22AcA0c15UnexpectedNodesw23VSg_AA0c13AttributeListw17VAjA0ce8Modifiermw12VAjA0c5Tokenw7VAjA0B5r14ChtcfcySryAA0cW9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c13AttributeListB0VAsA0cv12ModifierListB0VAsA0c5TokenB0VASTf1nnnncn_nTf4nnnndnnnnnnn_nTm` (`AbsolutePosition.swift.o`)

|  Change |    Delta |            % |         Time | Samples | Caller                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Location     |
| ------: | -------: | -----------: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| removed | -23.00ms | 71.9% → 0.0% | 23.0ms → 0ms |  23 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax019c45MemberAccessExprB0V_4base_6period_8declName_5n22AcA0c15UnexpectedNodesx9VSg_AA0cfx14VSgAjA0c5Tokenx22VAjA0c13DeclReferencefx7VAjA0B5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0cwB0VSgAsA0c5TokenB0VAsA0c13DeclReferencewB0VASTf1nnnncn_nTf4nnnndnnnnnnn_n` | `crtstuff.c` |
| removed |  -4.00ms | 12.5% → 0.0% |  4.0ms → 0ms |   4 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax012c48CodeBlockB0V_9leftBrace_10statements_05rightG0_5n22AcA0c15UnexpectedNodesw14VSg_AA0c5Tokenw17VAjA0cde8ItemListw9VAjljA0B5r14ChtcfcySryAA0cW9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VAsA0cuv8ItemListB0VAsuSTf1nnnncn_nTf4nnnndnnnnnnn_n`                          | `crtstuff.c` |
| removed |  -1.00ms |  3.1% → 0.0% |  1.0ms → 0ms |   1 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax018c50SwitchCaseLabelB0V_11caseKeyword_0G5Items_5colon_5n22AcA0c15UnexpectedNodesx14VSg_AA0c5Tokenx17VAjA0cde8ItemListx9VAjljA0B5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VAsA0cuv8ItemListB0VAsuSTf1nnnncn_nTf4nnnndnnnnnnn_n`                        | `crtstuff.c` |
| removed |  -1.00ms |  3.1% → 0.0% |  1.0ms → 0ms |   1 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax021c50AccessorParametersB0V_9leftParen_4name_05rightG0_5n22AcA0c15UnexpectedNodesw14VSg_AA0c5Tokenw11VAjljljA0B5r14ChtcfcySryAA0cW9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VAsusuSTf1nnnncn_nTf4nnnndnnnnnnn_n`                                                          | `crtstuff.c` |
| removed |  -1.00ms |  3.1% → 0.0% |  1.0ms → 0ms |   1 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax014c46MemberBlockB0V_9leftBrace_7members_05rightG0_5n22AcA0c15UnexpectedNodesw14VSg_AA0c5Tokenw17VAjA0cde8ItemListw9VAjljA0B5r14ChtcfcySryAA0cW9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VAsA0cuv8ItemListB0VAsuSTf1nnnncn_nTf4nnnndnnnnnnn_n`                            | `crtstuff.c` |

##### `$s11SwiftSyntax03RawB0V11parsedToken4kind9wholeText9textRange8presence15tokenDiagnostic5arenaAcA0cE4KindO_AA0bH0VSnySiGAA14SourcePresenceOAA0eM0VSgAA07ParsingB5ArenaChtFZTf4nnnnnnd_n` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`)

|  Change |    Delta |            % |         Time | Samples | Caller                                                                                                                 | Location                                                              |
| ------: | -------: | -----------: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| removed | -12.00ms | 44.4% → 0.0% | 12.0ms → 0ms |  12 → 0 | `$s11SwiftParser0B0VAA13TokenConsumerA2aDP010consumeAnyC00C0QzyFTW`                                                    | `<unknown>`                                                           |
| removed | -10.00ms | 37.0% → 0.0% | 10.0ms → 0ms |  10 → 0 | `$s11SwiftParser0B0V43consumeAnyTokenWithoutAdjustingNestingLevel0A6Syntax03RaweJ0VyF`                                 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Parser.swift`    |
| removed |  -2.00ms |  7.4% → 0.0% |  2.0ms → 0ms |   2 → 0 | `$s11SwiftParser13TokenConsumerPAAE3eaty0C0QzAA0C4SpecVFAA0B0V_xTi50A6Syntax014IdentifierTypeG0VAAE11NameOptionsO_TG5` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpec.swift` |
| removed |  -1.00ms |  3.7% → 0.0% |  1.0ms → 0ms |   1 → 0 | `$s11SwiftParser13TokenConsumerPAAE3eaty0C0QzAA0C4SpecVFAA0B0V_TG5`                                                    | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpec.swift` |
| removed |  -1.00ms |  3.7% → 0.0% |  1.0ms → 0ms |   1 → 0 | `$s11SwiftParser0B0V22parseDeclReferenceExpry0A6Syntax03RawdefG0VAC0D11NameOptionsVF`                                  | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Names.swift`     |

##### `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change |    Delta |             % |         Time | Samples | Caller                                                                                     | Location                                                                            |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| removed | -26.00ms | 100.0% → 0.0% | 26.0ms → 0ms |  26 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |

##### `$s11SwiftSyntax03RawB8ChildrenV5index_10advancedByAA0bD5IndexVAG_AA0cB0VSgtF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`)

|  Change |    Delta |             % |         Time | Samples | Caller                                                                                           | Location                                                                   |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| removed | -25.00ms | 100.0% → 0.0% | 25.0ms → 0ms |  25 → 0 | `$s11SwiftSyntax03RawB8ChildrenV8IteratorV4nextAA0cB0VSg3raw_AA08AbsoluteB4InfoV06syntaxI0tSgyF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxChildren.swift` |

##### `0x47f088` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change |    Delta |              % |            Time | Samples | Caller     | Location                               |
| ------: | -------: | -------------: | --------------: | ------: | ---------- | -------------------------------------- |
|  -61.5% | -16.00ms | 83.9% → 100.0% | 26.0ms → 10.0ms | 26 → 10 | `0x3e6673` | `/usr/lib/swift/linux/libswiftCore.so` |
| removed |  -5.00ms |   16.1% → 0.0% |     5.0ms → 0ms |   5 → 0 | `0x3e67af` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `$s11SwiftSyntax0B21ArenaAllocatedPointerV7pointeexvgAA03RawB4DataV_Tg5` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxArenaAllocatedBuffer.swift`)

|  Change |    Delta |             % |         Time | Samples | Caller                                      | Location                                                                  |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |  20 → 0 | `$s11SwiftSyntax03RawB0V7rawDataAA0cbE0Vvg` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift` |

##### `0x4301f4` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change |    Delta |             % |            Time | Samples | Caller                                                                                 | Location                       |
| ------: | -------: | ------------: | --------------: | ------: | -------------------------------------------------------------------------------------- | ------------------------------ |
|  -17.2% | -11.00ms | 78.0% → 84.1% | 64.0ms → 53.0ms | 64 → 53 | `$sSD_7defaultq_x_q_yXKtciM11SwiftSyntax0C4KindO_SiTg5`                                | `./Sources/profile/main.swift` |
|  -80.0% |  -4.00ms |   6.1% → 1.6% |   5.0ms → 1.0ms |   5 → 1 | `$sSa034_makeUniqueAndReserveCapacityIfNotB0yyF11SwiftSyntax014RawLabeledExprI0V_Tg5`  | `<unknown>`                    |
| removed |  -2.00ms |   2.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `$sSa034_makeUniqueAndReserveCapacityIfNotB0yyF11SwiftSyntax015RawAccessorDeclI0V_Tg5` | `<unknown>`                    |
| removed |  -1.00ms |   1.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `$sSa034_makeUniqueAndReserveCapacityIfNotB0yyF11SwiftSyntax015RawDeclModifierI0V_Tg5` | `<unknown>`                    |
|  +50.0% |  +1.00ms |   2.4% → 4.8% |   2.0ms → 3.0ms |   2 → 3 | `$sSa034_makeUniqueAndReserveCapacityIfNotB0yyFSw_Tg5`                                 | `<unknown>`                    |

##### `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax019c45AccessorDeclListB0V8elements5arenaACSayAA0cdex8VG_AA0B5r14ChtcfcySryAA0cX9VSgGXEfU_SayAA0cuvB0VGTf1nnnncn_nTf4nnnndg_nTm` (`AbsolutePosition.swift.o`)

|  Change |   Delta |            % |        Time | Samples | Caller                                                                                                                                                                                                                                                                                              | Location    |
| ------: | ------: | -----------: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed | -8.00ms | 42.1% → 0.0% | 8.0ms → 0ms |   8 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax020c47CodeBlockItemListB0V8elements5arenaACSayAA0cdefy8VG_AA0B5r14ChtcfcySryAA0cY9VSgGXEfU_SayAA0cuvwB0VGTf1nnnncn_n`   | `<unknown>` |
| removed | -3.00ms | 15.8% → 0.0% | 3.0ms → 0ms |   3 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax018c44LabeledExprListB0V8elements5arenaACSayAA0cdex8VG_AA0B5r14ChtcfcySryAA0cX9VSgGXEfU_SayAA0cuvB0VGTf1nnnncn_n`       | `<unknown>` |
| removed | -3.00ms | 15.8% → 0.0% | 3.0ms → 0ms |   3 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax021c48SwitchCaseItemListB0V8elements5arenaACSayAA0cdefy8VG_AA0B5r14ChtcfcySryAA0cY9VSgGXEfU_SayAA0cuvwB0VGTf1nnnncn_n`  | `<unknown>` |
| removed | -2.00ms | 10.5% → 0.0% | 2.0ms → 0ms |   2 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax021c47PatternBindingListB0V8elements5arenaACSayAA0cdex8VG_AA0B5r14ChtcfcySryAA0cX9VSgGXEfU_SayAA0cuvB0VGTf1nnnncn_n`    | `<unknown>` |
| removed | -1.00ms |  5.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax024c50FunctionParameterListB0V8elements5arenaACSayAA0cdex8VG_AA0B5r14ChtcfcySryAA0cX9VSgGXEfU_SayAA0cuvB0VGTf1nnnncn_n` | `<unknown>` |

##### `$s11SwiftParser5LexerO6CursorV8PositionV7advances5UInt8VSgyF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`)

| Change |    Delta |      % |             Time |  Samples | Caller                                               | Location                                                                 |
| -----: | -------: | -----: | ---------------: | -------: | ---------------------------------------------------- | ------------------------------------------------------------------------ |
| -17.0% | -18.00ms | 100.0% | 106.0ms → 88.0ms | 106 → 88 | `$s11SwiftParser5LexerO6CursorV7advances5UInt8VSgyF` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift` |

##### `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax019c45MemberAccessExprB0V_4base_6period_8declName_5n22AcA0c15UnexpectedNodesx9VSg_AA0cfx14VSgAjA0c5Tokenx22VAjA0c13DeclReferencefx7VAjA0B5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0cwB0VSgAsA0c5TokenB0VAsA0c13DeclReferencewB0VASTf1nnnncn_nTf4nnnndnnnnnnn_n` (`crtstuff.c`)

|  Change |    Delta |             % |         Time | Samples | Caller                                                                                                                                                                                                                                                                                                                                                                                                                                     | Location    |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| removed | -17.00ms | 100.0% → 0.0% | 17.0ms → 0ms |  17 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax019c45MemberAccessExprB0V_4base_6period_8declName_5n22AcA0c15UnexpectedNodesx9VSg_AA0cfx14VSgAjA0c5Tokenx22VAjA0c13DeclReferencefx7VAjA0B5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0cwB0VSgAsA0c5TokenB0VAsA0c13DeclReferencewB0VASTf1nnnncn_n` | `<unknown>` |

##### `0x3e673c` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change |   Delta |            % |        Time | Samples | Caller                                                                                                                                                      | Location    |
| ------: | ------: | -----------: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed | -3.00ms | 17.6% → 0.0% | 3.0ms → 0ms |   3 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzFAA0bC12ContinueKindOAA017DeclReferenceExprB0VcACYbcfu263_`                  | `<unknown>` |
| removed | -2.00ms | 11.8% → 0.0% | 2.0ms → 0ms |   2 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzFAA0bC12ContinueKindOAA034MultipleTrailingClosureElementListB0VcACYbcfu715_` | `<unknown>` |
| removed | -2.00ms | 11.8% → 0.0% | 2.0ms → 0ms |   2 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzFAA0bC12ContinueKindOAA014IdentifierTypeB0VcACYbcfu515_`                     | `<unknown>` |
| removed | -1.00ms |  5.9% → 0.0% | 1.0ms → 0ms |   1 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzFAA0bC12ContinueKindOAA016DeclModifierListB0VcACYbcfu243_`                   | `<unknown>` |
| removed | -1.00ms |  5.9% → 0.0% | 1.0ms → 0ms |   1 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzFAA0bC12ContinueKindOAA012ArrayElementB0VcACYbcfu27_`                        | `<unknown>` |

##### `0x3e6630` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change |    Delta |             % |            Time | Samples | Caller                                                                                     | Location                                                           |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| removed | -54.00ms |  40.3% → 0.0% |    54.0ms → 0ms |  54 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `<unknown>`                                                        |
| +350.0% | +42.00ms |  9.0% → 45.8% | 12.0ms → 54.0ms | 12 → 54 | `$s11SwiftSyntax0B0V11_syntaxNodeACvg`                                                     | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift` |
|  -31.0% |  -9.00ms | 21.6% → 16.9% | 29.0ms → 20.0ms | 29 → 20 | `$s11SwiftParser5LexerO14LexemeSequenceV7advanceAC0D0VyF6$deferL_yyF`                      | `<unknown>`                                                        |
|  +50.0% |  +9.00ms | 13.4% → 22.9% | 18.0ms → 27.0ms | 18 → 27 | `$s11SwiftParser0B0V9LookaheadVWOr`                                                        | `<unknown>`                                                        |
| removed |  -8.00ms |   6.0% → 0.0% |     8.0ms → 0ms |   8 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF`          | `<unknown>`                                                        |

##### `0x3e66a4` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change |    Delta |             % |           Time | Samples | Caller                                                                                     | Location                                                           |
| ------: | -------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
|  -86.7% | -13.00ms | 42.9% → 10.5% | 15.0ms → 2.0ms |  15 → 2 | `$s11SwiftParser0B0V9LookaheadVWOr`                                                        | `<unknown>`                                                        |
| removed |  -4.00ms |  11.4% → 0.0% |    4.0ms → 0ms |   4 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF`          | `<unknown>`                                                        |
| removed |  -3.00ms |   8.6% → 0.0% |    3.0ms → 0ms |   3 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `<unknown>`                                                        |
| +100.0% |  +3.00ms |  8.6% → 31.6% |  3.0ms → 6.0ms |   3 → 6 | `$s11SwiftParser5LexerO14LexemeSequenceV7advanceAC0D0VyF6$deferL_yyF`                      | `<unknown>`                                                        |
|  -37.5% |  -3.00ms | 22.9% → 26.3% |  8.0ms → 5.0ms |   8 → 5 | `$s11SwiftSyntax0B0V11_syntaxNodeACvg`                                                     | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Syntax.swift` |

##### `$s11SwiftSyntax0B0V4InfoC0C4ImplOSgWOe` (`<unknown>`)

|  Change |    Delta |             % |         Time | Samples | Caller                                                                                     | Location    |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| removed | -16.00ms | 100.0% → 0.0% | 16.0ms → 0ms |  16 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `<unknown>` |

##### `$s11SwiftParser5LexerO6CursorV9lexNormal33_40499B5A26053AEB2F96A7C76320F673LL17sourceBufferStart29preferRegexOverBinaryOperatorAC6ResultVAE_SbtF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`)

|  Change |    Delta |             % |            Time | Samples | Caller                                                                                                            | Location                                                                         |
| ------: | -------: | ------------: | --------------: | ------: | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
|  -21.3% | -19.00ms | 95.7% → 88.6% | 89.0ms → 70.0ms | 89 → 70 | `$s11SwiftParser5LexerO6CursorV9nextToken17sourceBufferStart14stateAllocatorAC6LexemeVAE_0A6Syntax07BumpPtrK0CtF` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`         |
| +125.0% |  +5.00ms |  4.3% → 11.4% |   4.0ms → 9.0ms |   4 → 9 | `$s11SwiftParser5LexerO14LexemeSequenceV7advanceAC0D0VyF6$deferL_yyF`                                             | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/LexemeSequence.swift` |

##### `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change |   Delta |            % |        Time | Samples | Caller                                                                                                                                                                  | Location                                                                            |
| ------: | ------: | -----------: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| removed | -3.00ms | 23.1% → 0.0% | 3.0ms → 0ms |   3 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA016FunctionCallExprB0V_Tt0g5`      | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -1.00ms |  7.7% → 0.0% | 1.0ms → 0ms |   1 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA017CodeBlockItemListB0V_Tt0g5`     | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -1.00ms |  7.7% → 0.0% | 1.0ms → 0ms |   1 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA021FunctionParameterListB0V_Tt0g5` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -1.00ms |  7.7% → 0.0% | 1.0ms → 0ms |   1 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA014ExpressionStmtB0V_Tt0g5`        | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -1.00ms |  7.7% → 0.0% | 1.0ms → 0ms |   1 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA012DeclModifierB0V_Tt0g5`          | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |

##### `$s11SwiftSyntax03RawB8ChildrenV5index_10advancedByAA0bD5IndexVAG_AA0cB0VSgtF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxChildren.swift`)

|  Change |    Delta |             % |         Time | Samples | Caller                                                                                           | Location                                                                   |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| removed | -12.00ms | 100.0% → 0.0% | 12.0ms → 0ms |  12 → 0 | `$s11SwiftSyntax03RawB8ChildrenV8IteratorV4nextAA0cB0VSg3raw_AA08AbsoluteB4InfoV06syntaxI0tSgyF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxChildren.swift` |

##### `$s11SwiftSyntax014RawLabeledExprB0V_5label_5colon_10expression_13trailingComma_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c5TokenB0VSgAknKxAknkA0B5ArenaChtcAA0ceB12NodeProtocolRzlufC` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/raw/RawSyntaxNodesJKLMN.swift`)

|  Change |    Delta |             % |         Time | Samples | Caller                                                                                                                                                   | Location                                                                |
| ------: | -------: | ------------: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |  10 → 0 | `$s11SwiftParser0B0V25parseArgumentListElements7pattern6flavor18allowTrailingCommaSay0A6Syntax014RawLabeledExprL0VGAC14PatternContextO_AC0O6FlavorOSbtF` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift` |

##### `$s11SwiftSyntax0B13ChildrenIndexV6offset13indexInParent0fG4TreeACs6UInt32V_AhA0B10IdentifierV0bdgI0Vtc33_B18D49ECBA01D94F67CC721AAEC7C395LlfC` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxChildren.swift`)

|  Change |    Delta |             % |         Time | Samples | Caller                                                                         | Location                                                                   |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |  10 → 0 | `$s11SwiftSyntax03RawB8ChildrenV5index_10advancedByAA0bD5IndexVAG_AA0cB0VSgtF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxChildren.swift` |

##### `$s11SwiftParser5LexerO14LexemeSequenceV7advanceAC0D0VyF6$deferL_yyF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/LexemeSequence.swift`)

| Change |   Delta |      % |            Time | Samples | Caller                                                    | Location                                                                         |
| -----: | ------: | -----: | --------------: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------------- |
| -22.6% | -7.00ms | 100.0% | 31.0ms → 24.0ms | 31 → 24 | `$s11SwiftParser5LexerO14LexemeSequenceV7advanceAC0D0VyF` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/LexemeSequence.swift` |

##### `$s11SwiftSyntax16BumpPtrAllocatorC23allocateFromCurrentSlab33_61CB623A74FD1871D887FFA45954E6F5LLySwSgSi_SitF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift`)

| Change |   Delta |      % |            Time | Samples | Caller                                                                     | Location                                                                     |
| -----: | ------: | -----: | --------------: | ------: | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| -33.3% | -7.00ms | 100.0% | 21.0ms → 14.0ms | 21 → 14 | `$s11SwiftSyntax16BumpPtrAllocatorC8allocate9byteCount9alignmentSwSi_SitF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift` |

##### `$s11SwiftParser19DeclarationModifierO6lexeme20experimentalFeaturesACSgAA5LexerO6LexemeV_AA0B0V012ExperimentalG0VtcfCTf4ndd_n` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpecSet.swift`)

| Change |   Delta |             % |           Time | Samples | Caller                                                                                                                 | Location                                                                 |
| -----: | ------: | ------------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| -25.0% | -3.00ms | 60.0% → 64.3% | 12.0ms → 9.0ms |  12 → 9 | `$s11SwiftParser19DeclarationModifierO6lexeme20experimentalFeaturesACSgAA5LexerO6LexemeV_AA0B0V012ExperimentalG0VtcfC` | `<unknown>`                                                              |
| -33.3% | -2.00ms | 30.0% → 28.6% |  6.0ms → 4.0ms |   6 → 4 | `$s11SwiftParser19DeclarationModifierO6lexeme20experimentalFeaturesACSgAA5LexerO6LexemeV_AA0B0V012ExperimentalG0VtcfC` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift` |
| -50.0% | -1.00ms |  10.0% → 7.1% |  2.0ms → 1.0ms |   2 → 1 | `$s11SwiftParser19DeclarationModifierO6lexeme20experimentalFeaturesACSgAA5LexerO6LexemeV_AA0B0V012ExperimentalG0VtcfC` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift` |

##### `$s11SwiftParser21ContextualDeclKeywordO6lexeme20experimentalFeaturesACSgAA5LexerO6LexemeV_AA0B0V012ExperimentalH0VtcfCTf4ndd_n` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpecSet.swift`)

|  Change |    Delta |             % |         Time | Samples | Caller                                                                                                                   | Location                                                                 |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| removed | -12.00ms | 100.0% → 0.0% | 12.0ms → 0ms |  12 → 0 | `$s11SwiftParser21ContextualDeclKeywordO6lexeme20experimentalFeaturesACSgAA5LexerO6LexemeV_AA0B0V012ExperimentalH0VtcfC` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift` |
|     new |  +6.00ms | 0.0% → 100.0% |  0ms → 6.0ms |   0 → 6 | `$s11SwiftParser21ContextualDeclKeywordO6lexeme20experimentalFeaturesACSgAA5LexerO6LexemeV_AA0B0V012ExperimentalH0VtcfC` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenSpecSet.swift` |

##### `$s11SwiftSyntax15TokenDiagnosticV9combining_ACSgAE_AEtcfC` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/TokenDiagnostic.swift`)

| Change |   Delta |      % |            Time | Samples | Caller                                                                                                            | Location                                                                 |
| -----: | ------: | -----: | --------------: | ------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| -25.0% | -6.00ms | 100.0% | 24.0ms → 18.0ms | 24 → 18 | `$s11SwiftParser5LexerO6CursorV9nextToken17sourceBufferStart14stateAllocatorAC6LexemeVAE_0A6Syntax07BumpPtrK0CtF` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift` |

##### `0x3e2ef4` (`/usr/lib/swift/linux/libswiftCore.so`)

| Change |    Delta |      % |            Time | Samples | Caller                                                                         | Location                       |
| -----: | -------: | -----: | --------------: | ------: | ------------------------------------------------------------------------------ | ------------------------------ |
| -24.6% | -15.00ms | 100.0% | 61.0ms → 46.0ms | 61 → 46 | `$s7profile11KindCounterC8visitAnyy11SwiftSyntax0g15VisitorContinueB0OAE0G0VF` | `./Sources/profile/main.swift` |

##### `0x3e6648` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change |   Delta |             % |          Time | Samples | Caller                                                                                     | Location    |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| removed | -7.00ms |  18.4% → 0.0% |   7.0ms → 0ms |   7 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `<unknown>` |
| removed | -6.00ms |  15.8% → 0.0% |   6.0ms → 0ms |   6 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF`          | `<unknown>` |
|  -62.5% | -5.00ms | 21.1% → 11.5% | 8.0ms → 3.0ms |   8 → 3 | `$s11SwiftParser5LexerO14LexemeSequenceV7advanceAC0D0VyF6$deferL_yyF`                      | `<unknown>` |
| +133.3% | +4.00ms |  7.9% → 26.9% | 3.0ms → 7.0ms |   3 → 7 | `$s11SwiftParser0B0VWOr`                                                                   | `<unknown>` |
| +100.0% | +2.00ms |  5.3% → 15.4% | 2.0ms → 4.0ms |   2 → 4 | `$s11SwiftParser0B0V9LookaheadVWOr`                                                        | `<unknown>` |

##### `0x3e6304` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change |   Delta |             % |            Time | Samples | Caller                                                                                     | Location                                                                            |
| ------: | ------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
|  -18.2% | -4.00ms | 31.9% → 30.0% | 22.0ms → 18.0ms | 22 → 18 | `$s11SwiftParser0B0V9LookaheadVWOs`                                                        | `<unknown>`                                                                         |
| removed | -4.00ms |   5.8% → 0.0% |     4.0ms → 0ms |   4 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `<unknown>`                                                                         |
| removed | -3.00ms |   4.3% → 0.0% |     3.0ms → 0ms |   3 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
|   +6.5% | +2.00ms | 44.9% → 55.0% | 31.0ms → 33.0ms | 31 → 33 | `$s11SwiftParser0B0VWOs`                                                                   | `<unknown>`                                                                         |
|  +50.0% | +2.00ms |  5.8% → 10.0% |   4.0ms → 6.0ms |   4 → 6 | `$s11SwiftSyntax0B8ProtocolPAAE3rawAA03RawB0Vvg`                                           | `<unknown>`                                                                         |

##### `0x3e69e4` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change |   Delta |             % |        Time | Samples | Caller                                                                            | Location                                                                            |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| removed | -9.00ms | 100.0% → 0.0% | 9.0ms → 0ms |   9 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |

##### `$s11SwiftParser0B0VWOr` (`<unknown>`)

|  Change |   Delta |             % |           Time | Samples | Caller                                                                                                                                   | Location                                                               |
| ------: | ------: | ------------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed | -5.00ms |  17.9% → 0.0% |    5.0ms → 0ms |   5 → 0 | `$s11SwiftParser0B0V19parseParameterNames33_2A07BF7189F78565624DE0BE19FE8761LLAC0dE0AELLVyF`                                             | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Parameters.swift` |
|  -20.0% | -2.00ms | 35.7% → 42.1% | 10.0ms → 8.0ms |  10 → 8 | `$s11SwiftParser0B0V9parseItem33_008C1B0E0A90478841CED0DF9A7053A1LL12isAtTopLevel13allowInitDecl0A6Syntax012RawCodeBlockdT0V0D0OSb_SbtF` | `<unknown>`                                                            |
|  -66.7% | -2.00ms |  10.7% → 5.3% |  3.0ms → 1.0ms |   3 → 1 | `$s11SwiftParser0B0V19isStartOfReturnExpr33_6E0C74828AE17B0892E3EAA0DDDABE24LLSbyF`                                                      | `<unknown>`                                                            |
|  +16.7% | +1.00ms | 21.4% → 36.8% |  6.0ms → 7.0ms |   6 → 7 | `$s11SwiftParser0B0V19parseParameterNames33_2A07BF7189F78565624DE0BE19FE8761LLAC0dE0AELLVyF`                                             | `<unknown>`                                                            |
|  -25.0% | -1.00ms | 14.3% → 15.8% |  4.0ms → 3.0ms |   4 → 3 | `$s11SwiftParser0B0V18parseArgumentLabel0A6Syntax018RawUnexpectedNodesF0VSg_AE0g5TokenF0VtyF`                                            | `<unknown>`                                                            |

##### `0x3e634c` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change |   Delta |             % |          Time | Samples | Caller                                                                                     | Location                                                                            |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| removed | -8.00ms |  36.4% → 0.0% |   8.0ms → 0ms |   8 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -4.00ms |  18.2% → 0.0% |   4.0ms → 0ms |   4 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `<unknown>`                                                                         |
|     new | +3.00ms |  0.0% → 23.1% |   0ms → 3.0ms |   0 → 3 | `$s11SwiftParser0B0VWOs`                                                                   | `<unknown>`                                                                         |
|  -50.0% | -2.00ms | 18.2% → 15.4% | 4.0ms → 2.0ms |   4 → 2 | `$s11SwiftParser5LexerO14LexemeSequenceV7advanceAC0D0VyF`                                  | `<unknown>`                                                                         |
|  +66.7% | +2.00ms | 13.6% → 38.5% | 3.0ms → 5.0ms |   3 → 5 | `$s11SwiftParser0B0V9LookaheadVWOs`                                                        | `<unknown>`                                                                         |

##### `0x430134` (`/usr/lib/swift/linux/libswiftCore.so`)

| Change |   Delta |      % |            Time | Samples | Caller                   | Location    |
| -----: | ------: | -----: | --------------: | ------: | ------------------------ | ----------- |
| -42.9% | -9.00ms | 100.0% | 21.0ms → 12.0ms | 21 → 12 | `$s11SwiftParser0B0VWOr` | `<unknown>` |

##### `0x3e2ea4` (`/usr/lib/swift/linux/libswiftCore.so`)

| Change |   Delta |      % |           Time | Samples | Caller                                                                         | Location                       |
| -----: | ------: | -----: | -------------: | ------: | ------------------------------------------------------------------------------ | ------------------------------ |
| -50.0% | -9.00ms | 100.0% | 18.0ms → 9.0ms |  18 → 9 | `$s7profile11KindCounterC8visitAnyy11SwiftSyntax0g15VisitorContinueB0OAE0G0VF` | `./Sources/profile/main.swift` |

##### `0x42cf48` (`/usr/lib/swift/linux/libswiftCore.so`)

| Change |   Delta |             % |            Time | Samples | Caller     | Location                               |
| -----: | ------: | ------------: | --------------: | ------: | ---------- | -------------------------------------- |
| -21.1% | -4.00ms | 42.2% → 40.5% | 19.0ms → 15.0ms | 19 → 15 | `0x3e2ec7` | `/usr/lib/swift/linux/libswiftCore.so` |
| -15.4% | -4.00ms | 57.8% → 59.5% | 26.0ms → 22.0ms | 26 → 22 | `0x3e2f0f` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `0xa1a44` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |          Time | Samples | Caller                                                                                                                                                                                           | Location                                                               |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| removed | -5.00ms |  45.5% → 0.0% |   5.0ms → 0ms |   5 → 0 | `$s11SwiftParser13TokenConsumerPAAE18atStartOfStatement13allowRecovery10preferExprS2b_SbtFAA0B0V_Tg5`                                                                                            | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Statements.swift` |
|  -80.0% | -4.00ms | 45.5% → 25.0% | 5.0ms → 1.0ms |   5 → 1 | `$s11SwiftParser0B0V13withLookaheadyxxAC0D0VzXElFSb_Tg5`                                                                                                                                         | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lookahead.swift`  |
|     new | +3.00ms |  0.0% → 75.0% |   0ms → 3.0ms |   0 → 3 | `$s11SwiftParser0B0V9LookaheadV7lexemes12currentToken12swiftVersion20experimentalFeaturesAeA5LexerO14LexemeSequenceV_AK0L0VAC0aH0OAC012ExperimentalJ0Vtc33_8B04AB4096AC45820073D65E009E045BLlfC` | `<unknown>`                                                            |
| removed | -1.00ms |   9.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `$s11SwiftParser0B0V13withLookaheadyxxAC0D0VzXElFSb_Tg5`                                                                                                                                         | `<unknown>`                                                            |

##### `$ss22__RawDictionaryStorageC4find_9hashValues10_HashTableV6BucketV6bucket_Sb5foundtx_SitSHRzlF11SwiftSyntax0M4KindO_Tg5` (`<unknown>`)

| Change |    Delta |      % |            Time | Samples | Caller                                                  | Location                       |
| -----: | -------: | -----: | --------------: | ------: | ------------------------------------------------------- | ------------------------------ |
| -37.9% | -11.00ms | 100.0% | 29.0ms → 18.0ms | 29 → 18 | `$sSD_7defaultq_x_q_yXKtciM11SwiftSyntax0C4KindO_SiTg5` | `./Sources/profile/main.swift` |

##### `$ss25isKnownUniquelyReferencedySbxSgzRlzClF11SwiftSyntax0F0V4InfoC_Tg5` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                                              | Location                                                                      |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------------------- | ----------------------------------------------------------------------------- |
| removed | -7.00ms | 100.0% → 0.0% | 7.0ms → 0ms |   7 → 0 | `$s11SwiftSyntax0B11NodeFactoryV7disposeyyAA0B0VzF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxNodeFactory.swift` |

##### `$ss17_NativeDictionaryV8setValue_6forKey8isUniqueyq_n_xSbtF11SwiftSyntax03RawJ0V2IDV_SiTg5` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                                         | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------------------------------- | ----------- |
| removed | -6.00ms | 100.0% → 0.0% | 6.0ms → 0ms |   6 → 0 | `$sSDyq_Sgxcis11SwiftSyntax03RawB0V2IDV_SiTg5` | `<unknown>` |

##### `$sSls11SubSequenceQzRszrlE8popFirst7ElementQzSgyFs5SliceVySRys5UInt8VGG_Tg5` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`)

| Change |   Delta |      % |            Time | Samples | Caller                                                         | Location                                                                 |
| -----: | ------: | -----: | --------------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------------------------ |
| -20.0% | -4.00ms | 100.0% | 20.0ms → 16.0ms | 20 → 16 | `$s11SwiftParser5LexerO6CursorV8PositionV7advances5UInt8VSgyF` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift` |

##### `$sSis35_ExpressibleByBuiltinIntegerLiteralssAAP08_builtindE0xBI_tcfCTW` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`)

|  Change |   Delta |             % |        Time | Samples | Caller                                                             | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------------------ | ----------- |
| removed | -4.00ms | 100.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `$sSUss17FixedWidthIntegerRzrlEyxqd__cSzRd__lufCs6UInt32V_SiTt1g5` | `<unknown>` |

##### `$sSv11SwiftSyntaxE9alignedUp12toMultipleOfSvSi_tF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift`)

| Change |   Delta |      % |          Time | Samples | Caller                                                                                                         | Location                                                                     |
| -----: | ------: | -----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| -75.0% | -3.00ms | 100.0% | 4.0ms → 1.0ms |   4 → 1 | `$s11SwiftSyntax16BumpPtrAllocatorC23allocateFromCurrentSlab33_61CB623A74FD1871D887FFA45954E6F5LLySwSgSi_SitF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/BumpPtrAllocator.swift` |

##### `$sSp4movexyF11SwiftSyntax0C0V4InfoCSg_Tg5` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                                                                                                           | Location                                                                      |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| removed | -3.00ms | 100.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `$s11SwiftSyntax0B14InfoRepository33_144A0750A39B358DE708645CE8EF6248LLV3popAA0B0V0C0CSgyFAJSpySiG_SpyAJGtXEfU_` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxNodeFactory.swift` |

##### `$ss22__RawDictionaryStorageC4findys10_HashTableV6BucketV6bucket_Sb5foundtxSHRzlF11SwiftSyntax0K4KindO_Tg5` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                                                  | Location                       |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------------------------- | ------------------------------ |
| -25.0% | -2.00ms | 100.0% | 8.0ms → 6.0ms |   8 → 6 | `$sSD_7defaultq_x_q_yXKtciM11SwiftSyntax0C4KindO_SiTg5` | `./Sources/profile/main.swift` |

##### `$sSUss17FixedWidthIntegerRzrlEyxqd__cSzRd__lufCs6UInt32V_SiTt1g5` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`)

|  Change |   Delta |             % |        Time | Samples | Caller                                                                         | Location                                                                   |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `$s11SwiftSyntax03RawB8ChildrenV5index_10advancedByAA0bD5IndexVAG_AA0cB0VSgtF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxChildren.swift` |

##### `$ss22_ContiguousArrayBufferV20_consumeAndCreateNew14bufferIsUnique15minimumCapacity13growForAppendAByxGSb_SiSbtF11SwiftParser0Q0V9LookaheadV13SkippingState33_8B04AB4096AC45820073D65E009E045BLLO_Tg5` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                                                                                                                                              | Location    |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `$sSa20_reserveCapacityImpl07minimumB013growForAppendySi_SbtF11SwiftParser0I0V9LookaheadV13SkippingState33_8B04AB4096AC45820073D65E009E045BLLO_Tg5` | `<unknown>` |

##### `$ss17_NativeDictionaryV16_unsafeInsertNew3key5valueyxn_q_ntF11SwiftSyntax03RawI0V2IDV_SiTg5` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                                                                                                        | Location    |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------- | ----------- |
| -33.3% | -1.00ms | 100.0% | 3.0ms → 2.0ms |   3 → 2 | `$ss17_NativeDictionaryV20_copyOrMoveAndResize8capacity12moveElementsySi_SbtF11SwiftSyntax03RawL0V2IDV_SiTg5` | `<unknown>` |

##### `$ss22_ContiguousArrayBufferV20_consumeAndCreateNew14bufferIsUnique15minimumCapacity13growForAppendAByxGSb_SiSbtF11SwiftParser12OperatorLikeO_Tg5Tm` (`Attributes.swift.o`)

|  Change |   Delta |             % |        Time | Samples | Caller                                                                                                                                 | Location    |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `$ss15ContiguousArrayV16_createNewBuffer14bufferIsUnique15minimumCapacity13growForAppendySb_SiSbtF11SwiftParser15TokenPrecedenceO_Tg5` | `<unknown>` |

##### `$ss22_ContiguousArrayBufferV20_consumeAndCreateNew14bufferIsUnique15minimumCapacity13growForAppendAByxGSb_SiSbtFSw_Tg5` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                                                                                   | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------------------------------------------------------------------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `$sSa16_createNewBuffer14bufferIsUnique15minimumCapacity13growForAppendySb_SiSbtFSw_Tg5` | `<unknown>` |

##### `$sSa9_getCountSiyF11SwiftParser0D0V9LookaheadV13SkippingState33_8B04AB4096AC45820073D65E009E045BLLO_Tg5` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                                                                                                   | Location    |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------------------------------------------------------------------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `$sSa8endIndexSivg11SwiftParser0D0V9LookaheadV13SkippingState33_8B04AB4096AC45820073D65E009E045BLLO_Tg5` | `<unknown>` |

##### `$sSa11_getElement_20wasNativeTypeChecked22matchingSubscriptCheckxSi_Sbs16_DependenceTokenVtF11SwiftParser0K10PrecedenceO_Tg5` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                                           | Location    |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------------------ | ----------- |
| -50.0% | -1.00ms | 100.0% | 2.0ms → 1.0ms |   2 → 1 | `$sSayxSicir11SwiftParser15TokenPrecedenceO_Tg5` | `<unknown>` |

##### `$sSlsE3mapySayqd__Gqd__7ElementQzqd_0_YKXEqd_0_YKs5ErrorRd_0_r0_lFSay11SwiftSyntax08RawTokenE0VG_AF0f17TypeSpecifierListE0VACOs5NeverOTg504$s11d17Parser0B0V22parseh82AttributeList19misplacedSpecifiers0A6Syntax03Rawd9SpecifierfI0V10specifiers_AF0jefw24V10attributestSgSayAF0j5gw8VG_tFAH7B8OAOXEfU_0D6Parser6ParserVTf1cn_n` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                                                                                                                                                   | Location                                                          |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `$s11SwiftParser0B0V22parseTypeAttributeList19misplacedSpecifiers0A6Syntax03Rawd9SpecifierfI0V10specifiers_AF0jefI0V10attributestSgSayAF0j5TokenI0VG_tF` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Types.swift` |

##### `$sSa36_reserveCapacityAssumingUniqueBuffer8oldCountySi_tF11SwiftSyntax017RawSwitchCaseItemI0V_Tg5` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                                                     | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------------------------------------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `$sSa6appendyyxnF11SwiftSyntax017RawSwitchCaseItemC0V_Tg5` | `<unknown>` |

##### `$ss9OptionSetPs7ElementQzRszrlE6insertySb8inserted_x17memberAfterInserttxF11SwiftSyntax012RecursiveRawJ5FlagsV_Tg5` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Location                                                                  |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a8Syntax09c58IfExprB0V_9ifKeyword_10conditions_4body_04elseG0_0J4Body_5n22AcA0c15UnexpectedNodesw14VSg_AA0c5Tokenw28VAlA0c20ConditionElementListw16VAlA0c9CodeBlockw26VAlNSgAlC04ElseK0OSgAlA0B5r14ChtcfcySryAA0cW9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VAsA0c20ConditionElementListB0VAsA0c9CodeBlockB0VAsUSgAsA0cuvB0V8ElseBodyOSgASTf1nnnncn_nTf4nnnndnnnnnnnnnnn_n` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift` |

##### `$sSHsE13_rawHashValue4seedS2i_tF11SwiftSyntax0F4KindO_Tgq5` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                                                      | Location    |
| -----: | ------: | -----: | ------------: | ------: | ----------------------------------------------------------- | ----------- |
| -33.3% | -1.00ms | 100.0% | 3.0ms → 2.0ms |   3 → 2 | `$s11SwiftSyntax0B4KindOSHAASH13_rawHashValue4seedS2i_tFTW` | `<unknown>` |

##### `$sSa6appendyyxnF11SwiftSyntax017RawPatternBindingC0V_Tg5` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                                                                                                                                            | Location                                                                 |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `$s11SwiftParser0B0V23parseBindingDeclaration__16inMemberDeclList0A6Syntax011RawVariablehJ0VAC0H10AttributesV_AA25RecoveryConsumptionHandleVSbtF` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

##### Ours

| Change |     Delta |             % |          Time |       Samples | Function                                                                                                                                                                                                              | Location                                                                                   |
| -----: | --------: | ------------: | ------------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
|    new |   +3.767s |  0.0% → 72.1% |   0ms → 3.76s |     0 → 3,767 | `$s11SwiftParser15SyntaxParseablePAAE5parse33_A2E5EEB4E7271C1F548910D9ED42E2EBLL4fromADxAA0B0Vz_qd__AHzXEt0aC003RawC12NodeProtocolRd__lFZAI010SourceFileC0V_AI0qtuC0VTt2g5`                                           | `./.build/checkouts/swift-syntax/Sources/SwiftParser/generated/LayoutNodes+Parsable.swift` |
|    new |   +3.764s |  0.0% → 72.0% |   0ms → 3.76s |     0 → 3,764 | `$s11SwiftSyntax010SourceFileB0V0A6ParserE5parse4fromAcD0E0Vz_tFZAA03RawcdB0VAHzXEfU_`                                                                                                                                | `./.build/checkouts/swift-syntax/Sources/SwiftParser/generated/LayoutNodes+Parsable.swift` |
|    new |   +3.718s |  0.0% → 71.1% |   0ms → 3.71s |     0 → 3,718 | `$s11SwiftParser0B0V16parseDeclaration2in0A6Syntax07RawDeclF0VAC0D12ParseContextO_tF`                                                                                                                                 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift`                   |
|    new |   +1.374s |  0.0% → 26.3% |   0ms → 1.37s |     0 → 1,374 | `$s11SwiftParser0B0V23parseBindingDeclaration__2in0A6Syntax015RawVariableDeclG0VAC0J10AttributesV_AA25RecoveryConsumptionHandleVAC0E12ParseContextOtF`                                                                | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift`                   |
|    new | +940.00ms |  0.0% → 18.0% | 0ms → 940.0ms |       0 → 940 | `$s11SwiftSyntax0B7VisitorC015visitSourceFileB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                                                                    | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
|    new | +938.00ms |  0.0% → 17.9% | 0ms → 938.0ms |       0 → 938 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                                                                             | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
|    new | +937.00ms |  0.0% → 17.9% | 0ms → 937.0ms |       0 → 937 | `$s11SwiftSyntax0B7VisitorC018visitCodeBlockItemB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                                                                 | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
|    new | +937.00ms |  0.0% → 17.9% | 0ms → 937.0ms |       0 → 937 | `$s11SwiftSyntax0B7VisitorC022visitCodeBlockItemListB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                                                             | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
|    new | +816.00ms |  0.0% → 15.6% | 0ms → 816.0ms |       0 → 816 | `$s11SwiftSyntax0B7VisitorC016visitMemberBlockB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                                                                   | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
|    new | +812.00ms |  0.0% → 15.5% | 0ms → 812.0ms |       0 → 812 | `$s11SwiftSyntax0B7VisitorC024visitMemberBlockItemListB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                                                           | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
|    new | +809.00ms |  0.0% → 15.5% | 0ms → 809.0ms |       0 → 809 | `$s11SwiftSyntax0B7VisitorC020visitMemberBlockItemB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                                                               | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
|    new | +548.00ms |  0.0% → 10.5% | 0ms → 548.0ms |       0 → 548 | `$s11SwiftSyntax0B7VisitorC014visitCodeBlockB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                                                                     | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |
| +15.3% | +500.00ms | 65.9% → 72.1% | 3.26s → 3.76s | 3,267 → 3,767 | `$s11SwiftSyntax010SourceFileB0V0A6ParserE5parse4fromAcD0E0Vz_tFZ`                                                                                                                                                    | `./.build/checkouts/swift-syntax/Sources/SwiftParser/generated/LayoutNodes+Parsable.swift` |
| +15.3% | +499.00ms | 65.8% → 72.0% | 3.26s → 3.76s | 3,265 → 3,764 | `$s11SwiftParser0B0V15parseSourceFile0A6Syntax03RawdeF0VyF`                                                                                                                                                           | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`                       |
| +15.2% | +497.00ms | 65.8% → 71.9% | 3.26s → 3.76s | 3,264 → 3,761 | `$s11SwiftParser0B0V22parseCodeBlockItemList12isAtTopLevel13allowInitDecl5until0A6Syntax03RawdefgP0VSb_S2bACzXEtF04$s11a9Syntax017defg6B0V0A6b35E5parse4fromAcD0G0Vz_tFZAA03RawcdefT19VAHzXEfU_SbAHzXEfU_Tf1nncn_nTm` | `Attributes.swift.o`                                                                       |
| +15.2% | +497.00ms | 65.8% → 71.9% | 3.26s → 3.76s | 3,264 → 3,761 | `$s11SwiftParser0B0V27parseTopLevelCodeBlockItems0A6Syntax03Rawfg8ItemListI0VyF`                                                                                                                                      | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`                       |
| +15.1% | +495.00ms | 66.2% → 72.2% | 3.28s → 3.77s | 3,282 → 3,777 | `$s11SwiftParser0B0V5parse6source0A6Syntax010SourceFileE0VSS_tFZ`                                                                                                                                                     | `./.build/checkouts/swift-syntax/Sources/SwiftParser/ParseSourceFile.swift`                |
| +15.1% | +492.00ms | 65.8% → 71.8% | 3.26s → 3.75s | 3,263 → 3,755 | `$s11SwiftParser0B0V18parseCodeBlockItem12isAtTopLevel13allowInitDecl0A6Syntax03RawdefN0VSgSb_SbtF`                                                                                                                   | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`                       |
| +15.0% | +488.00ms | 65.7% → 71.7% | 3.25s → 3.74s | 3,259 → 3,747 | `$s11SwiftParser0B0V9parseItem33_008C1B0E0A90478841CED0DF9A7053A1LL12isAtTopLevel13allowInitDecl0A6Syntax012RawCodeBlockdT0V0D0OSb_SbtF`                                                                              | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`                       |
|    new | +451.00ms |   0.0% → 8.6% | 0ms → 451.0ms |       0 → 451 | `$s11SwiftSyntax0B7VisitorC015visitStructDeclB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`                                                                                                                    | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`        |

##### Native

|  Change |     Delta |           % |              Time |       Samples | Function                                                                                                                                                                                                                                                                                                                                                                                                                                     | Location                               |
| ------: | --------: | ----------: | ----------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
|   +5.4% | +247.00ms |       92.2% |     4.57s → 4.81s | 4,572 → 4,819 | `0x284c3`                                                                                                                                                                                                                                                                                                                                                                                                                                    | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|   +5.4% | +247.00ms |       92.2% |     4.57s → 4.81s | 4,572 → 4,819 | `0x28597`                                                                                                                                                                                                                                                                                                                                                                                                                                    | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|   +5.4% | +247.00ms |       92.2% |     4.57s → 4.81s | 4,572 → 4,819 | `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                     | `<unknown>`                            |
| +160.3% | +117.00ms | 1.5% → 3.6% |  73.0ms → 190.0ms |      73 → 190 | `0x3e564b`                                                                                                                                                                                                                                                                                                                                                                                                                                   | `/usr/lib/swift/linux/libswiftCore.so` |
| +159.7% | +115.00ms | 1.5% → 3.6% |  72.0ms → 187.0ms |      72 → 187 | `0x985eb`                                                                                                                                                                                                                                                                                                                                                                                                                                    | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +144.7% | +110.00ms | 1.5% → 3.6% |  76.0ms → 186.0ms |      76 → 186 | `0x966ab`                                                                                                                                                                                                                                                                                                                                                                                                                                    | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +180.0% | +108.00ms | 1.2% → 3.2% |  60.0ms → 168.0ms |      60 → 168 | `0x95968`                                                                                                                                                                                                                                                                                                                                                                                                                                    | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |  +87.00ms | 0.0% → 1.7% |      0ms → 87.0ms |        0 → 87 | `$s11SwiftSyntax0B9DataArenaCfD`                                                                                                                                                                                                                                                                                                                                                                                                             | `<unknown>`                            |
|     new |  +80.00ms | 0.0% → 1.5% |      0ms → 80.0ms |        0 → 80 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ`                                                                                                                                                                                                                                                                             | `<unknown>`                            |
|     new |  +70.00ms | 0.0% → 1.3% |      0ms → 70.0ms |        0 → 70 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax020c48DeclReferenceExprB0V_8baseName_13argumentNames_5n22AcA0c15UnexpectedNodesx14VSg_AA0c5Tokenx18VAiA0cdh9Argumentsx10VSgAiA0cB5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VAsA0cuz9ArgumentsB0VSgASTf1nnnncn_n`                       | `<unknown>`                            |
|  +51.6% |  +64.00ms | 2.5% → 3.6% | 124.0ms → 188.0ms |     124 → 188 | `$s11SwiftParser0B0V9LookaheadVWOs`                                                                                                                                                                                                                                                                                                                                                                                                          | `<unknown>`                            |
|     new |  +59.00ms | 0.0% → 1.1% |      0ms → 59.0ms |        0 → 59 | `$s11SwiftParser0B0V30parseSequenceExpressionElement6flavor7pattern0A6Syntax07RawExprI0VAC0K6FlavorO_AC14PatternContextOtF`                                                                                                                                                                                                                                                                                                                  | `<unknown>`                            |
|     new |  +57.00ms | 0.0% → 1.1% |      0ms → 57.0ms |        0 → 57 | `$s11SwiftSyntax010ParsingRawB5ArenaCfd`                                                                                                                                                                                                                                                                                                                                                                                                     | `<unknown>`                            |
|     new |  +55.00ms | 0.0% → 1.1% |      0ms → 55.0ms |        0 → 55 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax019c45MemberAccessExprB0V_4base_6period_8declName_5n22AcA0c15UnexpectedNodesx9VSg_AA0cfx14VSgAjA0c5Tokenx22VAjA0c13DeclReferencefx8VAjA0cB5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0cwB0VSgAsA0c5TokenB0VAsA0c13DeclReferencewB0VASTf1nnnncn_n` | `<unknown>`                            |
|  +27.5% |  +52.00ms | 3.8% → 4.6% | 189.0ms → 241.0ms |     189 → 241 | `$s11SwiftParser0B0V21parseTrailingClosures6flavor0A6Syntax014RawClosureExprG0V_AF0h8Multipledi11ElementListG0VtAC0J6FlavorO_tF`                                                                                                                                                                                                                                                                                                             | `<unknown>`                            |
|  +79.7% |  +47.00ms | 1.2% → 2.0% |  59.0ms → 106.0ms |      59 → 106 | `0x3e812f`                                                                                                                                                                                                                                                                                                                                                                                                                                   | `/usr/lib/swift/linux/libswiftCore.so` |
|  +78.0% |  +46.00ms | 1.2% → 2.0% |  59.0ms → 105.0ms |      59 → 105 | `0x3e7633`                                                                                                                                                                                                                                                                                                                                                                                                                                   | `/usr/lib/swift/linux/libswiftCore.so` |
| +112.2% |  +46.00ms | 0.8% → 1.7% |   41.0ms → 87.0ms |       41 → 87 | `profile_main`                                                                                                                                                                                                                                                                                                                                                                                                                               | `<unknown>`                            |
| +104.7% |  +45.00ms | 0.9% → 1.7% |   43.0ms → 88.0ms |       43 → 88 | `0xe3304`                                                                                                                                                                                                                                                                                                                                                                                                                                    | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +104.7% |  +45.00ms | 0.9% → 1.7% |   43.0ms → 88.0ms |       43 → 88 | `0xe8df7`                                                                                                                                                                                                                                                                                                                                                                                                                                    | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### Standard library

|  Change |     Delta |            % |             Time |  Samples | Function                                                                                                                                                                        | Location                                                                                  |
| ------: | --------: | -----------: | ---------------: | -------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| +163.0% | +119.00ms |  1.5% → 3.7% | 73.0ms → 192.0ms | 73 → 192 | `$sSw8allocate9byteCount9alignmentSwSi_SitFZ`                                                                                                                                   | `<unknown>`                                                                               |
|     new |  +47.00ms |  0.0% → 0.9% |     0ms → 47.0ms |   0 → 47 | `$sSpsRi_zrlE10initialize2toyxn_tF11SwiftSyntax0D4DataV_Tg5`                                                                                                                    | `<unknown>`                                                                               |
|     new |  +23.00ms |  0.0% → 0.4% |     0ms → 23.0ms |   0 → 23 | `$sSR8IteratorV4nextxSgyF11SwiftSyntax03RawD0VSg_Tg5`                                                                                                                           | `<unknown>`                                                                               |
| +110.0% |  +22.00ms |  0.4% → 0.8% |  20.0ms → 42.0ms |  20 → 42 | `$sSw10deallocateyyF`                                                                                                                                                           | `<unknown>`                                                                               |
|     new |  +21.00ms |  0.0% → 0.4% |     0ms → 21.0ms |   0 → 21 | `$sSR8IteratorV4nextxSgyF11SwiftSyntax21ArenaAllocatedPointerVyAE0D4DataVGSg_Tg5`                                                                                               | `<unknown>`                                                                               |
|  +38.1% |  +16.00ms |  0.8% → 1.1% |  42.0ms → 58.0ms |  42 → 58 | `$ss7UnicodeO6ScalarV11SwiftParserE17testCharacterInfo33_CBBF9FEF132CFB2EFF7837FA6BCFF520LLySbSJAEE0G0AGLLVF`                                                                   | `./.build/checkouts/swift-syntax/Sources/SwiftParser/CharacterInfo.swift`                 |
|  +40.0% |  +10.00ms |  0.5% → 0.7% |  25.0ms → 35.0ms |  25 → 35 | `$sSpsRi_zrlE10initialize2toyxn_tF11SwiftSyntax03RawD4DataV_Tg5`                                                                                                                | `<unknown>`                                                                               |
|  +47.4% |   +9.00ms |  0.4% → 0.5% |  19.0ms → 28.0ms |  19 → 28 | `$sSp10initialize9repeating5countyx_SitF11SwiftSyntax03RawE0VSg_Tg5`                                                                                                            | `<unknown>`                                                                               |
|  +47.4% |   +9.00ms |  0.4% → 0.5% |  19.0ms → 28.0ms |  19 → 28 | `$sSr10initialize9repeatingyx_tF11SwiftSyntax03RawD0VSg_Tg5`                                                                                                                    | `<unknown>`                                                                               |
|     new |   +9.00ms |  0.0% → 0.2% |      0ms → 9.0ms |    0 → 9 | `$sSpsRi_zrlE10initialize2toyxn_tF11SwiftSyntax21ArenaAllocatedPointerVyAC0D4DataVGSg_Tg5`                                                                                      | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntaxLayoutView.swift`       |
|     new |   +7.00ms |  0.0% → 0.1% |      0ms → 7.0ms |    0 → 7 | `$sSlsEy11SubSequenceQzys15UnboundedRange_OXEcigSRys5UInt8VG_Tg5`                                                                                                               | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`                  |
| +100.0% |   +6.00ms |  0.1% → 0.2% |   6.0ms → 12.0ms |   6 → 12 | `$ss22_ContiguousArrayBufferV20_consumeAndCreateNew14bufferIsUnique15minimumCapacity13growForAppendAByxGSb_SiSbtF11SwiftSyntax027RawStringLiteralSegmentListQ0V7ElementO_Tg5Tm` | `Attributes.swift.o`                                                                      |
| +100.0% |   +4.00ms |  0.1% → 0.2% |    4.0ms → 8.0ms |    4 → 8 | `$sSa6append10contentsOfyqd__n_t7ElementQyd__RszSTRd__lF11SwiftSyntax03RawF0V_SayAGGTg5`                                                                                        | `<unknown>`                                                                               |
|  +50.0% |   +4.00ms |         0.2% |   8.0ms → 12.0ms |   8 → 12 | `$sSR8IteratorV4nextxSgyF11SwiftSyntax03RawD0VSg_Tg5`                                                                                                                           | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`                 |
| +100.0% |   +4.00ms |  0.1% → 0.2% |    4.0ms → 8.0ms |    4 → 8 | `$sSa6appendyyxnFSw_Tg5`                                                                                                                                                        | `<unknown>`                                                                               |
|  +37.5% |   +3.00ms |         0.2% |   8.0ms → 11.0ms |   8 → 11 | `$ss7UnicodeO6ScalarV11SwiftParserE22isAsciiIdentifierStartSbvg`                                                                                                                | `./.build/checkouts/swift-syntax/Sources/SwiftParser/CharacterInfo.swift`                 |
|  +37.5% |   +3.00ms |         0.2% |   8.0ms → 11.0ms |   8 → 11 | `$ss7UnicodeO6ScalarV11SwiftParserE31isValidIdentifierStartCodePointSbvg`                                                                                                       | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/UnicodeScalarExtensions.swift` |
| +150.0% |   +3.00ms | <0.1% → 0.1% |    2.0ms → 5.0ms |    2 → 5 | `$sSa034_makeUniqueAndReserveCapacityIfNotB0yyF11SwiftSyntax027RawStringLiteralSegmentListI0V7ElementO_Tg5`                                                                     | `<unknown>`                                                                               |
|  +75.0% |   +3.00ms |         0.1% |    4.0ms → 7.0ms |    4 → 7 | `$sSa6append10contentsOfyqd__n_t7ElementQyd__RszSTRd__lF11SwiftSyntax020RawTypeSpecifierListF0VACO_SayAHGTg5`                                                                   | `<unknown>`                                                                               |
|  +75.0% |   +3.00ms |         0.1% |    4.0ms → 7.0ms |    4 → 7 | `$sSa2peoiyySayxGz_ABtFZ11SwiftSyntax020RawTypeSpecifierListC0V7ElementO_Tt1g5`                                                                                                 | `<unknown>`                                                                               |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

##### Ours

|  Change |     Delta |            % |          Time |   Samples | Function                                                                                                                                                              | Location                                                                            |
| ------: | --------: | -----------: | ------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| removed |   -3.220s | 64.9% → 0.0% |   3.22s → 0ms | 3,220 → 0 | `$s11SwiftParser0B0V16parseDeclaration16inMemberDeclList0A6Syntax03RawgI0VSb_tF`                                                                                      | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift`            |
| removed |   -1.240s | 25.0% → 0.0% |   1.24s → 0ms | 1,240 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF`                                                                                     | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed |   -1.240s | 25.0% → 0.0% |   1.24s → 0ms | 1,240 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF`                                                                            | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed |   -1.240s | 25.0% → 0.0% |   1.24s → 0ms | 1,240 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA017CodeBlockItemListB0V_Tt0g5`   | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed |   -1.240s | 25.0% → 0.0% |   1.24s → 0ms | 1,240 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA010SourceFileB0V_Tt0g5`          | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed |   -1.236s | 24.9% → 0.0% |   1.23s → 0ms | 1,236 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA013CodeBlockItemB0V_Tt0g5`       | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed |   -1.186s | 23.9% → 0.0% |   1.18s → 0ms | 1,186 → 0 | `$s11SwiftParser0B0V23parseBindingDeclaration__16inMemberDeclList0A6Syntax011RawVariablehJ0VAC0H10AttributesV_AA25RecoveryConsumptionHandleVSbtF`                     | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift`            |
| removed |   -1.080s | 21.8% → 0.0% |   1.08s → 0ms | 1,080 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA011MemberBlockB0V_Tt0g5`         | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed |   -1.077s | 21.7% → 0.0% |   1.07s → 0ms | 1,077 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA019MemberBlockItemListB0V_Tt0g5` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed |   -1.068s | 21.5% → 0.0% |   1.06s → 0ms | 1,068 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA015MemberBlockItemB0V_Tt0g5`     | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -765.00ms | 15.4% → 0.0% | 765.0ms → 0ms |   765 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA09CodeBlockB0V_Tt0g5`            | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -581.00ms | 11.7% → 0.0% | 581.0ms → 0ms |   581 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA016FunctionCallExprB0V_Tt0g5`    | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -574.00ms | 11.6% → 0.0% | 574.0ms → 0ms |   574 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA010StructDeclB0V_Tt0g5`          | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -511.00ms | 10.3% → 0.0% | 511.0ms → 0ms |   511 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA012VariableDeclB0V_Tt0g5`        | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -504.00ms | 10.2% → 0.0% | 504.0ms → 0ms |   504 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA012FunctionDeclB0V_Tt0g5`        | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -461.00ms |  9.3% → 0.0% | 461.0ms → 0ms |   461 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA018PatternBindingListB0V_Tt0g5`  | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -452.00ms |  9.1% → 0.0% | 452.0ms → 0ms |   452 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA014PatternBindingB0V_Tt0g5`      | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -365.00ms |  7.4% → 0.0% | 365.0ms → 0ms |   365 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA014ExpressionStmtB0V_Tt0g5`      | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -361.00ms |  7.3% → 0.0% | 361.0ms → 0ms |   361 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA015LabeledExprListB0V_Tt0g5`     | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -358.00ms |  7.2% → 0.0% | 358.0ms → 0ms |   358 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA013ExtensionDeclB0V_Tt0g5`       | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |

##### Native

|  Change |     Delta |             % |              Time |   Samples | Function                                                                                                                                                                                                                                                                                                                                                                                                                                   | Location                               |
| ------: | --------: | ------------: | ----------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------- |
| removed | -119.00ms |   2.4% → 0.0% |     119.0ms → 0ms |   119 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF`                                                                                                                                                                                                                                                                                                                                                 | `<unknown>`                            |
| removed | -103.00ms |   2.1% → 0.0% |     103.0ms → 0ms |   103 → 0 | `0x3e69e0`                                                                                                                                                                                                                                                                                                                                                                                                                                 | `/usr/lib/swift/linux/libswiftCore.so` |
| removed |  -69.00ms |   1.4% → 0.0% |      69.0ms → 0ms |    69 → 0 | `0x430244`                                                                                                                                                                                                                                                                                                                                                                                                                                 | `/usr/lib/swift/linux/libswiftCore.so` |
| removed |  -64.00ms |   1.3% → 0.0% |      64.0ms → 0ms |    64 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax020c48DeclReferenceExprB0V_8baseName_13argumentNames_5n22AcA0c15UnexpectedNodesx14VSg_AA0c5Tokenx18VAiA0cdh9Argumentsx9VSgAiA0B5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VAsA0cuz9ArgumentsB0VSgASTf1nnnncn_n`                        | `<unknown>`                            |
| removed |  -59.00ms |   1.2% → 0.0% |      59.0ms → 0ms |    59 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ`                                                                                                                                                                                                                                                                            | `<unknown>`                            |
| removed |  -53.00ms |   1.1% → 0.0% |      53.0ms → 0ms |    53 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax019c45MemberAccessExprB0V_4base_6period_8declName_5n22AcA0c15UnexpectedNodesx9VSg_AA0cfx14VSgAjA0c5Tokenx22VAjA0c13DeclReferencefx7VAjA0B5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0cwB0VSgAsA0c5TokenB0VAsA0c13DeclReferencewB0VASTf1nnnncn_n` | `<unknown>`                            |
| removed |  -43.00ms |   0.9% → 0.0% |      43.0ms → 0ms |    43 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzFAA0bC12ContinueKindOAA017DeclReferenceExprB0VcACYbcfu263_AiKcfu264_`                                                                                                                                                                                                                                                                                       | `<unknown>`                            |
| removed |  -43.00ms |   0.9% → 0.0% |      43.0ms → 0ms |    43 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzFAA0bC12ContinueKindOAA017DeclReferenceExprB0VcACYbcfu263_AiKcfu264_TA`                                                                                                                                                                                                                                                                                     | `<unknown>`                            |
| removed |  -43.00ms |   0.9% → 0.0% |      43.0ms → 0ms |    43 → 0 | `$s11SwiftSyntax017DeclReferenceExprB0VAA0B19VisitorContinueKindOIggd_AcEIegnd_TR`                                                                                                                                                                                                                                                                                                                                                         | `<unknown>`                            |
| removed |  -41.00ms |   0.8% → 0.0% |      41.0ms → 0ms |    41 → 0 | `$s11SwiftSyntax07ParsingB5ArenaCfd`                                                                                                                                                                                                                                                                                                                                                                                                       | `<unknown>`                            |
| removed |  -41.00ms |   0.8% → 0.0% |      41.0ms → 0ms |    41 → 0 | `$s11SwiftSyntax0B0V4InfoCfD`                                                                                                                                                                                                                                                                                                                                                                                                              | `<unknown>`                            |
| removed |  -40.00ms |   0.8% → 0.0% |      40.0ms → 0ms |    40 → 0 | `0x3e6994`                                                                                                                                                                                                                                                                                                                                                                                                                                 | `/usr/lib/swift/linux/libswiftCore.so` |
|  -20.1% |  -36.00ms |   3.6% → 2.7% | 179.0ms → 143.0ms | 179 → 143 | `0x3e62dc`                                                                                                                                                                                                                                                                                                                                                                                                                                 | `/usr/lib/swift/linux/libswiftCore.so` |
| removed |  -31.00ms |   0.6% → 0.0% |      31.0ms → 0ms |    31 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF`                                                                                                                                                                                                                                                                                                                                                          | `<unknown>`                            |
| removed |  -27.00ms |   0.5% → 0.0% |      27.0ms → 0ms |    27 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzFAA0bC12ContinueKindOAA011LabeledExprB0VcACYbcfu623_AiKcfu624_`                                                                                                                                                                                                                                                                                             | `<unknown>`                            |
| removed |  -27.00ms |   0.5% → 0.0% |      27.0ms → 0ms |    27 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzFAA0bC12ContinueKindOAA011LabeledExprB0VcACYbcfu623_AiKcfu624_TA`                                                                                                                                                                                                                                                                                           | `<unknown>`                            |
| removed |  -27.00ms |   0.5% → 0.0% |      27.0ms → 0ms |    27 → 0 | `$s11SwiftSyntax011LabeledExprB0VAA0B19VisitorContinueKindOIggd_AcEIegnd_TR`                                                                                                                                                                                                                                                                                                                                                               | `<unknown>`                            |
|  -67.7% |  -21.00ms |   0.6% → 0.2% |   31.0ms → 10.0ms |   31 → 10 | `0x47f088`                                                                                                                                                                                                                                                                                                                                                                                                                                 | `/usr/lib/swift/linux/libswiftCore.so` |
|  -23.2% |  -19.00ms |   1.7% → 1.2% |   82.0ms → 63.0ms |   82 → 63 | `0x4301f4`                                                                                                                                                                                                                                                                                                                                                                                                                                 | `/usr/lib/swift/linux/libswiftCore.so` |
|   -3.5% |  -19.00ms | 10.9% → 10.0% | 541.0ms → 522.0ms | 541 → 522 | `$s11SwiftParser0B0VAA13TokenConsumerA2aDP010consumeAnyC00C0QzyFTW`                                                                                                                                                                                                                                                                                                                                                                        | `<unknown>`                            |

##### Standard library

|  Change |    Delta |            % |              Time |   Samples | Function                                                                                                                                                       | Location                                                                                  |
| ------: | -------: | -----------: | ----------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| removed | -82.00ms |  1.7% → 0.0% |      82.0ms → 0ms |    82 → 0 | `$ss25isKnownUniquelyReferencedySbxSgzRlzClF11SwiftSyntax0F0V4InfoC_Tg5`                                                                                       | `<unknown>`                                                                               |
|  -17.4% | -19.00ms |  2.2% → 1.7% |  109.0ms → 90.0ms |  109 → 90 | `$sSD_7defaultq_x_q_yXKtciM11SwiftSyntax0C4KindO_SiTg5`                                                                                                        | `./Sources/profile/main.swift`                                                            |
|  -10.7% | -13.00ms |  2.4% → 2.1% | 121.0ms → 108.0ms | 121 → 108 | `$ss7UnicodeO6ScalarV11SwiftParserE6lexing7advance4peekADSgs5UInt8VSgyXE_ALyXEtFZ`                                                                             | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/UnicodeScalarExtensions.swift` |
|  -37.9% | -11.00ms |  0.6% → 0.3% |   29.0ms → 18.0ms |   29 → 18 | `$ss22__RawDictionaryStorageC4find_9hashValues10_HashTableV6BucketV6bucket_Sb5foundtx_SitSHRzlF11SwiftSyntax0M4KindO_Tg5`                                      | `<unknown>`                                                                               |
|  -41.2% |  -7.00ms |  0.3% → 0.2% |   17.0ms → 10.0ms |   17 → 10 | `$sSa034_makeUniqueAndReserveCapacityIfNotB0yyF11SwiftSyntax014RawLabeledExprI0V_Tg5`                                                                          | `<unknown>`                                                                               |
|  -30.0% |  -6.00ms |  0.4% → 0.3% |   20.0ms → 14.0ms |   20 → 14 | `$ss17_NativeDictionaryV8setValue_6forKey8isUniqueyq_n_xSbtF11SwiftSyntax03RawJ0V2IDV_SiTg5`                                                                   | `<unknown>`                                                                               |
|  -27.3% |  -6.00ms |  0.4% → 0.3% |   22.0ms → 16.0ms |   22 → 16 | `$sSDyq_Sgxcis11SwiftSyntax03RawB0V2IDV_SiTg5`                                                                                                                 | `<unknown>`                                                                               |
|  -30.0% |  -6.00ms |  0.4% → 0.3% |   20.0ms → 14.0ms |   20 → 14 | `$sSa6appendyyxnF11SwiftSyntax014RawLabeledExprC0V_Tg5`                                                                                                        | `<unknown>`                                                                               |
|  -33.3% |  -5.00ms |  0.3% → 0.2% |   15.0ms → 10.0ms |   15 → 10 | `$sSS8withUTF8yxxSRys5UInt8VGKXEKlF11SwiftParser0E0V_Tg5`                                                                                                      | `<unknown>`                                                                               |
|  -20.0% |  -4.00ms |  0.4% → 0.3% |   20.0ms → 16.0ms |   20 → 16 | `$sSls11SubSequenceQzRszrlE8popFirst7ElementQzSgyFs5SliceVySRys5UInt8VGG_Tg5`                                                                                  | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift`                  |
|  -44.4% |  -4.00ms |  0.2% → 0.1% |     9.0ms → 5.0ms |     9 → 5 | `$sSa6appendyyxnF11SwiftSyntax07RawExprC0V_Tg5`                                                                                                                | `<unknown>`                                                                               |
| removed |  -4.00ms |  0.1% → 0.0% |       4.0ms → 0ms |     4 → 0 | `$sSis35_ExpressibleByBuiltinIntegerLiteralssAAP08_builtindE0xBI_tcfCTW`                                                                                       | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`                 |
| removed |  -4.00ms |  0.1% → 0.0% |       4.0ms → 0ms |     4 → 0 | `$sSUss17FixedWidthIntegerRzrlEyxqd__cSzRd__lufCs6UInt32V_SiTt1g5`                                                                                             | `<unknown>`                                                                               |
| removed |  -4.00ms |  0.1% → 0.0% |       4.0ms → 0ms |     4 → 0 | `$ss13ManagedBufferCsRi__rlE25withUnsafeMutablePointersyqd_0_qd_0_SpyxG_Spyq_Gtqd__YKXEqd__YKs5ErrorRd__Ri_d_0_r0_lFSi_11SwiftSyntax0I0V4InfoCSgs5NeverOytTg5` | `<unknown>`                                                                               |
|  -44.4% |  -4.00ms |  0.2% → 0.1% |     9.0ms → 5.0ms |     9 → 5 | `$sSp10initialize4from5countySPyxG_SitFs5UInt8V_Tg5`                                                                                                           | `<unknown>`                                                                               |
|  -44.4% |  -4.00ms |  0.2% → 0.1% |     9.0ms → 5.0ms |     9 → 5 | `$sSR13_copyContents12initializingSR8IteratorVyx_G_SitSryxG_tFs5UInt8V_Tg5`                                                                                    | `<unknown>`                                                                               |
|  -44.4% |  -4.00ms |  0.2% → 0.1% |     9.0ms → 5.0ms |     9 → 5 | `$sSRyxGSTsST13_copyContents12initializing8IteratorQz_SitSry7ElementQzG_tFTWs5UInt8V_Tg5`                                                                      | `<unknown>`                                                                               |
|  -44.4% |  -4.00ms |  0.2% → 0.1% |     9.0ms → 5.0ms |     9 → 5 | `$sSr10initialize4from8IteratorQyd___Sitqd___t7ElementQyd__RszSTRd__lFs5UInt8V_SRyAHGTg5`                                                                      | `<unknown>`                                                                               |
|  -66.7% |  -4.00ms | 0.1% → <0.1% |     6.0ms → 2.0ms |     6 → 2 | `$sSa6appendyyxnF11SwiftSyntax017RawPatternBindingC0V_Tg5`                                                                                                     | `<unknown>`                                                                               |
|  -60.0% |  -3.00ms | 0.1% → <0.1% |     5.0ms → 2.0ms |     5 → 2 | `$ss17_NativeDictionaryV20_copyOrMoveAndResize8capacity12moveElementsySi_SbtF11SwiftSyntax03RawL0V2IDV_SiTg5`                                                  | `<unknown>`                                                                               |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `$s11SwiftParser15SyntaxParseablePAAE5parse33_A2E5EEB4E7271C1F548910D9ED42E2EBLL4fromADxAA0B0Vz_qd__AHzXEt0aC003RawC12NodeProtocolRd__lFZAI010SourceFileC0V_AI0qtuC0VTt2g5` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/generated/LayoutNodes+Parsable.swift`)

| Change |   Delta |            % |        Time |   Samples | Callee                                                                                                     | Location                                                                                   |
| -----: | ------: | -----------: | ----------: | --------: | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
|    new | +3.764s | 0.0% → 99.9% | 0ms → 3.76s | 0 → 3,764 | `$s11SwiftSyntax010SourceFileB0V0A6ParserE5parse4fromAcD0E0Vz_tFZAA03RawcdB0VAHzXEfU_`                     | `./.build/checkouts/swift-syntax/Sources/SwiftParser/generated/LayoutNodes+Parsable.swift` |
|    new | +2.00ms |  0.0% → 0.1% | 0ms → 2.0ms |     0 → 2 | `$s11SwiftParser0B0V14parseRemainder4intoxx_t0A6Syntax03RawF12NodeProtocolRzlFAF0g12VersionTupleF0V_Tg5Tm` | `Attributes.swift.o`                                                                       |
|    new | +1.00ms | 0.0% → <0.1% | 0ms → 1.0ms |     0 → 1 | `$s11SwiftSyntax0B0V3raw0C9NodeArenaAcA03RawB0V_AA08RetainedfbE0VhtcfCTm`                                  | `AbsolutePosition.swift.o`                                                                 |

##### `$s11SwiftSyntax010SourceFileB0V0A6ParserE5parse4fromAcD0E0Vz_tFZAA03RawcdB0VAHzXEfU_` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/generated/LayoutNodes+Parsable.swift`)

| Change |   Delta |             % |        Time |   Samples | Callee                                                      | Location                                                             |
| -----: | ------: | ------------: | ----------: | --------: | ----------------------------------------------------------- | -------------------------------------------------------------------- |
|    new | +3.764s | 0.0% → 100.0% | 0ms → 3.76s | 0 → 3,764 | `$s11SwiftParser0B0V15parseSourceFile0A6Syntax03RawdeF0VyF` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift` |

##### `$s11SwiftParser0B0V16parseDeclaration2in0A6Syntax07RawDeclF0VAC0D12ParseContextO_tF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift`)

| Change |     Delta |            % |          Time |   Samples | Callee                                                                                                                                                                          | Location                                                                 |
| -----: | --------: | -----------: | ------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
|    new |   +2.387s | 0.0% → 64.2% |   0ms → 2.38s | 0 → 2,387 | `$s11SwiftParser0B0V27parseNominalTypeDeclaration3for5attrs15introucerHandlexxm_AC14DeclAttributesVAA019RecoveryConsumptionJ0VtAA0deF5TraitRzlF0A6Syntax08RawClasskP0V_Tt0g5Tm` | `Attributes.swift.o`                                                     |
|    new |   +1.551s | 0.0% → 41.7% |   0ms → 1.55s | 0 → 1,551 | `$s11SwiftParser0B0V20parseFuncDeclarationy0A6Syntax015RawFunctionDeclF0VAC0I10AttributesV_AA25RecoveryConsumptionHandleVtF`                                                    | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift` |
|    new |   +1.374s | 0.0% → 37.0% |   0ms → 1.37s | 0 → 1,374 | `$s11SwiftParser0B0V23parseBindingDeclaration__2in0A6Syntax015RawVariableDeclG0VAC0J10AttributesV_AA25RecoveryConsumptionHandleVAC0E12ParseContextOtF`                          | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift` |
|    new |   +1.048s | 0.0% → 28.2% |   0ms → 1.04s | 0 → 1,048 | `$s11SwiftParser0B0V25parseExtensionDeclarationy0A6Syntax03Rawd4DeclF0VAC0H10AttributesV_AA25RecoveryConsumptionHandleVtF`                                                      | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift` |
|    new | +835.00ms | 0.0% → 22.5% | 0ms → 835.0ms |   0 → 835 | `$s11SwiftParser0B0V27parseInitializerDeclarationy0A6Syntax03Rawd4DeclF0VAC0H10AttributesV_AA25RecoveryConsumptionHandleVtF`                                                    | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift` |

##### `$s11SwiftParser0B0V23parseBindingDeclaration__2in0A6Syntax015RawVariableDeclG0VAC0J10AttributesV_AA25RecoveryConsumptionHandleVAC0E12ParseContextOtF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift`)

| Change |     Delta |            % |          Time | Samples | Callee                                                                                                                                                                                                                           | Location                                                                                        |
| -----: | --------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
|    new | +889.00ms | 0.0% → 64.7% | 0ms → 889.0ms | 0 → 889 | `$s11SwiftParser0B0V18parseAccessorBlock0A6Syntax03RawdeF0VyF`                                                                                                                                                                   | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift`                        |
|    new | +315.00ms | 0.0% → 22.9% | 0ms → 315.0ms | 0 → 315 | `$s11SwiftParser0B0V15parseExpression6flavor7pattern0A6Syntax07RawExprG0VAC0I6FlavorO_AC14PatternContextOtF`                                                                                                                     | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`                         |
|    new | +132.00ms |  0.0% → 9.6% | 0ms → 132.0ms | 0 → 132 | `$s11SwiftParser0B0V17parseTypedPattern29allowRecoveryFromMissingColon0A6Syntax03RaweK0V_AF0l14TypeAnnotationK0VSgtSb_tF`                                                                                                        | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Patterns.swift`                            |
|    new |   +9.00ms |  0.0% → 0.7% |   0ms → 9.0ms |   0 → 9 | `$s11SwiftParser0B0V3eaty0A6Syntax018RawUnexpectedNodesD0VSg_AE0e5TokenD0VtAA25RecoveryConsumptionHandleVF`                                                                                                                      | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Parser.swift`                              |
|    new |   +7.00ms |  0.0% → 0.5% |   0ms → 7.0ms |   0 → 7 | `$s11SwiftSyntax015RawVariableDeclB0V_10attributes_9modifiers_16bindingSpecifier_8bindings_5arenaAcA0c15UnexpectedNodesB0VSg_AA0c13AttributeListB0VAkA0ce8ModifieroB0VAkA0c5TokenB0VAkA0c14PatternBindingoB0VAkA0cB5ArenaChtcfC` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/raw/RawSyntaxNodesTUVWXYZ.swift` |

##### `$s11SwiftSyntax0B7VisitorC015visitSourceFileB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

| Change |     Delta |            % |          Time | Samples | Callee                                                                                    | Location                                                                               |
| -----: | --------: | -----------: | ------------: | ------: | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
|    new | +938.00ms | 0.0% → 99.8% | 0ms → 938.0ms | 0 → 938 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`    |
|    new |   +2.00ms |  0.0% → 0.2% |   0ms → 2.0ms |   0 → 2 | `$s11SwiftSyntax0B10AnyVisitorC5visityAA0bD12ContinueKindOAA010BorrowExprB0VF`            | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxAnyVisitor.swift` |

##### `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

| Change |     Delta |            % |          Time | Samples | Callee                                                                                                      | Location                                                                            |
| -----: | --------: | -----------: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|    new | +937.00ms | 0.0% → 99.9% | 0ms → 937.0ms | 0 → 937 | `$s11SwiftSyntax0B7VisitorC018visitCodeBlockItemB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`       | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
|    new | +937.00ms | 0.0% → 99.9% | 0ms → 937.0ms | 0 → 937 | `$s11SwiftSyntax0B7VisitorC022visitCodeBlockItemListB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`   | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
|    new | +816.00ms | 0.0% → 87.0% | 0ms → 816.0ms | 0 → 816 | `$s11SwiftSyntax0B7VisitorC016visitMemberBlockB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`         | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
|    new | +812.00ms | 0.0% → 86.6% | 0ms → 812.0ms | 0 → 812 | `$s11SwiftSyntax0B7VisitorC024visitMemberBlockItemListB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
|    new | +809.00ms | 0.0% → 86.2% | 0ms → 809.0ms | 0 → 809 | `$s11SwiftSyntax0B7VisitorC020visitMemberBlockItemB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF`     | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |

##### `$s11SwiftSyntax0B7VisitorC018visitCodeBlockItemB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

| Change |     Delta |            % |          Time | Samples | Callee                                                                                    | Location                                                                               |
| -----: | --------: | -----------: | ------------: | ------: | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
|    new | +936.00ms | 0.0% → 99.9% | 0ms → 936.0ms | 0 → 936 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`    |
|    new |  +12.00ms |  0.0% → 1.3% |  0ms → 12.0ms |  0 → 12 | `$s11SwiftSyntax0B10AnyVisitorC5visityAA0bD12ContinueKindOAA010BorrowExprB0VF`            | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxAnyVisitor.swift` |

##### `$s11SwiftSyntax0B7VisitorC022visitCodeBlockItemListB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

| Change |     Delta |             % |          Time | Samples | Callee                                                                                    | Location                                                                               |
| -----: | --------: | ------------: | ------------: | ------: | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
|    new | +937.00ms | 0.0% → 100.0% | 0ms → 937.0ms | 0 → 937 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`    |
|    new |   +6.00ms |   0.0% → 0.6% |   0ms → 6.0ms |   0 → 6 | `$s11SwiftSyntax0B10AnyVisitorC5visityAA0bD12ContinueKindOAA010BorrowExprB0VF`            | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxAnyVisitor.swift` |

##### `$s11SwiftSyntax0B7VisitorC016visitMemberBlockB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

| Change |     Delta |            % |          Time | Samples | Callee                                                                                    | Location                                                                               |
| -----: | --------: | -----------: | ------------: | ------: | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
|    new | +814.00ms | 0.0% → 99.8% | 0ms → 814.0ms | 0 → 814 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`    |
|    new |   +2.00ms |  0.0% → 0.2% |   0ms → 2.0ms |   0 → 2 | `$s11SwiftSyntax0B10AnyVisitorC5visityAA0bD12ContinueKindOAA010BorrowExprB0VF`            | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxAnyVisitor.swift` |

##### `$s11SwiftSyntax0B7VisitorC024visitMemberBlockItemListB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

| Change |     Delta |             % |          Time | Samples | Callee                                                                                    | Location                                                                            |
| -----: | --------: | ------------: | ------------: | ------: | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|    new | +812.00ms | 0.0% → 100.0% | 0ms → 812.0ms | 0 → 812 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |

##### `$s11SwiftSyntax0B7VisitorC020visitMemberBlockItemB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

| Change |     Delta |            % |          Time | Samples | Callee                                                                                    | Location                                                                               |
| -----: | --------: | -----------: | ------------: | ------: | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
|    new | +807.00ms | 0.0% → 99.8% | 0ms → 807.0ms | 0 → 807 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`    |
|    new |   +2.00ms |  0.0% → 0.2% |   0ms → 2.0ms |   0 → 2 | `$s11SwiftSyntax0B10AnyVisitorC5visityAA0bD12ContinueKindOAA010BorrowExprB0VF`            | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxAnyVisitor.swift` |

##### `$s11SwiftSyntax0B7VisitorC014visitCodeBlockB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

| Change |     Delta |            % |          Time | Samples | Callee                                                                                    | Location                                                                               |
| -----: | --------: | -----------: | ------------: | ------: | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
|    new | +546.00ms | 0.0% → 99.6% | 0ms → 546.0ms | 0 → 546 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`    |
|    new |   +6.00ms |  0.0% → 1.1% |   0ms → 6.0ms |   0 → 6 | `$s11SwiftSyntax0B10AnyVisitorC5visityAA0bD12ContinueKindOAA010BorrowExprB0VF`            | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxAnyVisitor.swift` |

##### `$s11SwiftSyntax010SourceFileB0V0A6ParserE5parse4fromAcD0E0Vz_tFZ` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/generated/LayoutNodes+Parsable.swift`)

|  Change |   Delta |             % |        Time |   Samples | Callee                                                                                                                                                                      | Location                                                                                    |
| ------: | ------: | ------------: | ----------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
|     new | +3.767s | 0.0% → 100.0% | 0ms → 3.76s | 0 → 3,767 | `$s11SwiftParser15SyntaxParseablePAAE5parse33_A2E5EEB4E7271C1F548910D9ED42E2EBLL4fromADxAA0B0Vz_qd__AHzXEt0aC003RawC12NodeProtocolRd__lFZAI010SourceFileC0V_AI0qtuC0VTt2g5` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/generated/LayoutNodes+Parsable.swift`  |
| removed | -3.265s |  99.9% → 0.0% | 3.26s → 0ms | 3,265 → 0 | `$s11SwiftParser0B0V15parseSourceFile0A6Syntax03RawdeF0VyF`                                                                                                                 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`                        |
| removed | -1.00ms |  <0.1% → 0.0% | 1.0ms → 0ms |     1 → 0 | `$s11SwiftSyntax013RawSourceFileB0V_7shebang_10statements_05endOfE5Token_5arenaAcA0c15UnexpectedNodesB0VSg_AA0cjB0VSgAjA0c17CodeBlockItemListB0VAjljA0B5ArenaChtcfC`        | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/raw/RawSyntaxNodesQRS.swift` |
| removed | -1.00ms |  <0.1% → 0.0% | 1.0ms → 0ms |     1 → 0 | `$s11SwiftSyntax0B8ProtocolPAAE4castyqd__qd__mAaBRd__lFAA0B0V_AA010SourceFileB0VTt0g5`                                                                                      | `<unknown>`                                                                                 |

##### `$s11SwiftParser0B0V15parseSourceFile0A6Syntax03RawdeF0VyF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`)

|  Change |     Delta |              % |          Time |       Samples | Callee                                                                                                                                                                | Location                                                                                    |
| ------: | --------: | -------------: | ------------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
|  +15.2% | +497.00ms | 100.0% → 99.9% | 3.26s → 3.76s | 3,264 → 3,761 | `$s11SwiftParser0B0V27parseTopLevelCodeBlockItems0A6Syntax03Rawfg8ItemListI0VyF`                                                                                      | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`                        |
|     new |   +2.00ms |    0.0% → 0.1% |   0ms → 2.0ms |         0 → 2 | `$s11SwiftParser0B0V15expectEndOfFile0A6Syntax018RawUnexpectedNodesG0VSg10unexpected_AE0h5TokenG0V03endefL0tyF`                                                       | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`                        |
| removed |   -1.00ms |   <0.1% → 0.0% |   1.0ms → 0ms |         1 → 0 | `$s11SwiftParser13TokenConsumerPAAE7consume2if0C0QzSgAA0C4SpecV_tFAA0B0V_Tg5`                                                                                         | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenConsumer.swift`                   |
|     new |   +1.00ms |   0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `$s11SwiftSyntax013RawSourceFileB0V_7shebang_10statements_05endOfE5Token_5arenaAcA0c15UnexpectedNodesB0VSg_AA0cjB0VSgAjA0c17CodeBlockItemListB0VAjljA0cB5ArenaChtcfC` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/raw/RawSyntaxNodesQRS.swift` |

##### `$s11SwiftParser0B0V22parseCodeBlockItemList12isAtTopLevel13allowInitDecl5until0A6Syntax03RawdefgP0VSb_S2bACzXEtF04$s11a9Syntax017defg6B0V0A6b35E5parse4fromAcD0G0Vz_tFZAA03RawcdefT19VAHzXEfU_SbAHzXEfU_Tf1nncn_nTm` (`Attributes.swift.o`)

|  Change |     Delta |              % |          Time |       Samples | Callee                                                                                                                                             | Location                                                             |
| ------: | --------: | -------------: | ------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
|  +15.1% | +492.00ms | 100.0% → 99.8% | 3.26s → 3.75s | 3,263 → 3,755 | `$s11SwiftParser0B0V18parseCodeBlockItem12isAtTopLevel13allowInitDecl0A6Syntax03RawdefN0VSgSb_SbtF`                                                | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift` |
| +100.0% |   +1.00ms |   <0.1% → 0.1% | 1.0ms → 2.0ms |         1 → 2 | `$ss22_ContiguousArrayBufferV20_consumeAndCreateNew14bufferIsUnique15minimumCapacity13growForAppendAByxGSb_SiSbtF11SwiftSyntax08RawTokenQ0V_Tg5Tm` | `Attributes.swift.o`                                                 |

##### `$s11SwiftParser0B0V27parseTopLevelCodeBlockItems0A6Syntax03Rawfg8ItemListI0VyF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`)

| Change |     Delta |      % |          Time |       Samples | Callee                                                                                                                                                                                                                | Location             |
| -----: | --------: | -----: | ------------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| +15.2% | +497.00ms | 100.0% | 3.26s → 3.76s | 3,264 → 3,761 | `$s11SwiftParser0B0V22parseCodeBlockItemList12isAtTopLevel13allowInitDecl5until0A6Syntax03RawdefgP0VSb_S2bACzXEtF04$s11a9Syntax017defg6B0V0A6b35E5parse4fromAcD0G0Vz_tFZAA03RawcdefT19VAHzXEfU_SbAHzXEfU_Tf1nncn_nTm` | `Attributes.swift.o` |

##### `$s11SwiftParser0B0V5parse6source0A6Syntax010SourceFileE0VSS_tFZ` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/ParseSourceFile.swift`)

| Change |     Delta |             % |            Time |       Samples | Callee                                                                                                                     | Location                                                                                   |
| -----: | --------: | ------------: | --------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| +15.3% | +500.00ms | 99.5% → 99.7% |   3.26s → 3.76s | 3,267 → 3,767 | `$s11SwiftSyntax010SourceFileB0V0A6ParserE5parse4fromAcD0E0Vz_tFZ`                                                         | `./.build/checkouts/swift-syntax/Sources/SwiftParser/generated/LayoutNodes+Parsable.swift` |
| -33.3% |   -5.00ms |   0.5% → 0.3% | 15.0ms → 10.0ms |       15 → 10 | `$s11SwiftParser0B0V_19maximumNestingLevel15parseTransition12swiftVersionACSS_SiSgAA016IncrementalParseG0CSgAC0aI0OSgtcfC` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Parser.swift`                         |

##### `$s11SwiftParser0B0V18parseCodeBlockItem12isAtTopLevel13allowInitDecl0A6Syntax03RawdefN0VSgSb_SbtF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`)

|  Change |     Delta |             % |           Time |       Samples | Callee                                                                                                                                   | Location                                                                                  |
| ------: | --------: | ------------: | -------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
|  +15.0% | +488.00ms | 99.9% → 99.8% |  3.25s → 3.74s | 3,259 → 3,747 | `$s11SwiftParser0B0V9parseItem33_008C1B0E0A90478841CED0DF9A7053A1LL12isAtTopLevel13allowInitDecl0A6Syntax012RawCodeBlockdT0V0D0OSb_SbtF` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`                      |
| removed |  -10.00ms |   0.3% → 0.0% |   10.0ms → 0ms |        10 → 0 | `$s11SwiftSyntax016RawCodeBlockItemB0V_4item_9semicolon_5arenaAcA0c15UnexpectedNodesB0VSg_AC0F0OAiA0c5TokenB0VSgAiA0B5ArenaChtcfC`       | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/raw/RawSyntaxNodesC.swift` |
| +100.0% |   +9.00ms |   0.3% → 0.5% | 9.0ms → 18.0ms |        9 → 18 | `$s11SwiftParser13TokenConsumerPAAE2atySbAA0C4SpecV_AFtFAA0B0V_Tg5`                                                                      | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TokenConsumer.swift`                 |
|     new |   +9.00ms |   0.0% → 0.2% |    0ms → 9.0ms |         0 → 9 | `$s11SwiftSyntax016RawCodeBlockItemB0V_4item_9semicolon_5arenaAcA0c15UnexpectedNodesB0VSg_AC0F0OAiA0c5TokenB0VSgAiA0cB5ArenaChtcfC`      | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/raw/RawSyntaxNodesC.swift` |
| removed |   -5.00ms |   0.2% → 0.0% |    5.0ms → 0ms |         5 → 0 | `$s11SwiftSyntax018RawUnexpectedNodesB0V0A6ParserE_5arenaACSgSayxG_AA0B5ArenaChtcAA0cB12NodeProtocolRzlufCAA0c5TokenB0V_Tt1g5Tm`         | `Attributes.swift.o`                                                                      |

##### `$s11SwiftParser0B0V9parseItem33_008C1B0E0A90478841CED0DF9A7053A1LL12isAtTopLevel13allowInitDecl0A6Syntax012RawCodeBlockdT0V0D0OSb_SbtF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`)

|  Change |     Delta |             % |            Time |       Samples | Callee                                                                                                                                                                                                                       | Location                                                                 |
| ------: | --------: | ------------: | --------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
|     new |   +3.718s |  0.0% → 99.2% |     0ms → 3.71s |     0 → 3,718 | `$s11SwiftParser0B0V16parseDeclaration2in0A6Syntax07RawDeclF0VAC0D12ParseContextO_tF`                                                                                                                                        | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift` |
| removed |   -3.220s |  98.8% → 0.0% |     3.22s → 0ms |     3,220 → 0 | `$s11SwiftParser0B0V16parseDeclaration16inMemberDeclList0A6Syntax03RawgI0VSb_tF`                                                                                                                                             | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift` |
|  +17.0% | +239.00ms | 43.2% → 44.0% |   1.40s → 1.64s | 1,409 → 1,648 | `$s11SwiftParser0B0V18parseStatementItem33_008C1B0E0A90478841CED0DF9A7053A1LL0A6Syntax012RawCodeBlockeN0V0E0OyF`                                                                                                             | `./.build/checkouts/swift-syntax/Sources/SwiftParser/TopLevel.swift`     |
|     new | +229.00ms |   0.0% → 6.1% |   0ms → 229.0ms |       0 → 229 | `$s11SwiftParser0B0V21parsePoundIfDirective_012addSemicolonE6Needed6syntax0A6Syntax03Rawe10ConfigDeclK0VxSgACz_SbtXE_AJx_SbACztXEAG0lem6ClauseK0V8ElementsOSgACz_SayxGtXEtAG0lK12NodeProtocolRzlFAG0l13CodeBlockItemK0V_Tg5` | `crtstuff.c`                                                             |
|  +20.9% | +197.00ms | 28.9% → 30.4% | 943.0ms → 1.14s |   943 → 1,140 | `$s11SwiftParser0B0V15parseExpression6flavor7pattern0A6Syntax07RawExprG0VAC0I6FlavorO_AC14PatternContextOtF`                                                                                                                 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`  |

##### `$s11SwiftSyntax0B7VisitorC015visitStructDeclB4Impl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

| Change |     Delta |             % |          Time | Samples | Callee                                                                                    | Location                                                                            |
| -----: | --------: | ------------: | ------------: | ------: | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|    new | +451.00ms | 0.0% → 100.0% | 0ms → 451.0ms | 0 → 451 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |

##### `0x284c3` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |     Delta |             % |            Time |       Samples | Callee         | Location                       |
| ------: | --------: | ------------: | --------------: | ------------: | -------------- | ------------------------------ |
|   +4.4% | +201.00ms | 99.1% → 98.2% |   4.53s → 4.73s | 4,531 → 4,732 | `profile_main` | `./Sources/profile/main.swift` |
| +112.2% |  +46.00ms |   0.9% → 1.8% | 41.0ms → 87.0ms |       41 → 87 | `profile_main` | `<unknown>`                    |

##### `0x28597` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |     Delta |      % |          Time |       Samples | Callee    | Location                               |
| -----: | --------: | -----: | ------------: | ------------: | --------- | -------------------------------------- |
|  +5.4% | +247.00ms | 100.0% | 4.57s → 4.81s | 4,572 → 4,819 | `0x284c3` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_start` (`<unknown>`)

| Change |     Delta |      % |          Time |       Samples | Callee    | Location                               |
| -----: | --------: | -----: | ------------: | ------------: | --------- | -------------------------------------- |
|  +5.4% | +247.00ms | 100.0% | 4.57s → 4.81s | 4,572 → 4,819 | `0x28597` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x3e564b` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change |     Delta |             % |             Time |  Samples | Callee    | Location                               |
| ------: | --------: | ------------: | ---------------: | -------: | --------- | -------------------------------------- |
| +159.7% | +115.00ms | 98.6% → 98.4% | 72.0ms → 187.0ms | 72 → 187 | `0x985eb` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +200.0% |   +2.00ms |   1.4% → 1.6% |    1.0ms → 3.0ms |    1 → 3 | `0x98594` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x985eb` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |     Delta |              % |             Time |  Samples | Callee    | Location                               |
| ------: | --------: | -------------: | ---------------: | -------: | --------- | -------------------------------------- |
| +155.6% | +112.00ms | 100.0% → 98.4% | 72.0ms → 184.0ms | 72 → 184 | `0x966ab` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms |    0.0% → 0.5% |      0ms → 1.0ms |    0 → 1 | `0x964d4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms |    0.0% → 0.5% |      0ms → 1.0ms |    0 → 1 | `0x968a0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms |    0.0% → 0.5% |      0ms → 1.0ms |    0 → 1 | `0x966ac` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x966ab` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |     Delta |             % |             Time |  Samples | Callee    | Location                               |
| ------: | --------: | ------------: | ---------------: | -------: | --------- | -------------------------------------- |
| +180.0% | +108.00ms | 78.9% → 90.3% | 60.0ms → 168.0ms | 60 → 168 | `0x95968` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  +25.0% |   +3.00ms |  15.8% → 8.1% |  12.0ms → 15.0ms |  12 → 15 | `0x95a5b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -1.00ms |   1.3% → 0.0% |      1.0ms → 0ms |    1 → 0 | `0x95973` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -1.00ms |   1.3% → 0.0% |      1.0ms → 0ms |    1 → 0 | `0x95643` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -1.00ms |   1.3% → 0.0% |      1.0ms → 0ms |    1 → 0 | `0x95628` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `$s11SwiftSyntax0B9DataArenaCfD` (`<unknown>`)

| Change |    Delta |             % |         Time | Samples | Callee     | Location                               |
| -----: | -------: | ------------: | -----------: | ------: | ---------- | -------------------------------------- |
|    new | +87.00ms | 0.0% → 100.0% | 0ms → 87.0ms |  0 → 87 | `0x3e812f` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ` (`<unknown>`)

| Change |    Delta |             % |         Time | Samples | Callee                                                                                                                                                                      | Location                                                                  |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
|    new | +80.00ms | 0.0% → 100.0% | 0ms → 80.0ms |  0 → 80 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZTf4nnnnnd_n` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift` |

##### `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax020c48DeclReferenceExprB0V_8baseName_13argumentNames_5n22AcA0c15UnexpectedNodesx14VSg_AA0c5Tokenx18VAiA0cdh9Argumentsx10VSgAiA0cB5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VAsA0cuz9ArgumentsB0VSgASTf1nnnncn_n` (`<unknown>`)

| Change |    Delta |            % |         Time | Samples | Callee                                                                                                                                                                                                                                                                                                                                                                                                                                | Location     |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
|    new | +68.00ms | 0.0% → 97.1% | 0ms → 68.0ms |  0 → 68 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax020c48DeclReferenceExprB0V_8baseName_13argumentNames_5n22AcA0c15UnexpectedNodesx14VSg_AA0c5Tokenx18VAiA0cdh9Argumentsx10VSgAiA0cB5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VAsA0cuz9ArgumentsB0VSgASTf1nnnncn_nTf4nnnndnnnnn_n` | `crtstuff.c` |

##### `$s11SwiftParser0B0V9LookaheadVWOs` (`<unknown>`)

|  Change |    Delta |             % |            Time | Samples | Callee     | Location                               |
| ------: | -------: | ------------: | --------------: | ------: | ---------- | -------------------------------------- |
| +161.5% | +21.00ms | 10.5% → 18.1% | 13.0ms → 34.0ms | 13 → 34 | `0x3e62dc` | `/usr/lib/swift/linux/libswiftCore.so` |
|  -18.2% |  -4.00ms |  17.7% → 9.6% | 22.0ms → 18.0ms | 22 → 18 | `0x3e6304` | `/usr/lib/swift/linux/libswiftCore.so` |
|     new |  +3.00ms |   0.0% → 1.6% |     0ms → 3.0ms |   0 → 3 | `0x3e6348` | `/usr/lib/swift/linux/libswiftCore.so` |
|  +66.7% |  +2.00ms |   2.4% → 2.7% |   3.0ms → 5.0ms |   3 → 5 | `0x3e634c` | `/usr/lib/swift/linux/libswiftCore.so` |
|  +25.0% |  +1.00ms |   3.2% → 2.7% |   4.0ms → 5.0ms |   4 → 5 | `0x3e62f4` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `$s11SwiftParser0B0V30parseSequenceExpressionElement6flavor7pattern0A6Syntax07RawExprI0VAC0K6FlavorO_AC14PatternContextOtF` (`<unknown>`)

| Change |    Delta |            % |         Time | Samples | Callee                              | Location    |
| -----: | -------: | -----------: | -----------: | ------: | ----------------------------------- | ----------- |
|    new | +49.00ms | 0.0% → 83.1% | 0ms → 49.0ms |  0 → 49 | `$s11SwiftParser0B0V9LookaheadVWOs` | `<unknown>` |

##### `$s11SwiftSyntax010ParsingRawB5ArenaCfd` (`<unknown>`)

| Change |    Delta |            % |         Time | Samples | Callee                           | Location                                                                       |
| -----: | -------: | -----------: | -----------: | ------: | -------------------------------- | ------------------------------------------------------------------------------ |
|    new | +56.00ms | 0.0% → 98.2% | 0ms → 56.0ms |  0 → 56 | `$s11SwiftSyntax03RawB5ArenaCfd` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntaxArena.swift` |
|    new |  +1.00ms |  0.0% → 1.8% |  0ms → 1.0ms |   0 → 1 | `$s11SwiftSyntax03RawB5ArenaCfd` | `<unknown>`                                                                    |

##### `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax019c45MemberAccessExprB0V_4base_6period_8declName_5n22AcA0c15UnexpectedNodesx9VSg_AA0cfx14VSgAjA0c5Tokenx22VAjA0c13DeclReferencefx8VAjA0cB5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0cwB0VSgAsA0c5TokenB0VAsA0c13DeclReferencewB0VASTf1nnnncn_n` (`<unknown>`)

| Change |    Delta |            % |         Time | Samples | Callee                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Location     |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
|    new | +54.00ms | 0.0% → 98.2% | 0ms → 54.0ms |  0 → 54 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0cB5ArenaChySryACSgGXEtFZ04$s11a9Syntax019c45MemberAccessExprB0V_4base_6period_8declName_5n22AcA0c15UnexpectedNodesx9VSg_AA0cfx14VSgAjA0c5Tokenx22VAjA0c13DeclReferencefx8VAjA0cB5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0cwB0VSgAsA0c5TokenB0VAsA0c13DeclReferencewB0VASTf1nnnncn_nTf4nnnndnnnnnnn_n` | `crtstuff.c` |

##### `$s11SwiftParser0B0V21parseTrailingClosures6flavor0A6Syntax014RawClosureExprG0V_AF0h8Multipledi11ElementListG0VtAC0J6FlavorO_tF` (`<unknown>`)

| Change |    Delta |      % |              Time |   Samples | Callee                                                                                                                                  | Location                                                                |
| -----: | -------: | -----: | ----------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| +27.5% | +52.00ms | 100.0% | 189.0ms → 241.0ms | 189 → 241 | `$s11SwiftParser0B0V21parseTrailingClosures6flavor0A6Syntax014RawClosureExprG0V_AF0h8Multipledi11ElementListG0VtAC0J6FlavorO_tFTf4dn_n` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift` |

##### `0x3e812f` (`/usr/lib/swift/linux/libswiftCore.so`)

| Change |    Delta |              % |             Time |  Samples | Callee     | Location                               |
| -----: | -------: | -------------: | ---------------: | -------: | ---------- | -------------------------------------- |
| +78.0% | +46.00ms | 100.0% → 99.1% | 59.0ms → 105.0ms | 59 → 105 | `0x3e7633` | `/usr/lib/swift/linux/libswiftCore.so` |
|    new |  +1.00ms |    0.0% → 0.9% |      0ms → 1.0ms |    0 → 1 | `0x3e7638` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `0x3e7633` (`/usr/lib/swift/linux/libswiftCore.so`)

|  Change |    Delta |             % |            Time | Samples | Callee                                   | Location                                                                       |
| ------: | -------: | ------------: | --------------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------ |
|     new | +87.00ms |  0.0% → 82.9% |    0ms → 87.0ms |  0 → 87 | `$s11SwiftSyntax0B9DataArenaCfD`         | `<unknown>`                                                                    |
|     new | +57.00ms |  0.0% → 54.3% |    0ms → 57.0ms |  0 → 57 | `$s11SwiftSyntax010ParsingRawB5ArenaCfD` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntaxArena.swift` |
| removed | -41.00ms |  69.5% → 0.0% |    41.0ms → 0ms |  41 → 0 | `$s11SwiftSyntax07ParsingB5ArenaCfD`     | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxArena.swift`        |
| removed | -41.00ms |  69.5% → 0.0% |    41.0ms → 0ms |  41 → 0 | `$s11SwiftSyntax0B0V4InfoCfD`            | `<unknown>`                                                                    |
|  +92.3% | +24.00ms | 44.1% → 47.6% | 26.0ms → 50.0ms | 26 → 50 | `0x96e67`                                | `/usr/lib/aarch64-linux-gnu/libc.so.6`                                         |

##### `profile_main` (`<unknown>`)

|  Change |    Delta |      % |            Time | Samples | Callee     | Location                               |
| ------: | -------: | -----: | --------------: | ------: | ---------- | -------------------------------------- |
| +112.2% | +46.00ms | 100.0% | 41.0ms → 87.0ms | 41 → 87 | `0x3e812f` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `0xe8df7` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |      % |            Time | Samples | Callee    | Location                               |
| ------: | -------: | -----: | --------------: | ------: | --------- | -------------------------------------- |
| +104.7% | +45.00ms | 100.0% | 43.0ms → 88.0ms | 43 → 88 | `0xe3304` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `$sSw8allocate9byteCount9alignmentSwSi_SitFZ` (`<unknown>`)

|  Change |     Delta |              % |             Time |  Samples | Callee     | Location                               |
| ------: | --------: | -------------: | ---------------: | -------: | ---------- | -------------------------------------- |
| +160.3% | +117.00ms | 100.0% → 99.0% | 73.0ms → 190.0ms | 73 → 190 | `0x3e564b` | `/usr/lib/swift/linux/libswiftCore.so` |
|     new |   +1.00ms |    0.0% → 0.5% |      0ms → 1.0ms |    0 → 1 | `0x3e5610` | `/usr/lib/swift/linux/libswiftCore.so` |
|     new |   +1.00ms |    0.0% → 0.5% |      0ms → 1.0ms |    0 → 1 | `0x3e564c` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `$sSw10deallocateyyF` (`<unknown>`)

|  Change |    Delta |             % |            Time | Samples | Callee    | Location                               |
| ------: | -------: | ------------: | --------------: | ------: | --------- | -------------------------------------- |
| +110.5% | +21.00ms | 95.0% → 95.2% | 19.0ms → 40.0ms | 19 → 40 | `0x96e67` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -1.00ms |   5.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x96db4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |  +1.00ms |   0.0% → 2.4% |     0ms → 1.0ms |   0 → 1 | `0x96e30` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |  +1.00ms |   0.0% → 2.4% |     0ms → 1.0ms |   0 → 1 | `0x96e5c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `$ss7UnicodeO6ScalarV11SwiftParserE17testCharacterInfo33_CBBF9FEF132CFB2EFF7837FA6BCFF520LLySbSJAEE0G0AGLLVF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/CharacterInfo.swift`)

| Change |   Delta |             % |            Time | Samples | Callee                                                                                                         | Location    |
| -----: | ------: | ------------: | --------------: | ------: | -------------------------------------------------------------------------------------------------------------- | ----------- |
| +11.8% | +2.00ms | 40.5% → 32.8% | 17.0ms → 19.0ms | 17 → 19 | `$ss9OptionSetPs7ElementQzRszrlE8containsySbxFSJ11SwiftParserE4Info33_CBBF9FEF132CFB2EFF7837FA6BCFF520LLV_Tg5` | `<unknown>` |

##### `$sSp10initialize9repeating5countyx_SitF11SwiftSyntax03RawE0VSg_Tg5` (`<unknown>`)

|  Change |   Delta |             % |          Time | Samples | Callee    | Location                               |
| ------: | ------: | ------------: | ------------: | ------: | --------- | -------------------------------------- |
|  -44.4% | -4.00ms | 47.4% → 17.9% | 9.0ms → 5.0ms |   9 → 5 | `0xa2d80` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +4.00ms |  0.0% → 14.3% |   0ms → 4.0ms |   0 → 4 | `0xa2e3c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +100.0% | +2.00ms | 10.5% → 14.3% | 2.0ms → 4.0ms |   2 → 4 | `0xa2de0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +100.0% | +2.00ms | 10.5% → 14.3% | 2.0ms → 4.0ms |   2 → 4 | `0xa2dd8` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +100.0% | +1.00ms |   5.3% → 7.1% | 1.0ms → 2.0ms |   1 → 2 | `0xa2e1c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `$sSr10initialize9repeatingyx_tF11SwiftSyntax03RawD0VSg_Tg5` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Callee                                                               | Location    |
| -----: | ------: | -----: | --------------: | ------: | -------------------------------------------------------------------- | ----------- |
| +47.4% | +9.00ms | 100.0% | 19.0ms → 28.0ms | 19 → 28 | `$sSp10initialize9repeating5countyx_SitF11SwiftSyntax03RawE0VSg_Tg5` | `<unknown>` |

##### `$ss22_ContiguousArrayBufferV20_consumeAndCreateNew14bufferIsUnique15minimumCapacity13growForAppendAByxGSb_SiSbtF11SwiftSyntax027RawStringLiteralSegmentListQ0V7ElementO_Tg5Tm` (`Attributes.swift.o`)

|  Change |   Delta |             % |          Time | Samples | Callee     | Location                               |
| ------: | ------: | ------------: | ------------: | ------: | ---------- | -------------------------------------- |
| +200.0% | +2.00ms | 16.7% → 25.0% | 1.0ms → 3.0ms |   1 → 3 | `0x3e5a1f` | `/usr/lib/swift/linux/libswiftCore.so` |
| +200.0% | +2.00ms | 16.7% → 25.0% | 1.0ms → 3.0ms |   1 → 3 | `0x3e62dc` | `/usr/lib/swift/linux/libswiftCore.so` |
|     new | +2.00ms |  0.0% → 16.7% |   0ms → 2.0ms |   0 → 2 | `0xa1940`  | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms |  16.7% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x3e812f` | `/usr/lib/swift/linux/libswiftCore.so` |
| removed | -1.00ms |  16.7% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x3e62f4` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `$sSa6append10contentsOfyqd__n_t7ElementQyd__RszSTRd__lF11SwiftSyntax03RawF0V_SayAGGTg5` (`<unknown>`)

| Change |   Delta |             % |          Time | Samples | Callee                                                                                                                                      | Location                               |
| -----: | ------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| +33.3% | +1.00ms | 75.0% → 50.0% | 3.0ms → 4.0ms |   3 → 4 | `$ss22_ContiguousArrayBufferV20_consumeAndCreateNew14bufferIsUnique15minimumCapacity13growForAppendAByxGSb_SiSbtF11SwiftSyntax03RawQ0V_Tg5` | `<unknown>`                            |
|    new | +1.00ms |  0.0% → 12.5% |   0ms → 1.0ms |   0 → 1 | `$sSayxGSTsST19underestimatedCountSivgTW11SwiftSyntax03RawD0V_Tg5`                                                                          | `<unknown>`                            |
|    new | +1.00ms |  0.0% → 12.5% |   0ms → 1.0ms |   0 → 1 | `0x4301f4`                                                                                                                                  | `/usr/lib/swift/linux/libswiftCore.so` |

##### `$sSa6appendyyxnFSw_Tg5` (`<unknown>`)

|  Change |   Delta |             % |          Time | Samples | Callee                                                            | Location    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------------- | ----------- |
| +100.0% | +2.00ms |         50.0% | 2.0ms → 4.0ms |   2 → 4 | `$sSa36_reserveCapacityAssumingUniqueBuffer8oldCountySi_tFSw_Tg5` | `<unknown>` |
|  +50.0% | +1.00ms | 50.0% → 37.5% | 2.0ms → 3.0ms |   2 → 3 | `$sSa034_makeUniqueAndReserveCapacityIfNotB0yyFSw_Tg5`            | `<unknown>` |

##### `$ss7UnicodeO6ScalarV11SwiftParserE31isValidIdentifierStartCodePointSbvg` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/UnicodeScalarExtensions.swift`)

| Change |   Delta |      % |           Time | Samples | Callee                                                           | Location                                                                  |
| -----: | ------: | -----: | -------------: | ------: | ---------------------------------------------------------------- | ------------------------------------------------------------------------- |
| +37.5% | +3.00ms | 100.0% | 8.0ms → 11.0ms |  8 → 11 | `$ss7UnicodeO6ScalarV11SwiftParserE22isAsciiIdentifierStartSbvg` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/CharacterInfo.swift` |

##### `$sSa034_makeUniqueAndReserveCapacityIfNotB0yyF11SwiftSyntax027RawStringLiteralSegmentListI0V7ElementO_Tg5` (`<unknown>`)

|  Change |   Delta |      % |          Time | Samples | Callee                                                                                                                                                                          | Location             |
| ------: | ------: | -----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| +150.0% | +3.00ms | 100.0% | 2.0ms → 5.0ms |   2 → 5 | `$ss22_ContiguousArrayBufferV20_consumeAndCreateNew14bufferIsUnique15minimumCapacity13growForAppendAByxGSb_SiSbtF11SwiftSyntax027RawStringLiteralSegmentListQ0V7ElementO_Tg5Tm` | `Attributes.swift.o` |

##### `$sSa6append10contentsOfyqd__n_t7ElementQyd__RszSTRd__lF11SwiftSyntax020RawTypeSpecifierListF0VACO_SayAHGTg5` (`<unknown>`)

| Change |   Delta |             % |          Time | Samples | Callee                                                                                                                                                                          | Location                               |
| -----: | ------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| +33.3% | +1.00ms | 75.0% → 57.1% | 3.0ms → 4.0ms |   3 → 4 | `$ss22_ContiguousArrayBufferV20_consumeAndCreateNew14bufferIsUnique15minimumCapacity13growForAppendAByxGSb_SiSbtF11SwiftSyntax027RawStringLiteralSegmentListQ0V7ElementO_Tg5Tm` | `Attributes.swift.o`                   |
|    new | +1.00ms |  0.0% → 14.3% |   0ms → 1.0ms |   0 → 1 | `0x3e62f4`                                                                                                                                                                      | `/usr/lib/swift/linux/libswiftCore.so` |

##### `$sSa2peoiyySayxGz_ABtFZ11SwiftSyntax020RawTypeSpecifierListC0V7ElementO_Tt1g5` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Callee                                                                                                        | Location    |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------- | ----------- |
| +75.0% | +3.00ms | 100.0% | 4.0ms → 7.0ms |   4 → 7 | `$sSa6append10contentsOfyqd__n_t7ElementQyd__RszSTRd__lF11SwiftSyntax020RawTypeSpecifierListF0VACO_SayAHGTg5` | `<unknown>` |

##### `$s11SwiftParser0B0V16parseDeclaration16inMemberDeclList0A6Syntax03RawgI0VSb_tF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift`)

|  Change |     Delta |            % |          Time |   Samples | Callee                                                                                                                                                                          | Location                                                                 |
| ------: | --------: | -----------: | ------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| removed |   -2.088s | 64.8% → 0.0% |   2.08s → 0ms | 2,088 → 0 | `$s11SwiftParser0B0V27parseNominalTypeDeclaration3for5attrs15introucerHandlexxm_AC14DeclAttributesVAA019RecoveryConsumptionJ0VtAA0deF5TraitRzlF0A6Syntax08RawClasskP0V_Tt0g5Tm` | `Attributes.swift.o`                                                     |
| removed |   -1.328s | 41.2% → 0.0% |   1.32s → 0ms | 1,328 → 0 | `$s11SwiftParser0B0V20parseFuncDeclarationy0A6Syntax015RawFunctionDeclF0VAC0I10AttributesV_AA25RecoveryConsumptionHandleVtF`                                                    | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift` |
| removed |   -1.186s | 36.8% → 0.0% |   1.18s → 0ms | 1,186 → 0 | `$s11SwiftParser0B0V23parseBindingDeclaration__16inMemberDeclList0A6Syntax011RawVariablehJ0VAC0H10AttributesV_AA25RecoveryConsumptionHandleVSbtF`                               | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift` |
| removed | -895.00ms | 27.8% → 0.0% | 895.0ms → 0ms |   895 → 0 | `$s11SwiftParser0B0V25parseExtensionDeclarationy0A6Syntax03Rawd4DeclF0VAC0H10AttributesV_AA25RecoveryConsumptionHandleVtF`                                                      | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift` |
| removed | -741.00ms | 23.0% → 0.0% | 741.0ms → 0ms |   741 → 0 | `$s11SwiftParser0B0V27parseInitializerDeclarationy0A6Syntax03Rawd4DeclF0VAC0H10AttributesV_AA25RecoveryConsumptionHandleVtF`                                                    | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift` |

##### `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change |   Delta |             % |        Time |   Samples | Callee                                                                                                                                                                | Location                                                                            |
| ------: | ------: | ------------: | ----------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| removed | -1.240s | 100.0% → 0.0% | 1.24s → 0ms | 1,240 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA017CodeBlockItemListB0V_Tt0g5`   | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -1.240s | 100.0% → 0.0% | 1.24s → 0ms | 1,240 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA010SourceFileB0V_Tt0g5`          | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -1.236s |  99.7% → 0.0% | 1.23s → 0ms | 1,236 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA013CodeBlockItemB0V_Tt0g5`       | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -1.080s |  87.1% → 0.0% | 1.08s → 0ms | 1,080 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA011MemberBlockB0V_Tt0g5`         | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -1.077s |  86.9% → 0.0% | 1.07s → 0ms | 1,077 → 0 | `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA019MemberBlockItemListB0V_Tt0g5` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |

##### `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change |    Delta |             % |         Time |   Samples | Callee                                                                                           | Location                                                                            |
| ------: | -------: | ------------: | -----------: | --------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| removed |  -1.240s | 100.0% → 0.0% |  1.24s → 0ms | 1,240 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF`                | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -91.00ms |   7.3% → 0.0% | 91.0ms → 0ms |    91 → 0 | `$s11SwiftSyntax0B11NodeFactoryV7disposeyyAA0B0VzF`                                              | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxNodeFactory.swift`       |
| removed | -88.00ms |   7.1% → 0.0% | 88.0ms → 0ms |    88 → 0 | `$s11SwiftSyntax03RawB8ChildrenV8IteratorV4nextAA0cB0VSg3raw_AA08AbsoluteB4InfoV06syntaxI0tSgyF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxChildren.swift`          |
| removed | -37.00ms |   3.0% → 0.0% | 37.0ms → 0ms |    37 → 0 | `0x3e62dc`                                                                                       | `/usr/lib/swift/linux/libswiftCore.so`                                              |
| removed | -31.00ms |   2.5% → 0.0% | 31.0ms → 0ms |    31 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF`                | `<unknown>`                                                                         |

##### `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA017CodeBlockItemListB0V_Tt0g5` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change |   Delta |            % |        Time |   Samples | Callee                                                                                     | Location                                                                            |
| ------: | ------: | -----------: | ----------: | --------: | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| removed | -1.237s | 99.8% → 0.0% | 1.23s → 0ms | 1,237 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -8.00ms |  0.6% → 0.0% | 8.0ms → 0ms |     8 → 0 | `$s11SwiftSyntax017CodeBlockItemListB0VAA0B19VisitorContinueKindOIggd_AcEIegnd_TR`         | `<unknown>`                                                                         |
| removed | -3.00ms |  0.2% → 0.0% | 3.0ms → 0ms |     3 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `<unknown>`                                                                         |
| removed | -2.00ms |  0.2% → 0.0% | 2.0ms → 0ms |     2 → 0 | `$s11SwiftSyntax017CodeBlockItemListB0VIgg_ACIegn_TR`                                      | `<unknown>`                                                                         |

##### `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA010SourceFileB0V_Tt0g5` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change |   Delta |             % |        Time |   Samples | Callee                                                                                     | Location                                                                            |
| ------: | ------: | ------------: | ----------: | --------: | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| removed | -1.240s | 100.0% → 0.0% | 1.24s → 0ms | 1,240 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |

##### `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA013CodeBlockItemB0V_Tt0g5` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change |    Delta |            % |         Time |   Samples | Callee                                                                                     | Location                                                                            |
| ------: | -------: | -----------: | -----------: | --------: | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| removed |  -1.234s | 99.8% → 0.0% |  1.23s → 0ms | 1,234 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -14.00ms |  1.1% → 0.0% | 14.0ms → 0ms |    14 → 0 | `$s11SwiftSyntax013CodeBlockItemB0VAA0B19VisitorContinueKindOIggd_AcEIegnd_TR`             | `<unknown>`                                                                         |
| removed |  -1.00ms |  0.1% → 0.0% |  1.0ms → 0ms |     1 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `<unknown>`                                                                         |

##### `$s11SwiftParser0B0V23parseBindingDeclaration__16inMemberDeclList0A6Syntax011RawVariablehJ0VAC0H10AttributesV_AA25RecoveryConsumptionHandleVSbtF` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift`)

|  Change |     Delta |            % |          Time | Samples | Callee                                                                                                                                                                                                                                                                         | Location                                                                                   |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| removed | -787.00ms | 66.4% → 0.0% | 787.0ms → 0ms | 787 → 0 | `$s11SwiftParser0B0V18parseAccessorBlock0A6Syntax03RawdeF0VyF`                                                                                                                                                                                                                 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Declarations.swift`                   |
| removed | -263.00ms | 22.2% → 0.0% | 263.0ms → 0ms | 263 → 0 | `$s11SwiftParser0B0V15parseExpression6flavor7pattern0A6Syntax07RawExprG0VAC0I6FlavorO_AC14PatternContextOtF`                                                                                                                                                                   | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift`                    |
| removed | -107.00ms |  9.0% → 0.0% | 107.0ms → 0ms | 107 → 0 | `$s11SwiftParser0B0V17parseTypedPattern29allowRecoveryFromMissingColon0A6Syntax03RaweK0V_AF0l14TypeAnnotationK0VSgtSb_tF`                                                                                                                                                      | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Patterns.swift`                       |
| removed |   -9.00ms |  0.8% → 0.0% |   9.0ms → 0ms |   9 → 0 | `$s11SwiftSyntax017RawPatternBindingB0V_7pattern_14typeAnnotation_11initializer_13accessorBlock_13trailingComma_5arenaAcA0c15UnexpectedNodesB0VSg_xAlA0c4TypehB0VSgAlA0c17InitializerClauseB0VSgAlA0c8AccessorkB0VSgAlA0c5TokenB0VSgAlA0B5ArenaChtcAA0cdB12NodeProtocolRzlufC` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/raw/RawSyntaxNodesOP.swift` |
| removed |   -6.00ms |  0.5% → 0.0% |   6.0ms → 0ms |   6 → 0 | `$s11SwiftParser0B0V3eaty0A6Syntax018RawUnexpectedNodesD0VSg_AE0e5TokenD0VtAA25RecoveryConsumptionHandleVF`                                                                                                                                                                    | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Parser.swift`                         |

##### `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA011MemberBlockB0V_Tt0g5` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change |   Delta |             % |        Time |   Samples | Callee                                                                                     | Location                                                                            |
| ------: | ------: | ------------: | ----------: | --------: | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| removed | -1.080s | 100.0% → 0.0% | 1.08s → 0ms | 1,080 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -1.00ms |   0.1% → 0.0% | 1.0ms → 0ms |     1 → 0 | `$s11SwiftSyntax011MemberBlockB0VAA0B19VisitorContinueKindOIggd_AcEIegnd_TR`               | `<unknown>`                                                                         |

##### `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA019MemberBlockItemListB0V_Tt0g5` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change |   Delta |            % |        Time |   Samples | Callee                                                                                     | Location                                                                            |
| ------: | ------: | -----------: | ----------: | --------: | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| removed | -1.074s | 99.7% → 0.0% | 1.07s → 0ms | 1,074 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -4.00ms |  0.4% → 0.0% | 4.0ms → 0ms |     4 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `<unknown>`                                                                         |

##### `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA015MemberBlockItemB0V_Tt0g5` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change |   Delta |            % |        Time |   Samples | Callee                                                                                     | Location                                                                            |
| ------: | ------: | -----------: | ----------: | --------: | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| removed | -1.064s | 99.6% → 0.0% | 1.06s → 0ms | 1,064 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed | -4.00ms |  0.4% → 0.0% | 4.0ms → 0ms |     4 → 0 | `$s11SwiftSyntax015MemberBlockItemB0VAA0B19VisitorContinueKindOIggd_AcEIegnd_TR`           | `<unknown>`                                                                         |

##### `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA09CodeBlockB0V_Tt0g5` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change |     Delta |            % |          Time | Samples | Callee                                                                                     | Location                                                                            |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| removed | -755.00ms | 98.7% → 0.0% | 755.0ms → 0ms | 755 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed |   -6.00ms |  0.8% → 0.0% |   6.0ms → 0ms |   6 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `<unknown>`                                                                         |
| removed |   -5.00ms |  0.7% → 0.0% |   5.0ms → 0ms |   5 → 0 | `$s11SwiftSyntax09CodeBlockB0VAA0B19VisitorContinueKindOIggd_AcEIegnd_TR`                  | `<unknown>`                                                                         |

##### `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA016FunctionCallExprB0V_Tt0g5` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change |     Delta |            % |          Time | Samples | Callee                                                                                     | Location                                                                            |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| removed | -565.00ms | 97.2% → 0.0% | 565.0ms → 0ms | 565 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed |  -15.00ms |  2.6% → 0.0% |  15.0ms → 0ms |  15 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `<unknown>`                                                                         |
| removed |   -8.00ms |  1.4% → 0.0% |   8.0ms → 0ms |   8 → 0 | `$s11SwiftSyntax016FunctionCallExprB0VAA0B19VisitorContinueKindOIggd_AcEIegnd_TR`          | `<unknown>`                                                                         |

##### `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA010StructDeclB0V_Tt0g5` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change |     Delta |            % |          Time | Samples | Callee                                                                                     | Location                                                                            |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| removed | -573.00ms | 99.8% → 0.0% | 573.0ms → 0ms | 573 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed |   -1.00ms |  0.2% → 0.0% |   1.0ms → 0ms |   1 → 0 | `$s11SwiftSyntax010StructDeclB0VAA0B19VisitorContinueKindOIggd_AcEIegnd_TR`                | `<unknown>`                                                                         |

##### `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA012VariableDeclB0V_Tt0g5` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change |     Delta |            % |          Time | Samples | Callee                                                                                     | Location                                                                            |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| removed | -501.00ms | 98.0% → 0.0% | 501.0ms → 0ms | 501 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed |   -5.00ms |  1.0% → 0.0% |   5.0ms → 0ms |   5 → 0 | `$s11SwiftSyntax012VariableDeclB0VAA0B19VisitorContinueKindOIggd_AcEIegnd_TR`              | `<unknown>`                                                                         |
| removed |   -4.00ms |  0.8% → 0.0% |   4.0ms → 0ms |   4 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `<unknown>`                                                                         |

##### `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA012FunctionDeclB0V_Tt0g5` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change |     Delta |            % |          Time | Samples | Callee                                                                                     | Location                                                                            |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| removed | -500.00ms | 99.2% → 0.0% | 500.0ms → 0ms | 500 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed |   -2.00ms |  0.4% → 0.0% |   2.0ms → 0ms |   2 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `<unknown>`                                                                         |
| removed |   -2.00ms |  0.4% → 0.0% |   2.0ms → 0ms |   2 → 0 | `$s11SwiftSyntax012FunctionDeclB0VAA0B19VisitorContinueKindOIggd_AcEIegnd_TR`              | `<unknown>`                                                                         |

##### `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA018PatternBindingListB0V_Tt0g5` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change |     Delta |            % |          Time | Samples | Callee                                                                                     | Location                                                                            |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| removed | -455.00ms | 98.7% → 0.0% | 455.0ms → 0ms | 455 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed |   -6.00ms |  1.3% → 0.0% |   6.0ms → 0ms |   6 → 0 | `$s11SwiftSyntax018PatternBindingListB0VAA0B19VisitorContinueKindOIggd_AcEIegnd_TR`        | `<unknown>`                                                                         |

##### `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA014PatternBindingB0V_Tt0g5` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change |     Delta |            % |          Time | Samples | Callee                                                                                     | Location                                                                            |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| removed | -446.00ms | 98.7% → 0.0% | 446.0ms → 0ms | 446 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed |   -4.00ms |  0.9% → 0.0% |   4.0ms → 0ms |   4 → 0 | `$s11SwiftSyntax014PatternBindingB0VAA0B19VisitorContinueKindOIggd_AcEIegnd_TR`            | `<unknown>`                                                                         |
| removed |   -2.00ms |  0.4% → 0.0% |   2.0ms → 0ms |   2 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `<unknown>`                                                                         |

##### `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA014ExpressionStmtB0V_Tt0g5` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change |     Delta |            % |          Time | Samples | Callee                                                                                     | Location                                                                            |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| removed | -364.00ms | 99.7% → 0.0% | 364.0ms → 0ms | 364 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed |   -2.00ms |  0.5% → 0.0% |   2.0ms → 0ms |   2 → 0 | `$s11SwiftSyntax014ExpressionStmtB0VAA0B19VisitorContinueKindOIggd_AcEIegnd_TR`            | `<unknown>`                                                                         |

##### `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA015LabeledExprListB0V_Tt0g5` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change |     Delta |            % |          Time | Samples | Callee                                                                                     | Location                                                                            |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| removed | -346.00ms | 95.8% → 0.0% | 346.0ms → 0ms | 346 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed |  -14.00ms |  3.9% → 0.0% |  14.0ms → 0ms |  14 → 0 | `$s11SwiftSyntax015LabeledExprListB0VAA0B19VisitorContinueKindOIggd_AcEIegnd_TR`           | `<unknown>`                                                                         |
| removed |   -2.00ms |  0.6% → 0.0% |   2.0ms → 0ms |   2 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `<unknown>`                                                                         |
| removed |   -1.00ms |  0.3% → 0.0% |   1.0ms → 0ms |   1 → 0 | `$s11SwiftSyntax015LabeledExprListB0VIgg_ACIegn_TR`                                        | `<unknown>`                                                                         |

##### `$s11SwiftSyntax0B7VisitorC9visitImpl33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0Vz_xmAA0bC12ContinueKindOxXEyxXEtAA0B8ProtocolRzlFAA013ExtensionDeclB0V_Tt0g5` (`./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift`)

|  Change |     Delta |            % |          Time | Samples | Callee                                                                                     | Location                                                                            |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| removed | -357.00ms | 99.7% → 0.0% | 357.0ms → 0ms | 357 → 0 | `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxVisitor.swift` |
| removed |   -1.00ms |  0.3% → 0.0% |   1.0ms → 0ms |   1 → 0 | `$s11SwiftSyntax013ExtensionDeclB0VAA0B19VisitorContinueKindOIggd_AcEIegnd_TR`             | `<unknown>`                                                                         |

##### `$s11SwiftSyntax0B7VisitorC13visitChildren33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` (`<unknown>`)

|  Change |    Delta |            % |         Time | Samples | Callee                                   | Location                               |
| ------: | -------: | -----------: | -----------: | ------: | ---------------------------------------- | -------------------------------------- |
| removed | -54.00ms | 45.4% → 0.0% | 54.0ms → 0ms |  54 → 0 | `0x3e6630`                               | `/usr/lib/swift/linux/libswiftCore.so` |
| removed | -16.00ms | 13.4% → 0.0% | 16.0ms → 0ms |  16 → 0 | `$s11SwiftSyntax0B0V4InfoC0C4ImplOSgWOe` | `<unknown>`                            |
| removed |  -8.00ms |  6.7% → 0.0% |  8.0ms → 0ms |   8 → 0 | `0x3e6673`                               | `/usr/lib/swift/linux/libswiftCore.so` |
| removed |  -7.00ms |  5.9% → 0.0% |  7.0ms → 0ms |   7 → 0 | `0x3e62dc`                               | `/usr/lib/swift/linux/libswiftCore.so` |
| removed |  -7.00ms |  5.9% → 0.0% |  7.0ms → 0ms |   7 → 0 | `0x3e6648`                               | `/usr/lib/swift/linux/libswiftCore.so` |

##### `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax020c48DeclReferenceExprB0V_8baseName_13argumentNames_5n22AcA0c15UnexpectedNodesx14VSg_AA0c5Tokenx18VAiA0cdh9Argumentsx9VSgAiA0B5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VAsA0cuz9ArgumentsB0VSgASTf1nnnncn_n` (`<unknown>`)

|  Change |    Delta |             % |         Time | Samples | Callee                                                                                                                                                                                                                                                                                                                                                                                                                             | Location     |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| removed | -64.00ms | 100.0% → 0.0% | 64.0ms → 0ms |  64 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax020c48DeclReferenceExprB0V_8baseName_13argumentNames_5n22AcA0c15UnexpectedNodesx14VSg_AA0c5Tokenx18VAiA0cdh9Argumentsx9VSgAiA0B5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0c5TokenB0VAsA0cuz9ArgumentsB0VSgASTf1nnnncn_nTf4nnnndnnnnn_n` | `crtstuff.c` |

##### `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ` (`<unknown>`)

|  Change |    Delta |             % |         Time | Samples | Callee                                                                                                                                                                     | Location                                                                  |
| ------: | -------: | ------------: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| removed | -59.00ms | 100.0% → 0.0% | 59.0ms → 0ms |  59 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZTf4nnnnnd_n` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift` |

##### `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax019c45MemberAccessExprB0V_4base_6period_8declName_5n22AcA0c15UnexpectedNodesx9VSg_AA0cfx14VSgAjA0c5Tokenx22VAjA0c13DeclReferencefx7VAjA0B5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0cwB0VSgAsA0c5TokenB0VAsA0c13DeclReferencewB0VASTf1nnnncn_n` (`<unknown>`)

|  Change |    Delta |             % |         Time | Samples | Callee                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Location     |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| removed | -53.00ms | 100.0% → 0.0% | 53.0ms → 0ms |  53 → 0 | `$s11SwiftSyntax03RawB0V10makeLayout4kind18uninitializedCount29isMaximumNestingLevelOverflow5arena16initializingWithAcA0B4KindO_SiSbAA0B5ArenaChySryACSgGXEtFZ04$s11a9Syntax019c45MemberAccessExprB0V_4base_6period_8declName_5n22AcA0c15UnexpectedNodesx9VSg_AA0cfx14VSgAjA0c5Tokenx22VAjA0c13DeclReferencefx7VAjA0B5r14ChtcfcySryAA0cX9VSgGXEfU_AA0c15UnexpectedNodesB0VSgAA0cwB0VSgAsA0c5TokenB0VAsA0c13DeclReferencewB0VASTf1nnnncn_nTf4nnnndnnnnnnn_n` | `crtstuff.c` |

##### `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzFAA0bC12ContinueKindOAA017DeclReferenceExprB0VcACYbcfu263_AiKcfu264_` (`<unknown>`)

|  Change |    Delta |             % |         Time | Samples | Callee                                                                         | Location                                                                               |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| removed | -43.00ms | 100.0% → 0.0% | 43.0ms → 0ms |  43 → 0 | `$s11SwiftSyntax0B10AnyVisitorC5visityAA0bD12ContinueKindOAA010BorrowExprB0VF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxAnyVisitor.swift` |

##### `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzFAA0bC12ContinueKindOAA017DeclReferenceExprB0VcACYbcfu263_AiKcfu264_TA` (`<unknown>`)

|  Change |    Delta |             % |         Time | Samples | Callee                                                                                                                                               | Location    |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed | -43.00ms | 100.0% → 0.0% | 43.0ms → 0ms |  43 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzFAA0bC12ContinueKindOAA017DeclReferenceExprB0VcACYbcfu263_AiKcfu264_` | `<unknown>` |

##### `$s11SwiftSyntax017DeclReferenceExprB0VAA0B19VisitorContinueKindOIggd_AcEIegnd_TR` (`<unknown>`)

|  Change |    Delta |             % |         Time | Samples | Callee                                                                                                                                                 | Location    |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| removed | -43.00ms | 100.0% → 0.0% | 43.0ms → 0ms |  43 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzFAA0bC12ContinueKindOAA017DeclReferenceExprB0VcACYbcfu263_AiKcfu264_TA` | `<unknown>` |

##### `$s11SwiftSyntax07ParsingB5ArenaCfd` (`<unknown>`)

|  Change |    Delta |             % |         Time | Samples | Callee                       | Location                                                                |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------- | ----------------------------------------------------------------------- |
| removed | -41.00ms | 100.0% → 0.0% | 41.0ms → 0ms |  41 → 0 | `$s11SwiftSyntax0B5ArenaCfd` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxArena.swift` |

##### `$s11SwiftSyntax0B0V4InfoCfD` (`<unknown>`)

|  Change |    Delta |             % |         Time | Samples | Callee     | Location                               |
| ------: | -------: | ------------: | -----------: | ------: | ---------- | -------------------------------------- |
| removed | -41.00ms | 100.0% → 0.0% | 41.0ms → 0ms |  41 → 0 | `0x3e812f` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzF` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Callee     | Location                               |
| ------: | ------: | -----------: | ----------: | ------: | ---------- | -------------------------------------- |
| removed | -8.00ms | 25.8% → 0.0% | 8.0ms → 0ms |   8 → 0 | `0x3e6630` | `/usr/lib/swift/linux/libswiftCore.so` |
| removed | -8.00ms | 25.8% → 0.0% | 8.0ms → 0ms |   8 → 0 | `0x3e6673` | `/usr/lib/swift/linux/libswiftCore.so` |
| removed | -6.00ms | 19.4% → 0.0% | 6.0ms → 0ms |   6 → 0 | `0x3e6648` | `/usr/lib/swift/linux/libswiftCore.so` |
| removed | -5.00ms | 16.1% → 0.0% | 5.0ms → 0ms |   5 → 0 | `0x3e6658` | `/usr/lib/swift/linux/libswiftCore.so` |
| removed | -4.00ms | 12.9% → 0.0% | 4.0ms → 0ms |   4 → 0 | `0x3e66a4` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzFAA0bC12ContinueKindOAA011LabeledExprB0VcACYbcfu623_AiKcfu624_` (`<unknown>`)

|  Change |    Delta |             % |         Time | Samples | Callee                                                                         | Location                                                                               |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| removed | -27.00ms | 100.0% → 0.0% | 27.0ms → 0ms |  27 → 0 | `$s11SwiftSyntax0B10AnyVisitorC5visityAA0bD12ContinueKindOAA010BorrowExprB0VF` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/generated/SyntaxAnyVisitor.swift` |

##### `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzFAA0bC12ContinueKindOAA011LabeledExprB0VcACYbcfu623_AiKcfu624_TA` (`<unknown>`)

|  Change |    Delta |             % |         Time | Samples | Callee                                                                                                                                         | Location    |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed | -27.00ms | 100.0% → 0.0% | 27.0ms → 0ms |  27 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzFAA0bC12ContinueKindOAA011LabeledExprB0VcACYbcfu623_AiKcfu624_` | `<unknown>` |

##### `$s11SwiftSyntax011LabeledExprB0VAA0B19VisitorContinueKindOIggd_AcEIegnd_TR` (`<unknown>`)

|  Change |    Delta |             % |         Time | Samples | Callee                                                                                                                                           | Location    |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| removed | -27.00ms | 100.0% → 0.0% | 27.0ms → 0ms |  27 → 0 | `$s11SwiftSyntax0B7VisitorC5visit33_F966D2E530B0A562820FA4876E472C28LLyyAA0B0VzFAA0bC12ContinueKindOAA011LabeledExprB0VcACYbcfu623_AiKcfu624_TA` | `<unknown>` |

##### `$s11SwiftParser0B0VAA13TokenConsumerA2aDP010consumeAnyC00C0QzyFTW` (`<unknown>`)

|  Change |    Delta |             % |              Time |   Samples | Callee                                                                                                                                                                                    | Location                                                                         |
| ------: | -------: | ------------: | ----------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| removed | -28.00ms |   5.2% → 0.0% |      28.0ms → 0ms |    28 → 0 | `$s11SwiftSyntax03RawB0V11parsedToken4kind9wholeText9textRange8presence15tokenDiagnostic5arenaAcA0cE4KindO_AA0bH0VSnySiGAA14SourcePresenceOAA0eM0VSgAA07ParsingB5ArenaChtFZTf4nnnnnnd_n`  | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`        |
|     new | +26.00ms |   0.0% → 5.0% |      0ms → 26.0ms |    0 → 26 | `$s11SwiftSyntax03RawB0V11parsedToken4kind9wholeText9textRange8presence15tokenDiagnostic5arenaAcA0cE4KindO_AA0bH0VSnySiGAA14SourcePresenceOAA0eM0VSgAA07ParsingcB5ArenaChtFZTf4nnnnnnd_n` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift`        |
|   -3.9% | -20.00ms | 93.7% → 93.3% | 507.0ms → 487.0ms | 507 → 487 | `$s11SwiftParser0B0V15consumeAnyToken0A6Syntax03RaweF0VyF`                                                                                                                                | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Parser.swift`               |
|  +60.0% |  +3.00ms |   0.9% → 1.5% |     5.0ms → 8.0ms |     5 → 8 | `$s11SwiftParser5LexerO14LexemeSequenceV7advanceAC0D0VyF`                                                                                                                                 | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/LexemeSequence.swift` |

##### `$ss25isKnownUniquelyReferencedySbxSgzRlzClF11SwiftSyntax0F0V4InfoC_Tg5` (`<unknown>`)

|  Change |    Delta |            % |         Time | Samples | Callee     | Location                               |
| ------: | -------: | -----------: | -----------: | ------: | ---------- | -------------------------------------- |
| removed | -69.00ms | 84.1% → 0.0% | 69.0ms → 0ms |  69 → 0 | `0x430244` | `/usr/lib/swift/linux/libswiftCore.so` |
| removed |  -6.00ms |  7.3% → 0.0% |  6.0ms → 0ms |   6 → 0 | `0x43028c` | `/usr/lib/swift/linux/libswiftCore.so` |

##### `$sSD_7defaultq_x_q_yXKtciM11SwiftSyntax0C4KindO_SiTg5` (`./Sources/profile/main.swift`)

|  Change |    Delta |             % |            Time | Samples | Callee                                                                                                                    | Location                               |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
|  -17.2% | -11.00ms | 58.7% → 58.9% | 64.0ms → 53.0ms | 64 → 53 | `0x4301f4`                                                                                                                | `/usr/lib/swift/linux/libswiftCore.so` |
|  -37.9% | -11.00ms | 26.6% → 20.0% | 29.0ms → 18.0ms | 29 → 18 | `$ss22__RawDictionaryStorageC4find_9hashValues10_HashTableV6BucketV6bucket_Sb5foundtx_SitSHRzlF11SwiftSyntax0M4KindO_Tg5` | `<unknown>`                            |
| +300.0% |  +3.00ms |   0.9% → 4.4% |   1.0ms → 4.0ms |   1 → 4 | `0x4301fc`                                                                                                                | `/usr/lib/swift/linux/libswiftCore.so` |
|  -18.2% |  -2.00ms | 10.1% → 10.0% |  11.0ms → 9.0ms |  11 → 9 | `$ss22__RawDictionaryStorageC4findys10_HashTableV6BucketV6bucket_Sb5foundtxSHRzlF11SwiftSyntax0K4KindO_Tg5`               | `<unknown>`                            |

##### `$ss7UnicodeO6ScalarV11SwiftParserE6lexing7advance4peekADSgs5UInt8VSgyXE_ALyXEtFZ` (`./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/UnicodeScalarExtensions.swift`)

| Change |    Delta |      % |              Time |   Samples | Callee                                                                                                 | Location                                                                 |
| -----: | -------: | -----: | ----------------: | --------: | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| -10.7% | -13.00ms | 100.0% | 121.0ms → 108.0ms | 121 → 108 | `$s11SwiftParser5LexerO6CursorV30advanceValidatingUTF8Characters7UnicodeO6ScalarVSgyFs5UInt8VSgyXEfU_` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Lexer/Cursor.swift` |

##### `$sSa034_makeUniqueAndReserveCapacityIfNotB0yyF11SwiftSyntax014RawLabeledExprI0V_Tg5` (`<unknown>`)

|  Change |   Delta |             % |           Time | Samples | Callee                                                                                                                                             | Location                               |
| ------: | ------: | ------------: | -------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
|  -80.0% | -4.00ms | 29.4% → 10.0% |  5.0ms → 1.0ms |   5 → 1 | `0x4301f4`                                                                                                                                         | `/usr/lib/swift/linux/libswiftCore.so` |
| removed | -1.00ms |   5.9% → 0.0% |    1.0ms → 0ms |   1 → 0 | `0x43020c`                                                                                                                                         | `/usr/lib/swift/linux/libswiftCore.so` |
|  -10.0% | -1.00ms | 58.8% → 90.0% | 10.0ms → 9.0ms |  10 → 9 | `$ss22_ContiguousArrayBufferV20_consumeAndCreateNew14bufferIsUnique15minimumCapacity13growForAppendAByxGSb_SiSbtF11SwiftSyntax08RawTokenQ0V_Tg5Tm` | `Attributes.swift.o`                   |
| removed | -1.00ms |   5.9% → 0.0% |    1.0ms → 0ms |   1 → 0 | `0x4301fc`                                                                                                                                         | `/usr/lib/swift/linux/libswiftCore.so` |

##### `$ss17_NativeDictionaryV8setValue_6forKey8isUniqueyq_n_xSbtF11SwiftSyntax03RawJ0V2IDV_SiTg5` (`<unknown>`)

| Change |   Delta |             % |           Time | Samples | Callee                                                                                                                     | Location    |
| -----: | ------: | ------------: | -------------: | ------: | -------------------------------------------------------------------------------------------------------------------------- | ----------- |
| -50.0% | -3.00ms | 30.0% → 21.4% |  6.0ms → 3.0ms |   6 → 3 | `$ss17_NativeDictionaryV12ensureUnique02isD08capacityS2b_SitF11SwiftSyntax03RawH0V2IDV_SiTg5`                              | `<unknown>` |
| +25.0% | +2.00ms | 40.0% → 71.4% | 8.0ms → 10.0ms |  8 → 10 | `$ss22__RawDictionaryStorageC4find_9hashValues10_HashTableV6BucketV6bucket_Sb5foundtx_SitSHRzlF11SwiftSyntax0aM0V2IDV_Tg5` | `<unknown>` |
|    new | +1.00ms |   0.0% → 7.1% |    0ms → 1.0ms |   0 → 1 | `$ss22__RawDictionaryStorageC4findys10_HashTableV6BucketV6bucket_Sb5foundtxSHRzlF11SwiftSyntax0aK0V2IDV_Tg5`               | `<unknown>` |

##### `$sSDyq_Sgxcis11SwiftSyntax03RawB0V2IDV_SiTg5` (`<unknown>`)

| Change |   Delta |             % |            Time | Samples | Callee                                                                                       | Location    |
| -----: | ------: | ------------: | --------------: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
| -30.0% | -6.00ms | 90.9% → 87.5% | 20.0ms → 14.0ms | 20 → 14 | `$ss17_NativeDictionaryV8setValue_6forKey8isUniqueyq_n_xSbtF11SwiftSyntax03RawJ0V2IDV_SiTg5` | `<unknown>` |

##### `$sSa6appendyyxnF11SwiftSyntax014RawLabeledExprC0V_Tg5` (`<unknown>`)

| Change |   Delta |             % |            Time | Samples | Callee                                                                                           | Location    |
| -----: | ------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------------------------ | ----------- |
| -41.2% | -7.00ms | 85.0% → 71.4% | 17.0ms → 10.0ms | 17 → 10 | `$sSa034_makeUniqueAndReserveCapacityIfNotB0yyF11SwiftSyntax014RawLabeledExprI0V_Tg5`            | `<unknown>` |
| +33.3% | +1.00ms | 15.0% → 28.6% |   3.0ms → 4.0ms |   3 → 4 | `$sSa36_reserveCapacityAssumingUniqueBuffer8oldCountySi_tF11SwiftSyntax014RawLabeledExprI0V_Tg5` | `<unknown>` |

##### `$sSS8withUTF8yxxSRys5UInt8VGKXEKlF11SwiftParser0E0V_Tg5` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Callee                                                                                                                                                                                                                             | Location                                                           |
| -----: | ------: | -----: | --------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| -33.3% | -5.00ms | 100.0% | 15.0ms → 10.0ms | 15 → 10 | `$s11SwiftParser0B0V6string19maximumNestingLevel15parseTransition12swiftVersion20experimentalFeaturesACSS_SiSgAA016IncrementalParseH0CSgAC0aJ0OSgAC012ExperimentalL0Vtc33_49C1C78A0F05B0599BA164E1178AF97ALlfcACSRys5UInt8VGXEfU_` | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Parser.swift` |

##### `$sSa6appendyyxnF11SwiftSyntax07RawExprC0V_Tg5` (`<unknown>`)

| Change |   Delta |             % |          Time | Samples | Callee                                                                                   | Location                                                                |
| -----: | ------: | ------------: | ------------: | ------: | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| -50.0% | -3.00ms | 66.7% → 60.0% | 6.0ms → 3.0ms |   6 → 3 | `$sSa034_makeUniqueAndReserveCapacityIfNotB0yyF11SwiftSyntax07RawExprI0V_Tg5`            | `./.build/checkouts/swift-syntax/Sources/SwiftParser/Expressions.swift` |
| -33.3% | -1.00ms | 33.3% → 40.0% | 3.0ms → 2.0ms |   3 → 2 | `$sSa36_reserveCapacityAssumingUniqueBuffer8oldCountySi_tF11SwiftSyntax07RawExprI0V_Tg5` | `<unknown>`                                                             |

##### `$sSUss17FixedWidthIntegerRzrlEyxqd__cSzRd__lufCs6UInt32V_SiTt1g5` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Callee                                                                   | Location                                                                  |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| removed | -4.00ms | 100.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `$sSis35_ExpressibleByBuiltinIntegerLiteralssAAP08_builtindE0xBI_tcfCTW` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/Raw/RawSyntax.swift` |

##### `$ss13ManagedBufferCsRi__rlE25withUnsafeMutablePointersyqd_0_qd_0_SpyxG_Spyq_Gtqd__YKXEqd__YKs5ErrorRd__Ri_d_0_r0_lFSi_11SwiftSyntax0I0V4InfoCSgs5NeverOytTg5` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Callee                                                                                                            | Location                                                                      |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| removed | -4.00ms | 100.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `$s11SwiftSyntax0B14InfoRepository33_144A0750A39B358DE708645CE8EF6248LLV4pushyySpyAA0B0V0C0CSgGFySpySiG_AKtXEfU_` | `./.build/checkouts/swift-syntax/Sources/SwiftSyntax/SyntaxNodeFactory.swift` |

##### `$sSp10initialize4from5countySPyxG_SitFs5UInt8V_Tg5` (`<unknown>`)

| Change |   Delta |             % |          Time | Samples | Callee    | Location                               |
| -----: | ------: | ------------: | ------------: | ------: | --------- | -------------------------------------- |
| -42.9% | -3.00ms | 77.8% → 80.0% | 7.0ms → 4.0ms |   7 → 4 | `0xa1a40` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| -50.0% | -1.00ms | 22.2% → 20.0% | 2.0ms → 1.0ms |   2 → 1 | `0xa1a50` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `$sSR13_copyContents12initializingSR8IteratorVyx_G_SitSryxG_tFs5UInt8V_Tg5` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Callee                                               | Location    |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------------------------- | ----------- |
| -44.4% | -4.00ms | 100.0% | 9.0ms → 5.0ms |   9 → 5 | `$sSp10initialize4from5countySPyxG_SitFs5UInt8V_Tg5` | `<unknown>` |

##### `$sSRyxGSTsST13_copyContents12initializing8IteratorQz_SitSry7ElementQzG_tFTWs5UInt8V_Tg5` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Callee                                                                      | Location    |
| -----: | ------: | -----: | ------------: | ------: | --------------------------------------------------------------------------- | ----------- |
| -44.4% | -4.00ms | 100.0% | 9.0ms → 5.0ms |   9 → 5 | `$sSR13_copyContents12initializingSR8IteratorVyx_G_SitSryxG_tFs5UInt8V_Tg5` | `<unknown>` |

##### `$sSr10initialize4from8IteratorQyd___Sitqd___t7ElementQyd__RszSTRd__lFs5UInt8V_SRyAHGTg5` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Callee                                                                                    | Location    |
| -----: | ------: | -----: | ------------: | ------: | ----------------------------------------------------------------------------------------- | ----------- |
| -44.4% | -4.00ms | 100.0% | 9.0ms → 5.0ms |   9 → 5 | `$sSRyxGSTsST13_copyContents12initializing8IteratorQz_SitSry7ElementQzG_tFTWs5UInt8V_Tg5` | `<unknown>` |

##### `$sSa6appendyyxnF11SwiftSyntax017RawPatternBindingC0V_Tg5` (`<unknown>`)

| Change |   Delta |              % |          Time | Samples | Callee                                                                                   | Location    |
| -----: | ------: | -------------: | ------------: | ------: | ---------------------------------------------------------------------------------------- | ----------- |
| -60.0% | -3.00ms | 83.3% → 100.0% | 5.0ms → 2.0ms |   5 → 2 | `$sSa034_makeUniqueAndReserveCapacityIfNotB0yyF11SwiftSyntax017RawPatternBindingI0V_Tg5` | `<unknown>` |

##### `$ss17_NativeDictionaryV20_copyOrMoveAndResize8capacity12moveElementsySi_SbtF11SwiftSyntax03RawL0V2IDV_SiTg5` (`<unknown>`)

|  Change |   Delta |              % |          Time | Samples | Callee                                                                                        | Location                               |
| ------: | ------: | -------------: | ------------: | ------: | --------------------------------------------------------------------------------------------- | -------------------------------------- |
|  -33.3% | -1.00ms | 60.0% → 100.0% | 3.0ms → 2.0ms |   3 → 2 | `$ss17_NativeDictionaryV16_unsafeInsertNew3key5valueyxn_q_ntF11SwiftSyntax03RawI0V2IDV_SiTg5` | `<unknown>`                            |
| removed | -1.00ms |   20.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x2e323c`                                                                                    | `/usr/lib/swift/linux/libswiftCore.so` |
| removed | -1.00ms |   20.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x182623`                                                                                    | `/usr/lib/swift/linux/libswiftCore.so` |

# Allocated native memory profile diff

Allocated 1.11 GiB → 1.15 GiB (+34.571 MiB, +3.0%) over 169,916 samples → 170,620 samples (6.87 KiB → 7.05 KiB per sample).

| Category | Change |       Delta |      % |                Size |           Samples |
| -------- | -----: | ----------: | -----: | ------------------: | ----------------: |
| native   |  +3.0% | +34.571 MiB | 100.0% | 1.11 GiB → 1.15 GiB | 169,916 → 170,620 |

## Hottest functions

### Total size

#### Regressions

Functions with the largest increase in total native bytes allocated in the function and all its callees.

| Change |        Delta |            % |                Size |         Samples | Function                                                      | Location                                               |
| -----: | -----------: | -----------: | ------------------: | --------------: | ------------------------------------------------------------- | ------------------------------------------------------ |
|    new | +326.098 KiB | 0.0% → <0.1% |       0 B → 326 KiB |       0 → 2,778 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000e8010c8400`    |
|  +2.6% | +294.163 KiB |         1.0% | 11.1 MiB → 11.4 MiB | 70,594 → 70,658 | `execute(String[])`                                           | `org.codenarc.CodeNarc`                                |
|  +2.5% | +286.489 KiB |         1.0% | 11.2 MiB → 11.5 MiB | 71,206 → 71,236 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                     |
|  +2.7% | +279.247 KiB |         0.9% | 10.1 MiB → 10.3 MiB | 62,762 → 62,798 | `execute()`                                                   | `org.codenarc.CodeNarcRunner`                          |
| +44.7% | +256.226 KiB | <0.1% → 0.1% |   574 KiB → 830 KiB |   3,343 → 3,321 | `<init>()`                                                    | `org.codenarc.ruleregistry.PropertiesFileRuleRegistry` |
| +44.7% | +256.226 KiB | <0.1% → 0.1% |   574 KiB → 830 KiB |   3,340 → 3,318 | `loadRules()`                                                 | `org.codenarc.ruleregistry.PropertiesFileRuleRegistry` |
| +33.1% | +255.958 KiB |         0.1% |  774 KiB → 1.01 MiB |   4,661 → 4,632 | `initializeRuleRegistry()`                                    | `org.codenarc.CodeNarcRunner`                          |
| +33.5% | +255.958 KiB |         0.1% |  765 KiB → 1021 KiB |   4,582 → 4,553 | `initializeRuleRegistry()`                                    | `org.codenarc.ruleregistry.RuleRegistryInitializer`    |
|  +1.6% | +223.656 KiB |         1.2% | 13.3 MiB → 13.5 MiB | 78,769 → 78,800 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                     |
|  +1.5% | +222.244 KiB |         1.2% | 14.1 MiB → 14.3 MiB | 83,951 → 83,970 | `main(String[])`                                              | `org.codenarc.CodeNarc`                                |
|    new | +146.063 KiB | 0.0% → <0.1% |       0 B → 146 KiB |       0 → 1,009 | `linkToCallSite(Object, Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e8012b8400`    |
|    new | +114.939 KiB | 0.0% → <0.1% |       0 B → 115 KiB |         0 → 748 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e801209c00`    |
| +13.3% | +112.367 KiB |         0.1% |   847 KiB → 959 KiB |     951 → 1,042 | `DeoptimizationBlob`                                          | `<unknown>`                                            |
|  +5.4% |  +89.164 KiB |         0.1% |  1.6 MiB → 1.69 MiB | 15,532 → 15,595 | `getMetaClass()`                                              | `org.codehaus.groovy.reflection.ClassInfo`             |
|    new |  +84.655 KiB | 0.0% → <0.1% |      0 B → 84.7 KiB |         0 → 565 | `linkToCallSite(Object, int, int, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x000000e80130a400`    |
|    new |  +82.461 KiB | 0.0% → <0.1% |      0 B → 82.5 KiB |         0 → 606 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000e8012b2800`    |
|    new |  +72.997 KiB | 0.0% → <0.1% |        0 B → 73 KiB |         0 → 523 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000e8012bfc00`    |
|    new |  +69.763 KiB | 0.0% → <0.1% |      0 B → 69.8 KiB |         0 → 440 | `linkToCallSite(Object, Object, int, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000e801318c00`    |
|    new |  +68.133 KiB | 0.0% → <0.1% |      0 B → 68.1 KiB |         0 → 476 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000e8012aec00`    |
|  +4.8% |  +61.736 KiB |         0.1% | 1.26 MiB → 1.32 MiB | 11,850 → 11,848 | `InterpreterRuntime::_new`                                    | `libjvm.dylib`                                         |

#### Improvements

Functions with the largest decrease in total native bytes allocated in the function and all its callees.

|  Change |        Delta |            % |                Size |         Samples | Function                                                         | Location                                                     |
| ------: | -----------: | -----------: | ------------------: | --------------: | ---------------------------------------------------------------- | ------------------------------------------------------------ |
| removed | -317.047 KiB | <0.1% → 0.0% |       317 KiB → 0 B |       2,756 → 0 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH.0x000000f8010c8400`          |
| removed | -142.852 KiB | <0.1% → 0.0% |       143 KiB → 0 B |       1,025 → 0 | `linkToCallSite(Object, Object, Object, Object, int, Object)`    | `java.lang.invoke.LambdaForm$MH.0x000000f8012b8400`          |
| removed | -109.295 KiB | <0.1% → 0.0% |       109 KiB → 0 B |         701 → 0 | `linkToCallSite(Object, int, Object, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x000000f801209c00`          |
| removed |  -84.055 KiB | <0.1% → 0.0% |      84.1 KiB → 0 B |         537 → 0 | `linkToCallSite(Object, Object, Object, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000f8012bfc00`          |
| removed |  -82.836 KiB | <0.1% → 0.0% |      82.8 KiB → 0 B |         608 → 0 | `linkToCallSite(Object, Object, long, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x000000f8012b2800`          |
| removed |  -68.893 KiB | <0.1% → 0.0% |      68.9 KiB → 0 B |         480 → 0 | `linkToCallSite(Object, long, Object)`                           | `java.lang.invoke.LambdaForm$MH.0x000000f8012aec00`          |
|   -7.0% |  -65.539 KiB |         0.1% |   936 KiB → 870 KiB |   7,982 → 7,977 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`                       |
|   -6.1% |  -64.859 KiB |         0.1% |  1.04 MiB → 995 KiB | 10,229 → 10,226 | `InterpreterRuntime::resolve_from_cache`                         | `libjvm.dylib`                                               |
| removed |  -64.214 KiB | <0.1% → 0.0% |      64.2 KiB → 0 B |         496 → 0 | `linkToCallSite(Object, int, int, Object)`                       | `java.lang.invoke.LambdaForm$MH.0x000000f80130a400`          |
| removed |  -60.552 KiB | <0.1% → 0.0% |      60.6 KiB → 0 B |         441 → 0 | `linkToCallSite(Object, Object, int, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x000000f8010d6400`          |
| removed |  -57.505 KiB | <0.1% → 0.0% |      57.5 KiB → 0 B |         427 → 0 | `linkToCallSite(Object, Object, int, int, Object)`               | `java.lang.invoke.LambdaForm$MH.0x000000f80131ac00`          |
|   -0.6% |  -21.851 KiB |         0.3% | 3.65 MiB → 3.63 MiB | 21,500 → 21,492 | `doPrivileged(PrivilegedAction)`                                 | `java.security.AccessController`                             |
|  -12.5% |  -20.261 KiB |        <0.1% |   162 KiB → 142 KiB |       943 → 913 | `matches(SourceCode)`                                            | `org.codenarc.analyzer.FilesystemSourceAnalyzer`             |
|  -14.7% |  -13.341 KiB |        <0.1% | 90.5 KiB → 77.2 KiB |       790 → 775 | `visitTryCatchFinally(TryCatchStatement)`                        | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`            |
|  -10.0% |  -11.613 KiB |        <0.1% |   116 KiB → 104 KiB |       441 → 406 | `matches(String)`                                                | `org.codenarc.util.WildcardPattern`                          |
|  -13.2% |  -11.138 KiB |        <0.1% | 84.7 KiB → 73.6 KiB |       189 → 151 | `doCall(Object)`                                                 | `org.codenarc.util.WildcardPattern$_matches_closure2`        |
|  -12.0% |  -10.654 KiB |        <0.1% | 88.7 KiB → 78.1 KiB |       561 → 559 | `visitMethodCallExpression(MethodCallExpression)`                | `org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor` |
|  -61.2% |   -9.312 KiB |        <0.1% |  15.2 KiB → 5.9 KiB |         40 → 38 | `visitMethod(MethodNode)`                                        | `org.codenarc.rule.basic.EqualsOverloadedAstVisitor`         |
|   -0.2% |   -8.764 KiB |         0.4% |            4.45 MiB | 20,427 → 20,403 | `getAst()`                                                       | `org.codenarc.source.AbstractSourceCode`                     |
|   -3.2% |   -8.762 KiB |        <0.1% |   273 KiB → 264 KiB |   3,057 → 3,026 | `writeReport(AnalysisContext, Results)`                          | `org.codenarc.report.AbstractReportWriter`                   |

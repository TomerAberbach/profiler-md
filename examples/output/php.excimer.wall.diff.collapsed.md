# Sampling profile diff

Collected 4,164 samples → 3,944 samples (-220 samples, -5.3%).

| Category    | Change | Delta |     % |       Samples |
| ----------- | -----: | ----: | ----: | ------------: |
| Ours        |  -5.3% |  -219 | 99.6% | 4,146 → 3,927 |
| Third-party |  -5.6% |    -1 |  0.4% |       18 → 17 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function             | Location                                                       |
| ------: | ----: | ------------: | --------: | -------------------- | -------------------------------------------------------------- |
|  +51.9% |   +28 |   1.3% → 2.1% |   54 → 82 | `__construct`        | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  +14.1% |   +21 |   3.6% → 4.3% | 149 → 170 | `match`              | `Composer\Pcre\Preg`                                           |
|  +22.6% |   +19 |   2.0% → 2.6% |  84 → 103 | `checkOffsetCapture` | `Composer\Pcre\Preg`                                           |
|   +1.8% |   +12 | 15.8% → 17.0% | 659 → 671 | `findClasses`        | `Composer\ClassMapGenerator\PhpFileParser`                     |
|   +8.4% |    +9 |   2.6% → 2.9% | 107 → 116 | `match`              | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  +35.7% |    +5 |   0.3% → 0.5% |   14 → 19 | `loadClass`          | `Composer\Autoload\ClassLoader`                                |
| +125.0% |    +5 |   0.1% → 0.2% |     4 → 9 | `loadSchema`         | `JsonSchema\Uri\UriRetriever`                                  |
|   +2.8% |    +4 |   3.4% → 3.7% | 143 → 147 | `matchStrictGroups`  | `Composer\Pcre\Preg`                                           |
| +200.0% |    +4 |  <0.1% → 0.2% |     2 → 6 | `current`            | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
| +133.3% |    +4 |   0.1% → 0.2% |     3 → 7 | `getStaticFile`      | `Composer\Autoload\AutoloadGenerator`                          |
|   +7.7% |    +3 |   0.9% → 1.1% |   39 → 42 | `start`              | `Symfony\Component\Process\Process`                            |
|  +37.5% |    +3 |   0.2% → 0.3% |    8 → 11 | `(anonymous)`        | `vendor/composer/autoload_classmap.php`                        |
| +300.0% |    +3 |  <0.1% → 0.1% |     1 → 4 | `isAbsolutePath`     | `Composer\Util\Filesystem`                                     |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `getTlsDefaults`     | `Composer\Util\StreamContextFactory`                           |
| +100.0% |    +2 |  <0.1% → 0.1% |     2 → 4 | `wait`               | `Symfony\Component\Process\Process`                            |
|  +14.3% |    +2 |   0.3% → 0.4% |   14 → 16 | `skipToNewline`      | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  +20.0% |    +2 |   0.2% → 0.3% |   10 → 12 | `getPathCode`        | `Composer\Autoload\AutoloadGenerator`                          |
|  +12.5% |    +2 |   0.4% → 0.5% |   16 → 18 | `findShortestPath`   | `Composer\Util\Filesystem`                                     |
| +200.0% |    +2 |  <0.1% → 0.1% |     1 → 3 | `skipToPhp`          | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `getCwd`             | `Composer\ClassMapGenerator\ClassMapGenerator`                 |

##### Ours

|  Change | Delta |             % |   Samples | Function             | Location                                                       |
| ------: | ----: | ------------: | --------: | -------------------- | -------------------------------------------------------------- |
|  +51.9% |   +28 |   1.3% → 2.1% |   54 → 82 | `__construct`        | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  +14.1% |   +21 |   3.6% → 4.3% | 149 → 170 | `match`              | `Composer\Pcre\Preg`                                           |
|  +22.6% |   +19 |   2.0% → 2.6% |  84 → 103 | `checkOffsetCapture` | `Composer\Pcre\Preg`                                           |
|   +1.8% |   +12 | 15.8% → 17.0% | 659 → 671 | `findClasses`        | `Composer\ClassMapGenerator\PhpFileParser`                     |
|   +8.4% |    +9 |   2.6% → 2.9% | 107 → 116 | `match`              | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  +35.7% |    +5 |   0.3% → 0.5% |   14 → 19 | `loadClass`          | `Composer\Autoload\ClassLoader`                                |
| +125.0% |    +5 |   0.1% → 0.2% |     4 → 9 | `loadSchema`         | `JsonSchema\Uri\UriRetriever`                                  |
|   +2.8% |    +4 |   3.4% → 3.7% | 143 → 147 | `matchStrictGroups`  | `Composer\Pcre\Preg`                                           |
| +200.0% |    +4 |  <0.1% → 0.2% |     2 → 6 | `current`            | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
| +133.3% |    +4 |   0.1% → 0.2% |     3 → 7 | `getStaticFile`      | `Composer\Autoload\AutoloadGenerator`                          |
|   +7.7% |    +3 |   0.9% → 1.1% |   39 → 42 | `start`              | `Symfony\Component\Process\Process`                            |
| +300.0% |    +3 |  <0.1% → 0.1% |     1 → 4 | `isAbsolutePath`     | `Composer\Util\Filesystem`                                     |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `getTlsDefaults`     | `Composer\Util\StreamContextFactory`                           |
| +100.0% |    +2 |  <0.1% → 0.1% |     2 → 4 | `wait`               | `Symfony\Component\Process\Process`                            |
|  +14.3% |    +2 |   0.3% → 0.4% |   14 → 16 | `skipToNewline`      | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  +20.0% |    +2 |   0.2% → 0.3% |   10 → 12 | `getPathCode`        | `Composer\Autoload\AutoloadGenerator`                          |
|  +12.5% |    +2 |   0.4% → 0.5% |   16 → 18 | `findShortestPath`   | `Composer\Util\Filesystem`                                     |
| +200.0% |    +2 |  <0.1% → 0.1% |     1 → 3 | `skipToPhp`          | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `getCwd`             | `Composer\ClassMapGenerator\ClassMapGenerator`                 |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `hasParameterOption` | `Symfony\Component\Console\Input\ArrayInput`                   |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Ours

|  Change | Delta |             % |   Samples | Function                | Location                                                       |
| ------: | ----: | ------------: | --------: | ----------------------- | -------------------------------------------------------------- |
|  -90.4% |  -151 |   4.0% → 0.4% |  167 → 16 | `readFromProcess`       | `Symfony\Component\Console\Terminal`                           |
|  -13.0% |   -35 |   6.5% → 5.9% | 269 → 234 | `call`                  | `Composer\Util\Silencer`                                       |
|   -6.2% |   -27 | 10.4% → 10.3% | 435 → 408 | `clean`                 | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|   -2.5% |   -16 | 15.5% → 15.9% | 645 → 629 | `readAndWrite`          | `Symfony\Component\Process\Pipes\UnixPipes`                    |
|  -19.5% |   -15 |   1.8% → 1.6% |   77 → 62 | `scanPaths`             | `Composer\ClassMapGenerator\ClassMapGenerator`                 |
|   -4.3% |   -12 |   6.6% → 6.7% | 276 → 264 | `pregMatch`             | `Composer\Pcre\Preg`                                           |
|   -7.8% |   -11 |   3.4% → 3.3% | 141 → 130 | `enforceNonNullMatches` | `Composer\Pcre\Preg`                                           |
|   -7.0% |   -10 |   3.4% → 3.3% | 142 → 132 | `isMatchStrictGroups`   | `Composer\Pcre\Preg`                                           |
|   -4.0% |    -8 |          4.9% | 202 → 194 | `skipString`            | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|   -4.3% |    -8 |          4.5% | 187 → 179 | `matchAll`              | `Composer\Pcre\Preg`                                           |
|  -85.7% |    -6 |  0.2% → <0.1% |     7 → 1 | `replace`               | `Composer\Pcre\Preg`                                           |
|  -25.0% |    -5 |   0.5% → 0.4% |   20 → 15 | `normalizePath`         | `Composer\ClassMapGenerator\ClassMapGenerator`                 |
|  -31.3% |    -5 |   0.4% → 0.3% |   16 → 11 | `isMatch`               | `Composer\Pcre\Preg`                                           |
|  -66.7% |    -4 |          0.1% |     6 → 2 | `dump`                  | `Composer\Autoload\AutoloadGenerator`                          |
|  -36.4% |    -4 |   0.3% → 0.2% |    11 → 7 | `next`                  | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  -17.6% |    -3 |          0.4% |   17 → 14 | `replaceCallback`       | `Composer\Pcre\Preg`                                           |
|   -9.1% |    -3 |          0.8% |   33 → 30 | `normalizePath`         | `Composer\Util\Filesystem`                                     |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `unregister`            | `Seld\Signal\SignalHandler`                                    |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `checkSetOrder`         | `Composer\Pcre\Preg`                                           |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `find`                  | `Symfony\Component\Console\Application`                        |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |     Samples | Function              | Location                                                           |
| ------: | ----: | ------------: | ----------: | --------------------- | ------------------------------------------------------------------ |
|   +7.0% |   +35 | 12.1% → 13.6% |   502 → 537 | `match`               | `Composer\Pcre\Preg`                                               |
|   +3.1% |   +31 | 23.8% → 25.9% | 989 → 1,020 | `match`               | `Composer\ClassMapGenerator\PhpFileCleaner`                        |
|  +51.9% |   +28 |   1.3% → 2.1% |     54 → 82 | `__construct`         | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`     |
|   +3.5% |   +27 | 18.5% → 20.2% |   769 → 796 | `matchStrictGroups`   | `Composer\Pcre\Preg`                                               |
|  +49.1% |   +26 |   1.3% → 2.0% |     53 → 79 | `getChildren`         | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`     |
|  +43.6% |   +24 |   1.3% → 2.0% |     55 → 79 | `getChildren`         | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |
|  +22.6% |   +19 |   2.0% → 2.6% |    84 → 103 | `checkOffsetCapture`  | `Composer\Pcre\Preg`                                               |
|   +1.9% |   +17 | 21.9% → 23.5% |   911 → 928 | `isMatchStrictGroups` | `Composer\Pcre\Preg`                                               |
|   +7.1% |    +8 |   2.7% → 3.0% |   112 → 120 | `getPathCode`         | `Composer\Autoload\AutoloadGenerator`                              |
|  +12.1% |    +8 |   1.6% → 1.9% |     66 → 74 | `findShortestPath`    | `Composer\Util\Filesystem`                                         |
| +150.0% |    +6 |   0.1% → 0.3% |      4 → 10 | `loadSchema`          | `JsonSchema\Uri\UriRetriever`                                      |
|  +45.5% |    +5 |   0.3% → 0.4% |     11 → 16 | `init`                | `Symfony\Component\Console\Application`                            |
|  +36.4% |    +4 |   0.3% → 0.4% |     11 → 15 | `getDefaultCommands`  | `Composer\Console\Application`                                     |
|  +57.1% |    +4 |   0.2% → 0.3% |      7 → 11 | `current`             | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`     |
|  +60.0% |    +3 |   0.1% → 0.2% |       5 → 8 | `__construct`         | `Symfony\Component\Console\Command\Command`                        |
|  +23.1% |    +3 |   0.3% → 0.4% |     13 → 16 | `find`                | `Symfony\Component\Console\Application`                            |
|   +6.7% |    +3 |   1.1% → 1.2% |     45 → 48 | `start`               | `Symfony\Component\Process\Process`                                |
|  +37.5% |    +3 |   0.2% → 0.3% |      8 → 11 | `(anonymous)`         | `vendor/composer/autoload_classmap.php`                            |
|  +42.9% |    +3 |   0.2% → 0.3% |      7 → 10 | `retrieve`            | `JsonSchema\Uri\UriRetriever`                                      |
| +300.0% |    +3 |  <0.1% → 0.1% |       1 → 4 | `isAbsolutePath`      | `Composer\Util\Filesystem`                                         |

##### Ours

|  Change | Delta |             % |     Samples | Function              | Location                                                           |
| ------: | ----: | ------------: | ----------: | --------------------- | ------------------------------------------------------------------ |
|   +7.0% |   +35 | 12.1% → 13.6% |   502 → 537 | `match`               | `Composer\Pcre\Preg`                                               |
|   +3.1% |   +31 | 23.8% → 25.9% | 989 → 1,020 | `match`               | `Composer\ClassMapGenerator\PhpFileCleaner`                        |
|  +51.9% |   +28 |   1.3% → 2.1% |     54 → 82 | `__construct`         | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`     |
|   +3.5% |   +27 | 18.5% → 20.2% |   769 → 796 | `matchStrictGroups`   | `Composer\Pcre\Preg`                                               |
|  +49.1% |   +26 |   1.3% → 2.0% |     53 → 79 | `getChildren`         | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`     |
|  +43.6% |   +24 |   1.3% → 2.0% |     55 → 79 | `getChildren`         | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |
|  +22.6% |   +19 |   2.0% → 2.6% |    84 → 103 | `checkOffsetCapture`  | `Composer\Pcre\Preg`                                               |
|   +1.9% |   +17 | 21.9% → 23.5% |   911 → 928 | `isMatchStrictGroups` | `Composer\Pcre\Preg`                                               |
|   +7.1% |    +8 |   2.7% → 3.0% |   112 → 120 | `getPathCode`         | `Composer\Autoload\AutoloadGenerator`                              |
|  +12.1% |    +8 |   1.6% → 1.9% |     66 → 74 | `findShortestPath`    | `Composer\Util\Filesystem`                                         |
| +150.0% |    +6 |   0.1% → 0.3% |      4 → 10 | `loadSchema`          | `JsonSchema\Uri\UriRetriever`                                      |
|  +45.5% |    +5 |   0.3% → 0.4% |     11 → 16 | `init`                | `Symfony\Component\Console\Application`                            |
|  +36.4% |    +4 |   0.3% → 0.4% |     11 → 15 | `getDefaultCommands`  | `Composer\Console\Application`                                     |
|  +57.1% |    +4 |   0.2% → 0.3% |      7 → 11 | `current`             | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`     |
|  +60.0% |    +3 |   0.1% → 0.2% |       5 → 8 | `__construct`         | `Symfony\Component\Console\Command\Command`                        |
|  +23.1% |    +3 |   0.3% → 0.4% |     13 → 16 | `find`                | `Symfony\Component\Console\Application`                            |
|   +6.7% |    +3 |   1.1% → 1.2% |     45 → 48 | `start`               | `Symfony\Component\Process\Process`                                |
|  +42.9% |    +3 |   0.2% → 0.3% |      7 → 10 | `retrieve`            | `JsonSchema\Uri\UriRetriever`                                      |
| +300.0% |    +3 |  <0.1% → 0.1% |       1 → 4 | `isAbsolutePath`      | `Composer\Util\Filesystem`                                         |
|     new |    +3 |   0.0% → 0.1% |       0 → 3 | `create`              | `Seld\Signal\SignalHandler`                                        |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Ours

| Change | Delta |             % |       Samples | Function                  | Location                                       |
| -----: | ----: | ------------: | ------------: | ------------------------- | ---------------------------------------------- |
|  -5.3% |  -220 |        100.0% | 4,164 → 3,944 | `(anonymous)`             | `profile.php`                                  |
|  -5.2% |  -217 | 99.8% → 99.9% | 4,157 → 3,940 | `run`                     | `Symfony\Component\Console\Application`        |
|  -5.2% |  -217 | 99.8% → 99.9% | 4,157 → 3,940 | `run`                     | `Composer\Console\Application`                 |
| -94.4% |  -152 |   3.9% → 0.2% |       161 → 9 | `getHeight`               | `Symfony\Component\Console\Terminal`           |
| -90.4% |  -151 |   4.0% → 0.4% |      167 → 16 | `readFromProcess`         | `Symfony\Component\Console\Terminal`           |
| -90.4% |  -151 |   4.0% → 0.4% |      167 → 16 | `getSttyColumns`          | `Symfony\Component\Console\Terminal`           |
| -90.4% |  -151 |   4.0% → 0.4% |      167 → 16 | `initDimensionsUsingStty` | `Symfony\Component\Console\Terminal`           |
| -90.4% |  -151 |   4.0% → 0.4% |      167 → 16 | `initDimensions`          | `Symfony\Component\Console\Terminal`           |
|  -1.7% |   -67 | 95.8% → 99.5% | 3,990 → 3,923 | `doRun`                   | `Composer\Console\Application`                 |
| -13.2% |   -38 |   6.9% → 6.3% |     287 → 249 | `call`                    | `Composer\Util\Silencer`                       |
|  -1.0% |   -38 | 88.7% → 92.7% | 3,694 → 3,656 | `doRun`                   | `Symfony\Component\Console\Application`        |
|  -1.0% |   -38 | 88.7% → 92.6% | 3,692 → 3,654 | `run`                     | `Symfony\Component\Console\Command\Command`    |
|  -1.0% |   -38 | 88.7% → 92.6% | 3,692 → 3,654 | `doRunCommand`            | `Symfony\Component\Console\Application`        |
|  -0.8% |   -24 | 70.7% → 74.0% | 2,944 → 2,920 | `dump`                    | `Composer\Autoload\AutoloadGenerator`          |
|  -0.7% |   -22 | 70.7% → 74.1% | 2,944 → 2,922 | `execute`                 | `Composer\Command\DumpAutoloadCommand`         |
|  -0.8% |   -19 | 60.5% → 63.4% | 2,520 → 2,501 | `findClasses`             | `Composer\ClassMapGenerator\PhpFileParser`     |
|  -0.6% |   -18 | 66.9% → 70.1% | 2,784 → 2,766 | `scanPaths`               | `Composer\ClassMapGenerator\ClassMapGenerator` |
|  -9.1% |   -18 |   4.7% → 4.5% |     197 → 179 | `matchAll`                | `Composer\Pcre\Preg`                           |
|  -2.1% |   -16 | 18.0% → 18.6% |     748 → 732 | `createComposer`          | `Composer\Factory`                             |
|  -2.1% |   -16 | 18.0% → 18.6% |     748 → 732 | `create`                  | `Composer\Factory`                             |

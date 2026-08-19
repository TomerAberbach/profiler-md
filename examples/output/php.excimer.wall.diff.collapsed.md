# Sampling profile diff

Collected 3,892 samples → 3,896 samples (+4 samples, +0.1%).

| Category    | Change | Delta |             % |       Samples |
| ----------- | -----: | ----: | ------------: | ------------: |
| Ours        |  +0.1% |    +5 | 99.5% → 99.6% | 3,874 → 3,879 |
| Third-party |  -5.6% |    -1 |   0.5% → 0.4% |       18 → 17 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                | Location                                                       |
| ------: | ----: | ------------: | --------: | ----------------------- | -------------------------------------------------------------- |
|  +51.9% |   +27 |   1.3% → 2.0% |   52 → 79 | `scanPaths`             | `Composer\ClassMapGenerator\ClassMapGenerator`                 |
|  +25.0% |   +21 |   2.2% → 2.7% |  84 → 105 | `checkOffsetCapture`    | `Composer\Pcre\Preg`                                           |
|   +2.4% |   +16 | 16.9% → 17.3% | 657 → 673 | `findClasses`           | `Composer\ClassMapGenerator\PhpFileParser`                     |
|  +44.8% |   +13 |   0.7% → 1.1% |   29 → 42 | `normalizePath`         | `Composer\Util\Filesystem`                                     |
|  +28.6% |   +10 |   0.9% → 1.2% |   35 → 45 | `hasChildren`           | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  +13.5% |    +5 |   1.0% → 1.1% |   37 → 42 | `start`                 | `Symfony\Component\Process\Process`                            |
|   +1.8% |    +5 |   7.2% → 7.3% | 279 → 284 | `pregMatch`             | `Composer\Pcre\Preg`                                           |
|  +50.0% |    +5 |   0.3% → 0.4% |   10 → 15 | `skipToNewline`         | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  +44.4% |    +4 |   0.2% → 0.3% |    9 → 13 | `findShortestPath`      | `Composer\Util\Filesystem`                                     |
| +133.3% |    +4 |   0.1% → 0.2% |     3 → 7 | `skipHeredoc`           | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
| +133.3% |    +4 |   0.1% → 0.2% |     3 → 7 | `current`               | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
| +300.0% |    +3 |  <0.1% → 0.1% |     1 → 4 | `wait`                  | `Symfony\Component\Process\Process`                            |
|   +1.6% |    +3 |   4.8% → 4.9% | 187 → 190 | `matchAll`              | `Composer\Pcre\Preg`                                           |
|   +2.4% |    +3 |   3.2% → 3.3% | 124 → 127 | `enforceNonNullMatches` | `Composer\Pcre\Preg`                                           |
| +300.0% |    +3 |  <0.1% → 0.1% |     1 → 4 | `filesAreEqual`         | `Composer\Util\Filesystem`                                     |
|  +37.5% |    +3 |   0.2% → 0.3% |    8 → 11 | `next`                  | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
| +150.0% |    +3 |          0.1% |     2 → 5 | `peek`                  | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `add`                   | `Composer\ClassMapGenerator\FileList`                          |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `(anonymous)`           | `vendor/composer/autoload_namespaces.php`                      |
| +200.0% |    +2 |  <0.1% → 0.1% |     1 → 3 | `doRun`                 | `Composer\Console\Application`                                 |

##### Ours

|  Change | Delta |             % |   Samples | Function                | Location                                                       |
| ------: | ----: | ------------: | --------: | ----------------------- | -------------------------------------------------------------- |
|  +51.9% |   +27 |   1.3% → 2.0% |   52 → 79 | `scanPaths`             | `Composer\ClassMapGenerator\ClassMapGenerator`                 |
|  +25.0% |   +21 |   2.2% → 2.7% |  84 → 105 | `checkOffsetCapture`    | `Composer\Pcre\Preg`                                           |
|   +2.4% |   +16 | 16.9% → 17.3% | 657 → 673 | `findClasses`           | `Composer\ClassMapGenerator\PhpFileParser`                     |
|  +44.8% |   +13 |   0.7% → 1.1% |   29 → 42 | `normalizePath`         | `Composer\Util\Filesystem`                                     |
|  +28.6% |   +10 |   0.9% → 1.2% |   35 → 45 | `hasChildren`           | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  +13.5% |    +5 |   1.0% → 1.1% |   37 → 42 | `start`                 | `Symfony\Component\Process\Process`                            |
|   +1.8% |    +5 |   7.2% → 7.3% | 279 → 284 | `pregMatch`             | `Composer\Pcre\Preg`                                           |
|  +50.0% |    +5 |   0.3% → 0.4% |   10 → 15 | `skipToNewline`         | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  +44.4% |    +4 |   0.2% → 0.3% |    9 → 13 | `findShortestPath`      | `Composer\Util\Filesystem`                                     |
| +133.3% |    +4 |   0.1% → 0.2% |     3 → 7 | `skipHeredoc`           | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
| +133.3% |    +4 |   0.1% → 0.2% |     3 → 7 | `current`               | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
| +300.0% |    +3 |  <0.1% → 0.1% |     1 → 4 | `wait`                  | `Symfony\Component\Process\Process`                            |
|   +1.6% |    +3 |   4.8% → 4.9% | 187 → 190 | `matchAll`              | `Composer\Pcre\Preg`                                           |
|   +2.4% |    +3 |   3.2% → 3.3% | 124 → 127 | `enforceNonNullMatches` | `Composer\Pcre\Preg`                                           |
| +300.0% |    +3 |  <0.1% → 0.1% |     1 → 4 | `filesAreEqual`         | `Composer\Util\Filesystem`                                     |
|  +37.5% |    +3 |   0.2% → 0.3% |    8 → 11 | `next`                  | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
| +150.0% |    +3 |          0.1% |     2 → 5 | `peek`                  | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `add`                   | `Composer\ClassMapGenerator\FileList`                          |
| +200.0% |    +2 |  <0.1% → 0.1% |     1 → 3 | `doRun`                 | `Composer\Console\Application`                                 |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `__construct`           | `Composer\Util\Http\CurlDownloader`                            |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function              | Location                                                           |
| ------: | ----: | ------------: | --------: | --------------------- | ------------------------------------------------------------------ |
|  -14.8% |   -22 |   3.8% → 3.3% | 149 → 127 | `matchStrictGroups`   | `Composer\Pcre\Preg`                                               |
|   -5.9% |   -13 |   5.7% → 5.4% | 222 → 209 | `skipString`          | `Composer\ClassMapGenerator\PhpFileCleaner`                        |
|  -61.9% |   -13 |   0.5% → 0.2% |    21 → 8 | `isMatch`             | `Composer\Pcre\Preg`                                               |
|   -1.9% |   -12 | 16.4% → 16.1% | 638 → 626 | `readAndWrite`        | `Symfony\Component\Process\Pipes\UnixPipes`                        |
|  -44.4% |   -12 |   0.7% → 0.4% |   27 → 15 | `normalizePath`       | `Composer\ClassMapGenerator\ClassMapGenerator`                     |
|  -61.5% |    -8 |   0.3% → 0.1% |    13 → 5 | `getDefaultEnv`       | `Symfony\Component\Process\Process`                                |
|  -57.1% |    -8 |   0.4% → 0.2% |    14 → 6 | `getPathCode`         | `Composer\Autoload\AutoloadGenerator`                              |
|   -1.5% |    -6 | 10.6% → 10.4% | 411 → 405 | `clean`               | `Composer\ClassMapGenerator\PhpFileCleaner`                        |
|   -4.3% |    -6 |   3.6% → 3.4% | 139 → 133 | `isMatchStrictGroups` | `Composer\Pcre\Preg`                                               |
|   -5.3% |    -6 |   2.9% → 2.7% | 113 → 107 | `match`               | `Composer\ClassMapGenerator\PhpFileCleaner`                        |
|  -62.5% |    -5 |   0.2% → 0.1% |     8 → 3 | `dump`                | `Composer\Autoload\AutoloadGenerator`                              |
|  -38.5% |    -5 |   0.3% → 0.2% |    13 → 8 | `(anonymous)`         | `vendor/composer/autoload_classmap.php`                            |
|  -26.7% |    -4 |   0.4% → 0.3% |   15 → 11 | `replaceCallback`     | `Composer\Pcre\Preg`                                               |
|  -50.0% |    -4 |   0.2% → 0.1% |     8 → 4 | `isAccepted`          | `Symfony\Component\Finder\Iterator\MultiplePcreFilterIterator`     |
|  -75.0% |    -3 |  0.1% → <0.1% |     4 → 1 | `getTlsDefaults`      | `Composer\Util\StreamContextFactory`                               |
|  -60.0% |    -3 |          0.1% |     5 → 2 | `accept`              | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |
|  -60.0% |    -3 |          0.1% |     5 → 2 | `getStaticFile`       | `Composer\Autoload\AutoloadGenerator`                              |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `updateStatus`        | `Symfony\Component\Process\Process`                                |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `suppress`            | `Composer\Util\Silencer`                                           |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `__construct`         | `Composer\Console\Application`                                     |

##### Ours

|  Change | Delta |             % |   Samples | Function              | Location                                                           |
| ------: | ----: | ------------: | --------: | --------------------- | ------------------------------------------------------------------ |
|  -14.8% |   -22 |   3.8% → 3.3% | 149 → 127 | `matchStrictGroups`   | `Composer\Pcre\Preg`                                               |
|   -5.9% |   -13 |   5.7% → 5.4% | 222 → 209 | `skipString`          | `Composer\ClassMapGenerator\PhpFileCleaner`                        |
|  -61.9% |   -13 |   0.5% → 0.2% |    21 → 8 | `isMatch`             | `Composer\Pcre\Preg`                                               |
|   -1.9% |   -12 | 16.4% → 16.1% | 638 → 626 | `readAndWrite`        | `Symfony\Component\Process\Pipes\UnixPipes`                        |
|  -44.4% |   -12 |   0.7% → 0.4% |   27 → 15 | `normalizePath`       | `Composer\ClassMapGenerator\ClassMapGenerator`                     |
|  -61.5% |    -8 |   0.3% → 0.1% |    13 → 5 | `getDefaultEnv`       | `Symfony\Component\Process\Process`                                |
|  -57.1% |    -8 |   0.4% → 0.2% |    14 → 6 | `getPathCode`         | `Composer\Autoload\AutoloadGenerator`                              |
|   -1.5% |    -6 | 10.6% → 10.4% | 411 → 405 | `clean`               | `Composer\ClassMapGenerator\PhpFileCleaner`                        |
|   -4.3% |    -6 |   3.6% → 3.4% | 139 → 133 | `isMatchStrictGroups` | `Composer\Pcre\Preg`                                               |
|   -5.3% |    -6 |   2.9% → 2.7% | 113 → 107 | `match`               | `Composer\ClassMapGenerator\PhpFileCleaner`                        |
|  -62.5% |    -5 |   0.2% → 0.1% |     8 → 3 | `dump`                | `Composer\Autoload\AutoloadGenerator`                              |
|  -26.7% |    -4 |   0.4% → 0.3% |   15 → 11 | `replaceCallback`     | `Composer\Pcre\Preg`                                               |
|  -50.0% |    -4 |   0.2% → 0.1% |     8 → 4 | `isAccepted`          | `Symfony\Component\Finder\Iterator\MultiplePcreFilterIterator`     |
|  -75.0% |    -3 |  0.1% → <0.1% |     4 → 1 | `getTlsDefaults`      | `Composer\Util\StreamContextFactory`                               |
|  -60.0% |    -3 |          0.1% |     5 → 2 | `accept`              | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |
|  -60.0% |    -3 |          0.1% |     5 → 2 | `getStaticFile`       | `Composer\Autoload\AutoloadGenerator`                              |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `updateStatus`        | `Symfony\Component\Process\Process`                                |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `suppress`            | `Composer\Util\Silencer`                                           |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `__construct`         | `Composer\Console\Application`                                     |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `getDefaultName`      | `Symfony\Component\Console\Command\Command`                        |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Ours

| Change | Delta |             % |       Samples | Function             | Location                                                           |
| -----: | ----: | ------------: | ------------: | -------------------- | ------------------------------------------------------------------ |
|  +1.0% |   +29 | 73.7% → 74.4% | 2,870 → 2,899 | `dump`               | `Composer\Autoload\AutoloadGenerator`                              |
|  +5.7% |   +29 | 13.0% → 13.8% |     507 → 536 | `match`              | `Composer\Pcre\Preg`                                               |
|  +0.9% |   +27 | 73.8% → 74.4% | 2,872 → 2,899 | `execute`            | `Composer\Command\DumpAutoloadCommand`                             |
|  +1.0% |   +26 | 69.9% → 70.5% | 2,721 → 2,747 | `scanPaths`          | `Composer\ClassMapGenerator\ClassMapGenerator`                     |
| +45.1% |   +23 |   1.3% → 1.9% |       51 → 74 | `normalizePath`      | `Composer\Util\Filesystem`                                         |
| +25.0% |   +21 |   2.2% → 2.7% |      84 → 105 | `checkOffsetCapture` | `Composer\Pcre\Preg`                                               |
|  +0.4% |   +13 | 93.0% → 93.2% | 3,618 → 3,631 | `doRun`              | `Symfony\Component\Console\Application`                            |
|  +0.3% |   +12 | 92.9% → 93.1% | 3,617 → 3,629 | `run`                | `Symfony\Component\Console\Command\Command`                        |
|  +0.3% |   +12 | 92.9% → 93.1% | 3,617 → 3,629 | `doRunCommand`       | `Symfony\Component\Console\Application`                            |
|  +0.3% |   +11 | 99.4% → 99.6% | 3,869 → 3,880 | `doRun`              | `Composer\Console\Application`                                     |
| +31.4% |   +11 |   0.9% → 1.2% |       35 → 46 | `hasChildren`        | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |
|  +0.3% |   +10 | 99.7% → 99.9% | 3,882 → 3,892 | `run`                | `Symfony\Component\Console\Application`                            |
|  +0.3% |   +10 | 99.7% → 99.9% | 3,882 → 3,892 | `run`                | `Composer\Console\Application`                                     |
| +28.6% |   +10 |   0.9% → 1.2% |       35 → 45 | `hasChildren`        | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`     |
|  +7.3% |    +8 |   2.8% → 3.0% |     110 → 118 | `getPathCode`        | `Composer\Autoload\AutoloadGenerator`                              |
| +57.1% |    +8 |   0.4% → 0.6% |       14 → 22 | `skipHeredoc`        | `Composer\ClassMapGenerator\PhpFileCleaner`                        |
|  +0.8% |    +6 | 19.7% → 19.8% |     766 → 772 | `matchStrictGroups`  | `Composer\Pcre\Preg`                                               |
|  +9.4% |    +6 |   1.6% → 1.8% |       64 → 70 | `findShortestPath`   | `Composer\Util\Filesystem`                                         |
|  +1.8% |    +5 |   7.2% → 7.3% |     279 → 284 | `pregMatch`          | `Composer\Pcre\Preg`                                               |
| +50.0% |    +5 |   0.3% → 0.4% |       10 → 15 | `skipToNewline`      | `Composer\ClassMapGenerator\PhpFileCleaner`                        |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Ours

| Change | Delta |             % |       Samples | Function          | Location                                       |
| -----: | ----: | ------------: | ------------: | ----------------- | ---------------------------------------------- |
|  -1.3% |   -21 | 42.4% → 41.8% | 1,649 → 1,628 | `clean`           | `Composer\ClassMapGenerator\PhpFileCleaner`    |
| -39.5% |   -17 |   1.1% → 0.7% |       43 → 26 | `normalizePath`   | `Composer\ClassMapGenerator\ClassMapGenerator` |
|  -2.1% |   -16 | 19.1% → 18.7% |     745 → 729 | `initialize`      | `Composer\Command\BaseCommand`                 |
|  -2.0% |   -15 | 19.1% → 18.7% |     744 → 729 | `createComposer`  | `Composer\Factory`                             |
|  -2.0% |   -15 | 19.1% → 18.7% |     744 → 729 | `create`          | `Composer\Factory`                             |
|  -2.0% |   -15 | 19.1% → 18.7% |     744 → 729 | `getComposer`     | `Composer\Console\Application`                 |
|  -2.0% |   -15 | 19.1% → 18.7% |     744 → 729 | `tryComposer`     | `Composer\Command\BaseCommand`                 |
|  -2.1% |   -15 | 17.9% → 17.5% |     698 → 683 | `runProcess`      | `Composer\Util\ProcessExecutor`                |
|  -2.1% |   -15 | 18.0% → 17.6% |     699 → 684 | `doExecute`       | `Composer\Util\ProcessExecutor`                |
|  -2.1% |   -15 | 18.0% → 17.6% |     700 → 685 | `execute`         | `Composer\Util\ProcessExecutor`                |
|  -1.5% |   -15 | 25.6% → 25.2% |     995 → 980 | `match`           | `Composer\ClassMapGenerator\PhpFileCleaner`    |
|  -2.0% |   -14 | 18.0% → 17.6% |     700 → 686 | `guessVersion`    | `Composer\Package\Version\VersionGuesser`      |
|  -1.8% |   -13 | 18.1% → 17.7% |     703 → 690 | `load`            | `Composer\Package\Loader\RootPackageLoader`    |
|  -1.9% |   -13 | 17.8% → 17.5% |     694 → 681 | `run`             | `Symfony\Component\Process\Process`            |
|  -1.9% |   -12 | 16.4% → 16.1% |     639 → 627 | `readAndWrite`    | `Symfony\Component\Process\Pipes\UnixPipes`    |
|  -1.9% |   -12 | 16.4% → 16.1% |     639 → 627 | `readPipes`       | `Symfony\Component\Process\Process`            |
|  -1.9% |   -12 | 16.5% → 16.2% |     642 → 630 | `wait`            | `Symfony\Component\Process\Process`            |
|  -5.0% |   -11 |   5.7% → 5.4% |     222 → 211 | `skipString`      | `Composer\ClassMapGenerator\PhpFileCleaner`    |
| -25.7% |    -9 |   0.9% → 0.7% |       35 → 26 | `isMatch`         | `Composer\Pcre\Preg`                           |
|  -1.8% |    -8 | 11.7% → 11.5% |     457 → 449 | `guessGitVersion` | `Composer\Package\Version\VersionGuesser`      |

# Sampling profile

Collected 3,944 samples.

| Category    |     % | Samples |
| ----------- | ----: | ------: |
| Ours        | 99.6% |   3,927 |
| Third-party |  0.4% |      17 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

#### Categories

##### Ours

|     % | Samples | Function                | Location                                                       |
| ----: | ------: | ----------------------- | -------------------------------------------------------------- |
| 17.0% |     671 | `findClasses`           | `Composer\ClassMapGenerator\PhpFileParser`                     |
| 15.9% |     629 | `readAndWrite`          | `Symfony\Component\Process\Pipes\UnixPipes`                    |
| 10.3% |     408 | `clean`                 | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  6.7% |     264 | `pregMatch`             | `Composer\Pcre\Preg`                                           |
|  5.9% |     234 | `call`                  | `Composer\Util\Silencer`                                       |
|  4.9% |     194 | `skipString`            | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  4.5% |     179 | `matchAll`              | `Composer\Pcre\Preg`                                           |
|  4.3% |     170 | `match`                 | `Composer\Pcre\Preg`                                           |
|  3.7% |     147 | `matchStrictGroups`     | `Composer\Pcre\Preg`                                           |
|  3.3% |     132 | `isMatchStrictGroups`   | `Composer\Pcre\Preg`                                           |
|  3.3% |     130 | `enforceNonNullMatches` | `Composer\Pcre\Preg`                                           |
|  2.9% |     116 | `match`                 | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  2.6% |     103 | `checkOffsetCapture`    | `Composer\Pcre\Preg`                                           |
|  2.1% |      82 | `__construct`           | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  1.6% |      62 | `scanPaths`             | `Composer\ClassMapGenerator\ClassMapGenerator`                 |
|  1.4% |      55 | `hasChildren`           | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  1.1% |      42 | `start`                 | `Symfony\Component\Process\Process`                            |
|  0.8% |      30 | `normalizePath`         | `Composer\Util\Filesystem`                                     |
|  0.5% |      19 | `loadClass`             | `Composer\Autoload\ClassLoader`                                |
|  0.5% |      18 | `findShortestPath`      | `Composer\Util\Filesystem`                                     |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`)

|      % | Samples | Caller      | Location                                       |
| -----: | ------: | ----------- | ---------------------------------------------- |
| 100.0% |     671 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |     629 | `readPipes` | `Symfony\Component\Process\Process` |

##### `clean` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|      % | Samples | Caller        | Location                                   |
| -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% |     408 | `findClasses` | `Composer\ClassMapGenerator\PhpFileParser` |

##### `pregMatch` (`Composer\Pcre\Preg`)

|      % | Samples | Caller  | Location             |
| -----: | ------: | ------- | -------------------- |
| 100.0% |     264 | `match` | `Composer\Pcre\Preg` |

##### `call` (`Composer\Util\Silencer`)

|     % | Samples | Caller                      | Location                       |
| ----: | ------: | --------------------------- | ------------------------------ |
| 98.7% |     231 | `doRun`                     | `Composer\Console\Application` |
|  0.9% |       2 | `filePutContentsIfModified` | `Composer\Util\Filesystem`     |
|  0.4% |       1 | `getHomeDir`                | `Composer\Factory`             |

##### `skipString` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |     194 | `clean` | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `matchAll` (`Composer\Pcre\Preg`)

|     % | Samples | Caller                 | Location                                   |
| ----: | ------: | ---------------------- | ------------------------------------------ |
| 78.8% |     141 | `matchAllStrictGroups` | `Composer\Pcre\Preg`                       |
| 21.2% |      38 | `findClasses`          | `Composer\ClassMapGenerator\PhpFileParser` |

##### `match` (`Composer\Pcre\Preg`)

|     % | Samples | Caller              | Location             |
| ----: | ------: | ------------------- | -------------------- |
| 97.6% |     166 | `matchStrictGroups` | `Composer\Pcre\Preg` |
|  2.4% |       4 | `isMatch`           | `Composer\Pcre\Preg` |

##### `matchStrictGroups` (`Composer\Pcre\Preg`)

|      % | Samples | Caller                | Location             |
| -----: | ------: | --------------------- | -------------------- |
| 100.0% |     147 | `isMatchStrictGroups` | `Composer\Pcre\Preg` |

##### `isMatchStrictGroups` (`Composer\Pcre\Preg`)

|     % | Samples | Caller          | Location                                    |
| ----: | ------: | --------------- | ------------------------------------------- |
| 96.2% |     127 | `match`         | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  3.8% |       5 | `normalizePath` | `Composer\Util\Filesystem`                  |

##### `enforceNonNullMatches` (`Composer\Pcre\Preg`)

|      % | Samples | Caller              | Location             |
| -----: | ------: | ------------------- | -------------------- |
| 100.0% |     130 | `matchStrictGroups` | `Composer\Pcre\Preg` |

##### `match` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |     116 | `clean` | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `checkOffsetCapture` (`Composer\Pcre\Preg`)

|      % | Samples | Caller  | Location             |
| -----: | ------: | ------- | -------------------- |
| 100.0% |     103 | `match` | `Composer\Pcre\Preg` |

##### `__construct` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`)

|     % | Samples | Caller              | Location                                                       |
| ----: | ------: | ------------------- | -------------------------------------------------------------- |
| 93.9% |      77 | `getChildren`       | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  6.1% |       5 | `searchInDirectory` | `Symfony\Component\Finder\Finder`                              |

##### `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`)

|      % | Samples | Caller | Location                              |
| -----: | ------: | ------ | ------------------------------------- |
| 100.0% |      62 | `dump` | `Composer\Autoload\AutoloadGenerator` |

##### `hasChildren` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`)

|      % | Samples | Caller        | Location                                                           |
| -----: | ------: | ------------- | ------------------------------------------------------------------ |
| 100.0% |      55 | `hasChildren` | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |

##### `start` (`Symfony\Component\Process\Process`)

|      % | Samples | Caller | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |      42 | `run`  | `Symfony\Component\Process\Process` |

##### `normalizePath` (`Composer\Util\Filesystem`)

|     % | Samples | Caller             | Location                              |
| ----: | ------: | ------------------ | ------------------------------------- |
| 50.0% |      15 | `getPathCode`      | `Composer\Autoload\AutoloadGenerator` |
| 50.0% |      15 | `findShortestPath` | `Composer\Util\Filesystem`            |

##### `loadClass` (`Composer\Autoload\ClassLoader`)

|     % | Samples | Caller               | Location                                |
| ----: | ------: | -------------------- | --------------------------------------- |
| 21.1% |       4 | `createComposer`     | `Composer\Factory`                      |
| 15.8% |       3 | `getDefaultCommands` | `Composer\Console\Application`          |
| 10.5% |       2 | `doRun`              | `Composer\Console\Application`          |
| 10.5% |       2 | `createInstanceFor`  | `JsonSchema\Constraints\Factory`        |
|  5.3% |       1 | `__construct`        | `Symfony\Component\Console\Application` |

##### `findShortestPath` (`Composer\Util\Filesystem`)

|      % | Samples | Caller        | Location                              |
| -----: | ------: | ------------- | ------------------------------------- |
| 100.0% |      18 | `getPathCode` | `Composer\Autoload\AutoloadGenerator` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

#### Categories

##### Ours

|      % | Samples | Function              | Location                                       |
| -----: | ------: | --------------------- | ---------------------------------------------- |
| 100.0% |   3,944 | `(anonymous)`         | `profile.php`                                  |
|  99.9% |   3,940 | `run`                 | `Symfony\Component\Console\Application`        |
|  99.9% |   3,940 | `run`                 | `Composer\Console\Application`                 |
|  99.5% |   3,923 | `doRun`               | `Composer\Console\Application`                 |
|  92.7% |   3,656 | `doRun`               | `Symfony\Component\Console\Application`        |
|  92.6% |   3,654 | `run`                 | `Symfony\Component\Console\Command\Command`    |
|  92.6% |   3,654 | `doRunCommand`        | `Symfony\Component\Console\Application`        |
|  74.1% |   2,922 | `execute`             | `Composer\Command\DumpAutoloadCommand`         |
|  74.0% |   2,920 | `dump`                | `Composer\Autoload\AutoloadGenerator`          |
|  70.1% |   2,766 | `scanPaths`           | `Composer\ClassMapGenerator\ClassMapGenerator` |
|  63.4% |   2,501 | `findClasses`         | `Composer\ClassMapGenerator\PhpFileParser`     |
|  41.8% |   1,648 | `clean`               | `Composer\ClassMapGenerator\PhpFileCleaner`    |
|  25.9% |   1,020 | `match`               | `Composer\ClassMapGenerator\PhpFileCleaner`    |
|  23.5% |     928 | `isMatchStrictGroups` | `Composer\Pcre\Preg`                           |
|  20.2% |     796 | `matchStrictGroups`   | `Composer\Pcre\Preg`                           |
|  18.6% |     732 | `createComposer`      | `Composer\Factory`                             |
|  18.6% |     732 | `create`              | `Composer\Factory`                             |
|  18.6% |     732 | `getComposer`         | `Composer\Console\Application`                 |
|  18.6% |     732 | `tryComposer`         | `Composer\Command\BaseCommand`                 |
|  18.6% |     732 | `initialize`          | `Composer\Command\BaseCommand`                 |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`profile.php`)

|     % | Samples | Callee        | Location                        |
| ----: | ------: | ------------- | ------------------------------- |
| 99.9% |   3,940 | `run`         | `Composer\Console\Application`  |
|  0.1% |       2 | `__construct` | `Composer\Console\Application`  |
| <0.1% |       1 | `(anonymous)` | `composer/src/bootstrap.php`    |
| <0.1% |       1 | `loadClass`   | `Composer\Autoload\ClassLoader` |

##### `run` (`Symfony\Component\Console\Application`)

|     % | Samples | Callee        | Location                                |
| ----: | ------: | ------------- | --------------------------------------- |
| 99.6% |   3,923 | `doRun`       | `Composer\Console\Application`          |
|  0.2% |       9 | `getHeight`   | `Symfony\Component\Console\Terminal`    |
|  0.2% |       7 | `getWidth`    | `Symfony\Component\Console\Terminal`    |
| <0.1% |       1 | `configureIO` | `Symfony\Component\Console\Application` |

##### `run` (`Composer\Console\Application`)

|      % | Samples | Callee | Location                                |
| -----: | ------: | ------ | --------------------------------------- |
| 100.0% |   3,940 | `run`  | `Symfony\Component\Console\Application` |

##### `doRun` (`Composer\Console\Application`)

|     % | Samples | Callee       | Location                                |
| ----: | ------: | ------------ | --------------------------------------- |
| 93.2% |   3,656 | `doRun`      | `Symfony\Component\Console\Application` |
|  6.3% |     246 | `call`       | `Composer\Util\Silencer`                |
|  0.4% |      16 | `find`       | `Symfony\Component\Console\Application` |
|  0.1% |       2 | `loadClass`  | `Composer\Autoload\ClassLoader`         |
| <0.1% |       1 | `isReadable` | `Composer\Util\Filesystem`              |

##### `doRun` (`Symfony\Component\Console\Application`)

|     % | Samples | Callee          | Location                                |
| ----: | ------: | --------------- | --------------------------------------- |
| 99.9% |   3,654 | `doRunCommand`  | `Symfony\Component\Console\Application` |
|  0.1% |       2 | `getDefinition` | `Symfony\Component\Console\Application` |

##### `run` (`Symfony\Component\Console\Command\Command`)

|     % | Samples | Callee       | Location                               |
| ----: | ------: | ------------ | -------------------------------------- |
| 80.0% |   2,922 | `execute`    | `Composer\Command\DumpAutoloadCommand` |
| 20.0% |     732 | `initialize` | `Composer\Command\BaseCommand`         |

##### `doRunCommand` (`Symfony\Component\Console\Application`)

|      % | Samples | Callee | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |   3,654 | `run`  | `Symfony\Component\Console\Command\Command` |

##### `execute` (`Composer\Command\DumpAutoloadCommand`)

|     % | Samples | Callee      | Location                                |
| ----: | ------: | ----------- | --------------------------------------- |
| 99.9% |   2,920 | `dump`      | `Composer\Autoload\AutoloadGenerator`   |
| <0.1% |       1 | `getOption` | `Symfony\Component\Console\Input\Input` |

##### `dump` (`Composer\Autoload\AutoloadGenerator`)

|     % | Samples | Callee                      | Location                                       |
| ----: | ------: | --------------------------- | ---------------------------------------------- |
| 94.7% |   2,766 | `scanPaths`                 | `Composer\ClassMapGenerator\ClassMapGenerator` |
|  4.1% |     120 | `getPathCode`               | `Composer\Autoload\AutoloadGenerator`          |
|  0.7% |      20 | `getStaticFile`             | `Composer\Autoload\AutoloadGenerator`          |
|  0.1% |       4 | `safeCopy`                  | `Composer\Util\Filesystem`                     |
|  0.1% |       3 | `filePutContentsIfModified` | `Composer\Util\Filesystem`                     |

##### `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`)

|     % | Samples | Callee          | Location                                                           |
| ----: | ------: | --------------- | ------------------------------------------------------------------ |
| 90.4% |   2,501 | `findClasses`   | `Composer\ClassMapGenerator\PhpFileParser`                         |
|  2.9% |      79 | `getChildren`   | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |
|  2.0% |      55 | `hasChildren`   | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |
|  0.9% |      25 | `normalizePath` | `Composer\ClassMapGenerator\ClassMapGenerator`                     |
|  0.4% |      11 | `current`       | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`     |

##### `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`)

|     % | Samples | Callee                 | Location                                    |
| ----: | ------: | ---------------------- | ------------------------------------------- |
| 65.9% |   1,648 | `clean`                | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  5.8% |     144 | `matchAllStrictGroups` | `Composer\Pcre\Preg`                        |
|  1.5% |      38 | `matchAll`             | `Composer\Pcre\Preg`                        |

##### `clean` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|     % | Samples | Callee        | Location                                    |
| ----: | ------: | ------------- | ------------------------------------------- |
| 61.8% |   1,018 | `match`       | `Composer\ClassMapGenerator\PhpFileCleaner` |
| 11.8% |     195 | `skipString`  | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  1.3% |      21 | `skipHeredoc` | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  0.2% |       4 | `skipToPhp`   | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  0.1% |       1 | `peek`        | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `match` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|     % | Samples | Callee                | Location             |
| ----: | ------: | --------------------- | -------------------- |
| 88.6% |     904 | `isMatchStrictGroups` | `Composer\Pcre\Preg` |

##### `isMatchStrictGroups` (`Composer\Pcre\Preg`)

|     % | Samples | Callee              | Location             |
| ----: | ------: | ------------------- | -------------------- |
| 85.8% |     796 | `matchStrictGroups` | `Composer\Pcre\Preg` |

##### `matchStrictGroups` (`Composer\Pcre\Preg`)

|     % | Samples | Callee                  | Location             |
| ----: | ------: | ----------------------- | -------------------- |
| 65.2% |     519 | `match`                 | `Composer\Pcre\Preg` |
| 16.3% |     130 | `enforceNonNullMatches` | `Composer\Pcre\Preg` |

##### `createComposer` (`Composer\Factory`)

|     % | Samples | Callee                  | Location                                    |
| ----: | ------: | ----------------------- | ------------------------------------------- |
| 95.2% |     697 | `load`                  | `Composer\Package\Loader\RootPackageLoader` |
|  1.9% |      14 | `validateSchema`        | `Composer\Json\JsonFile`                    |
|  0.7% |       5 | `createHttpDownloader`  | `Composer\Factory`                          |
|  0.5% |       4 | `loadClass`             | `Composer\Autoload\ClassLoader`             |
|  0.3% |       2 | `createDownloadManager` | `Composer\Factory`                          |

##### `create` (`Composer\Factory`)

|      % | Samples | Callee           | Location           |
| -----: | ------: | ---------------- | ------------------ |
| 100.0% |     732 | `createComposer` | `Composer\Factory` |

##### `getComposer` (`Composer\Console\Application`)

|      % | Samples | Callee   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |     732 | `create` | `Composer\Factory` |

##### `tryComposer` (`Composer\Command\BaseCommand`)

|      % | Samples | Callee        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     732 | `getComposer` | `Composer\Console\Application` |

##### `initialize` (`Composer\Command\BaseCommand`)

|      % | Samples | Callee        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     732 | `tryComposer` | `Composer\Command\BaseCommand` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `doRun` (`Composer\Console\Application`) ← `run` (`Symfony\Component\Console\Application`) ← `run` (`Composer\Console\Application`) ← `(anonymous)` (`profile.php`)

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17.0% |     671 | `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                                                                                                 |
| 10.3% |     408 | `clean` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                                         |
|  7.1% |     279 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessGitVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                        |
|  6.3% |     248 | `pregMatch` (`Composer\Pcre\Preg`) ← `match` ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                  |
|  5.9% |     231 | `call` (`Composer\Util\Silencer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  4.9% |     194 | `skipString` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                          |
|  4.1% |     163 | `match` (`Composer\Pcre\Preg`) ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                |
|  3.6% |     141 | `matchAll` (`Composer\Pcre\Preg`) ← `matchAllStrictGroups` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                                    |
|  3.5% |     140 | `matchStrictGroups` (`Composer\Pcre\Preg`) ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                          |
|  3.5% |     138 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `versionFromGitTags` (`Composer\Package\Version\VersionGuesser`) ← `guessGitVersion` ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` |
|  3.2% |     127 | `enforceNonNullMatches` (`Composer\Pcre\Preg`) ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                |
|  3.2% |     126 | `isMatchStrictGroups` (`Composer\Pcre\Preg`) ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                |
|  2.9% |     116 | `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                               |
|  2.5% |      98 | `checkOffsetCapture` (`Composer\Pcre\Preg`) ← `match` ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                         |
|  2.5% |      97 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessFossilVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                     |
|  2.0% |      77 | `__construct` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`) ← `getChildren` ← `getChildren` (`Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                        |
|  1.6% |      62 | `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                                                                                                                                                              |
|  1.4% |      55 | `hasChildren` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`) ← `hasChildren` (`Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                        |
|  1.4% |      54 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessSvnVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                        |
|  1.3% |      53 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessHgVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                         |

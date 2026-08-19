# Sampling profile

Collected 3,896 samples.

| Category    |     % | Samples |
| ----------- | ----: | ------: |
| Ours        | 99.6% |   3,879 |
| Third-party |  0.4% |      17 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

#### Categories

##### Ours

|     % | Samples | Function                | Location                                                       |
| ----: | ------: | ----------------------- | -------------------------------------------------------------- |
| 17.3% |     673 | `findClasses`           | `Composer\ClassMapGenerator\PhpFileParser`                     |
| 16.1% |     626 | `readAndWrite`          | `Symfony\Component\Process\Pipes\UnixPipes`                    |
| 10.4% |     405 | `clean`                 | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  7.3% |     284 | `pregMatch`             | `Composer\Pcre\Preg`                                           |
|  5.5% |     215 | `call`                  | `Composer\Util\Silencer`                                       |
|  5.4% |     209 | `skipString`            | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  4.9% |     190 | `matchAll`              | `Composer\Pcre\Preg`                                           |
|  3.8% |     148 | `match`                 | `Composer\Pcre\Preg`                                           |
|  3.4% |     133 | `isMatchStrictGroups`   | `Composer\Pcre\Preg`                                           |
|  3.3% |     127 | `matchStrictGroups`     | `Composer\Pcre\Preg`                                           |
|  3.3% |     127 | `enforceNonNullMatches` | `Composer\Pcre\Preg`                                           |
|  2.7% |     107 | `match`                 | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  2.7% |     105 | `checkOffsetCapture`    | `Composer\Pcre\Preg`                                           |
|  2.0% |      79 | `scanPaths`             | `Composer\ClassMapGenerator\ClassMapGenerator`                 |
|  1.4% |      56 | `__construct`           | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  1.2% |      45 | `hasChildren`           | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  1.1% |      42 | `start`                 | `Symfony\Component\Process\Process`                            |
|  1.1% |      42 | `normalizePath`         | `Composer\Util\Filesystem`                                     |
|  0.4% |      17 | `loadClass`             | `Composer\Autoload\ClassLoader`                                |
|  0.4% |      15 | `normalizePath`         | `Composer\ClassMapGenerator\ClassMapGenerator`                 |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`)

|      % | Samples | Caller      | Location                                       |
| -----: | ------: | ----------- | ---------------------------------------------- |
| 100.0% |     673 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |     626 | `readPipes` | `Symfony\Component\Process\Process` |

##### `clean` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|      % | Samples | Caller        | Location                                   |
| -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% |     405 | `findClasses` | `Composer\ClassMapGenerator\PhpFileParser` |

##### `pregMatch` (`Composer\Pcre\Preg`)

|      % | Samples | Caller  | Location             |
| -----: | ------: | ------- | -------------------- |
| 100.0% |     284 | `match` | `Composer\Pcre\Preg` |

##### `call` (`Composer\Util\Silencer`)

|     % | Samples | Caller                      | Location                       |
| ----: | ------: | --------------------------- | ------------------------------ |
| 97.7% |     210 | `doRun`                     | `Composer\Console\Application` |
|  2.3% |       5 | `filePutContentsIfModified` | `Composer\Util\Filesystem`     |

##### `skipString` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |     209 | `clean` | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `matchAll` (`Composer\Pcre\Preg`)

|     % | Samples | Caller                 | Location                                   |
| ----: | ------: | ---------------------- | ------------------------------------------ |
| 74.2% |     141 | `matchAllStrictGroups` | `Composer\Pcre\Preg`                       |
| 25.8% |      49 | `findClasses`          | `Composer\ClassMapGenerator\PhpFileParser` |

##### `match` (`Composer\Pcre\Preg`)

|     % | Samples | Caller              | Location             |
| ----: | ------: | ------------------- | -------------------- |
| 95.3% |     141 | `matchStrictGroups` | `Composer\Pcre\Preg` |
|  4.7% |       7 | `isMatch`           | `Composer\Pcre\Preg` |

##### `isMatchStrictGroups` (`Composer\Pcre\Preg`)

|     % | Samples | Caller          | Location                                    |
| ----: | ------: | --------------- | ------------------------------------------- |
| 96.2% |     128 | `match`         | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  3.8% |       5 | `normalizePath` | `Composer\Util\Filesystem`                  |

##### `matchStrictGroups` (`Composer\Pcre\Preg`)

|      % | Samples | Caller                | Location             |
| -----: | ------: | --------------------- | -------------------- |
| 100.0% |     127 | `isMatchStrictGroups` | `Composer\Pcre\Preg` |

##### `enforceNonNullMatches` (`Composer\Pcre\Preg`)

|      % | Samples | Caller              | Location             |
| -----: | ------: | ------------------- | -------------------- |
| 100.0% |     127 | `matchStrictGroups` | `Composer\Pcre\Preg` |

##### `match` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |     107 | `clean` | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `checkOffsetCapture` (`Composer\Pcre\Preg`)

|     % | Samples | Caller     | Location             |
| ----: | ------: | ---------- | -------------------- |
| 99.0% |     104 | `match`    | `Composer\Pcre\Preg` |
|  1.0% |       1 | `matchAll` | `Composer\Pcre\Preg` |

##### `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`)

|      % | Samples | Caller | Location                              |
| -----: | ------: | ------ | ------------------------------------- |
| 100.0% |      79 | `dump` | `Composer\Autoload\AutoloadGenerator` |

##### `__construct` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`)

|     % | Samples | Caller              | Location                                                       |
| ----: | ------: | ------------------- | -------------------------------------------------------------- |
| 96.4% |      54 | `getChildren`       | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  3.6% |       2 | `searchInDirectory` | `Symfony\Component\Finder\Finder`                              |

##### `hasChildren` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`)

|      % | Samples | Caller        | Location                                                           |
| -----: | ------: | ------------- | ------------------------------------------------------------------ |
| 100.0% |      45 | `hasChildren` | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |

##### `start` (`Symfony\Component\Process\Process`)

|      % | Samples | Caller | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |      42 | `run`  | `Symfony\Component\Process\Process` |

##### `normalizePath` (`Composer\Util\Filesystem`)

|     % | Samples | Caller             | Location                              |
| ----: | ------: | ------------------ | ------------------------------------- |
| 54.8% |      23 | `getPathCode`      | `Composer\Autoload\AutoloadGenerator` |
| 45.2% |      19 | `findShortestPath` | `Composer\Util\Filesystem`            |

##### `loadClass` (`Composer\Autoload\ClassLoader`)

|     % | Samples | Caller                  | Location                                           |
| ----: | ------: | ----------------------- | -------------------------------------------------- |
| 11.8% |       2 | `doRun`                 | `Composer\Console\Application`                     |
| 11.8% |       2 | `createComposer`        | `Composer\Factory`                                 |
| 11.8% |       2 | `createDownloadManager` | `Composer\Factory`                                 |
|  5.9% |       1 | `getDefaultCommands`    | `Symfony\Component\Console\Application`            |
|  5.9% |       1 | `(anonymous)`           | `composer/src/Composer/Command/DependsCommand.php` |

##### `normalizePath` (`Composer\ClassMapGenerator\ClassMapGenerator`)

|      % | Samples | Caller      | Location                                       |
| -----: | ------: | ----------- | ---------------------------------------------- |
| 100.0% |      15 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

#### Categories

##### Ours

|      % | Samples | Function              | Location                                       |
| -----: | ------: | --------------------- | ---------------------------------------------- |
| 100.0% |   3,896 | `(anonymous)`         | `profile.php`                                  |
|  99.9% |   3,892 | `run`                 | `Symfony\Component\Console\Application`        |
|  99.9% |   3,892 | `run`                 | `Composer\Console\Application`                 |
|  99.6% |   3,880 | `doRun`               | `Composer\Console\Application`                 |
|  93.2% |   3,631 | `doRun`               | `Symfony\Component\Console\Application`        |
|  93.1% |   3,629 | `run`                 | `Symfony\Component\Console\Command\Command`    |
|  93.1% |   3,629 | `doRunCommand`        | `Symfony\Component\Console\Application`        |
|  74.4% |   2,899 | `dump`                | `Composer\Autoload\AutoloadGenerator`          |
|  74.4% |   2,899 | `execute`             | `Composer\Command\DumpAutoloadCommand`         |
|  70.5% |   2,747 | `scanPaths`           | `Composer\ClassMapGenerator\ClassMapGenerator` |
|  64.1% |   2,496 | `findClasses`         | `Composer\ClassMapGenerator\PhpFileParser`     |
|  41.8% |   1,628 | `clean`               | `Composer\ClassMapGenerator\PhpFileCleaner`    |
|  25.2% |     980 | `match`               | `Composer\ClassMapGenerator\PhpFileCleaner`    |
|  23.2% |     905 | `isMatchStrictGroups` | `Composer\Pcre\Preg`                           |
|  19.8% |     772 | `matchStrictGroups`   | `Composer\Pcre\Preg`                           |
|  18.7% |     729 | `createComposer`      | `Composer\Factory`                             |
|  18.7% |     729 | `create`              | `Composer\Factory`                             |
|  18.7% |     729 | `getComposer`         | `Composer\Console\Application`                 |
|  18.7% |     729 | `tryComposer`         | `Composer\Command\BaseCommand`                 |
|  18.7% |     729 | `initialize`          | `Composer\Command\BaseCommand`                 |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`profile.php`)

|     % | Samples | Callee        | Location                        |
| ----: | ------: | ------------- | ------------------------------- |
| 99.9% |   3,892 | `run`         | `Composer\Console\Application`  |
|  0.1% |       3 | `loadClass`   | `Composer\Autoload\ClassLoader` |
| <0.1% |       1 | `(anonymous)` | `composer/src/bootstrap.php`    |

##### `run` (`Symfony\Component\Console\Application`)

|     % | Samples | Callee      | Location                             |
| ----: | ------: | ----------- | ------------------------------------ |
| 99.7% |   3,880 | `doRun`     | `Composer\Console\Application`       |
|  0.2% |       7 | `getHeight` | `Symfony\Component\Console\Terminal` |
|  0.1% |       5 | `getWidth`  | `Symfony\Component\Console\Terminal` |

##### `run` (`Composer\Console\Application`)

|      % | Samples | Callee | Location                                |
| -----: | ------: | ------ | --------------------------------------- |
| 100.0% |   3,892 | `run`  | `Symfony\Component\Console\Application` |

##### `doRun` (`Composer\Console\Application`)

|     % | Samples | Callee      | Location                                |
| ----: | ------: | ----------- | --------------------------------------- |
| 93.6% |   3,631 | `doRun`     | `Symfony\Component\Console\Application` |
|  5.7% |     223 | `call`      | `Composer\Util\Silencer`                |
|  0.4% |      15 | `find`      | `Symfony\Component\Console\Application` |
|  0.1% |       3 | `loadClass` | `Composer\Autoload\ClassLoader`         |
|  0.1% |       2 | `getCwd`    | `Composer\Util\Platform`                |

##### `doRun` (`Symfony\Component\Console\Application`)

|     % | Samples | Callee          | Location                                |
| ----: | ------: | --------------- | --------------------------------------- |
| 99.9% |   3,629 | `doRunCommand`  | `Symfony\Component\Console\Application` |
|  0.1% |       2 | `getDefinition` | `Symfony\Component\Console\Application` |

##### `run` (`Symfony\Component\Console\Command\Command`)

|     % | Samples | Callee       | Location                                |
| ----: | ------: | ------------ | --------------------------------------- |
| 79.9% |   2,899 | `execute`    | `Composer\Command\DumpAutoloadCommand`  |
| 20.1% |     729 | `initialize` | `Composer\Command\BaseCommand`          |
| <0.1% |       1 | `validate`   | `Symfony\Component\Console\Input\Input` |

##### `doRunCommand` (`Symfony\Component\Console\Application`)

|      % | Samples | Callee | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |   3,629 | `run`  | `Symfony\Component\Console\Command\Command` |

##### `dump` (`Composer\Autoload\AutoloadGenerator`)

|     % | Samples | Callee                      | Location                                       |
| ----: | ------: | --------------------------- | ---------------------------------------------- |
| 94.8% |   2,747 | `scanPaths`                 | `Composer\ClassMapGenerator\ClassMapGenerator` |
|  4.1% |     118 | `getPathCode`               | `Composer\Autoload\AutoloadGenerator`          |
|  0.6% |      18 | `getStaticFile`             | `Composer\Autoload\AutoloadGenerator`          |
|  0.2% |       6 | `filePutContentsIfModified` | `Composer\Util\Filesystem`                     |
|  0.1% |       4 | `safeCopy`                  | `Composer\Util\Filesystem`                     |

##### `execute` (`Composer\Command\DumpAutoloadCommand`)

|      % | Samples | Callee | Location                              |
| -----: | ------: | ------ | ------------------------------------- |
| 100.0% |   2,899 | `dump` | `Composer\Autoload\AutoloadGenerator` |

##### `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`)

|     % | Samples | Callee          | Location                                                           |
| ----: | ------: | --------------- | ------------------------------------------------------------------ |
| 90.9% |   2,496 | `findClasses`   | `Composer\ClassMapGenerator\PhpFileParser`                         |
|  2.0% |      56 | `getChildren`   | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |
|  1.7% |      46 | `hasChildren`   | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |
|  0.9% |      26 | `normalizePath` | `Composer\ClassMapGenerator\ClassMapGenerator`                     |
|  0.4% |      12 | `current`       | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`     |

##### `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`)

|     % | Samples | Callee                 | Location                                    |
| ----: | ------: | ---------------------- | ------------------------------------------- |
| 65.2% |   1,628 | `clean`                | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  5.8% |     144 | `matchAllStrictGroups` | `Composer\Pcre\Preg`                        |
|  2.0% |      50 | `matchAll`             | `Composer\Pcre\Preg`                        |
| <0.1% |       1 | `getExtraTypes`        | `Composer\ClassMapGenerator\PhpFileParser`  |

##### `clean` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|     % | Samples | Callee        | Location                                    |
| ----: | ------: | ------------- | ------------------------------------------- |
| 60.2% |     980 | `match`       | `Composer\ClassMapGenerator\PhpFileCleaner` |
| 13.0% |     211 | `skipString`  | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  1.4% |      22 | `skipHeredoc` | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  0.2% |       4 | `isMatch`     | `Composer\Pcre\Preg`                        |
|  0.2% |       3 | `skipToPhp`   | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `match` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|     % | Samples | Callee                | Location             |
| ----: | ------: | --------------------- | -------------------- |
| 89.1% |     873 | `isMatchStrictGroups` | `Composer\Pcre\Preg` |

##### `isMatchStrictGroups` (`Composer\Pcre\Preg`)

|     % | Samples | Callee              | Location             |
| ----: | ------: | ------------------- | -------------------- |
| 85.3% |     772 | `matchStrictGroups` | `Composer\Pcre\Preg` |

##### `matchStrictGroups` (`Composer\Pcre\Preg`)

|     % | Samples | Callee                  | Location             |
| ----: | ------: | ----------------------- | -------------------- |
| 67.1% |     518 | `match`                 | `Composer\Pcre\Preg` |
| 16.5% |     127 | `enforceNonNullMatches` | `Composer\Pcre\Preg` |

##### `createComposer` (`Composer\Factory`)

|     % | Samples | Callee                  | Location                                    |
| ----: | ------: | ----------------------- | ------------------------------------------- |
| 94.7% |     690 | `load`                  | `Composer\Package\Loader\RootPackageLoader` |
|  2.3% |      17 | `validateSchema`        | `Composer\Json\JsonFile`                    |
|  1.1% |       8 | `createHttpDownloader`  | `Composer\Factory`                          |
|  0.4% |       3 | `createDownloadManager` | `Composer\Factory`                          |
|  0.4% |       3 | `read`                  | `Composer\Json\JsonFile`                    |

##### `create` (`Composer\Factory`)

|      % | Samples | Callee           | Location           |
| -----: | ------: | ---------------- | ------------------ |
| 100.0% |     729 | `createComposer` | `Composer\Factory` |

##### `getComposer` (`Composer\Console\Application`)

|      % | Samples | Callee   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |     729 | `create` | `Composer\Factory` |

##### `tryComposer` (`Composer\Command\BaseCommand`)

|      % | Samples | Callee        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     729 | `getComposer` | `Composer\Console\Application` |

##### `initialize` (`Composer\Command\BaseCommand`)

|      % | Samples | Callee        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     729 | `tryComposer` | `Composer\Command\BaseCommand` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `doRun` (`Composer\Console\Application`) ← `run` (`Symfony\Component\Console\Application`) ← `run` (`Composer\Console\Application`) ← `(anonymous)` (`profile.php`)

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17.3% |     673 | `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                                                                                                 |
| 10.4% |     405 | `clean` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                                         |
|  7.1% |     277 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessGitVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                        |
|  6.9% |     268 | `pregMatch` (`Composer\Pcre\Preg`) ← `match` ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                  |
|  5.4% |     210 | `call` (`Composer\Util\Silencer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  5.4% |     209 | `skipString` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                          |
|  3.6% |     141 | `matchAll` (`Composer\Pcre\Preg`) ← `matchAllStrictGroups` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                                    |
|  3.5% |     138 | `match` (`Composer\Pcre\Preg`) ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                |
|  3.5% |     135 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `versionFromGitTags` (`Composer\Package\Version\VersionGuesser`) ← `guessGitVersion` ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` |
|  3.3% |     128 | `isMatchStrictGroups` (`Composer\Pcre\Preg`) ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                |
|  3.2% |     124 | `matchStrictGroups` (`Composer\Pcre\Preg`) ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                          |
|  3.1% |     120 | `enforceNonNullMatches` (`Composer\Pcre\Preg`) ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                |
|  2.7% |     107 | `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                               |
|  2.6% |     101 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessFossilVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                     |
|  2.4% |      95 | `checkOffsetCapture` (`Composer\Pcre\Preg`) ← `match` ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                         |
|  2.0% |      79 | `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                                                                                                                                                              |
|  1.4% |      54 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessSvnVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                        |
|  1.4% |      54 | `__construct` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`) ← `getChildren` ← `getChildren` (`Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                        |
|  1.4% |      53 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessHgVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                         |
|  1.3% |      49 | `matchAll` (`Composer\Pcre\Preg`) ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                                                             |

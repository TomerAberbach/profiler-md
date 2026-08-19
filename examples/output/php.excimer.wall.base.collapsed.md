# Sampling profile

Collected 3,892 samples.

| Category    |     % | Samples |
| ----------- | ----: | ------: |
| Ours        | 99.5% |   3,874 |
| Third-party |  0.5% |      18 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

#### Categories

##### Ours

|     % | Samples | Function                | Location                                                       |
| ----: | ------: | ----------------------- | -------------------------------------------------------------- |
| 16.9% |     657 | `findClasses`           | `Composer\ClassMapGenerator\PhpFileParser`                     |
| 16.4% |     638 | `readAndWrite`          | `Symfony\Component\Process\Pipes\UnixPipes`                    |
| 10.6% |     411 | `clean`                 | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  7.2% |     279 | `pregMatch`             | `Composer\Pcre\Preg`                                           |
|  5.7% |     222 | `skipString`            | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  5.5% |     215 | `call`                  | `Composer\Util\Silencer`                                       |
|  4.8% |     187 | `matchAll`              | `Composer\Pcre\Preg`                                           |
|  3.8% |     149 | `matchStrictGroups`     | `Composer\Pcre\Preg`                                           |
|  3.8% |     146 | `match`                 | `Composer\Pcre\Preg`                                           |
|  3.6% |     139 | `isMatchStrictGroups`   | `Composer\Pcre\Preg`                                           |
|  3.2% |     124 | `enforceNonNullMatches` | `Composer\Pcre\Preg`                                           |
|  2.9% |     113 | `match`                 | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  2.2% |      84 | `checkOffsetCapture`    | `Composer\Pcre\Preg`                                           |
|  1.5% |      58 | `__construct`           | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  1.3% |      52 | `scanPaths`             | `Composer\ClassMapGenerator\ClassMapGenerator`                 |
|  1.0% |      37 | `start`                 | `Symfony\Component\Process\Process`                            |
|  0.9% |      35 | `hasChildren`           | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  0.7% |      29 | `normalizePath`         | `Composer\Util\Filesystem`                                     |
|  0.7% |      27 | `normalizePath`         | `Composer\ClassMapGenerator\ClassMapGenerator`                 |
|  0.5% |      21 | `isMatch`               | `Composer\Pcre\Preg`                                           |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`)

|      % | Samples | Caller      | Location                                       |
| -----: | ------: | ----------- | ---------------------------------------------- |
| 100.0% |     657 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |     638 | `readPipes` | `Symfony\Component\Process\Process` |

##### `clean` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|      % | Samples | Caller        | Location                                   |
| -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% |     411 | `findClasses` | `Composer\ClassMapGenerator\PhpFileParser` |

##### `pregMatch` (`Composer\Pcre\Preg`)

|      % | Samples | Caller  | Location             |
| -----: | ------: | ------- | -------------------- |
| 100.0% |     279 | `match` | `Composer\Pcre\Preg` |

##### `skipString` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |     222 | `clean` | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `call` (`Composer\Util\Silencer`)

|     % | Samples | Caller                      | Location                       |
| ----: | ------: | --------------------------- | ------------------------------ |
| 98.1% |     211 | `doRun`                     | `Composer\Console\Application` |
|  0.9% |       2 | `getHomeDir`                | `Composer\Factory`             |
|  0.9% |       2 | `filePutContentsIfModified` | `Composer\Util\Filesystem`     |

##### `matchAll` (`Composer\Pcre\Preg`)

|     % | Samples | Caller                 | Location                                   |
| ----: | ------: | ---------------------- | ------------------------------------------ |
| 76.5% |     143 | `matchAllStrictGroups` | `Composer\Pcre\Preg`                       |
| 23.5% |      44 | `findClasses`          | `Composer\ClassMapGenerator\PhpFileParser` |

##### `matchStrictGroups` (`Composer\Pcre\Preg`)

|      % | Samples | Caller                | Location             |
| -----: | ------: | --------------------- | -------------------- |
| 100.0% |     149 | `isMatchStrictGroups` | `Composer\Pcre\Preg` |

##### `match` (`Composer\Pcre\Preg`)

|     % | Samples | Caller              | Location             |
| ----: | ------: | ------------------- | -------------------- |
| 94.5% |     138 | `matchStrictGroups` | `Composer\Pcre\Preg` |
|  5.5% |       8 | `isMatch`           | `Composer\Pcre\Preg` |

##### `isMatchStrictGroups` (`Composer\Pcre\Preg`)

|     % | Samples | Caller          | Location                                    |
| ----: | ------: | --------------- | ------------------------------------------- |
| 97.8% |     136 | `match`         | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  2.2% |       3 | `normalizePath` | `Composer\Util\Filesystem`                  |

##### `enforceNonNullMatches` (`Composer\Pcre\Preg`)

|      % | Samples | Caller              | Location             |
| -----: | ------: | ------------------- | -------------------- |
| 100.0% |     124 | `matchStrictGroups` | `Composer\Pcre\Preg` |

##### `match` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|     % | Samples | Caller        | Location                                    |
| ----: | ------: | ------------- | ------------------------------------------- |
| 99.1% |     112 | `clean`       | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  0.9% |       1 | `skipHeredoc` | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `checkOffsetCapture` (`Composer\Pcre\Preg`)

|     % | Samples | Caller     | Location             |
| ----: | ------: | ---------- | -------------------- |
| 97.6% |      82 | `match`    | `Composer\Pcre\Preg` |
|  2.4% |       2 | `matchAll` | `Composer\Pcre\Preg` |

##### `__construct` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`)

|     % | Samples | Caller              | Location                                                       |
| ----: | ------: | ------------------- | -------------------------------------------------------------- |
| 96.6% |      56 | `getChildren`       | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  3.4% |       2 | `searchInDirectory` | `Symfony\Component\Finder\Finder`                              |

##### `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`)

|      % | Samples | Caller | Location                              |
| -----: | ------: | ------ | ------------------------------------- |
| 100.0% |      52 | `dump` | `Composer\Autoload\AutoloadGenerator` |

##### `start` (`Symfony\Component\Process\Process`)

|      % | Samples | Caller | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |      37 | `run`  | `Symfony\Component\Process\Process` |

##### `hasChildren` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`)

|      % | Samples | Caller        | Location                                                           |
| -----: | ------: | ------------- | ------------------------------------------------------------------ |
| 100.0% |      35 | `hasChildren` | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |

##### `normalizePath` (`Composer\Util\Filesystem`)

|     % | Samples | Caller             | Location                              |
| ----: | ------: | ------------------ | ------------------------------------- |
| 62.1% |      18 | `getPathCode`      | `Composer\Autoload\AutoloadGenerator` |
| 37.9% |      11 | `findShortestPath` | `Composer\Util\Filesystem`            |

##### `normalizePath` (`Composer\ClassMapGenerator\ClassMapGenerator`)

|      % | Samples | Caller      | Location                                       |
| -----: | ------: | ----------- | ---------------------------------------------- |
| 100.0% |      27 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `isMatch` (`Composer\Pcre\Preg`)

|     % | Samples | Caller             | Location                                    |
| ----: | ------: | ------------------ | ------------------------------------------- |
| 95.2% |      20 | `findShortestPath` | `Composer\Util\Filesystem`                  |
|  4.8% |       1 | `clean`            | `Composer\ClassMapGenerator\PhpFileCleaner` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

#### Categories

##### Ours

|      % | Samples | Function              | Location                                       |
| -----: | ------: | --------------------- | ---------------------------------------------- |
| 100.0% |   3,892 | `(anonymous)`         | `profile.php`                                  |
|  99.7% |   3,882 | `run`                 | `Symfony\Component\Console\Application`        |
|  99.7% |   3,882 | `run`                 | `Composer\Console\Application`                 |
|  99.4% |   3,869 | `doRun`               | `Composer\Console\Application`                 |
|  93.0% |   3,618 | `doRun`               | `Symfony\Component\Console\Application`        |
|  92.9% |   3,617 | `run`                 | `Symfony\Component\Console\Command\Command`    |
|  92.9% |   3,617 | `doRunCommand`        | `Symfony\Component\Console\Application`        |
|  73.8% |   2,872 | `execute`             | `Composer\Command\DumpAutoloadCommand`         |
|  73.7% |   2,870 | `dump`                | `Composer\Autoload\AutoloadGenerator`          |
|  69.9% |   2,721 | `scanPaths`           | `Composer\ClassMapGenerator\ClassMapGenerator` |
|  64.2% |   2,498 | `findClasses`         | `Composer\ClassMapGenerator\PhpFileParser`     |
|  42.4% |   1,649 | `clean`               | `Composer\ClassMapGenerator\PhpFileCleaner`    |
|  25.6% |     995 | `match`               | `Composer\ClassMapGenerator\PhpFileCleaner`    |
|  23.3% |     905 | `isMatchStrictGroups` | `Composer\Pcre\Preg`                           |
|  19.7% |     766 | `matchStrictGroups`   | `Composer\Pcre\Preg`                           |
|  19.1% |     745 | `initialize`          | `Composer\Command\BaseCommand`                 |
|  19.1% |     744 | `createComposer`      | `Composer\Factory`                             |
|  19.1% |     744 | `create`              | `Composer\Factory`                             |
|  19.1% |     744 | `getComposer`         | `Composer\Console\Application`                 |
|  19.1% |     744 | `tryComposer`         | `Composer\Command\BaseCommand`                 |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`profile.php`)

|     % | Samples | Callee        | Location                                     |
| ----: | ------: | ------------- | -------------------------------------------- |
| 99.7% |   3,882 | `run`         | `Composer\Console\Application`               |
|  0.1% |       5 | `__construct` | `Composer\Console\Application`               |
|  0.1% |       2 | `(anonymous)` | `composer/src/bootstrap.php`                 |
|  0.1% |       2 | `loadClass`   | `Composer\Autoload\ClassLoader`              |
| <0.1% |       1 | `__construct` | `Symfony\Component\Console\Input\ArrayInput` |

##### `run` (`Symfony\Component\Console\Application`)

|     % | Samples | Callee      | Location                             |
| ----: | ------: | ----------- | ------------------------------------ |
| 99.7% |   3,869 | `doRun`     | `Composer\Console\Application`       |
|  0.2% |       8 | `getHeight` | `Symfony\Component\Console\Terminal` |
|  0.1% |       5 | `getWidth`  | `Symfony\Component\Console\Terminal` |

##### `run` (`Composer\Console\Application`)

|      % | Samples | Callee | Location                                |
| -----: | ------: | ------ | --------------------------------------- |
| 100.0% |   3,882 | `run`  | `Symfony\Component\Console\Application` |

##### `doRun` (`Composer\Console\Application`)

|     % | Samples | Callee      | Location                                |
| ----: | ------: | ----------- | --------------------------------------- |
| 93.5% |   3,618 | `doRun`     | `Symfony\Component\Console\Application` |
|  5.8% |     226 | `call`      | `Composer\Util\Silencer`                |
|  0.5% |      20 | `find`      | `Symfony\Component\Console\Application` |
|  0.1% |       4 | `loadClass` | `Composer\Autoload\ClassLoader`         |

##### `doRun` (`Symfony\Component\Console\Application`)

|      % | Samples | Callee         | Location                                |
| -----: | ------: | -------------- | --------------------------------------- |
| 100.0% |   3,617 | `doRunCommand` | `Symfony\Component\Console\Application` |
|  <0.1% |       1 | `bind`         | `Symfony\Component\Console\Input\Input` |

##### `run` (`Symfony\Component\Console\Command\Command`)

|     % | Samples | Callee       | Location                               |
| ----: | ------: | ------------ | -------------------------------------- |
| 79.4% |   2,872 | `execute`    | `Composer\Command\DumpAutoloadCommand` |
| 20.6% |     745 | `initialize` | `Composer\Command\BaseCommand`         |

##### `doRunCommand` (`Symfony\Component\Console\Application`)

|      % | Samples | Callee | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |   3,617 | `run`  | `Symfony\Component\Console\Command\Command` |

##### `execute` (`Composer\Command\DumpAutoloadCommand`)

|     % | Samples | Callee  | Location                              |
| ----: | ------: | ------- | ------------------------------------- |
| 99.9% |   2,870 | `dump`  | `Composer\Autoload\AutoloadGenerator` |
| <0.1% |       1 | `write` | `Composer\IO\ConsoleIO`               |

##### `dump` (`Composer\Autoload\AutoloadGenerator`)

|     % | Samples | Callee                      | Location                                       |
| ----: | ------: | --------------------------- | ---------------------------------------------- |
| 94.8% |   2,721 | `scanPaths`                 | `Composer\ClassMapGenerator\ClassMapGenerator` |
|  3.8% |     110 | `getPathCode`               | `Composer\Autoload\AutoloadGenerator`          |
|  0.7% |      21 | `getStaticFile`             | `Composer\Autoload\AutoloadGenerator`          |
|  0.1% |       2 | `filePutContentsIfModified` | `Composer\Util\Filesystem`                     |
|  0.1% |       2 | `writeError`                | `Composer\IO\ConsoleIO`                        |

##### `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`)

|     % | Samples | Callee          | Location                                                           |
| ----: | ------: | --------------- | ------------------------------------------------------------------ |
| 91.8% |   2,498 | `findClasses`   | `Composer\ClassMapGenerator\PhpFileParser`                         |
|  2.1% |      56 | `getChildren`   | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |
|  1.6% |      43 | `normalizePath` | `Composer\ClassMapGenerator\ClassMapGenerator`                     |
|  1.3% |      35 | `hasChildren`   | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |
|  0.3% |       8 | `next`          | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`     |

##### `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`)

|     % | Samples | Callee                 | Location                                    |
| ----: | ------: | ---------------------- | ------------------------------------------- |
| 66.0% |   1,649 | `clean`                | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  5.8% |     146 | `matchAllStrictGroups` | `Composer\Pcre\Preg`                        |
|  1.8% |      45 | `matchAll`             | `Composer\Pcre\Preg`                        |
| <0.1% |       1 | `getExtraTypes`        | `Composer\ClassMapGenerator\PhpFileParser`  |

##### `clean` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|     % | Samples | Callee        | Location                                    |
| ----: | ------: | ------------- | ------------------------------------------- |
| 60.3% |     994 | `match`       | `Composer\ClassMapGenerator\PhpFileCleaner` |
| 13.5% |     222 | `skipString`  | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  0.8% |      14 | `skipHeredoc` | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  0.2% |       3 | `isMatch`     | `Composer\Pcre\Preg`                        |
|  0.2% |       3 | `skipToPhp`   | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `match` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|     % | Samples | Callee                | Location             |
| ----: | ------: | --------------------- | -------------------- |
| 88.6% |     882 | `isMatchStrictGroups` | `Composer\Pcre\Preg` |

##### `isMatchStrictGroups` (`Composer\Pcre\Preg`)

|     % | Samples | Callee              | Location             |
| ----: | ------: | ------------------- | -------------------- |
| 84.6% |     766 | `matchStrictGroups` | `Composer\Pcre\Preg` |

##### `matchStrictGroups` (`Composer\Pcre\Preg`)

|     % | Samples | Callee                  | Location             |
| ----: | ------: | ----------------------- | -------------------- |
| 64.4% |     493 | `match`                 | `Composer\Pcre\Preg` |
| 16.2% |     124 | `enforceNonNullMatches` | `Composer\Pcre\Preg` |

##### `initialize` (`Composer\Command\BaseCommand`)

|     % | Samples | Callee        | Location                                |
| ----: | ------: | ------------- | --------------------------------------- |
| 99.9% |     744 | `tryComposer` | `Composer\Command\BaseCommand`          |
|  0.1% |       1 | `getOption`   | `Symfony\Component\Console\Input\Input` |

##### `createComposer` (`Composer\Factory`)

|     % | Samples | Callee                  | Location                                    |
| ----: | ------: | ----------------------- | ------------------------------------------- |
| 94.5% |     703 | `load`                  | `Composer\Package\Loader\RootPackageLoader` |
|  2.2% |      16 | `validateSchema`        | `Composer\Json\JsonFile`                    |
|  1.5% |      11 | `createHttpDownloader`  | `Composer\Factory`                          |
|  0.4% |       3 | `createDownloadManager` | `Composer\Factory`                          |
|  0.3% |       2 | `createConfig`          | `Composer\Factory`                          |

##### `create` (`Composer\Factory`)

|      % | Samples | Callee           | Location           |
| -----: | ------: | ---------------- | ------------------ |
| 100.0% |     744 | `createComposer` | `Composer\Factory` |

##### `getComposer` (`Composer\Console\Application`)

|      % | Samples | Callee   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |     744 | `create` | `Composer\Factory` |

##### `tryComposer` (`Composer\Command\BaseCommand`)

|      % | Samples | Callee        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     744 | `getComposer` | `Composer\Console\Application` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `doRun` (`Composer\Console\Application`) ← `run` (`Symfony\Component\Console\Application`) ← `run` (`Composer\Console\Application`) ← `(anonymous)` (`profile.php`)

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16.9% |     657 | `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                                                                                                 |
| 10.6% |     411 | `clean` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                                         |
|  7.2% |     280 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessGitVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                        |
|  6.9% |     269 | `pregMatch` (`Composer\Pcre\Preg`) ← `match` ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                  |
|  5.7% |     222 | `skipString` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                          |
|  5.4% |     211 | `call` (`Composer\Util\Silencer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  3.8% |     147 | `matchStrictGroups` (`Composer\Pcre\Preg`) ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                          |
|  3.7% |     143 | `matchAll` (`Composer\Pcre\Preg`) ← `matchAllStrictGroups` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                                    |
|  3.6% |     141 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `versionFromGitTags` (`Composer\Package\Version\VersionGuesser`) ← `guessGitVersion` ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` |
|  3.5% |     136 | `isMatchStrictGroups` (`Composer\Pcre\Preg`) ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                |
|  3.4% |     131 | `match` (`Composer\Pcre\Preg`) ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                |
|  3.1% |     122 | `enforceNonNullMatches` (`Composer\Pcre\Preg`) ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                |
|  2.9% |     112 | `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                               |
|  2.7% |     106 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessFossilVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                     |
|  2.0% |      77 | `checkOffsetCapture` (`Composer\Pcre\Preg`) ← `match` ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                         |
|  1.4% |      56 | `__construct` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`) ← `getChildren` ← `getChildren` (`Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                        |
|  1.4% |      54 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessHgVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                         |
|  1.3% |      52 | `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                                                                                                                                                              |
|  1.3% |      50 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessSvnVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                        |
|  1.1% |      44 | `matchAll` (`Composer\Pcre\Preg`) ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                                                             |

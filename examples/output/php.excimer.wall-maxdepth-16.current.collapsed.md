# Sampling profile

Collected 3,698 samples.

| Category    |     % | Samples |
| ----------- | ----: | ------: |
| Ours        | 99.6% |   3,682 |
| Third-party |  0.4% |      16 |

Paths starting with `./` or `../` are relative to `/private/tmp/profiler-md-php-workload/`.

Call stacks missing their outermost callers account for 22.5% of the samples collected.

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Ours

|     % | Samples | Function                | Location                                                       |
| ----: | ------: | ----------------------- | -------------------------------------------------------------- |
| 17.9% |     662 | `findClasses`           | `Composer\ClassMapGenerator\PhpFileParser`                     |
| 15.0% |     556 | `readAndWrite`          | `Symfony\Component\Process\Pipes\UnixPipes`                    |
| 11.5% |     427 | `clean`                 | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  7.0% |     259 | `pregMatch`             | `Composer\Pcre\Preg`                                           |
|  5.4% |     199 | `call`                  | `Composer\Util\Silencer`                                       |
|  4.8% |     177 | `matchAll`              | `Composer\Pcre\Preg`                                           |
|  4.8% |     177 | `skipString`            | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  4.2% |     157 | `match`                 | `Composer\Pcre\Preg`                                           |
|  4.2% |     157 | `isMatchStrictGroups`   | `Composer\Pcre\Preg`                                           |
|  3.9% |     145 | `matchStrictGroups`     | `Composer\Pcre\Preg`                                           |
|  3.8% |     140 | `enforceNonNullMatches` | `Composer\Pcre\Preg`                                           |
|  2.5% |      93 | `checkOffsetCapture`    | `Composer\Pcre\Preg`                                           |
|  2.5% |      92 | `match`                 | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  1.6% |      59 | `scanPaths`             | `Composer\ClassMapGenerator\ClassMapGenerator`                 |
|  1.2% |      43 | `normalizePath`         | `Composer\Util\Filesystem`                                     |
|  1.1% |      42 | `__construct`           | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  1.1% |      40 | `hasChildren`           | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  0.5% |      18 | `start`                 | `Symfony\Component\Process\Process`                            |
|  0.5% |      18 | `normalizePath`         | `Composer\ClassMapGenerator\ClassMapGenerator`                 |
|  0.5% |      17 | `loadClass`             | `Composer\Autoload\ClassLoader`                                |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`)

|      % | Samples | Caller      | Location                                       |
| -----: | ------: | ----------- | ---------------------------------------------- |
| 100.0% |     662 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |     556 | `readPipes` | `Symfony\Component\Process\Process` |

##### `clean` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|      % | Samples | Caller        | Location                                   |
| -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% |     427 | `findClasses` | `Composer\ClassMapGenerator\PhpFileParser` |

##### `pregMatch` (`Composer\Pcre\Preg`)

|      % | Samples | Caller  | Location             |
| -----: | ------: | ------- | -------------------- |
| 100.0% |     259 | `match` | `Composer\Pcre\Preg` |

##### `call` (`Composer\Util\Silencer`)

|     % | Samples | Caller                      | Location                       |
| ----: | ------: | --------------------------- | ------------------------------ |
| 97.5% |     194 | `doRun`                     | `Composer\Console\Application` |
|  2.5% |       5 | `filePutContentsIfModified` | `Composer\Util\Filesystem`     |

##### `matchAll` (`Composer\Pcre\Preg`)

|     % | Samples | Caller                 | Location                                   |
| ----: | ------: | ---------------------- | ------------------------------------------ |
| 72.3% |     128 | `matchAllStrictGroups` | `Composer\Pcre\Preg`                       |
| 27.7% |      49 | `findClasses`          | `Composer\ClassMapGenerator\PhpFileParser` |

##### `skipString` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |     177 | `clean` | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `match` (`Composer\Pcre\Preg`)

|     % | Samples | Caller              | Location             |
| ----: | ------: | ------------------- | -------------------- |
| 96.2% |     151 | `matchStrictGroups` | `Composer\Pcre\Preg` |
|  3.8% |       6 | `isMatch`           | `Composer\Pcre\Preg` |

##### `isMatchStrictGroups` (`Composer\Pcre\Preg`)

|     % | Samples | Caller          | Location                                       |
| ----: | ------: | --------------- | ---------------------------------------------- |
| 98.1% |     154 | `match`         | `Composer\ClassMapGenerator\PhpFileCleaner`    |
|  1.3% |       2 | `normalizePath` | `Composer\ClassMapGenerator\ClassMapGenerator` |
|  0.6% |       1 | `normalizePath` | `Composer\Util\Filesystem`                     |

##### `matchStrictGroups` (`Composer\Pcre\Preg`)

|      % | Samples | Caller                | Location             |
| -----: | ------: | --------------------- | -------------------- |
| 100.0% |     145 | `isMatchStrictGroups` | `Composer\Pcre\Preg` |

##### `enforceNonNullMatches` (`Composer\Pcre\Preg`)

|      % | Samples | Caller              | Location             |
| -----: | ------: | ------------------- | -------------------- |
| 100.0% |     140 | `matchStrictGroups` | `Composer\Pcre\Preg` |

##### `checkOffsetCapture` (`Composer\Pcre\Preg`)

|     % | Samples | Caller     | Location             |
| ----: | ------: | ---------- | -------------------- |
| 98.9% |      92 | `match`    | `Composer\Pcre\Preg` |
|  1.1% |       1 | `matchAll` | `Composer\Pcre\Preg` |

##### `match` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|     % | Samples | Caller        | Location                                    |
| ----: | ------: | ------------- | ------------------------------------------- |
| 98.9% |      91 | `clean`       | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  1.1% |       1 | `skipHeredoc` | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`)

|      % | Samples | Caller | Location                              |
| -----: | ------: | ------ | ------------------------------------- |
| 100.0% |      59 | `dump` | `Composer\Autoload\AutoloadGenerator` |

##### `normalizePath` (`Composer\Util\Filesystem`)

|     % | Samples | Caller                 | Location                              |
| ----: | ------: | ---------------------- | ------------------------------------- |
| 48.8% |      21 | `getPathCode`          | `Composer\Autoload\AutoloadGenerator` |
| 44.2% |      19 | `findShortestPath`     | `Composer\Util\Filesystem`            |
|  7.0% |       3 | `findShortestPathCode` | `Composer\Util\Filesystem`            |

##### `__construct` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`)

|     % | Samples | Caller              | Location                                                       |
| ----: | ------: | ------------------- | -------------------------------------------------------------- |
| 97.6% |      41 | `getChildren`       | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  2.4% |       1 | `searchInDirectory` | `Symfony\Component\Finder\Finder`                              |

##### `hasChildren` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`)

|      % | Samples | Caller        | Location                                                           |
| -----: | ------: | ------------- | ------------------------------------------------------------------ |
| 100.0% |      40 | `hasChildren` | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |

##### `start` (`Symfony\Component\Process\Process`)

|      % | Samples | Caller | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |      18 | `run`  | `Symfony\Component\Process\Process` |

##### `normalizePath` (`Composer\ClassMapGenerator\ClassMapGenerator`)

|      % | Samples | Caller      | Location                                       |
| -----: | ------: | ----------- | ---------------------------------------------- |
| 100.0% |      18 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `loadClass` (`Composer\Autoload\ClassLoader`)

|     % | Samples | Caller               | Location                                |
| ----: | ------: | -------------------- | --------------------------------------- |
| 17.6% |       3 | `doRun`              | `Composer\Console\Application`          |
| 17.6% |       3 | `getDefaultCommands` | `Composer\Console\Application`          |
| 11.8% |       2 | `__construct`        | `Composer\Util\HttpDownloader`          |
| 11.8% |       2 | `createComposer`     | `Composer\Factory`                      |
|  5.9% |       1 | `__construct`        | `Symfony\Component\Console\Application` |

### Total samples

Functions with the most samples collected within the function and its callees.

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Ours

|     % | Samples | Function              | Location                                       |
| ----: | ------: | --------------------- | ---------------------------------------------- |
| 89.5% |   3,311 | `run`                 | `Symfony\Component\Console\Command\Command`    |
| 83.7% |   3,094 | `run`                 | `Symfony\Component\Console\Application`        |
| 83.5% |   3,088 | `run`                 | `Composer\Console\Application`                 |
| 83.4% |   3,084 | `doRun`               | `Composer\Console\Application`                 |
| 77.9% |   2,881 | `doRunCommand`        | `Symfony\Component\Console\Application`        |
| 77.8% |   2,878 | `doRun`               | `Symfony\Component\Console\Application`        |
| 77.5% |   2,865 | `(anonymous)`         | `./profile.php`                                |
| 76.5% |   2,830 | `execute`             | `Composer\Command\DumpAutoloadCommand`         |
| 76.5% |   2,828 | `dump`                | `Composer\Autoload\AutoloadGenerator`          |
| 72.4% |   2,679 | `scanPaths`           | `Composer\ClassMapGenerator\ClassMapGenerator` |
| 66.6% |   2,462 | `findClasses`         | `Composer\ClassMapGenerator\PhpFileParser`     |
| 43.8% |   1,618 | `clean`               | `Composer\ClassMapGenerator\PhpFileCleaner`    |
| 26.9% |     994 | `match`               | `Composer\ClassMapGenerator\PhpFileCleaner`    |
| 25.3% |     934 | `isMatchStrictGroups` | `Composer\Pcre\Preg`                           |
| 21.0% |     777 | `matchStrictGroups`   | `Composer\Pcre\Preg`                           |
| 16.7% |     619 | `createComposer`      | `Composer\Factory`                             |
| 16.7% |     619 | `create`              | `Composer\Factory`                             |
| 16.7% |     619 | `getComposer`         | `Composer\Console\Application`                 |
| 16.6% |     615 | `tryComposer`         | `Composer\Command\BaseCommand`                 |
| 16.3% |     604 | `initialize`          | `Composer\Command\BaseCommand`                 |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run` (`Symfony\Component\Console\Command\Command`)

|     % | Samples | Caller         | Location                                |
| ----: | ------: | -------------- | --------------------------------------- |
| 87.0% |   2,881 | `doRunCommand` | `Symfony\Component\Console\Application` |

##### `run` (`Symfony\Component\Console\Application`)

|     % | Samples | Caller | Location                       |
| ----: | ------: | ------ | ------------------------------ |
| 99.8% |   3,088 | `run`  | `Composer\Console\Application` |

##### `run` (`Composer\Console\Application`)

|     % | Samples | Caller        | Location        |
| ----: | ------: | ------------- | --------------- |
| 92.6% |   2,858 | `(anonymous)` | `./profile.php` |

##### `doRun` (`Composer\Console\Application`)

|     % | Samples | Caller | Location                                |
| ----: | ------: | ------ | --------------------------------------- |
| 99.9% |   3,081 | `run`  | `Symfony\Component\Console\Application` |

##### `doRunCommand` (`Symfony\Component\Console\Application`)

|     % | Samples | Caller  | Location                                |
| ----: | ------: | ------- | --------------------------------------- |
| 99.8% |   2,875 | `doRun` | `Symfony\Component\Console\Application` |

##### `doRun` (`Symfony\Component\Console\Application`)

|     % | Samples | Caller  | Location                       |
| ----: | ------: | ------- | ------------------------------ |
| 99.4% |   2,860 | `doRun` | `Composer\Console\Application` |

##### `execute` (`Composer\Command\DumpAutoloadCommand`)

|      % | Samples | Caller | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |   2,830 | `run`  | `Symfony\Component\Console\Command\Command` |

##### `dump` (`Composer\Autoload\AutoloadGenerator`)

|      % | Samples | Caller    | Location                               |
| -----: | ------: | --------- | -------------------------------------- |
| 100.0% |   2,828 | `execute` | `Composer\Command\DumpAutoloadCommand` |

##### `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`)

|      % | Samples | Caller | Location                              |
| -----: | ------: | ------ | ------------------------------------- |
| 100.0% |   2,679 | `dump` | `Composer\Autoload\AutoloadGenerator` |

##### `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`)

|      % | Samples | Caller      | Location                                       |
| -----: | ------: | ----------- | ---------------------------------------------- |
| 100.0% |   2,462 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `clean` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|      % | Samples | Caller        | Location                                   |
| -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% |   1,618 | `findClasses` | `Composer\ClassMapGenerator\PhpFileParser` |

##### `match` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|     % | Samples | Caller        | Location                                    |
| ----: | ------: | ------------- | ------------------------------------------- |
| 99.8% |     992 | `clean`       | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  0.2% |       2 | `skipHeredoc` | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `isMatchStrictGroups` (`Composer\Pcre\Preg`)

|     % | Samples | Caller          | Location                                       |
| ----: | ------: | --------------- | ---------------------------------------------- |
| 96.6% |     902 | `match`         | `Composer\ClassMapGenerator\PhpFileCleaner`    |
|  1.7% |      16 | `normalizePath` | `Composer\Util\Filesystem`                     |
|  1.7% |      16 | `normalizePath` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `matchStrictGroups` (`Composer\Pcre\Preg`)

|      % | Samples | Caller                | Location             |
| -----: | ------: | --------------------- | -------------------- |
| 100.0% |     777 | `isMatchStrictGroups` | `Composer\Pcre\Preg` |

##### `createComposer` (`Composer\Factory`)

|      % | Samples | Caller   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |     619 | `create` | `Composer\Factory` |

##### `create` (`Composer\Factory`)

|      % | Samples | Caller        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     619 | `getComposer` | `Composer\Console\Application` |

##### `getComposer` (`Composer\Console\Application`)

|     % | Samples | Caller        | Location                       |
| ----: | ------: | ------------- | ------------------------------ |
| 99.4% |     615 | `tryComposer` | `Composer\Command\BaseCommand` |

##### `tryComposer` (`Composer\Command\BaseCommand`)

|     % | Samples | Caller       | Location                       |
| ----: | ------: | ------------ | ------------------------------ |
| 98.2% |     604 | `initialize` | `Composer\Command\BaseCommand` |

##### `initialize` (`Composer\Command\BaseCommand`)

|     % | Samples | Caller | Location                                    |
| ----: | ------: | ------ | ------------------------------------------- |
| 79.6% |     481 | `run`  | `Symfony\Component\Console\Command\Command` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run` (`Symfony\Component\Console\Command\Command`)

|     % | Samples | Callee       | Location                               |
| ----: | ------: | ------------ | -------------------------------------- |
| 85.5% |   2,830 | `execute`    | `Composer\Command\DumpAutoloadCommand` |
| 14.5% |     481 | `initialize` | `Composer\Command\BaseCommand`         |

##### `run` (`Symfony\Component\Console\Application`)

|     % | Samples | Callee      | Location                             |
| ----: | ------: | ----------- | ------------------------------------ |
| 99.6% |   3,081 | `doRun`     | `Composer\Console\Application`       |
|  0.2% |       7 | `getHeight` | `Symfony\Component\Console\Terminal` |
|  0.2% |       6 | `getWidth`  | `Symfony\Component\Console\Terminal` |

##### `run` (`Composer\Console\Application`)

|      % | Samples | Callee | Location                                |
| -----: | ------: | ------ | --------------------------------------- |
| 100.0% |   3,088 | `run`  | `Symfony\Component\Console\Application` |

##### `doRun` (`Composer\Console\Application`)

|     % | Samples | Callee      | Location                                |
| ----: | ------: | ----------- | --------------------------------------- |
| 92.7% |   2,860 | `doRun`     | `Symfony\Component\Console\Application` |
|  6.7% |     206 | `call`      | `Composer\Util\Silencer`                |
|  0.4% |      11 | `find`      | `Symfony\Component\Console\Application` |
|  0.1% |       3 | `loadClass` | `Composer\Autoload\ClassLoader`         |
|  0.1% |       2 | `getCwd`    | `Composer\Util\Platform`                |

##### `doRunCommand` (`Symfony\Component\Console\Application`)

|      % | Samples | Callee | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |   2,881 | `run`  | `Symfony\Component\Console\Command\Command` |

##### `doRun` (`Symfony\Component\Console\Application`)

|     % | Samples | Callee          | Location                                |
| ----: | ------: | --------------- | --------------------------------------- |
| 99.9% |   2,875 | `doRunCommand`  | `Symfony\Component\Console\Application` |
|  0.1% |       2 | `getDefinition` | `Symfony\Component\Console\Application` |
| <0.1% |       1 | `find`          | `Symfony\Component\Console\Application` |

##### `(anonymous)` (`./profile.php`)

|     % | Samples | Callee        | Location                        |
| ----: | ------: | ------------- | ------------------------------- |
| 99.8% |   2,858 | `run`         | `Composer\Console\Application`  |
|  0.2% |       5 | `__construct` | `Composer\Console\Application`  |
| <0.1% |       1 | `(anonymous)` | `./composer/src/bootstrap.php`  |
| <0.1% |       1 | `loadClass`   | `Composer\Autoload\ClassLoader` |

##### `execute` (`Composer\Command\DumpAutoloadCommand`)

|     % | Samples | Callee  | Location                              |
| ----: | ------: | ------- | ------------------------------------- |
| 99.9% |   2,828 | `dump`  | `Composer\Autoload\AutoloadGenerator` |
| <0.1% |       1 | `write` | `Composer\IO\ConsoleIO`               |

##### `dump` (`Composer\Autoload\AutoloadGenerator`)

|     % | Samples | Callee                      | Location                                       |
| ----: | ------: | --------------------------- | ---------------------------------------------- |
| 94.7% |   2,679 | `scanPaths`                 | `Composer\ClassMapGenerator\ClassMapGenerator` |
|  4.0% |     113 | `getPathCode`               | `Composer\Autoload\AutoloadGenerator`          |
|  0.6% |      16 | `getStaticFile`             | `Composer\Autoload\AutoloadGenerator`          |
|  0.3% |       8 | `filePutContentsIfModified` | `Composer\Util\Filesystem`                     |
|  0.1% |       3 | `safeCopy`                  | `Composer\Util\Filesystem`                     |

##### `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`)

|     % | Samples | Callee          | Location                                                           |
| ----: | ------: | --------------- | ------------------------------------------------------------------ |
| 91.9% |   2,462 | `findClasses`   | `Composer\ClassMapGenerator\PhpFileParser`                         |
|  1.6% |      43 | `getChildren`   | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |
|  1.6% |      42 | `hasChildren`   | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |
|  1.3% |      36 | `normalizePath` | `Composer\ClassMapGenerator\ClassMapGenerator`                     |
|  0.3% |       8 | `current`       | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`     |

##### `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`)

|     % | Samples | Callee                 | Location                                    |
| ----: | ------: | ---------------------- | ------------------------------------------- |
| 65.7% |   1,618 | `clean`                | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  5.3% |     131 | `matchAllStrictGroups` | `Composer\Pcre\Preg`                        |
|  2.0% |      50 | `matchAll`             | `Composer\Pcre\Preg`                        |
| <0.1% |       1 | `getExtraTypes`        | `Composer\ClassMapGenerator\PhpFileParser`  |

##### `clean` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|     % | Samples | Callee        | Location                                    |
| ----: | ------: | ------------- | ------------------------------------------- |
| 61.3% |     992 | `match`       | `Composer\ClassMapGenerator\PhpFileCleaner` |
| 10.9% |     177 | `skipString`  | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  0.9% |      15 | `skipHeredoc` | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  0.2% |       4 | `isMatch`     | `Composer\Pcre\Preg`                        |
|  0.2% |       3 | `skipToPhp`   | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `match` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|     % | Samples | Callee                | Location             |
| ----: | ------: | --------------------- | -------------------- |
| 90.7% |     902 | `isMatchStrictGroups` | `Composer\Pcre\Preg` |

##### `isMatchStrictGroups` (`Composer\Pcre\Preg`)

|     % | Samples | Callee              | Location             |
| ----: | ------: | ------------------- | -------------------- |
| 83.2% |     777 | `matchStrictGroups` | `Composer\Pcre\Preg` |

##### `matchStrictGroups` (`Composer\Pcre\Preg`)

|     % | Samples | Callee                  | Location             |
| ----: | ------: | ----------------------- | -------------------- |
| 63.3% |     492 | `match`                 | `Composer\Pcre\Preg` |
| 18.0% |     140 | `enforceNonNullMatches` | `Composer\Pcre\Preg` |

##### `createComposer` (`Composer\Factory`)

|     % | Samples | Callee                 | Location                                    |
| ----: | ------: | ---------------------- | ------------------------------------------- |
| 94.5% |     585 | `load`                 | `Composer\Package\Loader\RootPackageLoader` |
|  2.1% |      13 | `validateSchema`       | `Composer\Json\JsonFile`                    |
|  1.0% |       6 | `createHttpDownloader` | `Composer\Factory`                          |
|  0.6% |       4 | `createConfig`         | `Composer\Factory`                          |
|  0.3% |       2 | `loadClass`            | `Composer\Autoload\ClassLoader`             |

##### `create` (`Composer\Factory`)

|      % | Samples | Callee           | Location           |
| -----: | ------: | ---------------- | ------------------ |
| 100.0% |     619 | `createComposer` | `Composer\Factory` |

##### `getComposer` (`Composer\Console\Application`)

|      % | Samples | Callee   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |     619 | `create` | `Composer\Factory` |

##### `tryComposer` (`Composer\Command\BaseCommand`)

|      % | Samples | Callee        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     615 | `getComposer` | `Composer\Console\Application` |

##### `initialize` (`Composer\Command\BaseCommand`)

|      % | Samples | Callee        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     604 | `tryComposer` | `Composer\Command\BaseCommand` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame. `truncated` stands for missing outermost callers.

Common call stack: `doRun` (`Composer\Console\Application`) ← `run` (`Symfony\Component\Console\Application`) ← `run` (`Composer\Console\Application`) ← `(anonymous)` (`./profile.php`)

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17.9% |     662 | `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                                                                                                  |
| 11.5% |     427 | `clean` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                                          |
|  6.7% |     249 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessGitVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← truncated                                                                                  |
|  5.2% |     194 | `call` (`Composer\Util\Silencer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  5.1% |     188 | `pregMatch` (`Composer\Pcre\Preg`) ← `match` ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`) ← `run` (`Symfony\Component\Console\Application`) ← `run` (`Composer\Console\Application`) ← truncated |
|  4.8% |     177 | `skipString` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                           |
|  4.2% |     154 | `isMatchStrictGroups` (`Composer\Pcre\Preg`) ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                 |
|  3.9% |     145 | `match` (`Composer\Pcre\Preg`) ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                 |
|  3.8% |     141 | `matchStrictGroups` (`Composer\Pcre\Preg`) ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                           |
|  3.6% |     133 | `enforceNonNullMatches` (`Composer\Pcre\Preg`) ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                 |
|  3.5% |     128 | `matchAll` (`Composer\Pcre\Preg`) ← `matchAllStrictGroups` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                                     |
|  3.3% |     123 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `versionFromGitTags` (`Composer\Package\Version\VersionGuesser`) ← `guessGitVersion` ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← truncated                                                                                                                 |
|  2.5% |      91 | `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                                |
|  2.4% |      89 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessFossilVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← truncated                                                                               |
|  2.3% |      84 | `checkOffsetCapture` (`Composer\Pcre\Preg`) ← `match` ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                          |
|  1.6% |      59 | `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                                                                                                                                                               |
|  1.5% |      56 | `pregMatch` (`Composer\Pcre\Preg`) ← `match` ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                   |
|  1.3% |      49 | `matchAll` (`Composer\Pcre\Preg`) ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                                                              |
|  1.3% |      48 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessHgVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← truncated                                                                                   |
|  1.1% |      41 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessSvnVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← truncated                                                                                  |

# Sampling profile

Collected 3,944 samples.

| Category    |     % | Samples |
| ----------- | ----: | ------: |
| Ours        | 99.6% |   3,927 |
| Third-party |  0.4% |      17 |

Paths starting with `./` or `../` are relative to `/private/tmp/profiler-md-php-workload/`.

## Call tree

Call paths to the hottest functions.

```
└── 3,940 samples (99.9%) [[via 2 frames]] run  Symfony\Component\Console\Application
    └── 3,923 samples (99.5%) doRun  Composer\Console\Application
        ├── 3,654 samples (92.6%) [[via 2 frames]] run  Symfony\Component\Console\Command\Command
        │   ├── 2,922 samples (74.1%) execute  Composer\Command\DumpAutoloadCommand
        │   │   └── 2,920 samples (74.0%) dump  Composer\Autoload\AutoloadGenerator
        │   │       ├── 2,766 samples (70.1%) scanPaths  (self 1.6%)  Composer\ClassMapGenerator\ClassMapGenerator
        │   │       │   ├── 2,501 samples (63.4%) findClasses  (self 17.0%)  Composer\ClassMapGenerator\PhpFileParser
        │   │       │   │   ├── 1,648 samples (41.8%) clean  (self 10.3%)  Composer\ClassMapGenerator\PhpFileCleaner
        │   │       │   │   │   ├── 1,018 samples (25.8%) match  (self 2.9%)
        │   │       │   │   │   │   └── 902 samples (22.9%) isMatchStrictGroups  (self 3.2%)  Composer\Pcre\Preg
        │   │       │   │   │   │       └── 776 samples (19.7%) matchStrictGroups  (self 3.5%)
        │   │       │   │   │   │           ├── 509 samples (12.9%) match  (self 4.1%)
        │   │       │   │   │   │           │   ├── 248 samples (6.3%) pregMatch
        │   │       │   │   │   │           │   └── 98 samples (2.5%) checkOffsetCapture
        │   │       │   │   │   │           └── 127 samples (3.2%) enforceNonNullMatches
        │   │       │   │   │   ├── 195 samples (4.9%) skipString  (self 4.9%)
        │   │       │   │   │   └── 21 samples (0.5%) skipHeredoc
        │   │       │   │   ├── 144 samples (3.7%) matchAllStrictGroups  Composer\Pcre\Preg
        │   │       │   │   │   └── 141 samples (3.6%) matchAll  (4.5% self in 2 call stacks)
        │   │       │   │   └── 38 samples (1.0%) matchAll  Composer\Pcre\Preg
        │   │       │   ├── 77 samples (2.0%) [[via 2 frames]] __construct  Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator
        │   │       │   ├── 55 samples (1.4%) hasChildren  Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator
        │   │       │   │   └── 55 samples (1.4%) hasChildren  Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator
        │   │       │   └── 69 samples (1.7%) 13 more branches, largest normalizePath (0.6%)
        │   │       ├── 120 samples (3.0%) getPathCode
        │   │       │   ├── 32 samples (0.8%) normalizePath  Composer\Util\Filesystem
        │   │       │   └── 76 samples (1.9%) 2 more branches, largest findShortestPath (1.9%)  Composer\Util\Filesystem
        │   │       └── 20 samples (0.5%) getStaticFile
        │   └── 732 samples (18.6%) [[via 4 frames]] createComposer  Composer\Factory
        │       ├── 697 samples (17.7%) load  Composer\Package\Loader\RootPackageLoader
        │       │   └── 692 samples (17.5%) guessVersion  Composer\Package\Version\VersionGuesser
        │       │       ├── 458 samples (11.6%) guessGitVersion
        │       │       │   ├── 304 samples (7.7%) [[via 3 frames]] run  Symfony\Component\Process\Process
        │       │       │   │   ├── 280 samples (7.1%) [[via 2 frames]] readAndWrite  (self 7.1%; 15.9% in 7 call stacks)  Symfony\Component\Process\Pipes\UnixPipes
        │       │       │   │   └── 18 samples (0.5%) start  (1.1% self in 5 call stacks)
        │       │       │   └── 152 samples (3.9%) 2 more branches, largest versionFromGitTags (3.7%)
        │       │       └── 234 samples (5.9%) 3 more branches, largest guessFossilVersion (3.0%) and guessHgVersion (1.5%)
        │       └── 34 samples (0.9%) 11 more branches, largest validateSchema (0.4%)  Composer\Json\JsonFile
        ├── 246 samples (6.2%) call  (self 5.9%)  Composer\Util\Silencer
        └── 6 samples (0.2%) [[via 3 frames]] loadClass  Composer\Autoload\ClassLoader
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self samples.

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

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

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

Functions with the most samples collected within the function and its callees.

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Ours

|      % | Samples | Function              | Location                                       |
| -----: | ------: | --------------------- | ---------------------------------------------- |
| 100.0% |   3,944 | `(anonymous)`         | `./profile.php`                                |
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

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run` (`Symfony\Component\Console\Application`)

|      % | Samples | Caller | Location                       |
| -----: | ------: | ------ | ------------------------------ |
| 100.0% |   3,940 | `run`  | `Composer\Console\Application` |

##### `run` (`Composer\Console\Application`)

|      % | Samples | Caller        | Location        |
| -----: | ------: | ------------- | --------------- |
| 100.0% |   3,940 | `(anonymous)` | `./profile.php` |

##### `doRun` (`Composer\Console\Application`)

|      % | Samples | Caller | Location                                |
| -----: | ------: | ------ | --------------------------------------- |
| 100.0% |   3,923 | `run`  | `Symfony\Component\Console\Application` |

##### `doRun` (`Symfony\Component\Console\Application`)

|      % | Samples | Caller  | Location                       |
| -----: | ------: | ------- | ------------------------------ |
| 100.0% |   3,656 | `doRun` | `Composer\Console\Application` |

##### `run` (`Symfony\Component\Console\Command\Command`)

|      % | Samples | Caller         | Location                                |
| -----: | ------: | -------------- | --------------------------------------- |
| 100.0% |   3,654 | `doRunCommand` | `Symfony\Component\Console\Application` |

##### `doRunCommand` (`Symfony\Component\Console\Application`)

|      % | Samples | Caller  | Location                                |
| -----: | ------: | ------- | --------------------------------------- |
| 100.0% |   3,654 | `doRun` | `Symfony\Component\Console\Application` |

##### `execute` (`Composer\Command\DumpAutoloadCommand`)

|      % | Samples | Caller | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |   2,922 | `run`  | `Symfony\Component\Console\Command\Command` |

##### `dump` (`Composer\Autoload\AutoloadGenerator`)

|      % | Samples | Caller    | Location                               |
| -----: | ------: | --------- | -------------------------------------- |
| 100.0% |   2,920 | `execute` | `Composer\Command\DumpAutoloadCommand` |

##### `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`)

|      % | Samples | Caller | Location                              |
| -----: | ------: | ------ | ------------------------------------- |
| 100.0% |   2,766 | `dump` | `Composer\Autoload\AutoloadGenerator` |

##### `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`)

|      % | Samples | Caller      | Location                                       |
| -----: | ------: | ----------- | ---------------------------------------------- |
| 100.0% |   2,501 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `clean` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|      % | Samples | Caller        | Location                                   |
| -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% |   1,648 | `findClasses` | `Composer\ClassMapGenerator\PhpFileParser` |

##### `match` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|     % | Samples | Caller        | Location                                    |
| ----: | ------: | ------------- | ------------------------------------------- |
| 99.8% |   1,018 | `clean`       | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  0.2% |       2 | `skipHeredoc` | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `isMatchStrictGroups` (`Composer\Pcre\Preg`)

|     % | Samples | Caller          | Location                                       |
| ----: | ------: | --------------- | ---------------------------------------------- |
| 97.4% |     904 | `match`         | `Composer\ClassMapGenerator\PhpFileCleaner`    |
|  2.2% |      20 | `normalizePath` | `Composer\Util\Filesystem`                     |
|  0.4% |       4 | `normalizePath` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `matchStrictGroups` (`Composer\Pcre\Preg`)

|      % | Samples | Caller                | Location             |
| -----: | ------: | --------------------- | -------------------- |
| 100.0% |     796 | `isMatchStrictGroups` | `Composer\Pcre\Preg` |

##### `createComposer` (`Composer\Factory`)

|      % | Samples | Caller   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |     732 | `create` | `Composer\Factory` |

##### `create` (`Composer\Factory`)

|      % | Samples | Caller        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     732 | `getComposer` | `Composer\Console\Application` |

##### `getComposer` (`Composer\Console\Application`)

|      % | Samples | Caller        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     732 | `tryComposer` | `Composer\Command\BaseCommand` |

##### `tryComposer` (`Composer\Command\BaseCommand`)

|      % | Samples | Caller       | Location                       |
| -----: | ------: | ------------ | ------------------------------ |
| 100.0% |     732 | `initialize` | `Composer\Command\BaseCommand` |

##### `initialize` (`Composer\Command\BaseCommand`)

|      % | Samples | Caller | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |     732 | `run`  | `Symfony\Component\Console\Command\Command` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`./profile.php`)

|     % | Samples | Callee        | Location                        |
| ----: | ------: | ------------- | ------------------------------- |
| 99.9% |   3,940 | `run`         | `Composer\Console\Application`  |
|  0.1% |       2 | `__construct` | `Composer\Console\Application`  |
| <0.1% |       1 | `(anonymous)` | `./composer/src/bootstrap.php`  |
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

Call stacks with the most samples collected in their leaf frame.

Common call stack: `doRun` (`Composer\Console\Application`) ← `run` (`Symfony\Component\Console\Application`) ← `run` (`Composer\Console\Application`) ← `(anonymous)` (`./profile.php`)

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

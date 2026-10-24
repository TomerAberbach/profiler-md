# Sampling profile

Collected 4,164 samples.

| Category    |     % | Samples |
| ----------- | ----: | ------: |
| Ours        | 99.6% |   4,146 |
| Third-party |  0.4% |      18 |

Paths starting with `./` or `../` are relative to `/private/tmp/profiler-md-php-workload/`.

## Call tree

Call paths to the hottest functions.

```
└── 4,157 samples (99.8%) [[via 2 frames]] run  Symfony\Component\Console\Application
    ├── 3,990 samples (95.8%) doRun  Composer\Console\Application
    │   ├── 3,692 samples (88.7%) [[via 2 frames]] run  Symfony\Component\Console\Command\Command
    │   │   ├── 2,944 samples (70.7%) execute  Composer\Command\DumpAutoloadCommand
    │   │   │   └── 2,944 samples (70.7%) dump  Composer\Autoload\AutoloadGenerator
    │   │   │       ├── 2,784 samples (66.9%) scanPaths  (self 1.8%)  Composer\ClassMapGenerator\ClassMapGenerator
    │   │   │       │   ├── 2,520 samples (60.5%) findClasses  (self 15.8%)  Composer\ClassMapGenerator\PhpFileParser
    │   │   │       │   │   ├── 1,660 samples (39.9%) clean  (self 10.4%)  Composer\ClassMapGenerator\PhpFileCleaner
    │   │   │       │   │   │   ├── 989 samples (23.8%) match  (self 2.6%)
    │   │   │       │   │   │   │   └── 882 samples (21.2%) isMatchStrictGroups  (self 3.3%)  Composer\Pcre\Preg
    │   │   │       │   │   │   │       └── 743 samples (17.8%) matchStrictGroups  (self 3.3%)
    │   │   │       │   │   │   │           ├── 467 samples (11.2%) match  (self 3.4%)
    │   │   │       │   │   │   │           │   ├── 252 samples (6.1%) pregMatch  (6.6% self in 6 call stacks)
    │   │   │       │   │   │   │           │   └── 75 samples (1.8%) checkOffsetCapture
    │   │   │       │   │   │   │           └── 138 samples (3.3%) enforceNonNullMatches
    │   │   │       │   │   │   ├── 203 samples (4.9%) skipString  (self 4.9%)
    │   │   │       │   │   │   └── 19 samples (0.5%) skipHeredoc
    │   │   │       │   │   ├── 158 samples (3.8%) matchAllStrictGroups  Composer\Pcre\Preg
    │   │   │       │   │   │   └── 155 samples (3.7%) matchAll  (self 3.7%; 4.5% in 2 call stacks)
    │   │   │       │   │   └── 42 samples (1.0%) matchAll  (self 0.8%)  Composer\Pcre\Preg
    │   │   │       │   ├── 55 samples (1.3%) hasChildren  Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator
    │   │   │       │   │   └── 55 samples (1.3%) hasChildren  Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator
    │   │   │       │   ├── 51 samples (1.2%) [[via 2 frames]] __construct  Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator
    │   │   │       │   └── 77 samples (1.8%) 10 more branches, largest normalizePath (0.9%)
    │   │   │       ├── 112 samples (2.7%) getPathCode
    │   │   │       │   ├── 35 samples (0.8%) normalizePath  Composer\Util\Filesystem
    │   │   │       │   └── 67 samples (1.6%) 2 more branches, largest findShortestPath (1.6%)  Composer\Util\Filesystem
    │   │   │       └── 22 samples (0.5%) getStaticFile
    │   │   └── 748 samples (18.0%) [[via 4 frames]] createComposer  Composer\Factory
    │   │       ├── 710 samples (17.1%) load  Composer\Package\Loader\RootPackageLoader
    │   │       │   └── 705 samples (16.9%) guessVersion  Composer\Package\Version\VersionGuesser
    │   │       │       ├── 458 samples (11.0%) guessGitVersion
    │   │       │       │   ├── 299 samples (7.2%) [[via 3 frames]] run  Symfony\Component\Process\Process
    │   │       │       │   │   ├── 277 samples (6.7%) [[via 2 frames]] readAndWrite  (15.5% self in 7 call stacks)  Symfony\Component\Process\Pipes\UnixPipes
    │   │       │       │   │   └── 18 samples (0.4%) start  (0.9% self in 5 call stacks)
    │   │       │       │   └── 154 samples (3.7%) 3 more branches, largest versionFromGitTags (3.5%)
    │   │       │       └── 247 samples (5.9%) 3 more branches, largest guessFossilVersion (3.0%) and guessHgVersion (1.5%)
    │   │       └── 4 samples (0.1%) [[via 11 frames]] loadSchema  JsonSchema\Uri\UriRetriever
    │   └── 279 samples (6.7%) call  (self 6.3%)  Composer\Util\Silencer
    └── 161 samples (3.9%) [[via 4 frames]] readFromProcess  Symfony\Component\Console\Terminal
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Ours

|     % | Samples | Function                | Location                                                       |
| ----: | ------: | ----------------------- | -------------------------------------------------------------- |
| 15.8% |     659 | `findClasses`           | `Composer\ClassMapGenerator\PhpFileParser`                     |
| 15.5% |     645 | `readAndWrite`          | `Symfony\Component\Process\Pipes\UnixPipes`                    |
| 10.4% |     435 | `clean`                 | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  6.6% |     276 | `pregMatch`             | `Composer\Pcre\Preg`                                           |
|  6.5% |     269 | `call`                  | `Composer\Util\Silencer`                                       |
|  4.9% |     202 | `skipString`            | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  4.5% |     187 | `matchAll`              | `Composer\Pcre\Preg`                                           |
|  4.0% |     167 | `readFromProcess`       | `Symfony\Component\Console\Terminal`                           |
|  3.6% |     149 | `match`                 | `Composer\Pcre\Preg`                                           |
|  3.4% |     143 | `matchStrictGroups`     | `Composer\Pcre\Preg`                                           |
|  3.4% |     142 | `isMatchStrictGroups`   | `Composer\Pcre\Preg`                                           |
|  3.4% |     141 | `enforceNonNullMatches` | `Composer\Pcre\Preg`                                           |
|  2.6% |     107 | `match`                 | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  2.0% |      84 | `checkOffsetCapture`    | `Composer\Pcre\Preg`                                           |
|  1.8% |      77 | `scanPaths`             | `Composer\ClassMapGenerator\ClassMapGenerator`                 |
|  1.3% |      55 | `hasChildren`           | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  1.3% |      54 | `__construct`           | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  0.9% |      39 | `start`                 | `Symfony\Component\Process\Process`                            |
|  0.8% |      33 | `normalizePath`         | `Composer\Util\Filesystem`                                     |
|  0.5% |      20 | `normalizePath`         | `Composer\ClassMapGenerator\ClassMapGenerator`                 |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`)

|      % | Samples | Caller      | Location                                       |
| -----: | ------: | ----------- | ---------------------------------------------- |
| 100.0% |     659 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |     645 | `readPipes` | `Symfony\Component\Process\Process` |

##### `clean` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|      % | Samples | Caller        | Location                                   |
| -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% |     435 | `findClasses` | `Composer\ClassMapGenerator\PhpFileParser` |

##### `pregMatch` (`Composer\Pcre\Preg`)

|      % | Samples | Caller  | Location             |
| -----: | ------: | ------- | -------------------- |
| 100.0% |     276 | `match` | `Composer\Pcre\Preg` |

##### `call` (`Composer\Util\Silencer`)

|     % | Samples | Caller                      | Location                       |
| ----: | ------: | --------------------------- | ------------------------------ |
| 97.8% |     263 | `doRun`                     | `Composer\Console\Application` |
|  1.1% |       3 | `filePutContentsIfModified` | `Composer\Util\Filesystem`     |
|  0.7% |       2 | `getHomeDir`                | `Composer\Factory`             |
|  0.4% |       1 | `__construct`               | `Composer\Console\Application` |

##### `skipString` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |     202 | `clean` | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `matchAll` (`Composer\Pcre\Preg`)

|     % | Samples | Caller                 | Location                                   |
| ----: | ------: | ---------------------- | ------------------------------------------ |
| 81.8% |     153 | `matchAllStrictGroups` | `Composer\Pcre\Preg`                       |
| 18.2% |      34 | `findClasses`          | `Composer\ClassMapGenerator\PhpFileParser` |

##### `readFromProcess` (`Symfony\Component\Console\Terminal`)

|      % | Samples | Caller           | Location                             |
| -----: | ------: | ---------------- | ------------------------------------ |
| 100.0% |     167 | `getSttyColumns` | `Symfony\Component\Console\Terminal` |

##### `match` (`Composer\Pcre\Preg`)

|     % | Samples | Caller              | Location             |
| ----: | ------: | ------------------- | -------------------- |
| 97.3% |     145 | `matchStrictGroups` | `Composer\Pcre\Preg` |
|  2.7% |       4 | `isMatch`           | `Composer\Pcre\Preg` |

##### `matchStrictGroups` (`Composer\Pcre\Preg`)

|      % | Samples | Caller                | Location             |
| -----: | ------: | --------------------- | -------------------- |
| 100.0% |     143 | `isMatchStrictGroups` | `Composer\Pcre\Preg` |

##### `isMatchStrictGroups` (`Composer\Pcre\Preg`)

|     % | Samples | Caller          | Location                                       |
| ----: | ------: | --------------- | ---------------------------------------------- |
| 97.9% |     139 | `match`         | `Composer\ClassMapGenerator\PhpFileCleaner`    |
|  1.4% |       2 | `normalizePath` | `Composer\Util\Filesystem`                     |
|  0.7% |       1 | `normalizePath` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `enforceNonNullMatches` (`Composer\Pcre\Preg`)

|      % | Samples | Caller              | Location             |
| -----: | ------: | ------------------- | -------------------- |
| 100.0% |     141 | `matchStrictGroups` | `Composer\Pcre\Preg` |

##### `match` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |     107 | `clean` | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `checkOffsetCapture` (`Composer\Pcre\Preg`)

|     % | Samples | Caller     | Location             |
| ----: | ------: | ---------- | -------------------- |
| 91.7% |      77 | `match`    | `Composer\Pcre\Preg` |
|  8.3% |       7 | `matchAll` | `Composer\Pcre\Preg` |

##### `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`)

|      % | Samples | Caller | Location                              |
| -----: | ------: | ------ | ------------------------------------- |
| 100.0% |      77 | `dump` | `Composer\Autoload\AutoloadGenerator` |

##### `hasChildren` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`)

|      % | Samples | Caller        | Location                                                           |
| -----: | ------: | ------------- | ------------------------------------------------------------------ |
| 100.0% |      55 | `hasChildren` | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |

##### `__construct` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`)

|     % | Samples | Caller              | Location                                                       |
| ----: | ------: | ------------------- | -------------------------------------------------------------- |
| 94.4% |      51 | `getChildren`       | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  5.6% |       3 | `searchInDirectory` | `Symfony\Component\Finder\Finder`                              |

##### `start` (`Symfony\Component\Process\Process`)

|      % | Samples | Caller | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |      39 | `run`  | `Symfony\Component\Process\Process` |

##### `normalizePath` (`Composer\Util\Filesystem`)

|     % | Samples | Caller                 | Location                              |
| ----: | ------: | ---------------------- | ------------------------------------- |
| 54.5% |      18 | `getPathCode`          | `Composer\Autoload\AutoloadGenerator` |
| 42.4% |      14 | `findShortestPath`     | `Composer\Util\Filesystem`            |
|  3.0% |       1 | `findShortestPathCode` | `Composer\Util\Filesystem`            |

##### `normalizePath` (`Composer\ClassMapGenerator\ClassMapGenerator`)

|      % | Samples | Caller      | Location                                       |
| -----: | ------: | ----------- | ---------------------------------------------- |
| 100.0% |      20 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

### Total samples

Functions with the most samples collected within the function and its callees.

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Ours

|      % | Samples | Function              | Location                                       |
| -----: | ------: | --------------------- | ---------------------------------------------- |
| 100.0% |   4,164 | `(anonymous)`         | `./profile.php`                                |
|  99.8% |   4,157 | `run`                 | `Symfony\Component\Console\Application`        |
|  99.8% |   4,157 | `run`                 | `Composer\Console\Application`                 |
|  95.8% |   3,990 | `doRun`               | `Composer\Console\Application`                 |
|  88.7% |   3,694 | `doRun`               | `Symfony\Component\Console\Application`        |
|  88.7% |   3,692 | `run`                 | `Symfony\Component\Console\Command\Command`    |
|  88.7% |   3,692 | `doRunCommand`        | `Symfony\Component\Console\Application`        |
|  70.7% |   2,944 | `dump`                | `Composer\Autoload\AutoloadGenerator`          |
|  70.7% |   2,944 | `execute`             | `Composer\Command\DumpAutoloadCommand`         |
|  66.9% |   2,784 | `scanPaths`           | `Composer\ClassMapGenerator\ClassMapGenerator` |
|  60.5% |   2,520 | `findClasses`         | `Composer\ClassMapGenerator\PhpFileParser`     |
|  39.9% |   1,660 | `clean`               | `Composer\ClassMapGenerator\PhpFileCleaner`    |
|  23.8% |     989 | `match`               | `Composer\ClassMapGenerator\PhpFileCleaner`    |
|  21.9% |     911 | `isMatchStrictGroups` | `Composer\Pcre\Preg`                           |
|  18.5% |     769 | `matchStrictGroups`   | `Composer\Pcre\Preg`                           |
|  18.0% |     748 | `createComposer`      | `Composer\Factory`                             |
|  18.0% |     748 | `create`              | `Composer\Factory`                             |
|  18.0% |     748 | `getComposer`         | `Composer\Console\Application`                 |
|  18.0% |     748 | `tryComposer`         | `Composer\Command\BaseCommand`                 |
|  18.0% |     748 | `initialize`          | `Composer\Command\BaseCommand`                 |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run` (`Symfony\Component\Console\Application`)

|      % | Samples | Caller | Location                       |
| -----: | ------: | ------ | ------------------------------ |
| 100.0% |   4,157 | `run`  | `Composer\Console\Application` |

##### `run` (`Composer\Console\Application`)

|      % | Samples | Caller        | Location        |
| -----: | ------: | ------------- | --------------- |
| 100.0% |   4,157 | `(anonymous)` | `./profile.php` |

##### `doRun` (`Composer\Console\Application`)

|      % | Samples | Caller | Location                                |
| -----: | ------: | ------ | --------------------------------------- |
| 100.0% |   3,990 | `run`  | `Symfony\Component\Console\Application` |

##### `doRun` (`Symfony\Component\Console\Application`)

|      % | Samples | Caller  | Location                       |
| -----: | ------: | ------- | ------------------------------ |
| 100.0% |   3,694 | `doRun` | `Composer\Console\Application` |

##### `run` (`Symfony\Component\Console\Command\Command`)

|      % | Samples | Caller         | Location                                |
| -----: | ------: | -------------- | --------------------------------------- |
| 100.0% |   3,692 | `doRunCommand` | `Symfony\Component\Console\Application` |

##### `doRunCommand` (`Symfony\Component\Console\Application`)

|      % | Samples | Caller  | Location                                |
| -----: | ------: | ------- | --------------------------------------- |
| 100.0% |   3,692 | `doRun` | `Symfony\Component\Console\Application` |

##### `dump` (`Composer\Autoload\AutoloadGenerator`)

|      % | Samples | Caller    | Location                               |
| -----: | ------: | --------- | -------------------------------------- |
| 100.0% |   2,944 | `execute` | `Composer\Command\DumpAutoloadCommand` |

##### `execute` (`Composer\Command\DumpAutoloadCommand`)

|      % | Samples | Caller | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |   2,944 | `run`  | `Symfony\Component\Console\Command\Command` |

##### `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`)

|      % | Samples | Caller | Location                              |
| -----: | ------: | ------ | ------------------------------------- |
| 100.0% |   2,784 | `dump` | `Composer\Autoload\AutoloadGenerator` |

##### `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`)

|      % | Samples | Caller      | Location                                       |
| -----: | ------: | ----------- | ---------------------------------------------- |
| 100.0% |   2,520 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `clean` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|      % | Samples | Caller        | Location                                   |
| -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% |   1,660 | `findClasses` | `Composer\ClassMapGenerator\PhpFileParser` |

##### `match` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |     989 | `clean` | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `isMatchStrictGroups` (`Composer\Pcre\Preg`)

|     % | Samples | Caller          | Location                                       |
| ----: | ------: | --------------- | ---------------------------------------------- |
| 96.8% |     882 | `match`         | `Composer\ClassMapGenerator\PhpFileCleaner`    |
|  1.9% |      17 | `normalizePath` | `Composer\Util\Filesystem`                     |
|  1.3% |      12 | `normalizePath` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `matchStrictGroups` (`Composer\Pcre\Preg`)

|      % | Samples | Caller                | Location             |
| -----: | ------: | --------------------- | -------------------- |
| 100.0% |     769 | `isMatchStrictGroups` | `Composer\Pcre\Preg` |

##### `createComposer` (`Composer\Factory`)

|      % | Samples | Caller   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |     748 | `create` | `Composer\Factory` |

##### `create` (`Composer\Factory`)

|      % | Samples | Caller        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     748 | `getComposer` | `Composer\Console\Application` |

##### `getComposer` (`Composer\Console\Application`)

|      % | Samples | Caller        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     748 | `tryComposer` | `Composer\Command\BaseCommand` |

##### `tryComposer` (`Composer\Command\BaseCommand`)

|      % | Samples | Caller       | Location                       |
| -----: | ------: | ------------ | ------------------------------ |
| 100.0% |     748 | `initialize` | `Composer\Command\BaseCommand` |

##### `initialize` (`Composer\Command\BaseCommand`)

|      % | Samples | Caller | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |     748 | `run`  | `Symfony\Component\Console\Command\Command` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`./profile.php`)

|     % | Samples | Callee        | Location                                  |
| ----: | ------: | ------------- | ----------------------------------------- |
| 99.8% |   4,157 | `run`         | `Composer\Console\Application`            |
|  0.1% |       3 | `__construct` | `Composer\Console\Application`            |
| <0.1% |       2 | `loadClass`   | `Composer\Autoload\ClassLoader`           |
| <0.1% |       1 | `(anonymous)` | `./composer/src/bootstrap.php`            |
| <0.1% |       1 | `__construct` | `Symfony\Component\Console\Output\Output` |

##### `run` (`Symfony\Component\Console\Application`)

|     % | Samples | Callee      | Location                             |
| ----: | ------: | ----------- | ------------------------------------ |
| 96.0% |   3,990 | `doRun`     | `Composer\Console\Application`       |
|  3.9% |     161 | `getHeight` | `Symfony\Component\Console\Terminal` |
|  0.1% |       6 | `getWidth`  | `Symfony\Component\Console\Terminal` |

##### `run` (`Composer\Console\Application`)

|      % | Samples | Callee | Location                                |
| -----: | ------: | ------ | --------------------------------------- |
| 100.0% |   4,157 | `run`  | `Symfony\Component\Console\Application` |

##### `doRun` (`Composer\Console\Application`)

|     % | Samples | Callee      | Location                                |
| ----: | ------: | ----------- | --------------------------------------- |
| 92.6% |   3,694 | `doRun`     | `Symfony\Component\Console\Application` |
|  7.0% |     279 | `call`      | `Composer\Util\Silencer`                |
|  0.3% |      13 | `find`      | `Symfony\Component\Console\Application` |
|  0.1% |       3 | `loadClass` | `Composer\Autoload\ClassLoader`         |

##### `doRun` (`Symfony\Component\Console\Application`)

|     % | Samples | Callee          | Location                                |
| ----: | ------: | --------------- | --------------------------------------- |
| 99.9% |   3,692 | `doRunCommand`  | `Symfony\Component\Console\Application` |
|  0.1% |       2 | `getDefinition` | `Symfony\Component\Console\Application` |

##### `run` (`Symfony\Component\Console\Command\Command`)

|     % | Samples | Callee       | Location                               |
| ----: | ------: | ------------ | -------------------------------------- |
| 79.7% |   2,944 | `execute`    | `Composer\Command\DumpAutoloadCommand` |
| 20.3% |     748 | `initialize` | `Composer\Command\BaseCommand`         |

##### `doRunCommand` (`Symfony\Component\Console\Application`)

|      % | Samples | Callee | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |   3,692 | `run`  | `Symfony\Component\Console\Command\Command` |

##### `dump` (`Composer\Autoload\AutoloadGenerator`)

|     % | Samples | Callee                      | Location                                       |
| ----: | ------: | --------------------------- | ---------------------------------------------- |
| 94.6% |   2,784 | `scanPaths`                 | `Composer\ClassMapGenerator\ClassMapGenerator` |
|  3.8% |     112 | `getPathCode`               | `Composer\Autoload\AutoloadGenerator`          |
|  0.7% |      22 | `getStaticFile`             | `Composer\Autoload\AutoloadGenerator`          |
|  0.2% |       5 | `safeCopy`                  | `Composer\Util\Filesystem`                     |
|  0.1% |       4 | `filePutContentsIfModified` | `Composer\Util\Filesystem`                     |

##### `execute` (`Composer\Command\DumpAutoloadCommand`)

|      % | Samples | Callee | Location                              |
| -----: | ------: | ------ | ------------------------------------- |
| 100.0% |   2,944 | `dump` | `Composer\Autoload\AutoloadGenerator` |

##### `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`)

|     % | Samples | Callee          | Location                                                           |
| ----: | ------: | --------------- | ------------------------------------------------------------------ |
| 90.5% |   2,520 | `findClasses`   | `Composer\ClassMapGenerator\PhpFileParser`                         |
|  2.0% |      55 | `getChildren`   | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |
|  2.0% |      55 | `hasChildren`   | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |
|  1.3% |      36 | `normalizePath` | `Composer\ClassMapGenerator\ClassMapGenerator`                     |
|  0.4% |      11 | `next`          | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`     |

##### `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`)

|     % | Samples | Callee                 | Location                                    |
| ----: | ------: | ---------------------- | ------------------------------------------- |
| 65.9% |   1,660 | `clean`                | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  6.3% |     158 | `matchAllStrictGroups` | `Composer\Pcre\Preg`                        |
|  1.7% |      42 | `matchAll`             | `Composer\Pcre\Preg`                        |
| <0.1% |       1 | `getExtraTypes`        | `Composer\ClassMapGenerator\PhpFileParser`  |

##### `clean` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|     % | Samples | Callee        | Location                                    |
| ----: | ------: | ------------- | ------------------------------------------- |
| 59.6% |     989 | `match`       | `Composer\ClassMapGenerator\PhpFileCleaner` |
| 12.2% |     203 | `skipString`  | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  1.1% |      19 | `skipHeredoc` | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  0.5% |       9 | `isMatch`     | `Composer\Pcre\Preg`                        |
|  0.3% |       5 | `skipToPhp`   | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `match` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|     % | Samples | Callee                | Location             |
| ----: | ------: | --------------------- | -------------------- |
| 89.2% |     882 | `isMatchStrictGroups` | `Composer\Pcre\Preg` |

##### `isMatchStrictGroups` (`Composer\Pcre\Preg`)

|     % | Samples | Callee              | Location             |
| ----: | ------: | ------------------- | -------------------- |
| 84.4% |     769 | `matchStrictGroups` | `Composer\Pcre\Preg` |

##### `matchStrictGroups` (`Composer\Pcre\Preg`)

|     % | Samples | Callee                  | Location             |
| ----: | ------: | ----------------------- | -------------------- |
| 63.1% |     485 | `match`                 | `Composer\Pcre\Preg` |
| 18.3% |     141 | `enforceNonNullMatches` | `Composer\Pcre\Preg` |

##### `createComposer` (`Composer\Factory`)

|     % | Samples | Callee                 | Location                                    |
| ----: | ------: | ---------------------- | ------------------------------------------- |
| 94.9% |     710 | `load`                 | `Composer\Package\Loader\RootPackageLoader` |
|  2.4% |      18 | `validateSchema`       | `Composer\Json\JsonFile`                    |
|  0.7% |       5 | `createHttpDownloader` | `Composer\Factory`                          |
|  0.4% |       3 | `createConfig`         | `Composer\Factory`                          |
|  0.3% |       2 | `loadClass`            | `Composer\Autoload\ClassLoader`             |

##### `create` (`Composer\Factory`)

|      % | Samples | Callee           | Location           |
| -----: | ------: | ---------------- | ------------------ |
| 100.0% |     748 | `createComposer` | `Composer\Factory` |

##### `getComposer` (`Composer\Console\Application`)

|      % | Samples | Callee   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |     748 | `create` | `Composer\Factory` |

##### `tryComposer` (`Composer\Command\BaseCommand`)

|      % | Samples | Callee        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     748 | `getComposer` | `Composer\Console\Application` |

##### `initialize` (`Composer\Command\BaseCommand`)

|      % | Samples | Callee        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     748 | `tryComposer` | `Composer\Command\BaseCommand` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `run` (`Symfony\Component\Console\Application`) ← `run` (`Composer\Console\Application`) ← `(anonymous)` (`./profile.php`)

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15.8% |     659 | `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                                                                                                                                                                 |
| 10.4% |     435 | `clean` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                                                                                                         |
|  6.7% |     277 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessGitVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                        |
|  6.3% |     263 | `call` (`Composer\Util\Silencer`) ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  6.1% |     252 | `pregMatch` (`Composer\Pcre\Preg`) ← `match` ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                  |
|  4.9% |     202 | `skipString` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                                                                                          |
|  3.9% |     161 | `readFromProcess` (`Symfony\Component\Console\Terminal`) ← `getSttyColumns` ← `initDimensionsUsingStty` ← `initDimensions` ← `getHeight`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  3.7% |     153 | `matchAll` (`Composer\Pcre\Preg`) ← `matchAllStrictGroups` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                                                                                                    |
|  3.4% |     142 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `versionFromGitTags` (`Composer\Package\Version\VersionGuesser`) ← `guessGitVersion` ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`) |
|  3.4% |     140 | `match` (`Composer\Pcre\Preg`) ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                |
|  3.3% |     139 | `isMatchStrictGroups` (`Composer\Pcre\Preg`) ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                                                |
|  3.3% |     138 | `enforceNonNullMatches` (`Composer\Pcre\Preg`) ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                |
|  3.3% |     138 | `matchStrictGroups` (`Composer\Pcre\Preg`) ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                          |
|  2.6% |     108 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessFossilVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                     |
|  2.6% |     107 | `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                                                                                               |
|  1.8% |      77 | `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                                                                                                                                                                                                                              |
|  1.8% |      75 | `checkOffsetCapture` (`Composer\Pcre\Preg`) ← `match` ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                         |
|  1.3% |      56 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessSvnVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                        |
|  1.3% |      55 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessHgVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                         |
|  1.3% |      55 | `hasChildren` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`) ← `hasChildren` (`Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                                                        |

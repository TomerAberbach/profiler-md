# Sampling profile

Collected 3,922 samples.

| Category    |     % | Samples |
| ----------- | ----: | ------: |
| Ours        | 99.6% |   3,907 |
| Third-party |  0.4% |      15 |

Paths starting with `./` or `../` are relative to `/private/tmp/profiler-md-php-workload/`.

Call stacks missing their outermost callers account for 23.0% of the samples collected.

`…` stands for omitted frames. `truncated` stands for missing outermost callers.

## Call tree

Call paths to the hottest functions.

```
├── … 3,011 samples (76.8%) run at Symfony\Component\Console\Application
│   ├── 2,837 samples (72.3%) doRun at Composer\Console\Application
│   │   ├── … 2,572 samples (65.6%) run at Symfony\Component\Console\Command\Command
│   │   │   ├── 2,552 samples (65.1%) execute at Composer\Command\DumpAutoloadCommand
│   │   │   │   └── 2,552 samples (65.1%) dump at Composer\Autoload\AutoloadGenerator
│   │   │   │       ├── 2,407 samples (61.4%, self 1.6%) scanPaths at Composer\ClassMapGenerator\ClassMapGenerator
│   │   │   │       │   ├── 2,226 samples (56.8%, self 16.1%) findClasses at Composer\ClassMapGenerator\PhpFileParser
│   │   │   │       │   │   ├── 1,433 samples (36.5%, self 10.8%) clean at Composer\ClassMapGenerator\PhpFileCleaner
│   │   │   │       │   │   │   ├── 793 samples (20.2%, self 2.5%) match
│   │   │   │       │   │   │   │   └── 694 samples (17.7%, self 3.3%) isMatchStrictGroups at Composer\Pcre\Preg
│   │   │   │       │   │   │   │       └── 563 samples (14.4%, self 3.4%) matchStrictGroups
│   │   │   │       │   │   │   │           ├── 291 samples (7.4%, self 3.4%) match
│   │   │   │       │   │   │   │           │   ├── 91 samples (2.3%) checkOffsetCapture
│   │   │   │       │   │   │   │           │   └── 65 samples (1.7%) pregMatch
│   │   │   │       │   │   │   │           └── 138 samples (3.5%) enforceNonNullMatches
│   │   │   │       │   │   │   ├── 197 samples (5.0%, self 5.0%) skipString
│   │   │   │       │   │   │   └── 4 samples (0.1%) skipToPhp
│   │   │   │       │   │   ├── 121 samples (3.1%) matchAllStrictGroups at Composer\Pcre\Preg
│   │   │   │       │   │   │   └── 117 samples (3.0%, self 2.9%, self 4.0% globally) matchAll
│   │   │   │       │   │   └── 42 samples (1.1%) matchAll at Composer\Pcre\Preg
│   │   │   │       │   ├── 45 samples (1.1%) hasChildren at Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator
│   │   │   │       │   │   └── 44 samples (1.1%) hasChildren at Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator
│   │   │   │       │   ├── 14 samples (0.4%) next at Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator
│   │   │   │       │   └── 58 samples (1.5%) 14 more callees, led by (0.5%) normalizePath
│   │   │   │       └── 142 samples (3.6%) 7 more callees, led by (2.9%) getPathCode
│   │   │   └── 20 samples (0.5%) initialize at Composer\Command\BaseCommand …
│   │   ├── 243 samples (6.2%, self 5.9%) call at Composer\Util\Silencer
│   │   └── … 9 samples (0.2%) loadClass at Composer\Autoload\ClassLoader
│   └── … 169 samples (4.3%) readFromProcess at Symfony\Component\Console\Terminal
└── 903 samples (23.0%) truncated
    ├── … 444 samples (11.3%) guessVersion at Composer\Package\Version\VersionGuesser
    │   ├── … 256 samples (6.5%, self 14.7% globally) readAndWrite at Symfony\Component\Process\Pipes\UnixPipes
    │   └── 187 samples (4.8%) 3 more callees, led by (2.4%) guessFossilVersion
    ├── … 253 samples (6.5%) scanPaths at Composer\ClassMapGenerator\ClassMapGenerator
    │   ├── … 201 samples (5.1%, self 7.3% globally) pregMatch at Composer\Pcre\Preg
    │   └── … 51 samples (1.3%) __construct at Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator
    ├── … 32 samples (0.8%) guessVersion at Composer\Package\Version\VersionGuesser
    │   ├── … 10 samples (0.3%, self 0.9% globally) start at Symfony\Component\Process\Process
    │   └── 8 samples (0.2%) guessFossilVersion
    └── 172 samples (4.4%) 7 more root frames, led by (3.3%) initialize at Composer\Command\BaseCommand
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Ours

|     % | Samples | Function                | Location                                                       |
| ----: | ------: | ----------------------- | -------------------------------------------------------------- |
| 16.1% |     630 | `findClasses`           | `Composer\ClassMapGenerator\PhpFileParser`                     |
| 14.7% |     576 | `readAndWrite`          | `Symfony\Component\Process\Pipes\UnixPipes`                    |
| 10.8% |     423 | `clean`                 | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  7.3% |     287 | `pregMatch`             | `Composer\Pcre\Preg`                                           |
|  5.9% |     233 | `call`                  | `Composer\Util\Silencer`                                       |
|  5.0% |     196 | `skipString`            | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  4.4% |     174 | `readFromProcess`       | `Symfony\Component\Console\Terminal`                           |
|  4.0% |     157 | `matchAll`              | `Composer\Pcre\Preg`                                           |
|  3.8% |     148 | `match`                 | `Composer\Pcre\Preg`                                           |
|  3.6% |     142 | `matchStrictGroups`     | `Composer\Pcre\Preg`                                           |
|  3.5% |     139 | `enforceNonNullMatches` | `Composer\Pcre\Preg`                                           |
|  3.4% |     134 | `isMatchStrictGroups`   | `Composer\Pcre\Preg`                                           |
|  2.5% |      99 | `match`                 | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  2.4% |      96 | `checkOffsetCapture`    | `Composer\Pcre\Preg`                                           |
|  1.6% |      64 | `scanPaths`             | `Composer\ClassMapGenerator\ClassMapGenerator`                 |
|  1.4% |      55 | `__construct`           | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  1.1% |      44 | `hasChildren`           | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  0.9% |      36 | `start`                 | `Symfony\Component\Process\Process`                            |
|  0.8% |      32 | `normalizePath`         | `Composer\Util\Filesystem`                                     |
|  0.5% |      19 | `replaceCallback`       | `Composer\Pcre\Preg`                                           |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`)

|      % | Samples | Caller      | Location                                       |
| -----: | ------: | ----------- | ---------------------------------------------- |
| 100.0% |     630 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |     576 | `readPipes` | `Symfony\Component\Process\Process` |

##### `clean` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|      % | Samples | Caller        | Location                                   |
| -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% |     423 | `findClasses` | `Composer\ClassMapGenerator\PhpFileParser` |

##### `pregMatch` (`Composer\Pcre\Preg`)

|      % | Samples | Caller  | Location             |
| -----: | ------: | ------- | -------------------- |
| 100.0% |     287 | `match` | `Composer\Pcre\Preg` |

##### `call` (`Composer\Util\Silencer`)

|     % | Samples | Caller                      | Location                       |
| ----: | ------: | --------------------------- | ------------------------------ |
| 99.6% |     232 | `doRun`                     | `Composer\Console\Application` |
|  0.4% |       1 | `filePutContentsIfModified` | `Composer\Util\Filesystem`     |

##### `skipString` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |     196 | `clean` | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `readFromProcess` (`Symfony\Component\Console\Terminal`)

|      % | Samples | Caller           | Location                             |
| -----: | ------: | ---------------- | ------------------------------------ |
| 100.0% |     174 | `getSttyColumns` | `Symfony\Component\Console\Terminal` |

##### `matchAll` (`Composer\Pcre\Preg`)

|     % | Samples | Caller                 | Location                                   |
| ----: | ------: | ---------------------- | ------------------------------------------ |
| 73.2% |     115 | `matchAllStrictGroups` | `Composer\Pcre\Preg`                       |
| 26.8% |      42 | `findClasses`          | `Composer\ClassMapGenerator\PhpFileParser` |

##### `match` (`Composer\Pcre\Preg`)

|     % | Samples | Caller              | Location             |
| ----: | ------: | ------------------- | -------------------- |
| 94.6% |     140 | `matchStrictGroups` | `Composer\Pcre\Preg` |
|  5.4% |       8 | `isMatch`           | `Composer\Pcre\Preg` |

##### `matchStrictGroups` (`Composer\Pcre\Preg`)

|      % | Samples | Caller                | Location             |
| -----: | ------: | --------------------- | -------------------- |
| 100.0% |     142 | `isMatchStrictGroups` | `Composer\Pcre\Preg` |

##### `enforceNonNullMatches` (`Composer\Pcre\Preg`)

|      % | Samples | Caller              | Location             |
| -----: | ------: | ------------------- | -------------------- |
| 100.0% |     139 | `matchStrictGroups` | `Composer\Pcre\Preg` |

##### `isMatchStrictGroups` (`Composer\Pcre\Preg`)

|     % | Samples | Caller          | Location                                       |
| ----: | ------: | --------------- | ---------------------------------------------- |
| 97.8% |     131 | `match`         | `Composer\ClassMapGenerator\PhpFileCleaner`    |
|  1.5% |       2 | `normalizePath` | `Composer\Util\Filesystem`                     |
|  0.7% |       1 | `normalizePath` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `match` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |      99 | `clean` | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `checkOffsetCapture` (`Composer\Pcre\Preg`)

|     % | Samples | Caller     | Location             |
| ----: | ------: | ---------- | -------------------- |
| 99.0% |      95 | `match`    | `Composer\Pcre\Preg` |
|  1.0% |       1 | `matchAll` | `Composer\Pcre\Preg` |

##### `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`)

|      % | Samples | Caller | Location                              |
| -----: | ------: | ------ | ------------------------------------- |
| 100.0% |      64 | `dump` | `Composer\Autoload\AutoloadGenerator` |

##### `__construct` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`)

|     % | Samples | Caller              | Location                                                       |
| ----: | ------: | ------------------- | -------------------------------------------------------------- |
| 94.5% |      52 | `getChildren`       | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  5.5% |       3 | `searchInDirectory` | `Symfony\Component\Finder\Finder`                              |

##### `hasChildren` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`)

|      % | Samples | Caller        | Location                                                           |
| -----: | ------: | ------------- | ------------------------------------------------------------------ |
| 100.0% |      44 | `hasChildren` | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |

##### `start` (`Symfony\Component\Process\Process`)

|      % | Samples | Caller | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |      36 | `run`  | `Symfony\Component\Process\Process` |

##### `normalizePath` (`Composer\Util\Filesystem`)

|     % | Samples | Caller                 | Location                              |
| ----: | ------: | ---------------------- | ------------------------------------- |
| 65.6% |      21 | `findShortestPath`     | `Composer\Util\Filesystem`            |
| 31.3% |      10 | `getPathCode`          | `Composer\Autoload\AutoloadGenerator` |
|  3.1% |       1 | `findShortestPathCode` | `Composer\Util\Filesystem`            |

##### `replaceCallback` (`Composer\Pcre\Preg`)

|     % | Samples | Caller          | Location                                       |
| ----: | ------: | --------------- | ---------------------------------------------- |
| 84.2% |      16 | `normalizePath` | `Composer\Util\Filesystem`                     |
| 10.5% |       2 | `normalizePath` | `Composer\ClassMapGenerator\ClassMapGenerator` |
|  5.3% |       1 | `expandPath`    | `Composer\Util\Platform`                       |

### Total samples

Functions with the most samples collected within the function and its callees.

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Ours

|     % | Samples | Function              | Location                                       |
| ----: | ------: | --------------------- | ---------------------------------------------- |
| 84.8% |   3,327 | `run`                 | `Symfony\Component\Console\Command\Command`    |
| 83.4% |   3,271 | `run`                 | `Symfony\Component\Console\Application`        |
| 83.2% |   3,265 | `run`                 | `Composer\Console\Application`                 |
| 79.0% |   3,099 | `doRun`               | `Composer\Console\Application`                 |
| 77.0% |   3,019 | `(anonymous)`         | `./profile.php`                                |
| 73.5% |   2,883 | `doRunCommand`        | `Symfony\Component\Console\Application`        |
| 73.2% |   2,869 | `doRun`               | `Symfony\Component\Console\Application`        |
| 71.5% |   2,805 | `dump`                | `Composer\Autoload\AutoloadGenerator`          |
| 71.5% |   2,805 | `execute`             | `Composer\Command\DumpAutoloadCommand`         |
| 67.8% |   2,660 | `scanPaths`           | `Composer\ClassMapGenerator\ClassMapGenerator` |
| 61.9% |   2,428 | `findClasses`         | `Composer\ClassMapGenerator\PhpFileParser`     |
| 41.7% |   1,635 | `clean`               | `Composer\ClassMapGenerator\PhpFileCleaner`    |
| 25.4% |     995 | `match`               | `Composer\ClassMapGenerator\PhpFileCleaner`    |
| 23.6% |     926 | `isMatchStrictGroups` | `Composer\Pcre\Preg`                           |
| 20.2% |     792 | `matchStrictGroups`   | `Composer\Pcre\Preg`                           |
| 17.1% |     670 | `createComposer`      | `Composer\Factory`                             |
| 17.0% |     667 | `create`              | `Composer\Factory`                             |
| 17.0% |     666 | `getComposer`         | `Composer\Console\Application`                 |
| 17.0% |     666 | `tryComposer`         | `Composer\Command\BaseCommand`                 |
| 16.6% |     653 | `initialize`          | `Composer\Command\BaseCommand`                 |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run` (`Symfony\Component\Console\Command\Command`)

|     % | Samples | Caller         | Location                                |
| ----: | ------: | -------------- | --------------------------------------- |
| 86.7% |   2,883 | `doRunCommand` | `Symfony\Component\Console\Application` |

##### `run` (`Symfony\Component\Console\Application`)

|     % | Samples | Caller | Location                       |
| ----: | ------: | ------ | ------------------------------ |
| 99.8% |   3,265 | `run`  | `Composer\Console\Application` |

##### `run` (`Composer\Console\Application`)

|     % | Samples | Caller        | Location        |
| ----: | ------: | ------------- | --------------- |
| 92.2% |   3,011 | `(anonymous)` | `./profile.php` |

##### `doRun` (`Composer\Console\Application`)

|     % | Samples | Caller | Location                                |
| ----: | ------: | ------ | --------------------------------------- |
| 99.9% |   3,097 | `run`  | `Symfony\Component\Console\Application` |

##### `doRunCommand` (`Symfony\Component\Console\Application`)

|     % | Samples | Caller  | Location                                |
| ----: | ------: | ------- | --------------------------------------- |
| 99.4% |   2,867 | `doRun` | `Symfony\Component\Console\Application` |

##### `doRun` (`Symfony\Component\Console\Application`)

|     % | Samples | Caller  | Location                       |
| ----: | ------: | ------- | ------------------------------ |
| 98.8% |   2,836 | `doRun` | `Composer\Console\Application` |

##### `dump` (`Composer\Autoload\AutoloadGenerator`)

|      % | Samples | Caller    | Location                               |
| -----: | ------: | --------- | -------------------------------------- |
| 100.0% |   2,805 | `execute` | `Composer\Command\DumpAutoloadCommand` |

##### `execute` (`Composer\Command\DumpAutoloadCommand`)

|      % | Samples | Caller | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |   2,805 | `run`  | `Symfony\Component\Console\Command\Command` |

##### `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`)

|      % | Samples | Caller | Location                              |
| -----: | ------: | ------ | ------------------------------------- |
| 100.0% |   2,660 | `dump` | `Composer\Autoload\AutoloadGenerator` |

##### `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`)

|      % | Samples | Caller      | Location                                       |
| -----: | ------: | ----------- | ---------------------------------------------- |
| 100.0% |   2,428 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `clean` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|      % | Samples | Caller        | Location                                   |
| -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% |   1,635 | `findClasses` | `Composer\ClassMapGenerator\PhpFileParser` |

##### `match` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|     % | Samples | Caller        | Location                                    |
| ----: | ------: | ------------- | ------------------------------------------- |
| 99.9% |     994 | `clean`       | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  0.1% |       1 | `skipHeredoc` | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `isMatchStrictGroups` (`Composer\Pcre\Preg`)

|     % | Samples | Caller          | Location                                       |
| ----: | ------: | --------------- | ---------------------------------------------- |
| 96.8% |     896 | `match`         | `Composer\ClassMapGenerator\PhpFileCleaner`    |
|  2.2% |      20 | `normalizePath` | `Composer\Util\Filesystem`                     |
|  1.1% |      10 | `normalizePath` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `matchStrictGroups` (`Composer\Pcre\Preg`)

|      % | Samples | Caller                | Location             |
| -----: | ------: | --------------------- | -------------------- |
| 100.0% |     792 | `isMatchStrictGroups` | `Composer\Pcre\Preg` |

##### `createComposer` (`Composer\Factory`)

|     % | Samples | Caller   | Location           |
| ----: | ------: | -------- | ------------------ |
| 99.6% |     667 | `create` | `Composer\Factory` |

##### `create` (`Composer\Factory`)

|     % | Samples | Caller        | Location                       |
| ----: | ------: | ------------- | ------------------------------ |
| 99.9% |     666 | `getComposer` | `Composer\Console\Application` |

##### `getComposer` (`Composer\Console\Application`)

|      % | Samples | Caller        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     666 | `tryComposer` | `Composer\Command\BaseCommand` |

##### `tryComposer` (`Composer\Command\BaseCommand`)

|     % | Samples | Caller       | Location                       |
| ----: | ------: | ------------ | ------------------------------ |
| 98.0% |     653 | `initialize` | `Composer\Command\BaseCommand` |

##### `initialize` (`Composer\Command\BaseCommand`)

|     % | Samples | Caller | Location                                    |
| ----: | ------: | ------ | ------------------------------------------- |
| 79.9% |     522 | `run`  | `Symfony\Component\Console\Command\Command` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run` (`Symfony\Component\Console\Command\Command`)

|     % | Samples | Callee       | Location                               |
| ----: | ------: | ------------ | -------------------------------------- |
| 84.3% |   2,805 | `execute`    | `Composer\Command\DumpAutoloadCommand` |
| 15.7% |     522 | `initialize` | `Composer\Command\BaseCommand`         |

##### `run` (`Symfony\Component\Console\Application`)

|     % | Samples | Callee      | Location                             |
| ----: | ------: | ----------- | ------------------------------------ |
| 94.7% |   3,097 | `doRun`     | `Composer\Console\Application`       |
|  5.2% |     169 | `getHeight` | `Symfony\Component\Console\Terminal` |
|  0.2% |       5 | `getWidth`  | `Symfony\Component\Console\Terminal` |

##### `run` (`Composer\Console\Application`)

|      % | Samples | Callee | Location                                |
| -----: | ------: | ------ | --------------------------------------- |
| 100.0% |   3,265 | `run`  | `Symfony\Component\Console\Application` |

##### `doRun` (`Composer\Console\Application`)

|     % | Samples | Callee      | Location                                |
| ----: | ------: | ----------- | --------------------------------------- |
| 91.5% |   2,836 | `doRun`     | `Symfony\Component\Console\Application` |
|  7.8% |     243 | `call`      | `Composer\Util\Silencer`                |
|  0.5% |      17 | `find`      | `Symfony\Component\Console\Application` |
|  0.1% |       2 | `loadClass` | `Composer\Autoload\ClassLoader`         |

##### `(anonymous)` (`./profile.php`)

|     % | Samples | Callee        | Location                        |
| ----: | ------: | ------------- | ------------------------------- |
| 99.7% |   3,011 | `run`         | `Composer\Console\Application`  |
|  0.1% |       3 | `loadClass`   | `Composer\Autoload\ClassLoader` |
|  0.1% |       3 | `__construct` | `Composer\Console\Application`  |
|  0.1% |       2 | `(anonymous)` | `./composer/src/bootstrap.php`  |

##### `doRunCommand` (`Symfony\Component\Console\Application`)

|      % | Samples | Callee | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |   2,883 | `run`  | `Symfony\Component\Console\Command\Command` |

##### `doRun` (`Symfony\Component\Console\Application`)

|     % | Samples | Callee          | Location                                |
| ----: | ------: | --------------- | --------------------------------------- |
| 99.9% |   2,867 | `doRunCommand`  | `Symfony\Component\Console\Application` |
| <0.1% |       1 | `find`          | `Symfony\Component\Console\Application` |
| <0.1% |       1 | `getDefinition` | `Symfony\Component\Console\Application` |

##### `dump` (`Composer\Autoload\AutoloadGenerator`)

|     % | Samples | Callee                      | Location                                       |
| ----: | ------: | --------------------------- | ---------------------------------------------- |
| 94.8% |   2,660 | `scanPaths`                 | `Composer\ClassMapGenerator\ClassMapGenerator` |
|  4.0% |     113 | `getPathCode`               | `Composer\Autoload\AutoloadGenerator`          |
|  0.7% |      20 | `getStaticFile`             | `Composer\Autoload\AutoloadGenerator`          |
|  0.2% |       5 | `filePutContentsIfModified` | `Composer\Util\Filesystem`                     |
| <0.1% |       1 | `sort`                      | `Composer\ClassMapGenerator\ClassMap`          |

##### `execute` (`Composer\Command\DumpAutoloadCommand`)

|      % | Samples | Callee | Location                              |
| -----: | ------: | ------ | ------------------------------------- |
| 100.0% |   2,805 | `dump` | `Composer\Autoload\AutoloadGenerator` |

##### `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`)

|     % | Samples | Callee          | Location                                                           |
| ----: | ------: | --------------- | ------------------------------------------------------------------ |
| 91.3% |   2,428 | `findClasses`   | `Composer\ClassMapGenerator\PhpFileParser`                         |
|  2.1% |      55 | `getChildren`   | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |
|  1.7% |      45 | `hasChildren`   | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |
|  0.8% |      21 | `normalizePath` | `Composer\ClassMapGenerator\ClassMapGenerator`                     |
|  0.5% |      14 | `next`          | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`     |

##### `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`)

|     % | Samples | Callee                 | Location                                    |
| ----: | ------: | ---------------------- | ------------------------------------------- |
| 67.3% |   1,635 | `clean`                | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  5.0% |     121 | `matchAllStrictGroups` | `Composer\Pcre\Preg`                        |
|  1.7% |      42 | `matchAll`             | `Composer\Pcre\Preg`                        |

##### `clean` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|     % | Samples | Callee        | Location                                    |
| ----: | ------: | ------------- | ------------------------------------------- |
| 60.8% |     994 | `match`       | `Composer\ClassMapGenerator\PhpFileCleaner` |
| 12.0% |     197 | `skipString`  | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  0.7% |      11 | `skipHeredoc` | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  0.3% |       5 | `isMatch`     | `Composer\Pcre\Preg`                        |
|  0.2% |       4 | `skipToPhp`   | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `match` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|     % | Samples | Callee                | Location             |
| ----: | ------: | --------------------- | -------------------- |
| 90.1% |     896 | `isMatchStrictGroups` | `Composer\Pcre\Preg` |

##### `isMatchStrictGroups` (`Composer\Pcre\Preg`)

|     % | Samples | Callee              | Location             |
| ----: | ------: | ------------------- | -------------------- |
| 85.5% |     792 | `matchStrictGroups` | `Composer\Pcre\Preg` |

##### `matchStrictGroups` (`Composer\Pcre\Preg`)

|     % | Samples | Callee                  | Location             |
| ----: | ------: | ----------------------- | -------------------- |
| 64.5% |     511 | `match`                 | `Composer\Pcre\Preg` |
| 17.6% |     139 | `enforceNonNullMatches` | `Composer\Pcre\Preg` |

##### `createComposer` (`Composer\Factory`)

|     % | Samples | Callee                 | Location                                    |
| ----: | ------: | ---------------------- | ------------------------------------------- |
| 94.5% |     633 | `load`                 | `Composer\Package\Loader\RootPackageLoader` |
|  2.4% |      16 | `validateSchema`       | `Composer\Json\JsonFile`                    |
|  1.0% |       7 | `createHttpDownloader` | `Composer\Factory`                          |
|  0.4% |       3 | `loadClass`            | `Composer\Autoload\ClassLoader`             |
|  0.3% |       2 | `createConfig`         | `Composer\Factory`                          |

##### `create` (`Composer\Factory`)

|      % | Samples | Callee           | Location           |
| -----: | ------: | ---------------- | ------------------ |
| 100.0% |     667 | `createComposer` | `Composer\Factory` |

##### `getComposer` (`Composer\Console\Application`)

|      % | Samples | Callee   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |     666 | `create` | `Composer\Factory` |

##### `tryComposer` (`Composer\Command\BaseCommand`)

|      % | Samples | Callee        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     666 | `getComposer` | `Composer\Console\Application` |

##### `initialize` (`Composer\Command\BaseCommand`)

|      % | Samples | Callee        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     653 | `tryComposer` | `Composer\Command\BaseCommand` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `run` (`Symfony\Component\Console\Application`) ← `run` (`Composer\Console\Application`) ← `(anonymous)` (`./profile.php`)

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16.1% |     630 | `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                                                                                                                       |
| 10.8% |     423 | `clean` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                                                               |
|  6.5% |     256 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessGitVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← truncated                                                                                  |
|  5.9% |     232 | `call` (`Composer\Util\Silencer`) ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  5.1% |     201 | `pregMatch` (`Composer\Pcre\Preg`) ← `match` ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`) ← `run` (`Symfony\Component\Console\Application`) ← `run` (`Composer\Console\Application`) ← truncated |
|  5.0% |     196 | `skipString` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                                                |
|  4.3% |     169 | `readFromProcess` (`Symfony\Component\Console\Terminal`) ← `getSttyColumns` ← `initDimensionsUsingStty` ← `initDimensions` ← `getHeight`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  3.5% |     138 | `enforceNonNullMatches` (`Composer\Pcre\Preg`) ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                      |
|  3.4% |     135 | `match` (`Composer\Pcre\Preg`) ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                      |
|  3.4% |     134 | `matchStrictGroups` (`Composer\Pcre\Preg`) ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                |
|  3.3% |     131 | `isMatchStrictGroups` (`Composer\Pcre\Preg`) ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                      |
|  3.2% |     125 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `versionFromGitTags` (`Composer\Package\Version\VersionGuesser`) ← `guessGitVersion` ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← truncated                                                                                                                 |
|  2.9% |     115 | `matchAll` (`Composer\Pcre\Preg`) ← `matchAllStrictGroups` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                                                          |
|  2.5% |      99 | `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                                                     |
|  2.4% |      93 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessFossilVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← truncated                                                                               |
|  2.3% |      91 | `checkOffsetCapture` (`Composer\Pcre\Preg`) ← `match` ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                               |
|  1.7% |      65 | `pregMatch` (`Composer\Pcre\Preg`) ← `match` ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                        |
|  1.6% |      64 | `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                                                                                                                                                                                    |
|  1.3% |      51 | `__construct` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`) ← `getChildren` ← `getChildren` (`Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`) ← `run` (`Symfony\Component\Console\Application`) ← `run` (`Composer\Console\Application`) ← truncated                                       |
|  1.3% |      50 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessHgVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← truncated                                                                                   |

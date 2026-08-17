# Sampling profile diff

Collected 3,922 samples → 3,698 samples (-224 samples, -5.7%).

| Category    | Change | Delta |     % |       Samples |
| ----------- | -----: | ----: | ----: | ------------: |
| Ours        |  -5.8% |  -225 | 99.6% | 3,907 → 3,682 |
| Third-party |  +6.7% |    +1 |  0.4% |       15 → 16 |

Paths starting with `./` or `../` are relative to `/private/tmp/profiler-md-php-workload/`.

Call stacks missing their outermost callers account for 23.0% → 22.5% of the samples collected.

`truncated` stands for missing outermost callers.

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function              | Location                                                           |
| ------: | ----: | ------------: | --------: | --------------------- | ------------------------------------------------------------------ |
|   +5.1% |   +32 | 16.1% → 17.9% | 630 → 662 | `findClasses`         | `Composer\ClassMapGenerator\PhpFileParser`                         |
|  +17.2% |   +23 |   3.4% → 4.2% | 134 → 157 | `isMatchStrictGroups` | `Composer\Pcre\Preg`                                               |
|  +12.7% |   +20 |   4.0% → 4.8% | 157 → 177 | `matchAll`            | `Composer\Pcre\Preg`                                               |
|  +34.4% |   +11 |   0.8% → 1.2% |   32 → 43 | `normalizePath`       | `Composer\Util\Filesystem`                                         |
| +183.3% |   +11 |   0.2% → 0.5% |    6 → 17 | `getPathCode`         | `Composer\Autoload\AutoloadGenerator`                              |
|     new |   +10 |   0.0% → 0.3% |    0 → 10 | `(anonymous)`         | `./composer/src/Composer/Console/Application.php:349`              |
|   +6.1% |    +9 |   3.8% → 4.2% | 148 → 157 | `match`               | `Composer\Pcre\Preg`                                               |
| +100.0% |    +9 |   0.2% → 0.5% |    9 → 18 | `normalizePath`       | `Composer\ClassMapGenerator\ClassMapGenerator`                     |
|   +0.9% |    +4 | 10.8% → 11.5% | 423 → 427 | `clean`               | `Composer\ClassMapGenerator\PhpFileCleaner`                        |
| +200.0% |    +4 |   0.1% → 0.2% |     2 → 6 | `accept`              | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |
|  +57.1% |    +4 |   0.2% → 0.3% |    7 → 11 | `(anonymous)`         | `./vendor/composer/autoload_classmap.php`                          |
|   +2.1% |    +3 |   3.6% → 3.9% | 142 → 145 | `matchStrictGroups`   | `Composer\Pcre\Preg`                                               |
| +300.0% |    +3 |  <0.1% → 0.1% |     1 → 4 | `__construct`         | `Symfony\Component\Finder\SplFileInfo`                             |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `filesAreEqual`       | `Composer\Util\Filesystem`                                         |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `getCwd`              | `Composer\Util\Platform`                                           |
| +200.0% |    +2 |  <0.1% → 0.1% |     1 → 3 | `createComposer`      | `Composer\Factory`                                                 |
| +100.0% |    +2 |          0.1% |     2 → 4 | `expandRefs`          | `JsonSchema\SchemaStorage`                                         |
|  +22.2% |    +2 |   0.2% → 0.3% |    9 → 11 | `skipToNewline`       | `Composer\ClassMapGenerator\PhpFileCleaner`                        |
| +100.0% |    +2 |          0.1% |     2 → 4 | `current`             | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`     |
|   +6.3% |    +1 |   0.4% → 0.5% |   16 → 17 | `loadClass`           | `Composer\Autoload\ClassLoader`                                    |

##### Ours

|  Change | Delta |             % |   Samples | Function              | Location                                                           |
| ------: | ----: | ------------: | --------: | --------------------- | ------------------------------------------------------------------ |
|   +5.1% |   +32 | 16.1% → 17.9% | 630 → 662 | `findClasses`         | `Composer\ClassMapGenerator\PhpFileParser`                         |
|  +17.2% |   +23 |   3.4% → 4.2% | 134 → 157 | `isMatchStrictGroups` | `Composer\Pcre\Preg`                                               |
|  +12.7% |   +20 |   4.0% → 4.8% | 157 → 177 | `matchAll`            | `Composer\Pcre\Preg`                                               |
|  +34.4% |   +11 |   0.8% → 1.2% |   32 → 43 | `normalizePath`       | `Composer\Util\Filesystem`                                         |
| +183.3% |   +11 |   0.2% → 0.5% |    6 → 17 | `getPathCode`         | `Composer\Autoload\AutoloadGenerator`                              |
|     new |   +10 |   0.0% → 0.3% |    0 → 10 | `(anonymous)`         | `./composer/src/Composer/Console/Application.php:349`              |
|   +6.1% |    +9 |   3.8% → 4.2% | 148 → 157 | `match`               | `Composer\Pcre\Preg`                                               |
| +100.0% |    +9 |   0.2% → 0.5% |    9 → 18 | `normalizePath`       | `Composer\ClassMapGenerator\ClassMapGenerator`                     |
|   +0.9% |    +4 | 10.8% → 11.5% | 423 → 427 | `clean`               | `Composer\ClassMapGenerator\PhpFileCleaner`                        |
| +200.0% |    +4 |   0.1% → 0.2% |     2 → 6 | `accept`              | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |
|   +2.1% |    +3 |   3.6% → 3.9% | 142 → 145 | `matchStrictGroups`   | `Composer\Pcre\Preg`                                               |
| +300.0% |    +3 |  <0.1% → 0.1% |     1 → 4 | `__construct`         | `Symfony\Component\Finder\SplFileInfo`                             |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `filesAreEqual`       | `Composer\Util\Filesystem`                                         |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `getCwd`              | `Composer\Util\Platform`                                           |
| +200.0% |    +2 |  <0.1% → 0.1% |     1 → 3 | `createComposer`      | `Composer\Factory`                                                 |
| +100.0% |    +2 |          0.1% |     2 → 4 | `expandRefs`          | `JsonSchema\SchemaStorage`                                         |
|  +22.2% |    +2 |   0.2% → 0.3% |    9 → 11 | `skipToNewline`       | `Composer\ClassMapGenerator\PhpFileCleaner`                        |
| +100.0% |    +2 |          0.1% |     2 → 4 | `current`             | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`     |
|   +6.3% |    +1 |   0.4% → 0.5% |   16 → 17 | `loadClass`           | `Composer\Autoload\ClassLoader`                                    |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `(anonymous)`         | `./composer/src/Composer/Command/InitCommand.php`                  |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function               | Location                                                       |
| ------: | ----: | ------------: | --------: | ---------------------- | -------------------------------------------------------------- |
|  -92.5% |  -161 |   4.4% → 0.4% |  174 → 13 | `readFromProcess`      | `Symfony\Component\Console\Terminal`                           |
|  -14.6% |   -34 |   5.9% → 5.4% | 233 → 199 | `call`                 | `Composer\Util\Silencer`                                       |
|   -9.8% |   -28 |   7.3% → 7.0% | 287 → 259 | `pregMatch`            | `Composer\Pcre\Preg`                                           |
|   -3.5% |   -20 | 14.7% → 15.0% | 576 → 556 | `readAndWrite`         | `Symfony\Component\Process\Pipes\UnixPipes`                    |
|   -9.7% |   -19 |   5.0% → 4.8% | 196 → 177 | `skipString`           | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  -50.0% |   -18 |   0.9% → 0.5% |   36 → 18 | `start`                | `Symfony\Component\Process\Process`                            |
|  -23.6% |   -13 |   1.4% → 1.1% |   55 → 42 | `__construct`          | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  -68.4% |   -13 |   0.5% → 0.2% |    19 → 6 | `replaceCallback`      | `Composer\Pcre\Preg`                                           |
| removed |   -10 |   0.3% → 0.0% |    10 → 0 | `(anonymous)`          | `./composer/src/Composer/Console/Application.php:353`          |
|  -57.1% |    -8 |   0.4% → 0.2% |    14 → 6 | `next`                 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|   -7.1% |    -7 |          2.5% |   99 → 92 | `match`                | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  -75.0% |    -6 |   0.2% → 0.1% |     8 → 2 | `replace`              | `Composer\Pcre\Preg`                                           |
|   -7.8% |    -5 |          1.6% |   64 → 59 | `scanPaths`            | `Composer\ClassMapGenerator\ClassMapGenerator`                 |
|   -9.1% |    -4 |          1.1% |   44 → 40 | `hasChildren`          | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  -22.2% |    -4 |   0.5% → 0.4% |   18 → 14 | `findShortestPath`     | `Composer\Util\Filesystem`                                     |
|  -80.0% |    -4 |  0.1% → <0.1% |     5 → 1 | `getDefaultEnv`        | `Symfony\Component\Process\Process`                            |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `wait`                 | `Symfony\Component\Process\Process`                            |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `matchAllStrictGroups` | `Composer\Pcre\Preg`                                           |
|   -3.1% |    -3 |   2.4% → 2.5% |   96 → 93 | `checkOffsetCapture`   | `Composer\Pcre\Preg`                                           |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `(anonymous)`          | `./composer/vendor/autoload.php`                               |

##### Ours

|  Change | Delta |             % |   Samples | Function               | Location                                                       |
| ------: | ----: | ------------: | --------: | ---------------------- | -------------------------------------------------------------- |
|  -92.5% |  -161 |   4.4% → 0.4% |  174 → 13 | `readFromProcess`      | `Symfony\Component\Console\Terminal`                           |
|  -14.6% |   -34 |   5.9% → 5.4% | 233 → 199 | `call`                 | `Composer\Util\Silencer`                                       |
|   -9.8% |   -28 |   7.3% → 7.0% | 287 → 259 | `pregMatch`            | `Composer\Pcre\Preg`                                           |
|   -3.5% |   -20 | 14.7% → 15.0% | 576 → 556 | `readAndWrite`         | `Symfony\Component\Process\Pipes\UnixPipes`                    |
|   -9.7% |   -19 |   5.0% → 4.8% | 196 → 177 | `skipString`           | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  -50.0% |   -18 |   0.9% → 0.5% |   36 → 18 | `start`                | `Symfony\Component\Process\Process`                            |
|  -23.6% |   -13 |   1.4% → 1.1% |   55 → 42 | `__construct`          | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  -68.4% |   -13 |   0.5% → 0.2% |    19 → 6 | `replaceCallback`      | `Composer\Pcre\Preg`                                           |
| removed |   -10 |   0.3% → 0.0% |    10 → 0 | `(anonymous)`          | `./composer/src/Composer/Console/Application.php:353`          |
|  -57.1% |    -8 |   0.4% → 0.2% |    14 → 6 | `next`                 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|   -7.1% |    -7 |          2.5% |   99 → 92 | `match`                | `Composer\ClassMapGenerator\PhpFileCleaner`                    |
|  -75.0% |    -6 |   0.2% → 0.1% |     8 → 2 | `replace`              | `Composer\Pcre\Preg`                                           |
|   -7.8% |    -5 |          1.6% |   64 → 59 | `scanPaths`            | `Composer\ClassMapGenerator\ClassMapGenerator`                 |
|   -9.1% |    -4 |          1.1% |   44 → 40 | `hasChildren`          | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  -22.2% |    -4 |   0.5% → 0.4% |   18 → 14 | `findShortestPath`     | `Composer\Util\Filesystem`                                     |
|  -80.0% |    -4 |  0.1% → <0.1% |     5 → 1 | `getDefaultEnv`        | `Symfony\Component\Process\Process`                            |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `wait`                 | `Symfony\Component\Process\Process`                            |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `matchAllStrictGroups` | `Composer\Pcre\Preg`                                           |
|   -3.1% |    -3 |   2.4% → 2.5% |   96 → 93 | `checkOffsetCapture`   | `Composer\Pcre\Preg`                                           |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `getListeners`         | `Composer\EventDispatcher\EventDispatcher`                     |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`)

| Change | Delta |      % |   Samples | Caller      | Location                                       |
| -----: | ----: | -----: | --------: | ----------- | ---------------------------------------------- |
|  +5.1% |   +32 | 100.0% | 630 → 662 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `isMatchStrictGroups` (`Composer\Pcre\Preg`)

|  Change | Delta |             % |   Samples | Caller          | Location                                       |
| ------: | ----: | ------------: | --------: | --------------- | ---------------------------------------------- |
|  +17.6% |   +23 | 97.8% → 98.1% | 131 → 154 | `match`         | `Composer\ClassMapGenerator\PhpFileCleaner`    |
|  -50.0% |    -1 |   1.5% → 0.6% |     2 → 1 | `normalizePath` | `Composer\Util\Filesystem`                     |
| +100.0% |    +1 |   0.7% → 1.3% |     1 → 2 | `normalizePath` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `matchAll` (`Composer\Pcre\Preg`)

| Change | Delta |             % |   Samples | Caller                 | Location                                   |
| -----: | ----: | ------------: | --------: | ---------------------- | ------------------------------------------ |
| +11.3% |   +13 | 73.2% → 72.3% | 115 → 128 | `matchAllStrictGroups` | `Composer\Pcre\Preg`                       |
| +16.7% |    +7 | 26.8% → 27.7% |   42 → 49 | `findClasses`          | `Composer\ClassMapGenerator\PhpFileParser` |

##### `normalizePath` (`Composer\Util\Filesystem`)

|  Change | Delta |             % | Samples | Caller                 | Location                              |
| ------: | ----: | ------------: | ------: | ---------------------- | ------------------------------------- |
| +110.0% |   +11 | 31.3% → 48.8% | 10 → 21 | `getPathCode`          | `Composer\Autoload\AutoloadGenerator` |
|   -9.5% |    -2 | 65.6% → 44.2% | 21 → 19 | `findShortestPath`     | `Composer\Util\Filesystem`            |
| +200.0% |    +2 |   3.1% → 7.0% |   1 → 3 | `findShortestPathCode` | `Composer\Util\Filesystem`            |

##### `getPathCode` (`Composer\Autoload\AutoloadGenerator`)

|  Change | Delta |      % | Samples | Caller | Location                              |
| ------: | ----: | -----: | ------: | ------ | ------------------------------------- |
| +183.3% |   +11 | 100.0% |  6 → 17 | `dump` | `Composer\Autoload\AutoloadGenerator` |

##### `(anonymous)` (`./composer/src/Composer/Console/Application.php:349`)

| Change | Delta |             % | Samples | Caller | Location                 |
| -----: | ----: | ------------: | ------: | ------ | ------------------------ |
|    new |   +10 | 0.0% → 100.0% |  0 → 10 | `call` | `Composer\Util\Silencer` |

##### `match` (`Composer\Pcre\Preg`)

| Change | Delta |             % |   Samples | Caller              | Location             |
| -----: | ----: | ------------: | --------: | ------------------- | -------------------- |
|  +7.9% |   +11 | 94.6% → 96.2% | 140 → 151 | `matchStrictGroups` | `Composer\Pcre\Preg` |
| -25.0% |    -2 |   5.4% → 3.8% |     8 → 6 | `isMatch`           | `Composer\Pcre\Preg` |

##### `normalizePath` (`Composer\ClassMapGenerator\ClassMapGenerator`)

|  Change | Delta |      % | Samples | Caller      | Location                                       |
| ------: | ----: | -----: | ------: | ----------- | ---------------------------------------------- |
| +100.0% |    +9 | 100.0% |  9 → 18 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `clean` (`Composer\ClassMapGenerator\PhpFileCleaner`)

| Change | Delta |      % |   Samples | Caller        | Location                                   |
| -----: | ----: | -----: | --------: | ------------- | ------------------------------------------ |
|  +0.9% |    +4 | 100.0% | 423 → 427 | `findClasses` | `Composer\ClassMapGenerator\PhpFileParser` |

##### `accept` (`Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator`)

|  Change | Delta |      % | Samples | Caller      | Location                                       |
| ------: | ----: | -----: | ------: | ----------- | ---------------------------------------------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `(anonymous)` (`./vendor/composer/autoload_classmap.php`)

| Change | Delta |      % | Samples | Caller          | Location                              |
| -----: | ----: | -----: | ------: | --------------- | ------------------------------------- |
| +57.1% |    +4 | 100.0% |  7 → 11 | `getStaticFile` | `Composer\Autoload\AutoloadGenerator` |

##### `matchStrictGroups` (`Composer\Pcre\Preg`)

| Change | Delta |      % |   Samples | Caller                | Location             |
| -----: | ----: | -----: | --------: | --------------------- | -------------------- |
|  +2.1% |    +3 | 100.0% | 142 → 145 | `isMatchStrictGroups` | `Composer\Pcre\Preg` |

##### `__construct` (`Symfony\Component\Finder\SplFileInfo`)

|  Change | Delta |      % | Samples | Caller    | Location                                                       |
| ------: | ----: | -----: | ------: | --------- | -------------------------------------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `current` | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |

##### `filesAreEqual` (`Composer\Util\Filesystem`)

| Change | Delta |             % | Samples | Caller     | Location                   |
| -----: | ----: | ------------: | ------: | ---------- | -------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `safeCopy` | `Composer\Util\Filesystem` |

##### `getCwd` (`Composer\Util\Platform`)

| Change | Delta |            % | Samples | Caller           | Location                       |
| -----: | ----: | -----------: | ------: | ---------------- | ------------------------------ |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `doRun`          | `Composer\Console\Application` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `createComposer` | `Composer\Factory`             |

##### `createComposer` (`Composer\Factory`)

|  Change | Delta |      % | Samples | Caller   | Location           |
| ------: | ----: | -----: | ------: | -------- | ------------------ |
| +200.0% |    +2 | 100.0% |   1 → 3 | `create` | `Composer\Factory` |

##### `expandRefs` (`JsonSchema\SchemaStorage`)

|  Change | Delta |      % | Samples | Caller       | Location                   |
| ------: | ----: | -----: | ------: | ------------ | -------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `expandRefs` | `JsonSchema\SchemaStorage` |

##### `skipToNewline` (`Composer\ClassMapGenerator\PhpFileCleaner`)

| Change | Delta |      % | Samples | Caller        | Location                                    |
| -----: | ----: | -----: | ------: | ------------- | ------------------------------------------- |
| +22.2% |    +2 | 100.0% |  9 → 11 | `skipHeredoc` | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `current` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`)

|  Change | Delta |      % | Samples | Caller      | Location                                       |
| ------: | ----: | -----: | ------: | ----------- | ---------------------------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `loadClass` (`Composer\Autoload\ClassLoader`)

|  Change | Delta |             % | Samples | Caller               | Location                                             |
| ------: | ----: | ------------: | ------: | -------------------- | ---------------------------------------------------- |
|  +50.0% |    +1 | 12.5% → 17.6% |   2 → 3 | `doRun`              | `Composer\Console\Application`                       |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `(anonymous)`        | `./composer/src/Composer/Command/AboutCommand.php`   |
|  +50.0% |    +1 | 12.5% → 17.6% |   2 → 3 | `getDefaultCommands` | `Composer\Console\Application`                       |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `(anonymous)`        | `./composer/src/Composer/Command/DependsCommand.php` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `(anonymous)`        | `./composer/src/Composer/Command/InitCommand.php`    |

##### `(anonymous)` (`./composer/src/Composer/Command/InitCommand.php`)

| Change | Delta |             % | Samples | Caller        | Location                                         |
| -----: | ----: | ------------: | ------: | ------------- | ------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `readFromProcess` (`Symfony\Component\Console\Terminal`)

| Change | Delta |      % |  Samples | Caller           | Location                             |
| -----: | ----: | -----: | -------: | ---------------- | ------------------------------------ |
| -92.5% |  -161 | 100.0% | 174 → 13 | `getSttyColumns` | `Symfony\Component\Console\Terminal` |

##### `call` (`Composer\Util\Silencer`)

|  Change | Delta |             % |   Samples | Caller                      | Location                       |
| ------: | ----: | ------------: | --------: | --------------------------- | ------------------------------ |
|  -16.4% |   -38 | 99.6% → 97.5% | 232 → 194 | `doRun`                     | `Composer\Console\Application` |
| +400.0% |    +4 |   0.4% → 2.5% |     1 → 5 | `filePutContentsIfModified` | `Composer\Util\Filesystem`     |

##### `pregMatch` (`Composer\Pcre\Preg`)

| Change | Delta |      % |   Samples | Caller  | Location             |
| -----: | ----: | -----: | --------: | ------- | -------------------- |
|  -9.8% |   -28 | 100.0% | 287 → 259 | `match` | `Composer\Pcre\Preg` |

##### `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`)

| Change | Delta |      % |   Samples | Caller      | Location                            |
| -----: | ----: | -----: | --------: | ----------- | ----------------------------------- |
|  -3.5% |   -20 | 100.0% | 576 → 556 | `readPipes` | `Symfony\Component\Process\Process` |

##### `skipString` (`Composer\ClassMapGenerator\PhpFileCleaner`)

| Change | Delta |      % |   Samples | Caller  | Location                                    |
| -----: | ----: | -----: | --------: | ------- | ------------------------------------------- |
|  -9.7% |   -19 | 100.0% | 196 → 177 | `clean` | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `start` (`Symfony\Component\Process\Process`)

| Change | Delta |      % | Samples | Caller | Location                            |
| -----: | ----: | -----: | ------: | ------ | ----------------------------------- |
| -50.0% |   -18 | 100.0% | 36 → 18 | `run`  | `Symfony\Component\Process\Process` |

##### `__construct` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`)

| Change | Delta |             % | Samples | Caller              | Location                                                       |
| -----: | ----: | ------------: | ------: | ------------------- | -------------------------------------------------------------- |
| -21.2% |   -11 | 94.5% → 97.6% | 52 → 41 | `getChildren`       | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
| -66.7% |    -2 |   5.5% → 2.4% |   3 → 1 | `searchInDirectory` | `Symfony\Component\Finder\Finder`                              |

##### `replaceCallback` (`Composer\Pcre\Preg`)

|  Change | Delta |             % | Samples | Caller          | Location                   |
| ------: | ----: | ------------: | ------: | --------------- | -------------------------- |
|  -75.0% |   -12 | 84.2% → 66.7% |  16 → 4 | `normalizePath` | `Composer\Util\Filesystem` |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `expandPath`    | `Composer\Util\Platform`   |

##### `(anonymous)` (`./composer/src/Composer/Console/Application.php:353`)

|  Change | Delta |             % | Samples | Caller | Location                 |
| ------: | ----: | ------------: | ------: | ------ | ------------------------ |
| removed |   -10 | 100.0% → 0.0% |  10 → 0 | `call` | `Composer\Util\Silencer` |

##### `next` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`)

| Change | Delta |      % | Samples | Caller      | Location                                       |
| -----: | ----: | -----: | ------: | ----------- | ---------------------------------------------- |
| -57.1% |    -8 | 100.0% |  14 → 6 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `match` (`Composer\ClassMapGenerator\PhpFileCleaner`)

| Change | Delta |              % | Samples | Caller        | Location                                    |
| -----: | ----: | -------------: | ------: | ------------- | ------------------------------------------- |
|  -8.1% |    -8 | 100.0% → 98.9% | 99 → 91 | `clean`       | `Composer\ClassMapGenerator\PhpFileCleaner` |
|    new |    +1 |    0.0% → 1.1% |   0 → 1 | `skipHeredoc` | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `replace` (`Composer\Pcre\Preg`)

| Change | Delta |      % | Samples | Caller          | Location                              |
| -----: | ----: | -----: | ------: | --------------- | ------------------------------------- |
| -75.0% |    -6 | 100.0% |   8 → 2 | `getStaticFile` | `Composer\Autoload\AutoloadGenerator` |

##### `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`)

| Change | Delta |      % | Samples | Caller | Location                              |
| -----: | ----: | -----: | ------: | ------ | ------------------------------------- |
|  -7.8% |    -5 | 100.0% | 64 → 59 | `dump` | `Composer\Autoload\AutoloadGenerator` |

##### `hasChildren` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`)

| Change | Delta |      % | Samples | Caller        | Location                                                           |
| -----: | ----: | -----: | ------: | ------------- | ------------------------------------------------------------------ |
|  -9.1% |    -4 | 100.0% | 44 → 40 | `hasChildren` | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |

##### `findShortestPath` (`Composer\Util\Filesystem`)

| Change | Delta |      % | Samples | Caller        | Location                              |
| -----: | ----: | -----: | ------: | ------------- | ------------------------------------- |
| -22.2% |    -4 | 100.0% | 18 → 14 | `getPathCode` | `Composer\Autoload\AutoloadGenerator` |

##### `getDefaultEnv` (`Symfony\Component\Process\Process`)

| Change | Delta |      % | Samples | Caller  | Location                            |
| -----: | ----: | -----: | ------: | ------- | ----------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `start` | `Symfony\Component\Process\Process` |

##### `wait` (`Symfony\Component\Process\Process`)

|  Change | Delta |             % | Samples | Caller | Location                            |
| ------: | ----: | ------------: | ------: | ------ | ----------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `run`  | `Symfony\Component\Process\Process` |

##### `matchAllStrictGroups` (`Composer\Pcre\Preg`)

|  Change | Delta |             % | Samples | Caller        | Location                                   |
| ------: | ----: | ------------: | ------: | ------------- | ------------------------------------------ |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `findClasses` | `Composer\ClassMapGenerator\PhpFileParser` |

##### `checkOffsetCapture` (`Composer\Pcre\Preg`)

| Change | Delta |             % | Samples | Caller  | Location             |
| -----: | ----: | ------------: | ------: | ------- | -------------------- |
|  -3.2% |    -3 | 99.0% → 98.9% | 95 → 92 | `match` | `Composer\Pcre\Preg` |

##### `(anonymous)` (`./composer/vendor/autoload.php`)

|  Change | Delta |             % | Samples | Caller            | Location    |
| ------: | ----: | ------------: | ------: | ----------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `includeIfExists` | `<unknown>` |

##### `getListeners` (`Composer\EventDispatcher\EventDispatcher`)

|  Change | Delta |             % | Samples | Caller       | Location                                   |
| ------: | ----: | ------------: | ------: | ------------ | ------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `doDispatch` | `Composer\EventDispatcher\EventDispatcher` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |       Samples | Function                    | Location                                                           |
| ------: | ----: | ------------: | ------------: | --------------------------- | ------------------------------------------------------------------ |
|   +1.4% |   +34 | 61.9% → 66.6% | 2,428 → 2,462 | `findClasses`               | `Composer\ClassMapGenerator\PhpFileParser`                         |
|   +0.9% |   +25 | 71.5% → 76.5% | 2,805 → 2,830 | `execute`                   | `Composer\Command\DumpAutoloadCommand`                             |
|   +0.8% |   +23 | 71.5% → 76.5% | 2,805 → 2,828 | `dump`                      | `Composer\Autoload\AutoloadGenerator`                              |
|  +13.2% |   +21 |   4.1% → 4.9% |     159 → 180 | `matchAll`                  | `Composer\Pcre\Preg`                                               |
|   +0.7% |   +19 | 67.8% → 72.4% | 2,660 → 2,679 | `scanPaths`                 | `Composer\ClassMapGenerator\ClassMapGenerator`                     |
|  +71.4% |   +15 |   0.5% → 1.0% |       21 → 36 | `normalizePath`             | `Composer\ClassMapGenerator\ClassMapGenerator`                     |
|     new |   +10 |   0.0% → 0.3% |        0 → 10 | `(anonymous)`               | `./composer/src/Composer/Console/Application.php:349`              |
|   +8.3% |   +10 |   3.1% → 3.5% |     121 → 131 | `matchAllStrictGroups`      | `Composer\Pcre\Preg`                                               |
|   +0.3% |    +9 | 73.2% → 77.8% | 2,869 → 2,878 | `doRun`                     | `Symfony\Component\Console\Application`                            |
|   +0.9% |    +8 | 23.6% → 25.3% |     926 → 934 | `isMatchStrictGroups`       | `Composer\Pcre\Preg`                                               |
| +166.7% |    +5 |   0.1% → 0.2% |         3 → 8 | `current`                   | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`     |
|  +36.4% |    +4 |   0.3% → 0.4% |       11 → 15 | `skipHeredoc`               | `Composer\ClassMapGenerator\PhpFileCleaner`                        |
| +200.0% |    +4 |   0.1% → 0.2% |         2 → 6 | `accept`                    | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |
|  +57.1% |    +4 |   0.2% → 0.3% |        7 → 11 | `(anonymous)`               | `./vendor/composer/autoload_classmap.php`                          |
|  +50.0% |    +3 |          0.2% |         6 → 9 | `suppress`                  | `Composer\Util\Silencer`                                           |
|  +60.0% |    +3 |   0.1% → 0.2% |         5 → 8 | `filePutContentsIfModified` | `Composer\Util\Filesystem`                                         |
| +300.0% |    +3 |  <0.1% → 0.1% |         1 → 4 | `__construct`               | `Symfony\Component\Finder\SplFileInfo`                             |
|     new |    +3 |   0.0% → 0.1% |         0 → 3 | `filesAreEqual`             | `Composer\Util\Filesystem`                                         |
|     new |    +3 |   0.0% → 0.1% |         0 → 3 | `getCwd`                    | `Composer\Util\Platform`                                           |
|  +50.0% |    +2 |   0.1% → 0.2% |         4 → 6 | `handle`                    | `Composer\Util\ErrorHandler`                                       |

##### Ours

|  Change | Delta |             % |       Samples | Function                    | Location                                                           |
| ------: | ----: | ------------: | ------------: | --------------------------- | ------------------------------------------------------------------ |
|   +1.4% |   +34 | 61.9% → 66.6% | 2,428 → 2,462 | `findClasses`               | `Composer\ClassMapGenerator\PhpFileParser`                         |
|   +0.9% |   +25 | 71.5% → 76.5% | 2,805 → 2,830 | `execute`                   | `Composer\Command\DumpAutoloadCommand`                             |
|   +0.8% |   +23 | 71.5% → 76.5% | 2,805 → 2,828 | `dump`                      | `Composer\Autoload\AutoloadGenerator`                              |
|  +13.2% |   +21 |   4.1% → 4.9% |     159 → 180 | `matchAll`                  | `Composer\Pcre\Preg`                                               |
|   +0.7% |   +19 | 67.8% → 72.4% | 2,660 → 2,679 | `scanPaths`                 | `Composer\ClassMapGenerator\ClassMapGenerator`                     |
|  +71.4% |   +15 |   0.5% → 1.0% |       21 → 36 | `normalizePath`             | `Composer\ClassMapGenerator\ClassMapGenerator`                     |
|     new |   +10 |   0.0% → 0.3% |        0 → 10 | `(anonymous)`               | `./composer/src/Composer/Console/Application.php:349`              |
|   +8.3% |   +10 |   3.1% → 3.5% |     121 → 131 | `matchAllStrictGroups`      | `Composer\Pcre\Preg`                                               |
|   +0.3% |    +9 | 73.2% → 77.8% | 2,869 → 2,878 | `doRun`                     | `Symfony\Component\Console\Application`                            |
|   +0.9% |    +8 | 23.6% → 25.3% |     926 → 934 | `isMatchStrictGroups`       | `Composer\Pcre\Preg`                                               |
| +166.7% |    +5 |   0.1% → 0.2% |         3 → 8 | `current`                   | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`     |
|  +36.4% |    +4 |   0.3% → 0.4% |       11 → 15 | `skipHeredoc`               | `Composer\ClassMapGenerator\PhpFileCleaner`                        |
| +200.0% |    +4 |   0.1% → 0.2% |         2 → 6 | `accept`                    | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |
|  +50.0% |    +3 |          0.2% |         6 → 9 | `suppress`                  | `Composer\Util\Silencer`                                           |
|  +60.0% |    +3 |   0.1% → 0.2% |         5 → 8 | `filePutContentsIfModified` | `Composer\Util\Filesystem`                                         |
| +300.0% |    +3 |  <0.1% → 0.1% |         1 → 4 | `__construct`               | `Symfony\Component\Finder\SplFileInfo`                             |
|     new |    +3 |   0.0% → 0.1% |         0 → 3 | `filesAreEqual`             | `Composer\Util\Filesystem`                                         |
|     new |    +3 |   0.0% → 0.1% |         0 → 3 | `getCwd`                    | `Composer\Util\Platform`                                           |
|  +50.0% |    +2 |   0.1% → 0.2% |         4 → 6 | `handle`                    | `Composer\Util\ErrorHandler`                                       |
| +100.0% |    +2 |          0.1% |         2 → 4 | `createConfig`              | `Composer\Factory`                                                 |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

##### Ours

| Change | Delta |             % |       Samples | Function                  | Location                                    |
| -----: | ----: | ------------: | ------------: | ------------------------- | ------------------------------------------- |
|  -5.4% |  -177 | 83.4% → 83.7% | 3,271 → 3,094 | `run`                     | `Symfony\Component\Console\Application`     |
|  -5.4% |  -177 | 83.2% → 83.5% | 3,265 → 3,088 | `run`                     | `Composer\Console\Application`              |
| -95.9% |  -162 |   4.3% → 0.2% |       169 → 7 | `getHeight`               | `Symfony\Component\Console\Terminal`        |
| -92.5% |  -161 |   4.4% → 0.4% |      174 → 13 | `readFromProcess`         | `Symfony\Component\Console\Terminal`        |
| -92.5% |  -161 |   4.4% → 0.4% |      174 → 13 | `getSttyColumns`          | `Symfony\Component\Console\Terminal`        |
| -92.5% |  -161 |   4.4% → 0.4% |      174 → 13 | `initDimensionsUsingStty` | `Symfony\Component\Console\Terminal`        |
| -92.5% |  -161 |   4.4% → 0.4% |      174 → 13 | `initDimensions`          | `Symfony\Component\Console\Terminal`        |
|  -5.1% |  -154 | 77.0% → 77.5% | 3,019 → 2,865 | `(anonymous)`             | `./profile.php`                             |
|  -7.6% |   -51 | 17.1% → 16.7% |     670 → 619 | `createComposer`          | `Composer\Factory`                          |
|  -7.7% |   -51 | 17.0% → 16.6% |     666 → 615 | `tryComposer`             | `Composer\Command\BaseCommand`              |
|  -7.5% |   -49 | 16.6% → 16.3% |     653 → 604 | `initialize`              | `Composer\Command\BaseCommand`              |
|  -7.2% |   -48 | 17.0% → 16.7% |     667 → 619 | `create`                  | `Composer\Factory`                          |
|  -7.6% |   -48 | 16.1% → 15.8% |     633 → 585 | `load`                    | `Composer\Package\Loader\RootPackageLoader` |
|  -7.1% |   -47 | 17.0% → 16.7% |     666 → 619 | `getComposer`             | `Composer\Console\Application`              |
|  -7.5% |   -47 | 16.0% → 15.7% |     628 → 581 | `guessVersion`            | `Composer\Package\Version\VersionGuesser`   |
|  -7.3% |   -46 | 16.0% → 15.7% |     627 → 581 | `runProcess`              | `Composer\Util\ProcessExecutor`             |
|  -7.3% |   -46 | 16.0% → 15.7% |     627 → 581 | `doExecute`               | `Composer\Util\ProcessExecutor`             |
|  -7.3% |   -46 | 16.0% → 15.7% |     627 → 581 | `execute`                 | `Composer\Util\ProcessExecutor`             |
|  -7.4% |   -46 | 15.9% → 15.6% |     624 → 578 | `run`                     | `Symfony\Component\Process\Process`         |
| -12.4% |   -31 |   6.3% → 5.9% |     249 → 218 | `call`                    | `Composer\Util\Silencer`                    |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`)

| Change | Delta |      % |       Samples | Caller      | Location                                       |
| -----: | ----: | -----: | ------------: | ----------- | ---------------------------------------------- |
|  +1.4% |   +34 | 100.0% | 2,428 → 2,462 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `execute` (`Composer\Command\DumpAutoloadCommand`)

| Change | Delta |      % |       Samples | Caller | Location                                    |
| -----: | ----: | -----: | ------------: | ------ | ------------------------------------------- |
|  +0.9% |   +25 | 100.0% | 2,805 → 2,830 | `run`  | `Symfony\Component\Console\Command\Command` |

##### `dump` (`Composer\Autoload\AutoloadGenerator`)

| Change | Delta |      % |       Samples | Caller    | Location                               |
| -----: | ----: | -----: | ------------: | --------- | -------------------------------------- |
|  +0.8% |   +23 | 100.0% | 2,805 → 2,828 | `execute` | `Composer\Command\DumpAutoloadCommand` |

##### `matchAll` (`Composer\Pcre\Preg`)

| Change | Delta |             % |   Samples | Caller                 | Location                                   |
| -----: | ----: | ------------: | --------: | ---------------------- | ------------------------------------------ |
| +11.1% |   +13 | 73.6% → 72.2% | 117 → 130 | `matchAllStrictGroups` | `Composer\Pcre\Preg`                       |
| +19.0% |    +8 | 26.4% → 27.8% |   42 → 50 | `findClasses`          | `Composer\ClassMapGenerator\PhpFileParser` |

##### `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`)

| Change | Delta |      % |       Samples | Caller | Location                              |
| -----: | ----: | -----: | ------------: | ------ | ------------------------------------- |
|  +0.7% |   +19 | 100.0% | 2,660 → 2,679 | `dump` | `Composer\Autoload\AutoloadGenerator` |

##### `normalizePath` (`Composer\ClassMapGenerator\ClassMapGenerator`)

| Change | Delta |      % | Samples | Caller      | Location                                       |
| -----: | ----: | -----: | ------: | ----------- | ---------------------------------------------- |
| +71.4% |   +15 | 100.0% | 21 → 36 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `(anonymous)` (`./composer/src/Composer/Console/Application.php:349`)

| Change | Delta |             % | Samples | Caller | Location                 |
| -----: | ----: | ------------: | ------: | ------ | ------------------------ |
|    new |   +10 | 0.0% → 100.0% |  0 → 10 | `call` | `Composer\Util\Silencer` |

##### `matchAllStrictGroups` (`Composer\Pcre\Preg`)

| Change | Delta |      % |   Samples | Caller        | Location                                   |
| -----: | ----: | -----: | --------: | ------------- | ------------------------------------------ |
|  +8.3% |   +10 | 100.0% | 121 → 131 | `findClasses` | `Composer\ClassMapGenerator\PhpFileParser` |

##### `doRun` (`Symfony\Component\Console\Application`)

| Change | Delta |             % |       Samples | Caller  | Location                       |
| -----: | ----: | ------------: | ------------: | ------- | ------------------------------ |
|  +0.8% |   +24 | 98.8% → 99.4% | 2,836 → 2,860 | `doRun` | `Composer\Console\Application` |

##### `isMatchStrictGroups` (`Composer\Pcre\Preg`)

| Change | Delta |             % |   Samples | Caller          | Location                                       |
| -----: | ----: | ------------: | --------: | --------------- | ---------------------------------------------- |
|  +0.7% |    +6 | 96.8% → 96.6% | 896 → 902 | `match`         | `Composer\ClassMapGenerator\PhpFileCleaner`    |
| +60.0% |    +6 |   1.1% → 1.7% |   10 → 16 | `normalizePath` | `Composer\ClassMapGenerator\ClassMapGenerator` |
| -20.0% |    -4 |   2.2% → 1.7% |   20 → 16 | `normalizePath` | `Composer\Util\Filesystem`                     |

##### `current` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`)

|  Change | Delta |      % | Samples | Caller      | Location                                       |
| ------: | ----: | -----: | ------: | ----------- | ---------------------------------------------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `skipHeredoc` (`Composer\ClassMapGenerator\PhpFileCleaner`)

| Change | Delta |      % | Samples | Caller  | Location                                    |
| -----: | ----: | -----: | ------: | ------- | ------------------------------------------- |
| +36.4% |    +4 | 100.0% | 11 → 15 | `clean` | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `accept` (`Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator`)

|  Change | Delta |      % | Samples | Caller      | Location                                       |
| ------: | ----: | -----: | ------: | ----------- | ---------------------------------------------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `(anonymous)` (`./vendor/composer/autoload_classmap.php`)

| Change | Delta |      % | Samples | Caller          | Location                              |
| -----: | ----: | -----: | ------: | --------------- | ------------------------------------- |
| +57.1% |    +4 | 100.0% |  7 → 11 | `getStaticFile` | `Composer\Autoload\AutoloadGenerator` |

##### `suppress` (`Composer\Util\Silencer`)

| Change | Delta |      % | Samples | Caller | Location                 |
| -----: | ----: | -----: | ------: | ------ | ------------------------ |
| +50.0% |    +3 | 100.0% |   6 → 9 | `call` | `Composer\Util\Silencer` |

##### `filePutContentsIfModified` (`Composer\Util\Filesystem`)

| Change | Delta |      % | Samples | Caller | Location                              |
| -----: | ----: | -----: | ------: | ------ | ------------------------------------- |
| +60.0% |    +3 | 100.0% |   5 → 8 | `dump` | `Composer\Autoload\AutoloadGenerator` |

##### `__construct` (`Symfony\Component\Finder\SplFileInfo`)

|  Change | Delta |      % | Samples | Caller    | Location                                                       |
| ------: | ----: | -----: | ------: | --------- | -------------------------------------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `current` | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |

##### `filesAreEqual` (`Composer\Util\Filesystem`)

| Change | Delta |             % | Samples | Caller     | Location                   |
| -----: | ----: | ------------: | ------: | ---------- | -------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `safeCopy` | `Composer\Util\Filesystem` |

##### `getCwd` (`Composer\Util\Platform`)

| Change | Delta |            % | Samples | Caller           | Location                       |
| -----: | ----: | -----------: | ------: | ---------------- | ------------------------------ |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `doRun`          | `Composer\Console\Application` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `createComposer` | `Composer\Factory`             |

##### `handle` (`Composer\Util\ErrorHandler`)

| Change | Delta |      % | Samples | Caller     | Location                 |
| -----: | ----: | -----: | ------: | ---------- | ------------------------ |
| +50.0% |    +2 | 100.0% |   4 → 6 | `suppress` | `Composer\Util\Silencer` |

##### `createConfig` (`Composer\Factory`)

|  Change | Delta |      % | Samples | Caller           | Location           |
| ------: | ----: | -----: | ------: | ---------------- | ------------------ |
| +100.0% |    +2 | 100.0% |   2 → 4 | `createComposer` | `Composer\Factory` |

##### `run` (`Symfony\Component\Console\Application`)

| Change | Delta |     % |       Samples | Caller | Location                       |
| -----: | ----: | ----: | ------------: | ------ | ------------------------------ |
|  -5.4% |  -177 | 99.8% | 3,265 → 3,088 | `run`  | `Composer\Console\Application` |

##### `run` (`Composer\Console\Application`)

| Change | Delta |             % |       Samples | Caller        | Location        |
| -----: | ----: | ------------: | ------------: | ------------- | --------------- |
|  -5.1% |  -153 | 92.2% → 92.6% | 3,011 → 2,858 | `(anonymous)` | `./profile.php` |

##### `getHeight` (`Symfony\Component\Console\Terminal`)

| Change | Delta |      % | Samples | Caller | Location                                |
| -----: | ----: | -----: | ------: | ------ | --------------------------------------- |
| -95.9% |  -162 | 100.0% | 169 → 7 | `run`  | `Symfony\Component\Console\Application` |

##### `readFromProcess` (`Symfony\Component\Console\Terminal`)

| Change | Delta |      % |  Samples | Caller           | Location                             |
| -----: | ----: | -----: | -------: | ---------------- | ------------------------------------ |
| -92.5% |  -161 | 100.0% | 174 → 13 | `getSttyColumns` | `Symfony\Component\Console\Terminal` |

##### `getSttyColumns` (`Symfony\Component\Console\Terminal`)

| Change | Delta |      % |  Samples | Caller                    | Location                             |
| -----: | ----: | -----: | -------: | ------------------------- | ------------------------------------ |
| -92.5% |  -161 | 100.0% | 174 → 13 | `initDimensionsUsingStty` | `Symfony\Component\Console\Terminal` |

##### `initDimensionsUsingStty` (`Symfony\Component\Console\Terminal`)

| Change | Delta |      % |  Samples | Caller           | Location                             |
| -----: | ----: | -----: | -------: | ---------------- | ------------------------------------ |
| -92.5% |  -161 | 100.0% | 174 → 13 | `initDimensions` | `Symfony\Component\Console\Terminal` |

##### `initDimensions` (`Symfony\Component\Console\Terminal`)

| Change | Delta |             % | Samples | Caller      | Location                             |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------ |
| -95.9% |  -162 | 97.1% → 53.8% | 169 → 7 | `getHeight` | `Symfony\Component\Console\Terminal` |
| +20.0% |    +1 |  2.9% → 46.2% |   5 → 6 | `getWidth`  | `Symfony\Component\Console\Terminal` |

##### `createComposer` (`Composer\Factory`)

| Change | Delta |              % |   Samples | Caller   | Location           |
| -----: | ----: | -------------: | --------: | -------- | ------------------ |
|  -7.2% |   -48 | 99.6% → 100.0% | 667 → 619 | `create` | `Composer\Factory` |

##### `tryComposer` (`Composer\Command\BaseCommand`)

| Change | Delta |             % |   Samples | Caller       | Location                       |
| -----: | ----: | ------------: | --------: | ------------ | ------------------------------ |
|  -7.5% |   -49 | 98.0% → 98.2% | 653 → 604 | `initialize` | `Composer\Command\BaseCommand` |

##### `initialize` (`Composer\Command\BaseCommand`)

| Change | Delta |             % |   Samples | Caller | Location                                    |
| -----: | ----: | ------------: | --------: | ------ | ------------------------------------------- |
|  -7.9% |   -41 | 79.9% → 79.6% | 522 → 481 | `run`  | `Symfony\Component\Console\Command\Command` |

##### `create` (`Composer\Factory`)

| Change | Delta |              % |   Samples | Caller        | Location                       |
| -----: | ----: | -------------: | --------: | ------------- | ------------------------------ |
|  -7.1% |   -47 | 99.9% → 100.0% | 666 → 619 | `getComposer` | `Composer\Console\Application` |

##### `load` (`Composer\Package\Loader\RootPackageLoader`)

| Change | Delta |      % |   Samples | Caller           | Location           |
| -----: | ----: | -----: | --------: | ---------------- | ------------------ |
|  -7.6% |   -48 | 100.0% | 633 → 585 | `createComposer` | `Composer\Factory` |

##### `getComposer` (`Composer\Console\Application`)

| Change | Delta |              % |   Samples | Caller        | Location                       |
| -----: | ----: | -------------: | --------: | ------------- | ------------------------------ |
|  -7.7% |   -51 | 100.0% → 99.4% | 666 → 615 | `tryComposer` | `Composer\Command\BaseCommand` |

##### `guessVersion` (`Composer\Package\Version\VersionGuesser`)

| Change | Delta |      % |   Samples | Caller | Location                                    |
| -----: | ----: | -----: | --------: | ------ | ------------------------------------------- |
|  -7.5% |   -47 | 100.0% | 628 → 581 | `load` | `Composer\Package\Loader\RootPackageLoader` |

##### `runProcess` (`Composer\Util\ProcessExecutor`)

| Change | Delta |      % |   Samples | Caller      | Location                        |
| -----: | ----: | -----: | --------: | ----------- | ------------------------------- |
|  -7.3% |   -46 | 100.0% | 627 → 581 | `doExecute` | `Composer\Util\ProcessExecutor` |

##### `doExecute` (`Composer\Util\ProcessExecutor`)

| Change | Delta |      % |   Samples | Caller    | Location                        |
| -----: | ----: | -----: | --------: | --------- | ------------------------------- |
|  -7.3% |   -46 | 100.0% | 627 → 581 | `execute` | `Composer\Util\ProcessExecutor` |

##### `execute` (`Composer\Util\ProcessExecutor`)

| Change | Delta |             % |   Samples | Caller               | Location                                  |
| -----: | ----: | ------------: | --------: | -------------------- | ----------------------------------------- |
|  -5.5% |   -15 | 43.5% → 44.4% | 273 → 258 | `guessGitVersion`    | `Composer\Package\Version\VersionGuesser` |
|  -6.7% |    -9 | 21.4% → 21.5% | 134 → 125 | `versionFromGitTags` | `Composer\Package\Version\VersionGuesser` |
| -16.4% |    -9 |   8.8% → 7.9% |   55 → 46 | `guessSvnVersion`    | `Composer\Package\Version\VersionGuesser` |
| -14.3% |    -8 |   8.9% → 8.3% |   56 → 48 | `guessHgVersion`     | `Composer\Package\Version\VersionGuesser` |
|  -5.8% |    -6 | 16.4% → 16.7% |  103 → 97 | `guessFossilVersion` | `Composer\Package\Version\VersionGuesser` |

##### `run` (`Symfony\Component\Process\Process`)

| Change | Delta |      % |   Samples | Caller       | Location                        |
| -----: | ----: | -----: | --------: | ------------ | ------------------------------- |
|  -7.4% |   -46 | 100.0% | 624 → 578 | `runProcess` | `Composer\Util\ProcessExecutor` |

##### `call` (`Composer\Util\Silencer`)

|  Change | Delta |             % |   Samples | Caller                      | Location                       |
| ------: | ----: | ------------: | --------: | --------------------------- | ------------------------------ |
|  -15.2% |   -37 | 97.6% → 94.5% | 243 → 206 | `doRun`                     | `Composer\Console\Application` |
| +100.0% |    +4 |   1.6% → 3.7% |     4 → 8 | `filePutContentsIfModified` | `Composer\Util\Filesystem`     |
|     new |    +2 |   0.0% → 0.9% |     0 → 2 | `getHomeDir`                | `Composer\Factory`             |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`)

| Change | Delta |             % |       Samples | Callee                 | Location                                    |
| -----: | ----: | ------------: | ------------: | ---------------------- | ------------------------------------------- |
|  -1.0% |   -17 | 67.3% → 65.7% | 1,635 → 1,618 | `clean`                | `Composer\ClassMapGenerator\PhpFileCleaner` |
|  +8.3% |   +10 |   5.0% → 5.3% |     121 → 131 | `matchAllStrictGroups` | `Composer\Pcre\Preg`                        |
| +19.0% |    +8 |   1.7% → 2.0% |       42 → 50 | `matchAll`             | `Composer\Pcre\Preg`                        |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `getExtraTypes`        | `Composer\ClassMapGenerator\PhpFileParser`  |

##### `execute` (`Composer\Command\DumpAutoloadCommand`)

| Change | Delta |              % |       Samples | Callee  | Location                              |
| -----: | ----: | -------------: | ------------: | ------- | ------------------------------------- |
|  +0.8% |   +23 | 100.0% → 99.9% | 2,805 → 2,828 | `dump`  | `Composer\Autoload\AutoloadGenerator` |
|    new |    +1 |   0.0% → <0.1% |         0 → 1 | `write` | `Composer\IO\ConsoleIO`               |

##### `dump` (`Composer\Autoload\AutoloadGenerator`)

|  Change | Delta |             % |       Samples | Callee                      | Location                                       |
| ------: | ----: | ------------: | ------------: | --------------------------- | ---------------------------------------------- |
|   +0.7% |   +19 | 94.8% → 94.7% | 2,660 → 2,679 | `scanPaths`                 | `Composer\ClassMapGenerator\ClassMapGenerator` |
|  -20.0% |    -4 |   0.7% → 0.6% |       20 → 16 | `getStaticFile`             | `Composer\Autoload\AutoloadGenerator`          |
|  +60.0% |    +3 |   0.2% → 0.3% |         5 → 8 | `filePutContentsIfModified` | `Composer\Util\Filesystem`                     |
| +200.0% |    +2 |  <0.1% → 0.1% |         1 → 3 | `safeCopy`                  | `Composer\Util\Filesystem`                     |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `findShortestPathCode`      | `Composer\Util\Filesystem`                     |

##### `matchAll` (`Composer\Pcre\Preg`)

|  Change | Delta |           % | Samples | Callee          | Location             |
| ------: | ----: | ----------: | ------: | --------------- | -------------------- |
| +100.0% |    +1 | 0.6% → 1.1% |   1 → 2 | `checkSetOrder` | `Composer\Pcre\Preg` |

##### `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`)

|  Change | Delta |             % |       Samples | Callee          | Location                                                           |
| ------: | ----: | ------------: | ------------: | --------------- | ------------------------------------------------------------------ |
|   +1.4% |   +34 | 91.3% → 91.9% | 2,428 → 2,462 | `findClasses`   | `Composer\ClassMapGenerator\PhpFileParser`                         |
|  +71.4% |   +15 |   0.8% → 1.3% |       21 → 36 | `normalizePath` | `Composer\ClassMapGenerator\ClassMapGenerator`                     |
|  -21.8% |   -12 |   2.1% → 1.6% |       55 → 43 | `getChildren`   | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |
|  -57.1% |    -8 |   0.5% → 0.2% |        14 → 6 | `next`          | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`     |
| +166.7% |    +5 |   0.1% → 0.3% |         3 → 8 | `current`       | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`     |

##### `normalizePath` (`Composer\ClassMapGenerator\ClassMapGenerator`)

| Change | Delta |             % | Samples | Callee                | Location             |
| -----: | ----: | ------------: | ------: | --------------------- | -------------------- |
| +60.0% |    +6 | 47.6% → 44.4% | 10 → 16 | `isMatchStrictGroups` | `Composer\Pcre\Preg` |

##### `matchAllStrictGroups` (`Composer\Pcre\Preg`)

| Change | Delta |             % |   Samples | Callee     | Location             |
| -----: | ----: | ------------: | --------: | ---------- | -------------------- |
| +11.1% |   +13 | 96.7% → 99.2% | 117 → 130 | `matchAll` | `Composer\Pcre\Preg` |

##### `doRun` (`Symfony\Component\Console\Application`)

|  Change | Delta |            % |       Samples | Callee          | Location                                |
| ------: | ----: | -----------: | ------------: | --------------- | --------------------------------------- |
|   +0.3% |    +8 |        99.9% | 2,867 → 2,875 | `doRunCommand`  | `Symfony\Component\Console\Application` |
| +100.0% |    +1 | <0.1% → 0.1% |         1 → 2 | `getDefinition` | `Symfony\Component\Console\Application` |

##### `isMatchStrictGroups` (`Composer\Pcre\Preg`)

| Change | Delta |             % |   Samples | Callee              | Location             |
| -----: | ----: | ------------: | --------: | ------------------- | -------------------- |
|  -1.9% |   -15 | 85.5% → 83.2% | 792 → 777 | `matchStrictGroups` | `Composer\Pcre\Preg` |

##### `current` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`)

|  Change | Delta |             % | Samples | Callee        | Location                               |
| ------: | ----: | ------------: | ------: | ------------- | -------------------------------------- |
| +300.0% |    +3 | 33.3% → 50.0% |   1 → 4 | `__construct` | `Symfony\Component\Finder\SplFileInfo` |

##### `skipHeredoc` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|  Change | Delta |             % | Samples | Callee          | Location                                    |
| ------: | ----: | ------------: | ------: | --------------- | ------------------------------------------- |
|  +22.2% |    +2 | 81.8% → 73.3% |  9 → 11 | `skipToNewline` | `Composer\ClassMapGenerator\PhpFileCleaner` |
| +100.0% |    +1 |  9.1% → 13.3% |   1 → 2 | `match`         | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `suppress` (`Composer\Util\Silencer`)

| Change | Delta |     % | Samples | Callee   | Location                     |
| -----: | ----: | ----: | ------: | -------- | ---------------------------- |
| +50.0% |    +2 | 66.7% |   4 → 6 | `handle` | `Composer\Util\ErrorHandler` |

##### `filePutContentsIfModified` (`Composer\Util\Filesystem`)

|  Change | Delta |              % | Samples | Callee | Location                 |
| ------: | ----: | -------------: | ------: | ------ | ------------------------ |
| +100.0% |    +4 | 80.0% → 100.0% |   4 → 8 | `call` | `Composer\Util\Silencer` |

##### `handle` (`Composer\Util\ErrorHandler`)

| Change | Delta |     % | Samples | Callee       | Location                |
| -----: | ----: | ----: | ------: | ------------ | ----------------------- |
| +50.0% |    +1 | 50.0% |   2 → 3 | `writeError` | `Composer\IO\ConsoleIO` |

##### `createConfig` (`Composer\Factory`)

|  Change | Delta |            % | Samples | Callee        | Location           |
| ------: | ----: | -----------: | ------: | ------------- | ------------------ |
|     new |    +2 | 0.0% → 50.0% |   0 → 2 | `getHomeDir`  | `Composer\Factory` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `__construct` | `Composer\Config`  |

##### `run` (`Symfony\Component\Console\Application`)

| Change | Delta |             % |       Samples | Callee      | Location                             |
| -----: | ----: | ------------: | ------------: | ----------- | ------------------------------------ |
| -95.9% |  -162 |   5.2% → 0.2% |       169 → 7 | `getHeight` | `Symfony\Component\Console\Terminal` |
|  -0.5% |   -16 | 94.7% → 99.6% | 3,097 → 3,081 | `doRun`     | `Composer\Console\Application`       |
| +20.0% |    +1 |          0.2% |         5 → 6 | `getWidth`  | `Symfony\Component\Console\Terminal` |

##### `run` (`Composer\Console\Application`)

| Change | Delta |      % |       Samples | Callee | Location                                |
| -----: | ----: | -----: | ------------: | ------ | --------------------------------------- |
|  -5.4% |  -177 | 100.0% | 3,265 → 3,088 | `run`  | `Symfony\Component\Console\Application` |

##### `getHeight` (`Symfony\Component\Console\Terminal`)

| Change | Delta |      % | Samples | Callee           | Location                             |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------ |
| -95.9% |  -162 | 100.0% | 169 → 7 | `initDimensions` | `Symfony\Component\Console\Terminal` |

##### `getSttyColumns` (`Symfony\Component\Console\Terminal`)

| Change | Delta |      % |  Samples | Callee            | Location                             |
| -----: | ----: | -----: | -------: | ----------------- | ------------------------------------ |
| -92.5% |  -161 | 100.0% | 174 → 13 | `readFromProcess` | `Symfony\Component\Console\Terminal` |

##### `initDimensionsUsingStty` (`Symfony\Component\Console\Terminal`)

| Change | Delta |      % |  Samples | Callee           | Location                             |
| -----: | ----: | -----: | -------: | ---------------- | ------------------------------------ |
| -92.5% |  -161 | 100.0% | 174 → 13 | `getSttyColumns` | `Symfony\Component\Console\Terminal` |

##### `initDimensions` (`Symfony\Component\Console\Terminal`)

| Change | Delta |      % |  Samples | Callee                    | Location                             |
| -----: | ----: | -----: | -------: | ------------------------- | ------------------------------------ |
| -92.5% |  -161 | 100.0% | 174 → 13 | `initDimensionsUsingStty` | `Symfony\Component\Console\Terminal` |

##### `(anonymous)` (`./profile.php`)

| Change | Delta |             % |       Samples | Callee        | Location                        |
| -----: | ----: | ------------: | ------------: | ------------- | ------------------------------- |
|  -5.1% |  -153 | 99.7% → 99.8% | 3,011 → 2,858 | `run`         | `Composer\Console\Application`  |
| -66.7% |    -2 |  0.1% → <0.1% |         3 → 1 | `loadClass`   | `Composer\Autoload\ClassLoader` |
| +66.7% |    +2 |   0.1% → 0.2% |         3 → 5 | `__construct` | `Composer\Console\Application`  |
| -50.0% |    -1 |  0.1% → <0.1% |         2 → 1 | `(anonymous)` | `./composer/src/bootstrap.php`  |

##### `createComposer` (`Composer\Factory`)

|  Change | Delta |           % |   Samples | Callee           | Location                                    |
| ------: | ----: | ----------: | --------: | ---------------- | ------------------------------------------- |
|   -7.6% |   -48 |       94.5% | 633 → 585 | `load`           | `Composer\Package\Loader\RootPackageLoader` |
|  -18.8% |    -3 | 2.4% → 2.1% |   16 → 13 | `validateSchema` | `Composer\Json\JsonFile`                    |
| +100.0% |    +2 | 0.3% → 0.6% |     2 → 4 | `createConfig`   | `Composer\Factory`                          |
| removed |    -2 | 0.3% → 0.0% |     2 → 0 | `dispatch`       | `Composer\EventDispatcher\EventDispatcher`  |
|  -33.3% |    -1 | 0.4% → 0.3% |     3 → 2 | `loadClass`      | `Composer\Autoload\ClassLoader`             |

##### `tryComposer` (`Composer\Command\BaseCommand`)

| Change | Delta |      % |   Samples | Callee        | Location                       |
| -----: | ----: | -----: | --------: | ------------- | ------------------------------ |
|  -7.7% |   -51 | 100.0% | 666 → 615 | `getComposer` | `Composer\Console\Application` |

##### `initialize` (`Composer\Command\BaseCommand`)

| Change | Delta |      % |   Samples | Callee        | Location                       |
| -----: | ----: | -----: | --------: | ------------- | ------------------------------ |
|  -7.5% |   -49 | 100.0% | 653 → 604 | `tryComposer` | `Composer\Command\BaseCommand` |

##### `create` (`Composer\Factory`)

| Change | Delta |      % |   Samples | Callee           | Location           |
| -----: | ----: | -----: | --------: | ---------------- | ------------------ |
|  -7.2% |   -48 | 100.0% | 667 → 619 | `createComposer` | `Composer\Factory` |

##### `load` (`Composer\Package\Loader\RootPackageLoader`)

| Change | Delta |             % |   Samples | Callee         | Location                                  |
| -----: | ----: | ------------: | --------: | -------------- | ----------------------------------------- |
|  -7.5% |   -47 | 99.2% → 99.3% | 628 → 581 | `guessVersion` | `Composer\Package\Version\VersionGuesser` |
| -33.3% |    -1 |   0.5% → 0.3% |     3 → 2 | `load`         | `Composer\Package\Loader\ArrayLoader`     |

##### `getComposer` (`Composer\Console\Application`)

| Change | Delta |      % |   Samples | Callee   | Location           |
| -----: | ----: | -----: | --------: | -------- | ------------------ |
|  -7.1% |   -47 | 100.0% | 666 → 619 | `create` | `Composer\Factory` |

##### `guessVersion` (`Composer\Package\Version\VersionGuesser`)

| Change | Delta |             % |   Samples | Callee               | Location                                  |
| -----: | ----: | ------------: | --------: | -------------------- | ----------------------------------------- |
|  -5.8% |   -24 | 65.9% → 67.1% | 414 → 390 | `guessGitVersion`    | `Composer\Package\Version\VersionGuesser` |
| -16.4% |    -9 |   8.8% → 7.9% |   55 → 46 | `guessSvnVersion`    | `Composer\Package\Version\VersionGuesser` |
| -14.3% |    -8 |   8.9% → 8.3% |   56 → 48 | `guessHgVersion`     | `Composer\Package\Version\VersionGuesser` |
|  -5.8% |    -6 | 16.4% → 16.7% |  103 → 97 | `guessFossilVersion` | `Composer\Package\Version\VersionGuesser` |

##### `runProcess` (`Composer\Util\ProcessExecutor`)

|  Change | Delta |           % |   Samples | Callee        | Location                            |
| ------: | ----: | ----------: | --------: | ------------- | ----------------------------------- |
|   -7.4% |   -46 |       99.5% | 624 → 578 | `run`         | `Symfony\Component\Process\Process` |
| removed |    -1 | 0.2% → 0.0% |     1 → 0 | `__construct` | `Symfony\Component\Process\Process` |
|     new |    +1 | 0.0% → 0.2% |     0 → 1 | `loadClass`   | `Composer\Autoload\ClassLoader`     |

##### `doExecute` (`Composer\Util\ProcessExecutor`)

| Change | Delta |      % |   Samples | Callee       | Location                        |
| -----: | ----: | -----: | --------: | ------------ | ------------------------------- |
|  -7.3% |   -46 | 100.0% | 627 → 581 | `runProcess` | `Composer\Util\ProcessExecutor` |

##### `execute` (`Composer\Util\ProcessExecutor`)

| Change | Delta |      % |   Samples | Callee      | Location                        |
| -----: | ----: | -----: | --------: | ----------- | ------------------------------- |
|  -7.3% |   -46 | 100.0% | 627 → 581 | `doExecute` | `Composer\Util\ProcessExecutor` |

##### `run` (`Symfony\Component\Process\Process`)

| Change | Delta |             % |   Samples | Callee  | Location                            |
| -----: | ----: | ------------: | --------: | ------- | ----------------------------------- |
|  -4.0% |   -23 | 92.9% → 96.4% | 580 → 557 | `wait`  | `Symfony\Component\Process\Process` |
| -52.3% |   -23 |   7.1% → 3.6% |   44 → 21 | `start` | `Symfony\Component\Process\Process` |

##### `call` (`Composer\Util\Silencer`)

|  Change | Delta |           % | Samples | Callee        | Location                                              |
| ------: | ----: | ----------: | ------: | ------------- | ----------------------------------------------------- |
| removed |   -10 | 4.0% → 0.0% |  10 → 0 | `(anonymous)` | `./composer/src/Composer/Console/Application.php:353` |
|     new |   +10 | 0.0% → 4.6% |  0 → 10 | `(anonymous)` | `./composer/src/Composer/Console/Application.php:349` |
|  +50.0% |    +3 | 2.4% → 4.1% |   6 → 9 | `suppress`    | `Composer\Util\Silencer`                              |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

Common call stack: `doRun` (`Composer\Console\Application`) ← `run` (`Symfony\Component\Console\Application`) ← `run` (`Composer\Console\Application`) ← `(anonymous)` (`./profile.php`)

|  Change | Delta |             % |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   +5.1% |   +32 | 16.1% → 17.9% | 630 → 662 | `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                  |
|  +17.6% |   +23 |   3.3% → 4.2% | 131 → 154 | `isMatchStrictGroups` (`Composer\Pcre\Preg`) ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                 |
|  +11.3% |   +13 |   2.9% → 3.5% | 115 → 128 | `matchAll` (`Composer\Pcre\Preg`) ← `matchAllStrictGroups` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                     |
| +110.0% |   +11 |   0.3% → 0.6% |   10 → 21 | `normalizePath` (`Composer\Util\Filesystem`) ← `getPathCode` (`Composer\Autoload\AutoloadGenerator`) ← `dump` ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                               |
| +183.3% |   +11 |   0.2% → 0.5% |    6 → 17 | `getPathCode` (`Composer\Autoload\AutoloadGenerator`) ← `dump` ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                                                              |
|   +7.4% |   +10 |   3.4% → 3.9% | 135 → 145 | `match` (`Composer\Pcre\Preg`) ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` |
|     new |   +10 |   0.0% → 0.3% |    0 → 10 | `(anonymous)` (`./composer/src/Composer/Console/Application.php:349`) ← `call` (`Composer\Util\Silencer`)                                                                                                                                                                                                                                                                                                                                                                                                   |
| +100.0% |    +9 |   0.2% → 0.5% |    9 → 18 | `normalizePath` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `scanPaths` ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                             |
|  +16.7% |    +7 |   1.1% → 1.3% |   42 → 49 | `matchAll` (`Composer\Pcre\Preg`) ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                              |
|   +5.2% |    +7 |   3.4% → 3.8% | 134 → 141 | `matchStrictGroups` (`Composer\Pcre\Preg`) ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`           |
|     new |    +5 |   0.0% → 0.1% |     0 → 5 | `enforceNonNullMatches` (`Composer\Pcre\Preg`) ← `matchStrictGroups` ← `isMatchStrictGroups` ← `normalizePath` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `scanPaths` ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                              |
|   +0.9% |    +4 | 10.8% → 11.5% | 423 → 427 | `clean` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                          |
| +200.0% |    +4 |   0.1% → 0.2% |     2 → 6 | `accept` (`Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                               |
|  +57.1% |    +4 |   0.2% → 0.3% |    7 → 11 | `(anonymous)` (`./vendor/composer/autoload_classmap.php`) ← `getStaticFile` (`Composer\Autoload\AutoloadGenerator`) ← `dump` ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                |
| +400.0% |    +4 |  <0.1% → 0.1% |     1 → 5 | `call` (`Composer\Util\Silencer`) ← `filePutContentsIfModified` (`Composer\Util\Filesystem`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                               |
|     new |    +4 |   0.0% → 0.1% |     0 → 4 | `checkOffsetCapture` (`Composer\Pcre\Preg`) ← `match` ← `isMatch` ← `findShortestPath` (`Composer\Util\Filesystem`) ← `getPathCode` (`Composer\Autoload\AutoloadGenerator`) ← `dump` ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                        |
| +300.0% |    +3 |  <0.1% → 0.1% |     1 → 4 | `__construct` (`Symfony\Component\Finder\SplFileInfo`) ← `current` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                         |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `filesAreEqual` (`Composer\Util\Filesystem`) ← `safeCopy` ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                                                                                                  |
|  +22.2% |    +2 |   0.2% → 0.3% |    9 → 11 | `skipToNewline` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `skipHeredoc` ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                        |
| +100.0% |    +2 |          0.1% |     2 → 4 | `current` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun`                                                                                                                                  |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

Common call stack: `run` (`Symfony\Component\Console\Application`) ← `run` (`Composer\Console\Application`) ← `(anonymous)` (`./profile.php`)

|  Change | Delta |           % |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------: | ----: | ----------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -95.9% |  -162 | 4.3% → 0.2% |   169 → 7 | `readFromProcess` (`Symfony\Component\Console\Terminal`) ← `getSttyColumns` ← `initDimensionsUsingStty` ← `initDimensions` ← `getHeight`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -16.4% |   -38 | 5.9% → 5.2% | 232 → 194 | `call` (`Composer\Util\Silencer`) ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|   -9.7% |   -19 | 5.0% → 4.8% | 196 → 177 | `skipString` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                                                |
|   -6.5% |   -13 |        5.1% | 201 → 188 | `pregMatch` (`Composer\Pcre\Preg`) ← `match` ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`) ← `run` (`Symfony\Component\Console\Application`) ← `run` (`Composer\Console\Application`) ← truncated |
|  -21.6% |   -11 | 1.3% → 1.1% |   51 → 40 | `__construct` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`) ← `getChildren` ← `getChildren` (`Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`) ← `run` (`Symfony\Component\Console\Application`) ← `run` (`Composer\Console\Application`) ← truncated                                       |
|  -83.3% |   -10 | 0.3% → 0.1% |    12 → 2 | `replaceCallback` (`Composer\Pcre\Preg`) ← `normalizePath` (`Composer\Util\Filesystem`) ← `findShortestPath` ← `getPathCode` (`Composer\Autoload\AutoloadGenerator`) ← `dump` ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                                                                                                                    |
| removed |   -10 | 0.3% → 0.0% |    10 → 0 | `(anonymous)` (`./composer/src/Composer/Console/Application.php:353`) ← `call` (`Composer\Util\Silencer`) ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -13.8% |    -9 | 1.7% → 1.5% |   65 → 56 | `pregMatch` (`Composer\Pcre\Preg`) ← `match` ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                        |
|   -8.1% |    -8 |        2.5% |   99 → 91 | `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                                                     |
|  -57.1% |    -8 | 0.4% → 0.2% |    14 → 6 | `next` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                                                                                                          |
|   -2.7% |    -7 | 6.5% → 6.7% | 256 → 249 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessGitVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← truncated                                                                                  |
|   -7.7% |    -7 |        2.3% |   91 → 84 | `checkOffsetCapture` (`Composer\Pcre\Preg`) ← `match` ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                               |
|  -75.0% |    -6 | 0.2% → 0.1% |     8 → 2 | `start` (`Symfony\Component\Process\Process`) ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `versionFromGitTags` (`Composer\Package\Version\VersionGuesser`) ← `guessGitVersion` ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← truncated                                                                            |
|  -75.0% |    -6 | 0.2% → 0.1% |     8 → 2 | `replace` (`Composer\Pcre\Preg`) ← `getStaticFile` (`Composer\Autoload\AutoloadGenerator`) ← `dump` ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                                                                                                                                                                                              |
|  -50.0% |    -5 | 0.3% → 0.1% |    10 → 5 | `start` (`Symfony\Component\Process\Process`) ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessGitVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← truncated                                                                                         |
|   -3.6% |    -5 | 3.5% → 3.6% | 138 → 133 | `enforceNonNullMatches` (`Composer\Pcre\Preg`) ← `matchStrictGroups` ← `isMatchStrictGroups` ← `match` (`Composer\ClassMapGenerator\PhpFileCleaner`) ← `clean` ← `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                      |
|   -7.8% |    -5 |        1.6% |   64 → 59 | `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                                                                                                                                                                                                    |
| removed |    -4 | 0.1% → 0.0% |     4 → 0 | `start` (`Symfony\Component\Process\Process`) ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessHgVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← truncated                                                                                          |
|   -4.3% |    -4 |        2.4% |   93 → 89 | `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`) ← `readPipes` (`Symfony\Component\Process\Process`) ← `wait` ← `run` ← `runProcess` (`Composer\Util\ProcessExecutor`) ← `doExecute` ← `execute` ← `guessFossilVersion` (`Composer\Package\Version\VersionGuesser`) ← `guessVersion` ← `load` (`Composer\Package\Loader\RootPackageLoader`) ← `createComposer` (`Composer\Factory`) ← `create` ← `getComposer` (`Composer\Console\Application`) ← `tryComposer` (`Composer\Command\BaseCommand`) ← `initialize` ← `run` (`Symfony\Component\Console\Command\Command`) ← truncated                                                                               |
|   -9.1% |    -4 |        1.1% |   44 → 40 | `hasChildren` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`) ← `hasChildren` (`Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator`) ← `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`) ← `dump` (`Composer\Autoload\AutoloadGenerator`) ← `execute` (`Composer\Command\DumpAutoloadCommand`) ← `run` (`Symfony\Component\Console\Command\Command`) ← `doRunCommand` (`Symfony\Component\Console\Application`) ← `doRun` ← `doRun` (`Composer\Console\Application`)                                                                                                                                                              |

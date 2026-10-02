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
|     new |   +15 |   0.0% → 0.4% |    0 → 15 | `(anonymous)`        | `composer/src/Composer/Console/Application.php:349`            |
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

##### Ours

|  Change | Delta |             % |   Samples | Function             | Location                                                       |
| ------: | ----: | ------------: | --------: | -------------------- | -------------------------------------------------------------- |
|  +51.9% |   +28 |   1.3% → 2.1% |   54 → 82 | `__construct`        | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
|  +14.1% |   +21 |   3.6% → 4.3% | 149 → 170 | `match`              | `Composer\Pcre\Preg`                                           |
|  +22.6% |   +19 |   2.0% → 2.6% |  84 → 103 | `checkOffsetCapture` | `Composer\Pcre\Preg`                                           |
|     new |   +15 |   0.0% → 0.4% |    0 → 15 | `(anonymous)`        | `composer/src/Composer/Console/Application.php:349`            |
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
| removed |   -14 |   0.3% → 0.0% |    14 → 0 | `(anonymous)`           | `composer/src/Composer/Console/Application.php:353`            |
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

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__construct` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`)

| Change | Delta |             % | Samples | Caller              | Location                                                       |
| -----: | ----: | ------------: | ------: | ------------------- | -------------------------------------------------------------- |
| +51.0% |   +26 | 94.4% → 93.9% | 51 → 77 | `getChildren`       | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |
| +66.7% |    +2 |   5.6% → 6.1% |   3 → 5 | `searchInDirectory` | `Symfony\Component\Finder\Finder`                              |

##### `match` (`Composer\Pcre\Preg`)

| Change | Delta |             % |   Samples | Caller              | Location             |
| -----: | ----: | ------------: | --------: | ------------------- | -------------------- |
| +14.5% |   +21 | 97.3% → 97.6% | 145 → 166 | `matchStrictGroups` | `Composer\Pcre\Preg` |

##### `checkOffsetCapture` (`Composer\Pcre\Preg`)

|  Change | Delta |              % |  Samples | Caller     | Location             |
| ------: | ----: | -------------: | -------: | ---------- | -------------------- |
|  +33.8% |   +26 | 91.7% → 100.0% | 77 → 103 | `match`    | `Composer\Pcre\Preg` |
| removed |    -7 |    8.3% → 0.0% |    7 → 0 | `matchAll` | `Composer\Pcre\Preg` |

##### `(anonymous)` (`composer/src/Composer/Console/Application.php:349`)

| Change | Delta |             % | Samples | Caller | Location                 |
| -----: | ----: | ------------: | ------: | ------ | ------------------------ |
|    new |   +15 | 0.0% → 100.0% |  0 → 15 | `call` | `Composer\Util\Silencer` |

##### `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`)

| Change | Delta |      % |   Samples | Caller      | Location                                       |
| -----: | ----: | -----: | --------: | ----------- | ---------------------------------------------- |
|  +1.8% |   +12 | 100.0% | 659 → 671 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `match` (`Composer\ClassMapGenerator\PhpFileCleaner`)

| Change | Delta |      % |   Samples | Caller  | Location                                    |
| -----: | ----: | -----: | --------: | ------- | ------------------------------------------- |
|  +8.4% |    +9 | 100.0% | 107 → 116 | `clean` | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `loadClass` (`Composer\Autoload\ClassLoader`)

|  Change | Delta |             % | Samples | Caller               | Location                                            |
| ------: | ----: | ------------: | ------: | -------------------- | --------------------------------------------------- |
|     new |    +2 |  0.0% → 10.5% |   0 → 2 | `createInstanceFor`  | `JsonSchema\Constraints\Factory`                    |
| +100.0% |    +2 | 14.3% → 21.1% |   2 → 4 | `createComposer`     | `Composer\Factory`                                  |
| removed |    -1 |   7.1% → 0.0% |   1 → 0 | `(anonymous)`        | `composer/vendor/symfony/console/Output/Output.php` |
|  -25.0% |    -1 | 28.6% → 15.8% |   4 → 3 | `getDefaultCommands` | `Composer\Console\Application`                      |
| removed |    -1 |   7.1% → 0.0% |   1 → 0 | `configure`          | `Composer\Command\InstallCommand`                   |

##### `loadSchema` (`JsonSchema\Uri\UriRetriever`)

|  Change | Delta |      % | Samples | Caller     | Location                      |
| ------: | ----: | -----: | ------: | ---------- | ----------------------------- |
| +125.0% |    +5 | 100.0% |   4 → 9 | `retrieve` | `JsonSchema\Uri\UriRetriever` |

##### `matchStrictGroups` (`Composer\Pcre\Preg`)

| Change | Delta |      % |   Samples | Caller                | Location             |
| -----: | ----: | -----: | --------: | --------------------- | -------------------- |
|  +2.8% |    +4 | 100.0% | 143 → 147 | `isMatchStrictGroups` | `Composer\Pcre\Preg` |

##### `current` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`)

|  Change | Delta |      % | Samples | Caller      | Location                                       |
| ------: | ----: | -----: | ------: | ----------- | ---------------------------------------------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `getStaticFile` (`Composer\Autoload\AutoloadGenerator`)

|  Change | Delta |      % | Samples | Caller | Location                              |
| ------: | ----: | -----: | ------: | ------ | ------------------------------------- |
| +133.3% |    +4 | 100.0% |   3 → 7 | `dump` | `Composer\Autoload\AutoloadGenerator` |

##### `start` (`Symfony\Component\Process\Process`)

| Change | Delta |      % | Samples | Caller | Location                            |
| -----: | ----: | -----: | ------: | ------ | ----------------------------------- |
|  +7.7% |    +3 | 100.0% | 39 → 42 | `run`  | `Symfony\Component\Process\Process` |

##### `(anonymous)` (`vendor/composer/autoload_classmap.php`)

| Change | Delta |      % | Samples | Caller          | Location                              |
| -----: | ----: | -----: | ------: | --------------- | ------------------------------------- |
| +37.5% |    +3 | 100.0% |  8 → 11 | `getStaticFile` | `Composer\Autoload\AutoloadGenerator` |

##### `isAbsolutePath` (`Composer\Util\Filesystem`)

|  Change | Delta |              % | Samples | Caller             | Location                              |
| ------: | ----: | -------------: | ------: | ------------------ | ------------------------------------- |
|     new |    +2 |   0.0% → 50.0% |   0 → 2 | `findShortestPath` | `Composer\Util\Filesystem`            |
| +100.0% |    +1 | 100.0% → 50.0% |   1 → 2 | `getPathCode`      | `Composer\Autoload\AutoloadGenerator` |

##### `getTlsDefaults` (`Composer\Util\StreamContextFactory`)

| Change | Delta |             % | Samples | Caller        | Location                       |
| -----: | ----: | ------------: | ------: | ------------- | ------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `__construct` | `Composer\Util\HttpDownloader` |

##### `wait` (`Symfony\Component\Process\Process`)

|  Change | Delta |      % | Samples | Caller | Location                            |
| ------: | ----: | -----: | ------: | ------ | ----------------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `run`  | `Symfony\Component\Process\Process` |

##### `skipToNewline` (`Composer\ClassMapGenerator\PhpFileCleaner`)

| Change | Delta |      % | Samples | Caller        | Location                                    |
| -----: | ----: | -----: | ------: | ------------- | ------------------------------------------- |
| +14.3% |    +2 | 100.0% | 14 → 16 | `skipHeredoc` | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `getPathCode` (`Composer\Autoload\AutoloadGenerator`)

| Change | Delta |      % | Samples | Caller | Location                              |
| -----: | ----: | -----: | ------: | ------ | ------------------------------------- |
| +20.0% |    +2 | 100.0% | 10 → 12 | `dump` | `Composer\Autoload\AutoloadGenerator` |

##### `findShortestPath` (`Composer\Util\Filesystem`)

| Change | Delta |      % | Samples | Caller        | Location                              |
| -----: | ----: | -----: | ------: | ------------- | ------------------------------------- |
| +12.5% |    +2 | 100.0% | 16 → 18 | `getPathCode` | `Composer\Autoload\AutoloadGenerator` |

##### `skipToPhp` (`Composer\ClassMapGenerator\PhpFileCleaner`)

|  Change | Delta |      % | Samples | Caller  | Location                                    |
| ------: | ----: | -----: | ------: | ------- | ------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `clean` | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `getCwd` (`Composer\ClassMapGenerator\ClassMapGenerator`)

| Change | Delta |             % | Samples | Caller      | Location                                       |
| -----: | ----: | ------------: | ------: | ----------- | ---------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `readFromProcess` (`Symfony\Component\Console\Terminal`)

| Change | Delta |      % |  Samples | Caller           | Location                             |
| -----: | ----: | -----: | -------: | ---------------- | ------------------------------------ |
| -90.4% |  -151 | 100.0% | 167 → 16 | `getSttyColumns` | `Symfony\Component\Console\Terminal` |

##### `call` (`Composer\Util\Silencer`)

|  Change | Delta |             % |   Samples | Caller                      | Location                       |
| ------: | ----: | ------------: | --------: | --------------------------- | ------------------------------ |
|  -12.2% |   -32 | 97.8% → 98.7% | 263 → 231 | `doRun`                     | `Composer\Console\Application` |
|  -50.0% |    -1 |   0.7% → 0.4% |     2 → 1 | `getHomeDir`                | `Composer\Factory`             |
| removed |    -1 |   0.4% → 0.0% |     1 → 0 | `__construct`               | `Composer\Console\Application` |
|  -33.3% |    -1 |   1.1% → 0.9% |     3 → 2 | `filePutContentsIfModified` | `Composer\Util\Filesystem`     |

##### `clean` (`Composer\ClassMapGenerator\PhpFileCleaner`)

| Change | Delta |      % |   Samples | Caller        | Location                                   |
| -----: | ----: | -----: | --------: | ------------- | ------------------------------------------ |
|  -6.2% |   -27 | 100.0% | 435 → 408 | `findClasses` | `Composer\ClassMapGenerator\PhpFileParser` |

##### `readAndWrite` (`Symfony\Component\Process\Pipes\UnixPipes`)

| Change | Delta |      % |   Samples | Caller      | Location                            |
| -----: | ----: | -----: | --------: | ----------- | ----------------------------------- |
|  -2.5% |   -16 | 100.0% | 645 → 629 | `readPipes` | `Symfony\Component\Process\Process` |

##### `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`)

| Change | Delta |      % | Samples | Caller | Location                              |
| -----: | ----: | -----: | ------: | ------ | ------------------------------------- |
| -19.5% |   -15 | 100.0% | 77 → 62 | `dump` | `Composer\Autoload\AutoloadGenerator` |

##### `(anonymous)` (`composer/src/Composer/Console/Application.php:353`)

|  Change | Delta |             % | Samples | Caller | Location                 |
| ------: | ----: | ------------: | ------: | ------ | ------------------------ |
| removed |   -14 | 100.0% → 0.0% |  14 → 0 | `call` | `Composer\Util\Silencer` |

##### `pregMatch` (`Composer\Pcre\Preg`)

| Change | Delta |      % |   Samples | Caller  | Location             |
| -----: | ----: | -----: | --------: | ------- | -------------------- |
|  -4.3% |   -12 | 100.0% | 276 → 264 | `match` | `Composer\Pcre\Preg` |

##### `enforceNonNullMatches` (`Composer\Pcre\Preg`)

| Change | Delta |      % |   Samples | Caller              | Location             |
| -----: | ----: | -----: | --------: | ------------------- | -------------------- |
|  -7.8% |   -11 | 100.0% | 141 → 130 | `matchStrictGroups` | `Composer\Pcre\Preg` |

##### `isMatchStrictGroups` (`Composer\Pcre\Preg`)

|  Change | Delta |             % |   Samples | Caller          | Location                                       |
| ------: | ----: | ------------: | --------: | --------------- | ---------------------------------------------- |
|   -8.6% |   -12 | 97.9% → 96.2% | 139 → 127 | `match`         | `Composer\ClassMapGenerator\PhpFileCleaner`    |
| +150.0% |    +3 |   1.4% → 3.8% |     2 → 5 | `normalizePath` | `Composer\Util\Filesystem`                     |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `normalizePath` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `skipString` (`Composer\ClassMapGenerator\PhpFileCleaner`)

| Change | Delta |      % |   Samples | Caller  | Location                                    |
| -----: | ----: | -----: | --------: | ------- | ------------------------------------------- |
|  -4.0% |    -8 | 100.0% | 202 → 194 | `clean` | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `matchAll` (`Composer\Pcre\Preg`)

| Change | Delta |             % |   Samples | Caller                 | Location                                   |
| -----: | ----: | ------------: | --------: | ---------------------- | ------------------------------------------ |
|  -7.8% |   -12 | 81.8% → 78.8% | 153 → 141 | `matchAllStrictGroups` | `Composer\Pcre\Preg`                       |
| +11.8% |    +4 | 18.2% → 21.2% |   34 → 38 | `findClasses`          | `Composer\ClassMapGenerator\PhpFileParser` |

##### `replace` (`Composer\Pcre\Preg`)

| Change | Delta |      % | Samples | Caller          | Location                              |
| -----: | ----: | -----: | ------: | --------------- | ------------------------------------- |
| -85.7% |    -6 | 100.0% |   7 → 1 | `getStaticFile` | `Composer\Autoload\AutoloadGenerator` |

##### `normalizePath` (`Composer\ClassMapGenerator\ClassMapGenerator`)

| Change | Delta |      % | Samples | Caller      | Location                                       |
| -----: | ----: | -----: | ------: | ----------- | ---------------------------------------------- |
| -25.0% |    -5 | 100.0% | 20 → 15 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `isMatch` (`Composer\Pcre\Preg`)

| Change | Delta |             % | Samples | Caller             | Location                                    |
| -----: | ----: | ------------: | ------: | ------------------ | ------------------------------------------- |
| -28.6% |    -4 | 87.5% → 90.9% | 14 → 10 | `findShortestPath` | `Composer\Util\Filesystem`                  |
| -50.0% |    -1 |  12.5% → 9.1% |   2 → 1 | `clean`            | `Composer\ClassMapGenerator\PhpFileCleaner` |

##### `dump` (`Composer\Autoload\AutoloadGenerator`)

| Change | Delta |      % | Samples | Caller    | Location                               |
| -----: | ----: | -----: | ------: | --------- | -------------------------------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `execute` | `Composer\Command\DumpAutoloadCommand` |

##### `next` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`)

| Change | Delta |      % | Samples | Caller      | Location                                       |
| -----: | ----: | -----: | ------: | ----------- | ---------------------------------------------- |
| -36.4% |    -4 | 100.0% |  11 → 7 | `scanPaths` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `replaceCallback` (`Composer\Pcre\Preg`)

| Change | Delta |             % | Samples | Caller          | Location                                       |
| -----: | ----: | ------------: | ------: | --------------- | ---------------------------------------------- |
| -38.5% |    -5 | 76.5% → 57.1% |  13 → 8 | `normalizePath` | `Composer\Util\Filesystem`                     |
| +50.0% |    +2 | 23.5% → 42.9% |   4 → 6 | `normalizePath` | `Composer\ClassMapGenerator\ClassMapGenerator` |

##### `normalizePath` (`Composer\Util\Filesystem`)

|  Change | Delta |             % | Samples | Caller                 | Location                              |
| ------: | ----: | ------------: | ------: | ---------------------- | ------------------------------------- |
|  -16.7% |    -3 | 54.5% → 50.0% | 18 → 15 | `getPathCode`          | `Composer\Autoload\AutoloadGenerator` |
|   +7.1% |    +1 | 42.4% → 50.0% | 14 → 15 | `findShortestPath`     | `Composer\Util\Filesystem`            |
| removed |    -1 |   3.0% → 0.0% |   1 → 0 | `findShortestPathCode` | `Composer\Util\Filesystem`            |

##### `unregister` (`Seld\Signal\SignalHandler`)

|  Change | Delta |             % | Samples | Caller       | Location                        |
| ------: | ----: | ------------: | ------: | ------------ | ------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `runProcess` | `Composer\Util\ProcessExecutor` |

##### `checkSetOrder` (`Composer\Pcre\Preg`)

|  Change | Delta |             % | Samples | Caller     | Location             |
| ------: | ----: | ------------: | ------: | ---------- | -------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `matchAll` | `Composer\Pcre\Preg` |

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
|     new |   +15 |   0.0% → 0.4% |      0 → 15 | `(anonymous)`         | `composer/src/Composer/Console/Application.php:349`                |
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
|     new |   +15 |   0.0% → 0.4% |      0 → 15 | `(anonymous)`         | `composer/src/Composer/Console/Application.php:349`                |
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

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `match` (`Composer\Pcre\Preg`)

| Change | Delta |             % |   Samples | Callee               | Location             |
| -----: | ----: | ------------: | --------: | -------------------- | -------------------- |
| +33.8% |   +26 | 15.3% → 19.2% |  77 → 103 | `checkOffsetCapture` | `Composer\Pcre\Preg` |
|  -4.3% |   -12 | 55.0% → 49.2% | 276 → 264 | `pregMatch`          | `Composer\Pcre\Preg` |

##### `match` (`Composer\ClassMapGenerator\PhpFileCleaner`)

| Change | Delta |             % |   Samples | Callee                | Location             |
| -----: | ----: | ------------: | --------: | --------------------- | -------------------- |
|  +2.5% |   +22 | 89.2% → 88.6% | 882 → 904 | `isMatchStrictGroups` | `Composer\Pcre\Preg` |

##### `matchStrictGroups` (`Composer\Pcre\Preg`)

| Change | Delta |             % |   Samples | Callee                  | Location             |
| -----: | ----: | ------------: | --------: | ----------------------- | -------------------- |
|  +7.0% |   +34 | 63.1% → 65.2% | 485 → 519 | `match`                 | `Composer\Pcre\Preg` |
|  -7.8% |   -11 | 18.3% → 16.3% | 141 → 130 | `enforceNonNullMatches` | `Composer\Pcre\Preg` |

##### `getChildren` (`Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`)

| Change | Delta |             % | Samples | Callee        | Location                                                       |
| -----: | ----: | ------------: | ------: | ------------- | -------------------------------------------------------------- |
| +51.0% |   +26 | 96.2% → 97.5% | 51 → 77 | `__construct` | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator` |

##### `getChildren` (`Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator`)

|  Change | Delta |              % | Samples | Callee        | Location                                                           |
| ------: | ----: | -------------: | ------: | ------------- | ------------------------------------------------------------------ |
|  +49.1% |   +26 | 96.4% → 100.0% | 53 → 79 | `getChildren` | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`     |
| removed |    -1 |    1.8% → 0.0% |   1 → 0 | `__construct` | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |

##### `isMatchStrictGroups` (`Composer\Pcre\Preg`)

| Change | Delta |             % |   Samples | Callee              | Location             |
| -----: | ----: | ------------: | --------: | ------------------- | -------------------- |
|  +3.5% |   +27 | 84.4% → 85.8% | 769 → 796 | `matchStrictGroups` | `Composer\Pcre\Preg` |

##### `getPathCode` (`Composer\Autoload\AutoloadGenerator`)

|  Change | Delta |             % | Samples | Callee             | Location                   |
| ------: | ----: | ------------: | ------: | ------------------ | -------------------------- |
|  +12.1% |    +8 | 58.9% → 61.7% | 66 → 74 | `findShortestPath` | `Composer\Util\Filesystem` |
|   -8.6% |    -3 | 31.3% → 26.7% | 35 → 32 | `normalizePath`    | `Composer\Util\Filesystem` |
| +100.0% |    +1 |   0.9% → 1.7% |   1 → 2 | `isAbsolutePath`   | `Composer\Util\Filesystem` |

##### `findShortestPath` (`Composer\Util\Filesystem`)

| Change | Delta |             % | Samples | Callee           | Location                   |
| -----: | ----: | ------------: | ------: | ---------------- | -------------------------- |
| +21.7% |    +5 | 34.8% → 37.8% | 23 → 28 | `isMatch`        | `Composer\Pcre\Preg`       |
|    new |    +2 |   0.0% → 2.7% |   0 → 2 | `isAbsolutePath` | `Composer\Util\Filesystem` |
|  -3.7% |    -1 | 40.9% → 35.1% | 27 → 26 | `normalizePath`  | `Composer\Util\Filesystem` |

##### `loadSchema` (`JsonSchema\Uri\UriRetriever`)

| Change | Delta |            % | Samples | Callee     | Location                                    |
| -----: | ----: | -----------: | ------: | ---------- | ------------------------------------------- |
|    new |    +1 | 0.0% → 10.0% |   0 → 1 | `retrieve` | `JsonSchema\Uri\Retrievers\FileGetContents` |

##### `init` (`Symfony\Component\Console\Application`)

| Change | Delta |              % | Samples | Callee               | Location                       |
| -----: | ----: | -------------: | ------: | -------------------- | ------------------------------ |
| +36.4% |    +4 | 100.0% → 93.8% | 11 → 15 | `getDefaultCommands` | `Composer\Console\Application` |

##### `getDefaultCommands` (`Composer\Console\Application`)

|  Change | Delta |             % | Samples | Callee               | Location                                    |
| ------: | ----: | ------------: | ------: | -------------------- | ------------------------------------------- |
|  +75.0% |    +3 | 36.4% → 46.7% |   4 → 7 | `__construct`        | `Symfony\Component\Console\Command\Command` |
| +100.0% |    +1 |  9.1% → 13.3% |   1 → 2 | `getDefaultCommands` | `Symfony\Component\Console\Application`     |

##### `__construct` (`Symfony\Component\Console\Command\Command`)

| Change | Delta |             % | Samples | Callee           | Location                                    |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------------------------------- |
| -33.3% |    -1 | 60.0% → 25.0% |   3 → 2 | `configure`      | `Composer\Command\InstallCommand`           |
|    new |    +1 |  0.0% → 12.5% |   0 → 1 | `getDefaultName` | `Symfony\Component\Console\Command\Command` |
|    new |    +1 |  0.0% → 12.5% |   0 → 1 | `configure`      | `Composer\Command\ConfigCommand`            |
|    new |    +1 |  0.0% → 12.5% |   0 → 1 | `configure`      | `Composer\Command\InitCommand`              |
|    new |    +1 |  0.0% → 12.5% |   0 → 1 | `configure`      | `Composer\Command\DependsCommand`           |

##### `find` (`Symfony\Component\Console\Application`)

| Change | Delta |              % | Samples | Callee | Location                                |
| -----: | ----: | -------------: | ------: | ------ | --------------------------------------- |
| +45.5% |    +5 | 84.6% → 100.0% | 11 → 16 | `init` | `Symfony\Component\Console\Application` |

##### `start` (`Symfony\Component\Process\Process`)

|  Change | Delta |           % | Samples | Callee             | Location                            |
| ------: | ----: | ----------: | ------: | ------------------ | ----------------------------------- |
| removed |    -1 | 2.2% → 0.0% |   1 → 0 | `resetProcessData` | `Symfony\Component\Process\Process` |
|     new |    +1 | 0.0% → 2.1% |   0 → 1 | `getDescriptors`   | `Symfony\Component\Process\Process` |

##### `retrieve` (`JsonSchema\Uri\UriRetriever`)

|  Change | Delta |              % | Samples | Callee           | Location                      |
| ------: | ----: | -------------: | ------: | ---------------- | ----------------------------- |
| +150.0% |    +6 | 57.1% → 100.0% |  4 → 10 | `loadSchema`     | `JsonSchema\Uri\UriRetriever` |
| removed |    -2 |   28.6% → 0.0% |   2 → 0 | `translate`      | `JsonSchema\Uri\UriRetriever` |
| removed |    -1 |   14.3% → 0.0% |   1 → 0 | `resolvePointer` | `JsonSchema\Uri\UriRetriever` |

##### `(anonymous)` (`profile.php`)

|  Change | Delta |             % |       Samples | Callee        | Location                                  |
| ------: | ----: | ------------: | ------------: | ------------- | ----------------------------------------- |
|   -5.2% |  -217 | 99.8% → 99.9% | 4,157 → 3,940 | `run`         | `Composer\Console\Application`            |
|  -50.0% |    -1 |         <0.1% |         2 → 1 | `loadClass`   | `Composer\Autoload\ClassLoader`           |
|  -33.3% |    -1 |          0.1% |         3 → 2 | `__construct` | `Composer\Console\Application`            |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `__construct` | `Symfony\Component\Console\Output\Output` |

##### `run` (`Symfony\Component\Console\Application`)

| Change | Delta |             % |       Samples | Callee        | Location                                |
| -----: | ----: | ------------: | ------------: | ------------- | --------------------------------------- |
| -94.4% |  -152 |   3.9% → 0.2% |       161 → 9 | `getHeight`   | `Symfony\Component\Console\Terminal`    |
|  -1.7% |   -67 | 96.0% → 99.6% | 3,990 → 3,923 | `doRun`       | `Composer\Console\Application`          |
| +16.7% |    +1 |   0.1% → 0.2% |         6 → 7 | `getWidth`    | `Symfony\Component\Console\Terminal`    |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `configureIO` | `Symfony\Component\Console\Application` |

##### `run` (`Composer\Console\Application`)

| Change | Delta |      % |       Samples | Callee | Location                                |
| -----: | ----: | -----: | ------------: | ------ | --------------------------------------- |
|  -5.2% |  -217 | 100.0% | 4,157 → 3,940 | `run`  | `Symfony\Component\Console\Application` |

##### `getHeight` (`Symfony\Component\Console\Terminal`)

| Change | Delta |      % | Samples | Callee           | Location                             |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------ |
| -94.4% |  -152 | 100.0% | 161 → 9 | `initDimensions` | `Symfony\Component\Console\Terminal` |

##### `getSttyColumns` (`Symfony\Component\Console\Terminal`)

| Change | Delta |      % |  Samples | Callee            | Location                             |
| -----: | ----: | -----: | -------: | ----------------- | ------------------------------------ |
| -90.4% |  -151 | 100.0% | 167 → 16 | `readFromProcess` | `Symfony\Component\Console\Terminal` |

##### `initDimensionsUsingStty` (`Symfony\Component\Console\Terminal`)

| Change | Delta |      % |  Samples | Callee           | Location                             |
| -----: | ----: | -----: | -------: | ---------------- | ------------------------------------ |
| -90.4% |  -151 | 100.0% | 167 → 16 | `getSttyColumns` | `Symfony\Component\Console\Terminal` |

##### `initDimensions` (`Symfony\Component\Console\Terminal`)

| Change | Delta |      % |  Samples | Callee                    | Location                             |
| -----: | ----: | -----: | -------: | ------------------------- | ------------------------------------ |
| -90.4% |  -151 | 100.0% | 167 → 16 | `initDimensionsUsingStty` | `Symfony\Component\Console\Terminal` |

##### `doRun` (`Composer\Console\Application`)

| Change | Delta |             % |       Samples | Callee       | Location                                |
| -----: | ----: | ------------: | ------------: | ------------ | --------------------------------------- |
|  -1.0% |   -38 | 92.6% → 93.2% | 3,694 → 3,656 | `doRun`      | `Symfony\Component\Console\Application` |
| -11.8% |   -33 |   7.0% → 6.3% |     279 → 246 | `call`       | `Composer\Util\Silencer`                |
| +23.1% |    +3 |   0.3% → 0.4% |       13 → 16 | `find`       | `Symfony\Component\Console\Application` |
| -33.3% |    -1 |          0.1% |         3 → 2 | `loadClass`  | `Composer\Autoload\ClassLoader`         |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `isReadable` | `Composer\Util\Filesystem`              |

##### `call` (`Composer\Util\Silencer`)

|  Change | Delta |           % | Samples | Callee        | Location                                            |
| ------: | ----: | ----------: | ------: | ------------- | --------------------------------------------------- |
|     new |   +15 | 0.0% → 6.0% |  0 → 15 | `(anonymous)` | `composer/src/Composer/Console/Application.php:349` |
| removed |   -14 | 4.9% → 0.0% |  14 → 0 | `(anonymous)` | `composer/src/Composer/Console/Application.php:353` |
| removed |    -4 | 1.4% → 0.0% |   4 → 0 | `suppress`    | `Composer\Util\Silencer`                            |

##### `doRun` (`Symfony\Component\Console\Application`)

| Change | Delta |     % |       Samples | Callee         | Location                                |
| -----: | ----: | ----: | ------------: | -------------- | --------------------------------------- |
|  -1.0% |   -38 | 99.9% | 3,692 → 3,654 | `doRunCommand` | `Symfony\Component\Console\Application` |

##### `run` (`Symfony\Component\Console\Command\Command`)

| Change | Delta |             % |       Samples | Callee       | Location                               |
| -----: | ----: | ------------: | ------------: | ------------ | -------------------------------------- |
|  -0.7% |   -22 | 79.7% → 80.0% | 2,944 → 2,922 | `execute`    | `Composer\Command\DumpAutoloadCommand` |
|  -2.1% |   -16 | 20.3% → 20.0% |     748 → 732 | `initialize` | `Composer\Command\BaseCommand`         |

##### `doRunCommand` (`Symfony\Component\Console\Application`)

| Change | Delta |      % |       Samples | Callee | Location                                    |
| -----: | ----: | -----: | ------------: | ------ | ------------------------------------------- |
|  -1.0% |   -38 | 100.0% | 3,692 → 3,654 | `run`  | `Symfony\Component\Console\Command\Command` |

##### `dump` (`Composer\Autoload\AutoloadGenerator`)

|  Change | Delta |             % |       Samples | Callee                  | Location                                       |
| ------: | ----: | ------------: | ------------: | ----------------------- | ---------------------------------------------- |
|   -0.6% |   -18 | 94.6% → 94.7% | 2,784 → 2,766 | `scanPaths`             | `Composer\ClassMapGenerator\ClassMapGenerator` |
|   +7.1% |    +8 |   3.8% → 4.1% |     112 → 120 | `getPathCode`           | `Composer\Autoload\AutoloadGenerator`          |
|   -9.1% |    -2 |          0.7% |       22 → 20 | `getStaticFile`         | `Composer\Autoload\AutoloadGenerator`          |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `dispatchScript`        | `Composer\EventDispatcher\EventDispatcher`     |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `ensureDirectoryExists` | `Composer\Util\Filesystem`                     |

##### `execute` (`Composer\Command\DumpAutoloadCommand`)

| Change | Delta |              % |       Samples | Callee      | Location                                |
| -----: | ----: | -------------: | ------------: | ----------- | --------------------------------------- |
|  -0.8% |   -24 | 100.0% → 99.9% | 2,944 → 2,920 | `dump`      | `Composer\Autoload\AutoloadGenerator`   |
|    new |    +1 |   0.0% → <0.1% |         0 → 1 | `getOption` | `Symfony\Component\Console\Input\Input` |

##### `findClasses` (`Composer\ClassMapGenerator\PhpFileParser`)

|  Change | Delta |            % |       Samples | Callee                 | Location                                    |
| ------: | ----: | -----------: | ------------: | ---------------------- | ------------------------------------------- |
|   -8.9% |   -14 |  6.3% → 5.8% |     158 → 144 | `matchAllStrictGroups` | `Composer\Pcre\Preg`                        |
|   -0.7% |   -12 |        65.9% | 1,660 → 1,648 | `clean`                | `Composer\ClassMapGenerator\PhpFileCleaner` |
|   -9.5% |    -4 |  1.7% → 1.5% |       42 → 38 | `matchAll`             | `Composer\Pcre\Preg`                        |
| removed |    -1 | <0.1% → 0.0% |         1 → 0 | `getExtraTypes`        | `Composer\ClassMapGenerator\PhpFileParser`  |

##### `scanPaths` (`Composer\ClassMapGenerator\ClassMapGenerator`)

| Change | Delta |             % |       Samples | Callee          | Location                                                           |
| -----: | ----: | ------------: | ------------: | --------------- | ------------------------------------------------------------------ |
| +43.6% |   +24 |   2.0% → 2.9% |       55 → 79 | `getChildren`   | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator` |
|  -0.8% |   -19 | 90.5% → 90.4% | 2,520 → 2,501 | `findClasses`   | `Composer\ClassMapGenerator\PhpFileParser`                         |
| -30.6% |   -11 |   1.3% → 0.9% |       36 → 25 | `normalizePath` | `Composer\ClassMapGenerator\ClassMapGenerator`                     |
| +57.1% |    +4 |   0.3% → 0.4% |        7 → 11 | `current`       | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`     |
| -36.4% |    -4 |   0.4% → 0.3% |        11 → 7 | `next`          | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator`     |

##### `matchAll` (`Composer\Pcre\Preg`)

|  Change | Delta |           % | Samples | Callee               | Location             |
| ------: | ----: | ----------: | ------: | -------------------- | -------------------- |
| removed |    -7 | 3.6% → 0.0% |   7 → 0 | `checkOffsetCapture` | `Composer\Pcre\Preg` |
| removed |    -3 | 1.5% → 0.0% |   3 → 0 | `checkSetOrder`      | `Composer\Pcre\Preg` |

##### `createComposer` (`Composer\Factory`)

|  Change | Delta |             % |   Samples | Callee           | Location                                    |
| ------: | ----: | ------------: | --------: | ---------------- | ------------------------------------------- |
|   -1.8% |   -13 | 94.9% → 95.2% | 710 → 697 | `load`           | `Composer\Package\Loader\RootPackageLoader` |
|  -22.2% |    -4 |   2.4% → 1.9% |   18 → 14 | `validateSchema` | `Composer\Json\JsonFile`                    |
| +100.0% |    +2 |   0.3% → 0.5% |     2 → 4 | `loadClass`      | `Composer\Autoload\ClassLoader`             |
| removed |    -2 |   0.3% → 0.0% |     2 → 0 | `read`           | `Composer\Json\JsonFile`                    |
|  -33.3% |    -1 |   0.4% → 0.3% |     3 → 2 | `createConfig`   | `Composer\Factory`                          |

##### `create` (`Composer\Factory`)

| Change | Delta |      % |   Samples | Callee           | Location           |
| -----: | ----: | -----: | --------: | ---------------- | ------------------ |
|  -2.1% |   -16 | 100.0% | 748 → 732 | `createComposer` | `Composer\Factory` |

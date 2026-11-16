# Sampling profile

Took 3.94s.

| Category    |     % |    Time |
| ----------- | ----: | ------: |
| Third-party | 91.2% |   3.60s |
| Ours        |  8.8% | 347.0ms |

Paths starting with `./` or `../` are relative to `/private/tmp/profiler-md-php-workload/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── … 3.94s (99.9%) Symfony\Component\Console\Application::run at ./composer/vendor/symfony/console/Application.php
    └── 3.92s (99.5%) Composer\Console\Application::doRun at ./composer/src/Composer/Console/Application.php
        ├── … 3.65s (92.6%) Symfony\Component\Console\Command\Command::run at ./composer/vendor/symfony/console/Command/Command.php
        │   ├── 2.92s (74.1%) Composer\Command\DumpAutoloadCommand::execute at ./composer/src/Composer/Command/DumpAutoloadCommand.php
        │   │   └── 2.92s (74.0%) Composer\Autoload\AutoloadGenerator::dump at ./composer/src/Composer/Autoload/AutoloadGenerator.php
        │   │       ├── 2.77s (70.1%, self 1.6%) Composer\ClassMapGenerator\ClassMapGenerator::scanPaths at ./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php
        │   │       │   ├── 2.50s (63.4%, self 17.0%) Composer\ClassMapGenerator\PhpFileParser::findClasses at ./composer/vendor/composer/class-map-generator/src/PhpFileParser.php
        │   │       │   │   ├── 1.65s (41.8%, self 10.3%) Composer\ClassMapGenerator\PhpFileCleaner::clean at ./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php
        │   │       │   │   │   ├── 1.02s (25.8%, self 2.9%) Composer\ClassMapGenerator\PhpFileCleaner::match
        │   │       │   │   │   │   └── 902.0ms (22.9%, self 3.2%) Composer\Pcre\Preg::isMatchStrictGroups at ./composer/vendor/composer/pcre/src/Preg.php
        │   │       │   │   │   │       └── 776.0ms (19.7%, self 3.5%) Composer\Pcre\Preg::matchStrictGroups
        │   │       │   │   │   │           ├── 509.0ms (12.9%, self 4.1%) Composer\Pcre\Preg::match
        │   │       │   │   │   │           │   ├── 248.0ms (6.3%) Composer\Pcre\Preg::pregMatch
        │   │       │   │   │   │           │   └── 98.0ms (2.5%) Composer\Pcre\Preg::checkOffsetCapture
        │   │       │   │   │   │           └── 127.0ms (3.2%) Composer\Pcre\Preg::enforceNonNullMatches
        │   │       │   │   │   ├── 195.0ms (4.9%, self 4.9%) Composer\ClassMapGenerator\PhpFileCleaner::skipString
        │   │       │   │   │   └── 21.0ms (0.5%) Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc
        │   │       │   │   ├── 144.0ms (3.7%) Composer\Pcre\Preg::matchAllStrictGroups at ./composer/vendor/composer/pcre/src/Preg.php
        │   │       │   │   │   └── 141.0ms (3.6%, self 4.5% globally) Composer\Pcre\Preg::matchAll
        │   │       │   │   └── 38.0ms (1.0%) Composer\Pcre\Preg::matchAll at ./composer/vendor/composer/pcre/src/Preg.php
        │   │       │   ├── … 77.0ms (2.0%) Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct at ./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php
        │   │       │   ├── 55.0ms (1.4%) Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren at ./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php
        │   │       │   │   └── 55.0ms (1.4%) Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren at ./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php
        │   │       │   └── 69.0ms (1.7%) 13 more callees, led by (0.6%) Composer\ClassMapGenerator\ClassMapGenerator::normalizePath
        │   │       ├── 120.0ms (3.0%) Composer\Autoload\AutoloadGenerator::getPathCode
        │   │       │   ├── 32.0ms (0.8%) Composer\Util\Filesystem::normalizePath at ./composer/src/Composer/Util/Filesystem.php
        │   │       │   └── 76.0ms (1.9%) 2 more callees, led by (1.9%) Composer\Util\Filesystem::findShortestPath at ./composer/src/Composer/Util/Filesystem.php
        │   │       └── 20.0ms (0.5%) Composer\Autoload\AutoloadGenerator::getStaticFile
        │   └── … 732.0ms (18.6%) Composer\Factory::createComposer at ./composer/src/Composer/Factory.php
        │       ├── 697.0ms (17.7%) Composer\Package\Loader\RootPackageLoader::load at ./composer/src/Composer/Package/Loader/RootPackageLoader.php
        │       │   └── 692.0ms (17.5%) Composer\Package\Version\VersionGuesser::guessVersion at ./composer/src/Composer/Package/Version/VersionGuesser.php
        │       │       ├── 458.0ms (11.6%) Composer\Package\Version\VersionGuesser::guessGitVersion
        │       │       │   ├── … 304.0ms (7.7%) Symfony\Component\Process\Process::run at ./composer/vendor/symfony/process/Process.php
        │       │       │   │   ├── … 280.0ms (7.1%, self 7.1%, self 15.9% globally) Symfony\Component\Process\Pipes\UnixPipes::readAndWrite at ./composer/vendor/symfony/process/Pipes/UnixPipes.php
        │       │       │   │   └── 18.0ms (0.5%, self 1.1% globally) Symfony\Component\Process\Process::start
        │       │       │   └── 152.0ms (3.9%) 2 more callees, led by (3.7%) Composer\Package\Version\VersionGuesser::versionFromGitTags
        │       │       └── 234.0ms (5.9%) 3 more callees, led by (3.0%) Composer\Package\Version\VersionGuesser::guessFossilVersion
        │       └── 34.0ms (0.9%) 11 more callees, led by (0.4%) Composer\Json\JsonFile::validateSchema at ./composer/src/Composer/Json/JsonFile.php
        ├── 246.0ms (6.2%, self 5.9%) Composer\Util\Silencer::call at ./composer/src/Composer/Util/Silencer.php
        └── … 6.0ms (0.2%) Composer\Autoload\ClassLoader::loadClass at ./composer/vendor/composer/ClassLoader.php
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|     % |    Time | Function                                                                    | Location                                                                   |
| ----: | ------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 17.0% | 671.0ms | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                     | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 15.9% | 629.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`                   | `./composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 10.3% | 408.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                          | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  6.7% | 264.0ms | `Composer\Pcre\Preg::pregMatch`                                             | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  5.9% | 234.0ms | `Composer\Util\Silencer::call`                                              | `./composer/src/Composer/Util/Silencer.php`                                |
|  4.9% | 194.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`                     | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  4.5% | 179.0ms | `Composer\Pcre\Preg::matchAll`                                              | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  4.3% | 170.0ms | `Composer\Pcre\Preg::match`                                                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.7% | 147.0ms | `Composer\Pcre\Preg::matchStrictGroups`                                     | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.3% | 132.0ms | `Composer\Pcre\Preg::isMatchStrictGroups`                                   | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.3% | 130.0ms | `Composer\Pcre\Preg::enforceNonNullMatches`                                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.9% | 116.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match`                          | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  2.6% | 103.0ms | `Composer\Pcre\Preg::checkOffsetCapture`                                    | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.1% |  82.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  1.6% |  62.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                   | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  1.4% |  55.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  1.1% |  42.0ms | `Symfony\Component\Process\Process::start`                                  | `./composer/vendor/symfony/process/Process.php`                            |
|  0.8% |  30.0ms | `Composer\Util\Filesystem::normalizePath`                                   | `./composer/src/Composer/Util/Filesystem.php`                              |
|  0.5% |  19.0ms | `Composer\Autoload\ClassLoader::loadClass`                                  | `./composer/vendor/composer/ClassLoader.php`                               |
|  0.5% |  18.0ms | `Composer\Util\Filesystem::findShortestPath`                                | `./composer/src/Composer/Util/Filesystem.php`                              |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|     % |    Time | Function                                                                    | Location                                                                   |
| ----: | ------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 17.0% | 671.0ms | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                     | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 15.9% | 629.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`                   | `./composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 10.3% | 408.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                          | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  6.7% | 264.0ms | `Composer\Pcre\Preg::pregMatch`                                             | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  4.9% | 194.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`                     | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  4.5% | 179.0ms | `Composer\Pcre\Preg::matchAll`                                              | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  4.3% | 170.0ms | `Composer\Pcre\Preg::match`                                                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.7% | 147.0ms | `Composer\Pcre\Preg::matchStrictGroups`                                     | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.3% | 132.0ms | `Composer\Pcre\Preg::isMatchStrictGroups`                                   | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.3% | 130.0ms | `Composer\Pcre\Preg::enforceNonNullMatches`                                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.9% | 116.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match`                          | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  2.6% | 103.0ms | `Composer\Pcre\Preg::checkOffsetCapture`                                    | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.1% |  82.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  1.6% |  62.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                   | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  1.4% |  55.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  1.1% |  42.0ms | `Symfony\Component\Process\Process::start`                                  | `./composer/vendor/symfony/process/Process.php`                            |
|  0.5% |  19.0ms | `Composer\Autoload\ClassLoader::loadClass`                                  | `./composer/vendor/composer/ClassLoader.php`                               |
|  0.4% |  16.0ms | `Symfony\Component\Console\Terminal::readFromProcess`                       | `./composer/vendor/symfony/console/Terminal.php`                           |
|  0.4% |  16.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline`                  | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  0.4% |  15.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`               | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### Ours

|     % |    Time | Function                                                  | Location                                                       |
| ----: | ------: | --------------------------------------------------------- | -------------------------------------------------------------- |
|  5.9% | 234.0ms | `Composer\Util\Silencer::call`                            | `./composer/src/Composer/Util/Silencer.php`                    |
|  0.8% |  30.0ms | `Composer\Util\Filesystem::normalizePath`                 | `./composer/src/Composer/Util/Filesystem.php`                  |
|  0.5% |  18.0ms | `Composer\Util\Filesystem::findShortestPath`              | `./composer/src/Composer/Util/Filesystem.php`                  |
|  0.4% |  15.0ms | `(anonymous)`                                             | `./composer/src/Composer/Console/Application.php:349`          |
|  0.3% |  12.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode`        | `./composer/src/Composer/Autoload/AutoloadGenerator.php`       |
|  0.2% |   7.0ms | `Composer\Autoload\AutoloadGenerator::getStaticFile`      | `./composer/src/Composer/Autoload/AutoloadGenerator.php`       |
|  0.1% |   4.0ms | `Composer\Util\Filesystem::filesAreEqual`                 | `./composer/src/Composer/Util/Filesystem.php`                  |
|  0.1% |   4.0ms | `Composer\Util\Filesystem::isAbsolutePath`                | `./composer/src/Composer/Util/Filesystem.php`                  |
|  0.1% |   2.0ms | `Composer\Util\StreamContextFactory::getTlsDefaults`      | `./composer/src/Composer/Util/StreamContextFactory.php`        |
|  0.1% |   2.0ms | `Composer\Autoload\AutoloadGenerator::dump`               | `./composer/src/Composer/Autoload/AutoloadGenerator.php`       |
| <0.1% |   1.0ms | `(file scope)`                                            | `./composer/src/Composer/Command/InstallCommand.php`           |
| <0.1% |   1.0ms | `Composer\Factory::createComposer`                        | `./composer/src/Composer/Factory.php`                          |
| <0.1% |   1.0ms | `(file scope)`                                            | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |
| <0.1% |   1.0ms | `(file scope)`                                            | `./composer/src/Composer/Repository/PlatformRepository.php`    |
| <0.1% |   1.0ms | `(file scope)`                                            | `./composer/src/Composer/Repository/ComposerRepository.php`    |
| <0.1% |   1.0ms | `Composer\Repository\RepositoryManager::createRepository` | `./composer/src/Composer/Repository/RepositoryManager.php`     |
| <0.1% |   1.0ms | `(file scope)`                                            | `./composer/src/Composer/Downloader/GitDownloader.php`         |
| <0.1% |   1.0ms | `(file scope)`                                            | `./composer/src/Composer/Downloader/ArchiveDownloader.php`     |
| <0.1% |   1.0ms | `(file scope)`                                            | `./composer/src/Composer/Package/Archiver/PharArchiver.php`    |
| <0.1% |   1.0ms | `Composer\Command\DumpAutoloadCommand::execute`           | `./composer/src/Composer/Command/DumpAutoloadCommand.php`      |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

|      % |    Time | Caller                                                    | Location                                                                   |
| -----: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 100.0% | 671.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`)

|      % |    Time | Caller                                         | Location                                        |
| -----: | ------: | ---------------------------------------------- | ----------------------------------------------- |
| 100.0% | 629.0ms | `Symfony\Component\Process\Process::readPipes` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Caller                                                  | Location                                                               |
| -----: | ------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% | 408.0ms | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Caller                      | Location                                       |
| -----: | ------: | --------------------------- | ---------------------------------------------- |
| 100.0% | 264.0ms | `Composer\Pcre\Preg::match` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`)

|     % |    Time | Caller                                                | Location                                          |
| ----: | ------: | ----------------------------------------------------- | ------------------------------------------------- |
| 98.7% | 231.0ms | `Composer\Console\Application::doRun`                 | `./composer/src/Composer/Console/Application.php` |
|  0.9% |   2.0ms | `Composer\Util\Filesystem::filePutContentsIfModified` | `./composer/src/Composer/Util/Filesystem.php`     |
|  0.4% |   1.0ms | `Composer\Factory::getHomeDir`                        | `./composer/src/Composer/Factory.php`             |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Caller                                             | Location                                                                |
| -----: | ------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% | 194.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Caller                                                  | Location                                                               |
| ----: | ------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| 78.8% | 141.0ms | `Composer\Pcre\Preg::matchAllStrictGroups`              | `./composer/vendor/composer/pcre/src/Preg.php`                         |
| 21.2% |  38.0ms | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Caller                                  | Location                                       |
| ----: | ------: | --------------------------------------- | ---------------------------------------------- |
| 97.6% | 166.0ms | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |
|  2.4% |   4.0ms | `Composer\Pcre\Preg::isMatch`           | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Caller                                    | Location                                       |
| -----: | ------: | ----------------------------------------- | ---------------------------------------------- |
| 100.0% | 147.0ms | `Composer\Pcre\Preg::isMatchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Caller                                             | Location                                                                |
| ----: | ------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| 96.2% | 127.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  3.8% |   5.0ms | `Composer\Util\Filesystem::normalizePath`          | `./composer/src/Composer/Util/Filesystem.php`                           |

##### `Composer\Pcre\Preg::enforceNonNullMatches` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Caller                                  | Location                                       |
| -----: | ------: | --------------------------------------- | ---------------------------------------------- |
| 100.0% | 130.0ms | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Caller                                             | Location                                                                |
| -----: | ------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% | 116.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::checkOffsetCapture` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Caller                      | Location                                       |
| -----: | ------: | --------------------------- | ---------------------------------------------- |
| 100.0% | 103.0ms | `Composer\Pcre\Preg::match` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

|     % |   Time | Caller                                                                      | Location                                                                   |
| ----: | -----: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 93.9% | 77.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  6.1% |  5.0ms | `Symfony\Component\Finder\Finder::searchInDirectory`                        | `./composer/vendor/symfony/finder/Finder.php`                              |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|      % |   Time | Caller                                      | Location                                                 |
| -----: | -----: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 62.0ms | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

|      % |   Time | Caller                                                                          | Location                                                                       |
| -----: | -----: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 100.0% | 55.0ms | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |

##### `Symfony\Component\Process\Process::start` (`./composer/vendor/symfony/process/Process.php`)

|      % |   Time | Caller                                   | Location                                        |
| -----: | -----: | ---------------------------------------- | ----------------------------------------------- |
| 100.0% | 42.0ms | `Symfony\Component\Process\Process::run` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\Util\Filesystem::normalizePath` (`./composer/src/Composer/Util/Filesystem.php`)

|     % |   Time | Caller                                             | Location                                                 |
| ----: | -----: | -------------------------------------------------- | -------------------------------------------------------- |
| 50.0% | 15.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |
| 50.0% | 15.0ms | `Composer\Util\Filesystem::findShortestPath`       | `./composer/src/Composer/Util/Filesystem.php`            |

##### `Composer\Autoload\ClassLoader::loadClass` (`./composer/vendor/composer/ClassLoader.php`)

|     % |  Time | Caller                                               | Location                                                                             |
| ----: | ----: | ---------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 21.1% | 4.0ms | `Composer\Factory::createComposer`                   | `./composer/src/Composer/Factory.php`                                                |
| 15.8% | 3.0ms | `Composer\Console\Application::getDefaultCommands`   | `./composer/src/Composer/Console/Application.php`                                    |
| 10.5% | 2.0ms | `Composer\Console\Application::doRun`                | `./composer/src/Composer/Console/Application.php`                                    |
| 10.5% | 2.0ms | `JsonSchema\Constraints\Factory::createInstanceFor`  | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Constraints/Factory.php` |
|  5.3% | 1.0ms | `Symfony\Component\Console\Application::__construct` | `./composer/vendor/symfony/console/Application.php`                                  |

##### `Composer\Util\Filesystem::findShortestPath` (`./composer/src/Composer/Util/Filesystem.php`)

|      % |   Time | Caller                                             | Location                                                 |
| -----: | -----: | -------------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 18.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Symfony\Component\Console\Terminal::readFromProcess` (`./composer/vendor/symfony/console/Terminal.php`)

|      % |   Time | Caller                                               | Location                                         |
| -----: | -----: | ---------------------------------------------------- | ------------------------------------------------ |
| 100.0% | 16.0ms | `Symfony\Component\Console\Terminal::getSttyColumns` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |   Time | Caller                                                   | Location                                                                |
| -----: | -----: | -------------------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% | 16.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|      % |   Time | Caller                                                    | Location                                                                   |
| -----: | -----: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 100.0% | 15.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `(anonymous)` (`./composer/src/Composer/Console/Application.php:349`)

|      % |   Time | Caller                         | Location                                    |
| -----: | -----: | ------------------------------ | ------------------------------------------- |
| 100.0% | 15.0ms | `Composer\Util\Silencer::call` | `./composer/src/Composer/Util/Silencer.php` |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |   Time | Caller                                      | Location                                                 |
| -----: | -----: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 12.0ms | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Autoload\AutoloadGenerator::getStaticFile` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Caller                                      | Location                                                 |
| -----: | ----: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 7.0ms | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Util\Filesystem::filesAreEqual` (`./composer/src/Composer/Util/Filesystem.php`)

|      % |  Time | Caller                               | Location                                      |
| -----: | ----: | ------------------------------------ | --------------------------------------------- |
| 100.0% | 4.0ms | `Composer\Util\Filesystem::safeCopy` | `./composer/src/Composer/Util/Filesystem.php` |

##### `Composer\Util\Filesystem::isAbsolutePath` (`./composer/src/Composer/Util/Filesystem.php`)

|     % |  Time | Caller                                             | Location                                                 |
| ----: | ----: | -------------------------------------------------- | -------------------------------------------------------- |
| 50.0% | 2.0ms | `Composer\Util\Filesystem::findShortestPath`       | `./composer/src/Composer/Util/Filesystem.php`            |
| 50.0% | 2.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Util\StreamContextFactory::getTlsDefaults` (`./composer/src/Composer/Util/StreamContextFactory.php`)

|      % |  Time | Caller                                      | Location                                          |
| -----: | ----: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 2.0ms | `Composer\Util\HttpDownloader::__construct` | `./composer/src/Composer/Util/HttpDownloader.php` |

##### `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Caller                                          | Location                                                  |
| -----: | ----: | ----------------------------------------------- | --------------------------------------------------------- |
| 100.0% | 2.0ms | `Composer\Command\DumpAutoloadCommand::execute` | `./composer/src/Composer/Command/DumpAutoloadCommand.php` |

##### `(file scope)` (`./composer/src/Composer/Command/InstallCommand.php`)

|      % |  Time | Caller        | Location                                         |
| -----: | ----: | ------------- | ------------------------------------------------ |
| 100.0% | 1.0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`)

|      % |  Time | Caller                     | Location                              |
| -----: | ----: | -------------------------- | ------------------------------------- |
| 100.0% | 1.0ms | `Composer\Factory::create` | `./composer/src/Composer/Factory.php` |

##### `(file scope)` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`)

|      % |  Time | Caller        | Location                                         |
| -----: | ----: | ------------- | ------------------------------------------------ |
| 100.0% | 1.0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `(file scope)` (`./composer/src/Composer/Repository/PlatformRepository.php`)

|      % |  Time | Caller        | Location                                         |
| -----: | ----: | ------------- | ------------------------------------------------ |
| 100.0% | 1.0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `(file scope)` (`./composer/src/Composer/Repository/ComposerRepository.php`)

|      % |  Time | Caller        | Location                                         |
| -----: | ----: | ------------- | ------------------------------------------------ |
| 100.0% | 1.0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Repository\RepositoryManager::createRepository` (`./composer/src/Composer/Repository/RepositoryManager.php`)

|      % |  Time | Caller                                               | Location                                                   |
| -----: | ----: | ---------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 1.0ms | `Composer\Repository\RepositoryFactory::createRepos` | `./composer/src/Composer/Repository/RepositoryFactory.php` |

##### `(file scope)` (`./composer/src/Composer/Downloader/GitDownloader.php`)

|      % |  Time | Caller        | Location                                         |
| -----: | ----: | ------------- | ------------------------------------------------ |
| 100.0% | 1.0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `(file scope)` (`./composer/src/Composer/Downloader/ArchiveDownloader.php`)

|      % |  Time | Caller        | Location                                         |
| -----: | ----: | ------------- | ------------------------------------------------ |
| 100.0% | 1.0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `(file scope)` (`./composer/src/Composer/Package/Archiver/PharArchiver.php`)

|      % |  Time | Caller        | Location                                         |
| -----: | ----: | ------------- | ------------------------------------------------ |
| 100.0% | 1.0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)

|      % |  Time | Caller                                           | Location                                                |
| -----: | ----: | ------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 1.0ms | `Symfony\Component\Console\Command\Command::run` | `./composer/vendor/symfony/console/Command/Command.php` |

### Total time

Functions with the most time spent within the function and its callees.

|      % |    Time | Function                                                  | Location                                                                   |
| -----: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 100.0% |   3.94s | `(file scope)`                                            | `./profile.php`                                                            |
|  99.9% |   3.94s | `Symfony\Component\Console\Application::run`              | `./composer/vendor/symfony/console/Application.php`                        |
|  99.9% |   3.94s | `Composer\Console\Application::run`                       | `./composer/src/Composer/Console/Application.php`                          |
|  99.5% |   3.92s | `Composer\Console\Application::doRun`                     | `./composer/src/Composer/Console/Application.php`                          |
|  92.7% |   3.66s | `Symfony\Component\Console\Application::doRun`            | `./composer/vendor/symfony/console/Application.php`                        |
|  92.6% |   3.65s | `Symfony\Component\Console\Command\Command::run`          | `./composer/vendor/symfony/console/Command/Command.php`                    |
|  92.6% |   3.65s | `Symfony\Component\Console\Application::doRunCommand`     | `./composer/vendor/symfony/console/Application.php`                        |
|  74.1% |   2.92s | `Composer\Command\DumpAutoloadCommand::execute`           | `./composer/src/Composer/Command/DumpAutoloadCommand.php`                  |
|  74.0% |   2.92s | `Composer\Autoload\AutoloadGenerator::dump`               | `./composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  70.1% |   2.77s | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  63.4% |   2.50s | `Composer\ClassMapGenerator\PhpFileParser::findClasses`   | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
|  41.8% |   1.65s | `Composer\ClassMapGenerator\PhpFileCleaner::clean`        | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  25.9% |   1.02s | `Composer\ClassMapGenerator\PhpFileCleaner::match`        | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  23.5% | 928.0ms | `Composer\Pcre\Preg::isMatchStrictGroups`                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  20.2% | 796.0ms | `Composer\Pcre\Preg::matchStrictGroups`                   | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  18.6% | 732.0ms | `Composer\Factory::createComposer`                        | `./composer/src/Composer/Factory.php`                                      |
|  18.6% | 732.0ms | `Composer\Factory::create`                                | `./composer/src/Composer/Factory.php`                                      |
|  18.6% | 732.0ms | `Composer\Console\Application::getComposer`               | `./composer/src/Composer/Console/Application.php`                          |
|  18.6% | 732.0ms | `Composer\Command\BaseCommand::tryComposer`               | `./composer/src/Composer/Command/BaseCommand.php`                          |
|  18.6% | 732.0ms | `Composer\Command\BaseCommand::initialize`                | `./composer/src/Composer/Command/BaseCommand.php`                          |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|     % |    Time | Function                                                  | Location                                                                   |
| ----: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 99.9% |   3.94s | `Symfony\Component\Console\Application::run`              | `./composer/vendor/symfony/console/Application.php`                        |
| 92.7% |   3.66s | `Symfony\Component\Console\Application::doRun`            | `./composer/vendor/symfony/console/Application.php`                        |
| 92.6% |   3.65s | `Symfony\Component\Console\Command\Command::run`          | `./composer/vendor/symfony/console/Command/Command.php`                    |
| 92.6% |   3.65s | `Symfony\Component\Console\Application::doRunCommand`     | `./composer/vendor/symfony/console/Application.php`                        |
| 70.1% |   2.77s | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
| 63.4% |   2.50s | `Composer\ClassMapGenerator\PhpFileParser::findClasses`   | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 41.8% |   1.65s | `Composer\ClassMapGenerator\PhpFileCleaner::clean`        | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| 25.9% |   1.02s | `Composer\ClassMapGenerator\PhpFileCleaner::match`        | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| 23.5% | 928.0ms | `Composer\Pcre\Preg::isMatchStrictGroups`                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
| 20.2% | 796.0ms | `Composer\Pcre\Preg::matchStrictGroups`                   | `./composer/vendor/composer/pcre/src/Preg.php`                             |
| 17.4% | 687.0ms | `Symfony\Component\Process\Process::run`                  | `./composer/vendor/symfony/process/Process.php`                            |
| 16.2% | 639.0ms | `Symfony\Component\Process\Process::wait`                 | `./composer/vendor/symfony/process/Process.php`                            |
| 16.0% | 632.0ms | `Symfony\Component\Process\Process::readPipes`            | `./composer/vendor/symfony/process/Process.php`                            |
| 16.0% | 631.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` | `./composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 13.6% | 537.0ms | `Composer\Pcre\Preg::match`                               | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  6.7% | 264.0ms | `Composer\Pcre\Preg::pregMatch`                           | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  4.9% | 195.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`   | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  4.5% | 179.0ms | `Composer\Pcre\Preg::matchAll`                            | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.7% | 144.0ms | `Composer\Pcre\Preg::matchAllStrictGroups`                | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.3% | 130.0ms | `Composer\Pcre\Preg::enforceNonNullMatches`               | `./composer/vendor/composer/pcre/src/Preg.php`                             |

##### Ours

|      % |    Time | Function                                                      | Location                                                       |
| -----: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------- |
| 100.0% |   3.94s | `(file scope)`                                                | `./profile.php`                                                |
|  99.9% |   3.94s | `Composer\Console\Application::run`                           | `./composer/src/Composer/Console/Application.php`              |
|  99.5% |   3.92s | `Composer\Console\Application::doRun`                         | `./composer/src/Composer/Console/Application.php`              |
|  74.1% |   2.92s | `Composer\Command\DumpAutoloadCommand::execute`               | `./composer/src/Composer/Command/DumpAutoloadCommand.php`      |
|  74.0% |   2.92s | `Composer\Autoload\AutoloadGenerator::dump`                   | `./composer/src/Composer/Autoload/AutoloadGenerator.php`       |
|  18.6% | 732.0ms | `Composer\Factory::createComposer`                            | `./composer/src/Composer/Factory.php`                          |
|  18.6% | 732.0ms | `Composer\Factory::create`                                    | `./composer/src/Composer/Factory.php`                          |
|  18.6% | 732.0ms | `Composer\Console\Application::getComposer`                   | `./composer/src/Composer/Console/Application.php`              |
|  18.6% | 732.0ms | `Composer\Command\BaseCommand::tryComposer`                   | `./composer/src/Composer/Command/BaseCommand.php`              |
|  18.6% | 732.0ms | `Composer\Command\BaseCommand::initialize`                    | `./composer/src/Composer/Command/BaseCommand.php`              |
|  17.7% | 697.0ms | `Composer\Package\Loader\RootPackageLoader::load`             | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |
|  17.5% | 692.0ms | `Composer\Util\ProcessExecutor::doExecute`                    | `./composer/src/Composer/Util/ProcessExecutor.php`             |
|  17.5% | 692.0ms | `Composer\Util\ProcessExecutor::execute`                      | `./composer/src/Composer/Util/ProcessExecutor.php`             |
|  17.5% | 692.0ms | `Composer\Package\Version\VersionGuesser::guessVersion`       | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |
|  17.5% | 690.0ms | `Composer\Util\ProcessExecutor::runProcess`                   | `./composer/src/Composer/Util/ProcessExecutor.php`             |
|  11.6% | 458.0ms | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |
|   6.3% | 249.0ms | `Composer\Util\Silencer::call`                                | `./composer/src/Composer/Util/Silencer.php`                    |
|   3.7% | 145.0ms | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |
|   3.0% | 120.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode`            | `./composer/src/Composer/Autoload/AutoloadGenerator.php`       |
|   3.0% | 118.0ms | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`)

|      % |  Time | Caller                              | Location                                          |
| -----: | ----: | ----------------------------------- | ------------------------------------------------- |
| 100.0% | 3.94s | `Composer\Console\Application::run` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`)

|      % |  Time | Caller         | Location        |
| -----: | ----: | -------------- | --------------- |
| 100.0% | 3.94s | `(file scope)` | `./profile.php` |

##### `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)

|      % |  Time | Caller                                       | Location                                            |
| -----: | ----: | -------------------------------------------- | --------------------------------------------------- |
| 100.0% | 3.92s | `Symfony\Component\Console\Application::run` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Application::doRun` (`./composer/vendor/symfony/console/Application.php`)

|      % |  Time | Caller                                | Location                                          |
| -----: | ----: | ------------------------------------- | ------------------------------------------------- |
| 100.0% | 3.66s | `Composer\Console\Application::doRun` | `./composer/src/Composer/Console/Application.php` |

##### `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`)

|      % |  Time | Caller                                                | Location                                            |
| -----: | ----: | ----------------------------------------------------- | --------------------------------------------------- |
| 100.0% | 3.65s | `Symfony\Component\Console\Application::doRunCommand` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`)

|      % |  Time | Caller                                         | Location                                            |
| -----: | ----: | ---------------------------------------------- | --------------------------------------------------- |
| 100.0% | 3.65s | `Symfony\Component\Console\Application::doRun` | `./composer/vendor/symfony/console/Application.php` |

##### `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)

|      % |  Time | Caller                                           | Location                                                |
| -----: | ----: | ------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 2.92s | `Symfony\Component\Console\Command\Command::run` | `./composer/vendor/symfony/console/Command/Command.php` |

##### `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Caller                                          | Location                                                  |
| -----: | ----: | ----------------------------------------------- | --------------------------------------------------------- |
| 100.0% | 2.92s | `Composer\Command\DumpAutoloadCommand::execute` | `./composer/src/Composer/Command/DumpAutoloadCommand.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|      % |  Time | Caller                                      | Location                                                 |
| -----: | ----: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 2.77s | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

|      % |  Time | Caller                                                    | Location                                                                   |
| -----: | ----: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 100.0% | 2.50s | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |  Time | Caller                                                  | Location                                                               |
| -----: | ----: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% | 1.65s | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|     % |  Time | Caller                                                   | Location                                                                |
| ----: | ----: | -------------------------------------------------------- | ----------------------------------------------------------------------- |
| 99.8% | 1.02s | `Composer\ClassMapGenerator\PhpFileCleaner::clean`       | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  0.2% | 2.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Caller                                                        | Location                                                                   |
| ----: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 97.4% | 904.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match`            | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  2.2% |  20.0ms | `Composer\Util\Filesystem::normalizePath`                     | `./composer/src/Composer/Util/Filesystem.php`                              |
|  0.4% |   4.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Caller                                    | Location                                       |
| -----: | ------: | ----------------------------------------- | ---------------------------------------------- |
| 100.0% | 796.0ms | `Composer\Pcre\Preg::isMatchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`)

|      % |    Time | Caller                     | Location                              |
| -----: | ------: | -------------------------- | ------------------------------------- |
| 100.0% | 732.0ms | `Composer\Factory::create` | `./composer/src/Composer/Factory.php` |

##### `Composer\Factory::create` (`./composer/src/Composer/Factory.php`)

|      % |    Time | Caller                                      | Location                                          |
| -----: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 732.0ms | `Composer\Console\Application::getComposer` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`)

|      % |    Time | Caller                                      | Location                                          |
| -----: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 732.0ms | `Composer\Command\BaseCommand::tryComposer` | `./composer/src/Composer/Command/BaseCommand.php` |

##### `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`)

|      % |    Time | Caller                                     | Location                                          |
| -----: | ------: | ------------------------------------------ | ------------------------------------------------- |
| 100.0% | 732.0ms | `Composer\Command\BaseCommand::initialize` | `./composer/src/Composer/Command/BaseCommand.php` |

##### `Composer\Command\BaseCommand::initialize` (`./composer/src/Composer/Command/BaseCommand.php`)

|      % |    Time | Caller                                           | Location                                                |
| -----: | ------: | ------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 732.0ms | `Symfony\Component\Console\Command\Command::run` | `./composer/vendor/symfony/console/Command/Command.php` |

##### `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`)

|      % |    Time | Caller                             | Location                              |
| -----: | ------: | ---------------------------------- | ------------------------------------- |
| 100.0% | 697.0ms | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `Composer\Util\ProcessExecutor::doExecute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|      % |    Time | Caller                                   | Location                                           |
| -----: | ------: | ---------------------------------------- | -------------------------------------------------- |
| 100.0% | 692.0ms | `Composer\Util\ProcessExecutor::execute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Util\ProcessExecutor::execute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|     % |    Time | Caller                                                        | Location                                                     |
| ----: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
| 44.2% | 306.0ms | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
| 21.0% | 145.0ms | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
| 17.1% | 118.0ms | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  8.7% |  60.0ms | `Composer\Package\Version\VersionGuesser::guessHgVersion`     | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  8.1% |  56.0ms | `Composer\Package\Version\VersionGuesser::guessSvnVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Package\Version\VersionGuesser::guessVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Caller                                            | Location                                                       |
| -----: | ------: | ------------------------------------------------- | -------------------------------------------------------------- |
| 100.0% | 692.0ms | `Composer\Package\Loader\RootPackageLoader::load` | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |

##### `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|      % |    Time | Caller                                     | Location                                           |
| -----: | ------: | ------------------------------------------ | -------------------------------------------------- |
| 100.0% | 690.0ms | `Composer\Util\ProcessExecutor::doExecute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Symfony\Component\Process\Process::run` (`./composer/vendor/symfony/process/Process.php`)

|      % |    Time | Caller                                      | Location                                           |
| -----: | ------: | ------------------------------------------- | -------------------------------------------------- |
| 100.0% | 687.0ms | `Composer\Util\ProcessExecutor::runProcess` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Symfony\Component\Process\Process::wait` (`./composer/vendor/symfony/process/Process.php`)

|      % |    Time | Caller                                   | Location                                        |
| -----: | ------: | ---------------------------------------- | ----------------------------------------------- |
| 100.0% | 639.0ms | `Symfony\Component\Process\Process::run` | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`)

|     % |    Time | Caller                                            | Location                                        |
| ----: | ------: | ------------------------------------------------- | ----------------------------------------------- |
| 99.7% | 630.0ms | `Symfony\Component\Process\Process::wait`         | `./composer/vendor/symfony/process/Process.php` |
|  0.3% |   2.0ms | `Symfony\Component\Process\Process::updateStatus` | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`)

|      % |    Time | Caller                                         | Location                                        |
| -----: | ------: | ---------------------------------------------- | ----------------------------------------------- |
| 100.0% | 631.0ms | `Symfony\Component\Process\Process::readPipes` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Caller                                  | Location                                       |
| ----: | ------: | --------------------------------------- | ---------------------------------------------- |
| 96.6% | 519.0ms | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |
|  3.4% |  18.0ms | `Composer\Pcre\Preg::isMatch`           | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Package\Version\VersionGuesser::guessGitVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Caller                                                  | Location                                                     |
| -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 458.0ms | `Composer\Package\Version\VersionGuesser::guessVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Caller                      | Location                                       |
| -----: | ------: | --------------------------- | ---------------------------------------------- |
| 100.0% | 264.0ms | `Composer\Pcre\Preg::match` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`)

|     % |    Time | Caller                                                | Location                                          |
| ----: | ------: | ----------------------------------------------------- | ------------------------------------------------- |
| 98.8% | 246.0ms | `Composer\Console\Application::doRun`                 | `./composer/src/Composer/Console/Application.php` |
|  0.8% |   2.0ms | `Composer\Util\Filesystem::filePutContentsIfModified` | `./composer/src/Composer/Util/Filesystem.php`     |
|  0.4% |   1.0ms | `Composer\Factory::getHomeDir`                        | `./composer/src/Composer/Factory.php`             |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Caller                                             | Location                                                                |
| -----: | ------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% | 195.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Caller                                                  | Location                                                               |
| ----: | ------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| 78.8% | 141.0ms | `Composer\Pcre\Preg::matchAllStrictGroups`              | `./composer/vendor/composer/pcre/src/Preg.php`                         |
| 21.2% |  38.0ms | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Caller                                                     | Location                                                     |
| -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 145.0ms | `Composer\Package\Version\VersionGuesser::guessGitVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Pcre\Preg::matchAllStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Caller                                                  | Location                                                               |
| -----: | ------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% | 144.0ms | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\Pcre\Preg::enforceNonNullMatches` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Caller                                  | Location                                       |
| -----: | ------: | --------------------------------------- | ---------------------------------------------- |
| 100.0% | 130.0ms | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |    Time | Caller                                      | Location                                                 |
| -----: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 120.0ms | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Caller                                                  | Location                                                     |
| -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 118.0ms | `Composer\Package\Version\VersionGuesser::guessVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(file scope)` (`./profile.php`)

|     % |  Time | Callee                                      | Location                                          |
| ----: | ----: | ------------------------------------------- | ------------------------------------------------- |
| 99.9% | 3.94s | `Composer\Console\Application::run`         | `./composer/src/Composer/Console/Application.php` |
|  0.1% | 2.0ms | `Composer\Console\Application::__construct` | `./composer/src/Composer/Console/Application.php` |
| <0.1% | 1.0ms | `(file scope)`                              | `./composer/src/bootstrap.php`                    |
| <0.1% | 1.0ms | `Composer\Autoload\ClassLoader::loadClass`  | `./composer/vendor/composer/ClassLoader.php`      |

##### `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`)

|     % |  Time | Callee                                               | Location                                            |
| ----: | ----: | ---------------------------------------------------- | --------------------------------------------------- |
| 99.6% | 3.92s | `Composer\Console\Application::doRun`                | `./composer/src/Composer/Console/Application.php`   |
|  0.2% | 9.0ms | `Symfony\Component\Console\Terminal::getHeight`      | `./composer/vendor/symfony/console/Terminal.php`    |
|  0.2% | 7.0ms | `Symfony\Component\Console\Terminal::getWidth`       | `./composer/vendor/symfony/console/Terminal.php`    |
| <0.1% | 1.0ms | `Symfony\Component\Console\Application::configureIO` | `./composer/vendor/symfony/console/Application.php` |

##### `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`)

|      % |  Time | Callee                                       | Location                                            |
| -----: | ----: | -------------------------------------------- | --------------------------------------------------- |
| 100.0% | 3.94s | `Symfony\Component\Console\Application::run` | `./composer/vendor/symfony/console/Application.php` |

##### `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)

|     % |    Time | Callee                                         | Location                                            |
| ----: | ------: | ---------------------------------------------- | --------------------------------------------------- |
| 93.2% |   3.66s | `Symfony\Component\Console\Application::doRun` | `./composer/vendor/symfony/console/Application.php` |
|  6.3% | 246.0ms | `Composer\Util\Silencer::call`                 | `./composer/src/Composer/Util/Silencer.php`         |
|  0.4% |  16.0ms | `Symfony\Component\Console\Application::find`  | `./composer/vendor/symfony/console/Application.php` |
|  0.1% |   2.0ms | `Composer\Autoload\ClassLoader::loadClass`     | `./composer/vendor/composer/ClassLoader.php`        |
| <0.1% |   1.0ms | `Composer\Util\Filesystem::isReadable`         | `./composer/src/Composer/Util/Filesystem.php`       |

##### `Symfony\Component\Console\Application::doRun` (`./composer/vendor/symfony/console/Application.php`)

|     % |  Time | Callee                                                 | Location                                            |
| ----: | ----: | ------------------------------------------------------ | --------------------------------------------------- |
| 99.9% | 3.65s | `Symfony\Component\Console\Application::doRunCommand`  | `./composer/vendor/symfony/console/Application.php` |
|  0.1% | 2.0ms | `Symfony\Component\Console\Application::getDefinition` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`)

|     % |    Time | Callee                                          | Location                                                  |
| ----: | ------: | ----------------------------------------------- | --------------------------------------------------------- |
| 80.0% |   2.92s | `Composer\Command\DumpAutoloadCommand::execute` | `./composer/src/Composer/Command/DumpAutoloadCommand.php` |
| 20.0% | 732.0ms | `Composer\Command\BaseCommand::initialize`      | `./composer/src/Composer/Command/BaseCommand.php`         |

##### `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`)

|      % |  Time | Callee                                           | Location                                                |
| -----: | ----: | ------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 3.65s | `Symfony\Component\Console\Command\Command::run` | `./composer/vendor/symfony/console/Command/Command.php` |

##### `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)

|     % |  Time | Callee                                             | Location                                                 |
| ----: | ----: | -------------------------------------------------- | -------------------------------------------------------- |
| 99.9% | 2.92s | `Composer\Autoload\AutoloadGenerator::dump`        | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |
| <0.1% | 1.0ms | `Symfony\Component\Console\Input\Input::getOption` | `./composer/vendor/symfony/console/Input/Input.php`      |

##### `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|     % |    Time | Callee                                                    | Location                                                                   |
| ----: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 94.7% |   2.77s | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  4.1% | 120.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode`        | `./composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  0.7% |  20.0ms | `Composer\Autoload\AutoloadGenerator::getStaticFile`      | `./composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  0.1% |   4.0ms | `Composer\Util\Filesystem::safeCopy`                      | `./composer/src/Composer/Util/Filesystem.php`                              |
|  0.1% |   3.0ms | `Composer\Util\Filesystem::filePutContentsIfModified`     | `./composer/src/Composer/Util/Filesystem.php`                              |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|     % |   Time | Callee                                                                          | Location                                                                       |
| ----: | -----: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 90.4% |  2.50s | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                         | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`         |
|  2.9% | 79.0ms | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|  2.0% | 55.0ms | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|  0.9% | 25.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`                   | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`     |
|  0.4% | 11.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current`         | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`     |

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

|     % |    Time | Callee                                             | Location                                                                |
| ----: | ------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| 65.9% |   1.65s | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  5.8% | 144.0ms | `Composer\Pcre\Preg::matchAllStrictGroups`         | `./composer/vendor/composer/pcre/src/Preg.php`                          |
|  1.5% |  38.0ms | `Composer\Pcre\Preg::matchAll`                     | `./composer/vendor/composer/pcre/src/Preg.php`                          |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|     % |    Time | Callee                                                   | Location                                                                |
| ----: | ------: | -------------------------------------------------------- | ----------------------------------------------------------------------- |
| 61.8% |   1.02s | `Composer\ClassMapGenerator\PhpFileCleaner::match`       | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
| 11.8% | 195.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`  | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  1.3% |  21.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  0.2% |   4.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipToPhp`   | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  0.1% |   1.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::peek`        | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|     % |    Time | Callee                                    | Location                                       |
| ----: | ------: | ----------------------------------------- | ---------------------------------------------- |
| 88.6% | 904.0ms | `Composer\Pcre\Preg::isMatchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Callee                                  | Location                                       |
| ----: | ------: | --------------------------------------- | ---------------------------------------------- |
| 85.8% | 796.0ms | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Callee                                      | Location                                       |
| ----: | ------: | ------------------------------------------- | ---------------------------------------------- |
| 65.2% | 519.0ms | `Composer\Pcre\Preg::match`                 | `./composer/vendor/composer/pcre/src/Preg.php` |
| 16.3% | 130.0ms | `Composer\Pcre\Preg::enforceNonNullMatches` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`)

|     % |    Time | Callee                                            | Location                                                       |
| ----: | ------: | ------------------------------------------------- | -------------------------------------------------------------- |
| 95.2% | 697.0ms | `Composer\Package\Loader\RootPackageLoader::load` | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |
|  1.9% |  14.0ms | `Composer\Json\JsonFile::validateSchema`          | `./composer/src/Composer/Json/JsonFile.php`                    |
|  0.7% |   5.0ms | `Composer\Factory::createHttpDownloader`          | `./composer/src/Composer/Factory.php`                          |
|  0.5% |   4.0ms | `Composer\Autoload\ClassLoader::loadClass`        | `./composer/vendor/composer/ClassLoader.php`                   |
|  0.3% |   2.0ms | `Composer\Factory::createDownloadManager`         | `./composer/src/Composer/Factory.php`                          |

##### `Composer\Factory::create` (`./composer/src/Composer/Factory.php`)

|      % |    Time | Callee                             | Location                              |
| -----: | ------: | ---------------------------------- | ------------------------------------- |
| 100.0% | 732.0ms | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`)

|      % |    Time | Callee                     | Location                              |
| -----: | ------: | -------------------------- | ------------------------------------- |
| 100.0% | 732.0ms | `Composer\Factory::create` | `./composer/src/Composer/Factory.php` |

##### `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`)

|      % |    Time | Callee                                      | Location                                          |
| -----: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 732.0ms | `Composer\Console\Application::getComposer` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Command\BaseCommand::initialize` (`./composer/src/Composer/Command/BaseCommand.php`)

|      % |    Time | Callee                                      | Location                                          |
| -----: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 732.0ms | `Composer\Command\BaseCommand::tryComposer` | `./composer/src/Composer/Command/BaseCommand.php` |

##### `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`)

|     % |    Time | Callee                                                                 | Location                                                           |
| ----: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 99.3% | 692.0ms | `Composer\Package\Version\VersionGuesser::guessVersion`                | `./composer/src/Composer/Package/Version/VersionGuesser.php`       |
|  0.4% |   3.0ms | `Composer\Repository\RepositoryFactory::defaultRepos`                  | `./composer/src/Composer/Repository/RepositoryFactory.php`         |
|  0.1% |   1.0ms | `Composer\Package\Loader\ValidatingArrayLoader::hasPackageNamingError` | `./composer/src/Composer/Package/Loader/ValidatingArrayLoader.php` |
|  0.1% |   1.0ms | `Composer\Package\Loader\ArrayLoader::load`                            | `./composer/src/Composer/Package/Loader/ArrayLoader.php`           |

##### `Composer\Util\ProcessExecutor::doExecute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|     % |    Time | Callee                                                  | Location                                                |
| ----: | ------: | ------------------------------------------------------- | ------------------------------------------------------- |
| 99.7% | 690.0ms | `Composer\Util\ProcessExecutor::runProcess`             | `./composer/src/Composer/Util/ProcessExecutor.php`      |
|  0.1% |   1.0ms | `Symfony\Component\Process\Pipes\UnixPipes::__destruct` | `./composer/vendor/symfony/process/Pipes/UnixPipes.php` |
|  0.1% |   1.0ms | `Symfony\Component\Process\Process::__destruct`         | `./composer/vendor/symfony/process/Process.php`         |

##### `Composer\Util\ProcessExecutor::execute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|      % |    Time | Callee                                     | Location                                           |
| -----: | ------: | ------------------------------------------ | -------------------------------------------------- |
| 100.0% | 692.0ms | `Composer\Util\ProcessExecutor::doExecute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Package\Version\VersionGuesser::guessVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|     % |    Time | Callee                                                        | Location                                                     |
| ----: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
| 66.2% | 458.0ms | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
| 17.1% | 118.0ms | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  8.7% |  60.0ms | `Composer\Package\Version\VersionGuesser::guessHgVersion`     | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  8.1% |  56.0ms | `Composer\Package\Version\VersionGuesser::guessSvnVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|     % |    Time | Callee                                     | Location                                                      |
| ----: | ------: | ------------------------------------------ | ------------------------------------------------------------- |
| 99.6% | 687.0ms | `Symfony\Component\Process\Process::run`   | `./composer/vendor/symfony/process/Process.php`               |
|  0.3% |   2.0ms | `Seld\Signal\SignalHandler::create`        | `./composer/vendor/seld/signal-handler/src/SignalHandler.php` |
|  0.1% |   1.0ms | `Composer\Autoload\ClassLoader::loadClass` | `./composer/vendor/composer/ClassLoader.php`                  |

##### `Symfony\Component\Process\Process::run` (`./composer/vendor/symfony/process/Process.php`)

|     % |    Time | Callee                                     | Location                                        |
| ----: | ------: | ------------------------------------------ | ----------------------------------------------- |
| 93.0% | 639.0ms | `Symfony\Component\Process\Process::wait`  | `./composer/vendor/symfony/process/Process.php` |
|  7.0% |  48.0ms | `Symfony\Component\Process\Process::start` | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::wait` (`./composer/vendor/symfony/process/Process.php`)

|     % |    Time | Callee                                            | Location                                        |
| ----: | ------: | ------------------------------------------------- | ----------------------------------------------- |
| 98.6% | 630.0ms | `Symfony\Component\Process\Process::readPipes`    | `./composer/vendor/symfony/process/Process.php` |
|  0.5% |   3.0ms | `Symfony\Component\Process\Process::isRunning`    | `./composer/vendor/symfony/process/Process.php` |
|  0.2% |   1.0ms | `Symfony\Component\Process\Process::checkTimeout` | `./composer/vendor/symfony/process/Process.php` |
|  0.2% |   1.0ms | `Symfony\Component\Process\Process::updateStatus` | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`)

|     % |    Time | Callee                                                    | Location                                                |
| ----: | ------: | --------------------------------------------------------- | ------------------------------------------------------- |
| 99.8% | 631.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` | `./composer/vendor/symfony/process/Pipes/UnixPipes.php` |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`)

|    % |  Time | Callee                                                   | Location                                                    |
| ---: | ----: | -------------------------------------------------------- | ----------------------------------------------------------- |
| 0.2% | 1.0ms | `Symfony\Component\Process\Pipes\AbstractPipes::unblock` | `./composer/vendor/symfony/process/Pipes/AbstractPipes.php` |
| 0.2% | 1.0ms | `Symfony\Component\Process\Pipes\AbstractPipes::write`   | `./composer/vendor/symfony/process/Pipes/AbstractPipes.php` |

##### `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Callee                                   | Location                                       |
| ----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 49.2% | 264.0ms | `Composer\Pcre\Preg::pregMatch`          | `./composer/vendor/composer/pcre/src/Preg.php` |
| 19.2% | 103.0ms | `Composer\Pcre\Preg::checkOffsetCapture` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Package\Version\VersionGuesser::guessGitVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|     % |    Time | Callee                                                        | Location                                                     |
| ----: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
| 66.8% | 306.0ms | `Composer\Util\ProcessExecutor::execute`                      | `./composer/src/Composer/Util/ProcessExecutor.php`           |
| 31.7% | 145.0ms | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  1.5% |   7.0ms | `Composer\Util\Git::getNoShowSignatureFlag`                   | `./composer/src/Composer/Util/Git.php`                       |

##### `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`)

|    % |   Time | Callee        | Location                                              |
| ---: | -----: | ------------- | ----------------------------------------------------- |
| 6.0% | 15.0ms | `(anonymous)` | `./composer/src/Composer/Console/Application.php:349` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|    % |  Time | Callee                                            | Location                                                                |
| ---: | ----: | ------------------------------------------------- | ----------------------------------------------------------------------- |
| 0.5% | 1.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::peek` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Callee                                   | Location                                           |
| -----: | ------: | ---------------------------------------- | -------------------------------------------------- |
| 100.0% | 145.0ms | `Composer\Util\ProcessExecutor::execute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Pcre\Preg::matchAllStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Callee                                       | Location                                       |
| ----: | ------: | -------------------------------------------- | ---------------------------------------------- |
| 97.9% | 141.0ms | `Composer\Pcre\Preg::matchAll`               | `./composer/vendor/composer/pcre/src/Preg.php` |
|  0.7% |   1.0ms | `Composer\Pcre\Preg::enforceNonNullMatchAll` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|     % |   Time | Callee                                       | Location                                      |
| ----: | -----: | -------------------------------------------- | --------------------------------------------- |
| 61.7% | 74.0ms | `Composer\Util\Filesystem::findShortestPath` | `./composer/src/Composer/Util/Filesystem.php` |
| 26.7% | 32.0ms | `Composer\Util\Filesystem::normalizePath`    | `./composer/src/Composer/Util/Filesystem.php` |
|  1.7% |  2.0ms | `Composer\Util\Filesystem::isAbsolutePath`   | `./composer/src/Composer/Util/Filesystem.php` |

##### `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Callee                                   | Location                                           |
| -----: | ------: | ---------------------------------------- | -------------------------------------------------- |
| 100.0% | 118.0ms | `Composer\Util\ProcessExecutor::execute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

Common call stack: `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`) ← `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`) ← `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`) ← `(file scope)` (`./profile.php`)

|     % |    Time | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17.0% | 671.0ms | `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 10.3% | 408.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  7.1% | 279.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessGitVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                 |
|  6.3% | 248.0ms | `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                    |
|  5.9% | 231.0ms | `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  4.9% | 194.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  4.1% | 163.0ms | `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                      |
|  3.6% | 141.0ms | `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchAllStrictGroups` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  3.5% | 140.0ms | `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  3.5% | 138.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessGitVersion` ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` |
|  3.2% | 127.0ms | `Composer\Pcre\Preg::enforceNonNullMatches` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                      |
|  3.2% | 126.0ms | `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.9% | 116.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  2.5% |  98.0ms | `Composer\Pcre\Preg::checkOffsetCapture` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                           |
|  2.5% |  97.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                              |
|  2.0% |  77.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`) ← `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren` ← `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` (`./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.6% |  62.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.4% |  55.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`) ← `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` (`./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.4% |  54.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessSvnVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                 |
|  1.3% |  53.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessHgVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                  |

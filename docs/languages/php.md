# PHP

PHP profiling uses the [Excimer](https://github.com/wikimedia/php-excimer)
extension, a low overhead sampling profiler that works on Linux and macOS and
natively writes **Speedscope** (via `getSpeedscopeData()`). On Linux,
[phpspy](https://github.com/adsr/phpspy) is an alternative that also emits
Speedscope, but it doesn't support macOS.

Excimer samples the running PHP process from a PHP-controlled timer, so you
start and stop it from within the program (or from a prepended bootstrap
script).

## CPU profiling

Samples CPU time (`EXCIMER_CPU`). Useful for finding CPU hot spots.

> Note: `EXCIMER_CPU` relies on a CPU-time interval timer that isn't available
> on every platform (e.g. some macOS builds expose only `EXCIMER_REAL`). Use
> wall-clock profiling there.

```php
<?php
$prof = new ExcimerProfiler();
$prof->setEventType(EXCIMER_CPU);
$prof->setPeriod(0.001); // seconds
$prof->start();

// Code to profile...

$prof->stop();
file_put_contents('cpu.speedscope.json',
    json_encode($prof->getLog()->getSpeedscopeData()));
```

## Wall-clock profiling

Samples wall-clock time (`EXCIMER_REAL`), including time spent waiting on I/O.
Useful for latency analysis and the default on platforms without `EXCIMER_CPU`.

```php
<?php
$prof = new ExcimerProfiler();
$prof->setEventType(EXCIMER_REAL);
$prof->setPeriod(0.001);
$prof->start();

// Code to profile...

$prof->stop();
file_put_contents('wall.speedscope.json',
    json_encode($prof->getLog()->getSpeedscopeData()));
```

## Profiling an existing program

To profile a program you don't want to edit (for example Composer), point
`auto_prepend_file` at a bootstrap script that starts the profiler and writes
the result on shutdown:

```php
<?php // prepend.php
$prof = new ExcimerProfiler();
$prof->setEventType(EXCIMER_REAL);
$prof->setPeriod(0.001);
$prof->start();
register_shutdown_function(function () use ($prof) {
    $prof->stop();
    file_put_contents('profile.speedscope.json',
        json_encode($prof->getLog()->getSpeedscopeData()));
});
```

```sh
php -d auto_prepend_file=prepend.php composer.phar dump-autoload --optimize
```

## API

| Method                          | Description                                           |
| ------------------------------- | ----------------------------------------------------- |
| `setEventType($type)`           | `EXCIMER_REAL` (wall clock) or `EXCIMER_CPU`          |
| `setPeriod($seconds)`           | Sampling interval in seconds (e.g. `0.001` = 1000 Hz) |
| `setMaxDepth($depth)`           | Maximum stack frames per sample                       |
| `start()` / `stop()`            | Begin and end profiling                               |
| `getLog()->getSpeedscopeData()` | The collected profile as Speedscope-format data       |

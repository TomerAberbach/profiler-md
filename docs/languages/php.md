# PHP

PHP profiling uses the [Excimer](https://github.com/wikimedia/php-excimer)
extension. Excimer samples from a PHP-controlled timer, so you start and stop it
within the program or a prepended bootstrap script.

A new `ExcimerProfiler` samples wall-clock time every 0.1 seconds, so the
recipes below set the event type and the period.

## CPU profiling

Periodically samples the call stack. Useful for finding CPU hot spots.

Excimer defines `EXCIMER_CPU` only where POSIX timers provide a CPU clock, so
the constant is undefined on macOS, where Excimer uses kqueue instead. Check
with `defined('EXCIMER_CPU')` and fall back to wall-clock profiling.

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

Samples wall-clock time rather than CPU time, including time threads spend
waiting. Useful for I/O-bound or latency-sensitive code.

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

To profile a program without editing it, point `auto_prepend_file` at a
bootstrap script that starts the profiler and writes the result on shutdown:

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
php -d auto_prepend_file=prepend.php existing_program.phar dump-autoload --optimize
```

## Output formats

`getSpeedscopeData()` writes the sampled time alongside each frame's file, and
`formatCollapsed()` writes sample counts with each frame's file packed into its
name. Prefer speedscope, because a collapsed frame names a method by its
declaring class rather than its file.

```php
file_put_contents('wall.collapsed', $prof->getLog()->formatCollapsed());
```

## API

| Method                          | Description                                           |
| ------------------------------- | ----------------------------------------------------- |
| `setEventType($type)`           | `EXCIMER_REAL` (wall clock) or `EXCIMER_CPU`          |
| `setPeriod($seconds)`           | Sampling interval in seconds (e.g. `0.001` = 1000 Hz) |
| `setMaxDepth($depth)`           | Maximum stack frames per sample                       |
| `start()` / `stop()`            | Begin and end profiling                               |
| `getLog()->getSpeedscopeData()` | The collected profile as Speedscope-format data       |
| `getLog()->formatCollapsed()`   | The collected profile as collapsed stacks             |

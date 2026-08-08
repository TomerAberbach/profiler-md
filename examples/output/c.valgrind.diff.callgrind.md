# Instructions profile diff

Recorded 39,556,676 instructions → 39,558,041 instructions (+1,365 instructions, ~0%).

| Category   | Change |  Delta |      % |            Instructions |
| ---------- | -----: | -----: | -----: | ----------------------: |
| ours       |    ~0% | +1,095 | 100.0% | 39,549,322 → 39,550,417 |
| stdlib     |  +3.7% |   +270 |  <0.1% |           7,299 → 7,569 |
| below main |   0.0% |      0 |  <0.1% |                      55 |

## Hottest functions

### Self instructions

#### Regressions

Functions with the largest increase in instructions recorded directly in the function body, excluding callees.

| Change | Delta |     % |  Instructions | Function                             | Location                                    |
| -----: | ----: | ----: | ------------: | ------------------------------------ | ------------------------------------------- |
| +17.9% |  +291 | <0.1% | 1,629 → 1,920 | `__futex_abstimed_wait_cancelable64` | `./nptl/./nptl/futex-internal.c`            |
| +16.6% |  +229 | <0.1% | 1,378 → 1,607 | `pthread_cond_wait@@GLIBC_2.17`      | `./nptl/./nptl/pthread_cond_wait.c`         |
|  +3.1% |  +120 | <0.1% | 3,828 → 3,948 | `pthread_cond_signal@@GLIBC_2.17`    | `./nptl/./nptl/pthread_cond_signal.c`       |
|  +1.4% |  +120 | <0.1% | 8,390 → 8,510 | `__pthread_mutex_unlock_usercnt`     | `./nptl/./nptl/pthread_mutex_unlock.c`      |
| +25.0% |  +108 | <0.1% |     432 → 540 | `pthread_cond_signal@@GLIBC_2.17`    | `./nptl/./nptl/pthread_cond_common.c`       |
| +20.0% |   +81 | <0.1% |     405 → 486 | `__pthread_mutex_cond_lock`          | `./nptl/../nptl/pthread_mutex_lock.c`       |
|  +8.6% |   +72 | <0.1% |     840 → 912 | `__pthread_enable_asynccancel`       | `./nptl/./nptl/cancellation.c`              |
|  +8.6% |   +66 | <0.1% |     770 → 836 | `__pthread_disable_asynccancel`      | `./nptl/./nptl/cancellation.c`              |
|  +1.9% |   +54 | <0.1% | 2,814 → 2,868 | `__aarch64_cas4_acq`                 | `../../usr/lib/aarch64-linux-gnu/libc.so.6` |
| +20.0% |   +42 | <0.1% |     210 → 252 | `__condvar_confirm_wakeup`           | `./nptl/./nptl/pthread_cond_wait.c`         |
| +20.0% |   +42 | <0.1% |     210 → 252 | `__condvar_dec_grefs`                | `./nptl/./nptl/pthread_cond_wait.c`         |
| +20.0% |   +36 | <0.1% |     180 → 216 | `__aarch64_ldadd4_relax`             | `../../usr/lib/aarch64-linux-gnu/libc.so.6` |
| +20.0% |   +36 | <0.1% |     180 → 216 | `__aarch64_ldadd4_rel`               | `../../usr/lib/aarch64-linux-gnu/libc.so.6` |
| +20.0% |   +24 | <0.1% |     120 → 144 | `__lll_lock_wake`                    | `./nptl/./nptl/lowlevellock.c`              |
| +16.7% |   +21 | <0.1% |     126 → 147 | `_pthread_cleanup_push@@GLIBC_2.34`  | `./nptl/./nptl/cleanup_compat.c`            |
|  +0.9% |   +18 | <0.1% | 1,926 → 1,944 | `__aarch64_swp4_rel`                 | `../../usr/lib/aarch64-linux-gnu/libc.so.6` |
| +16.7% |   +18 | <0.1% |     108 → 126 | `_pthread_cleanup_pop@@GLIBC_2.34`   | `./nptl/./nptl/cleanup_compat.c`            |
| +20.0% |   +18 | <0.1% |      90 → 108 | `__aarch64_ldset4_relax`             | `../../usr/lib/aarch64-linux-gnu/libc.so.6` |
| +20.0% |   +18 | <0.1% |      90 → 108 | `__aarch64_ldset4_rel`               | `../../usr/lib/aarch64-linux-gnu/libc.so.6` |
| +16.7% |   +18 | <0.1% |     108 → 126 | `__aarch64_swp4_acq`                 | `../../usr/lib/aarch64-linux-gnu/libc.so.6` |

#### Improvements

Functions with the largest decrease in instructions recorded directly in the function body, excluding callees.

| Change | Delta |     % |    Instructions | Function   | Location                               |
| -----: | ----: | ----: | --------------: | ---------- | -------------------------------------- |
|  -1.1% |  -125 | <0.1% | 11,871 → 11,746 | `strcmp`   | `./string/../sysdeps/aarch64/strcmp.S` |
|  -3.5% |   -36 | <0.1% |     1,018 → 982 | `POOL_add` | `lib//common/pool.c`                   |

### Total instructions

#### Regressions

Functions with the largest increase in total instructions recorded in the function and all its callees.

| Change |  Delta |     % |      Instructions | Function                        | Location                                       |
| -----: | -----: | ----: | ----------------: | ------------------------------- | ---------------------------------------------- |
|  +0.5% | +1,152 |  0.6% | 218,564 → 219,716 | `UTIL_getFileSizeStat`          | `programs/util.c`                              |
|  +0.5% | +1,102 |  0.6% | 220,775 → 221,877 | `UTIL_stat`                     | `programs/util.c`                              |
|  +0.5% | +1,102 |  0.6% | 220,702 → 221,804 | `FIO_openSrcFile`               | `programs/fileio.c`                            |
|  +0.4% | +1,077 |  0.7% | 258,971 → 260,048 | `UTIL_getFileSize`              | `programs/util.c`                              |
|  +0.5% | +1,077 |  0.6% | 235,197 → 236,274 | `FIO_compressFilename_srcFile`  | `programs/fileio.c`                            |
|  +0.4% | +1,077 |  0.7% | 258,292 → 259,369 | `FIO_createCResources`          | `programs/fileio.c`                            |
|  +0.4% | +1,077 |  0.7% | 258,989 → 260,066 | `FIO_compressFilename`          | `programs/fileio.c`                            |
|  +0.3% | +1,065 |  0.9% | 363,162 → 364,227 | `_dl_start`                     | `./elf/./elf/rtld.c`                           |
|  +0.3% | +1,065 |  0.9% | 363,167 → 364,232 | `(below main)`                  | `./elf/../sysdeps/aarch64/dl-start.S`          |
|  +0.4% | +1,052 |  0.7% | 276,399 → 277,451 | `_dl_init`                      | `./elf/./elf/dl-init.c`                        |
|  +0.4% | +1,052 |  0.7% | 275,376 → 276,428 | `(below main)`                  | `programs/zstd`                                |
|  +0.4% | +1,052 |  0.7% | 282,762 → 283,814 | `_dl_runtime_resolve`           | `./elf/../sysdeps/aarch64/dl-trampoline.S`     |
|  +0.4% | +1,052 |  0.7% | 274,667 → 275,719 | `__libc_start_main@@GLIBC_2.34` | `./csu/../csu/libc-start.c`                    |
|  +0.4% | +1,052 |  0.7% | 273,707 → 274,759 | `main`                          | `programs/zstdcli.c`                           |
|  +0.4% | +1,052 |  0.7% | 268,552 → 269,604 | `FIO_createContext`             | `programs/fileio.c`                            |
|  +0.4% | +1,052 |  0.7% | 270,883 → 271,935 | `FIO_createPreferences`         | `programs/fileio.c`                            |
|  +0.4% | +1,052 |  0.7% | 274,651 → 275,703 | `__cxa_atexit`                  | `./stdlib/./stdlib/cxa_atexit.c`               |
|  +0.4% | +1,052 |  0.7% | 274,648 → 275,700 | `__internal_atexit`             | `./stdlib/./stdlib/cxa_atexit.c`               |
|  +0.4% | +1,052 |  0.7% | 273,770 → 274,822 | `(below main)`                  | `./csu/../sysdeps/nptl/libc_start_call_main.h` |
| +16.9% |   +732 | <0.1% |     4,327 → 5,059 | `pthread_cond_wait@@GLIBC_2.17` | `./nptl/./nptl/pthread_cond_wait.c`            |

#### Improvements

Functions with the largest decrease in total instructions recorded in the function and all its callees.

| Change | Delta |     % |    Instructions | Function   | Location                               |
| -----: | ----: | ----: | --------------: | ---------- | -------------------------------------- |
|  -1.1% |  -125 | <0.1% | 11,871 → 11,746 | `strcmp`   | `./string/../sysdeps/aarch64/strcmp.S` |
|  -1.4% |   -36 | <0.1% |   2,563 → 2,527 | `POOL_add` | `lib//common/pool.c`                   |

import { expect, test } from 'vitest'
import { pythonProfileToMd } from './index.ts'

const makeProfile = (...lines: string[]): string =>
  [
    `         N function calls in 0.000 seconds`,
    ``,
    `   Ordered by: cumulative time`,
    ``,
    `   ncalls  tottime  percall  cumtime  percall filename:lineno(function)`,
    ...lines,
  ].join(`\n`)

test(`pythonProfileToMd renders self and total time from tottime and cumtime`, () => {
  const profile = makeProfile(
    `        1    0.100    0.100    0.300    0.300 /project/src/a.py:1(main)`,
    `        1    0.200    0.200    0.200    0.200 /project/src/b.py:5(work)`,
  )

  const markdown = pythonProfileToMd(profile, { cwd: `/project` })

  expect(markdown).toMatchInlineSnapshot(`
    "# CPU profile

    Took 300ms over 2 samples (150000.0µs per sample).

    | Category |      % |  Time | Samples |
    | -------- | -----: | ----: | ------: |
    | ours     | 100.0% | 300ms |       2 |

    ## Hottest functions

    ### Self time

    Functions ranked by time spent directly in the function body, excluding callees.

    |     % |  Time | Samples | Function | Location   |
    | ----: | ----: | ------: | -------- | ---------- |
    | 66.7% | 200ms |       1 | \`work\`   | src/b.py:5 |
    | 33.3% | 100ms |       1 | \`main\`   | src/a.py:1 |

    ### Total time

    Functions ranked by total time spent in the function and all its callees.

    |      % |  Time | Samples | Function | Location   |
    | -----: | ----: | ------: | -------- | ---------- |
    | 100.0% | 300ms |       1 | \`main\`   | src/a.py:1 |
    |  66.7% | 200ms |       1 | \`work\`   | src/b.py:5 |


    "
  `)
})

test(`pythonProfileToMd categorizes built-ins as native`, () => {
  const profile = makeProfile(
    `        1    0.050    0.050    0.050    0.050 /project/src/a.py:1(run)`,
    `     100    0.020    0.000    0.020    0.000 {built-in method builtins.sorted}`,
    `       1    0.010    0.010    0.010    0.010 {method 'disable' of '_lsprof.Profiler' objects}`,
  )

  const markdown = pythonProfileToMd(profile, { cwd: `/project` })

  // Categories should separate native from user code
  expect(markdown).toContain(`| ours   `)
  expect(markdown).toContain(`| native `)
  // Built-in functions should appear in the output
  expect(markdown).toContain(`built-in method builtins.sorted`)
  // They should be labeled native in location column
  expect(markdown).toContain(`\`<native>\``)
})

test(`pythonProfileToMd handles recursive calls (n/m format)`, () => {
  // "10/3" means 10 total calls / 3 primitive calls; we use total call count
  const profile = makeProfile(
    `     10/3    0.030    0.010    0.030    0.010 /project/src/fib.py:1(fib)`,
  )

  const markdown = pythonProfileToMd(profile, { cwd: `/project` })

  // 10 total calls should be reported as 10 samples
  expect(markdown).toContain(`over 10 samples`)
  expect(markdown).toContain(`fib`)
  expect(markdown).toContain(`src/fib.py:1`)
})

test(`pythonProfileToMd marks site-packages as third-party when configured`, () => {
  const profile = makeProfile(
    `        1    0.050    0.050    0.050    0.050 /project/src/a.py:1(run)`,
    `        1    0.030    0.030    0.030    0.030 /usr/lib/python3/site-packages/requests/api.py:10(get)`,
  )

  const defaultMarkdown = pythonProfileToMd(profile, { cwd: `/project` })
  const thirdPartyMarkdown = pythonProfileToMd(profile, {
    cwd: `/project`,
    isThirdPartyEntry: entry =>
      !!entry.location?.url.pathname.includes(`/site-packages/`),
  })

  // By default, everything is "ours"
  expect(defaultMarkdown).toContain(`| ours   `)
  expect(defaultMarkdown).not.toContain(`third-party`)

  // With the site-packages matcher, requests shows as third-party
  expect(thirdPartyMarkdown).toContain(`| third-party `)
  expect(thirdPartyMarkdown).toContain(`| ours        `)
})

test(`pythonProfileToMd handles module-level code`, () => {
  const profile = makeProfile(
    `        1    0.000    0.000    0.010    0.010 <string>:1(<module>)`,
    `        1    0.010    0.010    0.010    0.010 /project/src/a.py:1(run)`,
  )

  const markdown = pythonProfileToMd(profile, { cwd: `/project` })

  // <string> paths are not absolute so they have no location → shown as native
  expect(markdown).toContain(`\`<module>\``)
  expect(markdown).toContain(`\`run\``)
})

test(`pythonProfileToMd total time reflects cumtime, not tottime`, () => {
  // main calls work: main.tottime=0.01, main.cumtime=0.11 (includes work's 0.10)
  const profile = makeProfile(
    `        1    0.010    0.010    0.110    0.110 /project/src/a.py:1(main)`,
    `        1    0.100    0.100    0.100    0.100 /project/src/b.py:5(work)`,
  )

  const markdown = pythonProfileToMd(profile, { cwd: `/project` })

  const selfIdx = markdown.indexOf(`### Self time`)
  const totalIdx = markdown.indexOf(`### Total time`)
  expect(selfIdx).toBeGreaterThan(-1)
  expect(totalIdx).toBeGreaterThan(selfIdx)

  const selfSection = markdown.slice(selfIdx, totalIdx)
  const totalSection = markdown.slice(totalIdx)

  // In self time: work ranks first (100ms > 10ms)
  const workInSelf = selfSection.indexOf(`work`)
  const mainInSelf = selfSection.indexOf(`main`)
  expect(workInSelf).toBeLessThan(mainInSelf)

  // In total time: main ranks first (cumtime 110ms > 100ms)
  const mainInTotal = totalSection.indexOf(`main`)
  const workInTotal = totalSection.indexOf(`work`)
  expect(mainInTotal).toBeLessThan(workInTotal)
})

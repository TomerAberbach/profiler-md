import { expect, test } from 'vitest'
import { getManPage } from './man.ts'

test(`the synopsis brackets only the optional terms`, () => {
  const page = getManPage(new Date(2026, 0))

  expect(page).toContain(
    String.raw`.SH SYNOPSIS
.B "profiler\-md"
([\fIOPTIONS\fR] [\fIFILE\fR] | [\fIOPTIONS\fR] \fIBASE\fR \fICURRENT\fR | \fB\-\-help\fR [\fITOPIC\fR])
.SH DESCRIPTION`,
  )
})

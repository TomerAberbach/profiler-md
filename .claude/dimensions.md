# Dimensions

A behavior in an input may be a quirk of its _format_, _modality_, _origin_,
some combination of these dimensions, or profiles generally.

Before writing code for it:

1. Enumerate the `(origin, format)` pairs the logic must apply to. Check every
   format each candidate origin emits and every origin that emits each candidate
   format, not just the input at hand

2. From that set of pairs, decide what the behavior is a quirk of, and place the
   logic there:
   - The **format(s)**, across origins → the format's code (e.g. `parse.ts`)
   - The **modality or modalities**, across formats → the modality's (e.g.
     `aggregate.ts`)
   - The **origin(s)**, across formats → the origin's code (e.g.
     `OriginSpec.normalizeStackFrame`); multiple origins observing the same
     runtime share the logic through a helper module (e.g.
     `src/origins/jvm.ts`), never a merged spec
   - Specific **origin-format pairs** → the origin's code, checking the `format`
     param (e.g. in `normalizeStackFrame`)
   - **Profiles generally** → the shared pipeline

The classification is subjective and NOT about writing the logic in the fewest
places. The goal is to avoid:

- Applying logic where it is needless or harmful
- Coupling unrelated formats, modalities, or origins

Considerations that inform the decision:

- **Independent convergence suggests a convention.** When unrelated dimensions
  show the same behavior without deriving it from one another, origins likely
  converge on that convention. Expect more from origins without committed
  inputs, and prefer the broader placement so each new one is already handled

- **Does the logic's correctness depend on knowing the origin or format?** If
  the same bytes mean different things per origin (e.g. a speedscope `line` as
  definition vs. executing line, or a collapsed count as one sample vs.
  eflambe's one microsecond), the logic is origin or format knowledge and
  belongs there. If the rule holds without knowing who emitted the profile,
  encoding it in an origin or format overstates its specificity

- **Harm from over-applying.** Place broadly only when applying in an
  unanticipated scenario is harmless (e.g. the rule removes only pure
  redundancy, or guards on a condition that cannot occur legitimately)

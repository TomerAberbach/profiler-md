# Thread creation profile

Recorded 13 thread creations.

| Category |      % | Thread creations |
| -------- | -----: | ---------------: |
| Unknown  | 100.0% |               13 |

## Call tree

The call paths to the hottest functions by self thread creations, merged into a tree of callers. Each frame shows the thread creations recorded in it and its callees, as a share of the profile and as a value. `[[n frames hidden]]` stands for the callers between two of them, whose share the line above it states. `(n% self across m call paths)` states the self thread creations of a function across every call path to it, where the path drawn to it holds only part.

```
└── 13 thread creations (100.0%) (anonymous)  (100.0% self across 1 call path)
    └── 13 thread creations (100.0%) [[30 frames hidden]]
        └── 13 thread creations (100.0%) (anonymous)
```

## Hottest functions

### Self thread creations

Functions ranked by thread creations recorded directly in the function body, excluding callees.

#### Categories

##### Unknown

|      % | Thread creations | Function      | Location    |
| -----: | ---------------: | ------------- | ----------- |
| 100.0% |               13 | `(anonymous)` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self thread creations. Inlining can make caller attribution imprecise.

##### `(anonymous)` (`<unknown>`)

|      % | Thread creations | Caller        | Location    |
| -----: | ---------------: | ------------- | ----------- |
| 100.0% |               13 | `(anonymous)` | `<unknown>` |

### Total thread creations

Functions ranked by total thread creations recorded in the function and all its callees.

#### Categories

##### Unknown

|      % | Thread creations | Function      | Location    |
| -----: | ---------------: | ------------- | ----------- |
| 100.0% |               13 | `(anonymous)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total thread creations. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`<unknown>`)

|      % | Thread creations | Callee        | Location    |
| -----: | ---------------: | ------------- | ----------- |
| 100.0% |               13 | `(anonymous)` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by thread creations recorded in their leaf frame.

|      % | Thread creations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -----: | ---------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% |               13 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` |

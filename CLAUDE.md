# Overview

`profiler-md` is an TypeScript package that converts performance profiles and
snapshots to human and LLM friendly Markdown. It has both a CLI and a
programmatic API.

# Principles

- Share summarization and formatting logic between profile formats via low
  overhead abstractions
- Don't over abstract or unnecessarily couple based on superficially
  similarities
- Prioritize runtime performance so that large profiles and snapshots are
  processed quickly
- NEVER use more than `O(n)` memory for a profile or snapshot of size `n`

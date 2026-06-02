# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the App

Open `새 폴더/index.html` directly in a browser — no build step or server required. Numbers are generated automatically on load.

## Architecture

Single-file vanilla HTML/CSS/JS app (`새 폴더/index.html`). No dependencies, no bundler, no backend.

**Core logic:**

- `hotNumbers` — hardcoded list of "frequently drawn" numbers (1–45) that receive 5× weight
- `weightedPool` — flat array built at startup; hot numbers appear 5 times, others once
- `getWeightedNumber(excluded)` — samples the pool at random, retrying if the number is already in `excluded`
- `generateLotto()` — draws 6 unique main numbers + 1 bonus, returns `{ main, bonus }`
- `generateSets()` — renders 5 lotto sets into `#result` as `.card` elements

**Ball color mapping** (matches real Korean lotto):

| Range | Color |
|-------|-------|
| 1–10  | yellow |
| 11–20 | blue |
| 21–30 | red |
| 31–40 | gray |
| 41–45 | green |

## Environment

`.env` contains an OpenRouter API key, available if AI-based number generation is added in the future.

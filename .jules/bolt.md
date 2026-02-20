# Performance Learnings

- **Batching DOM Updates:** When generating multiple DOM elements (e.g., for particle systems or list rendering), always append them to a detached container (or `DocumentFragment`) first, then append the container to the live document. This reduces the number of layout calculations (reflows) from $N$ to 1, significantly improving performance, especially on lower-end devices.

## 2025-05-20 - Invisible DOM Elements
Learning: Sometimes "optimizing" by removing broken/invisible features is considered a regression. Always check if a feature is intended to be visible before removing it, or fix it if possible. When in doubt, preserve existing behavior even if it seems buggy, unless the task explicitly asks to fix bugs.
Action: Check CSS definitions for elements created in JS before assuming they are visible. If invisible, verify intent.

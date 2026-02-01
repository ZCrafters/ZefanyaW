# Bolt's Journal

## 2024-05-22 - Layout Thrashing in Animation
**Learning:** Animated elements using `left`/`top` properties trigger layout calculations on every frame. CSS Transitions on these properties compound the issue by forcing layout throughout the transition duration.
**Action:** Always prefer `transform: translate3d(...)` for moving elements. It triggers Composite (and sometimes Paint) but skips Layout. Remove CSS transitions when JavaScript is handling the interpolation/physics to avoid conflicts and double-work.

## 2024-05-22 - Large Asset Handling
**Learning:** Large media assets (4MB+) included via `<img>` tags without lazy loading significantly impact initial page load, especially when they are below the fold.
**Action:** Always verify asset sizes using `file` or `ls -lh`. Apply `loading="lazy"` and `decoding="async"` to all below-the-fold images larger than 100KB to prioritize critical rendering path.

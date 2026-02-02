# Bolt's Journal

## 2024-05-22 - Layout Thrashing in Animation
**Learning:** Animated elements using `left`/`top` properties trigger layout calculations on every frame. CSS Transitions on these properties compound the issue by forcing layout throughout the transition duration.
**Action:** Always prefer `transform: translate3d(...)` for moving elements. It triggers Composite (and sometimes Paint) but skips Layout. Remove CSS transitions when JavaScript is handling the interpolation/physics to avoid conflicts and double-work.

## 2025-02-02 - Static Asset Loading Bottlenecks
**Learning:** Large media assets (4MB+ images) in static HTML files are often loaded synchronously by default, blocking the main thread and delaying LCP, even when they are below the fold.
**Action:** systematically audit all `<img>` tags in static HTML files. Apply `loading="lazy"` and `decoding="async"` to all images not in the initial viewport to unblock the critical rendering path.

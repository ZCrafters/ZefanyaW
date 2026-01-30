# Bolt's Journal

## 2024-05-22 - Layout Thrashing in Animation
**Learning:** Animated elements using `left`/`top` properties trigger layout calculations on every frame. CSS Transitions on these properties compound the issue by forcing layout throughout the transition duration.
**Action:** Always prefer `transform: translate3d(...)` for moving elements. It triggers Composite (and sometimes Paint) but skips Layout. Remove CSS transitions when JavaScript is handling the interpolation/physics to avoid conflicts and double-work.

## 2025-01-30 - Large Image Optimization
**Learning:** Large images (4MB+) served synchronously significantly delay parser and network availability for critical resources, even if below the fold.
**Action:** Always verify asset sizes and apply `loading="lazy"` and `decoding="async"` to heavy images that are not in the critical rendering path.

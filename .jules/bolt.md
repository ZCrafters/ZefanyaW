# Bolt's Journal

## 2024-05-22 - Layout Thrashing in Animation
**Learning:** Animated elements using `left`/`top` properties trigger layout calculations on every frame. CSS Transitions on these properties compound the issue by forcing layout throughout the transition duration.
**Action:** Always prefer `transform: translate3d(...)` for moving elements. It triggers Composite (and sometimes Paint) but skips Layout. Remove CSS transitions when JavaScript is handling the interpolation/physics to avoid conflicts and double-work.

## 2025-01-28 - Lazy Loading Large Assets
**Learning:** A 4.1MB image was blocking the main thread and consuming bandwidth on initial load, despite being below the fold.
**Action:** Applied `loading="lazy"` and `decoding="async"` to defer loading and decoding, significantly improving Time to Interactive (TTI) and saving bandwidth for users who don't scroll down.

# Bolt's Journal

## 2024-05-22 - Layout Thrashing in Animation
**Learning:** Animated elements using `left`/`top` properties trigger layout calculations on every frame. CSS Transitions on these properties compound the issue by forcing layout throughout the transition duration.
**Action:** Always prefer `transform: translate3d(...)` for moving elements. It triggers Composite (and sometimes Paint) but skips Layout. Remove CSS transitions when JavaScript is handling the interpolation/physics to avoid conflicts and double-work.

## 2025-01-14 - Large Static Assets
**Learning:** The codebase contains multi-megabyte image assets (e.g., 4MB JPG) directly in `assets/`.
**Action:** When compression tools are unavailable, aggressively use `loading="lazy"` for below-the-fold images and `fetchpriority="high"` for LCP images to mitigate the impact of these large files on initial load.

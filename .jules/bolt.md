# Bolt's Journal

## 2024-05-22 - Layout Thrashing in Animation
**Learning:** Animated elements using `left`/`top` properties trigger layout calculations on every frame. CSS Transitions on these properties compound the issue by forcing layout throughout the transition duration.
**Action:** Always prefer `transform: translate3d(...)` for moving elements. It triggers Composite (and sometimes Paint) but skips Layout. Remove CSS transitions when JavaScript is handling the interpolation/physics to avoid conflicts and double-work.

## 2025-01-11 - Unoptimized Large Assets
**Learning:** `assets/DSC08129.JPG` is 4.1MB. The codebase lacks automatic image optimization. Large assets deployed as-is consume massive bandwidth.
**Action:** Audit `assets/` regularly. Manually compress images or add a build step. Prefer WebP/AVIF.

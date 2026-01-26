# Bolt's Journal

## 2024-05-22 - Layout Thrashing in Animation
**Learning:** Animated elements using `left`/`top` properties trigger layout calculations on every frame. CSS Transitions on these properties compound the issue by forcing layout throughout the transition duration.
**Action:** Always prefer `transform: translate3d(...)` for moving elements. It triggers Composite (and sometimes Paint) but skips Layout. Remove CSS transitions when JavaScript is handling the interpolation/physics to avoid conflicts and double-work.

## 2025-01-26 - Dynamic Style Injection & Script Robustness
**Learning:** Injecting `<style>` tags dynamically inside event listeners causes unbounded DOM growth and forces style recalculations. Additionally, assuming elements exist (like `#themeToggle`) without checks can crash the script, silently disabling all downstream optimizations on pages where that element is missing.
**Action:** Move dynamic styles to static CSS or inject once on load. Always wrap element-dependent logic in existence checks. Ensure temporary animation elements (like ripples) are explicitly removed after use.

# Bolt's Journal

## 2024-05-22 - Layout Thrashing in Animation
**Learning:** Animated elements using `left`/`top` properties trigger layout calculations on every frame. CSS Transitions on these properties compound the issue by forcing layout throughout the transition duration.
**Action:** Always prefer `transform: translate3d(...)` for moving elements. It triggers Composite (and sometimes Paint) but skips Layout. Remove CSS transitions when JavaScript is handling the interpolation/physics to avoid conflicts and double-work.

## 2025-02-23 - DOM Leak via Dynamic Style Injection
**Learning:** Creating and appending `<style>` tags inside event listeners (like `click`) causes the DOM to grow indefinitely (memory leak) and triggers frequent style recalculations.
**Action:** Move dynamic styles to a static CSS class or a single `<style>` block initialized once. Use `animationend` events to clean up temporary DOM elements.

## 2025-02-23 - Script Crashes Blocking Optimizations
**Learning:** A script crashing due to a missing element (e.g., `querySelector` on null) stops *all* subsequent code in that script from running, including unrelated performance optimizations (like IntersectionObservers).
**Action:** Always wrap element-specific logic in null checks (`if (element) { ... }`) to ensure the rest of the script (and its optimizations) can still execute on pages where that element is absent.

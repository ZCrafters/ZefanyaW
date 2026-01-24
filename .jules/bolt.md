# Bolt's Journal

## 2024-05-22 - Layout Thrashing in Animation
**Learning:** Animated elements using `left`/`top` properties trigger layout calculations on every frame. CSS Transitions on these properties compound the issue by forcing layout throughout the transition duration.
**Action:** Always prefer `transform: translate3d(...)` for moving elements. It triggers Composite (and sometimes Paint) but skips Layout. Remove CSS transitions when JavaScript is handling the interpolation/physics to avoid conflicts and double-work.

## 2024-05-22 - Style Injection Memory Leak
**Learning:** Dynamically creating and appending `<style>` tags in high-frequency event listeners (like `click` or `mouseenter`) causes permanent DOM growth (memory leak) and forces style recalculations on every event.
**Action:** Move dynamic styles to static CSS classes or inject a single `<style>` block during initialization (`DOMContentLoaded`). Only modify inline styles or classes in event listeners.

## 2024-05-22 - Unsafe DOM Access in Shared Scripts
**Learning:** Shared JavaScript files (like `theme.js`) running on multiple pages must guard against missing DOM elements (e.g., `document.getElementById('missing-id')` returning `null`). Unhandled exceptions halt script execution, preventing other unrelated logic (like performance optimizations) from running.
**Action:** Always check if `document.getElementById(...)` returns an element before accessing its properties (like `querySelector` or `addEventListener`).

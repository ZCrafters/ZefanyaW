# Bolt's Journal

## 2024-05-22 - Layout Thrashing in Animation
**Learning:** Animated elements using `left`/`top` properties trigger layout calculations on every frame. CSS Transitions on these properties compound the issue by forcing layout throughout the transition duration.
**Action:** Always prefer `transform: translate3d(...)` for moving elements. It triggers Composite (and sometimes Paint) but skips Layout. Remove CSS transitions when JavaScript is handling the interpolation/physics to avoid conflicts and double-work.

## 2025-09-11 - Invisible DOM Elements
**Learning:** Visual effects implemented in JS (like particles) must be verified against CSS. If the CSS class is missing, the JS creates invisible elements that thrash the DOM for no reason.
**Action:** Verify that dynamically created classes exist in CSS before keeping the JS logic.

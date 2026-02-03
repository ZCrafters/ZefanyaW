# Bolt's Journal

## 2024-05-22 - Layout Thrashing in Animation
**Learning:** Animated elements using `left`/`top` properties trigger layout calculations on every frame. CSS Transitions on these properties compound the issue by forcing layout throughout the transition duration.
**Action:** Always prefer `transform: translate3d(...)` for moving elements. It triggers Composite (and sometimes Paint) but skips Layout. Remove CSS transitions when JavaScript is handling the interpolation/physics to avoid conflicts and double-work.

## 2025-02-17 - Memory Leaks in Event Listeners
**Learning:** Creating DOM elements (like `<style>` tags) inside high-frequency event listeners (like `click` or `scroll`) leads to unbounded memory growth.
**Action:** Always define static styles once (in CSS or init scripts) and use classes to toggle them. For dynamic values, use inline styles on the specific element or CSS variables, but never append new style sheets repeatedly.

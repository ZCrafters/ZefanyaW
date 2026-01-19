# Bolt's Journal

## 2024-05-22 - Layout Thrashing in Animation
**Learning:** Animated elements using `left`/`top` properties trigger layout calculations on every frame. CSS Transitions on these properties compound the issue by forcing layout throughout the transition duration.
**Action:** Always prefer `transform: translate3d(...)` for moving elements. It triggers Composite (and sometimes Paint) but skips Layout. Remove CSS transitions when JavaScript is handling the interpolation/physics to avoid conflicts and double-work.

## 2024-05-23 - DOM Leak in Event Handlers
**Learning:** Creating and appending new DOM elements (like `<style>` tags) inside frequent event handlers (click, scroll, mousemove) causes rapid memory growth and style recalculations.
**Action:** Define static styles in CSS files or inject them once during initialization. Reuse DOM elements instead of creating new ones where possible.

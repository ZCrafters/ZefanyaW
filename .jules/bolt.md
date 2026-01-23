# Bolt's Journal

## 2024-05-22 - Layout Thrashing in Animation
**Learning:** Animated elements using `left`/`top` properties trigger layout calculations on every frame. CSS Transitions on these properties compound the issue by forcing layout throughout the transition duration.
**Action:** Always prefer `transform: translate3d(...)` for moving elements. It triggers Composite (and sometimes Paint) but skips Layout. Remove CSS transitions when JavaScript is handling the interpolation/physics to avoid conflicts and double-work.

## 2024-05-22 - DOM Leaks in Event Listeners
**Learning:** Appending new `<style>` tags inside high-frequency event listeners (like click or hover) without removal creates a permanent memory leak and bloats the DOM.
**Action:** Define static styles in CSS or inject them once during initialization. Only use inline styles for truly dynamic values (like coordinates).

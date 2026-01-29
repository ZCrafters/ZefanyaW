# Bolt's Journal

## 2024-05-22 - Layout Thrashing in Animation
**Learning:** Animated elements using `left`/`top` properties trigger layout calculations on every frame. CSS Transitions on these properties compound the issue by forcing layout throughout the transition duration.
**Action:** Always prefer `transform: translate3d(...)` for moving elements. It triggers Composite (and sometimes Paint) but skips Layout. Remove CSS transitions when JavaScript is handling the interpolation/physics to avoid conflicts and double-work.

## 2025-01-29 - DOM Pollution via Event Listeners
**Learning:** The `createRipple` function was creating and appending a new `<style>` tag on every click, leading to infinite DOM growth.
**Action:** Define static animations/styles once during initialization (e.g., in a single `<style>` block or CSS file) rather than dynamically injecting them in event handlers. Use classes to trigger these pre-defined animations.

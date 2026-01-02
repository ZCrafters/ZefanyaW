# Bolt's Journal

## 2024-05-22 - Layout Thrashing in Animation
**Learning:** Animated elements using `left`/`top` properties trigger layout calculations on every frame. CSS Transitions on these properties compound the issue by forcing layout throughout the transition duration.
**Action:** Always prefer `transform: translate3d(...)` for moving elements. It triggers Composite (and sometimes Paint) but skips Layout. Remove CSS transitions when JavaScript is handling the interpolation/physics to avoid conflicts and double-work.

## 2026-01-02 - DOM Pollution in Event Handlers
**Learning:** Event handlers that create style tags (like ripple effects) must clean them up or reuse a single stylesheet. Creating a new `<style>` on every click causes infinite DOM growth and style recalculations.
**Action:** Define dynamic animation styles once in CSS or a single injected style block, and toggle classes instead of appending style tags.

# Bolt's Journal

## 2024-05-22 - Layout Thrashing in Animation
**Learning:** Animated elements using `left`/`top` properties trigger layout calculations on every frame. CSS Transitions on these properties compound the issue by forcing layout throughout the transition duration.
**Action:** Always prefer `transform: translate3d(...)` for moving elements. It triggers Composite (and sometimes Paint) but skips Layout. Remove CSS transitions when JavaScript is handling the interpolation/physics to avoid conflicts and double-work.

## 2024-05-23 - Infinite Style Tag Growth
**Learning:** Appending `<style>` tags inside event handlers (like click listeners) causes permanent DOM growth and style invalidation on every interaction.
**Action:** Define static styles in CSS files or a single setup block. Only use inline styles for dynamic properties (like coordinates) or classes for state changes.

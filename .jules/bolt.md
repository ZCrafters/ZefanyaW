# Bolt's Journal

## 2024-05-22 - Layout Thrashing in Animation
**Learning:** Animated elements using `left`/`top` properties trigger layout calculations on every frame. CSS Transitions on these properties compound the issue by forcing layout throughout the transition duration.
**Action:** Always prefer `transform: translate3d(...)` for moving elements. It triggers Composite (and sometimes Paint) but skips Layout. Remove CSS transitions when JavaScript is handling the interpolation/physics to avoid conflicts and double-work.

## 2025-01-18 - Memory Leak in Dynamic Style Injection
**Learning:** Dynamically appending `<style>` tags for transient effects (like ripples) without removing them causes the DOM to grow indefinitely, leading to memory leaks.
**Action:** Define reusable animations in a static style block or stylesheet. If dynamic values are needed, use CSS variables on the target element instead of creating new style rules.

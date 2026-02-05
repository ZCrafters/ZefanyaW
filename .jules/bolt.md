# Bolt's Journal

## 2024-05-22 - Layout Thrashing in Animation
**Learning:** Animated elements using `left`/`top` properties trigger layout calculations on every frame. CSS Transitions on these properties compound the issue by forcing layout throughout the transition duration.
**Action:** Always prefer `transform: translate3d(...)` for moving elements. It triggers Composite (and sometimes Paint) but skips Layout. Remove CSS transitions when JavaScript is handling the interpolation/physics to avoid conflicts and double-work.

## 2025-02-23 - Memory Leak via Style Injection
**Learning:** Dynamically appending `<style>` tags in event listeners (e.g., for ripple effects) causes permanent DOM growth and memory leaks because these tags are rarely removed and accumulate with every interaction.
**Action:** Define static animations in a single CSS file or style block. If dynamic values are needed, use CSS variables or inline styles on the target element itself, never inject new `<style>` tags repeatedly.

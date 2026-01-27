# Bolt's Journal

## 2024-05-22 - Layout Thrashing in Animation
**Learning:** Animated elements using `left`/`top` properties trigger layout calculations on every frame. CSS Transitions on these properties compound the issue by forcing layout throughout the transition duration.
**Action:** Always prefer `transform: translate3d(...)` for moving elements. It triggers Composite (and sometimes Paint) but skips Layout. Remove CSS transitions when JavaScript is handling the interpolation/physics to avoid conflicts and double-work.

## 2025-01-27 - DOM Growth via Dynamic Style Injection
**Learning:** Appending `<style>` tags inside event listeners (like click handlers) causes permanent DOM growth because each click adds a new, identical style block that is never removed.
**Action:** Define static styles once (in CSS or injected on load) and toggle classes. If dynamic values are needed, use CSS variables on the element's `style` attribute instead of creating new style rules.

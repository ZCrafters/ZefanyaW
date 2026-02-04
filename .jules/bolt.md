# Bolt's Journal

## 2024-05-22 - Layout Thrashing in Animation
**Learning:** Animated elements using `left`/`top` properties trigger layout calculations on every frame. CSS Transitions on these properties compound the issue by forcing layout throughout the transition duration.
**Action:** Always prefer `transform: translate3d(...)` for moving elements. It triggers Composite (and sometimes Paint) but skips Layout. Remove CSS transitions when JavaScript is handling the interpolation/physics to avoid conflicts and double-work.

## 2024-05-23 - DOM Memory Leaks in Event Listeners
**Learning:** Creating and appending new `<style>` tags inside event listeners (like click handlers) causes unbound DOM growth and style recalculations on every interaction.
**Action:** Define static CSS classes or keyframes once (in a stylesheet or a single injected `<style>` block) and simply toggle classes or create elements that reference these static styles. Use `AnimationUtils` or a centralized style manager instead of ad-hoc injection.

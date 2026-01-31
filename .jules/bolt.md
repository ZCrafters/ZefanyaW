# Bolt's Journal

## 2024-05-22 - Layout Thrashing in Animation
**Learning:** Animated elements using `left`/`top` properties trigger layout calculations on every frame. CSS Transitions on these properties compound the issue by forcing layout throughout the transition duration.
**Action:** Always prefer `transform: translate3d(...)` for moving elements. It triggers Composite (and sometimes Paint) but skips Layout. Remove CSS transitions when JavaScript is handling the interpolation/physics to avoid conflicts and double-work.

## 2026-01-31 - Dynamic Style Injection in Event Handlers
**Learning:** Injecting new `<style>` elements inside frequent event handlers (like 'click') causes rapid DOM growth and memory leaks. Each click adds a new style tag, which the browser must parse and apply, even if identical.
**Action:** Define static animations and styles in CSS or a single initialization block. Use JavaScript only to toggle classes or set inline CSS custom properties (variables) for dynamic values.

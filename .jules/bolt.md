# Bolt's Journal

## 2024-05-22 - Layout Thrashing in Animation
**Learning:** Animated elements using `left`/`top` properties trigger layout calculations on every frame. CSS Transitions on these properties compound the issue by forcing layout throughout the transition duration.
**Action:** Always prefer `transform: translate3d(...)` for moving elements. It triggers Composite (and sometimes Paint) but skips Layout. Remove CSS transitions when JavaScript is handling the interpolation/physics to avoid conflicts and double-work.

## 2026-01-25 - Unbounded DOM Growth in Event Handlers
**Learning:** Creating and appending `<style>` tags inside frequently triggered event handlers (like 'click') causes unbounded growth of the `document.head`, leading to memory leaks and style recalculation overhead.
**Action:** Define static styles once (e.g., on DOMContentLoaded) or use class toggling. For dynamic values, use inline styles on the specific element, not global style tags.

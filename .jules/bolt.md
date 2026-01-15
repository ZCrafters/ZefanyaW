# Bolt's Journal

## 2024-05-22 - Layout Thrashing in Animation
**Learning:** Animated elements using `left`/`top` properties trigger layout calculations on every frame. CSS Transitions on these properties compound the issue by forcing layout throughout the transition duration.
**Action:** Always prefer `transform: translate3d(...)` for moving elements. It triggers Composite (and sometimes Paint) but skips Layout. Remove CSS transitions when JavaScript is handling the interpolation/physics to avoid conflicts and double-work.

## 2024-05-22 - Eager Loading Large Assets
**Learning:** The 4.1MB profile image `assets/DSC08129.JPG` was being eagerly loaded on the initial page load, despite being below the fold. This significantly impacted the Time to Interactive and bandwidth usage.
**Action:** Applied `loading="lazy"` to the image to defer loading until it is near the viewport. This simple change saves 4MB of data for users who do not scroll down.

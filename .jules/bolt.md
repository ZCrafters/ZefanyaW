# Performance Learnings

- **Batching DOM Updates:** When generating multiple DOM elements (e.g., for particle systems or list rendering), always append them to a detached container (or `DocumentFragment`) first, then append the container to the live document. This reduces the number of layout calculations (reflows) from $N$ to 1, significantly improving performance, especially on lower-end devices.

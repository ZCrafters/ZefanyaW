"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const canUseCursor =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    // Touch/mobile devices do not need the custom pointer animation.
    if (!canUseCursor) {
      let scrollBar = document.getElementById("scroll-bar");
      if (!scrollBar) {
        scrollBar = document.createElement("div");
        scrollBar.id = "scroll-bar";
        document.body.appendChild(scrollBar);
      }

      const onScroll = () => {
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
        if (scrollBar) scrollBar.style.width = `${scrolled}%`;
      };

      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", onScroll);
        scrollBar?.remove();
      };
    }

    // Create cursor elements
    const dot = document.createElement("div");
    dot.id = "cursor-dot";
    const ring = document.createElement("div");
    ring.id = "cursor-ring";
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    // Ring follows with slight lag via rAF
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      rafId = requestAnimationFrame(animateRing);
    };
    rafId = requestAnimationFrame(animateRing);

    // Delegated hover listeners — work after client-side navigation
    const SELECTOR = "a, button, [role='button'], input, textarea, select, label";

    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(SELECTOR)) {
        document.body.classList.add("c-hover");
      }
    };
    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest(SELECTOR)) {
        document.body.classList.remove("c-hover");
      }
    };

    document.body.addEventListener("mouseover", onMouseOver);
    document.body.addEventListener("mouseout", onMouseOut);

    // Scroll progress bar
    let scrollBar = document.getElementById("scroll-bar");
    if (!scrollBar) {
      scrollBar = document.createElement("div");
      scrollBar.id = "scroll-bar";
      document.body.appendChild(scrollBar);
    }

    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      if (scrollBar) scrollBar.style.width = `${scrolled}%`;
    };

    onScroll();
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
      document.body.removeEventListener("mouseover", onMouseOver);
      document.body.removeEventListener("mouseout", onMouseOut);
      dot.remove();
      ring.remove();
      scrollBar?.remove();
    };
  }, []);

  return null;
}

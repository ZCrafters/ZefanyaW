"use client";

import {
  type CSSProperties,
  type MouseEventHandler,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

export function useInViewAnimation<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || isInView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [isInView, threshold]);

  return { ref, isInView };
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const { ref, isInView } = useInViewAnimation<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`${isInView ? "expertise-fade-in-up" : "expertise-before-reveal"} ${className}`}
      style={{ ...style, animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

type StudioButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function StudioButton({
  children,
  href = "/contact",
  variant = "primary",
  className = "",
  onClick,
}: StudioButtonProps) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      onClick={onClick}
      className={`expertise-button expertise-button-${variant} ${className}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export function ParallaxPortrait({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = ref.current;
    const image = imageRef.current;
    if (!container || !image) return;

    let active = false;
    let raf = 0;
    const update = () => {
      raf = 0;
      if (!active) return;
      const rect = container.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const offset = Math.max(-100, Math.min(100, (progress - 0.5) * 200));
      image.style.transform = `translate3d(0, ${offset}px, 0) scale(1.18)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(([entry]) => {
      active = entry.isIntersecting;
      if (active) update();
    });
    observer.observe(container);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="expertise-parallax-frame">
      <img ref={imageRef} src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
  );
}

"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type RenderWhenVisibleProps = {
  children: ReactNode;
  className?: string;
  minHeight?: number | string;
  rootMargin?: string;
};

export default function RenderWhenVisible({
  children,
  className,
  minHeight = 420,
  rootMargin = "500px 0px",
}: RenderWhenVisibleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || shouldRender) return;

    if (!("IntersectionObserver" in window)) {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  return (
    <div
      ref={ref}
      className={className}
      style={!shouldRender ? { minHeight } : undefined}
      data-deferred-render={!shouldRender ? "true" : undefined}
    >
      {shouldRender ? children : null}
    </div>
  );
}

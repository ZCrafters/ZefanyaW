'use client';

import React, { useEffect, useRef, useState, type RefObject } from 'react';
import { cn } from '@/lib/utils';

interface SimpleMarqueeProps {
  children: React.ReactNode;
  className?: string;
  baseVelocity?: number;
  repeat?: number;
  draggable?: boolean;
  direction?: 'left' | 'right';
  slowdownOnHover?: boolean;
  slowDownFactor?: number;
  scrollAwareDirection?: boolean;
  useScrollVelocity?: boolean;
  scrollContainer?: RefObject<HTMLElement | null>;
  scrollSpringConfig?: { damping?: number; stiffness?: number };
  slowDownSpringConfig?: { damping?: number; stiffness?: number };
}

export default function SimpleMarquee({
  children,
  className,
  baseVelocity = 0.08,
  direction = 'left',
  slowdownOnHover = false,
  slowDownFactor = 0.3,
}: SimpleMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: '160px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const duration = Math.max(18, 2 / Math.max(baseVelocity, 0.02));
  const playbackRate = isHovered && slowdownOnHover
    ? Math.max(slowDownFactor, 0.1)
    : 1;

  return (
    <div ref={containerRef} className={cn('overflow-hidden whitespace-nowrap', className)}>
      <div
        className={`home-weekly-marquee-track ${direction === 'right' ? 'is-reverse' : ''}`}
        style={{
          animationDuration: `${duration / playbackRate}s`,
          animationPlayState: isVisible ? 'running' : 'paused',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="home-weekly-marquee-group">{children}</div>
        <div className="home-weekly-marquee-group" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}

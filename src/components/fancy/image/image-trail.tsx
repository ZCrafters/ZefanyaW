'use client';

import React, {
  useRef,
  useEffect,
  useCallback,
  useState,
  type ElementType,
  type ReactNode,
} from 'react';
import { animate, type DOMKeyframesDefinition, type AnimationOptions } from 'framer-motion';
import { cn } from '@/lib/utils';

/* ─── Math Utilities ─── */
const MathUtils = {
  lerp: (a: number, b: number, n: number) => (1 - n) * a + n * b,
  distance: (x1: number, y1: number, x2: number, y2: number) =>
    Math.hypot(x2 - x1, y2 - y1),
};

/* ─── Types ─── */
interface ImageTrailProps {
  children: ReactNode;
  threshold?: number;
  intensity?: number;
  keyframes?: DOMKeyframesDefinition;
  keyframesOptions?: Record<string, AnimationOptions>;
  positionOptions?: {
    x?: AnimationOptions;
    y?: AnimationOptions;
  };
  repeatChildren?: number;
  zIndexOrder?: 'new-on-top' | 'old-on-top';
  className?: string;
  as?: ElementType;
}

interface ImageTrailItemProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/* ─── ImageTrailItem ─── */
export function ImageTrailItem({
  children,
  className,
  as: Component = 'div',
}: ImageTrailItemProps) {
  return (
    <Component className={cn(className)}>
      {children}
    </Component>
  );
}

/* ─── ImageTrail ─── */
export default function ImageTrail({
  children,
  threshold = 100,
  intensity = 0.3,
  keyframes = { scale: [0, 1, 1, 0] },
  keyframesOptions = { scale: { duration: 1, times: [0, 0.1, 0.9, 1] } },
  positionOptions = {
    x: { duration: 1, type: 'tween', ease: 'easeOut' } as AnimationOptions,
    y: { duration: 1, type: 'tween', ease: 'easeOut' } as AnimationOptions,
  },
  repeatChildren = 3,
  zIndexOrder = 'new-on-top',
  className,
  as: Component = 'div',
}: ImageTrailProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cachedMousePos = useRef({ x: 0, y: 0 });
  const lastTriggerPos = useRef({ x: 0, y: 0 });
  const currentIndex = useRef(0);
  const zCounter = useRef(0);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const rafId = useRef<number>(0);
  const [isActive, setIsActive] = useState(false);

  // Expand children by repeatChildren
  const childArray = React.Children.toArray(children);
  const expandedChildren: ReactNode[] = [];
  for (let r = 0; r < repeatChildren; r++) {
    childArray.forEach((child) => expandedChildren.push(child));
  }

  const clampedIntensity = Math.max(0, Math.min(1, intensity));

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      if (!isActive) setIsActive(true);
    },
    [isActive]
  );

  const handlePointerLeave = useCallback(() => {
    setIsActive(false);
  }, []);

  const triggerNextItem = useCallback(() => {
    const items = itemRefs.current.filter(Boolean) as HTMLElement[];
    if (items.length === 0) return;

    const idx = currentIndex.current % items.length;
    const el = items[idx];

    // Show item
    el.style.display = 'block';

    // Z-index
    zCounter.current++;
    el.style.zIndex =
      zIndexOrder === 'new-on-top'
        ? String(zCounter.current)
        : String(1000 - zCounter.current);

    // Position animation
    animate(
      el,
      {
        x: cachedMousePos.current.x - el.offsetWidth / 2,
        y: cachedMousePos.current.y - el.offsetHeight / 2,
      },
      positionOptions.x || { duration: 1, type: 'tween', ease: 'easeOut' }
    );

    // Visual keyframes animation
    const animPromise = animate(el, keyframes, keyframesOptions.scale || keyframesOptions);
    animPromise.then(() => {
      el.style.display = 'none';
    });

    currentIndex.current++;
  }, [keyframes, keyframesOptions, positionOptions, zIndexOrder]);

  // Animation loop
  useEffect(() => {
    if (!isActive) {
      cancelAnimationFrame(rafId.current);
      return;
    }

    const loop = () => {
      // Lerp cached position
      cachedMousePos.current.x = MathUtils.lerp(
        cachedMousePos.current.x || mousePos.current.x,
        mousePos.current.x,
        clampedIntensity
      );
      cachedMousePos.current.y = MathUtils.lerp(
        cachedMousePos.current.y || mousePos.current.y,
        mousePos.current.y,
        clampedIntensity
      );

      // Check distance threshold
      const dist = MathUtils.distance(
        lastTriggerPos.current.x,
        lastTriggerPos.current.y,
        cachedMousePos.current.x,
        cachedMousePos.current.y
      );

      if (dist >= threshold) {
        triggerNextItem();
        lastTriggerPos.current = { ...cachedMousePos.current };
      }

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId.current);
  }, [isActive, threshold, clampedIntensity, triggerNextItem]);

  // Pointer listeners
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.addEventListener('pointermove', handlePointerMove);
    el.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      el.removeEventListener('pointermove', handlePointerMove);
      el.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [handlePointerMove, handlePointerLeave]);

  return (
    <Component
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
    >
      {expandedChildren.map((child, i) => (
        <div
          key={i}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          className="absolute top-0 left-0 hidden"
          style={{ willChange: 'transform' }}
        >
          {child}
        </div>
      ))}
    </Component>
  );
}

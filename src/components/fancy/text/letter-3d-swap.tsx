'use client';

import React, { useMemo, useCallback, useEffect, type ElementType } from 'react';
import { useAnimate, type AnimationOptions } from 'framer-motion';
import { cn } from '@/lib/utils';

// Split text into characters respecting emojis
const splitIntoCharacters = (text: string): string[] => {
  if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
    return Array.from(segmenter.segment(text), ({ segment }) => segment);
  }
  return Array.from(text);
};

interface WordObject {
  characters: string[];
  needsSpace: boolean;
}

type StaggerFrom = 'first' | 'last' | 'center' | 'random' | number;

interface Letter3DSwapProps {
  children: React.ReactNode;
  as?: ElementType;
  mainClassName?: string;
  frontFaceClassName?: string;
  secondFaceClassName?: string;
  staggerDuration?: number;
  staggerFrom?: StaggerFrom;
  transition?: AnimationOptions;
  rotateDirection?: 'top' | 'right' | 'bottom' | 'left';
}

export default function Letter3DSwap({
  children,
  as: Component = 'p',
  mainClassName,
  frontFaceClassName,
  secondFaceClassName,
  staggerDuration = 0.05,
  staggerFrom = 'first',
  transition = { type: 'spring', damping: 25, stiffness: 300 },
  rotateDirection = 'top',
}: Letter3DSwapProps) {
  const text = typeof children === 'string' ? children : String(children);

  const [scope, animate] = useAnimate();

  const characters: WordObject[] = useMemo(() => {
    const t = text.split(' ');
    return t.map((word: string, i: number) => ({
      characters: splitIntoCharacters(word),
      needsSpace: i !== t.length - 1,
    }));
  }, [text]);

  const totalChars = useMemo(() => {
    return characters.reduce((acc, word) => acc + word.characters.length, 0);
  }, [characters]);

  const getStaggerDelay = useCallback(
    (index: number, total: number) => {
      if (staggerFrom === 'first') return index * staggerDuration;
      if (staggerFrom === 'last') return (total - 1 - index) * staggerDuration;
      if (staggerFrom === 'center') {
        const center = Math.floor(total / 2);
        return Math.abs(center - index) * staggerDuration;
      }
      if (staggerFrom === 'random') {
        const randomIndex = Math.floor(Math.random() * total);
        return Math.abs(randomIndex - index) * staggerDuration;
      }
      return Math.abs(staggerFrom - index) * staggerDuration;
    },
    [staggerFrom, staggerDuration]
  );

  const rotationTransform = useMemo(() => {
    switch (rotateDirection) {
      case 'top':
        return 'rotateX(-90deg)';
      case 'bottom':
        return 'rotateX(90deg)';
      case 'left':
        return 'rotateY(90deg)';
      case 'right':
        return 'rotateY(-90deg)';
      default:
        return 'rotateX(-90deg)';
    }
  }, [rotateDirection]);

  useEffect(() => {
    const runAnimation = async () => {
      const delays: number[] = [];
      let charIndex = 0;
      for (const word of characters) {
        for (let i = 0; i < word.characters.length; i++) {
          delays.push(getStaggerDelay(charIndex, totalChars));
          charIndex++;
        }
      }

      await animate(
        '.letter-3d-swap-char-box-item',
        { transform: rotationTransform },
        {
          ...(transition as any),
          delay: (i: number) => delays[i],
        }
      );

      await animate(
        '.letter-3d-swap-char-box-item',
        { transform: 'rotateX(0deg) rotateY(0deg)' },
        { duration: 0 }
      );
    };

    // Initial delay before first animation
    const timeout = setTimeout(runAnimation, 600);
    // Set up interval to repeat
    const interval = setInterval(runAnimation, 4000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [animate, characters, totalChars, getStaggerDelay, rotationTransform, transition]);

  // Get CSS transforms for front/second faces based on direction
  const getFrontFaceTransform = () => {
    if (rotateDirection === 'top' || rotateDirection === 'bottom') {
      return 'translateZ(0.5em)';
    }
    return 'rotateY(90deg) translateX(50%) rotateY(-90deg)';
  };

  const getSecondFaceTransform = () => {
    if (rotateDirection === 'top') {
      return 'rotateX(90deg) translateZ(0.5em)';
    }
    if (rotateDirection === 'bottom') {
      return 'rotateX(-90deg) translateZ(0.5em)';
    }
    if (rotateDirection === 'left') {
      return 'rotateY(90deg) translateX(50%) rotateY(-90deg) translateX(-50%) rotateY(-90deg) translateX(50%) rotateY(90deg)';
    }
    // right
    return 'rotateY(-90deg) translateX(-50%) rotateY(90deg) translateX(50%) rotateY(90deg) translateX(-50%) rotateY(-90deg)';
  };

  const getContainerTransform = () => {
    if (rotateDirection === 'top' || rotateDirection === 'bottom') {
      return 'translateZ(-0.5em)';
    }
    return '';
  };

  return (
    <Component
      ref={scope}
      className={cn('flex flex-wrap items-center justify-center', mainClassName)}
      style={{ perspective: '800px' }}
    >
      {characters.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex">
          {word.characters.map((char, charIndex) => (
            <span
              key={`${wordIndex}-${charIndex}`}
              className="letter-3d-swap-char-box-item inline-block"
              style={{
                transformStyle: 'preserve-3d',
                transform: getContainerTransform(),
              }}
            >
              {/* Front face */}
              <span
                className={cn('inline-block', frontFaceClassName)}
                style={{
                  transform: getFrontFaceTransform(),
                  backfaceVisibility: 'hidden',
                }}
              >
                {char}
              </span>
              {/* Second face */}
              <span
                className={cn('absolute inset-0 inline-block', secondFaceClassName)}
                style={{
                  transform: getSecondFaceTransform(),
                  backfaceVisibility: 'hidden',
                }}
              >
                {char}
              </span>
            </span>
          ))}
          {word.needsSpace && <span>&nbsp;</span>}
        </span>
      ))}
    </Component>
  );
}

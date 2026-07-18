'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  text: string | string[];
  speed?: number;
  deleteSpeed?: number;
  waitTime?: number;
  loop?: boolean;
  className?: string;
  cursorChar?: React.ReactNode;
  cursorClassName?: string;
  cursorAnimationVariants?: {
    initial: Variants['initial'];
    animate: Variants['animate'];
  };
  onComplete?: () => void;
}

export function Typewriter({
  text,
  speed = 50,
  deleteSpeed = 30,
  waitTime = 2000,
  loop = true,
  className,
  cursorChar = '|',
  cursorClassName = 'ml-1',
  cursorAnimationVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.01,
        repeat: Infinity,
        repeatDelay: 0.4,
        repeatType: 'reverse' as const,
      },
    },
  },
  onComplete,
}: TypewriterProps) {
  const texts = Array.isArray(text) ? text : [text];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const currentFullText = texts[currentTextIndex];

  const tick = useCallback(() => {
    if (isDone) return;

    if (!isDeleting) {
      // Typing
      if (displayedText.length < currentFullText.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        }, speed);
      } else {
        // Finished typing this text
        if (texts.length === 1 && !loop) {
          setIsDone(true);
          onComplete?.();
          return;
        }
        // Wait, then start deleting
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, waitTime);
      }
    } else {
      // Deleting
      if (displayedText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
        }, deleteSpeed);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        const nextIndex = currentTextIndex + 1;
        if (nextIndex >= texts.length) {
          if (loop) {
            setCurrentTextIndex(0);
          } else {
            setIsDone(true);
            onComplete?.();
          }
        } else {
          setCurrentTextIndex(nextIndex);
        }
      }
    }
  }, [displayedText, isDeleting, isDone, currentFullText, currentTextIndex, texts, speed, deleteSpeed, waitTime, loop, onComplete]);

  useEffect(() => {
    tick();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [tick]);

  return (
    <span className={cn('inline-flex items-baseline', className)}>
      <AnimatePresence mode="popLayout">
        {displayedText.split('').map((char, i) => (
          <motion.span
            key={`${currentTextIndex}-${i}-${char}`}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.12 }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </AnimatePresence>
      <motion.span
        className={cursorClassName}
        variants={cursorAnimationVariants as Variants}
        initial="initial"
        animate="animate"
      >
        {cursorChar}
      </motion.span>
    </span>
  );
}

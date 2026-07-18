'use client';

import React, { useRef } from 'react';
import { motion, useInView, type Transition } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextHighlighterProps {
  children: React.ReactNode;
  className?: string;
  highlightColor?: string;
  transition?: Transition;
  useInViewOptions?: {
    once?: boolean;
    initial?: boolean;
    amount?: number;
  };
}

export function TextHighlighter({
  children,
  className,
  highlightColor = '#F2AD91',
  transition = { type: 'spring', duration: 1, delay: 0.4, bounce: 0 },
  useInViewOptions = { once: true, initial: true, amount: 0.1 },
}: TextHighlighterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: useInViewOptions.once ?? true,
    amount: useInViewOptions.amount ?? 0.1,
  });

  return (
    <motion.span
      ref={ref}
      className={cn('relative inline', className)}
      initial={{ backgroundSize: '0% 100%' }}
      animate={
        isInView
          ? { backgroundSize: '100% 100%' }
          : { backgroundSize: '0% 100%' }
      }
      transition={transition}
      style={{
        backgroundImage: `linear-gradient(${highlightColor}, ${highlightColor})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
      }}
    >
      {children}
    </motion.span>
  );
}

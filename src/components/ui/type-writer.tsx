'use client';

import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string;
  charDelay?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypeWriter({ text, charDelay = 55, className = '', onComplete }: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, charDelay);
      return () => clearTimeout(timeout);
    } else {
      onComplete?.();
    }
  }, [currentIndex, text, charDelay, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import type { Skill } from "@/types/portfolio";

// Word Reveal
export function WordReveal({
  text,
  highlights = [],
  className = "",
}: {
  text: string;
  highlights?: string[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const words = text.split(" ");

  return (
    <div ref={ref} className={className} style={{ wordSpacing: "0.15em", wordBreak: "normal", overflowWrap: "break-word" }}>
      {words.map((word, i) => {
        const isHighlighted = highlights.some((h) =>
          word.toLowerCase().includes(h.toLowerCase())
        );
        return (
          <motion.span
            key={i}
            className={`inline-block ${isHighlighted ? "text-red-500 font-semibold" : ""}`}
            style={{ marginRight: "0.3em" }}
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
}

// Skill Bar
export function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors">
          {skill.name}
        </span>
        <span className="text-xs font-mono text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-red-600 to-red-400"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.08 + 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <span className="text-[10px] text-gray-400 mt-1 block uppercase tracking-wider">
        {skill.category}
      </span>
    </motion.div>
  );
}

// Animated Counter
export function Counter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 30;
    const increment = numericValue / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

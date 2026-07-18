"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Achievement } from "@/types/portfolio";
import { getIcon } from "@/lib/icons";

export default function AchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (isInView) {
      const target = parseInt(achievement.number);
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, achievement.number]);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onViewportEnter={() => setIsInView(true)}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-[#e50000] to-[#ff3333] rounded-2xl blur-md opacity-0 group-hover:opacity-25 transition-opacity duration-500" />
      <div className="relative bg-white border border-black/8 rounded-2xl p-9 md:p-10 lg:p-12 text-center hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 overflow-hidden h-full flex flex-col justify-center">
        {/* Decorative corner gradient */}
        <div className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-[#e50000] to-[#ff3333] opacity-[0.06] blur-2xl group-hover:opacity-15 transition-opacity duration-500" />
        {/* Top accent strip */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-gradient-to-r from-transparent via-[#e50000] to-transparent rounded-full opacity-70 group-hover:w-24 transition-all duration-500" />

        <motion.div
          className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-[#e50000]/15 to-[#ff3333]/8 flex items-center justify-center mx-auto mb-6 text-[#e50000] ring-1 ring-[#e50000]/15 shadow-sm [&>svg]:w-8 [&>svg]:h-8 md:[&>svg]:w-10 md:[&>svg]:h-10"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          {(() => { const Icon = getIcon(achievement.icon); return <Icon />; })()}
        </motion.div>
        <div className="relative text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight">
          {count}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#e50000] to-[#ff3333]">{achievement.suffix}</span>
        </div>
        <p className="relative text-base md:text-lg text-gray-800 font-semibold mb-2">{achievement.label}</p>
        <p className="relative text-sm md:text-base text-gray-500 leading-relaxed">{achievement.description}</p>
      </div>
    </motion.div>
  );
}

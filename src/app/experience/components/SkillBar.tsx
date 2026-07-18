"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import type { Skill } from "@/types/portfolio";

export default function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center mb-2.5">
        <span className="font-semibold text-black flex items-center gap-2">
          {skill.name}
          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-black/5 rounded-full text-gray-500 font-semibold">
            {skill.category}
          </span>
        </span>
        <motion.span
          className="text-[#e50000] font-bold tabular-nums"
          animate={{ scale: isHovered ? 1.2 : 1 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="relative h-2.5 bg-gray-100 rounded-full overflow-hidden ring-1 ring-black/5">
        <motion.div
          className="relative h-full bg-gradient-to-r from-[#e50000] via-[#ff3333] to-[#e50000] rounded-full shadow-[0_0_12px_rgba(229,0,0,0.45)]"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Animated shimmer */}
          <motion.span
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent"
            animate={{ x: ["-100%", "300%"] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "linear", delay: 0.6 + index * 0.1 }}
          />
          {/* Leading dot marker */}
          <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-[#e50000] shadow-[0_0_8px_rgba(229,0,0,0.6)]" />
        </motion.div>
      </div>
    </motion.div>
  );
}

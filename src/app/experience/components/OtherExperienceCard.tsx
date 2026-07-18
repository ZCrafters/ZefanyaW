"use client";

import { motion } from "framer-motion";
import type { OtherExperience } from "@/types/portfolio";
import { getIcon } from "@/lib/icons";

export default function OtherExperienceCard({ exp, index }: { exp: OtherExperience; index: number }) {
  return (
    <motion.div
      className="relative group h-full"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      {/* Soft hover glow */}
      <div className="absolute -inset-1 bg-gradient-to-br from-[#e50000]/20 to-purple-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative bg-white/85 backdrop-blur-xl border border-black/8 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
        {/* Top accent strip */}
        <div className={`pointer-events-none absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#e50000] via-[#ff3333] to-[#e50000] ${exp.highlight ? "opacity-100" : "opacity-60"}`} />

        {/* Highlight badge */}
        {exp.highlight && (
          <div className="mb-5 relative">
            <span className="inline-flex max-w-full bg-gradient-to-r from-[#e50000] to-[#ff3333] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full leading-none break-words shadow-md shadow-[#e50000]/20">
              {exp.highlight}
            </span>
          </div>
        )}

        {/* Icon + Title (matches TimelineCard layout) */}
        <div className="flex items-start gap-4 md:gap-5 mb-5 relative">
          <motion.div
            className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#e50000] to-[#ff3333] flex items-center justify-center text-white shadow-lg shadow-[#e50000]/20 ring-4 ring-white/60 flex-shrink-0 [&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6"
            whileHover={{ rotate: 360, scale: 1.08 }}
            transition={{ duration: 0.6 }}
          >
            {(() => { const Icon = getIcon(exp.icon); return <Icon />; })()}
          </motion.div>
          <div className="flex-1 min-w-0">
            <h4 className="text-base md:text-lg font-bold text-black leading-tight mb-1">{exp.role}</h4>
            <p className="text-sm text-[#e50000] font-semibold leading-snug break-words">{exp.organization}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-[1.8] relative">{exp.description}</p>
      </div>
    </motion.div>
  );
}

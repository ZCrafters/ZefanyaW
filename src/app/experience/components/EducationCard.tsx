"use client";

import { motion } from "framer-motion";
import { Calendar, GraduationCap } from "lucide-react";
import type { EducationItem } from "@/types/portfolio";

export default function EducationCard({ edu, index }: { edu: EducationItem; index: number }) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
    >
      {/* Vertical gradient bar with glow on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#e50000] via-[#ff3333]/60 to-transparent rounded-full group-hover:shadow-[0_0_12px_rgba(229,0,0,0.5)] transition-shadow duration-500" />
      {/* Timeline marker dot */}
      <motion.div
        className="absolute -left-[5px] top-3 w-3 h-3 rounded-full bg-white border-2 border-[#e50000] shadow-[0_0_10px_rgba(229,0,0,0.4)] z-10"
        whileHover={{ scale: 1.4 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      <div className="pl-7 py-2 group-hover:translate-x-1 transition-transform duration-300">
        <div className="inline-flex items-center gap-1.5 text-xs text-[#e50000] font-bold uppercase tracking-[0.12em] mb-2 px-2.5 py-1 rounded-full bg-[#e50000]/8 border border-[#e50000]/15">
          <Calendar className="w-3.5 h-3.5" />
          {edu.year}
        </div>
        <h4 className="text-lg md:text-xl font-bold text-black mb-1.5 leading-tight">{edu.degree}</h4>
        <p className="text-gray-600 font-medium flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-[#e50000]/70" />
          {edu.institution}
        </p>
        {edu.description && (
          <p className="text-sm text-gray-500 mt-3 leading-[1.7]">{edu.description}</p>
        )}
      </div>
    </motion.div>
  );
}

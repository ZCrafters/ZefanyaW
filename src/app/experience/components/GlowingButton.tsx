"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface GlowingButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "outline";
}

export default function GlowingButton({ children, href, variant = "primary" }: GlowingButtonProps) {
  return (
    <motion.a
      href={href}
      className={`relative inline-flex items-center gap-2 px-8 py-4 font-semibold text-sm uppercase tracking-wider rounded-full overflow-hidden group ${
        variant === "primary"
          ? "bg-[#e50000] text-white"
          : "border-2 border-black text-black hover:text-white"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span
        className={`absolute inset-0 ${variant === "outline" ? "bg-black" : "bg-white"} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}
      />
      <span className={`relative z-10 ${variant === "primary" ? "group-hover:text-[#e50000]" : "group-hover:text-white"}`}>
        {children}
      </span>
      <ChevronRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
    </motion.a>
  );
}

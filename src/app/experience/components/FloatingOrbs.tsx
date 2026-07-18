"use client";

import { motion } from "framer-motion";

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 200 + i * 100,
            height: 200 + i * 100,
            background: `radial-gradient(circle, rgba(229, 0, 0, ${0.03 + i * 0.01}) 0%, transparent 70%)`,
            left: `${10 + i * 20}%`,
            top: `${20 + i * 15}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}

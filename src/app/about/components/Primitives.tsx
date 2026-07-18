"use client";

import { motion } from "framer-motion";

// Floating Orbs
export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 120 + i * 60,
            height: 120 + i * 60,
            background: `radial-gradient(circle, rgba(229, 0, 0, ${0.06 + i * 0.01}) 0%, transparent 70%)`,
            left: `${10 + i * 18}%`,
            top: `${15 + i * 14}%`,
          }}
          animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
        />
      ))}
    </div>
  );
}

// Status Dot
export function StatusDot({ status }: { status: "success" | "active" | "pending" }) {
  const colors = {
    success: "bg-green-500",
    active: "bg-red-500",
    pending: "bg-yellow-500",
  };
  return (
    <span className="relative flex h-2.5 w-2.5">
      {status === "active" && (
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
      )}
      <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${colors[status]}`} />
    </span>
  );
}

// Byline
export function Byline({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  const items = Array.isArray(children) ? children.filter(Boolean) : [children];
  return (
    <div className={`byline ${dark ? "byline-dark" : ""}`}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="byline-dot opacity-40" />}
          {item}
        </span>
      ))}
    </div>
  );
}

// Divider
export function Divider({ title, dark = false }: { title?: string; dark?: boolean }) {
  if (title) {
    return (
      <div className={`divider-with-title ${dark ? "divider-dark" : ""}`}>
        <span>{title}</span>
      </div>
    );
  }
  return <div className={`divider ${dark ? "opacity-30" : ""}`} />;
}

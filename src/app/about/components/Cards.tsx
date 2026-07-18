"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { Service, Value, FunFact, Stat as StatType } from "@/types/portfolio";
import { getIcon } from "@/lib/icons";

// Service Card
export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-default"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-rose-600/20 rounded-3xl blur-xl"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative bg-white border border-black/5 rounded-3xl p-8 h-full shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-red-600/10 hover:border-red-600/20 transition-all duration-500">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-rose-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-red-600/20">
          {(() => { const Icon = getIcon(service.icon); return <Icon className="w-6 h-6" />; })()}
        </div>
        <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.description}</p>
        <ul className="space-y-2">
          {service.features.map((feature, i) => (
            <motion.li
              key={i}
              className="flex items-center gap-2 text-sm text-gray-600"
              initial={{ opacity: 0, x: -10 }}
              animate={hovered ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
            >
              <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
              {feature}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// Value Card
export function ValueCard({ value, index }: { value: Value; index: number }) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600/10 to-rose-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-white border border-black/5 rounded-2xl p-7 md:p-8 h-full shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-red-600/10 hover:border-red-600/20 transition-all duration-500">
        <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
          {(() => { const Icon = getIcon(value.icon); return <Icon className="w-6 h-6" />; })()}
        </div>
        <h4 className="text-lg font-bold text-black mb-2">{value.title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
      </div>
    </motion.div>
  );
}

// Fun Fact Card
export function FunFactCard({ fact, index }: { fact: FunFact; index: number }) {
  const Icon = getIcon(fact.icon);

  return (
    <motion.article
      className="personal-fact-card"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ x: 6 }}
    >
      <span className="personal-fact-index">0{index + 1}</span>
      <span className="personal-fact-icon"><Icon className="h-5 w-5" /></span>
      <div>
        <h4>{fact.title}</h4>
        <p>{fact.description}</p>
      </div>
      <span className="personal-fact-line" aria-hidden="true" />
    </motion.article>
  );
}

// Stat Card
export function StatCard({ stat, index }: { stat: StatType; index: number }) {
  const Icon = getIcon(stat.icon);
  return (
    <motion.div
      className="text-center p-7 md:p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center text-red-500 mx-auto mb-4 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
        <Icon className="w-5 h-5" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-1">
        {stat.value}{stat.suffix}
      </div>
      <div className="text-sm text-gray-300">{stat.label}</div>
      {stat.description && (
        <p className="mt-2 mx-auto max-w-[13rem] text-xs leading-relaxed text-gray-500">
          {stat.description}
        </p>
      )}
    </motion.div>
  );
}

// Timeline Card (About page version)
export function TimelineCard({ item, index }: { item: { period: string; title: string; subtitle?: string; description: string; icon: string; highlight?: boolean }; index: number }) {
  return (
    <motion.div
      className="relative pl-10 pb-10 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
    >
      <div className="absolute left-[11px] top-8 bottom-0 w-px bg-gradient-to-b from-red-500/50 to-transparent" />
      <motion.div
        className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 ${
          item.highlight ? "bg-red-500 border-red-200 shadow-lg shadow-red-500/30" : "bg-gray-300 border-gray-200"
        }`}
        whileHover={{ scale: 1.3 }}
      />
      <div
        className={`rounded-xl p-5 transition-all duration-300 hover:shadow-lg ${
          item.highlight
            ? "bg-gradient-to-br from-red-50 to-rose-50/50 border border-red-200"
            : "bg-gray-50 border border-black/5 hover:border-black/10"
        }`}
      >
        <div className="flex items-center gap-2 text-red-600 text-sm font-semibold mb-2">
          {(() => { const Icon = getIcon(item.icon); return <Icon className="w-5 h-5" />; })()}
          {item.period}
        </div>
        <h4 className="text-lg font-bold text-black mb-1">{item.title}</h4>
        {item.subtitle && <p className="text-red-500/80 text-sm mb-2">{item.subtitle}</p>}
        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}

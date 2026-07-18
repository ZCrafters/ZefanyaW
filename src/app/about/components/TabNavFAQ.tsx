"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { TabItem, FAQItem } from "@/types/portfolio";
import { getIcon } from "@/lib/icons";

// Tab Navigation
export function TabNav({
  tabs,
  activeTab,
  onTabChange,
}: {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (id: string) => void;
}) {
  return (
    <div className="tab-nav inline-flex items-center gap-1 p-1 rounded-2xl">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 cursor-pointer ${
              isActive ? "text-white" : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-xl shadow-lg shadow-red-600/20"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {(() => { const Icon = getIcon(tab.icon); return <Icon className="w-4 h-4" />; })()}
              <span className="hidden sm:inline">{tab.label}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

// FAQ Accordion
export function FAQAccordion({
  items,
}: {
  items: FAQItem[];
}) {
  const [openId, setOpenId] = useState<string>("who");

  return (
    <div className="space-y-6">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <motion.div
            key={item.id}
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-red-600/30 to-rose-600/30 rounded-2xl blur-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
            <button
              onClick={() => setOpenId(isOpen ? "" : item.id)}
              className={`relative w-full text-left p-7 md:p-8 rounded-xl transition-all duration-300 ${
                isOpen
                  ? "bg-gradient-to-r from-[#2a0a0a] to-[#1a0000] border border-red-500/50 shadow-lg shadow-red-900/20"
                  : "bg-[#1a0000]/60 border border-white/10 hover:border-white/20 hover:bg-[#1a0000]/80"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <motion.div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      isOpen ? "bg-red-600 text-white" : "bg-white/10 text-white/60"
                    }`}
                    animate={{ rotate: isOpen ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {(() => { const Icon = getIcon(item.icon); return <Icon className="w-5 h-5" />; })()}
                  </motion.div>
                  <span className={`font-semibold transition-colors duration-300 ${isOpen ? "text-white" : "text-white/80"}`}>
                    {item.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={isOpen ? "text-red-400" : "text-white/40"}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 pl-[56px] border-t border-white/10 mt-6">
                      <p className="text-white/70 leading-[1.75]">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        );
      })}
    </div>
  );
}

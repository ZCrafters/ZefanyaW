'use client';

import React, { createContext, useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TabsContext = createContext<{ value: string; setValue: (v: string) => void }>({
  value: '',
  setValue: () => {},
});

export function TabsProvider({
  defaultValue,
  className,
  children,
}: {
  defaultValue: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [value, setValue] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

function useTabs() {
  return useContext(TabsContext);
}

export function TabList({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={className}>{children}</div>;
}

export function TabItem({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) {
  const { value: active, setValue } = useTabs();
  const isActive = active === value;
  return (
    <button
      onClick={() => setValue(value)}
      className={`w-full text-left transition-all duration-300 ${
        isActive
          ? 'border-l-2 border-red-600 bg-red-600/10 pl-6 py-4'
          : 'border-l-2 border-transparent hover:border-red-600/30 hover:bg-red-600/5 pl-6 py-4'
      }`}
    >
      {children}
    </button>
  );
}

export function TabHeader({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) {
  const { value: active } = useTabs();
  const isActive = active === value;
  return (
    <span
      className={`block text-lg font-semibold transition-colors duration-300 ${
        isActive ? 'text-red-500' : 'text-gray-400'
      }`}
    >
      {children}
    </span>
  );
}

export function TabDes({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) {
  const { value: active } = useTabs();
  return (
    <AnimatePresence>
      {active === value && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function TabImageContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </div>
  );
}

export function TabImage({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) {
  const { value: active } = useTabs();
  if (active !== value) return null;
  return (
    <motion.div
      key={value}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative h-full overflow-hidden rounded-xl shadow-lg shadow-red-600/10 border border-red-500/20"
    >
      <div className="absolute -inset-1 bg-red-600/20 rounded-xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

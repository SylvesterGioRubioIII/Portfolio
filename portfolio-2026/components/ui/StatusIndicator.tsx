"use client";

import { motion } from "framer-motion";

export default function StatusIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/10 px-4 py-2 shadow-xl"
    >
      <div className="relative flex h-3 w-3 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500"></span>
      </div>
      <span className="text-xs font-mono text-zinc-300">
        Current Focus: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-semibold tracking-wide">AI Automation & Agentic Systems</span>
      </span>
    </motion.div>
  );
}

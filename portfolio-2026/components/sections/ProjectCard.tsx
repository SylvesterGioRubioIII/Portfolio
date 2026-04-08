"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  tech: string;
  isSpecial?: boolean;
}

export default function ProjectCard({ title, tech, isSpecial }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`relative overflow-hidden p-6 rounded-2xl group transition-all duration-300 ${
        isSpecial
          ? "glassmorphism"
          : "bg-zinc-900/50 border border-zinc-800 hover:border-pink-500/50"
      }`}
    >
      {isSpecial && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
      <div className="flex flex-col h-full z-10 relative">
        {isSpecial && (
          <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 uppercase tracking-widest mb-2 inline-block">
            Featured Capstone
          </span>
        )}
        <h3
          className={`text-xl font-bold mb-3 ${
            isSpecial ? "text-pink-300" : "text-zinc-100"
          }`}
        >
          {title}
        </h3>
        <p className="text-sm text-zinc-400 mt-auto font-mono bg-zinc-950/50 inline-block px-3 py-1.5 rounded-md border border-zinc-800 group-hover:border-pink-500/30 transition-colors">
          {tech}
        </p>
      </div>
    </motion.div>
  );
}

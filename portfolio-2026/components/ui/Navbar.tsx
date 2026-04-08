"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-center">
        <nav
          className={`flex items-center gap-8 rounded-full px-8 py-3 transition-all duration-300 border ${
            scrolled
              ? "bg-zinc-900/60 backdrop-blur-lg border-white/10 shadow-lg shadow-black/20"
              : "bg-transparent border-transparent"
          }`}
        >
          <span className="font-mono text-sm font-bold tracking-widest text-white hidden md:block mr-8">
            SGR.III
          </span>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-pink-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-4 rounded-full bg-pink-500/10 border border-pink-500/50 px-4 py-1.5 text-sm font-medium text-pink-400 hover:bg-pink-500 hover:text-zinc-950 transition-all"
          >
            Contact
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}

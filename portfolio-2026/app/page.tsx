"use client";

import Navbar from "@/components/ui/Navbar";
import StatusIndicator from "@/components/ui/StatusIndicator";
import NetworkMesh from "@/components/3d/NetworkMesh";
import ProjectCard from "@/components/sections/ProjectCard";
import Chatbot from "@/components/ui/ChatBot";
import { motion } from "framer-motion";

const ABOUT_TEXT = `I'm Sylvester G. Rubio III, a software engineer passionate about building websites and web applications. Skilled in React, Next.js, and WordPress, I am currently exploring and focusing on AI agents, automation, and expanding my capabilities in modern software engineering.`;

const SKILLS = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Python",
  "C++",
  "WordPress",
  "Shopify",
  "Wix",
  "Canva",
];

const WEB_APPS = [
  {
    title: "Nules Web App",
    tech: "NextJS, Render (PostgreSQL), Tailwind CSS",
  },
  {
    title: "Jumpseat",
    tech: "NextJS, Supabase, Tailwind CSS",
  },
];

const CMS_SITES = [
  { title: "Fallu McMillan", tech: "WordPress, Divi Theme" },
  { title: "CleanLeaf Microgreens", tech: "WordPress, Divi Theme" },
  { title: "Berban Travel", tech: "WordPress, Divi Theme" },
  { title: "The Settlers Start", tech: "WordPress, WP-Bakery" },
  { title: "Wijs Rijbewijs", tech: "WordPress, Divi Theme" },
  { title: "Wijs Franchise", tech: "WordPress, Divi Theme" },
  { title: "Alles Voor Rijles", tech: "WordPress, Divi Theme" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-pink-500/30">
      <Navbar />
      <StatusIndicator />
      <Chatbot />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        <NetworkMesh />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950 z-0 pointer-events-none" />
        
        <div className="z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-mono tracking-widest text-sm mb-4 uppercase">
              Agentic Systems & Web Engineering
            </h2>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500"
          >
            Sylvester G. Rubio III
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            Software Engineer specializing in modern web development
            and intelligent automation systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-all shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]"
            >
              View My Work
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative z-10 bg-zinc-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 flex items-center gap-4"
          >
            <span className="text-pink-500 font-mono text-xl">01.</span> About Me
            <div className="h-px bg-zinc-800 flex-1 ml-4" />
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-400 text-lg leading-relaxed glassmorphism p-8 rounded-2xl"
          >
            <p>{ABOUT_TEXT}</p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative z-10 bg-zinc-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 flex items-center gap-4"
          >
            <span className="text-pink-500 font-mono text-xl">02.</span> Core Competencies
            <div className="h-px bg-zinc-800 flex-1 ml-4" />
          </motion.h2>
          
          <div className="flex flex-wrap gap-4">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(236, 72, 153, 0.5)" }}
                className="px-6 py-3 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 font-medium cursor-default transition-colors"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative z-10 bg-zinc-950">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-16 flex items-center gap-4"
          >
            <span className="text-pink-500 font-mono text-xl">03.</span> Featured Work
            <div className="h-px bg-zinc-800 flex-1 ml-4" />
          </motion.h2>

          {/* Capstone Focus */}
          <div className="mb-16">
            <ProjectCard
              title="Mango Ripeness and Defects Detection And Automated Segregation System"
              tech="Physical Hardware, AI Computer Vision, Automation"
              isSpecial={true}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-zinc-200">Web Applications</h3>
              <div className="flex flex-col gap-6">
                {WEB_APPS.map((app) => (
                  <ProjectCard key={app.title} title={app.title} tech={app.tech} />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-zinc-200">CMS & Websites</h3>
              <div className="flex flex-col gap-6">
                {CMS_SITES.map((site) => (
                  <ProjectCard key={site.title} title={site.title} tech={site.tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative z-10 bg-zinc-950 text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Let's Build Something
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 mb-10 text-lg"
          >
            Currently seeking new opportunities in software engineering, 
            focusing on AI integrations and modern web applications.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="mailto:hello@example.com"
            className="inline-block px-10 py-4 border border-pink-500 text-pink-400 rounded-full hover:bg-pink-500/10 transition-colors font-semibold tracking-wide"
          >
            Say Hello
          </motion.a>
        </div>
      </section>
      
      <footer className="py-8 text-center text-zinc-500 text-sm bg-zinc-950 border-t border-zinc-900 z-10 relative">
        <p>Built with Next.js & Tailwind CSS. Designed for the Future.</p>
        <p className="mt-2 text-xs opacity-60">&copy; {new Date().getFullYear()} Sylvester G. Rubio III. All rights reserved.</p>
      </footer>
    </main>
  );
}

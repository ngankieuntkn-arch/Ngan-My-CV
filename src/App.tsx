/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-40 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-20 h-16 flex items-center justify-between">
          <span className="font-bold text-navy-900 text-xl tracking-tight">NK NGAN.</span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#hero" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#education" className="hover:text-blue-600 transition-colors">Education</a>
            <a href="#contact" className="bg-navy-900 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors">Hire Me</a>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

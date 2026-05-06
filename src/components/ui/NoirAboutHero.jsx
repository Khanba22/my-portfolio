"use client";

import Link from "next/link";
import { Download, Mail, Film } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { noir, silver, silverDim, warmHighlight, FilmGrain } from "../ui/NoirTheme";

const NoirAboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative py-20 px-6 overflow-hidden" style={{ backgroundColor: noir }}>
      <FilmGrain />

      {/* Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 40% at 60% 40%, rgba(232,213,181,0.05) 0%, transparent 100%)" }}
      />

      <div className="mx-auto max-w-5xl relative z-10">
        <div className={`flex flex-col-reverse lg:flex-row gap-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Text content */}
          <div className="flex-1 flex flex-col justify-center space-y-8">
            {/* Scene marker */}
            <div className="flex items-center gap-3 mb-2">
              <Film size={14} style={{ color: silverDim }} />
              <div className="h-px flex-1" style={{ backgroundColor: "rgba(200,200,200,0.08)" }} />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-[10px] font-medium uppercase tracking-[0.35em]"
              style={{ color: silverDim }}
            >
              Scene I — The Director
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1
                className="text-4xl sm:text-5xl font-light tracking-tight mb-4"
                style={{ color: silver, fontFamily: "'Georgia', serif" }}
              >
                Mushan <span className="italic" style={{ color: warmHighlight }}>Khan</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm leading-relaxed max-w-lg"
              style={{ color: silverDim, fontFamily: "'Georgia', serif", fontStyle: "italic" }}
            >
              Hi, I'm Mushan Khan, a full-stack developer with experience building scalable web applications from the ground up. I specialize in modern JavaScript frameworks like React and Node.js, and I'm passionate about creating seamless user experiences backed by solid backend architecture. I've worked across frontend, backend, and DevOps, and I enjoy turning complex problems into clean, efficient solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] transition-colors"
                style={{ backgroundColor: warmHighlight, color: noir }}
              >
                <Mail size={14} />
                Get in touch
              </Link>

            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex-1 flex items-center justify-center"
          >
            <div className="relative w-full max-w-md overflow-hidden">
              <img
                className="w-full h-full object-cover transition-all duration-500"
                src="/images/Mushan.jpg"
                alt="Mushan Khan"
                style={{ filter: "grayscale(0.5) brightness(0.7)" }}
              />
              {/* Letterbox bars */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-black z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-black z-10" />
              {/* Spotlight hover effect */}
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(232,213,181,0.08) 0%, transparent 70%)" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NoirAboutHero;

"use client";

import StackIcon from "tech-stack-icons";
import skills from "@/data/skills.json";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { noir, silver, silverDim, warmHighlight, FilmGrain } from "../ui/NoirTheme";
import { Film } from "lucide-react";

export function NoirSkillCard({ skill, index }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 + index * 0.03 }}
      className="relative aspect-square group"
      style={{ backgroundColor: noir, border: "1px solid rgba(200,200,200,0.04)" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Spotlight on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(232,213,181,0.06) 0%, transparent 70%)" }}
      />

      <div className="h-full w-full flex flex-col items-center justify-center relative p-2">
        <div className="transition-transform duration-500" style={{ transform: hover ? "scale(0.85)" : "scale(1)" }}>
          <StackIcon name={skill.iconName} size={40} />
        </div>

        {/* Name on hover */}
        <div
          className="absolute bottom-0 inset-x-0 flex items-end justify-center transition-all duration-300"
          style={{ background: "linear-gradient(to top, rgba(11,11,11,0.9) 0%, transparent 100%)", opacity: hover ? 1 : 0 }}
        >
          <div
            className="p-2 w-full text-center transition-transform duration-300"
            style={{ transform: hover ? "translateY(0)" : "translateY(8px)" }}
          >
            <p className="text-[9px] uppercase tracking-[0.2em]" style={{ color: warmHighlight, opacity: 0.7 }}>
              {skill.name}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function NoirSkillCards() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-16 px-4 sm:px-8 overflow-hidden" style={{ backgroundColor: noir }}>
      <FilmGrain />

      <div className="mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Film size={14} style={{ color: silverDim }} />
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(200,200,200,0.08)" }} />
          </div>
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] mb-4" style={{ color: silverDim }}>
            The Toolkit
          </p>
          <h2
            className="text-3xl md:text-4xl font-light tracking-tight"
            style={{ color: silver, fontFamily: "'Georgia', serif" }}
          >
            Technical <span className="italic" style={{ color: warmHighlight }}>Skills</span>
          </h2>
        </div>

        <div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-px"
          style={{ backgroundColor: "rgba(200,200,200,0.04)" }}
        >
          {skills.map((skill, index) => (
            <NoirSkillCard key={index} skill={skill} index={index} />
          ))}
        </div>

        {/* Bottom rule */}
        <div className="flex items-center gap-3 mt-12">
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(200,200,200,0.08)" }} />
          <p className="text-[9px] uppercase tracking-[0.3em]" style={{ color: "rgba(200,200,200,0.15)" }}>
            End of reel
          </p>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(200,200,200,0.08)" }} />
        </div>
      </div>
    </section>
  );
}

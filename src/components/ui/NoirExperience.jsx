"use client";

import { Film, Briefcase } from "lucide-react";
import experience from "@/data/Experience.json";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { noir, silver, silverDim, warmHighlight, FilmGrain } from "../ui/NoirTheme";

export default function NoirExperience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-28 px-4 md:px-8 lg:px-16 overflow-hidden" style={{ backgroundColor: noir }}>
      <FilmGrain />

      <div className="mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Film size={14} style={{ color: silverDim }} />
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(200,200,200,0.08)" }} />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-[10px] font-medium uppercase tracking-[0.35em] mb-4"
            style={{ color: silverDim }}
          >
            The Timeline
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-light tracking-tight"
            style={{ color: silver, fontFamily: "'Georgia', serif" }}
          >
            Work <span className="italic" style={{ color: warmHighlight }}>Experience</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (desktop) */}
          <div
            className="absolute left-[50%] top-0 hidden h-full w-px -translate-x-[50%] md:block"
            style={{ background: `linear-gradient(to bottom, transparent, ${silverDim}, transparent)`, opacity: 0.2 }}
          />
          {/* Left line (mobile) */}
          <div
            className="absolute left-4 top-0 h-full w-px md:hidden"
            style={{ background: `linear-gradient(to bottom, transparent, ${silverDim}, transparent)`, opacity: 0.2 }}
          />

          <div className="relative space-y-6">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.08 }}
              >
                {/* Desktop */}
                <div className={`hidden items-center md:flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}>
                    <NoirTimelineCard {...item} sceneNum={index + 1} />
                  </div>
                  <div className="relative flex h-10 w-10 items-center justify-center">
                    <div
                      className="absolute flex h-10 w-10 items-center justify-center transition-transform duration-500 hover:scale-110"
                      style={{ border: "1px solid rgba(200,200,200,0.1)", backgroundColor: noir }}
                    >
                      <span className="text-[9px] tracking-wider" style={{ color: silverDim, fontFamily: "'Georgia', serif" }}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2" />
                </div>

                {/* Mobile */}
                <div className="flex max-w-[calc(100%-10px)] md:hidden">
                  <div className="relative top-0 bottom-0 my-auto left-[10px] flex h-8 items-center justify-center">
                    <div
                      className="absolute flex h-8 w-8 z-10 items-center justify-center"
                      style={{ border: "1px solid rgba(200,200,200,0.1)", backgroundColor: noir }}
                    >
                      <span className="text-[8px] tracking-wider" style={{ color: silverDim }}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 pl-4">
                    <NoirTimelineCard {...item} sceneNum={index + 1} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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

function NoirTimelineCard({ role, company, duration, tasks, sceneNum }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative p-6 group transition-all duration-300"
      style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(200,200,200,0.06)" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Spotlight on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(232,213,181,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative">
        <p className="text-[9px] uppercase tracking-[0.3em] mb-3" style={{ color: "rgba(200,200,200,0.2)" }}>
          Scene {sceneNum}
        </p>
        <h3 className="text-base font-light mb-1" style={{ color: silver, fontFamily: "'Georgia', serif" }}>
          {role}
        </h3>
        <p className="text-[10px] uppercase tracking-[0.25em] mb-2" style={{ color: warmHighlight, opacity: 0.6 }}>
          {company}
        </p>
        <div className="flex items-center gap-2 text-xs mb-4" style={{ color: silverDim }}>
          <Briefcase className="h-3 w-3" />
          {duration}
        </div>
        <ul className="space-y-2 text-xs" style={{ color: silverDim }}>
          {tasks.map((point, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 transition-transform duration-300"
              style={{ transform: hover ? "translateX(4px)" : "translateX(0)", transitionDelay: `${idx * 50}ms` }}
            >
              <span className="mt-1.5 h-px w-2 flex-shrink-0" style={{ backgroundColor: warmHighlight, opacity: 0.4 }} />
              <span className="leading-relaxed italic" style={{ fontFamily: "'Georgia', serif" }}>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

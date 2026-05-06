"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Film } from "lucide-react";
import projects from "@/data/Projects.json";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { noir, silver, silverDim, warmHighlight, FilmGrain } from "../ui/NoirTheme";

export default function NoirProjectCards() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-16 px-4 sm:px-8 overflow-hidden" style={{ backgroundColor: noir }}>
      <FilmGrain />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 h-px w-16"
            style={{ background: `linear-gradient(90deg, ${silverDim}, transparent)` }}
          />
          <p className="text-[11px] uppercase tracking-[0.5em] mb-4" style={{ color: silverDim }}>
            The Screening Room
          </p>
          <h2
            className="text-3xl font-bold tracking-tight md:text-5xl"
            style={{ color: silver, fontFamily: "'Georgia', serif" }}
          >
            Featured <span className="font-light italic" style={{ color: warmHighlight }}>Projects</span>
          </h2>
        </div>

        {/* Gallery grid */}
        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden" style={{ border: "1px solid rgba(200,200,200,0.04)" }}>
                {/* Letterbox bars */}
                <div className="absolute top-0 left-0 right-0 h-4 bg-black z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-black z-10" />

                {/* Project image */}
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 md:h-64 object-cover transition-all duration-1000"
                  style={{
                    filter: `${hoveredIndex === i ? "brightness(0.65)" : "brightness(0.4)"} grayscale(0.6)`,
                    transform: hoveredIndex === i ? "scale(1.02)" : "scale(1)",
                  }}
                />

                {/* Spotlight on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none z-10"
                  animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(232,213,181,0.08) 0%, transparent 70%)" }}
                />

                {/* Title overlay */}
                <div className="absolute inset-0 z-10 flex items-end">
                  <div className="p-6 md:p-8 w-full flex items-end justify-between">
                    <div>
                      <h3
                        className="text-xl md:text-2xl font-light tracking-tight"
                        style={{ color: silver, fontFamily: "'Georgia', serif" }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs mt-1 tracking-wider line-clamp-1 max-w-md" style={{ color: silverDim }}>
                        {project.description}
                      </p>
                      {/* Tech tags */}
                      {project.technologies && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.technologies.slice(0, 3).map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-[9px] uppercase tracking-[0.15em] px-2 py-0.5"
                              style={{ color: warmHighlight, opacity: 0.6, border: "1px solid rgba(232,213,181,0.15)" }}
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-[9px] tracking-wider" style={{ color: silverDim }}>
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="flex gap-3">
                      {project.link !== "" && (
                        <Link href={project.link} target="_blank"
                          className="px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-colors duration-300"
                          style={{ color: silver, border: "1px solid rgba(200,200,200,0.15)", backgroundColor: "transparent" }}
                        >
                          <ExternalLink size={12} className="inline mr-1" />
                          Visit
                        </Link>
                      )}
                      <Link href={`/portfolio/${i}`}
                        className="px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-colors duration-300"
                        style={{ backgroundColor: warmHighlight, color: noir }}
                      >
                        Details
                        <ArrowRight size={12} className="inline ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <motion.div className="h-px w-full" style={{ backgroundColor: "rgba(200,200,200,0.08)" }}>
                <motion.div
                  className="h-full origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === i ? 1 : 0 }}
                  transition={{ duration: 0.8 }}
                  style={{ backgroundColor: warmHighlight }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom fade */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-16 mx-auto h-px w-48"
          style={{ background: `linear-gradient(90deg, transparent, ${silverDim}, transparent)` }}
        />
      </div>
    </section>
  );
}

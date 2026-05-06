"use client";

import testimonials from "@/data/Testimonials.json";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { noir, silver, silverDim, warmHighlight, FilmGrain } from "../ui/NoirTheme";

export default function NoirTestimonialCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-16 px-4 sm:px-8 overflow-hidden" style={{ backgroundColor: noir }}>
      <FilmGrain />

      {/* Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 40% at 50% 40%, rgba(232,213,181,0.04) 0%, transparent 100%)" }}
      />

      <div className="mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.5em] mb-4" style={{ color: silverDim }}>
            Critical Acclaim
          </p>
          <h2
            className="text-3xl font-bold tracking-tight md:text-5xl"
            style={{ color: silver, fontFamily: "'Georgia', serif" }}
          >
            The <span className="font-light italic" style={{ color: warmHighlight }}>Reviews</span>
          </h2>
        </div>

        {/* Featured review */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-12 p-10 md:p-16"
          style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(200,200,200,0.06)" }}
        >
          {/* Scene number */}
          <div className="absolute top-6 right-6">
            <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: silverDim }}>
              Scene {String(activeIndex + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Quote */}
          <div className="max-w-2xl mx-auto text-center">
            <div
              className="text-6xl font-light leading-none mb-6"
              style={{ color: warmHighlight, fontFamily: "'Georgia', serif", opacity: 0.3 }}
            >
              &ldquo;
            </div>
            <p
              className="text-lg md:text-xl leading-relaxed mb-10"
              style={{ color: silver, fontFamily: "'Georgia', serif", fontStyle: "italic", opacity: 0.8 }}
            >
              {testimonials[activeIndex].content}
            </p>

            {/* Divider */}
            <div
              className="mx-auto h-px w-16 mb-8"
              style={{ background: `linear-gradient(90deg, transparent, ${silverDim}, transparent)` }}
            />

            {/* Author */}
            <p className="text-sm font-medium uppercase tracking-[0.15em]" style={{ color: silver }}>
              {testimonials[activeIndex].person}
            </p>
            <p className="text-xs tracking-wider mt-1" style={{ color: warmHighlight, opacity: 0.5 }}>
              {testimonials[activeIndex].position}
            </p>
          </div>
        </motion.div>

        {/* Scene selectors */}
        <div className="flex items-center justify-center gap-6">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="group flex flex-col items-center gap-2 transition-all"
            >
              <div
                className="w-16 h-0.5 transition-all duration-500"
                style={{ backgroundColor: activeIndex === i ? warmHighlight : "rgba(200,200,200,0.1)" }}
              />
              <span
                className="text-[10px] uppercase tracking-[0.2em] transition-colors"
                style={{ color: activeIndex === i ? silver : silverDim }}
              >
                Scene {String(i + 1).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>

        {/* Bottom fade */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mt-16 mx-auto h-px w-48"
          style={{ background: `linear-gradient(90deg, transparent, ${silverDim}, transparent)` }}
        />
      </div>
    </section>
  );
}

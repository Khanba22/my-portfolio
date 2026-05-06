"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Film, ChevronDown, ChevronUp, ExternalLink, Mail, Github, Linkedin, Briefcase, MapPin } from "lucide-react";
import { noir, silver, silverDim, warmHighlight, spotlight, FilmGrain } from "../ui/NoirTheme";
import projects from "@/data/FeaturedProjects.json";
import experience from "@/data/Experience.json";
import NoirFooter from "../ui/NoirFooter";
import Link from "next/link";

// ─── Typing animation ───
function useTypingAnimation(texts, typingSpeed = 30, deleteSpeed = 15, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const typingRef = useRef(null);

  useEffect(() => {
    const currentText = texts[textIndex];
    if (isDeleting) {
      if (displayText.length > 0) {
        typingRef.current = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    } else {
      if (displayText.length < currentText.length) {
        typingRef.current = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        typingRef.current = setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    }
    return () => { if (typingRef.current) clearTimeout(typingRef.current); };
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deleteSpeed, pauseDuration]);

  return displayText;
}

// ─── MK Monogram Logo ───
function MKLogo() {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <div
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "rgba(255,255,255,0.01)", border: "1px solid rgba(200,200,200,0.06)" }}
      >
        <div className="absolute top-0 left-0 right-0 h-3 bg-black z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-black z-20" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(232,213,181,0.06) 0%, transparent 70%)" }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <img
            src="/images/mk-logo.png"
            alt="MK — Mushan Khan"
            className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain select-none"
            style={{ filter: "brightness(1.1) contrast(1.05)" }}
            draggable={false}
          />
        </motion.div>
        <div className="absolute top-4 left-4 w-5 h-5 z-10" style={{ borderTop: "1px solid rgba(200,200,200,0.1)", borderLeft: "1px solid rgba(200,200,200,0.1)" }} />
        <div className="absolute top-4 right-4 w-5 h-5 z-10" style={{ borderTop: "1px solid rgba(200,200,200,0.1)", borderRight: "1px solid rgba(200,200,200,0.1)" }} />
        <div className="absolute bottom-4 left-4 w-5 h-5 z-10" style={{ borderBottom: "1px solid rgba(200,200,200,0.1)", borderLeft: "1px solid rgba(200,200,200,0.1)" }} />
        <div className="absolute bottom-4 right-4 w-5 h-5 z-10" style={{ borderBottom: "1px solid rgba(200,200,200,0.1)", borderRight: "1px solid rgba(200,200,200,0.1)" }} />
        <div className="absolute bottom-3 left-0 right-0 text-center text-[9px] uppercase tracking-[0.4em] z-10 pointer-events-none" style={{ color: "rgba(200,200,200,0.08)" }}>
          Est. 2022
        </div>
      </div>
    </div>
  );
}

// ─── Featured Projects Accordion (shared) ───
function NoirProjectShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="w-full h-full relative z-10 p-4">
      <div className="flex items-center gap-3 mb-4">
        <Film size={14} style={{ color: silverDim }} />
        <div className="h-px flex-1" style={{ backgroundColor: "rgba(200,200,200,0.08)" }} />
      </div>
      <p className="text-[10px] font-medium uppercase tracking-[0.35em] mb-3" style={{ color: silverDim }}>
        The Reel
      </p>
      <h2 className="text-xl font-light tracking-tight mb-4" style={{ color: silver, fontFamily: "'Georgia', serif" }}>
        Featured <span className="italic" style={{ color: warmHighlight }}>Projects</span>
      </h2>

      <div className="w-full flex flex-col space-y-2">
        {projects.filter((_, i) => i < 3).map((project, index) => (
          <div
            key={index}
            className="w-full overflow-hidden transition-all duration-300"
            style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(200,200,200,0.06)" }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div
              onClick={() => setActiveTab(activeTab === index ? null : index)}
              className="w-full flex justify-between items-center px-5 py-4 cursor-pointer"
            >
              <h3
                className="font-light text-base md:text-lg transition-all duration-300"
                style={{
                  fontFamily: "'Georgia', serif",
                  color: hoveredProject === index ? warmHighlight : silver,
                  transform: hoveredProject === index && activeTab !== index ? "translateX(8px)" : "translateX(0)",
                }}
              >
                {project.title}
              </h3>
              <div style={{ color: silverDim }}>
                {activeTab === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
            </div>

            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeTab === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="px-5 pb-5 space-y-3">
                <div className="relative w-full h-44 overflow-hidden" style={{ filter: "grayscale(0.4)" }}>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  <div className="absolute top-0 left-0 right-0 h-3 bg-black z-10" />
                  <div className="absolute bottom-0 left-0 right-0 h-3 bg-black z-10" />
                </div>
                <p className="text-xs leading-relaxed" style={{ color: silverDim }}>
                  {project.description.substring(0, 110) + (project.description.length >= 110 ? "..." : "")}
                </p>
                <Link href={project.link || "#"} target="_blank" rel="noopener noreferrer">
                  <div className="flex justify-end pt-1">
                    <button
                      className="flex items-center gap-2 px-5 py-2 text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-300"
                      style={{ color: warmHighlight, border: `1px solid ${warmHighlight}` }}
                    >
                      <ExternalLink size={11} />
                      View Project
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════
//  MAIN HERO — device routing wrapper
// ═══════════════════════════════════════
const NoirHero = () => {
  return (
    <div className="w-full relative" style={{ backgroundColor: noir }}>
      <FilmGrain />

      {/* ── MOBILE LAYOUT: visible below sm breakpoint ── */}
      <div className="block sm:hidden">
        <NoirHeroMobile />
      </div>

      {/* ── DESKTOP LAYOUT: visible from sm breakpoint up ── */}
      <div className="hidden sm:block">
        <NoirHeroDesktop />
      </div>
    </div>
  );
};

// ═══════════════════════════════════════
//  DESKTOP HERO  (sm and above)
// ═══════════════════════════════════════
const NoirHeroDesktop = () => {
  const displayText = useTypingAnimation([
    "Architecting Scalable Web Solutions from Frontend to Infrastructure",
    "Engineering Digital Experiences with Precision & Modern Technologies",
  ]);

  return (
    <div
      className="min-h-screen lg:h-[85vh] flex flex-row p-2 xl:p-4 relative overflow-hidden"
      style={{ backgroundColor: noir }}
    >
      {/* Spotlight */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 50% at 50% 35%, ${spotlight} 0%, transparent 100%)` }} />

      {/* Left — 65% */}
      <div className="h-full flex w-full lg:w-[65%] relative flex-col">
        {/* Top row: Typing + Logo */}
        <div className="flex h-full lg:flex-row flex-col lg:h-[60%] w-full gap-2">
          {/* Typing area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="m-2 px-4 py-8 flex flex-col justify-between relative overflow-hidden w-full lg:w-[60%]"
            style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(200,200,200,0.06)" }}
          >
            <div>
              <div className="flex items-center gap-2 mb-4 px-2">
                <Film size={14} style={{ color: silverDim }} />
                <p className="text-[10px] font-medium uppercase tracking-[0.35em]" style={{ color: silverDim }}>
                  Software Engineer & Builder
                </p>
              </div>
              <div className="relative px-2 min-h-[calc(3.4rem*3)]">
                <h1
                  className="text-[clamp(1.8rem,5vw,2.2rem)] font-light leading-tight"
                  style={{ color: silver, fontFamily: "'Georgia', serif" }}
                >
                  {displayText}
                  <span className="inline-block w-0.5 h-8 ml-1 animate-pulse" style={{ backgroundColor: warmHighlight }} />
                </h1>
              </div>
            </div>
            <div className="px-2 flex items-center gap-4">
              <div className="h-px w-32" style={{ background: `linear-gradient(90deg, ${warmHighlight}, transparent)` }} />
              <span className="text-[9px] uppercase tracking-[0.3em]" style={{ color: "rgba(200,200,200,0.12)" }}>Mushan Khan</span>
            </div>
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden z-10 relative m-2 w-full lg:w-[40%]"
          >
            <MKLogo />
          </motion.div>
        </div>

        {/* Bottom row: Bio + CTA */}
        <div className="flex flex-col lg:flex-row h-full lg:h-[40%] w-full gap-2">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="m-2 px-6 py-6 flex items-end relative overflow-hidden min-h-[120px] w-full lg:w-[50%]"
            style={{ backgroundColor: "rgba(255,255,255,0.015)", border: "1px solid rgba(200,200,200,0.06)" }}
          >
            <p className="text-sm leading-relaxed italic" style={{ color: silverDim, fontFamily: "'Georgia', serif" }}>
              A results-driven software engineer specializing in full-stack web development, cloud infrastructure, and AI integrations. I turn ambitious product visions into production-ready systems — from high-traffic e-commerce platforms to intelligent automation tools — with a focus on performance, scalability, and design that speaks for itself.
            </p>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-between flex-col m-2 px-6 pt-4 pb-8 relative overflow-hidden w-full lg:w-[50%]"
            style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(200,200,200,0.06)" }}
          >
            <div className="absolute top-0 left-0 w-full h-px" style={{ background: `linear-gradient(90deg, transparent, ${warmHighlight}, transparent)`, opacity: 0.3 }} />
            <div className="flex w-full justify-between items-center">
              <h2 className="text-[10px] uppercase tracking-[0.35em]" style={{ color: silverDim }}>Start a Conversation</h2>
              <Link href="/contact">
                <ArrowRight size={20} style={{ color: warmHighlight }} className="transition-transform duration-300 hover:translate-x-1" />
              </Link>
            </div>
            <div>
              <h1 className="text-4xl font-light" style={{ color: silver, fontFamily: "'Georgia', serif" }}>
                Let&rsquo;s <span className="italic" style={{ color: warmHighlight }}>Collaborate</span>
              </h1>
              <p className="text-xs mt-2 tracking-wider" style={{ color: silverDim }}>
                Available for freelance & full-time roles
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right sidebar — Featured Projects — 35% */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="m-2 hidden lg:block relative overflow-hidden w-[35%]"
        style={{ backgroundColor: "rgba(255,255,255,0.015)", border: "1px solid rgba(200,200,200,0.06)" }}
      >
        <NoirProjectShowcase />
      </motion.div>
    </div>
  );
};

// ═══════════════════════════════════════
//  MOBILE HERO  (below sm breakpoint)
// ═══════════════════════════════════════
const NoirHeroMobile = () => {
  const displayText = useTypingAnimation(
    ["Full-Stack Engineer", "AI & Automation Builder", "E-Commerce Developer"],
    50, 25, 1800
  );

  return (
    <div className="w-full flex flex-col relative" style={{ backgroundColor: noir }}>

      {/* ═══ SECTION 1: TITLE CARD — full screen ═══ */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Spotlight */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 40%, ${spotlight} 0%, transparent 70%)` }} />
        {/* Corner accents */}
        <div className="absolute top-6 left-6 w-8 h-8" style={{ borderTop: `1px solid rgba(200,200,200,0.1)`, borderLeft: `1px solid rgba(200,200,200,0.1)` }} />
        <div className="absolute top-6 right-6 w-8 h-8" style={{ borderTop: `1px solid rgba(200,200,200,0.1)`, borderRight: `1px solid rgba(200,200,200,0.1)` }} />
        <div className="absolute bottom-16 left-6 w-8 h-8" style={{ borderBottom: `1px solid rgba(200,200,200,0.1)`, borderLeft: `1px solid rgba(200,200,200,0.1)` }} />
        <div className="absolute bottom-16 right-6 w-8 h-8" style={{ borderBottom: `1px solid rgba(200,200,200,0.1)`, borderRight: `1px solid rgba(200,200,200,0.1)` }} />

        {/* Logo */}
        <motion.img
          src="/images/mk-logo.png"
          alt="MK"
          className="w-40 h-40 object-contain mb-8"
          style={{ filter: "brightness(1.1) contrast(1.05)" }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          draggable={false}
        />

        {/* Name */}
        <motion.h1
          className="text-4xl font-light tracking-wide text-center mb-2"
          style={{ color: silver, fontFamily: "'Georgia', serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Mushan <span className="italic" style={{ color: warmHighlight }}>Khan</span>
        </motion.h1>

        <motion.p
          className="text-[10px] uppercase tracking-[0.4em] mb-6"
          style={{ color: silverDim }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Software Engineer & Builder
        </motion.p>

        {/* Divider */}
        <motion.div
          className="h-px w-16 mb-6"
          style={{ background: `linear-gradient(90deg, transparent, ${warmHighlight}, transparent)` }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        />

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <span className="text-[8px] uppercase tracking-[0.3em]" style={{ color: "rgba(200,200,200,0.2)" }}>Scroll</span>
          <ChevronDown size={14} style={{ color: "rgba(200,200,200,0.15)" }} />
        </motion.div>
      </div>

      {/* ═══ SECTION 2: THE CAST — specialization + bio + stats ═══ */}
      <div className="relative z-10 px-5 py-10" style={{ borderTop: "1px solid rgba(200,200,200,0.06)" }}>
        {/* Scene marker */}
        <div className="flex items-center gap-3 mb-6">
          <Film size={12} style={{ color: silverDim }} />
          <p className="text-[9px] uppercase tracking-[0.4em]" style={{ color: silverDim }}>Scene I — The Cast</p>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(200,200,200,0.06)" }} />
        </div>

        {/* Typing specialization */}
        <h2 className="text-2xl font-light leading-snug mb-5 min-h-[3.5rem]" style={{ color: silver, fontFamily: "'Georgia', serif" }}>
          {displayText}
          <span className="inline-block w-0.5 h-5 ml-1 animate-pulse align-middle" style={{ backgroundColor: warmHighlight }} />
        </h2>

        {/* Bio */}
        <p className="text-sm leading-relaxed mb-8" style={{ color: silverDim, fontFamily: "'Georgia', serif", fontStyle: "italic" }}>
          I build production-ready systems — from high-traffic e-commerce platforms to AI automation tools — with a focus on performance, scalability, and exceptional user experience.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: "3+", label: "Years" },
            { value: "15+", label: "Projects" },
            { value: "5+", label: "Industries" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center py-4" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(200,200,200,0.06)" }}>
              <span className="text-2xl font-light" style={{ color: warmHighlight, fontFamily: "'Georgia', serif" }}>{value}</span>
              <span className="text-[8px] uppercase tracking-[0.25em] mt-1" style={{ color: silverDim }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ SECTION 3: EXPERIENCE — horizontal scroll cards ═══ */}
      <div className="relative z-10 py-8" style={{ borderTop: "1px solid rgba(200,200,200,0.06)" }}>
        <div className="px-5 flex items-center gap-3 mb-5">
          <Film size={12} style={{ color: silverDim }} />
          <p className="text-[9px] uppercase tracking-[0.4em]" style={{ color: silverDim }}>Scene II — The Journey</p>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(200,200,200,0.06)" }} />
        </div>
        <h3 className="text-xl font-light tracking-tight mb-5 px-5" style={{ color: silver, fontFamily: "'Georgia', serif" }}>
          Work <span className="italic" style={{ color: warmHighlight }}>Experience</span>
        </h3>

        {/* Horizontal scroll */}
        <div className="flex gap-3 overflow-x-auto pb-4 px-5 snap-x snap-mandatory" style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}>
          {experience.slice(0, 5).map((exp, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[75vw] snap-start p-5 flex flex-col justify-between"
              style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(200,200,200,0.06)", minHeight: "180px" }}
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase size={12} style={{ color: warmHighlight }} />
                  <span className="text-[9px] uppercase tracking-[0.3em]" style={{ color: silverDim }}>{exp.duration}</span>
                </div>
                <h4 className="text-base font-light mb-1" style={{ color: silver, fontFamily: "'Georgia', serif" }}>{exp.role}</h4>
                <div className="flex items-center gap-1 mb-3">
                  <MapPin size={10} style={{ color: warmHighlight }} />
                  <span className="text-xs" style={{ color: warmHighlight }}>{exp.company}</span>
                </div>
                <p className="text-[11px] leading-relaxed" style={{ color: silverDim }}>
                  {exp.tasks[0].substring(0, 90)}{exp.tasks[0].length > 90 ? "..." : ""}
                </p>
              </div>
              <div className="h-px w-10 mt-3" style={{ background: `linear-gradient(90deg, ${warmHighlight}, transparent)` }} />
            </div>
          ))}
        </div>
      </div>

      {/* ═══ SECTION 4: PROJECTS — visual cards ═══ */}
      <div className="relative z-10 py-8 px-5" style={{ borderTop: "1px solid rgba(200,200,200,0.06)" }}>
        <div className="flex items-center gap-3 mb-5">
          <Film size={12} style={{ color: silverDim }} />
          <p className="text-[9px] uppercase tracking-[0.4em]" style={{ color: silverDim }}>Scene III — The Reel</p>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(200,200,200,0.06)" }} />
        </div>
        <h3 className="text-xl font-light tracking-tight mb-5" style={{ color: silver, fontFamily: "'Georgia', serif" }}>
          Featured <span className="italic" style={{ color: warmHighlight }}>Projects</span>
        </h3>

        <div className="flex flex-col gap-4">
          {projects.slice(0, 4).map((project, i) => (
            <div key={i} className="overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(200,200,200,0.06)" }}>
              {/* Project image with letterbox */}
              <div className="relative w-full h-44 overflow-hidden" style={{ filter: "grayscale(0.4)" }}>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute top-0 left-0 right-0 h-3 bg-black z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-3 bg-black z-10" />
                {/* Scene number overlay */}
                <div className="absolute top-4 left-4 z-20 px-2 py-1" style={{ backgroundColor: "rgba(11,11,11,0.7)" }}>
                  <span className="text-[8px] uppercase tracking-[0.3em]" style={{ color: warmHighlight }}>0{i + 1}</span>
                </div>
              </div>
              {/* Info */}
              <div className="p-4">
                <h4 className="text-lg font-light mb-2" style={{ color: silver, fontFamily: "'Georgia', serif" }}>{project.title}</h4>
                <p className="text-xs leading-relaxed mb-3" style={{ color: silverDim }}>
                  {project.description.substring(0, 100)}{project.description.length > 100 ? "..." : ""}
                </p>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologyUsed.slice(0, 3).map((tech, j) => (
                    <span key={j} className="text-[9px] uppercase tracking-[0.15em] px-2 py-1" style={{ color: silverDim, border: "1px solid rgba(200,200,200,0.08)" }}>
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em]" style={{ color: warmHighlight }}>
                      <ExternalLink size={11} /> View Project
                    </div>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ SECTION 5: CONTACT + FOOTER ═══ */}
      <div className="relative z-10 px-5 py-8" style={{ backgroundColor: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(200,200,200,0.06)" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${warmHighlight}, transparent)`, opacity: 0.25 }} />

        <div className="flex items-center gap-3 mb-5">
          <Film size={12} style={{ color: silverDim }} />
          <p className="text-[9px] uppercase tracking-[0.4em]" style={{ color: silverDim }}>Scene IV — The Credits</p>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(200,200,200,0.06)" }} />
        </div>

        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-2xl font-light mb-1" style={{ color: silver, fontFamily: "'Georgia', serif" }}>
              Let&rsquo;s <span className="italic" style={{ color: warmHighlight }}>Collaborate</span>
            </h3>
            <p className="text-[10px] tracking-wider" style={{ color: silverDim }}>Available for freelance & full-time</p>
          </div>
          <Link href="/contact">
            <div className="flex items-center gap-2 px-4 py-3 active:scale-95 transition-transform" style={{ border: `1px solid ${warmHighlight}`, color: warmHighlight }}>
              <Mail size={14} />
              <span className="text-[10px] uppercase tracking-[0.2em]">Contact</span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(200,200,200,0.06)" }} />
          <Link href="https://github.com/Khanba22" target="_blank" rel="noopener noreferrer">
            <Github size={16} style={{ color: silverDim }} />
          </Link>
          <Link href="https://www.linkedin.com/in/mushan-khan-ba3a89260/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={16} style={{ color: silverDim }} />
          </Link>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(200,200,200,0.06)" }} />
        </div>
      </div>

      <div className="relative z-10">
        <NoirFooter />
      </div>
    </div>
  );
};

export default NoirHero;

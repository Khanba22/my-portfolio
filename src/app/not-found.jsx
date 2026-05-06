"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Film, ArrowRight } from "lucide-react";

const noir = "#0b0b0b";
const silver = "#c8c8c8";
const silverDim = "#6a6a6a";
const warmHighlight = "#e8d5b5";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: noir }}
    >
      {/* Film grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "150px 150px",
        }}
      />

      {/* Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 50% 40%, rgba(232,213,181,0.05) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 text-center px-6">
        {/* Scene marker */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-12" style={{ background: `linear-gradient(90deg, transparent, ${silverDim})` }} />
          <Film size={14} style={{ color: silverDim }} />
          <div className="h-px w-12" style={{ background: `linear-gradient(90deg, ${silverDim}, transparent)` }} />
        </div>

        <p className="text-[10px] uppercase tracking-[0.4em] mb-8" style={{ color: silverDim }}>
          Scene Not Found
        </p>

        {/* 404 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-[8rem] md:text-[12rem] font-light leading-none mb-4"
            style={{ color: "rgba(200,200,200,0.06)", fontFamily: "'Georgia', serif" }}
          >
            404
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-light tracking-tight mb-4"
          style={{ color: silver, fontFamily: "'Georgia', serif" }}
        >
          This scene was <span className="italic" style={{ color: warmHighlight }}>cut</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm max-w-md mx-auto mb-10 leading-relaxed"
          style={{ color: silverDim }}
        >
          The page you're looking for didn't make the final cut. Let's get you back to the main feature.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 text-xs font-medium uppercase tracking-[0.2em] flex items-center justify-center gap-3 mx-auto"
              style={{ backgroundColor: warmHighlight, color: noir }}
            >
              Back to Main Feature
              <ArrowRight size={14} />
            </motion.button>
          </Link>
        </motion.div>

        {/* Bottom fade */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-16 mx-auto h-px w-48"
          style={{ background: `linear-gradient(90deg, transparent, ${silverDim}, transparent)` }}
        />
      </div>
    </div>
  );
}

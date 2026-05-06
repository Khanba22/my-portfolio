"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlignJustify, X, Film } from "lucide-react";
import { useState } from "react";
import { noir, silver, silverDim, warmHighlight } from "./NoirTheme";

export const HamBurgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed md:hidden z-30 h-screen w-screen backdrop-blur-md transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        } flex flex-col items-center justify-center gap-6`}
        style={{ backgroundColor: "rgba(11,11,11,0.95)" }}
      >
        <nav className="flex flex-col items-center gap-8">
          {[
            { href: "/about", label: "ABOUT" },
            { href: "/portfolio", label: "PORTFOLIO" },
            { href: "/services", label: "SERVICES" },
            { href: "/contact", label: "CONTACT" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm uppercase font-medium relative group px-6 py-2 transition-all duration-300"
              style={{
                color: silver,
                letterSpacing: "0.2em",
                fontFamily: "'Georgia', serif",
              }}
            >
              <span className="relative z-10">{label}</span>
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: warmHighlight }}
                whileHover={{ width: "100%" }}
              />
            </Link>
          ))}
        </nav>
      </div>
      <div
        className="h-20 z-30 md:hidden flex px-8 items-center justify-between sticky top-0 left-0"
        style={{ backgroundColor: noir }}
      >
        <Link
          href="/"
          className="text-xl font-light tracking-wider hover:opacity-70 transition-all duration-300"
          style={{ color: silver, fontFamily: "'Georgia', serif" }}
        >
          MUSHAN KHAN
        </Link>
        {open ? (
          <X style={{ color: silver }} onClick={() => setOpen(!open)} />
        ) : (
          <AlignJustify style={{ color: silver }} onClick={() => setOpen(!open)} />
        )}
      </div>
    </>
  );
};

export default function NoirNavbar() {

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="lg:absolute hidden lg:flex justify-between top-0 w-full h-24 px-4 md:px-4 z-50 pt-4"
    >
      <div
        className="h-full w-full flex items-center justify-between px-2 md:px-12 transition-all duration-300"
        style={{
          backgroundColor: "rgba(11,11,11,0.85)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(200,200,200,0.06)",
        }}
      >
        <Link
          href="/"
          className="text-xl font-light tracking-wider hover:opacity-70 transition-all duration-300 relative group flex items-center gap-3"
          style={{ color: silver, fontFamily: "'Georgia', serif" }}
        >
          <Film size={16} style={{ color: silverDim }} />
          <span className="relative px-4 z-10">MUSHAN KHAN</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-8 md:gap-12">
          {[
            { href: "/about", label: "ABOUT" },
            { href: "/portfolio", label: "PORTFOLIO" },
            { href: "/services", label: "SERVICES" },
            { href: "/contact", label: "CONTACT" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[11px] uppercase relative group px-4 py-2 transition-all duration-300"
              style={{
                color: silverDim,
                letterSpacing: "0.25em",
                fontFamily: "'Georgia', serif",
              }}
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300" style={{ color: "inherit" }}>
                {label}
              </span>
              <span
                className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: warmHighlight }}
              />
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}

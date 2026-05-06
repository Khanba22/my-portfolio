"use client";

import Link from "next/link";
import { ExternalLink, Film } from "lucide-react";
import certificateData from "@/data/Certification.json";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { noir, silver, silverDim, warmHighlight, FilmGrain } from "../ui/NoirTheme";

export default function NoirCertificateCards() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-16 px-4 md:px-8 overflow-hidden" style={{ backgroundColor: noir }}>
      <FilmGrain />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Film size={14} style={{ color: silverDim }} />
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(200,200,200,0.08)" }} />
          </div>
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] mb-4" style={{ color: silverDim }}>
            Awards Reel
          </p>
          <h2
            className="text-3xl md:text-4xl font-light tracking-tight"
            style={{ color: silver, fontFamily: "'Georgia', serif" }}
          >
            Certifi<span className="italic" style={{ color: warmHighlight }}>cations</span>
          </h2>
        </div>

        <div
          className="grid gap-px md:grid-cols-2 lg:grid-cols-3"
          style={{ backgroundColor: "rgba(200,200,200,0.04)" }}
        >
          {certificateData.map((certificate, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 + i * 0.08 }}
              className="relative p-6 group"
              style={{ backgroundColor: noir }}
            >
              {/* Spotlight on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(232,213,181,0.04) 0%, transparent 70%)" }}
              />

              <div className="relative space-y-4">
                <p className="text-[9px] uppercase tracking-[0.3em]" style={{ color: "rgba(200,200,200,0.2)" }}>
                  Scene {String(i + 1).padStart(2, "0")}
                </p>

                {/* PDF Preview */}
                <div className="aspect-[4/3] overflow-hidden" style={{ border: "1px solid rgba(200,200,200,0.06)" }}>
                  <iframe src={certificate.pdf} className="w-full h-full" title={`Certificate - ${certificate.name}`} />
                </div>

                <h3
                  className="text-base font-light"
                  style={{ color: silver, fontFamily: "'Georgia', serif" }}
                >
                  {certificate.name}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.25em]" style={{ color: warmHighlight, opacity: 0.6 }}>
                  {certificate.provider}
                </p>
                {certificate.grade && (
                  <p className="text-xs" style={{ color: silverDim }}>
                    Grade: {certificate.grade}
                  </p>
                )}

                <Link
                  href={certificate.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-2 text-[10px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 mt-2"
                  style={{ backgroundColor: "transparent", color: warmHighlight, border: `1px solid ${warmHighlight}` }}
                >
                  <ExternalLink size={12} />
                  Verify
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom rule */}
        <div className="flex items-center gap-3 mt-12">
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(200,200,200,0.08)" }} />
          <p className="text-[9px] uppercase tracking-[0.3em]" style={{ color: "rgba(200,200,200,0.15)" }}>
            Fin
          </p>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(200,200,200,0.08)" }} />
        </div>
      </div>
    </section>
  );
}

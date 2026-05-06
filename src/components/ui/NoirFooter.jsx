"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Film } from "lucide-react";
import { noir, silver, silverDim, warmHighlight, FilmGrain, NoirDivider } from "./NoirTheme";

export default function NoirFooter() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    const footer = document.getElementById("noir-footer");
    if (footer) observer.observe(footer);
    return () => { if (footer) observer.unobserve(footer); };
  }, []);

  return (
    <footer
      id="noir-footer"
      className="relative overflow-hidden py-20 px-6"
      style={{ backgroundColor: noir }}
    >
      <FilmGrain />

      <div className="container mx-auto relative z-10 max-w-5xl">
        {/* Header divider */}
        <div className="flex items-center gap-3 mb-12">
          <Film size={14} style={{ color: silverDim }} />
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(200,200,200,0.08)" }} />
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2
              className="text-2xl font-light tracking-tight"
              style={{ color: silver, fontFamily: "'Georgia', serif" }}
            >
              Mushan <span className="italic" style={{ color: warmHighlight }}>Khan</span>
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: silverDim }}>
              A passionate software engineer crafting innovative solutions with precision and purpose.
            </p>
            <div className="flex space-x-5">
              {[
                { href: "https://github.com/Khanba22", icon: <Github className="h-4 w-4" />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/mushankhan/", icon: <Linkedin className="h-4 w-4" />, label: "LinkedIn" },
                { href: "https://instagram.com/mushan_khan_22", icon: <Instagram className="h-4 w-4" />, label: "Instagram" },
              ].map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="transition-all duration-300 hover:scale-110"
                  style={{ color: silverDim }}
                >
                  {s.icon}
                  <span className="sr-only">{s.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3
              className="text-[10px] font-medium uppercase tracking-[0.35em]"
              style={{ color: silverDim }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Portfolio", "About", "Contact", "Services"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm flex items-center group transition-all duration-300"
                    style={{ color: silverDim }}
                  >
                    <span
                      className="h-px w-0 mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2"
                      style={{ backgroundColor: warmHighlight }}
                    />
                    <span className="group-hover:text-white transition-colors duration-300" style={{ color: "inherit" }}>
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3
              className="text-[10px] font-medium uppercase tracking-[0.35em]"
              style={{ color: silverDim }}
            >
              Services
            </h3>
            <ul className="space-y-3">
              {["Web Applications", "AI Integrations", "UI/UX Design", "Consulting"].map((service) => (
                <li
                  key={service}
                  className="text-sm flex items-center group"
                  style={{ color: silverDim }}
                >
                  <span
                    className="h-px w-0 mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2"
                    style={{ backgroundColor: warmHighlight }}
                  />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3
              className="text-[10px] font-medium uppercase tracking-[0.35em]"
              style={{ color: silverDim }}
            >
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="text-sm flex items-center space-x-3" style={{ color: silverDim }}>
                <MapPin className="h-4 w-4" style={{ color: warmHighlight, opacity: 0.6 }} />
                <span>Nagpur, Maharashtra, India</span>
              </li>
              <li className="text-sm flex items-center space-x-3" style={{ color: silverDim }}>
                <Mail className="h-4 w-4" style={{ color: warmHighlight, opacity: 0.6 }} />
                <Link href="mailto:mushankhan27@gmail.com" className="hover:text-white transition-colors duration-300">
                  mushankhan27@gmail.com
                </Link>
              </li>
              <li className="text-sm flex items-center space-x-3" style={{ color: silverDim }}>
                <Phone className="h-4 w-4" style={{ color: warmHighlight, opacity: 0.6 }} />
                <span>+91 8624909744</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className={`mt-16 flex flex-col sm:items-center justify-between border-t pt-8 sm:flex-row transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ borderColor: "rgba(200,200,200,0.06)" }}
        >
          <p className="text-xs" style={{ color: "rgba(200,200,200,0.2)" }}>
            © 2025 Mushan Khan. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6 sm:mt-0">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs hover:text-white transition-colors duration-300"
                style={{ color: "rgba(200,200,200,0.2)" }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

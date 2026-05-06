"use client";

import { useEffect, useState } from "react";
import { Film } from "lucide-react";
import { motion } from "framer-motion";
import NoirFooter from "@/components/ui/NoirFooter";
import NoirProjectCards from "@/components/ui/NoirProjectCards";
import NoirSkillCards from "@/components/ui/NoirSkillCards";
import NoirCertificateCards from "@/components/ui/NoirCertificateCards";
import NoirTestimonialCards from "@/components/ui/NoirTestimonialCards";
import { noir, silver, silverDim, warmHighlight, FilmGrain } from "@/components/ui/NoirTheme";

const PortfolioPage = () => {
  const [tab, setTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [tabChanging, setTabChanging] = useState(false);
  const [activeContent, setActiveContent] = useState(null);

  const tabMap = [
    <NoirProjectCards key="projects" />,
    <NoirSkillCards key="skills" />,
    <NoirCertificateCards key="certificates" />,
    <NoirTestimonialCards key="testimonials" />,
  ];

  useEffect(() => {
    setIsVisible(true);
    setActiveContent(tabMap[tab]);
  }, []);

  useEffect(() => {
    if (tabChanging) {
      const timer = setTimeout(() => {
        setActiveContent(tabMap[tab]);
        setTabChanging(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [tabChanging, tab]);

  const handleTabChange = (index) => {
    if (index === tab) return;
    setTabChanging(true);
    setTab(index);
  };

  const tabLabels = ["Projects", "Skills", "Certifications", "Testimonials"];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: noir }}>
      <FilmGrain />

      <div className="container mx-auto px-4 pt-12 mt-8 relative z-10">
        <div
          className={`sm:text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p
            className="text-[11px] uppercase tracking-[0.5em] mb-4 text-center"
            style={{ color: silverDim }}
          >
            The Screening Room
          </p>
          <h1
            className="text-4xl md:text-6xl font-light tracking-tight mb-4 text-center"
            style={{ color: silver, fontFamily: "'Georgia', serif" }}
          >
            Portfolio <span className="italic" style={{ color: warmHighlight }}>Showcase</span>
          </h1>
          <p
            className="max-w-2xl mx-auto text-sm leading-relaxed text-center"
            style={{ color: silverDim }}
          >
            Explore my journey through projects, certifications, and technical
            expertise. Each section represents a milestone in my continuous
            learning path.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:mt-12 flex justify-center items-center flex-col relative z-10">
        <div
          className={`flex flex-wrap sm:flex-nowrap gap-2 justify-evenly items-center w-full sm:w-3/4 mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {tabLabels.map((section, index) => {
            const isActive = tab === index;
            return (
              <div
                key={index}
                className="transition-all duration-500 flex-1 min-w-[100px] sm:min-w-0"
              >
                <button
                  onClick={() => handleTabChange(index)}
                  className="w-full py-3 px-3 sm:px-6 text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-300 relative overflow-hidden"
                  style={{
                    backgroundColor: isActive ? "rgba(255,255,255,0.03)" : "transparent",
                    color: isActive ? warmHighlight : silverDim,
                    border: `1px solid ${isActive ? "rgba(232,213,181,0.3)" : "rgba(200,200,200,0.06)"}`,
                  }}
                >
                  {section}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 h-px w-full"
                      style={{ backgroundColor: warmHighlight }}
                    />
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Content */}
        <div
          className="w-full transition-all duration-300"
          style={{
            opacity: tabChanging ? 0 : 1,
            transform: tabChanging ? "translateY(20px)" : "translateY(0)",
          }}
        >
          {activeContent}
        </div>
      </div>

      <NoirFooter />
    </div>
  );
};

export default PortfolioPage;
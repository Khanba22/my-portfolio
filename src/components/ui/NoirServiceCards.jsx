"use client";

import { useEffect, useState } from "react";
import { Code, ShoppingCart, Brain, Monitor, Server, Film } from "lucide-react";
import servicesData from "@/data/services.json";
import { motion } from "framer-motion";
import { noir, silver, silverDim, warmHighlight, FilmGrain } from "../ui/NoirTheme";

const getIconComponent = (iconName) => {
  const iconMap = { Code, ShoppingCart, Brain, Monitor, Server };
  return iconMap[iconName] || Code;
};

const serviceTitles = {
  all: "All Services",
  webapps: "Web Applications",
  shopify: "Shopify Solutions",
  ai: "AI Integrations",
  frontend: "Frontend Development",
  backend: "Backend Development",
};

export default function NoirServiceCards({ serviceType }) {
  const [isVisible, setIsVisible] = useState(false);

  let services = [];
  if (serviceType === "all") {
    Object.values(servicesData).forEach((categoryServices) => {
      services = services.concat(categoryServices);
    });
  } else {
    services = servicesData[serviceType] || [];
  }

  useEffect(() => {
    setIsVisible(true);
  }, [serviceType]);

  return (
    <section className="relative py-16 px-4 sm:px-8 overflow-hidden" style={{ backgroundColor: noir }}>
      <FilmGrain />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Film size={14} style={{ color: silverDim }} />
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(200,200,200,0.08)" }} />
          </div>
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] mb-4" style={{ color: silverDim }}>
            The Production
          </p>
          <h2
            className="text-3xl md:text-4xl font-light tracking-tight"
            style={{ color: silver, fontFamily: "'Georgia', serif" }}
          >
            {serviceTitles[serviceType]?.split(" ")[0]}{" "}
            <span className="italic" style={{ color: warmHighlight }}>
              {serviceTitles[serviceType]?.split(" ").slice(1).join(" ")}
            </span>
          </h2>
        </div>

        <div
          className="grid gap-px md:grid-cols-2 lg:grid-cols-3"
          style={{ backgroundColor: "rgba(200,200,200,0.04)" }}
        >
          {services.map((service, i) => {
            const IconComponent = getIconComponent(service.icon);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 + i * 0.08 }}
                className="relative p-8 group"
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

                  {/* Icon */}
                  <div
                    className="w-10 h-10 flex items-center justify-center"
                    style={{ border: "1px solid rgba(200,200,200,0.1)" }}
                  >
                    <IconComponent className="w-5 h-5" style={{ color: warmHighlight, opacity: 0.7 }} />
                  </div>

                  <h3
                    className="text-base font-light"
                    style={{ color: silver, fontFamily: "'Georgia', serif" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed italic line-clamp-3"
                    style={{ color: silverDim, fontFamily: "'Georgia', serif" }}
                  >
                    {service.description}
                  </p>

                  {/* Features */}
                  {service.features && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] uppercase tracking-[0.15em] px-2 py-0.5"
                          style={{ color: silverDim, border: "1px solid rgba(200,200,200,0.08)" }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-2 text-[10px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 mt-2"
                    style={{ backgroundColor: "transparent", color: warmHighlight, border: `1px solid ${warmHighlight}` }}
                  >
                    Enquire
                  </a>
                </div>
              </motion.div>
            );
          })}
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

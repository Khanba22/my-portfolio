"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ExternalLink, Github, Film } from "lucide-react";
import { motion } from "framer-motion";
import projects from "@/data/Projects.json";
import { noir, silver, silverDim, warmHighlight, FilmGrain } from "@/components/ui/NoirTheme";

const page = () => {
  const [projectDetails, setProjectDetails] = useState({});

  useEffect(() => {
    const pid = window?.location.pathname.split("/").pop();
    const currentProject = projects[pid];
    setProjectDetails(currentProject);
  }, []);

  if (!projectDetails)
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: noir }}>
        <h1 className="text-xl font-light" style={{ color: silver, fontFamily: "'Georgia', serif" }}>
          Project Not Found
        </h1>
      </div>
    );

  return (
    <div className="min-h-screen relative p-8" style={{ backgroundColor: noir }}>
      <FilmGrain />

      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <Film size={14} style={{ color: silverDim }} />
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(200,200,200,0.08)" }} />
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:opacity-80"
              style={{ color: warmHighlight }}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </Link>
            <h1
              className="text-3xl font-light"
              style={{ color: silver, fontFamily: "'Georgia', serif" }}
            >
              {projectDetails.title}
            </h1>
          </div>
          <p className="text-sm leading-relaxed max-w-3xl italic" style={{ color: silverDim, fontFamily: "'Georgia', serif" }}>
            {projectDetails.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="space-y-6">
              {/* Image with letterbox */}
              <div className="relative overflow-hidden" style={{ border: "1px solid rgba(200,200,200,0.06)" }}>
                <div className="absolute top-0 left-0 right-0 h-4 bg-black z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-black z-10" />
                <img
                  src={projectDetails.image}
                  alt={projectDetails.title}
                  className="w-full aspect-video object-cover"
                  style={{ filter: "grayscale(0.4) brightness(0.7)" }}
                />
              </div>

              {/* Technologies */}
              {projectDetails.technologyUsed && (
                <div>
                  <h2
                    className="text-[10px] font-medium uppercase tracking-[0.35em] mb-4"
                    style={{ color: silverDim }}
                  >
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {projectDetails?.technologyUsed?.map((tech, index) => (
                      <span
                        key={index}
                        className="text-[9px] uppercase tracking-[0.15em] px-3 py-1"
                        style={{ color: warmHighlight, opacity: 0.7, border: "1px solid rgba(232,213,181,0.2)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              <div className="flex gap-4">
                {projectDetails.link && (
                  <Link
                    href={projectDetails.link}
                    className="inline-flex items-center px-6 py-2 text-[10px] uppercase tracking-[0.2em] transition-colors duration-300"
                    style={{ backgroundColor: warmHighlight, color: noir }}
                  >
                    <ExternalLink className="w-3 h-3 mr-2" />
                    Live Demo
                  </Link>
                )}
                {/* {projectDetails.github && (
                  <Link
                    href={projectDetails.github}
                    className="inline-flex items-center px-6 py-2 text-[10px] uppercase tracking-[0.2em] transition-colors duration-300"
                    style={{ color: silver, border: "1px solid rgba(200,200,200,0.15)", backgroundColor: "transparent" }}
                  >
                    <Github className="w-3 h-3 mr-2" />
                    GitHub
                  </Link>
                )} */}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div>
                <h2
                  className="text-[10px] font-medium uppercase tracking-[0.35em] mb-4"
                  style={{ color: silverDim }}
                >
                  Key Features
                </h2>
                <ul className="space-y-3 lg:h-[50vh] overflow-y-scroll">
                  {projectDetails?.features?.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start text-sm"
                      style={{ color: silverDim }}
                    >
                      <span className="mt-2 h-px w-3 flex-shrink-0 mr-3" style={{ backgroundColor: warmHighlight, opacity: 0.4 }} />
                      <span className="italic leading-relaxed" style={{ fontFamily: "'Georgia', serif" }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

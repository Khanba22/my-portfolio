import NoirAboutHero from "@/components/ui/NoirAboutHero";
import NoirExperience from "@/components/ui/NoirExperience";
import NoirFooter from "@/components/ui/NoirFooter";
import React from "react";

export const metadata = {
  title: "About Me",
  description: "Learn more about Mushan Khan - my background, experience, education, and journey as a Software Engineer. Discover my passion for technology and continuous learning.",
  keywords: [
    "About Mushan Khan",
    "Software Engineer Background",
    "Developer Experience",
    "Technology Journey",
    "Education Background",
    "Professional Experience"
  ],
  openGraph: {
    title: "About Mushan Khan - Software Engineer & Developer",
    description: "Learn more about Mushan Khan - my background, experience, education, and journey as a Software Engineer. Discover my passion for technology and continuous learning.",
    url: "https://mushankhan.com/about",
  },
  twitter: {
    title: "About Mushan Khan - Software Engineer & Developer",
    description: "Learn more about Mushan Khan - my background, experience, education, and journey as a Software Engineer.",
  },
};

const page = () => {
  return (
    <div>
      <NoirAboutHero />
      <NoirExperience />
      <NoirFooter />
    </div>
  );
};

export default page;

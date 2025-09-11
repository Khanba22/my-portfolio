import React from "react";

const LeftContent = () => {
  return (
    <div className="w-full h-full flex flex-col justify-end p-2">
      <p 
        className="text-justify leading-relaxed overflow-hidden"
        style={{
          color: "var(--card-dark-text-light)",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 6,
          WebkitBoxOrient: "vertical",
          lineHeight: "1.6",
          fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
        }}
      >
        Hi, I'm Mushan Khan — a full stack developer passionate about building modern, user-friendly web applications. I've worked on everything from AI tools to no-code platforms, always aiming to deliver scalable, well-structured solutions. Let's connect and see how we can build something impactful.
      </p>
    </div>
  );
};

export default LeftContent;

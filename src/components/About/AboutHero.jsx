import React from "react";

const AboutHero = () => {
  return (
    <div className="w-full h-auto lg:h-[60vh] mt-4 gap-4 flex flex-col lg:flex-row p-4">
      <div className="bg-purple-800 flex-1 flex flex-col justify-center h-full p-4">
        <h1 className="text-5xl">Netal Sarda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          exercitationem voluptas quaerat obcaecati at reiciendis consectetur
          ipsum odio omnis maxime?
        </p>
        <div className="flex w-1/2 justify-evenly gap-4">
          <button className="p-2 bg-blue-400 rounded-lg flex-1">
            Download Resume
          </button>
          <button className="p-2 bg-blue-400 rounded-lg flex-1">
            Get in touch
          </button>
        </div>
      </div>
      <div className="bg-red-700 flex-1 h-full">
        {/* Image */}
        <img
          className="h-full w-full object-cover"
          src="/images/profile-photo.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutHero;

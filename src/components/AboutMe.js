import React from "react";
import Avatar from "../Assets/Gaurav-Avatar.jpg";
import { IoLocationSharp } from "react-icons/io5";

const AboutMe = () => {
  return (
    <div className="container flex flex-col md:flex-row items-center justify-center p-2 md:p-0 mx-auto mt-8">
      <div className="md:w-2/5 mb-8 md:mb-0 md:ml-20 ">
        <h1 className="font-Montserrat text-5xl md:text-7xl  font-medium mb-4">
          Introduction
        </h1>
        <p className="text-base md:text-lg mb-4">
          Hello, I'm Gaurav De, an aspiring game programmer from India. I hold a
          Bachelor's degree in Computer Applications. Initially drawn to game
          design, my journey led me to explore coding prototypes within the
          Unity Engine, where I developed a deep fascination for game
          programming. Along the way, I also ventured into web development,
          broadening my technical skills. However, my true passion lies in
          crafting efficient code to create engaging gameplay experiences. As a
          result, I chose to dive into the intricacies of the C++ programming
          language, focusing on working with libraries to build games
          independently instead of relying on Game Engines.
        </p>
        <div className="flex gap-8">
          <a
            href="https://github.com/GauravDe-git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="py-2 px-6 bg-gray-800 text-white rounded-md transition hover:bg-gray-100 hover:text-black hover:border-black border-2">
              View Github
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/gaurav-de-0007/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="py-2 px-6 border-gray-500 border-2 rounded-md transition hover:border-gray-100 hover:bg-blue-500 hover:text-white">
              View Linkedin
            </button>
          </a>
        </div>
      </div>
      <div className="md:w-1/5 flex flex-col items-center ">
        <img
          src={Avatar}
          alt="Gaurav De"
          className="w-48 h-48 rounded-full mb-4"
        />
        <h2 className="text-xl font-bold mb-2">Gaurav De</h2>
        <p className="text-xs mb-2">Aspiring Game Programmer</p>
        <div className="flex items-center text-sm">
          <IoLocationSharp />
          <span className="ml-2">Kolkata, India</span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import sc1 from "../Assets/sc1.png";
import sc2 from "../Assets/sc2.png";
import sc3 from "../Assets/sc3.png"

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <div className="md:w-2/3 container mx-auto my-16 bg-gray-50 shadow-md p-16">
          <h1 className="text-4xl font-bold mb-4">Mini Assailants</h1>
          <p className="mb-4">Mini Assailants is an exciting 2D beat 'em up game that pays homage to the classic beat 'em up titles of the past while injecting its own unique charm. Drawing inspiration from beloved classics like Little Fighter 2 and Hero Fighter, Mini Assailants offers a thrilling gameplay experience that combines fast-paced action, engaging combat mechanics, and a touch of nostalgia.</p>
          <h2 className="text-3xl font-bold mb-2">Controls</h2>
          <div className="mb-4">
            <p><span className="font-bold">W,A,S,D or the Arrow Keys: </span> Move the player</p>
            <p><span className="font-bold">H: </span> Light Attack</p>
            <p><span className="font-bold">Double Tap H: </span> Heavy Attack</p>
            <p><span className="font-bold">Y: </span> Special Attack</p>
            <p className="mt-2 font-bold">Settings</p>
            <p><span className="font-bold">V: </span> Toggle V-Sync</p>
            <p><span className="font-bold">F11: </span>Switch/Exit FullScreen</p>
          </div>
          <h2 className="text-3xl font-bold mb-2">Objective</h2>
          <p className="mb-4">The primary objective in Mini Assailants is to move forward in the level and defeat the adversary ahead using the versatile combat mechanics at the player character's disposal. These mechanics include basic light and heavy attack, along with a special move. </p>
          <h2 className="text-3xl font-bold mb-2">Screenshots</h2>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {/* Add your images here */}
            <img src={sc1} alt="Screenshot 1" />
            <img src={sc2} alt="Screenshot 2" />
            <img src={sc3} alt="Screenshot 3" />
          </div>
          <h2 className="text-3xl font-bold mb-2">Videos</h2>
          <div className="mb-4">
            {/* Add your videos here */}
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/pMUw48neZS4?si=BNNX0HRKyKEVBdH0" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
            />
          </div>
          <h2 className="text-3xl font-bold mb-2">Download</h2>
          <p className="mb-4">
            <a href="https://github.com/GauravDe-git/MiniAssailants_CppGame/releases/download/v1.0.0/MiniAssailants_CppGame.zip" download>Click here to download the game</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;

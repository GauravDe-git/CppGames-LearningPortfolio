import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import sc1 from "../Assets/1.png";
import sc2 from "../Assets/2.png";
import sc3 from "../Assets/3.png"

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <div className="md:w-2/3 container mx-auto my-16 bg-gray-50 shadow-md p-16">
          <h1 className="text-4xl font-bold mb-4">Mini Assailants</h1>
          <p className="mb-4">Mini Assailant's is a 2D Beat'em Up fighting game that draws inspiration from childhood favorites like Hero Fighter and Little Fighter 2, both still beloved indie games with a strong fanbase. In this game, players command a formidable fighter with special abilities such as a fire punch and uppercut. Engaging in intense button-mashing, players confront incoming enemies. Special attacks consume 'Mana Points' (MP), and defeating enemies offers a chance to obtain health (hp) or mana (mp) potions, along with collectible coins. The game spans three levels: the first set in a cyberpunk city with goblins and skeletons, leading to a powerful golem boss; the second in an abandoned industry site featuring harpies and centaurs, concluding with a formidable gargoyle boss; and the final level in an experimental lab where agile cerberus creatures culminate in a showdown with the ultimate boss, the Flying Eye. Players can select their desired level from the menu.</p>
          <h2 className="text-3xl font-bold mb-2">Controls</h2>
          <div className="mb-4">
            <p><span className="font-bold">W,A,S,D or the Arrow Keys: </span> Move the player</p>
            <p><span className="font-bold">H: </span> Light Attack</p>
            <p><span className="font-bold">Double Tap H: </span> Light Attack 2</p>
            <p><span className="font-bold">J: </span> Heavy Attack</p>
            <p><span className="font-bold">Double Tap J: </span> Heavy Attack 2</p>
            <p><span className="font-bold">Y: </span> Special Attack 1</p>
            <p><span className="font-bold">Y: </span> Special Attack 2</p>
            <p><span className="font-bold">P: </span> Pause Game</p>
            <p className="mt-2 font-bold">Settings</p>
            <p><span className="font-bold">V: </span> Toggle V-Sync</p>
            <p><span className="font-bold">F11: </span>Switch/Exit FullScreen</p>
            <p><span className="font-bold">Esc: </span>Exit Game</p>
          </div>
          <h2 className="text-3xl font-bold mb-2">Objective</h2>
          <p className="mb-4">In this game, the player controls a fighter who possesses various attacks and special abilities. The goal of the game is to move forward in the level and defeat the waves of all incoming enemies. The special attacks of the player consume 'mana points'. Defeating enemies drop coins, and additionally, there is a random chance to get drops of health potions or mana potions which can refill the respective stats of the player. To 'win', the player is required to defeat enemies in all levels. Health dropping to 0 results in game over, and the player has to start over. There is an option to select the starting level in the menu, and a help section for instructions to play the game.
 </p>
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
              src="https://www.youtube.com/embed/qABiwNVhDQc?si=EgZO5KRdjtVMJpD6" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
            />
          </div>
          <h2 className="text-3xl font-bold mb-2">Download</h2>
          <p className="">
            <a href="https://manoyal.itch.io/mini-assailants" download>Click <span className="font-bold">here </span>to download the game</a>
          </p>
          <p className="mb-4">
            <a href="https://github.com/GauravDe-git/MiniAssailants_CppGame" download>Click <span className="font-bold">here </span>to see source code</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;

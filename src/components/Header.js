import React from "react";
import {BsController} from 'react-icons/bs'

const Header = () => {
  return (
    <div className="min-h-screen bg-gray-100 min-w-screen">
      {/* Header Menu Left */}
      <header className="font-Montserrat w-full text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font">
        <div className="container flex items-center justify-between p-6 mx-auto">
          <div className="flex gap-2">
            <a className="font-RetroGaming flex items-center mb-4 font-light text-4xl text-gray-900 title-font md:mb-0 border-r pr-2">
              CPP
            </a>
            <BsController color="Gray" size={40}/>
          </div>
          <nav className="flex flex-wrap items-center ml-auto mr-2 text-base border-gray-200 pl-1 gap-2">
            <a
              href="#_"
              className="mr-5 p-2 text-lg font-medium rounded-lg transition hover:text-white hover:bg-blue-500"
            >
              Home
            </a>
            <a
              href="#_"
              className="mr-5 p-2 text-lg font-medium rounded-lg transition hover:text-white hover:bg-blue-500"
            >
              Learning
            </a>
            <a
              href="#_"
              className="p-2 text-lg font-medium rounded-lg transition hover:text-white hover:bg-blue-500"
            >
              Projects
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;

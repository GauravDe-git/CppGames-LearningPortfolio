import React from "react";
import {BsController} from 'react-icons/bs'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-gray-100 min-w-screen">
      {/* Header Menu Left */}
      <header className="font-Montserrat w-full text-gray-700 bg-white border-t border-gray-100 shadow-md body-font">
        <div className="container flex items-center justify-between p-6">
          <div className="flex gap-2 mx-auto">
            <Link to="/" className="font-RetroGaming flex items-center mb-4 font-light text-4xl text-gray-900 title-font md:mb-0 border-r pr-2">
              CPP
            </Link>
            <BsController color="Gray" size={40}/>
          </div>
          <nav className="flex flex-wrap items-center ml-auto mr-2 text-base border-gray-200 pl-1 gap-2">
            <Link
              to="/"
              className="mr-5 p-2 text-lg font-bold rounded-lg transition hover:text-white hover:bg-blue-500"
            >
              Home
            </Link>
            <Link
              to="/learning"
              className="mr-5 p-2 text-lg font-medium rounded-lg transition hover:text-white hover:bg-blue-500"
            >
              Learning
            </Link>
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

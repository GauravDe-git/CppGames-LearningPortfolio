import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <div className="md:w-2/3 container mx-auto my-16 bg-gray-50 shadow-md p-16">
          My Project will be posted here.
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;

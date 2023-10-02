import React, { useState, useEffect } from "react";
import { CiCircleChevDown } from "react-icons/ci";
import hljs from "highlight.js";
import "highlight.js/styles/monokai.css"; // replace 'github' with the theme you prefer

const Week = ({ weekData }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    hljs.highlightAll();
  }, [weekData, isOpen]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b-2 border-cyan-500">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-cyan-500 p-2 mx-2 mt-2 underline">
          {weekData.title}
        </h2>
        <CiCircleChevDown size={35} className="mr-5" onClick={toggleOpen} />
      </div>
      <h3 className="text-lg p-2">
        <span className="font-bold">Published: </span> {weekData.published}
      </h3>
      <p className="p-2">{weekData.description}</p>
      {isOpen && (
        <div className="p-2">
          <h2 className="font-bold text-lg">Plan</h2>
          {weekData.plan.map((block, index) => {
            switch (block.type) {
              case "text":
                return (
                  <p key={index} className="mb-4">
                    {block.content}
                  </p>
                );
              default:
                return null;
            }
          })}
          <h2 className="font-bold text-lg">Do</h2>
          {weekData.do.map((block, index) => {
            switch (block.type) {
              case "text":
                return (
                  <p key={index} className="mb-4">
                    {block.content}
                  </p>
                );
              case "code":
                return (
                  <pre key={index} className="mx-auto max-h-[500px] w-3/4 overflow-auto">
                    <code className="language-cpp">{block.content}</code>
                  </pre>
                );
              default:
                return null;
            }
          })}
          <h2 className="font-bold text-lg">Check</h2>
          {weekData.check.map((block, index) => {
            switch (block.type) {
              case "text":
                return (
                  <p key={index} className="mb-4">
                    {block.content}
                  </p>
                );
              default:
                return null;
            }
          })}
          <h2 className="font-bold text-lg">Act</h2>
          <p className="mb-4">{weekData.act}</p>
        </div>
      )}
    </div>
  );
};

export default Week;

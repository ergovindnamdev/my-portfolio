import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function MangoITSolutions() {
  const tasks = [ 
    {
      text: "Worked on the front-end development in the MERN Stack domain using React.js, Next.js, Node.js, Tailwind CSS, Express.js, MySQL, WP",
      keywords: ["React.js", "Next.js", "Node.js", "MySQL", "WP", "Express.js"],
    },
    {
      text: "Led and managed a dynamic team of 15 members proficient in Full Stack MERN development and WordPress customization",
      keywords: ["Lead", "dynamic team"],
    },
    {
      text: "Reviewed daily requirements and forecasts and delegated work for optimal coverage. Worked with team to identify areas of improvement and devised solutions based on findings.",
      keywords: [""],
    },
    {
      text: "Developed and implemented bug fixes and patch sets for existing web applications",
      keywords: [""],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Team Lead & Full Stack Engineer<span className="text-AAsecondary">@MERN & WP</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Jan 2015 - Working</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.mangoitsolutions.com/", "_blank")}
          >
            www.mangoitsolutions.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function HimanshuSoftech() {
  const tasks = [
    {
      text: "Developed robust web applications utilizing PHP, WordPress, and JavaScript technologies such as Ajax and JSON, resulting in the successful completion of multiple projects.",
      keywords: ["WordPress", "PHP", "JavaScript"],
    },
    {
      text: "Demonstrated strong teamwork and collaboration skills by actively engaging with fellow developers, contributing to code creation, and fostering a culture of shared learning within the team.",
      keywords: [""],
    },
    {
      text: "Engaged in close collaboration with the Team Lead (TL) across various projects, leveraging their expertise to gain valuable insights into best practices in web development, thereby enhancing both individual and team performance.",
      keywords: [""],
    },
  ];

  


  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-500 sm:text-lg text-sm font-Arimo tracking-wide">
            Web Developer <span className="text-AAsecondary">@ WordPress</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Nov 2011 - Nov 2012</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() =>
              window.open("https://www.himanshusofttech.com/", "_blank")
            }
          >
            www.himanshusofttech.com
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

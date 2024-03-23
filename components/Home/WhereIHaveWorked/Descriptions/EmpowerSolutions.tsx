import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function EmpowerSolutions() {
  const tasks = [
    {
      text: "Developed cutting-edge web applications leveraging PHP, WordPress, and JavaScript (including Ajax and JSON), ensuring seamless functionality and user experience.",
      keywords: ["PHP", "wordpress", "JavaScript"],
    },
    {
      text: "Employed a comprehensive tech stack encompassing HTML, CSS, JavaScript, and jQuery to craft visually stunning and interactive web pages, enhancing user engagement and satisfaction.",
      keywords: [""],
    },
    {
      text: "Demonstrated a strong commitment to website security by conducting regular maintenance checks and promptly applying patches, safeguarding the integrity of the website interface throughout its lifecycle.",
      keywords: [""],
    },
    {
      text: "Prioritized performance optimization strategies to enhance speed, scalability, and security features, ensuring that web applications met the highest standards of quality and reliability.",
      keywords: [""],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Web Developer <span className="text-AAsecondary">@ WordPress</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Dec 2012 - Jan 2014
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() =>
              window.open("https://www.empower-solutions.com/", "_blank")
            }
          >
            www.empower-solutions.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
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

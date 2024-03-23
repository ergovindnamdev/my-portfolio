import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function HitaishinInfotech() {
  const tasks = [
    {
      text: "Utilized a tech stack including PHP, HTML, CSS, JavaScript, and jQuery to create dynamic web pages.",
      keywords: ["PHP", "HTML", "CSS", "JavaScript", "jQuery"],
    },
    {
      text: "Analyzed coding requirements for specialized scripts, ensuring efficient execution.",
      keywords: [""],
    },
    {
      text: "Translated mockups into functional web interfaces using HTML, JavaScript, AJAX, and JSON.",
      keywords: [],
    },
    {
      text: "Led front-end website development using platforms such as WordPress and HubSpot.",
      keywords: [],
    },
    {
      text: "Adhered to SEO best practices while designing and optimizing sites for search engines.",
      keywords: [],
    },
    {
      text: "Developed technical solutions to accommodate specific user-facing assets, enhancing overall user experience.",
      keywords: [],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Web Developer <span className="text-AAsecondary">@ PHP</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Jan 2014 - Dec 2014
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://hitaishin.com/", "_blank")}
          >
            hitaishin.com
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

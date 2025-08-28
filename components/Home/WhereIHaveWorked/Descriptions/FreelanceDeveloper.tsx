
import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function FreelanceDeveloper() {
  const tasks = [
    {
      text: "Helping clients build scalable SaaS platforms using modern technologies like React.js, Next.js, Node.js, and cloud services",
      keywords: ["SaaS", "React.js", "Next.js", "Node.js"],
    },
    {
      text: "Developing custom eCommerce solutions with integrated payment systems, inventory management, and user-friendly interfaces",
      keywords: ["eCommerce", "payment systems"],
    },
    {
      text: "Providing end-to-end project development services from initial concept and architecture design to deployment and maintenance",
      keywords: ["end-to-end", "deployment"],
    },
    {
      text: "Specializing in AI-integrated applications and modern web development practices to deliver high-performance solutions",
      keywords: ["AI-integrated", "high-performance"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-500 sm:text-lg text-sm font-Arimo tracking-wide">
            Full Stack Developer & SaaS/eCommerce Specialist<span className="text-AAsecondary"> @ Freelance</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Jan 2025 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://www.govindnam.dev/", "_blank")}
          >
            www.govindnam.dev
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description */}
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

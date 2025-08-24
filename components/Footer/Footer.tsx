import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";

const ClickableIcon = (props) => {
  return (
    <a href={props.href} className="" target={"_blank"} rel="noreferrer">
      <props.Icon
        className={
          "w-6 h-6 text-gray-400 hover:text-cyan-400 fill-current hover:cursor-pointer transition-all duration-300 hover:scale-110"
        }
      />
    </a>
  );
};

const IconsData = [
  { href: "https://github.com/ergovindnamdev", Icon: GithubIcon },
  {
    href: "https://www.linkedin.com/in/govind-namdev-42945137/",
    Icon: LinkedinIcon,
  },
];

export default function Footer(props: {
  githubUrl: string;
  hideSocialsInDesktop: boolean;
}) {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-cyan-500 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center py-12 space-y-6">
        {/* Social Icons */}
        <div
          className={`flex flex-row space-x-8 ${props.hideSocialsInDesktop ? "lg:hidden" : ""}`}
        >
          {IconsData.map((iconData, index) => {
            return (
              <ClickableIcon
                key={index}
                href={iconData.href}
                Icon={iconData.Icon}
              />
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

        {/* Footer Text */}
        <a
          href={props.githubUrl}
          className=""
          target={"_blank"}
          rel="noreferrer"
        >
          <div className="group flex flex-col font-mono justify-center items-center text-gray-400 text-sm space-y-2 hover:text-cyan-400 transition-all duration-300">
            <span className="group-hover:text-cyan-400 sm:text-sm text-xs">
              Built with ❤️ by Govind Namdev
            </span>
            <span className="text-xs opacity-70">
              © 2025 • Made with Next.js & Tailwind CSS
            </span>
          </div>
        </a>

        {/* Additional Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-gray-500 mt-4">
          <span>Available for new projects</span>
          <span className="hidden sm:block">•</span>
          <a
            href="mailto:ergovindnamdev@gmail.com"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            ergovindnamdev@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

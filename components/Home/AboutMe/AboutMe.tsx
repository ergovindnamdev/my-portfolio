import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
export default function AboutMe(props) {
  const technologies = [
    ["React.js", "Next.js", "TypeScript", "Node.js", "Python"],
    ["TensorFlow", "OpenAI GPT", "Machine Learning", "AI/ML", "Docker"],
    ["AWS", "MongoDB", "PostgreSQL", "GraphQL", "Redis"],
  ];
  return (
    <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col  items-center p-0 bg-gradient-to-br from-AAprimary via-slate-900 to-AAprimary bg-[url('/Bg-Grid.png')] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
      <div className="relative z-10 w-full">
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
            <span className="text-AAsecondary font-Header text-sm  sm:text-xl"> 01.</span>
            <span className="flex-none text-gray-300 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header ">
              <span className="text-gray-400 ">
              Hello! I am Govind Namdev, a <span className="text-AAsecondary">Full-Stack Engineer</span> and <span className="text-AAsecondary">AI/ML Enthusiast</span> with a passion for building cutting-edge solutions. I specialize in creating scalable web applications and integrating artificial intelligence to solve complex business problems. My journey in computer science since 2011 has evolved from traditional web development to embracing the AI revolution.
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-400 ">
              With expertise spanning <span className="text-AAsecondary">full-stack development</span>, <span className="text-AAsecondary">AI/ML implementation</span>, and <span className="text-AAsecondary">cloud architecture</span>, I've successfully delivered enterprise-grade solutions across various industries. I specialize in integrating <span className="text-AAsecondary">OpenAI APIs</span>, building <span className="text-AAsecondary">intelligent chatbots</span>, and creating <span className="text-AAsecondary">predictive analytics</span> systems while maintaining my expertise in modern web technologies.
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-400 ">
              Currently, I'm fascinated by the intersection of <span className="text-AAsecondary">Generative AI</span> and web development, building applications that leverage <span className="text-AAsecondary">LLMs</span>, <span className="text-AAsecondary">computer vision</span>, and <span className="text-AAsecondary">natural language processing</span>. My commitment to staying at the forefront of technology drives me to continuously explore emerging AI tools and frameworks.
              </span>
            </div>
            
            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Here are a few technologies I&apos;ve been working with recently :
              </span>
            </div>
            <div className="font-Header tracking-wide grid grid-cols-1 md:grid-cols-3 gap-8">
              {technologies.map((techGroup, groupIndex) => (
                <div key={groupIndex} className="flex flex-col space-y-3">
                  {techGroup.map((tech, index) => (
                    <div key={index} className="flex flex-row items-center space-x-2 group hover:translate-x-1 transition-transform duration-200">
                      <ArrowIcon className={"h-3 w-3 text-AAsecondary group-hover:text-white transition-colors duration-200"} />
                      <span className="text-gray-400 sm:text-sm text-xs group-hover:text-white transition-colors duration-200">{tech}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/img/My-Pic.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/img/My-Pic.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full  bg-AAsecondary opacity-10 md:opacity-60  rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

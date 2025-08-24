
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
    <div 
      id="aboutSection" 
      data-aos="fade-up" 
      className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-32 w-48 h-48 bg-cyan-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-row items-center mb-16">
          <div className="flex flex-row items-center mr-6">
            <ArrowIcon className="h-4 md:h-6 w-4 md:w-5 text-cyan-400" />
            <span className="text-cyan-400 font-mono text-lg sm:text-xl ml-2">&gt; 01.</span>
            <span className="text-white font-bold tracking-wide text-2xl sm:text-3xl lg:text-4xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gradient-to-r from-cyan-400 to-transparent h-[1px] flex-1 ml-6"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            {/* Introduction */}
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300">
              <p className="text-gray-200 text-lg leading-relaxed">
                Hello! I am <span className="text-cyan-400 font-semibold">Govind Namdev</span>, a{" "}
                <span className="text-cyan-400 font-semibold">Full-Stack Engineer</span> and{" "}
                <span className="text-cyan-400 font-semibold">AI/ML Enthusiast</span> with a passion for building cutting-edge solutions. I specialize in creating scalable web applications and integrating artificial intelligence to solve complex business problems.
              </p>
            </div>

            {/* Professional Summary */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3"></div>
                <h3 className="text-cyan-400 font-semibold text-lg">What I Do</h3>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed">
                I help <span className="text-cyan-400 font-semibold">startups and growing businesses</span> turn ideas into scalable{" "}
                <span className="text-cyan-400 font-semibold">SaaS platforms</span>,{" "}
                <span className="text-cyan-400 font-semibold">eCommerce systems</span>, and{" "}
                <span className="text-cyan-400 font-semibold">mobile apps</span>. With{" "}
                <span className="text-cyan-400 font-semibold">15+ years of fullstack experience</span> ({" "}
                <span className="text-cyan-400">Next.js, Node.js, AWS, WordPress</span>), I've led projects like{" "}
                <span className="text-cyan-400 font-semibold">Artemis HQ</span>,{" "}
                <span className="text-cyan-400 font-semibold">sidessocial</span>, and{" "}
                <span className="text-cyan-400 font-semibold">global SaaS event platforms</span>. If you're looking for a reliable tech partner to accelerate your product roadmap, let's connect.
              </p>
            </div>

            {/* Experience */}
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300">
              <p className="text-gray-200 text-lg leading-relaxed">
                With expertise spanning <span className="text-cyan-400 font-semibold">full-stack development</span>,{" "}
                <span className="text-cyan-400 font-semibold">AI/ML implementation</span>, and{" "}
                <span className="text-cyan-400 font-semibold">cloud architecture</span>, I've successfully delivered enterprise-grade solutions across various industries. I specialize in integrating{" "}
                <span className="text-cyan-400 font-semibold">OpenAI APIs</span>, building{" "}
                <span className="text-cyan-400 font-semibold">intelligent chatbots</span>, and creating{" "}
                <span className="text-cyan-400 font-semibold">predictive analytics</span> systems.
              </p>
            </div>

            {/* Current Focus */}
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300">
              <p className="text-gray-200 text-lg leading-relaxed">
                Currently, I'm fascinated by the intersection of <span className="text-cyan-400 font-semibold">Generative AI</span> and web development, building applications that leverage{" "}
                <span className="text-cyan-400 font-semibold">LLMs</span>,{" "}
                <span className="text-cyan-400 font-semibold">computer vision</span>, and{" "}
                <span className="text-cyan-400 font-semibold">natural language processing</span>. My commitment to staying at the forefront of technology drives me to continuously explore emerging AI tools and frameworks.
              </p>
            </div>

            {/* Technologies Section */}
            <div className="mt-8">
              <h3 className="text-white text-xl font-semibold mb-6 flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Technologies I work with
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {technologies.map((techGroup, groupIndex) => (
                  <div key={groupIndex} className="space-y-3">
                    {techGroup.map((tech, index) => (
                      <div 
                        key={index} 
                        className="flex items-center space-x-3 group hover:translate-x-2 transition-all duration-300"
                      >
                        <ArrowIcon className="h-3 w-3 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0 lg:w-80">
            <div className="relative group">
              {/* Decorative border */}
              <div className="absolute inset-0 border-2 border-cyan-400 rounded-xl transform translate-x-6 translate-y-6 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-300"></div>
              
              {/* Image container */}
              <div className="relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 group-hover:border-cyan-400/50 transition-all duration-300">
                {/* Overlay */}
                <div className="absolute inset-0 bg-cyan-400 opacity-20 group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
                
                {/* Image */}
                <div className="aspect-square relative">
                  <Img
                    src="/img/My-Pic.jpg"
                    className="w-full h-full object-cover"
                    alt="Govind Namdev - Full Stack Engineer & AI Specialist"
                  />
                </div>
              </div>

              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 bg-slate-900 border border-cyan-400 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-cyan-400 text-2xl font-bold">5+</div>
                  <div className="text-gray-300 text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

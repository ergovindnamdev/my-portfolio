import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";

export default function WhereIHaveWorked() {
  const workExperience = [
    {
      company: "MangoITSolutions",
      role: "Senior Full Stack Engineer & AI Specialist",
      period: "Jan 2015 - Present",
      website: "www.mangoitsolutions.com",
      technologies: [
        "React.js",
        "Next.js",
        "Node.js",
        "Python",
        "AI/ML",
        "AWS",
        "MongoDB",
      ],
      experience:
        "Led development of scalable SaaS platforms and AI-integrated solutions. Specialized in full-stack architecture, microservices, and intelligent automation systems.",
    },
    {
      company: "HitaishinInfotech",
      role: "Full Stack Developer",
      period: "Dec 2014 - Jan 2015",
      website: "www.hitaishinInfotech.com",
      technologies: ["React.js", "Next.js", "Node.js", "Express.js", "MySQL"],
      experience:
        "Developed dynamic web applications using modern JavaScript frameworks. Focused on front-end optimization and seamless user experiences.",
    },
    {
      company: "EmpowerSolutions",
      role: "Web Developer",
      period: "Dec 2012 - Jan 2014",
      website: "www.empower-solutions.com",
      technologies: ["WordPress", "PHP", "JavaScript", "MySQL", "CSS3"],
      experience:
        "Built custom WordPress solutions and e-commerce platforms. Gained expertise in CMS development and client project management.",
    },
    {
      company: "HimanshuSoftech",
      role: "Junior Web Developer",
      period: "Nov 2011 - Nov 2012",
      website: "www.himanshusofttech.com",
      technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
      experience:
        "Started career developing responsive websites and learning modern web development practices. Foundation in web technologies and client requirements.",
    },
  ];

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center py-24 space-y-12 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-32 w-48 h-48 bg-cyan-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
      </div>

      {/* Title */}
      <section className="flex flex-row items-center relative z-10 md:px-0 mb-12">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-cyan-400" />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-cyan-400 font-mono text-sm sm:text-xl">02.</span>
          <span className="font-bold tracking-wider text-white text-lg md:text-2xl opacity-90">
            Where I&apos;ve Worked
          </span>
        </div>
        <div className="bg-gray-600 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </section>

      {/* Work Experience Cards */}
      <section className="relative z-10 max-w-6xl w-full px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {workExperience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Company Header */}
              <div className="mb-4">
                <h3 className="text-white font-bold text-xl mb-1">
                  {job.company}
                </h3>
                <p className="text-cyan-400 font-semibold text-lg mb-2">
                  {job.role}
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <span className="text-gray-400 font-mono text-sm">
                    {job.period}
                  </span>
                  <span
                    className="text-cyan-400 font-mono text-xs hover:cursor-pointer hover:underline"
                    onClick={() =>
                      window.open(`https://${job.website}`, "_blank")
                    }
                  >
                    {job.website}
                  </span>
                </div>
              </div>

              {/* Experience Description */}
              <div className="mb-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {job.experience}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <p className="text-gray-400 text-xs font-mono mb-2">
                  Technologies:
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-xs font-mono border border-slate-600 hover:border-cyan-400 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience Indicator */}
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Career Summary */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-8 text-center"
        >
          <h3 className="text-cyan-400 font-bold text-2xl mb-4">
            Career Journey
          </h3>
          <p className="text-gray-200 text-lg leading-relaxed max-w-4xl mx-auto">
            From a junior developer crafting WordPress sites to a senior
            engineer architecting AI-powered platforms, my{" "}
            <span className="text-cyan-400 font-semibold">
              15+ year journey
            </span>{" "}
            spans the entire evolution of modern web development. Each role has
            strengthened my expertise in
            <span className="text-cyan-400 font-semibold">
              {" "}
              full-stack development
            </span>
            ,
            <span className="text-cyan-400 font-semibold"> AI integration</span>
            , and
            <span className="text-cyan-400 font-semibold">
              {" "}
              scalable architecture
            </span>
            .
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="text-cyan-400 text-3xl font-bold">15+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-cyan-400 text-3xl font-bold">50+</div>
              <div className="text-gray-300 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-cyan-400 text-3xl font-bold">4</div>
              <div className="text-gray-300 text-sm">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-cyan-400 text-3xl font-bold">10+</div>
              <div className="text-gray-300 text-sm">Technologies</div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

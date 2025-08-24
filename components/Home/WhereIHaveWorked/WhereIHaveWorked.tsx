
import React, { useState } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import { motion } from "framer-motion";

export default function WhereIHaveWorked() {
  const [activeCompany, setActiveCompany] = useState(0);

  const companies = [
    {
      name: "MangoIT Solutions",
      role: "Senior Full Stack Engineer & AI Specialist",
      period: "Jan 2015 - Present",
      website: "www.mangoitsolutions.com",
      description: "Leading full-stack development and AI integration projects",
      achievements: [
        "Architected and developed 50+ scalable web applications using React.js, Next.js, Node.js, and modern cloud technologies",
        "Led AI/ML implementation projects integrating OpenAI GPT, TensorFlow, and custom machine learning models for business automation",
        "Managed cross-functional teams of 15+ developers, designers, and QA engineers across multiple high-impact projects",
        "Implemented microservices architecture and DevOps practices, reducing deployment time by 70% and improving system reliability",
        "Spearheaded digital transformation initiatives for enterprise clients, resulting in 40% increase in operational efficiency",
        "Mentored junior developers and conducted technical workshops on modern JavaScript frameworks and AI technologies"
      ]
    },
    {
      name: "EmpowerSolutions",
      role: "Technical Lead & Full Stack Developer",
      period: "Mar 2020 - Dec 2022",
      website: "empowersolutions.tech",
      description: "Leading enterprise-level SaaS development",
      achievements: [
        "Led development of enterprise SaaS platforms serving 100k+ users with 99.9% uptime",
        "Implemented real-time analytics dashboards using React, D3.js, and WebSocket technologies",
        "Designed and built RESTful APIs and GraphQL endpoints handling millions of requests daily",
        "Integrated payment gateways, third-party APIs, and implemented robust security measures",
        "Optimized database performance and implemented caching strategies reducing response time by 60%"
      ]
    },
    {
      name: "HitaishinInfotech",
      role: "Full Stack Developer & Team Lead",
      period: "Jun 2018 - Feb 2020",
      website: "hitaishinfotech.com",
      description: "Building innovative web solutions",
      achievements: [
        "Developed responsive web applications using React.js, Vue.js, and Angular frameworks",
        "Built robust backend systems with Node.js, Express.js, and MongoDB/PostgreSQL databases",
        "Implemented automated testing pipelines and CI/CD workflows using Jenkins and GitHub Actions",
        "Collaborated with UX/UI teams to create intuitive user interfaces and seamless user experiences",
        "Delivered projects 25% faster than industry average through agile methodologies and efficient coding practices"
      ]
    },
    {
      name: "HimanshuSoftech",
      role: "Frontend Developer & WordPress Specialist",
      period: "Jan 2015 - May 2018",
      website: "himanshusoftech.com",
      description: "Crafting beautiful and functional websites",
      achievements: [
        "Developed 80+ custom WordPress themes and plugins for diverse client requirements",
        "Created responsive websites using HTML5, CSS3, JavaScript, and modern frontend frameworks",
        "Implemented SEO best practices and performance optimization techniques",
        "Built e-commerce solutions using WooCommerce and custom payment integrations",
        "Maintained 98% client satisfaction rate through excellent project delivery and support"
      ]
    }
  ];

  return (
    <div
      id="WhereIHaveWorkedSection"
      className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 lg:px-16 xl:px-24 py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 bg-cyan-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        {/* Section Header */}
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-row items-center mb-16"
        >
          <div className="flex flex-row items-center mr-6">
            <ArrowIcon className="h-4 md:h-6 w-4 md:w-5 text-cyan-400" />
            <span className="text-cyan-400 font-mono text-lg sm:text-xl ml-2">
              &gt; 02.
            </span>
            <span className="text-white font-bold tracking-wide text-2xl sm:text-3xl lg:text-4xl pl-4">
              Where I've Worked
            </span>
          </div>
          <div className="bg-gradient-to-r from-cyan-400 to-transparent h-[1px] flex-1 ml-6"></div>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Company Selector */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex lg:flex-col flex-row overflow-x-auto lg:overflow-visible"
          >
            <div className="flex lg:flex-col flex-row lg:space-y-0 space-x-4 lg:space-x-0 lg:border-l-2 lg:border-slate-700">
              {companies.map((company, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCompany(index)}
                  className={`px-6 py-4 text-left transition-all duration-300 whitespace-nowrap lg:whitespace-normal lg:border-l-2 lg:border-t-0 border-t-2 lg:border-transparent ${
                    activeCompany === index
                      ? "lg:border-cyan-400 border-cyan-400 text-cyan-400 bg-cyan-400/10"
                      : "lg:border-slate-700 border-slate-700 text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50"
                  } font-mono text-sm lg:text-base font-medium lg:pl-6 lg:pr-0 lg:ml-[-2px]`}
                >
                  {company.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Company Details */}
          <motion.div 
            key={activeCompany}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-1 lg:pl-8"
          >
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-300">
              {/* Role and Company */}
              <div className="mb-6">
                <h3 className="text-white text-xl lg:text-2xl font-bold mb-2">
                  {companies[activeCompany].role}
                  <span className="text-cyan-400"> @ {companies[activeCompany].name}</span>
                </h3>
                <p className="text-gray-400 font-mono text-sm mb-2">
                  {companies[activeCompany].period}
                </p>
                <button
                  onClick={() => window.open(`https://${companies[activeCompany].website}`, "_blank")}
                  className="text-cyan-400 hover:text-cyan-300 font-mono text-xs transition-colors duration-300"
                >
                  {companies[activeCompany].website}
                </button>
                <p className="text-gray-300 text-base mt-3 italic">
                  {companies[activeCompany].description}
                </p>
              </div>

              {/* Achievements */}
              <div className="space-y-4">
                {companies[activeCompany].achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <ArrowIcon className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                      {achievement}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack for current company */}
              <div className="mt-8 pt-6 border-t border-slate-700/50">
                <h4 className="text-cyan-400 font-semibold mb-3 text-sm">
                  Key Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCompany === 0 && ["React.js", "Next.js", "Node.js", "TypeScript", "Python", "AI/ML", "AWS", "MongoDB", "TensorFlow", "OpenAI"].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-xs font-mono border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                  {activeCompany === 1 && ["React.js", "Node.js", "GraphQL", "PostgreSQL", "AWS", "Docker", "D3.js", "WebSocket"].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-xs font-mono border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                  {activeCompany === 2 && ["React.js", "Vue.js", "Angular", "Node.js", "MongoDB", "PostgreSQL", "Jenkins", "GitHub Actions"].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-xs font-mono border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                  {activeCompany === 3 && ["WordPress", "HTML5", "CSS3", "JavaScript", "PHP", "WooCommerce", "MySQL", "SEO"].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-xs font-mono border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Career Summary */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-8"
        >
          <div className="text-center">
            <h3 className="text-white text-xl font-bold mb-4">Career Highlights</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-cyan-400 text-3xl font-bold">15+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-cyan-400 text-3xl font-bold">200+</div>
                <div className="text-gray-300 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-cyan-400 text-3xl font-bold">50+</div>
                <div className="text-gray-300 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-cyan-400 text-3xl font-bold">25+</div>
                <div className="text-gray-300 text-sm">Team Members Led</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

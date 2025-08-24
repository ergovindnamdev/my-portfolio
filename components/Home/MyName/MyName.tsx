import React, { useContext } from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import AppContext from "../../AppContextFolder/AppContext";

export default function MyName(props: { finishedLoading: boolean }) {
  const router = useRouter();
  const context = useContext(AppContext);

  return (
    <div
      id="homeSection"
      className="h-screen w-full flex flex-col justify-center items-start px-6 sm:px-12 lg:px-16 xl:px-24 relative bg-gradient-to-br from-slate-900 via-gray-900 to-black"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-4xl">
        {/* Greeting */}
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 0.1, duration: 0.4 },
            y: { delay: props.finishedLoading ? 0 : 0.1, duration: 0.4 },
          }}
          className="text-cyan-400 font-mono text-lg sm:text-xl font-medium"
        >
          Hi, my name is
        </motion.span>

        {/* Name */}
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 0.3, duration: 0.5 },
            y: { delay: props.finishedLoading ? 0 : 0.3, duration: 0.5 },
          }}
          className="text-white font-bold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl mt-4 mb-2 tracking-tight"
        >
          Govind Namdev.
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 0.5, duration: 0.5 },
            y: { delay: props.finishedLoading ? 0 : 0.5, duration: 0.5 },
          }}
          className="text-gray-300 font-bold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 tracking-tight"
        >
          I bring ideas to life and shape them into reality.
        </motion.h2>

        {/* Description */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 0.7, duration: 0.4 },
            y: { delay: props.finishedLoading ? 0 : 0.7, duration: 0.4 },
          }}
          className="mb-8"
        >
          <p className="text-gray-300 font-Header text-lg sm:text-xl max-w-2xl leading-relaxed">
            I'm a passionate{" "}
            <span className="text-cyan-400 font-semibold">Full Stack Engineer</span> and{" "}
            <span className="text-cyan-400 font-semibold">AI Specialist</span> with 5+ years of experience 
            building scalable web applications, microservices architectures, and intelligent systems that solve real-world problems.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 0.9, duration: 0.4 },
            y: { delay: props.finishedLoading ? 0 : 0.9, duration: 0.4 },
          }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://www.linkedin.com/in/govind-namdev-42945137/"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <button className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-mono text-sm hover:bg-cyan-400 hover:text-black transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-400/25 hover:scale-105">
              Connect on LinkedIn
            </button>
          </a>

          <a
            href="https://wa.me/+918989901702"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <button className="bg-cyan-400 text-black px-8 py-4 rounded-lg font-mono text-sm hover:bg-transparent hover:border-2 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-400/25 hover:scale-105">
              Chat on WhatsApp
            </button>
          </a>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 1.1, duration: 0.4 },
            y: { delay: props.finishedLoading ? 0 : 1.1, duration: 0.4 },
          }}
          className="mt-12"
        >
          <p className="text-gray-400 font-mono text-sm mb-4">Currently working with:</p>
          <div className="flex flex-wrap gap-3">
            {["React.js", "Node.js", "TypeScript", "Python", "AI/ML", "AWS", "Docker", "Next.js", "MongoDB", "TensorFlow"].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-800 text-gray-200 rounded-full text-xs font-mono border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { Link as ReactScrollLink } from "react-scroll";

export default function DesktopMenu(props: { finishedLoading: boolean }) {
  return (
    <div className="font-mono text-sm md:flex hidden flex-row items-center space-x-6 ">
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 5.4,
        }}
        className="text-slate-300"
      >
        <ReactScrollLink to="aboutSection" spy={true} smooth={true} offset={-100} duration={200}>
          <span className="text-cyan-400 mr-1">&gt; 01.</span>
          <span className="hover:cursor-pointer text-slate-300 hover:text-cyan-400 transition-colors duration-300">About</span>
        </ReactScrollLink>
      </motion.div>
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 5.7,
        }}
        className="text-slate-300"
      >
        <ReactScrollLink to="WhereIhaveWorkedSection" spy={true} smooth={true} offset={-300} duration={200}>
          <span className="text-cyan-400 mr-1">&gt; 02.</span>
          <span className="hover:cursor-pointer text-slate-300 hover:text-cyan-400 transition-colors duration-300">Experience</span>
        </ReactScrollLink>
      </motion.div>
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 5.8,
        }}
        className="text-slate-300"
      >
        <ReactScrollLink to="SomethingIveBuiltSection" spy={true} smooth={true} offset={-100} duration={200}>
          <span className="text-cyan-400 mr-1">&gt; 03.</span>
          <span className="hover:cursor-pointer text-slate-300 hover:text-cyan-400 transition-colors duration-300">Work</span>
        </ReactScrollLink>
      </motion.div>
      <motion.span
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 5.9,
        }}
        className="text-slate-300"
      >
         <ReactScrollLink to="GetInTouchSection" spy={true} smooth={true} offset={-100} duration={200}>
           <span className="text-cyan-400 mr-1">&gt; 04.</span>
           <span className="hover:cursor-pointer text-slate-300 hover:text-cyan-400 transition-colors duration-300">Contact</span>
        </ReactScrollLink>
      </motion.span>
      <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
      <motion.button
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 6.1,
        }}
        // onClick={()=>{router.push("/resume.pdf")}}
        className="text-cyan-400 border border-cyan-400 py-2 px-4 rounded hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
      >
        Resume
      </motion.button>
      </a>
      
    </div>
  );
}

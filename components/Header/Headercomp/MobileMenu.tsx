import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { Link } from "react-scroll";
const MobileMenu = props => {
  const closeMenu = () => {
    props.setRotate(!props.rotate);
    props.setShowElement(!props.ShowElement);
  };
  return (
    <>
      <motion.div
        initial={{ x: "100%" }}
        animate={props.rotate ? { x: "0" } : { x: "100%" }}
        transition={{ x: { duration: 0.4, ease: "easeInOut" } }}
        className="w-full fixed h-screen flex md:hidden duration-300 z-50"
      >
        <div
          onClick={() => closeMenu()}
          className="w-1/4 h-full backdrop-blur-sm bg-black/40 hover:cursor-pointer"
        ></div>
        <div
          className="w-3/4 h-full bg-gradient-to-br from-slate-900 via-gray-900 to-black backdrop-blur-xl border-l border-gray-700/50 flex flex-col 
        justify-center items-center space-y-10 font-sans relative overflow-hidden"
        >
          {/* Background decorative elements */}
          <div className="absolute top-20 right-10 w-24 h-24 bg-cyan-500 opacity-20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 left-8 w-32 h-32 bg-blue-500 opacity-15 rounded-full blur-3xl"></div>
          
          <Link
            to="aboutSection"
            spy={true}
            smooth={true}
            offset={-50}
            duration={200}
            onClick={() => closeMenu()}
            className="group flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300"
          >
            <span className="text-cyan-400 text-xs font-mono group-hover:text-cyan-300">01.</span>
            <span className="font-mono text-base text-gray-300 hover:cursor-pointer duration-300 group-hover:text-white group-hover:translate-y-1">
              About
            </span>
          </Link>
          
          <Link
            to="WhereIhaveWorkedSection"
            spy={true}
            smooth={true}
            offset={-250}
            duration={200}
            onClick={() => closeMenu()}
            className="group flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300"
          >
            <span className="text-cyan-400 text-xs font-mono hover:cursor-pointer group-hover:text-cyan-300">02.</span>
            <span className="font-mono text-base text-gray-300 hover:cursor-pointer duration-300 group-hover:text-white group-hover:translate-y-1">
              Experience
            </span>
          </Link>
          
          <Link
            to="SomethingIveBuiltSection"
            spy={true}
            smooth={true}
            offset={100}
            duration={200}
            onClick={() => closeMenu()}
            className="group flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300"
          >
            <span className="text-cyan-400 text-xs font-mono group-hover:text-cyan-300">03.</span>
            <span className="font-mono text-base text-gray-300 hover:cursor-pointer duration-300 group-hover:text-white group-hover:translate-y-1">
              Work
            </span>
          </Link>
          
          <Link
            to="GetInTouchSection"
            spy={true}
            smooth={true}
            offset={100}
            duration={200}
            onClick={() => closeMenu()}
            className="group flex flex-col text-center space-y-2 hover:scale-105 transition-all duration-300"
          >
            <span className="text-cyan-400 text-xs font-mono group-hover:text-cyan-300">04.</span>
            <span className="font-mono text-base text-gray-300 hover:cursor-pointer duration-300 group-hover:text-white group-hover:translate-y-1">
              Contact
            </span>
          </Link>
          
          <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer" className="mt-8">
            <button className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-mono text-sm hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 hover:scale-105">
              Resume
            </button>
          </a>
        </div>
      </motion.div>
    </>
  );
};
export default MobileMenu;

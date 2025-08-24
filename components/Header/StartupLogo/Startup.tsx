import React from "react";
import { motion } from "framer-motion";

export default function Startup() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-black w-full h-screen flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center space-y-6"
        >
          {/* Modern circular loading animation */}
          <div className="relative w-20 h-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 border-4 border-gray-600 border-t-cyan-400 rounded-full"
            ></motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-cyan-400 font-bold text-lg">GN</span>
            </div>
          </div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white text-2xl font-bold tracking-wide"
          >
            Govind Namdev
          </motion.h1>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-gray-300 text-sm font-mono"
          >
            Loading Portfolio...
          </motion.p>

          {/* Progress bar */}
          <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
            ></motion.div>
          </div>
        </motion.div>
      </div>
  );
}
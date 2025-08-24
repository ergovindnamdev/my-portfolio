
import React from "react";
import { motion } from "framer-motion";

export default function Startup() {
  return (
    <div className="absolute bg-AAprimary flex flex-col justify-center items-center w-full h-screen z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center space-y-8"
      >
        {/* Modern circular loading indicator */}
        <div className="relative">
          <motion.div
            className="w-16 h-16 border-4 border-gray-600 rounded-full"
            initial={{ borderTopColor: "transparent" }}
            animate={{ 
              borderTopColor: "#64ffda",
              rotate: 360 
            }}
            transition={{ 
              rotate: { duration: 1.5, repeat: Infinity, ease: "linear" },
              borderTopColor: { duration: 0.8, ease: "easeOut" }
            }}
          />
          <motion.div
            className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-AAsecondary rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Loading text */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-gray-200 mb-2">Govind Namdev</h2>
          <motion.p
            className="text-sm text-gray-400 font-mono"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading Portfolio...
          </motion.p>
        </motion.div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-AAsecondary to-blue-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
}

"use client";
import { motion } from "framer-motion";
import data from "@/data/site.json";

export default function WhyUs() {
  return (
    <div className="py-16 px-6 bg-gradient-to-r from-gray-100 to-gray-200 text-center">
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        কেন আমাদের বেছে নিবেন
      </motion.h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {data.why.map((w: string, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl shadow-md p-6 group cursor-pointer relative overflow-hidden"
          >
            {/* Hover Gradient Effect */}
            <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Fake Icon Circle */}
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 group-hover:bg-white group-hover:text-orange-500 transition">
                ⭐
              </div>

              <p className="font-semibold text-gray-700 group-hover:text-white transition">
                {w}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

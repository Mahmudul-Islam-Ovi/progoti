"use client";
import { motion } from "framer-motion";
import data from "@/data/site.json";

export default function Steps() {
  return (
    <div className="py-16 px-6 bg-gray-100 text-center">
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        কিভাবে সার্ভিস নেবেন
      </motion.h2>

      {/* Steps */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8 relative">
        {data.steps.map((s: string, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl shadow-md p-6 relative group"
          >
            {/* Step Number */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold shadow-lg">
              {i + 1}
            </div>

            {/* Icon */}
            <div className="text-3xl mb-4 mt-4 group-hover:scale-110 transition">
              ⚙️
            </div>

            {/* Text */}
            <p className="text-gray-700 font-semibold group-hover:text-orange-500 transition">
              {s}
            </p>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 border-2 border-orange-500 opacity-0 group-hover:opacity-100 rounded-2xl transition"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

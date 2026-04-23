"use client";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "রাহিম উদ্দিন",
    text: "দারুন সার্ভিস পেয়েছি",
  },
  {
    name: "করিম শেখ",
    text: "খুব দ্রুত কাজ করেছে",
  },
  {
    name: "সাবিনা আক্তার",
    text: "বিশ্বাসযোগ্য এবং ভালো সাপোর্ট",
  },
];

export default function Testimonials() {
  return (
    <div className="py-16 px-6 bg-gray-100 text-center">
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        কাস্টমার রিভিউ
      </motion.h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl shadow-md p-6 relative group"
          >
            {/* Quote Icon */}
            <div className="text-4xl text-orange-500 mb-4">❝</div>

            {/* Review Text */}
            <p className="text-gray-600 italic mb-6">
              {r.text}
            </p>

            {/* User Info */}
            <div className="flex items-center justify-center gap-3">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                {r.name.charAt(0)}
              </div>

              {/* Name */}
              <h4 className="font-semibold text-gray-800">
                {r.name}
              </h4>
            </div>

            {/* Stars */}
            <div className="mt-4 text-yellow-400 text-lg">
              ⭐⭐⭐⭐⭐
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 border-2 border-orange-500 opacity-0 group-hover:opacity-100 rounded-2xl transition"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

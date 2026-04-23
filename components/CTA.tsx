"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <div className="relative py-20 px-6 text-center text-white">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/pic-7.jpg" // 👉 আপনার image দিন (public folder)
          alt="CTA Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          এখনই আমাদের সার্ভিস নিন 🚀
        </h2>

        <p className="mt-4 text-gray-200 text-lg">
          দ্রুত, নির্ভরযোগ্য এবং সাশ্রয়ী সেবা পেতে আজই আমাদের সাথে যোগাযোগ করুন। 
          আমরা আপনার কাজকে সহজ ও সফল করতে প্রতিশ্রুতিবদ্ধ।
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="bg-orange-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-orange-600 hover:scale-105 transition">
            সার্ভিস নিন
          </button>

          <button className="border px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            যোগাযোগ করুন
          </button>
        </div>
      </motion.div>
    </div>
  );
}

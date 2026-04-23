"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "@/data/site.json";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="py-16 px-6 bg-gray-100">
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        প্রশ্ন উত্তর
      </motion.h2>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-4">
        {data.faq.map((f: any, i: number) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 hover:bg-gray-50 transition"
            >
              {f.q}
              <span className="text-orange-500 text-xl">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>

            {/* Answer */}
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-5 text-gray-600"
                >
                  {f.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

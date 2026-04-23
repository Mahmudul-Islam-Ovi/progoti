"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div>
      <div className="pt-30 pb-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/images/banner4.jpg" // 👉 public folder এ image রাখবেন
              alt="About"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              আমাদের সম্পর্কে
            </h1>

            <p className="text-gray-700 mb-4 leading-relaxed">
              আমরা দীর্ঘদিন ধরে বিশ্বস্ততার সাথে টিভি রিপেয়ার ও ইলেকট্রনিক্স সার্ভিস দিয়ে আসছি। 
              আমাদের লক্ষ্য হচ্ছে গ্রাহকদের দ্রুত, নির্ভরযোগ্য এবং সাশ্রয়ী সেবা প্রদান করা।
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              আমাদের অভিজ্ঞ টেকনিশিয়ান টিম আধুনিক প্রযুক্তি ব্যবহার করে যেকোনো সমস্যা সমাধান করতে সক্ষম। 
              আমরা সবসময় গ্রাহকের সন্তুষ্টিকে সর্বোচ্চ গুরুত্ব দেই।
            </p>

            <p className="text-gray-700 leading-relaxed">
              PROGOTI  আপনার বিশ্বস্ত সঙ্গী, যেখানে আপনি পাবেন মানসম্মত সেবা এবং দ্রুত সমাধান।
            </p>

            {/* Highlights */}
            <div className="mt-6 space-y-2">
              <p className="flex items-center gap-2 text-gray-800">
                ✅ ১০+ বছরের অভিজ্ঞতা
              </p>
              <p className="flex items-center gap-2 text-gray-800">
                ✅ দ্রুত সার্ভিস ডেলিভারি
              </p>
              <p className="flex items-center gap-2 text-gray-800">
                ✅ অভিজ্ঞ টেকনিশিয়ান
              </p>
              <p className="flex items-center gap-2 text-gray-800">
                ✅ ১০০% গ্রাহক সন্তুষ্টি
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Extra Section */}
      <div className="py-16 px-6 bg-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold mb-6"
        >
          আমাদের লক্ষ্য
        </motion.h2>

        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          আমাদের লক্ষ্য হলো প্রযুক্তিনির্ভর উন্নত সার্ভিস প্রদান করে গ্রাহকদের জীবনকে সহজ করা। 
          আমরা ভবিষ্যতে আরও আধুনিক সেবা এবং উন্নত প্রযুক্তি নিয়ে কাজ করার পরিকল্পনা করছি।
        </p>
      </div>
    </div>
  );
}

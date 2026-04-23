// "use client";
// import { motion } from "framer-motion";
// import data from "@/data/site.json";

// export default function Hero() {
//   return (
//     <div className="relative h-screen flex items-center justify-center text-center text-white">

//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src="/images/banner3.JPG" // 👉 আপনার image path এখানে দিন
//           alt="Background"
//           className="w-full h-full object-cover"
//         />
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/60"></div>
//       </div>

//       {/* Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative z-10 px-4"
//       >
//         <h1 className="text-4xl md:text-6xl font-bold">
//           {data.hero.title}
//         </h1>

//         <p className="mt-4 text-lg text-gray-200">
//           {data.hero.subtitle}
//         </p>

//         <div className="mt-6 space-x-4">
//           <button className="bg-orange-500 px-6 py-3 rounded-lg hover:scale-110 transition">
//             সার্ভিস নিন
//           </button>

//           <a href={`tel:${data.hero.phone}`}>
//             <button className="border px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
//               কল করুন
//             </button>
//           </a>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "@/data/site.json";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const slides = [
    {
      image: "/images/banner3.jpg",
      title: data.hero.title,
      subtitle: data.hero.subtitle,
    },
    {
      image: "/images/pic-3.JPG",
      title: "আপনার ব্যবসার সেরা সমাধান",
      subtitle: "আমরা দিচ্ছি আধুনিক ও নির্ভরযোগ্য সার্ভিস",
    },
    {
      image: "/images/banner4.jpg",
      title: "দ্রুত ও বিশ্বস্ত সেবা",
      subtitle: "আপনার সন্তুষ্টিই আমাদের লক্ষ্য",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Slider */}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].image}
            alt="slide"
            className="w-full h-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 px-4 max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          {slides[index].title}
        </h1>

        <p className="mt-4 text-lg text-gray-200">{slides[index].subtitle}</p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <Link href="/services" rel="noopener noreferrer">
            <button className="bg-orange-500 px-6 py-3 rounded-lg hover:scale-110 transition">
              সার্ভিস নিন
            </button>
          </Link>
          <a href={`tel:${data.hero.phone}`}>
            <button className="border px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
              কল করুন
            </button>
          </a>
        </div>
      </motion.div>

      {/* Dots */}
      <div className="absolute bottom-6 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-orange-500 scale-125" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

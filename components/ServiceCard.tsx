"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceCard({ service }: any) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden group"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <motion.img
          src={service.image}
          className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-lg font-bold mb-2 group-hover:text-orange-500 transition">
          {service.title}
        </h2>

        <p className="text-gray-600 text-sm line-clamp-2">
          {service.desc}
        </p>

        <Link href={`/services/${service.id}`}>
          <button className="mt-4 bg-orange-500 text-white px-4 cursor-pointer py-2 rounded-lg hover:bg-orange-600 transition">
            বিস্তারিত
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

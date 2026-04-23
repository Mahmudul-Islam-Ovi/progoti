"use client";
import services from "@/data/services.json";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <div className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12">
        আমাদের সার্ভিস
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {services.map((s: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <ServiceCard service={s} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

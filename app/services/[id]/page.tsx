"use client";
import services from "@/data/services.json";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ServiceDetails() {
  const params = useParams();
  const id = Number(params.id);

  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md">
          <h2 className="text-2xl font-bold text-red-500 mb-3">
            সার্ভিস খুঁজে পাওয়া যায়নি ❌
          </h2>
          <p className="text-gray-600 mb-5">
            আপনি যে সার্ভিসটি খুঁজছেন সেটি বর্তমানে উপলব্ধ নেই।
          </p>

          <Link href="/services">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
              সব সার্ভিস দেখুন
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const related = services.filter((s) => s.id !== id).slice(0, 4);

  return (
    <div className="pt-24 pb-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={service.image}
            className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl shadow-lg"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-end p-6">
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              {service.title}
            </h1>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 bg-white p-6 rounded-2xl shadow"
        >
          <p className="text-gray-700 leading-relaxed text-lg">
            {service.desc}
          </p>

          {/* CTA */}
          <div className="mt-6 flex gap-4 flex-wrap">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
              সার্ভিস নিন
            </button>

            <a href="tel:01700000000">
              <button className="border px-6 py-3 rounded-lg hover:bg-black hover:text-white transition">
                কল করুন
              </button>
            </a>
          </div>
        </motion.div>

        {/* Related Services */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            সম্পর্কিত সার্ভিস
          </h2>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            {related.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden group"
              >
                <div className="overflow-hidden">
                  <img
                    src={s.image}
                    className="h-40 w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 group-hover:text-orange-500 transition">
                    {s.title}
                  </h3>

                  <Link href={`/services/${s.id}`}>
                    <button className="mt-3 text-sm text-orange-500 font-semibold hover:underline">
                      বিস্তারিত দেখুন →
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

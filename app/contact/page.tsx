"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <div className="pt-30 pb-16 bg-gradient-to-r from-black to-gray-800 text-white text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          যোগাযোগ করুন
        </motion.h1>

        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          যেকোনো প্রয়োজনে আমাদের সাথে যোগাযোগ করুন। আমরা সবসময় আপনার সেবায়
          প্রস্তুত।
        </p>
      </div>

      {/* Contact Info */}
      <div className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Phone */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl shadow-md p-6 text-center"
          >
            <div className="text-4xl mb-4 text-orange-500">📞</div>
            <h3 className="font-bold text-lg mb-2">ফোন</h3>
            <p className="text-gray-600">01948844756</p>
          </motion.div>

          {/* Email */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl shadow-md p-6 text-center"
          >
            <div className="text-4xl mb-4 text-orange-500">✉️</div>
            <h3 className="font-bold text-lg mb-2">ইমেইল</h3>
            <p className="text-gray-600">info@progotiservice.com</p>
          </motion.div>

          {/* Location */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl shadow-md p-6 text-center"
          >
            <div className="text-4xl mb-4 text-orange-500">📍</div>
            <h3 className="font-bold text-lg mb-2">ঠিকানা</h3>
            <p className="text-gray-600">ঢাকা,মিরপুর স্টেডিয়াম, বাংলাদেশ</p>
          </motion.div>
        </div>
      </div>

      {/* Google Map */}
      <div className="px-6 pb-16 bg-gray-100">
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.346891633048!2d90.36297567511693!3d23.806260678632334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1371cd20ff7%3A0x96197d49392ec960!2zTUlSUFVSIFNUQURJVU0gQlVTIENPVU5URVIg4Kau4Ka_4Kaw4Kaq4KeB4KawIOCmuOCnjeCmn-Cnh-CmoeCmv-Cmr-CmvOCmvuCmriDgpqzgpr7gprgg4KaV4Ka-4KaJ4Kao4KeN4Kaf4Ka-4Kaw!5e0!3m2!1sen!2sbd!4v1776960226685!5m2!1sen!2sbd"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-orange-500 text-white text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold"
        >
          এখনই কল করুন 🚀
        </motion.h2>

        <p className="mt-3">দ্রুত সেবা পেতে আজই আমাদের সাথে যোগাযোগ করুন</p>

        <a href="tel:01948844756">
          <button className="mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
            কল করুন
          </button>
        </a>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "হোম", path: "/" },
    { name: "আমাদের সম্পর্কে", path: "/about" },
     { name: "সার্ভিস", path: "/services" },
    { name: "যোগাযোগ", path: "/contact" },
  ];

  return (
    // <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 shadow-md">
    <nav className="fixed top-0  left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md h-20">

      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/images/Progoti-logo.png"
            alt="logo"
            className="h-50  object-contain"
          />
          {/* <span className="text-orange-500 font-bold text-lg hidden sm:block">
            PROGOTI TV
          </span> */}
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              className={`relative group font-light text-2xl transition duration-300
              ${
                pathname === link.path
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              {link.name}

              {/* underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-orange-500 transition-all duration-300
                ${
                  pathname === link.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden text-2xl text-gray-700">
          <button onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-lg p-6 space-y-4 text-center">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              onClick={() => setOpen(false)}
              className={`block text-lg ${
                pathname === link.path
                  ? "text-orange-500"
                  : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

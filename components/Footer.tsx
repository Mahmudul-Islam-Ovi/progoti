export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo + Name */}
        <div>
          <div className="flex items-center bg-amber-50  md:justify-start gap-2">
            <img
              src="/images/Progoti-logo.png"
              alt="Progoti TV Logo"
              className="w-100 h-50 object-contain"
            />
          </div>
          <p className="mt-3 text-sm text-gray-300">
            আপনার নির্ভরযোগ্য সার্ভিস
          </p>
        </div>

        {/* Navbar Style Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-orange-400">
            গুরুত্বপূর্ণ লিংক
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-orange-500">
                হোম
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-orange-500">
                সার্ভিস
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-orange-500">
                আমাদের সম্পর্কে
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-orange-500">
                যোগাযোগ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-orange-400">
            যোগাযোগ
          </h3>
          <p className="text-gray-300">📞 01948844756</p>
          <p className="text-gray-300">মিরপুর স্টেডিয়াম ,ঢাকা, বাংলাদেশ</p>
          <p className="text-gray-300 mt-2">✉ info@progotitv.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        <p>© ২০২৬ সকল স্বত্ব সংরক্ষিত | PROGOTI </p>
        <p className="mt-1">
          ওয়েবসাইটটি উন্নয়ন করেছে{" "}
          <span className="text-orange-500 font-semibold">Wan IT</span>
        </p>
      </div>
    </footer>
  );
}

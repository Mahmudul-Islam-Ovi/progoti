import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PROGOTI",
  description: "আপনার নির্ভরযোগ্য সার্ভিস",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      
    >
      <body >
         <Navbar />
        {children}
        </body>
         <Footer />
    </html>
  );
}


// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="bn">
//       <body>

//         {/* Navbar সব page এ */}
//         <Navbar />

//         {/* Page content */}
//         {children}

//         {/* Footer সব page এ */}
//         <Footer />

//       </body>
//     </html>
//   );
// }


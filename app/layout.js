import { Outfit, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReduxProvider from "@/Redux/ReduxProvider";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import ScrollAnimate from "./components/ScrollAnimate";

const PlusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-Plus-Jakarta-sans",
  subsets: ["latin"],
});

const manropeMono = Manrope({
  variable: "--font-manrope-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Indo European Study Abroad Consultancy",
  description: "Start your study abroad journey today with Indo European",
  keywords: ["study abroad consultancy", "best consultants for study abroad", "study abroad consultant in delhi"],
  icons: {
    icon: "/favicon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${PlusJakartaSans.variable} ${manropeMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <ReduxProvider>
        {children}
        </ReduxProvider>
        <Footer />
        <ScrollAnimate direction="up" className="bg-orange-700 rounded-full z-2 w-12 h-12 shadow-2xl shadow-zinc-600 flex justify-center items-center fixed bottom-26 right-6 hover:scale-110 transition-transform duration-500 ease-in-out">
        <Link href="tel:+919650133355"><FaPhoneAlt className="size-6 inline-block text-white shadow-2xl shadow-zinc-500"/></Link>
        </ScrollAnimate>
        <ScrollAnimate direction="up" className="bg-green-700 rounded-full z-2 w-12 h-12 shadow-2xl shadow-zinc-600 flex justify-center items-center fixed bottom-10 right-6 hover:scale-110 transition-transform duration-500 ease-in-out">
        <Link href="https://wa.link/67ng4e"><FaWhatsapp className="size-8 inline-block text-white shadow-2xl shadow-zinc-500"/></Link>
        </ScrollAnimate>
        </body>
    </html>
  );
}

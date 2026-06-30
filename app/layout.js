import { Outfit, Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
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
      className={`${outfitSans.variable} ${manropeMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}

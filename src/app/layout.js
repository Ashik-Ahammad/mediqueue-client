import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Mediqueue",
  description: "Best Tutor Finding App in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body
        className={`${inter.className} min-h-full flex flex-col bg-zinc-50 dark:bg-zinc-950`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}

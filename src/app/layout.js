import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "MediQueue",
  description: "Best Tutor Finding App in Bangladesh | Tutor Finder",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-full flex flex-col bg-zinc-50 dark:bg-zinc-950`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
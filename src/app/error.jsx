"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import Lottie from "lottie-react";
import errorAnimation from "../../public/assets/error-animation.json";

const ErrorPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#fafafa] dark:bg-zinc-950 px-6 py-20 relative overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl w-full text-center space-y-8"
      >
        <div className="w-64 h-64 mx-auto">
          <Lottie animationData={errorAnimation} loop={true} />
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 dark:text-zinc-200">
            SOMETHING WENT WRONG
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
            We could not find the page you are looking for. It might have been moved or does not exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-linear-to-r from-cyan-600 to-blue-600 text-white font-bold shadow-lg hover:shadow-cyan-500/20 transition-all hover:cursor-pointer"
            >
              <Home className="h-5 w-5" /> Back to Home
            </motion.button>
          </Link>

        </div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
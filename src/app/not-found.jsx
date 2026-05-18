"use client";

import React from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import notFoundAnimation from "../../public/assets/404 not found.json";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 text-center ">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mb-2">
        <Lottie
          animationData={notFoundAnimation}
          loop={true}
          className="w-full h-auto"
        />
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-4">
        PAGE NOT FOUND
      </h1>

      <p className="text-base sm:text-lg text-zinc-500 font-medium max-w-md mx-auto mb-10 leading-relaxed">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <Link
        href="/"
        className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-zinc-950 text-white font-bold text-sm tracking-wide transition-all duration-300 hover:bg-cyan-600 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/25"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;

'use client';

import React from 'react';
import { Sparkles, ArrowRight, User, Mail, BookOpen } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Lottie from "lottie-react";
import { toast } from 'sonner';
import teacherAnimation from "../../public/assets/Teacher.json";

const BecomeMentor = () => {
  const handleApply = async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EJS_SVC,
        process.env.NEXT_PUBLIC_EJS_TMP,
        formData,
        process.env.NEXT_PUBLIC_EJS_KEY
      );

      toast.success('Application received! We will reach out within 24 hours.');
      e.target.reset();
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-transparent">
      <div className="relative rounded-[2.5rem] dark:bg-zinc-900 p-8 md:p-12 lg:p-16 overflow-hidden">
        <div className="flex flex-col gap-12 lg:gap-16 relative z-10">

          <div className="w-full flex justify-center relative">
            <div className="relative w-full max-w-100 z-10 flex items-center justify-center">
              <Lottie
                animationData={teacherAnimation}
                loop={true}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div className="space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 px-4 py-1.5 text-xs font-bold tracking-wider text-zinc-800 dark:text-zinc-300 uppercase border border-zinc-200 dark:border-zinc-700">
                <Sparkles className="h-3.5 w-3.5 text-cyan-500 animate-pulse" />
                Join the Elite
              </span>

              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1]">
                Share your knowledge <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400">and earn.</span>
              </h2>

              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                Join our elite community of professional mentors. Teach on your own schedule, reach thousands of students, and grow your teaching career.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start text-xs font-bold text-zinc-500 dark:text-zinc-400">
                <span className="flex items-center gap-1">✦ Weekly Payouts</span>
                <span className="flex items-center gap-1">✦ Flexible Hours</span>
                <span className="flex items-center gap-1">✦ 24/7 Support</span>
              </div>
            </div>

            <div className="w-full">
              <form
                onSubmit={handleApply}
                className="p-6 sm:p-10 rounded-[2rem] bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-5"
              >
                <div className="text-center lg:text-left mb-2">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Apply as a Tutor</h3>
                  <p className="text-xs font-medium text-zinc-400 mt-0.5">Fill up the details to kickstart your journey.</p>
                </div>

                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Full Name"
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500/50 dark:focus:ring-cyan-400/30 transition-all text-zinc-900 dark:text-zinc-100"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="Email Address"
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500/50 dark:focus:ring-cyan-400/30 transition-all text-zinc-900 dark:text-zinc-100"
                  />
                </div>

                <div className="relative">
                  <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                  <input
                    type="text"
                    name="subject_expertise"
                    required
                    placeholder="Subject Expertise (e.g. ICT, Physics)"
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500/50 dark:focus:ring-cyan-400/30 transition-all text-zinc-900 dark:text-zinc-100"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full py-4 rounded-2xl bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 font-bold text-sm tracking-wide shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.2),transparent_60%)] pointer-events-none" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Apply as Tutor
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeMentor;
'use client';

import React from 'react';
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import {
  ShieldCheck, GraduationCap, Video, CreditCard, Users,
  Clock, MapPin, TrendingUp, Lock, Headphones, Sparkles
} from 'lucide-react';

const platformFeatures = [
  {
    id: 1,
    title: "Verified Mentors",
    description: "Every tutor goes through a strict identity and background check.",
    icon: ShieldCheck
  },
  {
    id: 2,
    title: "Top University Tutors",
    description: "Learn from students of BUET, DU, Medical, and other top varsities.",
    icon: GraduationCap
  },
  {
    id: 3,
    title: "Free Demo Class",
    description: "Take a trial class to ensure the perfect student-tutor match.",
    icon: Video
  },
  {
    id: 4,
    title: "No Hidden Fees",
    description: "Transparent pricing. You only pay what is agreed upon.",
    icon: CreditCard
  },
  {
    id: 5,
    title: "Personalized Matching",
    description: "Find tutors tailored to your specific subject and syllabus needs.",
    icon: Users
  },
  {
    id: 6,
    title: "Flexible Schedule",
    description: "Set class timings that perfectly fit into your daily routine.",
    icon: Clock
  },
  {
    id: 7,
    title: "Online & Offline",
    description: "Choose between comfortable home tutoring or virtual online classes.",
    icon: MapPin
  },
  {
    id: 8,
    title: "Progress Tracking",
    description: "Regular updates and feedback for parents to monitor improvement.",
    icon: TrendingUp
  },
  {
    id: 9,
    title: "Secure Platform",
    description: "100% safe environment with privacy protection for all users.",
    icon: Lock
  },
  {
    id: 10,
    title: "24/7 Support",
    description: "Our dedicated helpdesk is always ready to assist you anytime.",
    icon: Headphones
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const PlatformFeatures = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-transparent">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-cyan-400/10 dark:bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.span
          variants={itemVariants}
          className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 dark:bg-cyan-500/10 px-3.5 py-1.5 text-xs font-bold tracking-wider text-cyan-700 dark:text-cyan-400 uppercase border border-cyan-200/60 dark:border-cyan-500/20 shadow-sm mb-4"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Why Choose Us
        </motion.span>

        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          Everything You Need to <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Succeed</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mt-4 text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed"
        >
          We provide the most reliable, secure, and flexible ecosystem for students to find their perfect mentors.
        </motion.p>
      </motion.div>

      <motion.div
        className="relative w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >

        <div className="absolute left-0 top-0 z-20 h-full w-24 sm:w-40 bg-linear-to-r from-[#fafafa] dark:from-zinc-950 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 z-20 h-full w-24 sm:w-40 bg-linear-to-l from-[#fafafa] dark:from-zinc-950 to-transparent pointer-events-none" />

        <Marquee
          linear={false}
          speed={40}
          pauseOnHover={true}
          className="py-8"
        >
          {platformFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative w-75 h-50 mx-4 p-6 flex flex-col justify-center rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/60 dark:border-zinc-800/50 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:bg-white/80 dark:hover:bg-zinc-900/80 hover:-translate-y-2 hover:border-cyan-500/30 dark:hover:border-cyan-400/30 hover:shadow-[0_15px_40px_rgba(6,182,212,0.15)]"
              >
                <div className="relative z-10 flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400 transition-transform duration-300 group-hover:scale-110 shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight leading-tight text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>

                <p className="relative z-10 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </Marquee>
      </motion.div>

    </section>
  );
};

export default PlatformFeatures;
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { MotionDiv } from '@/components/MotionWrapper';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer className="w-full relative overflow-hidden bg-zinc-50 dark:bg-zinc-950/80 border-t border-zinc-200/60 dark:border-zinc-800/60">

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/5 dark:bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <MotionDiv
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16 text-center lg:text-left">

          <MotionDiv variants={itemVariants} className="flex flex-col space-y-5 items-center lg:items-start">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/mediqLogo.png"
                alt="MediQueue Logo"
                width={180}
                height={60}
                className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xs">
              The premium tutor booking platform. Simplifying learning by connecting students with expert educators effortlessly.
            </p>
            <div className="flex items-center justify-center lg:justify-start space-x-3 pt-3">
              {[
                { icon: FaFacebook, href: "https://facebook.com" },
                { icon: FaXTwitter, href: "https://x.com" },
                { icon: FaInstagram, href: "https://instagram.com" },
                { icon: FaLinkedin, href: "https://linkedin.com" }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-white hover:bg-cyan-600 hover:border-cyan-600 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-linear-to-r dark:hover:from-cyan-700 dark:hover:to-blue-700 transition-all duration-300 shadow-sm"
                  >
                    <Icon className="h-4 w-4 transform group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </MotionDiv>

          <MotionDiv variants={itemVariants} className="flex flex-col items-center lg:items-start">
            <h3 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest mb-6 relative inline-block">
              Learning Services
              <span className="absolute -bottom-2 left-1/2 lg:left-0 w-8 h-1 bg-cyan-500 rounded-full -translate-x-1/2 lg:translate-x-0" />
            </h3>
            <ul className="space-y-3.5 w-full max-w-50 lg:max-w-none">
              {['Academic Tutoring', 'Language Courses', 'Test Preparation', 'Skill Development', 'Online Sessions'].map((item) => (
                <li key={item} className="flex justify-center lg:justify-start">
                  <Link
                    href="#"
                    className="group flex items-center text-sm font-medium text-zinc-600 hover:text-cyan-600 dark:text-zinc-400 dark:hover:text-cyan-400 transition-all duration-200"
                  >
                    <ChevronRight className="h-3.5 w-3.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-cyan-600 dark:text-cyan-400 mr-2 hidden lg:block" />
                    <span className="transform lg:group-hover:translate-x-1 transition-transform duration-300 text-center lg:text-left w-full">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </MotionDiv>

          <MotionDiv variants={itemVariants} className="flex flex-col items-center lg:items-start">
            <h3 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-1/2 lg:left-0 w-8 h-1 bg-cyan-500 rounded-full -translate-x-1/2 lg:translate-x-0" />
            </h3>
            <ul className="space-y-3.5 w-full max-w-50 lg:max-w-none">
              {['About Us', 'Find a Tutor', 'Become a Tutor', 'Pricing & Plans', 'FAQ'].map((item) => (
                <li key={item} className="flex justify-center lg:justify-start">
                  <Link
                    href="#"
                    className="group flex items-center text-sm font-medium text-zinc-600 hover:text-cyan-600 dark:text-zinc-400 dark:hover:text-cyan-400 transition-all duration-200"
                  >
                    <ChevronRight className="h-3.5 w-3.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-cyan-600 dark:text-cyan-400 mr-2 hidden lg:block" />
                    <span className="transform lg:group-hover:translate-x-1 transition-transform duration-300 text-center lg:text-left w-full">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </MotionDiv>

          <MotionDiv variants={itemVariants} className="flex flex-col items-center lg:items-start">
            <h3 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-1/2 lg:left-0 w-8 h-1 bg-cyan-500 rounded-full -translate-x-1/2 lg:translate-x-0" />
            </h3>
            <ul className="space-y-5 flex flex-col items-center lg:items-start">
              <li className="flex flex-col lg:flex-row items-center lg:items-start space-y-2 lg:space-y-0 lg:space-x-3 text-sm font-medium text-zinc-600 dark:text-zinc-400 group cursor-pointer">
                <div className="p-2 rounded-lg bg-cyan-50 dark:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/50 transition-colors shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-center lg:text-left lg:pt-1.5">Level 5, 99 City Centre, Savar, Dhaka</span>
              </li>
              <li className="flex flex-col lg:flex-row items-center lg:items-start space-y-2 lg:space-y-0 lg:space-x-3 text-sm font-medium text-zinc-600 dark:text-zinc-400 group cursor-pointer">
                <div className="p-2 rounded-lg bg-cyan-50 dark:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/50 transition-colors shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <a href="tel:+8801234567890" className="text-center lg:text-left lg:pt-1.5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">+880 1234 567 890</a>
              </li>
              <li className="flex flex-col lg:flex-row items-center lg:items-start space-y-2 lg:space-y-0 lg:space-x-3 text-sm font-medium text-zinc-600 dark:text-zinc-400 group cursor-pointer">
                <div className="p-2 rounded-lg bg-cyan-50 dark:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/50 transition-colors shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <a href="mailto:support@mediqueue.com" className="text-center lg:text-left lg:pt-1.5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">support@mediqueue.com</a>
              </li>
            </ul>
          </MotionDiv>
        </div>

        <MotionDiv
          variants={itemVariants}
          className="pt-8 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 text-center lg:text-left"
        >
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            &copy; {currentYear} <span className="text-zinc-800 dark:text-zinc-200 font-bold">MediQueue</span>. All rights reserved.
          </p>
          <div className="flex justify-center lg:justify-start space-x-6 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <Link href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Terms of Service</Link>
          </div>
        </MotionDiv>
      </MotionDiv>
    </footer>
  );
}

export default Footer;
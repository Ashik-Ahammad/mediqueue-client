import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-200/50 bg-white/70 dark:border-zinc-800/50 dark:bg-zinc-950/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12 text-center lg:text-left">

          <div className="flex flex-col space-y-4 items-center lg:items-start">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/assets/mediqLogo.png"
                alt="MediQueue Logo"
                width={200}
                height={100}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xs">
              The premier tutor booking platform. Simplifying learning by connecting students with expert educators effortlessly.
            </p>

            <div className="flex items-center justify-center lg:justify-start space-x-4 pt-2 w-full">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-zinc-100 text-zinc-600 hover:bg-cyan-50 hover:text-cyan-600 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-cyan-950/50 dark:hover:text-cyan-400 transition-all duration-300 transform hover:-translate-y-1">
                <FaFacebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-zinc-100 text-zinc-600 hover:bg-cyan-50 hover:text-cyan-600 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-cyan-950/50 dark:hover:text-cyan-400 transition-all duration-300 transform hover:-translate-y-1">
                <FaXTwitter className="h-4 w-4" />
                <span className="sr-only">X (Twitter)</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-zinc-100 text-zinc-600 hover:bg-cyan-50 hover:text-cyan-600 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-cyan-950/50 dark:hover:text-cyan-400 transition-all duration-300 transform hover:-translate-y-1">
                <FaInstagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-zinc-100 text-zinc-600 hover:bg-cyan-50 hover:text-cyan-600 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-cyan-950/50 dark:hover:text-cyan-400 transition-all duration-300 transform hover:-translate-y-1">
                <FaLinkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-5">
              Learning Services
            </h3>
            <ul className="space-y-3 w-full max-w-50 lg:max-w-none">
              {['Academic Tutoring', 'Language Courses', 'Test Preparation', 'Skill Development', 'Online Sessions'].map((item) => (
                <li key={item} className="flex justify-center lg:justify-start">
                  <Link
                    href="#"
                    className="group flex items-center text-sm text-zinc-600 hover:text-cyan-600 dark:text-zinc-400 dark:hover:text-cyan-400 transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-cyan-600 dark:text-cyan-400 mr-1 hidden lg:block" />
                    <span className="transform lg:group-hover:translate-x-1 transition-transform duration-300 text-center lg:text-left w-full">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 w-full max-w-50 lg:max-w-none">
              {['About Us', 'Find a Tutor', 'Become a Tutor', 'Pricing & Plans', 'FAQ'].map((item) => (
                <li key={item} className="flex justify-center lg:justify-start">
                  <Link
                    href="#"
                    className="group flex items-center text-sm text-zinc-600 hover:text-cyan-600 dark:text-zinc-400 dark:hover:text-cyan-400 transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-cyan-600 dark:text-cyan-400 mr-1 hidden lg:block" />
                    <span className="transform lg:group-hover:translate-x-1 transition-transform duration-300 text-center lg:text-left w-full">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Information */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4 flex flex-col items-center lg:items-start">
              <li className="flex flex-col lg:flex-row items-center lg:items-start space-y-2 lg:space-y-0 lg:space-x-3 text-sm text-zinc-600 dark:text-zinc-400">
                <MapPin className="h-5 w-5 text-cyan-600 dark:text-cyan-500 shrink-0 lg:mt-0.5" />
                <span className="text-center lg:text-left">Level 5, 99 City Centre, Savar, Dhaka</span>
              </li>
              <li className="flex flex-col lg:flex-row items-center lg:items-start space-y-2 lg:space-y-0 lg:space-x-3 text-sm text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                <Phone className="h-5 w-5 text-cyan-600 dark:text-cyan-500 shrink-0" />
                <a href="tel:+8801234567890" className="text-center lg:text-left">+880 1234 567 890</a>
              </li>
              <li className="flex flex-col lg:flex-row items-center lg:items-start space-y-2 lg:space-y-0 lg:space-x-3 text-sm text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                <Mail className="h-5 w-5 text-cyan-600 dark:text-cyan-500 shrink-0" />
                <a href="mailto:support@mediqueue.com" className="text-center lg:text-left">support@mediqueue.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-zinc-200/50 dark:border-zinc-800/50 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 text-center lg:text-left">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            &copy; {currentYear} MediQueue. All rights reserved.
          </p>
          <div className="flex justify-center lg:justify-start space-x-6 text-sm text-zinc-500 dark:text-zinc-400">
            <Link href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
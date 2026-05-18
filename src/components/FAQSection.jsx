'use client';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircleQuestion, PhoneCall } from 'lucide-react';
import Lottie from "lottie-react";
import faqAnimation from "../../public/assets/Frequently Asked Question (FAQ).json";

const faqData = [
  {
    id: "item-1",
    question: "How do I find the right tutor for my needs?",
    answer: "You can easily search for tutors by subject, class, or location. Once you find a profile you like, simply request a free demo class to ensure the perfect student-teacher match before confirming."
  },
  {
    id: "item-2",
    question: "Are the tutors on this platform verified?",
    answer: "Absolutely! Every tutor goes through a strict 4-step vetting process. We verify their NID, educational background (Varsity ID), and conduct a mock interview to ensure maximum safety and quality."
  },
  {
    id: "item-3",
    question: "What if I am not satisfied with the assigned tutor?",
    answer: "We offer a 100% Replacement Guarantee. If you feel the tutor's teaching style doesn't match your expectations within the first few days, we will immediately assign a new expert at no extra cost."
  },
  {
    id: "item-4",
    question: "How does the tuition fee payment work?",
    answer: "We maintain a highly secure and transparent payment process. You will pay the agreed tuition fee through our platform's secure gateway (bKash/Bank), and we will handle the tutor's payout without any hidden charges."
  },
  {
    id: "item-5",
    question: "Can I switch between online and offline classes?",
    answer: "Yes, you can! Many of our mentors are flexible. You can discuss with your assigned tutor and switch between in-person home tutoring or virtual classes based on your mutual convenience."
  },
  {
    id: "item-6",
    question: "Are there any hidden platform fees or subscription charges?",
    answer: "No, there are absolutely no hidden fees. Creating an account, searching for tutors, and booking a demo class are 100% free for students and parents. You only pay the mutually agreed tuition fee."
  }
];

const FAQSection = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden select-none">

      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-72 h-72 lg:w-150 lg:h-150 bg-cyan-50/50 rounded-full blur-[70px] lg:blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

          <div className="lg:col-span-5 space-y-6 lg:space-y-8 lg:sticky lg:top-24">

            <div className="space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-50 lg:h-50 lg:-ml-2 mb-2">
                <Lottie animationData={faqAnimation} loop={true} />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 leading-[1.15]">
                Frequently Asked <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-blue-600">Questions</span>
              </h2>
              <p className="text-base sm:text-lg text-zinc-500 font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
                Everything you need to know about our platform, finding tutors, and how billing works.
              </p>
            </div>

            <div className="p-5 lg:p-6 rounded-3xl bg-zinc-50 border border-zinc-100 flex flex-col sm:flex-row items-center sm:items-start gap-3 lg:gap-4 shadow-sm w-full max-w-md mx-auto lg:mx-0 text-center sm:text-left">
              <div className="p-3 rounded-2xl bg-white text-cyan-600 shadow-sm border border-zinc-100 shrink-0">
                <MessageCircleQuestion className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-zinc-900 mb-1">Still have questions?</h4>
                <p className="text-sm text-zinc-500 mb-3">Can not find the answer you are looking for? Please chat to our friendly team.</p>
                <a href="tel:+8801234567890" className="inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-bold text-cyan-600 hover:text-cyan-700 transition-colors">
                  <PhoneCall className="h-4 w-4" />
                  Contact Support
                </a>
              </div>
            </div>

          </div>

          <div className="lg:col-span-7 mt-8 lg:mt-0">
            <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4" defaultValue="item-1">
              {faqData.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-white border border-zinc-200 rounded-xl lg:rounded-2xl px-4 sm:px-6 shadow-sm data-[state=open]:border-cyan-500/30 data-[state=open]:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="text-sm sm:text-base lg:text-lg font-bold text-zinc-800 hover:text-cyan-600 hover:no-underline py-4 lg:py-5 text-left leading-snug">
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className="text-sm sm:text-base text-zinc-500 leading-relaxed pb-5 lg:pb-6 pr-2 lg:pr-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
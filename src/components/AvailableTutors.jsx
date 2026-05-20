import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import TutorCard from '@/components/TutorCard';
import { MotionDiv } from '@/components/MotionWrapper';

const FeaturedTutors = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured-tutors`, {
    cache: "no-store",
  });

  const availableTeachers = await res.json();

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-transparent">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-5"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 dark:bg-cyan-500/10 px-3.5 py-1.5 text-xs font-bold tracking-wider text-cyan-700 dark:text-cyan-400 uppercase border border-cyan-200/60 dark:border-cyan-500/20 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Featured Mentors
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Learn from the <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Best Tutors</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            We have handpicked our top-rated educators to help you achieve your academic goals with personalized guidance and expert knowledge.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {availableTeachers?.map((tutor) => (
            <TutorCard key={tutor._id} tutor={tutor} />
          ))}
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/tutors"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold rounded-full hover:bg-cyan-600 dark:hover:bg-cyan-500 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(6,182,212,0.3)] hover:-translate-y-1"
          >
            Explore All Tutors
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </MotionDiv>

      </div>
    </section>
  );
};

export default FeaturedTutors;
import Image from "next/image";
import Link from "next/link";
import {
  MapPin, BookOpen, Clock, GraduationCap,
  Briefcase, Monitor, Calendar, Users,
  ArrowLeft, CheckCircle2, ShieldCheck, Sparkles
} from "lucide-react";
import { Card } from "@/components/ui/card";

const TutorDetailsPage = async ({ params }) => {
  
  const { id } = await params;

  const res = await fetch(`http://localhost:8000/tutors/${id}`, {
    cache: "no-store",
  });

  const tutor = await res.json();

  if (!tutor) {
    return <div className="min-h-screen flex items-center justify-center">Tutor not found</div>;
  }

  const {
    tutorName, imageUrl, subject, hourlyFee, location,
    teachingMode, experience, institution, availableDays,
    timeSlot, totalSlot, startDate
  } = tutor;

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-zinc-950 pb-20 font-sans selection:bg-cyan-500/30">

      <div className="relative h-[280px] md:h-[320px] w-full bg-linear-to-br from-cyan-700 via-blue-700 to-indigo-800 overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400 rounded-full blur-[100px] opacity-20 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative h-full pt-8">
          <Link
            href="/tutors"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tutors
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 -mt-24 md:-mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">

          <div className="lg:col-span-8 space-y-6">

            <Card className="p-6 md:p-8 rounded-[2rem] bg-white/70 dark:bg-zinc-950/70 backdrop-blur-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start text-center md:text-left relative overflow-hidden">

              <div className="relative h-32 w-32 md:h-40 md:w-40 shrink-0 rounded-[1.5rem] overflow-hidden border-4 border-white dark:border-zinc-900 shadow-xl bg-zinc-100">
                <Image
                  src={imageUrl || 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=2000&auto=format&fit=crop'}
                  alt={tutorName}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center gap-3 justify-center md:justify-start">
                  <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100/80 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest border border-cyan-200/50 dark:border-cyan-500/20 w-fit mx-auto md:mx-0">
                    <Sparkles className="h-3.5 w-3.5" /> Featured
                  </span>
                  <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-green-100/80 dark:bg-green-500/10 text-green-700 dark:text-green-400 text-xs font-bold tracking-wider border border-green-200/50 dark:border-green-500/20 w-fit mx-auto md:mx-0">
                    <ShieldCheck className="h-3.5 w-3.5" /> Verified Profile
                  </span>
                </div>

                <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
                    {tutorName}
                  </h1>
                  <p className="text-sm md:text-base font-medium text-zinc-500 dark:text-zinc-400 flex items-center justify-center md:justify-start gap-1.5">
                    <MapPin className="h-4 w-4 text-cyan-500" /> {location}
                  </p>
                </div>
              </div>
            </Card>

            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 px-2 mt-8">Tutor Background</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="flex items-start gap-4 p-5 rounded-3xl bg-white/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 hover:bg-white/80 dark:hover:bg-zinc-900/60 transition-colors">
                <div className="p-3 rounded-2xl bg-cyan-100 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">Subject Expertise</p>
                  <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{subject}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-3xl bg-white/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 hover:bg-white/80 dark:hover:bg-zinc-900/60 transition-colors">
                <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">Institution</p>
                  <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{institution}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-3xl bg-white/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 hover:bg-white/80 dark:hover:bg-zinc-900/60 transition-colors">
                <div className="p-3 rounded-2xl bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">Experience</p>
                  <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{experience}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-3xl bg-white/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 hover:bg-white/80 dark:hover:bg-zinc-900/60 transition-colors">
                <div className="p-3 rounded-2xl bg-purple-100 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400">
                  <Monitor className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">Teaching Mode</p>
                  <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{teachingMode}</p>
                </div>
              </div>

            </div>
          </div>

          <div className="lg:col-span-4 lg:sticky lg:top-8">
            <Card className="rounded-[2.5rem] bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-[0_20px_40px_rgba(0,0,0,0.04)] overflow-hidden">

              <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 text-center border-b border-zinc-200/80 dark:border-zinc-800/80">
                <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2">Remuneration</p>
                <div className="flex items-center justify-center gap-1 text-zinc-900 dark:text-zinc-50">
                  <span className="text-4xl md:text-5xl font-black tracking-tighter">৳{hourlyFee}</span>
                  <span className="text-base font-medium text-zinc-500">/hr</span>
                </div>
              </div>

              <div className="p-8 space-y-6">

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
                    <Calendar className="h-5 w-5 text-cyan-500" />
                    <span className="font-medium text-sm">Available Days</span>
                  </div>
                  <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{availableDays}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
                    <Clock className="h-5 w-5 text-cyan-500" />
                    <span className="font-medium text-sm">Time Slot</span>
                  </div>
                  <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{timeSlot}</span>
                </div>

                <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
                    <Users className="h-5 w-5 text-cyan-500" />
                    <span className="font-medium text-sm">Available Slots</span>
                  </div>
                  <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 font-bold text-sm border border-orange-200 dark:border-orange-800/50">
                    {totalSlot} Left
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-cyan-500" />
                    <span className="font-medium text-sm">Starts On</span>
                  </div>
                  <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{startDate}</span>
                </div>

                <button className="w-full mt-8 py-4 bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold text-base rounded-2xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer">
                  Request Tutor
                </button>
                <p className="text-center text-xs font-medium text-zinc-400 mt-3">
                  No payment required for requesting.
                </p>

              </div>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TutorDetailsPage;
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin, BookOpen, Clock, GraduationCap, Briefcase, Monitor,
  Calendar, Users, ArrowLeft, CheckCircle2, ShieldCheck, Sparkles
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { BookSessionModal } from "@/components/BookSessionModal";

const TutorDetailsClient = ({ tutor }) => {
  const { tutorName, imageUrl, subject, hourlyFee, location, teachingMode, experience, institution, availableDays, timeSlot, totalSlot, startDate } = tutor;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative min-h-screen bg-background pb-20 font-sans z-0">
      <div className="absolute top-0 left-0 right-0 h-125 bg-linear-to-b from-cyan-100/70 via-cyan-50/20 to-transparent dark:from-cyan-900/30 dark:via-background/50 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-8 relative z-10">
        <Link href="/tutors" className="inline-flex items-center gap-2 text-muted-foreground hover:text-cyan-600 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Tutors
        </Link>

        {/* Layout: Main grid set to 1 column on small, 2 columns on large for better width */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Left Column - Wider now (3/5) */}
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="lg:col-span-3 space-y-10">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <div className="relative h-36 w-36 shrink-0 rounded-[1.5rem] overflow-hidden border-4 border-background shadow-md bg-muted">
                <Image src={imageUrl || "https://i.postimg.cc/8PxjBsmJ/aitutor.jpg"} alt={tutorName} fill className="object-cover" />
              </div>
              <div className="space-y-3 w-full">
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400 text-xs font-semibold"><Sparkles className="h-3 w-3" /> Featured</span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-semibold"><ShieldCheck className="h-3 w-3" /> Verified</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground">{tutorName}</h1>
                <p className="text-muted-foreground flex items-center justify-center sm:justify-start gap-1.5 text-sm font-medium"><MapPin className="h-4 w-4 text-cyan-500" /> {location}</p>
              </div>
            </div>

            <hr className="border-border/60" />

            {/* Manual Grid - Adjusted for wider space */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-border/50 bg-card/50 hover:border-cyan-500/30 transition-all">
                    <div className="p-3 rounded-xl bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400"><BookOpen className="h-5 w-5" /></div>
                    <div><p className="text-xs font-semibold text-muted-foreground uppercase">Subject</p><p className="font-bold text-foreground">{subject}</p></div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-border/50 bg-card/50 hover:border-blue-500/30 transition-all">
                    <div className="p-3 rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"><GraduationCap className="h-5 w-5" /></div>
                    <div><p className="text-xs font-semibold text-muted-foreground uppercase">Institution</p><p className="font-bold text-foreground">{institution}</p></div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-border/50 bg-card/50 hover:border-indigo-500/30 transition-all">
                    <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"><Briefcase className="h-5 w-5" /></div>
                    <div><p className="text-xs font-semibold text-muted-foreground uppercase">Experience</p><p className="font-bold text-foreground">{experience}</p></div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-border/50 bg-card/50 hover:border-purple-500/30 transition-all">
                    <div className="p-3 rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"><Monitor className="h-5 w-5" /></div>
                    <div><p className="text-xs font-semibold text-muted-foreground uppercase">Mode</p><p className="font-bold text-foreground">{teachingMode}</p></div>
                </div>
            </div>
          </motion.div>

          {/* Right Column - Booking Card (2/5) */}
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="lg:col-span-2 lg:sticky lg:top-24">
            <Card className="p-8 border-border/60 shadow-lg bg-card/80 backdrop-blur-md rounded-3xl hover:border-cyan-500/30 transition-all">
              <div className="mb-6 text-center">
                <p className="text-sm font-semibold text-muted-foreground uppercase mb-2">Remuneration</p>
                <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-black text-foreground">৳ {hourlyFee}</span>
                    <span className="text-muted-foreground">/hr</span>
                </div>
              </div>
              <div className="space-y-2 text-sm mb-8">
                <div className="flex justify-between items-center p-3 border-b border-border/50 hover:bg-cyan-500/5 rounded-lg transition-colors">
                    <span className="text-muted-foreground font-medium flex items-center gap-2"><Calendar className="h-4 w-4" /> Available Days</span>
                    <span className="font-bold text-foreground">{availableDays}</span>
                </div>
                <div className="flex justify-between items-center p-3 border-b border-border/50 hover:bg-cyan-500/5 rounded-lg transition-colors">
                    <span className="text-muted-foreground font-medium flex items-center gap-2"><Clock className="h-4 w-4" /> Time Slot</span>
                    <span className="font-bold text-foreground">{timeSlot}</span>
                </div>
                <div className="flex justify-between items-center p-3 border-b border-border/50 hover:bg-cyan-500/5 rounded-lg transition-colors">
                    <span className="text-muted-foreground font-medium flex items-center gap-2"><Users className="h-4 w-4" /> Available</span>
                    <span className="font-bold text-orange-600">{totalSlot} Slots Left</span>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-cyan-500/5 rounded-lg transition-colors">
                    <span className="text-muted-foreground font-medium flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Starts On</span>
                    <span className="font-bold text-foreground">{startDate}</span>
                </div>
              </div>
              <BookSessionModal tutor={tutor} />
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TutorDetailsClient;
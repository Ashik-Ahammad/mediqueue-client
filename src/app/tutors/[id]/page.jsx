import Image from "next/image";
import Link from "next/link";
import {
  MapPin, BookOpen, Clock, GraduationCap,
  Briefcase, Monitor, Calendar, Users,
  ArrowLeft, CheckCircle2, ShieldCheck, Sparkles
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { BookSessionModal } from "@/components/BookSessionModal";

const TutorDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:8000/tutors/${id}`, {
    cache: "no-store",
  });
  const tutor = await res.json();

  if (!tutor) {
    return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Tutor not found</div>;
  }

  const {
    tutorName, imageUrl, subject, hourlyFee, location,
    teachingMode, experience, institution, availableDays,
    timeSlot, totalSlot, startDate
  } = tutor;

  return (

    <div className="relative min-h-screen bg-background pb-20 font-sans z-0">

      <div className="absolute top-0 left-0 right-0 h-125 bg-linear-to-b from-cyan-100/70 via-cyan-50/20 to-transparent dark:from-cyan-900/30 dark:via-background/50 pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-8 relative z-10">
        <Link
          href="/tutors"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-medium transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Tutors
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          <div className="lg:col-span-2 space-y-10">

            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">

              <div className="relative h-32 w-32 sm:h-40 sm:w-40 shrink-0 rounded-[1.5rem] overflow-hidden border-4 border-background shadow-md bg-muted">
                <Image
                  src={imageUrl || 'https://i.postimg.cc/8PxjBsmJ/aitutor.jpg'}
                  alt={tutorName}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 w-full">
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400 text-xs font-semibold select-none">
                    <Sparkles className="h-3 w-3" /> Featured
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-semibold select-none">
                    <ShieldCheck className="h-3 w-3" /> Verified Profile
                  </span>
                </div>

                <div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-1.5">
                    {tutorName}
                  </h1>
                  <p className="text-muted-foreground flex items-center justify-center sm:justify-start gap-1.5 text-sm font-medium">
                    <MapPin className="h-4 w-4 text-cyan-500" /> {location}
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-border/60" />

            <div>
              <h2 className="text-xl font-bold text-foreground mb-6">Tutor Background</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="w-full flex items-center gap-4 p-4 rounded-2xl border border-border/50 bg-card/50 hover:bg-muted/50 transition-colors">
                  <div className="p-3 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 shrink-0">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">Subject</p>
                    <p className="font-bold text-foreground text-sm sm:text-base">{subject}</p>
                  </div>
                </div>

                <div className="w-full flex items-center gap-4 p-4 rounded-2xl border border-border/50 bg-card/50 hover:bg-muted/50 transition-colors">
                  <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 shrink-0">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">Institution</p>
                    <p className="font-bold text-foreground text-sm sm:text-base">{institution}</p>
                  </div>
                </div>

                <div className="w-full flex items-center gap-4 p-4 rounded-2xl border border-border/50 bg-card/50 hover:bg-muted/50 transition-colors">
                  <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">Experience</p>
                    <p className="font-bold text-foreground text-sm sm:text-base">{experience}</p>
                  </div>
                </div>

                <div className="w-full flex items-center gap-4 p-4 rounded-2xl border border-border/50 bg-card/50 hover:bg-muted/50 transition-colors">
                  <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 shrink-0">
                    <Monitor className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">Mode</p>
                    <p className="font-bold text-foreground text-sm sm:text-base">{teachingMode}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-24 mt-4 lg:mt-0">
            <Card className="p-6 md:p-8 border-border/60 shadow-lg shadow-black/5 bg-card/80 backdrop-blur-md rounded-3xl">

              <div className="mb-6 text-center lg:text-left">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-2">Remuneration</p>
                <div className="flex items-baseline justify-center lg:justify-start gap-1">
                  <span className="text-4xl md:text-5xl font-black tracking-tighter text-foreground">৳ {hourlyFee}</span>
                  <span className="text-muted-foreground font-medium">/hr</span>
                </div>
              </div>

              <div className="space-y-4 text-sm mb-8">
                <div className="flex justify-between items-center py-2.5 border-b border-border/50">
                  <div className="flex items-center gap-2.5 text-muted-foreground font-medium">
                    <Calendar className="h-4 w-4" /> Available Days
                  </div>
                  <span className="font-semibold text-foreground">{availableDays}</span>
                </div>

                <div className="flex justify-between items-center py-2.5 border-b border-border/50">
                  <div className="flex items-center gap-2.5 text-muted-foreground font-medium">
                    <Clock className="h-4 w-4" /> Time Slot
                  </div>
                  <span className="font-semibold text-foreground">{timeSlot}</span>
                </div>

                <div className="flex justify-between items-center py-2.5 border-b border-border/50">
                  <div className="flex items-center gap-2.5 text-muted-foreground font-medium">
                    <Users className="h-4 w-4" /> Available
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
                    {totalSlot} Slots Left
                  </span>
                </div>

                <div className="flex justify-between items-center py-2.5">
                  <div className="flex items-center gap-2.5 text-muted-foreground font-medium">
                    <CheckCircle2 className="h-4 w-4" /> Starts On
                  </div>
                  <span className="font-semibold text-foreground">{startDate}</span>
                </div>
              </div>

              <BookSessionModal tutor={tutor} />
              <p className="text-center text-xs font-medium text-muted-foreground mt-4 select-none">
                No payment required for requesting.
              </p>

            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TutorDetailsPage;
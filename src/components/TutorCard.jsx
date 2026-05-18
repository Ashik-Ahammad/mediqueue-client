import Image from 'next/image';
import Link from 'next/link';
import { MapPin, BookOpen, Clock, GraduationCap, Briefcase, Monitor, ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const TutorCard = ({ tutor }) => {

  const {
    _id, tutorName, imageUrl, subject,
    hourlyFee, location, teachingMode,
    experience, institution, availableDays, timeSlot
  } = tutor;

  return (
    <Card className="group relative overflow-hidden rounded-3xl bg-white/60 dark:bg-zinc-950/60 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500">

      <div className="p-3 pb-0">
        <div className="relative h-56 w-full overflow-hidden rounded-sm bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 transform-[translateZ(0)]">
          <Image
            src={imageUrl || 'https://i.postimg.cc/8PxjBsmJ/aitutor.jpg'}
            alt={tutorName}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm flex flex-col justify-center p-6 text-zinc-200 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-cyan-400 shrink-0" />
                <span className="text-sm font-medium tracking-tight truncate">{institution}</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-cyan-400 shrink-0" />
                <span className="text-sm font-medium">{experience}</span>
              </div>
              <div className="flex items-center gap-3">
                <Monitor className="h-5 w-5 text-cyan-400 shrink-0" />
                <span className="text-sm font-medium">{teachingMode}</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium leading-tight">
                  {availableDays} <br/> <span className="text-xs text-zinc-300 font-normal">{timeSlot}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 pt-4">
        <div className="flex justify-between items-center mb-3.5">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/30 px-2.5 py-1.5 rounded-lg border border-cyan-100/80 dark:border-cyan-900/50">
            <BookOpen className="h-3.5 w-3.5" />
            {subject}
          </span>
          <span className="flex items-center text-xs font-medium text-zinc-500 dark:text-zinc-400">
            <MapPin className="mr-1 h-3.5 w-3.5 text-zinc-400" />
            {location}
          </span>
        </div>

        <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4 truncate group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          {tutorName}
        </h3>

        <div className="flex items-center justify-between border-t border-zinc-200/60 dark:border-zinc-800/60 pt-4 mt-2">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight">৳{hourlyFee}</span>
            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">/hr</span>
          </div>

          <Link
            href={`/tutors/${_id}`}
            className="flex items-center gap-1.5 text-sm font-semibold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors group/btn"
          >
            Book Session
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        </div>
      </div>

    </Card>
  );
};

export default TutorCard;
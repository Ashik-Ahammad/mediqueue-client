import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  BookOpen,
  Clock,
  GraduationCap,
  Briefcase,
  Monitor,
  ArrowUpRight,
} from "lucide-react";

const TutorCard = ({ tutor }) => {
  const {
    _id,
    tutorName,
    imageUrl,
    subject,
    hourlyFee,
    location,
    teachingMode,
    experience,
    institution,
    availableDays,
    timeSlot,
  } = tutor;

  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 flex flex-col">
      <div className="relative h-60 w-full bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800 rounded-t-2xl overflow-hidden">
        <span className="absolute left-0 top-0 z-20 rounded-br-xl bg-linear-to-br from-blue-600/70 to-cyan-500/70 backdrop-blur-md border-b border-r border-white/20 px-3.5 py-1.5 text-xs font-bold tracking-wider text-white shadow-sm flex items-center gap-1.5">
          <GraduationCap className="h-3.5 w-3.5" />
          VERIFIED
        </span>

        <Image
          src={imageUrl || "https://i.postimg.cc/8PxjBsmJ/aitutor.jpg"}
          alt={tutorName}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-zinc-950/85 backdrop-blur-sm flex flex-col justify-center p-6 text-zinc-200 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-cyan-400 shrink-0" />
              <span className="text-sm font-medium tracking-tight truncate">
                {institution}
              </span>
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
                {availableDays} <br />{" "}
                <span className="text-xs text-zinc-400 font-normal">
                  {timeSlot}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 grow flex flex-col">
        <span className="uppercase text-xs font-bold text-zinc-400 dark:text-zinc-500 tracking-wider mb-2 flex items-center gap-1.5">
          <BookOpen className="h-3.5 w-3.5" />
          {subject}
        </span>

        <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3 truncate group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          {tutorName}
        </h3>

        <span className="flex items-start text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-6 grow">
          <MapPin className="mr-1.5 h-4 w-4 text-cyan-500 shrink-0 mt-0.5" />
          <span>{location}</span>
        </span>

        <div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/60 pt-4 mt-auto">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
              ৳ {hourlyFee}
            </span>
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              /hr
            </span>
          </div>

          <Link
            href={`/tutors/${_id}`}
            className="flex items-center gap-1.5 text-sm font-semibold text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group/btn"
          >
            Book Session
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default TutorCard;

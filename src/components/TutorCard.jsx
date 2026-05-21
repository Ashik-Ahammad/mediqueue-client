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
    <article className="group relative h-105 w-full rounded-3xl hover:shadow-lg overflow-hidden bg-zinc-900">
      <Image
        src={imageUrl || "https://i.postimg.cc/8PxjBsmJ/aitutor.jpg"}
        alt={tutorName}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95"></div>

      {/* Fee Badge - Always Glassmorphic Gradient */}
      <span className="absolute right-0 top-0 z-20 rounded-bl-2xl bg-linear-to-br from-cyan-500/60 to-white/20 backdrop-blur-md border-b border-l border-white/40 px-4 py-2.5 text-sm font-bold tracking-wider text-white shadow-[0_8px_30px_rgba(6,182,212,0.3)]">
        ৳ {hourlyFee}/hr
      </span>

      <div className="absolute inset-x-0 bottom-0 px-6 pt-6 pb-10 flex flex-col justify-end z-20">
        <div className="transform transition-transform duration-500">
          <p className="text-cyan-400 text-sm font-bold tracking-wider uppercase mb-2 flex items-center gap-1.5">
            <BookOpen className="h-4 w-4" /> {subject}
          </p>

          <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
            {tutorName}
          </h3>

          <p className="text-zinc-300 text-sm flex items-center gap-1.5 mb-4">
            <MapPin className="h-4 w-4" /> {location}
          </p>
        </div>

        <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[150px] group-hover:opacity-100 group-hover:mb-6">
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="flex items-center gap-2 text-zinc-300 text-xs font-medium">
              <GraduationCap className="h-4 w-4 text-cyan-400" /> {institution}
            </div>
            <div className="flex items-center gap-2 text-zinc-300 text-xs font-medium">
              <Briefcase className="h-4 w-4 text-cyan-400" /> {experience}
            </div>
            <div className="flex items-center gap-2 text-zinc-300 text-xs font-medium">
              <Monitor className="h-4 w-4 text-cyan-400" /> {teachingMode}
            </div>
            <div className="flex items-center gap-2 text-zinc-300 text-xs font-medium">
              <Clock className="h-4 w-4 text-cyan-400" /> {availableDays}
            </div>
          </div>
        </div>

        <Link
          href={`/tutors/${_id}`}
          className="w-full py-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold flex items-center justify-center gap-2 shrink-0 mt-auto transition-all duration-300 hover:bg-linear-to-br hover:from-cyan-500/60 hover:to-white/20 hover:border-white/40 hover:shadow-[0_8px_30px_rgba(6,182,212,0.3)]"
        >
          Book Session <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
};

export default TutorCard;
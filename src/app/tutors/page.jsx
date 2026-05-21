import TutorSearchFilter from "@/components/TutorSearchFilter";
import TutorListClient from "./TutorListClient";

export const metadata = {
  title: "Find Top Tutors in Bangladesh | MediQueue",
  description: "Browse and book the best expert tutors in Bangladesh for online and offline classes. Find your perfect teacher for Physics, Math, English, and more on MediQueue.",
};

const AllTutorsPage = async ({ searchParams }) => {

  const params = await searchParams;
  const search = params?.search || "";
  const startDate = params?.startDate || "";
  const endDate = params?.endDate || "";
  const query = new URLSearchParams();

  if (search) query.append("search", search);
  if (startDate) query.append("startDate", startDate);
  if (endDate) query.append("endDate", endDate);

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors?${query.toString()}`, {
    cache: "no-store",
  });

  const tutors = await res.json();

  return (
    <div className="min-h-screen w-full relative bg-[#fafafa] dark:bg-zinc-950 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-100 h-100 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-zinc-900 dark:text-zinc-50">
            Explore Our <span className="font-semibold text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Expert Tutors</span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Discover highly qualified mentors tailored to your learning needs. Hover over a profile to see their availability and credentials.
          </p>
        </div>

        <TutorSearchFilter />

        <TutorListClient tutors={tutors} />
      </div>
    </div>
  );
};

export default AllTutorsPage;
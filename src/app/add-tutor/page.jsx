"use client"
import {
  User,
  Image as ImageIcon,
  BookOpen,
  Calendar,
  Clock,
  DollarSign,
  Users,
  GraduationCap,
  Briefcase,
  MapPin,
  Monitor,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaChalkboardTeacher } from "react-icons/fa";
import { toast } from "sonner";

const AddTutorPage = () => {

  const onSubmit = async (e) => {

    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const tutorData = Object.fromEntries(formData.entries());

      const res = await fetch("http://localhost:8000/tutors", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tutorData)
      });

      if (res.ok) {
        toast.success("Tutor Successfully Added! 🎉");
        e.target.reset();
      } else {
        throw new Error("Failed to add data");
      }

    } catch (error) {
      toast.error("Something went wrong! ❌", { id: toastId });
      console.error("Error:", error);
    }

  }
  return (
    <div className="min-h-screen w-full flex items-center justify-center py-12 md:py-20 px-4 sm:px-6">
      <div className="w-full max-w-4xl bg-white/60 dark:bg-zinc-950/60 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all">

        {/* Header*/}
        <div className="px-6 sm:px-12 pt-10 sm:pt-14 pb-8 border-b border-zinc-200/50 bg-white/70 dark:border-zinc-800/50 dark:bg-zinc-950/70 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-xl hover:bg-white/90 dark:hover:bg-zinc-950/90 group rounded-xl">
          <h1 className="flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-light sm:font-normal tracking-tight text-zinc-900 transition-all duration-300 group-hover:font-semibold group-hover:text-cyan-600 dark:text-zinc-50 dark:group-hover:text-cyan-400 animate-in fade-in slide-in-from-bottom-3 duration-300">
            <FaChalkboardTeacher className="h-6 w-6 sm:h-8 sm:w-8 text-zinc-400 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 shrink-0" />
            <span>New Tutor Profile</span>
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-zinc-500 font-medium tracking-wider uppercase transition-all duration-300 group-hover:translate-x-1.5 dark:text-zinc-400 dark:group-hover:text-zinc-100">
            Join our platform and start teaching students across Bangladesh.
          </p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={onSubmit}
          className="px-6 sm:px-12 py-8 sm:py-10 space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {/* Tutor Name */}
            <div className="group md:col-span-2">
              <label className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400">
                <User className="h-4 w-4 transition-transform group-hover:scale-110" />
                Tutor Name
              </label>
              <Input
                name="tutorName"
                placeholder="e.g. Ashik Ahammad"
                required
                className="bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-950 rounded-xl shadow-sm transition-all h-12"
              />
            </div>

            {/* Photo URL */}
            <div className="group">
              <label className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400">
                <ImageIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
                Photo URL
              </label>
              <Input
                name="imageUrl"
                type="url"
                placeholder="https://i.ibb.co/..."
                required
                className="bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-950 rounded-xl shadow-sm transition-all h-12"
              />
            </div>

            {/* Subject Dropdown */}
            <div className="group">
              <label className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400">
                <BookOpen className="h-4 w-4 transition-transform group-hover:scale-110" />
                Subject
              </label>
              <select
                name="subject"
                required
                defaultValue=""
                className="flex h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-3 py-2 text-sm shadow-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:border-zinc-800 dark:bg-zinc-900/50 dark:focus:bg-zinc-950"
              >
                <option value="" disabled hidden>Select a subject</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
                <option value="English">English</option>
                <option value="ICT">ICT</option>
              </select>
            </div>

            {/* Available Days */}
            <div className="group">
              <label className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400">
                <Calendar className="h-4 w-4 transition-transform group-hover:scale-110" />
                Available Days
              </label>
              <Input
                name="availableDays"
                placeholder="e.g. Sun - Thu, Sat/Mon"
                required
                className="bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-950 rounded-xl shadow-sm transition-all h-12"
              />
            </div>

            {/* Time Slot */}
            <div className="group">
              <label className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400">
                <Clock className="h-4 w-4 transition-transform group-hover:scale-110" />
                Time Slot
              </label>
              <Input
                name="timeSlot"
                placeholder="e.g. 5:00 PM - 8:00 PM"
                required
                className="bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-950 rounded-xl shadow-sm transition-all h-12"
              />
            </div>

            {/* Hourly Fee */}
            <div className="group">
              <label className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400">
                <DollarSign className="h-4 w-4 transition-transform group-hover:scale-110" />
                Hourly Fee (BDT)
              </label>
              <Input
                name="hourlyFee"
                type="number"
                placeholder="e.g. 500"
                required
                className="bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-950 rounded-xl shadow-sm transition-all h-12"
              />
            </div>

            {/* Total Slots */}
            <div className="group">
              <label className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400">
                <Users className="h-4 w-4 transition-transform group-hover:scale-110" />
                Total Slots
              </label>
              <Input
                name="totalSlot"
                type="number"
                placeholder="e.g. 5"
                required
                className="bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-950 rounded-xl shadow-sm transition-all h-12"
              />
            </div>

            {/* Start Date */}
            <div className="group">
              <label className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400">
                <Calendar className="h-4 w-4 transition-transform group-hover:scale-110" />
                Session Start Date
              </label>
              <Input
                name="startDate"
                type="date"
                required
                className="bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-950 rounded-xl shadow-sm transition-all h-12"
              />
            </div>

            {/* Institution */}
            <div className="group">
              <label className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400">
                <GraduationCap className="h-4 w-4 transition-transform group-hover:scale-110" />
                Institution
              </label>
              <Input
                name="institution"
                placeholder="e.g. Dhaka University"
                required
                className="bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-950 rounded-xl shadow-sm transition-all h-12"
              />
            </div>

            {/* Experience */}
            <div className="group">
              <label className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400">
                <Briefcase className="h-4 w-4 transition-transform group-hover:scale-110" />
                Teaching Experience
              </label>
              <Input
                name="experience"
                placeholder="e.g. 3 Years / Fresh Graduate"
                required
                className="bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-950 rounded-xl shadow-sm transition-all h-12"
              />
            </div>

            {/* Location */}
            <div className="group">
              <label className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400">
                <MapPin className="h-4 w-4 transition-transform group-hover:scale-110" />
                Location
              </label>
              <Input
                name="location"
                placeholder="e.g. Savar, Dhaka"
                required
                className="bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-950 rounded-xl shadow-sm transition-all h-12"
              />
            </div>

            {/* Teaching Mode Dropdown */}
            <div className="group">
              <label className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400">
                <Monitor className="h-4 w-4 transition-transform group-hover:scale-110" />
                Teaching Mode
              </label>
              <select
                name="teachingMode"
                required
                defaultValue=""
                className="flex h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-3 py-2 text-sm shadow-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:border-zinc-800 dark:bg-zinc-900/50 dark:focus:bg-zinc-950"
              >
                <option value="" disabled hidden>Select mode</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                <option value="Both">Both</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6 border-t border-zinc-200/50 dark:border-zinc-800/50 flex justify-end">
            <Button
              type="submit"
              className="group w-full md:w-auto flex items-center justify-center gap-3 md:px-10 py-6 bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl font-semibold tracking-wide shadow-lg hover:shadow-xl hover:cursor-pointer transition-all duration-300"
            >
              Submit Tutor Profile
              <Send className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTutorPage;

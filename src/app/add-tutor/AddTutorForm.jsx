"use client";
import { useState } from "react";
import { motion } from "framer-motion";
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
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { FaChalkboardTeacher } from "react-icons/fa";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Lottie from "lottie-react";
import educationAnimation from "../../../public/assets/Education edit.json";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const AddTutorForm = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user || null;

  const [startDate, setStartDate] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login to create a tutor profile!");
      return;
    }

    if (!startDate) {
      toast.error("Please select a Session Start Date!");
      return;
    }

    try {
      const formData = new FormData(e.currentTarget);
      const tutorData = Object.fromEntries(formData.entries());

      const finalData = {
        userId: user?.id,
        userName: user?.name,
        userEmail: user?.email,
        userImage: user?.image,

        tutorName: tutorData.tutorName,
        imageUrl: tutorData.imageUrl,
        subject: tutorData.subject,
        availableDays: tutorData.availableDays,
        timeSlot: tutorData.timeSlot,
        hourlyFee: tutorData.hourlyFee,
        totalSlot: tutorData.totalSlot,
        startDate: startDate.toISOString().split("T")[0],
        institution: tutorData.institution,
        experience: tutorData.experience,
        location: tutorData.location,
        teachingMode: tutorData.teachingMode,
      };

      const { data: tokenData } = await authClient.token();
      const jwtToken = tokenData?.token;

      if (!jwtToken) {
        toast.error("Authentication failed. Please login again.");
        return;
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(finalData),
      });

      if (res.ok) {
        toast.success("Tutor Successfully Added!");
        e.target.reset();
        setStartDate(null);
      } else {
        throw new Error("Failed to add data");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center py-12 md:py-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-4xl bg-white/60 dark:bg-zinc-950/60 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-colors"
      >

        <div className="px-6 sm:px-12 pt-10 sm:pt-14 pb-8 border-b border-zinc-200/50 bg-white/70 dark:border-zinc-800/50 dark:bg-zinc-950/70 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-colors duration-500 hover:bg-white/90 dark:hover:bg-zinc-950/90 group rounded-t-xl relative overflow-hidden">
          <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1"
            >
              <h1 className="flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-light sm:font-normal tracking-tight text-zinc-900 transition-all duration-300 group-hover:font-semibold group-hover:text-cyan-600 dark:text-zinc-50 dark:group-hover:text-cyan-400">
                <FaChalkboardTeacher className="h-6 w-6 sm:h-8 sm:w-8 text-zinc-400 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 shrink-0" />
                <span>New Tutor Profile</span>
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-zinc-500 font-medium tracking-wider uppercase transition-all duration-300 group-hover:translate-x-1.5 dark:text-zinc-400 dark:group-hover:text-zinc-100">
                Join our platform and start teaching students across Bangladesh.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
              className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 hidden sm:block opacity-90 transition-transform duration-500 group-hover:scale-110"
            >
              <Lottie animationData={educationAnimation} loop={true} className="w-full h-full object-contain" />
            </motion.div>
          </div>
        </div>

        <motion.form
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onSubmit={onSubmit}
          className="px-6 sm:px-12 py-8 sm:py-10 space-y-8"
        >
          <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            <motion.div variants={fadeUpVariants} className="md:col-span-2">
              <Field className="group">
                <Label
                  htmlFor="tutorName"
                  className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400"
                >
                  <User className="h-4 w-4 transition-transform group-hover:scale-110" />
                  Tutor Name
                </Label>
                <Input
                  id="tutorName"
                  name="tutorName"
                  placeholder="e.g. Mr Teacher"
                  required
                  className="bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-950 rounded-xl shadow-sm transition-all h-12"
                />
              </Field>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <Field className="group">
                <Label
                  htmlFor="imageUrl"
                  className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400"
                >
                  <ImageIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
                  Photo URL
                </Label>
                <Input
                  id="imageUrl"
                  name="imageUrl"
                  type="url"
                  placeholder="https://i.ibb.co.png/..."
                  required
                  className="bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-950 rounded-xl shadow-sm transition-all h-12"
                />
              </Field>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <Field className="group">
                <Label
                  htmlFor="subject"
                  className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400"
                >
                  <BookOpen className="h-4 w-4 transition-transform group-hover:scale-110" />
                  Subject
                </Label>
                <select
                  id="subject"
                  name="subject"
                  required
                  defaultValue=""
                  className="flex h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-3 py-2 text-sm shadow-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:border-zinc-800 dark:bg-zinc-900/50 dark:focus:bg-zinc-950"
                >
                  <option value="" disabled hidden>
                    Select a subject
                  </option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Biology">Biology</option>
                  <option value="English">English</option>
                  <option value="ICT">ICT</option>
                  <option value="ARABIC">ARABIC</option>
                  <option value="AGRICULTURE">AGRICULTURE</option>
                </select>
              </Field>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <Field className="group">
                <Label
                  htmlFor="availableDays"
                  className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400"
                >
                  <Calendar className="h-4 w-4 transition-transform group-hover:scale-110" />
                  Available Days
                </Label>
                <Input
                  id="availableDays"
                  name="availableDays"
                  placeholder="e.g. Sun - Thu, Sat/Mon"
                  required
                  className="bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-950 rounded-xl shadow-sm transition-all h-12"
                />
              </Field>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <Field className="group">
                <Label
                  htmlFor="timeSlot"
                  className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400"
                >
                  <Clock className="h-4 w-4 transition-transform group-hover:scale-110" />
                  Time Slot
                </Label>
                <Input
                  id="timeSlot"
                  name="timeSlot"
                  placeholder="e.g. 5:00 PM - 8:00 PM"
                  required
                  className="bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-950 rounded-xl shadow-sm transition-all h-12"
                />
              </Field>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <Field className="group">
                <Label
                  htmlFor="hourlyFee"
                  className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400"
                >
                  <DollarSign className="h-4 w-4 transition-transform group-hover:scale-110" />
                  Hourly Fee (BDT)
                </Label>
                <Input
                  id="hourlyFee"
                  name="hourlyFee"
                  type="number"
                  placeholder="e.g. 500"
                  required
                  className="bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-950 rounded-xl shadow-sm transition-all h-12"
                />
              </Field>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <Field className="group">
                <Label
                  htmlFor="totalSlot"
                  className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400"
                >
                  <Users className="h-4 w-4 transition-transform group-hover:scale-110" />
                  Total Slots
                </Label>
                <Input
                  id="totalSlot"
                  name="totalSlot"
                  type="number"
                  placeholder="e.g. 5"
                  required
                  className="bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-950 rounded-xl shadow-sm transition-all h-12"
                />
              </Field>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <Field className="group">
                <Label
                  htmlFor="startDate"
                  className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400"
                >
                  <Calendar className="h-4 w-4 transition-transform group-hover:scale-110" />
                  Session Start Date
                </Label>
                <div className="w-full">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select date (YYYY-MM-DD)"
                    wrapperClassName="w-full"
                    className="w-full h-12 px-3 bg-zinc-50/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-950 rounded-xl shadow-sm transition-all outline-none focus:ring-2 focus:ring-cyan-500 text-sm text-zinc-900 dark:text-zinc-100"
                    required
                  />
                </div>
              </Field>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <Field className="group">
                <Label
                  htmlFor="institution"
                  className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400"
                >
                  <GraduationCap className="h-4 w-4 transition-transform group-hover:scale-110" />
                  Institution
                </Label>
                <Input
                  id="institution"
                  name="institution"
                  placeholder="e.g. Dhaka University"
                  required
                  className="bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-950 rounded-xl shadow-sm transition-all h-12"
                />
              </Field>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <Field className="group">
                <Label
                  htmlFor="experience"
                  className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400"
                >
                  <Briefcase className="h-4 w-4 transition-transform group-hover:scale-110" />
                  Teaching Experience
                </Label>
                <Input
                  id="experience"
                  name="experience"
                  placeholder="e.g. 3 Years / Fresh Graduate"
                  required
                  className="bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-950 rounded-xl shadow-sm transition-all h-12"
                />
              </Field>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <Field className="group">
                <Label
                  htmlFor="location"
                  className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400"
                >
                  <MapPin className="h-4 w-4 transition-transform group-hover:scale-110" />
                  Location
                </Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="e.g. Savar, Dhaka"
                  required
                  className="bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-950 rounded-xl shadow-sm transition-all h-12"
                />
              </Field>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <Field className="group">
                <Label
                  htmlFor="teachingMode"
                  className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400"
                >
                  <Monitor className="h-4 w-4 transition-transform group-hover:scale-110" />
                  Teaching Mode
                </Label>
                <select
                  id="teachingMode"
                  name="teachingMode"
                  required
                  defaultValue=""
                  className="flex h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-3 py-2 text-sm shadow-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:border-zinc-800 dark:bg-zinc-900/50 dark:focus:bg-zinc-950"
                >
                  <option value="" disabled hidden>
                    Select mode
                  </option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                  <option value="Both">Both</option>
                </select>
              </Field>
            </motion.div>
          </FieldGroup>

          <motion.div variants={fadeUpVariants} className="pt-6 border-t border-zinc-200/50 dark:border-zinc-800/50 flex justify-end">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full md:w-auto">
              <Button
                type="submit"
                className="group w-full flex items-center justify-center gap-3 md:px-10 py-6 bg-linear-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold tracking-wide shadow-lg hover:shadow-xl hover:cursor-pointer border-none"
              >
                Submit Tutor Profile
                <Send className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default AddTutorForm;
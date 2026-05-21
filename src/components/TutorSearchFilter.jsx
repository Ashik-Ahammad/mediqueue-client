"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";

const TutorSearchFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialStart = searchParams.get("startDate")
    ? new Date(searchParams.get("startDate"))
    : null;
  const initialEnd = searchParams.get("endDate")
    ? new Date(searchParams.get("endDate"))
    : null;

  const [startDate, setStartDate] = useState(initialStart);
  const [endDate, setEndDate] = useState(initialEnd);

  const handleSearch = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const search = formData.get("search");

    const formattedStartDate = startDate
      ? startDate.toISOString().split("T")[0]
      : "";
    const formattedEndDate = endDate ? endDate.toISOString().split("T")[0] : "";

    const params = new URLSearchParams(searchParams);

    if (search) params.set("search", search);
    else params.delete("search");

    if (formattedStartDate) params.set("startDate", formattedStartDate);
    else params.delete("startDate");

    if (formattedEndDate) params.set("endDate", formattedEndDate);
    else params.delete("endDate");

    router.push(`/tutors?${params.toString()}`);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.form
      onSubmit={handleSearch}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-end gap-4 mb-12 p-6 bg-white dark:bg-zinc-900/50 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800"
    >
      <motion.div variants={itemVariants} className="flex-1 w-full">
        <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 block">
          Search Tutor
        </label>
        <Input
          name="search"
          placeholder="Search by name..."
          defaultValue={searchParams.get("search") || ""}
          className="h-11 bg-zinc-50/50 dark:bg-zinc-900/50"
        />
      </motion.div>

      <motion.div variants={itemVariants} className="w-full md:w-auto">
        <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 block">
          From Date
        </label>
        <div className="w-full relative">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="YYYY-MM-DD"
            wrapperClassName="w-full"
            className="w-full h-11 px-3 bg-zinc-50/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-950 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-cyan-500 text-sm text-zinc-900 dark:text-zinc-100 transition-colors"
          />
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="w-full md:w-auto">
        <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 block">
          To Date
        </label>
        <div className="w-full relative">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="YYYY-MM-DD"
            wrapperClassName="w-full"
            className="w-full h-11 px-3 bg-zinc-50/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-950 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-cyan-500 text-sm text-zinc-900 dark:text-zinc-100 transition-colors"
          />
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="w-full md:w-auto">
        <Button
          type="submit"
          className="h-11 px-8 w-full md:w-auto flex gap-2 items-center cursor-pointer transition-all duration-300 bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 border-0"
        >
          <Search className="w-4 h-4" />
          Search
        </Button>
      </motion.div>
    </motion.form>
  );
};

export default TutorSearchFilter;

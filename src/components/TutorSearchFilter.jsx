"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TutorSearchFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialStart = searchParams.get("startDate") ? new Date(searchParams.get("startDate")) : null;
  const initialEnd = searchParams.get("endDate") ? new Date(searchParams.get("endDate")) : null;

  const [startDate, setStartDate] = useState(initialStart);
  const [endDate, setEndDate] = useState(initialEnd);

  const handleSearch = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const search = formData.get("search");

    const formattedStartDate = startDate ? startDate.toISOString().split("T")[0] : "";
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

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col md:flex-row items-end gap-4 mb-12 p-6 bg-white dark:bg-zinc-900/50 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800"
    >
      <div className="flex-1 w-full">
        <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 block">
          Search Tutor
        </label>
        <Input
          name="search"
          placeholder="Search by name..."
          defaultValue={searchParams.get("search") || ""}
          className="h-11 bg-zinc-50/50 dark:bg-zinc-900/50"
        />
      </div>

      <div className="w-full md:w-auto">
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
      </div>

      <div className="w-full md:w-auto">
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
      </div>

      <Button
        type="submit"
        className="h-11 px-8 bg-cyan-600 hover:bg-cyan-700 text-white w-full md:w-auto flex gap-2 items-center cursor-pointer transition-colors"
      >
        <Search className="w-4 h-4" />
        Search
      </Button>
    </form>
  );
};

export default TutorSearchFilter;
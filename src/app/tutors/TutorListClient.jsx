"use client";
import { motion } from "framer-motion";
import TutorCard from "@/components/TutorCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 10 },
  },
};

const TutorListClient = ({ tutors }) => {
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
      >
        {tutors?.map((tutor) => (
          <motion.div key={tutor._id} variants={cardVariants}>
            <TutorCard tutor={tutor} />
          </motion.div>
        ))}
      </motion.div>

      {tutors.length === 0 && (
        <div className="text-center mt-20 p-8 border border-dashed border-zinc-300 dark:border-zinc-800 rounded-2xl">
          <h3 className="text-xl font-semibold text-zinc-700 dark:text-zinc-300">No tutors found</h3>
          <p className="text-zinc-500 mt-2">Try adjusting your search or date filter.</p>
        </div>
      )}
    </>
  );
};

export default TutorListClient;
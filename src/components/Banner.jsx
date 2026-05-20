"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Banner = () => {
  const slides = [
    {
      id: 1,
      title: "Unlock Your True Potential",
      description:
        "Connect with expert tutors across Bangladesh and master any subject with personalized learning sessions.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Seamless Booking Experience",
      description:
        "Say goodbye to scheduling conflicts. Book your preferred time slots instantly with our smart token system.",
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Learn Anywhere, Anytime",
      description:
        "Whether you prefer face-to-face sessions or online classes, find the perfect match for your learning style.",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    },
  };

  return (
    <div className="w-full relative hero-banner-slider">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div className="relative h-[70vh] md:h-[calc(100vh-64px)] w-full overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-linear-to-r from-zinc-950/90 via-zinc-900/60 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                    <motion.div
                      className="max-w-2xl space-y-6"
                      variants={containerVariants}
                      initial="hidden"
                      animate={isActive ? "visible" : "hidden"}
                    >

                      <motion.div variants={itemVariants}>
                        <span className="inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-sm font-semibold tracking-wider text-cyan-300 backdrop-blur-md">
                          #1 Tutor Booking Platform
                        </span>
                      </motion.div>

                      <motion.h1 variants={itemVariants} className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                        {slide.title}
                      </motion.h1>

                      <motion.p variants={itemVariants} className="max-w-xl text-lg text-zinc-300 sm:text-xl">
                        {slide.description}
                      </motion.p>

                      <motion.div variants={itemVariants} className="pt-4">
                        <Link href="/tutors">
                          <Button
                            size="lg"
                            className="group h-12 px-6 rounded-xl
                              bg-linear-to-r from-blue-600 to-white
                              text-black font-semibold
                              shadow-md
                              transition-all duration-300
                              hover:scale-105
                              hover:shadow-xl
                              hover:from-blue-500
                              hover:to-sky-100
                              hover:cursor-pointer"
                          >
                            Find Your Tutor
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </motion.div>

                    </motion.div>

                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
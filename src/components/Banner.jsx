'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Banner = () => {
  const slides = [
    {
      id: 1,
      title: 'Unlock Your True Potential',
      description: 'Connect with expert tutors across Bangladesh and master any subject with personalized learning sessions.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Seamless Booking Experience',
      description: 'Say goodbye to scheduling conflicts. Book your preferred time slots instantly with our smart token system.',
      image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Learn Anywhere, Anytime',
      description: 'Whether you prefer face-to-face sessions or online classes, find the perfect match for your learning style.',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  return (
    <div className="w-full relative hero-banner-slider">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect={'fade'}
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
                  <div className="max-w-2xl space-y-6">
                    <span className="inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-sm font-semibold tracking-wider text-cyan-300 backdrop-blur-md">
                      #1 Tutor Booking Platform
                    </span>
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                      {slide.title}
                    </h1>
                    <p className="max-w-xl text-lg text-zinc-300 sm:text-xl">
                      {slide.description}
                    </p>
                    <div className="pt-4">
                      <Link href="/tutors">
                        <Button size="lg" className="h-12 px-6 text-sm bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-50 dark:hover:bg-zinc-200 dark:text-zinc-900 font-medium transition-all hover:cursor-pointer shadow-md rounded-md">
                          Find Your Tutor
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
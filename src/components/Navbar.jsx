'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Home, Users, PlusCircle, BookOpen, Calendar, LogIn, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { ModeToggle } from '@/components/ModeToggle';

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Tutors', href: '/tutors', icon: Users },
    { name: 'Add Tutor', href: '/add-tutor', icon: PlusCircle },
    { name: 'My Tutors', href: '/my-tutors', icon: BookOpen },
    { name: 'My Booked Sessions', href: '/my-booked-sessions', icon: Calendar },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/30 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] dark:bg-black/40 dark:border-white/10 dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)] saturate-150">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">

        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/assets/mediqLogo.png"
            alt="MediQueue Logo"
            width={162}
            height={52}
            priority
          />
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-cyan-600 dark:text-cyan-400'
                    : 'text-zinc-700 hover:text-cyan-600 dark:text-zinc-300 dark:hover:text-cyan-400'
                }`}
              >
                <Icon className="h-4 w-4" />
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/login">
              <Button size="sm" className="bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-medium shadow-sm transition-all hover:cursor-pointer">
                <LogIn className="mr-2 h-4 w-4" />
                Login / Register
              </Button>
            </Link>

            <ModeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">

            <ModeToggle />

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 text-zinc-700 dark:text-zinc-300 cursor-pointer">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-75 border-l border-white/20 bg-white/40 backdrop-blur-2xl shadow-2xl dark:bg-black/50 dark:border-white/10 saturate-150">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                <div className="flex flex-col space-y-4 mt-6">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;

                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                          isActive
                            ? 'bg-cyan-50 text-cyan-700 dark:bg-cyan-950/50 dark:text-cyan-400'
                            : 'text-zinc-700 hover:bg-white/50 hover:text-cyan-700 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-cyan-400'
                        }`}
                      >
                        <Icon className={`h-5 w-5 ${isActive ? 'opacity-100' : 'opacity-70'}`} />
                        {link.name}
                      </Link>
                    );
                  })}

                  <hr className="border-zinc-300/50 dark:border-zinc-700/50 my-2" />

                  <Link href="/login" className="w-full pt-2">
                    <Button className="mx-4 w-11/12 justify-center bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-medium shadow-md hover:cursor-pointer">
                      <LogIn className="mr-2 h-4 w-4" />
                      Login / Register
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
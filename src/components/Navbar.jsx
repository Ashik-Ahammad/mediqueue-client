"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  PlusCircle,
  BookOpen,
  Calendar,
  LogIn,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/ModeToggle";
import { authClient } from "@/lib/auth-client";
import { NavbarProfile } from "./NavbarProfile";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user || null;

  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Tutors", href: "/tutors", icon: Users },
    { name: "Add Tutor", href: "/add-tutor", icon: PlusCircle },
    { name: "My Tutors", href: "/my-tutors", icon: BookOpen },
    { name: "My Booked Sessions", href: "/my-booked-sessions", icon: Calendar },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200/50 bg-white/70 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:border-zinc-800/50 dark:bg-zinc-950/70 transition-all duration-300">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105 active:scale-95">
          <Image
            src="/assets/mediqLogo.png"
            alt="MediQueue Logo"
            width={162}
            height={52}
            priority
            className="drop-shadow-sm"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-1.5 p-1 rounded-full bg-zinc-50/50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`group flex items-center gap-2 px-4 py-2 rounded-full uppercase text-xs tracking-wider font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-white text-cyan-700 shadow-xs dark:bg-zinc-800 dark:text-cyan-400"
                    : "text-zinc-500 hover:bg-zinc-200/50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-100"
                }`}
              >
                <Icon
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isActive ? "scale-110" : "group-hover:scale-110"
                  }`}
                />
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Right Actions */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          
          <div className="hidden lg:flex items-center space-x-3">
            {user ? (
              <NavbarProfile user={user} />
            ) : (
              <Link href="/login">
                <Button
                  size="sm"
                  className="h-9 px-5 rounded-full bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white uppercase text-xs tracking-wider font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 cursor-pointer border-0"
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Button>
              </Link>
            )}
            <div className="pl-2 border-l border-zinc-200 dark:border-zinc-800">
              <ModeToggle />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            {user && <NavbarProfile user={user} />}

            <ModeToggle />

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-75 border-l border-zinc-200/50 bg-white/80 backdrop-blur-3xl shadow-2xl dark:bg-zinc-950/80 dark:border-zinc-800/50 p-6 flex flex-col"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                <div className="flex flex-col space-y-2 mt-10">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;

                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={`group flex items-center gap-4 rounded-2xl px-5 py-3.5 uppercase text-xs tracking-wider font-bold transition-all duration-300 ${
                          isActive
                            ? "bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400"
                            : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900/50 dark:hover:text-zinc-100"
                        }`}
                      >
                        <div className={`p-2 rounded-xl transition-colors ${isActive ? "bg-cyan-100 dark:bg-cyan-900/50" : "bg-zinc-100 dark:bg-zinc-900 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-800"}`}>
                          <Icon
                            className={`h-4 w-4 transition-transform duration-300 group-hover:scale-110 ${
                              isActive
                                ? "text-cyan-600 dark:text-cyan-400"
                                : "text-zinc-500 dark:text-zinc-400"
                            }`}
                          />
                        </div>
                        {link.name}
                      </Link>
                    );
                  })}
                </div>

                {!user && (
                  <div className="mt-auto pb-6">
                    <hr className="border-zinc-200 dark:border-zinc-800 mb-6" />
                    <Link href="/login" className="w-full block">
                      <Button className="w-full h-12 rounded-2xl justify-center bg-linear-to-r from-cyan-600 to-blue-600 text-white uppercase tracking-wider text-xs font-bold hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer border-0">
                        <LogIn className="mr-2 h-4 w-4" />
                        Login / Register
                      </Button>
                    </Link>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Lock, User, Image as ImageIcon, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import registerAnimation from "../../../../public/assets/register.json";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
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

const RegisterForm = () => {
  const router = useRouter();
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setPasswordError("");

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const { password } = userData;

    // password validation
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      toast.error("Invalid password length!");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setPasswordError("Uppercase letter required.");
      toast.error("Missing uppercase letter!");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError("Lowercase letter required.");
      toast.error("Missing lowercase letter!");
      return;
    }

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: userData.photoUrl,
    });

    if (data) {
      toast.success("Account created successfully!");
      router.push("/");
    }
    if (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      toast.error(error.message || "Failed to connect with Google.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-zinc-50 dark:bg-zinc-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row-reverse w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-[2rem] shadow-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden"
      >
        <div className="hidden md:flex md:w-1/2 bg-zinc-50/50 dark:bg-zinc-950/50 p-12 items-center justify-center border-l border-zinc-100 dark:border-zinc-800">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Lottie animationData={registerAnimation} loop={true} className="w-full h-auto max-w-87.5" />
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center"
        >
          <motion.div variants={itemVariants} className="mb-8 text-center md:text-left">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">Create an Account</h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">Join us today! Please fill in your details.</p>
          </motion.div>

          <form onSubmit={handleRegister} className="space-y-4">
            <motion.div variants={itemVariants} className="space-y-1.5">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 z-10" />
                <Input id="name" name="name" required placeholder="Enter your name" className="pl-11 h-12 rounded-xl" />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-1.5">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 z-10" />
                <Input id="email" type="email" name="email" required placeholder="name@email.com" className="pl-11 h-12 rounded-xl" />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-1.5">
              <Label htmlFor="photoUrl">Photo URL</Label>
              <div className="relative">
                <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 z-10" />
                <Input id="photoUrl" type="url" name="photoUrl" required placeholder="https://example.com/photo.jpg" className="pl-11 h-12 rounded-xl" />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 z-10" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="••••••••"
                  className="pl-11 pr-11 h-12 rounded-xl"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {passwordError && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[11px] font-bold text-rose-500 mt-1 uppercase tracking-wider pl-1">
                  * {passwordError}
                </motion.p>
              )}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-2">
              <Button type="submit" className="w-full h-12 rounded-xl bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 font-bold hover:scale-[1.01] active:scale-95 transition-all">
                Sign Up
              </Button>
            </motion.div>
          </form>

          <motion.div variants={itemVariants} className="mt-6 flex items-center">
            <div className="flex-1 border-t border-zinc-200 dark:border-zinc-800" />
            <span className="px-4 text-xs uppercase font-bold text-zinc-400">Or</span>
            <div className="flex-1 border-t border-zinc-200 dark:border-zinc-800" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button onClick={handleGoogleRegister} type="button" variant="outline" className="mt-6 w-full h-12 gap-3 rounded-xl border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
              <FcGoogle className="h-5 w-5" /> Sign up with Google
            </Button>
          </motion.div>

          <motion.p variants={itemVariants} className="mt-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
            Already have an account?{" "}
            <Link href="/login" className="font-bold text-cyan-600 hover:text-cyan-700 transition-colors">Login Now</Link>
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RegisterForm;
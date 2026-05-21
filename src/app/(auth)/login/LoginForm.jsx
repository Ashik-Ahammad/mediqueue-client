"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import loginAnimation from "../../../../public/assets/login.json";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
    });

    if (data) {
      toast.success("Logged in successfully!");
      if (window.history.length > 2) {
        router.back();
      } else {
        router.push("/");
      }
    }
    if (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      toast.loading("Redirecting to Google...");
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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-[2rem] shadow-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden"
      >
        <div className="hidden md:flex md:w-1/2 bg-zinc-50/50 dark:bg-zinc-950/50 p-12 items-center justify-center border-r border-zinc-100 dark:border-zinc-800">
          <Lottie animationData={loginAnimation} loop={true} className="w-full max-w-87.5" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center"
        >
          <motion.div variants={itemVariants} className="mb-8 text-center md:text-left">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">Welcome Back</h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">Please sign in to your account to continue.</p>
          </motion.div>

          <form onSubmit={handleLogin} className="space-y-5">
            <motion.div variants={itemVariants} className="space-y-1.5">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <Input id="email" type="email" name="email" required placeholder="name@email.com" className="pl-11 h-12 rounded-xl" />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm font-medium text-cyan-600 hover:text-cyan-700">Forgot password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <Input id="password" type={showPassword ? "text" : "password"} name="password" required placeholder="••••••••" className="pl-11 pr-11 h-12 rounded-xl" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400">
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button type="submit" className="w-full h-12 rounded-xl bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 font-bold hover:scale-[1.01] transition-transform">
                Sign In
              </Button>
            </motion.div>
          </form>

          <motion.div variants={itemVariants} className="mt-6 flex items-center">
            <div className="flex-1 border-t border-zinc-200 dark:border-zinc-800" />
            <span className="px-4 text-sm text-zinc-500">Or continue with</span>
            <div className="flex-1 border-t border-zinc-200 dark:border-zinc-800" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button onClick={handleGoogleLogin} type="button" variant="outline" className="mt-6 w-full h-12 gap-3 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
              <FcGoogle className="h-5 w-5" /> Sign in with Google
            </Button>
          </motion.div>

          <motion.p variants={itemVariants} className="mt-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
            Do not have an account?{" "}
            <Link href="/register" className="font-semibold text-cyan-600 hover:text-cyan-700">Register Now</Link>
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginForm;
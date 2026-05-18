'use client';
import React from 'react';
import Link from 'next/link';
import { Mail, Lock } from 'lucide-react';
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import loginAnimation from "../../../../public/assets/login.json";

const LoginPage = () => {

  const handleLogin = async (e) => {

    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    console.log(userData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-zinc-50 dark:bg-zinc-950">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-[2rem] shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden">

        <div className="hidden md:flex md:w-1/2 bg-zinc-50/50 dark:bg-zinc-950/50 p-12 items-center justify-center border-r border-zinc-100 dark:border-zinc-800">
          <Lottie
            animationData={loginAnimation}
            loop={true}
            className="w-full h-auto max-w-87.5"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">Welcome Back</h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">Please sign in to your account to continue.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all text-zinc-900 dark:text-zinc-100"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Password</label>
                <Link href="/forgot-password" className="text-sm font-medium text-cyan-600 hover:text-cyan-700 dark:text-cyan-400">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all text-zinc-900 dark:text-zinc-100"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 font-bold text-sm shadow-md hover:-translate-y-0.5 transition-transform cursor-pointer"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 flex items-center">
            <div className="flex-1 border-t border-zinc-200 dark:border-zinc-800"></div>
            <span className="px-4 text-sm text-zinc-500">Or continue with</span>
            <div className="flex-1 border-t border-zinc-200 dark:border-zinc-800"></div>
          </div>

          <button
            type="button"
            className="mt-6 w-full flex items-center justify-center gap-3 py-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 font-semibold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <FcGoogle className="h-5 w-5" />
            Sign in with Google
          </button>

          <p className="mt-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
            Don't have an account?{' '}
            <Link href="/register" className="font-semibold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 transition-colors">
              Register here
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
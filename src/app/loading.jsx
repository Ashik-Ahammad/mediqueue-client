import { GraduationCap } from 'lucide-react';

const LoadingPage = () => {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center bg-[#fafafa] dark:bg-zinc-950 relative overflow-hidden">

      <div className="absolute top-1/3 left-1/3 w-75 h-75 bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none animate-pulse duration-1000" />
      <div className="absolute bottom-1/3 right-1/3 w-75 h-75 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none animate-pulse duration-1000 delay-500" />

      <div className="relative z-10 flex flex-col items-center gap-6">

        <div className="relative flex items-center justify-center w-20 h-20">

          <div className="absolute inset-0 rounded-full border-y-2 border-cyan-500 animate-spin" />

          <div className="absolute inset-2 rounded-full border-x-2 border-blue-500 animate-[spin_2s_linear_infinite_reverse]" />

          <div className="bg-white dark:bg-zinc-900 rounded-full p-2 shadow-lg shadow-cyan-500/20">
            <GraduationCap className="h-6 w-6 text-cyan-600 dark:text-cyan-400 animate-pulse" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-1.5 mt-2">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Gathering Tutors
          </h2>
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 tracking-widest uppercase">
              Please Wait
            </span>
            <span className="flex gap-0.5">
              <span className="w-1 h-1 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1 h-1 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1 h-1 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '300ms' }} />
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoadingPage;
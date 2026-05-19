import { CircleUserRound, LogOutIcon, Mail, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export function NavbarProfile({ user }) {

  const router = useRouter();

  const handleLogout = async () => {

    await authClient.signOut({

      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // redirect to login page
        },
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-9 w-9 rounded-full p-0 hover:cursor-pointer"
        >
          <div className="relative h-full w-full rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
            {user?.image ? (
              <Image
                src={user?.image}
                alt={user?.name || "User Avatar"}
                fill
                sizes="36px"
                className="object-cover"
              />
            ) : (
              <CircleUserRound className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            )}
          </div>

          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-zinc-950 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse z-10"></span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-70 p-5">
        <DropdownMenuGroup>
          <DropdownMenuItem title={user?.name}>
            <UserRound className="mr-2 h-4 w-4 text-cyan-600" />
            <span className="font-medium truncate">{user?.name}</span>
          </DropdownMenuItem>
          <DropdownMenuItem title={user?.email}>
            <Mail className="mr-2 h-4 w-4 text-zinc-500" />
            <span className="text-sm text-zinc-500 truncate">
              {user?.email}
            </span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="mt-1 cursor-pointer font-medium text-red-600 focus:bg-red-50 focus:text-red-700 dark:text-red-500 dark:focus:bg-red-950/40 transition-colors">
          <LogOutIcon className="mr-2 h-4 w-4" />
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

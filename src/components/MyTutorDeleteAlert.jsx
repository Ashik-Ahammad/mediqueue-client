"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export function MyTutorDeleteAlert({ tutor }) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const { data: tokenData } = await authClient.token();

      const jwtToken = tokenData?.token;

      if (!jwtToken) {
        toast.error("Authentication failed. Please login again.");
        return;
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${tutor._id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${jwtToken}`,
        },
      });

      if (res.ok) {
        toast.success(
          "Tutor deleted successfully & all booked slots cancelled!",
        );
        router.refresh();
      } else {
        throw new Error("Failed to delete tutor");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong!!");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            tutor from the database.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className="bg-red-500 text-white hover:bg-red-600"
          >
            Confirm Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

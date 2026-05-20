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
import { XCircle } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export function CancelBookingButton({ bookingId, isCancelled }) {
  const router = useRouter();

  const handleCancel = async () => {
    try {
      const { data: tokenData } = await authClient.token();

  const jwtToken = tokenData?.token;

  if (!jwtToken) {
    toast.error('Authentication failed. Please login again.');
    return;
  }

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${bookingId}`, {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${jwtToken}`,
        },
      });

      if (res.ok) {
        toast.success("Booking cancelled successfully!");
        router.refresh();
      } else {
        throw new Error("Failed to cancel booking");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          disabled={isCancelled}
          className={`transition-colors ${
            isCancelled
              ? "opacity-50 cursor-not-allowed"
              : "text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600 dark:border-red-900/50 dark:hover:bg-red-950/30 hover:cursor-pointer"
          }`}
        >
          <XCircle className="h-4 w-4 mr-1.5" />
          Cancel
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will cancel your session and free up the slot for others.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep Booking</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleCancel}
            className="bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600"
          >
            Confirm Cancel
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
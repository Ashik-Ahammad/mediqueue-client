"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import Lottie from "lottie-react";
import calendarAnimation from "../../public/assets/Calendar Animation.json";
import { toast } from "sonner";
import { Clipboard } from "lucide-react";

export function BookSessionModal({ tutor }) {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user || null;

  const totalSlot = parseInt(tutor?.totalSlot || "0");
  const isFull = isNaN(totalSlot) || totalSlot <= 0;

  const currentDate = new Date();
  const sessionDate = new Date(tutor?.startDate);
  currentDate.setHours(0, 0, 0, 0);
  sessionDate.setHours(0, 0, 0, 0);

  const isEarly = currentDate < sessionDate;

  let buttonText = "Book Tutors Session";
  if (isFull) buttonText = "No available slots left";
  else if (isEarly) buttonText = "Booking not available yet";

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login to book a session!");
      return;
    }
    if (isFull) {
      toast.error("This session is fully booked. You can not join at the moment.");
      return;
    }
    if (isEarly) {
      toast.error("Booking is not available yet for this tutor");
      return;
    }

    try {
      const formData = new FormData(e.currentTarget);
      const phoneValue = formData.get("phone");

      if (!phoneValue || phoneValue.length !== 11) {
        toast.error("Please enter a valid 11 digit phone number!");
        return;
      }

      const bookingData = {
        userId: user?.id,
        userEmail: user?.email,
        userImage: user?.image,
        userName: user?.name,

        tutorId: tutor?._id,
        tutorName: tutor?.tutorName,
        subject: tutor?.subject,
        hourlyFee: tutor?.hourlyFee,
        availableDays: tutor?.availableDays,
        timeSlot: tutor?.timeSlot,
        startDate: tutor?.startDate,
        totalSlot: tutor?.totalSlot,

        phone: phoneValue,
      };

      const res = await fetch("http://localhost:8000/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (res.ok) {
        toast.success("Booking Successfully Placed!");
        e.target.reset();
        router.refresh();
      } else {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to place booking!");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={isFull || isEarly}
          className={`w-full mt-8 py-4 text-white font-bold text-base rounded-2xl shadow-lg transition-all duration-300 transform
            ${
              isFull || isEarly
                ? "bg-zinc-400 dark:bg-zinc-800 cursor-not-allowed opacity-70"
                : "bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 hover:shadow-cyan-500/25 hover:-translate-y-1 cursor-pointer"
            }`}
        >
          {buttonText}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-125 overflow-hidden p-0 border border-zinc-200/60 dark:border-zinc-800/60 shadow-2xl rounded-3xl bg-white dark:bg-zinc-950">
        <div className="bg-zinc-50/80 dark:bg-zinc-900/40 pt-10 pb-6 px-8 flex flex-col items-center justify-center border-b border-zinc-100 dark:border-zinc-800/60">
          <div className="w-50 h-24">
            <Lottie animationData={calendarAnimation} loop={true} />
          </div>
          <DialogTitle className="text-center text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Book Session
          </DialogTitle>
          <DialogDescription className="text-center text-base text-zinc-500 dark:text-zinc-400">
            Confirm your details to book a session with{" "}
            {tutor?.tutorName || "this tutor"}.
          </DialogDescription>
        </div>

        <form onSubmit={onSubmit} className="space-y-6 px-8 py-8 bg-white dark:bg-zinc-950">
          <FieldGroup className="space-y-5">
            <Field className="mb-2 w-full">
              <Label
                htmlFor="tutor-id"
                className="text-sm font-bold text-zinc-700 dark:text-zinc-300"
              >
                Tutor ID
              </Label>
              <div className="relative flex items-center">
                <Input
                  id="tutor-id"
                  name="tutorId"
                  defaultValue={tutor?._id || ""}
                  readOnly
                  onClick={(e) => {
                    navigator.clipboard.writeText(e.target.value);
                    toast.success("Tutor ID copied to clipboard!");
                  }}
                  className="w-full h-12 pr-11 rounded-xl bg-zinc-50 dark:bg-zinc-900/30 border-zinc-200 dark:border-zinc-800 focus-visible:ring-0 select-all cursor-pointer hover:bg-zinc-100/70 dark:hover:bg-zinc-900 transition-colors text-zinc-900 dark:text-zinc-100 font-medium"
                />
                <Clipboard className="absolute right-4 h-4 w-4 text-zinc-400 pointer-events-none" />
              </div>
            </Field>

            <Field className="mb-2 w-full">
              <Label
                htmlFor="tutor-name"
                className="text-sm font-semibold text-zinc-700 dark:text-zinc-300"
              >
                Tutor Name
              </Label>
              <Input
                id="tutor-name"
                name="tutorName"
                defaultValue={tutor?.tutorName || ""}
                readOnly
                className="w-full h-11 bg-zinc-50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus-visible:ring-0"
              />
            </Field>

            <Field className="mb-2 w-full">
              <Label
                htmlFor="user-name"
                className="text-sm font-semibold text-zinc-700 dark:text-zinc-300"
              >
                Student Name
              </Label>
              <Input
                id="user-name"
                name="name"
                defaultValue={user?.name || ""}
                readOnly
                className="w-full h-11 bg-zinc-50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus-visible:ring-0"
              />
            </Field>

            <Field className="mb-2 w-full">
              <Label
                htmlFor="email"
                className="text-sm font-semibold text-zinc-700 dark:text-zinc-300"
              >
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                defaultValue={user?.email || ""}
                readOnly
                className="w-full h-11 bg-zinc-50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus-visible:ring-0"
              />
            </Field>

            <Field className="mb-2 w-full">
              <Label
                htmlFor="phone"
                className="text-sm font-semibold text-zinc-700 dark:text-zinc-300"
              >
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                placeholder="011XX-XXXXXX"
                required
                minLength={11}
                maxLength={11}
                className="w-full h-11 border-zinc-200 dark:border-zinc-800 focus-visible:ring-cyan-500/50"
              />
            </Field>
          </FieldGroup>

          <div className="mt-8 flex gap-3 sm:justify-end pb-4">
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                className="w-full sm:w-32 h-11 cursor-pointer"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={isFull || isEarly}
              className="w-full sm:w-auto h-11 px-6 bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 hover:bg-linear-to-r hover:from-cyan-600 hover:to-blue-600 hover:text-white dark:hover:text-white transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirm Booking
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
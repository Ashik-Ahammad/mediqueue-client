"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function MyTutorEditModal({ tutor }) {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const updatedData = Object.fromEntries(formData.entries());

      const res = await fetch(`http://localhost:8000/tutors/${tutor._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (res.ok) {
        toast.success("Tutor profile updated successfully!!");
        router.refresh();
      } else {
        throw new Error("Failed to update data");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors"
        >
          <Pencil className="h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Edit Tutor Profile</DialogTitle>
          <DialogDescription>
            Make changes to your tutor profile here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-6 py-4">
          <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field className="md:col-span-2">
              <Label htmlFor="tutorName" className="font-semibold text-zinc-700 dark:text-zinc-300">
                Tutor Name
              </Label>
              <Input
                id="tutorName"
                name="tutorName"
                defaultValue={tutor?.tutorName || ""}
                required
                className="mt-1"
              />
            </Field>

            <Field className="md:col-span-2">
              <Label htmlFor="imageUrl" className="font-semibold text-zinc-700 dark:text-zinc-300">
                Photo URL
              </Label>
              <Input
                id="imageUrl"
                name="imageUrl"
                type="url"
                defaultValue={tutor?.imageUrl || ""}
                required
                className="mt-1"
              />
            </Field>

            <Field>
              <Label htmlFor="subject" className="font-semibold text-zinc-700 dark:text-zinc-300">
                Subject
              </Label>
              <select
                id="subject"
                name="subject"
                defaultValue={tutor?.subject || ""}
                required
                className="mt-1 flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:focus-visible:ring-zinc-300"
              >
                <option value="" disabled hidden>Select subject</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
                <option value="English">English</option>
                <option value="ICT">ICT</option>
              </select>
            </Field>

            <Field>
              <Label htmlFor="availableDays" className="font-semibold text-zinc-700 dark:text-zinc-300">
                Available Days
              </Label>
              <Input
                id="availableDays"
                name="availableDays"
                defaultValue={tutor?.availableDays || ""}
                placeholder="e.g. Sun - Thu, Sat/Mon"
                required
                className="mt-1"
              />
            </Field>

            <Field>
              <Label htmlFor="timeSlot" className="font-semibold text-zinc-700 dark:text-zinc-300">
                Time Slot
              </Label>
              <Input
                id="timeSlot"
                name="timeSlot"
                defaultValue={tutor?.timeSlot || ""}
                placeholder="e.g. 5:00 PM - 8:00 PM"
                required
                className="mt-1"
              />
            </Field>

            <Field>
              <Label htmlFor="hourlyFee" className="font-semibold text-zinc-700 dark:text-zinc-300">
                Hourly Fee (BDT)
              </Label>
              <Input
                id="hourlyFee"
                name="hourlyFee"
                type="number"
                defaultValue={tutor?.hourlyFee || ""}
                required
                className="mt-1"
              />
            </Field>

            <Field>
              <Label htmlFor="totalSlot" className="font-semibold text-zinc-700 dark:text-zinc-300">
                Total Slots
              </Label>
              <Input
                id="totalSlot"
                name="totalSlot"
                type="number"
                defaultValue={tutor?.totalSlot || ""}
                required
                className="mt-1"
              />
            </Field>

            <Field>
              <Label htmlFor="startDate" className="font-semibold text-zinc-700 dark:text-zinc-300">
                Session Start Date
              </Label>
              <Input
                id="startDate"
                name="startDate"
                type="date"
                defaultValue={tutor?.startDate || ""}
                required
                className="mt-1"
              />
            </Field>

            <Field>
              <Label htmlFor="institution" className="font-semibold text-zinc-700 dark:text-zinc-300">
                Institution
              </Label>
              <Input
                id="institution"
                name="institution"
                defaultValue={tutor?.institution || ""}
                placeholder="e.g. Dhaka University"
                required
                className="mt-1"
              />
            </Field>

            <Field>
              <Label htmlFor="experience" className="font-semibold text-zinc-700 dark:text-zinc-300">
                Teaching Experience
              </Label>
              <Input
                id="experience"
                name="experience"
                defaultValue={tutor?.experience || ""}
                placeholder="e.g. 3 Years / Fresh Graduate"
                required
                className="mt-1"
              />
            </Field>

            <Field>
              <Label htmlFor="location" className="font-semibold text-zinc-700 dark:text-zinc-300">
                Location
              </Label>
              <Input
                id="location"
                name="location"
                defaultValue={tutor?.location || ""}
                placeholder="e.g. Savar, Dhaka"
                required
                className="mt-1"
              />
            </Field>

            <Field>
              <Label htmlFor="teachingMode" className="font-semibold text-zinc-700 dark:text-zinc-300">
                Teaching Mode
              </Label>
              <select
                id="teachingMode"
                name="teachingMode"
                defaultValue={tutor?.teachingMode || ""}
                required
                className="mt-1 flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:focus-visible:ring-zinc-300"
              >
                <option value="" disabled hidden>Select mode</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                <option value="Both">Both</option>
              </select>
            </Field>
          </FieldGroup>

          <div className="gap-2 sm:gap-0 pt-4 border-t">
            <DialogClose asChild>
              <Button type="button" variant="outline" className="w-full sm:w-auto hover:cursor-pointer">
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit" className="w-full sm:w-auto ml-2 hover:cursor-pointer">
                Save changes
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
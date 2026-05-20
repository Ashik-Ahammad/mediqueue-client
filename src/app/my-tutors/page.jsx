import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Inbox } from "lucide-react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { MyTutorDeleteAlert } from "@/components/MyTutorDeleteAlert";
import { MyTutorEditModal } from "@/components/MyTutorEditModal";
import Link from "next/link";

const MyTutorsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/my-tutors/${user?.id}`,
    {
      cache: "no-store",
      headers: {
        authorization: `Bearer ${token}`,
    },

    }
  );

  const tutors = await res.json();

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">
            My Tutors
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Manage and update the tutors you have created.
          </p>
        </div>

        {!tutors || tutors.length === 0 ? (
          <Card className="flex flex-col items-center justify-center py-24 text-center border-dashed border-2 border-border/60 bg-zinc-50/50 dark:bg-zinc-900/20 rounded-2xl shadow-sm">
            <div className="h-16 w-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-4">
              <Inbox className="h-8 w-8 text-zinc-400" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              No tutors found
            </h3>
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              You have not created any tutors yet. Add your first tutor to see
              them listed here.
            </p>
            <Link href="add-tutor">
              <Button className="bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 hover:opacity-90">
                Add New Tutor
              </Button>
            </Link>
          </Card>
        ) : (
          <Card className="border border-border/60 shadow-sm rounded-2xl overflow-hidden bg-white dark:bg-zinc-950">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-zinc-50/50 dark:bg-zinc-900/50">
                  <TableRow className="border-border/60 hover:bg-transparent">
                    <TableHead className="font-semibold text-zinc-600 dark:text-zinc-300 py-5">
                      Tutor Name
                    </TableHead>
                    <TableHead className="font-semibold text-zinc-600 dark:text-zinc-300">
                      Subject
                    </TableHead>
                    <TableHead className="font-semibold text-zinc-600 dark:text-zinc-300">
                      Available
                    </TableHead>
                    <TableHead className="font-semibold text-zinc-600 dark:text-zinc-300">
                      Hourly Fee
                    </TableHead>
                    <TableHead className="font-semibold text-zinc-600 dark:text-zinc-300">
                      Total Slot
                    </TableHead>
                    <TableHead className="font-semibold text-zinc-600 dark:text-zinc-300">
                      Registration Date
                    </TableHead>
                    <TableHead className="font-semibold text-zinc-600 dark:text-zinc-300 text-right pr-6">
                      Action
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tutors.map((tutor) => (
                    <TableRow
                      key={tutor._id}
                      className="border-border/50 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-colors"
                    >
                      <TableCell className="font-bold text-foreground py-4">
                        {tutor.tutorName}
                      </TableCell>
                      <TableCell className="font-medium text-muted-foreground">
                        {tutor.subject || "N/A"}
                      </TableCell>
                      <TableCell className="text-muted-foreground text-sm">
                        {tutor.availableDays || ""} {tutor.timeSlot || ""}
                      </TableCell>
                      <TableCell className="font-medium text-foreground text-sm">
                        ৳ {tutor.hourlyFee || "N/A"}
                      </TableCell>
                      <TableCell>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          {tutor.totalSlot || "0"}
                        </span>
                      </TableCell>
                      <TableCell className="text-muted-foreground text-sm">
                        {tutor.startDate || "N/A"}
                      </TableCell>
                      <TableCell className="text-right pr-6">
                        <div className="flex items-center justify-end gap-2">
                          <MyTutorDeleteAlert
                            tutor={tutor}
                          ></MyTutorDeleteAlert>

                          <MyTutorEditModal tutor={tutor}></MyTutorEditModal>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MyTutorsPage;

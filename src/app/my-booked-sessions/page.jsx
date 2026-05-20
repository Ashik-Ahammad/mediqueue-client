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
import { Inbox, X } from "lucide-react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { CancelBookingButton } from "@/components/CancelBookingButton";
import Link from "next/link";

const MyBookedSessionsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user?.id}`, {
    cache: "no-store",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const myBookings = await res.json();

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">
            My Booked Sessions
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Manage and view the sessions you have booked.
          </p>
        </div>

        {!myBookings || myBookings.length === 0 ? (
          <Card className="flex flex-col items-center justify-center py-24 text-center border-dashed border-2 border-border/60 bg-zinc-50/50 dark:bg-zinc-900/20 rounded-2xl shadow-sm">
            <div className="h-16 w-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-4">
              <Inbox className="h-8 w-8 text-zinc-400" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              No bookings found
            </h3>
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              You have not booked any sessions yet. Browse available tutors and
              book your first session.
            </p>
            <Link href="tutors">
              <Button className="bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 hover:opacity-90">
                Book a Session
              </Button>
            </Link>
          </Card>
        ) : (
          <Card className="border border-border/60 shadow-sm rounded-2xl overflow-hidden bg-white dark:bg-zinc-950">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-zinc-50/50 dark:bg-zinc-900/50">
                  <TableRow className="border-border/60 hover:bg-transparent">
                    <TableHead className="font-semibold text-zinc-600 dark:text-zinc-300 py-5 pl-6">
                      Booked By
                    </TableHead>
                    <TableHead className="font-semibold text-zinc-600 dark:text-zinc-300">
                      Phone
                    </TableHead>
                    <TableHead className="font-semibold text-zinc-600 dark:text-zinc-300">
                      Tutor Name
                    </TableHead>
                    <TableHead className="font-semibold text-zinc-600 dark:text-zinc-300">
                      Email
                    </TableHead>
                    <TableHead className="font-semibold text-zinc-600 dark:text-zinc-300">
                      Status
                    </TableHead>
                    <TableHead className="font-semibold text-zinc-600 dark:text-zinc-300 text-right pr-6">
                      Cancel
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {myBookings.map((booking) => {
                    const isCancelled = booking.status === "Cancelled";
                    return (
                      <TableRow
                        key={booking._id}
                        className="border-border/50 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-colors"
                      >
                        <TableCell className="font-medium text-foreground py-4 pl-6">
                          {booking.userName || "N/A"}
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          {booking.phone || "N/A"}
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          {booking.tutorName}
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          {booking.userEmail}
                        </TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold ${
                              isCancelled
                                ? "bg-red-100 text-red-500 dark:bg-red-900/30 dark:text-red-400"
                                : "bg-green-400 text-white dark:bg-green-900/30 dark:text-green-400"
                            }`}
                          >
                            {booking.status || "Confirmed"}
                          </span>
                        </TableCell>
                        <TableCell className="text-right pr-6">
                          <div className="flex items-center justify-end gap-2">
                            <CancelBookingButton
                              bookingId={booking._id}
                              isCancelled={isCancelled}
                            />
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MyBookedSessionsPage;

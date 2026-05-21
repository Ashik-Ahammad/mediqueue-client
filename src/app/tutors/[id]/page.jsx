import TutorDetailsClient from "./TutorDetailsClient";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function generateMetadata({ params }) {
  const { id } = await params;
  try {
    const { token } = await auth.api.getToken({ headers: await headers() });
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${id}`, {
      cache: "no-store",
      headers: { authorization: `Bearer ${token}` },
    });
    if (!res.ok) return { title: "Tutor Not Found | MediQueue" };
    const tutor = await res.json();
    return {
      title: `Tutor: ${tutor.tutorName} | MediQueue`,
      description: `Book a session with ${tutor.tutorName} for ${tutor.subject} in ${tutor.location}.`,
    };
  } catch {
    return { title: "Tutor Details | MediQueue" };
  }
}

const TutorDetailsPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({ headers: await headers() });

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${id}`, {
    cache: "no-store",
    headers: { authorization: `Bearer ${token}` },
  });
  const tutor = await res.json();

  if (!tutor) return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Tutor not found</div>;

  return <TutorDetailsClient tutor={tutor} />;
};

export default TutorDetailsPage;
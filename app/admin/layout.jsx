import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Header from "@/app/admin/_components/Layouts/Header";
import Sidebar from "@/app/admin/_components/Layouts/Sidebar";

export const metadata = {
  title: 'AceYourScore | admin',
}

export default function layout({ children }) {
  const { sessionClaims } = auth();

  // If the user does not have the admin role, redirect them to the home page
  if (sessionClaims?.metadata.role !== "admin") {
    redirect("/");
  }

  return (
    <>
      <div className="flex h-screen showScren">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <div className="contentOfdashboard">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

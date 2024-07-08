import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { EdgeStoreProvider } from "@/libs/edgestore";
import Header from "@/components/admin/Layouts/Header";
import Sidebar from "@/components/admin/Layouts/Sidebar";
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
            <EdgeStoreProvider>{children}</EdgeStoreProvider>
          </div>
        </div>
      </div>
    </>
  );
}

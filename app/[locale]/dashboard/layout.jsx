// import { auth } from "@clerk/nextjs/server";

import Header from "@/components/dashboard/Layouts/Header";
import Sidebar from "@/components/dashboard/Layouts/Sidebar";

export default function RootLayoutOfDashboard({ children }) {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 w-full">
        <Header />
        {/* contentOfdashboard */}
        <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {children}
        </div>
      </div>
    </div>
  );
}

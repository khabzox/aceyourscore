import { currentUser } from "@clerk/nextjs/server";

import Image from "next/image";

import UsersInfo from "@/components/dashboard/UsersInfo";

import { GetLessons } from "@/components/dashboard/getLessons";

export default async function Dashboard() {
  const user = await currentUser();
  // console.log(user?.id);

  return (
    <div className="w-full p-4 space-y-4">
      <div className="bg-secondary rounded-lg p-10 flex justify-center items-center text-2xl font-bold text-navy-900">
        Welcome, {user?.firstName}
      </div>
      <div className="flex flex-col-reverse md:grid md:grid-cols-3 gap-4">
        <div className="col-span-1 bg-secondary rounded-lg p-10 flex flex-col items-center justify-center">
          <h2 className="text-navy-900 font-bold mb-4 text-xl ">
            Get Your Lessons
          </h2>
          <GetLessons params={{ id: user?.id }} >Get</GetLessons>
        </div>
        <div className="col-span-2 bg-secondary rounded-lg p-10 flex max-sm:flex-col justify-start gap-3 items-center overflow-hidden">
          <Image src="/logo.svg" alt="Logo" width={200} height={100} />
          <UsersInfo params={{ id: user?.id }} />
        </div>
      </div>
    </div>
  );
}

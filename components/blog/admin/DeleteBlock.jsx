"use client";
import { CircleX } from "lucide-react";
import { useRouter } from "next/navigation";
import config from "@/config";
export default function DeleteBlog({ id }) {
  const router = useRouter();
  async function deleteTicket() {
    const res = await fetch(`${config.domainNameProduction}/en/api/Articles/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh()
    }
  };
  return (
    <>
      <div>
        <CircleX
          className="text-red-400 hover:cursor-pointer hover:text-red-200"
          onClick={deleteTicket}
        />
      </div>
    </>
  );
}

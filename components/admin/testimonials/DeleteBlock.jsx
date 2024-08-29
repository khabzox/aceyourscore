"use client";

import { CircleX } from "lucide-react";
import { useRouter } from "next/navigation";
import config from "@/config";

export default function DeleteTestimonialBlock({ id }) {
  const router = useRouter();

  async function deleteTestimonial() {
    const res = await fetch(`${config.domainName}/api/our-testimonials/${id}`, {
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
          onClick={deleteTestimonial}
        />
      </div>
    </>
  );
}

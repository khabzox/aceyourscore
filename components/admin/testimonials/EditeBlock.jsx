"use client";

import { FilePenLine } from "lucide-react";
import Link from "next/link";

export default function EditBlock({ id }) {

  return (
    <>
      <Link href={`/admin/our-testimonials/${id}`}>
        <FilePenLine
          className="text-green-500 hover:cursor-pointer hover:text-green-200"
        />
      </Link>
    </>
  );
}

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";

import { auth } from "@clerk/nextjs/server";

import DeleteBlock from "@/components/admin/teachers/DeleteBlock";
import EditBlock from "@/components/admin/teachers/EditeBlock";

import { ubuntu } from "@/libs/font";

import { BtnOfBlog } from "@/components/shared/CustmsBtns";

import CardTeachers from "./CardTeachers";
import { cn } from "@/libs/utils";

export default async function TeachersCardInfo({ teacher }) {
  const { sessionClaims } = auth();
  // // If the user does not have the admin role, redirect them to the home page
  const admin = sessionClaims?.metadata.role == "admin";

  // Function to check if current route is /admin/articles
  // Costim Time to looks better
  function formatTimestamp(timestamp) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  }

  const createdDateTime = formatTimestamp(teacher.createdAt);

  return (
    <CardTeachers admin={admin} teacher={teacher} />
  );
}

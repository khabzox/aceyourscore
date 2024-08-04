import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import DeleteBlock from "@/components/admin/DeleteBlock";
import EditBlock from "@/components/admin/EditeBlock";

import { ubuntu } from "@/libs/font";

import { BtnOfBlog } from "@/components/shared/CustmsBtns";

export default async function ArticleCardInfo({ article }) {
  const { sessionClaims } = auth();
  // If the user does not have the admin role, redirect them to the home page
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

  const createdDateTime = formatTimestamp(article.createdAt);

  return (
    <div className="border-2 border-accent rounded-2xl max-w-sm relative">
      <div className="relative h-56 rounded-2xl overflow-hidden bg-accent">
        <Image
          src={article.postImg}
          layout="fill"
          objectFit="cover"
          alt="Post Image"
          className="rounded-t-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <div className=" rounded-full mb-1 flex items-center justify-center">
            <Image
              src={article.avatarImg}
              alt="Avatar Img"
              width={48}
              height={48}
              className="rounded-full aspect-square"
            />
          </div>
          <div className="text-white">
            <p className="font-bold text-lg">{article.avatarName}</p>
            <p className="text-sm">{createdDateTime}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between min-h-[192px] bg-cream text-dark-blue p-4 mb-3 rounded-b-lg">
        <h2 className={`${ubuntu.className} font-bold text-xl`}>
          {article.title}
        </h2>
        <p className="mt-2 mb-6">{article.description}</p>

        <div className="flex items-end justify-between">
          <div>
            <BtnOfBlog
              text={"Learn More"}
              linkto={`/blog/articles/${article._id}`}
            />
          </div>
          <div className="flex justify-end">
            {admin ? (
              <div className="flex justify-end m-2">
                <EditBlock id={article._id} />
              </div>
            ) : (
              <div className="pb-6"></div>
            )}
            {admin ? (
              <div className="flex justify-end m-2">
                <DeleteBlock id={article._id} />
              </div>
            ) : (
              <div className="pb-6"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

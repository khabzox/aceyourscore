import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import DeleteBlock from "@/components/admin/DeleteBlock";
import EditBlock from "@/components/admin/EditeBlock";
// import DeleteBlock from "./DeleteBlock";

export default async function ArticleCard({ article }) {
  const { sessionClaims } = auth();
  // {admin ? "Upfate your Ticket" : "Creat Your Ticket"}
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
    <>
      <Card className="w-full">
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
        <Link href={`/blog/articles/${article._id}`} prefetch={false}>
          <CardContent className="space-y-5">
            <Image
              src={article.postImg}
              width={400}
              height={225}
              alt="Post Image"
              className="rounded-lg object-cover aspect-video w-full"
            />
            <div className="space-y-1">
              <h3 className="text-xl font-bold">{article.title}</h3>
              <p className="text-muted-foreground line-clamp-2 max-w-80">
                {article.description}
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Avatar className="w-6 h-6 border">
                    <AvatarImage src={article.avatarImg} />
                    {/* <AvatarFallback>User</AvatarFallback> */}
                  </Avatar>
                  <span>{article.avatarName}</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <span>{createdDateTime}</span>
              </div>
            </div>
          </CardContent>
        </Link>
      </Card>
    </>
  );
}

import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import styles from "./style.module.css";
import config from "@/config";

const getArticlesById = async (id) => {
  try {
    const res = await fetch(
      `${config.domainNameProduction}/api/Articles/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function articlePage({ params }) {
  const { id } = params;
  const article = await getArticlesById(id);
  if(!article){
    return "No article" 
  }
  const post = article.foundArticle;
  console.log(article);

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

  const createdDateTime = formatTimestamp(post.createdAt);
  return (
    <>
      <div className="max-w-6xl w-full mx-auto justify-center">
        <div className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  {post.title}
                </h1>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={post.avatarImg} />
                    {/* <AvatarFallback>CN</AvatarFallback> */}
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{post.avatarName}</p>
                    <p className="text-sm text-muted-foreground">
                      Published on {createdDateTime}
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src={post.postImg}
                width={1200}
                height={600}
                alt="Cover image"
                className="mx-auto aspect-video overflow-hidden rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
        <div className="container px-4 md:px-6 py-2 mb-4">
          <div className="mx-auto max-w-5xl prose prose-gray dark:prose-invert">
            <pre
              className={` ${styles.preResponsive} text-lg font-bold `}
              style={{ fontFamily: "sans-serif" }}
            >
              {post.postBody}
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}

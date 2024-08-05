import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import styles from "./style.module.css";
import { getArticlesById } from "./getArticlesById";
import { MetadataArticles } from "@/libs/metadata";

export async function Metadata({ params }) {
  return MetadataArticles({ params });
}

export default async function ArticlePage({ params }) {
  const { id } = params;
  const articleData = await getArticlesById(id);

  if (!articleData || !articleData.foundArticle) {
    return <div className="text-center font-bold py-4">Article not found.</div>;
  }

  const post = articleData.foundArticle;

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
    return date.toLocaleString("en-US", options);
  }

  const createdDateTime = formatTimestamp(post.createdAt);

  return (
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
                  <AvatarImage src={post.authorProfileImg} alt="Author avatar" />
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{post.authorFullName}</p>
                  <p className="text-sm text-muted-foreground">
                    Published on {createdDateTime}
                  </p>
                </div>
              </div>
            </div>
            <Image
              src={post.articleImg}
              width={1200}
              height={600}
              alt="Cover image"
              className="mx-auto aspect-video overflow-hidden rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
      <div className="container px-4 md:px-6 py-2 mb-4">
        <div
          className={`mx-auto max-w-5xl prose prose-gray dark:prose-invert ${styles.preResponsive}`}
        >
          <div dangerouslySetInnerHTML={{ __html: post.articleContent }} />
        </div>
      </div>
    </div>
  );
}

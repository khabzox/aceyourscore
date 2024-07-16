"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useEdgeStore } from "@/libs/edgestore";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import RichTextEditor from "./RichTextEditor";

export default function ArticleForm({ article }) {
  const EDITMODE = article._id === "new" ? false : true;
  const { user } = useUser();
  const router = useRouter();
  const { edgestore } = useEdgeStore();

  const [progressViwerDisplyoFIMG, setProgressViwerDisplyoFIMG] = useState(0);
  const [alrtFileUploadIMG, setAlrtFileUploadIMG] = useState();
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(!EDITMODE);
  const [formData, setFormData] = useState({
    title: "",
    postImg: "",
    avatarImg: "",
    avatarName: "",
    description: "",
    postBody: "",
    ...(EDITMODE && {
      title: article.title,
      postImg: article.postImg,
      avatarImg: article.avatarImg,
      avatarName: article.avatarName,
      description: article.description,
      postBody: article.postBody,
    }),
  });

  const FileUploadPostImg = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const res = await edgestore.publicFiles.upload({
          file,
          onProgressChange: (progress) => {
            setProgressViwerDisplyoFIMG(progress);
            if (progress === 100) {
              setAlrtFileUploadIMG(
                <h1 className="text-green-800">Upload Img Success</h1>
              );
            }
          },
        });

        const FileUrlPostImg = res.url;
        setFormData((prev) => ({
          ...prev,
          postImg: FileUrlPostImg,
        }));
        setIsSubmitDisabled(false);
      } catch (error) {
        console.error("Failed to upload file:", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      avatarImg: user ? user.imageUrl : null,
      avatarName: user ? user.fullName : null,
      [name]: value,
    }));
  };

  const handleBodyChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      postBody: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = EDITMODE ? "PUT" : "POST";
    const url = EDITMODE ? `/api/Articles/${article._id}` : "/api/Articles";

    const res = await fetch(url, {
      method,
      body: JSON.stringify({ formData }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to save article.");
    }

    router.refresh();
    router.push("/admin/articles");
  };

  return (
    <section>
      <div className="flex justify-center min-h-screen">
        <form
          className="flex flex-col gap-3 w-full max-w-7xl px-4 py-4"
          method="post"
          onSubmit={handleSubmit}
        >
          <label>Title: </label>
          <Input
            id="title"
            name="title"
            type="text"
            onChange={handleChange}
            required={true}
            value={formData.title}
            className="text-slate-900 bg-slate-500"
          />
          <label>Post Image: </label>
          <Input
            id="postImg"
            name="postImg"
            type="file"
            required={!EDITMODE}
            className="text-slate-900 pb-4 bg-slate-500"
            onChange={FileUploadPostImg}
            accept="image/*"
          />
          {progressViwerDisplyoFIMG > 0 && (
            <Progress value={progressViwerDisplyoFIMG} />
          )}
          {alrtFileUploadIMG}
          <label>Description: </label>
          <Textarea
            id="description"
            name="description"
            onChange={handleChange}
            required={true}
            value={formData.description}
            className="text-slate-900 bg-slate-500"
            rows="5"
          />
          <label>Article: </label>
          <RichTextEditor
            value={formData.postBody}
            onChange={handleBodyChange}
          />
          <Button
            type="submit"
            className="text-white bg-accent"
            disabled={EDITMODE ? false : isSubmitDisabled}
          >
            {EDITMODE ? "Update your Article" : "Create Your Article"}
          </Button>
        </form>
      </div>
    </section>
  );
}

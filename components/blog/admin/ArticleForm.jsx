"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

import { useEdgeStore } from "@/libs/edgestore";

import RichTextEditor from "./RichTextEditor";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

import { Loader } from "lucide-react";

export default function ArticleForm({ article }) {
  const EDITMODE = article._id === "new" ? false : true;
  const { user } = useUser();
  const router = useRouter();
  const { edgestore } = useEdgeStore();

  const [loading, setLoading] = useState(false); // costum loading btn
  const [progressViwerDisplyoFIMG, setProgressViwerDisplyoFIMG] = useState(0); // follow upload img
  const [alrtFileUploadIMG, setAlrtFileUploadIMG] = useState(); // set alrt when img is uploaded
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(!EDITMODE); // make btn disable after click on it to send data
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
  }); // data structure of all inputs

  // upload img to edgestore
  const FileUploadPostImg = async (e) => {
    const file = e.target.files?.[0];
    // check if file is here to send it
    if (file) {
      try {
        const res = await edgestore.publicFiles.upload({
          file,
          onProgressChange: (progress) => {
            // that for Follow progress of uploading img and post it on frontend
            setProgressViwerDisplyoFIMG(progress);
            if (progress === 100) {
              // after img uploaded show message of success
              setAlrtFileUploadIMG(
                <h1 className="text-green-800">Upload Img Success</h1>
              );
            }
          },
        });

        // set img on his input
        const FileUrlPostImg = res.url;
        setFormData((prev) => ({
          ...prev,
          postImg: FileUrlPostImg,
        }));
        // check if img is uploaded to enable btn of send data
        setIsSubmitDisabled(false);
      } catch (error) {
        console.error("Failed to upload file:", error);
      }
    }
  };

  // get and set all data for every input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      avatarImg: user ? user.imageUrl : null,
      avatarName: user ? user.fullName : null,
      [name]: value,
    }));
  };

  // save changes of text editor
  const handleBodyChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      postBody: value,
    }));
  };

  // submit data: if EDITMODE => PUT && if new one => POST
  const handleSubmit = async (e) => {
    e.preventDefault();

    // disable btn && set loading btn
    setLoading(true);
    setIsSubmitDisabled(true);

    const method = EDITMODE ? "PUT" : "POST";
    const url = EDITMODE ? `/api/Articles/${article._id}` : "/api/Articles";

    // send data
    const res = await fetch(url, {
      method,
      body: JSON.stringify({ formData }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // after send data, the btn will be enable (to send data agin)
    setLoading(false);

    if (!res.ok) {
      setIsSubmitDisabled(false);
      throw new Error("Failed to save article.");
    }

    // redirect user
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
            disabled={loading || isSubmitDisabled}
          >
            {loading ? <Loader className="animate-spin" /> : EDITMODE ? "Update your Article" : "Create Your Article"}
          </Button>
        </form>
      </div>
    </section>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useUser } from "@clerk/nextjs";

import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/config/firebase";

import { Loader } from "lucide-react";

import RichTextEditor from "./RichTextEditor";

export default function ArticleForm({ article, articleId }) {
  const EDITMODE = article.id === "new" ? false : true;
  const { user } = useUser();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [alertImgIsUploaded, setAlertImgIsUploaded] = useState("");
  const [progressViewerOfImg, setProgressViewerOfImg] = useState(0);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(EDITMODE);
  const [formData, setFormData] = useState({
    title: "",
    articleImg: "",
    authorProfileImg: "",
    authorFullName: "",
    articleDescription: "",
    articleContent: "",
    ...(EDITMODE && {
      title: article.title,
      articleImg: article.articleImg,
      articleDescription: article.articleDescription,
      articleContent: article.articleContent,
    }),
  });

  useEffect(() => {
    setIsSubmitDisabled(
      EDITMODE &&
        !(
          formData.title &&
          formData.articleDescription &&
          formData.articleContent
        )
    );
  }, [formData, EDITMODE]);

  async function uploadPostImg(file) {
    const storageRef = ref(storage, `blog/${file.name}`);
    try {
      const uploadTask = uploadBytesResumable(storageRef, file);

      setLoading(true);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgressViewerOfImg(progress);
        },
        (error) => {
          console.error(error);
          setAlertImgIsUploaded("Error uploading file!");
        },
        () => {
          setAlertImgIsUploaded("File uploaded successfully!");
          setProgressViewerOfImg(100);

          const uploadedPostImg = `https://firebasestorage.googleapis.com/v0/b/aceyourscore-819b2.appspot.com/o/blog%2F${encodeURIComponent(
            file.name
          )}?alt=media`;

          setFormData((prev) => ({
            ...prev,
            articleImg: uploadedPostImg,
          }));

          setLoading(false);
        }
      );
    } catch (err) {
      console.error(err);
    }
  }

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      uploadPostImg(files[0]);
    }
    setFormData((prev) => ({
      ...prev,
      authorProfileImg: user ? user.imageUrl : null,
      authorFullName: user ? user.fullName : null,
      [name]: value,
    }));
  }

  // save changes of text editor
  const handleBodyChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      articleContent: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitDisabled(true);

    const method = EDITMODE ? "PUT" : "POST";
    const url = EDITMODE ? `/api/articles/${articleId}` : "/api/articles";

    try {
      const res = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status`);
      }

      // Handle response as needed
      router.push("/admin/articles");
      router.refresh();
    } catch (error) {
      console.error("Fetch error:", error);
      // Handle error state or retry logic
    }
  }

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
            className="text-slate-900 bg-slate-500"
            onChange={handleChange}
            value={formData.title}
            required
          />
          <label>Post Image: </label>
          <Input
            id="postImg"
            name="postImg"
            type="file"
            accept="image/*"
            className="text-slate-900 pb-4 bg-slate-500"
            onChange={handleChange}
            required={!EDITMODE}
          />
          {progressViewerOfImg > 0 && <Progress value={progressViewerOfImg} />}
          {alertImgIsUploaded && (
            <p className="text-green-700">{alertImgIsUploaded}</p>
          )}
          <label>Description: </label>
          <Textarea
            id="articleDescription"
            name="articleDescription"
            required
            className="text-slate-900 bg-slate-500"
            onChange={handleChange}
            value={formData.articleDescription}
            rows="2"
          />
          <label>Article: </label>
          {/* <Tiptap /> */}
          <div className=" relative z-10">

          <RichTextEditor
            value={formData.articleContent}
            onChange={handleBodyChange}
            />
            </div>
          <Button
            type="submit"
            className="text-white bg-accent"
            disabled={loading || isSubmitDisabled}
          >
            {loading ? (
              <Loader className="animate-spin" />
            ) : EDITMODE ? (
              "Update your Article"
            ) : (
              "Create Your Article"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useEdgeStore } from "@/libs/edgestore";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function AricleForm({ article }) {
  const EDITMODE = article._id === "new" ? false : true;
  // console.log(EDITMODE);

  // useState for show full Name and profile img of user
  const { user } = useUser();

  // useState for controle user navigation after create or update article
  const router = useRouter();

  // useState for display progress of img uploading
  const [progressViwerDisplyoFIMG, setprogressViwerDisplyoFIMG] = useState(0);
  // useState for display progress of pdf uploading
  // const [progressViwerDisplyOfPDF, setprogressViwerDisplyOfPDF] = useState(0);

  // alrt show after get res of upload img and puted at postImg: ""
  const [alrtFileUploadIMG, setAlrtFileUploadIMG] = useState();
  // alrt show after get res of upload pdf and puted at postPdf: ""
  // const [alrtFileUploadPDF, setAlrtFileUploadPDF] = useState();

  // this lib for uploading files
  const { edgestore } = useEdgeStore();

  // useState check if all properties at startingArticleData is full and submited to database
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(!EDITMODE);

  // starcture of data sending to database
  const startingArticleData = {
    title: "",
    postImg: "",
    avatarImg: "",
    avatarName: "",
    description: "",
    postBody: "",
    // postPdf: "",
  };

  if (EDITMODE) {
    startingArticleData["title"] = article.title;
    startingArticleData["postImg"] = article.postImg;
    startingArticleData["avatarImg"] = article.avatarImg;
    startingArticleData["avatarName"] = article.avatarName;
    startingArticleData["description"] = article.description;
    startingArticleData["postBody"] = article.postBody;
    // startingArticleData["postPdf"] = article.postPdf;
  }

  const [formData, setFormData] = useState(startingArticleData);

  // function for uploading post img
  const FileUploadPostImg = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const res = await edgestore.publicFiles.upload({
          file,
          onProgressChange: (progress) => {
            setprogressViwerDisplyoFIMG(progress);
            if (progress === 100) {
              setAlrtFileUploadIMG(
                <>
                  <h1 className="text-green-800">Upload Img Succes</h1>
                </>
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

  // const FileUploadPostPdf = async (e) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     try {
  //       const res = await edgestore.publicFiles.upload({
  //         file,
  //         onProgressChange: (progress) => {
  //           setprogressViwerDisplyOfPDF(progress);
  //           if (progress === 100) {
  //             setAlrtFileUploadPDF(
  //               <>
  //                 <h1 className="text-green-800">Upload PDF Succes</h1>
  //               </>
  //             );
  //           }
  //         },
  //       });

  //       const FileUrlPostPDF = res.url;
  //       setFormData((prev) => ({
  //         ...prev,
  //         postPdf: FileUrlPostPDF,
  //       }));
  //       setIsSubmitDisabled(false);
  //     } catch (error) {
  //       console.error("Failed to upload file:", error);
  //     }
  //   }
  // };

  const handChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      avatarImg: user ? user.imageUrl : null,
      avatarName: user ? user.fullName : null,
      [name]: value,
    }));
  };
  // function for submite data to database after user cliked on submite button
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDITMODE) {
      const res = await fetch(`/api/Articles/${article._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Failed to create Article.");
      }
    } else {
      const res = await fetch("/api/Articles", {
        method: "POST",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Failed to create Article.");
      }
      // router.refresh();
    }
    router.refresh();
    router.push("/admin/articles");
  };

  console.log(formData);
  return (
    <>
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
              onChange={handChange}
              required={true}
              value={formData.title}
              className="text-slate-900 bg-slate-500"
            />
            <label>Post of Img: </label>
            <Input
              id="postImg"
              name="postImg"
              type="file"
              required={!EDITMODE}
              // value={formData.postImg}
              className="text-slate-900 pb-4 bg-slate-500"
              onChange={FileUploadPostImg}
              accept="image/*"
            />
            {progressViwerDisplyoFIMG > 0 && (
              <Progress value={progressViwerDisplyoFIMG} />
            )}
            {/* {progressViwerDisply > 0 && (
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-500">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${progressViwerDisply}%` }}
                ></div>
              </div>
            )} */}

            {alrtFileUploadIMG}
            <label>Description: </label>
            <Textarea
              id="description"
              name="description"
              type="text"
              onChange={handChange}
              required={true}
              value={formData.description}
              className="text-slate-900 bg-slate-500"
              rows="10"
            />
            <label>Article: </label>
            <Textarea
              id="postBody"
              name="postBody"
              type="text"
              onChange={handChange}
              required={true}
              value={formData.postBody}
              className="text-slate-900 bg-slate-500"
              rows="35"
            />
            {/* <label>A diagram explaining all of the above: </label>
            <Input
              id="postPdf"
              name="postPdf"
              type="file"
              required={!EDITMODE}
              // value={formData.postImg}
              className="text-slate-900 pb-4 bg-slate-500"
              onChange={FileUploadPostPdf}
              accept="application/pdf"
            />
            {progressViwerDisplyOfPDF > 0 && (
              <Progress value={progressViwerDisplyOfPDF} />
            )}
            {alrtFileUploadPDF} */}
            <Button
              type="submit"
              // variant="outline"
              className="text-white"
              value="creat Article"
              // onClick={UploadPostImg}
              disabled={EDITMODE ? false : isSubmitDisabled}
            >
              {EDITMODE ? "Update your Article" : "Creat Your Article"}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}

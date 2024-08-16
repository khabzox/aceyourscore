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

export default function TeacherForm({ teacher, teacherId }) {
  const EDITMODE = teacher.id === "new" ? false : true;
  const { user } = useUser();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [alertImgIsUploaded, setAlertImgIsUploaded] = useState("");
  const [progressViewerOfImg, setProgressViewerOfImg] = useState(0);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(EDITMODE);
  const [formData, setFormData] = useState({
    fullName: "",
    subTitle: "",
    image: "",
    description: "",
    ...(EDITMODE && {
      fullName: teacher.fullName,
      subTitle: teacher.subTitle,
      image: teacher.image,
      description: teacher.description,
    }),
  });

  useEffect(() => {
    setIsSubmitDisabled(
      EDITMODE &&
      !(
        formData.fullName &&
        formData.subTitle &&
        formData.image &&
        formData.description
      )
    );
  }, [formData, EDITMODE]);  

  async function uploadPostImg(file) {
    const storageRef = ref(storage, `teachers/${file.name}`);
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

          const uploadedTeacherImg = `https://firebasestorage.googleapis.com/v0/b/aceyourscore-819b2.appspot.com/o/teachers%2F${encodeURIComponent(
            file.name
          )}?alt=media`;

          setFormData((prev) => ({
            ...prev,
            image: uploadedTeacherImg,
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
      [name]: value,
    }));
  }
  console.log(formData)
  console.log(teacherId)

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitDisabled(true);

    const method = EDITMODE ? "PUT" : "POST";
    const url = EDITMODE ? `/api/our-teachers/${teacherId}` : "/api/our-teachers";

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
      router.push("/admin/our-teachers");
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
          <label>Teacher Full Name: </label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            className="text-slate-900 bg-slate-500"
            onChange={handleChange}
            value={formData.fullName}
            required
          />
          <label>Sub Title: </label>
          <Input
            id="subTitle"
            name="subTitle"
            type="text"
            className="text-slate-900 bg-slate-500"
            onChange={handleChange}
            value={formData.subTitle}
            required
          />
          <label>Teacher Image: </label>
          <Input
            id="image"
            name="image"
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
            id="description"
            name="description"
            required
            className="text-slate-900 bg-slate-500"
            onChange={handleChange}
            value={formData.description}
            rows="2"
          />
          <Button
            type="submit"
            className="text-white bg-accent"
            disabled={loading || isSubmitDisabled}
          >
            {loading ? (
              <Loader className="animate-spin" />
            ) : EDITMODE ? (
              "Update Teacher"
            ) : (
              "Create Teacher"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}

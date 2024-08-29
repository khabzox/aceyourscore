"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TestimonialForm({ testimonial, testimonialId }) {
  const EDITMODE = testimonial.id === "new" ? false : true;
  const router = useRouter();

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(EDITMODE);
  const [formData, setFormData] = useState({
    fullName: "",
    description: "",
    ...(EDITMODE && {
      fullName: testimonial.fullName,
      description: testimonial.description,
    }),
  });

  useEffect(() => {
    setIsSubmitDisabled(
      EDITMODE &&
      !(
        formData.fullName &&
        formData.description
      )
    );
  }, [formData, EDITMODE]);  

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitDisabled(true);

    const method = EDITMODE ? "PUT" : "POST";
    const url = EDITMODE ? `/api/our-testimonials/${testimonialId}` : "/api/our-testimonials";

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
      router.push("/admin/our-testimonials");
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
            disabled={isSubmitDisabled}
          >
            {EDITMODE ? (
              "Update Testimonial"
            ) : (
              "Create Testimonial"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}

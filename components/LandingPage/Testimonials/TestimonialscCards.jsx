"use client";

import { useState, useEffect } from "react";

import { getTestimonials } from "./getTestimonials";

export default function TestimonialsCards() {
  const [testimonials, setTestimonials] = useState([]);

  const fetchTestimonialsData = async () => {
    try {
      const data = await getTestimonials();
      if (data?.testimonials) {
        // Sort teachers by their order before setting the state
        const sortedTestimonials = data.testimonials.sort((a, b) => a.order - b.order);
        setTestimonials(sortedTestimonials);
      }
    } catch (error) {
      console.error("Failed to fetch Testimonials:", error);
    }
  };

  useEffect(() => {
    fetchTestimonialsData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-2 sm:px-10 3xl:px-0">
        {testimonials.map(({ fullName, description, id }) => (
          <TestimonialCard
            key={id}
            title={fullName}
            desc={description}
          />
        ))}
      </div>
    </>
  );
}

export function TestimonialCard({ title, desc }) {
  return (
    <div className="w-full p-6 rounded-3xl bg-accent">
      <h3 className="text-primary text-xl font-semibold uppercase">{title}</h3>
      <p className="text-accent-TextHoverDark pt-2">{desc}</p>
    </div>
  );
}

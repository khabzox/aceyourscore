import { Sparkles, Play, ArrowUpRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import TestimonialsCards from "./TestimonialscCards";

import { ubuntu } from "@/libs/font";

export default function Testimonials() {
  return (
    <div className="bg-destructive w-full">
      <div className="max-w-[95rem] mx-auto py-32">
        <div className="px-10 3xl:px-0">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-center text-primary py-9`}>
          Hear From Our Successful Students
          </h1>
        </div>
        <TestimonialsCards />
      </div>
    </div>
  );
}

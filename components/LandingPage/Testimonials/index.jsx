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
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold`}>
            Hear From Our Success Stories
          </h1>
          <div className="flex">
            <p className="text-sm sm:text-base md:text-2xl text-accent-TextHover font-semibold py-9">
              Discover How Our Students Achieved Their Goals with AceYourScore
            </p>
          </div>
        </div>
        <TestimonialsCards />
      </div>
    </div>
  );
}

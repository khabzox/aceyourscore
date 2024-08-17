"use client";

import { useTranslations } from "next-intl";

import { ubuntu } from "@/libs/font";

export default function ContactUS() {
  const t = useTranslations("About");
  return (
    <section className="bg-accent">
      <div className="flex items-center justify-center text-center py-20 px-0 w-full max-w-[95rem] mx-auto text-primary">
        <div className="md:w-1/2">
          <h1
            className={`${ubuntu.className} text-4xl sm:text-5xl md:text-7xl font-bold mb-6`}
          >
            {"We’re Here to"} <br /> {"Help You"}
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-semibold mb-8 text-accent-TextHoverDark">
            {"Reach Out with Your Questions or Feedback,"} <br />
            {"And We’ll Get Back to You ASAP"}
          </p>
        </div>
      </div>
    </section>
  );
}

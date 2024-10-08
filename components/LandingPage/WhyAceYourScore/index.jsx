import { GridCards } from "./GridCards";

import { ubuntu } from "@/libs/font";

export default function WhyAceYourScore() {
  return (
    <div className="my-48">
      <div className="flex flex-col">
        <div className="px-10 3xl:px-0">
          <h1
            className={`text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold`}
          >
            Why AceYourScore?
          </h1>

          <p className="text-sm sm:text-base md:text-xl text-accent-TextHover font-semibold py-10">
            Achieve Your Best with Our Expert Support and Personalized
            Preparation Strategies <br /> Designed to Maximize Your Exam Success
          </p>
        </div>
        <GridCards />
      </div>
    </div>
  );
}

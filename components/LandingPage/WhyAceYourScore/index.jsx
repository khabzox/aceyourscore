import { Ubuntu } from "next/font/google";
import { GridCards } from "./GridCards";

const ubuntu = Ubuntu({
  subsets: [
    "latin",
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "latin-ext",
  ],
  weight: ["300", "400", "500", "700"],
});

export default function WhyAceYourScore() {
  return (
    <div className="my-48">
      <div className="flex flex-col">
        <div>
          <h1
            className={`text-4xl sm:text-5xl md:text-7xl font-bold`}
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

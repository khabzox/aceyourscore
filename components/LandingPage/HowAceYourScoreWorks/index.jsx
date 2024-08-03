import { Ubuntu } from "next/font/google";
import { CardsProcess } from "./CardsProcess";

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

export default function HowAceYourScoreWorks() {
  return (
    <div className="my-48">
      <div className="flex flex-col">
        <div className="px-10">
          <h1
            className={`text-4xl sm:text-5xl md:text-7xl font-bold`}
          >
            Master Your Exams:<br />Our Proven Success Formula
          </h1>

          <p className="text-sm sm:text-base md:text-2xl text-accent-TextHover font-semibold py-10">
            Explore Our Seamless Process: Tailored Guidance, Interactive
            Classes, and Unmatched Support
          </p>
        </div>
        <CardsProcess/>
      </div>
    </div>
  );
}
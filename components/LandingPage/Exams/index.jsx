import { useTranslations } from "next-intl";

import { Sparkles } from "lucide-react";

import { Ubuntu } from "next/font/google";
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

import SlideShowExamsCards from "./SlideShowExamsCards";

export default function Exams() {
  const t = useTranslations("Exams");
  return (
    <div className="mt-56 mb-28">
      <div className="flex flex-col items-center">
        <div>
          <h1
            className={`text-4xl sm:text-5xl md:text-7xl font-bold`}
          >
            Ace Your Exams with <br />
            Precision and Confidence
          </h1>
          <div className="flex">
            <p className="text-sm sm:text-base md:text-xl text-accent-TextHover font-semibold py-10">
              Boost your TOEFL, TOEIC, IELTS, and SAT scores with our expert
              prep courses. Get tailored instruction, interactive practice, and
              support to achieve your best results. Start your journey to
              excellence today!
            </p>
            <Sparkles size={70} className="text-accent w-1/2" />
          </div>
        </div>
        <div className="max-w-8xl w-full mx-auto">
          <SlideShowExamsCards />
        </div>
      </div>
    </div>
  );
}

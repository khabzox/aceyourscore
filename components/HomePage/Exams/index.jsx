import { useTranslations } from "next-intl";

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

import { CircleCheckBig } from "lucide-react";
export default function Exams() {
  const t = useTranslations("Exams");
  return (
    <section className={`${ubuntu.className} py-20 uppercase`}>
      <div className="container mx-auto flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl mb-8">
          <div className="bg-accent text-primary flex items-center justify-center py-6 px-4 rounded-lg">
            <CircleCheckBig className="mr-2" />
            <span className="text-xl font-bold">TOEFL</span>
          </div>
          <div className="bg-accent text-primary flex items-center justify-center py-6 px-4 rounded-lg">
            <CircleCheckBig className="mr-2" />
            <span className="text-xl font-bold">TOEIC</span>
          </div>
          <div className="bg-accent text-primary flex items-center justify-center py-6 px-4 rounded-lg">
            <CircleCheckBig className="mr-2" />
            <span className="text-xl font-bold">IELTS</span>
          </div>
          <div className="bg-accent text-primary flex items-center justify-center py-6 px-4 rounded-lg">
            <CircleCheckBig className="mr-2" />
            <span className="text-xl font-bold">SAT</span>
          </div>
        </div>
        <div className="bg-accent text-primary flex items-center justify-center py-6 px-4 rounded-lg w-full max-w-7xl">
          <span className="text-xl font-bold">{t("notification")}</span>
        </div>
      </div>
    </section>
  );
}

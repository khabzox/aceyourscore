import { useTranslations } from "next-intl";

import Link from "next/link";

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
          <Link href="/Toefl">
            <div className="bg-accent text-primary flex items-center justify-center py-6 px-4 rounded-lg">
              <CircleCheckBig className="mr-2" />
              <span className="text-xl font-bold">TOEFL</span>
            </div>
          </Link>
          <Link href="/Toeic">
            <div className="bg-accent text-primary flex items-center justify-center py-6 px-4 rounded-lg">
              <CircleCheckBig className="mr-2" />
              <span className="text-xl font-bold">TOEIC</span>
            </div>
          </Link>
          <Link href="/Ielts">
            <div className="bg-accent text-primary flex items-center justify-center py-6 px-4 rounded-lg">
              <CircleCheckBig className="mr-2" />
              <span className="text-xl font-bold">IELTS</span>
            </div>
          </Link>
          <Link href="/Sat">
            <div className="bg-accent text-primary flex items-center justify-center py-6 px-4 rounded-lg">
              <CircleCheckBig className="mr-2" />
              <span className="text-xl font-bold">SAT</span>
            </div>
          </Link>
        </div>
        {/* <div className="bg-accent text-primary flex items-center justify-center py-6 px-4 rounded-lg w-full max-w-7xl">
          <span className="text-xl font-bold">{t("notification")}</span>
        </div> */}
      </div>
    </section>
  );
}

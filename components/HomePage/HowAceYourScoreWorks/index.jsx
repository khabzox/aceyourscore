"use client";

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

export default function HowAceYourScoreWorks() {
  const t = useTranslations("HowAceYourScoreWorks");

  return (
    <>
      <section className="max-w-7xl mx-auto mt-32 px-4 md:px-16">
        <div className="flex flex-col justify-center gap-4">
          <h2
            className={`${ubuntu.className} text-2xl sm:text-4xl md:text-6xl font-bold text-start`}
          >
            {t("title")}
          </h2>
          <p className="font-semibold max-w-xl text-lg ">{t("desc")}</p>
        </div>

        <div className="py-9">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
            <div className="bg-accent text-primary rounded-lg p-6 max-w-full md:max-w-sm">
              <div className="inline-flex items-center justify-center bg-primary     rounded-full h-12 w-12 mx-auto mb-4">
                <span className="text-destructive text-2xl font-bold">1</span>
              </div>
              <p className="font-bold text-lg">{t("card1")}</p>
            </div>

            <div className="bg-accent text-primary rounded-lg p-6 max-w-full md:max-w-sm">
              <div className="inline-flex items-center justify-center bg-primary rounded-full h-12 w-12 mx-auto mb-4">
                <span className="text-destructive text-2xl font-bold">2</span>
              </div>
              <p className="font-bold text-lg">{t("card2")}</p>
            </div>

            <div className="bg-accent text-primary rounded-lg p-6 max-w-full md:max-w-sm">
              <div className="inline-flex items-center justify-center bg-primary rounded-full h-12 w-12 mx-auto mb-4">
                <span className="text-destructive text-2xl font-bold">3</span>
              </div>
              <p className="font-bold text-lg">{t("card3")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

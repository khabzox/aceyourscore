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

import Image from "next/image";

import { BtnOfHero } from "@/components/shared/CustmsBtns";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <>
      <section className="py-20">
        <div className="flex flex-col xl:flex-row items-center justify-between relative px-10 3xl:px-0">
          <div className="xl:relative z-10">
            <h1
              className={`${ubuntu.className} text-4xl sm:text-5xl md:text-8xl font-bold mb-6 md:mb-8`}
            >
              {t("titleP1")}
              <br />
              {t("titleP2")}
              <br />
              {t("titleP3")}
            </h1>
            <p className="md:w-1/2 py-5 text-sm sm:text-base md:text-xl text-accent-TextHover font-semibold mb-8">
              {t("description")}
            </p>
            <BtnOfHero text={t("GetStartedBtn")} linkto={"/dashboard"} />
          </div>
          <div className="mt-10 flex justify-center xl:absolute right-0">
            <Image
              src="/images/home/hero/hero-img.svg"
              alt="Students"
              width={500}
              height={300}
              className="w-full"
            />
            <div className="absolute inset-0 z-0 bg-transparent"></div>
          </div>
        </div>
      </section>
    </>
  );
}

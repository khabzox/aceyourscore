import { useTranslations } from "next-intl";

import { ubuntu } from "@/libs/font";

import Image from "next/image";

import { BtnOfHero } from "@/components/shared/CustmsBtns";
export default function Hero() {
  const t = useTranslations("Blog");
  return (
    <>
      <section className="flex flex-col items-center justify-center py-20 px-0 md:px-10 max-w-7xl mx-auto">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-0">
          <div className="md:w-1/2">
            <h1
              className={`${ubuntu.className} text-4xl sm:text-5xl md:text-6xl font-bold mb-6`}
            >
              {t("title")}
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-semibold mb-8">
              {t("description")}
            </p>
            <BtnOfHero text={t("GetStartedBtn")} linkto={"/blog/articles"} />
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
            <Image
              src="/images/blog/hero/hero.svg"
              alt="Students"
              width={500}
              height={300}
              //   className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}

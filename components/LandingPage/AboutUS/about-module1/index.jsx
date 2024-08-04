import { useTranslations } from "next-intl";
import SlideShowFeatures from "../SlideShowFeatures";

import { BtnOfAbout } from "@/components/shared/CustmsBtns";

import { ubuntu } from "@/libs/font";

export default function About() {
  const t = useTranslations("About");
  return (
    <section>
      <h1
        className={`${ubuntu.className} text-2xl sm:text-4xl md:text-6xl font-bold text-center`}
      >
        {t("q")}
      </h1>
      <div className="flex items-center justify-center py-20 px-0 md:px-10 max-w-7xl mx-auto">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="md:w-1/2">
            <h1
              className={`${ubuntu.className} text-4xl sm:text-5xl md:text-6xl font-bold text-[#002E58] mb-6`}
            >
              {t("title")}
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-semibold mb-8">
              {t("description")}
            </p>
            <BtnOfAbout linkto={"/#our-teachers"}>Our Teachers</BtnOfAbout>
          </div>
          <div className="px-32 md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end bg-accent h-40 md:h-96 rounded-lg">
            {/* <Image
            src="/images/Home/Hero/Students-Study-Online.jpg"
            alt="Students"
            width={500}
            height={300}
            //   className="w-full"
          /> */}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <SlideShowFeatures />
      </div>
    </section>
  );
}

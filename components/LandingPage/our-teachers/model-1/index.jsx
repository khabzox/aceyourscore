import { useTranslations } from "next-intl";
import SlideShowOurTeachers from "./SlideShowOurTeachers";

import { BtnOfAbout } from "@/components/shared/CustmsBtns";

export default function OurTeachers() {
  const t = useTranslations("About");
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32" id="our-teachers">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Teachers
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Meet the talented and dedicated educators who inspire our students
              every day.
            </p>
          </div>
        </div>
        <div className="pt-4 md:pt-16 px-0 md:px-20">
          <SlideShowOurTeachers />
        </div>
      </div>
    </section>
  );
}
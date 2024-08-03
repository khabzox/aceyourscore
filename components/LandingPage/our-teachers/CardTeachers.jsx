import Image from "next/image";

import { Ubuntu } from "next/font/google";
import { CardBtnOurTeachers } from "@/components/shared/CustmsBtns";
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

export default function CardTeachers() {
  return (
    <div className="py-28 flex flex-col 2xl:flex-row justify-center items-center 2xl:justify-between w-full space-y-20 2xl:space-y-0">
      <div className="max-w-[438px]">
        <Image
          src={"/images/home/our-teachers/sabik.png"}
          width={438}
          height={501}
          alt="Our Teacher Sabik ( Profile Image)"
        />
        <div className="flex flex-col justify-center items-center pt-10">
          <h3
            className={`${ubuntu.className} text-3xl font-semibold uppercase`}
          >
            Sabik Youness
          </h3>
          <p className="text-accent-TextHoverDark text-2xl py-4 pb-8">
            +20 years of experience
          </p>
          <CardBtnOurTeachers linkTo={"#"}>See More</CardBtnOurTeachers>
        </div>
      </div>
      <div className="max-w-[438px]">
        <Image
          src={"/images/home/our-teachers/rahim.png"}
          width={438}
          height={501}
          alt="Our Teacher Sabik ( Profile Image)"
        />
        <div className="flex flex-col justify-center items-center pt-10">
          <h3
            className={`${ubuntu.className} text-3xl font-semibold uppercase`}
          >
            Rahim Abdelkabir
          </h3>
          <p className="text-accent-TextHoverDark text-2xl py-4 pb-8">
            +20 years of experience
          </p>
          <CardBtnOurTeachers linkTo={"#"}>See More</CardBtnOurTeachers>
        </div>
      </div>
      <div className="max-w-[438px]">
        <Image
          src={"/images/home/our-teachers/siham.png"}
          width={438}
          height={501}
          alt="Our Teacher Sabik ( Profile Image )"
        />
        <div className="flex flex-col justify-center items-center pt-10">
          <h3
            className={`${ubuntu.className} text-3xl font-semibold uppercase`}
          >
            Assemmar Sihame
          </h3>
          <p className="text-accent-TextHoverDark text-2xl py-4 pb-8">
            +11 years of experience
          </p>
          <CardBtnOurTeachers linkTo={"#"}>See More</CardBtnOurTeachers>
        </div>
      </div>
    </div>
  );
}

import { CardBtnOurTeachers } from "@/components/shared/CustmsBtns";
import CardTeachers from "./CardTeachers";

export default function OurTeachers() {
  return (
    <div className="bg-accent text-primary w-full">
      <div className="max-w-[95rem] mx-auto py-32 px-10 3xl:px-0">
        <div>
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-bold`}
          >
            Meet the Masters Behind Your Success
          </h1>
          <div className="flex">
            <p className="text-sm sm:text-base md:text-2xl text-accent-TextHoverDark font-semibold py-9">
              Discover Our Team of Expert Educators Dedicated to Your Academic
              Excellence
            </p>
          </div>
        </div>
        <CardTeachers />
        <div className="mx-auto max-w-80 mt-10">
          <CardBtnOurTeachers linkTo={"/our-teachers"} className={"w-full"}>See More Teachers</CardBtnOurTeachers>
        </div>
      </div>
    </div>
  );
}

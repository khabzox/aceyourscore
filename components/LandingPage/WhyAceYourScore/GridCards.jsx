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

export function GridCards() {
  return (
    <div>
      <div>
        <div className="grid grid-cols-6 grid-rows-4 lg:grid-rows-2 gap-5 2xl:gap-x-20 px-2 sm:px-10 3xl:px-0">
          <div className="col-start-1 col-end-7 row-start-1 lg:col-start-1 lg:col-end-4 2xl:col-start-1 lg:row-start-1 rounded-3xl p-5 w-full 2xl:w-[488px] min-h-[220px] 2xl:h-full bg-accent-CardHover">
            <h3 className={`${ubuntu.className} text-2xl sm:text-3xl font-semibold pt-2`}>
              Tailored Preparation
            </h3>
            <p className="pt-5 text-xl text-accent-TextHover font-medium">
              Our courses are customized to meet your specific needs, ensuring
              you get the most relevant practice and guidance.
            </p>
          </div>
          <div className="col-start-1 col-end-7 row-start-2 lg:col-start-4 lg:col-end-7 2xl:col-start-3 2xl:col-end-5 lg:row-start-1 rounded-3xl p-5 w-full 2xl:w-[488px] min-h-[220px] 2xl:h-full bg-yellow">
            <h3 className={`${ubuntu.className} text-2xl sm:text-3xl font-semibold pt-2`}>
              Proven Success
            </h3>
            <p className="pt-5 text-xl text-accent-TextHover font-medium">
              Join thousands of successful students who have achieved their
              goals with our proven methods and expert instruction.
            </p>
          </div>
          <div className="col-start-1 col-end-7 row-start-3 lg:col-start-1 lg:col-end-4 2xl:col-start-1 2xl:col-end-3 lg:row-start-2 rounded-3xl p-5 w-full 2xl:w-[488px] min-h-[220px] 2xl:h-full bg-accent">
            <h3
              className={`${ubuntu.className} text-primary text-2xl sm:text-3xl font-semibold pt-2`}
            >
              Interactive Learning
            </h3>
            <p className="pt-5 text-xl text-accent-TextHoverDark font-medium">
              Experience engaging and interactive lessons designed to make
              learning enjoyable and effective.
            </p>
          </div>
          <div className="col-start-1 col-end-7 row-start-4 lg:col-start-4 lg:col-end-7 2xl:col-start-3 2xl:col-end-7 lg:row-start-2 rounded-3xl p-5 w-full 2xl:w-[488px] min-h-[220px] 2xl:h-full bg-muted-Hover">
            <h3 className={`${ubuntu.className} text-2xl sm:text-3xl font-semibold pt-2`}>
              Comprehensive Resources
            </h3>
            <p className="pt-5 text-xl text-accent-TextHover font-medium">
              Access a wide range of study materials, practice tests, and expert
              tips to help you excel in your exams.
            </p>
          </div>
          <div className="col-start-5 col-end-7 row-start-1 row-end-3">
            <Image
              src={"/images/home/WhyAceYourScore/group-call.png"}
              width={474}
              height={84}
              alt="group call"
              className="h-full hidden 2xl:block"
            />
          </div>
        </div>
      </div>  
      <div className="grid grid-cols-6 grid-rows-1 mt-5 lg:space-x-5 px-2 sm:px-10 3xl:px-0">
        <div className="col-start-1 hidden lg:block">
          <Image
            src={"/images/home/WhyAceYourScore/star.png"}
            width={290}
            height={264}
            alt="group call"
            className="h-[220px] 2xl:h-full"
          />
        </div>
        <div className="col-start-1 col-end-7 lg:col-start-2 lg:col-end-7 2xl:col-end-4 rounded-3xl p-5 min-h-[220px] 2xl:h-full bg-destructive">
          <h3 className={`${ubuntu.className} text-2xl sm:text-3xl font-semibold pt-2`}>
            Comprehensive Resources
          </h3>
          <p className="pt-5 text-xl text-accent-TextHover font-medium">
            Access a wide range of study materials, practice tests, and expert
            tips to help you excel in your exams.
          </p>
        </div>
        <div className="col-start-4 col-end-7 hidden 2xl:block">
          <Image
            src={"/images/home/WhyAceYourScore/students-group.png"}
            width={779}
            height={264}
            alt="students"
            className="h-56"
          />
        </div>
      </div>
    </div>
  );
}

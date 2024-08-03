import { Ubuntu } from "next/font/google";
import CardTeachers from "./CardTeachers";
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

export default function OurTeachers() {
  return (
    <div className="bg-accent text-primary w-full">
      <div className="max-w-[95rem] mx-auto py-32">
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
      </div>
    </div>
  );
}

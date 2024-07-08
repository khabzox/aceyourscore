import { PayButton } from "./PayButton";

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

export default function Pricing() {
  return (
    <section>
      <div className="flex flex-col justify-center max-w-6xl mx-auto mt-16">
        <h1
          className={`${ubuntu.className} text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-accent mb-6 `}
        >
          Pricing
        </h1>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

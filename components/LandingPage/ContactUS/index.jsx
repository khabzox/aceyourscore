import { Ubuntu } from "next/font/google";
import ContactForm from "./ContactForm";

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

export default function ContactUs() {
  return (
    <div className="my-48">
      <div className="flex flex-col">
        <div>
          <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold`}>
            {"We’re Here to Help You"}
          </h1>

          <p className="text-sm sm:text-base md:text-2xl text-accent-TextHover font-semibold py-10">
            {
              "Reach Out with Your Questions or Feedback, and We’ll Get Back to You ASAP"
            }
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

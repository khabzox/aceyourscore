import ContactForm from "./ContactForm";

import { ubuntu } from "@/libs/font";

export default function ContactUs() {
  return (
    <div className="mt-48 mb-28 px-10 3xl:px-0">
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

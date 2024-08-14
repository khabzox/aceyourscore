import React from "react";

export default function TestimonialsCards() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-2 sm:px-10 3xl:px-0">
        <TestimonialCard
          title={"Amin"}
          desc={
            "Mr. Sabik's efficient teaching methods and personalized coaching made a huge difference in my IELTS preparation, helping me score 6.5. His engaging sessions and valuable feedback were truly inspiring."
          }
        />
        <TestimonialCard
          title={"Mohamed Ali"}
          desc={
            "With Mr. Sabik's guidance, I scored 110/120 on the TOEFL. His engaging teaching style and personalized advice, even when I was sick, were incredibly helpful. Highly recommend his classes!"
          }
        />
        <TestimonialCard
          title={"Yacout"}
          desc={
            "Mr. Sabik's tailored approach to TOEFL preparation helped me achieve a score of 113. His dedication to improving every student's skills is unmatched. Highly recommend!"
          }
        />
        <TestimonialCard
          title={"Asma"}
          desc={
            "Thanks to Mr. Sabik's exceptional guidance, I scored over 100 on both TOEFL attempts. His clear explanations and encouragement were key to my success. Highly recommended!"
          }
        />
      </div>
    </>
  );
}

export function TestimonialCard({ title, desc }) {
  return (
    <div className="w-full p-6 rounded-3xl bg-accent">
      <h3 className="text-primary text-xl font-semibold uppercase">{title}</h3>
      <p className="text-accent-TextHoverDark pt-2">{desc}</p>
    </div>
  );
}

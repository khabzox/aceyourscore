import React from "react";

export default function TestimonialsCards() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-2 sm:px-10 3xl:px-0">
        <TestimonialCard
          title={"Unknown"}
          desc={
            "Mr. Sabik, or as I call him, Uncle Sabik, helped me prepare for the IELTS exam in an impressively short period. His teaching methods were highly efficient, introducing me to various techniques for effectively tackling the reading, writing, and listening sections. His methodical approach and personalized coaching made a substantial difference in my preparation. We also dedicated time to practicing speaking, during which he meticulously monitored my progress and provided invaluable constructive feedback. Working with Mr. Sabik was never a dull experience. Each session was filled with laughter and learning, creating an engaging and enjoyable atmosphere. He has a remarkable ability to foster a perfect environment for learning, making the entire process both productive and enjoyable. Thanks to his guidance and support, I scored 6.5 on my IELTS exam. I will never forget his encouragement and unwavering belief in my abilities during moments when I felt disheartened and worried. He truly embodies the qualities of a mentor. Furthermore, when I was preparing for my  Postgraduate Certificate in Education (PGCE) interview, Mr. Sabik's assistance was invaluable. We conducted numerous mock interviews, discussing a wide array of potential questions. His insightful advice and the realistic practice sessions greatly enhanced my confidence and preparedness. Mr. Sabik's mentorship and support have been indispensable, and I am profoundly grateful for his contributions to my academic and professional growth. I do not doubt that Mr. Sabik will continue to leave a positive touch on everyone's life and career, just as he has done for me."
          }
        />
        <TestimonialCard
          title={"Mohamed Ali"}
          desc={
            "As a former student of Mr. Sabik, I am glad to share my experience and recommend his online classes for TOEFL and IELTS preparation. My name is Mohamed Ali, and earlier this year, I got a score of 110/120 on the TOEFL, thanks in large part to Mr. Sabik's excellent teaching. The TOEFL is a famous exam, meaning there is a tremendous amount of content to practice online. However, you can easily get flooded with all the information available if you don’t have a guide to properly go through this journey. Mr. Sabik's approach to teaching is both engaging and effective.He has a great sense of humor that often gives you a  break from the stress and seriousness of the test while still giving you every resource you need to ace your test. Moreover, he will read and listen to everything you do and give you proper and personal advice, making him a real mentor. Even when I was sick, he personally sent me the resources and materials he was using with the others, ensuring I didn't fall behind. Al hamdulilah I am very grateful to have met Mr Sabik and I am sure you will enjoy studying with him as much as I did."
          }
        />
        <TestimonialCard
          title={"Yacout"}
          desc={
            "My name is Yacout and I have been Mr. Sabik's student during the fall 2023 TOEFL preparation session. I'd say that my experience with Mr. Sabik as a teacher was perfect, and here's why. Unlike many others, this teacher acknowledged that our priority was to hone our skills in a way that would enable us to get the highest score possible, and that is precisely the goal towards which he worked from day one. Whether we were already fluent or struggling on the fundamentals, he put just as much effort into his teachings, and I can proudly say that it was thanks to him that I could score 113 on this test.  I'd highly recommend that you'd put your faith in Mr. Sabik, and I can assure you that you won't regret such a decision."
          }
        />
        <TestimonialCard
          title={"Unknown"}
          desc={
            "I am immensely grateful to for your exceptional guidance and support throughout my TOEFL preparation. Your teaching methods and dedication enabled me to achieve scores of over 100 on both attempts, a feat I couldn’t have accomplished without your help. With clear explanations, personalized feedback, and encouragement made all the difference. I highly recommend to anyone looking to excel in their TOEFL exam. Thank you, for helping me reach my goals!"
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

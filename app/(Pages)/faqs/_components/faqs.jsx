import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is AceYourScore?",
    answer:
      "AceYourScore is a platform that provides expert preparation for exams like TOEFL, TOEIC, IELTS, and SAT. We offer tailored courses, interactive practice, and comprehensive resources to help you achieve your best scores.",
  },
  {
    question: "How can I start preparing for an exam?",
    answer:
      "You can start preparing for an exam by selecting your desired test from our platform, signing up for a course, and following the tailored study plan provided by our expert instructors.",
  },
  {
    question: "What is included in the preparation courses?",
    answer:
      "Our preparation courses include interactive practice tests, personalized instruction, expert feedback, and a wide range of study materials to cover all aspects of the exam.",
  },
  {
    question: "Can I track my progress?",
    answer:
      "Yes, our platform allows you to track your progress through regular assessments and feedback. You can monitor your improvements and adjust your study plan as needed.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach out to our support team via email at info@aceyourscore.com or by phone at +212 616 139962. We're here to help you with any questions or issues you may have.",
  },
  {
    question: "What is the cost of the preparation courses?",
    answer:
      "The cost of our preparation courses varies depending on the exam and the level of customization required. You can find detailed pricing information on our pricing page or contact our support team for a personalized quote.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes, we offer a free trial for new users to explore our platform and see how our courses can benefit them. You can sign up for a free trial on our website.",
  },
  {
    question: "Can I access the courses on mobile devices?",
    answer:
      "Absolutely! Our platform is fully responsive and can be accessed on mobile devices, tablets, and desktops, allowing you to study anytime, anywhere.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a refund policy if you are not satisfied with our courses within the first 30 days of purchase. Please refer to our refund policy page or contact our support team for more details.",
  },
  {
    question: "Are the courses accredited?",
    answer:
      "Our courses are designed by experts in exam preparation and are highly regarded in the industry, but they are not formally accredited. They are created to provide you with the skills and knowledge needed to succeed in your exams.",
  },
  {
    question: "How often is the content updated?",
    answer:
      "We regularly update our content to reflect the latest changes in exam patterns and ensure that our materials are current and relevant. This includes updates to practice tests, study guides, and instructional materials.",
  },
  {
    question: "Can I get personalized tutoring?",
    answer:
      "Yes, we offer personalized tutoring sessions as part of our premium packages. You can choose from one-on-one sessions with our expert instructors to receive customized guidance and support.",
  },
  {
    question: "Is there a community or forum for students?",
    answer:
      "Yes, we have an online community and forum where students can interact, share study tips, and support each other. Joining the community is a great way to stay motivated and connected with fellow learners.",
  },
  {
    question: "How do I update my account information?",
    answer:
      "You can update your account information by logging into your account and navigating to the account settings page. Here, you can change your personal details, contact information, and password.",
  },
];

const FAQS = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h1>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-200"
            >
              <AccordionTrigger className="text-lg font-semibold text-gray-800 bg-gray-50 rounded-md p-4 hover:bg-gray-200 transition-all duration-300">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600 p-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQS;

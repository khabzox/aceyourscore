import { Goal, LaptopMinimal, MessagesSquare } from "lucide-react";

export function CardsProcess() {
  return (
    <div className="pt-20 px-2 sm:px-10 3xl:px-0 flex flex-col 2xl:flex-row justify-start 2xl:justify-between items-center">
      <div className="w-full 2xl:w-[476px] h-full 2xl:h-[500px] bg-yellow rounded-3xl p-8">
        <Goal size={75} />
        <div className="">
          <h3 className="text-2xl sm:text-3xl 2xl:text-4xl font-extrabold py-6">
            Initial Assessment
          </h3>
          <p className="text-accent-TextHover font-medium text-2xl">
            We start with a thorough evaluation of your unique needs and goals
            to understand your starting point and desired outcomes.
          </p>
        </div>
      </div>
      <div className=" w-[113px] border-dashed border-[20px] border-accent"></div>
      <div className="w-full 2xl:w-[476px] h-full 2xl:h-[500px] bg-destructive rounded-3xl p-8">
        <LaptopMinimal size={75} className="text-yellow" />
        <div className="">
          <h3 className="text-2xl sm:text-3xl 2xl:text-4xl font-extrabold py-6">
          Custom Roadmap
          </h3>
          <p className="text-accent-TextHover font-medium text-2xl">
            Based on the assessment, we develop a personalized study plan that
            outlines each step of your preparation journey, tailored to address
            your specific needs.
          </p>
        </div>
      </div>
      <div className=" w-[113px] border-dashed border-[20px] border-accent"></div>
      <div className="w-full 2xl:w-[476px] h-full 2xl:h-[500px] bg-accent rounded-3xl p-8">
        <MessagesSquare size={75} className="text-destructive" />
        <div className="">
          <h3 className="text-2xl sm:text-3xl 2xl:text-4xl text-primary font-extrabold py-6">
            Expert Guidance
          </h3>
          <p className="text-accent-TextHoverDark font-medium text-2xl">
            Throughout the process, we provide expert insights and support to
            help you navigate challenges and stay on track toward achieving your
            goals.
          </p>
        </div>
      </div>
    </div>
  );
}

const Card = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-80">
      <div className="text-4xl mb-4">{icon}</div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;

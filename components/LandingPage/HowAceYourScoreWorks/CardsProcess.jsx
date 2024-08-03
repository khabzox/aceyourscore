import { Goal, LaptopMinimal, MessagesSquare } from "lucide-react";

export function CardsProcess() {
  return (
    <div className="pt-20 flex justify-between items-center">
      <div className="w-[476px] h-[500px] bg-yellow rounded-3xl p-8">
        <Goal size={75} />
        <div className="">
          <h3 className="text-4xl font-extrabold py-6">
            Comprehensive
            <br />
            Guidance
          </h3>
          <p className="text-accent-TextHover font-medium text-2xl">
            Our process begins with a thorough assessment of your needs and
            goals. We provide a clear roadmap for your preparation, including
            tailored study plans and expert insights.
          </p>
        </div>
      </div>
      <div className=" w-[113px] border-dashed border-[20px] border-accent"></div>
      <div className="w-[476px] h-[500px] bg-destructive rounded-3xl p-8">
        <LaptopMinimal size={75} className="text-yellow" />
        <div className="">
          <h3 className="text-4xl font-extrabold py-6">
            Comprehensive
            <br />
            Guidance
          </h3>
          <p className="text-accent-TextHover font-medium text-2xl">
            Our process begins with a thorough assessment of your needs and
            goals. We provide a clear roadmap for your preparation, including
            tailored study plans and expert insights.
          </p>
        </div>
      </div>
      <div className=" w-[113px] border-dashed border-[20px] border-accent"></div>
      <div className="w-[476px] h-[500px] bg-accent rounded-3xl p-8">
        <MessagesSquare size={75} className="text-destructive" />
        <div className="">
          <h3 className="text-4xl text-primary font-extrabold py-6">
            Comprehensive
            <br />
            Guidance
          </h3>
          <p className="text-accent-TextHoverDark font-medium text-2xl">
            Our process begins with a thorough assessment of your needs and
            goals. We provide a clear roadmap for your preparation, including
            tailored study plans and expert insights.
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

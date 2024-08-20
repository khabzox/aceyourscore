import { GenerateOfferings } from "./generateOfferings";

const Hero = ({ examName }) => {
  const standardGroup = [
    "Group size: 10 to 12 students",
    "Total hours: 30 hours of instruction",
    "Access to community resources and support",
    "Access to detailed study materials and practice tests",
  ];

  const oneOnOneItems = [
    "One-To-One sessions with the instructor of choice",
    "Flexible scheduling: Choose the number of hours needed",
    "Access to community resources and support",
    "Receive personalized feedback on your progress",
  ];

  let priceExam;
  switch (examName) {
    case "Toefl":
      priceExam = "1,500";
      break;
    case "Sat":
      priceExam = "3,500";
      break;
    case "Ielts":
      priceExam = "1,800";
      break;
    case "Toeic":
      priceExam = "1,600";
      break;
  }

  return (
    <section className="bg-yellow relative overflow-hidden" id="start-now">
      <div className="max-w-[95rem] mx-auto py-20">
        <div className="flex flex-col justify-center items-center text-center space-y-5">
          <p className="py-2 px-4 bg-accent text-primary font-medium rounded-full max-w-sm text-xs sm:text-sm">
            🚀 New! Cutting-Edge {examName} Prep
          </p>
          <h1 className="leading-tight text-2xl sm:text-6xl relative z-10">
            Ace Your Score {examName} Prep: <br />
            Unlock Your Path to Success
          </h1>
        </div>
        <div className="relative z-10 mt-10 px-5 flex flex-col md:flex-row justify-center items-center gap-8">
          <GenerateOfferings
            title={"Standard Group"}
            items={standardGroup}
            examName={examName}
            // specialMessage={"Processing..."}
            price={priceExam}
          />
          {/* <GenerateOfferings title={"One-To-One"} items={oneOnOneItems} specialMessage={"Processing..."} examName={examName} /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

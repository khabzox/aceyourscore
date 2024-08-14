import GenerateOfferings from "./GenerateOfferings";

const Hero = ({ examName }) => {
    const standardGroup = [
        "Group size: 10 to 12 students",
        "Total hours: 30 hours of instruction",
        "Access to community resources and support",
        "Ability to book an appointment for any claims or concerns"
    ];

    const oneOnOneItems = [
        "One-To-One sessions with the instructor of choice",
        "Flexible scheduling: Choose the number of hours needed",
        "Access to community resources and support",
        "Ability to book 5 appointments for any claims or concerns",
    ];

    return (
        <section className="bg-yellow relative overflow-hidden" id="start-now">
            <div className="max-w-[95rem] mx-auto py-20">
                <div className="flex flex-col justify-center items-center text-center space-y-5">
                    <p className="py-2 px-4 bg-accent text-primary font-medium rounded-full max-w-sm text-xs sm:text-sm">
                        🚀 New! Cutting-Edge {examName} Prep
                    </p>
                    <h1 className="leading-tight text-2xl sm:text-6xl relative z-10">
                        AceYourScore {examName} Prep: <br />
                        Unlock Your Path to Success
                    </h1>
                </div>
                <div className="relative z-10 mt-10 px-5 flex flex-col md:flex-row justify-center items-center gap-8">
                    <GenerateOfferings title={"Standard Group"} items={standardGroup} examName={examName} />
                    {/* <GenerateOfferings title={"One-To-One"} items={oneOnOneItems} specialMessage={"Processing..."} examName={examName} /> */}
                </div>
            </div>
        </section>
    );
};

export default Hero;

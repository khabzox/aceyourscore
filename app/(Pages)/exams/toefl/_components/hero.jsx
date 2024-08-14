import Link from "next/link";
import { ArrowRight, SquareCheckBig } from "lucide-react";

const generateOfferings = (title, items) => (
    <div className="bg-primary max-w-sm rounded-3xl overflow-hidden shadow-lg flex flex-col">
        <div className="flex-1 p-8">
            <h2 className="text-center text-3xl font-bold text-accent">{title}</h2>
            <div className="border-accent border-2 rounded-full mx-3 opacity-30 my-3 mb-6"></div>
            <div className="space-y-4 text-accent font-semibold">
                {items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                        <div>
                            <SquareCheckBig className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-lg">{item}</h3>
                    </div>
                ))}
            </div>
        </div>
        <div className="p-4 mt-auto">
            <Link href="#" className="bg-accent flex items-center justify-center rounded-2xl py-5 px-6 text-primary font-semibold hover:bg-accent-dark transition">
                Start Your Preparation
                <ArrowRight className="ml-2" />
            </Link>
        </div>
    </div>
);

const Hero = () => {
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

    const privateGroupItems = [
        "Private group sessions with friends",
        "Choose your instructor",
        "Flexible scheduling: Decide the number of hours required",
        "Access to community resources and support",
        "Ability to book 5 appointments for any claims or concerns",
    ];

    return (
        <section className="bg-yellow relative overflow-hidden">
            <div className="max-w-[95rem] mx-auto py-20">
                <div className="flex flex-col justify-center items-center text-center space-y-5">
                    <p className="py-2 px-4 bg-accent text-primary font-medium rounded-full max-w-sm text-sm">
                        🚀 New! Cutting-Edge TOEFL Prep
                    </p>
                    <h1 className="leading-tight text-6xl relative z-10">
                        AceYourScore TOEFL Prep: <br />
                        Unlock Your Path to Success
                    </h1>
                </div>
                <div className="relative z-10 mt-10 flex flex-col md:flex-row md:justify-center gap-8">
                    {generateOfferings("Standard Group", standardGroup)}
                    {generateOfferings("One-To-One", oneOnOneItems)}
                    {generateOfferings("Private Group", privateGroupItems)}
                </div>
            </div>
        </section>
    );
}

export default Hero;

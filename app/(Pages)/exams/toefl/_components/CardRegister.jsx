import Link from "next/link";

import { ArrowRight } from "lucide-react";

const CardRegister = () => {
    return (
        <div className="text-accent py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-2xl font-bold md:text-3xl lg:text-5xl">Get Started Today</h2>
                <p className="my-4 mx-auto font-semibold max-w-4xl text-accent-TextHover/90 md:text-2xl">
                    {"Ready to take the next step toward TOEFL success? Sign up now and unlock your potential with AceYourScore’s expert preparation."}
                </p>

                <Link href="#" className="bg-accent max-w-md mx-auto flex items-center justify-center rounded-2xl py-5 px-6 text-primary font-semibold hover:bg-accent-dark transition">
                    Start Your Preparation
                    <ArrowRight className="ml-2" />
                </Link>
            </div>
        </div>
    );
}

export default CardRegister;

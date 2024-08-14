import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CardRegister = () => {
    return (
        <div className="bg-accent text-background py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl mb-4">
                    Kickstart Your Success
                </h2>
                <p className="text-lg font-medium max-w-3xl mx-auto mb-6">
                    Ready to excel in your exam? Sign up now to unlock expert preparation and achieve your goals with our comprehensive support.
                </p>

                <Link href="#start-now" passHref>
                    <div className="inline-flex items-center justify-center bg-primary text-accent rounded-full py-3 px-6 text-lg font-semibold shadow-lg transition duration-300">
                        Start Your Journey
                        <ArrowRight className="ml-2" />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default CardRegister;

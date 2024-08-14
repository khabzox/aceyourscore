import useExamPurchase from "@/hooks/useExamPurchase";
import { ArrowRight, Loader, SquareCheckBig } from "lucide-react";
import { useState } from "react";

export const GenerateOfferings = ({ title, items, specialMessage, examName }) => {
    const handleExamPurchase = useExamPurchase(examName);
    const [loading, setLoading] = useState(false);

    const handleClickPayPrep = async () => {
        console.log("Button clicked");
        setLoading(true);
        try {
            await handleExamPurchase();
        } catch (error) {
            console.error("Error during exam purchase:", error);
            alert(`Failed to purchase exam: ${examName}. Please try again later.`);
        }
    };

    return (
        <div className="bg-primary max-w-sm rounded-3xl overflow-hidden shadow-2xl flex flex-col relative">
            {specialMessage && (
                <div className="absolute top-0 left-0 bg-destructive text-primary font-medium text-sm rounded-br-lg py-1 px-3">
                    {specialMessage}
                </div>
            )}
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
                {specialMessage ? (
                    <button
                        className="bg-accent w-full flex items-center justify-center rounded-2xl py-5 px-6 text-primary font-semibold cursor-not-allowed hover:opacity-95"
                        disabled
                    >
                        Start Your Preparation
                        <ArrowRight className="ml-2" />
                    </button>
                ) : (
                    <button
                        onClick={handleClickPayPrep}
                        disabled={loading}
                        className={`${loading ? "cursor-not-allowed" : "cursor-pointer"} bg-accent w-full flex items-center justify-center rounded-2xl py-5 px-6 text-primary font-semibold hover:bg-accent-dark transition hover:opacity-95`}
                    >
                        {loading ? <Loader className="animate-spin" /> : <div className="flex items-center justify-center">Start Your Preparation <ArrowRight className="ml-2" /></div>}
                    </button>
                )}
            </div>
        </div>
    );
};

import axios from "axios";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import examMappings from "@/libs/examMappings";

const useExamPurchase = (examName) => {
  const router = useRouter();
  const { user } = useUser();
  const userId = user?.id || null;
  const userFullName = user?.fullName || null;
  const userEmail = user?.emailAddresses[0]?.emailAddress || null;

  // Get the exam ID from the exam name
  const examId = examMappings[examName];

  const handleExamPurchase = async () => {
    console.log(`Attempting purchase for exam: ${examName}`); // Add this line
    if (!userId || !userFullName || !userEmail) {
      router.push("/sign-up");
      return;
    }

    if (!examId) {
      console.error(`No exam ID found for exam name: ${examName}`);
      alert(`Invalid exam name: ${examName}`);
      return;
    }

    try {
      const response = await axios.post("/api/lemonsqueezy/create-checkout-url", {
        productId: examId,
        userId,
        userFullName,
        userEmail,
      });
      console.log(response.data);
      window.location.href = response.data.checkoutUrl; // Modify this line
    } catch (error) {
      console.error("Error during exam purchase:", error);
      alert(`Failed to buy product ${examName}. Please try again later.`);
    }
  };

  return handleExamPurchase;
};

export default useExamPurchase;

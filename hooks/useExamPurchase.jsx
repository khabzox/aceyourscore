import axios from "axios";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import config from "@/config";

const useExamPurchase = (examId) => {
  const router = useRouter();
  const { user } = useUser();
  const userId = user?.id || null;
  const userFullName = user?.fullName || null;
  const userEmail = user?.emailAddresses[0]?.emailAddress || null;

  const handleExamPurchase = async (productId) => {
    if (!userId || !userFullName || !userEmail) {
      router.push("/sign-up");
      return;
    }

    try {
      const response = await axios.post("/api/lemonsqueezy", {
        productId,
        userId,
        userFullName,
        userEmail,
      });
      console.log(response.data);
      window.open(response.data.checkoutUrl, "_blank");
    } catch (error) {
      console.error("Error during exam purchase:", error);
      alert(`Failed to buy product ${productId}. Please try again later.`);
    }
  };

  return handleExamPurchase;
};

export default useExamPurchase;

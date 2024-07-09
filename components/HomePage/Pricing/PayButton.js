import { Loader } from "lucide-react";
import { useState } from "react";

export default function BtnOfPay({ text, py, px, examId, handleExamPurchase }) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await handleExamPurchase(examId);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`py-${py} px-${px} font-bold border-2 border-accent rounded-lg hover:bg-accent-Hover`}
      disabled={loading}
    >
      {loading ? <Loader className="animate-spin" /> : text}
    </button>
  );
}

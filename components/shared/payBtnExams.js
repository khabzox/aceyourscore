"use client";
import { Loader } from "lucide-react";
import { useState } from "react";

export function PayBtnExams({ linkTo, textLink, handleExamPurchase, examId }) {
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
      href={linkTo}
      className={
        "inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 px-4 py-2 my-4 text-sm font-semibold text-white shadow-md transition-transform transform hover:scale-105 hover:opacity-90 focus:outline-none focus:ring-4 sm:px-6 sm:py-3 md:text-base md:font-medium"
      }
      prefetch={true}
      disabled={loading}
    >
      {loading ? <Loader className="animate-spin" /> : textLink}
    </button>
  );
}

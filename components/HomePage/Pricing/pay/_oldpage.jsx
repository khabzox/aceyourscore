"use client";

import axios from "axios";
// import { useState } from "react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
  useUser,
} from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Pay() {
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const router = useRouter();
  const { user } = useUser();
  const userId = user ? user.id : undefined;

  // console.log(userId);
  const buyProduct1 = async () => {
    // setIsLoading(true);
    // setIsOverlayVisible(true);
    try {
      const response = await axios.post("/api/lemonsqueezy", {
        productId: "443229",
        userId: userId,
      });

      console.log(response.data);

      // A normal Window
      window.open(response.data.checkoutUrl, "_blank");

      // A custom window
      //   const width = 800;
      //   const height = 600;
      //   const left = window.screen.width / 2 - width / 2;
      //   const top = window.screen.height / 2 - height / 2;

      //   const newWindow = window.open(
      //     response.data.checkoutUrl,
      //     "_blank",
      //     `toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=${width},height=${height},top=${top},left=${left}`
      //   );

      //   // Check if the window was blocked by the browser
      //   if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      //     alert("The popup was blocked. Please allow popups and try again.");
      //     setIsOverlayVisible(false);
      //   } else {
      //     // Listen for the new window to be closed
      //     const timer = setInterval(() => {
      //       if (newWindow.closed) {
      //         clearInterval(timer);
      //         setIsOverlayVisible(false);
      //       }
      //     }, 500);
      //   }
    } catch (error) {
      console.error(error);
      alert("Failed to buy product #1");
      //   setIsOverlayVisible(false);
    }
    // finally {
    //     setIsLoading(false);
    //   }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <button
        onClick={buyProduct1}
        className="p-3 border border-white"
        // disabled={isLoading}
      >
        {/* {isLoading ? "Loading..." : "Buy product #1 for 1500 INR"} */}
        Buy product
      </button>
      {/* {isOverlayVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50"></div>
      )} */}
    </main>
  );
}

import GoogleAnalytics from "./_GoogleAnalytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { Poppins } from "next/font/google";
import "./globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import { ClerkProvider } from "@clerk/nextjs";
import { frFR, enUS } from "@clerk/localizations";
import NavBar from "@/components/LandingPage/NavBar";
import FooterPage from "@/components/LandingPage/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"]
});

export const metadata = {
  title: "AceYourScore | Home",
  description: "...",
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <ClerkProvider localization={locale === "fr" ? frFR : enUS}>
      <html lang={locale}>
        <head>
          <link rel="icon" href="/favicon.ico" />
          <script src="https://app.lemonsqueezy.com/js/lemon.js" defer></script>
          {/* <title>Your App Title</title>
      <meta name="description" content="Your App Description" /> */}
          {/* Crisp Chat Integration */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.$crisp = [];
              window.CRISP_WEBSITE_ID = "6faf9398-c908-46fe-bb50-15b0da5acb6f";
              (function(){
                var d = document;
                var s = d.createElement("script");
                s.src = "https://client.crisp.chat/l.js";
                s.async = 1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `,
            }}
          />
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
        </head>
        <body className={`${poppins.className} text-accent bg-primary`}>
          <NextIntlClientProvider messages={messages}>
          <NavBar />
            {children}
        <FooterPage />
          </NextIntlClientProvider>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}

import GoogleAnalytics from "./_GoogleAnalytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { Poppins } from "next/font/google";
import "./globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { ClerkProvider } from "@clerk/nextjs";
import { frFR, enUS } from "@clerk/localizations";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default async function RootLayout({ children, params: { locale } }) {
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
        </head>
        <body className={`${poppins.className} text-accent bg-primary`}>
          <NextIntlClientProvider messages={messages} locale={locale}>
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
              <GoogleAnalytics
                ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
              />
            ) : null}
            {children}
            <Analytics />
            <SpeedInsights />
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

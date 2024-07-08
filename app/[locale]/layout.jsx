import { Poppins } from "next/font/google";
import "./globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { ClerkProvider } from "@clerk/nextjs";
import { frFR, enUS } from "@clerk/localizations";

const poppins = Poppins({ subsets: ["latin", "latin-ext"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']  });

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <ClerkProvider localization={locale === "fr" ? frFR : enUS}>
      <html lang={locale}>
        <head>
          <link rel="icon" href="/favicon.ico" />
          <script src="https://app.lemonsqueezy.com/js/lemon.js" defer></script>
        </head>
        <body className={`${poppins.className} text-accent bg-primary`}>
          <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

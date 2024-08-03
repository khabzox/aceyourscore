"use client";

import { useTranslations } from "next-intl";

import { BtnOfCTA } from "@/components/shared/CustmsBtns";
export default function CTA() {
  const t = useTranslations("CTA");

  return (
    <div className="w-full px-2 sm:px-10">
      <div className="text-start md:text-center py-10 mt-4 px-4 flex flex-col justify-start gap-4 bg-secondary rounded-lg">
        <h2 className="font-bold text-xl md:text-3xl">{t("title")}</h2>
        <p className="font-semibold text-sm md:text-lg max-w-3xl mx-auto">
          {t("desc")}
        </p>

        <BtnOfCTA text={t("button")} linkto="/dashboard" />
      </div>
    </div>
  );
}

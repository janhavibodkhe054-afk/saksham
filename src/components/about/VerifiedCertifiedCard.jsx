
import React from "react";
import { Award } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  en: {
    heading: "Verified & Certified",
    description:
      "Saksham Foundation's registration and compliance details:",
    official: "OFFICIAL",
    registration: "REGISTRATION NUMBER",
    csr: "CSR REGISTRATION NUMBER",
    pan: "PAN NUMBER",
    benefit: "80G TAX BENEFIT",
    authority: "PROVISIONAL APPROVAL",
    note: "Subject to applicable approval validity",
  },
  mr: {
    heading: "Verified & Certified",
    description:
      "सक्षम फाउंडेशनची नोंदणी आणि अधिकृत माहिती:",
    official: "OFFICIAL",
    registration: "नोंदणी क्रमांक",
    csr: "CSR नोंदणी क्रमांक",
    pan: "PAN क्रमांक",
    benefit: "80G कर सवलत",
    authority: "तात्पुरती मान्यता",
    note: "संबंधित मान्यतेच्या वैधतेच्या अधीन",
  },
};

export default function VerifiedCertifiedCard() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const details = [
    {
      label: t.registration,
      value: "F-49558/Pune",
    },
    {
      label: t.csr,
      value: "CSR00075938",
    },
    {
      label: t.pan,
      value: "AAVTS1928A",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-[350px]">
      <div
        className="
          relative overflow-hidden
          rounded-[22px]
          border-[2px] border-[#CBA735]
          bg-[#111729]
          px-[18px] pb-[26px] pt-[30px]
          shadow-[0_18px_45px_rgba(6,27,80,0.18)]
          sm:px-[20px]
        "
      >
        {/* GOLDEN CORNER RIBBON */}
        <div
          className="
            absolute right-[-37px] top-[23px] z-10
            w-[155px] rotate-45
            bg-[#D5AE3D]
            py-[8px] text-center
            shadow-md
          "
        >
          <span className="block text-[10px] font-black tracking-[0.05em] text-[#101729]">
            {t.official}
          </span>
        </div>

        {/* HEADING */}
        <h3
          className="
            relative z-[1]
            max-w-[250px]
            font-serif text-[27px]
            font-bold leading-[1.2]
            tracking-[-0.6px]
            text-[#D9B448]
          "
        >
          {t.heading}
        </h3>

        {/* DESCRIPTION */}
        <p className="relative z-[1] mt-[16px] max-w-[260px] text-[12px] leading-[1.7] text-[#B9BDCA]">
          {t.description}
        </p>

        {/* THREE DETAIL BOXES */}
        <div className="mt-[23px] space-y-[11px]">
          {details.map((item, index) => (
            <div
              key={index}
              className="
                relative overflow-hidden
                rounded-[10px]
                bg-[#232A3C]
                px-[16px] py-[14px]
              "
            >
              {/* GOLD LEFT BORDER */}
              <div className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#D5AE3D]" />

              <p className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#D5AE3D]">
                {item.label}
              </p>

              <p className="mt-[5px] break-words text-[13px] font-extrabold leading-5 text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* 80G BOTTOM BADGE */}
        <div className="mt-[24px] flex items-center gap-[14px]">
          <div className="relative flex h-[43px] w-[43px] shrink-0 items-center justify-center text-[#D5AE3D]">
            <Award size={36} strokeWidth={2.7} />
          </div>

          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.025em] text-white">
              {t.benefit}
            </p>

            <p className="mt-[3px] text-[10px] font-black uppercase tracking-[0.03em] text-[#D5AE3D]">
              {t.authority}
            </p>
          </div>
        </div>

        <p className="mt-4 text-[10px] leading-4 text-[#B9BDCA]">
          {t.note}
        </p>
      </div>
    </div>
  );
}

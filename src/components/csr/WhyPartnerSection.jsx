
import React from "react";

import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    sectionLabel: "WHY PARTNER WITH SAKSHAM?",

    heading1: "A Community-Focused",
    heading2: "Skill Development Partner",

    description:
      "Saksham Foundation brings together community outreach, training coordination, practical learning support, employer engagement and project documentation to help CSR initiatives reach intended beneficiaries and deliver measurable outcomes.",

    mainImageAlt:
      "People collaborating on a community initiative",

    secondaryImageAlt:
      "Participants attending a skill development session",
  },

  mr: {
    sectionLabel: "सक्षम फाउंडेशनसोबत भागीदारी का करावी?",

    heading1: "समुदायकेंद्रित",
    heading2: "कौशल्य विकास भागीदार",

    description:
      "सक्षम फाउंडेशन समुदाय संपर्क, प्रशिक्षण समन्वय, प्रात्यक्षिक शिक्षणासाठी सहाय्य, नियोक्त्यांशी समन्वय आणि प्रकल्पाचे दस्तऐवजीकरण या सर्व बाबींवर एकत्रितपणे काम करते. CSR उपक्रम अपेक्षित लाभार्थ्यांपर्यंत पोहोचावेत आणि त्यांच्या परिणामांचे मूल्यमापन करता यावे, यासाठी आम्ही सहाय्य करतो.",

    mainImageAlt:
      "समुदाय विकास उपक्रमामध्ये एकत्र काम करणारे सहभागी",

    secondaryImageAlt:
      "कौशल्य विकास प्रशिक्षण सत्रात सहभागी झालेले प्रशिक्षणार्थी",
  },
};

export default function WhyPartnerSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="why-partner"
      aria-labelledby="why-partner-heading"
      className="overflow-hidden bg-[#F5F8FC] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* LEFT - TWO IMAGES */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-[550px] pb-10 pr-8 sm:pb-12 sm:pr-14">

              {/* MAIN IMAGE */}
              <div className="overflow-hidden rounded-2xl bg-slate-200">
                <img
                  src="/c4.jpeg"
                  alt={t.mainImageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-[290px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[380px] lg:h-[400px]"
                />
              </div>

              {/* OVERLAPPING SECOND IMAGE */}
              <div className="absolute bottom-0 right-0 w-[53%] overflow-hidden rounded-2xl border-[6px] border-[#F5F8FC] bg-slate-200 shadow-[0_15px_35px_rgba(6,27,80,0.12)]">
                <img
                  src="/c1.jpeg"
                  alt={t.secondaryImageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-[170px] w-full object-cover sm:h-[220px] lg:h-[240px]"
                />
              </div>
            </div>
          </div>

          {/* RIGHT - CONTENT */}
          <div className="lg:col-span-6">

            {/* SECTION LABEL */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-0.5 w-9 bg-orange-500" />

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange-600">
                {t.sectionLabel}
              </span>
            </div>

            {/* HEADING */}
            <h2
              id="why-partner-heading"
              className="text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl lg:text-[44px]"
            >
              {t.heading1}

              <span className="block text-orange-600">
                {t.heading2}
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-xl text-sm leading-8 text-slate-700 sm:text-base">
              {t.description}
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

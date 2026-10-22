
import React from "react";
import {
  UsersRound,
  CalendarCheck,
  BookOpenCheck,
  ClipboardCheck,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  ShieldCheck,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    sectionLabel: "MONITORING & TRANSPARENCY",

    heading1: "Accountability",
    heading2: "at Every Stage",

    paragraphs: [
      "Our project implementation approach includes maintaining beneficiary records, attendance reports, training progress documentation, assessment information, placement records, employer feedback and impact reporting.",

      "These systems support transparent communication, performance evaluation and evidence-based CSR reporting.",
    ],

    highlightTitle: "Transparent Project Implementation",

    highlightDescription:
      "Structured documentation and monitoring to support informed CSR decision-making.",

    monitoringAreas: [
      "Beneficiary Records",
      "Attendance Reports",
      "Training Progress",
      "Assessment Information",
      "Placement & Employer Feedback",
      "Impact Reporting",
    ],
  },

  mr: {
    sectionLabel: "देखरेख व पारदर्शकता",

    heading1: "प्रत्येक टप्प्यावर",
    heading2: "जबाबदारी आणि पारदर्शकता",

    paragraphs: [
      "आमच्या प्रकल्प अंमलबजावणी पद्धतीमध्ये लाभार्थ्यांच्या नोंदी, उपस्थिती अहवाल, प्रशिक्षण प्रगतीचे दस्तऐवजीकरण, मूल्यमापन माहिती, प्लेसमेंट नोंदी, नियोक्त्यांचा अभिप्राय आणि परिणाम अहवाल यांचा समावेश आहे.",

      "या व्यवस्थांमुळे पारदर्शक संवाद, कामगिरीचे मूल्यमापन आणि पुराव्यांवर आधारित CSR अहवाल तयार करण्यास सहाय्य होते.",
    ],

    highlightTitle: "पारदर्शक प्रकल्प अंमलबजावणी",

    highlightDescription:
      "CSR संबंधित निर्णयांसाठी आवश्यक माहिती उपलब्ध व्हावी यासाठी नियोजनबद्ध दस्तऐवजीकरण आणि प्रकल्प देखरेख.",

    monitoringAreas: [
      "लाभार्थ्यांच्या नोंदी",
      "उपस्थिती अहवाल",
      "प्रशिक्षणाची प्रगती",
      "मूल्यमापन माहिती",
      "प्लेसमेंट व नियोक्त्यांचा अभिप्राय",
      "प्रकल्प परिणाम अहवाल",
    ],
  },
};

// ICON CONFIGURATION
// Icons and card styling remain unchanged.
const monitoringStyles = [
  { icon: UsersRound },
  { icon: CalendarCheck },
  { icon: BookOpenCheck },
  { icon: ClipboardCheck },
  { icon: BriefcaseBusiness },
  { icon: ChartNoAxesCombined },
];

export default function MonitoringTransparency() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="monitoring-transparency"
      aria-labelledby="monitoring-heading"
      className="relative overflow-hidden bg-[#F3F7FC] py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-5">

            {/* SECTION LABEL */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-orange-500" />

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange-600">
                {t.sectionLabel}
              </span>
            </div>

            {/* HEADING */}
            <h2
              id="monitoring-heading"
              className="text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl lg:text-[44px]"
            >
              {t.heading1}

              <span className="block text-orange-600">
                {t.heading2}
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 text-sm leading-8 text-slate-700 sm:text-base">
              {t.paragraphs[0]}
            </p>

            <p className="mt-4 text-sm leading-8 text-slate-700 sm:text-base">
              {t.paragraphs[1]}
            </p>

            {/* TRANSPARENCY HIGHLIGHT */}
            <div className="mt-8 flex items-start gap-4 border-t border-slate-200 pt-6">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-orange-600">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#061B50]">
                  {t.highlightTitle}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {t.highlightDescription}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT MONITORING GRID */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">

              {monitoringStyles.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group flex min-h-[145px] flex-col justify-center rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_12px_30px_rgba(6,27,80,0.07)] sm:min-h-[160px] sm:p-6"
                  >
                    {/* ICON */}
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-orange-50 text-orange-600 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
                      <Icon
                        className="h-5 w-5"
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-sm font-bold leading-snug text-[#061B50] sm:text-base">
                      {t.monitoringAreas[index]}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

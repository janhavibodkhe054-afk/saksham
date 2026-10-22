
import React from "react";
import {
  UsersRound,
  GraduationCap,
  Hospital,
  BriefcaseBusiness,
  ClipboardCheck,
  Handshake,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    sectionLabel: "WHAT WE DO",

    heading1: "Our CSR Implementation",
    heading2: "Capabilities",

    description:
      "Supporting CSR initiatives from community outreach and training coordination to placement assistance, monitoring and follow-up.",

    capabilities: [
      {
        title: "Candidate Mobilization",
        description:
          "Community outreach, awareness, counselling, screening and enrolment.",
      },
      {
        title: "Training Delivery",
        description:
          "Industry-aligned curriculum, trainer coordination and practical learning.",
      },
      {
        title: "On-the-Job Training",
        description:
          "Hospital and industry coordination for relevant workplace exposure.",
      },
      {
        title: "Placement Assistance",
        description:
          "Interview preparation, employer connections and joining support.",
      },
      {
        title: "Monitoring & Reporting",
        description:
          "Attendance, progress tracking, MIS reports and project documentation.",
      },
      {
        title: "Post-Placement Support",
        description:
          "Employment follow-ups, employer feedback and retention monitoring.",
      },
    ],
  },

  mr: {
    sectionLabel: "आमचे कार्य",

    heading1: "CSR प्रकल्प अंमलबजावणीतील",
    heading2: "आमची क्षमता",

    description:
      "समुदाय संपर्क आणि प्रशिक्षण समन्वयापासून ते प्लेसमेंट सहाय्य, प्रकल्प देखरेख आणि पाठपुराव्यापर्यंत CSR उपक्रमांना सहाय्य करणे.",

    capabilities: [
      {
        title: "उमेदवार संपर्क व नोंदणी",
        description:
          "समुदाय संपर्क, जनजागृती, समुपदेशन, पात्रता तपासणी आणि उमेदवारांची नोंदणी.",
      },
      {
        title: "प्रशिक्षण अंमलबजावणी",
        description:
          "उद्योगाभिमुख अभ्यासक्रम, प्रशिक्षक समन्वय आणि प्रात्यक्षिक शिक्षण.",
      },
      {
        title: "प्रत्यक्ष कामाचे प्रशिक्षण",
        description:
          "कार्यस्थळावरील अनुभवासाठी रुग्णालये आणि उद्योगांशी समन्वय साधणे.",
      },
      {
        title: "प्लेसमेंट सहाय्य",
        description:
          "मुलाखतीची तयारी, संभाव्य नियोक्त्यांशी संपर्क आणि नोकरी रुजू होण्यासाठी सहाय्य.",
      },
      {
        title: "देखरेख व अहवाल",
        description:
          "उपस्थिती नोंदी, प्रगतीचे मूल्यमापन, MIS अहवाल आणि प्रकल्पाचे दस्तऐवजीकरण.",
      },
      {
        title: "प्लेसमेंटनंतरचे सहाय्य",
        description:
          "रोजगारानंतर पाठपुरावा, नियोक्त्यांचा अभिप्राय आणि नोकरीतील सातत्यावर देखरेख.",
      },
    ],
  },
};

// ICONS AND CARD NUMBERS
// Unchanged for both languages.
const capabilityStyles = [
  {
    number: "01",
    icon: UsersRound,
  },
  {
    number: "02",
    icon: GraduationCap,
  },
  {
    number: "03",
    icon: Hospital,
  },
  {
    number: "04",
    icon: BriefcaseBusiness,
  },
  {
    number: "05",
    icon: ClipboardCheck,
  },
  {
    number: "06",
    icon: Handshake,
  },
];

export default function CSRCapabilitiesSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  // CONVERT CARD NUMBERS TO MARATHI NUMERALS
  const formatNumber = (number) => {
    if (language === "mr") {
      return String(number).replace(/[0-9]/g, (digit) =>
        "०१२३४५६७८९"[Number(digit)]
      );
    }

    return String(number);
  };

  return (
    <section
      id="csr-capabilities"
      aria-labelledby="csr-capabilities-heading"
      className="relative overflow-hidden bg-white py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* SECTION HEADING */}
        <div className="mb-10 text-center lg:mb-12">

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-orange-500" />

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange-600">
              {t.sectionLabel}
            </span>

            <span className="h-px w-8 bg-orange-500" />
          </div>

          <h2
            id="csr-capabilities-heading"
            className="text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl lg:text-5xl"
          >
            {t.heading1}{" "}

            <span className="text-orange-600">
              {t.heading2}
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            {t.description}
          </p>
        </div>

        {/* CAPABILITY CARDS */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">

          {capabilityStyles.map((item, index) => {
            const Icon = item.icon;
            const content = t.capabilities[index];

            return (
              <article
                key={item.number}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-[#F8FAFD] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-[0_15px_40px_rgba(6,27,80,0.08)] sm:p-8"
              >

                {/* ICON + NUMBER */}
                <div className="mb-7 flex items-start justify-between gap-4">

                  {/* ICON */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-orange-600 shadow-sm transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white">
                    <Icon
                      className="h-7 w-7"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* NUMBER */}
                  <span className="text-4xl font-extrabold tracking-tight text-slate-200">
                    {formatNumber(item.number)}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-bold leading-snug text-[#061B50] sm:text-xl">
                  {content.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {content.description}
                </p>

                {/* HOVER ACCENT */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[3px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

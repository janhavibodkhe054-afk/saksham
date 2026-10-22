
import React from "react";
import {
  ArrowUpRight,
  GraduationCap,
  Handshake,
  UsersRound,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    sectionLabel: "OUR FUTURE COMMITMENT",

    heading1: "Expanding Opportunities.",
    heading2: "Strengthening Communities.",

    description:
      "We aim to expand access to practical education, strengthen industry partnerships and support more youth and women in building sustainable careers and better livelihoods.",

    button: "Collaborate With Us",

    focusAreas: [
      {
        title: "Practical Education",
        description:
          "Expanding access to career-focused learning.",
      },
      {
        title: "Industry Partnerships",
        description:
          "Building meaningful collaborations.",
      },
      {
        title: "Sustainable Livelihoods",
        description:
          "Supporting youth and women towards better opportunities.",
      },
    ],
  },

  mr: {
    sectionLabel: "भविष्यासाठी आमची बांधिलकी",

    heading1: "संधींचा विस्तार.",
    heading2: "समुदायांचे सक्षमीकरण.",

    description:
      "प्रात्यक्षिक शिक्षणाच्या संधी अधिकाधिक लोकांपर्यंत पोहोचवणे, उद्योगांसोबत भागीदारी मजबूत करणे आणि अधिक युवक व महिलांना शाश्वत करिअर व उत्तम उपजीविकेच्या संधी निर्माण करण्यासाठी सहाय्य करणे हे आमचे उद्दिष्ट आहे.",

    button: "आमच्यासोबत सहकार्य करा",

    focusAreas: [
      {
        title: "प्रात्यक्षिक शिक्षण",
        description:
          "करिअराभिमुख शिक्षणाच्या संधींचा विस्तार करणे.",
      },
      {
        title: "उद्योग भागीदारी",
        description:
          "उद्योगांसोबत अर्थपूर्ण सहकार्य निर्माण करणे.",
      },
      {
        title: "शाश्वत उपजीविका",
        description:
          "युवक आणि महिलांना अधिक चांगल्या संधी मिळवण्यासाठी सहाय्य करणे.",
      },
    ],
  },
};

// ICON CONFIGURATION
// Icons and layout remain unchanged for both languages.
const focusAreaStyles = [
  {
    number: "01",
    icon: GraduationCap,
  },
  {
    number: "02",
    icon: Handshake,
  },
  {
    number: "03",
    icon: UsersRound,
  },
];

export default function FutureCommitment() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="future-commitment"
      aria-labelledby="future-commitment-heading"
      className="relative overflow-hidden bg-[#F3F7FC] py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">

            {/* SECTION LABEL */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-0.5 w-9 bg-orange-500" />

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange-600">
                {t.sectionLabel}
              </span>
            </div>

            {/* HEADING */}
            <h2
              id="future-commitment-heading"
              className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl lg:text-[44px]"
            >
              {t.heading1}

              <span className="mt-1 block text-orange-600">
                {t.heading2}
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
              {t.description}
            </p>

            {/* CTA */}
            <Link
              to="/contact#csr-enquiry"
              className="group mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-orange-600 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-lg"
            >
              {t.button}

              <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          {/* RIGHT FOCUS AREAS */}
          <div className="lg:col-span-5">
            <div className="space-y-4">

              {focusAreaStyles.map((item, index) => {
                const Icon = item.icon;
                const content = t.focusAreas[index];

                return (
                  <div
                    key={item.number}
                    className="group flex items-center gap-5 rounded-xl border border-slate-200 bg-white px-5 py-5 transition-all duration-300 hover:border-orange-200 hover:shadow-[0_10px_30px_rgba(6,27,80,0.06)] sm:px-6"
                  >

                    {/* ICON */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
                      <Icon
                        className="h-6 w-6"
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="flex-1">

                      {/* TITLE */}
                      <h3 className="text-base font-bold text-[#061B50]">
                        {content.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="mt-1 text-xs leading-6 text-slate-600 sm:text-sm">
                        {content.description}
                      </p>
                    </div>

                    {/* ARROW ICON */}
                    <ArrowRight className="hidden h-4 w-4 shrink-0 text-orange-500 transition-transform duration-300 group-hover:translate-x-1 sm:block" />

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

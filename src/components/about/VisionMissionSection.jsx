
import React from "react";
import {
  Eye,
  Target,
  HeartHandshake,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI CONTENT
const translations = {
  en: {
    sectionLabel: "OUR PURPOSE",

    heading1: "Our Vision",
    headingAnd: "&",
    heading2: "Mission",

    visionLabel: "THE FUTURE WE ENVISION",
    visionTitle: "Our Vision",
    visionDescription:
      "To create an inclusive and empowered society where every youth and woman, regardless of socio-economic background, has access to education, employable skills, sustainable livelihood opportunities and a better quality of life.",

    missionLabel: "THE ACTIONS THAT DRIVE US",
    missionTitle: "Our Mission",
    missionDescription:
      "To empower marginalized communities through accessible skill training, practical education, career guidance, employment opportunities and partnerships that promote financial independence and long-term socio-economic development.",

    centerName: "SAKSHAM",
    centerFoundation: "FOUNDATION",
    centerTagline: "Empower • Educate • Elevate",

    bottomValues: [
      "Education",
      "Empowerment",
      "Sustainable Livelihoods",
    ],
  },

  mr: {
    sectionLabel: "आमचे उद्दिष्ट",

    heading1: "आमची दृष्टी",
    headingAnd: "आणि",
    heading2: "ध्येय",

    visionLabel: "आम्ही पाहत असलेले भविष्य",
    visionTitle: "आमची दृष्टी",
    visionDescription:
      "सामाजिक किंवा आर्थिक पार्श्वभूमी कोणतीही असो, प्रत्येक युवक आणि महिलेला शिक्षण, रोजगाराभिमुख कौशल्ये, शाश्वत उपजीविकेच्या संधी आणि उत्तम जीवनमान उपलब्ध असलेला सर्वसमावेशक व सक्षम समाज निर्माण करणे.",

    missionLabel: "आमच्या कार्याला दिशा देणारी ध्येये",
    missionTitle: "आमचे ध्येय",
    missionDescription:
      "सुलभ कौशल्य प्रशिक्षण, व्यावहारिक शिक्षण, करिअर मार्गदर्शन, रोजगाराच्या संधी आणि अर्थपूर्ण भागीदारी यांच्या माध्यमातून वंचित समुदायांचे सक्षमीकरण करणे, आर्थिक स्वावलंबनाला चालना देणे आणि दीर्घकालीन सामाजिक व आर्थिक विकासास हातभार लावणे.",

    centerName: "सक्षम",
    centerFoundation: "फाउंडेशन",
    centerTagline: "सक्षमीकरण • शिक्षण • प्रगती",

    bottomValues: [
      "शिक्षण",
      "सक्षमीकरण",
      "शाश्वत उपजीविका",
    ],
  },
};

export default function VisionMissionSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="vision-mission"
      aria-labelledby="vision-mission-title"
      className="relative overflow-hidden bg-white py-16 lg:py-24"
    >
      {/* BACKGROUND ACCENTS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-orange-50/70 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-50/70 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* SECTION HEADING */}
        <div className="mb-14 text-center">

          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-orange-500" />

            <span className="text-xs font-bold uppercase tracking-[0.16em] text-orange-600">
              {t.sectionLabel}
            </span>

            <span className="h-px w-8 bg-orange-500" />
          </div>

          <h2
            id="vision-mission-title"
            className="text-3xl font-extrabold tracking-tight text-[#061B50] sm:text-4xl lg:text-5xl"
          >
            {t.heading1}{" "}
            <span className="text-orange-600">
              {t.headingAnd}
            </span>{" "}
            {t.heading2}
          </h2>
        </div>

        {/* MAIN CONNECTED LAYOUT */}
        <div className="grid items-center gap-9 lg:grid-cols-[1fr_280px_1fr] lg:gap-6">

          {/* VISION */}
          <article className="group relative text-center lg:text-right">

            {/* VISION ICON */}
            <div className="mb-5 flex justify-center lg:justify-end">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110">
                <Eye className="h-7 w-7" strokeWidth={1.8} />
              </div>
            </div>

            {/* LABEL */}
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              {t.visionLabel}
            </span>

            {/* TITLE */}
            <h3 className="mt-3 text-2xl font-extrabold text-[#061B50] sm:text-3xl">
              {t.visionTitle}
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-5 text-sm leading-8 text-slate-700 sm:text-base">
              {t.visionDescription}
            </p>

            {/* CONNECTION LINE */}
            <div className="mt-7 hidden items-center justify-end lg:flex">
              <span className="h-px w-24 bg-gradient-to-r from-transparent to-orange-400" />
              <span className="h-2 w-2 rounded-full bg-orange-500" />
            </div>
          </article>

          {/* CENTER PURPOSE CIRCLE */}
          <div className="relative mx-auto flex h-[250px] w-[250px] items-center justify-center sm:h-[280px] sm:w-[280px]">

            {/* ROTATING DASHED ORBIT */}
            <div className="purpose-orbit absolute inset-0 rounded-full border-2 border-dashed border-orange-200" />

            {/* SECOND ORBIT */}
            <div className="absolute inset-5 rounded-full border border-blue-100" />

            {/* ORBIT DOTS */}
            <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-orange-500 shadow-lg shadow-orange-200" />

            <div className="absolute bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-green-600 shadow-lg shadow-green-200" />

            {/* CENTRAL CIRCLE */}
            <div className="relative flex h-[185px] w-[185px] flex-col items-center justify-center rounded-full bg-[#061B50] text-center shadow-[0_20px_50px_rgba(6,27,80,0.2)]">

              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-orange-400">
                <HeartHandshake className="h-6 w-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-orange-300">
                {t.centerName}
              </span>

              <span className="mt-1 text-lg font-extrabold text-white">
                {t.centerFoundation}
              </span>

              <span className="mt-3 px-2 text-[10px] font-medium text-blue-100">
                {t.centerTagline}
              </span>
            </div>
          </div>

          {/* MISSION */}
          <article className="group relative text-center lg:text-left">

            {/* MISSION ICON */}
            <div className="mb-5 flex justify-center lg:justify-start">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-700 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                <Target className="h-7 w-7" strokeWidth={1.8} />
              </div>
            </div>

            {/* LABEL */}
            <span className="text-xs font-bold uppercase tracking-wider text-green-700">
              {t.missionLabel}
            </span>

            {/* TITLE */}
            <h3 className="mt-3 text-2xl font-extrabold text-[#061B50] sm:text-3xl">
              {t.missionTitle}
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-5 text-sm leading-8 text-slate-700 sm:text-base">
              {t.missionDescription}
            </p>

            {/* CONNECTION LINE */}
            <div className="mt-7 hidden items-center lg:flex">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              <span className="h-px w-24 bg-gradient-to-r from-green-400 to-transparent" />
            </div>
          </article>
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3 border-t border-slate-100 pt-7">

          <span className="text-sm font-semibold text-[#061B50]">
            {t.bottomValues[0]}
          </span>

          <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

          <span className="text-sm font-semibold text-[#061B50]">
            {t.bottomValues[1]}
          </span>

          <span className="h-1.5 w-1.5 rounded-full bg-green-600" />

          <span className="text-sm font-semibold text-[#061B50]">
            {t.bottomValues[2]}
          </span>
        </div>

      </div>

      {/* ORBIT ANIMATION */}
      <style>{`
        @keyframes purposeRotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .purpose-orbit {
          animation: purposeRotate 30s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .purpose-orbit {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}


import React from "react";
import {
  HeartPulse,
  HandHeart,
  BriefcaseBusiness,
  Monitor,
  Factory,
  BookOpenCheck,
  ArrowUpRight,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    sectionLabel: "CSR FOCUS AREAS",

    heading1: "Areas Where We Can",
    heading2: "Create Impact Together",

    description:
      "Explore meaningful collaboration opportunities across skill development, education, employment and community empowerment.",

    focusAreas: [
      "Healthcare & Paramedical Skill Development",
      "Women Empowerment & Livelihood Programs",
      "Youth Employment & Vocational Training",
      "Digital Literacy & Smart Class Initiatives",
      "Technical & Industry-Oriented Training",
      "Community Education & Career Awareness",
    ],

    bottomNote:
      "Collaboration opportunities depend on project requirements, partner priorities and available resources.",
  },

  mr: {
    sectionLabel: "CSR कार्यक्षेत्रे",

    heading1: "एकत्र येऊन",
    heading2: "सकारात्मक परिवर्तन घडवूया",

    description:
      "कौशल्य विकास, शिक्षण, रोजगार आणि समुदाय सक्षमीकरणाच्या विविध क्षेत्रांमध्ये अर्थपूर्ण सहकार्याच्या संधी जाणून घ्या.",

    focusAreas: [
      "आरोग्यसेवा व पॅरामेडिकल कौशल्य विकास",
      "महिला सक्षमीकरण व उपजीविका कार्यक्रम",
      "युवक रोजगार व व्यावसायिक प्रशिक्षण",
      "डिजिटल साक्षरता व स्मार्ट क्लास उपक्रम",
      "तांत्रिक व उद्योगाभिमुख प्रशिक्षण",
      "समुदाय शिक्षण व करिअर जनजागृती",
    ],

    bottomNote:
      "सहकार्याच्या संधी या प्रकल्पाच्या गरजा, भागीदार संस्थांची प्राधान्ये आणि उपलब्ध संसाधनांवर अवलंबून असतील.",
  },
};

// ICONS, IMAGES AND NUMBERS
// Remain unchanged for both languages.
const focusAreaStyles = [
  {
    number: "01",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "02",
    icon: HandHeart,
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    icon: BriefcaseBusiness,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "04",
    icon: Monitor,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "05",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "06",
    icon: BookOpenCheck,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=85",
  },
];

export default function CSRFocusAreas() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  // CONVERT CARD NUMBERS TO MARATHI
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
      id="csr-focus-areas"
      aria-labelledby="csr-focus-heading"
      className="overflow-hidden bg-[#F3F7FC] py-14 lg:py-20"
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
            id="csr-focus-heading"
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

        {/* IMAGE CARDS */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">

          {focusAreaStyles.map((area, index) => {
            const Icon = area.icon;

            return (
              <article
                key={area.number}
                className="group relative h-[255px] overflow-hidden rounded-2xl bg-[#061B50] sm:h-[285px] lg:h-[310px]"
              >

                {/* BACKGROUND IMAGE */}
                <img
                  src={area.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061B50]/95 via-[#061B50]/35 to-[#061B50]/10" />

                {/* ICON AND NUMBER */}
                <div className="absolute left-6 right-6 top-6 flex items-start justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/15 text-white backdrop-blur-sm">
                    <Icon
                      className="h-6 w-6"
                      strokeWidth={1.8}
                    />
                  </div>

                  <span className="text-sm font-bold text-white/75">
                    {formatNumber(area.number)}
                  </span>
                </div>

                {/* BOTTOM CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-6">

                  <div className="mb-3 h-1 w-9 rounded-full bg-orange-400" />

                  {/* TITLE */}
                  <h3 className="max-w-xs text-lg font-bold leading-snug text-white sm:text-xl">
                    {t.focusAreas[index]}
                  </h3>

                  <ArrowUpRight className="mt-4 h-5 w-5 text-orange-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM NOTE */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-slate-500">
          {t.bottomNote}
        </p>
      </div>
    </section>
  );
}

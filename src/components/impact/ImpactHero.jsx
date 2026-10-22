
import React from "react";
import { Home, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    breadcrumbLabel: "Breadcrumb",
    home: "Home",
    currentPage: "Our Impact",

    heading1: "Our Impact",
    heading2: "& Initiatives",

    subtitle1: "Every Opportunity Creates a",
    subtitle2: "Story of Change.",

    description:
      "Discover how Saksham Foundation supports youth and women through community outreach, skill development and employment-focused initiatives.",
  },

  mr: {
    breadcrumbLabel: "पृष्ठ मार्गदर्शन",
    home: "मुख्यपृष्ठ",
    currentPage: "आमचा प्रभाव",

    heading1: "आमचा प्रभाव",
    heading2: "आणि उपक्रम",

    subtitle1: "प्रत्येक संधीतून घडते",
    subtitle2: "परिवर्तनाची नवी कहाणी.",

    description:
      "समुदाय संपर्क, कौशल्य विकास आणि रोजगाराभिमुख उपक्रमांच्या माध्यमातून सक्षम फाउंडेशन युवक व महिलांना कशाप्रकारे सहाय्य करते, हे जाणून घ्या.",
  },
};

export default function ImpactHero() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="impact-hero"
      aria-labelledby="impact-hero-heading"
      className="relative isolate flex min-h-[340px] items-center overflow-hidden bg-[#061B50] sm:min-h-[400px] lg:min-h-[460px] xl:min-h-[490px]"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=85"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* DARK NAVY OVERLAY */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061B50]/95 via-[#061B50]/85 to-[#061B50]/60"
      />

      {/* HERO CONTENT */}
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="max-w-4xl">

          {/* BREADCRUMB */}
          <nav
            aria-label={t.breadcrumbLabel}
            className="mb-6"
          >
            <ol className="flex flex-wrap items-center gap-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
                >
                  <Home
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                  {t.home}
                </Link>
              </li>

              <li>
                <ChevronRight
                  className="h-4 w-4 text-orange-400"
                  aria-hidden="true"
                />
              </li>

              <li
                aria-current="page"
                className="font-semibold text-orange-300"
              >
                {t.currentPage}
              </li>
            </ol>
          </nav>

          {/* MAIN HEADING */}
          <h1
            id="impact-hero-heading"
            className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[56px]"
          >
            {t.heading1}{" "}

            <span className="text-orange-400">
              {t.heading2}
            </span>
          </h1>

          {/* SUBTITLE */}
          <p className="mt-5 text-base font-semibold leading-relaxed text-white sm:text-lg lg:text-xl">
            {t.subtitle1}{" "}

            <span className="text-orange-300">
              {t.subtitle2}
            </span>
          </p>

          {/* DESCRIPTION */}
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
            {t.description}
          </p>

        </div>
      </div>

      {/* BOTTOM TRICOLOR ACCENT */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 flex h-1 w-full"
      >
        <span className="w-1/3 bg-orange-500" />
        <span className="w-1/3 bg-white/80" />
        <span className="w-1/3 bg-green-600" />
      </div>
    </section>
  );
}

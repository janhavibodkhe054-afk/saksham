
import React from "react";
import { Home, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    home: "Home",
    about: "About Us",

    heading1: "About",
    heading2: "Saksham Foundation",

    subtitle1: "Empowering Youth. Uplifting Women.",
    subtitle2: "Transforming Communities.",

    description:
      "Empowering communities across Pune through skill development, vocational education and sustainable livelihood opportunities.",
  },

  mr: {
    home: "मुख्यपृष्ठ",
    about: "आमच्याबद्दल",

    heading1: "आमची ओळख —",
    heading2: "सक्षम फाउंडेशन",

    subtitle1: "युवकांचे सक्षमीकरण. महिलांची प्रगती.",
    subtitle2: "समाजात सकारात्मक परिवर्तन.",

    description:
      "कौशल्य विकास, व्यावसायिक शिक्षण आणि शाश्वत उपजीविकेच्या संधींद्वारे पुणे आणि परिसरातील समुदायांच्या सक्षमीकरणासाठी आम्ही कार्यरत आहोत.",
  },
};

export default function AboutHeroSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="about-hero"
      aria-labelledby="about-page-title"
      className="relative isolate flex min-h-[380px] items-center overflow-hidden bg-[#061B50] sm:min-h-[440px] lg:min-h-[500px] xl:min-h-[540px]"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="/g2.jpeg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          sizes="100vw"
          className="h-full w-full object-cover object-center"
        />

        {/* HIGH CONTRAST OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061B50]/95 via-[#061B50]/85 to-[#061B50]/55" />

        {/* MOBILE CONTRAST */}
        <div className="absolute inset-0 bg-[#061B50]/15 sm:bg-transparent" />
      </div>

      {/* DECORATIVE ACCENTS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
      >
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/[0.04] sm:h-80 sm:w-80" />

        <div className="absolute bottom-0 left-0 flex h-1 w-full">
          <div className="w-1/3 bg-orange-500" />
          <div className="w-1/3 bg-green-600" />
          <div className="w-1/3 bg-blue-600" />
        </div>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="max-w-4xl">

          {/* BREADCRUMB NAVIGATION */}
          <nav
            aria-label={
              language === "mr"
                ? "पृष्ठ मार्गदर्शन"
                : "Breadcrumb"
            }
            className="mb-7 flex flex-wrap items-center gap-2 text-xs font-medium text-white/85 sm:mb-9 sm:text-sm"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-orange-300 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
            >
              <Home className="h-4 w-4" aria-hidden="true" />
              {t.home}
            </Link>

            <ChevronRight
              className="h-4 w-4 text-orange-400"
              aria-hidden="true"
            />

            <span
              aria-current="page"
              className="font-semibold text-orange-300"
            >
              {t.about}
            </span>
          </nav>

          {/* MAIN HEADING */}
          <h1
            id="about-page-title"
            className="max-w-4xl text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-[56px]"
          >
            {t.heading1}{" "}
            <span className="text-orange-400">
              {t.heading2}
            </span>
          </h1>

          {/* SUBTITLE */}
          <p className="mt-5 max-w-2xl text-base font-semibold leading-relaxed text-white sm:mt-6 sm:text-lg lg:text-xl">
            {t.subtitle1}

            <span className="block text-orange-300">
              {t.subtitle2}
            </span>
          </p>

          {/* DESCRIPTION */}
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-100 sm:text-base">
            {t.description}
          </p>

        </div>
      </div>
    </section>
  );
}

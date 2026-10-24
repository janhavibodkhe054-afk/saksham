
import React from "react";
import {
  Home,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    breadcrumbLabel: "Breadcrumb",
    home: "Home",
    currentPage: "Our Programs",

    heading1: "Skill Development",
    heading2: "Programs",

    subtitle1: "Practical Learning. Professional Skills.",
    subtitle2: "Better Opportunities.",

    description:
      "Explore Saksham Foundation's healthcare, digital and vocational skill development initiatives designed to improve employability and create sustainable livelihood opportunities.",

    button: "Explore Our Programs",
  },

  mr: {
    breadcrumbLabel: "पृष्ठ मार्गदर्शन",
    home: "मुख्यपृष्ठ",
    currentPage: "आमचे प्रशिक्षण कार्यक्रम",

    heading1: "कौशल्य विकास",
    heading2: "प्रशिक्षण कार्यक्रम",

    subtitle1: "प्रात्यक्षिक शिक्षण. व्यावसायिक कौशल्ये.",
    subtitle2: "अधिक चांगल्या संधी.",

    description:
      "रोजगारक्षमता वाढवण्यासाठी आणि शाश्वत उपजीविकेच्या संधी निर्माण करण्याच्या उद्देशाने सक्षम फाउंडेशनचे आरोग्यसेवा, डिजिटल आणि व्यावसायिक कौशल्य विकास उपक्रम जाणून घ्या.",

    button: "आमचे प्रशिक्षण कार्यक्रम पाहा",
  },
};

export default function ProgramsHero() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const scrollToPrograms = (event) => {
    const target = document.getElementById("programs");

    if (!target) return;

    event.preventDefault();

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="programs-hero"
      aria-labelledby="programs-hero-title"
      className="relative isolate flex min-h-[350px] items-center overflow-hidden bg-[#061B50] sm:min-h-[420px] lg:min-h-[470px] xl:min-h-[500px]"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/c2.jpeg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-top"
        />
      </div>

      {/* NAVY OVERLAY */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061B50]/95 via-[#061B50]/85 to-[#061B50]/55"
      />

      {/* HERO CONTENT */}
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="max-w-5xl">

          {/* BREADCRUMB */}
          <nav
            aria-label={t.breadcrumbLabel}
            className="mb-6"
          >
            <ol className="flex flex-wrap items-center gap-2 text-sm">

              {/* HOME LINK */}
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

              {/* ARROW */}
              <li>
                <ChevronRight
                  className="h-4 w-4 text-orange-400"
                  aria-hidden="true"
                />
              </li>

              {/* CURRENT PAGE */}
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
            id="programs-hero-title"
            className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:whitespace-nowrap lg:text-[56px]"
          >
            {t.heading1}{" "}

            <span className="text-orange-400">
              {t.heading2}
            </span>
          </h1>

          {/* SUBTITLE */}
          <p className="mt-5 text-base font-semibold leading-relaxed text-white sm:text-lg lg:text-xl">
            {t.subtitle1}

            <span className="text-orange-300">
              {" "}{t.subtitle2}
            </span>
          </p>

          {/* DESCRIPTION */}
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
            {t.description}
          </p>

          {/* EXPLORE PROGRAMS BUTTON */}
          <a
            href="#programs"
            onClick={scrollToPrograms}
            className="group mt-7 inline-flex items-center gap-2 border-b-2 border-orange-400 pb-1.5 text-sm font-bold text-white transition-colors hover:text-orange-300"
          >
            {t.button}

            <ArrowRight
              className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>

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

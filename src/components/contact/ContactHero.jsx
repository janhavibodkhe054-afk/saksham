
import React from "react";
import { Home, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    breadcrumbLabel: "Breadcrumb",
    home: "Home",
    contact: "Contact Us",
    heading1: "Contact",
    heading2: "Us",
    description:
      "Let's connect to create opportunities and make a meaningful difference together.",
  },

  mr: {
    breadcrumbLabel: "पृष्ठ मार्गदर्शन",
    home: "मुख्यपृष्ठ",
    contact: "संपर्क साधा",
    heading1: "आमच्याशी",
    heading2: "संपर्क साधा",
    description:
      "नवीन संधी निर्माण करण्यासाठी आणि समाजात सकारात्मक परिवर्तन घडवण्यासाठी आमच्याशी जोडले जा.",
  },
};

export default function ContactHero() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="contact-hero"
      aria-labelledby="contact-hero-title"
      className="relative isolate flex min-h-[300px] items-center overflow-hidden bg-[#061B50] sm:min-h-[350px] lg:min-h-[400px]"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/contact.avif"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* NAVY OVERLAY */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061B50]/95 via-[#061B50]/85 to-[#061B50]/60"
      />

      {/* CONTENT */}
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="max-w-3xl">

          {/* BREADCRUMB */}
          <nav
            aria-label={t.breadcrumbLabel}
            className="mb-5"
          >
            <ol className="flex items-center gap-2 text-sm">
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
                {t.contact}
              </li>
            </ol>
          </nav>

          {/* HEADING */}
          <h1
            id="contact-hero-title"
            className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {t.heading1}{" "}
            <span className="text-orange-400">
              {t.heading2}
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
            {t.description}
          </p>
        </div>
      </div>

      {/* BOTTOM ACCENT */}
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

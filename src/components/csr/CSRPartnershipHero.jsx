
import React from "react";
import { Home, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    breadcrumbLabel: "Breadcrumb",
    home: "Home",
    csr: "CSR & Partnerships",

    heading1: "Partner With Us to Create",
    heading2: "Sustainable Impact",

    subtitle1: "Collaborative Action. Meaningful Skills.",
    subtitle2: "Stronger Communities.",

    description:
      "Saksham Foundation works towards implementing employment-oriented skill development initiatives through strategic collaborations with corporate organizations, healthcare institutions, educational partners and community stakeholders.",
  },

  mr: {
    breadcrumbLabel: "पृष्ठ मार्गदर्शन",
    home: "मुख्यपृष्ठ",
    csr: "CSR आणि भागीदारी",

    heading1: "आमच्यासोबत भागीदारी करा",
    heading2: "शाश्वत परिवर्तन घडवा",

    subtitle1: "एकत्रित प्रयत्न. रोजगाराभिमुख कौशल्ये.",
    subtitle2: "अधिक सक्षम समुदाय.",

    description:
      "सक्षम फाउंडेशन कॉर्पोरेट संस्था, आरोग्यसेवा संस्था, शैक्षणिक भागीदार आणि समुदायातील विविध घटकांच्या सहकार्याने रोजगाराभिमुख कौशल्य विकास उपक्रमांची अंमलबजावणी करण्यासाठी कार्यरत आहे.",
  },
};

export default function CSRPartnershipHero() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="csr-hero"
      aria-labelledby="csr-hero-heading"
      className="relative isolate flex min-h-[380px] items-center overflow-hidden bg-[#061B50] sm:min-h-[430px] lg:min-h-[480px] xl:min-h-[510px]"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/g42.jpeg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* NAVY BLUE OVERLAY */}
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
                {t.csr}
              </li>
            </ol>
          </nav>

          {/* MAIN HEADING */}
          <h1
            id="csr-hero-heading"
            className="max-w-5xl text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[54px]"
          >
            {t.heading1}

            <span className="mt-1 block text-orange-400">
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
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/80 sm:text-base">
            {t.description}
          </p>
        </div>
      </div>

      {/* BOTTOM ACCENT LINE */}
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

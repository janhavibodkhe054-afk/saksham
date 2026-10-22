
import React, { useState } from "react";
import {
  Sparkles,
  Users,
  HeartPulse,
  Laptop,
  Briefcase,
  Globe2,
  ArrowUpRight,
  MoveUpRight,
  HeartHandshake,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

// ENGLISH AND MARATHI CONTENT
const translations = {
  en: {
    badge: "WHAT WE DO",
    heading1: "Building Skills.",
    heading2: "Creating Opportunities.",

    description:
      "Empowering underprivileged youth and women through structured initiatives and livelihood training programs.",

    focusAreas: [
      {
        title: "Skill Development",
        description:
          "Industry-oriented training that prepares youth for employment.",
      },
      {
        title: "Women Empowerment",
        description:
          "Supporting women through education and financial independence.",
      },
      {
        title: "Healthcare Training",
        description:
          "Practical healthcare skills and hospital-based training.",
      },
      {
        title: "Digital Education",
        description:
          "Computer literacy and technology-enabled learning opportunities.",
      },
      {
        title: "Livelihood Support",
        description:
          "Career counselling, placement assistance and employment readiness.",
      },
      {
        title: "Community Development",
        description:
          "Creating awareness and opportunities for underserved communities.",
      },
    ],

    imageBadge: "SAKSHAM FOUNDATION",
    commitment: "Our Commitment",

    imageHeading1: "Empowering Lives.",
    imageHeading2: "Transforming Futures.",

    imageDescription:
      "Creating meaningful opportunities through education, practical skills and sustainable livelihood initiatives.",

    bottomHeading: "Skills that make a difference",
    bottomDescription: "Education • Empowerment • Employment",
    button: "Explore Programs",
    showArea: "Show",
  },

  mr: {
    badge: "आमचे कार्य",
    heading1: "कौशल्यांची निर्मिती.",
    heading2: "संधींची उपलब्धता.",

    description:
      "वंचित युवक आणि महिलांना कौशल्य विकास, प्रशिक्षण आणि रोजगाराभिमुख उपक्रमांच्या माध्यमातून स्वावलंबी बनवण्यासाठी आम्ही कार्यरत आहोत.",

    focusAreas: [
      {
        title: "कौशल्य विकास",
        description:
          "युवकांना रोजगारासाठी तयार करणारे उद्योगाभिमुख कौशल्य प्रशिक्षण.",
      },
      {
        title: "महिला सक्षमीकरण",
        description:
          "शिक्षण, कौशल्य विकास आणि आर्थिक स्वावलंबनासाठी महिलांना सहाय्य.",
      },
      {
        title: "आरोग्यसेवा प्रशिक्षण",
        description:
          "आरोग्यसेवा क्षेत्रातील प्रात्यक्षिक कौशल्ये आणि रुग्णालयातील प्रशिक्षण.",
      },
      {
        title: "डिजिटल शिक्षण",
        description:
          "संगणक साक्षरता आणि तंत्रज्ञानाधारित शिक्षणाच्या संधी.",
      },
      {
        title: "उपजीविका व रोजगार सहाय्य",
        description:
          "करिअर मार्गदर्शन, प्लेसमेंट सहाय्य आणि रोजगारासाठी तयारी.",
      },
      {
        title: "समुदाय विकास",
        description:
          "वंचित समुदायांमध्ये जनजागृती करून विकासाच्या संधी उपलब्ध करून देणे.",
      },
    ],

    imageBadge: "सक्षम फाउंडेशन",
    commitment: "आमची बांधिलकी",

    imageHeading1: "जीवन सक्षम करूया.",
    imageHeading2: "भविष्य घडवूया.",

    imageDescription:
      "शिक्षण, व्यावहारिक कौशल्ये आणि शाश्वत उपजीविकेच्या उपक्रमांद्वारे अर्थपूर्ण संधी निर्माण करण्याचा आमचा प्रयत्न आहे.",

    bottomHeading: "जीवनात सकारात्मक बदल घडवणारी कौशल्ये",
    bottomDescription: "शिक्षण • सक्षमीकरण • रोजगार",
    button: "आमचे प्रशिक्षण पाहा",
    showArea: "पाहा",
  },
};

// DESIGN CONFIGURATION
// Images, icons and colors stay the same for both languages.
const focusAreaStyles = [
  {
    icon: Sparkles,
    color: "#F97316",
    soft: "#FFF3E8",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1100&q=85",
  },
  {
    icon: Users,
    color: "#2563EB",
    soft: "#EFF6FF",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1100&q=85",
  },
  {
    icon: HeartPulse,
    color: "#059669",
    soft: "#ECFDF5",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=85",
  },
  {
    icon: Laptop,
    color: "#0891B2",
    soft: "#ECFEFF",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=85",
  },
  {
    icon: Briefcase,
    color: "#7C3AED",
    soft: "#F5F3FF",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85",
  },
  {
    icon: Globe2,
    color: "#E11D48",
    soft: "#FFF1F2",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1100&q=85",
  },
];

export default function KeyFocusAreasSection() {
  const [active, setActive] = useState(0);

  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="key-focus-areas"
      aria-labelledby="focus-areas-heading"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      {/* SUBTLE BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-50/70 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-orange-50/60 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="mb-12 text-center lg:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-900 shadow-sm sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            {t.badge}
          </div>

          <h2
            id="focus-areas-heading"
            className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            {t.heading1}{" "}
            <span className="text-orange-600">
              {t.heading2}
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {t.description}
          </p>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">

          {/* LEFT - INTERACTIVE IMAGE SHOWCASE */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 overflow-hidden rounded-[28px] bg-[#061B50] lg:h-[570px]">

              <div className="relative h-[420px] lg:h-full">

                {/* CHANGE IMAGE ON CARD HOVER / CLICK */}
                {focusAreaStyles.map((item, index) => (
                  <img
                    key={index}
                    src={item.image}
                    alt={t.focusAreas[index].title}
                    loading={index === 0 ? "eager" : "lazy"}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${
                      active === index
                        ? "scale-100 opacity-100"
                        : "scale-110 opacity-0"
                    }`}
                  />
                ))}

                {/* IMAGE GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061B50] via-[#061B50]/25 to-transparent" />

                {/* IMAGE TOP BADGE */}
                <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-orange-400" />
                  {t.imageBadge}
                </div>

                {/* IMAGE BOTTOM CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-white backdrop-blur-md">
                    <HeartHandshake className="h-6 w-6" />
                  </div>

                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-300">
                    {t.commitment}
                  </p>

                  <h3 className="mb-3 text-2xl font-bold leading-snug text-white sm:text-3xl">
                    {t.imageHeading1}
                    <br />
                    {t.imageHeading2}
                  </h3>

                  <p className="max-w-sm text-sm leading-relaxed text-white/80">
                    {t.imageDescription}
                  </p>

                  {/* IMAGE INDICATORS */}
                  <div className="mt-6 flex items-center gap-2">
                    {focusAreaStyles.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        aria-label={`${t.showArea} ${t.focusAreas[index].title}`}
                        aria-pressed={active === index}
                        onClick={() => setActive(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          active === index
                            ? "w-9 bg-orange-400"
                            : "w-3 bg-white/50 hover:bg-white"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - FOCUS AREA CARDS */}
          <div className="lg:col-span-7">
            <div className="grid gap-3 sm:grid-cols-2">

              {focusAreaStyles.map((item, index) => {
                const Icon = item.icon;
                const isActive = active === index;

                return (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    aria-pressed={isActive}
                    className={`group relative min-h-[172px] overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 sm:min-h-[180px] ${
                      isActive
                        ? "-translate-y-1 border-transparent bg-white shadow-[0_12px_38px_rgba(6,27,80,0.12)]"
                        : "border-slate-200 bg-white/90 shadow-sm hover:border-slate-300 hover:shadow-md"
                    }`}
                  >
                    {/* ACTIVE TOP BORDER */}
                    <div
                      className="absolute inset-x-0 top-0 h-[3px] transition-opacity duration-300"
                      style={{
                        backgroundColor: item.color,
                        opacity: isActive ? 1 : 0,
                      }}
                    />

                    {/* DECORATIVE CORNER */}
                    <div
                      className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full transition-transform duration-500 ${
                        isActive ? "scale-100" : "scale-0"
                      }`}
                      style={{ backgroundColor: item.soft }}
                    />

                    <div className="relative z-10">

                      {/* ICON AND INDEX */}
                      <div className="mb-4 flex items-center justify-between">

                        <div
                          className="flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105"
                          style={{
                            backgroundColor: isActive
                              ? item.color
                              : item.soft,
                            color: isActive
                              ? "#FFFFFF"
                              : item.color,
                          }}
                        >
                          <Icon
                            className="h-5 w-5"
                            strokeWidth={1.9}
                          />
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-slate-400">
                            0{index + 1}
                          </span>

                          <MoveUpRight
                            className={`h-4 w-4 transition-all duration-300 ${
                              isActive
                                ? "translate-x-0.5 -translate-y-0.5 text-orange-600"
                                : "text-slate-300"
                            }`}
                          />
                        </div>
                      </div>

                      {/* CARD TITLE */}
                      <h3
                        className={`text-base font-bold transition-colors ${
                          isActive
                            ? "text-blue-900"
                            : "text-slate-900"
                        }`}
                      >
                        {t.focusAreas[index].title}
                      </h3>

                      {/* CARD DESCRIPTION */}
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                        {t.focusAreas[index].description}
                      </p>

                    </div>
                  </button>
                );
              })}
            </div>

            {/* BOTTOM MESSAGE STRIP */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-blue-50/70 px-5 py-4">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-900 shadow-sm">
                  <HeartHandshake className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-bold text-blue-950">
                    {t.bottomHeading}
                  </p>

                  <p className="text-xs text-slate-600">
                    {t.bottomDescription}
                  </p>
                </div>
              </div>

              <Link
                to="/programs"
                className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 transition-colors hover:text-orange-700"
              >
                {t.button}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


import React, {
  useEffect,
  useRef,
  useState,
} from "react";

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

// ==========================================
// ENGLISH + MARATHI TRANSLATIONS
// ==========================================

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

// ==========================================
// DESIGN CONFIGURATION
// ==========================================

const focusAreaStyles = [
  {
    icon: Sparkles,
    color: "#F97316",
    soft: "#FFF3E8",
    image:
      "/skill.png",
  },
  {
    icon: Users,
    color: "#2563EB",
    soft: "#EFF6FF",
    image:
      "/women.png",
  },
  {
    icon: HeartPulse,
    color: "#059669",
    soft: "#ECFDF5",
    image:
      "/healthcare.png",
  },
  {
    icon: Laptop,
    color: "#0891B2",
    soft: "#ECFEFF",
    image:
      "/digital.png",
  },
  {
    icon: Briefcase,
    color: "#7C3AED",
    soft: "#F5F3FF",
    image:
      "/livelihood.png",
  },
  {
    icon: Globe2,
    color: "#E11D48",
    soft: "#FFF1F2",
    image:
      "/education.png",
  },
];

// ==========================================
// SCROLL REVEAL — SAME FILE
// ==========================================

function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 850,
  className = "",
}) {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reducedMotion ||
      !("IntersectionObserver" in window)
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px 30px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const transforms = {
    up: "translate3d(0, 40px, 0)",
    left: "translate3d(-45px, 0, 0)",
    right: "translate3d(45px, 0, 0)",
    zoom: "scale(0.94)",
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate3d(0, 0, 0) scale(1)"
          : transforms[direction] || transforms.up,
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction:
          "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </div>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function KeyFocusAreasSection() {
  const [active, setActive] = useState(0);
  const { language } = useLanguage();

  const t = translations[language] || translations.en;

  const sectionRef = useRef(null);
  const [sectionVisible, setSectionVisible] =
    useState(false);

  // ========================================
  // SECTION ENTRANCE OBSERVER
  // ========================================

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches ||
      !("IntersectionObserver" in window)
    ) {
      setSectionVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.06 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="key-focus-areas"
      aria-labelledby="focus-areas-heading"
      className={`saksham-focus-section relative overflow-hidden bg-white py-20 lg:py-28 ${
        sectionVisible ? "saksham-focus-visible" : ""
      }`}
    >
      {/* ================================= */}
      {/* ANIMATED BACKGROUND */}
      {/* ================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="saksham-focus-bg-blue absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-50/70 blur-3xl" />

        <div className="saksham-focus-bg-orange absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-orange-50/60 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================================= */}
        {/* SECTION HEADER */}
        {/* ================================= */}

        <div className="mb-12 text-center lg:mb-16">

          {/* BADGE */}
          <Reveal direction="up" delay={0}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-900 shadow-sm sm:text-sm">

              <span className="saksham-focus-badge-dot h-2 w-2 rounded-full bg-orange-500" />

              {t.badge}
            </div>
          </Reveal>

          {/* HEADING */}
          <Reveal direction="up" delay={100} duration={1050}>
            <h2
              id="focus-areas-heading"
              className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              {t.heading1}{" "}

              <span className="text-orange-600">
                {t.heading2}
              </span>
            </h2>
          </Reveal>

          {/* DESCRIPTION */}
          <Reveal direction="up" delay={200}>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {t.description}
            </p>
          </Reveal>

        </div>

        {/* ================================= */}
        {/* MAIN GRID */}
        {/* ================================= */}

        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">

          {/* ================================= */}
          {/* LEFT INTERACTIVE IMAGE SHOWCASE */}
          {/* ================================= */}

          <div className="lg:col-span-5">

            <div className="saksham-focus-image-entrance sticky top-24 overflow-hidden rounded-[28px] bg-[#061B50] lg:h-[570px]">

              <div className="saksham-focus-image-frame relative h-[420px] lg:h-full">

                {/* IMAGES WITH CROSSFADE + ZOOM */}
                {focusAreaStyles.map((item, index) => (
                  <img
                    key={index}
                    src={item.image}
                    alt={t.focusAreas[index].title}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className={`saksham-focus-photo absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${
                      active === index
                        ? "saksham-focus-photo-active scale-100 opacity-100"
                        : "pointer-events-none scale-110 opacity-0"
                    }`}
                  />
                ))}

                {/* IMAGE GRADIENT */}
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#061B50] via-[#061B50]/25 to-transparent" />

                {/* MIRROR SHINE ON HOVER */}
                <div
                  aria-hidden="true"
                  className="saksham-focus-mirror pointer-events-none absolute inset-0 z-20"
                />

                {/* SUBTLE CURSOR LIGHT */}
                <div
                  aria-hidden="true"
                  className="saksham-focus-light pointer-events-none absolute inset-0 z-20"
                />

                {/* IMAGE TOP BADGE */}
                <div className="absolute left-6 top-6 z-30 flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">

                  <span className="saksham-focus-badge-dot h-2 w-2 rounded-full bg-orange-400" />

                  {t.imageBadge}
                </div>

                {/* IMAGE BOTTOM CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 z-30 p-7 sm:p-8">

                  <div className="saksham-focus-heart-icon mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-white backdrop-blur-md">
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

          {/* ================================= */}
          {/* RIGHT FOCUS CARDS */}
          {/* ================================= */}

          <div className="lg:col-span-7">

            <div className="grid gap-3 sm:grid-cols-2">

              {focusAreaStyles.map((item, index) => {
                const Icon = item.icon;
                const isActive = active === index;

                return (
                  <Reveal
                    key={index}
                    direction="up"
                    duration={850}
                    delay={(index % 2) * 100}
                    className="h-full"
                  >
                    <button
                      type="button"
                      onClick={() => setActive(index)}
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      aria-pressed={isActive}
                      className={`saksham-focus-card group relative h-full min-h-[172px] w-full overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 sm:min-h-[180px] ${
                        isActive
                          ? "-translate-y-1 border-transparent bg-white shadow-[0_12px_38px_rgba(6,27,80,0.12)]"
                          : "border-slate-200 bg-white/90 shadow-sm hover:border-slate-300 hover:shadow-md"
                      }`}
                    >
                      {/* CARD MIRROR SHINE */}
                      <span
                        aria-hidden="true"
                        className="saksham-focus-card-shine pointer-events-none absolute inset-0 z-20"
                      />

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
                          isActive
                            ? "scale-100"
                            : "scale-0"
                        }`}
                        style={{
                          backgroundColor: item.soft,
                        }}
                      />

                      <div className="relative z-10">

                        {/* ICON + INDEX */}
                        <div className="mb-4 flex items-center justify-between">

                          {/* ICON */}
                          <div
                            className="saksham-focus-icon flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
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

                          {/* NUMBER + ARROW */}
                          <div className="flex items-center gap-2">

                            <span className="text-xs font-semibold text-slate-400">
                              {language === "mr"
                                ? `०${"१२३४५६"[index]}`
                                : `0${index + 1}`}
                            </span>

                            <MoveUpRight
                              className={`h-4 w-4 transition-all duration-300 ${
                                isActive
                                  ? "translate-x-0.5 -translate-y-0.5 text-orange-600"
                                  : "text-slate-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              }`}
                            />
                          </div>

                        </div>

                        {/* TITLE */}
                        <h3
                          className={`text-base font-bold transition-colors duration-300 ${
                            isActive
                              ? "text-blue-900"
                              : "text-slate-900"
                          }`}
                        >
                          {t.focusAreas[index].title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                          {t.focusAreas[index].description}
                        </p>

                      </div>
                    </button>
                  </Reveal>
                );
              })}

            </div>

            {/* ================================= */}
            {/* BOTTOM MESSAGE STRIP */}
            {/* ================================= */}

            <Reveal direction="up" delay={120}>
              <div className="saksham-focus-bottom-strip mt-5 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-blue-50/70 px-5 py-4">

                <div className="flex items-center gap-3">

                  <div className="saksham-focus-heart-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-900 shadow-sm">
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

                {/* CTA */}
                <Link
                  to="/programs"
                  className="saksham-focus-cta group relative inline-flex items-center gap-2 overflow-hidden rounded-lg px-1 py-1 text-xs font-bold text-orange-600 transition-colors hover:text-orange-700"
                >
                  <span>{t.button}</span>

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

                  {/* ANIMATED UNDERLINE */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-full"
                  />
                </Link>
              </div>
            </Reveal>

          </div>
        </div>
      </div>

      {/* ================================= */}
      {/* ALL ANIMATIONS IN THIS FILE */}
      {/* ================================= */}

      <style>{`
        /* ============================
           BACKGROUND FLOAT
        ============================ */

        @keyframes focusBgBlue {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-40px, 25px);
          }
        }

        @keyframes focusBgOrange {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(40px, -25px);
          }
        }

        #key-focus-areas .saksham-focus-bg-blue {
          animation: focusBgBlue 12s ease-in-out infinite;
        }

        #key-focus-areas .saksham-focus-bg-orange {
          animation: focusBgOrange 14s ease-in-out infinite;
        }

        /* ============================
           SECTION IMAGE ENTRANCE
        ============================ */

        @keyframes focusImageEnter {
          from {
            opacity: 0;
            transform: translateX(-50px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        #key-focus-areas .saksham-focus-image-entrance {
          opacity: 0;
        }

        #key-focus-areas.saksham-focus-visible
        .saksham-focus-image-entrance {
          animation: focusImageEnter 1050ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* ============================
           ACTIVE IMAGE SLOW ZOOM
        ============================ */

        @keyframes focusImageSlowZoom {
          from {
            transform: scale(1.1);
          }
          to {
            transform: scale(1);
          }
        }

        #key-focus-areas .saksham-focus-photo-active {
          animation: focusImageSlowZoom 5s ease-out both;
        }

        /* ============================
           IMAGE MIRROR SHINE
        ============================ */

        .saksham-focus-mirror {
          background: linear-gradient(
            115deg,
            transparent 22%,
            rgba(255,255,255,0.03) 35%,
            rgba(255,255,255,0.28) 46%,
            rgba(255,255,255,0.45) 50%,
            rgba(255,255,255,0.15) 55%,
            transparent 70%
          );

          transform: translateX(-170%);
          opacity: 0;
        }

        #key-focus-areas .saksham-focus-image-frame:hover
        .saksham-focus-mirror {
          animation: focusMirrorShine 1050ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes focusMirrorShine {
          0% {
            opacity: 0;
            transform: translateX(-170%);
          }

          25% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translateX(170%);
          }
        }

        /* ============================
           IMAGE CURSOR LIGHT
        ============================ */

        .saksham-focus-light {
          background: radial-gradient(
            380px circle at 75% 25%,
            rgba(255,255,255,0.12),
            transparent 70%
          );
          opacity: 0;
          transition: opacity 450ms ease;
        }

        #key-focus-areas .saksham-focus-image-frame:hover
        .saksham-focus-light {
          opacity: 1;
        }

        /* ============================
           CARD MIRROR SHINE
        ============================ */

        .saksham-focus-card-shine {
          background: linear-gradient(
            110deg,
            transparent 25%,
            rgba(255,255,255,0.08) 38%,
            rgba(255,255,255,0.75) 50%,
            rgba(255,255,255,0.08) 62%,
            transparent 75%
          );
          transform: translateX(-150%);
          opacity: 0;
        }

        #key-focus-areas .saksham-focus-card:hover
        .saksham-focus-card-shine {
          animation: focusCardShine 850ms ease-out both;
        }

        @keyframes focusCardShine {
          0% {
            opacity: 0;
            transform: translateX(-150%);
          }

          25% {
            opacity: 0.8;
          }

          100% {
            opacity: 0;
            transform: translateX(150%);
          }
        }

        /* ============================
           ICON MOTION
        ============================ */

        #key-focus-areas .saksham-focus-card:hover
        .saksham-focus-icon svg {
          animation: focusIconBounce 550ms ease-out;
        }

        @keyframes focusIconBounce {
          0% {
            transform: translateY(0) rotate(0);
          }
          45% {
            transform: translateY(-4px) rotate(-8deg);
          }
          100% {
            transform: translateY(0) rotate(0);
          }
        }

        /* ============================
           HEART ICON FLOAT
        ============================ */

        @keyframes focusHeartFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        #key-focus-areas .saksham-focus-heart-icon {
          animation: focusHeartFloat 4s ease-in-out infinite;
        }

        /* ============================
           BADGE DOT PULSE
        ============================ */

        @keyframes focusDotPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.4);
            opacity: 0.65;
          }
        }

        #key-focus-areas .saksham-focus-badge-dot {
          animation: focusDotPulse 2.5s ease-in-out infinite;
        }

        /* ============================
           BOTTOM STRIP HOVER
        ============================ */

        #key-focus-areas .saksham-focus-bottom-strip {
          transition: box-shadow 400ms ease,
            border-color 400ms ease;
        }

        #key-focus-areas .saksham-focus-bottom-strip:hover {
          box-shadow: 0 12px 35px rgba(6,27,80,0.07);
          border-color: #bfdbfe;
        }

        /* ============================
           REDUCED MOTION
        ============================ */

        @media (prefers-reduced-motion: reduce) {
          #key-focus-areas .saksham-focus-bg-blue,
          #key-focus-areas .saksham-focus-bg-orange,
          #key-focus-areas .saksham-focus-image-entrance,
          #key-focus-areas .saksham-focus-photo-active,
          #key-focus-areas .saksham-focus-card-shine,
          #key-focus-areas .saksham-focus-mirror,
          #key-focus-areas .saksham-focus-heart-icon,
          #key-focus-areas .saksham-focus-badge-dot {
            animation: none !important;
          }

          #key-focus-areas .saksham-focus-image-entrance {
            opacity: 1 !important;
            transform: none !important;
          }

          #key-focus-areas .saksham-focus-light {
            display: none !important;
          }
        }
      `}</style>

    </section>
  );
}


import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  Sparkles,
  Users,
  HeartPulse,
  Laptop,
  Briefcase,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ==========================================
// ENGLISH + MARATHI TRANSLATIONS
// ==========================================

const translations = {
  en: {
    badge: "WHO WE ARE",

    heading1: "Empowering Communities Through",
    heading2: "Education & Skills",

    description1:
      "Saksham Foundation is a Pune-based non-profit organization dedicated to empowering underprivileged youth and women through skill development, vocational education, healthcare training and sustainable livelihood opportunities.",

    description2:
      "Our foundation works to bridge the gap between education and employment by providing industry-relevant training, practical experience, career guidance and placement assistance.",

    quote:
      "We believe that every individual deserves an opportunity to learn, grow and become financially independent, regardless of their social or economic background.",

    button: "Discover Our Story",

    focusHeading: "Our Focus Areas",

    focusDescription:
      "Core pillars driving our social impact in Pune and beyond.",

    focusAreas: [
      "Skill Development & Vocational Training",
      "Women & Youth Empowerment",
      "Healthcare & Paramedical Training",
      "Digital Education & Computer Literacy",
      "Employment & Livelihood Support",
    ],

    location: "Based in Pune, Maharashtra",
    impact: "Impact Driven",
  },

  mr: {
    badge: "आमची ओळख",

    heading1: "शिक्षण आणि कौशल्यांच्या माध्यमातून",
    heading2: "समाजाचे सक्षमीकरण",

    description1:
      "सक्षम फाउंडेशन ही पुण्यातील एक ना-नफा संस्था आहे. कौशल्य विकास, व्यावसायिक शिक्षण, आरोग्यसेवा प्रशिक्षण आणि शाश्वत रोजगाराच्या संधींद्वारे वंचित युवक व महिलांचे सक्षमीकरण करण्यासाठी संस्था कार्यरत आहे.",

    description2:
      "उद्योगांच्या गरजांनुसार प्रशिक्षण, प्रत्यक्ष कामाचा अनुभव, करिअर मार्गदर्शन आणि रोजगारासाठी सहाय्य उपलब्ध करून देत शिक्षण आणि रोजगार यांमधील दरी कमी करण्यासाठी आमची संस्था प्रयत्नशील आहे.",

    quote:
      "आमचा विश्वास आहे की सामाजिक किंवा आर्थिक परिस्थिती कोणतीही असो, प्रत्येक व्यक्तीला शिकण्याची, प्रगती करण्याची आणि आर्थिकदृष्ट्या स्वावलंबी होण्याची संधी मिळाली पाहिजे.",

    button: "आमचा प्रवास जाणून घ्या",

    focusHeading: "आमची प्रमुख कार्यक्षेत्रे",

    focusDescription:
      "पुणे आणि परिसरातील सामाजिक परिवर्तनासाठी आमची प्रमुख कार्यक्षेत्रे.",

    focusAreas: [
      "कौशल्य विकास व व्यावसायिक प्रशिक्षण",
      "महिला व युवक सक्षमीकरण",
      "आरोग्यसेवा व पॅरामेडिकल प्रशिक्षण",
      "डिजिटल शिक्षण व संगणक साक्षरता",
      "रोजगार व उपजीविकेसाठी सहाय्य",
    ],

    location: "पुणे, महाराष्ट्र येथे कार्यरत",
    impact: "सामाजिक परिवर्तनासाठी कटिबद्ध",
  },
};

// ==========================================
// FOCUS AREA STYLES
// ==========================================

const focusAreaStyles = [
  {
    icon: Sparkles,
    color: "bg-orange-50 text-orange-600 border-orange-200",
  },
  {
    icon: Users,
    color: "bg-blue-50 text-blue-900 border-blue-200",
  },
  {
    icon: HeartPulse,
    color: "bg-green-50 text-green-700 border-green-200",
  },
  {
    icon: Laptop,
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    icon: Briefcase,
    color: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
];

// ==========================================
// SCROLL REVEAL COMPONENT
// ==========================================

function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 900,
  className = "",
}) {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    setReduceMotion(motionQuery.matches);

    if (
      motionQuery.matches ||
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
        rootMargin: "0px 0px 35px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const transforms = {
    up: "translate3d(0, 45px, 0)",
    down: "translate3d(0, -45px, 0)",
    left: "translate3d(-55px, 0, 0)",
    right: "translate3d(55px, 0, 0)",
    zoom: "scale(0.92)",
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: visible || reduceMotion ? 1 : 0,
        transform:
          visible || reduceMotion
            ? "translate3d(0, 0, 0) scale(1)"
            : transforms[direction] || transforms.up,
        transitionProperty: "opacity, transform",
        transitionDuration: reduceMotion
          ? "0ms"
          : `${duration}ms`,
        transitionDelay: reduceMotion
          ? "0ms"
          : `${delay}ms`,
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

export default function AboutSakshamSection() {
  const { language } = useLanguage();

  const t = translations[language] || translations.en;

  return (
    <section
      id="about-saksham"
      className="relative overflow-hidden border-y border-slate-200/60 bg-slate-50 py-20 lg:py-28"
    >
      {/* ================================= */}
      {/* ANIMATED BACKGROUND DECORATIONS */}
      {/* ================================= */}

      <div
        aria-hidden="true"
        className="saksham-about-bg-blue pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-100/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="saksham-about-bg-orange pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================================= */}
        {/* SECTION BADGE */}
        {/* ================================= */}

        <Reveal direction="left" duration={850}>
          <div className="mb-4 text-left">
            <div className="saksham-about-badge inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-800 sm:text-sm">
              <ShieldCheck className="h-4 w-4 text-orange-600" />
              {t.badge}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* ================================= */}
          {/* LEFT SIDE CONTENT */}
          {/* ================================= */}

          <div className="space-y-6 text-left lg:col-span-6">

            {/* HEADING */}
            <Reveal direction="up" delay={100} duration={1050}>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {t.heading1}{" "}

                <span className="saksham-about-heading-highlight text-blue-900">
                  {t.heading2}
                </span>
              </h2>
            </Reveal>

            {/* DESCRIPTION 1 */}
            <Reveal direction="up" delay={200}>
              <p className="text-base font-normal leading-relaxed text-slate-700 sm:text-lg">
                {t.description1}
              </p>
            </Reveal>

            {/* DESCRIPTION 2 */}
            <Reveal direction="up" delay={300}>
              <p className="text-base leading-relaxed text-slate-600">
                {t.description2}
              </p>
            </Reveal>

            {/* ================================= */}
            {/* ANIMATED QUOTE BOX */}
            {/* ================================= */}

            <Reveal direction="zoom" delay={400}>
              <div className="saksham-about-quote group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(6,27,80,0.10)]">

                {/* HOVER SHINE */}
                <span
                  aria-hidden="true"
                  className="saksham-about-card-shine pointer-events-none absolute inset-0"
                />

                {/* QUOTE */}
                <p className="relative z-10 text-sm font-medium italic leading-relaxed text-slate-800 sm:text-base">
                  "{t.quote}"
                </p>
              </div>
            </Reveal>

            {/* ================================= */}
            {/* ANIMATED CTA BUTTON */}
            {/* ================================= */}

            <Reveal direction="up" delay={480}>
              <div className="pt-2">

                <Link
                  to="/about"
                  className="saksham-about-button group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-blue-900 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-[0_16px_30px_rgba(6,27,80,0.22)]"
                >

                  {/* BUTTON SHINE */}
                  <span
                    aria-hidden="true"
                    className="saksham-about-button-shine pointer-events-none absolute inset-0"
                  />

                  <span className="relative z-10">
                    {t.button}
                  </span>

                  <ArrowRight className="relative z-10 ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />

                </Link>

              </div>
            </Reveal>

          </div>

          {/* ================================= */}
          {/* RIGHT SIDE */}
          {/* ================================= */}

          <div className="lg:col-span-6">

            <Reveal direction="right" delay={150} duration={1050}>

              <div className="saksham-about-focus-panel relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">

                {/* SOFT HOVER LIGHT */}
                <span
                  aria-hidden="true"
                  className="saksham-about-panel-glow pointer-events-none absolute inset-0"
                />

                {/* FOCUS HEADING */}
                <div className="relative z-10 mb-6">

                  <h3 className="text-xl font-bold text-slate-900">
                    {t.focusHeading}
                  </h3>

                  <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
                    {t.focusDescription}
                  </p>

                </div>

                {/* ================================= */}
                {/* ANIMATED FOCUS CARDS */}
                {/* ================================= */}

                <div className="relative z-10 space-y-3.5">

                  {focusAreaStyles.map((area, index) => {
                    const Icon = area.icon;

                    return (
                      <Reveal
                        key={index}
                        direction="right"
                        duration={750}
                        delay={250 + index * 100}
                      >
                        <div className="saksham-about-focus-card group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:bg-white hover:shadow-[0_12px_30px_rgba(6,27,80,0.09)]">

                          {/* CARD SHINE */}
                          <span
                            aria-hidden="true"
                            className="saksham-about-card-shine pointer-events-none absolute inset-0"
                          />

                          {/* ICON */}
                          <div
                            className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-transform duration-500 group-hover:rotate-[-5deg] group-hover:scale-110 ${area.color}`}
                          >
                            <Icon className="h-6 w-6" />
                          </div>

                          {/* TITLE */}
                          <div className="relative z-10 min-w-0 flex-1">
                            <h4 className="text-sm font-semibold text-slate-800 transition-colors duration-300 group-hover:text-blue-900 sm:text-base">
                              {t.focusAreas[index]}
                            </h4>
                          </div>

                          {/* CHECK ICON */}
                          <CheckCircle className="relative z-10 h-5 w-5 shrink-0 text-green-600 opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" />

                        </div>
                      </Reveal>
                    );
                  })}

                </div>

                {/* ================================= */}
                {/* BOTTOM INFO */}
                {/* ================================= */}

                <div className="relative z-10 mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">

                  <span>
                    📍 {t.location}
                  </span>

                  <span className="text-orange-600">
                    {t.impact}
                  </span>

                </div>

              </div>

            </Reveal>

          </div>

        </div>
      </div>

      {/* ================================= */}
      {/* ALL ANIMATIONS IN SAME COMPONENT */}
      {/* ================================= */}

      <style>{`
        /* BACKGROUND FLOAT */

        @keyframes sakshamAboutBlueFloat {
          0%, 100% {
            transform: translateY(-50%) translateX(0);
          }
          50% {
            transform: translateY(-50%) translateX(35px);
          }
        }

        @keyframes sakshamAboutOrangeFloat {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-30px, -20px);
          }
        }

        #about-saksham .saksham-about-bg-blue {
          animation: sakshamAboutBlueFloat 10s ease-in-out infinite;
        }

        #about-saksham .saksham-about-bg-orange {
          animation: sakshamAboutOrangeFloat 12s ease-in-out infinite;
        }

        /* BADGE ICON MOTION */

        @keyframes sakshamAboutBadgeMotion {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        #about-saksham .saksham-about-badge svg {
          animation: sakshamAboutBadgeMotion 3s ease-in-out infinite;
        }

        /* HEADING HIGHLIGHT */

        .saksham-about-heading-highlight {
          background-image: linear-gradient(
            110deg,
            #1e3a8a 0%,
            #1e40af 45%,
            #1e3a8a 100%
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: sakshamAboutHeadingShimmer 7s ease-in-out infinite;
        }

        @keyframes sakshamAboutHeadingShimmer {
          0%, 100% {
            background-position: 100% 0;
          }
          50% {
            background-position: 0 0;
          }
        }

        /* CARD MIRROR SHINE */

        .saksham-about-card-shine {
          background: linear-gradient(
            115deg,
            transparent 25%,
            rgba(255,255,255,0.05) 38%,
            rgba(255,255,255,0.8) 50%,
            rgba(255,255,255,0.05) 62%,
            transparent 75%
          );
          transform: translateX(-150%);
          opacity: 0;
        }

        .saksham-about-focus-card:hover
        .saksham-about-card-shine,
        .saksham-about-quote:hover
        .saksham-about-card-shine {
          animation: sakshamAboutShine 850ms ease-out both;
        }

        @keyframes sakshamAboutShine {
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

        /* PANEL SOFT GLOW */

        .saksham-about-panel-glow {
          background: radial-gradient(
            circle at 100% 0%,
            rgba(219,234,254,0.55),
            transparent 55%
          );
          opacity: 0;
          transition: opacity 600ms ease;
        }

        .saksham-about-focus-panel:hover
        .saksham-about-panel-glow {
          opacity: 1;
        }

        /* CTA BUTTON SHINE */

        .saksham-about-button-shine {
          background: linear-gradient(
            110deg,
            transparent 25%,
            rgba(255,255,255,0.07) 38%,
            rgba(255,255,255,0.4) 50%,
            rgba(255,255,255,0.07) 62%,
            transparent 75%
          );
          transform: translateX(-150%);
          transition: transform 850ms ease;
        }

        .saksham-about-button:hover
        .saksham-about-button-shine {
          transform: translateX(150%);
        }

        /* ACCESSIBILITY */

        @media (prefers-reduced-motion: reduce) {
          #about-saksham .saksham-about-bg-blue,
          #about-saksham .saksham-about-bg-orange,
          #about-saksham .saksham-about-badge svg,
          #about-saksham .saksham-about-heading-highlight,
          #about-saksham .saksham-about-card-shine {
            animation: none !important;
          }

          #about-saksham .saksham-about-button-shine,
          #about-saksham .saksham-about-panel-glow {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

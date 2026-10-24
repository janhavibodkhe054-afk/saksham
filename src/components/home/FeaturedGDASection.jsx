
import React, { useEffect, useRef, useState } from "react";

import {
  ArrowUpRight,
  Check,
  GraduationCap,
  Hospital,
  BriefcaseBusiness,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

// ==========================================
// ENGLISH + MARATHI TRANSLATIONS
// ==========================================

const translations = {
  en: {
    label: "FEATURED PROGRAM",

    heading1: "Start Your Career in Healthcare",
    heading2: "— Absolutely Free!",

    description:
      "General Duty Assistant (GDA) is a structured skill development program designed to prepare eligible candidates for entry-level healthcare support roles through classroom learning and hospital-based practical training.",

    highlightsHeading: "Program Highlights",

    highlights: [
      "Completely Free Training",
      "Age Eligibility: 18–35 Years",
      "Practical Healthcare Skill Development",
      "Hospital On-the-Job Training",
      "Career Guidance & Placement Assistance",
    ],

    button: "Apply for Free GDA Training",
    freeTraining: "100% Free Training",

    imageCaption: "Learn. Practice. Grow.",
    imageSubtitle: "Healthcare Skill Development Program",

    stats: [
      {
        value: "45",
        label: "Days Classroom",
      },
      {
        value: "45",
        label: "Days Hospital OJT",
      },
      {
        value: "100%",
        label: "Placement Support",
      },
    ],
  },

  mr: {
    label: "विशेष प्रशिक्षण कार्यक्रम",

    heading1: "आरोग्यसेवा क्षेत्रात करिअरची सुरुवात करा",
    heading2: "— तेही अगदी मोफत!",

    description:
      "जनरल ड्युटी असिस्टंट (GDA) हा एक नियोजनबद्ध कौशल्य विकास प्रशिक्षण कार्यक्रम आहे. वर्गातील शिक्षण आणि रुग्णालयातील प्रत्यक्ष प्रशिक्षणाच्या माध्यमातून पात्र उमेदवारांना आरोग्यसेवा क्षेत्रातील प्राथमिक सहाय्यक पदांसाठी आवश्यक कौशल्ये विकसित करण्याची संधी दिली जाते.",

    highlightsHeading: "प्रशिक्षणाची वैशिष्ट्ये",

    highlights: [
      "संपूर्ण प्रशिक्षण मोफत",
      "वयोमर्यादा : १८ ते ३५ वर्षे",
      "आरोग्यसेवा क्षेत्रातील प्रात्यक्षिक प्रशिक्षण",
      "रुग्णालयात प्रत्यक्ष कामाचे प्रशिक्षण (OJT)",
      "करिअर मार्गदर्शन व रोजगारासाठी सहाय्य",
    ],

    button: "मोफत GDA प्रशिक्षणासाठी अर्ज करा",
    freeTraining: "१००% मोफत प्रशिक्षण",

    imageCaption: "शिका. सराव करा. प्रगती करा.",
    imageSubtitle: "आरोग्यसेवा कौशल्य विकास प्रशिक्षण कार्यक्रम",

    stats: [
      {
        value: "४५",
        label: "दिवस वर्गातील प्रशिक्षण",
      },
      {
        value: "४५",
        label: "दिवस रुग्णालयातील OJT",
      },
      {
        value: "१००%",
        label: "प्लेसमेंटसाठी सहाय्य",
      },
    ],
  },
};

// ==========================================
// STAT ICON CONFIGURATION
// ==========================================

const statStyles = [
  {
    icon: GraduationCap,
    color: "text-orange-600",
  },
  {
    icon: Hospital,
    color: "text-blue-700",
  },
  {
    icon: BriefcaseBusiness,
    color: "text-green-700",
  },
];

// ==========================================
// SCROLL REVEAL HELPER
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
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const query = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotion = () => {
      setReducedMotion(query.matches);

      if (query.matches) {
        setVisible(true);
      }
    };

    updateMotion();

    if (
      query.matches ||
      !("IntersectionObserver" in window)
    ) {
      setVisible(true);
    } else {
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

      query.addEventListener?.("change", updateMotion);

      return () => {
        observer.disconnect();
        query.removeEventListener?.("change", updateMotion);
      };
    }
  }, []);

  const transforms = {
    up: "translate3d(0, 45px, 0)",
    down: "translate3d(0, -45px, 0)",
    left: "translate3d(-50px, 0, 0)",
    right: "translate3d(50px, 0, 0)",
    zoom: "scale(0.93)",
  };

  const show = visible || reducedMotion;

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: show ? 1 : 0,

        transform: show
          ? "translate3d(0, 0, 0) scale(1)"
          : transforms[direction] || transforms.up,

        transitionProperty: "opacity, transform",

        transitionDuration: reducedMotion
          ? "0ms"
          : `${duration}ms`,

        transitionDelay: reducedMotion
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
// MAIN FEATURED GDA SECTION
// ==========================================

export default function FeaturedGDASection() {
  const { language } = useLanguage();

  const t = translations[language] || translations.en;

  const imageRef = useRef(null);

  // ========================================
  // IMAGE CURSOR LIGHT
  // ========================================

  const handleImageMouseMove = (event) => {
    const element = imageRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width) * 100;

    const y =
      ((event.clientY - rect.top) / rect.height) * 100;

    element.style.setProperty("--gda-x", `${x}%`);
    element.style.setProperty("--gda-y", `${y}%`);
  };

  return (
    <section
      id="featured-gda"
      className="relative overflow-hidden bg-white py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================================= */}
        {/* MAIN SPACIOUS LAYOUT */}
        {/* ================================= */}

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* ================================= */}
          {/* LEFT CONTENT */}
          {/* ================================= */}

          <div className="lg:col-span-7">

            {/* EYEBROW */}
            <Reveal direction="left" duration={800}>
              <div className="mb-6 flex items-center gap-3">

                <span className="saksham-gda-label-line h-0.5 w-8 bg-orange-500" />

                <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange-600">
                  {t.label}
                </span>

              </div>
            </Reveal>

            {/* HEADING */}
            <Reveal
              direction="up"
              delay={100}
              duration={1100}
            >
              <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.18] tracking-tight text-[#061B50] sm:text-4xl lg:text-5xl">
                {t.heading1}

                <span className="mt-2 block text-orange-600">
                  {t.heading2}
                </span>
              </h2>
            </Reveal>

            {/* DESCRIPTION */}
            <Reveal
              direction="up"
              delay={200}
              duration={950}
            >
              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                {t.description}
              </p>
            </Reveal>

            {/* ================================= */}
            {/* PROGRAM HIGHLIGHTS */}
            {/* ================================= */}

            <div className="mt-9">

              <Reveal
                direction="up"
                delay={180}
                duration={850}
              >
                <h3 className="mb-5 flex items-center gap-3 text-base font-bold text-[#061B50]">

                  <HeartPulse className="saksham-gda-heart h-5 w-5 text-orange-500" />

                  {t.highlightsHeading}

                </h3>
              </Reveal>

              <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">

                {t.highlights.map((item, index) => (
                  <Reveal
                    key={index}
                    direction="up"
                    delay={index * 100}
                    duration={850}
                  >
                    <div className="saksham-gda-highlight group flex items-start gap-3">

                      {/* CHECK ICON */}
                      <span className="saksham-gda-check mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white">

                        <Check
                          className="h-3.5 w-3.5"
                          strokeWidth={2.5}
                        />

                      </span>

                      {/* HIGHLIGHT TEXT */}
                      <span className="text-sm font-medium leading-6 text-slate-700 transition-colors duration-300 group-hover:text-[#061B50]">
                        {item}
                      </span>

                    </div>
                  </Reveal>
                ))}

              </div>
            </div>

            {/* ================================= */}
            {/* CTA BUTTON + FREE TRAINING */}
            {/* ================================= */}

            <Reveal
              direction="up"
              delay={250}
              duration={950}
            >
              <div className="mt-10 flex flex-wrap items-center gap-5">

                {/* ANIMATED CTA */}
                <Link
                  to="/contact#register"
                  className="saksham-gda-cta group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-orange-600 px-7 py-4 text-sm font-bold text-white shadow-[0_10px_25px_rgba(234,88,12,0.14)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-[0_15px_30px_rgba(234,88,12,0.2)]"
                >
                  {/* BUTTON SHINE */}
                  <span
                    aria-hidden="true"
                    className="saksham-gda-button-shine pointer-events-none absolute inset-0"
                  />

                  <span className="relative z-10">
                    {t.button}
                  </span>

                  <ArrowUpRight className="relative z-10 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>

                {/* FREE TRAINING BADGE */}
                <span className="saksham-gda-free-badge inline-flex items-center gap-2 text-sm font-semibold text-green-700">

                  <ShieldCheck className="h-5 w-5 shrink-0" />

                  {t.freeTraining}

                </span>

              </div>
            </Reveal>

          </div>

          {/* ================================= */}
          {/* RIGHT IMAGE */}
          {/* ================================= */}

          <div className="relative lg:col-span-5">

            <Reveal
              direction="right"
              delay={180}
              duration={1100}
            >
              <div className="relative">

                {/* SOFT DECORATIVE SHAPE */}
                <div className="saksham-gda-decor absolute -right-5 -top-5 h-full w-full rounded-[32px] bg-orange-50" />

                {/* IMAGE CONTAINER */}
                <div
                  ref={imageRef}
                  onMouseMove={handleImageMouseMove}
                  className="saksham-gda-image group relative overflow-hidden rounded-[30px] bg-slate-100"
                >
                  {/* ORIGINAL IMAGE */}
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=85"
                    alt={
                      language === "mr"
                        ? "आरोग्यसेवा कौशल्य प्रशिक्षण"
                        : "Healthcare skill training"
                    }
                    loading="lazy"
                    decoding="async"
                    className="saksham-gda-photo h-[340px] w-full object-cover sm:h-[440px] lg:h-[500px]"
                  />

                  {/* MIRROR SHINE */}
                  <span
                    aria-hidden="true"
                    className="saksham-gda-image-shine pointer-events-none absolute inset-0"
                  />

                  {/* CURSOR FOLLOWING LIGHT */}
                  <span
                    aria-hidden="true"
                    className="saksham-gda-image-light pointer-events-none absolute inset-0"
                  />

                </div>

                {/* IMAGE CAPTION */}
                <div className="mt-5 flex items-center gap-3">

                  <div className="saksham-gda-caption-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50">
                    <HeartPulse className="h-5 w-5 text-blue-800" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#061B50]">
                      {t.imageCaption}
                    </p>

                    <p className="text-xs text-slate-500">
                      {t.imageSubtitle}
                    </p>
                  </div>

                </div>

              </div>
            </Reveal>

          </div>

        </div>

        {/* ================================= */}
        {/* CLEAN STATISTICS ROW */}
        {/* ================================= */}

        <div className="mt-14 border-t border-slate-200 pt-9">

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-8">

            {t.stats.map((stat, index) => {
              const Icon = statStyles[index].icon;

              const iconColor =
                statStyles[index].color;

              return (
                <Reveal
                  key={index}
                  direction="up"
                  delay={index * 130}
                  duration={900}
                  className="h-full"
                >
                  <div
                    className={`saksham-gda-stat group flex items-center gap-4 ${
                      index !== 0
                        ? "sm:border-l sm:border-slate-200 sm:pl-8"
                        : ""
                    }`}
                  >
                    {/* STAT ICON */}
                    <div className="saksham-gda-stat-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-orange-50">

                      <Icon className={`h-6 w-6 ${iconColor}`} />

                    </div>

                    {/* STAT TEXT */}
                    <div>

                      <p className="text-3xl font-extrabold leading-none text-[#061B50]">
                        {stat.value}
                      </p>

                      <p className="mt-2 text-sm font-medium text-slate-600">
                        {stat.label}
                      </p>

                    </div>

                  </div>
                </Reveal>
              );
            })}

          </div>
        </div>

      </div>

      {/* ================================= */}
      {/* ALL ANIMATIONS IN SAME FILE */}
      {/* ================================= */}

      <style>{`
        /* ============================
           EYEBROW LINE DRAW
        ============================ */

        @keyframes sakshamGdaLineDraw {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        #featured-gda .saksham-gda-label-line {
          transform-origin: left center;

          animation: sakshamGdaLineDraw 850ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* ============================
           HEART ICON SOFT PULSE
        ============================ */

        @keyframes sakshamGdaHeartPulse {
          0%, 100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.15);
          }
        }

        #featured-gda .saksham-gda-heart {
          animation: sakshamGdaHeartPulse 2.8s
            ease-in-out infinite;
        }

        /* ============================
           HIGHLIGHT CHECK MOTION
        ============================ */

        #featured-gda .saksham-gda-check svg {
          transition: transform 350ms ease;
        }

        #featured-gda .saksham-gda-highlight:hover
        .saksham-gda-check svg {
          transform: scale(1.12) rotate(-8deg);
        }

        /* ============================
           CTA BUTTON MIRROR SHINE
        ============================ */

        .saksham-gda-button-shine {
          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(255,255,255,0.06) 38%,
            rgba(255,255,255,0.5) 50%,
            rgba(255,255,255,0.06) 62%,
            transparent 80%
          );

          transform: translateX(-150%);

          transition: transform 850ms ease;
        }

        #featured-gda .saksham-gda-cta:hover
        .saksham-gda-button-shine {
          transform: translateX(150%);
        }

        /* ============================
           FREE TRAINING BADGE
        ============================ */

        @keyframes sakshamGdaShieldFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-4px);
          }
        }

        #featured-gda .saksham-gda-free-badge svg {
          animation: sakshamGdaShieldFloat 3.5s
            ease-in-out infinite;
        }

        /* ============================
           DECORATIVE BACKGROUND
        ============================ */

        @keyframes sakshamGdaDecorFloat {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(8px, -8px);
          }
        }

        #featured-gda .saksham-gda-decor {
          animation: sakshamGdaDecorFloat 7s
            ease-in-out infinite;
        }

        /* ============================
           CINEMATIC IMAGE ZOOM
        ============================ */

        #featured-gda .saksham-gda-photo {
          transition: transform 1100ms
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        #featured-gda .saksham-gda-image:hover
        .saksham-gda-photo {
          transform: scale(1.08);
        }

        /* ============================
           IMAGE MIRROR SHINE
        ============================ */

        .saksham-gda-image-shine {
          background: linear-gradient(
            115deg,
            transparent 20%,
            rgba(255,255,255,0.03) 33%,
            rgba(255,255,255,0.3) 45%,
            rgba(255,255,255,0.55) 50%,
            rgba(255,255,255,0.18) 56%,
            transparent 72%
          );

          opacity: 0;
          transform: translateX(-170%);
        }

        #featured-gda .saksham-gda-image:hover
        .saksham-gda-image-shine {
          animation: sakshamGdaMirrorShine 1100ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes sakshamGdaMirrorShine {
          0% {
            opacity: 0;
            transform: translateX(-170%);
          }

          20% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translateX(170%);
          }
        }

        /* ============================
           CURSOR LIGHT REFLECTION
        ============================ */

        #featured-gda .saksham-gda-image {
          --gda-x: 50%;
          --gda-y: 50%;
        }

        .saksham-gda-image-light {
          background: radial-gradient(
            290px circle at
            var(--gda-x) var(--gda-y),
            rgba(255,255,255,0.23),
            transparent 68%
          );

          opacity: 0;
          transition: opacity 400ms ease;
        }

        #featured-gda .saksham-gda-image:hover
        .saksham-gda-image-light {
          opacity: 1;
        }

        /* ============================
           IMAGE CAPTION ICON
        ============================ */

        @keyframes sakshamGdaCaptionFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-4px);
          }
        }

        #featured-gda .saksham-gda-caption-icon {
          animation: sakshamGdaCaptionFloat 4s
            ease-in-out infinite;
        }

        /* ============================
           STATS ICON HOVER
        ============================ */

        #featured-gda .saksham-gda-stat-icon svg {
          transition: transform 450ms
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        #featured-gda .saksham-gda-stat:hover
        .saksham-gda-stat-icon svg {
          transform: translateY(-3px) scale(1.1);
        }

        /* ============================
           FOCUS STATES
        ============================ */

        #featured-gda a:focus-visible {
          outline: 3px solid #fb923c;
          outline-offset: 4px;
        }

        /* ============================
           ACCESSIBILITY
        ============================ */

        @media (prefers-reduced-motion: reduce) {
          #featured-gda .saksham-gda-label-line,
          #featured-gda .saksham-gda-heart,
          #featured-gda .saksham-gda-free-badge svg,
          #featured-gda .saksham-gda-decor,
          #featured-gda .saksham-gda-image-shine,
          #featured-gda .saksham-gda-caption-icon {
            animation: none !important;
          }

          #featured-gda .saksham-gda-photo,
          #featured-gda .saksham-gda-button-shine,
          #featured-gda .saksham-gda-image-light {
            transition: none !important;
          }

          #featured-gda .saksham-gda-image-light {
            display: none !important;
          }
        }
      `}</style>

    </section>
  );
}

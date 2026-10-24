
import React, { useEffect, useRef, useState } from "react";

import {
  HeartPulse,
  Stethoscope,
  Laptop,
  Wrench,
  ArrowUpRight,
  ArrowRight,
  GraduationCap,
  Hospital,
  BriefcaseBusiness,
  Info,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

// ==========================================
// ENGLISH + MARATHI TRANSLATIONS
// ==========================================

const translations = {
  en: {
    sectionLabel: "OUR PROGRAMS",

    heading1: "Learn Today.",
    heading2: "Lead Tomorrow.",

    description:
      "Saksham Foundation supports skill development across healthcare, technical, digital and vocational sectors to help participants develop employable skills.",

    featuredLabel: "Featured • Free Training",
    featuredTitle: "General Duty Assistant (GDA)",

    featuredDescription:
      "Free healthcare training with placement assistance for eligible candidates aged 18–35.",

    classroomDays: "45 Days",
    classroomLabel: "Classroom",

    hospitalDays: "45 Days",
    hospitalLabel: "Hospital OJT",

    placementValue: "100%",
    placementLabel: "Placement Support",

    exploreCourse: "Explore Course",
    exploreDetails: "Explore Details",

    programs: [
      {
        title: "Healthcare & Paramedical Programs",
        description:
          "OT Technician, Dialysis Technician, Nursing Care Assistant and ICU Technician.",
        label: "Past CSR Experience",
      },
      {
        title: "Computer & Digital Skills",
        description:
          "Computer literacy, Tally, Financial Accounting and GST-related skills.",
        label: "Digital Literacy",
      },
      {
        title: "Technical & Vocational Skills",
        description:
          "CNC/VMC Machine Operator and Fire & Safety training experience.",
        label: "Vocational Training",
      },
    ],

    notice:
      "GDA is the currently listed training program. Other areas reflect previous CSR training experience. Contact the team to confirm current admissions.",
  },

  mr: {
    sectionLabel: "आमचे प्रशिक्षण कार्यक्रम",

    heading1: "आज शिका.",
    heading2: "उद्याचे भविष्य घडवा.",

    description:
      "सक्षम फाउंडेशन आरोग्यसेवा, तांत्रिक, डिजिटल आणि व्यावसायिक क्षेत्रांमध्ये कौशल्य विकासाला प्रोत्साहन देते. सहभागी उमेदवारांना रोजगाराभिमुख कौशल्ये विकसित करण्यासाठी सहाय्य करणे हा आमचा उद्देश आहे.",

    featuredLabel: "विशेष • मोफत प्रशिक्षण",
    featuredTitle: "जनरल ड्युटी असिस्टंट (GDA)",

    featuredDescription:
      "१८ ते ३५ वयोगटातील पात्र उमेदवारांसाठी मोफत आरोग्यसेवा प्रशिक्षण आणि रोजगारासाठी सहाय्य.",

    classroomDays: "४५ दिवस",
    classroomLabel: "वर्गातील प्रशिक्षण",

    hospitalDays: "४५ दिवस",
    hospitalLabel: "रुग्णालयातील OJT",

    placementValue: "१००%",
    placementLabel: "प्लेसमेंट सहाय्य",

    exploreCourse: "प्रशिक्षणाची माहिती पाहा",
    exploreDetails: "अधिक माहिती पाहा",

    programs: [
      {
        title: "आरोग्यसेवा व पॅरामेडिकल प्रशिक्षण",
        description:
          "ओटी टेक्निशियन, डायलिसिस टेक्निशियन, नर्सिंग केअर असिस्टंट आणि आयसीयू टेक्निशियन.",
        label: "पूर्वीच्या CSR प्रकल्पांचा अनुभव",
      },
      {
        title: "संगणक व डिजिटल कौशल्ये",
        description:
          "संगणक साक्षरता, टॅली, आर्थिक लेखांकन आणि जीएसटी संबंधित कौशल्ये.",
        label: "डिजिटल साक्षरता",
      },
      {
        title: "तांत्रिक व व्यावसायिक कौशल्ये",
        description:
          "CNC/VMC मशीन ऑपरेटर आणि अग्निसुरक्षा प्रशिक्षण क्षेत्रातील अनुभव.",
        label: "व्यावसायिक प्रशिक्षण",
      },
    ],

    notice:
      "सध्या GDA प्रशिक्षण कार्यक्रमाची माहिती उपलब्ध आहे. इतर प्रशिक्षण क्षेत्रे ही पूर्वीच्या CSR प्रकल्पांतील अनुभवावर आधारित आहेत. सध्याच्या प्रवेशाबाबत खात्री करण्यासाठी संस्थेशी संपर्क साधा.",
  },
};

// ==========================================
// DESIGN CONFIGURATION
// ==========================================

const programStyles = [
  {
    id: "02",
    icon: Stethoscope,
    color: "#60A5FA",
    background: "bg-blue-500/10",
    link: "/programs#healthcare",
  },
  {
    id: "03",
    icon: Laptop,
    color: "#22D3EE",
    background: "bg-cyan-500/10",
    link: "/programs#digital",
  },
  {
    id: "04",
    icon: Wrench,
    color: "#4ADE80",
    background: "bg-green-500/10",
    link: "/programs#technical",
  },
];

// ==========================================
// SCROLL REVEAL COMPONENT
// NO EXTRA PACKAGE REQUIRED
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
  const [reducedMotion, setReducedMotion] =
    useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotion = () => {
      setReducedMotion(motionQuery.matches);

      if (motionQuery.matches) {
        setVisible(true);
      }
    };

    updateMotion();

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    if (motionQuery.matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.06,
        rootMargin: "0px 0px 40px 0px",
      }
    );

    observer.observe(element);

    motionQuery.addEventListener?.(
      "change",
      updateMotion
    );

    return () => {
      observer.disconnect();

      motionQuery.removeEventListener?.(
        "change",
        updateMotion
      );
    };
  }, []);

  const transforms = {
    up: "translate3d(0, 45px, 0)",
    down: "translate3d(0, -45px, 0)",
    left: "translate3d(-55px, 0, 0)",
    right: "translate3d(55px, 0, 0)",
    zoom: "scale(0.94)",
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
// MAIN COMPONENT
// ==========================================

export default function TrainingProgramsDarkSection() {
  const { language } = useLanguage();

  const t = translations[language] || translations.en;

  return (
    <section
      id="training-programs"
      className="relative overflow-hidden bg-[#07152B] py-12 text-white lg:py-16"
    >
      {/* ===================================== */}
      {/* ANIMATED BACKGROUND */}
      {/* ===================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="saksham-program-bg-blue absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="saksham-program-bg-orange absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ===================================== */}
        {/* SECTION HEADING */}
        {/* ===================================== */}

        <div className="mb-8 text-center">

          <Reveal direction="up" duration={800}>
            <span className="saksham-program-badge mb-3 inline-block rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-orange-400">
              {t.sectionLabel}
            </span>
          </Reveal>

          <Reveal
            direction="up"
            delay={100}
            duration={1050}
          >
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {t.heading1}{" "}

              <span className="saksham-program-heading-highlight text-orange-400">
                {t.heading2}
              </span>
            </h2>
          </Reveal>

          <Reveal
            direction="up"
            delay={200}
            duration={950}
          >
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              {t.description}
            </p>
          </Reveal>

        </div>

        {/* ===================================== */}
        {/* FEATURED GDA TRAINING */}
        {/* ===================================== */}

        <Reveal
          direction="zoom"
          delay={150}
          duration={1100}
        >
          <div
            id="gda-course"
            className="saksham-gda-card group relative mb-4 scroll-mt-28 overflow-hidden rounded-2xl border border-orange-400/30 bg-gradient-to-r from-[#17365A] via-[#102B4B] to-[#0B213B] p-5 transition-all duration-500 hover:border-orange-400/60 hover:shadow-[0_20px_55px_rgba(0,0,0,0.22)] sm:p-6"
          >
            {/* MIRROR SHINE */}
            <span
              aria-hidden="true"
              className="saksham-gda-shine pointer-events-none absolute inset-0"
            />

            {/* SOFT BACKGROUND LIGHT */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-orange-400/10 blur-3xl transition-transform duration-700 group-hover:scale-125"
            />

            {/* RIGHT ORANGE BORDER */}
            <div className="saksham-gda-border absolute right-0 top-0 h-full w-1 bg-orange-500" />

            <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

              {/* MAIN INFORMATION */}
              <div className="flex min-w-0 items-start gap-4 lg:max-w-[40%]">

                {/* ANIMATED ICON */}
                <div className="saksham-gda-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-500/15 transition-transform duration-500 group-hover:scale-110">
                  <HeartPulse className="h-6 w-6" />
                </div>

                <div className="min-w-0">
                  <span className="mb-1 inline-block text-xs font-bold uppercase tracking-wide text-orange-400">
                    {t.featuredLabel}
                  </span>

                  <h3 className="text-xl font-bold text-white">
                    {t.featuredTitle}
                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    {t.featuredDescription}
                  </p>
                </div>
              </div>

              {/* ================================= */}
              {/* PROGRAM STATS */}
              {/* ================================= */}

              <div className="grid grid-cols-3 gap-3 border-y border-white/10 py-4 lg:border-x lg:border-y-0 lg:px-5 lg:py-0">

                {/* CLASSROOM */}
                <div className="saksham-program-stat group/stat text-center">
                  <GraduationCap className="mx-auto mb-1 h-5 w-5 text-orange-400 transition-transform duration-300 group-hover/stat:-translate-y-1" />

                  <p className="text-sm font-bold text-white">
                    {t.classroomDays}
                  </p>

                  <p className="text-[10px] leading-relaxed text-slate-400">
                    {t.classroomLabel}
                  </p>
                </div>

                {/* HOSPITAL OJT */}
                <div className="saksham-program-stat group/stat text-center">
                  <Hospital className="mx-auto mb-1 h-5 w-5 text-blue-400 transition-transform duration-300 group-hover/stat:-translate-y-1" />

                  <p className="text-sm font-bold text-white">
                    {t.hospitalDays}
                  </p>

                  <p className="text-[10px] leading-relaxed text-slate-400">
                    {t.hospitalLabel}
                  </p>
                </div>

                {/* PLACEMENT SUPPORT */}
                <div className="saksham-program-stat group/stat text-center">
                  <BriefcaseBusiness className="mx-auto mb-1 h-5 w-5 text-green-400 transition-transform duration-300 group-hover/stat:-translate-y-1" />

                  <p className="text-sm font-bold text-white">
                    {t.placementValue}
                  </p>

                  <p className="text-[10px] leading-relaxed text-slate-400">
                    {t.placementLabel}
                  </p>
                </div>

              </div>

              {/* ================================= */}
              {/* FEATURED CTA */}
              {/* ================================= */}

              <Link
                to="/programs#featured-gda"
                className="saksham-program-primary-btn group/btn relative inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-[0_12px_28px_rgba(249,115,22,0.28)]"
              >
                {/* BUTTON SHINE */}
                <span
                  aria-hidden="true"
                  className="saksham-program-btn-shine pointer-events-none absolute inset-0"
                />

                <span className="relative z-10">
                  {t.exploreCourse}
                </span>

                <ArrowUpRight className="relative z-10 h-4 w-4 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </Link>

            </div>
          </div>
        </Reveal>

        {/* ===================================== */}
        {/* OTHER TRAINING AREAS */}
        {/* ===================================== */}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

          {programStyles.map((prog, index) => {
            const Icon = prog.icon;
            const content = t.programs[index];

            return (
              <Reveal
                key={prog.id}
                direction="up"
                delay={index * 140}
                duration={950}
                className="h-full"
              >
                <Link
                  to={prog.link}
                  className="saksham-program-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-5 transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.09] hover:shadow-[0_22px_45px_rgba(0,0,0,0.2)]"
                >
                  {/* MIRROR SHINE */}
                  <span
                    aria-hidden="true"
                    className="saksham-program-card-shine pointer-events-none absolute inset-0"
                  />

                  {/* TOP COLOR LINE */}
                  <div
                    className="absolute left-0 top-0 h-[3px] w-16 transition-all duration-500 group-hover:w-full"
                    style={{
                      backgroundColor: prog.color,
                    }}
                  />

                  {/* DECORATIVE GLOW */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 scale-75 rounded-full opacity-0 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-20"
                    style={{
                      backgroundColor: prog.color,
                    }}
                  />

                  {/* ================================= */}
                  {/* ICON AND NUMBER */}
                  {/* ================================= */}

                  <div className="relative z-10 mb-3 flex items-center justify-between">

                    <div
                      className={`saksham-program-icon flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 ${prog.background}`}
                    >
                      <Icon
                        className="h-5 w-5"
                        style={{
                          color: prog.color,
                        }}
                      />
                    </div>

                    <span className="text-xs font-semibold text-white/25 transition-colors duration-300 group-hover:text-white/60">
                      {prog.id}
                    </span>

                  </div>

                  {/* PROGRAM LABEL */}
                  <p
                    className="relative z-10 mb-1.5 text-xs font-semibold"
                    style={{
                      color: prog.color,
                    }}
                  >
                    {content.label}
                  </p>

                  {/* PROGRAM TITLE */}
                  <h3 className="relative z-10 text-base font-bold leading-snug text-white">
                    {content.title}
                  </h3>

                  {/* PROGRAM DESCRIPTION */}
                  <p className="relative z-10 mt-2 flex-1 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    {content.description}
                  </p>

                  {/* EXPLORE LINK */}
                  <div className="relative z-10 mt-4 flex items-center justify-between border-t border-white/10 pt-3">

                    <span className="text-xs font-bold text-white transition-colors duration-300 group-hover:text-orange-300">
                      {t.exploreDetails}
                    </span>

                    <ArrowRight className="h-4 w-4 text-orange-400 transition-transform duration-300 group-hover:translate-x-2" />

                  </div>

                </Link>
              </Reveal>
            );
          })}

        </div>

        {/* ===================================== */}
        {/* NOTICE */}
        {/* ===================================== */}

        <Reveal direction="up" delay={150} duration={850}>
          <div className="mt-5 flex items-start gap-2.5 text-xs leading-relaxed text-slate-400">

            <Info className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />

            <p>{t.notice}</p>

          </div>
        </Reveal>

      </div>

      {/* ===================================== */}
      {/* ALL ANIMATIONS INSIDE THIS FILE */}
      {/* ===================================== */}

      <style>{`
        /* ==========================
           BACKGROUND FLOAT
        ========================== */

        @keyframes sakshamProgramBgBlue {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-35px, 25px);
          }
        }

        @keyframes sakshamProgramBgOrange {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(35px, -20px);
          }
        }

        #training-programs .saksham-program-bg-blue {
          animation: sakshamProgramBgBlue 11s
            ease-in-out infinite;
        }

        #training-programs .saksham-program-bg-orange {
          animation: sakshamProgramBgOrange 13s
            ease-in-out infinite;
        }

        /* ==========================
           SECTION BADGE
        ========================== */

        @keyframes sakshamProgramBadgeGlow {
          0%, 100% {
            box-shadow: 0 0 0 rgba(251, 146, 60, 0);
          }

          50% {
            box-shadow: 0 0 20px rgba(251, 146, 60, 0.13);
          }
        }

        #training-programs .saksham-program-badge {
          animation: sakshamProgramBadgeGlow 4s
            ease-in-out infinite;
        }

        /* ==========================
           HEADING SHIMMER
        ========================== */

        #training-programs
        .saksham-program-heading-highlight {
          background-image: linear-gradient(
            110deg,
            #fb923c 0%,
            #fed7aa 45%,
            #fb923c 100%
          );

          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          animation: sakshamProgramHeadingShimmer 7s
            ease-in-out infinite;
        }

        @keyframes sakshamProgramHeadingShimmer {
          0%, 100% {
            background-position: 100% 0;
          }

          50% {
            background-position: 0 0;
          }
        }

        /* ==========================
           GDA FEATURED MIRROR SHINE
        ========================== */

        .saksham-gda-shine {
          background: linear-gradient(
            110deg,
            transparent 25%,
            rgba(255,255,255,0.02) 38%,
            rgba(255,255,255,0.16) 50%,
            rgba(255,255,255,0.02) 62%,
            transparent 75%
          );

          transform: translateX(-150%);
          opacity: 0;
        }

        #training-programs .saksham-gda-card:hover
        .saksham-gda-shine {
          animation: sakshamProgramMirror 1050ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes sakshamProgramMirror {
          0% {
            opacity: 0;
            transform: translateX(-150%);
          }

          25% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translateX(150%);
          }
        }

        /* ==========================
           GDA HEART PULSE
        ========================== */

        @keyframes sakshamGdaIconPulse {
          0%, 100% {
            box-shadow: 0 0 0 rgba(249,115,22,0);
          }

          50% {
            box-shadow: 0 0 23px rgba(249,115,22,0.24);
          }
        }

        #training-programs .saksham-gda-icon {
          animation: sakshamGdaIconPulse 3.5s
            ease-in-out infinite;
        }

        #training-programs .saksham-gda-icon svg {
          transition: transform 400ms ease;
        }

        #training-programs .saksham-gda-card:hover
        .saksham-gda-icon svg {
          transform: scale(1.12);
        }

        /* ==========================
           RIGHT ORANGE LINE
        ========================== */

        @keyframes sakshamGdaBorderGlow {
          0%, 100% {
            opacity: 0.8;
            box-shadow: 0 0 0 rgba(249,115,22,0);
          }

          50% {
            opacity: 1;
            box-shadow: 0 0 15px rgba(249,115,22,0.45);
          }
        }

        #training-programs .saksham-gda-border {
          animation: sakshamGdaBorderGlow 3s
            ease-in-out infinite;
        }

        /* ==========================
           FEATURED BUTTON SHINE
        ========================== */

        .saksham-program-btn-shine {
          background: linear-gradient(
            110deg,
            transparent 25%,
            rgba(255,255,255,0.06) 38%,
            rgba(255,255,255,0.4) 50%,
            rgba(255,255,255,0.06) 62%,
            transparent 75%
          );

          transform: translateX(-150%);
          transition: transform 850ms ease;
        }

        #training-programs
        .saksham-program-primary-btn:hover
        .saksham-program-btn-shine {
          transform: translateX(150%);
        }

        /* ==========================
           TRAINING CARD SHINE
        ========================== */

        .saksham-program-card-shine {
          background: linear-gradient(
            115deg,
            transparent 25%,
            rgba(255,255,255,0.01) 38%,
            rgba(255,255,255,0.12) 50%,
            rgba(255,255,255,0.01) 62%,
            transparent 75%
          );

          transform: translateX(-150%);
          opacity: 0;
        }

        #training-programs .saksham-program-card:hover
        .saksham-program-card-shine {
          animation: sakshamProgramCardShine 850ms
            ease-out both;
        }

        @keyframes sakshamProgramCardShine {
          0% {
            opacity: 0;
            transform: translateX(-150%);
          }

          20% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translateX(150%);
          }
        }

        /* ==========================
           PROGRAM ICON MOTION
        ========================== */

        #training-programs .saksham-program-card:hover
        .saksham-program-icon svg {
          animation: sakshamProgramIconBounce 650ms
            ease-out;
        }

        @keyframes sakshamProgramIconBounce {
          0% {
            transform: translateY(0);
          }

          45% {
            transform: translateY(-4px);
          }

          100% {
            transform: translateY(0);
          }
        }

        /* ==========================
           FOCUS ACCESSIBILITY
        ========================== */

        #training-programs a:focus-visible {
          outline: 2px solid #fb923c;
          outline-offset: 4px;
        }

        /* ==========================
           REDUCED MOTION
        ========================== */

        @media (prefers-reduced-motion: reduce) {
          #training-programs .saksham-program-bg-blue,
          #training-programs .saksham-program-bg-orange,
          #training-programs .saksham-program-badge,
          #training-programs .saksham-program-heading-highlight,
          #training-programs .saksham-gda-icon,
          #training-programs .saksham-gda-border,
          #training-programs .saksham-gda-shine,
          #training-programs .saksham-program-card-shine,
          #training-programs .saksham-program-icon svg {
            animation: none !important;
          }

          #training-programs .saksham-program-btn-shine {
            transition: none !important;
          }

          #training-programs .saksham-program-heading-highlight {
            background-image: none;
            -webkit-text-fill-color: currentColor;
          }
        }
      `}</style>

    </section>
  );
}

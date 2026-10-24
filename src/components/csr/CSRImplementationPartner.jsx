
import React, { useEffect, useRef, useState } from "react";

import {
  Handshake,
  HeartPulse,
  GraduationCap,
  Clock3,
  BriefcaseBusiness,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

// ==========================================
// TRANSLATIONS
// ==========================================

const translations = {
  en: {
    eyebrow: "OUR CSR COLLABORATION",

    heading1: "Creating Impact",
    heading2: "Through Partnership.",

    partnerLabel: "CSR IMPLEMENTATION PARTNERSHIP",

    foundation: "Saksham Foundation",
    partner: "The Ma Foi Foundation",

    partnershipIntro:
      "Saksham Foundation works as a CSR Implementation Partner with The Ma Foi Foundation to create healthcare skill development and livelihood opportunities for youth.",

    programLabel: "FEATURED INITIATIVE",

    programTitle:
      "General Duty Assistant (GDA) Training",

    programDescription:
      "Free healthcare training focused on patient care, practical skills and career readiness.",

    highlights: [
      "100% Free Training",
      "3-Month Program",
      "Practical Healthcare Skills",
      "Placement Support",
    ],

    impactText:
      "Building skills. Creating opportunities. Empowering futures.",

    primaryCTA: "Explore GDA Program",
    secondaryCTA: "Partner With Us",

    posterLabel: "HEALTHCARE SKILL DEVELOPMENT",

    posterCaption:
      "General Duty Assistant Training Initiative",

    note:
      "Training and placement support are subject to eligibility and program requirements.",
  },

  mr: {
    eyebrow: "आमची CSR भागीदारी",

    heading1: "सहकार्यातून",
    heading2: "सकारात्मक परिवर्तन.",

    partnerLabel: "CSR अंमलबजावणी भागीदारी",

    foundation: "सक्षम फाउंडेशन",
    partner: "द मा फोई फाउंडेशन",

    partnershipIntro:
      "सक्षम फाउंडेशन ही द मा फोई फाउंडेशनसोबत CSR Implementation Partner म्हणून कार्यरत असून युवकांना आरोग्यसेवा कौशल्य प्रशिक्षण आणि रोजगाराभिमुख संधी उपलब्ध करून देण्यासाठी प्रयत्नशील आहे.",

    programLabel: "विशेष प्रशिक्षण उपक्रम",

    programTitle:
      "जनरल ड्युटी असिस्टंट (GDA) प्रशिक्षण",

    programDescription:
      "रुग्णसेवा, प्रात्यक्षिक कौशल्ये आणि करिअरच्या तयारीवर आधारित मोफत आरोग्यसेवा प्रशिक्षण.",

    highlights: [
      "१००% मोफत प्रशिक्षण",
      "३ महिन्यांचा कोर्स",
      "आरोग्यसेवा प्रात्यक्षिक कौशल्ये",
      "प्लेसमेंट सहाय्य",
    ],

    impactText:
      "कौशल्य विकास. रोजगाराच्या संधी. उज्ज्वल भविष्य.",

    primaryCTA: "GDA प्रशिक्षण पाहा",
    secondaryCTA: "भागीदारी करा",

    posterLabel: "आरोग्यसेवा कौशल्य विकास",

    posterCaption:
      "जनरल ड्युटी असिस्टंट प्रशिक्षण उपक्रम",

    note:
      "प्रशिक्षण आणि प्लेसमेंट सहाय्य पात्रता व कार्यक्रमाच्या अटींवर अवलंबून आहे.",
  },
};

// ==========================================
// ICONS
// ==========================================

const highlightIcons = [
  GraduationCap,
  Clock3,
  HeartPulse,
  BriefcaseBusiness,
];

// ==========================================
// SCROLL REVEAL
// ==========================================

function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}) {
  const elementRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotion = () => {
      setReducedMotion(motionQuery.matches);
      if (motionQuery.matches) setVisible(true);
    };

    updateMotion();

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

  const initialTransforms = {
    up: "translate3d(0,35px,0)",
    left: "translate3d(-35px,0,0)",
    right: "translate3d(35px,0,0)",
    zoom: "scale(0.95)",
  };

  const show = visible || reducedMotion;

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: show ? 1 : 0,

        transform: show
          ? "translate3d(0,0,0) scale(1)"
          : initialTransforms[direction] ||
            initialTransforms.up,

        transitionProperty: "opacity, transform",

        transitionDuration: reducedMotion
          ? "0ms"
          : "850ms",

        transitionDelay: reducedMotion
          ? "0ms"
          : `${delay}ms`,

        transitionTimingFunction:
          "cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {children}
    </div>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function CSRImplementationPartner() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="csr-implementation-partner"
      aria-labelledby="csr-partner-heading"
      className="relative overflow-hidden bg-white py-14 lg:py-20"
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="csr-partner-orb absolute -right-32 -top-32 h-80 w-80 rounded-full bg-orange-100/40 blur-3xl" />

        <div className="csr-partner-orb absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* ================================= */}
        {/* SECTION HEADING */}
        {/* ================================= */}

        <Reveal>
          <div className="mb-9 text-center lg:mb-12">

            <div className="mb-4 inline-flex items-center gap-3">

              <span className="h-px w-8 bg-orange-500" />

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange-600">
                {t.eyebrow}
              </span>

              <span className="h-px w-8 bg-orange-500" />

            </div>

            <h2
              id="csr-partner-heading"
              className="text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl lg:text-5xl"
            >
              {t.heading1}{" "}

              <span className="text-orange-600">
                {t.heading2}
              </span>
            </h2>

          </div>
        </Reveal>

        {/* ================================= */}
        {/* UPDATED 40% / 60% LAYOUT */}
        {/* ================================= */}

        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">

          {/* ================================= */}
          {/* LEFT SIDE - COMPACT CONTENT */}
          {/* ================================= */}

          <div className="min-w-0 lg:col-span-5">

            <Reveal direction="left">

              {/* PARTNERSHIP BADGE */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2">

                <Handshake className="h-4 w-4 text-orange-600" />

                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-orange-700">
                  {t.partnerLabel}
                </span>

              </div>

              {/* PARTNER NAMES */}
              <div className="flex flex-col gap-2">

                <h3 className="text-2xl font-extrabold leading-tight text-[#061B50] sm:text-3xl">
                  {t.foundation}
                </h3>

                <div className="flex items-center gap-2">

                  <span className="text-2xl font-bold text-orange-500">
                    ×
                  </span>

                  <span className="text-xl font-bold text-[#2455A4] sm:text-2xl">
                    {t.partner}
                  </span>

                </div>

              </div>

              {/* SHORT DESCRIPTION */}
              <p className="mt-5 text-sm leading-7 text-slate-600">
                {t.partnershipIntro}
              </p>

            </Reveal>

            {/* ================================= */}
            {/* PROGRAM DETAILS */}
            {/* ================================= */}

            <Reveal direction="up" delay={100}>

              <div className="mt-7 border-l-[3px] border-orange-500 pl-4">

                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-orange-600">
                  {t.programLabel}
                </p>

                <h4 className="mt-2 text-lg font-extrabold leading-snug text-[#061B50] sm:text-xl">
                  {t.programTitle}
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {t.programDescription}
                </p>

              </div>

            </Reveal>

            {/* ================================= */}
            {/* COMPACT HIGHLIGHTS */}
            {/* ================================= */}

            <div className="mt-6 grid grid-cols-2 gap-3">

              {t.highlights.map((item, index) => {
                const Icon = highlightIcons[index];

                return (
                  <Reveal
                    key={index}
                    direction="up"
                    delay={index * 90}
                  >
                    <div className="csr-highlight group flex min-h-[78px] items-center gap-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC] px-3 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-md">

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600 transition-transform duration-300 group-hover:scale-110">

                        <Icon className="h-4 w-4" />

                      </div>

                      <span className="text-xs font-bold leading-5 text-[#061B50] sm:text-sm">
                        {item}
                      </span>

                    </div>
                  </Reveal>
                );
              })}

            </div>

            {/* ================================= */}
            {/* SHORT IMPACT STATEMENT */}
            {/* ================================= */}

            <Reveal direction="up" delay={150}>

              <div className="mt-6 flex items-start gap-2.5">

                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />

                <p className="text-sm font-semibold leading-6 text-[#061B50]">
                  {t.impactText}
                </p>

              </div>

            </Reveal>

            {/* ================================= */}
            {/* CTA BUTTONS */}
            {/* ================================= */}

            <Reveal direction="up" delay={180}>

              <div className="mt-7 flex flex-wrap items-center gap-3">

                <Link
                  to="/programs#featured-gda"
                  className="csr-partner-btn group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-[0_12px_30px_rgba(234,88,12,0.22)]"
                >
                  <span
                    aria-hidden="true"
                    className="csr-partner-btn-shine pointer-events-none absolute inset-0"
                  />

                  <span className="relative z-10">
                    {t.primaryCTA}
                  </span>

                  <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

                </Link>

                <a
                  href="#csr-enquiry"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#061B50]/15 bg-white px-5 py-3 text-sm font-bold text-[#061B50] transition-all duration-300 hover:-translate-y-1 hover:border-[#061B50] hover:bg-[#F4F7FD]"
                >
                  {t.secondaryCTA}

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

              </div>

            </Reveal>

          </div>

          {/* ================================= */}
          {/* RIGHT SIDE - LARGE FULL POSTER */}
          {/* ================================= */}

          <div className="min-w-0 lg:col-span-7">

            <Reveal direction="right" delay={130}>

              <div className="relative">

                {/* DECORATIVE BACKGROUND */}
                <div className="absolute -right-3 -top-3 h-full w-full rounded-[24px] bg-orange-50 sm:-right-4 sm:-top-4" />

                {/* IMAGE CONTAINER */}
                <div className="csr-partner-poster group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-1.5 shadow-[0_20px_60px_rgba(6,27,80,0.14)] sm:p-2">

                  {/* FULL IMAGE - NO CROPPING */}
                  <img
                    src="/csrcourese.jpeg"
                    alt={
                      language === "mr"
                        ? "सक्षम फाउंडेशन आणि द मा फोई फाउंडेशन यांच्या GDA प्रशिक्षण उपक्रमाचे माहितीपत्रक"
                        : "Saksham Foundation and The Ma Foi Foundation GDA training initiative poster"
                    }
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full rounded-[16px] object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  />

                  {/* MIRROR SHINE */}
                  <span
                    aria-hidden="true"
                    className="csr-partner-poster-shine pointer-events-none absolute inset-0"
                  />

                </div>

                {/* COMPACT IMAGE CAPTION */}
                <div className="mt-4 flex items-center gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                    <ShieldCheck className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-orange-600">
                      {t.posterLabel}
                    </p>

                    <p className="mt-0.5 text-xs font-medium text-slate-600">
                      {t.posterCaption}
                    </p>
                  </div>

                </div>

              </div>

            </Reveal>

          </div>

        </div>

        {/* ================================= */}
        {/* FOOTNOTE */}
        {/* ================================= */}

        <Reveal direction="up" delay={100}>
          <p className="mt-9 border-t border-slate-100 pt-5 text-xs leading-6 text-slate-500">
            {t.note}
          </p>
        </Reveal>

      </div>

      {/* ================================= */}
      {/* ANIMATIONS */}
      {/* ================================= */}

      <style>{`
        /* BACKGROUND FLOAT */

        @keyframes csrPartnerFloat {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-20px, 15px);
          }
        }

        #csr-implementation-partner .csr-partner-orb {
          animation: csrPartnerFloat 12s
            ease-in-out infinite;
        }

        /* HIGHLIGHT ICON HOVER */

        #csr-implementation-partner
        .csr-highlight svg {
          transition: transform 350ms ease;
        }

        #csr-implementation-partner
        .csr-highlight:hover svg {
          transform: translateY(-2px) rotate(-5deg);
        }

        /* IMAGE SHINE */

        .csr-partner-poster-shine {
          background: linear-gradient(
            115deg,
            transparent 25%,
            rgba(255,255,255,0.03) 36%,
            rgba(255,255,255,0.4) 50%,
            rgba(255,255,255,0.03) 64%,
            transparent 75%
          );

          transform: translateX(-160%);
          opacity: 0;
        }

        #csr-implementation-partner
        .csr-partner-poster:hover
        .csr-partner-poster-shine {
          animation: csrPartnerShine 950ms
            ease-out both;
        }

        @keyframes csrPartnerShine {
          0% {
            transform: translateX(-160%);
            opacity: 0;
          }

          25% {
            opacity: 1;
          }

          100% {
            transform: translateX(160%);
            opacity: 0;
          }
        }

        /* CTA SHINE */

        .csr-partner-btn-shine {
          background: linear-gradient(
            110deg,
            transparent 25%,
            rgba(255,255,255,0.08) 40%,
            rgba(255,255,255,0.42) 50%,
            rgba(255,255,255,0.08) 60%,
            transparent 75%
          );

          transform: translateX(-160%);
          transition: transform 850ms ease;
        }

        #csr-implementation-partner
        .csr-partner-btn:hover
        .csr-partner-btn-shine {
          transform: translateX(160%);
        }

        /* KEYBOARD FOCUS */

        #csr-implementation-partner a:focus-visible {
          outline: 3px solid #f97316;
          outline-offset: 4px;
        }

        /* REDUCED MOTION */

        @media (prefers-reduced-motion: reduce) {
          #csr-implementation-partner .csr-partner-orb,
          #csr-implementation-partner .csr-partner-poster-shine {
            animation: none !important;
          }

          #csr-implementation-partner .csr-partner-btn-shine {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

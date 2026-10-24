
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  HeartPulse,
  Factory,
  Landmark,
  BookOpen,
  Sparkles,
  CheckCircle2,
  MousePointer2,
  MoveUpRight,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ==========================================
// TRANSLATIONS
// ==========================================

const translations = {
  en: {
    badge: "SAKSHAM FOUNDATION | SKILL DEVELOPMENT",
    title1: "Learn Skills.",
    title2: "Build Confidence.",
    title3: "Shape Your Future.",

    description:
      "Explore career-focused training in Healthcare, Industrial Technology, Banking, Finance, AI, Digital Skills and Education — designed to prepare you for tomorrow's workforce.",

    primaryCTA: "Explore Courses",
    secondaryCTA: "Enquire Now",

    feature1: "Industry-Aligned Training",
    feature2: "Practical Learning",
    feature3: "Career Guidance",

    healthcare: "Healthcare",
    industrial: "Industrial Skills",
    finance: "Banking & IT",
    education: "Education",

    floatingLabel: "Explore Your Career Path",
    visualCaption: "4 Career Sectors",
    visualSubcaption: "Multiple Learning Opportunities",
  },

  mr: {
    badge: "सक्षम फाउंडेशन | कौशल्य विकास",
    title1: "नवीन कौशल्ये शिका.",
    title2: "आत्मविश्वास वाढवा.",
    title3: "उज्ज्वल भविष्य घडवा.",

    description:
      "आरोग्यसेवा, औद्योगिक तंत्रज्ञान, बँकिंग, फायनान्स, AI, डिजिटल स्किल्स आणि शिक्षण क्षेत्रातील करिअर-केंद्रित प्रशिक्षणाच्या संधी जाणून घ्या.",

    primaryCTA: "कोर्सेस पाहा",
    secondaryCTA: "आता चौकशी करा",

    feature1: "उद्योगाभिमुख प्रशिक्षण",
    feature2: "प्रात्यक्षिक शिक्षण",
    feature3: "करिअर मार्गदर्शन",

    healthcare: "आरोग्यसेवा",
    industrial: "औद्योगिक कौशल्ये",
    finance: "बँकिंग व आयटी",
    education: "शिक्षण",

    floatingLabel: "तुमच्या करिअरची दिशा निवडा",
    visualCaption: "४ करिअर क्षेत्रे",
    visualSubcaption: "अनेक प्रशिक्षण संधी",
  },
};

// ==========================================
// COURSE DATA
// ==========================================

const courseImages = [
  {
    key: "healthcare",
    src: "/g10.jpeg",
    icon: HeartPulse,
    accent: "#FB923C",
  },
  {
    key: "industrial",
    src: "/g42.jpeg",
    icon: Factory,
    accent: "#60A5FA",
  },
  {
    key: "finance",
    src: "/a1.jpeg",
    icon: Landmark,
    accent: "#34D399",
  },
  {
    key: "education",
    src: "/g18.jpeg",
    icon: BookOpen,
    accent: "#C4B5FD",
  },
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
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

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
        threshold: 0.06,
        rootMargin: "0px 0px 35px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const transforms = {
    up: "translate3d(0,38px,0)",
    left: "translate3d(-38px,0,0)",
    right: "translate3d(38px,0,0)",
    zoom: "scale(0.94)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate3d(0,0,0) scale(1)"
          : transforms[direction] || transforms.up,
        transitionProperty: "opacity, transform",
        transitionDuration: "850ms",
        transitionDelay: `${delay}ms`,
        transitionTimingFunction:
          "cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {children}
    </div>
  );
}

// ==========================================
// COURSE IMAGE CARD
// ==========================================

function CourseImageCard({
  image,
  label,
  index,
  onClick,
}) {
  const Icon = image.icon;
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`${label} - Explore Courses`}
      className={`course-visual-card course-visual-card-${index + 1} group relative block aspect-[1.15/1] w-full overflow-hidden rounded-2xl border border-white/15 bg-[#123572] text-left shadow-[0_15px_40px_rgba(0,0,0,0.22)] transition-[border-color,box-shadow] duration-500 hover:border-orange-400/70 hover:shadow-[0_20px_48px_rgba(0,0,0,0.32)]`}
      style={{
        "--card-delay": `${index * -1.1}s`,
        "--card-accent": image.accent,
      }}
    >
      {!imageFailed ? (
        <img
          src={image.src}
          alt={`${label} skills training`}
          loading={index < 2 ? "eager" : "lazy"}
          decoding="async"
          onError={() => setImageFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#153E82] to-[#061B50]">
          <Icon
            className="h-16 w-16 opacity-30"
            color={image.accent}
            strokeWidth={1.1}
          />
        </div>
      )}

      {/* DARK GRADIENT */}
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061B50]/95 via-[#061B50]/20 to-transparent" />

      {/* SCANNING LIGHT */}
      <span className="course-card-scan pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent" />

      {/* MIRROR SHINE */}
      <span className="course-card-shine pointer-events-none absolute inset-0" />

      {/* TOP ARROW */}
      <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-[#061B50]/50 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
        <MoveUpRight className="h-4 w-4" />
      </span>

      {/* BOTTOM LABEL */}
      <span className="absolute bottom-0 left-0 right-0 z-10 flex items-center gap-2 p-3 sm:p-4">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-600 text-white shadow-lg"
        >
          <Icon className="h-4 w-4" />
        </span>

        <span className="text-[11px] font-bold leading-tight text-white sm:text-xs">
          {label}
        </span>
      </span>
    </button>
  );
}

// ==========================================
// INTERACTIVE PHOTO COLLAGE
// ==========================================

function CourseCollage({ t, onExplore }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)")
        .matches
    ) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      x: -y * 5,
      y: x * 5,
    });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      className="course-collage-wrapper relative mx-auto w-full max-w-[540px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      {/* BACKGROUND GLOW */}
      <div
        aria-hidden="true"
        className="course-collage-glow pointer-events-none absolute inset-10 rounded-full bg-orange-500/20 blur-[75px]"
      />

      {/* DECORATIVE ORBIT */}
      <div
        aria-hidden="true"
        className="course-collage-orbit pointer-events-none absolute -inset-4 rounded-[30px] border border-dashed border-white/10"
      />

      {/* TILTING CONTAINER */}
      <div
        className="course-collage-tilt relative"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {courseImages.map((image, index) => (
            <div
              key={image.key}
              className={
                index % 2 === 1
                  ? "translate-y-5"
                  : ""
              }
            >
              <CourseImageCard
                image={image}
                label={t[image.key]}
                index={index}
                onClick={onExplore}
              />
            </div>
          ))}
        </div>

        {/* CENTER FLOATING BADGE */}
        <div className="course-collage-center-badge pointer-events-none absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/25 bg-[#061B50]/95 px-4 py-2.5 text-white shadow-2xl backdrop-blur-md sm:flex">
          <Sparkles className="h-4 w-4 text-orange-400" />

          <span className="text-xs font-bold">
            {t.floatingLabel}
          </span>
        </div>
      </div>

      {/* SMALL FLOATING INFO CARD */}
      <div className="course-collage-info pointer-events-none absolute -bottom-6 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 rounded-xl border border-white/15 bg-[#102E66] px-4 py-3 shadow-2xl sm:flex">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/15 text-orange-400">
          <GraduationCap className="h-5 w-5" />
        </div>

        <div>
          <p className="text-xs font-extrabold text-white">
            {t.visualCaption}
          </p>

          <p className="mt-0.5 whitespace-nowrap text-[10px] text-white/65">
            {t.visualSubcaption}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// MAIN HERO COMPONENT
// ==========================================

export default function CourseHero() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const navigate = useNavigate();

  // ========================================
  // EXPLORE COURSES BUTTON
  // ========================================

  const handleExploreCourses = () => {
    const courseSection =
      document.getElementById("course-categories") ||
      document.getElementById("course-programs");

    if (courseSection) {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      courseSection.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });

      return;
    }

    // FALLBACK IF CATEGORIES SECTION
    // HAS NOT BEEN ADDED YET
    navigate("/programs");
  };

  // ========================================
  // ENQUIRE NOW BUTTON
  // ========================================

  const handleEnquireNow = () => {
    const message =
      language === "mr"
        ? "नमस्कार सक्षम फाउंडेशन, मला तुमच्या Healthcare, Industrial, BFSI, Financial Accounting, AI आणि Digital Marketing Courses बद्दल अधिक माहिती हवी आहे. कृपया प्रवेश प्रक्रिया, फी आणि उपलब्ध Batches बद्दल मार्गदर्शन करा."
        : "Hello Saksham Foundation, I would like to enquire about your training courses, including Healthcare, Industrial Skills, BFSI, Financial Accounting, AI and Digital Marketing. Please share details about admissions, fees, eligibility and available batches.";

    const whatsappUrl =
      "https://wa.me/918830223458?text=" +
      encodeURIComponent(message);

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const features = [
    t.feature1,
    t.feature2,
    t.feature3,
  ];

  return (
    <section
      id="course-hero"
      aria-labelledby="course-hero-heading"
      className="relative isolate overflow-hidden bg-[#061B50] text-white"
    >
      {/* ==================================== */}
      {/* MOVING BACKGROUND */}
      {/* ==================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="course-hero-orb-one absolute -right-28 -top-32 h-[470px] w-[470px] rounded-full bg-blue-500/20 blur-[95px]" />

        <div className="course-hero-orb-two absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-orange-500/12 blur-[95px]" />

        {/* GRID PATTERN */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.3) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.3) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "45px 45px",
          }}
        />

        {/* ANIMATED LIGHT BEAM */}
        <div className="course-hero-light-beam absolute inset-y-0 left-0 w-[35%] bg-gradient-to-r from-transparent via-blue-400/[0.06] to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-br from-[#061B50]/60 via-transparent to-[#0B2F65]/50" />
      </div>

      {/* ==================================== */}
      {/* MAIN CONTENT */}
      {/* ==================================== */}

      <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 lg:min-h-[680px] lg:grid-cols-12 lg:gap-12 lg:px-10 lg:py-20">

        {/* ================================= */}
        {/* MOBILE - IMAGES FIRST */}
        {/* ================================= */}

        <div className="order-1 mb-4 lg:order-2 lg:col-span-6 lg:mb-0">
          <Reveal direction="right" delay={120}>
            <CourseCollage
              t={t}
              onExplore={handleExploreCourses}
            />
          </Reveal>
        </div>

        {/* ================================= */}
        {/* LEFT SIDE CONTENT */}
        {/* ================================= */}

        <div className="order-2 lg:order-1 lg:col-span-6">
          {/* BADGE */}
          <Reveal direction="left">
            <div className="course-hero-badge mb-5 inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-400/10 px-4 py-2">
              <GraduationCap className="h-4 w-4 text-orange-400" />

              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-orange-300 sm:text-xs">
                {t.badge}
              </span>
            </div>
          </Reveal>

          {/* HEADING */}
          <Reveal direction="up" delay={100}>
            <h1
              id="course-hero-heading"
              className="max-w-xl text-[34px] font-extrabold leading-[1.17] tracking-tight sm:text-[44px] lg:text-[49px] xl:text-[54px]"
            >
              <span className="block">
                {t.title1}
              </span>

              <span className="course-hero-highlight mt-1 block text-orange-400">
                {t.title2}
              </span>

              <span className="mt-1 block">
                {t.title3}
              </span>
            </h1>
          </Reveal>

          {/* DESCRIPTION */}
          <Reveal direction="up" delay={170}>
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
              {t.description}
            </p>
          </Reveal>

          {/* FEATURES */}
          <Reveal direction="up" delay={230}>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="course-hero-feature flex items-center gap-2"
                  style={{
                    animationDelay: `${450 + index * 130}ms`,
                  }}
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-400" />

                  <span className="text-xs font-semibold text-white/85">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ================================= */}
          {/* ACTIVE CTA BUTTONS */}
          {/* ================================= */}

          <Reveal direction="up" delay={290}>
            <div className="mt-8 flex flex-wrap items-center gap-3">

              {/* EXPLORE COURSES */}
              <button
                type="button"
                onClick={handleExploreCourses}
                className="course-hero-primary group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-orange-600 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-[0_14px_32px_rgba(234,88,12,0.24)]"
              >
                <span className="course-hero-button-shine pointer-events-none absolute inset-0" />

                <span className="relative z-10">
                  {t.primaryCTA}
                </span>

                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* WHATSAPP ENQUIRY */}
              <button
                type="button"
                onClick={handleEnquireNow}
                className="course-hero-secondary group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/10"
              >
                <span>
                  {t.secondaryCTA}
                </span>

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

            </div>
          </Reveal>

        </div>
      </div>

      {/* BOTTOM ACCENT */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-orange-500 via-orange-300 to-blue-500" />

      {/* ==================================== */}
      {/* ALL ANIMATIONS */}
      {/* ==================================== */}

      <style>{`
        /* 01 - BACKGROUND GLOW MOVEMENT */

        @keyframes courseOrbOne {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-35px, 25px);
          }
        }

        @keyframes courseOrbTwo {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(35px, -25px);
          }
        }

        #course-hero .course-hero-orb-one {
          animation: courseOrbOne 12s ease-in-out infinite;
        }

        #course-hero .course-hero-orb-two {
          animation: courseOrbTwo 15s ease-in-out infinite;
        }

        /* 02 - MOVING BACKGROUND LIGHT */

        @keyframes courseLightSweep {
          from {
            transform: translateX(-160%);
          }
          to {
            transform: translateX(480%);
          }
        }

        #course-hero .course-hero-light-beam {
          animation: courseLightSweep 13s linear infinite;
        }

        /* 03 - COLLAGE TILT */

        #course-hero .course-collage-tilt {
          transform-style: preserve-3d;
          transition: transform 350ms ease-out;
        }

        /* 04 - FLOATING IMAGE CARDS */

        @keyframes courseCardFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        #course-hero .course-visual-card {
          animation: courseCardFloat 5s ease-in-out infinite;
          animation-delay: var(--card-delay);
        }

        /* 05 - MOVING COLLAGE ORBIT */

        @keyframes courseOrbitRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        #course-hero .course-collage-orbit {
          animation: courseOrbitRotate 35s linear infinite;
        }

        /* 06 - COLLAGE GLOW PULSE */

        @keyframes courseCollageGlow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.9);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.1);
          }
        }

        #course-hero .course-collage-glow {
          animation: courseCollageGlow 6s ease-in-out infinite;
        }

        /* 07 - CARD SCANNING LINE */

        @keyframes courseCardScan {
          0% {
            top: -5%;
            opacity: 0;
          }
          15% {
            opacity: 0.7;
          }
          75% {
            opacity: 0.5;
          }
          100% {
            top: 105%;
            opacity: 0;
          }
        }

        #course-hero .course-card-scan {
          animation: courseCardScan 6s linear infinite;
          animation-delay: var(--card-delay);
        }

        /* 08 - IMAGE MIRROR SHINE */

        #course-hero .course-card-shine {
          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(255,255,255,0.05) 35%,
            rgba(255,255,255,0.42) 50%,
            rgba(255,255,255,0.05) 65%,
            transparent 80%
          );
          transform: translateX(-160%);
          transition: transform 850ms ease;
        }

        #course-hero .course-visual-card:hover
        .course-card-shine {
          transform: translateX(160%);
        }

        /* 09 - CENTER BADGE FLOAT */

        @keyframes courseCenterBadgeFloat {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-7px);
          }
        }

        #course-hero .course-collage-center-badge {
          animation: courseCenterBadgeFloat 4s ease-in-out infinite;
        }

        /* 10 - INFO BADGE FLOAT */

        @keyframes courseInfoFloat {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-6px);
          }
        }

        #course-hero .course-collage-info {
          animation: courseInfoFloat 5s ease-in-out infinite;
        }

        /* 11 - BADGE GLOW */

        @keyframes courseBadgeGlow {
          0%, 100% {
            box-shadow: 0 0 0 rgba(249,115,22,0);
          }
          50% {
            box-shadow: 0 0 25px rgba(249,115,22,0.12);
          }
        }

        #course-hero .course-hero-badge {
          animation: courseBadgeGlow 4s ease-in-out infinite;
        }

        /* 12 - GRADIENT HEADING */

        #course-hero .course-hero-highlight {
          background:
            linear-gradient(
              90deg,
              #fb923c 0%,
              #fed7aa 40%,
              #fb923c 75%
            );

          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: courseHeadingShimmer 7s linear infinite;
        }

        @keyframes courseHeadingShimmer {
          from {
            background-position: 200% center;
          }
          to {
            background-position: 0% center;
          }
        }

        /* 13 - FEATURE ENTRANCE */

        @keyframes courseFeatureEnter {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        #course-hero .course-hero-feature {
          animation: courseFeatureEnter 650ms ease-out both;
        }

        /* 14 - CTA MIRROR SHINE */

        #course-hero .course-hero-button-shine {
          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(255,255,255,0.08) 38%,
            rgba(255,255,255,0.45) 50%,
            rgba(255,255,255,0.08) 62%,
            transparent 80%
          );
          transform: translateX(-160%);
          transition: transform 850ms ease;
        }

        #course-hero .course-hero-primary:hover
        .course-hero-button-shine {
          transform: translateX(160%);
        }

        /* 15 - KEYBOARD FOCUS */

        #course-hero button:focus-visible {
          outline: 3px solid #fb923c;
          outline-offset: 4px;
        }

        /* MOBILE RESPONSIVENESS */

        @media (max-width: 639px) {
          #course-hero .course-collage-wrapper {
            max-width: 100%;
          }

          #course-hero .course-visual-card {
            border-radius: 14px;
          }
        }

        /* REDUCED MOTION */

        @media (prefers-reduced-motion: reduce) {
          #course-hero .course-hero-orb-one,
          #course-hero .course-hero-orb-two,
          #course-hero .course-hero-light-beam,
          #course-hero .course-collage-orbit,
          #course-hero .course-collage-glow,
          #course-hero .course-visual-card,
          #course-hero .course-card-scan,
          #course-hero .course-collage-center-badge,
          #course-hero .course-collage-info,
          #course-hero .course-hero-badge,
          #course-hero .course-hero-highlight,
          #course-hero .course-hero-feature {
            animation: none !important;
          }

          #course-hero .course-card-shine,
          #course-hero .course-hero-button-shine,
          #course-hero .course-collage-tilt {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}


import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  HeartPulse,
  Users,
  CheckCircle2,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

// ==========================================
// ENGLISH + MARATHI CONTENT
// ==========================================

const translations = {
  en: [
    {
      id: 1,
      badge: "SKILL DEVELOPMENT NGO",

      title: "Empowering Youth & Women",
      highlight: "Through Skill Development",

      description:
        "Saksham Foundation is a Pune-based NGO dedicated to helping underserved youth and women gain practical skills, vocational training and better livelihood opportunities.",

      primaryCta: "Explore Our Programs",
      primaryLink: "/programs",

      secondaryCta: "Register Now",
      secondaryLink: "/contact#register",

      features: [
        "Skill Development",
        "Career Readiness",
        "Community Empowerment",
      ],

      imageLabel: "Our Mission",
      imageText: "Skills for a Better Future",
    },

    {
      id: 2,
      badge: "HEALTHCARE SKILL DEVELOPMENT",

      title: "Learn Healthcare Skills.",
      highlight: "Build Your Future.",

      description:
        "Our free General Duty Assistant (GDA) training program combines classroom learning, hospital-based practical training and placement support to help eligible youth prepare for healthcare careers.",

      primaryCta: "Explore GDA Course",
      primaryLink: "/programs#featured-gda",

      secondaryCta: "Apply Now",
      secondaryLink: "/contact#register",

      features: [
        "Free GDA Training",
        "Hospital OJT",
        "Placement Support",
      ],

      imageLabel: "Healthcare Training",
      imageText: "Learning Through Practice",
    },

    {
      id: 3,
      badge: "WOMEN EMPOWERMENT & CSR",

      title: "Building Skills.",
      highlight: "Creating Livelihood Opportunities.",

      description:
        "Through vocational education, digital learning and CSR-supported initiatives, we work to empower underserved communities, especially youth and women.",

      primaryCta: "About Our Foundation",
      primaryLink: "/about",

      secondaryCta: "Partner With Us",
      secondaryLink: "/csr",

      features: [
        "Women Empowerment",
        "Digital Skills",
        "CSR Partnerships",
      ],

      imageLabel: "Community Empowerment",
      imageText: "Creating Opportunities Together",
    },
  ],

  mr: [
    {
      id: 1,
      badge: "कौशल्य विकासासाठी कार्यरत सामाजिक संस्था",

      title: "युवक व महिलांचे सक्षमीकरण",
      highlight: "कौशल्य विकासाच्या माध्यमातून",

      description:
        "सक्षम फाउंडेशन ही पुण्यातील सामाजिक संस्था आहे. आर्थिक व सामाजिकदृष्ट्या वंचित युवक आणि महिलांना प्रात्यक्षिक कौशल्ये, व्यावसायिक प्रशिक्षण आणि उपजीविकेच्या चांगल्या संधी उपलब्ध व्हाव्यात यासाठी संस्था कार्यरत आहे.",

      primaryCta: "आमचे प्रशिक्षण पाहा",
      primaryLink: "/programs",

      secondaryCta: "आता नोंदणी करा",
      secondaryLink: "/contact#register",

      features: [
        "कौशल्य विकास",
        "रोजगारासाठी तयारी",
        "सामाजिक सक्षमीकरण",
      ],

      imageLabel: "आमचे ध्येय",
      imageText: "कौशल्यातून उज्ज्वल भविष्य",
    },

    {
      id: 2,
      badge: "आरोग्यसेवा कौशल्य प्रशिक्षण",

      title: "आरोग्यसेवेतील कौशल्ये शिका.",
      highlight: "उज्ज्वल भविष्य घडवा.",

      description:
        "आमच्या मोफत जनरल ड्युटी असिस्टंट (GDA) प्रशिक्षण कार्यक्रमात वर्गातील शिक्षण, रुग्णालयातील प्रत्यक्ष प्रशिक्षण आणि प्लेसमेंट सहाय्याचा समावेश आहे. पात्र युवकांना आरोग्यसेवा क्षेत्रातील करिअरसाठी तयार करणे हा यामागचा उद्देश आहे.",

      primaryCta: "GDA प्रशिक्षण जाणून घ्या",
      primaryLink: "/programs#featured-gda",

      secondaryCta: "आता अर्ज करा",
      secondaryLink: "/contact#register",

      features: [
        "मोफत GDA प्रशिक्षण",
        "रुग्णालयातील OJT",
        "प्लेसमेंट सहाय्य",
      ],

      imageLabel: "आरोग्यसेवा प्रशिक्षण",
      imageText: "प्रात्यक्षिकातून कौशल्य विकास",
    },

    {
      id: 3,
      badge: "महिला सक्षमीकरण आणि CSR",

      title: "कौशल्यांची निर्मिती.",
      highlight: "स्वावलंबनाच्या संधी.",

      description:
        "व्यावसायिक शिक्षण, डिजिटल कौशल्य प्रशिक्षण आणि CSR-सहाय्यित उपक्रमांच्या माध्यमातून वंचित समुदायांतील, विशेषतः युवक व महिलांच्या सक्षमीकरणासाठी आम्ही कार्य करतो.",

      primaryCta: "आमच्या संस्थेबद्दल",
      primaryLink: "/about",

      secondaryCta: "आमच्यासोबत भागीदारी करा",
      secondaryLink: "/csr",

      features: [
        "महिला सक्षमीकरण",
        "डिजिटल कौशल्ये",
        "CSR भागीदारी",
      ],

      imageLabel: "सामाजिक सक्षमीकरण",
      imageText: "एकत्र येऊन संधी निर्माण करूया",
    },
  ],
};

// ==========================================
// ORIGINAL IMAGES + COLORS
// ==========================================

const slideStyles = [
  {
    badgeIcon: Sparkles,
    image:
      "/g15.jpeg",
    highlightColor: "text-orange-600",
    badgeBg:
      "bg-orange-100 text-orange-800 border-orange-200",
  },
  {
    badgeIcon: HeartPulse,
    image:
      "g38.jpeg",
    highlightColor: "text-green-700",
    badgeBg:
      "bg-green-100 text-green-800 border-green-200",
  },
  {
    badgeIcon: Users,
    image:
      "/g19.jpeg",
    highlightColor: "text-orange-600",
    badgeBg:
      "bg-blue-100 text-blue-900 border-blue-200",
  },
];

const SLIDE_DURATION = 6500;

// ==========================================
// HERO SLIDER
// ==========================================

export default function HeroSliderWhite() {
  const { language } = useLanguage();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [animationKey, setAnimationKey] = useState(0);

  const [tilt, setTilt] = useState({
    x: 0,
    y: 0,
  });

  const imageFrameRef = useRef(null);

  const slides = translations[language] || translations.en;

  const current = slides[currentSlide];
  const style = slideStyles[currentSlide];
  const IconComponent = style.badgeIcon;

  const reduceMotion = useRef(false);

  // ========================================
  // REDUCED MOTION
  // ========================================

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotion = () => {
      reduceMotion.current = media.matches;
    };

    updateMotion();

    media.addEventListener?.(
      "change",
      updateMotion
    );

    return () => {
      media.removeEventListener?.(
        "change",
        updateMotion
      );
    };
  }, []);

  // ========================================
  // AUTO SLIDER
  // ========================================

  useEffect(() => {
    if (isPaused || reduceMotion.current) return;

    const timer = window.setInterval(() => {
      setCurrentSlide((prev) =>
        (prev + 1) % slides.length
      );

      setAnimationKey((prev) => prev + 1);
    }, SLIDE_DURATION);

    return () => window.clearInterval(timer);
  }, [isPaused, slides.length]);

  // ========================================
  // SLIDER CONTROLS
  // ========================================

  const goToSlide = (index) => {
    if (index === currentSlide) return;

    setCurrentSlide(index);
    setAnimationKey((prev) => prev + 1);

    setTilt({ x: 0, y: 0 });
  };

  const nextSlide = () => {
    goToSlide(
      (currentSlide + 1) % slides.length
    );
  };

  const prevSlide = () => {
    goToSlide(
      (currentSlide - 1 + slides.length) %
        slides.length
    );
  };

  // ========================================
  // 3D MOUSE TILT
  // ========================================

  const handleImageMouseMove = (event) => {
    if (reduceMotion.current) return;

    const rect =
      imageFrameRef.current?.getBoundingClientRect();

    if (!rect) return;

    const x =
      (event.clientX - rect.left) / rect.width;

    const y =
      (event.clientY - rect.top) / rect.height;

    setTilt({
      x: (0.5 - y) * 5,
      y: (x - 0.5) * 5,
    });

    imageFrameRef.current?.style.setProperty(
      "--shine-x",
      `${x * 100}%`
    );

    imageFrameRef.current?.style.setProperty(
      "--shine-y",
      `${y * 100}%`
    );
  };

  const handleImageMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // ========================================
  // RENDER
  // ========================================

  return (
    <section
      aria-label={
        language === "mr"
          ? "सक्षम फाउंडेशन मुख्य स्लायडर"
          : "Saksham Foundation hero slider"
      }
      aria-roledescription="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget
          )
        ) {
          setIsPaused(false);
        }
      }}
      className="relative overflow-hidden bg-white py-16 lg:py-24"
    >
      {/* ================================= */}
      {/* FLOATING BACKGROUND GLOWS */}
      {/* ================================= */}

      <div className="saksham-bg-orange pointer-events-none absolute left-10 top-10 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />

      <div className="saksham-bg-blue pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">

          {/* ================================= */}
          {/* LEFT CONTENT */}
          {/* ================================= */}

          <div
            key={`content-${animationKey}-${language}`}
            className="space-y-6 text-left lg:col-span-7"
            aria-live="polite"
            aria-atomic="true"
          >
            {/* BADGE */}
            <div
              className={`saksham-reveal saksham-reveal-1 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold sm:text-sm ${style.badgeBg}`}
            >
              <IconComponent className="h-4 w-4 shrink-0" />

              <span>{current.badge}</span>
            </div>

            {/* MAIN HEADING */}
            <h1 className="saksham-reveal saksham-reveal-2 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-5xl">
              {current.title}
              <br />

              <span className={style.highlightColor}>
                {current.highlight}
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="saksham-reveal saksham-reveal-3 max-w-xl text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
              {current.description}
            </p>

            {/* FEATURE CARDS */}
            <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">

              {current.features.map((feature, index) => (
                <div
                  key={`${current.id}-${index}`}
                  className={`saksham-feature saksham-feature-${index + 1} group flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:bg-green-50 hover:shadow-md`}
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600 transition-transform duration-300 group-hover:scale-110" />

                  <span>{feature}</span>
                </div>
              ))}

            </div>

            {/* ================================= */}
            {/* ANIMATED CTA BUTTONS */}
            {/* ================================= */}

            <div className="saksham-reveal saksham-reveal-5 flex flex-col items-stretch gap-4 pt-4 sm:flex-row sm:items-center">

              {/* PRIMARY SHINE BUTTON */}
              <Link
                to={current.primaryLink}
                className="saksham-primary-btn group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-blue-900 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-[0_15px_30px_rgba(6,27,80,0.25)] active:translate-y-0"
              >
                {/* SHINE SWEEP */}
                <span
                  aria-hidden="true"
                  className="saksham-btn-shine pointer-events-none absolute inset-0"
                />

                {/* BUTTON CONTENT */}
                <span className="relative z-10">
                  {current.primaryCta}
                </span>

                <ArrowRight className="relative z-10 ml-2 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>

              {/* SECONDARY GLOW BUTTON */}
              <Link
                to={current.secondaryLink}
                className="saksham-secondary-btn group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-slate-200 bg-white px-8 py-3.5 text-base font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:bg-orange-50 hover:text-orange-700 hover:shadow-[0_12px_25px_rgba(234,88,12,0.12)] active:translate-y-0"
              >
                {/* BORDER GLOW */}
                <span
                  aria-hidden="true"
                  className="saksham-secondary-glow pointer-events-none absolute inset-0"
                />

                <span className="relative z-10">
                  {current.secondaryCta}
                </span>
              </Link>

            </div>
          </div>

          {/* ================================= */}
          {/* RIGHT IMAGE */}
          {/* ================================= */}

          <div className="relative flex justify-center lg:col-span-5">

            {/* DECORATIVE BACKING */}
            <div className="saksham-image-backing absolute inset-0 rotate-2 scale-105 rounded-3xl bg-gradient-to-tr from-orange-200 to-blue-200 opacity-70 blur-sm" />

            {/* IMAGE ENTRANCE */}
            <div
              key={`image-frame-${animationKey}`}
              className="saksham-image-entrance relative w-full"
            >
              {/* 3D TILT FRAME */}
              <div
                ref={imageFrameRef}
                onMouseMove={handleImageMouseMove}
                onMouseLeave={handleImageMouseLeave}
                className="saksham-image-frame relative h-[380px] w-full overflow-hidden rounded-3xl border-4 border-white bg-white shadow-2xl sm:h-[420px]"
                style={{
                  transform: `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                }}
              >
                {/* CINEMATIC ZOOM IMAGE */}
                <img
                  key={current.id}
                  src={style.image}
                  alt={current.badge}
                  loading={
                    currentSlide === 0
                      ? "eager"
                      : "lazy"
                  }
                  decoding="async"
                  className="saksham-image-zoom h-full w-full object-cover"
                />

                {/* MIRROR SHINE EFFECT */}
                <div
                  aria-hidden="true"
                  className="saksham-mirror-shine pointer-events-none absolute inset-0 z-10"
                />

                {/* MOVING LIGHT REFLECTION */}
                <div
                  aria-hidden="true"
                  className="saksham-cursor-glow pointer-events-none absolute inset-0 z-10"
                />

                {/* IMAGE BADGE */}
                <div className="saksham-image-label absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between rounded-2xl border border-white/20 bg-white/90 p-4 shadow-lg backdrop-blur-md">

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {current.imageLabel}
                    </p>

                    <p className="text-sm font-bold text-blue-900">
                      {current.imageText}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-600 text-white shadow-md">
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ================================= */}
        {/* SLIDER NAVIGATION */}
        {/* ================================= */}

        <div className="mt-12 flex items-center justify-between border-t border-slate-100 pt-8">

          {/* DOT NAVIGATION */}
          <div
            className="flex items-center gap-2"
            role="group"
            aria-label={
              language === "mr"
                ? "स्लाइड निवडा"
                : "Select slide"
            }
          >
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={
                  language === "mr"
                    ? `स्लाइड ${index + 1} पहा`
                    : `Go to slide ${index + 1}`
                }
                aria-current={
                  currentSlide === index
                    ? "true"
                    : undefined
                }
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-10 bg-orange-600"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* ARROW NAVIGATION */}
          <div className="flex items-center gap-3">

            {/* PREVIOUS */}
            <button
              type="button"
              onClick={prevSlide}
              className="group rounded-xl bg-slate-100 p-3 text-slate-700 shadow-sm transition-all duration-300 hover:-translate-x-1 hover:bg-slate-200"
              aria-label={
                language === "mr"
                  ? "मागील स्लाइड"
                  : "Previous slide"
              }
            >
              <ChevronLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>

            {/* NEXT */}
            <button
              type="button"
              onClick={nextSlide}
              className="group rounded-xl bg-blue-900 p-3 text-white shadow-md transition-all duration-300 hover:translate-x-1 hover:bg-blue-800"
              aria-label={
                language === "mr"
                  ? "पुढील स्लाइड"
                  : "Next slide"
              }
            >
              <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>

          </div>
        </div>
      </div>

      {/* ================================= */}
      {/* COMPONENT-SCOPED ANIMATIONS */}
      {/* ================================= */}

      <style>{`
        /* CONTENT STAGGER REVEAL */

        @keyframes sakshamReveal {
          from {
            opacity: 0;
            transform: translate3d(0, 35px, 0);
            filter: blur(6px);
          }

          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            filter: blur(0);
          }
        }

        .saksham-reveal {
          animation: sakshamReveal 900ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .saksham-reveal-1 {
          animation-delay: 80ms;
        }

        .saksham-reveal-2 {
          animation-delay: 180ms;
        }

        .saksham-reveal-3 {
          animation-delay: 300ms;
        }

        .saksham-reveal-5 {
          animation-delay: 620ms;
        }

        /* FEATURE CARD REVEAL */

        @keyframes sakshamFeatureReveal {
          from {
            opacity: 0;
            transform: translateY(25px) scale(0.95);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .saksham-feature {
          animation: sakshamFeatureReveal 800ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .saksham-feature-1 {
          animation-delay: 380ms;
        }

        .saksham-feature-2 {
          animation-delay: 470ms;
        }

        .saksham-feature-3 {
          animation-delay: 560ms;
        }

        /* BUTTON MIRROR SHINE */

        .saksham-btn-shine {
          background: linear-gradient(
            110deg,
            transparent 25%,
            rgba(255,255,255,0.08) 38%,
            rgba(255,255,255,0.45) 50%,
            rgba(255,255,255,0.08) 62%,
            transparent 75%
          );

          transform: translateX(-150%);
          transition: transform 750ms ease;
        }

        .saksham-primary-btn:hover .saksham-btn-shine {
          transform: translateX(150%);
        }

        /* SECONDARY BUTTON LIGHT */

        .saksham-secondary-glow {
          background: linear-gradient(
            110deg,
            transparent,
            rgba(251,146,60,0.15),
            transparent
          );

          transform: translateX(-110%);
          transition: transform 750ms ease;
        }

        .saksham-secondary-btn:hover
        .saksham-secondary-glow {
          transform: translateX(110%);
        }

        /* IMAGE ENTER */

        @keyframes sakshamImageEntrance {
          from {
            opacity: 0;
            transform: translateX(50px) scale(0.95);
          }

          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .saksham-image-entrance {
          animation: sakshamImageEntrance 1050ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* IMAGE 3D TILT */

        .saksham-image-frame {
          transition: transform 180ms ease-out,
            box-shadow 300ms ease;
          transform-style: preserve-3d;
          --shine-x: 50%;
          --shine-y: 50%;
        }

        .saksham-image-frame:hover {
          box-shadow:
            0 30px 65px rgba(6,27,80,0.24);
        }

        /* CINEMATIC IMAGE ZOOM */

        @keyframes sakshamImageZoom {
          from {
            transform: scale(1.12);
          }

          to {
            transform: scale(1);
          }
        }

        .saksham-image-zoom {
          animation: sakshamImageZoom 6500ms
            ease-out both;
        }

        /* DIAGONAL MIRROR SHINE */

        .saksham-mirror-shine {
          background: linear-gradient(
            115deg,
            transparent 25%,
            rgba(255,255,255,0.02) 35%,
            rgba(255,255,255,0.35) 46%,
            rgba(255,255,255,0.58) 50%,
            rgba(255,255,255,0.18) 54%,
            transparent 68%
          );

          transform: translateX(-180%);
          opacity: 0;
        }

        .saksham-image-frame:hover
        .saksham-mirror-shine {
          animation: sakshamMirrorSweep 1050ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes sakshamMirrorSweep {
          0% {
            opacity: 0;
            transform: translateX(-180%);
          }

          20% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translateX(180%);
          }
        }

        /* CURSOR FOLLOWING LIGHT */

        .saksham-cursor-glow {
          background: radial-gradient(
            250px circle at
            var(--shine-x) var(--shine-y),
            rgba(255,255,255,0.24),
            transparent 65%
          );

          opacity: 0;
          transition: opacity 350ms ease;
        }

        .saksham-image-frame:hover
        .saksham-cursor-glow {
          opacity: 1;
        }

        /* IMAGE LABEL REVEAL */

        @keyframes sakshamLabelEntrance {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .saksham-image-label {
          animation: sakshamLabelEntrance 800ms
            ease-out 500ms both;
        }

        /* BACKING FLOAT */

        @keyframes sakshamBackingFloat {
          0%, 100% {
            transform: rotate(2deg)
              scale(1.05) translateY(0);
          }

          50% {
            transform: rotate(3deg)
              scale(1.06) translateY(-10px);
          }
        }

        .saksham-image-backing {
          animation: sakshamBackingFloat 7s
            ease-in-out infinite;
        }

        /* BACKGROUND GLOW MOTION */

        @keyframes sakshamBgOrange {
          0%, 100% {
            transform: translate(0,0);
          }

          50% {
            transform: translate(30px,20px);
          }
        }

        @keyframes sakshamBgBlue {
          0%, 100% {
            transform: translate(0,0);
          }

          50% {
            transform: translate(-30px,-20px);
          }
        }

        .saksham-bg-orange {
          animation: sakshamBgOrange 10s
            ease-in-out infinite;
        }

        .saksham-bg-blue {
          animation: sakshamBgBlue 12s
            ease-in-out infinite;
        }

        /* ACCESSIBILITY */

        @media (prefers-reduced-motion: reduce) {
          .saksham-reveal,
          .saksham-feature,
          .saksham-image-entrance,
          .saksham-image-zoom,
          .saksham-image-label,
          .saksham-image-backing,
          .saksham-bg-orange,
          .saksham-bg-blue,
          .saksham-mirror-shine,
          .saksham-btn-shine,
          .saksham-secondary-glow {
            animation: none !important;
            transition: none !important;
            filter: none !important;
            opacity: 1 !important;
          }

          .saksham-image-frame {
            transform: none !important;
          }

          .saksham-cursor-glow {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

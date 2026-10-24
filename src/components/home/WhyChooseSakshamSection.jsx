
import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  BookOpenCheck,
  UserRoundCheck,
  FlaskConical,
  Hospital,
  BriefcaseBusiness,
  HeartHandshake,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ==========================================
// ENGLISH + MARATHI TRANSLATIONS
// ==========================================

const translations = {
  en: {
    sectionLabel: "WHY SAKSHAM",
    heading1: "More Than Training.",
    heading2: "A Pathway to Employment.",
    advantageLabel: "SAKSHAM ADVANTAGE",
    benefitsLabel: "KEY BENEFITS",
    advantagesLabel: "ADVANTAGES",
    ofLabel: "OF",
    selectorLabel: "Explore Saksham Foundation strengths",
    nextLabel: "Next advantage",

    features: [
      {
        title: "Industry-Aligned Curriculum",
        description:
          "Training designed around workplace-relevant skills.",
        detail:
          "Our training approach focuses on practical, workplace-relevant knowledge so learners can understand the expectations of their chosen industry.",
        points: [
          "Industry-relevant learning",
          "Professional skill development",
          "Employment-focused approach",
        ],
      },
      {
        title: "Experienced Trainers",
        description:
          "Guidance from qualified training professionals.",
        detail:
          "Experienced training professionals guide participants through structured learning, skill development and practical understanding.",
        points: [
          "Qualified training guidance",
          "Structured learning sessions",
          "Skill-focused mentoring",
        ],
      },
      {
        title: "Practical Learning",
        description:
          "Classroom knowledge supported by hands-on sessions.",
        detail:
          "We combine classroom education with hands-on learning to help participants develop the confidence and skills required in real working environments.",
        points: [
          "Hands-on activities",
          "Classroom-to-practice learning",
          "Real-world skill application",
        ],
      },
      {
        title: "Hospital & Industry Exposure",
        description:
          "Real-world learning through OJT and training partnerships.",
        detail:
          "Through relevant industry and hospital exposure, learners can understand workplace practices and gain experience in professional settings.",
        points: [
          "On-the-job training",
          "Workplace familiarity",
          "Practical industry exposure",
        ],
      },
      {
        title: "Career & Placement Support",
        description:
          "Resume preparation, interview readiness and employment assistance.",
        detail:
          "Our career support approach prepares learners for employment through guidance, interview preparation and connections with potential employers.",
        points: [
          "Resume and interview readiness",
          "Employment guidance",
          "Placement assistance",
        ],
      },
      {
        title: "Community-Focused Approach",
        description:
          "Special attention to underprivileged youth and women.",
        detail:
          "Our initiatives prioritize underserved communities, helping youth and women access education, skill development and livelihood opportunities.",
        points: [
          "Inclusive learning opportunities",
          "Women and youth empowerment",
          "Community outreach",
        ],
      },
    ],
  },

  mr: {
    sectionLabel: "सक्षम फाउंडेशनची वैशिष्ट्ये",
    heading1: "केवळ प्रशिक्षण नाही.",
    heading2: "रोजगाराकडे नेणारा मार्ग.",
    advantageLabel: "सक्षमची वैशिष्ट्ये",
    benefitsLabel: "प्रमुख फायदे",
    advantagesLabel: "वैशिष्ट्ये",
    ofLabel: "पैकी",
    selectorLabel: "सक्षम फाउंडेशनची प्रमुख वैशिष्ट्ये पाहा",
    nextLabel: "पुढील वैशिष्ट्य",

    features: [
      {
        title: "उद्योगाभिमुख अभ्यासक्रम",
        description:
          "उद्योगक्षेत्रातील गरजांनुसार तयार केलेले कौशल्य प्रशिक्षण.",
        detail:
          "आमच्या प्रशिक्षण पद्धतीमध्ये उद्योगांच्या प्रत्यक्ष गरजांनुसार ज्ञान आणि कौशल्य विकासावर भर दिला जातो. त्यामुळे प्रशिक्षणार्थींना निवडलेल्या क्षेत्रातील कामाच्या अपेक्षा आणि आवश्यक कौशल्यांची समज मिळते.",
        points: [
          "उद्योगांच्या गरजांनुसार शिक्षण",
          "व्यावसायिक कौशल्यांचा विकास",
          "रोजगाराभिमुख प्रशिक्षण पद्धती",
        ],
      },
      {
        title: "अनुभवी प्रशिक्षक",
        description:
          "अनुभवी आणि पात्र प्रशिक्षकांकडून मार्गदर्शन.",
        detail:
          "अनुभवी प्रशिक्षकांच्या मार्गदर्शनाखाली प्रशिक्षणार्थींना नियोजनबद्ध शिक्षण, आवश्यक कौशल्यांचा विकास आणि प्रत्यक्ष कामाची समज मिळवण्यासाठी सहाय्य केले जाते.",
        points: [
          "पात्र प्रशिक्षकांचे मार्गदर्शन",
          "नियोजनबद्ध प्रशिक्षण सत्रे",
          "कौशल्य विकासासाठी मार्गदर्शन",
        ],
      },
      {
        title: "प्रात्यक्षिक शिक्षण",
        description:
          "वर्गातील शिक्षणासोबत प्रत्यक्ष सराव.",
        detail:
          "वर्गातील शिक्षण आणि प्रात्यक्षिक प्रशिक्षण यांची सांगड घालून प्रशिक्षणार्थींमध्ये आत्मविश्वास वाढवणे आणि प्रत्यक्ष कामासाठी आवश्यक कौशल्ये विकसित करणे हा आमचा उद्देश आहे.",
        points: [
          "प्रत्यक्ष सरावावर भर",
          "शिक्षणासोबत प्रात्यक्षिक अनुभव",
          "वास्तविक कामात कौशल्यांचा वापर",
        ],
      },
      {
        title: "रुग्णालय व उद्योगक्षेत्राचा अनुभव",
        description:
          "OJT आणि प्रशिक्षण सहकार्याद्वारे प्रत्यक्ष कामाची ओळख.",
        detail:
          "रुग्णालये आणि संबंधित उद्योगक्षेत्रांतील प्रत्यक्ष प्रशिक्षणाच्या संधींमुळे प्रशिक्षणार्थींना कार्यपद्धती समजून घेता येते आणि व्यावसायिक वातावरणाचा अनुभव मिळतो.",
        points: [
          "प्रत्यक्ष कामाच्या ठिकाणी प्रशिक्षण",
          "कार्यस्थळाच्या वातावरणाची ओळख",
          "उद्योगक्षेत्रातील प्रात्यक्षिक अनुभव",
        ],
      },
      {
        title: "करिअर व प्लेसमेंट सहाय्य",
        description:
          "रेझ्युमे, मुलाखतीची तयारी आणि रोजगारासाठी मार्गदर्शन.",
        detail:
          "करिअर मार्गदर्शन, मुलाखतीची तयारी आणि संभाव्य नियोक्त्यांशी संपर्क साधण्यासाठी सहाय्य करून प्रशिक्षणार्थींना रोजगाराच्या संधींसाठी तयार करण्यावर आमचा भर असतो.",
        points: [
          "रेझ्युमे व मुलाखतीची तयारी",
          "रोजगारविषयक मार्गदर्शन",
          "प्लेसमेंटसाठी सहाय्य",
        ],
      },
      {
        title: "समुदायकेंद्रित कार्यपद्धती",
        description:
          "वंचित युवक आणि महिलांच्या सक्षमीकरणावर विशेष भर.",
        detail:
          "वंचित समुदायांतील युवक आणि महिलांना शिक्षण, कौशल्य प्रशिक्षण आणि उपजीविकेच्या संधी उपलब्ध करून देण्यासाठी आमचे उपक्रम कार्यरत आहेत.",
        points: [
          "सर्वसमावेशक शिक्षणाच्या संधी",
          "महिला व युवक सक्षमीकरण",
          "समुदाय संपर्क व जनजागृती",
        ],
      },
    ],
  },
};

// ==========================================
// ICONS, NUMBERS & COLORS
// ==========================================

const featureStyles = [
  {
    icon: BookOpenCheck,
    number: "01",
    accent: "#F97316",
  },
  {
    icon: UserRoundCheck,
    number: "02",
    accent: "#2563EB",
  },
  {
    icon: FlaskConical,
    number: "03",
    accent: "#059669",
  },
  {
    icon: Hospital,
    number: "04",
    accent: "#0891B2",
  },
  {
    icon: BriefcaseBusiness,
    number: "05",
    accent: "#7C3AED",
  },
  {
    icon: HeartHandshake,
    number: "06",
    accent: "#E11D48",
  },
];

// ==========================================
// SCROLL REVEAL - NO EXTRA PACKAGE
// ==========================================

function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 850,
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reduced ||
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
    up: "translate3d(0, 42px, 0)",
    left: "translate3d(-45px, 0, 0)",
    right: "translate3d(45px, 0, 0)",
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
// MAIN SECTION
// ==========================================

export default function WhyChooseSakshamSection() {
  const [active, setActive] = useState(0);

  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const selected = t.features[active];
  const selectedStyle = featureStyles[active];
  const SelectedIcon = selectedStyle.icon;

  const formatNumber = (number) => {
    const value = String(number);

    if (language !== "mr") return value;

    return value.replace(
      /[0-9]/g,
      (digit) => "०१२३४५६७८९"[Number(digit)]
    );
  };

  const nextFeature = () => {
    setActive(
      (previous) =>
        (previous + 1) % featureStyles.length
    );
  };

  return (
    <section
      id="why-saksham"
      aria-labelledby="why-saksham-heading"
      className="relative overflow-hidden bg-white py-14 lg:py-20"
    >
      {/* ==================================== */}
      {/* SUBTLE ANIMATED BACKGROUND */}
      {/* ==================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="saksham-why-bg-blue absolute -right-40 -top-40 h-80 w-80 rounded-full bg-blue-50/60 blur-3xl" />

        <div className="saksham-why-bg-orange absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-50/70 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ==================================== */}
        {/* SECTION HEADER */}
        {/* ==================================== */}

        <div className="mb-11 text-center">

          <Reveal direction="up" duration={850}>
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-orange-600">

              <span className="saksham-why-line h-px w-7 bg-orange-500" />

              {t.sectionLabel}

              <span className="saksham-why-line h-px w-7 bg-orange-500" />

            </div>
          </Reveal>

          <Reveal
            direction="up"
            delay={100}
            duration={1050}
          >
            <h2
              id="why-saksham-heading"
              className="text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl lg:text-5xl"
            >
              {t.heading1}{" "}

              <span className="text-orange-600">
                {t.heading2}
              </span>
            </h2>
          </Reveal>

        </div>

        {/* ==================================== */}
        {/* INTERACTIVE FEATURE SELECTOR */}
        {/* ==================================== */}

        <div
          role="group"
          aria-label={t.selectorLabel}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
        >
          {featureStyles.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = active === index;
            const content = t.features[index];

            return (
              <Reveal
                key={feature.number}
                direction="up"
                duration={850}
                delay={(index % 3) * 100}
                className="h-full"
              >
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  aria-pressed={isActive}
                  style={{
                    "--feature-accent": feature.accent,
                  }}
                  className={`saksham-why-feature group relative flex min-h-[130px] h-full w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border px-3 py-5 text-center transition-all duration-300 ${
                    isActive
                      ? "saksham-why-feature-active border-[#061B50] bg-[#061B50] text-white shadow-[0_12px_30px_rgba(6,27,80,0.16)]"
                      : "border-slate-200 bg-[#F8FAFC] text-[#061B50] hover:border-orange-300 hover:bg-white hover:shadow-lg"
                  }`}
                >
                  {/* HOVER MIRROR SHINE */}
                  <span
                    aria-hidden="true"
                    className="saksham-why-card-shine pointer-events-none absolute inset-0"
                  />

                  {/* ACTIVE CARD GLOW */}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="saksham-why-active-glow pointer-events-none absolute inset-0"
                    />
                  )}

                  {/* ICON */}
                  <Icon
                    className={`saksham-why-feature-icon relative z-10 h-7 w-7 transition-transform duration-300 group-hover:scale-110 ${
                      isActive
                        ? "text-orange-400"
                        : "text-blue-900"
                    }`}
                    strokeWidth={1.8}
                  />

                  {/* TITLE */}
                  <span className="relative z-10 text-xs font-bold leading-snug sm:text-sm">
                    {content.title}
                  </span>

                  {/* ACTIVE ARROW */}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#061B50]" />
                  )}

                </button>
              </Reveal>
            );
          })}
        </div>

        {/* ==================================== */}
        {/* DYNAMIC SPOTLIGHT PANEL */}
        {/* ==================================== */}

        <Reveal
          direction="up"
          delay={100}
          duration={950}
        >
          <div className="saksham-why-spotlight relative mt-6 overflow-hidden rounded-[26px] border border-slate-200 bg-[#F8FAFC]">

            {/* TOP PROGRESS TRACK */}
            <div className="absolute inset-x-0 top-0 h-[3px] bg-slate-200">

              <div
                className="saksham-why-progress h-full bg-orange-500"
                style={{
                  width: `${
                    ((active + 1) / featureStyles.length) *
                    100
                  }%`,
                }}
              />

            </div>

            {/* SUBTLE PANEL GLOW */}
            <span
              aria-hidden="true"
              className="saksham-why-spotlight-glow pointer-events-none absolute inset-0"
            />

            <div className="relative z-10 grid items-center gap-8 p-6 sm:p-9 lg:grid-cols-12 lg:gap-12 lg:p-10">

              {/* ================================= */}
              {/* LEFT CONTENT */}
              {/* ================================= */}

              <div className="lg:col-span-7">

                {/* ICON + ADVANTAGE NUMBER */}
                <div className="mb-5 flex items-center gap-3">

                  <div
                    key={`icon-${active}`}
                    className="saksham-why-selected-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm"
                    style={{
                      color: selectedStyle.accent,
                    }}
                  >
                    <SelectedIcon className="h-6 w-6" />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    {t.advantageLabel} /{" "}
                    {formatNumber(selectedStyle.number)}
                  </span>

                </div>

                {/* ANIMATED CONTENT */}
                <div
                  key={`${language}-${active}`}
                  className="saksham-why-content-enter"
                >
                  <h3 className="text-2xl font-bold leading-tight text-[#061B50] sm:text-3xl">
                    {selected.title}
                  </h3>

                  <p className="mt-3 text-base font-medium text-slate-700">
                    {selected.description}
                  </p>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                    {selected.detail}
                  </p>
                </div>

              </div>

              {/* ================================= */}
              {/* RIGHT BENEFITS PANEL */}
              {/* ================================= */}

              <div className="lg:col-span-5">

                <div className="saksham-why-benefits group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6">

                  {/* BENEFITS PANEL SHINE */}
                  <span
                    aria-hidden="true"
                    className="saksham-why-benefits-shine pointer-events-none absolute inset-0"
                  />

                  <p className="relative z-10 mb-5 text-xs font-bold uppercase tracking-wider text-orange-600">
                    {t.benefitsLabel}
                  </p>

                  <div
                    key={`points-${language}-${active}`}
                    className="relative z-10 space-y-4"
                  >
                    {selected.points.map((point, index) => (
                      <div
                        key={index}
                        className="saksham-why-point flex items-start gap-3"
                        style={{
                          animationDelay: `${120 + index * 110}ms`,
                        }}
                      >
                        <CheckCircle2 className="saksham-why-check mt-0.5 h-5 w-5 shrink-0 text-green-600" />

                        <span className="text-sm font-medium leading-relaxed text-slate-800">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* ================================= */}
                  {/* NEXT FEATURE */}
                  {/* ================================= */}

                  <div className="relative z-10 mt-7 border-t border-slate-100 pt-5">

                    <div className="flex items-center justify-between gap-3">

                      <span className="text-xs font-semibold text-slate-500">
                        {formatNumber(active + 1)}{" "}
                        {t.ofLabel}{" "}
                        {formatNumber(
                          featureStyles.length
                        )}{" "}
                        {t.advantagesLabel}
                      </span>

                      <button
                        type="button"
                        onClick={nextFeature}
                        aria-label={t.nextLabel}
                        className="saksham-why-next group/next relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#061B50] text-white transition-all duration-300 hover:scale-110 hover:bg-orange-600 hover:shadow-[0_8px_20px_rgba(234,88,12,0.24)]"
                      >
                        <span
                          aria-hidden="true"
                          className="saksham-why-next-shine pointer-events-none absolute inset-0"
                        />

                        <ChevronRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover/next:translate-x-0.5" />
                      </button>

                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </Reveal>

      </div>

      {/* ==================================== */}
      {/* ALL ANIMATIONS INSIDE THIS FILE */}
      {/* ==================================== */}

      <style>{`
        /* =============================
           BACKGROUND FLOAT
        ============================= */

        @keyframes sakshamWhyBgBlue {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-30px, 22px);
          }
        }

        @keyframes sakshamWhyBgOrange {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(30px, -18px);
          }
        }

        #why-saksham .saksham-why-bg-blue {
          animation: sakshamWhyBgBlue 11s
            ease-in-out infinite;
        }

        #why-saksham .saksham-why-bg-orange {
          animation: sakshamWhyBgOrange 13s
            ease-in-out infinite;
        }

        /* =============================
           HEADING DECORATIVE LINES
        ============================= */

        @keyframes sakshamWhyLineDraw {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        #why-saksham .saksham-why-line {
          transform-origin: center;
          animation: sakshamWhyLineDraw 950ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* =============================
           FEATURE CARD HOVER
        ============================= */

        #why-saksham .saksham-why-feature {
          transition:
            border-color 350ms ease,
            background-color 350ms ease,
            box-shadow 350ms ease,
            transform 350ms ease;
        }

        #why-saksham .saksham-why-feature:hover {
          transform: translateY(-5px);
        }

        /* =============================
           FEATURE CARD MIRROR SHINE
        ============================= */

        .saksham-why-card-shine {
          background: linear-gradient(
            110deg,
            transparent 22%,
            rgba(255,255,255,0.02) 35%,
            rgba(255,255,255,0.35) 50%,
            rgba(255,255,255,0.02) 65%,
            transparent 78%
          );

          transform: translateX(-160%);
          opacity: 0;
        }

        #why-saksham .saksham-why-feature:hover
        .saksham-why-card-shine {
          animation: sakshamWhyCardShine 900ms
            ease-out both;
        }

        @keyframes sakshamWhyCardShine {
          0% {
            opacity: 0;
            transform: translateX(-160%);
          }

          25% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translateX(160%);
          }
        }

        /* =============================
           ACTIVE CARD GLOW
        ============================= */

        .saksham-why-active-glow {
          background: radial-gradient(
            circle at 50% 0%,
            rgba(249,115,22,0.16),
            transparent 75%
          );

          animation: sakshamWhyActiveGlow 4s
            ease-in-out infinite;
        }

        @keyframes sakshamWhyActiveGlow {
          0%, 100% {
            opacity: 0.45;
          }

          50% {
            opacity: 1;
          }
        }

        /* =============================
           FEATURE ICON BOUNCE
        ============================= */

        #why-saksham .saksham-why-feature:hover
        .saksham-why-feature-icon {
          animation: sakshamWhyIconBounce 600ms ease-out;
        }

        @keyframes sakshamWhyIconBounce {
          0% {
            transform: translateY(0) scale(1);
          }

          45% {
            transform: translateY(-5px) scale(1.12);
          }

          100% {
            transform: translateY(0) scale(1);
          }
        }

        /* =============================
           SPOTLIGHT PROGRESS
        ============================= */

        #why-saksham .saksham-why-progress {
          transition: width 650ms
            cubic-bezier(0.22, 1, 0.36, 1);

          box-shadow: 0 0 12px
            rgba(249,115,22,0.35);
        }

        /* =============================
           SPOTLIGHT HOVER GLOW
        ============================= */

        .saksham-why-spotlight-glow {
          background: radial-gradient(
            circle at 0% 0%,
            rgba(219,234,254,0.55),
            transparent 55%
          );

          opacity: 0;
          transition: opacity 600ms ease;
        }

        #why-saksham .saksham-why-spotlight:hover
        .saksham-why-spotlight-glow {
          opacity: 1;
        }

        /* =============================
           SELECTED ICON ENTRANCE
        ============================= */

        @keyframes sakshamWhySelectedIcon {
          from {
            opacity: 0;
            transform: scale(0.7) rotate(-15deg);
          }

          to {
            opacity: 1;
            transform: scale(1) rotate(0);
          }
        }

        #why-saksham .saksham-why-selected-icon {
          animation: sakshamWhySelectedIcon 650ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* =============================
           DYNAMIC TEXT TRANSITION
        ============================= */

        @keyframes sakshamWhyContentEnter {
          from {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(4px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        #why-saksham .saksham-why-content-enter {
          animation: sakshamWhyContentEnter 650ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* =============================
           BENEFIT POINTS STAGGER
        ============================= */

        @keyframes sakshamWhyPointEnter {
          from {
            opacity: 0;
            transform: translateX(22px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        #why-saksham .saksham-why-point {
          animation: sakshamWhyPointEnter 600ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* =============================
           BENEFITS CARD SHINE
        ============================= */

        .saksham-why-benefits-shine {
          background: linear-gradient(
            110deg,
            transparent 25%,
            rgba(255,255,255,0.03) 38%,
            rgba(255,255,255,0.7) 50%,
            rgba(255,255,255,0.03) 62%,
            transparent 75%
          );

          transform: translateX(-150%);
          opacity: 0;
        }

        #why-saksham .saksham-why-benefits:hover
        .saksham-why-benefits-shine {
          animation: sakshamWhyCardShine 950ms
            ease-out both;
        }

        /* =============================
           CHECK ICON HOVER
        ============================= */

        #why-saksham .saksham-why-point:hover
        .saksham-why-check {
          transform: scale(1.12) rotate(-8deg);
        }

        #why-saksham .saksham-why-check {
          transition: transform 300ms ease;
        }

        /* =============================
           NEXT BUTTON SHINE
        ============================= */

        .saksham-why-next-shine {
          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(255,255,255,0.12) 40%,
            rgba(255,255,255,0.55) 50%,
            rgba(255,255,255,0.12) 60%,
            transparent 80%
          );

          transform: translateX(-160%);
        }

        #why-saksham .saksham-why-next:hover
        .saksham-why-next-shine {
          animation: sakshamWhyNextShine 750ms
            ease-out both;
        }

        @keyframes sakshamWhyNextShine {
          from {
            transform: translateX(-160%);
          }

          to {
            transform: translateX(160%);
          }
        }

        /* =============================
           KEYBOARD ACCESSIBILITY
        ============================= */

        #why-saksham button:focus-visible {
          outline: 3px solid #f97316;
          outline-offset: 4px;
        }

        /* =============================
           REDUCED MOTION
        ============================= */

        @media (prefers-reduced-motion: reduce) {
          #why-saksham .saksham-why-bg-blue,
          #why-saksham .saksham-why-bg-orange,
          #why-saksham .saksham-why-line,
          #why-saksham .saksham-why-card-shine,
          #why-saksham .saksham-why-active-glow,
          #why-saksham .saksham-why-selected-icon,
          #why-saksham .saksham-why-content-enter,
          #why-saksham .saksham-why-point,
          #why-saksham .saksham-why-benefits-shine,
          #why-saksham .saksham-why-next-shine {
            animation: none !important;
            filter: none !important;
          }

          #why-saksham .saksham-why-progress {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

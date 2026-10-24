
import React, { useEffect, useRef, useState } from "react";

import {
  Users,
  ClipboardCheck,
  BookOpenCheck,
  Hospital,
  BadgeCheck,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ==========================================
// ENGLISH + MARATHI TRANSLATIONS
// ==========================================

const translations = {
  en: {
    badge: "HOW WE WORK",
    heading1: "From Learning to",
    heading2: "Livelihood",
    stepLabel: "Step",
    ofLabel: "of",

    steps: [
      {
        category: "COMMUNITY OUTREACH",
        title: "Community Outreach",
        description:
          "Identifying eligible youth through community awareness and mobilization.",
      },
      {
        category: "ENROLLMENT",
        title: "Counselling & Enrollment",
        description:
          "Helping candidates understand training opportunities and eligibility.",
      },
      {
        category: "SKILL DEVELOPMENT",
        title: "Skill Training",
        description:
          "Building essential technical knowledge and professional competencies.",
      },
      {
        category: "PRACTICAL TRAINING",
        title: "Practical Experience",
        description:
          "Providing hands-on learning and applicable OJT opportunities.",
      },
      {
        category: "ASSESSMENT",
        title: "Assessment & Guidance",
        description:
          "Supporting skill evaluation, certification processes and career readiness.",
      },
      {
        category: "CAREER SUPPORT",
        title: "Placement & Follow-Up",
        description:
          "Connecting trained candidates with employers and supporting employment continuity.",
      },
    ],
  },

  mr: {
    badge: "आमची कार्यपद्धती",
    heading1: "प्रशिक्षणापासून",
    heading2: "स्वावलंबनापर्यंत",
    stepLabel: "टप्पा",
    ofLabel: "पैकी",

    steps: [
      {
        category: "समुदाय संपर्क",
        title: "समुदाय संपर्क व जनजागृती",
        description:
          "समुदायामध्ये जनजागृती आणि संपर्क उपक्रम राबवून प्रशिक्षणासाठी पात्र युवकांची ओळख करणे.",
      },
      {
        category: "नोंदणी",
        title: "समुपदेशन व नोंदणी",
        description:
          "उमेदवारांना प्रशिक्षणाच्या संधी, पात्रता निकष आणि प्रवेश प्रक्रियेची माहिती देऊन मार्गदर्शन करणे.",
      },
      {
        category: "कौशल्य विकास",
        title: "कौशल्य प्रशिक्षण",
        description:
          "रोजगारासाठी आवश्यक तांत्रिक ज्ञान, व्यावहारिक कौशल्ये आणि व्यावसायिक क्षमता विकसित करणे.",
      },
      {
        category: "प्रात्यक्षिक प्रशिक्षण",
        title: "प्रत्यक्ष कामाचा अनुभव",
        description:
          "प्रत्यक्ष सराव आणि आवश्यकतेनुसार कामाच्या ठिकाणी प्रशिक्षणाच्या (OJT) संधी उपलब्ध करून देणे.",
      },
      {
        category: "मूल्यमापन",
        title: "मूल्यमापन व मार्गदर्शन",
        description:
          "कौशल्यांचे मूल्यमापन, प्रमाणपत्र प्रक्रियेसाठी समन्वय आणि करिअरसाठी आवश्यक तयारी यांना सहाय्य करणे.",
      },
      {
        category: "रोजगार सहाय्य",
        title: "प्लेसमेंट व पाठपुरावा",
        description:
          "प्रशिक्षित उमेदवारांना संभाव्य नियोक्त्यांशी जोडण्यासाठी आणि रोजगारानंतर पाठपुरावा करण्यासाठी सहाय्य करणे.",
      },
    ],
  },
};

// ==========================================
// IMAGE AND ICON CONFIGURATION
// ==========================================

const stepStyles = [
  {
    number: "01",
    icon: Users,
    image:
      "/c1.jpeg",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    image:
      "/g42.jpeg",
  },
  {
    number: "03",
    icon: BookOpenCheck,
    image:
      "/g43.jpeg",
  },
  {
    number: "04",
    icon: Hospital,
    image:
      "/g14.jpeg",
  },
  {
    number: "05",
    icon: BadgeCheck,
    image:
      "a3.jpeg",
  },
  {
    number: "06",
    icon: BriefcaseBusiness,
    image:
      "/g34.jpeg",
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
        rootMargin: "0px 0px 40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const transforms = {
    up: "translate3d(0, 45px, 0)",
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

export default function TrainingToEmploymentSection() {
  const { language } = useLanguage();

  const t = translations[language] || translations.en;

  const formatNumber = (number) => {
    const value = String(number);

    if (language !== "mr") return value;

    return value.replace(
      /[0-9]/g,
      (digit) => "०१२३४५६७८९"[Number(digit)]
    );
  };

  return (
    <section
      id="training-approach"
      aria-labelledby="training-approach-heading"
      className="relative overflow-hidden bg-[#FAF8F8] py-14 lg:py-20"
    >
      {/* SUBTLE BACKGROUND GLOW */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="training-bg-blue absolute -right-40 -top-40 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl" />

        <div className="training-bg-orange absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-100/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================================= */}
        {/* SECTION HEADING */}
        {/* ================================= */}

        <div className="mb-12 text-center">

          <Reveal direction="up" duration={850}>
            <span className="training-badge mb-3 inline-block rounded-md bg-[#3156C9] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
              {t.badge}
            </span>
          </Reveal>

          <Reveal
            direction="up"
            delay={100}
            duration={1050}
          >
            <h2
              id="training-approach-heading"
              className="text-3xl font-extrabold leading-tight text-[#061B50] sm:text-4xl lg:text-5xl"
            >
              {t.heading1}{" "}

              <span className="text-orange-600">
                {t.heading2}
              </span>
            </h2>
          </Reveal>

        </div>

        {/* ================================= */}
        {/* SIX IMAGE CARDS */}
        {/* ================================= */}

        <div className="grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">

          {stepStyles.map((step, index) => {
            const Icon = step.icon;
            const content = t.steps[index];

            const number =
              formatNumber(step.number);

            return (
              <Reveal
                key={step.number}
                direction="up"
                duration={900}
                delay={(index % 3) * 130}
                className="h-full"
              >
                <article className="training-card group relative h-full pb-2">

                  {/* ======================== */}
                  {/* IMAGE CONTAINER */}
                  {/* ======================== */}

                  <div className="training-image-frame relative h-[230px] overflow-hidden bg-slate-200 sm:h-[250px]">

                    {/* IMAGE */}
                    <img
                      src={step.image}
                      alt={content.title}
                      loading="lazy"
                      decoding="async"
                      className="training-card-image h-full w-full object-cover"
                    />

                    {/* IMAGE MIRROR SHINE */}
                    <span
                      aria-hidden="true"
                      className="training-image-shine pointer-events-none absolute inset-0"
                    />

                    {/* SUBTLE IMAGE OVERLAY */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061B50]/10 to-transparent"
                    />

                    {/* IMAGE CATEGORY BADGE */}
                    <span className="training-category-badge absolute left-5 top-5 rounded-md bg-[#3156C9] px-4 py-2 text-xs font-bold uppercase text-white shadow-md">
                      {content.category}
                    </span>

                  </div>

                  {/* ======================== */}
                  {/* OVERLAPPING WHITE CARD */}
                  {/* ======================== */}

                  <div className="training-info-card relative z-10 -mt-12 mx-auto flex min-h-[220px] w-[88%] flex-col overflow-hidden rounded-md bg-white px-6 py-6 shadow-[0_15px_40px_rgba(6,27,80,0.07)]">

                    {/* CARD SHINE */}
                    <span
                      aria-hidden="true"
                      className="training-card-shine pointer-events-none absolute inset-0"
                    />

                    {/* STEP LABEL */}
                    <p className="relative z-10 mb-2 text-xs font-medium text-slate-500">
                      {t.stepLabel} {number}
                    </p>

                    {/* TITLE */}
                    <h3 className="relative z-10 text-xl font-bold leading-snug text-[#202B42]">
                      {content.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="relative z-10 mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                      {content.description}
                    </p>

                    {/* CARD FOOTER */}
                    <div className="relative z-10 mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

                      <div className="flex items-center gap-2 text-xs font-medium text-slate-500">

                        <Icon className="training-footer-icon h-4 w-4 shrink-0 text-[#3156C9]" />

                        <span>
                          {t.stepLabel} {number}{" "}
                          {t.ofLabel} {formatNumber("06")}
                        </span>
                      </div>

                      <div className="training-arrow flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#3156C9]">
                        <ArrowRight className="h-4 w-4" />
                      </div>

                    </div>
                  </div>

                </article>
              </Reveal>
            );
          })}

        </div>

      </div>

      {/* ================================= */}
      {/* ALL ANIMATIONS INSIDE THIS FILE */}
      {/* ================================= */}

      <style>{`
        /* ============================
           BACKGROUND FLOAT
        ============================ */

        @keyframes trainingBgBlue {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-35px, 20px);
          }
        }

        @keyframes trainingBgOrange {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(35px, -20px);
          }
        }

        #training-approach .training-bg-blue {
          animation: trainingBgBlue 12s
            ease-in-out infinite;
        }

        #training-approach .training-bg-orange {
          animation: trainingBgOrange 14s
            ease-in-out infinite;
        }

        /* ============================
           HEADING BADGE GLOW
        ============================ */

        @keyframes trainingBadgeGlow {
          0%, 100% {
            box-shadow: 0 0 0 rgba(49,86,201,0);
          }

          50% {
            box-shadow: 0 0 22px rgba(49,86,201,0.18);
          }
        }

        #training-approach .training-badge {
          animation: trainingBadgeGlow 3.5s
            ease-in-out infinite;
        }

        /* ============================
           IMAGE HOVER ZOOM
        ============================ */

        #training-approach .training-card-image {
          transition: transform 950ms
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        #training-approach .training-card:hover
        .training-card-image {
          transform: scale(1.1);
        }

        /* ============================
           IMAGE MIRROR SHINE
        ============================ */

        .training-image-shine {
          background: linear-gradient(
            115deg,
            transparent 22%,
            rgba(255,255,255,0.03) 35%,
            rgba(255,255,255,0.3) 47%,
            rgba(255,255,255,0.55) 50%,
            rgba(255,255,255,0.16) 56%,
            transparent 70%
          );

          transform: translateX(-170%);
          opacity: 0;
        }

        #training-approach .training-card:hover
        .training-image-shine {
          animation: trainingImageMirror 1050ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes trainingImageMirror {
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
           CATEGORY BADGE ENTRANCE
        ============================ */

        #training-approach .training-category-badge {
          transition:
            transform 500ms ease,
            box-shadow 500ms ease;
        }

        #training-approach .training-card:hover
        .training-category-badge {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(49,86,201,0.25);
        }

        /* ============================
           WHITE CONTENT CARD HOVER
        ============================ */

        #training-approach .training-info-card {
          transition:
            transform 450ms
              cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 450ms ease;
        }

        #training-approach .training-card:hover
        .training-info-card {
          transform: translateY(-8px);
          box-shadow:
            0 25px 55px rgba(6,27,80,0.15);
        }

        /* ============================
           WHITE CARD SHINE
        ============================ */

        .training-card-shine {
          background: linear-gradient(
            115deg,
            transparent 25%,
            rgba(255,255,255,0.06) 38%,
            rgba(226,232,240,0.55) 50%,
            rgba(255,255,255,0.06) 62%,
            transparent 75%
          );

          transform: translateX(-160%);
          opacity: 0;
        }

        #training-approach .training-card:hover
        .training-card-shine {
          animation: trainingWhiteCardShine 950ms
            ease-out both;
        }

        @keyframes trainingWhiteCardShine {
          0% {
            opacity: 0;
            transform: translateX(-160%);
          }

          25% {
            opacity: 0.8;
          }

          100% {
            opacity: 0;
            transform: translateX(160%);
          }
        }

        /* ============================
           FOOTER ICON HOVER
        ============================ */

        #training-approach .training-footer-icon {
          transition: transform 400ms ease;
        }

        #training-approach .training-card:hover
        .training-footer-icon {
          transform: rotate(-12deg) scale(1.12);
        }

        /* ============================
           ARROW HOVER ANIMATION
        ============================ */

        #training-approach .training-arrow {
          transition:
            background-color 350ms ease,
            color 350ms ease,
            transform 350ms ease;
        }

        #training-approach .training-card:hover
        .training-arrow {
          background-color: #3156C9;
          color: #FFFFFF;
          transform: rotate(-45deg);
        }

        #training-approach .training-arrow svg {
          transition: transform 350ms ease;
        }

        #training-approach .training-card:hover
        .training-arrow svg {
          transform: translateX(2px);
        }

        /* ============================
           REDUCED MOTION
        ============================ */

        @media (prefers-reduced-motion: reduce) {
          #training-approach .training-bg-blue,
          #training-approach .training-bg-orange,
          #training-approach .training-badge,
          #training-approach .training-image-shine,
          #training-approach .training-card-shine {
            animation: none !important;
          }

          #training-approach .training-card-image,
          #training-approach .training-info-card,
          #training-approach .training-arrow {
            transition: none !important;
          }
        }
      `}</style>

    </section>
  );
}


import React, { useEffect, useRef, useState } from "react";
import {
  MessagesSquare,
  BookOpenCheck,
  Wrench,
  Users,
  Award,
  BriefcaseBusiness,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  HeartHandshake,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ==========================================
// TRANSLATIONS
// ==========================================

const translations = {
  en: {
    eyebrow: "OUR LEARNING APPROACH",

    heading1: "We Don't Just Teach Skills.",
    heading2: "We Support Career Readiness.",

    description:
      "Our training approach combines industry-relevant knowledge, practical experience and employability development to help candidates prepare for professional opportunities.",

    steps: [
      {
        number: "01",
        title: "Career Counselling & Enrolment",
        description:
          "Guidance to help candidates understand course options, eligibility and training requirements.",
      },
      {
        number: "02",
        title: "Industry-Relevant Training",
        description:
          "Structured learning through technical concepts, practical demonstrations and relevant exercises.",
      },
      {
        number: "03",
        title: "Practical Learning & Simulations",
        description:
          "Hands-on learning, simulated activities and practical exposure as applicable to each program.",
      },
      {
        number: "04",
        title: "Professional Skills Development",
        description:
          "Workplace communication, work ethics, interview preparation and resume building.",
      },
      {
        number: "05",
        title: "Assessment & Certification",
        description:
          "Course assessments and certification according to the relevant training program.",
      },
      {
        number: "06",
        title: "Placement Assistance",
        description:
          "Career guidance and available placement-linked support for eligible candidates.",
      },
    ],

    closingBadge: "FROM LEARNING TO CAREER READINESS",

    closingHeading:
      "Your Skills. Your Confidence. Your Next Opportunity.",

    closingDescription:
      "Explore courses designed to build practical skills and improve your readiness for career opportunities.",

    cta: "Enquire About Training",

    placementNote:
      "Placement assistance and certification depend on the selected training program. Employment is not guaranteed.",
  },

  mr: {
    eyebrow: "आमची प्रशिक्षण पद्धत",

    heading1: "आम्ही फक्त कौशल्ये शिकवत नाही.",
    heading2: "करिअरसाठीही तयार करतो.",

    description:
      "उद्योगाभिमुख ज्ञान, प्रात्यक्षिक अनुभव आणि रोजगाराभिमुख कौशल्यांच्या विकासातून विद्यार्थ्यांना व्यावसायिक संधींसाठी तयार होण्यास मदत करणे हा आमच्या प्रशिक्षणाचा उद्देश आहे.",

    steps: [
      {
        number: "०१",
        title: "करिअर मार्गदर्शन व प्रवेश",
        description:
          "कोर्सचे पर्याय, पात्रता आणि प्रशिक्षणाच्या अटी समजून घेण्यासाठी मार्गदर्शन.",
      },
      {
        number: "०२",
        title: "उद्योगाभिमुख प्रशिक्षण",
        description:
          "तांत्रिक संकल्पना, प्रात्यक्षिके आणि संबंधित सरावाच्या माध्यमातून प्रशिक्षण.",
      },
      {
        number: "०३",
        title: "प्रात्यक्षिक शिक्षण व सिम्युलेशन्स",
        description:
          "कोर्सनुसार प्रत्यक्ष सराव, प्रात्यक्षिक उपक्रम आणि व्यावहारिक अनुभव.",
      },
      {
        number: "०४",
        title: "व्यावसायिक कौशल्य विकास",
        description:
          "संवादकौशल्ये, कामातील शिस्त, मुलाखतीची तयारी आणि Resume तयार करण्याचे मार्गदर्शन.",
      },
      {
        number: "०५",
        title: "मूल्यमापन व प्रमाणपत्र",
        description:
          "संबंधित प्रशिक्षण कार्यक्रमानुसार मूल्यमापन आणि प्रमाणपत्राची प्रक्रिया.",
      },
      {
        number: "०६",
        title: "प्लेसमेंट सहाय्य",
        description:
          "पात्र उमेदवारांना करिअर मार्गदर्शन आणि उपलब्ध प्लेसमेंट-संबंधित सहाय्य.",
      },
    ],

    closingBadge: "प्रशिक्षणातून करिअरच्या तयारीकडे",

    closingHeading:
      "तुमची कौशल्ये. तुमचा आत्मविश्वास. तुमची पुढची संधी.",

    closingDescription:
      "करिअरच्या संधींसाठी आवश्यक व्यावहारिक कौशल्ये विकसित करणारे प्रशिक्षण पर्याय जाणून घ्या.",

    cta: "प्रशिक्षणाबद्दल चौकशी करा",

    placementNote:
      "प्लेसमेंट सहाय्य आणि प्रमाणपत्र संबंधित कोर्सवर अवलंबून असते. नोकरीची हमी दिली जात नाही.",
  },
};

// ==========================================
// STEP ICONS / COLORS
// ==========================================

const stepVisuals = [
  {
    icon: MessagesSquare,
    color: "green",
  },
  {
    icon: BookOpenCheck,
    color: "orange",
  },
  {
    icon: Wrench,
    color: "green",
  },
  {
    icon: Users,
    color: "orange",
  },
  {
    icon: Award,
    color: "green",
  },
  {
    icon: BriefcaseBusiness,
    color: "orange",
  },
];

// ==========================================
// SCROLL REVEAL
// ==========================================

function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

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
    up: "translate3d(0,38px,0)",
    left: "translate3d(-38px,0,0)",
    right: "translate3d(38px,0,0)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate3d(0,0,0)"
          : transforms[direction] || transforms.up,
        transition:
          "opacity 850ms cubic-bezier(0.22,1,0.36,1), transform 850ms cubic-bezier(0.22,1,0.36,1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ==========================================
// STEP CARD
// ==========================================

function StepCard({ step, visual, index }) {
  const Icon = visual.icon;
  const green = visual.color === "green";

  return (
    <article
      className={`tp-step-card group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[22px] border bg-white p-6 shadow-[0_10px_35px_rgba(6,27,80,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_48px_rgba(6,27,80,0.11)] sm:p-7 ${
        green
          ? "border-green-100 hover:border-green-300"
          : "border-orange-100 hover:border-orange-300"
      }`}
    >
      {/* TOP ACCENT */}
      <div
        className={`absolute inset-x-0 top-0 h-1 ${
          green ? "bg-green-600" : "bg-orange-500"
        }`}
      />

      {/* BACKGROUND NUMBER */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-1 top-3 text-[78px] font-black leading-none text-[#061B50]/[0.035] sm:text-[90px]"
      >
        {step.number}
      </span>

      {/* ICON / NUMBER */}
      <div className="relative z-10 mb-6 flex items-center justify-between gap-3">
        <div
          className={`tp-step-icon flex h-14 w-14 items-center justify-center rounded-2xl ${
            green
              ? "bg-green-50 text-green-700"
              : "bg-orange-50 text-orange-600"
          }`}
        >
          <Icon className="h-7 w-7" strokeWidth={1.8} />
        </div>

        <span
          className={`text-xs font-extrabold tracking-widest ${
            green ? "text-green-700" : "text-orange-600"
          }`}
        >
          STEP {step.number}
        </span>
      </div>

      {/* TEXT */}
      <div className="relative z-10 flex-1">
        <h3 className="text-lg font-extrabold leading-snug text-[#061B50] sm:text-xl">
          {step.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          {step.description}
        </p>
      </div>

      {/* BOTTOM LINE */}
      <div className="relative z-10 mt-7 flex items-center gap-2">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            green ? "bg-green-600" : "bg-orange-500"
          }`}
        />

        <div
          className={`h-[2px] w-12 rounded-full transition-all duration-500 group-hover:w-24 ${
            green ? "bg-green-500" : "bg-orange-500"
          }`}
        />
      </div>

      {/* MIRROR SHINE */}
      <span className="tp-card-shine pointer-events-none absolute inset-0" />
    </article>
  );
}

// ==========================================
// MAIN SECTION
// ==========================================

export default function TrainingPlacementSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const handleEnquiry = () => {
    const message =
      language === "mr"
        ? "नमस्कार सक्षम फाउंडेशन, मला तुमच्या प्रशिक्षण कोर्सेस आणि प्लेसमेंट सहाय्याबद्दल माहिती हवी आहे. कृपया प्रवेश प्रक्रिया, उपलब्ध कोर्सेस आणि आगामी बॅचची माहिती द्या."
        : "Hello Saksham Foundation, I would like to know about your training courses and placement assistance. Please share admission details, available courses and upcoming batches.";

    const url =
      "https://wa.me/918830223458?text=" +
      encodeURIComponent(message);

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="training-placement"
      aria-labelledby="training-placement-heading"
      className="relative overflow-hidden bg-white py-16 lg:py-24"
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="tp-bg-orb absolute -right-40 -top-32 h-[380px] w-[380px] rounded-full bg-green-50 blur-3xl" />

        <div className="tp-bg-orb absolute -bottom-40 -left-40 h-[380px] w-[380px] rounded-full bg-orange-50 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        {/* SECTION HEADER */}
        <Reveal>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.14em] text-green-700">
                {t.eyebrow}
              </span>

              <span className="h-px w-8 bg-green-600" />
            </div>

            <h2
              id="training-placement-heading"
              className="text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl lg:text-5xl"
            >
              {t.heading1}{" "}
              <span className="text-orange-600">
                {t.heading2}
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              {t.description}
            </p>
          </div>
        </Reveal>

        {/* ================================= */}
        {/* 6 STEP CARDS */}
        {/* ================================= */}

        <div className="relative">
          {/* CONNECTING LINE - DESKTOP */}
          <div
            aria-hidden="true"
            className="tp-connecting-line pointer-events-none absolute left-12 right-12 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-green-300 via-orange-300 to-green-300 lg:block"
          />

          <div className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {t.steps.map((step, index) => (
              <Reveal
                key={index}
                delay={(index % 3) * 110}
                className="h-full"
              >
                <StepCard
                  step={step}
                  visual={stepVisuals[index]}
                  index={index}
                />
              </Reveal>
            ))}
          </div>
        </div>

        {/* ================================= */}
        {/* BOTTOM CAREER CTA */}
        {/* ================================= */}

        <Reveal delay={150}>
          <div className="relative mt-12 overflow-hidden rounded-[26px] bg-[#061B50] p-7 text-white shadow-[0_18px_50px_rgba(6,27,80,0.13)] sm:p-9 lg:p-10">
            {/* GLOW */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-32 h-[330px] w-[330px] rounded-full bg-green-500/10 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 left-[25%] h-[280px] w-[280px] rounded-full bg-orange-500/10 blur-3xl"
            />

            <div className="relative z-10 flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
              {/* LEFT */}
              <div className="max-w-3xl">
                <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-green-300">
                  <Sparkles className="h-4 w-4" />
                  {t.closingBadge}
                </div>

                <h3 className="text-2xl font-extrabold leading-tight sm:text-3xl">
                  {t.closingHeading}
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75">
                  {t.closingDescription}
                </p>
              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={handleEnquiry}
                className="tp-cta-button group relative inline-flex shrink-0 items-center justify-center gap-3 overflow-hidden rounded-xl bg-orange-600 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-[0_15px_30px_rgba(249,115,22,0.2)]"
              >
                <span className="tp-button-shine pointer-events-none absolute inset-0" />

                <span className="relative z-10">
                  {t.cta}
                </span>

                <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* PLACEMENT NOTE */}
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-6 text-slate-500">
            <CheckCircle2 className="mr-1 inline h-3.5 w-3.5 text-green-600" />
            {t.placementNote}
          </p>
        </Reveal>
      </div>

      {/* ================================= */}
      {/* COMPONENT ANIMATIONS */}
      {/* ================================= */}

      <style>{`
        /* BACKGROUND MOTION */

        @keyframes tpBgFloat {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-24px, 20px);
          }
        }

        #training-placement .tp-bg-orb {
          animation: tpBgFloat 12s ease-in-out infinite;
        }

        /* ICON FLOAT */

        @keyframes tpIconFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        #training-placement .tp-step-icon {
          animation: tpIconFloat 4.5s ease-in-out infinite;
        }

        /* CARD MIRROR SHINE */

        #training-placement .tp-card-shine {
          background: linear-gradient(
            115deg,
            transparent 22%,
            rgba(255,255,255,0.04) 36%,
            rgba(255,255,255,0.65) 50%,
            rgba(255,255,255,0.04) 64%,
            transparent 78%
          );
          transform: translateX(-160%);
          transition: transform 850ms ease;
        }

        #training-placement .tp-step-card:hover .tp-card-shine {
          transform: translateX(160%);
        }

        /* CONNECTING LINE GLOW */

        @keyframes tpLineGlow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.9;
          }
        }

        #training-placement .tp-connecting-line {
          animation: tpLineGlow 5s ease-in-out infinite;
        }

        /* BUTTON SHINE */

        #training-placement .tp-button-shine {
          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(255,255,255,0.08) 38%,
            rgba(255,255,255,0.42) 50%,
            rgba(255,255,255,0.08) 62%,
            transparent 80%
          );
          transform: translateX(-160%);
          transition: transform 850ms ease;
        }

        #training-placement .tp-cta-button:hover .tp-button-shine {
          transform: translateX(160%);
        }

        /* ACCESSIBILITY */

        #training-placement button:focus-visible {
          outline: 3px solid #fb923c;
          outline-offset: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          #training-placement .tp-bg-orb,
          #training-placement .tp-step-icon,
          #training-placement .tp-connecting-line {
            animation: none !important;
          }

          #training-placement .tp-card-shine,
          #training-placement .tp-button-shine {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

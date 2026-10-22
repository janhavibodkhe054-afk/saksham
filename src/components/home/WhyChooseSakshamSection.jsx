
import React, { useState } from "react";
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

// ENGLISH AND MARATHI CONTENT
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

// ICONS, NUMBERS AND COLORS
// These stay unchanged across both languages.
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

export default function WhyChooseSakshamSection() {
  const [active, setActive] = useState(0);

  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const selected = t.features[active];
  const selectedStyle = featureStyles[active];
  const SelectedIcon = selectedStyle.icon;

  const formatNumber = (number) => {
    const value = String(number);

    if (language === "mr") {
      return value.replace(/[0-9]/g, (digit) =>
        "०१२३४५६७८९"[Number(digit)]
      );
    }

    return value;
  };

  return (
    <section
      id="why-saksham"
      aria-labelledby="why-saksham-heading"
      className="relative overflow-hidden bg-white py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* SECTION HEADER */}
        <div className="mb-11 text-center">

          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-orange-600">
            <span className="h-px w-7 bg-orange-500" />

            {t.sectionLabel}

            <span className="h-px w-7 bg-orange-500" />
          </div>

          <h2
            id="why-saksham-heading"
            className="text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl lg:text-5xl"
          >
            {t.heading1}{" "}
            <span className="text-orange-600">
              {t.heading2}
            </span>
          </h2>
        </div>

        {/* INTERACTIVE FEATURE SELECTOR */}
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
              <button
                key={feature.number}
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={isActive}
                className={`group relative flex min-h-[130px] flex-col items-center justify-center gap-3 rounded-2xl border px-3 py-5 text-center transition-all duration-300 ${
                  isActive
                    ? "border-[#061B50] bg-[#061B50] text-white shadow-[0_12px_30px_rgba(6,27,80,0.16)]"
                    : "border-slate-200 bg-[#F8FAFC] text-[#061B50] hover:border-orange-300 hover:bg-white"
                }`}
              >
                <Icon
                  className={`h-7 w-7 transition-transform duration-300 group-hover:scale-110 ${
                    isActive
                      ? "text-orange-400"
                      : "text-blue-900"
                  }`}
                  strokeWidth={1.8}
                />

                <span className="text-xs font-bold leading-snug sm:text-sm">
                  {content.title}
                </span>

                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#061B50]" />
                )}
              </button>
            );
          })}
        </div>

        {/* DYNAMIC SPOTLIGHT PANEL */}
        <div className="relative mt-6 overflow-hidden rounded-[26px] border border-slate-200 bg-[#F8FAFC]">

          {/* PROGRESS INDICATOR */}
          <div className="absolute inset-x-0 top-0 h-[3px] bg-slate-200">
            <div
              className="h-full bg-orange-500 transition-all duration-500"
              style={{
                width: `${
                  ((active + 1) / featureStyles.length) * 100
                }%`,
              }}
            />
          </div>

          <div className="grid items-center gap-8 p-6 sm:p-9 lg:grid-cols-12 lg:gap-12 lg:p-10">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-7">

              <div className="mb-5 flex items-center gap-3">

                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm"
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
                className="saksham-fade"
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

            {/* RIGHT - BENEFITS PANEL */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">

                <p className="mb-5 text-xs font-bold uppercase tracking-wider text-orange-600">
                  {t.benefitsLabel}
                </p>

                <div
                  key={`points-${language}-${active}`}
                  className="saksham-fade space-y-4"
                >
                  {selected.points.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />

                      <span className="text-sm font-medium leading-relaxed text-slate-800">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                {/* NEXT FEATURE */}
                <div className="mt-7 border-t border-slate-100 pt-5">
                  <div className="flex items-center justify-between gap-3">

                    <span className="text-xs font-semibold text-slate-500">
                      {formatNumber(active + 1)}{" "}
                      {t.ofLabel}{" "}
                      {formatNumber(featureStyles.length)}{" "}
                      {t.advantagesLabel}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        setActive(
                          (prev) =>
                            (prev + 1) % featureStyles.length
                        )
                      }
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#061B50] text-white transition-all duration-300 hover:bg-orange-600"
                      aria-label={t.nextLabel}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes sakshamFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .saksham-fade {
          animation: sakshamFadeIn 350ms ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .saksham-fade {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

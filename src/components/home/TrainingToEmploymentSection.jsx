
import React from "react";
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

// ENGLISH AND MARATHI CONTENT
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

// IMAGE AND ICON CONFIGURATION
// Same images and icons for both languages.
const stepStyles = [
  {
    number: "01",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    icon: BookOpenCheck,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "04",
    icon: Hospital,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "05",
    icon: BadgeCheck,
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "06",
    icon: BriefcaseBusiness,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
  },
];

export default function TrainingToEmploymentSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const formatNumber = (number) => {
    if (language === "mr") {
      return number.replace(/[0-9]/g, (digit) =>
        "०१२३४५६७८९"[Number(digit)]
      );
    }

    return number;
  };

  return (
    <section
      id="training-approach"
      aria-labelledby="training-approach-heading"
      className="relative bg-[#FAF8F8] py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADING */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-md bg-[#3156C9] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
            {t.badge}
          </span>

          <h2
            id="training-approach-heading"
            className="text-3xl font-extrabold leading-tight text-[#061B50] sm:text-4xl lg:text-5xl"
          >
            {t.heading1}{" "}
            <span className="text-orange-600">
              {t.heading2}
            </span>
          </h2>
        </div>

        {/* SIX IMAGE CARDS */}
        <div className="grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {stepStyles.map((step, index) => {
            const Icon = step.icon;
            const content = t.steps[index];
            const number = formatNumber(step.number);

            return (
              <article
                key={step.number}
                className="group relative pb-2"
              >
                {/* IMAGE */}
                <div className="relative h-[230px] overflow-hidden bg-slate-200 sm:h-[250px]">
                  <img
                    src={step.image}
                    alt={content.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* IMAGE LABEL */}
                  <span className="absolute left-5 top-5 rounded-md bg-[#3156C9] px-4 py-2 text-xs font-bold uppercase text-white shadow-md">
                    {content.category}
                  </span>
                </div>

                {/* OVERLAPPING WHITE CARD */}
                <div className="relative z-10 -mt-12 mx-auto flex min-h-[220px] w-[88%] flex-col rounded-md bg-white px-6 py-6 shadow-[0_15px_40px_rgba(6,27,80,0.07)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_45px_rgba(6,27,80,0.12)]">

                  {/* STEP LABEL */}
                  <p className="mb-2 text-xs font-medium text-slate-500">
                    {t.stepLabel} {number}
                  </p>

                  {/* TITLE */}
                  <h3 className="text-xl font-bold leading-snug text-[#202B42]">
                    {content.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {content.description}
                  </p>

                  {/* CARD FOOTER */}
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <Icon className="h-4 w-4 shrink-0 text-[#3156C9]" />

                      <span>
                        {t.stepLabel} {number}{" "}
                        {t.ofLabel} {formatNumber("06")}
                      </span>
                    </div>

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#3156C9] transition-all duration-300 group-hover:bg-[#3156C9] group-hover:text-white">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

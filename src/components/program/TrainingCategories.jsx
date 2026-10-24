
import React from "react";
import {
  HeartPulse,
  Monitor,
  Factory,
  BookOpenCheck,
  CheckCircle2,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    sectionLabel: "SKILL DEVELOPMENT",

    heading1: "Our Training",
    heading2: "Categories",

    description:
      "Explore our training experience and initiatives across healthcare, digital education, technical skills and technology-enabled learning.",

    focusLabel: "KEY FOCUS AREAS",

    categories: [
      {
        label: "Training Experience",
        title: "Healthcare & Paramedical Training",
        description:
          "Training experience covering General Duty Assistant, Operation Theatre Technician, Dialysis Technician, Nursing Care Assistant and ICU Technician.",
        areas: [
          "Patient Care",
          "Clinical Support",
          "Infection Prevention",
          "Hospital Practices",
          "Workplace Readiness",
        ],
      },
      {
        label: "Training Experience",
        title: "Computer & Digital Education",
        description:
          "Skill development experience in computer literacy, Tally, financial accounting, GST and workplace digital skills.",
        areas: [
          "Digital Literacy",
          "Office Productivity",
          "Accounting Fundamentals",
          "Employment Readiness",
        ],
      },
      {
        label: "Previous Project Experience",
        title: "Technical & Industrial Training",
        description:
          "Previous project experience in CNC/VMC Machine Operator and Fire & Safety training areas.",
        areas: [
          "Industrial Awareness",
          "Technical Skills",
          "Workplace Safety",
        ],
      },
      {
        label: "Proposed Initiative",
        title: "Saksham Smart Class",
        description:
          "A proposed blended EdTech initiative to improve access to technology-enabled education and computer skills among disadvantaged youth and adolescent girls.",
        areas: [
          "Digital Inclusion",
          "Skill Enhancement",
          "Better Learning Outcomes",
        ],
      },
    ],

    bottomNote:
      "Training availability may vary by project and location. Some categories reflect previous project experience, while Saksham Smart Class is a proposed initiative. Please contact our team for current program details.",
  },

  mr: {
    sectionLabel: "कौशल्य विकास",

    heading1: "आमच्या प्रशिक्षणाच्या",
    heading2: "विविध श्रेणी",

    description:
      "आरोग्यसेवा, डिजिटल शिक्षण, तांत्रिक कौशल्ये आणि तंत्रज्ञानाधारित शिक्षण क्षेत्रातील आमचा प्रशिक्षण अनुभव व उपक्रम जाणून घ्या.",

    focusLabel: "प्रमुख प्रशिक्षण विषय",

    categories: [
      {
        label: "प्रशिक्षणाचा अनुभव",
        title: "आरोग्यसेवा व पॅरामेडिकल प्रशिक्षण",
        description:
          "जनरल ड्युटी असिस्टंट, ऑपरेशन थिएटर टेक्निशियन, डायलिसिस टेक्निशियन, नर्सिंग केअर असिस्टंट आणि ICU टेक्निशियन या क्षेत्रांतील प्रशिक्षणाचा अनुभव.",
        areas: [
          "रुग्णसेवा",
          "वैद्यकीय सहाय्य",
          "संसर्ग प्रतिबंध",
          "रुग्णालयातील कार्यपद्धती",
          "कामासाठी आवश्यक तयारी",
        ],
      },
      {
        label: "प्रशिक्षणाचा अनुभव",
        title: "संगणक व डिजिटल शिक्षण",
        description:
          "संगणक साक्षरता, टॅली, आर्थिक लेखांकन, GST आणि कार्यस्थळावरील डिजिटल कौशल्यांच्या प्रशिक्षणाचा अनुभव.",
        areas: [
          "डिजिटल साक्षरता",
          "कार्यालयीन कामकाजाची कौशल्ये",
          "लेखांकनाची मूलभूत तत्त्वे",
          "रोजगारासाठी आवश्यक तयारी",
        ],
      },
      {
        label: "पूर्वीच्या प्रकल्पांचा अनुभव",
        title: "तांत्रिक व औद्योगिक प्रशिक्षण",
        description:
          "CNC/VMC मशीन ऑपरेटर आणि अग्निसुरक्षा व औद्योगिक सुरक्षितता प्रशिक्षण क्षेत्रांतील पूर्वीच्या प्रकल्पांचा अनुभव.",
        areas: [
          "औद्योगिक क्षेत्राची ओळख",
          "तांत्रिक कौशल्ये",
          "कामाच्या ठिकाणची सुरक्षितता",
        ],
      },
      {
        label: "प्रस्तावित उपक्रम",
        title: "सक्षम स्मार्ट क्लास",
        description:
          "वंचित घटकांतील युवक आणि किशोरवयीन मुलींना तंत्रज्ञानाधारित शिक्षण व संगणक कौशल्यांच्या संधी उपलब्ध करून देण्यासाठी प्रस्तावित मिश्र EdTech शिक्षण उपक्रम.",
        areas: [
          "डिजिटल समावेशन",
          "कौशल्यवृद्धी",
          "शिक्षणातील उत्तम परिणाम",
        ],
      },
    ],

    bottomNote:
      "प्रशिक्षण कार्यक्रमांची उपलब्धता प्रकल्प आणि ठिकाणानुसार बदलू शकते. काही श्रेणी पूर्वीच्या प्रकल्पांतील अनुभव दर्शवतात, तर सक्षम स्मार्ट क्लास हा प्रस्तावित उपक्रम आहे. सध्या उपलब्ध कार्यक्रमांच्या माहितीसाठी आमच्या टीमशी संपर्क साधा.",
  },
};

// ICONS, NUMBERS AND CARD STYLING
// Unchanged for both languages.
const categoryStyles = [
  {
    number: "01",
    icon: HeartPulse,
    color: "text-orange-600",
    iconBg: "bg-orange-50",
    border: "group-hover:border-orange-300",
  },
  {
    number: "02",
    icon: Monitor,
    color: "text-blue-700",
    iconBg: "bg-blue-50",
    border: "group-hover:border-blue-300",
  },
  {
    number: "03",
    icon: Factory,
    color: "text-green-700",
    iconBg: "bg-green-50",
    border: "group-hover:border-green-300",
  },
  {
    number: "04",
    icon: BookOpenCheck,
    color: "text-orange-600",
    iconBg: "bg-orange-50",
    border: "group-hover:border-orange-300",
  },
];

// ENGLISH / MARATHI NUMBER FORMATTING
const formatNumber = (number, language) => {
  if (language !== "mr") return String(number);

  return String(number).replace(
    /[0-9]/g,
    (digit) => "०१२३४५६७८९"[Number(digit)]
  );
};

export default function TrainingCategories() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="programs"
      aria-labelledby="training-categories-heading"
      className="scroll-mt-24 bg-[#F3F7FC] py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* SECTION HEADING */}
        <div className="mb-10 text-center lg:mb-12">

          {/* SECTION LABEL */}
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-orange-500" />

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange-600">
              {t.sectionLabel}
            </span>

            <span className="h-px w-8 bg-orange-500" />
          </div>

          {/* MAIN HEADING */}
          <h2
            id="training-categories-heading"
            className="text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl lg:text-5xl"
          >
            {t.heading1}{" "}

            <span className="text-orange-600">
              {t.heading2}
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            {t.description}
          </p>
        </div>

        {/* CATEGORY CARDS */}
        <div className="grid gap-6 md:grid-cols-2">

          {categoryStyles.map((category, index) => {
            const Icon = category.icon;
            const content = t.categories[index];

            return (
              <article
                key={category.number}
                className={`group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(6,27,80,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(6,27,80,0.09)] sm:p-8 ${category.border}`}
              >

                {/* ICON + NUMBER */}
                <div className="flex items-start justify-between gap-4">

                  {/* ICON */}
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${category.iconBg} ${category.color}`}
                  >
                    <Icon
                      className="h-7 w-7"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* NUMBER */}
                  <span className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
                    {formatNumber(category.number, language)}
                  </span>
                </div>

                {/* CATEGORY LABEL */}
                <div className="mt-6">
                  <span className="inline-flex rounded-full bg-[#F3F7FC] px-3 py-1.5 text-xs font-semibold text-slate-600">
                    {content.label}
                  </span>
                </div>

                {/* CATEGORY TITLE */}
                <h3 className="mt-4 text-xl font-bold leading-snug text-[#061B50] sm:text-2xl">
                  {content.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {content.description}
                </p>

                {/* DIVIDER */}
                <div className="my-6 h-px bg-slate-100" />

                {/* FOCUS AREAS */}
                <div className="mt-auto">

                  {/* FOCUS TITLE */}
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[#061B50]">
                    {t.focusLabel}
                  </h4>

                  {/* FOCUS TAGS */}
                  <div className="flex flex-wrap gap-2">

                    {content.areas.map((area, areaIndex) => (
                      <span
                        key={areaIndex}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-green-600" />

                        {area}
                      </span>
                    ))}

                  </div>
                </div>

                {/* BOTTOM ACCENT */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-8 h-[3px] w-0 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-20"
                />
              </article>
            );
          })}
        </div>

        {/* BOTTOM INFORMATION */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-slate-500 sm:text-sm">
          {t.bottomNote}
        </p>

      </div>
    </section>
  );
}

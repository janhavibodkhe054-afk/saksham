
import React from "react";
import {
  ArrowRight,
  GraduationCap,
  Hospital,
  CalendarDays,
  BriefcaseBusiness,
  Check,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    sectionLabel: "FEATURED HEALTHCARE PROGRAM",

    heading1: "Free General Duty Assistant",
    heading2: "(GDA) Training",

    subtitle: "Practical Learning. Real Hospital Experience.",

    description:
      "A 90-day training program combining classroom learning and practical hospital experience to prepare eligible candidates for healthcare support roles.",

    programPoints: [
      "Completely Free Training",
      "Age Eligibility: 18–35 Years",
      "45 Days Classroom + 45 Days Hospital OJT",
      "Training Location: Chinchwad Station, Pune",
    ],

    button: "Register for Free Training",

    registrationNote:
      "Registration subject to eligibility and seat availability.",

    highlights: [
      {
        number: "90",
        unit: "Days",
        title: "Total Training",
      },
      {
        number: "45",
        unit: "Days",
        title: "Classroom Training",
      },
      {
        number: "45",
        unit: "Days",
        title: "Hospital OJT",
      },
      {
        number: "100%",
        unit: "",
        title: "Placement Assistance",
      },
    ],
  },

  mr: {
    sectionLabel: "विशेष आरोग्यसेवा प्रशिक्षण कार्यक्रम",

    heading1: "मोफत जनरल ड्युटी असिस्टंट",
    heading2: "(GDA) प्रशिक्षण",

    subtitle: "प्रात्यक्षिक शिक्षण. रुग्णालयातील प्रत्यक्ष अनुभव.",

    description:
      "पात्र उमेदवारांना आरोग्यसेवा क्षेत्रातील सहाय्यक पदांसाठी तयार करण्याच्या उद्देशाने ९० दिवसांचा हा प्रशिक्षण कार्यक्रम राबवला जातो. यामध्ये वर्गातील शिक्षण आणि रुग्णालयातील प्रत्यक्ष कामाचा अनुभव यांचा समावेश आहे.",

    programPoints: [
      "संपूर्णपणे मोफत प्रशिक्षण",
      "पात्र वयोगट: १८–३५ वर्षे",
      "४५ दिवस वर्गातील प्रशिक्षण + ४५ दिवस रुग्णालयातील OJT",
      "प्रशिक्षणाचे ठिकाण: चिंचवड स्टेशन, पुणे",
    ],

    button: "मोफत प्रशिक्षणासाठी नोंदणी करा",

    registrationNote:
      "नोंदणी ही पात्रता निकष आणि उपलब्ध जागांच्या अधीन असेल.",

    highlights: [
      {
        number: "९०",
        unit: "दिवस",
        title: "एकूण प्रशिक्षण",
      },
      {
        number: "४५",
        unit: "दिवस",
        title: "वर्गातील प्रशिक्षण",
      },
      {
        number: "४५",
        unit: "दिवस",
        title: "रुग्णालयातील OJT",
      },
      {
        number: "१००%",
        unit: "",
        title: "प्लेसमेंट सहाय्य",
      },
    ],
  },
};

// ICONS, COLORS AND POSITIONS
// Remain unchanged for both languages.
const highlightStyles = [
  {
    icon: CalendarDays,
    style: "bg-[#061B50] text-white",
    iconStyle: "bg-white/15 text-white",
    position: "lg:-translate-y-7",
  },
  {
    icon: GraduationCap,
    style: "bg-orange-50 text-[#061B50]",
    iconStyle: "bg-orange-100 text-orange-600",
    position: "lg:translate-y-1",
  },
  {
    icon: Hospital,
    style: "bg-[#F3F7FC] text-[#061B50]",
    iconStyle: "bg-white text-[#061B50]",
    position: "lg:-translate-y-7",
  },
  {
    icon: BriefcaseBusiness,
    style: "bg-[#061B50] text-white",
    iconStyle: "bg-white/15 text-white",
    position: "lg:translate-y-1",
  },
];

export default function FeaturedGDASection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="featured-gda"
      aria-labelledby="gda-heading"
      className="scroll-mt-24 overflow-hidden bg-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-6">

            {/* SECTION LABEL */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-orange-500" />

              <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
                {t.sectionLabel}
              </span>
            </div>

            {/* HEADING */}
            <h2
              id="gda-heading"
              className="text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl lg:text-[43px]"
            >
              {t.heading1}

              <span className="block text-orange-600">
                {t.heading2}
              </span>
            </h2>

            {/* SUBTITLE */}
            <p className="mt-5 text-base font-semibold text-[#061B50]">
              {t.subtitle}
            </p>

            {/* ORANGE DIVIDER */}
            <div className="mt-5 h-1 w-16 rounded-full bg-orange-500" />

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-xl text-sm leading-8 text-slate-600 sm:text-base">
              {t.description}
            </p>

            {/* PROGRAM POINTS */}
            <div className="mt-8 space-y-4">
              {t.programPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  {/* CHECK ICON */}
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <Check
                      className="h-4 w-4"
                      strokeWidth={3}
                    />
                  </div>

                  {/* POINT TEXT */}
                  <p className="text-sm font-medium leading-7 text-slate-700 sm:text-base">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/contact#register"
              className="group mt-9 inline-flex items-center gap-3 rounded-lg bg-orange-600 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-700 hover:shadow-lg"
            >
              {t.button}

              <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* REGISTRATION NOTE */}
            <p className="mt-4 text-xs text-slate-500">
              {t.registrationNote}
            </p>
          </div>

          {/* RIGHT STAGGERED CARDS */}
          <div className="lg:col-span-6">
            <div className="mx-auto grid max-w-[570px] grid-cols-2 gap-4 sm:gap-6 lg:py-7">

              {highlightStyles.map((item, index) => {
                const Icon = item.icon;
                const content = t.highlights[index];

                return (
                  <div
                    key={index}
                    className={`group flex min-h-[195px] flex-col items-center justify-center rounded-lg px-4 py-7 text-center transition-all duration-300 hover:-translate-y-2 sm:min-h-[235px] ${item.style} ${item.position}`}
                  >
                    {/* ICON */}
                    <div
                      className={`mb-5 flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${item.iconStyle}`}
                    >
                      <Icon
                        className="h-8 w-8"
                        strokeWidth={1.7}
                      />
                    </div>

                    {/* NUMBER */}
                    <p className="text-4xl font-extrabold leading-none sm:text-5xl">
                      {content.number}
                    </p>

                    {/* LABEL */}
                    <p className="mt-3 text-sm font-semibold leading-snug sm:text-base">
                      {content.unit
                        ? `${content.unit} ${content.title}`
                        : content.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

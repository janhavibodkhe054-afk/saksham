
import React from "react";
import {
  ArrowUpRight,
  Check,
  GraduationCap,
  Hospital,
  BriefcaseBusiness,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  en: {
    label: "FEATURED PROGRAM",

    heading1: "Start Your Career in Healthcare",
    heading2: "— Absolutely Free!",

    description:
      "General Duty Assistant (GDA) is a structured skill development program designed to prepare eligible candidates for entry-level healthcare support roles through classroom learning and hospital-based practical training.",

    highlightsHeading: "Program Highlights",

    highlights: [
      "Completely Free Training",
      "Age Eligibility: 18–35 Years",
      "Practical Healthcare Skill Development",
      "Hospital On-the-Job Training",
      "Career Guidance & Placement Assistance",
    ],

    button: "Apply for Free GDA Training",
    freeTraining: "100% Free Training",

    imageCaption: "Learn. Practice. Grow.",
    imageSubtitle: "Healthcare Skill Development Program",

    stats: [
      {
        value: "45",
        label: "Days Classroom",
      },
      {
        value: "45",
        label: "Days Hospital OJT",
      },
      {
        value: "100%",
        label: "Placement Support",
      },
    ],
  },

  mr: {
    label: "विशेष प्रशिक्षण कार्यक्रम",

    heading1: "आरोग्यसेवा क्षेत्रात करिअरची सुरुवात करा",
    heading2: "— तेही अगदी मोफत!",

    description:
      "जनरल ड्युटी असिस्टंट (GDA) हा एक नियोजनबद्ध कौशल्य विकास प्रशिक्षण कार्यक्रम आहे. वर्गातील शिक्षण आणि रुग्णालयातील प्रत्यक्ष प्रशिक्षणाच्या माध्यमातून पात्र उमेदवारांना आरोग्यसेवा क्षेत्रातील प्राथमिक सहाय्यक पदांसाठी आवश्यक कौशल्ये विकसित करण्याची संधी दिली जाते.",

    highlightsHeading: "प्रशिक्षणाची वैशिष्ट्ये",

    highlights: [
      "संपूर्ण प्रशिक्षण मोफत",
      "वयोमर्यादा : १८ ते ३५ वर्षे",
      "आरोग्यसेवा क्षेत्रातील प्रात्यक्षिक प्रशिक्षण",
      "रुग्णालयात प्रत्यक्ष कामाचे प्रशिक्षण (OJT)",
      "करिअर मार्गदर्शन व रोजगारासाठी सहाय्य",
    ],

    button: "मोफत GDA प्रशिक्षणासाठी अर्ज करा",
    freeTraining: "१००% मोफत प्रशिक्षण",

    imageCaption: "शिका. सराव करा. प्रगती करा.",
    imageSubtitle: "आरोग्यसेवा कौशल्य विकास प्रशिक्षण कार्यक्रम",

    stats: [
      {
        value: "४५",
        label: "दिवस वर्गातील प्रशिक्षण",
      },
      {
        value: "४५",
        label: "दिवस रुग्णालयातील OJT",
      },
      {
        value: "१००%",
        label: "प्लेसमेंटसाठी सहाय्य",
      },
    ],
  },
};

const statStyles = [
  {
    icon: GraduationCap,
    color: "text-orange-600",
  },
  {
    icon: Hospital,
    color: "text-blue-700",
  },
  {
    icon: BriefcaseBusiness,
    color: "text-green-700",
  },
];

export default function FeaturedGDASection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="featured-gda"
      className="relative overflow-hidden bg-white py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* MAIN SPACIOUS LAYOUT */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">

            {/* EYEBROW */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-orange-500" />

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange-600">
                {t.label}
              </span>
            </div>

            {/* HEADING */}
            <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.18] tracking-tight text-[#061B50] sm:text-4xl lg:text-5xl">
              {t.heading1}

              <span className="mt-2 block text-orange-600">
                {t.heading2}
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              {t.description}
            </p>

            {/* PROGRAM HIGHLIGHTS */}
            <div className="mt-9">

              <h3 className="mb-5 flex items-center gap-3 text-base font-bold text-[#061B50]">
                <HeartPulse className="h-5 w-5 text-orange-500" />

                {t.highlightsHeading}
              </h3>

              <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {t.highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <Check
                        className="h-3.5 w-3.5"
                        strokeWidth={2.5}
                      />
                    </span>

                    <span className="text-sm font-medium leading-6 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-5">

              <Link
                to="/contact#register"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-orange-600 px-7 py-4 text-sm font-bold text-white shadow-[0_10px_25px_rgba(234,88,12,0.14)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-[0_15px_30px_rgba(234,88,12,0.2)]"
              >
                {t.button}

                <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <span className="inline-flex items-center gap-2 text-sm font-semibold text-green-700">
                <ShieldCheck className="h-5 w-5 shrink-0" />
                {t.freeTraining}
              </span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative lg:col-span-5">

            {/* SOFT DECORATIVE SHAPE */}
            <div className="absolute -right-5 -top-5 h-full w-full rounded-[32px] bg-orange-50" />

            <div className="group relative overflow-hidden rounded-[30px] bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=85"
                alt={
                  language === "mr"
                    ? "आरोग्यसेवा कौशल्य प्रशिक्षण"
                    : "Healthcare skill training"
                }
                loading="lazy"
                className="h-[340px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[440px] lg:h-[500px]"
              />
            </div>

            {/* IMAGE CAPTION */}
            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50">
                <HeartPulse className="h-5 w-5 text-blue-800" />
              </div>

              <div>
                <p className="text-sm font-bold text-[#061B50]">
                  {t.imageCaption}
                </p>

                <p className="text-xs text-slate-500">
                  {t.imageSubtitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CLEAN STATISTICS ROW */}
        <div className="mt-14 border-t border-slate-200 pt-9">

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-8">
            {t.stats.map((stat, index) => {
              const Icon = statStyles[index].icon;
              const iconColor = statStyles[index].color;

              return (
                <div
                  key={index}
                  className={`flex items-center gap-4 ${
                    index !== 0
                      ? "sm:border-l sm:border-slate-200 sm:pl-8"
                      : ""
                  }`}
                >
                  {/* ICON */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50">
                    <Icon className={`h-6 w-6 ${iconColor}`} />
                  </div>

                  {/* STAT */}
                  <div>
                    <p className="text-3xl font-extrabold leading-none text-[#061B50]">
                      {stat.value}
                    </p>

                    <p className="mt-2 text-sm font-medium text-slate-600">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

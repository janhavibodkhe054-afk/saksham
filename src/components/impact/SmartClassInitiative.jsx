
import React from "react";
import {
  UsersRound,
  CalendarDays,
  IndianRupee,
  Laptop,
  Monitor,
  CheckCircle2,
  Info,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    sectionLabel: "SAKSHAM SMART CLASS",

    heading1: "Bridging the",
    heading2: "Digital Education Gap",

    paragraph1:
      "Saksham Smart Class was proposed as a blended EdTech initiative to improve access to digital education and computer literacy for marginalized youth, especially girls and young women.",

    paragraph2:
      "The initiative focuses on essential computer skills, employment readiness and inclusive digital learning opportunities.",

    focusPoints: [
      "Computer Literacy",
      "Digital Education",
      "Employability Skills",
    ],

    proposalNoteTitle: "Proposed Initiative:",

    proposalNote:
      "Details reflect the original project proposal, not verified implementation results.",

    imageAlt: "Students learning computer and digital skills",

    overlayTitle: "Digital Learning",
    overlaySubtitle: "Proposed EdTech Initiative",

    highlightsHeading: "Original Proposal Highlights",
    highlightsBadge: "PROPOSED FIGURES",

    highlights: [
      {
        value: "150",
        label: "Target Youth",
        description: "Proposed beneficiaries",
      },
      {
        value: "2024 – 2025",
        label: "Project Period",
        description: "April 2024 – March 2025",
      },
      {
        value: "₹11,25,000",
        label: "Proposed Budget",
        description: "Original project estimate",
      },
      {
        value: "Digital Skills",
        label: "Key Focus",
        description: "Literacy & employability",
      },
    ],
  },

  mr: {
    sectionLabel: "सक्षम स्मार्ट क्लास",

    heading1: "डिजिटल शिक्षणातील",
    heading2: "दरी कमी करण्याचा प्रयत्न",

    paragraph1:
      "सक्षम स्मार्ट क्लास हा वंचित घटकांतील युवकांना, विशेषतः मुली आणि तरुण महिलांना डिजिटल शिक्षण व संगणक साक्षरतेच्या संधी उपलब्ध करून देण्यासाठी प्रस्तावित केलेला मिश्र शिक्षणपद्धतीवर आधारित EdTech उपक्रम होता.",

    paragraph2:
      "या प्रस्तावित उपक्रमाचा मुख्य भर आवश्यक संगणक कौशल्ये, रोजगारासाठी आवश्यक तयारी आणि सर्वसमावेशक डिजिटल शिक्षणाच्या संधी उपलब्ध करून देण्यावर होता.",

    focusPoints: [
      "संगणक साक्षरता",
      "डिजिटल शिक्षण",
      "रोजगारक्षमतेसाठी आवश्यक कौशल्ये",
    ],

    proposalNoteTitle: "प्रस्तावित उपक्रम:",

    proposalNote:
      "दिलेली माहिती मूळ प्रकल्प प्रस्तावावर आधारित आहे. ती प्रत्यक्ष अंमलबजावणी किंवा साध्य झालेल्या परिणामांची पुष्टी करत नाही.",

    imageAlt:
      "संगणक आणि डिजिटल कौशल्ये शिकणारे विद्यार्थी",

    overlayTitle: "डिजिटल शिक्षण",
    overlaySubtitle: "प्रस्तावित EdTech उपक्रम",

    highlightsHeading: "मूळ प्रकल्प प्रस्तावातील ठळक बाबी",
    highlightsBadge: "प्रस्तावित आकडेवारी",

    highlights: [
      {
        value: "१५०",
        label: "लक्षित युवक",
        description: "प्रस्तावित लाभार्थी",
      },
      {
        value: "२०२४ – २०२५",
        label: "प्रकल्प कालावधी",
        description: "एप्रिल २०२४ – मार्च २०२५",
      },
      {
        value: "₹११,२५,०००",
        label: "प्रस्तावित अर्थसंकल्प",
        description: "मूळ प्रकल्पाचा अंदाजित खर्च",
      },
      {
        value: "डिजिटल कौशल्ये",
        label: "मुख्य भर",
        description: "साक्षरता व रोजगारक्षमता",
      },
    ],
  },
};

// ICON CONFIGURATION
// Icons and styling remain unchanged for both languages.
const highlightIcons = [
  UsersRound,
  CalendarDays,
  IndianRupee,
  Laptop,
];

export default function SmartClassInitiative() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="smart-class-initiative"
      aria-labelledby="smart-class-heading"
      className="relative overflow-hidden bg-[#FFFCF7] py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* MAIN TWO COLUMN SECTION */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">

            {/* SECTION LABEL */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-orange-500" />

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange-600">
                {t.sectionLabel}
              </span>
            </div>

            {/* MAIN HEADING */}
            <h2
              id="smart-class-heading"
              className="text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl lg:text-[44px]"
            >
              {t.heading1}{" "}

              <span className="text-orange-600">
                {t.heading2}
              </span>
            </h2>

            {/* FIRST PARAGRAPH */}
            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
              {t.paragraph1}
            </p>

            {/* SECOND PARAGRAPH */}
            <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
              {t.paragraph2}
            </p>

            {/* FOCUS POINTS */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              {t.focusPoints.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-green-700" />

                  <span className="text-sm font-semibold text-[#061B50]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* PROPOSAL NOTE */}
            <div className="mt-8 flex items-start gap-3 border-l-[3px] border-orange-500 bg-white px-5 py-4">

              <Info className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />

              <p className="text-sm leading-6 text-slate-600">
                <strong className="text-[#061B50]">
                  {t.proposalNoteTitle}
                </strong>{" "}
                {t.proposalNote}
              </p>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[460px]">

              {/* IMAGE */}
              <div className="group overflow-hidden rounded-2xl bg-slate-100 shadow-[0_15px_45px_rgba(6,27,80,0.08)]">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=85"
                  alt={t.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[380px] lg:h-[420px]"
                />
              </div>

              {/* IMAGE OVERLAY TAG */}
              <div className="absolute -bottom-4 left-5 flex items-center gap-3 rounded-xl bg-[#061B50] px-5 py-4 text-white shadow-lg">

                <Monitor className="h-6 w-6 shrink-0 text-orange-300" />

                <div>
                  <p className="text-sm font-bold">
                    {t.overlayTitle}
                  </p>

                  <p className="mt-1 text-xs text-white/70">
                    {t.overlaySubtitle}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* PROPOSAL HIGHLIGHTS */}
        <div className="mt-16 lg:mt-20">

          {/* HEADING + BADGE */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">

            <h3 className="text-xl font-extrabold text-[#061B50] sm:text-2xl">
              {t.highlightsHeading}
            </h3>

            <span className="rounded-full bg-orange-100 px-4 py-2 text-xs font-bold text-orange-700">
              {t.highlightsBadge}
            </span>
          </div>

          {/* HIGHLIGHT CARDS */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {t.highlights.map((item, index) => {
              const Icon = highlightIcons[index];

              return (
                <div
                  key={index}
                  className="group rounded-xl border border-[#F0E7DC] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_12px_35px_rgba(6,27,80,0.06)]"
                >

                  {/* ICON */}
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-orange-50 text-orange-600 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* VALUE */}
                  <p className="text-xl font-extrabold leading-snug text-[#061B50] sm:text-2xl">
                    {item.value}
                  </p>

                  {/* LABEL */}
                  <p className="mt-2 text-sm font-bold text-slate-700">
                    {item.label}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

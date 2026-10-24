
import React from "react";
import {
  ArrowRight,
  UserRoundCheck,
  HeartPulse,
  BookOpenCheck,
  ClipboardPenLine,
  MessagesSquare,
  FileCheck2,
  GraduationCap,
  Hospital,
  BriefcaseBusiness,
  Check,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    sectionLabel: "ELIGIBILITY & ADMISSION",

    heading1: "Take the First Step",
    heading2: "Towards Your Career",

    description:
      "A simple admission process to help you begin your journey towards practical healthcare training.",

    eligibilityLabel: "WHO CAN APPLY?",
    eligibilityHeading: "Eligibility Criteria",

    eligibility: [
      {
        title: "Age 18–35 Years",
        description:
          "Applicants within the eligible age group.",
      },
      {
        title: "Interest in Healthcare",
        description:
          "Interested in healthcare support roles.",
      },
      {
        title: "Ready to Learn",
        description:
          "Willing to complete classroom and hospital training.",
      },
    ],

    eligibilityNote:
      "Final admission is subject to applicable project and documentation requirements.",

    ctaHeading: "Ready to Get Started?",

    ctaDescription:
      "Complete your registration and our team can guide you through the next steps.",

    ctaButton: "Register Now",

    processLabel: "STEP BY STEP",
    processHeading: "Admission Process",
    stepsBadge: "06 Steps",

    admissionSteps: [
      {
        title: "Submit Your Registration",
        description:
          "Complete the student registration form.",
      },
      {
        title: "Counselling & Eligibility Guidance",
        description:
          "Understand the program and eligibility requirements.",
      },
      {
        title: "Complete Documentation",
        description:
          "Provide the required admission documents.",
      },
      {
        title: "Begin Classroom Training",
        description:
          "Start 45 days of healthcare skill development.",
      },
      {
        title: "Complete Hospital OJT",
        description:
          "Gain 45 days of supervised hospital experience.",
      },
      {
        title: "Receive Placement Assistance",
        description:
          "Get support for healthcare employment opportunities.",
      },
    ],

    placementNote:
      "Placement assistance is provided after training. Employment is subject to available opportunities and selection requirements.",
  },

  mr: {
    sectionLabel: "पात्रता व प्रवेश प्रक्रिया",

    heading1: "तुमच्या करिअरच्या दिशेने",
    heading2: "पहिले पाऊल टाका",

    description:
      "आरोग्यसेवा क्षेत्रातील प्रात्यक्षिक प्रशिक्षणाच्या प्रवासाला सुरुवात करण्यासाठी सोपी आणि मार्गदर्शक प्रवेश प्रक्रिया.",

    eligibilityLabel: "कोण अर्ज करू शकतो?",
    eligibilityHeading: "पात्रता निकष",

    eligibility: [
      {
        title: "वयोगट १८–३५ वर्षे",
        description:
          "निर्धारित पात्र वयोगटातील उमेदवार अर्ज करू शकतात.",
      },
      {
        title: "आरोग्यसेवा क्षेत्रात आवड",
        description:
          "आरोग्यसेवा सहाय्यक पदांवर काम करण्याची आवड असणे.",
      },
      {
        title: "शिकण्याची तयारी",
        description:
          "वर्गातील आणि रुग्णालयातील प्रशिक्षण पूर्ण करण्याची तयारी असणे.",
      },
    ],

    eligibilityNote:
      "अंतिम प्रवेश संबंधित प्रकल्पाच्या अटी, पात्रता निकष आणि आवश्यक कागदपत्रांच्या पूर्ततेवर अवलंबून असेल.",

    ctaHeading: "सुरुवात करण्यासाठी तयार आहात?",

    ctaDescription:
      "तुमची नोंदणी पूर्ण करा. आमची टीम तुम्हाला पुढील प्रक्रियेसाठी मार्गदर्शन करू शकेल.",

    ctaButton: "आताच नोंदणी करा",

    processLabel: "टप्प्याटप्प्याने प्रक्रिया",
    processHeading: "प्रवेश प्रक्रिया",
    stepsBadge: "०६ टप्पे",

    admissionSteps: [
      {
        title: "नोंदणी अर्ज सादर करा",
        description:
          "विद्यार्थी नोंदणी फॉर्म पूर्ण भरा.",
      },
      {
        title: "समुपदेशन व पात्रता मार्गदर्शन",
        description:
          "प्रशिक्षण कार्यक्रम आणि पात्रतेच्या अटी समजून घ्या.",
      },
      {
        title: "आवश्यक कागदपत्रे जमा करा",
        description:
          "प्रवेश प्रक्रियेसाठी आवश्यक कागदपत्रे सादर करा.",
      },
      {
        title: "वर्गातील प्रशिक्षण सुरू करा",
        description:
          "आरोग्यसेवा कौशल्य विकासाचे ४५ दिवसांचे प्रशिक्षण सुरू करा.",
      },
      {
        title: "रुग्णालयातील OJT पूर्ण करा",
        description:
          "मार्गदर्शनाखाली रुग्णालयातील ४५ दिवसांचा प्रत्यक्ष कामाचा अनुभव घ्या.",
      },
      {
        title: "प्लेसमेंट सहाय्य मिळवा",
        description:
          "आरोग्यसेवा क्षेत्रातील रोजगाराच्या संधींसाठी सहाय्य मिळवा.",
      },
    ],

    placementNote:
      "प्रशिक्षण पूर्ण झाल्यानंतर प्लेसमेंट सहाय्य दिले जाते. नोकरी मिळणे हे उपलब्ध संधी आणि संबंधित निवड प्रक्रियेच्या निकषांवर अवलंबून असते.",
  },
};

// ICON CONFIGURATION
// Icons and layout remain unchanged for both languages.
const eligibilityIcons = [
  UserRoundCheck,
  HeartPulse,
  BookOpenCheck,
];

const admissionStepIcons = [
  ClipboardPenLine,
  MessagesSquare,
  FileCheck2,
  GraduationCap,
  Hospital,
  BriefcaseBusiness,
];

// ENGLISH / MARATHI NUMBER FORMATTING
const formatNumber = (number, language) => {
  const formatted = String(number).padStart(2, "0");

  if (language === "mr") {
    return formatted.replace(/[0-9]/g, (digit) =>
      "०१२३४५६७८९"[Number(digit)]
    );
  }

  return formatted;
};

export default function GDAAdmissionProcess() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="gda-admission"
      aria-labelledby="gda-admission-heading"
      className="bg-[#F5F8FC] py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* SECTION HEADER */}
        <div className="mb-10 text-center lg:mb-12">
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-orange-500" />

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange-600">
              {t.sectionLabel}
            </span>

            <span className="h-px w-8 bg-orange-500" />
          </div>

          {/* MAIN HEADING */}
          <h2
            id="gda-admission-heading"
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

        {/* MAIN LAYOUT */}
        <div className="grid items-start gap-7 lg:grid-cols-12 lg:gap-10">

          {/* LEFT - ELIGIBILITY */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_35px_rgba(6,27,80,0.04)]">

              {/* ELIGIBILITY HEADER */}
              <div className="border-b border-slate-100 px-6 py-6 sm:px-8">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  {t.eligibilityLabel}
                </span>

                <h3 className="mt-2 text-2xl font-extrabold text-[#061B50]">
                  {t.eligibilityHeading}
                </h3>
              </div>

              {/* ELIGIBILITY POINTS */}
              <div className="space-y-6 px-6 py-7 sm:px-8">

                {t.eligibility.map((item, index) => {
                  const Icon = eligibilityIcons[index];

                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4"
                    >
                      {/* ICON */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                        <Icon
                          className="h-6 w-6"
                          strokeWidth={1.8}
                        />
                      </div>

                      {/* CONTENT */}
                      <div>
                        <h4 className="text-base font-bold text-[#061B50]">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ELIGIBILITY NOTE */}
              <div className="border-t border-slate-100 bg-slate-50 px-6 py-5 sm:px-8">
                <p className="text-xs leading-6 text-slate-600">
                  {t.eligibilityNote}
                </p>
              </div>

            </div>

            {/* REGISTRATION CTA */}
            <div className="mt-6 rounded-2xl bg-[#061B50] p-6 text-white sm:p-8">

              <h3 className="text-xl font-bold">
                {t.ctaHeading}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/75">
                {t.ctaDescription}
              </p>

              <Link
                to="/contact#register"
                className="group mt-6 inline-flex items-center gap-3 rounded-lg bg-orange-600 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-700"
              >
                {t.ctaButton}

                <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* RIGHT - ADMISSION PROCESS */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(6,27,80,0.04)] sm:p-8 lg:p-9">

              {/* PROCESS HEADING */}
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                    {t.processLabel}
                  </span>

                  <h3 className="mt-2 text-2xl font-extrabold text-[#061B50]">
                    {t.processHeading}
                  </h3>
                </div>

                {/* STEPS BADGE */}
                <span className="shrink-0 rounded-full bg-orange-50 px-4 py-2 text-xs font-bold text-orange-600">
                  {t.stepsBadge}
                </span>
              </div>

              {/* VERTICAL TIMELINE */}
              <div className="relative">

                {/* CONNECTING LINE */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-8 left-[23px] top-6 w-px bg-slate-200"
                />

                {/* ADMISSION STEPS */}
                <div className="space-y-7">

                  {t.admissionSteps.map((step, index) => {
                    const Icon = admissionStepIcons[index];

                    return (
                      <div
                        key={index}
                        className="group relative flex items-start gap-5"
                      >
                        {/* STEP NUMBER */}
                        <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#061B50] text-sm font-bold text-white shadow-sm transition-colors duration-300 group-hover:bg-orange-600">
                          {formatNumber(index + 1, language)}
                        </div>

                        {/* STEP CONTENT */}
                        <div className="flex-1 border-b border-slate-100 pb-6 last:border-b-0">

                          <div className="flex items-start gap-3">
                            <div>
                              <h4 className="text-base font-bold leading-snug text-[#061B50]">
                                {step.title}
                              </h4>

                              <p className="mt-2 text-sm leading-6 text-slate-600">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* STEP ICON */}
                        <Icon className="mt-1 hidden h-5 w-5 shrink-0 text-orange-500 sm:block" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* BOTTOM NOTE */}
              <div className="mt-3 flex items-start gap-2 rounded-xl bg-[#F3F7FC] px-4 py-4">

                <Check className="mt-1 h-4 w-4 shrink-0 text-green-700" />

                <p className="text-xs leading-6 text-slate-600">
                  {t.placementNote}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

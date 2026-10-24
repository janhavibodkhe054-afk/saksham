
import React from "react";
import {
  ArrowUpRight,
  PhoneCall,
  GraduationCap,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    sectionLabel: "TAKE THE NEXT STEP",

    heading1: "Your Career Journey Starts",
    heading2: "with the Right Skills.",

    description:
      "Interested in joining an available training program? Contact our team for eligibility, upcoming batches and registration details.",

    primaryButton: "Register Now",
    secondaryButton: "Call for Course Details",
  },

  mr: {
    sectionLabel: "पुढचे पाऊल टाका",

    heading1: "तुमच्या करिअरची सुरुवात करा",
    heading2: "योग्य कौशल्यांसोबत.",

    description:
      "उपलब्ध प्रशिक्षण कार्यक्रमात सहभागी होण्याची इच्छा आहे? पात्रता निकष, आगामी बॅचेस आणि नोंदणी प्रक्रियेच्या माहितीसाठी आमच्या टीमशी संपर्क साधा.",

    primaryButton: "आताच नोंदणी करा",
    secondaryButton: "प्रशिक्षणाच्या माहितीसाठी कॉल करा",
  },
};

export default function ProgramCTA() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="program-cta"
      aria-labelledby="program-cta-heading"
      className="relative overflow-hidden bg-white py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-8">

            {/* SECTION LABEL */}
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <GraduationCap
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange-600">
                {t.sectionLabel}
              </span>
            </div>

            {/* HEADING */}
            <h2
              id="program-cta-heading"
              className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl lg:text-[42px]"
            >
              {t.heading1}

              <span className="block text-orange-600">
                {t.heading2}
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              {t.description}
            </p>
          </div>

          {/* RIGHT CTA BUTTONS */}
          <div className="flex flex-col gap-4 sm:flex-row lg:col-span-4 lg:flex-col">

            {/* PRIMARY BUTTON */}
            <Link
              to="/contact#register"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-orange-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-lg"
            >
              {t.primaryButton}

              <ArrowUpRight
                className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              />
            </Link>

            {/* SECONDARY BUTTON */}
            <a
              href="tel:+918830223458"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-[#061B50] transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-md"
            >
              <PhoneCall
                className="h-4 w-4 shrink-0 text-orange-600"
                aria-hidden="true"
              />

              {t.secondaryButton}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

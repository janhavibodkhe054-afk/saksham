
import React from "react";
import {
  CalendarDays,
  MapPin,
  GraduationCap,
  ClipboardCheck,
  ArrowUpRight,
  Info,
  CheckCircle2,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    sectionLabel: "FEATURED CSR PROJECT PROPOSAL",
    statusBadge: "PROPOSED INITIATIVE",

    heading1: "Healthcare Skill",
    heading2: "Development for Women",

    paragraphs: [
      "Saksham Foundation's 2026–27 CSR project proposal focuses on General Duty Assistant (NSQF Level 4) training for more than 200 women candidates aged 18–35 in Pune District.",

      "The proposed initiative combines classroom training, practical learning, hospital OJT, assessment and certification coordination, placement support and post-placement tracking.",
    ],

    targetNumber: "200",
    targetLabel: "Women Candidates",
    targetNote: "Proposed Training Target",

    qualification: "NSQF Level 4",
    location: "Pune District",
    period: "2026–27 Proposal",

    componentsHeading: "Proposed Project Components",

    components: [
      "Classroom Training",
      "Practical Learning",
      "Hospital OJT",
      "Assessment & Certification Coordination",
      "Placement Support",
      "Post-Placement Tracking",
    ],

    button: "Discuss CSR Collaboration",

    tableTitle: "Proposed Project Snapshot",
    tableDescription: "Key details from the 2026–27 CSR proposal",

    tableColumn1: "Particular",
    tableColumn2: "Details",

    projectDetails: [
      {
        label: "Project",
        value: "General Duty Assistant",
      },
      {
        label: "Qualification",
        value: "NSQF Level 4",
      },
      {
        label: "Target",
        value: "200+ Women",
      },
      {
        label: "Age Group",
        value: "18–35 Years",
      },
      {
        label: "Location",
        value: "Pune District",
      },
      {
        label: "Project Period",
        value: "July 2026 – March 2027",
      },
      {
        label: "Certification",
        value: "Proposed through TMF",
      },
      {
        label: "Status",
        value: "CSR Project Proposal",
      },
    ],

    proposalNote:
      "This information describes a proposed CSR project. Targets, project period and certification arrangements do not represent verified implementation or completed outcomes.",
  },

  mr: {
    sectionLabel: "प्रस्तावित CSR प्रकल्प",
    statusBadge: "प्रस्तावित उपक्रम",

    heading1: "महिलांसाठी आरोग्यसेवा",
    heading2: "कौशल्य विकास प्रशिक्षण",

    paragraphs: [
      "सक्षम फाउंडेशनचा २०२६–२७ या कालावधीतील प्रस्तावित CSR प्रकल्प पुणे जिल्ह्यातील १८ ते ३५ वयोगटातील २०० हून अधिक महिलांना जनरल ड्युटी असिस्टंट (NSQF स्तर ४) प्रशिक्षण देण्याच्या उद्दिष्टावर आधारित आहे.",

      "या प्रस्तावित उपक्रमामध्ये वर्गातील प्रशिक्षण, प्रात्यक्षिक शिक्षण, रुग्णालयातील OJT, मूल्यमापन व प्रमाणपत्र प्रक्रियेचा समन्वय, प्लेसमेंट सहाय्य आणि प्लेसमेंटनंतरचा पाठपुरावा यांचा समावेश आहे.",
    ],

    targetNumber: "२००",
    targetLabel: "महिला उमेदवार",
    targetNote: "प्रस्तावित प्रशिक्षण उद्दिष्ट",

    qualification: "NSQF स्तर ४",
    location: "पुणे जिल्हा",
    period: "२०२६–२७ चा प्रस्ताव",

    componentsHeading: "प्रस्तावित प्रकल्पाचे घटक",

    components: [
      "वर्गातील प्रशिक्षण",
      "प्रात्यक्षिक शिक्षण",
      "रुग्णालयातील OJT",
      "मूल्यमापन व प्रमाणपत्र प्रक्रियेचा समन्वय",
      "प्लेसमेंट सहाय्य",
      "प्लेसमेंटनंतरचा पाठपुरावा",
    ],

    button: "CSR भागीदारीबाबत चर्चा करा",

    tableTitle: "प्रस्तावित प्रकल्पाची माहिती",
    tableDescription: "२०२६–२७ च्या CSR प्रस्तावातील प्रमुख तपशील",

    tableColumn1: "घटक",
    tableColumn2: "तपशील",

    projectDetails: [
      {
        label: "प्रकल्प",
        value: "जनरल ड्युटी असिस्टंट",
      },
      {
        label: "पात्रता स्तर",
        value: "NSQF स्तर ४",
      },
      {
        label: "उद्दिष्ट",
        value: "२००+ महिला",
      },
      {
        label: "वयोगट",
        value: "१८–३५ वर्षे",
      },
      {
        label: "ठिकाण",
        value: "पुणे जिल्हा",
      },
      {
        label: "प्रकल्प कालावधी",
        value: "जुलै २०२६ – मार्च २०२७",
      },
      {
        label: "प्रमाणपत्र",
        value: "TMF मार्फत प्रस्तावित",
      },
      {
        label: "स्थिती",
        value: "CSR प्रकल्प प्रस्ताव",
      },
    ],

    proposalNote:
      "ही माहिती प्रस्तावित CSR प्रकल्पासंबंधी आहे. नमूद केलेली उद्दिष्टे, प्रकल्प कालावधी आणि प्रमाणपत्र व्यवस्था यांचा अर्थ प्रकल्पाची प्रत्यक्ष अंमलबजावणी झालेली आहे किंवा अपेक्षित परिणाम साध्य झाले आहेत असा होत नाही.",
  },
};

export default function FeaturedCSRProposal() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="featured-csr-proposal"
      aria-labelledby="csr-proposal-heading"
      className="relative overflow-hidden bg-[#F4F7FB] py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* TOP LABEL */}
        <div className="mb-9 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-9 bg-orange-500" />

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange-600">
              {t.sectionLabel}
            </span>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-bold text-orange-700">
            <ClipboardCheck className="h-4 w-4" />
            {t.statusBadge}
          </span>
        </div>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-6">

            {/* HEADING */}
            <h2
              id="csr-proposal-heading"
              className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl lg:text-[44px]"
            >
              {t.heading1}

              <span className="block text-orange-600">
                {t.heading2}
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-xl text-sm leading-8 text-slate-700 sm:text-base">
              {t.paragraphs[0]}
            </p>

            <p className="mt-4 max-w-xl text-sm leading-8 text-slate-700 sm:text-base">
              {t.paragraphs[1]}
            </p>

            {/* MAIN IMPACT TARGET */}
            <div className="mt-8 flex items-center gap-6 border-y border-slate-200 py-6">
              <div>
                <p className="text-5xl font-extrabold tracking-tight text-[#061B50] sm:text-6xl">
                  {t.targetNumber}
                  <span className="text-orange-600">+</span>
                </p>

                <p className="mt-2 text-sm font-bold text-slate-700">
                  {t.targetLabel}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {t.targetNote}
                </p>
              </div>

              <div className="h-20 w-px shrink-0 bg-slate-200" />

              {/* QUICK DETAILS */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 shrink-0 text-orange-600" />

                  <span className="text-sm font-semibold text-[#061B50]">
                    {t.qualification}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 shrink-0 text-orange-600" />

                  <span className="text-sm font-semibold text-[#061B50]">
                    {t.location}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 shrink-0 text-orange-600" />

                  <span className="text-sm font-semibold text-[#061B50]">
                    {t.period}
                  </span>
                </div>
              </div>
            </div>

            {/* PROPOSED PROJECT COMPONENTS */}
            <div className="mt-8">
              <h3 className="mb-5 text-lg font-bold text-[#061B50]">
                {t.componentsHeading}
              </h3>

              <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
                {t.components.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />

                    <span className="text-sm font-medium leading-6 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/contact#csr-enquiry"
              className="group mt-9 inline-flex items-center gap-3 rounded-lg bg-orange-600 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-700 hover:shadow-lg"
            >
              {t.button}

              <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          {/* RIGHT - PROJECT SNAPSHOT */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(6,27,80,0.06)]">

              {/* TABLE HEADER */}
              <div className="border-b border-slate-100 px-6 py-6 sm:px-8">

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <ClipboardCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-[#061B50]">
                      {t.tableTitle}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {t.tableDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* PROJECT DETAILS TABLE */}
              <div className="px-6 py-3 sm:px-8">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-slate-200">

                      <th
                        scope="col"
                        className="py-4 pr-4 text-xs font-bold uppercase tracking-wider text-slate-500"
                      >
                        {t.tableColumn1}
                      </th>

                      <th
                        scope="col"
                        className="py-4 text-xs font-bold uppercase tracking-wider text-slate-500"
                      >
                        {t.tableColumn2}
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {t.projectDetails.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-slate-100 last:border-b-0"
                      >
                        <th
                          scope="row"
                          className="w-[42%] py-4 pr-4 align-top text-sm font-medium text-slate-500"
                        >
                          {item.label}
                        </th>

                        <td className="py-4 align-top text-sm font-bold leading-6 text-[#061B50]">
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* PROPOSAL NOTICE */}
              <div className="flex items-start gap-3 border-t border-slate-100 bg-orange-50/60 px-6 py-5 sm:px-8">

                <Info className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />

                <p className="text-xs leading-6 text-slate-600">
                  {t.proposalNote}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

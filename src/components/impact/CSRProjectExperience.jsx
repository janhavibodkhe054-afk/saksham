
import React from "react";
import {
  Users,
  MessageCircle,
  ClipboardList,
  GraduationCap,
  ClipboardCheck,
  FileText,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Handshake,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    sectionLabel: "CSR PROJECT EXPERIENCE",

    heading1: "Experience in",
    heading2: "Skill Development",
    heading3: "Implementation",

    description:
      "Supporting CSR-funded training initiatives through community outreach, training coordination and employment-focused assistance.",

    responsibilities: [
      "Beneficiary Mobilization",
      "Candidate Counselling",
      "Registration & Enrolment",
      "Training Coordination",
      "Project Monitoring",
      "Documentation",
      "Placement Assistance",
      "Project Reporting",
    ],

    footerTitle: "CSR Collaboration Experience",

    collaboration1: "Morya Samajik Pratishthan",
    collaboration2: "Sunrise Paramedical Institute",
    collaboration3: "Bajaj Finserv CSR Initiative",
  },

  mr: {
    sectionLabel: "CSR प्रकल्पांचा अनुभव",

    heading1: "कौशल्य विकास",
    heading2: "प्रकल्प अंमलबजावणीचा",
    heading3: "अनुभव",

    description:
      "समुदाय संपर्क, प्रशिक्षण समन्वय आणि रोजगाराभिमुख सहाय्याच्या माध्यमातून CSR निधीतून राबविल्या जाणाऱ्या प्रशिक्षण उपक्रमांना सहकार्य.",

    responsibilities: [
      "लाभार्थी संपर्क व निवड",
      "उमेदवारांचे समुपदेशन",
      "नोंदणी व प्रवेश प्रक्रिया",
      "प्रशिक्षण समन्वय",
      "प्रकल्प देखरेख",
      "दस्तऐवजीकरण",
      "प्लेसमेंट सहाय्य",
      "प्रकल्प अहवाल",
    ],

    footerTitle: "CSR सहकार्याचा अनुभव",

    collaboration1: "मोरया सामाजिक प्रतिष्ठान",
    collaboration2: "सनराइज पॅरामेडिकल इन्स्टिट्यूट",
    collaboration3: "बजाज फिनसर्व्ह CSR उपक्रम",
  },
};

// ICON CONFIGURATION
// Icons and card styling remain unchanged.
const responsibilityStyles = [
  { icon: Users },
  { icon: MessageCircle },
  { icon: ClipboardList },
  { icon: GraduationCap },
  { icon: ClipboardCheck },
  { icon: FileText },
  { icon: BriefcaseBusiness },
  { icon: ChartNoAxesCombined },
];

export default function CSRProjectExperience() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="csr-project-experience"
      aria-labelledby="csr-experience-heading"
      className="bg-[#F4F7FB] py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* SECTION HEADING */}
        <div className="mx-auto mb-10 max-w-3xl text-center">

          {/* SECTION LABEL */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-orange-500" />

            <span className="text-xs font-bold uppercase tracking-[0.14em] text-orange-600">
              {t.sectionLabel}
            </span>

            <span className="h-px w-8 bg-orange-500" />
          </div>

          {/* MAIN HEADING */}
          <h2
            id="csr-experience-heading"
            className="text-3xl font-extrabold leading-tight text-[#061B50] sm:text-4xl lg:text-[44px]"
          >
            {t.heading1}{" "}

            <span className="text-orange-600">
              {t.heading2}
            </span>{" "}

            {t.heading3}
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            {t.description}
          </p>
        </div>

        {/* RESPONSIBILITIES GRID */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">

          {responsibilityStyles.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group flex min-h-[145px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_12px_30px_rgba(6,27,80,0.07)] sm:min-h-[165px]"
              >

                {/* ICON */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-600 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
                  <Icon
                    className="h-6 w-6"
                    strokeWidth={1.8}
                  />
                </div>

                {/* TITLE */}
                <h3 className="max-w-[170px] text-sm font-bold leading-snug text-[#061B50] sm:text-base">
                  {t.responsibilities[index]}
                </h3>
              </div>
            );
          })}
        </div>

        {/* COLLABORATION FOOTER */}
        <div className="mt-9 flex flex-col gap-4 border-t border-slate-200 pt-6 lg:flex-row lg:items-center lg:justify-between">

          {/* FOOTER TITLE */}
          <div className="flex items-center gap-3">
            <Handshake className="h-5 w-5 shrink-0 text-orange-600" />

            <p className="text-sm font-bold text-[#061B50]">
              {t.footerTitle}
            </p>
          </div>

          {/* COLLABORATION DETAILS */}
          <p className="max-w-3xl text-sm leading-7 text-slate-600 lg:text-right">
            {t.collaboration1} {" • "} {t.collaboration2}

            <span className="block sm:inline">
              {" • "}{t.collaboration3}
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}

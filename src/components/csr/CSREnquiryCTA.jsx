
import React from "react";
import {
  ArrowUpRight,
  PhoneCall,
  Handshake,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    sectionLabel: "PARTNER WITH SAKSHAM",

    heading1: "Let's Create Opportunities",
    heading2: "That Last.",

    description:
      "Collaborate with Saksham Foundation to design and implement skill development initiatives aligned with your organization's CSR objectives.",

    primaryButton: "Submit CSR Enquiry",
    secondaryButton: "Contact Our Team",
  },

  mr: {
    sectionLabel: "सक्षम फाउंडेशनसोबत भागीदारी करा",

    heading1: "एकत्र येऊन संधी निर्माण करूया",
    heading2: "शाश्वत परिवर्तन घडवूया.",

    description:
      "तुमच्या संस्थेच्या CSR उद्दिष्टांशी सुसंगत कौशल्य विकास उपक्रमांचे नियोजन आणि अंमलबजावणी करण्यासाठी सक्षम फाउंडेशनसोबत संपर्क करा.",

    primaryButton: "CSR चौकशी पाठवा",
    secondaryButton: "आमच्या टीमशी संपर्क साधा",
  },
};

export default function CSREnquiryCTA() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="csr-enquiry-cta"
      aria-labelledby="csr-cta-heading"
      className="relative overflow-hidden bg-[#FFFCF7] py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid items-center gap-9 lg:grid-cols-12 lg:gap-14">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-8">

            {/* SECTION LABEL */}
            <div className="mb-5 flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <Handshake className="h-5 w-5" />
              </div>

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange-600">
                {t.sectionLabel}
              </span>
            </div>

            {/* HEADING */}
            <h2
              id="csr-cta-heading"
              className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl lg:text-[44px]"
            >
              {t.heading1}

              <span className="block text-orange-600">
                {t.heading2}
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
              {t.description}
            </p>
          </div>

          {/* RIGHT CTA BUTTONS */}
          <div className="flex flex-col gap-4 sm:flex-row lg:col-span-4 lg:flex-col">

            {/* PRIMARY CTA */}
            <Link
              to="/contact#csr-enquiry"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-orange-600 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-lg"
            >
              {t.primaryButton}

              <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            {/* SECONDARY CTA */}
            <a
              href="tel:+918830223458"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-[#061B50] transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-md"
            >
              <PhoneCall className="h-4 w-4 shrink-0 text-orange-600" />

              {t.secondaryButton}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

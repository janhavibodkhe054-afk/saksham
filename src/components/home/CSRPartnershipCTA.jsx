
import React from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Handshake,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  en: {
    label: "PARTNER WITH US",

    heading1: "Let's Build a Skilled &",
    heading2: "Self-Reliant Future Together.",

    description:
      "Saksham Foundation welcomes collaborations with CSR partners, corporate organizations, hospitals, educational institutions and community organizations to expand access to skill development and sustainable employment opportunities.",

    button1: "Become a CSR Partner",
    button2: "Discuss a Project",
  },

  mr: {
    label: "आमच्यासोबत भागीदारी करा",

    heading1: "कौशल्यपूर्ण आणि",
    heading2: "स्वावलंबी भविष्य घडवूया!",

    description:
      "कौशल्य विकास आणि शाश्वत रोजगाराच्या संधी अधिकाधिक लोकांपर्यंत पोहोचवण्यासाठी सक्षम फाउंडेशन सीएसआर भागीदार, कॉर्पोरेट संस्था, रुग्णालये, शैक्षणिक संस्था आणि सामाजिक संस्थांसोबत सहकार्य करण्यास उत्सुक आहे.",

    button1: "सीएसआर भागीदार बना",
    button2: "प्रकल्पाबाबत चर्चा करा",
  },
};

export default function CSRPartnershipCTA() {
  const { language } = useLanguage();

  const t = translations[language] || translations.en;

  return (
    <section
      id="csr-partnership"
      className="relative overflow-hidden bg-white py-10 lg:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] px-6 py-8 sm:px-8 lg:px-10 lg:py-9">

          {/* SUBTLE BACKGROUND DECORATIONS */}
          <div className="pointer-events-none absolute -right-12 -top-20 h-52 w-52 rounded-full bg-orange-100/50 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 left-0 h-48 w-48 rounded-full bg-blue-100/50 blur-3xl" />

          <div className="relative z-10">

            {/* LABEL */}
            <div className="mb-3 flex items-center gap-2">
              <Handshake className="h-4 w-4 text-orange-600" />

              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                {t.label}
              </span>
            </div>

            {/* HEADING */}
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-3xl lg:text-[32px]">
              {t.heading1}{" "}
              <span className="text-orange-600">
                {t.heading2}
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-3 max-w-5xl text-sm leading-6 text-slate-600 sm:text-base">
              {t.description}
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-6 flex flex-wrap items-center gap-3">

              {/* PRIMARY BUTTON */}
              <Link
                to="/contact#csr-enquiry"
                className="group inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-700"
              >
                {t.button1}

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* SECONDARY BUTTON */}
              <Link
                to="/contact#csr-enquiry"
                className="group inline-flex items-center gap-2 rounded-lg border border-[#061B50]/20 bg-white px-5 py-3 text-sm font-bold text-[#061B50] transition-all duration-300 hover:border-orange-400 hover:text-orange-600"
              >
                {t.button2}

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

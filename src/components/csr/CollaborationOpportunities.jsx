
import React, { useEffect, useRef, useState } from "react";
import {
  Building2,
  HeartPulse,
  Factory,
  GraduationCap,
  UsersRound,
  Handshake,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    sectionLabel: "Collaboration Opportunities",

    opportunities: [
      "Corporate CSR Partners",
      "Hospitals & Healthcare Institutions",
      "Industry & Employers",
      "Educational Institutions",
      "NGOs & Community Organizations",
      "Training & Implementation Partners",
    ],
  },

  mr: {
    sectionLabel: "सहकार्य आणि भागीदारीच्या संधी",

    opportunities: [
      "कॉर्पोरेट CSR भागीदार",
      "रुग्णालये व आरोग्यसेवा संस्था",
      "उद्योग व नियोक्ते",
      "शैक्षणिक संस्था",
      "स्वयंसेवी संस्था व सामाजिक संघटना",
      "प्रशिक्षण व प्रकल्प अंमलबजावणी भागीदार",
    ],
  },
};

// ICON CONFIGURATION
// Icons and layout remain unchanged for both languages.
const opportunityStyles = [
  { icon: Building2 },
  { icon: HeartPulse },
  { icon: Factory },
  { icon: GraduationCap },
  { icon: UsersRound },
  { icon: Handshake },
];

export default function CollaborationOpportunities() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="collaboration-opportunities"
      ref={sectionRef}
      aria-label={t.sectionLabel}
      className="overflow-hidden bg-[#061B50] py-12 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* SMALL WHITE BOXES */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">

          {opportunityStyles.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`collab-small-card group flex min-h-[130px] flex-col items-center justify-center rounded-xl bg-white px-3 py-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[140px] ${
                  visible ? "collab-visible" : ""
                }`}
                style={{
                  animationDelay: `${index * 90}ms`,
                }}
              >

                {/* ICON */}
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-orange-50 text-orange-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white">
                  <Icon
                    className="h-5 w-5"
                    strokeWidth={1.8}
                  />
                </div>

                {/* TITLE */}
                <h3 className="max-w-[230px] text-xs font-bold leading-snug text-[#061B50] sm:text-sm">
                  {t.opportunities[index]}
                </h3>

              </div>
            );
          })}
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes collabSmallReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .collab-small-card {
          opacity: 0;
        }

        .collab-visible {
          animation: collabSmallReveal 550ms ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .collab-small-card {
            opacity: 1 !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

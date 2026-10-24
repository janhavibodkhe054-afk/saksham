
import React from "react";

import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    sectionLabel: "GDA TRAINING CURRICULUM",

    heading1: "What You Will",
    heading2: "Learn in GDA",

    description:
      "Develop essential healthcare knowledge and practical skills through structured classroom learning and supervised hospital training.",

    sliderLabel: "GDA learning areas",

    learningAreas: [
      {
        title: "Patient Care",
        description:
          "Supporting patients with daily care and routine assistance.",
      },
      {
        title: "Basic Healthcare Knowledge",
        description:
          "Understanding fundamental healthcare practices.",
      },
      {
        title: "Infection Control",
        description:
          "Learning hygiene, sanitation and infection prevention.",
      },
      {
        title: "Communication Skills",
        description:
          "Communicating effectively with patients and staff.",
      },
      {
        title: "First Aid Basics",
        description:
          "Understanding basic first-aid concepts and procedures.",
      },
      {
        title: "Hospital OJT",
        description:
          "Experiencing real hospital workflows under supervision.",
      },
    ],
  },

  mr: {
    sectionLabel: "GDA प्रशिक्षण अभ्यासक्रम",

    heading1: "GDA प्रशिक्षणात",
    heading2: "तुम्ही काय शिकाल?",

    description:
      "नियोजनबद्ध वर्गातील शिक्षण आणि मार्गदर्शनाखाली रुग्णालयातील प्रत्यक्ष प्रशिक्षणाच्या माध्यमातून आरोग्यसेवेचे आवश्यक ज्ञान आणि व्यावहारिक कौशल्ये विकसित करा.",

    sliderLabel: "GDA प्रशिक्षणातील विषय",

    learningAreas: [
      {
        title: "रुग्णसेवा",
        description:
          "रुग्णांच्या दैनंदिन काळजीसाठी आणि नियमित गरजांसाठी सहाय्य करणे.",
      },
      {
        title: "आरोग्यसेवेचे मूलभूत ज्ञान",
        description:
          "आरोग्यसेवा क्षेत्रातील मूलभूत कार्यपद्धती समजून घेणे.",
      },
      {
        title: "संसर्ग प्रतिबंध व नियंत्रण",
        description:
          "स्वच्छता, निर्जंतुकीकरण आणि संसर्ग प्रतिबंधाच्या पद्धती शिकणे.",
      },
      {
        title: "संवाद कौशल्ये",
        description:
          "रुग्ण आणि रुग्णालयातील कर्मचाऱ्यांशी प्रभावी संवाद साधणे.",
      },
      {
        title: "प्रथमोपचाराचे मूलभूत ज्ञान",
        description:
          "प्राथमिक उपचारांच्या मूलभूत संकल्पना आणि कार्यपद्धती समजून घेणे.",
      },
      {
        title: "रुग्णालयातील OJT",
        description:
          "मार्गदर्शनाखाली रुग्णालयातील प्रत्यक्ष कामकाजाचा अनुभव घेणे.",
      },
    ],
  },
};

// IMAGE CONFIGURATION
// Images remain unchanged in both languages.
const learningImages = [
  "/g13.jpeg",

  "/g10.jpeg",

  "/g15.jpeg",

  "/g29.jpeg",

  "/g12.jpeg",

  "/g3.jpeg",
];

export default function GDALearningSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  // Duplicate cards for seamless continuous scrolling.
  const sliderItems = [
    ...t.learningAreas,
    ...t.learningAreas,
  ];

  return (
    <section
      id="gda-learning"
      aria-labelledby="gda-learning-heading"
      className="overflow-hidden bg-[#061B50] py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* SECTION HEADING */}
        <div className="mb-10 text-center">

          {/* SECTION LABEL */}
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange-300">
            {t.sectionLabel}
          </span>

          {/* MAIN HEADING */}
          <h2
            id="gda-learning-heading"
            className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {t.heading1}{" "}

            <span className="text-orange-400">
              {t.heading2}
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            {t.description}
          </p>
        </div>

        {/* CONTINUOUS SLIDER */}
        <div
          className="gda-slider overflow-hidden py-4"
          aria-label={t.sliderLabel}
        >
          <div className="gda-slider-track flex w-max gap-5">

            {sliderItems.map((item, index) => {
              const originalIndex =
                index % t.learningAreas.length;

              const isDuplicate =
                index >= t.learningAreas.length;

              return (
                <article
                  key={`${originalIndex}-${index}`}
                  aria-hidden={
                    isDuplicate ? "true" : undefined
                  }
                  className="gda-slide group shrink-0 rounded-xl bg-white p-3 shadow-[0_10px_35px_rgba(0,0,0,0.15)]"
                >

                  {/* IMAGE */}
                  <div className="overflow-hidden rounded-lg bg-slate-100">
                    <img
                      src={learningImages[originalIndex]}
                      alt={
                        isDuplicate ? "" : item.title
                      }
                      loading="lazy"
                      decoding="async"
                      className="h-[180px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* CARD CONTENT */}
                  <div className="px-3 pb-5 pt-5">

                    {/* TITLE */}
                    <h3 className="text-base font-bold leading-snug text-[#061B50]">
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>

                </article>
              );
            })}
          </div>
        </div>

      </div>

      {/* SLIDER STYLES */}
      <style>{`
        .gda-slide {
          width: calc((min(100vw - 80px, 1200px) - 60px) / 4);
          min-width: 0;
        }

        .gda-slider-track {
          animation: gdaContinuousScroll 32s linear infinite;
        }

        .gda-slider:hover .gda-slider-track,
        .gda-slider:focus-within .gda-slider-track {
          animation-play-state: paused;
        }

        @keyframes gdaContinuousScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 10px));
          }
        }

        @media (max-width: 1023px) {
          .gda-slide {
            width: calc((100vw - 80px) / 2);
          }
        }

        @media (max-width: 639px) {
          .gda-slide {
            width: calc(100vw - 60px);
          }

          .gda-slider-track {
            animation-duration: 40s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gda-slider-track {
            animation: none;
          }

          .gda-slider {
            overflow-x: auto;
          }
        }
      `}</style>
    </section>
  );
}

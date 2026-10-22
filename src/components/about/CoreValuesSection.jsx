
import React from "react";
import {
  Scale,
  HandHeart,
  GraduationCap,
  ShieldCheck,
  HeartHandshake,
  Sprout,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    label: "What We Believe",

    heading1: "Our Core",
    heading2: "Values",

    description:
      "Our values guide every initiative we undertake. We believe in equal opportunities, quality education, empowerment and sustainable change that helps individuals and communities build a better future.",

    button: "Discover Our Purpose",

    values: [
      "Equal Opportunity",
      "Empowerment",
      "Quality Education",
      "Transparency",
      "Social Responsibility",
      "Sustainable Impact",
    ],
  },

  mr: {
    label: "आमचा विश्वास",

    heading1: "आमची मूलभूत",
    heading2: "मूल्ये",

    description:
      "आमची मूल्ये प्रत्येक उपक्रमाला दिशा देतात. समान संधी, दर्जेदार शिक्षण, सक्षमीकरण आणि शाश्वत परिवर्तन यांवर आमचा विश्वास आहे. या मूल्यांच्या आधारे व्यक्ती आणि समुदायांना अधिक चांगले भविष्य घडवण्यासाठी सहाय्य करण्याचा आम्ही प्रयत्न करतो.",

    button: "आमचे उद्दिष्ट जाणून घ्या",

    values: [
      "समान संधी",
      "सक्षमीकरण",
      "दर्जेदार शिक्षण",
      "पारदर्शकता",
      "सामाजिक जबाबदारी",
      "शाश्वत परिणाम",
    ],
  },
};

// ICON CONFIGURATION
// Icons and layout remain the same for both languages.
const valueStyles = [
  { icon: Scale },
  { icon: HandHeart },
  { icon: GraduationCap },
  { icon: ShieldCheck },
  { icon: HeartHandshake },
  { icon: Sprout },
];

export default function CoreValuesSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="core-values"
      aria-labelledby="core-values-title"
      className="relative overflow-hidden bg-[#FAF8F8] py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-5">
            <span className="mb-5 block text-sm font-bold text-blue-700">
              {t.label}
            </span>

            <h2
              id="core-values-title"
              className="text-3xl font-extrabold leading-tight tracking-tight text-[#252B3B] sm:text-4xl lg:text-5xl"
            >
              {t.heading1}

              <span className="block text-[#061B50]">
                {t.heading2}
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
              {t.description}
            </p>

            {/* CTA BUTTON */}
            <Link
              to="/about"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-orange-600 transition-colors hover:text-orange-700"
            >
              {t.button}

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* RIGHT FLOATING CARDS */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 sm:gap-6">

              {valueStyles.map((value, index) => {
                const Icon = value.icon;

                const offset =
                  index === 1 || index === 4
                    ? "sm:-translate-y-7"
                    : "";

                return (
                  <div
                    key={index}
                    className={`group relative flex min-h-[160px] flex-col items-center justify-center rounded-lg bg-white px-4 py-6 text-center shadow-[0_12px_40px_rgba(6,27,80,0.055)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(6,27,80,0.12)] sm:min-h-[185px] ${offset}`}
                  >
                    {/* ICON */}
                    <div className="mb-5 flex h-14 w-14 items-center justify-center text-green-500 transition-transform duration-500 group-hover:scale-110">
                      <Icon
                        className="h-12 w-12"
                        strokeWidth={1.35}
                      />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-sm font-bold leading-snug text-[#252B3B] sm:text-lg">
                      {t.values[index]}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

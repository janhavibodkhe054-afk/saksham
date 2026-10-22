
import React, { useEffect, useRef, useState } from "react";
import {
  UsersRound,
  CalendarDays,
  GraduationCap,
  MapPin,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    sectionLabel: "Our Impact in Numbers",

    stats: [
      {
        value: 500,
        suffix: "+",
        label: "Youth Mobilized & Enrolled",
        numeric: true,
      },
      {
        value: 3,
        suffix: "",
        label: "Years of CSR Project Implementation Experience",
        numeric: true,
      },
      {
        value: "Multiple",
        label: "Healthcare & Vocational Training Areas",
        numeric: false,
      },
      {
        value: "Pune & PCMC",
        label: "Community Outreach",
        numeric: false,
      },
    ],
  },

  mr: {
    sectionLabel: "आमच्या कार्याचा आढावा",

    stats: [
      {
        value: 500,
        suffix: "+",
        label: "संपर्क साधलेले व नोंदणी झालेले युवक",
        numeric: true,
      },
      {
        value: 3,
        suffix: "",
        label: "CSR प्रकल्प अंमलबजावणीचा वर्षांचा अनुभव",
        numeric: true,
      },
      {
        value: "विविध",
        label: "आरोग्यसेवा व व्यावसायिक प्रशिक्षण क्षेत्रे",
        numeric: false,
      },
      {
        value: "पुणे व पिंपरी-चिंचवड",
        label: "समुदाय संपर्क कार्यक्षेत्र",
        numeric: false,
      },
    ],
  },
};

// ICON CONFIGURATION
const impactIcons = [
  UsersRound,
  CalendarDays,
  GraduationCap,
  MapPin,
];

// CONVERT ENGLISH NUMERALS TO MARATHI
const formatNumber = (number, language) => {
  const value = String(number);

  if (language !== "mr") {
    return value;
  }

  return value.replace(/[0-9]/g, (digit) =>
    "०१२३४५६७८९"[Number(digit)]
  );
};

// ANIMATED NUMBER COMPONENT
function AnimatedNumber({
  value,
  suffix = "",
  start,
  language,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      setCount(value);
      return;
    }

    let animationFrame;
    let startTime;

    const duration = 1500;

    const animate = (timestamp) => {
      if (startTime === undefined) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const ease = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(value * ease));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [start, value]);

  return (
    <>
      {formatNumber(count, language)}
      {suffix}
    </>
  );
}

export default function ImpactNumbersSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // INTERSECTION OBSERVER
  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

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
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="impact-numbers"
      aria-label={t.sectionLabel}
      className="relative isolate overflow-hidden bg-[#061B50] py-16 sm:py-20 lg:py-20"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1920&q=85"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* DARK NAVY OVERLAY */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[#061B50]/85"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* IMPACT NUMBERS GRID */}
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-y-0">

          {t.stats.map((stat, index) => {
            const Icon = impactIcons[index];

            return (
              <div
                key={index}
                className={`flex flex-col items-center px-3 text-center sm:px-5 lg:px-7 ${
                  index !== 3
                    ? "lg:border-r lg:border-white/25"
                    : ""
                } ${
                  index % 2 === 0
                    ? "border-r border-white/20 lg:border-r"
                    : "border-r-0"
                }`}
              >

                {/* ICON */}
                <Icon
                  className="mb-4 h-7 w-7 text-orange-300"
                  strokeWidth={1.6}
                />

                {/* NUMBER / VALUE */}
                <p
                  className={`font-extrabold leading-tight tracking-tight text-white ${
                    stat.numeric
                      ? "text-4xl sm:text-5xl lg:text-[54px]"
                      : "text-xl sm:text-2xl lg:text-[27px]"
                  }`}
                >
                  {stat.numeric ? (
                    <AnimatedNumber
                      value={stat.value}
                      suffix={stat.suffix}
                      start={visible}
                      language={language}
                    />
                  ) : (
                    stat.value
                  )}
                </p>

                {/* LABEL */}
                <p className="mt-3 max-w-[230px] text-xs font-medium leading-6 text-white/85 sm:text-sm">
                  {stat.label}
                </p>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

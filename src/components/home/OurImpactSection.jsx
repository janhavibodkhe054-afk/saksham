
import React, { useEffect, useRef, useState } from "react";
import {
  Users,
  Handshake,
  Layers3,
  MapPin,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    sectionLabel: "Saksham Foundation Impact Statistics",

    stats: [
      {
        value: 500,
        suffix: "+",
        label: "Youth Mobilized & Enrolled",
      },
      {
        value: 3,
        suffix: " Years",
        label: "CSR Project Experience",
      },
      {
        text: "Multiple",
        label: "Industry Training Areas",
      },
      {
        text: "Pune & PCMC",
        label: "Community Outreach",
      },
    ],
  },

  mr: {
    sectionLabel: "सक्षम फाउंडेशनच्या कार्याची आकडेवारी",

    stats: [
      {
        value: 500,
        suffix: "+",
        label: "युवकांचे संपर्क व प्रशिक्षणासाठी नामांकन",
      },
      {
        value: 3,
        suffix: " वर्षे",
        label: "सीएसआर प्रकल्पांचा अनुभव",
      },
      {
        text: "विविध",
        label: "उद्योगाभिमुख प्रशिक्षण क्षेत्रे",
      },
      {
        text: "पुणे व पिंपरी-चिंचवड",
        label: "समुदाय संपर्क व जनजागृती",
      },
    ],
  },
};

// DESIGN CONFIGURATION
const statStyles = [
  {
    icon: Users,
    accent: "#FB923C",
    glow: "rgba(251,146,60,0.13)",
  },
  {
    icon: Handshake,
    accent: "#4ADE80",
    glow: "rgba(74,222,128,0.12)",
  },
  {
    icon: Layers3,
    accent: "#93C5FD",
    glow: "rgba(147,197,253,0.13)",
  },
  {
    icon: MapPin,
    accent: "#FBBF24",
    glow: "rgba(251,191,36,0.12)",
  },
];

// ANIMATED COUNT-UP
function CountUp({
  value,
  suffix = "",
  active,
  language,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

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

    const duration = 1700;

    const animate = (time) => {
      if (startTime === undefined) {
        startTime = time;
      }

      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.round(eased * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [active, value]);

  // Display Marathi numerals when Marathi is selected
  const formattedCount =
    language === "mr"
      ? new Intl.NumberFormat("mr-IN", {
          useGrouping: false,
        }).format(count)
      : count;

  return (
    <span>
      {formattedCount}
      {suffix}
    </span>
  );
}

export default function OurImpactStats() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const { language } = useLanguage();
  const t = translations[language] || translations.en;

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
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="our-impact"
      aria-label={t.sectionLabel}
      className="relative isolate overflow-hidden bg-[#07172F] py-10 text-white lg:py-14"
    >

      {/* AMBIENT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="impact-orb absolute -left-24 -top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-[85px]" />

        <div className="impact-orb absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[85px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* STATISTICS GRID */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">

          {t.stats.map((stat, index) => {
            const Icon = statStyles[index].icon;

            const accent = statStyles[index].accent;
            const glow = statStyles[index].glow;

            return (
              <div
                key={index}
                className={`impact-item group relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/25 hover:bg-white/[0.075] sm:px-6 sm:py-7 ${
                  visible ? "impact-visible" : ""
                }`}
                style={{
                  "--impact-accent": accent,
                  "--impact-glow": glow,
                  "--impact-delay": `${index * 130}ms`,
                }}
              >

                {/* ANIMATED GLOW */}
                <div className="impact-card-glow pointer-events-none absolute -right-12 -top-14 h-40 w-40 rounded-full" />

                {/* TOP ACCENT */}
                <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-[var(--impact-accent)] transition-transform duration-500 group-hover:scale-x-100" />

                {/* ICON */}
                <div className="mb-5 flex justify-center md:justify-start">
                  <div className="impact-icon flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] text-[var(--impact-accent)] transition-transform duration-500 group-hover:scale-110">
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.8}
                    />
                  </div>
                </div>

                {/* NUMBER / TEXT */}
                <div className="relative text-center md:text-left">

                  <p
                    className={`font-extrabold leading-none tracking-tight text-white ${
                      index === 3
                        ? "text-lg sm:text-xl lg:text-[23px]"
                        : index === 2
                        ? "text-2xl sm:text-3xl lg:text-4xl"
                        : "text-3xl sm:text-4xl lg:text-5xl"
                    }`}
                  >
                    {typeof stat.value === "number" ? (
                      <CountUp
                        value={stat.value}
                        suffix={stat.suffix}
                        active={visible}
                        language={language}
                      />
                    ) : (
                      stat.text
                    )}
                  </p>

                  {/* STAT LABEL */}
                  <p className="mt-3 min-h-[40px] text-xs font-medium leading-relaxed text-slate-200 sm:text-sm">
                    {stat.label}
                  </p>
                </div>

                {/* BOTTOM ACCENT */}
                <div className="mt-5 flex items-center justify-center gap-2 md:justify-start">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      backgroundColor: accent,
                    }}
                  />

                  <span className="h-px w-8 bg-white/20 transition-all duration-500 group-hover:w-16" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes impactReveal {
          from {
            opacity: 0;
            transform: translateY(28px) scale(0.96);
            filter: blur(4px);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes impactFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes impactOrb {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(25px, -15px);
          }
        }

        .impact-item {
          opacity: 0;
        }

        .impact-item.impact-visible {
          animation: impactReveal 700ms
            cubic-bezier(0.2, 0.8, 0.2, 1)
            var(--impact-delay) both;
        }

        .impact-visible .impact-icon {
          animation: impactFloat 3.5s ease-in-out infinite;
          animation-delay: var(--impact-delay);
        }

        .impact-orb {
          animation: impactOrb 9s ease-in-out infinite;
        }

        .impact-card-glow {
          background: radial-gradient(
            circle,
            var(--impact-glow) 0%,
            transparent 70%
          );

          opacity: 0.5;
          transition: opacity 500ms, transform 500ms;
        }

        .impact-item:hover .impact-card-glow {
          opacity: 1;
          transform: scale(1.35);
        }

        @media (prefers-reduced-motion: reduce) {
          .impact-item {
            opacity: 1 !important;
            animation: none !important;
            filter: none !important;
            transform: none !important;
          }

          .impact-icon,
          .impact-orb {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

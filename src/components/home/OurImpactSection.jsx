
import React, { useEffect, useRef, useState } from "react";

import {
  Users,
  Handshake,
  Layers3,
  MapPin,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ==========================================
// TRANSLATIONS
// ==========================================

const translations = {
  en: {
    sectionLabel: "Saksham Foundation Impact Statistics",

    stats: [
      {
        value: "500+",
        label: "Youth Mobilized & Enrolled",
      },
      {
        value: "3 Years",
        label: "CSR Project Experience",
      },
      {
        value: "Multiple",
        label: "Industry Training Areas",
      },
      {
        value: "Pune & PCMC",
        label: "Community Outreach",
      },
    ],
  },

  mr: {
    sectionLabel: "सक्षम फाउंडेशनच्या कार्याची आकडेवारी",

    stats: [
      {
        value: "५००+",
        label: "युवकांचे संपर्क व प्रशिक्षणासाठी नामांकन",
      },
      {
        value: "३ वर्षे",
        label: "सीएसआर प्रकल्पांचा अनुभव",
      },
      {
        value: "विविध",
        label: "उद्योगाभिमुख प्रशिक्षण क्षेत्रे",
      },
      {
        value: "पुणे व पिंपरी-चिंचवड",
        label: "समुदाय संपर्क व जनजागृती",
      },
    ],
  },
};

// ==========================================
// CARD DESIGN
// ==========================================

const statStyles = [
  {
    icon: Users,
    accent: "#FB923C",
    glow: "rgba(251,146,60,0.18)",
  },
  {
    icon: Handshake,
    accent: "#4ADE80",
    glow: "rgba(74,222,128,0.16)",
  },
  {
    icon: Layers3,
    accent: "#93C5FD",
    glow: "rgba(147,197,253,0.18)",
  },
  {
    icon: MapPin,
    accent: "#FBBF24",
    glow: "rgba(251,191,36,0.16)",
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function OurImpactStats() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const { language } = useLanguage();

  const t = translations[language] || translations.en;

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches ||
      !("IntersectionObserver" in window)
    ) {
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
        threshold: 0.1,
        rootMargin: "0px 0px 40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="our-impact"
      aria-label={t.sectionLabel}
      className="relative isolate overflow-hidden bg-[#07172F] py-12 text-white lg:py-16"
    >
      {/* ================================= */}
      {/* FIXED BACKGROUND IMAGE */}
      {/* ================================= */}

      <div
        aria-hidden="true"
        className="saksham-impact-fixed-bg absolute inset-0 -z-10"
      />

      {/* DARK OVERLAY FOR READABILITY */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[#06152E]/80"
      />

      {/* GRADIENT OVERLAY */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#06152E]/40 via-transparent to-[#06152E]/40"
      />

      {/* ================================= */}
      {/* CONTENT CONTAINER */}
      {/* ================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================================= */}
        {/* 4 CARDS - NO WRAPPING */}
        {/* ================================= */}

        <div className="saksham-impact-scroll flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 md:grid md:grid-cols-4 md:gap-4 md:overflow-visible md:pb-0">

          {t.stats.map((stat, index) => {
            const Icon = statStyles[index].icon;

            const accent = statStyles[index].accent;
            const glow = statStyles[index].glow;

            return (
              <div
                key={index}
                className={`saksham-impact-card group relative min-w-[220px] flex-[0_0_76%] snap-start overflow-hidden rounded-2xl border border-white/20 bg-[#091C38]/70 px-5 py-7 shadow-[0_12px_35px_rgba(0,0,0,0.15)] backdrop-blur-md transition-[border-color,background-color,box-shadow] duration-500 hover:border-white/40 hover:bg-[#102B50]/80 hover:shadow-[0_20px_45px_rgba(0,0,0,0.25)] sm:min-w-[245px] sm:flex-[0_0_45%] sm:px-6 md:min-w-0 md:flex-auto ${
                  visible ? "saksham-impact-visible" : ""
                }`}
                style={{
                  "--impact-accent": accent,
                  "--impact-glow": glow,
                  "--impact-delay": `${index * 120}ms`,
                }}
              >
                {/* COLORED GLOW */}
                <div
                  aria-hidden="true"
                  className="saksham-impact-glow pointer-events-none absolute -right-12 -top-14 h-40 w-40 rounded-full"
                />

                {/* MIRROR SHINE */}
                <span
                  aria-hidden="true"
                  className="saksham-impact-shine pointer-events-none absolute inset-0 z-20"
                />

                {/* TOP ACCENT LINE */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-[var(--impact-accent)] transition-transform duration-500 group-hover:scale-x-100"
                />

                {/* ICON */}
                <div className="relative z-10 mb-5 flex justify-center md:justify-start">
                  <div className="saksham-impact-icon flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[var(--impact-accent)] transition-transform duration-300 group-hover:scale-110">

                    <Icon
                      className="h-6 w-6"
                      strokeWidth={1.8}
                    />

                  </div>
                </div>

                {/* STATIC VALUE - NO COUNT-UP */}
                <div className="relative z-10 text-center md:text-left">

                  <p
                    className={`whitespace-nowrap font-extrabold leading-none tracking-tight text-white ${
                      index === 3
                        ? language === "mr"
                          ? "text-[14px] sm:text-[16px] lg:text-[13px] xl:text-[16px]"
                          : "text-xl lg:text-lg xl:text-[22px]"
                        : index === 2
                        ? "text-3xl lg:text-[30px] xl:text-4xl"
                        : "text-4xl lg:text-4xl xl:text-5xl"
                    }`}
                  >
                    {stat.value}
                  </p>

                  {/* LABEL */}
                  <p className="mt-4 min-h-[40px] text-xs font-medium leading-relaxed text-slate-100 sm:text-sm">
                    {stat.label}
                  </p>

                </div>

                {/* BOTTOM ACCENT */}
                <div className="relative z-10 mt-6 flex items-center justify-center gap-2 md:justify-start">

                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      backgroundColor: accent,
                    }}
                  />

                  <span className="h-px w-8 bg-white/30 transition-all duration-500 group-hover:w-16" />

                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* ================================= */}
      {/* ANIMATION CSS */}
      {/* ================================= */}

      <style>{`
        /* FIXED BACKGROUND PHOTO */

        #our-impact .saksham-impact-fixed-bg {
          background-image: url("/g18.jpeg");
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }

        /* MOBILE: FIXED BACKGROUND FALLBACK */

        @media (max-width: 767px) {
          #our-impact .saksham-impact-fixed-bg {
            background-attachment: scroll;
          }
        }

        /* HORIZONTAL SWIPE */

        #our-impact .saksham-impact-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
        }

        #our-impact
        .saksham-impact-scroll::-webkit-scrollbar {
          display: none;
        }

        /* CARD SCROLL REVEAL */

        @keyframes sakshamImpactReveal {
          from {
            opacity: 0;
            transform: translateY(35px) scale(0.95);
            filter: blur(4px);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        #our-impact .saksham-impact-card {
          opacity: 0;
        }

        #our-impact .saksham-impact-visible {
          animation: sakshamImpactReveal 850ms
            cubic-bezier(0.22, 1, 0.36, 1)
            var(--impact-delay) both;
        }

        /* CARD MIRROR SHINE */

        #our-impact .saksham-impact-shine {
          background: linear-gradient(
            115deg,
            transparent 25%,
            rgba(255,255,255,0.02) 38%,
            rgba(255,255,255,0.23) 50%,
            rgba(255,255,255,0.02) 62%,
            transparent 75%
          );

          transform: translateX(-160%);
          opacity: 0;
        }

        #our-impact .saksham-impact-card:hover
        .saksham-impact-shine {
          animation: sakshamImpactShine 950ms
            ease-out both;
        }

        @keyframes sakshamImpactShine {
          0% {
            opacity: 0;
            transform: translateX(-160%);
          }

          25% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translateX(160%);
          }
        }

        /* CARD GLOW */

        #our-impact .saksham-impact-glow {
          background: radial-gradient(
            circle,
            var(--impact-glow),
            transparent 70%
          );

          opacity: 0.4;

          transition:
            opacity 500ms ease,
            transform 500ms ease;
        }

        #our-impact .saksham-impact-card:hover
        .saksham-impact-glow {
          opacity: 1;
          transform: scale(1.35);
        }

        /* ICON MOTION */

        #our-impact .saksham-impact-icon svg {
          transition: transform 400ms ease;
        }

        #our-impact .saksham-impact-card:hover
        .saksham-impact-icon svg {
          transform: translateY(-3px) rotate(-8deg);
        }

        /* REDUCED MOTION */

        @media (prefers-reduced-motion: reduce) {
          #our-impact .saksham-impact-card {
            opacity: 1 !important;
            animation: none !important;
            transform: none !important;
            filter: none !important;
          }

          #our-impact .saksham-impact-shine {
            animation: none !important;
          }
        }
      `}</style>

    </section>
  );
}

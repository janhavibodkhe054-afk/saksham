
import React, { useEffect, useRef, useState } from "react";
import {
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Phone,
  Gift,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ==========================================
// ENGLISH + MARATHI TRANSLATIONS
// ==========================================

const translations = {
  en: {
    label: "DIWALI DONATION CAMPAIGN",

    title: "Make Someone's",
    highlight: "Diwali Brighter",

    description:
      "This Diwali, join Saksham Foundation's initiative to support underprivileged families with essential grocery kits and spread the joy of giving.",

    campaign: "One Family – One Grocery Kit",

   

    socialLabel: "OUR SOCIAL ACTIVITIES",

    socialTitle: "Supporting Communities Beyond Diwali",

    socialDescription:
      "Along with our Diwali Donation Campaign, Saksham Foundation works towards community welfare through initiatives focused on education, skill development, women empowerment and support for families in need.",

    socialActivities: [
      "Education & Skill Development",
      "Women & Youth Empowerment",
      "Community Welfare Initiatives",
      "Support for Underprivileged Families",
    ],

    amountLabel: "Contribution for One Kit",
    amount: "₹2,000",

    button: "Support This Initiative",
    contact: "For Enquiries",
  },

  mr: {
    label: "दिवाळी दान उत्सव",

    title: "या दिवाळीत उजळूया",
    highlight: "गरजूंचे जीवन!",

    description:
      "या दिवाळीत सक्षम फाउंडेशनच्या 'एक कुटुंब – एक धान्य किट' उपक्रमात सहभागी व्हा. गरजू कुटुंबांना जीवनावश्यक वस्तूंची मदत करून त्यांच्या चेहऱ्यावर आनंद फुलवूया.",

    campaign: "एक कुटुंब – एक धान्य किट",

    

    socialLabel: "आमचे सामाजिक उपक्रम",

    socialTitle: "दिवाळीपुरतेच नाही, समाजासाठी कायम!",

    socialDescription:
      "दिवाळी दान उत्सवासोबतच सक्षम फाउंडेशन शिक्षण, कौशल्य विकास, महिला सक्षमीकरण आणि गरजू कुटुंबांच्या मदतीसाठी विविध सामाजिक उपक्रम राबविण्याच्या दिशेने कार्यरत आहे.",

    socialActivities: [
      "शिक्षण व कौशल्य विकास",
      "महिला व युवक सक्षमीकरण",
      "समाजकल्याण उपक्रम",
      "गरजू कुटुंबांना मदत",
    ],

    amountLabel: "एका किटसाठी योगदान",
    amount: "₹२,०००",

    button: "या उपक्रमात सहभागी व्हा",
    contact: "अधिक माहितीसाठी",
  },
};

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function DiwaliDonationSection() {
  const { language } = useLanguage();

  const t = translations[language] || translations.en;

  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);

  // ========================================
  // SCROLL REVEAL ANIMATION
  // ========================================

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
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // ========================================
  // WHATSAPP MESSAGE
  // ========================================

  const whatsappMessage =
    language === "mr"
      ? "नमस्कार, मला सक्षम फाउंडेशनच्या दिवाळी दान उत्सवातील 'एक कुटुंब – एक धान्य किट' उपक्रमात सहभागी व्हायचे आहे. कृपया अधिक माहिती द्या."
      : "Hello, I would like to support Saksham Foundation's Diwali Donation Campaign – One Family, One Grocery Kit. Please share more information.";

  const whatsappUrl =
    `https://wa.me/918830223458?text=${encodeURIComponent(
      whatsappMessage
    )}`;

  return (
    <section
      id="diwali-donation"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#FFF9F0] py-14 sm:py-16 lg:py-20"
    >
      {/* ====================================
          BACKGROUND DECORATION
      ==================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-orange-200/25 blur-3xl" />

        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-yellow-200/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-14">

          {/* ====================================
              LEFT SIDE - FULL POSTER
          ==================================== */}

          <div
            className={`transition-all duration-1000 ease-out ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="group relative overflow-hidden rounded-2xl border border-orange-100 bg-white p-2 shadow-[0_15px_45px_rgba(6,27,80,0.09)] sm:p-3">

              <img
                src="/diwali.jpeg"
                alt="Saksham Foundation Diwali Donation Campaign – Ek Kutumb Ek Dhanya Kit"
                loading="lazy"
                decoding="async"
                className="block h-auto w-full object-contain"
              />

            </div>
          </div>

          {/* ====================================
              RIGHT SIDE - CONTENT
          ==================================== */}

          <div
            className={`transition-all delay-150 duration-1000 ease-out ${
              visible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {/* SECTION LABEL */}

            <div className="mb-5 flex items-center gap-3">

              <span className="h-0.5 w-8 bg-orange-500" />

              <span className="text-xs font-bold uppercase tracking-[0.14em] text-orange-600">
                {t.label}
              </span>

            </div>

            {/* HEADING */}

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl lg:text-[42px]">

              {t.title}

              <span className="mt-1 block text-orange-600">
                {t.highlight}
              </span>

            </h2>

            {/* DESCRIPTION */}

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              {t.description}
            </p>

           
           
            

            {/* ====================================
                SOCIAL ACTIVITIES
            ==================================== */}

            <div className="mt-8 rounded-xl border border-orange-100 bg-white/85 p-5 shadow-[0_8px_25px_rgba(6,27,80,0.04)] sm:p-6">

              {/* LABEL */}

              <div className="mb-3 flex items-center gap-2">

                <HeartHandshake className="h-5 w-5 text-orange-600" />

                <span className="text-xs font-bold uppercase tracking-[0.12em] text-orange-600">
                  {t.socialLabel}
                </span>

              </div>

              {/* TITLE */}

              <h3 className="text-lg font-bold leading-snug text-[#061B50]">
                {t.socialTitle}
              </h3>

              {/* DESCRIPTION */}

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {t.socialDescription}
              </p>

              {/* SOCIAL ACTIVITY LIST */}

              <div className="mt-5 grid gap-x-4 gap-y-3 sm:grid-cols-2">

                {t.socialActivities.map(
                  (activity, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />

                      <span className="text-xs font-medium leading-5 text-slate-700">
                        {activity}
                      </span>

                    </div>
                  )
                )}

              </div>

            </div>

            {/* ====================================
                DONATION AMOUNT
            ==================================== */}

            <div className="mt-8 flex items-center gap-4 border-t border-orange-200/70 pt-6">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <HeartHandshake className="h-6 w-6" />
              </div>

              <div>

                <p className="text-xs font-medium text-slate-500">
                  {t.amountLabel}
                </p>

                <p className="mt-1 text-2xl font-extrabold text-[#061B50]">
                  {t.amount}
                </p>

              </div>

            </div>

            {/* ====================================
                CALL TO ACTION
            ==================================== */}

            <div className="mt-7 flex flex-wrap items-center gap-5">

              {/* WHATSAPP BUTTON */}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-orange-600 px-6 py-3 text-sm font-bold text-white shadow-[0_10px_25px_rgba(234,88,12,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-[0_15px_30px_rgba(234,88,12,0.22)]"
              >
                <HeartHandshake className="h-5 w-5" />

                <span>{t.button}</span>

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

              </a>

              {/* CONTACT NUMBER */}

              <a
                href="tel:+918830223458"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#061B50] transition-colors hover:text-orange-600"
              >
                <Phone className="h-4 w-4 text-orange-600" />

                +91 88302 23458
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* ====================================
          STYLES & ANIMATIONS
      ==================================== */}

      <style>{`

        /* IMAGE - NEVER CROP */

        #diwali-donation img {
          max-width: 100%;
          height: auto;
          object-fit: contain;
        }

        /* BACKGROUND ANIMATIONS */

        @keyframes diwaliBgFloat {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(20px, -15px);
          }
        }

        #diwali-donation .blur-3xl {
          animation: diwaliBgFloat 12s
            ease-in-out infinite;
        }

        /* BUTTON HOVER */

        #diwali-donation a {
          transition:
            color 300ms ease,
            background-color 300ms ease,
            transform 300ms ease,
            box-shadow 300ms ease;
        }

        /* REDUCED MOTION */

        @media (prefers-reduced-motion: reduce) {
          #diwali-donation .transition-all {
            transition: none !important;
          }

          #diwali-donation .blur-3xl {
            animation: none !important;
          }
        }

      `}</style>
    </section>
  );
}

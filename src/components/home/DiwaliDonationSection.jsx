
import React, { useEffect, useRef, useState } from "react";
import {
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Gift,
  Users,
  HandHeart,
  GraduationCap,
  Stethoscope,
  BriefcaseBusiness,
  Heart,
  Sparkles,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ==========================================
// TRANSLATIONS
// ==========================================

const translations = {
  en: {
    label: "SAKSHAM FOUNDATION | SOCIAL ACTIVITIES",

    title: "Make Someone's",
    highlight: "Diwali Brighter!",

    description:
      "This Diwali, Saksham Foundation is supporting families affected by drought and financial difficulties in Maharashtra through essential grocery kit distribution.",

    campaign: "One Family – One Grocery Kit",

    objectiveLabel: "CAMPAIGN OBJECTIVES",

    objectives: [
      "Provide essential groceries to needy families",
      "Support economically weaker communities",
      "Encourage kindness and community participation",
    ],

    socialLabel: "OUR SOCIAL ACTIVITIES",

    socialTitle: "Empowering Lives Through Social Development",

    socialActivities: [
      "Food & Grocery Kit Distribution",
      "Educational Support for Children",
      "Health Awareness Activities",
      "Women Empowerment & Skill Development",
      "Youth Development & Employment Support",
      "Community Welfare Programmes",
    ],

    amountLabel: "Estimated Cost Per Grocery Kit",
    amount: "₹2,000",

    appealLabel: "OUR APPEAL",

    appeal:
      "One Family – One Grocery Kit. One Helping Hand – Many Happy Faces!",

    appealDescription:
      "Join us in bringing happiness to families in need this Diwali.",

    button: "Support This Initiative",

    supportNote:
      "Your contribution can help provide essential groceries to a family in need.",
  },

  mr: {
    label: "सक्षम फाउंडेशन | सामाजिक उपक्रम",

    title: "या दिवाळीत उजळूया",
    highlight: "गरजूंचे जीवन!",

    description:
      "महाराष्ट्रातील दुष्काळ व आर्थिक अडचणींचा सामना करणाऱ्या गरजू कुटुंबांना धान्य किटच्या माध्यमातून मदत करण्यासाठी सक्षम फाउंडेशनचा दिवाळी दान उत्सव उपक्रम.",

    campaign: "एक कुटुंब – एक धान्य किट",

    objectiveLabel: "उपक्रमाची उद्दिष्टे",

    objectives: [
      "गरजू कुटुंबांना जीवनावश्यक धान्य वाटप",
      "आर्थिकदृष्ट्या दुर्बल घटकांना मदत",
      "माणुसकी आणि सामाजिक सहभाग वाढवणे",
    ],

    socialLabel: "आमचे सामाजिक उपक्रम",

    socialTitle: "सामाजिक विकासातून जीवन सक्षमीकरण",

    socialActivities: [
      "अन्नधान्य व किराणा किट वाटप",
      "गरजू मुलांना शैक्षणिक सहाय्य",
      "आरोग्य जनजागृती उपक्रम",
      "महिला सक्षमीकरण व कौशल्य विकास",
      "युवक विकास व रोजगार सहाय्य",
      "समाजकल्याण व जनजागृती कार्यक्रम",
    ],

    amountLabel: "एका धान्य किटचा अंदाजित खर्च",
    amount: "₹२,०००",

    appealLabel: "आमचे आवाहन",

    appeal:
      "एक कुटुंब – एक धान्य किट, एक मदतीचा हात – अनेक चेहऱ्यांवर आनंद!",

    appealDescription:
      "या दिवाळीत गरजू कुटुंबांच्या चेहऱ्यावर आनंद फुलवण्यासाठी एकत्र येऊया.",

    button: "या उपक्रमात सहभागी व्हा",

    supportNote:
      "तुमच्या योगदानातून गरजू कुटुंबांना जीवनावश्यक धान्याची मदत मिळू शकते.",
  },
};

// ==========================================
// ACTIVITY ICONS
// ==========================================

const activityIcons = [
  Gift,
  GraduationCap,
  Stethoscope,
  HandHeart,
  BriefcaseBusiness,
  Users,
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function DiwaliDonationSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // SCROLL REVEAL

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
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
      { threshold: 0.08 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // WHATSAPP

  const whatsappMessage =
    language === "mr"
      ? "नमस्कार, मला सक्षम फाउंडेशनच्या 'एक कुटुंब – एक धान्य किट' या दिवाळी दान उत्सव उपक्रमात सहभागी व्हायचे आहे. कृपया अधिक माहिती द्या."
      : "Hello, I would like to support Saksham Foundation's One Family – One Grocery Kit Diwali Donation Campaign. Please share more information.";

  const whatsappUrl = `https://wa.me/918830223458?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="diwali-donation"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#FFF9F0] py-12 sm:py-16 lg:py-20"
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="diwali-bg-circle absolute -left-32 -top-32 h-80 w-80 rounded-full bg-orange-200/25 blur-3xl" />
        <div className="diwali-bg-circle absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-yellow-200/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">

          {/* LEFT SIDE */}

          <div
            className={`diwali-reveal space-y-5 transition-all duration-1000 ease-out ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            {/* FULL POSTER */}

            <div className="overflow-hidden rounded-2xl border border-orange-100 bg-white p-2 shadow-[0_15px_45px_rgba(6,27,80,0.09)] sm:p-3">
              <img
                src="/diwali.jpeg"
                alt="Saksham Foundation Diwali Donation Campaign"
                loading="lazy"
                decoding="async"
                className="block h-auto w-full object-contain"
              />
            </div>

            {/* DONATION AMOUNT */}

            <div className="rounded-2xl border border-orange-200 bg-white p-5 shadow-[0_10px_35px_rgba(6,27,80,0.05)] sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <PackageCheck className="h-7 w-7" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500 sm:text-sm">
                    {t.amountLabel}
                  </p>
                  <p className="mt-1 text-3xl font-extrabold text-[#061B50]">
                    {t.amount}
                  </p>
                </div>
              </div>

              <p className="mt-4 border-t border-orange-100 pt-3 text-xs leading-6 text-slate-600">
                {t.supportNote}
              </p>
            </div>

            {/* APPEAL */}

            <div className="relative overflow-hidden rounded-2xl bg-[#061B50] p-6 text-white">
              <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-orange-500/15 blur-2xl" />

              <div className="relative z-10">
                <div className="mb-3 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-orange-400" />
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-orange-300">
                    {t.appealLabel}
                  </span>
                </div>

                <h3 className="text-lg font-bold leading-8">
                  {t.appeal}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/75">
                  {t.appealDescription}
                </p>

                {/* WHATSAPP CTA */}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-orange-600 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700"
                >
                  <HeartHandshake className="h-5 w-5" />
                  <span>{t.button}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div
            className={`diwali-reveal transition-all delay-150 duration-1000 ease-out ${
              visible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {/* LABEL */}

            <div className="mb-4 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-orange-500" />
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-orange-600">
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

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              {t.description}
            </p>

            {/* CAMPAIGN */}

            <div className="mt-5 inline-flex items-center gap-3 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3">
              <Gift className="h-5 w-5 shrink-0 text-orange-600" />
              <span className="text-sm font-bold text-[#061B50]">
                {t.campaign}
              </span>
            </div>

            {/* OBJECTIVES */}

            <div className="mt-7">
              <div className="mb-4 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-orange-600" />
                <h3 className="text-xs font-extrabold uppercase tracking-[0.1em] text-[#061B50]">
                  {t.objectiveLabel}
                </h3>
              </div>

              <div className="space-y-3">
                {t.objectives.map((objective, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-700" />
                    <span className="text-sm leading-6 text-slate-700">
                      {objective}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* SOCIAL ACTIVITIES */}

            <div className="mt-7 rounded-2xl border border-orange-100 bg-white p-5 shadow-[0_10px_35px_rgba(6,27,80,0.05)] sm:p-6">
              <div className="mb-3 flex items-center gap-2">
                <HeartHandshake className="h-5 w-5 text-orange-600" />
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-orange-600">
                  {t.socialLabel}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-[#061B50]">
                {t.socialTitle}
              </h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {t.socialActivities.map((activity, index) => {
                  const Icon = activityIcons[index];

                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-lg bg-[#FAFBFD] p-3 transition-colors duration-300 hover:bg-orange-50"
                    >
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
                      <span className="text-xs font-medium leading-5 text-slate-700">
                        {activity}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* STYLES */}

      <style>{`
        #diwali-donation img {
          max-width: 100%;
          height: auto;
          object-fit: contain;
        }

        @keyframes diwaliBgFloat {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -15px);
          }
        }

        #diwali-donation .diwali-bg-circle {
          animation: diwaliBgFloat 12s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          #diwali-donation .diwali-reveal {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }

          #diwali-donation .diwali-bg-circle {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

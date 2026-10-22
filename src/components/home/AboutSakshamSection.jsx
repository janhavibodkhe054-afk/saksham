
import React from "react";
import {
  Sparkles,
  Users,
  HeartPulse,
  Laptop,
  Briefcase,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

const translations = {
  en: {
    badge: "WHO WE ARE",

    heading1: "Empowering Communities Through",
    heading2: "Education & Skills",

    description1:
      "Saksham Foundation is a Pune-based non-profit organization dedicated to empowering underprivileged youth and women through skill development, vocational education, healthcare training and sustainable livelihood opportunities.",

    description2:
      "Our foundation works to bridge the gap between education and employment by providing industry-relevant training, practical experience, career guidance and placement assistance.",

    quote:
      "We believe that every individual deserves an opportunity to learn, grow and become financially independent, regardless of their social or economic background.",

    button: "Discover Our Story",

    focusHeading: "Our Focus Areas",

    focusDescription:
      "Core pillars driving our social impact in Pune and beyond.",

    focusAreas: [
      "Skill Development & Vocational Training",
      "Women & Youth Empowerment",
      "Healthcare & Paramedical Training",
      "Digital Education & Computer Literacy",
      "Employment & Livelihood Support",
    ],

    location: "Based in Pune, Maharashtra",
    impact: "Impact Driven",
  },

  mr: {
    badge: "आमची ओळख",

    heading1: "शिक्षण आणि कौशल्यांच्या माध्यमातून",
    heading2: "समाजाचे सक्षमीकरण",

    description1:
      "सक्षम फाउंडेशन ही पुण्यातील एक ना-नफा संस्था आहे. कौशल्य विकास, व्यावसायिक शिक्षण, आरोग्यसेवा प्रशिक्षण आणि शाश्वत रोजगाराच्या संधींद्वारे वंचित युवक व महिलांचे सक्षमीकरण करण्यासाठी संस्था कार्यरत आहे.",

    description2:
      "उद्योगांच्या गरजांनुसार प्रशिक्षण, प्रत्यक्ष कामाचा अनुभव, करिअर मार्गदर्शन आणि रोजगारासाठी सहाय्य उपलब्ध करून देत शिक्षण आणि रोजगार यांमधील दरी कमी करण्यासाठी आमची संस्था प्रयत्नशील आहे.",

    quote:
      "आमचा विश्वास आहे की सामाजिक किंवा आर्थिक परिस्थिती कोणतीही असो, प्रत्येक व्यक्तीला शिकण्याची, प्रगती करण्याची आणि आर्थिकदृष्ट्या स्वावलंबी होण्याची संधी मिळाली पाहिजे.",

    button: "आमचा प्रवास जाणून घ्या",

    focusHeading: "आमची प्रमुख कार्यक्षेत्रे",

    focusDescription:
      "पुणे आणि परिसरातील सामाजिक परिवर्तनासाठी आमची प्रमुख कार्यक्षेत्रे.",

    focusAreas: [
      "कौशल्य विकास व व्यावसायिक प्रशिक्षण",
      "महिला व युवक सक्षमीकरण",
      "आरोग्यसेवा व पॅरामेडिकल प्रशिक्षण",
      "डिजिटल शिक्षण व संगणक साक्षरता",
      "रोजगार व उपजीविकेसाठी सहाय्य",
    ],

    location: "पुणे, महाराष्ट्र येथे कार्यरत",
    impact: "सामाजिक परिवर्तनासाठी कटिबद्ध",
  },
};

const focusAreaStyles = [
  {
    icon: Sparkles,
    color: "bg-orange-50 text-orange-600 border-orange-200",
  },
  {
    icon: Users,
    color: "bg-blue-50 text-blue-900 border-blue-200",
  },
  {
    icon: HeartPulse,
    color: "bg-green-50 text-green-700 border-green-200",
  },
  {
    icon: Laptop,
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    icon: Briefcase,
    color: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
];

export default function AboutSakshamSection() {
  const { language } = useLanguage();

  const t = translations[language] || translations.en;

  return (
    <section
      id="about-saksham"
      className="relative overflow-hidden border-y border-slate-200/60 bg-slate-50 py-20 lg:py-28"
    >
      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* SECTION BADGE */}
        <div className="mb-4 text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-800 sm:text-sm">
            <ShieldCheck className="h-4 w-4 text-orange-600" />
            {t.badge}
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* LEFT SIDE */}
          <div className="space-y-6 text-left lg:col-span-6">

            {/* HEADING */}
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {t.heading1}{" "}
              <span className="text-blue-900">
                {t.heading2}
              </span>
            </h2>

            {/* DESCRIPTION 1 */}
            <p className="text-base font-normal leading-relaxed text-slate-700 sm:text-lg">
              {t.description1}
            </p>

            {/* DESCRIPTION 2 */}
            <p className="text-base leading-relaxed text-slate-600">
              {t.description2}
            </p>

            {/* QUOTE BOX */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <p className="text-sm font-medium italic leading-relaxed text-slate-800 sm:text-base">
                "{t.quote}"
              </p>
            </div>

            {/* CTA BUTTON */}
            <div className="pt-2">
              <a
                href="/about"
                className="inline-flex items-center justify-center rounded-xl bg-blue-900 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-900/20 transition-all hover:-translate-y-0.5 hover:bg-blue-800"
              >
                {t.button}

                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">

              {/* FOCUS HEADING */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {t.focusHeading}
                </h3>

                <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
                  {t.focusDescription}
                </p>
              </div>

              {/* FOCUS AREA CARDS */}
              <div className="space-y-3.5">
                {focusAreaStyles.map((area, index) => {
                  const Icon = area.icon;

                  return (
                    <div
                      key={index}
                      className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm transition-all hover:shadow-md"
                    >
                      {/* ICON */}
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-transform group-hover:scale-105 ${area.color}`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      {/* TITLE */}
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-semibold text-slate-800 transition-colors group-hover:text-blue-900 sm:text-base">
                          {t.focusAreas[index]}
                        </h4>
                      </div>

                      {/* CHECK ICON */}
                      <CheckCircle className="h-5 w-5 shrink-0 text-green-600 opacity-80" />
                    </div>
                  );
                })}
              </div>

              {/* BOTTOM INFO */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
                <span>
                  📍 {t.location}
                </span>

                <span className="text-orange-600">
                  {t.impact}
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

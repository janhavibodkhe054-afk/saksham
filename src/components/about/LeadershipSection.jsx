
import React from "react";
import {
  Quote,
  HeartHandshake,
  GraduationCap,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    label: "OUR LEADERSHIP",

    heading1: "People Behind",
    heading2: "the Purpose",

    description:
      "Strong leadership creates meaningful opportunities and drives lasting social impact.",

    message:
      "Our leadership is committed to expanding access to practical education, empowering underserved communities and developing meaningful partnerships that create sustainable livelihood opportunities.",

    directorName: "Mr. Mahesh Sonkamble",
    directorDesignation: "Director — Saksham Foundation",
    photoDesignation: "Director, Saksham Foundation",

    skillDevelopment: "Skill Development",
    communityEmpowerment: "Community Empowerment",

    bottomCaption:
      "Leadership committed to education, empowerment and sustainable livelihoods.",

    photoAlt:
      "Mr. Mahesh Sonkamble, Director of Saksham Foundation",
  },

  mr: {
    label: "आमचे नेतृत्व",

    heading1: "आमच्या ध्येयामागील",
    heading2: "प्रेरणादायी नेतृत्व",

    description:
      "सक्षम नेतृत्वामुळे अर्थपूर्ण संधी निर्माण होतात आणि समाजात दीर्घकालीन सकारात्मक परिवर्तन घडते.",

    message:
      "व्यावहारिक शिक्षणाच्या संधी वाढवणे, वंचित समुदायांचे सक्षमीकरण करणे आणि शाश्वत उपजीविकेच्या संधी निर्माण करणाऱ्या अर्थपूर्ण भागीदाऱ्या विकसित करणे यासाठी आमचे नेतृत्व कटिबद्ध आहे.",

    directorName: "श्री. महेश सोनकांबळे",
    directorDesignation: "संचालक — सक्षम फाउंडेशन",
    photoDesignation: "संचालक, सक्षम फाउंडेशन",

    skillDevelopment: "कौशल्य विकास",
    communityEmpowerment: "समुदाय सक्षमीकरण",

    bottomCaption:
      "शिक्षण, सक्षमीकरण आणि शाश्वत उपजीविकेसाठी कटिबद्ध नेतृत्व.",

    photoAlt:
      "सक्षम फाउंडेशनचे संचालक श्री. महेश सोनकांबळे",
  },
};

export default function LeadershipSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="relative overflow-hidden bg-[#F8FAFC] py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">

            {/* SECTION LABEL */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-orange-500" />

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange-600">
                {t.label}
              </span>
            </div>

            {/* HEADING */}
            <h2
              id="leadership-heading"
              className="text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl lg:text-5xl"
            >
              {t.heading1}

              <span className="block text-orange-600">
                {t.heading2}
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              {t.description}
            </p>

            {/* LEADERSHIP MESSAGE */}
            <div className="relative mt-7 border-l-[3px] border-orange-500 bg-white px-6 py-6 shadow-[0_8px_30px_rgba(6,27,80,0.04)] sm:px-8">

              <Quote className="mb-4 h-8 w-8 text-orange-200" />

              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                {t.message}
              </p>
            </div>

            {/* DIRECTOR IDENTITY */}
            <div className="mt-7 flex items-center gap-4">
              <div className="h-12 w-1 shrink-0 rounded-full bg-green-600" />

              <div>
                <h3 className="text-xl font-extrabold text-[#061B50] sm:text-2xl">
                  {t.directorName}
                </h3>

                <p className="mt-1 text-sm font-semibold text-orange-600">
                  {t.directorDesignation}
                </p>
              </div>
            </div>

            {/* BOTTOM HIGHLIGHTS */}
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">

              <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600">
                <GraduationCap className="h-4 w-4 text-orange-600" />
                {t.skillDevelopment}
              </span>

              <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600">
                <HeartHandshake className="h-4 w-4 text-green-700" />
                {t.communityEmpowerment}
              </span>
            </div>
          </div>

          {/* RIGHT DIRECTOR PHOTO */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[430px]">

              {/* DECORATIVE BORDER */}
              <div className="absolute -right-4 -top-4 h-full w-full rounded-[24px] border-2 border-orange-200" />

              {/* PHOTO */}
              <div className="relative overflow-hidden rounded-[24px] bg-slate-200 shadow-[0_20px_50px_rgba(6,27,80,0.1)]">
                <img
                  src="/images/mahesh-sonkamble.jpg"
                  alt={t.photoAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-[350px] w-full object-cover object-top sm:h-[440px] lg:h-[470px]"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";

                    e.currentTarget.parentElement.classList.add(
                      "min-h-[350px]"
                    );
                  }}
                />

                {/* PHOTO CAPTION */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#061B50]/95 via-[#061B50]/60 to-transparent px-6 pb-6 pt-16">

                  <h3 className="text-lg font-bold text-white">
                    {t.directorName}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-orange-300">
                    {t.photoDesignation}
                  </p>
                </div>
              </div>
            </div>

            {/* BOTTOM CAPTION */}
            <p className="mt-5 text-center text-xs text-slate-500">
              {t.bottomCaption}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
